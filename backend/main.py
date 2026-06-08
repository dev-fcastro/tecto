import asyncio, os, shutil, tempfile, time, uuid
from pathlib import Path
from typing import Optional

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
import asyncpg

# ── Config ────────────────────────────────────────────────────────────────────
DB_URL = os.environ.get(
    "DATABASE_URL",
    "postgresql://synset_admin:xWdiVJl7y1eJJhcO6S/Aqfgz1QvPznGs@synset-postgres:5432/tecto",
)
PDF_DIR = Path("/tmp/tecto_pdfs")
PDF_DIR.mkdir(exist_ok=True)

app = FastAPI(title="Tecto API", version="1.0.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── DB pool ───────────────────────────────────────────────────────────────────
pool: Optional[asyncpg.Pool] = None

@app.on_event("startup")
async def startup():
    global pool
    pool = await asyncpg.create_pool(DB_URL)

@app.on_event("shutdown")
async def shutdown():
    await pool.close()

# ── Models ────────────────────────────────────────────────────────────────────
class CompileReq(BaseModel):
    id: str
    tex: str
    engine: str = "XeLaTeX"

class DocCreate(BaseModel):
    name: str
    tex: str = ""
    engine: str = "XeLaTeX"

class DocUpdate(BaseModel):
    name: Optional[str] = None
    tex: Optional[str] = None
    engine: Optional[str] = None

# ── Compile ───────────────────────────────────────────────────────────────────
def tectonic_flags(engine: str) -> list[str]:
    flags: list[str] = []
    if engine == "XeLaTeX":
        flags += ["--chatter", "minimal"]
    elif engine == "LuaLaTeX":
        flags += ["--chatter", "minimal"]
    return flags

@app.post("/compile")
async def compile_latex(req: CompileReq):
    run_id = str(uuid.uuid4())
    workdir = Path(tempfile.mkdtemp(prefix="tecto_"))
    tex_file = workdir / "main.tex"
    tex_file.write_text(req.tex, encoding="utf-8")

    cmd = ["tectonic"] + tectonic_flags(req.engine) + [str(tex_file)]
    t0 = time.monotonic()
    try:
        proc = await asyncio.create_subprocess_exec(
            *cmd,
            cwd=workdir,
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.STDOUT,
        )
        stdout, _ = await asyncio.wait_for(proc.communicate(), timeout=120)
        log = stdout.decode("utf-8", errors="replace")
        ok = proc.returncode == 0
    except asyncio.TimeoutError:
        log = "Error: compilación superó el límite de 120 segundos."
        ok = False
    finally:
        pass

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
        # Upsert doc so compile_runs FK works even for new docs
        await conn.execute(
            """
            INSERT INTO documents (id, name, tex, engine, updated_at)
            VALUES ($1, 'Untitled', $2, $3, NOW())
            ON CONFLICT (id) DO UPDATE
              SET tex = EXCLUDED.tex, engine = EXCLUDED.engine, updated_at = NOW()
            """,
            req.id, req.tex, req.engine,
        )
        await conn.execute(
            """
            INSERT INTO compile_runs (id, document_id, status, duration_ms, pdf_size_kb, log, created_at)
            VALUES ($1, $2, $3, $4, $5, $6, NOW())
            """,
            run_id, req.id, status, ms, pdf_size, log,
        )

    if ok:
        return {"ok": True, "pdf_url": f"/download/{req.id}", "ms": ms, "kb": pdf_size}
    return {"ok": False, "log": log, "ms": ms}

@app.get("/download/{doc_id}")
async def download_pdf(doc_id: str):
    path = PDF_DIR / f"{doc_id}.pdf"
    if not path.exists():
        raise HTTPException(404, "PDF no encontrado")
    return FileResponse(path, media_type="application/pdf", filename=f"{doc_id}.pdf")

# ── Documents CRUD ────────────────────────────────────────────────────────────
@app.get("/docs")
async def list_docs():
    async with pool.acquire() as conn:
        rows = await conn.fetch(
            "SELECT id, name, engine, updated_at FROM documents ORDER BY updated_at DESC"
        )
    return [dict(r) for r in rows]

@app.post("/docs")
async def create_doc(body: DocCreate):
    doc_id = str(uuid.uuid4())
    async with pool.acquire() as conn:
        await conn.execute(
            "INSERT INTO documents (id, name, tex, engine, updated_at) VALUES ($1,$2,$3,$4,NOW())",
            doc_id, body.name, body.tex, body.engine,
        )
    return {"id": doc_id, "name": body.name, "engine": body.engine}

@app.get("/docs/{doc_id}")
async def get_doc(doc_id: str):
    async with pool.acquire() as conn:
        row = await conn.fetchrow("SELECT * FROM documents WHERE id=$1", doc_id)
    if not row:
        raise HTTPException(404, "Documento no encontrado")
    return dict(row)

@app.put("/docs/{doc_id}")
async def update_doc(doc_id: str, body: DocUpdate):
    async with pool.acquire() as conn:
        row = await conn.fetchrow("SELECT * FROM documents WHERE id=$1", doc_id)
        if not row:
            raise HTTPException(404)
        updates = {k: v for k, v in body.dict().items() if v is not None}
        if updates:
            sets = ", ".join(f"{k}=${i+2}" for i, k in enumerate(updates))
            vals = list(updates.values())
            await conn.execute(
                f"UPDATE documents SET {sets}, updated_at=NOW() WHERE id=$1",
                doc_id, *vals,
            )
    return {"ok": True}

@app.delete("/docs/{doc_id}")
async def delete_doc(doc_id: str):
    async with pool.acquire() as conn:
        await conn.execute("DELETE FROM documents WHERE id=$1", doc_id)
    path = PDF_DIR / f"{doc_id}.pdf"
    path.unlink(missing_ok=True)
    return {"ok": True}

@app.get("/history/{doc_id}")
async def get_history(doc_id: str):
    async with pool.acquire() as conn:
        rows = await conn.fetch(
            """SELECT id, status, duration_ms, pdf_size_kb, created_at
               FROM compile_runs WHERE document_id=$1
               ORDER BY created_at DESC LIMIT 50""",
            doc_id,
        )
    return [dict(r) for r in rows]

# ── Health ────────────────────────────────────────────────────────────────────
@app.get("/health")
async def health():
    return {"ok": True}

# ── Frontend (must be last) ───────────────────────────────────────────────────
app.mount("/", StaticFiles(directory="/app/static", html=True), name="static")
