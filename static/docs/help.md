# Tecto — Documentación

Generador de documentos corporativos basado en LaTeX. Define plantillas con campos dinámicos una vez; genera PDFs compilados con XeLaTeX (Tectonic) en segundos.

---

## Inicio rápido

1. Ve a **Plantillas** y haz clic en **＋** para crear una plantilla nueva.
2. Escribe tu LaTeX en el editor. Declara campos con `%%` en la parte superior del documento.
3. Haz clic en **Guardar** — el formulario lateral se genera automáticamente a partir del código.
4. Ve a **Documentos** → selecciona la plantilla → **Nuevo documento**. Asigna un cliente.
5. Rellena el formulario y haz clic en **Compilar**. El PDF aparece en el panel derecho.

> **Motor:** Tecto usa **XeLaTeX** vía Tectonic. Siempre incluye `\usepackage{fontspec}` para que funcionen tildes y caracteres especiales.

---

## Conceptos clave

| Término | Definición |
|---|---|
| **Plantilla** | Archivo `.tex` con campos dinámicos. Define la estructura del documento. |
| **Campo** | Variable declarada con `%%`. Genera un input en el formulario. |
| **Documento** | Instancia de una plantilla con valores reales, compilada en PDF. |
| **Cliente** | Entidad destinataria del documento. Se crea al generar el primero. |
| **Sección** | Grupo visual de campos en el formulario. Se declara con `%% SECTION:`. |

---

## Sintaxis de plantillas

Los comentarios especiales `%%` son ignorados por LaTeX. Tecto los interpreta para construir el formulario dinámico.

### Secciones de formulario

Agrupa los campos bajo un encabezado:

```latex
%% SECTION: Datos del cliente
```
```result
Crea un encabezado visible "Datos del cliente" en el formulario.
Los campos declarados después quedan agrupados bajo él.
```

### Declaración de campos

Sintaxis completa:

```
%% {{clave|Label visible|tipo[|default[|opciones]]}}
```

| Parámetro | Req. | Descripción |
|---|---|---|
| `clave` | ✓ | Nombre interno. Sin espacios ni caracteres especiales. Se usa como `{{clave}}` en el cuerpo. |
| `Label visible` | ✓ | Texto que ve el usuario en el formulario. |
| `tipo` | ✓ | `text` · `textarea` · `date` · `number` · `select` |
| `default` | — | Valor prellenado. Opcional para todos los tipos. |
| `opciones` | Solo `select` | Lista de valores separados por coma. |

---

## Tipos de campo

### `text` — Texto corto

Para nombres, títulos o identificadores de una línea.

```latex
%% {{empresa|Nombre de la empresa|text|Mi Empresa S.A.}}
```
```result
Formulario: campo de texto "Nombre de la empresa", prellenado con "Mi Empresa S.A."
PDF → {{empresa}}: Mi Empresa S.A.
```

### `textarea` — Texto largo

Para descripciones, cláusulas, observaciones o cualquier contenido multilínea.

```latex
%% {{alcance|Alcance del proyecto|textarea}}
```
```result
Formulario: área de texto multilínea "Alcance del proyecto", sin valor por defecto.
PDF → {{alcance}}: el texto exacto que el usuario escribió (incluyendo saltos de línea).
```

### `date` — Fecha

```latex
%% {{fecha|Fecha de emisión|date}}
```
```result
Formulario: selector de fecha "Fecha de emisión".
PDF → {{fecha}}: 2026-06-09 (formato YYYY-MM-DD).
```

### `number` — Número

```latex
%% {{monto|Monto total|number|0}}
```
```result
Formulario: campo numérico "Monto total", prellenado con 0.
PDF → {{monto}}: el número exacto ingresado (ej. 2500).
```

### `select` — Opciones fijas

```latex
%% {{moneda|Moneda|select|USD|USD,DOP,EUR}}
```
```result
Formulario: menú desplegable "Moneda" con opciones USD / DOP / EUR.
Valor por defecto: USD.
PDF → {{moneda}}: la opción que el usuario seleccionó.
```

---

## Usar campos en el cuerpo del documento

En el cuerpo LaTeX escribe solo `{{clave}}` — sin el label ni el tipo:

```latex
%% SECTION: Datos del cliente
%% {{cliente|Nombre del cliente|text}}
%% {{ruc|RUC / Cédula|text}}
%% {{moneda|Moneda|select|USD|USD,DOP,EUR}}

\begin{document}

\noindent\textbf{Cliente:} {{cliente}} \\
\textbf{RUC:}     {{ruc}}   \\
\textbf{Moneda:}  {{moneda}}

\end{document}
```
```result
Formulario: sección "Datos del cliente" con 3 campos (texto, texto, select).
PDF: imprime los valores exactos donde aparecen {{cliente}}, {{ruc}} y {{moneda}}.
```

> **Tip:** Puedes usar `{{clave}}` en el preámbulo, en macros, dentro de tablas, en `\includegraphics`, en cualquier parte del documento.

---

## Plantillas completas de ejemplo

### Cotización de servicios

Copia, pega en el editor y guarda. El formulario se genera automáticamente.

```latex
\documentclass[12pt]{article}
\usepackage{fontspec}
\usepackage[a4paper, top=2.5cm, bottom=2.5cm, left=3cm, right=3cm]{geometry}
\usepackage{booktabs, xcolor, array}

\definecolor{brand}{HTML}{1F3A5F}

%% SECTION: Emisor
%% {{empresa|Nombre de la empresa|text|Mi Empresa S.A.}}
%% {{emisor_ruc|RUC del emisor|text}}
%% {{emisor_email|Email de contacto|text}}

%% SECTION: Cliente
%% {{cliente|Nombre del cliente|text}}
%% {{cliente_ruc|RUC del cliente|text}}

%% SECTION: Documento
%% {{numero|N.o cotizacion|text|COT-001}}
%% {{fecha|Fecha|date}}
%% {{moneda|Moneda|select|USD|USD,DOP,EUR}}
%% {{validez|Valida por|text|30 dias}}

%% SECTION: Servicio
%% {{descripcion|Descripcion del servicio|textarea}}
%% {{monto|Monto total|number|0}}

\begin{document}

\begin{center}
  {\color{brand}\LARGE\bfseries COTIZACION \textnumero\ {{numero}}}\\[6pt]
  {\small Fecha: {{fecha}} \quad\textbar\quad Valida por: {{validez}}}
\end{center}

\vspace{10pt}
\noindent\textbf{Emisor:} {{empresa}} \quad RUC: {{emisor_ruc}} \quad {{emisor_email}}\\
\textbf{Cliente:} {{cliente}} \quad RUC: {{cliente_ruc}}

\vspace{14pt}
\begin{tabular}{>{\bfseries}p{3.5cm} p{7.5cm} r}
\toprule
Descripcion & {{descripcion}} & {{moneda}} {{monto}} \\
\midrule
\multicolumn{2}{r}{\bfseries Total} & \bfseries {{moneda}} {{monto}} \\
\bottomrule
\end{tabular}

\vspace{16pt}
{\small Esta cotizacion es valida por {{validez}} a partir de la fecha de emision.}

\end{document}
```
```result
Formulario: 4 secciones con 10 campos. Tipos usados: text, textarea, date, number, select.
PDF: carta de cotizacion con tabla de precio, encabezado con logo de empresa y validez.
Compilar con XeLaTeX. Incluye fontspec — no necesita configuracion adicional.
```

### Informe tecnico

```latex
\documentclass[12pt]{article}
\usepackage{fontspec}
\usepackage[a4paper, margin=2.8cm]{geometry}
\usepackage{titlesec, xcolor, microtype}

\definecolor{hdr}{HTML}{2C3E50}
\titleformat{\section}{\color{hdr}\bfseries\large}{}{0em}{}[\color{hdr}\titlerule]

%% SECTION: Encabezado
%% {{titulo|Titulo del informe|text}}
%% {{autor|Autor|text}}
%% {{fecha|Fecha|date}}
%% {{version|Version|text|1.0}}
%% {{clasificacion|Clasificacion|select|Interno|Publico,Interno,Confidencial}}

%% SECTION: Contenido
%% {{resumen|Resumen ejecutivo|textarea}}
%% {{hallazgos|Hallazgos principales|textarea}}
%% {{recomendaciones|Recomendaciones|textarea}}
%% {{conclusiones|Conclusiones|textarea}}

\begin{document}

\begin{center}
  {\Huge\bfseries\color{hdr} {{titulo}}}\\[8pt]
  {\large {{autor}}} \quad {\small v{{version}} \textbar\ {{fecha}}}\\[4pt]
  {\small\color{gray} Clasificacion: {{clasificacion}}}
\end{center}

\section{Resumen ejecutivo}
{{resumen}}

\section{Hallazgos}
{{hallazgos}}

\section{Recomendaciones}
{{recomendaciones}}

\section{Conclusiones}
{{conclusiones}}

\end{document}
```
```result
Formulario: 2 secciones con 9 campos (texto corto x5, textarea x4, select x1).
PDF: informe estructurado con titulo centrado, version, clasificacion y 4 secciones con regla decorativa.
```

---

## Assets e imagenes

Sube logos e imagenes desde **Assets** en la barra lateral. Los archivos se guardan en un volumen persistente independiente del contenedor.

```latex
\usepackage{graphicx}

% En el cuerpo del documento:
\includegraphics[width=4cm]{/app/assets/logo.png}
```
```result
Inserta la imagen "logo.png" con ancho de 4 cm.
El path siempre es /app/assets/ seguido del nombre exacto del archivo subido.
```

Formatos compatibles con XeLaTeX: **PNG**, **JPEG**, **PDF**. No se admite SVG.

---

## Editor libre

Accede desde **Editor libre** en la barra lateral. Escribe cualquier documento LaTeX sin plantilla, compila y descarga el PDF directamente.

```latex
\documentclass[12pt]{article}
\usepackage{fontspec}
\usepackage[a4paper, margin=2.5cm]{geometry}

\begin{document}

\section*{Mi documento}
Contenido escrito directamente sin plantilla.

\end{document}
```
```result
El PDF aparece en el panel derecho al compilar.
No genera formulario ni guarda en base de datos — solo compila y descarga.
Ideal para documentos unicos o pruebas rapidas de LaTeX.
```

---

## Errores frecuentes

| Error o sintoma | Causa | Solucion |
|---|---|---|
| `Font ... not found` en linea 1 | Falta `\usepackage{fontspec}` | Agrega `\usepackage{fontspec}` justo despues de `\documentclass`. |
| Tildes o enes corruptos | `fontspec` ausente | Igual que arriba. |
| `Undefined control sequence \X` | Paquete faltante | Verifica que el paquete este disponible en Tectonic (CTAN). |
| `File X not found` (imagen) | Path incorrecto | Usa `/app/assets/nombre-exacto.ext`. Verifica en Assets que el archivo este subido. |
| El formulario no se actualiza | Sintaxis `%%` incorrecta | Revisa el formato: `%% {{clave\|Label\|tipo}}`. Sin espacios extra alrededor de `\|`. |
| PDF en blanco | `\begin{document}` faltante | Asegurate de cerrar el preambulo con `\begin{document}` y abrir `\end{document}` al final. |
| Error en la tabla del formulario | `select` sin opciones | El tipo `select` requiere default y opciones: `\|select\|default\|op1,op2,op3`. |

---

## Referencia rapida

### Resumen de sintaxis

```
%% SECTION: Nombre del grupo

%% {{clave|Label|text[|default]}}
%% {{clave|Label|textarea[|default]}}
%% {{clave|Label|date[|YYYY-MM-DD]}}
%% {{clave|Label|number[|0]}}
%% {{clave|Label|select|default|opcion1,opcion2,opcion3}}

% Uso en el cuerpo (sin %%, sin label ni tipo):
{{clave}}
```

### Paquetes LaTeX recomendados

| Paquete | Para que sirve |
|---|---|
| `fontspec` | UTF-8 con XeLaTeX — **obligatorio** para tildes y enes |
| `geometry` | Margenes y tamano de pagina |
| `xcolor` | Colores en texto y fondos |
| `graphicx` | Imagenes con `\includegraphics` |
| `booktabs` | Tablas profesionales: `\toprule`, `\midrule`, `\bottomrule` |
| `microtype` | Mejoras tipograficas automaticas |
| `hyperref` | Links y metadatos PDF |
| `titlesec` | Personalizar estilos de secciones |
| `array` | Columnas con formato en tabular |
| `multicol` | Layouts en multiples columnas |

### Flujo de trabajo de plantillas

```
1. Crear plantilla
   └─ Nuevo en Plantillas → escribe .tex → Guardar
        └─ Tecto parsea %% y genera el formulario

2. Previsualizar
   └─ Boton "Previsualizar" → compila con valores de ejemplo
        └─ Ver PDF en panel derecho

3. Crear documento
   └─ Documentos → selecciona plantilla → Nuevo documento
        └─ Asigna cliente → rellena formulario → Compilar → Descargar
```
