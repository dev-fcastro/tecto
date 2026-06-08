import asyncio, json, os, re, shutil, string, tempfile, time, uuid
from pathlib import Path
from typing import Optional

import asyncpg
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

# ── Config ────────────────────────────────────────────────────────────────────
DB_URL = os.environ.get(
    "DATABASE_URL",
    "postgresql://synset_admin:xWdiVJl7y1eJJhcO6S%2FAqfgz1QvPznGs@synset-postgres:5432/tecto",
)
PDF_DIR = Path("/tmp/tecto_pdfs")
PDF_DIR.mkdir(exist_ok=True)

app = FastAPI(title="Tecto API")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

pool: Optional[asyncpg.Pool] = None

@app.on_event("startup")
async def startup():
    global pool
    pool = await asyncpg.create_pool(DB_URL)
    await seed_templates()

@app.on_event("shutdown")
async def shutdown():
    await pool.close()

# ── Template rendering ────────────────────────────────────────────────────────
def render_template(tex_template: str, data: dict) -> str:
    """Simple {{key}} substitution in LaTeX template."""
    def replacer(m):
        key = m.group(1).strip()
        val = str(data.get(key, f"[{key}]"))
        # Escape LaTeX special chars in values
        for ch, esc in [('&','\\&'),('%','\\%'),('#','\\#'),('_','\\_'),('^','\\^{}')]:
            val = val.replace(ch, esc)
        return val
    return re.sub(r'\{\{([^}]+)\}\}', replacer, tex_template)

# ── Seed templates ────────────────────────────────────────────────────────────
COTIZACION_TEMPLATE = r"""
\documentclass[12pt]{article}
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage[a4paper,margin=2.5cm]{geometry}
\usepackage{xcolor}
\usepackage{tabularx}
\usepackage{booktabs}
\usepackage{array}
\usepackage{fancyhdr}
\usepackage{fontenc}
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
\fancyhead[R]{\color{suave}\small Cotización \#{{numero_cotizacion}}}
\fancyfoot[C]{\color{suave}\small \thepage}
\fancyfoot[R]{\color{suave}\small {{empresa_email}}}

\begin{document}

% ── Encabezado ──────────────────────────────────────────────────────────────
\vspace*{0.5cm}
{\color{acento}\rule{\textwidth}{2pt}}
\vspace{0.4cm}

\begin{minipage}[t]{0.55\textwidth}
  {\fontsize{22}{26}\selectfont\textbf{Cotización}}\\[4pt]
  {\color{suave} \#{{numero_cotizacion}} · {{fecha}}}
\end{minipage}
\hfill
\begin{minipage}[t]{0.4\textwidth}
  \raggedleft
  {\color{acento}\textbf{{empresa_nombre}}}\\
  {\color{suave}\small {{empresa_direccion}}}\\
  {\color{suave}\small {{empresa_email}}}\\
  {\color{suave}\small {{empresa_tel}}}
\end{minipage}

\vspace{1cm}

% ── Cliente ─────────────────────────────────────────────────────────────────
{\color{suave}\small PARA:}\\[4pt]
{\Large\textbf{{{cliente_nombre}}}}\\
{\color{suave} {{cliente_empresa}}}\\
{\color{suave}\small {{cliente_email}}}

\vspace{1cm}
{\color{borde}\rule{\textwidth}{0.4pt}}
\vspace{0.6cm}

% ── Descripción del proyecto ─────────────────────────────────────────────────
{\color{suave}\small DESCRIPCIÓN DEL PROYECTO}\\[6pt]
{{descripcion_proyecto}}

\vspace{0.8cm}

% ── Desglose ────────────────────────────────────────────────────────────────
{\color{suave}\small DESGLOSE DE SERVICIOS}\\[6pt]
\begin{tabularx}{\textwidth}{Xrr}
  \toprule
  \textbf{Descripción} & \textbf{Hrs./U} & \textbf{Total} \\
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

% ── Condiciones ─────────────────────────────────────────────────────────────
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

% ── Firma ────────────────────────────────────────────────────────────────────
\begin{minipage}[t]{0.4\textwidth}
  \vspace{1.5cm}
  {\color{borde}\rule{0.9\linewidth}{0.4pt}}\\[4pt]
  {\color{suave}\small {{firma_nombre}}}\\
  {\color{suave}\small {{firma_cargo}}}\\
  {\color{acento}\small\textbf{{{empresa_nombre}}}}
\end{minipage}

\end{document}
"""

COTIZACION_FIELDS = [
    {"key": "empresa_nombre",    "label": "Nombre de la empresa",     "type": "text",     "default": "Synset Solutions"},
    {"key": "empresa_email",     "label": "Email de la empresa",      "type": "text",     "default": "contacto@synsetsolutions.com"},
    {"key": "empresa_tel",       "label": "Teléfono",                  "type": "text",     "default": "+1 (809) 000-0000"},
    {"key": "empresa_direccion", "label": "Dirección",                 "type": "text",     "default": "Santo Domingo, RD"},
    {"key": "numero_cotizacion", "label": "Número de cotización",      "type": "text",     "default": "001"},
    {"key": "fecha",             "label": "Fecha",                     "type": "text",     "default": "2026-06-08"},
    {"key": "cliente_nombre",    "label": "Nombre del cliente",        "type": "text",     "default": ""},
    {"key": "cliente_empresa",   "label": "Empresa del cliente",       "type": "text",     "default": ""},
    {"key": "cliente_email",     "label": "Email del cliente",         "type": "text",     "default": ""},
    {"key": "descripcion_proyecto","label":"Descripción del proyecto",  "type": "textarea", "default": ""},
    {"key": "moneda",            "label": "Moneda",                    "type": "select",   "default": "USD", "options": ["USD", "DOP", "EUR"]},
    {"key": "item_1_desc",       "label": "Ítem 1 — Descripción",      "type": "text",     "default": "Desarrollo Backend"},
    {"key": "item_1_hrs",        "label": "Ítem 1 — Horas/Unidades",   "type": "text",     "default": "40h"},
    {"key": "item_1_total",      "label": "Ítem 1 — Total",            "type": "text",     "default": "2000.00"},
    {"key": "item_2_desc",       "label": "Ítem 2 — Descripción",      "type": "text",     "default": "Desarrollo Frontend"},
    {"key": "item_2_hrs",        "label": "Ítem 2 — Horas/Unidades",   "type": "text",     "default": "30h"},
    {"key": "item_2_total",      "label": "Ítem 2 — Total",            "type": "text",     "default": "1500.00"},
    {"key": "item_3_desc",       "label": "Ítem 3 — Descripción",      "type": "text",     "default": "Despliegue y configuración"},
    {"key": "item_3_hrs",        "label": "Ítem 3 — Horas/Unidades",   "type": "text",     "default": "8h"},
    {"key": "item_3_total",      "label": "Ítem 3 — Total",            "type": "text",     "default": "400.00"},
    {"key": "subtotal",          "label": "Subtotal",                  "type": "text",     "default": "3900.00"},
    {"key": "itbis",             "label": "ITBIS (18%)",               "type": "text",     "default": "702.00"},
    {"key": "total",             "label": "Total",                     "type": "text",     "default": "4602.00"},
    {"key": "condiciones_pago",  "label": "Condiciones de pago",       "type": "textarea", "default": "50% al inicio, 50% al entregar."},
    {"key": "validez",           "label": "Validez de la oferta",      "type": "text",     "default": "30 días"},
    {"key": "firma_nombre",      "label": "Nombre en firma",           "type": "text",     "default": ""},
    {"key": "firma_cargo",       "label": "Cargo en firma",            "type": "text",     "default": "CEO / Director"},
]

SRS_TEMPLATE = r"""
\documentclass[12pt]{article}
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage[a4paper,margin=2.5cm]{geometry}
\usepackage{xcolor,fancyhdr,titlesec,enumitem,microtype}
\definecolor{acento}{HTML}{C75B12}
\definecolor{suave}{HTML}{6B635B}
\pagestyle{fancy}\fancyhf{}
\fancyhead[L]{\color{acento}\textbf{SRS — {{proyecto_nombre}}}}\fancyhead[R]{\color{suave}\small v{{version}}}
\fancyfoot[C]{\color{suave}\small \thepage}
\titleformat{\section}{\large\bfseries\color{acento}}{}{0em}{}[\vspace{-6pt}\rule{\textwidth}{0.4pt}]
\begin{document}
\begin{center}
{\fontsize{24}{28}\selectfont\textbf{Especificación de Requisitos}}\\[6pt]
{\fontsize{18}{22}\selectfont {{proyecto_nombre}}}\\[10pt]
{\color{suave} Versión {{version}} · {{fecha}} · {{autor}}}
\end{center}
\vspace{1cm}
\section{Descripción General}
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
    {"key": "version", "label": "Versión", "type": "text", "default": "1.0"},
    {"key": "fecha", "label": "Fecha", "type": "text", "default": "2026-06-08"},
    {"key": "autor", "label": "Autor", "type": "text", "default": ""},
    {"key": "descripcion_general", "label": "Descripción general", "type": "textarea", "default": ""},
    {"key": "alcance", "label": "Alcance del sistema", "type": "textarea", "default": ""},
    {"key": "usuarios", "label": "Usuarios del sistema", "type": "textarea", "default": ""},
    {"key": "requisitos_funcionales", "label": "Requisitos funcionales", "type": "textarea", "default": ""},
    {"key": "requisitos_no_funcionales", "label": "Requisitos no funcionales", "type": "textarea", "default": ""},
    {"key": "restricciones", "label": "Restricciones", "type": "textarea", "default": ""},
]

CONTRATO_TEMPLATE = r"""
\documentclass[12pt]{article}
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage[a4paper,margin=3cm]{geometry}
\usepackage{xcolor,fancyhdr,microtype}
\definecolor{acento}{HTML}{C75B12}
\definecolor{suave}{HTML}{6B635B}
\pagestyle{fancy}\fancyhf{}
\fancyhead[C]{\color{suave}\small CONTRATO DE SERVICIOS}\fancyfoot[C]{\color{suave}\small \thepage}
\begin{document}
\begin{center}
{\fontsize{20}{24}\selectfont\textbf{Contrato de Prestación de Servicios}}\\[10pt]
{\color{suave} {{ciudad}}, {{fecha}}}
\end{center}
\vspace{0.8cm}
\noindent Entre \textbf{{{proveedor_nombre}}}, RNC/Cédula \textbf{{{proveedor_rnc}}}, con domicilio en {{proveedor_direccion}} (el \textit{Prestador}), y \textbf{{{cliente_nombre}}}, RNC/Cédula \textbf{{{cliente_rnc}}}, con domicilio en {{cliente_direccion}} (el \textit{Cliente}), se celebra el presente contrato sujeto a las siguientes cláusulas:

\vspace{0.5cm}
\noindent\textbf{PRIMERA — Objeto.} {{objeto_contrato}}

\vspace{0.4cm}
\noindent\textbf{SEGUNDA — Monto y Forma de Pago.} El valor total del contrato es de \textbf{{{moneda}} {{monto_total}}}. {{condiciones_pago}}

\vspace{0.4cm}
\noindent\textbf{TERCERA — Plazo.} {{plazo_entrega}}

\vspace{0.4cm}
\noindent\textbf{CUARTA — Confidencialidad.} Ambas partes se comprometen a mantener la más estricta confidencialidad respecto a la información intercambiada.

\vspace{0.4cm}
\noindent\textbf{QUINTA — Ley Aplicable.} El presente contrato se regirá por las leyes de la República Dominicana.

\vspace{1.5cm}
\begin{minipage}[t]{0.45\textwidth}
\rule{0.9\linewidth}{0.4pt}\\[4pt]
\textbf{{{proveedor_nombre}}}\\
{\color{suave}\small Prestador}
\end{minipage}
\hfill
\begin{minipage}[t]{0.45\textwidth}
\rule{0.9\linewidth}{0.4pt}\\[4pt]
\textbf{{{cliente_nombre}}}\\
{\color{suave}\small Cliente}
\end{minipage}
\end{document}
"""

CONTRATO_FIELDS = [
    {"key": "ciudad", "label": "Ciudad", "type": "text", "default": "Santo Domingo"},
    {"key": "fecha", "label": "Fecha", "type": "text", "default": "2026-06-08"},
    {"key": "proveedor_nombre", "label": "Nombre del prestador", "type": "text", "default": "Synset Solutions"},
    {"key": "proveedor_rnc", "label": "RNC/Cédula del prestador", "type": "text", "default": ""},
    {"key": "proveedor_direccion", "label": "Dirección del prestador", "type": "text", "default": ""},
    {"key": "cliente_nombre", "label": "Nombre del cliente", "type": "text", "default": ""},
    {"key": "cliente_rnc", "label": "RNC/Cédula del cliente", "type": "text", "default": ""},
    {"key": "cliente_direccion", "label": "Dirección del cliente", "type": "text", "default": ""},
    {"key": "objeto_contrato", "label": "Objeto del contrato", "type": "textarea", "default": ""},
    {"key": "moneda", "label": "Moneda", "type": "select", "default": "USD", "options": ["USD", "DOP", "EUR"]},
    {"key": "monto_total", "label": "Monto total", "type": "text", "default": ""},
    {"key": "condiciones_pago", "label": "Condiciones de pago", "type": "textarea", "default": ""},
    {"key": "plazo_entrega", "label": "Plazo de entrega", "type": "text", "default": ""},
]

TEMPLATES_SEED = [
    {"id": "tpl-cotizacion", "name": "Cotización", "category": "Comercial",
     "description": "Propuesta económica formal con desglose de servicios, ITBIS y condiciones.",
     "icon": "currency", "color": "#c75b12",
     "tex_template": COTIZACION_TEMPLATE, "fields": COTIZACION_FIELDS},
    {"id": "tpl-srs", "name": "SRS", "category": "Técnico",
     "description": "Especificación de Requisitos de Software para proyectos de desarrollo.",
     "icon": "code", "color": "#2563b8",
     "tex_template": SRS_TEMPLATE, "fields": SRS_FIELDS},
    {"id": "tpl-contrato", "name": "Contrato de Servicios", "category": "Legal",
     "description": "Contrato de prestación de servicios con cláusulas de pago y confidencialidad.",
     "icon": "shield", "color": "#1f8a4c",
     "tex_template": CONTRATO_TEMPLATE, "fields": CONTRATO_FIELDS},
]

async def seed_templates():
    async with pool.acquire() as conn:
        for tpl in TEMPLATES_SEED:
            await conn.execute("""
                INSERT INTO templates (id, name, category, description, icon, color, tex_template, fields)
                VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
                ON CONFLICT (id) DO NOTHING
            """, tpl["id"], tpl["name"], tpl["category"], tpl["description"],
                tpl["icon"], tpl["color"],
                tpl["tex_template"], json.dumps(tpl["fields"]))

# ── Compile ───────────────────────────────────────────────────────────────────
class CompileReq(BaseModel):
    id: str
    tex: str
    engine: str = "XeLaTeX"

@app.post("/compile")
async def compile_latex(req: CompileReq):
    run_id = str(uuid.uuid4())
    workdir = Path(tempfile.mkdtemp(prefix="tecto_"))
    (workdir / "main.tex").write_text(req.tex, encoding="utf-8")

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
        log = "Error: compilación superó el límite de 120 segundos."
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
        # Upsert document stub
        await conn.execute("""
            INSERT INTO documents (id, name, tex, engine, updated_at)
            VALUES ($1, 'draft', $2, $3, NOW())
            ON CONFLICT (id) DO UPDATE SET tex=EXCLUDED.tex, engine=EXCLUDED.engine, updated_at=NOW()
        """, req.id, req.tex, req.engine)
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
    return FileResponse(path, media_type="application/pdf", filename=f"{doc_id}.pdf")

# ── Templates ─────────────────────────────────────────────────────────────────
@app.get("/templates")
async def list_templates():
    async with pool.acquire() as conn:
        rows = await conn.fetch("SELECT id,name,category,description,icon,color FROM templates ORDER BY name")
    return [dict(r) for r in rows]

@app.get("/templates/{tpl_id}")
async def get_template(tpl_id: str):
    async with pool.acquire() as conn:
        row = await conn.fetchrow("SELECT * FROM templates WHERE id=$1", tpl_id)
    if not row:
        raise HTTPException(404)
    d = dict(row)
    d["fields"] = json.loads(d["fields"]) if isinstance(d["fields"], str) else d["fields"]
    return d

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
async def list_docs():
    async with pool.acquire() as conn:
        rows = await conn.fetch(
            "SELECT d.id, d.name, d.engine, d.updated_at, t.name as template_name, t.category, t.color "
            "FROM documents d LEFT JOIN templates t ON d.template_id=t.id "
            "ORDER BY d.updated_at DESC")
    return [dict(r) for r in rows]

@app.post("/docs")
async def create_doc_from_template(body: DocFromTemplate):
    doc_id = str(uuid.uuid4())
    async with pool.acquire() as conn:
        tpl = await conn.fetchrow("SELECT * FROM templates WHERE id=$1", body.template_id)
        if not tpl:
            raise HTTPException(404, "Plantilla no encontrada")
        fields = json.loads(tpl["fields"]) if isinstance(tpl["fields"], str) else tpl["fields"]
        defaults = {f["key"]: f.get("default", "") for f in fields}
        merged_data = {**defaults, **body.data}
        tex = render_template(tpl["tex_template"], merged_data)
        await conn.execute("""
            INSERT INTO documents (id, template_id, name, data, tex, engine, updated_at)
            VALUES ($1,$2,$3,$4,$5,$6,NOW())
        """, doc_id, body.template_id, body.name, json.dumps(merged_data), tex, body.engine)
    return {"id": doc_id, "name": body.name, "tex": tex}

@app.get("/docs/{doc_id}")
async def get_doc(doc_id: str):
    async with pool.acquire() as conn:
        row = await conn.fetchrow(
            "SELECT d.*, t.name as template_name, t.fields, t.tex_template "
            "FROM documents d LEFT JOIN templates t ON d.template_id=t.id WHERE d.id=$1", doc_id)
    if not row:
        raise HTTPException(404)
    d = dict(row)
    d["data"] = json.loads(d["data"]) if isinstance(d["data"], str) else (d["data"] or {})
    d["fields"] = json.loads(d["fields"]) if isinstance(d.get("fields"), str) else (d.get("fields") or [])
    return d

@app.put("/docs/{doc_id}")
async def update_doc(doc_id: str, body: DocUpdate):
    async with pool.acquire() as conn:
        row = await conn.fetchrow("SELECT * FROM documents WHERE id=$1", doc_id)
        if not row:
            raise HTTPException(404)
        # If data changed, re-render tex from template
        if body.data is not None:
            tpl = await conn.fetchrow("SELECT * FROM templates WHERE id=$1", row["template_id"])
            if tpl:
                current_data = json.loads(row["data"]) if isinstance(row["data"], str) else (row["data"] or {})
                merged = {**current_data, **body.data}
                rendered_tex = render_template(tpl["tex_template"], merged)
                await conn.execute("""
                    UPDATE documents SET data=$2, tex=$3, updated_at=NOW() WHERE id=$1
                """, doc_id, json.dumps(merged), rendered_tex)
                return {"ok": True, "tex": rendered_tex}
        # Direct tex update
        if body.tex is not None:
            await conn.execute("UPDATE documents SET tex=$2, updated_at=NOW() WHERE id=$1", doc_id, body.tex)
        if body.name is not None:
            await conn.execute("UPDATE documents SET name=$2 WHERE id=$1", doc_id, body.name)
        if body.engine is not None:
            await conn.execute("UPDATE documents SET engine=$2 WHERE id=$1", doc_id, body.engine)
    return {"ok": True}

@app.delete("/docs/{doc_id}")
async def delete_doc(doc_id: str):
    async with pool.acquire() as conn:
        await conn.execute("DELETE FROM documents WHERE id=$1", doc_id)
    (PDF_DIR / f"{doc_id}.pdf").unlink(missing_ok=True)
    return {"ok": True}

@app.get("/history/{doc_id}")
async def get_history(doc_id: str):
    async with pool.acquire() as conn:
        rows = await conn.fetch(
            "SELECT id,status,duration_ms,pdf_size_kb,created_at FROM compile_runs "
            "WHERE document_id=$1 ORDER BY created_at DESC LIMIT 50", doc_id)
    return [dict(r) for r in rows]

@app.get("/health")
async def health():
    return {"ok": True}

# Static files (must be last)
app.mount("/", StaticFiles(directory="/app/static", html=True), name="static")
