import asyncio, json, os, re, shutil, tempfile, time, uuid
from datetime import datetime, timedelta
from pathlib import Path
from typing import Optional, List

import asyncpg
from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from jose import JWTError, jwt
import bcrypt as _bcrypt
from fastapi import UploadFile, File
import aiofiles

# ── Config ────────────────────────────────────────────────────────────────────
DB_URL = os.environ.get(
    "DATABASE_URL",
    "postgresql://synset_admin:xWdiVJl7y1eJJhcO6S%2FAqfgz1QvPznGs@synset-postgres:5432/tecto",
)
SECRET_KEY = os.environ.get("SECRET_KEY", "tecto-dev-secret-change-in-prod-2026")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_HOURS = 72
PDF_DIR = Path("/tmp/tecto_pdfs")
PDF_DIR.mkdir(exist_ok=True)
ASSETS_DIR = Path("/app/static/assets")  # inside volume-mounted dir → persists rebuilds
ASSETS_DIR.mkdir(exist_ok=True, parents=True)

app = FastAPI(title="Tecto API", docs_url="/api/docs", redoc_url="/api/redoc")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

pool: Optional[asyncpg.Pool] = None
bearer_scheme = HTTPBearer(auto_error=False)

# ── Auth helpers ──────────────────────────────────────────────────────────────
def hash_password(password: str) -> str:
    return _bcrypt.hashpw(password.encode("utf-8"), _bcrypt.gensalt()).decode("utf-8")

def verify_password(plain: str, hashed: str) -> bool:
    return _bcrypt.checkpw(plain.encode("utf-8"), hashed.encode("utf-8"))

def create_token(data: dict) -> str:
    payload = data.copy()
    payload["exp"] = datetime.utcnow() + timedelta(hours=ACCESS_TOKEN_EXPIRE_HOURS)
    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)

async def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(bearer_scheme)):
    if not credentials:
        raise HTTPException(status_code=401, detail="No autenticado")
    try:
        payload = jwt.decode(credentials.credentials, SECRET_KEY, algorithms=[ALGORITHM])
        user_id: str = payload.get("sub")
        if not user_id:
            raise HTTPException(status_code=401, detail="Token inválido")
    except JWTError:
        raise HTTPException(status_code=401, detail="Token inválido o expirado")
    async with pool.acquire() as conn:
        user = await conn.fetchrow("SELECT * FROM users WHERE id=$1 AND is_active=TRUE", uuid.UUID(user_id))
    if not user:
        raise HTTPException(status_code=401, detail="Usuario no encontrado")
    return dict(user)

# ── Startup / migrations ──────────────────────────────────────────────────────
@app.on_event("startup")
async def startup():
    global pool
    pool = await asyncpg.create_pool(DB_URL)
    async with pool.acquire() as conn:
        # Users table
        await conn.execute("""
            CREATE TABLE IF NOT EXISTS users (
              id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
              email TEXT UNIQUE NOT NULL,
              hashed_password TEXT NOT NULL,
              full_name TEXT,
              company TEXT,
              role TEXT DEFAULT 'user',
              is_active BOOLEAN DEFAULT TRUE,
              created_at TIMESTAMPTZ DEFAULT NOW()
            )
        """)
        # Templates table
        await conn.execute("""
            CREATE TABLE IF NOT EXISTS templates (
              id TEXT PRIMARY KEY,
              name TEXT NOT NULL,
              category TEXT,
              description TEXT,
              icon TEXT,
              color TEXT,
              tex_template TEXT,
              fields JSONB,
              created_at TIMESTAMPTZ DEFAULT NOW()
            )
        """)
        # Documents table
        await conn.execute("""
            CREATE TABLE IF NOT EXISTS documents (
              id TEXT PRIMARY KEY,
              name TEXT NOT NULL DEFAULT 'Untitled',
              template_id TEXT REFERENCES templates(id) ON DELETE SET NULL,
              data JSONB DEFAULT '{}',
              tex TEXT NOT NULL DEFAULT '',
              engine TEXT NOT NULL DEFAULT 'XeLaTeX',
              updated_at TIMESTAMPTZ DEFAULT NOW()
            )
        """)
        await conn.execute("ALTER TABLE documents ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES users(id) ON DELETE SET NULL")
        # Compile runs
        await conn.execute("""
            CREATE TABLE IF NOT EXISTS compile_runs (
              id TEXT PRIMARY KEY,
              document_id TEXT REFERENCES documents(id) ON DELETE CASCADE,
              status TEXT,
              duration_ms INT,
              pdf_size_kb INT,
              log TEXT,
              created_at TIMESTAMPTZ DEFAULT NOW()
            )
        """)
    await seed_templates()

@app.on_event("shutdown")
async def shutdown():
    await pool.close()

# ── Template rendering ────────────────────────────────────────────────────────
def render_template(tex_template: str, data: dict) -> str:
    def replacer(m):
        key = m.group(1).strip()
        val = str(data.get(key, f"[{key}]"))
        for ch, esc in [('\\','\\textbackslash{}'),('{','\\{'),('}','\\}'),
                        ('$','\\$'),('&','\\&'),('%','\\%'),('#','\\#'),
                        ('_','\\_'),('^','\\^{}'),('~','\\textasciitilde{}')]:
            val = val.replace(ch, esc)
        return val
    return re.sub(r'\{\{([^{}]+)\}\}', replacer, tex_template)

# ── Template content ──────────────────────────────────────────────────────────
COTIZACION_TEMPLATE = r"""
\documentclass[12pt]{article}
\usepackage{fontspec}
\usepackage[a4paper,margin=2.5cm]{geometry}
\usepackage{xcolor}
\usepackage{tabularx}
\usepackage{booktabs}
\usepackage{array}
\usepackage{fancyhdr}
\usepackage{microtype}
\usepackage{hyperref}
\hypersetup{hidelinks}

\definecolor{acento}{HTML}{C75B12}
\definecolor{tinta}{HTML}{2E2A26}
\definecolor{suave}{HTML}{6B635B}
\definecolor{borde}{HTML}{E8E4DE}

\pagestyle{fancy}
\fancyhf{}
\renewcommand{\headrulewidth}{0pt}
\fancyhead[L]{\color{acento}\textbf{\large {{empresa_nombre}}}}
\fancyhead[R]{\color{suave}\small Cotizacion \#{{numero_cotizacion}}}
\fancyfoot[C]{\color{suave}\small \thepage}
\fancyfoot[R]{\color{suave}\small {{empresa_email}}}

\begin{document}

% Encabezado
\vspace*{0.5cm}
{\color{acento}\rule{\textwidth}{2pt}}
\vspace{0.4cm}

\begin{minipage}[t]{0.55\textwidth}
  {\fontsize{22}{26}\selectfont\textbf{Cotizacion}}\\[4pt]
  {\color{suave} \#{{numero_cotizacion}} -- {{fecha}}}
\end{minipage}
\hfill
\begin{minipage}[t]{0.4\textwidth}
  \raggedleft
  {\color{acento}{\bfseries {{empresa_nombre}}}}\\
  {\color{suave}\small {{empresa_direccion}}}\\
  {\color{suave}\small {{empresa_email}}}\\
  {\color{suave}\small {{empresa_tel}}}
\end{minipage}

\vspace{1cm}

% Cliente
{\color{suave}\small PARA:}\\[4pt]
{\Large{\bfseries {{cliente_nombre}}}}\\
{\color{suave} {{cliente_empresa}}}\\
{\color{suave}\small {{cliente_email}}}

\vspace{1cm}
{\color{borde}\rule{\textwidth}{0.4pt}}
\vspace{0.6cm}

% Descripcion del proyecto
{\color{suave}\small DESCRIPCION DEL PROYECTO}\\[6pt]
{{descripcion_proyecto}}

\vspace{0.8cm}

% Desglose
{\color{suave}\small DESGLOSE DE SERVICIOS}\\[6pt]
\begin{tabularx}{\textwidth}{Xrr}
  \toprule
  \textbf{Descripcion} & \textbf{Hrs./U} & \textbf{Total} \\
  \midrule
  {{item_1_desc}} & {{item_1_hrs}} & {{moneda}} {{item_1_total}} \\
  {{item_2_desc}} & {{item_2_hrs}} & {{moneda}} {{item_2_total}} \\
  {{item_3_desc}} & {{item_3_hrs}} & {{moneda}} {{item_3_total}} \\
  \midrule
  \multicolumn{2}{r}{\color{suave}Subtotal} & {{moneda}} {{subtotal}} \\
  \multicolumn{2}{r}{\color{suave}ITBIS (18\%)} & {{moneda}} {{itbis}} \\
  \midrule
  \multicolumn{2}{r}{\textbf{\color{acento}Total}} & \textbf{\color{acento}{{moneda}} {{total}}} \\
  \bottomrule
\end{tabularx}

\vspace{0.8cm}
{\color{borde}\rule{\textwidth}{0.4pt}}
\vspace{0.5cm}

% Condiciones
\begin{minipage}[t]{0.48\textwidth}
  {\color{suave}\small CONDICIONES DE PAGO}\\[4pt]
  {{condiciones_pago}}
\end{minipage}
\hfill
\begin{minipage}[t]{0.48\textwidth}
  {\color{suave}\small VALIDEZ DE LA OFERTA}\\[4pt]
  {{validez}}
\end{minipage}

\vspace{1cm}

% Firma
\begin{minipage}[t]{0.4\textwidth}
  \vspace{1.5cm}
  {\color{borde}\rule{0.9\linewidth}{0.4pt}}\\[4pt]
  {\color{suave}\small {{firma_nombre}}}\\
  {\color{suave}\small {{firma_cargo}}}\\
  {\color{acento}\small{\bfseries {{empresa_nombre}}}}
\end{minipage}

\end{document}
"""

COTIZACION_FIELDS = [
    {"key": "empresa_nombre",    "label": "Nombre de la empresa",     "type": "text",     "default": "Synset Solutions"},
    {"key": "empresa_email",     "label": "Email de la empresa",      "type": "text",     "default": "contacto@synsetsolutions.com"},
    {"key": "empresa_tel",       "label": "Telefono",                  "type": "text",     "default": "+1 (809) 000-0000"},
    {"key": "empresa_direccion", "label": "Direccion",                 "type": "text",     "default": "Santo Domingo, RD"},
    {"key": "numero_cotizacion", "label": "Numero de cotizacion",      "type": "text",     "default": "001"},
    {"key": "fecha",             "label": "Fecha",                     "type": "text",     "default": "2026-06-08"},
    {"key": "cliente_nombre",    "label": "Nombre del cliente",        "type": "text",     "default": ""},
    {"key": "cliente_empresa",   "label": "Empresa del cliente",       "type": "text",     "default": ""},
    {"key": "cliente_email",     "label": "Email del cliente",         "type": "text",     "default": ""},
    {"key": "descripcion_proyecto","label":"Descripcion del proyecto",  "type": "textarea", "default": ""},
    {"key": "moneda",            "label": "Moneda",                    "type": "select",   "default": "USD", "options": ["USD", "DOP", "EUR"]},
    {"key": "item_1_desc",       "label": "Item 1 -- Descripcion",     "type": "text",     "default": "Desarrollo Backend"},
    {"key": "item_1_hrs",        "label": "Item 1 -- Horas/Unidades",  "type": "text",     "default": "40h"},
    {"key": "item_1_total",      "label": "Item 1 -- Total",           "type": "text",     "default": "2000.00"},
    {"key": "item_2_desc",       "label": "Item 2 -- Descripcion",     "type": "text",     "default": "Desarrollo Frontend"},
    {"key": "item_2_hrs",        "label": "Item 2 -- Horas/Unidades",  "type": "text",     "default": "30h"},
    {"key": "item_2_total",      "label": "Item 2 -- Total",           "type": "text",     "default": "1500.00"},
    {"key": "item_3_desc",       "label": "Item 3 -- Descripcion",     "type": "text",     "default": "Despliegue y configuracion"},
    {"key": "item_3_hrs",        "label": "Item 3 -- Horas/Unidades",  "type": "text",     "default": "8h"},
    {"key": "item_3_total",      "label": "Item 3 -- Total",           "type": "text",     "default": "400.00"},
    {"key": "subtotal",          "label": "Subtotal",                  "type": "text",     "default": "3900.00"},
    {"key": "itbis",             "label": "ITBIS (18%)",               "type": "text",     "default": "702.00"},
    {"key": "total",             "label": "Total",                     "type": "text",     "default": "4602.00"},
    {"key": "condiciones_pago",  "label": "Condiciones de pago",       "type": "textarea", "default": "50% al inicio, 50% al entregar."},
    {"key": "validez",           "label": "Validez de la oferta",      "type": "text",     "default": "30 dias"},
    {"key": "firma_nombre",      "label": "Nombre en firma",           "type": "text",     "default": ""},
    {"key": "firma_cargo",       "label": "Cargo en firma",            "type": "text",     "default": "CEO / Director"},
]

SRS_TEMPLATE = r"""
\documentclass[12pt]{article}
\usepackage{fontspec}
\usepackage[a4paper,margin=2.5cm]{geometry}
\usepackage{xcolor,fancyhdr,titlesec,enumitem,microtype}
\definecolor{acento}{HTML}{C75B12}
\definecolor{suave}{HTML}{6B635B}
\pagestyle{fancy}\fancyhf{}
\fancyhead[L]{\color{acento}\textbf{SRS -- {{proyecto_nombre}}}}\fancyhead[R]{\color{suave}\small v{{version}}}
\fancyfoot[C]{\color{suave}\small \thepage}
\titleformat{\section}{\large\bfseries\color{acento}}{}{0em}{}[\vspace{-6pt}\rule{\textwidth}{0.4pt}]
\begin{document}
\begin{center}
{\fontsize{24}{28}\selectfont\textbf{Especificacion de Requisitos}}\\[6pt]
{\fontsize{18}{22}\selectfont {{proyecto_nombre}}}\\[10pt]
{\color{suave} Version {{version}} -- {{fecha}} -- {{autor}}}
\end{center}
\vspace{1cm}
\section{Descripcion General}
{{descripcion_general}}
\section{Alcance}
{{alcance}}
\section{Usuarios del Sistema}
{{usuarios}}
\section{Requisitos Funcionales}
{{requisitos_funcionales}}
\section{Requisitos No Funcionales}
{{requisitos_no_funcionales}}
\section{Restricciones}
{{restricciones}}
\end{document}
"""

SRS_FIELDS = [
    {"key": "proyecto_nombre", "label": "Nombre del proyecto", "type": "text", "default": ""},
    {"key": "version", "label": "Version", "type": "text", "default": "1.0"},
    {"key": "fecha", "label": "Fecha", "type": "text", "default": "2026-06-08"},
    {"key": "autor", "label": "Autor", "type": "text", "default": ""},
    {"key": "descripcion_general", "label": "Descripcion general", "type": "textarea", "default": ""},
    {"key": "alcance", "label": "Alcance del sistema", "type": "textarea", "default": ""},
    {"key": "usuarios", "label": "Usuarios del sistema", "type": "textarea", "default": ""},
    {"key": "requisitos_funcionales", "label": "Requisitos funcionales", "type": "textarea", "default": ""},
    {"key": "requisitos_no_funcionales", "label": "Requisitos no funcionales", "type": "textarea", "default": ""},
    {"key": "restricciones", "label": "Restricciones", "type": "textarea", "default": ""},
]

CONTRATO_TEMPLATE = r"""
\documentclass[12pt]{article}
\usepackage{fontspec}
\usepackage[a4paper,margin=3cm]{geometry}
\usepackage{xcolor,fancyhdr,microtype}
\definecolor{acento}{HTML}{C75B12}
\definecolor{suave}{HTML}{6B635B}
\pagestyle{fancy}\fancyhf{}
\fancyhead[C]{\color{suave}\small CONTRATO DE SERVICIOS}\fancyfoot[C]{\color{suave}\small \thepage}
\begin{document}
\begin{center}
{\fontsize{20}{24}\selectfont\textbf{Contrato de Prestacion de Servicios}}\\[10pt]
{\color{suave} {{ciudad}}, {{fecha}}}
\end{center}
\vspace{0.8cm}
\noindent Entre \textbf{ {{proveedor_nombre}} }, RNC/Cedula \textbf{ {{proveedor_rnc}} }, con domicilio en {{proveedor_direccion}} (el \textit{Prestador}), y \textbf{ {{cliente_nombre}} }, RNC/Cedula \textbf{ {{cliente_rnc}} }, con domicilio en {{cliente_direccion}} (el \textit{Cliente}), se celebra el presente contrato sujeto a las siguientes clausulas:

\vspace{0.5cm}
\noindent\textbf{PRIMERA -- Objeto.} {{objeto_contrato}}

\vspace{0.4cm}
\noindent\textbf{SEGUNDA -- Monto y Forma de Pago.} El valor total del contrato es de \textbf{{{moneda}} {{monto_total}}}. {{condiciones_pago}}

\vspace{0.4cm}
\noindent\textbf{TERCERA -- Plazo.} {{plazo_entrega}}

\vspace{0.4cm}
\noindent\textbf{CUARTA -- Confidencialidad.} Ambas partes se comprometen a mantener la mas estricta confidencialidad respecto a la informacion intercambiada.

\vspace{0.4cm}
\noindent\textbf{QUINTA -- Ley Aplicable.} El presente contrato se regira por las leyes de la Republica Dominicana.

\vspace{1.5cm}
\begin{minipage}[t]{0.45\textwidth}
\rule{0.9\linewidth}{0.4pt}\\[4pt]
\textbf{ {{proveedor_nombre}} }\\
{\color{suave}\small Prestador}
\end{minipage}
\hfill
\begin{minipage}[t]{0.45\textwidth}
\rule{0.9\linewidth}{0.4pt}\\[4pt]
\textbf{ {{cliente_nombre}} }\\
{\color{suave}\small Cliente}
\end{minipage}
\end{document}
"""

CONTRATO_FIELDS = [
    {"key": "ciudad", "label": "Ciudad", "type": "text", "default": "Santo Domingo"},
    {"key": "fecha", "label": "Fecha", "type": "text", "default": "2026-06-08"},
    {"key": "proveedor_nombre", "label": "Nombre del prestador", "type": "text", "default": "Synset Solutions"},
    {"key": "proveedor_rnc", "label": "RNC/Cedula del prestador", "type": "text", "default": ""},
    {"key": "proveedor_direccion", "label": "Direccion del prestador", "type": "text", "default": ""},
    {"key": "cliente_nombre", "label": "Nombre del cliente", "type": "text", "default": ""},
    {"key": "cliente_rnc", "label": "RNC/Cedula del cliente", "type": "text", "default": ""},
    {"key": "cliente_direccion", "label": "Direccion del cliente", "type": "text", "default": ""},
    {"key": "objeto_contrato", "label": "Objeto del contrato", "type": "textarea", "default": ""},
    {"key": "moneda", "label": "Moneda", "type": "select", "default": "USD", "options": ["USD", "DOP", "EUR"]},
    {"key": "monto_total", "label": "Monto total", "type": "text", "default": ""},
    {"key": "condiciones_pago", "label": "Condiciones de pago", "type": "textarea", "default": ""},
    {"key": "plazo_entrega", "label": "Plazo de entrega", "type": "text", "default": ""},
]

TEMPLATES_SEED = [
    {"id": "tpl-cotizacion", "name": "Cotizacion", "category": "Comercial",
     "description": "Propuesta economica formal con desglose de servicios, ITBIS y condiciones.",
     "icon": "currency", "color": "#c75b12",
     "tex_template": COTIZACION_TEMPLATE, "fields": COTIZACION_FIELDS},
    {"id": "tpl-srs", "name": "SRS", "category": "Tecnico",
     "description": "Especificacion de Requisitos de Software para proyectos de desarrollo.",
     "icon": "code", "color": "#2563b8",
     "tex_template": SRS_TEMPLATE, "fields": SRS_FIELDS},
    {"id": "tpl-contrato", "name": "Contrato de Servicios", "category": "Legal",
     "description": "Contrato de prestacion de servicios con clausulas de pago y confidencialidad.",
     "icon": "shield", "color": "#1f8a4c",
     "tex_template": CONTRATO_TEMPLATE, "fields": CONTRATO_FIELDS},
]

async def seed_templates():
    async with pool.acquire() as conn:
        for tpl in TEMPLATES_SEED:
            await conn.execute("""
                INSERT INTO templates (id, name, category, description, icon, color, tex_template, fields)
                VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
                ON CONFLICT (id) DO UPDATE SET
                  tex_template=EXCLUDED.tex_template,
                  fields=EXCLUDED.fields,
                  description=EXCLUDED.description
            """, tpl["id"], tpl["name"], tpl["category"], tpl["description"],
                tpl["icon"], tpl["color"],
                tpl["tex_template"], json.dumps(tpl["fields"]))

# ── Auth endpoints ────────────────────────────────────────────────────────────
class RegisterBody(BaseModel):
    email: str
    password: str
    full_name: Optional[str] = None
    company: Optional[str] = None

class LoginBody(BaseModel):
    email: str
    password: str

class UpdateMeBody(BaseModel):
    full_name: Optional[str] = None
    company: Optional[str] = None

class ChangePasswordBody(BaseModel):
    current_password: str
    new_password: str

@app.post("/auth/register")
async def register(body: RegisterBody):
    async with pool.acquire() as conn:
        existing = await conn.fetchrow("SELECT id FROM users WHERE email=$1", body.email.lower())
        if existing:
            raise HTTPException(400, "Este email ya está registrado")
        count = await conn.fetchval("SELECT COUNT(*) FROM users")
        role = "admin" if count == 0 else "user"
        user_id = await conn.fetchval("""
            INSERT INTO users (email, hashed_password, full_name, company, role)
            VALUES ($1, $2, $3, $4, $5) RETURNING id
        """, body.email.lower(), hash_password(body.password),
            body.full_name, body.company, role)
        user = await conn.fetchrow("SELECT id, email, full_name, company, role FROM users WHERE id=$1", user_id)
    user_dict = dict(user)
    user_dict["id"] = str(user_dict["id"])
    token = create_token({"sub": user_dict["id"]})
    return {"access_token": token, "token_type": "bearer", "user": user_dict}

@app.post("/auth/login")
async def login(body: LoginBody):
    async with pool.acquire() as conn:
        user = await conn.fetchrow("SELECT * FROM users WHERE email=$1 AND is_active=TRUE", body.email.lower())
    if not user or not verify_password(body.password, user["hashed_password"]):
        raise HTTPException(401, "Email o contraseña incorrectos")
    user_dict = {k: v for k, v in dict(user).items() if k != "hashed_password"}
    user_dict["id"] = str(user_dict["id"])
    token = create_token({"sub": user_dict["id"]})
    return {"access_token": token, "token_type": "bearer", "user": user_dict}

@app.get("/auth/me")
async def get_me(user=Depends(get_current_user)):
    return {k: v for k, v in user.items() if k not in ("hashed_password",)}

@app.put("/auth/me")
async def update_me(body: UpdateMeBody, user=Depends(get_current_user)):
    async with pool.acquire() as conn:
        if body.full_name is not None:
            await conn.execute("UPDATE users SET full_name=$2 WHERE id=$1", user["id"], body.full_name)
        if body.company is not None:
            await conn.execute("UPDATE users SET company=$2 WHERE id=$1", user["id"], body.company)
    return {"ok": True}

@app.post("/auth/change-password")
async def change_password(body: ChangePasswordBody, user=Depends(get_current_user)):
    async with pool.acquire() as conn:
        row = await conn.fetchrow("SELECT hashed_password FROM users WHERE id=$1", user["id"])
    if not verify_password(body.current_password, row["hashed_password"]):
        raise HTTPException(400, "Contraseña actual incorrecta")
    async with pool.acquire() as conn:
        await conn.execute("UPDATE users SET hashed_password=$2 WHERE id=$1",
                          user["id"], hash_password(body.new_password))
    return {"ok": True}

# ── Compile ───────────────────────────────────────────────────────────────────
class CompileReq(BaseModel):
    id: str
    tex: str
    engine: str = "XeLaTeX"

@app.post("/compile")
async def compile_latex(req: CompileReq, user=Depends(get_current_user)):
    run_id = str(uuid.uuid4())
    workdir = Path(tempfile.mkdtemp(prefix="tecto_"))
    # Copy all assets so \includegraphics and \input can find them
    if ASSETS_DIR.exists():
        for asset in ASSETS_DIR.iterdir():
            if asset.is_file():
                shutil.copy2(asset, workdir / asset.name)

    # Auto-fix pdfLaTeX packages incompatible with Tectonic/XeLaTeX
    tex = req.tex.strip()
    tex = tex.replace(r'\usepackage[utf8]{inputenc}', '')
    tex = tex.replace(r'\usepackage[latin1]{inputenc}', '')
    tex = tex.replace(r'\usepackage[T1]{fontenc}', r'\usepackage{fontspec}')
    tex = tex.replace(r'\usepackage[OT1]{fontenc}', r'\usepackage{fontspec}')
    # microtype: expansion feature not supported in XeLaTeX → disable it
    tex = tex.replace(r'\usepackage{microtype}', r'\usepackage[expansion=false]{microtype}')
    tex = re.sub(r'\\usepackage\[([^\]]*)\]\{microtype\}',
                 lambda m: r'\usepackage[' + m.group(1).replace('expansion=true','expansion=false') + ']{microtype}'
                 if 'expansion' in m.group(1) else r'\usepackage[' + m.group(1) + ',expansion=false]{microtype}',
                 tex)
    # Remove duplicate fontspec if already present
    if tex.count(r'\usepackage{fontspec}') > 1:
        idx = tex.index(r'\usepackage{fontspec}')
        tex = tex[:idx] + tex[idx:].replace(r'\usepackage{fontspec}', '', 1)

    (workdir / "main.tex").write_text(tex, encoding="utf-8")

    cmd = ["tectonic", "--chatter", "minimal", str(workdir / "main.tex")]
    t0 = time.monotonic()
    try:
        proc = await asyncio.create_subprocess_exec(
            *cmd, cwd=workdir,
            stdout=asyncio.subprocess.PIPE, stderr=asyncio.subprocess.STDOUT)
        stdout, _ = await asyncio.wait_for(proc.communicate(), timeout=120)
        log = stdout.decode("utf-8", errors="replace")
        ok = proc.returncode == 0
    except asyncio.TimeoutError:
        log = "Error: compilacion supero el limite de 120 segundos."
        ok = False

    ms = int((time.monotonic() - t0) * 1000)
    pdf_path = workdir / "main.pdf"
    pdf_size = None

    if ok and pdf_path.exists():
        dest = PDF_DIR / f"{req.id}.pdf"
        shutil.copy2(pdf_path, dest)
        pdf_size = dest.stat().st_size // 1024
    else:
        ok = False

    shutil.rmtree(workdir, ignore_errors=True)
    status = "success" if ok else "error"

    async with pool.acquire() as conn:
        await conn.execute("""
            INSERT INTO documents (id, name, tex, engine, user_id, updated_at)
            VALUES ($1, 'draft', $2, $3, $4, NOW())
            ON CONFLICT (id) DO UPDATE SET tex=EXCLUDED.tex, engine=EXCLUDED.engine, updated_at=NOW()
        """, req.id, req.tex, req.engine, user["id"])
        await conn.execute("""
            INSERT INTO compile_runs (id, document_id, status, duration_ms, pdf_size_kb, log, created_at)
            VALUES ($1,$2,$3,$4,$5,$6,NOW())
        """, run_id, req.id, status, ms, pdf_size, log)

    if ok:
        return {"ok": True, "pdf_url": f"/download/{req.id}", "ms": ms, "kb": pdf_size}
    return {"ok": False, "log": log, "ms": ms}

@app.get("/download/{doc_id}")
async def download_pdf(doc_id: str):
    path = PDF_DIR / f"{doc_id}.pdf"
    if not path.exists():
        raise HTTPException(404, "PDF no encontrado")
    return FileResponse(path, media_type="application/pdf",
                        headers={"Content-Disposition": "inline"})

# ── Assets ────────────────────────────────────────────────────────────────────
@app.get("/assets")
async def list_assets(user=Depends(get_current_user)):
    assets = []
    for f in sorted(ASSETS_DIR.iterdir()):
        if f.is_file():
            ext = f.suffix.lower()
            kind = ("imagen" if ext in (".png",".jpg",".jpeg",".gif",".svg",".webp")
                    else "fuente" if ext in (".ttf",".otf",".woff",".woff2")
                    else "pdf" if ext == ".pdf"
                    else "archivo")
            assets.append({"name": f.name, "size": f.stat().st_size, "kind": kind})
    return assets

@app.post("/assets")
async def upload_asset(file: UploadFile = File(...), user=Depends(get_current_user)):
    import unicodedata, re as _re
    # Sanitize: normalize unicode, replace spaces/special chars, keep extension
    name = unicodedata.normalize("NFKD", file.filename).encode("ascii", "ignore").decode()
    name = _re.sub(r"[^\w.\-]", "_", name)   # anything not word/dot/dash → underscore
    name = _re.sub(r"_+", "_", name).strip("_")  # collapse multiple underscores
    dest = ASSETS_DIR / name
    async with aiofiles.open(dest, "wb") as out:
        content = await file.read()
        await out.write(content)
    return {"name": name, "original": file.filename, "size": len(content), "ok": True}

@app.get("/assets/{filename}")
async def serve_asset(filename: str):
    path = ASSETS_DIR / filename
    if not path.exists():
        raise HTTPException(404, "Asset no encontrado")
    return FileResponse(path)

@app.delete("/assets/{filename}")
async def delete_asset(filename: str, user=Depends(get_current_user)):
    path = ASSETS_DIR / filename
    path.unlink(missing_ok=True)
    return {"ok": True}

# ── Templates ─────────────────────────────────────────────────────────────────
class TemplateCreate(BaseModel):
    name: str
    category: Optional[str] = "General"
    description: Optional[str] = ""
    color: Optional[str] = "#1f3a5f"
    tex_template: Optional[str] = ""
    fields: Optional[list] = []

class TemplateUpdate(BaseModel):
    tex_template: Optional[str] = None
    name: Optional[str] = None
    category: Optional[str] = None
    description: Optional[str] = None
    color: Optional[str] = None
    fields: Optional[list] = None

@app.get("/templates")
async def list_templates(user=Depends(get_current_user)):
    async with pool.acquire() as conn:
        rows = await conn.fetch(
            "SELECT id,name,category,description,icon,color FROM templates ORDER BY category,name")
    return [dict(r) for r in rows]

@app.get("/templates/{tpl_id}")
async def get_template(tpl_id: str, user=Depends(get_current_user)):
    async with pool.acquire() as conn:
        row = await conn.fetchrow("SELECT * FROM templates WHERE id=$1", tpl_id)
    if not row:
        raise HTTPException(404)
    d = dict(row)
    d["fields"] = json.loads(d["fields"]) if isinstance(d["fields"], str) else (d["fields"] or [])
    return d

@app.post("/templates")
async def create_template(body: TemplateCreate, user=Depends(get_current_user)):
    tpl_id = "tpl-" + str(uuid.uuid4())[:8]
    async with pool.acquire() as conn:
        await conn.execute("""
            INSERT INTO templates (id, name, category, description, icon, color, tex_template, fields)
            VALUES ($1,$2,$3,$4,'custom',$5,$6,$7)
        """, tpl_id, body.name, body.category, body.description,
            body.color, body.tex_template or "", json.dumps(body.fields or []))
    return {"id": tpl_id, "name": body.name}

@app.put("/templates/{tpl_id}")
async def update_template(tpl_id: str, body: TemplateUpdate, user=Depends(get_current_user)):
    async with pool.acquire() as conn:
        row = await conn.fetchrow("SELECT id FROM templates WHERE id=$1", tpl_id)
        if not row:
            raise HTTPException(404)
        if body.tex_template is not None:
            await conn.execute("UPDATE templates SET tex_template=$2 WHERE id=$1", tpl_id, body.tex_template)
        if body.name is not None:
            await conn.execute("UPDATE templates SET name=$2 WHERE id=$1", tpl_id, body.name)
        if body.category is not None:
            await conn.execute("UPDATE templates SET category=$2 WHERE id=$1", tpl_id, body.category)
        if body.description is not None:
            await conn.execute("UPDATE templates SET description=$2 WHERE id=$1", tpl_id, body.description)
        if body.color is not None:
            await conn.execute("UPDATE templates SET color=$2 WHERE id=$1", tpl_id, body.color)
        if body.fields is not None:
            await conn.execute("UPDATE templates SET fields=$2 WHERE id=$1", tpl_id, json.dumps(body.fields))
    return {"ok": True}

@app.delete("/templates/{tpl_id}")
async def delete_template(tpl_id: str, user=Depends(get_current_user)):
    async with pool.acquire() as conn:
        await conn.execute("DELETE FROM templates WHERE id=$1", tpl_id)
    return {"ok": True}

# ── Documents ─────────────────────────────────────────────────────────────────
class DocFromTemplate(BaseModel):
    template_id: str
    name: str
    data: dict
    engine: str = "XeLaTeX"

class DocUpdate(BaseModel):
    name: Optional[str] = None
    data: Optional[dict] = None
    tex: Optional[str] = None
    engine: Optional[str] = None

@app.get("/docs")
async def list_docs(user=Depends(get_current_user)):
    async with pool.acquire() as conn:
        rows = await conn.fetch(
            "SELECT d.id, d.name, d.engine, d.updated_at, d.data, "
            "t.name as template_name, t.id as template_id, t.category, t.color "
            "FROM documents d LEFT JOIN templates t ON d.template_id=t.id "
            "ORDER BY d.updated_at DESC")
    result = []
    for r in rows:
        d = dict(r)
        if d.get("updated_at"):
            d["updated_at"] = d["updated_at"].isoformat()
        raw = d.get("data") or {}
        data = json.loads(raw) if isinstance(raw, str) else raw
        # Extract client name from data for folder grouping
        client = (data.get("cliente_nombre") or data.get("cliente") or
                  data.get("proyecto_nombre") or data.get("proveedor_nombre") or "")
        d["client_name"] = client.strip()
        d.pop("data", None)
        result.append(d)
    return result

@app.post("/docs")
async def create_doc_from_template(body: DocFromTemplate, user=Depends(get_current_user)):
    doc_id = str(uuid.uuid4())
    async with pool.acquire() as conn:
        tpl = await conn.fetchrow("SELECT * FROM templates WHERE id=$1", body.template_id)
        if not tpl:
            raise HTTPException(404, "Plantilla no encontrada")
        fields = json.loads(tpl["fields"]) if isinstance(tpl["fields"], str) else (tpl["fields"] or [])
        defaults = {f["key"]: f.get("default", "") for f in fields}
        merged = {**defaults, **body.data}
        tex = render_template(tpl["tex_template"], merged)
        await conn.execute("""
            INSERT INTO documents (id, template_id, name, data, tex, engine, user_id, updated_at)
            VALUES ($1,$2,$3,$4,$5,$6,$7,NOW())
        """, doc_id, body.template_id, body.name, json.dumps(merged), tex, body.engine, user["id"])
    return {"id": doc_id, "name": body.name, "tex": tex}

@app.get("/docs/{doc_id}")
async def get_doc(doc_id: str, user=Depends(get_current_user)):
    async with pool.acquire() as conn:
        row = await conn.fetchrow(
            "SELECT d.*, t.name as template_name, t.fields, t.tex_template "
            "FROM documents d LEFT JOIN templates t ON d.template_id=t.id WHERE d.id=$1", doc_id)
    if not row:
        raise HTTPException(404)
    d = dict(row)
    d["data"] = json.loads(d["data"]) if isinstance(d.get("data"), str) else (d.get("data") or {})
    d["fields"] = json.loads(d["fields"]) if isinstance(d.get("fields"), str) else (d.get("fields") or [])
    if d.get("updated_at"):
        d["updated_at"] = d["updated_at"].isoformat()
    return d

@app.put("/docs/{doc_id}")
async def update_doc(doc_id: str, body: DocUpdate, user=Depends(get_current_user)):
    async with pool.acquire() as conn:
        row = await conn.fetchrow("SELECT * FROM documents WHERE id=$1", doc_id)
        if not row:
            raise HTTPException(404)
        if body.data is not None:
            tpl = await conn.fetchrow("SELECT * FROM templates WHERE id=$1", row["template_id"])
            if tpl:
                current = json.loads(row["data"]) if isinstance(row.get("data"), str) else (row.get("data") or {})
                merged = {**current, **body.data}
                rendered = render_template(tpl["tex_template"], merged)
                await conn.execute("UPDATE documents SET data=$2, tex=$3, updated_at=NOW() WHERE id=$1",
                                  doc_id, json.dumps(merged), rendered)
                return {"ok": True, "tex": rendered}
        if body.tex is not None:
            await conn.execute("UPDATE documents SET tex=$2, updated_at=NOW() WHERE id=$1", doc_id, body.tex)
        if body.name is not None:
            await conn.execute("UPDATE documents SET name=$2 WHERE id=$1", doc_id, body.name)
        if body.engine is not None:
            await conn.execute("UPDATE documents SET engine=$2 WHERE id=$1", doc_id, body.engine)
    return {"ok": True}

@app.delete("/docs/{doc_id}")
async def delete_doc(doc_id: str, user=Depends(get_current_user)):
    async with pool.acquire() as conn:
        await conn.execute("DELETE FROM documents WHERE id=$1", doc_id)
    (PDF_DIR / f"{doc_id}.pdf").unlink(missing_ok=True)
    return {"ok": True}

@app.get("/history/{doc_id}")
async def get_history(doc_id: str, user=Depends(get_current_user)):
    async with pool.acquire() as conn:
        rows = await conn.fetch(
            "SELECT id,status,duration_ms,pdf_size_kb,created_at FROM compile_runs "
            "WHERE document_id=$1 ORDER BY created_at DESC LIMIT 50", doc_id)
    return [dict(r) for r in rows]

# ── Health ────────────────────────────────────────────────────────────────────
@app.get("/health")
async def health():
    return {"ok": True}

# Static (must be last)
app.mount("/static", StaticFiles(directory="/app/static"), name="static_files")
app.mount("/", StaticFiles(directory="/app/static", html=True), name="static")
