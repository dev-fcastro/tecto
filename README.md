# Tecto

Generador de documentos corporativos basado en LaTeX. Define plantillas con campos dinámicos una vez; genera PDFs compilados con XeLaTeX (Tectonic) en segundos.

**Uso exclusivo con licencia — ver [LICENSE](./LICENSE)**

---

## Características

- **Plantillas LaTeX dinámicas** — declara campos con comentarios `%%`, el formulario se genera automáticamente
- **Compilación real con XeLaTeX** vía Tectonic — soporte completo de UTF-8, tildes, eñes
- **Editor con syntax highlighting** — tokenizador LaTeX en tiempo real, split pane redimensionable
- **Gestión de documentos** — historial por cliente, descarga de PDFs compilados
- **Assets persistentes** — logos e imágenes en volumen Docker independiente
- **Editor libre** — compila cualquier LaTeX ad-hoc sin plantilla

## Stack

| Capa | Tecnología |
|---|---|
| Backend | Python 3.12 + FastAPI + asyncpg |
| Compilación LaTeX | Tectonic (XeLaTeX) |
| Frontend | React 18 (CDN) + Babel standalone |
| Base de datos | PostgreSQL |
| Contenedor | Docker + Compose |
| CI/CD | GitHub Actions → GHCR |

## Imagen Docker

```bash
docker pull ghcr.io/odimsom/tecto:latest
```

## Despliegue rápido

```yaml
services:
  tecto:
    image: ghcr.io/odimsom/tecto:latest
    environment:
      DATABASE_URL: postgresql://user:pass@host:5432/tecto
    volumes:
      - tecto_pdfs:/app/pdfs
      - tecto_assets:/app/assets
    ports:
      - "8080:8080"

volumes:
  tecto_pdfs:
  tecto_assets:
```

## Sintaxis de plantillas

```latex
\documentclass[12pt]{article}
\usepackage{fontspec}

%% SECTION: Datos del cliente
%% {{cliente|Nombre del cliente|text}}
%% {{fecha|Fecha|date}}
%% {{monto|Monto total|number|0}}
%% {{moneda|Moneda|select|USD|USD,DOP,EUR}}

\begin{document}
  \textbf{{{cliente}}} — {{fecha}} \\
  Total: {{moneda}} {{monto}}
\end{document}
```

Tipos de campo disponibles: `text`, `textarea`, `date`, `number`, `select`

## CI/CD

Cada push a `master` → build → push a GHCR → deploy automático vía SSH.
Tags `v*.*.*` → además crea un GitHub Release con notas auto-generadas.

## Licencia

Software propietario de **Synset Solutions**. Requiere licencia para su uso.
Contacto: [synsetsolutions.com](https://synsetsolutions.com)
