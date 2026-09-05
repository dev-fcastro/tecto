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
    "******localhost:5432/tecto",
)
SECRET_KEY = os.environ.get("SECRET_KEY", "tecto-dev-secret-change-in-prod-2026")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_HOURS = 72
PDF_DIR = Path("/app/pdfs")
PDF_DIR.mkdir(exist_ok=True, parents=True)
ASSETS_DIR = Path("/app/assets")  # separate persistent volume — NOT inside /app/static
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
        # Clients table
        await conn.execute("""
            CREATE TABLE IF NOT EXISTS clients (
              id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
              name TEXT NOT NULL,
              commercial_name TEXT,
              tax_id TEXT,
              email TEXT,
              phone TEXT,
              address TEXT,
              contact_name TEXT,
              contact_position TEXT,
              notes TEXT,
              tax_id_normalized TEXT,
              email_normalized TEXT,
              phone_normalized TEXT,
              name_normalized TEXT,
              is_active BOOLEAN NOT NULL DEFAULT TRUE,
              created_at TIMESTAMPTZ DEFAULT NOW(),
              updated_at TIMESTAMPTZ DEFAULT NOW()
            )
        """)
        await conn.execute("ALTER TABLE clients ADD COLUMN IF NOT EXISTS commercial_name TEXT")
        await conn.execute("ALTER TABLE clients ADD COLUMN IF NOT EXISTS tax_id TEXT")
        await conn.execute("ALTER TABLE clients ADD COLUMN IF NOT EXISTS email TEXT")
        await conn.execute("ALTER TABLE clients ADD COLUMN IF NOT EXISTS phone TEXT")
        await conn.execute("ALTER TABLE clients ADD COLUMN IF NOT EXISTS address TEXT")
        await conn.execute("ALTER TABLE clients ADD COLUMN IF NOT EXISTS contact_name TEXT")
        await conn.execute("ALTER TABLE clients ADD COLUMN IF NOT EXISTS contact_position TEXT")
        await conn.execute("ALTER TABLE clients ADD COLUMN IF NOT EXISTS notes TEXT")
        await conn.execute("ALTER TABLE clients ADD COLUMN IF NOT EXISTS tax_id_normalized TEXT")
        await conn.execute("ALTER TABLE clients ADD COLUMN IF NOT EXISTS email_normalized TEXT")
        await conn.execute("ALTER TABLE clients ADD COLUMN IF NOT EXISTS phone_normalized TEXT")
        await conn.execute("ALTER TABLE clients ADD COLUMN IF NOT EXISTS name_normalized TEXT")
        await conn.execute("ALTER TABLE clients ADD COLUMN IF NOT EXISTS is_active BOOLEAN NOT NULL DEFAULT TRUE")
        await conn.execute("ALTER TABLE clients ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT NOW()")
        await conn.execute("UPDATE clients SET name_normalized=lower(trim(name)) WHERE name_normalized IS NULL")
        await conn.execute("UPDATE clients SET tax_id_normalized=regexp_replace(coalesce(tax_id,''),'\\s+','','g') WHERE tax_id_normalized IS NULL")
        await conn.execute("UPDATE clients SET email_normalized=lower(trim(coalesce(email,''))) WHERE email_normalized IS NULL")
        await conn.execute("UPDATE clients SET phone_normalized=regexp_replace(coalesce(phone,''),'\\D+','','g') WHERE phone_normalized IS NULL")
        await conn.execute("CREATE INDEX IF NOT EXISTS idx_clients_active_name ON clients (is_active, name)")
        await conn.execute("CREATE INDEX IF NOT EXISTS idx_clients_tax_norm ON clients (tax_id_normalized)")
        await conn.execute("CREATE INDEX IF NOT EXISTS idx_clients_email_norm ON clients (email_normalized)")
        await conn.execute("CREATE INDEX IF NOT EXISTS idx_clients_phone_norm ON clients (phone_normalized)")
        await conn.execute("CREATE INDEX IF NOT EXISTS idx_clients_name_norm ON clients (name_normalized)")
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
              client_snapshot JSONB,
              updated_at TIMESTAMPTZ DEFAULT NOW()
            )
        """)
        await conn.execute("ALTER TABLE documents ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES users(id) ON DELETE SET NULL")
        await conn.execute("ALTER TABLE documents ADD COLUMN IF NOT EXISTS client_id UUID REFERENCES clients(id) ON DELETE SET NULL")
        await conn.execute("ALTER TABLE documents ADD COLUMN IF NOT EXISTS client_snapshot JSONB")
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
    """Render a .tex template substituting {{key}} or {{key|label|type|default}} placeholders.
    Handles multiline values in comments by ensuring each line is prefixed with the comment character.
    """
    # LaTeX escaping map
    escape_map = {
        '\\': r'\textbackslash{}', '{': r'\{', '}': r'\}',
        '$': r'\$', '&': r'\&', '%': r'\%', '#': r'\#',
        '_': r'\_', '^': r'\^{}', '~': r'\textasciitilde{}'
    }
    regex_esc = re.compile('|'.join(re.escape(k) for k in escape_map.keys()))

    def escape_latex(val):
        return regex_esc.sub(lambda match: escape_map[match.group(0)], str(val))

    def resolve_key(raw_key: str):
        key = (raw_key or "").strip()
        if not key:
            return ""
        if "." in key:
            node = data
            for part in key.split("."):
                if isinstance(node, dict) and part in node:
                    node = node.get(part)
                else:
                    node = None
                    break
            if node is not None:
                return node
        fields = data.get("fields", {}) if isinstance(data, dict) else {}
        if isinstance(fields, dict) and key in fields:
            return fields.get(key, "")
        if isinstance(data, dict) and key in data:
            return data.get(key, "")
        return ""

    # Process line by line to detect comment context
    lines = tex_template.split('\n')
    processed_lines = []
    
    for line in lines:
        is_tecto_comment = line.strip().startswith('%%')
        
        def replacer(m):
            raw = m.group(1).strip()
            parts = raw.split('|')
            key = parts[0].strip()
            
            # If it's a definition in a %% line, remove it from output (it's purely metadata)
            if is_tecto_comment and len(parts) > 1:
                return ""
            
            val = resolve_key(key)
            escaped_val = escape_latex(val)
            
            if is_tecto_comment:
                # If we are in a comment line, maintain the comment for multiline values
                return escaped_val.replace('\n', '\n%% ')
            return escaped_val

        new_line = re.sub(r'\{\{([^{}]+)\}\}', replacer, line)
        processed_lines.append(new_line)
        
    return '\n'.join(processed_lines)

def parse_fields_from_tex(tex: str) -> list:
    """Parse field definitions from a .tex template — the .tex is the single source of truth.

    Syntax:
      %% SECTION: Label                       → starts a named section group
      %% {{key|Label|type|default}}           → field defined in a comment (not rendered)
      {{key|Label|type|default}}              → field defined inline (first occurrence wins)
      {{key}}                                 → bare reference; auto-label if not yet defined

    Types: text (default), textarea, date, number, select
    Select options: {{key|Label|select|default|opt1,opt2,opt3}}
    """
    seen: dict = {}   # key → field dict
    order: list = []  # insertion order
    current_section = ""
    lines = tex.splitlines()

    def _add(key, label, ftype, default, section, parts):
        if key in seen or key.startswith("client."):
            return
        field = {"key": key, "label": label, "type": ftype,
                 "default": default, "section": section}
        if ftype == "select" and len(parts) > 4:
            field["options"] = [o.strip() for o in parts[4].split(",")]
        seen[key] = field
        order.append(key)

    # Pass 1 — comment-based definitions get priority
    # (%% SECTION: and %% {{key|...}})
    for line in lines:
        stripped = line.strip()
        sec_m = re.match(r'%%\s*SECTION:\s*(.+)', stripped)
        if sec_m:
            current_section = sec_m.group(1).strip()
            continue
        if not stripped.startswith('%%'):
            continue
        search = stripped[2:].strip()
        for m in re.finditer(r'\{\{([^{}]+)\}\}', search):
            parts = [p.strip() for p in m.group(1).strip().split('|')]
            key = parts[0]
            if not key or len(parts) < 2 or not parts[1]:
                continue   # skip bare {{key}} in comments
            _add(key, parts[1],
                 parts[2] if len(parts) > 2 and parts[2] else 'text',
                 parts[3] if len(parts) > 3 else '',
                 current_section, parts)

    # Pass 2 — inline content definitions (first occurrence of each key)
    current_section = ""
    for line in lines:
        stripped = line.strip()
        sec_m = re.match(r'%%\s*SECTION:\s*(.+)', stripped)
        if sec_m:
            current_section = sec_m.group(1).strip()
            continue
        if stripped.startswith('%%'):
            continue   # already handled
        for m in re.finditer(r'\{\{([^{}]+)\}\}', line):
            parts = [p.strip() for p in m.group(1).strip().split('|')]
            key = parts[0]
            if not key or key in seen:
                continue
            has_meta = len(parts) > 1 and parts[1]
            _add(key,
                 parts[1] if has_meta else key.replace('_', ' ').title(),
                 parts[2] if has_meta and len(parts) > 2 and parts[2] else 'text',
                 parts[3] if has_meta and len(parts) > 3 else '',
                 current_section, parts)

    return [seen[k] for k in order]

def normalize_tax_id(value: Optional[str]) -> Optional[str]:
    if value is None:
        return None
    cleaned = re.sub(r"\s+", "", value.strip())
    return cleaned or None

def normalize_email(value: Optional[str]) -> Optional[str]:
    if value is None:
        return None
    cleaned = value.strip().lower()
    return cleaned or None

def normalize_phone(value: Optional[str]) -> Optional[str]:
    if value is None:
        return None
    cleaned = re.sub(r"\D+", "", value)
    return cleaned or None

def normalize_name(value: Optional[str]) -> str:
    if value is None:
        return ""
    cleaned = value.strip().lower()
    cleaned = re.sub(r"\s+", " ", cleaned)
    return cleaned

def strip_or_none(value: Optional[str]) -> Optional[str]:
    if value is None:
        return None
    cleaned = value.strip()
    return cleaned if cleaned else None

def build_client_snapshot(client_row: dict) -> dict:
    return {
        "id": str(client_row["id"]),
        "name": client_row.get("name") or "",
        "commercialName": client_row.get("commercial_name") or "",
        "taxId": client_row.get("tax_id") or "",
        "email": client_row.get("email") or "",
        "phone": client_row.get("phone") or "",
        "address": client_row.get("address") or "",
        "contactName": client_row.get("contact_name") or "",
        "contactPosition": client_row.get("contact_position") or "",
    }

def build_template_context(fields: dict, client_snapshot: Optional[dict]) -> dict:
    safe_fields = fields if isinstance(fields, dict) else {}
    return {
        "client": client_snapshot or {},
        "fields": safe_fields,
        **safe_fields,
    }

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

%% SECTION: Empresa
%% {{empresa_nombre|Nombre de la empresa|text|Synset Solutions}}
%% {{empresa_email|Email de la empresa|text|contacto@synsetsolutions.com}}
%% {{empresa_tel|Telefono|text|+1 (809) 000-0000}}
%% {{empresa_direccion|Direccion|text|Santo Domingo, RD}}
%% SECTION: Cotizacion
%% {{numero_cotizacion|Numero de cotizacion|text|001}}
%% {{fecha|Fecha|date|2026-06-09}}
%% {{moneda|Moneda|select|USD|USD,DOP,EUR}}
%% SECTION: Cliente
%% {{cliente_nombre|Nombre del cliente|text}}
%% {{cliente_empresa|Empresa del cliente|text}}
%% {{cliente_email|Email del cliente|text}}
%% SECTION: Proyecto
%% {{descripcion_proyecto|Descripcion del proyecto|textarea}}
%% SECTION: Condiciones
%% {{condiciones_pago|Condiciones de pago|textarea|50% al inicio, 50% al entregar.}}
%% {{validez|Validez de la oferta|text|30 dias}}
%% SECTION: Firma
%% {{firma_nombre|Nombre en firma|text}}
%% {{firma_cargo|Cargo en firma|text|CEO / Director}}

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

# COTIZACION_FIELDS is now derived automatically from COTIZACION_TEMPLATE via parse_fields_from_tex

SRS_TEMPLATE = r"""
\documentclass[12pt]{article}

\usepackage{fontspec}
\usepackage[a4paper,margin=2.5cm]{geometry}
\usepackage{xcolor}
\usepackage{fancyhdr}
\usepackage{titlesec}
\usepackage{longtable}
\usepackage{tabularx}
\usepackage{enumitem}
\usepackage{microtype}

\definecolor{acento}{HTML}{C75B12}
\definecolor{suave}{HTML}{6B635B}

%% SECTION: Encabezado del Documento
%% {{proyecto_nombre|Nombre del proyecto|text}}
%% {{version|Version|text|1.0}}
%% {{fecha|Fecha|date}}
%% {{autor|Autor|text}}
%% {{cliente|Cliente|text}}

\pagestyle{fancy}
\fancyhf{}
\fancyhead[L]{\color{acento}\textbf{SRS -- {{proyecto_nombre}}}}
\fancyhead[R]{\color{suave}\small v{{version}}}
\fancyfoot[C]{\color{suave}\small \thepage}

\titleformat{\section}
{\large\bfseries\color{acento}}
{\thesection}
{0.5em}
{}
[\vspace{-4pt}\rule{\textwidth}{0.4pt}]

\begin{document}

\begin{center}

{\fontsize{24}{28}\selectfont\textbf{Software Requirements Specification}}

\vspace{6pt}

{\fontsize{18}{22}\selectfont {{proyecto_nombre}}}

\vspace{10pt}

{\color{suave}
Version {{version}}
\quad---\quad
{{fecha}}
\quad---\quad
{{autor}}
}

\end{center}

\vspace{1cm}

\section{Informacion del Documento}

\begin{tabularx}{\textwidth}{lX}
Proyecto & {{proyecto_nombre}} \\
Cliente  & {{cliente}} \\
Autor    & {{autor}} \\
Version  & {{version}} \\
Fecha    & {{fecha}} \\
\end{tabularx}

%% SECTION: Historial
%% {{historial_versiones|Historial de versiones|textarea|v1.0 -- Documento inicial}}

\section{Historial de Versiones}

{{historial_versiones}}

%% SECTION: Introduccion
%% {{proposito|Proposito|textarea}}
%% {{alcance|Alcance|textarea}}
%% {{glosario|Definiciones y Glosario|textarea}}

\section{Introduccion}

\subsection*{Proposito}

{{proposito}}

\subsection*{Alcance}

{{alcance}}

\subsection*{Definiciones y Glosario}

{{glosario}}

%% SECTION: Descripcion General
%% {{descripcion_general|Descripcion general del sistema|textarea}}
%% {{stakeholders|Stakeholders|textarea}}
%% {{usuarios|Usuarios del sistema|textarea}}
%% {{supuestos|Supuestos|textarea}}
%% {{dependencias|Dependencias|textarea}}

\section{Descripcion General}

{{descripcion_general}}

\subsection*{Stakeholders}

{{stakeholders}}

\subsection*{Usuarios del Sistema}

{{usuarios}}

\subsection*{Supuestos}

{{supuestos}}

\subsection*{Dependencias}

{{dependencias}}

%% SECTION: Requisitos
%% {{casos_de_uso|Casos de uso|textarea}}
%% {{requisitos_funcionales|Requisitos funcionales|textarea}}
%% {{reglas_negocio|Reglas de negocio|textarea}}
%% {{requisitos_no_funcionales|Requisitos no funcionales|textarea}}

\section{Casos de Uso}

{{casos_de_uso}}

\section{Requisitos Funcionales}

{{requisitos_funcionales}}

\section{Reglas de Negocio}

{{reglas_negocio}}

\section{Requisitos No Funcionales}

{{requisitos_no_funcionales}}

%% SECTION: Atributos de Calidad
%% {{rendimiento|Rendimiento|textarea}}
%% {{seguridad|Seguridad|textarea}}
%% {{disponibilidad|Disponibilidad|textarea}}
%% {{auditoria|Auditoria|textarea}}

\subsection*{Rendimiento}

{{rendimiento}}

\subsection*{Seguridad}

{{seguridad}}

\subsection*{Disponibilidad}

{{disponibilidad}}

\subsection*{Auditoria}

{{auditoria}}

%% SECTION: Diseno e Integraciones
%% {{integraciones|Integraciones externas|textarea}}
%% {{modelo_datos|Modelo de datos|textarea}}
%% {{ui_ux|Interfaz de usuario|textarea}}

\section{Integraciones Externas}

{{integraciones}}

\section{Modelo de Datos}

{{modelo_datos}}

\section{Interfaz de Usuario}

{{ui_ux}}

%% SECTION: Cierre
%% {{criterios_aceptacion|Criterios de aceptacion|textarea}}
%% {{restricciones|Restricciones|textarea}}
%% {{exclusiones|Exclusiones|textarea}}
%% {{riesgos|Riesgos|textarea}}
%% {{anexos|Anexos|textarea}}

\section{Criterios de Aceptacion}

{{criterios_aceptacion}}

\section{Restricciones}

{{restricciones}}

\section{Exclusiones}

{{exclusiones}}

\section{Riesgos}

{{riesgos}}

\section{Anexos}

{{anexos}}

\end{document}
"""

# SRS_FIELDS is now derived automatically from SRS_TEMPLATE via parse_fields_from_tex

CONTRATO_TEMPLATE = r"""
\documentclass[12pt]{article}
\usepackage{fontspec}
\usepackage[a4paper,margin=3cm]{geometry}
\usepackage{xcolor,fancyhdr,microtype}
\definecolor{acento}{HTML}{C75B12}
\definecolor{suave}{HTML}{6B635B}
%% SECTION: Encabezado
%% {{ciudad|Ciudad|text|Santo Domingo}}
%% {{fecha|Fecha|date|2026-06-09}}
%% SECTION: Prestador
%% {{proveedor_nombre|Nombre del prestador|text|Synset Solutions}}
%% {{proveedor_rnc|RNC / Cedula del prestador|text}}
%% {{proveedor_direccion|Direccion del prestador|text}}
%% SECTION: Cliente
%% {{cliente_nombre|Nombre del cliente|text}}
%% {{cliente_rnc|RNC / Cedula del cliente|text}}
%% {{cliente_direccion|Direccion del cliente|text}}
%% SECTION: Clausulas
%% {{objeto_contrato|Objeto del contrato|textarea}}
%% {{moneda|Moneda|select|USD|USD,DOP,EUR}}
%% {{monto_total|Monto total|text}}
%% {{condiciones_pago|Condiciones de pago|textarea}}
%% {{plazo_entrega|Plazo de entrega|text}}
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

# CONTRATO_FIELDS is now derived automatically from CONTRATO_TEMPLATE via parse_fields_from_tex

TEMPLATES_SEED = [
    {"id": "tpl-cotizacion", "name": "Cotizacion", "category": "Comercial",
     "description": "Propuesta economica formal con desglose de servicios, ITBIS y condiciones.",
     "icon": "currency", "color": "#c75b12",
     "tex_template": COTIZACION_TEMPLATE,
     "fields": parse_fields_from_tex(COTIZACION_TEMPLATE)},
    {"id": "tpl-srs", "name": "SRS", "category": "Tecnico",
     "description": "Especificacion de Requisitos de Software para proyectos de desarrollo.",
     "icon": "code", "color": "#2563b8",
     "tex_template": SRS_TEMPLATE,
     "fields": parse_fields_from_tex(SRS_TEMPLATE)},
    {"id": "tpl-contrato", "name": "Contrato de Servicios", "category": "Legal",
     "description": "Contrato de prestacion de servicios con clausulas de pago y confidencialidad.",
     "icon": "shield", "color": "#1f8a4c",
     "tex_template": CONTRATO_TEMPLATE,
     "fields": parse_fields_from_tex(CONTRATO_TEMPLATE)},
]

async def seed_templates():
    """Seed built-in templates.

    Strategy:
    - If the template doesn't exist → insert it.
    - If it exists → NEVER overwrite tex_template (preserve user edits).
      Only re-parse fields from the stored tex so the form stays in sync.
    """
    async with pool.acquire() as conn:
        for tpl in TEMPLATES_SEED:
            existing = await conn.fetchrow("SELECT tex_template FROM templates WHERE id=$1", tpl["id"])
            if existing is None:
                await conn.execute("""
                    INSERT INTO templates (id, name, category, description, icon, color, tex_template, fields)
                    VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
                """, tpl["id"], tpl["name"], tpl["category"], tpl["description"],
                    tpl["icon"], tpl["color"],
                    tpl["tex_template"], json.dumps(tpl["fields"]))
            else:
                # Template exists — keep user's tex, just refresh the parsed fields
                fresh_fields = parse_fields_from_tex(existing["tex_template"] or "")
                await conn.execute(
                    "UPDATE templates SET fields=$2 WHERE id=$1",
                    tpl["id"], json.dumps(fresh_fields))

# ── Clients ───────────────────────────────────────────────────────────────────
class ClientCreate(BaseModel):
    name: str
    commercial_name: Optional[str] = None
    tax_id: Optional[str] = None
    email: Optional[str] = None
    phone: Optional[str] = None
    address: Optional[str] = None
    contact_name: Optional[str] = None
    contact_position: Optional[str] = None
    notes: Optional[str] = None
    ignore_duplicates: bool = False

class ClientUpdate(BaseModel):
    name: Optional[str] = None
    commercial_name: Optional[str] = None
    tax_id: Optional[str] = None
    email: Optional[str] = None
    phone: Optional[str] = None
    address: Optional[str] = None
    contact_name: Optional[str] = None
    contact_position: Optional[str] = None
    notes: Optional[str] = None
    is_active: Optional[bool] = None

def serialize_client(row: dict) -> dict:
    data = dict(row)
    data["id"] = str(data["id"])
    if data.get("created_at"):
        data["created_at"] = data["created_at"].isoformat()
    if data.get("updated_at"):
        data["updated_at"] = data["updated_at"].isoformat()
    for k in ("tax_id_normalized", "email_normalized", "phone_normalized", "name_normalized"):
        data.pop(k, None)
    return data

async def find_duplicate_client(conn, *, name: str, tax_id_norm: Optional[str], email_norm: Optional[str], phone_norm: Optional[str], exclude_id: Optional[str] = None):
    base_exclude = ""
    args = []
    if exclude_id:
        base_exclude = " AND id <> $2"
        args.append(uuid.UUID(exclude_id))

    if tax_id_norm:
        q = f"SELECT * FROM clients WHERE is_active=TRUE AND tax_id_normalized=$1{base_exclude} ORDER BY updated_at DESC LIMIT 1"
        row = await conn.fetchrow(q, tax_id_norm, *args)
        if row:
            return "tax_id", row
    if email_norm:
        q = f"SELECT * FROM clients WHERE is_active=TRUE AND email_normalized=$1{base_exclude} ORDER BY updated_at DESC LIMIT 1"
        row = await conn.fetchrow(q, email_norm, *args)
        if row:
            return "email", row
    if phone_norm:
        q = f"SELECT * FROM clients WHERE is_active=TRUE AND phone_normalized=$1{base_exclude} ORDER BY updated_at DESC LIMIT 1"
        row = await conn.fetchrow(q, phone_norm, *args)
        if row:
            return "phone", row
    name_norm = normalize_name(name)
    if name_norm:
        q = f"SELECT * FROM clients WHERE is_active=TRUE AND name_normalized LIKE $1{base_exclude} ORDER BY updated_at DESC LIMIT 1"
        row = await conn.fetchrow(q, f"%{name_norm}%", *args)
        if row:
            return "name", row
    return None, None

@app.get("/clients")
@app.get("/api/clients")
async def list_clients(search: Optional[str] = None, active: bool = True, user=Depends(get_current_user)):
    filters = []
    params = []
    if active:
        filters.append("is_active=TRUE")
    if search and search.strip():
        s = f"%{search.strip().lower()}%"
        base = len(params) + 1
        params.extend([s, s, s, s, s])
        filters.append(
            "(lower(name) LIKE $%d OR lower(coalesce(commercial_name,'')) LIKE $%d OR "
            "lower(coalesce(tax_id,'')) LIKE $%d OR lower(coalesce(email,'')) LIKE $%d OR "
            "lower(coalesce(phone,'')) LIKE $%d)" % (base, base + 1, base + 2, base + 3, base + 4)
        )
    where = ("WHERE " + " AND ".join(filters)) if filters else ""
    query = f"""
        SELECT id, name, commercial_name, tax_id, email, phone, address, contact_name, contact_position, notes,
               is_active, created_at, updated_at
        FROM clients {where}
        ORDER BY name
    """
    async with pool.acquire() as conn:
        rows = await conn.fetch(query, *params)
    return [serialize_client(dict(r)) for r in rows]

@app.get("/clients/{client_id}")
@app.get("/api/clients/{client_id}")
async def get_client(client_id: str, user=Depends(get_current_user)):
    async with pool.acquire() as conn:
        row = await conn.fetchrow("""
            SELECT id, name, commercial_name, tax_id, email, phone, address, contact_name, contact_position, notes,
                   is_active, created_at, updated_at, tax_id_normalized, email_normalized, phone_normalized, name_normalized
            FROM clients WHERE id=$1
        """, uuid.UUID(client_id))
    if not row:
        raise HTTPException(404, "Cliente no encontrado")
    return serialize_client(dict(row))

@app.post("/clients")
@app.post("/api/clients")
async def create_client(body: ClientCreate, user=Depends(get_current_user)):
    name = (body.name or "").strip()
    if not name:
        raise HTTPException(400, "El nombre no puede estar vacío")
    tax_id = strip_or_none(body.tax_id)
    email = strip_or_none(body.email)
    phone = strip_or_none(body.phone)
    tax_id_norm = normalize_tax_id(tax_id)
    email_norm = normalize_email(email)
    phone_norm = normalize_phone(phone)
    name_norm = normalize_name(name)
    async with pool.acquire() as conn:
        match_type, dup = await find_duplicate_client(
            conn,
            name=name,
            tax_id_norm=tax_id_norm,
            email_norm=email_norm,
            phone_norm=phone_norm,
        )
        if dup and not body.ignore_duplicates:
            raise HTTPException(
                status_code=409,
                detail={
                    "code": "DUPLICATE_CLIENT",
                    "matchType": match_type,
                    "client": serialize_client(dict(dup)),
                },
            )
        row = await conn.fetchrow("""
            INSERT INTO clients (
                name, commercial_name, tax_id, email, phone, address, contact_name, contact_position, notes,
                tax_id_normalized, email_normalized, phone_normalized, name_normalized, is_active, updated_at
            ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,TRUE,NOW())
            RETURNING id, name, commercial_name, tax_id, email, phone, address, contact_name, contact_position, notes,
                      is_active, created_at, updated_at, tax_id_normalized, email_normalized, phone_normalized, name_normalized
        """,
        name, strip_or_none(body.commercial_name), tax_id, email, phone,
        strip_or_none(body.address), strip_or_none(body.contact_name), strip_or_none(body.contact_position), strip_or_none(body.notes),
        tax_id_norm, email_norm, phone_norm, name_norm)
    return serialize_client(dict(row))

@app.put("/clients/{client_id}")
@app.put("/api/clients/{client_id}")
async def update_client(client_id: str, body: ClientUpdate, user=Depends(get_current_user)):
    updates = body.dict(exclude_unset=True)
    if not updates:
        return {"ok": True}
    if "name" in updates:
        updates["name"] = (updates["name"] or "").strip()
        if not updates["name"]:
            raise HTTPException(400, "El nombre no puede estar vacío")
    for key in ("commercial_name", "tax_id", "email", "phone", "address", "contact_name", "contact_position", "notes"):
        if key in updates:
            updates[key] = strip_or_none(updates[key])
    tax_id_norm = normalize_tax_id(updates.get("tax_id")) if "tax_id" in updates else None
    email_norm = normalize_email(updates.get("email")) if "email" in updates else None
    phone_norm = normalize_phone(updates.get("phone")) if "phone" in updates else None
    name_for_dup = updates["name"] if "name" in updates else None

    async with pool.acquire() as conn:
        current = await conn.fetchrow("SELECT * FROM clients WHERE id=$1", uuid.UUID(client_id))
        if not current:
            raise HTTPException(404, "Cliente no encontrado")
        if name_for_dup is None:
            name_for_dup = current["name"]
        if tax_id_norm is None and "tax_id" not in updates:
            tax_id_norm = current.get("tax_id_normalized")
        if email_norm is None and "email" not in updates:
            email_norm = current.get("email_normalized")
        if phone_norm is None and "phone" not in updates:
            phone_norm = current.get("phone_normalized")
        match_type, dup = await find_duplicate_client(
            conn,
            name=name_for_dup,
            tax_id_norm=tax_id_norm,
            email_norm=email_norm,
            phone_norm=phone_norm,
            exclude_id=client_id,
        )
        if dup:
            raise HTTPException(
                status_code=409,
                detail={
                    "code": "DUPLICATE_CLIENT",
                    "matchType": match_type,
                    "client": serialize_client(dict(dup)),
                },
            )
        sets = []
        vals = [uuid.UUID(client_id)]
        idx = 2
        for key, val in updates.items():
            sets.append(f"{key}=${idx}")
            vals.append(val)
            idx += 1
        if "tax_id" in updates:
            sets.append(f"tax_id_normalized=${idx}")
            vals.append(tax_id_norm)
            idx += 1
        if "email" in updates:
            sets.append(f"email_normalized=${idx}")
            vals.append(email_norm)
            idx += 1
        if "phone" in updates:
            sets.append(f"phone_normalized=${idx}")
            vals.append(phone_norm)
            idx += 1
        if "name" in updates:
            sets.append(f"name_normalized=${idx}")
            vals.append(normalize_name(updates["name"]))
            idx += 1
        sets.append("updated_at=NOW()")
        await conn.execute(f"UPDATE clients SET {', '.join(sets)} WHERE id=$1", *vals)
        row = await conn.fetchrow("""
            SELECT id, name, commercial_name, tax_id, email, phone, address, contact_name, contact_position, notes,
                   is_active, created_at, updated_at, tax_id_normalized, email_normalized, phone_normalized, name_normalized
            FROM clients WHERE id=$1
        """, uuid.UUID(client_id))
    return serialize_client(dict(row))

@app.delete("/clients/{client_id}")
@app.delete("/api/clients/{client_id}")
async def archive_client(client_id: str, user=Depends(get_current_user)):
    async with pool.acquire() as conn:
        updated = await conn.execute(
            "UPDATE clients SET is_active=FALSE, updated_at=NOW() WHERE id=$1",
            uuid.UUID(client_id)
        )
    if int(updated.split()[-1]) == 0:
        raise HTTPException(404, "Cliente no encontrado")
    return {"ok": True}

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
    tex = req.tex
    # Remove BOM and leading/trailing whitespace
    tex = re.sub(r'^\ufeff', '', tex).strip()

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
async def serve_asset(filename: str, user=Depends(get_current_user)):
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
    tex = body.tex_template or ""
    # Auto-parse fields from tex; fall back to explicitly provided fields
    fields = parse_fields_from_tex(tex) if tex else (body.fields or [])
    async with pool.acquire() as conn:
        await conn.execute("""
            INSERT INTO templates (id, name, category, description, icon, color, tex_template, fields)
            VALUES ($1,$2,$3,$4,'custom',$5,$6,$7)
        """, tpl_id, body.name, body.category, body.description,
            body.color, tex, json.dumps(fields))
    return {"id": tpl_id, "name": body.name}

@app.put("/templates/{tpl_id}")
async def update_template(tpl_id: str, body: TemplateUpdate, user=Depends(get_current_user)):
    async with pool.acquire() as conn:
        row = await conn.fetchrow("SELECT id FROM templates WHERE id=$1", tpl_id)
        if not row:
            raise HTTPException(404)
        if body.tex_template is not None:
            # When tex changes, auto-parse fields from the new template
            auto_fields = parse_fields_from_tex(body.tex_template)
            await conn.execute(
                "UPDATE templates SET tex_template=$2, fields=$3 WHERE id=$1",
                tpl_id, body.tex_template, json.dumps(auto_fields))
        if body.name is not None:
            await conn.execute("UPDATE templates SET name=$2 WHERE id=$1", tpl_id, body.name)
        if body.category is not None:
            await conn.execute("UPDATE templates SET category=$2 WHERE id=$1", tpl_id, body.category)
        if body.description is not None:
            await conn.execute("UPDATE templates SET description=$2 WHERE id=$1", tpl_id, body.description)
        if body.color is not None:
            await conn.execute("UPDATE templates SET color=$2 WHERE id=$1", tpl_id, body.color)
        if body.fields is not None and body.tex_template is None:
            # Only allow manual fields override when tex is NOT being updated
            await conn.execute("UPDATE templates SET fields=$2 WHERE id=$1", tpl_id, json.dumps(body.fields))
    return {"ok": True}

@app.delete("/templates/{tpl_id}")
async def delete_template(tpl_id: str, user=Depends(get_current_user)):
    async with pool.acquire() as conn:
        await conn.execute("DELETE FROM templates WHERE id=$1", tpl_id)
    return {"ok": True}

# ── Documents ─────────────────────────────────────────────────────────────────
class DocFromTemplate(BaseModel):
    template_id: Optional[str] = None
    templateId: Optional[str] = None
    name: str
    data: Optional[dict] = None
    values: Optional[dict] = None
    engine: str = "XeLaTeX"
    client_id: Optional[str] = None
    clientId: Optional[str] = None

class DocUpdate(BaseModel):
    name: Optional[str] = None
    data: Optional[dict] = None
    values: Optional[dict] = None
    tex: Optional[str] = None
    engine: Optional[str] = None
    client_id: Optional[str] = None
    clientId: Optional[str] = None

@app.get("/docs")
@app.get("/api/documents")
async def list_docs(user=Depends(get_current_user)):
    async with pool.acquire() as conn:
        rows = await conn.fetch(
            "SELECT d.id, d.name, d.engine, d.updated_at, d.data, d.client_id, d.client_snapshot, "
            "c.name as client_name, "
            "t.name as template_name, t.id as template_id, t.category, t.color "
            "FROM documents d "
            "LEFT JOIN templates t ON d.template_id=t.id "
            "LEFT JOIN clients c ON c.id = d.client_id "
            "ORDER BY d.updated_at DESC")
    result = []
    for r in rows:
        d = dict(r)
        if d.get("updated_at"):
            d["updated_at"] = d["updated_at"].isoformat()
        raw = d.get("data") or {}
        data = json.loads(raw) if isinstance(raw, str) else raw
        snap_raw = d.get("client_snapshot")
        snapshot = json.loads(snap_raw) if isinstance(snap_raw, str) else (snap_raw or None)
        d["client_snapshot"] = snapshot
        if snapshot and snapshot.get("name"):
            d["client_name"] = snapshot.get("name")
        elif not d.get("client_name"):
            d["client_name"] = (
                data.get("cliente_nombre") or data.get("cliente") or
                data.get("proyecto_nombre") or data.get("proveedor_nombre") or ""
            ).strip()
        d.pop("data", None)
        result.append(d)
    return result

@app.post("/docs")
@app.post("/api/documents")
async def create_doc_from_template(body: DocFromTemplate, user=Depends(get_current_user)):
    template_id = body.template_id or body.templateId
    if not template_id:
        raise HTTPException(400, "template_id es requerido")
    doc_id = str(uuid.uuid4())
    input_values = body.data or body.values or {}
    resolved_client_id = body.client_id if body.client_id is not None else body.clientId
    async with pool.acquire() as conn:
        tpl = await conn.fetchrow("SELECT * FROM templates WHERE id=$1", template_id)
        if not tpl:
            raise HTTPException(404, "Plantilla no encontrada")
        client_snapshot = None
        if resolved_client_id:
            client = await conn.fetchrow("SELECT * FROM clients WHERE id=$1 AND is_active=TRUE", uuid.UUID(resolved_client_id))
            if not client:
                raise HTTPException(404, "Cliente no encontrado")
            client_snapshot = build_client_snapshot(dict(client))
        fields = json.loads(tpl["fields"]) if isinstance(tpl["fields"], str) else (tpl["fields"] or [])
        defaults = {f["key"]: f.get("default", "") for f in fields}
        merged = {**defaults, **input_values}
        context = build_template_context(merged, client_snapshot)
        tex = render_template(tpl["tex_template"], context)
        await conn.execute("""
            INSERT INTO documents (id, template_id, name, data, tex, engine, user_id, client_id, client_snapshot, updated_at)
            VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,NOW())
        """, doc_id, template_id, body.name, json.dumps(merged), tex, body.engine,
            user["id"], resolved_client_id, json.dumps(client_snapshot) if client_snapshot else None)
    return {"id": doc_id, "name": body.name, "tex": tex, "client_id": resolved_client_id, "clientSnapshot": client_snapshot}

@app.get("/docs/{doc_id}")
@app.get("/api/documents/{doc_id}")
async def get_doc(doc_id: str, user=Depends(get_current_user)):
    async with pool.acquire() as conn:
        row = await conn.fetchrow(
            "SELECT d.*, t.name as template_name, t.fields, t.tex_template, c.name as current_client_name "
            "FROM documents d "
            "LEFT JOIN templates t ON d.template_id=t.id "
            "LEFT JOIN clients c ON d.client_id=c.id "
            "WHERE d.id=$1", doc_id)
    if not row:
        raise HTTPException(404)
    d = dict(row)
    d["data"] = json.loads(d["data"]) if isinstance(d.get("data"), str) else (d.get("data") or {})
    d["fields"] = json.loads(d["fields"]) if isinstance(d.get("fields"), str) else (d.get("fields") or [])
    d["client_snapshot"] = json.loads(d["client_snapshot"]) if isinstance(d.get("client_snapshot"), str) else d.get("client_snapshot")
    if d.get("client_snapshot", {}).get("name"):
        d["client_name"] = d["client_snapshot"]["name"]
    else:
        d["client_name"] = d.get("current_client_name") or ""
    if d.get("updated_at"):
        d["updated_at"] = d["updated_at"].isoformat()
    return d

@app.put("/docs/{doc_id}")
@app.put("/api/documents/{doc_id}")
async def update_doc(doc_id: str, body: DocUpdate, user=Depends(get_current_user)):
    payload = body.dict(exclude_unset=True)
    async with pool.acquire() as conn:
        row = await conn.fetchrow("SELECT * FROM documents WHERE id=$1", doc_id)
        if not row:
            raise HTTPException(404)
        client_field_sent = "client_id" in payload or "clientId" in payload
        data_field_sent = "data" in payload or "values" in payload
        resolved_client_id = payload.get("client_id") if "client_id" in payload else payload.get("clientId")
        if client_field_sent:
            client_snapshot = None
            if resolved_client_id:
                client = await conn.fetchrow("SELECT * FROM clients WHERE id=$1 AND is_active=TRUE", uuid.UUID(resolved_client_id))
                if not client:
                    raise HTTPException(404, "Cliente no encontrado")
                client_snapshot = build_client_snapshot(dict(client))
            await conn.execute(
                "UPDATE documents SET client_id=$2, client_snapshot=$3, updated_at=NOW() WHERE id=$1",
                doc_id, resolved_client_id, json.dumps(client_snapshot) if client_snapshot else None
            )
            row = await conn.fetchrow("SELECT * FROM documents WHERE id=$1", doc_id)
        if data_field_sent:
            tpl = await conn.fetchrow("SELECT * FROM templates WHERE id=$1", row["template_id"])
            if tpl:
                current = json.loads(row["data"]) if isinstance(row.get("data"), str) else (row.get("data") or {})
                incoming_data = payload.get("data") if "data" in payload else payload.get("values")
                merged = {**current, **(incoming_data or {})}
                snap_raw = row.get("client_snapshot")
                client_snapshot = json.loads(snap_raw) if isinstance(snap_raw, str) else (snap_raw or None)
                rendered = render_template(tpl["tex_template"], build_template_context(merged, client_snapshot))
                await conn.execute("UPDATE documents SET data=$2, tex=$3, updated_at=NOW() WHERE id=$1",
                                  doc_id, json.dumps(merged), rendered)
                return {"ok": True, "tex": rendered}
        if "tex" in payload:
            await conn.execute("UPDATE documents SET tex=$2, updated_at=NOW() WHERE id=$1", doc_id, payload["tex"])
        if "name" in payload:
            await conn.execute("UPDATE documents SET name=$2 WHERE id=$1", doc_id, payload["name"])
        if "engine" in payload:
            await conn.execute("UPDATE documents SET engine=$2 WHERE id=$1", doc_id, payload["engine"])
    return {"ok": True}

@app.delete("/docs/{doc_id}")
@app.delete("/api/documents/{doc_id}")
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
