# Documentación de Tecto

Tecto es un sistema de generación de documentos corporativos basado en LaTeX.

---

## Flujo de Trabajo

1. **Selección:** Elige una plantilla desde el panel de Plantillas.
2. **Cliente:** Tecto te preguntará a qué cliente pertenece el documento (existente o nuevo).
3. **Edición:** Llena los campos dinámicos en el formulario de la izquierda.
4. **Compilación:** Haz clic en **Compilar** para generar el PDF real con Tectonic.
5. **Descarga:** Descarga el PDF o vuelve a editarlo cuando quieras.

---

## Campos Dinámicos en Plantillas

El formulario de cada plantilla se genera **automáticamente** a partir del código `.tex`. Tú decides qué campos aparecen, cómo se llaman, qué tipo son y en qué sección van — sin tocar el frontend.

### Sintaxis

Agrega comentarios especiales (`%%`) en tu `.tex`. LaTeX los ignora; Tecto los lee para construir el formulario.

#### Definir una sección

```latex
%% SECTION: Nombre de la sección
```

Agrupa los campos que le siguen bajo ese encabezado en el formulario.

#### Definir un campo

```latex
%% {{clave|Label del campo|tipo|valor_default}}
```

| Parte | Descripción |
|---|---|
| `clave` | Nombre interno, sin espacios. Se usa como `{{clave}}` en el cuerpo del documento. |
| `Label del campo` | Texto que ve el usuario en el formulario. |
| `tipo` | `text` · `textarea` · `date` · `number` · `select` |
| `valor_default` | (Opcional) Valor prellenado al crear el documento. |

Para `select`, agrega las opciones separadas por coma como quinto parámetro:

```latex
%% {{moneda|Moneda|select|USD|USD,DOP,EUR}}
```

### Ejemplo completo

```latex
\documentclass[12pt]{article}
\usepackage{fontspec}          % ← requerido para tildes y UTF-8 con XeLaTeX
\usepackage[a4paper,margin=2.5cm]{geometry}

%% SECTION: Datos del Proyecto
%% {{proyecto|Nombre del proyecto|text}}
%% {{version|Versión|text|1.0}}
%% {{fecha|Fecha|date}}

%% SECTION: Descripción
%% {{descripcion|Descripción general|textarea}}
%% {{alcance|Alcance|textarea}}

\begin{document}
\section*{{{proyecto}} — v{{version}}}
{\small {{fecha}}}

\subsection*{Descripción}
{{descripcion}}

\subsection*{Alcance}
{{alcance}}
\end{document}
```

Cada vez que guardas la plantilla, Tecto re-parsea el `.tex` y actualiza el formulario automáticamente.

> **Importante:** Tecto usa **XeLaTeX** (Tectonic). Si tu plantilla contiene tildes, eñes u otros caracteres especiales, debes incluir `\usepackage{fontspec}` inmediatamente después de `\documentclass`. Sin él, XeLaTeX falla al procesar UTF-8 y arroja un error en línea 1.

### Usar el campo en el documento

En el cuerpo LaTeX usa `{{clave}}` sin metadatos — solo la clave:

```latex
% Definición (en comentario, arriba):
%% {{cliente_nombre|Nombre del cliente|text}}

% Uso (en el cuerpo):
\textbf{{{cliente_nombre}}}
```

Si usas `{{clave|Label|tipo}}` directamente en el cuerpo (sin el `%%`), también funciona — Tecto extrae el label del primer uso y usa la clave para sustituir.

---

## Gestión de Plantillas

- **Nueva plantilla:** Haz clic en **＋** en el panel de Plantillas. Escribe el `.tex` en el editor y guarda — los campos se generan solos.
- **Editar plantilla existente:** Selecciónala, modifica el `.tex` y guarda. El formulario se actualiza al instante.
- **Vista previa:** Usa el botón **Previsualizar** para compilar con valores de ejemplo antes de crear documentos reales.

---

## Assets

Sube logos e imágenes desde la sección de Assets. Los archivos persisten aunque redespliegues el servidor.

Para usar un asset en LaTeX:

```latex
\includegraphics[width=4cm]{/app/assets/logo.png}
```

---

## Persistencia

- **PDFs compilados** — guardados en volumen Docker `tecto_pdfs`. No se pierden al redesplegar.
- **Assets subidos** — guardados en volumen Docker `tecto_assets`. No se pierden al redesplegar.
- **Documentos y clientes** — almacenados en PostgreSQL.
