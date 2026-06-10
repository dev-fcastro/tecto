/* @ds-bundle: {"format":3,"namespace":"TectoDesignSystem_02cc26","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Kbd","sourcePath":"components/core/Kbd.jsx"},{"name":"Spinner","sourcePath":"components/core/Spinner.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"DocRow","sourcePath":"components/data/DocRow.jsx"},{"name":"StatusPill","sourcePath":"components/feedback/StatusPill.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"df8ebe060d87","components/core/Button.jsx":"6ff52f852c54","components/core/IconButton.jsx":"7ac586458f3c","components/core/Kbd.jsx":"2404922a1aba","components/core/Spinner.jsx":"cddcd32e3fee","components/data/Card.jsx":"dc50c4a9ba5e","components/data/DocRow.jsx":"77d021a1fa38","components/feedback/StatusPill.jsx":"b417cc2c0d34","components/feedback/Toast.jsx":"7b68048df3a0","components/feedback/Tooltip.jsx":"e544875a42a3","components/forms/Input.jsx":"3ae019b91147","components/forms/Select.jsx":"7f74617bff85","components/forms/Switch.jsx":"9244ca8f2db2","components/forms/Textarea.jsx":"d440187d01dd","components/navigation/Tabs.jsx":"0929847252be","ui_kits/tecto/App.jsx":"de6b7eddb2c8","ui_kits/tecto/Chrome.jsx":"4ab5e7f3159d","ui_kits/tecto/CorpDocs.jsx":"7d326bb7d66c","ui_kits/tecto/Editor.jsx":"ed30733ad2b3","ui_kits/tecto/Generator.jsx":"0eeeb81a9b20","ui_kits/tecto/Icons.jsx":"d88c89fd605d","ui_kits/tecto/PdfPreview.jsx":"0521f3c86263","ui_kits/tecto/Sample.jsx":"2c27d82914c8","ui_kits/tecto/Screens.jsx":"33a40b8ae9a4","ui_kits/tecto/TemplateEditor.jsx":"1df0991ecd2d","ui_kits/tecto/WorkspaceScreens.jsx":"77929d75f839"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TectoDesignSystem_02cc26 = window.TectoDesignSystem_02cc26 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Tecto — Badge */
(function injectTectoBadgeCSS() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('tecto-badge-css')) return;
  const css = `
.tecto-badge {
  display: inline-flex; align-items: center; gap: 5px;
  height: 20px; padding: 0 8px;
  font-family: var(--font-sans); font-size: var(--text-2xs); font-weight: var(--weight-semibold);
  line-height: 1; letter-spacing: var(--tracking-wide); white-space: nowrap;
  border-radius: var(--radius-full); border: 1px solid transparent;
}
.tecto-badge--mono { font-family: var(--font-mono); letter-spacing: 0; text-transform: none; }
.tecto-badge__dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
.tecto-badge--neutral { background: var(--surface-sunken); color: var(--ink-muted); border-color: var(--border); }
.tecto-badge--brand   { background: var(--accent-subtle-bg); color: var(--accent-subtle-fg); }
.tecto-badge--success { background: var(--success-bg); color: var(--success-fg); }
.tecto-badge--danger  { background: var(--danger-bg); color: var(--danger-fg); }
.tecto-badge--warning { background: var(--warning-bg); color: var(--warning-fg); }
.tecto-badge--info    { background: var(--info-bg); color: var(--info-fg); }
.tecto-badge--solid.tecto-badge--brand   { background: var(--accent); color: var(--accent-on); }
.tecto-badge--solid.tecto-badge--success { background: var(--success); color: #fff; }
.tecto-badge--solid.tecto-badge--danger  { background: var(--danger); color: #fff; }
`;
  const el = document.createElement('style');
  el.id = 'tecto-badge-css';
  el.textContent = css;
  document.head.appendChild(el);
})();
function Badge({
  tone = 'neutral',
  solid = false,
  dot = false,
  mono = false,
  className = '',
  children,
  ...rest
}) {
  const classes = ['tecto-badge', `tecto-badge--${tone}`, solid ? 'tecto-badge--solid' : '', mono ? 'tecto-badge--mono' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: classes
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "tecto-badge__dot",
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Tecto — Button */
(function injectTectoButtonCSS() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('tecto-button-css')) return;
  const css = `
.tecto-btn {
  --_h: 34px; --_px: 14px; --_fs: var(--text-base); --_gap: 8px;
  display: inline-flex; align-items: center; justify-content: center; gap: var(--_gap);
  height: var(--_h); padding: 0 var(--_px);
  font-family: var(--font-sans); font-size: var(--_fs); font-weight: var(--weight-medium);
  line-height: 1; letter-spacing: var(--tracking-tight);
  border-radius: var(--radius-md); border: 1px solid transparent;
  cursor: pointer; user-select: none; white-space: nowrap;
  transition: background-color var(--dur-1) var(--ease-out), border-color var(--dur-1) var(--ease-out),
              color var(--dur-1) var(--ease-out), box-shadow var(--dur-1) var(--ease-out), transform var(--dur-1) var(--ease-out);
}
.tecto-btn:focus-visible { outline: none; box-shadow: var(--shadow-focus); }
.tecto-btn:active { transform: translateY(0.5px); }
.tecto-btn[disabled], .tecto-btn[aria-disabled="true"] { opacity: 0.5; cursor: not-allowed; pointer-events: none; }
.tecto-btn--sm { --_h: 28px; --_px: 10px; --_fs: var(--text-sm); --_gap: 6px; }
.tecto-btn--lg { --_h: 40px; --_px: 18px; --_fs: var(--text-md); --_gap: 9px; }
.tecto-btn--block { width: 100%; }

.tecto-btn--primary { background: var(--accent); color: var(--accent-on); }
.tecto-btn--primary:hover { background: var(--accent-hover); }
.tecto-btn--primary:active { background: var(--accent-active); }

.tecto-btn--secondary { background: var(--surface); color: var(--ink); border-color: var(--border-strong); box-shadow: var(--shadow-xs); }
.tecto-btn--secondary:hover { background: var(--surface-hover); border-color: var(--border-strong); }
.tecto-btn--secondary:active { background: var(--bg-subtle); }

.tecto-btn--ghost { background: transparent; color: var(--ink-muted); }
.tecto-btn--ghost:hover { background: var(--surface-hover); color: var(--ink); }

.tecto-btn--danger { background: var(--danger); color: #fff; }
.tecto-btn--danger:hover { filter: brightness(0.94); }

.tecto-btn__spin { width: 14px; height: 14px; border-radius: 50%;
  border: 2px solid currentColor; border-top-color: transparent; animation: tecto-btn-spin 0.6s linear infinite; }
@keyframes tecto-btn-spin { to { transform: rotate(360deg); } }
.tecto-btn__ico { display: inline-flex; width: 16px; height: 16px; }
.tecto-btn__ico svg { width: 100%; height: 100%; }
`;
  const el = document.createElement('style');
  el.id = 'tecto-button-css';
  el.textContent = css;
  document.head.appendChild(el);
})();
function Button({
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  loading = false,
  disabled = false,
  fullWidth = false,
  type = 'button',
  className = '',
  children,
  ...rest
}) {
  const classes = ['tecto-btn', `tecto-btn--${variant}`, size !== 'md' ? `tecto-btn--${size}` : '', fullWidth ? 'tecto-btn--block' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: classes,
    disabled: disabled || loading,
    "aria-busy": loading || undefined
  }, rest), loading && /*#__PURE__*/React.createElement("span", {
    className: "tecto-btn__spin",
    "aria-hidden": "true"
  }), !loading && iconLeft && /*#__PURE__*/React.createElement("span", {
    className: "tecto-btn__ico",
    "aria-hidden": "true"
  }, iconLeft), children, !loading && iconRight && /*#__PURE__*/React.createElement("span", {
    className: "tecto-btn__ico",
    "aria-hidden": "true"
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Tecto — IconButton */
(function injectTectoIconButtonCSS() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('tecto-iconbutton-css')) return;
  const css = `
.tecto-iconbtn {
  --_s: 34px;
  display: inline-flex; align-items: center; justify-content: center;
  width: var(--_s); height: var(--_s); padding: 0;
  border-radius: var(--radius-md); border: 1px solid transparent;
  background: transparent; color: var(--ink-muted); cursor: pointer;
  transition: background-color var(--dur-1) var(--ease-out), color var(--dur-1) var(--ease-out),
              border-color var(--dur-1) var(--ease-out), box-shadow var(--dur-1) var(--ease-out);
}
.tecto-iconbtn:hover { background: var(--surface-hover); color: var(--ink); }
.tecto-iconbtn:active { background: var(--bg-subtle); }
.tecto-iconbtn:focus-visible { outline: none; box-shadow: var(--shadow-focus); }
.tecto-iconbtn[disabled] { opacity: 0.45; cursor: not-allowed; pointer-events: none; }
.tecto-iconbtn--sm { --_s: 28px; }
.tecto-iconbtn--lg { --_s: 40px; }
.tecto-iconbtn--solid { background: var(--surface); border-color: var(--border-strong); box-shadow: var(--shadow-xs); }
.tecto-iconbtn--solid:hover { background: var(--surface-hover); }
.tecto-iconbtn--accent { background: var(--accent); color: var(--accent-on); }
.tecto-iconbtn--accent:hover { background: var(--accent-hover); }
.tecto-iconbtn[aria-pressed="true"] { background: var(--accent-subtle-bg); color: var(--accent-subtle-fg); }
.tecto-iconbtn__ico { display: inline-flex; width: 18px; height: 18px; }
.tecto-iconbtn__ico svg { width: 100%; height: 100%; }
.tecto-iconbtn--sm .tecto-iconbtn__ico { width: 16px; height: 16px; }
`;
  const el = document.createElement('style');
  el.id = 'tecto-iconbutton-css';
  el.textContent = css;
  document.head.appendChild(el);
})();
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  pressed,
  className = '',
  ...rest
}) {
  const classes = ['tecto-iconbtn', variant !== 'ghost' ? `tecto-iconbtn--${variant}` : '', size !== 'md' ? `tecto-iconbtn--${size}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: classes,
    "aria-label": label,
    title: label,
    "aria-pressed": pressed
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "tecto-iconbtn__ico",
    "aria-hidden": "true"
  }, icon));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Kbd.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Tecto — Kbd (keyboard shortcut chip) */
(function injectTectoKbdCSS() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('tecto-kbd-css')) return;
  const css = `
.tecto-kbd {
  display: inline-flex; align-items: center; gap: 3px;
}
.tecto-kbd kbd {
  display: inline-flex; align-items: center; justify-content: center;
  min-width: 20px; height: 20px; padding: 0 5px;
  font-family: var(--font-mono); font-size: var(--text-2xs); font-weight: var(--weight-medium);
  line-height: 1; color: var(--ink-muted);
  background: var(--surface); border: 1px solid var(--border-strong);
  border-bottom-width: 2px; border-radius: var(--radius-sm);
}
.tecto-kbd--accent kbd { color: var(--accent-subtle-fg); border-color: var(--border-accent); background: var(--accent-subtle-bg); }
.tecto-kbd__plus { color: var(--ink-subtle); font-size: var(--text-2xs); }
`;
  const el = document.createElement('style');
  el.id = 'tecto-kbd-css';
  el.textContent = css;
  document.head.appendChild(el);
})();
const KEY_LABELS = {
  mod: '⌘',
  cmd: '⌘',
  shift: '⇧',
  alt: '⌥',
  opt: '⌥',
  enter: '↵',
  ctrl: '⌃',
  esc: 'Esc',
  tab: '⇥'
};
function Kbd({
  keys,
  accent = false,
  className = '',
  ...rest
}) {
  const list = Array.isArray(keys) ? keys : String(keys).split('+');
  const classes = ['tecto-kbd', accent ? 'tecto-kbd--accent' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: classes
  }, rest), list.map((k, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    className: "tecto-kbd__plus",
    "aria-hidden": "true"
  }, "+"), /*#__PURE__*/React.createElement("kbd", null, KEY_LABELS[String(k).toLowerCase()] || k))));
}
Object.assign(__ds_scope, { Kbd });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Kbd.jsx", error: String((e && e.message) || e) }); }

// components/core/Spinner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Tecto — Spinner */
(function injectTectoSpinnerCSS() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('tecto-spinner-css')) return;
  const css = `
.tecto-spinner {
  display: inline-block; vertical-align: middle;
  border-radius: 50%; border-style: solid; border-color: var(--border-strong);
  border-top-color: var(--accent);
  animation: tecto-spinner-rot 0.62s linear infinite;
}
@keyframes tecto-spinner-rot { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) { .tecto-spinner { animation-duration: 1.4s; } }
`;
  const el = document.createElement('style');
  el.id = 'tecto-spinner-css';
  el.textContent = css;
  document.head.appendChild(el);
})();
const SIZES = {
  sm: [14, 2],
  md: [18, 2],
  lg: [26, 3]
};
function Spinner({
  size = 'md',
  label = 'Cargando…',
  className = '',
  style = {},
  ...rest
}) {
  const [px, bw] = typeof size === 'number' ? [size, Math.max(2, Math.round(size / 9))] : SIZES[size] || SIZES.md;
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "status",
    "aria-label": label,
    className: ['tecto-spinner', className].filter(Boolean).join(' '),
    style: {
      width: px,
      height: px,
      borderWidth: bw,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Tecto — Card */
(function injectTectoCardCSS() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('tecto-card-css')) return;
  const css = `
.tecto-card {
  display: flex; flex-direction: column;
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius-lg); box-shadow: var(--shadow-sm);
  overflow: hidden;
}
.tecto-card--flat { box-shadow: none; }
.tecto-card--raised { box-shadow: var(--shadow-md); }
.tecto-card--interactive { cursor: pointer; transition: border-color var(--dur-1) var(--ease-out), box-shadow var(--dur-2) var(--ease-out), transform var(--dur-2) var(--ease-out); }
.tecto-card--interactive:hover { border-color: var(--border-strong); box-shadow: var(--shadow-md); transform: translateY(-1px); }
.tecto-card--interactive:active { transform: translateY(0); }
.tecto-card__header { display: flex; align-items: center; gap: 10px; padding: 13px 15px; border-bottom: 1px solid var(--border); }
.tecto-card__title { font-family: var(--font-sans); font-size: var(--text-sm); font-weight: var(--weight-semibold); color: var(--ink-strong); margin: 0; }
.tecto-card__header-extra { margin-left: auto; display: inline-flex; align-items: center; gap: 8px; }
.tecto-card__body { padding: 15px; flex: 1; }
.tecto-card__footer { display: flex; align-items: center; gap: 10px; padding: 11px 15px; border-top: 1px solid var(--border); background: var(--surface-sunken); }
`;
  const el = document.createElement('style');
  el.id = 'tecto-card-css';
  el.textContent = css;
  document.head.appendChild(el);
})();
function Card({
  title,
  headerExtra,
  footer,
  elevation = 'default',
  interactive = false,
  padded = true,
  className = '',
  children,
  ...rest
}) {
  const classes = ['tecto-card', elevation === 'flat' ? 'tecto-card--flat' : '', elevation === 'raised' ? 'tecto-card--raised' : '', interactive ? 'tecto-card--interactive' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, rest), (title || headerExtra) && /*#__PURE__*/React.createElement("div", {
    className: "tecto-card__header"
  }, title && /*#__PURE__*/React.createElement("h3", {
    className: "tecto-card__title"
  }, title), headerExtra && /*#__PURE__*/React.createElement("div", {
    className: "tecto-card__header-extra"
  }, headerExtra)), /*#__PURE__*/React.createElement("div", {
    className: "tecto-card__body",
    style: padded ? undefined : {
      padding: 0
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "tecto-card__footer"
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/DocRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Tecto — DocRow (library / history list item) */
(function injectTectoDocRowCSS() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('tecto-docrow-css')) return;
  const css = `
.tecto-docrow {
  display: flex; align-items: center; gap: 12px;
  padding: 10px 12px; border-radius: var(--radius-md);
  border: 1px solid transparent; cursor: pointer;
  transition: background-color var(--dur-1) var(--ease-out), border-color var(--dur-1) var(--ease-out);
}
.tecto-docrow:hover { background: var(--surface-hover); }
.tecto-docrow[aria-current="true"] { background: var(--accent-subtle-bg); border-color: var(--border-accent); }
.tecto-docrow__icon {
  flex: none; width: 34px; height: 40px; border-radius: var(--radius-xs);
  background: var(--paper); border: 1px solid var(--border-strong);
  position: relative; box-shadow: var(--shadow-xs); overflow: hidden;
}
.tecto-docrow__icon::before { content: ""; position: absolute; inset: 6px 6px auto 6px; height: 2px; background: var(--accent); border-radius: 2px; box-shadow: 0 4px 0 var(--border-strong), 0 8px 0 var(--border-strong), 0 12px 0 var(--border-strong); }
.tecto-docrow__main { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
.tecto-docrow__name { font-family: var(--font-mono); font-size: var(--text-sm); font-weight: var(--weight-medium); color: var(--ink-strong); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.tecto-docrow__meta { font-family: var(--font-sans); font-size: var(--text-xs); color: var(--ink-muted); display: flex; align-items: center; gap: 7px; }
.tecto-docrow__meta .dot { width: 3px; height: 3px; border-radius: 50%; background: var(--ink-subtle); }
.tecto-docrow__aside { flex: none; display: flex; align-items: center; gap: 10px; }
`;
  const el = document.createElement('style');
  el.id = 'tecto-docrow-css';
  el.textContent = css;
  document.head.appendChild(el);
})();
function DocRow({
  name,
  meta = [],
  active = false,
  aside,
  className = '',
  ...rest
}) {
  const metaArr = Array.isArray(meta) ? meta : [meta];
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['tecto-docrow', className].filter(Boolean).join(' '),
    "aria-current": active
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "tecto-docrow__icon",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "tecto-docrow__main"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tecto-docrow__name"
  }, name), metaArr.length > 0 && /*#__PURE__*/React.createElement("span", {
    className: "tecto-docrow__meta"
  }, metaArr.map((m, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    className: "dot",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", null, m))))), aside && /*#__PURE__*/React.createElement("div", {
    className: "tecto-docrow__aside"
  }, aside));
}
Object.assign(__ds_scope, { DocRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DocRow.jsx", error: String((e && e.message) || e) }); }

// components/feedback/StatusPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Tecto — StatusPill (compile status) */
(function injectTectoStatusPillCSS() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('tecto-statuspill-css')) return;
  const css = `
.tecto-status {
  display: inline-flex; align-items: center; gap: 7px;
  height: 24px; padding: 0 10px 0 8px;
  font-family: var(--font-mono); font-size: var(--text-xs); font-weight: var(--weight-medium);
  letter-spacing: var(--tracking-tight); white-space: nowrap;
  border-radius: var(--radius-full); border: 1px solid transparent;
}
.tecto-status__dot { width: 7px; height: 7px; border-radius: 50%; background: currentColor; flex: none; }
.tecto-status__time { color: inherit; opacity: 0.65; font-size: var(--text-2xs); }
.tecto-status__spin { width: 11px; height: 11px; border-radius: 50%; border: 2px solid currentColor; border-top-color: transparent; animation: tecto-status-spin 0.6s linear infinite; flex: none; }
@keyframes tecto-status-spin { to { transform: rotate(360deg); } }

.tecto-status--idle    { background: var(--surface-sunken); color: var(--ink-muted); border-color: var(--border); }
.tecto-status--queued  { background: var(--warning-bg); color: var(--warning-fg); }
.tecto-status--running { background: var(--accent-subtle-bg); color: var(--accent-subtle-fg); }
.tecto-status--success { background: var(--success-bg); color: var(--success-fg); }
.tecto-status--error   { background: var(--danger-bg); color: var(--danger-fg); }
.tecto-status--running .tecto-status__dot,
.tecto-status--success .tecto-status__dot,
.tecto-status--error   .tecto-status__dot { background: currentColor; }
.tecto-status--success .tecto-status__dot { box-shadow: 0 0 0 3px var(--success-bg); }
`;
  const el = document.createElement('style');
  el.id = 'tecto-statuspill-css';
  el.textContent = css;
  document.head.appendChild(el);
})();
const DEFAULTS = {
  idle: 'En espera',
  queued: 'En cola',
  running: 'Compilando…',
  success: 'Compilado',
  error: 'Error de LaTeX'
};
function StatusPill({
  status = 'idle',
  label,
  time,
  className = '',
  ...rest
}) {
  const text = label != null ? label : DEFAULTS[status] || status;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['tecto-status', `tecto-status--${status}`, className].filter(Boolean).join(' '),
    role: "status"
  }, rest), status === 'running' ? /*#__PURE__*/React.createElement("span", {
    className: "tecto-status__spin",
    "aria-hidden": "true"
  }) : /*#__PURE__*/React.createElement("span", {
    className: "tecto-status__dot",
    "aria-hidden": "true"
  }), text, time != null && /*#__PURE__*/React.createElement("span", {
    className: "tecto-status__time"
  }, time));
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Tecto — Toast */
(function injectTectoToastCSS() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('tecto-toast-css')) return;
  const css = `
.tecto-toast {
  display: flex; align-items: flex-start; gap: 10px;
  width: 340px; max-width: 100%; padding: 12px 12px 12px 13px;
  background: var(--surface-raised); border: 1px solid var(--border);
  border-left: 3px solid var(--border-strong);
  border-radius: var(--radius-md); box-shadow: var(--shadow-lg);
}
.tecto-toast--success { border-left-color: var(--success); }
.tecto-toast--error   { border-left-color: var(--danger); }
.tecto-toast--info    { border-left-color: var(--info); }
.tecto-toast--brand   { border-left-color: var(--accent); }
.tecto-toast__ico { flex: none; width: 18px; height: 18px; margin-top: 1px; }
.tecto-toast__ico svg { width: 100%; height: 100%; }
.tecto-toast--success .tecto-toast__ico { color: var(--success); }
.tecto-toast--error   .tecto-toast__ico { color: var(--danger); }
.tecto-toast--info    .tecto-toast__ico { color: var(--info); }
.tecto-toast--brand   .tecto-toast__ico { color: var(--accent); }
.tecto-toast__body { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
.tecto-toast__title { font-family: var(--font-sans); font-size: var(--text-sm); font-weight: var(--weight-semibold); color: var(--ink-strong); }
.tecto-toast__msg { font-family: var(--font-sans); font-size: var(--text-xs); line-height: 1.45; color: var(--ink-muted); }
.tecto-toast__msg code { font-family: var(--font-mono); font-size: 0.92em; color: var(--ink); }
.tecto-toast__close { flex: none; width: 22px; height: 22px; display: inline-flex; align-items: center; justify-content: center;
  border: none; background: transparent; color: var(--ink-subtle); border-radius: var(--radius-sm); cursor: pointer; }
.tecto-toast__close:hover { background: var(--surface-hover); color: var(--ink); }
.tecto-toast__close svg { width: 14px; height: 14px; }
`;
  const el = document.createElement('style');
  el.id = 'tecto-toast-css';
  el.textContent = css;
  document.head.appendChild(el);
})();
const ICONS = {
  success: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })),
  error: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "13"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "16.5",
    x2: "12",
    y2: "16.5"
  })),
  info: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "11",
    x2: "12",
    y2: "16"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "8"
  })),
  brand: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))
};
const CloseIcon = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /*#__PURE__*/React.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
}));
function Toast({
  tone = 'info',
  title,
  children,
  onClose,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['tecto-toast', `tecto-toast--${tone}`, className].filter(Boolean).join(' '),
    role: "status"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "tecto-toast__ico",
    "aria-hidden": "true"
  }, ICONS[tone]), /*#__PURE__*/React.createElement("div", {
    className: "tecto-toast__body"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "tecto-toast__title"
  }, title), children && /*#__PURE__*/React.createElement("div", {
    className: "tecto-toast__msg"
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "tecto-toast__close",
    "aria-label": "Cerrar",
    onClick: onClose
  }, CloseIcon));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Tecto — Tooltip */
(function injectTectoTooltipCSS() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('tecto-tooltip-css')) return;
  const css = `
.tecto-tt { position: relative; display: inline-flex; }
.tecto-tt__pop {
  position: absolute; z-index: 60; left: 50%; transform: translateX(-50%) translateY(2px);
  bottom: calc(100% + 7px);
  display: flex; align-items: center; gap: 8px; white-space: nowrap;
  padding: 5px 8px; border-radius: var(--radius-sm);
  background: var(--ink-strong); color: var(--paper);
  font-family: var(--font-sans); font-size: var(--text-xs); font-weight: var(--weight-medium);
  box-shadow: var(--shadow-md);
  opacity: 0; pointer-events: none;
  transition: opacity var(--dur-1) var(--ease-out), transform var(--dur-1) var(--ease-out);
}
.dark .tecto-tt__pop { background: #060504; color: #f6f3ef; }
.tecto-tt__pop--bottom { bottom: auto; top: calc(100% + 7px); }
.tecto-tt[data-open="true"] .tecto-tt__pop { opacity: 1; transform: translateX(-50%) translateY(0); }
.tecto-tt__pop kbd {
  display: inline-flex; align-items: center; justify-content: center; min-width: 16px; height: 16px; padding: 0 4px;
  font-family: var(--font-mono); font-size: 10px; border-radius: 3px;
  background: rgba(255,255,255,0.14); color: inherit;
}
`;
  const el = document.createElement('style');
  el.id = 'tecto-tooltip-css';
  el.textContent = css;
  document.head.appendChild(el);
})();
function Tooltip({
  label,
  keys,
  side = 'top',
  children,
  className = '',
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const keyList = keys ? Array.isArray(keys) ? keys : String(keys).split('+') : null;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['tecto-tt', className].filter(Boolean).join(' '),
    "data-open": open,
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    className: ['tecto-tt__pop', side === 'bottom' ? 'tecto-tt__pop--bottom' : ''].filter(Boolean).join(' '),
    role: "tooltip"
  }, label, keyList && keyList.map((k, i) => /*#__PURE__*/React.createElement("kbd", {
    key: i
  }, k))));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Tecto — Input */
(function injectTectoInputCSS() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('tecto-input-css')) return;
  const css = `
.tecto-field { display: flex; flex-direction: column; gap: 6px; }
.tecto-field__label { font-family: var(--font-sans); font-size: var(--text-sm); font-weight: var(--weight-medium); color: var(--ink); }
.tecto-field__label .req { color: var(--danger); margin-left: 2px; }
.tecto-field__hint { font-family: var(--font-sans); font-size: var(--text-xs); color: var(--ink-muted); }
.tecto-field__hint--error { color: var(--danger-fg); }

.tecto-input {
  display: flex; align-items: center; gap: 8px;
  height: 36px; padding: 0 11px;
  background: var(--surface); border: 1px solid var(--border-strong); border-radius: var(--radius-md);
  box-shadow: var(--shadow-xs);
  transition: border-color var(--dur-1) var(--ease-out), box-shadow var(--dur-1) var(--ease-out);
}
.tecto-input:hover { border-color: var(--ink-subtle); }
.tecto-input:focus-within { border-color: var(--accent); box-shadow: var(--shadow-focus); }
.tecto-input--error { border-color: var(--danger); }
.tecto-input--error:focus-within { box-shadow: 0 0 0 3px var(--danger-bg); }
.tecto-input--sm { height: 30px; padding: 0 9px; }
.tecto-input--disabled { background: var(--surface-sunken); opacity: 0.7; cursor: not-allowed; }
.tecto-input__el {
  flex: 1; min-width: 0; border: none; outline: none; background: transparent;
  font-family: var(--font-sans); font-size: var(--text-base); color: var(--ink);
}
.tecto-input--mono .tecto-input__el { font-family: var(--font-mono); font-size: var(--text-sm); }
.tecto-input__el::placeholder { color: var(--ink-subtle); }
.tecto-input__ico { display: inline-flex; width: 16px; height: 16px; color: var(--ink-subtle); flex: none; }
.tecto-input__ico svg { width: 100%; height: 100%; }
.tecto-input__affix { font-family: var(--font-mono); font-size: var(--text-sm); color: var(--ink-muted); flex: none; user-select: none; }
.tecto-input--align-end .tecto-input__el { text-align: right; }
`;
  const el = document.createElement('style');
  el.id = 'tecto-input-css';
  el.textContent = css;
  document.head.appendChild(el);
})();
let _uid = 0;
function Input({
  label,
  hint,
  error,
  iconLeft = null,
  iconRight = null,
  prefix = null,
  suffix = null,
  align = 'start',
  size = 'md',
  mono = false,
  required = false,
  disabled = false,
  id,
  className = '',
  ...rest
}) {
  const inputId = React.useMemo(() => id || `tecto-input-${++_uid}`, [id]);
  const wrapClasses = ['tecto-input', size === 'sm' ? 'tecto-input--sm' : '', mono ? 'tecto-input--mono' : '', align === 'end' ? 'tecto-input--align-end' : '', error ? 'tecto-input--error' : '', disabled ? 'tecto-input--disabled' : ''].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: ['tecto-field', className].filter(Boolean).join(' ')
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "tecto-field__label",
    htmlFor: inputId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "req",
    "aria-hidden": "true"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: wrapClasses
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    className: "tecto-input__ico",
    "aria-hidden": "true"
  }, iconLeft), prefix && /*#__PURE__*/React.createElement("span", {
    className: "tecto-input__affix",
    "aria-hidden": "true"
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    className: "tecto-input__el",
    disabled: disabled,
    "aria-invalid": !!error || undefined
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    className: "tecto-input__affix",
    "aria-hidden": "true"
  }, suffix), iconRight && /*#__PURE__*/React.createElement("span", {
    className: "tecto-input__ico",
    "aria-hidden": "true"
  }, iconRight)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: ['tecto-field__hint', error ? 'tecto-field__hint--error' : ''].filter(Boolean).join(' ')
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Tecto — Select (styled native select) */
(function injectTectoSelectCSS() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('tecto-select-css')) return;
  const css = `
.tecto-select-field { display: flex; flex-direction: column; gap: 6px; }
.tecto-select-field__label { font-family: var(--font-sans); font-size: var(--text-sm); font-weight: var(--weight-medium); color: var(--ink); }
.tecto-select {
  position: relative; display: flex; align-items: center;
  height: 36px; background: var(--surface);
  border: 1px solid var(--border-strong); border-radius: var(--radius-md);
  box-shadow: var(--shadow-xs);
  transition: border-color var(--dur-1) var(--ease-out), box-shadow var(--dur-1) var(--ease-out);
}
.tecto-select:hover { border-color: var(--ink-subtle); }
.tecto-select:focus-within { border-color: var(--accent); box-shadow: var(--shadow-focus); }
.tecto-select--sm { height: 30px; }
.tecto-select select {
  appearance: none; -webkit-appearance: none;
  flex: 1; height: 100%; padding: 0 34px 0 11px;
  border: none; outline: none; background: transparent; cursor: pointer;
  font-family: var(--font-sans); font-size: var(--text-base); color: var(--ink);
}
.tecto-select--mono select { font-family: var(--font-mono); font-size: var(--text-sm); }
.tecto-select__chevron {
  position: absolute; right: 10px; pointer-events: none; color: var(--ink-subtle);
  width: 15px; height: 15px; display: inline-flex;
}
.tecto-select__chevron svg { width: 100%; height: 100%; }
`;
  const el = document.createElement('style');
  el.id = 'tecto-select-css';
  el.textContent = css;
  document.head.appendChild(el);
})();
const Chevron = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("polyline", {
  points: "6 9 12 15 18 9"
}));
function Select({
  label,
  options = [],
  size = 'md',
  mono = false,
  id,
  className = '',
  children,
  ...rest
}) {
  const classes = ['tecto-select', size === 'sm' ? 'tecto-select--sm' : '', mono ? 'tecto-select--mono' : ''].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: ['tecto-select-field', className].filter(Boolean).join(' ')
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "tecto-select-field__label",
    htmlFor: id
  }, label), /*#__PURE__*/React.createElement("div", {
    className: classes
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id
  }, rest), children || options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement("span", {
    className: "tecto-select__chevron",
    "aria-hidden": "true"
  }, Chevron)));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Tecto — Switch */
(function injectTectoSwitchCSS() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('tecto-switch-css')) return;
  const css = `
.tecto-switch { display: inline-flex; align-items: center; gap: 9px; cursor: pointer; user-select: none; }
.tecto-switch--disabled { opacity: 0.5; cursor: not-allowed; }
.tecto-switch__track {
  position: relative; flex: none; width: 34px; height: 20px;
  background: var(--border-strong); border-radius: var(--radius-full);
  transition: background-color var(--dur-2) var(--ease-out);
}
.tecto-switch__track::after {
  content: ""; position: absolute; top: 2px; left: 2px; width: 16px; height: 16px;
  background: #fff; border-radius: 50%; box-shadow: var(--shadow-sm);
  transition: transform var(--dur-2) var(--ease-out);
}
.tecto-switch input { position: absolute; opacity: 0; width: 0; height: 0; }
.tecto-switch input:checked + .tecto-switch__track { background: var(--accent); }
.tecto-switch input:checked + .tecto-switch__track::after { transform: translateX(14px); }
.tecto-switch input:focus-visible + .tecto-switch__track { box-shadow: var(--shadow-focus); }
.tecto-switch--sm .tecto-switch__track { width: 28px; height: 16px; }
.tecto-switch--sm .tecto-switch__track::after { width: 12px; height: 12px; }
.tecto-switch--sm input:checked + .tecto-switch__track::after { transform: translateX(12px); }
.tecto-switch__label { font-family: var(--font-sans); font-size: var(--text-base); color: var(--ink); }
`;
  const el = document.createElement('style');
  el.id = 'tecto-switch-css';
  el.textContent = css;
  document.head.appendChild(el);
})();
function Switch({
  checked,
  defaultChecked,
  onChange,
  label,
  size = 'md',
  disabled = false,
  className = '',
  ...rest
}) {
  const classes = ['tecto-switch', size === 'sm' ? 'tecto-switch--sm' : '', disabled ? 'tecto-switch--disabled' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("label", {
    className: classes
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "tecto-switch__track",
    "aria-hidden": "true"
  }), label && /*#__PURE__*/React.createElement("span", {
    className: "tecto-switch__label"
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Tecto — Textarea */
(function injectTectoTextareaCSS() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('tecto-textarea-css')) return;
  const css = `
.tecto-textarea-wrap {
  display: flex; padding: 9px 11px;
  background: var(--surface); border: 1px solid var(--border-strong); border-radius: var(--radius-md);
  box-shadow: var(--shadow-xs);
  transition: border-color var(--dur-1) var(--ease-out), box-shadow var(--dur-1) var(--ease-out);
}
.tecto-textarea-wrap:hover { border-color: var(--ink-subtle); }
.tecto-textarea-wrap:focus-within { border-color: var(--accent); box-shadow: var(--shadow-focus); }
.tecto-textarea-wrap--error { border-color: var(--danger); }
.tecto-textarea {
  flex: 1; min-width: 0; resize: vertical; border: none; outline: none; background: transparent;
  font-family: var(--font-sans); font-size: var(--text-base); line-height: var(--leading-snug); color: var(--ink);
}
.tecto-textarea--mono { font-family: var(--font-mono); font-size: var(--text-sm); }
.tecto-textarea::placeholder { color: var(--ink-subtle); }
`;
  const el = document.createElement('style');
  el.id = 'tecto-textarea-css';
  el.textContent = css;
  document.head.appendChild(el);
})();
let _ta = 0;
function Textarea({
  label,
  hint,
  error,
  rows = 3,
  mono = false,
  required = false,
  id,
  className = '',
  ...rest
}) {
  const taId = React.useMemo(() => id || `tecto-ta-${++_ta}`, [id]);
  return /*#__PURE__*/React.createElement("div", {
    className: ['tecto-field', className].filter(Boolean).join(' ')
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "tecto-field__label",
    htmlFor: taId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "req",
    "aria-hidden": "true"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: ['tecto-textarea-wrap', error ? 'tecto-textarea-wrap--error' : ''].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("textarea", _extends({
    id: taId,
    rows: rows,
    className: ['tecto-textarea', mono ? 'tecto-textarea--mono' : ''].filter(Boolean).join(' '),
    "aria-invalid": !!error || undefined
  }, rest))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: ['tecto-field__hint', error ? 'tecto-field__hint--error' : ''].filter(Boolean).join(' ')
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Tecto — Tabs */
(function injectTectoTabsCSS() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('tecto-tabs-css')) return;
  const css = `
.tecto-tabs { display: inline-flex; align-items: center; }
.tecto-tabs--underline { gap: 2px; border-bottom: 1px solid var(--border); }
.tecto-tabs--underline .tecto-tab {
  position: relative; height: 36px; padding: 0 12px; background: transparent; border: none; cursor: pointer;
  font-family: var(--font-sans); font-size: var(--text-sm); font-weight: var(--weight-medium);
  color: var(--ink-muted); display: inline-flex; align-items: center; gap: 6px;
  transition: color var(--dur-1) var(--ease-out);
}
.tecto-tabs--underline .tecto-tab::after {
  content: ""; position: absolute; left: 8px; right: 8px; bottom: -1px; height: 2px; border-radius: 2px;
  background: transparent; transition: background-color var(--dur-1) var(--ease-out);
}
.tecto-tabs--underline .tecto-tab:hover { color: var(--ink); }
.tecto-tabs--underline .tecto-tab[aria-selected="true"] { color: var(--accent-subtle-fg); }
.tecto-tabs--underline .tecto-tab[aria-selected="true"]::after { background: var(--accent); }

.tecto-tabs--segment {
  gap: 2px; padding: 3px; background: var(--surface-sunken);
  border: 1px solid var(--border); border-radius: var(--radius-lg);
}
.tecto-tabs--segment .tecto-tab {
  height: 28px; padding: 0 12px; background: transparent; border: none; cursor: pointer; border-radius: var(--radius-md);
  font-family: var(--font-sans); font-size: var(--text-sm); font-weight: var(--weight-medium); color: var(--ink-muted);
  display: inline-flex; align-items: center; gap: 6px;
  transition: background-color var(--dur-1) var(--ease-out), color var(--dur-1) var(--ease-out), box-shadow var(--dur-1) var(--ease-out);
}
.tecto-tabs--segment .tecto-tab:hover { color: var(--ink); }
.tecto-tabs--segment .tecto-tab[aria-selected="true"] { background: var(--surface); color: var(--ink-strong); box-shadow: var(--shadow-xs); }
.tecto-tab:focus-visible { outline: none; box-shadow: var(--shadow-focus); }
.tecto-tab__ico { display: inline-flex; width: 15px; height: 15px; }
.tecto-tab__ico svg { width: 100%; height: 100%; }
.tecto-tab__count { font-family: var(--font-mono); font-size: var(--text-2xs); color: var(--ink-subtle); }
`;
  const el = document.createElement('style');
  el.id = 'tecto-tabs-css';
  el.textContent = css;
  document.head.appendChild(el);
})();
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = 'underline',
  className = '',
  ...rest
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? (items[0] && items[0].value));
  const active = isControlled ? value : internal;
  const select = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['tecto-tabs', `tecto-tabs--${variant}`, className].filter(Boolean).join(' '),
    role: "tablist"
  }, rest), items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.value,
    type: "button",
    role: "tab",
    className: "tecto-tab",
    "aria-selected": active === it.value,
    onClick: () => select(it.value)
  }, it.icon && /*#__PURE__*/React.createElement("span", {
    className: "tecto-tab__ico",
    "aria-hidden": "true"
  }, it.icon), it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
    className: "tecto-tab__count"
  }, it.count))));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tecto/App.jsx
try { (() => {
/* Tecto UI Kit — app orchestrator: document workspace + generator + editor. window.TectoApp */
(function injectAppCSS() {
  if (document.getElementById('tecto-kit-app-css')) return;
  const css = `
.tk-app { height: 100%; display: flex; flex-direction: column; background: var(--bg); color: var(--ink); }
.tk-body { flex: 1; min-height: 0; display: flex; }
.tk-main { flex: 1; min-width: 0; display: flex; flex-direction: column; min-height: 0; }
.tk-split { flex: 1; min-height: 0; display: flex; }
.tk-split > .tk-editor { flex: 1.05; min-width: 0; border-right: 1px solid var(--border); }
.tk-split > .tk-prev { flex: 1; min-width: 0; }

.tk-toasts { position: fixed; right: 18px; bottom: 18px; z-index: 200; display: flex; flex-direction: column; gap: 10px; }

.tk-login { height: 100%; display: flex; align-items: center; justify-content: center; background: var(--bg);
  background-image: radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0); background-size: 22px 22px; }
.tk-login__card { width: 360px; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl); padding: 30px 30px 26px; }
.tk-login__brand { display: flex; flex-direction: column; align-items: center; gap: 12px; margin-bottom: 22px; }
.tk-login__mark { width: 46px; height: 46px; }
.tk-login__t { font-family: var(--font-serif); font-size: 24px; font-weight: 600; letter-spacing: -0.02em; color: var(--ink-strong); }
.tk-login__sub { font-family: var(--font-mono); font-size: 11px; color: var(--ink-muted); letter-spacing: 0.04em; margin-top: -6px; }
.tk-login__fields { display: flex; flex-direction: column; gap: 13px; }
.tk-login__foot { margin-top: 16px; text-align: center; font-family: var(--font-sans); font-size: 11px; color: var(--ink-subtle); }
`;
  const el = document.createElement('style');
  el.id = 'tecto-kit-app-css';
  el.textContent = css;
  document.head.appendChild(el);
})();
function Login({
  onAuth
}) {
  const I = window.TectoIcons;
  const {
    Button,
    Input
  } = window.TectoDS;
  return /*#__PURE__*/React.createElement("div", {
    className: "tk-login"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-login__card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-login__brand"
  }, /*#__PURE__*/React.createElement("img", {
    className: "tk-login__mark",
    src: "../../assets/tecto-mark.svg",
    alt: "Tecto"
  }), /*#__PURE__*/React.createElement("div", {
    className: "tk-login__t"
  }, "Tecto"), /*#__PURE__*/React.createElement("div", {
    className: "tk-login__sub"
  }, "GENERACI\xD3N DOCUMENTAL \xB7 SELF-HOSTED")), /*#__PURE__*/React.createElement("div", {
    className: "tk-login__fields"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Correo",
    defaultValue: "tu@servidor.dev",
    iconLeft: /*#__PURE__*/React.createElement(I.FileText, {
      size: 15
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Contrase\xF1a",
    type: "password",
    defaultValue: "latex",
    iconLeft: /*#__PURE__*/React.createElement(I.Lock, {
      size: 15
    })
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    onClick: onAuth,
    iconRight: /*#__PURE__*/React.createElement(I.Chevron, {
      size: 15
    })
  }, "Entrar")), /*#__PURE__*/React.createElement("div", {
    className: "tk-login__foot"
  }, "Instancia self-hosted \xB7 s\xF3lo para tu empresa")));
}
function EditorWorkspace({
  status,
  onCompile,
  onDownload,
  engine,
  setEngine
}) {
  const {
    Editor
  } = window.TectoEditor;
  const {
    PdfPreview
  } = window.TectoPreview;
  const {
    LINES
  } = window.TectoSample;
  return /*#__PURE__*/React.createElement("div", {
    className: "tk-split"
  }, /*#__PURE__*/React.createElement(Editor, {
    lines: LINES,
    activeLine: 11,
    caretLine: 23
  }), /*#__PURE__*/React.createElement(PdfPreview, {
    status: status,
    onCompile: onCompile,
    onDownload: onDownload,
    engine: engine,
    setEngine: setEngine
  }));
}
const CRUMBS = {
  docs: ['Documentos'],
  generator: ['Documentos', 'Nueva cotización'],
  templates: ['Plantillas'],
  assets: ['Assets'],
  editor: ['Plantillas', 'cotizacion.cls'],
  settings: ['Ajustes']
};
function App() {
  const [authed, setAuthed] = React.useState(true);
  const [theme, setTheme] = React.useState('light');
  const [view, setView] = React.useState('generator');
  const [engine, setEngine] = React.useState('XeLaTeX');
  const [status, setStatus] = React.useState('success');
  const [data, setData] = React.useState(window.TectoCorp.DEFAULT_DATA);
  const [toasts, setToasts] = React.useState([]);
  const timer = React.useRef(null);
  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);
  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');
  const pushToast = t => {
    const id = Math.random().toString(36).slice(2);
    setToasts(ts => [...ts, {
      ...t,
      id
    }]);
    setTimeout(() => setToasts(ts => ts.filter(x => x.id !== id)), 4200);
  };
  const compile = () => {
    if (status === 'running') return;
    setStatus('running');
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setStatus('success');
      const name = view === 'editor' ? 'paper-2026.pdf' : `cotizacion-${data.numero}.pdf`;
      pushToast({
        tone: 'success',
        title: 'PDF listo',
        msg: `${name} · Tectonic · ${view === 'editor' ? '1.2s' : '0.9s'}`
      });
    }, 1400);
  };
  const newDoc = template => {
    setView('generator');
    setStatus('success');
    if (template && template !== 'Cotización') {
      pushToast({
        tone: 'brand',
        title: `Plantilla: ${template}`,
        msg: 'Misma mecánica — demo con Cotización.'
      });
    }
  };
  const openDoc = () => {
    setView('generator');
    setStatus('success');
  };
  const goView = v => {
    setView(v);
    if (v === 'editor' || v === 'generator') setStatus('success');
  };
  const {
    TopBar,
    LeftRail,
    StatusBar
  } = window.TectoChrome;
  const {
    Settings
  } = window.TectoScreens;
  const {
    Documentos,
    Plantillas,
    Assets
  } = window.TectoWorkspace;
  const {
    Generator
  } = window.TectoGenerator;
  const {
    TemplateWorkspace
  } = window.TectoTemplate;
  const {
    Toast
  } = window.TectoDS;
  if (!authed) return /*#__PURE__*/React.createElement(Login, {
    onAuth: () => {
      setAuthed(true);
      setView('generator');
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "tk-app"
  }, /*#__PURE__*/React.createElement(TopBar, {
    crumb: CRUMBS[view],
    theme: theme,
    onToggleTheme: toggleTheme
  }), /*#__PURE__*/React.createElement("div", {
    className: "tk-body"
  }, /*#__PURE__*/React.createElement(LeftRail, {
    view: view,
    setView: goView,
    onLogout: () => setAuthed(false)
  }), /*#__PURE__*/React.createElement("div", {
    className: "tk-main"
  }, view === 'docs' && /*#__PURE__*/React.createElement(Documentos, {
    onNew: newDoc,
    onOpenDoc: openDoc
  }), view === 'generator' && /*#__PURE__*/React.createElement(Generator, {
    data: data,
    setData: setData,
    status: status,
    onCompile: compile,
    onDownload: () => pushToast({
      tone: 'brand',
      title: 'Descargando…',
      msg: `cotizacion-${data.numero}.pdf`
    })
  }), view === 'templates' && /*#__PURE__*/React.createElement(Plantillas, {
    onNew: newDoc,
    onEdit: name => {
      setView('editor');
      setStatus('success');
      if (name === 'nueva') pushToast({
        tone: 'brand',
        title: 'Nueva plantilla',
        msg: 'Carpeta /plantillas/nueva/ — edita su .cls y sus campos.'
      });
    }
  }), view === 'assets' && /*#__PURE__*/React.createElement(Assets, null), view === 'editor' && /*#__PURE__*/React.createElement(TemplateWorkspace, {
    status: status,
    onCompile: compile,
    onDownload: () => pushToast({
      tone: 'brand',
      title: 'Descargando…',
      msg: 'cotizacion-preview.pdf'
    }),
    onToast: pushToast
  }), view === 'settings' && /*#__PURE__*/React.createElement(Settings, {
    theme: theme,
    onToggleTheme: toggleTheme,
    engine: engine,
    setEngine: setEngine
  }), view === 'editor' && /*#__PURE__*/React.createElement(StatusBar, {
    engine: engine
  }))), /*#__PURE__*/React.createElement("div", {
    className: "tk-toasts"
  }, toasts.map(t => /*#__PURE__*/React.createElement(Toast, {
    key: t.id,
    tone: t.tone,
    title: t.title,
    onClose: () => setToasts(ts => ts.filter(x => x.id !== t.id))
  }, t.msg))));
}
window.TectoApp = {
  App,
  Login
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tecto/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tecto/Chrome.jsx
try { (() => {
/* Tecto UI Kit — logo lockup + app chrome (TopBar, LeftRail, StatusBar). window.TectoChrome */
(function injectChromeCSS() {
  if (document.getElementById('tecto-kit-chrome-css')) return;
  const css = `
.tk-logo { display: inline-flex; align-items: center; gap: 9px; }
.tk-logo__mark { width: 26px; height: 26px; border-radius: 7px; flex: none; }
.tk-logo__word { font-family: var(--font-serif); font-size: 19px; font-weight: 600; letter-spacing: -0.02em; color: var(--ink-strong); }

.tk-topbar { display: flex; align-items: center; gap: 10px; height: var(--topbar-h); padding: 0 12px; flex: none;
  background: var(--surface); border-bottom: 1px solid var(--border); }
.tk-crumb { display: flex; align-items: center; gap: 7px; font-family: var(--font-sans); font-size: var(--text-sm); color: var(--ink-muted); }
.tk-crumb b { color: var(--ink-strong); font-weight: 600; font-family: var(--font-mono); font-size: var(--text-sm); }
.tk-topbar__spacer { flex: 1; }
.tk-topbar__grp { display: flex; align-items: center; gap: 8px; }
.tk-avatar { width: 28px; height: 28px; border-radius: 50%; background: var(--accent); color: var(--accent-on);
  display: inline-flex; align-items: center; justify-content: center; font-family: var(--font-sans); font-size: 12px; font-weight: 600; flex: none; }

.tk-rail { width: var(--rail-w); flex: none; background: var(--surface-sunken); border-right: 1px solid var(--border);
  display: flex; flex-direction: column; align-items: center; padding: 10px 0; gap: 4px; }
.tk-rail__btn { width: 38px; height: 38px; border-radius: var(--radius-md); border: none; background: transparent; cursor: pointer;
  display: inline-flex; align-items: center; justify-content: center; color: var(--ink-muted);
  transition: background var(--dur-1) var(--ease-out), color var(--dur-1) var(--ease-out); position: relative; }
.tk-rail__btn:hover { background: var(--surface-hover); color: var(--ink); }
.tk-rail__btn--active { background: var(--accent-subtle-bg); color: var(--accent-subtle-fg); }
.tk-rail__btn--active::before { content: ""; position: absolute; left: -10px; top: 9px; bottom: 9px; width: 3px; border-radius: 3px; background: var(--accent); }
.tk-rail__sp { flex: 1; }

.tk-status { display: flex; align-items: center; gap: 14px; height: var(--statusbar-h); padding: 0 14px; flex: none;
  background: var(--surface-sunken); border-top: 1px solid var(--border); font-family: var(--font-mono); font-size: 11px; color: var(--ink-muted); }
.tk-status__sp { flex: 1; }
.tk-status b { color: var(--ink); font-weight: 500; }
`;
  const el = document.createElement('style');
  el.id = 'tecto-kit-chrome-css';
  el.textContent = css;
  document.head.appendChild(el);
})();
function Logo({
  word = true
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "tk-logo"
  }, /*#__PURE__*/React.createElement("img", {
    className: "tk-logo__mark",
    src: "../../assets/tecto-mark.svg",
    alt: ""
  }), word && /*#__PURE__*/React.createElement("span", {
    className: "tk-logo__word"
  }, "Tecto"));
}
function TopBar({
  crumb,
  theme,
  onToggleTheme
}) {
  const I = window.TectoIcons;
  const {
    IconButton,
    Tooltip
  } = window.TectoDS;
  return /*#__PURE__*/React.createElement("div", {
    className: "tk-topbar"
  }, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 22,
      background: 'var(--border)',
      margin: '0 4px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "tk-crumb"
  }, (crumb || []).map((c, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement(I.Chevron, {
    size: 14
  }), i === crumb.length - 1 ? /*#__PURE__*/React.createElement("b", null, c) : /*#__PURE__*/React.createElement("span", null, c)))), /*#__PURE__*/React.createElement("div", {
    className: "tk-topbar__spacer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "tk-topbar__grp"
  }, /*#__PURE__*/React.createElement(Tooltip, {
    label: "Documentaci\xF3n",
    side: "bottom"
  }, /*#__PURE__*/React.createElement(IconButton, {
    size: "sm",
    label: "Ayuda",
    icon: /*#__PURE__*/React.createElement(I.FileText, {
      size: 16
    })
  })), /*#__PURE__*/React.createElement(IconButton, {
    size: "sm",
    label: "Cambiar tema",
    icon: theme === 'dark' ? /*#__PURE__*/React.createElement(I.Sun, {
      size: 16
    }) : /*#__PURE__*/React.createElement(I.Moon, {
      size: 16
    }),
    onClick: onToggleTheme
  }), /*#__PURE__*/React.createElement("span", {
    className: "tk-avatar"
  }, "T")));
}
function LeftRail({
  view,
  setView,
  onLogout
}) {
  const I = window.TectoIcons;
  const {
    Tooltip
  } = window.TectoDS;
  const items = [{
    id: 'docs',
    label: 'Documentos',
    icon: I.Folder
  }, {
    id: 'templates',
    label: 'Plantillas',
    icon: I.Layout
  }, {
    id: 'assets',
    label: 'Assets',
    icon: I.Image
  }, {
    id: 'editor',
    label: 'Editor de plantilla',
    icon: I.PanelLeft
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "tk-rail"
  }, items.map(it => /*#__PURE__*/React.createElement(Tooltip, {
    key: it.id,
    label: it.label,
    side: "bottom"
  }, /*#__PURE__*/React.createElement("button", {
    className: 'tk-rail__btn' + (view === it.id || view === 'generator' && it.id === 'docs' ? ' tk-rail__btn--active' : ''),
    onClick: () => setView(it.id),
    "aria-label": it.label
  }, /*#__PURE__*/React.createElement(it.icon, {
    size: 19
  })))), /*#__PURE__*/React.createElement("div", {
    className: "tk-rail__sp"
  }), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Ajustes",
    side: "bottom"
  }, /*#__PURE__*/React.createElement("button", {
    className: 'tk-rail__btn' + (view === 'settings' ? ' tk-rail__btn--active' : ''),
    onClick: () => setView('settings'),
    "aria-label": "Ajustes"
  }, /*#__PURE__*/React.createElement(I.Settings, {
    size: 19
  }))), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Salir",
    side: "bottom"
  }, /*#__PURE__*/React.createElement("button", {
    className: "tk-rail__btn",
    onClick: onLogout,
    "aria-label": "Salir"
  }, /*#__PURE__*/React.createElement(I.Lock, {
    size: 19
  }))));
}
function StatusBar({
  engine
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tk-status"
  }, /*#__PURE__*/React.createElement("span", null, "Tectonic ", /*#__PURE__*/React.createElement("b", null, "0.15")), /*#__PURE__*/React.createElement("span", null, engine), /*#__PURE__*/React.createElement("span", null, "UTF-8"), /*#__PURE__*/React.createElement("span", null, "LaTeX"), /*#__PURE__*/React.createElement("div", {
    className: "tk-status__sp"
  }), /*#__PURE__*/React.createElement("span", null, "Ln ", /*#__PURE__*/React.createElement("b", null, "23"), ", Col 4"), /*#__PURE__*/React.createElement("span", null, "112 palabras"), /*#__PURE__*/React.createElement("span", null, "main.tex \xB7 guardado"));
}
window.TectoChrome = {
  Logo,
  TopBar,
  LeftRail,
  StatusBar
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tecto/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tecto/CorpDocs.jsx
try { (() => {
/* Tecto UI Kit — corporate document renders (the PDF output). window.TectoCorp */
const DEFAULT_BRAND = {
  name: 'Acme Estudio',
  initials: 'A',
  color: '#1f3a5f',
  tint: '#eef2f7',
  rfc: 'ACM850101AA1',
  address: 'Av. Reforma 222, CDMX · acme.studio'
};
const DEFAULT_DATA = {
  numero: '0123',
  fecha: '7 jun 2026',
  validez: '22 jun 2026',
  cliente: 'Globex Corporation',
  clienteRfc: 'GLO910215QX3',
  moneda: 'USD',
  iva: true,
  items: [{
    desc: 'Diseño e implementación de API REST',
    qty: 1,
    price: 3200
  }, {
    desc: 'Integración con pasarela de pago',
    qty: 1,
    price: 1400
  }, {
    desc: 'Soporte y mantenimiento (mensual)',
    qty: 3,
    price: 400
  }],
  notas: 'Validez de la oferta: 15 días. Precios en USD, no incluyen retenciones. 50% anticipo, 50% contra entrega.'
};
function fmtMoney(n, moneda) {
  const s = n.toLocaleString('es-MX', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return `$${s} ${moneda}`;
}
function totals(data) {
  const subtotal = data.items.reduce((a, it) => a + it.qty * it.price, 0);
  const iva = data.iva ? subtotal * 0.16 : 0;
  return {
    subtotal,
    iva,
    total: subtotal + iva
  };
}
function CotizacionDoc({
  data = DEFAULT_DATA,
  brand = DEFAULT_BRAND
}) {
  const t = totals(data);
  const ink = '#1a2430';
  const muted = '#5d6b7a';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      color: ink,
      padding: '40px 40px 0',
      fontSize: '11px',
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 11,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 8,
      background: brand.color,
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-serif)',
      fontSize: 21,
      fontWeight: 600
    }
  }, brand.initials), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      fontWeight: 600,
      color: ink,
      lineHeight: 1.1
    }
  }, brand.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9.5,
      color: muted,
      marginTop: 2
    }
  }, brand.address))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '0.14em',
      color: brand.color
    }
  }, "COTIZACI\xD3N"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color: muted,
      marginTop: 3
    }
  }, "N.\xBA ", data.numero))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2.5,
      background: brand.color,
      borderRadius: 2,
      margin: '16px 0 18px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8.5,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: muted,
      marginBottom: 4
    }
  }, "Para"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 12
    }
  }, data.cliente), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color: muted
    }
  }, "RFC ", data.clienteRfc)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 168,
      flex: 'none'
    }
  }, [['Fecha', data.fecha], ['Válida hasta', data.validez], ['Moneda', data.moneda]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 10,
      marginBottom: 4,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: muted
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, v))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 42px 78px 88px',
      background: brand.tint,
      color: brand.color,
      fontSize: 8.5,
      fontWeight: 600,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      padding: '7px 10px',
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement("span", null, "Descripci\xF3n"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, "Cant"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, "P. Unit"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, "Importe")), data.items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 42px 78px 88px',
      padding: '9px 10px',
      borderBottom: '1px solid #eceff3',
      fontSize: 11
    }
  }, /*#__PURE__*/React.createElement("span", null, it.desc), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      fontFamily: 'var(--font-mono)',
      color: muted
    }
  }, it.qty), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      fontFamily: 'var(--font-mono)',
      color: muted
    }
  }, it.price.toLocaleString('es-MX', {
    minimumFractionDigits: 2
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      fontFamily: 'var(--font-mono)',
      fontWeight: 500
    }
  }, (it.qty * it.price).toLocaleString('es-MX', {
    minimumFractionDigits: 2
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 230
    }
  }, /*#__PURE__*/React.createElement(Row, {
    k: "Subtotal",
    v: fmtMoney(t.subtotal, data.moneda),
    muted: muted
  }), data.iva && /*#__PURE__*/React.createElement(Row, {
    k: "IVA 16%",
    v: fmtMoney(t.iva, data.moneda),
    muted: muted
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginTop: 7,
      paddingTop: 9,
      borderTop: `1.5px solid ${brand.color}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 13,
      fontWeight: 600
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 16,
      fontWeight: 600,
      color: brand.color
    }
  }, fmtMoney(t.total, data.moneda))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8.5,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: muted,
      marginBottom: 4
    }
  }, "Condiciones"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: '#3c4a58',
      lineHeight: 1.55
    }
  }, data.notas)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 16,
      marginTop: 30,
      paddingTop: 12,
      borderTop: '1px solid #eceff3'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8.5,
      color: muted,
      lineHeight: 1.5
    }
  }, brand.name, " \xB7 RFC ", brand.rfc, /*#__PURE__*/React.createElement("br", null), brand.address), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      minWidth: 130
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid #9aa6b2',
      paddingTop: 5,
      fontSize: 9,
      color: muted
    }
  }, "Firma autorizada"))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 8,
      color: '#9aa6b2',
      padding: '14px 0 18px'
    }
  }, "1 / 1"));
}
function Row({
  k,
  v,
  muted
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 4,
      fontSize: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: muted
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, v));
}
window.TectoCorp = {
  CotizacionDoc,
  fmtMoney,
  totals,
  DEFAULT_BRAND,
  DEFAULT_DATA
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tecto/CorpDocs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tecto/Editor.jsx
try { (() => {
/* Tecto UI Kit — code Editor pane (Monaco-like) with LaTeX highlighting. window.TectoEditor */
(function injectEditorCSS() {
  if (document.getElementById('tecto-kit-editor-css')) return;
  const css = `
.tk-editor { display: flex; flex-direction: column; min-height: 0; background: var(--code-bg); }
.tk-editor__tabs { display: flex; align-items: stretch; height: 36px; background: var(--surface-sunken); border-bottom: 1px solid var(--border); flex: none; }
.tk-editor__tab { display: inline-flex; align-items: center; gap: 7px; padding: 0 13px; font-family: var(--font-mono); font-size: var(--text-xs); color: var(--ink-muted); border-right: 1px solid var(--border); cursor: default; }
.tk-editor__tab--active { background: var(--code-bg); color: var(--ink-strong); box-shadow: inset 0 -2px 0 var(--accent); }
.tk-editor__tab .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }
.tk-editor__scroll { flex: 1; min-height: 0; overflow: auto; padding: 8px 0 40px; }
.tk-editor__line { display: flex; align-items: flex-start; min-height: 20px; font-family: var(--font-mono); font-size: 13px; line-height: 20px; }
.tk-editor__line:hover { background: color-mix(in srgb, var(--accent) 5%, transparent); }
.tk-editor__line--active { background: color-mix(in srgb, var(--accent) 8%, transparent); }
.tk-editor__gutter { flex: none; width: 46px; padding-right: 14px; text-align: right; color: var(--code-gutter); user-select: none; font-size: 12px; }
.tk-editor__code { flex: 1; white-space: pre-wrap; word-break: break-word; padding-right: 16px; color: var(--code-text); }
.tk-tok-cmd { color: var(--code-cmd); }
.tk-tok-brace { color: var(--code-bracket); }
.tk-tok-math { color: var(--code-math); }
.tk-tok-comment { color: var(--code-comment); font-style: italic; }
.tk-tok-string { color: var(--code-string); }
.tk-caret { display: inline-block; width: 2px; height: 15px; background: var(--accent); margin-left: 1px; vertical-align: -2px; animation: tk-blink 1.1s steps(1) infinite; }
@keyframes tk-blink { 50% { opacity: 0; } }
`;
  const el = document.createElement('style');
  el.id = 'tecto-kit-editor-css';
  el.textContent = css;
  document.head.appendChild(el);
})();
function tokenize(line) {
  const out = [];
  const re = /(%.*$)|(\\[a-zA-Z@]+\*?|\\.)|(\$[^$]*\$)|([{}\[\]])/g;
  let last = 0,
    m;
  while ((m = re.exec(line)) !== null) {
    if (m.index > last) out.push({
      t: line.slice(last, m.index),
      c: null
    });
    let cls = null;
    if (m[1]) cls = 'tk-tok-comment';else if (m[2]) cls = 'tk-tok-cmd';else if (m[3]) cls = 'tk-tok-math';else if (m[4]) cls = 'tk-tok-brace';
    out.push({
      t: m[0],
      c: cls
    });
    last = m.index + m[0].length;
  }
  if (last < line.length) out.push({
    t: line.slice(last),
    c: null
  });
  return out;
}
function Editor({
  lines,
  activeLine = 11,
  caretLine = 23,
  filename = 'main.tex',
  secondary = 'refs.bib'
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tk-editor"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-editor__tabs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-editor__tab tk-editor__tab--active"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), filename), secondary && /*#__PURE__*/React.createElement("div", {
    className: "tk-editor__tab"
  }, secondary)), /*#__PURE__*/React.createElement("div", {
    className: "tk-editor__scroll"
  }, lines.map((ln, i) => {
    const n = i + 1;
    const toks = tokenize(ln);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: 'tk-editor__line' + (n === activeLine ? ' tk-editor__line--active' : '')
    }, /*#__PURE__*/React.createElement("div", {
      className: "tk-editor__gutter"
    }, n), /*#__PURE__*/React.createElement("div", {
      className: "tk-editor__code"
    }, toks.map((tk, j) => tk.c ? /*#__PURE__*/React.createElement("span", {
      key: j,
      className: tk.c
    }, tk.t) : /*#__PURE__*/React.createElement("span", {
      key: j
    }, tk.t)), n === caretLine && /*#__PURE__*/React.createElement("span", {
      className: "tk-caret"
    })));
  })));
}
window.TectoEditor = {
  Editor
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tecto/Editor.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tecto/Generator.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Tecto UI Kit — document Generator: form (left) → live corporate PDF (right). window.TectoGenerator */
(function injectGenCSS() {
  if (document.getElementById('tecto-kit-gen-css')) return;
  const css = `
.tk-gen { flex: 1; min-height: 0; display: flex; }
.tk-gen__form { width: 432px; flex: none; min-height: 0; overflow: auto; background: var(--surface); border-right: 1px solid var(--border); }
.tk-gen__form-in { padding: 20px 22px 60px; display: flex; flex-direction: column; gap: 16px; }
.tk-gen__head { display: flex; align-items: center; gap: 10px; }
.tk-gen__head h2 { font-family: var(--font-serif); font-size: 20px; font-weight: 600; letter-spacing: -0.01em; color: var(--ink-strong); margin: 0; }
.tk-gen__sec { font-family: var(--font-mono); font-size: 10px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-subtle); margin: 6px 0 -4px; }
.tk-gen__grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.tk-gen__item { display: grid; grid-template-columns: 1fr 52px 84px 28px; gap: 7px; align-items: center; }
.tk-gen__item-h { display: grid; grid-template-columns: 1fr 52px 84px 28px; gap: 7px; font-family: var(--font-mono); font-size: 9.5px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--ink-subtle); padding: 0 2px; }
.tk-gen__totals { display: flex; flex-direction: column; gap: 4px; padding: 12px 14px; background: var(--surface-sunken); border: 1px solid var(--border); border-radius: var(--radius-md); font-family: var(--font-mono); font-size: 12px; }
.tk-gen__totals .r { display: flex; justify-content: space-between; }
.tk-gen__totals .t { font-weight: 600; color: var(--ink-strong); font-size: 14px; padding-top: 6px; margin-top: 2px; border-top: 1px solid var(--border-strong); }

.tk-gen__preview { flex: 1; min-width: 0; min-height: 0; display: flex; flex-direction: column; background: var(--bg-subtle); }
.tk-gen__bar { display: flex; align-items: center; gap: 8px; height: 44px; padding: 0 14px; flex: none; background: var(--surface); border-bottom: 1px solid var(--border); }
.tk-gen__bar b { font-family: var(--font-mono); font-size: 12px; color: var(--ink-muted); }
.tk-gen__sp { flex: 1; }
.tk-gen__stage { flex: 1; min-height: 0; overflow: auto; padding: 28px; display: flex; justify-content: center; align-items: flex-start; position: relative; }
.tk-gen__page { width: 480px; background: var(--paper); box-shadow: var(--shadow-lg); border-radius: 2px; }
.tk-gen__overlay { position: absolute; inset: 0; display: flex; flex-direction: column; gap: 13px; align-items: center; justify-content: center; background: color-mix(in srgb, var(--bg-subtle) 78%, transparent); backdrop-filter: blur(1.5px); }
.tk-gen__overlay span { font-family: var(--font-mono); font-size: 13px; color: var(--ink-muted); }
`;
  const el = document.createElement('style');
  el.id = 'tecto-kit-gen-css';
  el.textContent = css;
  document.head.appendChild(el);
})();
function Generator({
  data,
  setData,
  status,
  onCompile,
  onDownload
}) {
  const I = window.TectoIcons;
  const {
    Input,
    Select,
    Switch,
    Textarea,
    Button,
    IconButton,
    Badge,
    StatusPill
  } = window.TectoDS;
  const TA = Textarea || (p => /*#__PURE__*/React.createElement("textarea", _extends({
    rows: 3,
    style: {
      width: '100%',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      padding: '9px 11px',
      borderRadius: 7,
      border: '1px solid var(--border-strong)',
      background: 'var(--surface)',
      color: 'var(--ink)',
      resize: 'vertical'
    }
  }, p)));
  const {
    CotizacionDoc,
    fmtMoney,
    totals
  } = window.TectoCorp;
  const t = totals(data);
  const set = (k, v) => setData({
    ...data,
    [k]: v
  });
  const setItem = (i, k, v) => {
    const items = data.items.map((it, j) => j === i ? {
      ...it,
      [k]: k === 'desc' ? v : parseFloat(v) || 0
    } : it);
    setData({
      ...data,
      items
    });
  };
  const addItem = () => setData({
    ...data,
    items: [...data.items, {
      desc: '',
      qty: 1,
      price: 0
    }]
  });
  const delItem = i => setData({
    ...data,
    items: data.items.filter((_, j) => j !== i)
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "tk-gen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-gen__form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-gen__form-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-gen__head"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    mono: true
  }, "cotizacion.cls"), /*#__PURE__*/React.createElement("h2", null, "Nueva cotizaci\xF3n")), /*#__PURE__*/React.createElement("div", {
    className: "tk-gen__sec"
  }, "Cliente"), /*#__PURE__*/React.createElement(Input, {
    label: "Raz\xF3n social",
    value: data.cliente,
    onChange: e => set('cliente', e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    className: "tk-gen__grid2"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "RFC",
    mono: true,
    value: data.clienteRfc,
    onChange: e => set('clienteRfc', e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "N.\xBA cotizaci\xF3n",
    mono: true,
    value: data.numero,
    onChange: e => set('numero', e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "tk-gen__sec"
  }, "Vigencia"), /*#__PURE__*/React.createElement("div", {
    className: "tk-gen__grid2"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Fecha",
    iconLeft: /*#__PURE__*/React.createElement(I.Calendar, {
      size: 15
    }),
    value: data.fecha,
    onChange: e => set('fecha', e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "V\xE1lida hasta",
    iconLeft: /*#__PURE__*/React.createElement(I.Calendar, {
      size: 15
    }),
    value: data.validez,
    onChange: e => set('validez', e.target.value)
  })), /*#__PURE__*/React.createElement(Select, {
    label: "Moneda",
    value: data.moneda,
    onChange: e => set('moneda', e.target.value),
    options: ['USD', 'MXN', 'EUR']
  }), /*#__PURE__*/React.createElement("div", {
    className: "tk-gen__sec"
  }, "Conceptos"), /*#__PURE__*/React.createElement("div", {
    className: "tk-gen__item-h"
  }, /*#__PURE__*/React.createElement("span", null, "Descripci\xF3n"), /*#__PURE__*/React.createElement("span", null, "Cant"), /*#__PURE__*/React.createElement("span", null, "P. Unit"), /*#__PURE__*/React.createElement("span", null)), data.items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    className: "tk-gen__item",
    key: i
  }, /*#__PURE__*/React.createElement(Input, {
    size: "sm",
    value: it.desc,
    placeholder: "Concepto\u2026",
    onChange: e => setItem(i, 'desc', e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    size: "sm",
    align: "end",
    value: String(it.qty),
    onChange: e => setItem(i, 'qty', e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    size: "sm",
    align: "end",
    prefix: "$",
    value: String(it.price),
    onChange: e => setItem(i, 'price', e.target.value)
  }), /*#__PURE__*/React.createElement(IconButton, {
    size: "sm",
    label: "Quitar",
    icon: /*#__PURE__*/React.createElement(I.Trash, {
      size: 15
    }),
    onClick: () => delItem(i)
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(I.Plus, {
      size: 15
    }),
    onClick: addItem
  }, "A\xF1adir concepto")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "Aplicar IVA (16%)",
    checked: data.iva,
    onChange: e => set('iva', e.target.checked)
  })), /*#__PURE__*/React.createElement("div", {
    className: "tk-gen__totals"
  }, /*#__PURE__*/React.createElement("div", {
    className: "r"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-muted)'
    }
  }, "Subtotal"), /*#__PURE__*/React.createElement("span", null, fmtMoney(t.subtotal, data.moneda))), data.iva && /*#__PURE__*/React.createElement("div", {
    className: "r"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-muted)'
    }
  }, "IVA 16%"), /*#__PURE__*/React.createElement("span", null, fmtMoney(t.iva, data.moneda))), /*#__PURE__*/React.createElement("div", {
    className: "r t"
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", null, fmtMoney(t.total, data.moneda)))), /*#__PURE__*/React.createElement("div", {
    className: "tk-gen__sec"
  }, "Condiciones"), /*#__PURE__*/React.createElement(TA, {
    rows: 3,
    value: data.notas,
    onChange: e => set('notas', e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "tk-gen__preview"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-gen__bar"
  }, /*#__PURE__*/React.createElement(I.FileText, {
    size: 16
  }), /*#__PURE__*/React.createElement("b", null, "cotizacion-", data.numero, ".pdf"), /*#__PURE__*/React.createElement("div", {
    className: "tk-gen__sp"
  }), /*#__PURE__*/React.createElement(StatusPill, {
    status: status === 'idle' ? 'idle' : status,
    time: status === 'success' ? '0.9s' : undefined
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(I.Play, {
      size: 15
    }),
    onClick: onCompile,
    loading: status === 'running'
  }, status === 'running' ? 'Compilando…' : 'Compilar'), /*#__PURE__*/React.createElement(IconButton, {
    size: "sm",
    variant: "solid",
    label: "Descargar PDF",
    icon: /*#__PURE__*/React.createElement(I.Download, {
      size: 16
    }),
    onClick: onDownload
  })), /*#__PURE__*/React.createElement("div", {
    className: "tk-gen__stage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-gen__page"
  }, /*#__PURE__*/React.createElement(CotizacionDoc, {
    data: data
  })), status === 'running' && /*#__PURE__*/React.createElement("div", {
    className: "tk-gen__overlay"
  }, /*#__PURE__*/React.createElement(window.TectoDS.Spinner, {
    size: "lg"
  }), /*#__PURE__*/React.createElement("span", null, "Componiendo con Tectonic\u2026")))));
}
window.TectoGenerator = {
  Generator
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tecto/Generator.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tecto/Icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Tecto UI Kit — icon set (Lucide-style, 1.75 stroke). Exposed on window.TectoIcons */
function Ico({
  size = 18,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, rest), children);
}
const Play = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("polygon", {
  points: "6 3 20 12 6 21 6 3",
  fill: "currentColor",
  stroke: "none"
}));
const Download = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("path", {
  d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "7 10 12 15 17 10"
}), /*#__PURE__*/React.createElement("line", {
  x1: "12",
  y1: "15",
  x2: "12",
  y2: "3"
}));
const Save = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("path", {
  d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "17 21 17 13 7 13 7 21"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "7 3 7 8 15 8"
}));
const Sun = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
}));
const Moon = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("path", {
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"
}));
const FileText = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("path", {
  d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "14 2 14 8 20 8"
}), /*#__PURE__*/React.createElement("line", {
  x1: "8",
  y1: "13",
  x2: "16",
  y2: "13"
}), /*#__PURE__*/React.createElement("line", {
  x1: "8",
  y1: "17",
  x2: "13",
  y2: "17"
}));
const Folder = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("path", {
  d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.5l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z"
}));
const Clock = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "9"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "12 7 12 12 15 14"
}));
const Settings = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 7 19.4a1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0-1.1-2.7H1a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 2.6 7a1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.6 1.6 0 0 0 7 2.6h.1A1.6 1.6 0 0 0 8.2 1H8a2 2 0 1 1 4 0v.1A1.6 1.6 0 0 0 14.8 2.6a1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V7a1.6 1.6 0 0 0 1.5 1H23a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"
}));
const Search = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("circle", {
  cx: "11",
  cy: "11",
  r: "7"
}), /*#__PURE__*/React.createElement("line", {
  x1: "21",
  y1: "21",
  x2: "16.65",
  y2: "16.65"
}));
const PanelLeft = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "3",
  width: "18",
  height: "18",
  rx: "2"
}), /*#__PURE__*/React.createElement("line", {
  x1: "9",
  y1: "3",
  x2: "9",
  y2: "21"
}));
const Columns = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "3",
  width: "18",
  height: "18",
  rx: "2"
}), /*#__PURE__*/React.createElement("line", {
  x1: "12",
  y1: "3",
  x2: "12",
  y2: "21"
}));
const Plus = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("line", {
  x1: "12",
  y1: "5",
  x2: "12",
  y2: "19"
}), /*#__PURE__*/React.createElement("line", {
  x1: "5",
  y1: "12",
  x2: "19",
  y2: "12"
}));
const Check = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("polyline", {
  points: "20 6 9 17 4 12"
}));
const X = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /*#__PURE__*/React.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
}));
const Alert = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("path", {
  d: "M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"
}), /*#__PURE__*/React.createElement("line", {
  x1: "12",
  y1: "9",
  x2: "12",
  y2: "13"
}), /*#__PURE__*/React.createElement("line", {
  x1: "12",
  y1: "17",
  x2: "12",
  y2: "17"
}));
const Lock = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("rect", {
  x: "4",
  y: "11",
  width: "16",
  height: "10",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 11V7a4 4 0 0 1 8 0v4"
}));
const Zap = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("polygon", {
  points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
  fill: "currentColor",
  stroke: "none"
}));
const Menu = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("line", {
  x1: "3",
  y1: "6",
  x2: "21",
  y2: "6"
}), /*#__PURE__*/React.createElement("line", {
  x1: "3",
  y1: "12",
  x2: "21",
  y2: "12"
}), /*#__PURE__*/React.createElement("line", {
  x1: "3",
  y1: "18",
  x2: "21",
  y2: "18"
}));
const More = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "5",
  r: "1.4",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "1.4",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "19",
  r: "1.4",
  fill: "currentColor"
}));
const Copy = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("rect", {
  x: "9",
  y: "9",
  width: "13",
  height: "13",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
}));
const Trash = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("polyline", {
  points: "3 6 5 6 21 6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
}));
const Chevron = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("polyline", {
  points: "9 18 15 12 9 6"
}));
const ZoomIn = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("circle", {
  cx: "11",
  cy: "11",
  r: "7"
}), /*#__PURE__*/React.createElement("line", {
  x1: "21",
  y1: "21",
  x2: "16.65",
  y2: "16.65"
}), /*#__PURE__*/React.createElement("line", {
  x1: "11",
  y1: "8",
  x2: "11",
  y2: "14"
}), /*#__PURE__*/React.createElement("line", {
  x1: "8",
  y1: "11",
  x2: "14",
  y2: "11"
}));
const Maximize = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("path", {
  d: "M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3"
}));
const GitHub = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("path", {
  d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.7A5.2 5.2 0 0 0 20 4.8 4.9 4.9 0 0 0 19.9 1S18.7.6 16 2.5a13.4 13.4 0 0 0-7 0C6.3.6 5.1 1 5.1 1A4.9 4.9 0 0 0 5 4.8a5.2 5.2 0 0 0-1.4 3.7c0 5.2 3.2 6.4 6.2 6.7a3.4 3.4 0 0 0-.9 2.6V22"
}));
const Layout = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "3",
  width: "18",
  height: "18",
  rx: "2"
}), /*#__PURE__*/React.createElement("line", {
  x1: "3",
  y1: "9",
  x2: "21",
  y2: "9"
}), /*#__PURE__*/React.createElement("line", {
  x1: "9",
  y1: "21",
  x2: "9",
  y2: "9"
}));
const Image = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "3",
  width: "18",
  height: "18",
  rx: "2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "8.5",
  cy: "8.5",
  r: "1.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 15l-5-5L5 21"
}));
const Building = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("rect", {
  x: "4",
  y: "2",
  width: "16",
  height: "20",
  rx: "1.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"
}));
const Calendar = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "4",
  width: "18",
  height: "18",
  rx: "2"
}), /*#__PURE__*/React.createElement("line", {
  x1: "3",
  y1: "9",
  x2: "21",
  y2: "9"
}), /*#__PURE__*/React.createElement("line", {
  x1: "8",
  y1: "2",
  x2: "8",
  y2: "6"
}), /*#__PURE__*/React.createElement("line", {
  x1: "16",
  y1: "2",
  x2: "16",
  y2: "6"
}));
const Hash = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("line", {
  x1: "4",
  y1: "9",
  x2: "20",
  y2: "9"
}), /*#__PURE__*/React.createElement("line", {
  x1: "4",
  y1: "15",
  x2: "20",
  y2: "15"
}), /*#__PURE__*/React.createElement("line", {
  x1: "10",
  y1: "3",
  x2: "8",
  y2: "21"
}), /*#__PURE__*/React.createElement("line", {
  x1: "16",
  y1: "3",
  x2: "14",
  y2: "21"
}));
const Type = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("polyline", {
  points: "4 7 4 4 20 4 20 7"
}), /*#__PURE__*/React.createElement("line", {
  x1: "9",
  y1: "20",
  x2: "15",
  y2: "20"
}), /*#__PURE__*/React.createElement("line", {
  x1: "12",
  y1: "4",
  x2: "12",
  y2: "20"
}));
const Sparkle = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z",
  fill: "currentColor",
  stroke: "none"
}));
const Stamp = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("path", {
  d: "M5 22h14M6 18h12M9 10a3 3 0 1 1 6 0c0 2-2 2.5-2 4v0h-2v0c0-1.5-2-2-2-4z"
}));
window.TectoIcons = {
  Play,
  Download,
  Save,
  Sun,
  Moon,
  FileText,
  Folder,
  Clock,
  Settings,
  Search,
  PanelLeft,
  Columns,
  Plus,
  Check,
  X,
  Alert,
  Lock,
  Zap,
  Menu,
  More,
  Copy,
  Trash,
  Chevron,
  ZoomIn,
  Maximize,
  GitHub,
  Layout,
  Image,
  Building,
  Calendar,
  Hash,
  Type,
  Sparkle,
  Stamp
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tecto/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tecto/PdfPreview.jsx
try { (() => {
/* Tecto UI Kit — PDF preview pane with compile states. window.TectoPreview */
(function injectPreviewCSS() {
  if (document.getElementById('tecto-kit-preview-css')) return;
  const css = `
.tk-prev { display: flex; flex-direction: column; min-height: 0; background: var(--bg-subtle); }
.tk-prev__bar { display: flex; align-items: center; gap: 8px; height: 36px; padding: 0 10px; flex: none;
  background: var(--surface); border-bottom: 1px solid var(--border); }
.tk-prev__pages { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--ink-muted); }
.tk-prev__zoom { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--ink-muted); min-width: 38px; text-align: center; }
.tk-prev__spacer { flex: 1; }
.tk-prev__stage { flex: 1; min-height: 0; overflow: auto; padding: 26px; display: flex; justify-content: center; align-items: flex-start; position: relative; }
.tk-prev__page { width: 460px; background: var(--paper); box-shadow: var(--shadow-lg); border-radius: 2px; transition: transform var(--dur-2) var(--ease-out); }
.tk-prev__overlay { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px;
  background: color-mix(in srgb, var(--bg-subtle) 78%, transparent); backdrop-filter: blur(1.5px); }
.tk-prev__overlay-txt { font-family: var(--font-mono); font-size: var(--text-sm); color: var(--ink-muted); }
.tk-prev__err { flex: 1; min-height: 0; display: flex; flex-direction: column; }
.tk-prev__err-head { display: flex; align-items: center; gap: 9px; padding: 14px 16px; color: var(--danger-fg); background: var(--danger-bg); border-bottom: 1px solid var(--border); }
.tk-prev__err-head b { font-family: var(--font-sans); font-size: var(--text-sm); font-weight: 600; }
.tk-prev__log { flex: 1; min-height: 0; overflow: auto; padding: 14px 16px; font-family: var(--font-mono); font-size: 12px; line-height: 1.7; color: var(--ink-muted); background: var(--code-bg); }
.tk-prev__log .err { color: var(--danger-fg); }
.tk-prev__log .ln { color: var(--ink-subtle); }
.tk-prev__log .ok { color: var(--success-fg); }
`;
  const el = document.createElement('style');
  el.id = 'tecto-kit-preview-css';
  el.textContent = css;
  document.head.appendChild(el);
})();
function PreviewBar({
  zoom,
  setZoom,
  children
}) {
  const {
    ZoomIn,
    Maximize,
    Download
  } = window.TectoIcons;
  const {
    IconButton
  } = window.TectoDS;
  return /*#__PURE__*/React.createElement("div", {
    className: "tk-prev__bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tk-prev__pages"
  }, "1 / 1"), /*#__PURE__*/React.createElement("div", {
    className: "tk-prev__spacer"
  }), /*#__PURE__*/React.createElement(IconButton, {
    size: "sm",
    label: "Alejar",
    icon: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 15
      }
    }, "\u2013"),
    onClick: () => setZoom(Math.max(60, zoom - 10))
  }), /*#__PURE__*/React.createElement("span", {
    className: "tk-prev__zoom"
  }, zoom, "%"), /*#__PURE__*/React.createElement(IconButton, {
    size: "sm",
    label: "Acercar",
    icon: /*#__PURE__*/React.createElement(ZoomIn, {
      size: 16
    }),
    onClick: () => setZoom(Math.min(160, zoom + 10))
  }), /*#__PURE__*/React.createElement(IconButton, {
    size: "sm",
    label: "Ajustar",
    icon: /*#__PURE__*/React.createElement(Maximize, {
      size: 16
    }),
    onClick: () => setZoom(100)
  }), children);
}
function PdfPreview({
  status,
  onDownload,
  onCompile,
  engine,
  setEngine
}) {
  const [zoom, setZoom] = React.useState(100);
  const {
    Download,
    Alert,
    Play
  } = window.TectoIcons;
  const {
    IconButton,
    Button,
    Select,
    StatusPill
  } = window.TectoDS;
  const {
    TypesetPage
  } = window.TectoSample;
  const Bar = /*#__PURE__*/React.createElement("div", {
    className: "tk-prev__bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tk-prev__pages"
  }, "1 / 1"), setEngine && /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    mono: true,
    value: engine,
    onChange: e => setEngine(e.target.value),
    options: ['pdfLaTeX', 'XeLaTeX', 'LuaLaTeX']
  }), /*#__PURE__*/React.createElement("div", {
    className: "tk-prev__spacer"
  }), /*#__PURE__*/React.createElement(StatusPill, {
    status: status === 'idle' ? 'idle' : status,
    time: status === 'success' ? '1.2s' : undefined
  }), onCompile && /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Play, {
      size: 15
    }),
    onClick: onCompile,
    loading: status === 'running'
  }, status === 'running' ? 'Compilando…' : 'Compilar'), /*#__PURE__*/React.createElement(IconButton, {
    size: "sm",
    label: "Descargar PDF",
    icon: /*#__PURE__*/React.createElement(Download, {
      size: 16
    }),
    variant: "solid",
    onClick: onDownload
  }));
  if (status === 'error') {
    return /*#__PURE__*/React.createElement("div", {
      className: "tk-prev"
    }, Bar, /*#__PURE__*/React.createElement("div", {
      className: "tk-prev__err"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tk-prev__err-head"
    }, /*#__PURE__*/React.createElement(Alert, {
      size: 18
    }), /*#__PURE__*/React.createElement("b", null, "! Undefined control sequence \u2014 l\xEDnea 23")), /*#__PURE__*/React.createElement("div", {
      className: "tk-prev__log"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ln"
    }, "[1] running XeLaTeX on main.tex\u2026"), /*#__PURE__*/React.createElement("div", null, "This is XeTeX, Version 3.141592653"), /*#__PURE__*/React.createElement("div", null, "(./main.tex LaTeX2e <2024-06-01>"), /*#__PURE__*/React.createElement("div", {
      className: "err"
    }, "! Undefined control sequence."), /*#__PURE__*/React.createElement("div", {
      className: "err"
    }, "l.23   \\maketTitle"), /*#__PURE__*/React.createElement("div", null, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0^"), /*#__PURE__*/React.createElement("div", {
      className: "ln"
    }, "? \xBFQuisiste decir ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--code-cmd)'
      }
    }, "\\maketitle"), "?"))));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "tk-prev"
  }, Bar, /*#__PURE__*/React.createElement("div", {
    className: "tk-prev__stage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-prev__page",
    style: {
      transform: `scale(${zoom / 100})`,
      transformOrigin: 'top center'
    }
  }, /*#__PURE__*/React.createElement(TypesetPage, null)), status === 'running' && /*#__PURE__*/React.createElement("div", {
    className: "tk-prev__overlay"
  }, /*#__PURE__*/React.createElement(window.TectoDS.Spinner, {
    size: "lg"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tk-prev__overlay-txt"
  }, "Compilando con Tectonic\u2026"))));
}
window.TectoPreview = {
  PdfPreview
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tecto/PdfPreview.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tecto/Sample.jsx
try { (() => {
/* Tecto UI Kit — sample document: LaTeX source + its typeset render. window.TectoSample */
const SOURCE = String.raw`\documentclass[11pt]{article}
\usepackage[utf8]{inputenc}
\usepackage{amsmath, amssymb}
\usepackage{geometry}
\geometry{margin=2.4cm}

\title{Sobre la equivalencia entre\\ masa y energía}
\author{A. Einstein \and Tecto}
\date{Junio 2026}

\begin{document}
\maketitle

\begin{abstract}
Demostramos que la energía de un cuerpo es una
medida de su contenido de masa. Sí, otra vez.
\end{abstract}

\section{Introducción}
Sea $c$ la velocidad de la luz en el vacío. Para un
cuerpo en reposo con masa $m$, la energía vale
\begin{equation}
  E = mc^{2}.
\end{equation}
No hay que pelear con medio TeX Live para imprimirlo.

\section{Consecuencias}
La masa $m$ y la energía $E$ son, en el fondo,
la misma cosa medida en unidades distintas.

\end{document}`;
const LINES = SOURCE.split('\n');
function TypesetPage() {
  const S = {
    fontFamily: "var(--font-serif)",
    color: "#16130f"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...S,
      padding: "64px 58px",
      fontSize: "13px",
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: "26px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "22px",
      fontWeight: 600,
      lineHeight: 1.25
    }
  }, "Sobre la equivalencia entre", /*#__PURE__*/React.createElement("br", null), "masa y energ\xEDa"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "13px",
      marginTop: "12px"
    }
  }, "A. Einstein\xA0\xA0\xB7\xA0\xA0Tecto"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "12px",
      marginTop: "3px",
      color: "#4a443c"
    }
  }, "Junio 2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 26px 22px",
      fontSize: "12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      fontWeight: 600,
      marginBottom: "5px"
    }
  }, "Resumen"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "justify",
      color: "#28231d"
    }
  }, "Demostramos que la energ\xEDa de un cuerpo es una medida de su contenido de masa. S\xED, otra vez.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: "15px",
      margin: "0 0 6px"
    }
  }, "1\xA0\xA0Introducci\xF3n"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 10px",
      textAlign: "justify"
    }
  }, "Sea ", /*#__PURE__*/React.createElement("em", null, "c"), " la velocidad de la luz en el vac\xEDo. Para un cuerpo en reposo con masa ", /*#__PURE__*/React.createElement("em", null, "m"), ", la energ\xEDa vale"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "40px",
      margin: "12px 0 14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      fontSize: "17px"
    }
  }, "E = mc", /*#__PURE__*/React.createElement("sup", {
    style: {
      fontSize: "10px"
    }
  }, "2"), "."), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#4a443c"
    }
  }, "(1)")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 16px",
      textAlign: "justify"
    }
  }, "No hay que pelear con medio TeX Live para imprimirlo."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: "15px",
      margin: "0 0 6px"
    }
  }, "2\xA0\xA0Consecuencias"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      textAlign: "justify"
    }
  }, "La masa ", /*#__PURE__*/React.createElement("em", null, "m"), " y la energ\xEDa ", /*#__PURE__*/React.createElement("em", null, "E"), " son, en el fondo, la misma cosa medida en unidades distintas."));
}
window.TectoSample = {
  SOURCE,
  LINES,
  TypesetPage
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tecto/Sample.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tecto/Screens.jsx
try { (() => {
/* Tecto UI Kit — Library, History, Settings screens. window.TectoScreens */
(function injectScreensCSS() {
  if (document.getElementById('tecto-kit-screens-css')) return;
  const css = `
.tk-screen { flex: 1; min-height: 0; overflow: auto; background: var(--bg); }
.tk-screen__inner { max-width: 940px; margin: 0 auto; padding: 30px 36px 60px; }
.tk-screen__head { display: flex; align-items: center; gap: 14px; margin-bottom: 22px; }
.tk-screen__title { font-family: var(--font-serif); font-size: 28px; font-weight: 600; letter-spacing: -0.02em; color: var(--ink-strong); margin: 0; }
.tk-screen__sub { font-family: var(--font-sans); font-size: var(--text-sm); color: var(--ink-muted); margin: 3px 0 0; }
.tk-screen__sp { flex: 1; }
.tk-sec-label { font-family: var(--font-mono); font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-subtle); margin: 26px 0 12px; }
.tk-tpl-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
.tk-tpl { display: flex; flex-direction: column; gap: 10px; padding: 14px; background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); cursor: pointer; transition: border-color var(--dur-1) var(--ease-out), box-shadow var(--dur-2) var(--ease-out), transform var(--dur-2) var(--ease-out); }
.tk-tpl:hover { border-color: var(--border-strong); box-shadow: var(--shadow-md); transform: translateY(-1px); }
.tk-tpl__thumb { height: 84px; border-radius: var(--radius-sm); background: var(--paper); border: 1px solid var(--border-strong); position: relative; overflow: hidden; }
.tk-tpl__thumb span { position: absolute; left: 12px; right: 12px; background: var(--border-strong); height: 3px; border-radius: 2px; }
.tk-tpl__name { font-family: var(--font-sans); font-size: var(--text-sm); font-weight: 600; color: var(--ink-strong); display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.tk-tpl__meta { font-family: var(--font-mono); font-size: 11px; color: var(--ink-muted); }
.tk-rows { display: flex; flex-direction: column; gap: 3px; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 6px; box-shadow: var(--shadow-sm); }
.tk-set-grid { display: flex; flex-direction: column; gap: 18px; }
.tk-set-row { display: flex; align-items: center; gap: 16px; padding: 14px 2px; border-bottom: 1px solid var(--border); }
.tk-set-row:last-child { border-bottom: none; }
.tk-set-row__txt { flex: 1; }
.tk-set-row__txt b { display: block; font-family: var(--font-sans); font-size: var(--text-sm); font-weight: 600; color: var(--ink-strong); }
.tk-set-row__txt span { font-family: var(--font-sans); font-size: var(--text-xs); color: var(--ink-muted); }
`;
  const el = document.createElement('style');
  el.id = 'tecto-kit-screens-css';
  el.textContent = css;
  document.head.appendChild(el);
})();
const TEMPLATES = [{
  name: 'Artículo',
  meta: 'article · 1 col',
  pro: false,
  lines: 3
}, {
  name: 'IEEE',
  meta: 'IEEEtran · 2 col',
  pro: true,
  lines: 5
}, {
  name: 'Beamer',
  meta: 'presentación',
  pro: false,
  lines: 2
}, {
  name: 'Carta',
  meta: 'letter',
  pro: false,
  lines: 3
}, {
  name: 'CV',
  meta: 'moderncv',
  pro: true,
  lines: 4
}, {
  name: 'Tesis',
  meta: 'book · capítulos',
  pro: false,
  lines: 4
}];
function Tpl({
  t,
  onOpen
}) {
  const {
    Badge
  } = window.TectoDS;
  return /*#__PURE__*/React.createElement("div", {
    className: "tk-tpl",
    onClick: onOpen
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-tpl__thumb"
  }, Array.from({
    length: t.lines
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      top: 14 + i * 12,
      right: i === t.lines - 1 ? 40 : 12,
      background: i === 0 ? 'var(--accent)' : 'var(--border-strong)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "tk-tpl__name"
  }, t.name, " ", t.pro && /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "PRO")), /*#__PURE__*/React.createElement("div", {
    className: "tk-tpl__meta"
  }, t.meta));
}
function Library({
  onOpenDoc
}) {
  const I = window.TectoIcons;
  const {
    Button,
    Input,
    StatusPill,
    DocRow
  } = window.TectoDS;
  return /*#__PURE__*/React.createElement("div", {
    className: "tk-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-screen__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-screen__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "tk-screen__title"
  }, "Biblioteca"), /*#__PURE__*/React.createElement("p", {
    className: "tk-screen__sub"
  }, "Tus documentos y plantillas. Abre, escribe, compila, descarga.")), /*#__PURE__*/React.createElement("div", {
    className: "tk-screen__sp"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 220
    }
  }, /*#__PURE__*/React.createElement(Input, {
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(I.Search, {
      size: 15
    }),
    placeholder: "Buscar\u2026"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(I.Plus, {
      size: 15
    }),
    onClick: () => onOpenDoc('main.tex')
  }, "Nuevo documento")), /*#__PURE__*/React.createElement("div", {
    className: "tk-sec-label"
  }, "Plantillas"), /*#__PURE__*/React.createElement("div", {
    className: "tk-tpl-grid"
  }, TEMPLATES.map(t => /*#__PURE__*/React.createElement(Tpl, {
    key: t.name,
    t: t,
    onOpen: () => onOpenDoc(t.name.toLowerCase() + '.tex')
  }))), /*#__PURE__*/React.createElement("div", {
    className: "tk-sec-label"
  }, "Recientes"), /*#__PURE__*/React.createElement("div", {
    className: "tk-rows"
  }, /*#__PURE__*/React.createElement(DocRow, {
    name: "paper-2026.tex",
    meta: ['12 pp.', 'hace 2 h', 'XeLaTeX'],
    onClick: () => onOpenDoc('paper-2026.tex'),
    aside: /*#__PURE__*/React.createElement(StatusPill, {
      status: "success",
      time: "1.2s"
    })
  }), /*#__PURE__*/React.createElement(DocRow, {
    name: "cv.tex",
    meta: ['1 p.', 'ayer', 'pdfLaTeX'],
    onClick: () => onOpenDoc('cv.tex'),
    aside: /*#__PURE__*/React.createElement(StatusPill, {
      status: "idle"
    })
  }), /*#__PURE__*/React.createElement(DocRow, {
    name: "charla-tikz.tex",
    meta: ['Beamer', 'hace 3 d'],
    onClick: () => onOpenDoc('charla-tikz.tex'),
    aside: /*#__PURE__*/React.createElement(StatusPill, {
      status: "error"
    })
  }))));
}
function History({
  onOpenDoc
}) {
  const {
    StatusPill,
    DocRow,
    Badge
  } = window.TectoDS;
  const rows = [{
    n: 'paper-2026.tex',
    m: ['hace 2 h', '1.2s', '184 KB'],
    s: 'success'
  }, {
    n: 'paper-2026.tex',
    m: ['hace 2 h', '1.4s', '183 KB'],
    s: 'success'
  }, {
    n: 'charla-tikz.tex',
    m: ['hace 3 d', '—'],
    s: 'error'
  }, {
    n: 'cv.tex',
    m: ['ayer', '0.6s', '42 KB'],
    s: 'success'
  }, {
    n: 'carta.tex',
    m: ['hace 5 d', '0.4s', '38 KB'],
    s: 'success'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "tk-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-screen__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-screen__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "tk-screen__title"
  }, "Historial"), /*#__PURE__*/React.createElement("p", {
    className: "tk-screen__sub"
  }, "Cada compilaci\xF3n queda registrada en tu base de datos."))), /*#__PURE__*/React.createElement("div", {
    className: "tk-rows"
  }, rows.map((r, i) => /*#__PURE__*/React.createElement(DocRow, {
    key: i,
    name: r.n,
    meta: r.m,
    onClick: () => onOpenDoc(r.n),
    aside: /*#__PURE__*/React.createElement(StatusPill, {
      status: r.s,
      time: r.s === 'success' ? r.m[1] : undefined
    })
  })))));
}
function Settings({
  theme,
  onToggleTheme,
  engine,
  setEngine
}) {
  const {
    Select,
    Switch,
    Input,
    Badge
  } = window.TectoDS;
  return /*#__PURE__*/React.createElement("div", {
    className: "tk-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-screen__inner",
    style: {
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-screen__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "tk-screen__title"
  }, "Ajustes"), /*#__PURE__*/React.createElement("p", {
    className: "tk-screen__sub"
  }, "Motor, compilaci\xF3n y apariencia. Self-hosted, tus reglas."))), /*#__PURE__*/React.createElement("div", {
    className: "tk-sec-label"
  }, "Motor"), /*#__PURE__*/React.createElement("div", {
    className: "tk-set-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-set-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-set-row__txt"
  }, /*#__PURE__*/React.createElement("b", null, "Motor de compilaci\xF3n"), /*#__PURE__*/React.createElement("span", null, "El binario que ejecuta Tectonic por debajo.")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 180
    }
  }, /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    mono: true,
    value: engine,
    onChange: e => setEngine(e.target.value),
    options: ['pdfLaTeX', 'XeLaTeX', 'LuaLaTeX']
  }))), /*#__PURE__*/React.createElement("div", {
    className: "tk-set-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-set-row__txt"
  }, /*#__PURE__*/React.createElement("b", null, "Tama\xF1o de papel"), /*#__PURE__*/React.createElement("span", null, "Predeterminado para documentos nuevos.")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 180
    }
  }, /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    options: [{
      value: 'a4',
      label: 'A4'
    }, {
      value: 'letter',
      label: 'Carta (Letter)'
    }]
  })))), /*#__PURE__*/React.createElement("div", {
    className: "tk-sec-label"
  }, "Compilaci\xF3n"), /*#__PURE__*/React.createElement("div", {
    className: "tk-set-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-set-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-set-row__txt"
  }, /*#__PURE__*/React.createElement("b", null, "Compilar al guardar"), /*#__PURE__*/React.createElement("span", null, "Re-compila con \u2318S. C\xF3modo, pero gasta CPU.")), /*#__PURE__*/React.createElement(Switch, {
    defaultChecked: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "tk-set-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-set-row__txt"
  }, /*#__PURE__*/React.createElement("b", null, "SyncTeX"), /*#__PURE__*/React.createElement("span", null, "Salta del c\xF3digo al PDF y viceversa.")), /*#__PURE__*/React.createElement(Switch, {
    defaultChecked: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "tk-set-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-set-row__txt"
  }, /*#__PURE__*/React.createElement("b", null, "shell-escape"), /*#__PURE__*/React.createElement("span", null, "Necesario para minted/TikZ externos. Riesgo si es p\xFAblico.")), /*#__PURE__*/React.createElement(Switch, null))), /*#__PURE__*/React.createElement("div", {
    className: "tk-sec-label"
  }, "Apariencia"), /*#__PURE__*/React.createElement("div", {
    className: "tk-set-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-set-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-set-row__txt"
  }, /*#__PURE__*/React.createElement("b", null, "Modo oscuro"), /*#__PURE__*/React.createElement("span", null, "El editor a oscuras, el PDF siempre en papel blanco.")), /*#__PURE__*/React.createElement(Switch, {
    checked: theme === 'dark',
    onChange: onToggleTheme
  }))), /*#__PURE__*/React.createElement("div", {
    className: "tk-sec-label"
  }, "Cuenta"), /*#__PURE__*/React.createElement("div", {
    className: "tk-set-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-set-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-set-row__txt"
  }, /*#__PURE__*/React.createElement("b", null, "Sesi\xF3n"), /*#__PURE__*/React.createElement("span", null, "tu@servidor \xB7 self-hosted")), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "Autenticado")))));
}
window.TectoScreens = {
  Library,
  History,
  Settings
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tecto/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tecto/TemplateEditor.jsx
try { (() => {
/* Tecto UI Kit — Template authoring: .cls editor + Campos/Assets inspector. window.TectoTemplate */
(function injectTplCSS() {
  if (document.getElementById('tecto-kit-tpl-css')) return;
  const css = `
.tk-tpl-ws { flex: 1; min-height: 0; display: flex; }
.tk-tpl-ws > .tk-editor { flex: 1.1; min-width: 0; border-right: 1px solid var(--border); }
.tk-insp { width: 282px; flex: none; min-height: 0; overflow: auto; background: var(--surface); border-right: 1px solid var(--border); }
.tk-insp__in { padding: 16px 16px 50px; display: flex; flex-direction: column; gap: 14px; }
.tk-insp__h { display: flex; align-items: center; gap: 9px; }
.tk-insp__h .ic { width: 30px; height: 30px; border-radius: 7px; background: #1f3a5f; color: #fff; display: flex; align-items: center; justify-content: center; flex: none; }
.tk-insp__h b { font-family: var(--font-serif); font-size: 16px; font-weight: 600; color: var(--ink-strong); display: block; line-height: 1.1; }
.tk-insp__h span { font-family: var(--font-mono); font-size: 10.5px; color: var(--ink-muted); }
.tk-insp__sec { display: flex; align-items: center; gap: 7px; font-family: var(--font-mono); font-size: 10px; font-weight: 600; letter-spacing: 0.07em; text-transform: uppercase; color: var(--ink-subtle); margin: 4px 0 -2px; }
.tk-insp__sec .ln { flex: 1; height: 1px; background: var(--border); }
.tk-field { display: flex; align-items: center; gap: 8px; padding: 7px 9px; border: 1px solid var(--border); border-radius: var(--radius-md); background: var(--surface); }
.tk-field code { font-family: var(--font-mono); font-size: 12px; color: var(--code-cmd); flex: 1; }
.tk-asset-row { display: flex; align-items: center; gap: 9px; padding: 7px 9px; border: 1px solid var(--border); border-radius: var(--radius-md); }
.tk-asset-row .ic { width: 24px; height: 28px; border-radius: 3px; border: 1px solid var(--border-strong); background: var(--surface-sunken); display: flex; align-items: center; justify-content: center; flex: none; color: var(--ink-subtle); }
.tk-asset-row b { font-family: var(--font-mono); font-size: 11.5px; color: var(--ink); flex: 1; }
.tk-asset-row span { font-family: var(--font-sans); font-size: 10px; color: var(--ink-subtle); }
.tk-global { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 9px 11px; background: var(--accent-subtle-bg); border: 1px solid var(--border-accent); border-radius: var(--radius-md); }
.tk-global b { font-family: var(--font-sans); font-size: 12px; font-weight: 600; color: var(--accent-subtle-fg); }
.tk-global span { font-family: var(--font-sans); font-size: 10.5px; color: var(--accent-subtle-fg); opacity: 0.85; }
`;
  const el = document.createElement('style');
  el.id = 'tecto-kit-tpl-css';
  el.textContent = css;
  document.head.appendChild(el);
})();
const CLS_LINES = String.raw`% cotizacion.cls — plantilla corporativa (la creas tú)
\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{cotizacion}[2026/06 Cotizacion Acme]
\LoadClass[11pt]{article}
\RequirePackage[margin=2.2cm]{geometry}
\RequirePackage{xcolor, graphicx, array}

% --- Marca de la empresa ---
\definecolor{marca}{HTML}{1F3A5F}
\newcommand{\logo}{\includegraphics[height=11mm]{assets/logo.pdf}}

% --- Campos: los llena el formulario del Generador ---
\newcommand{\cliente}[1]{\def\@cliente{#1}}
\newcommand{\rfccliente}[1]{\def\@rfc{#1}}
\newcommand{\numero}[1]{\def\@num{#1}}
\newcommand{\moneda}[1]{\def\@mon{#1}}

\newenvironment{conceptos}
  {\begin{tabular}{p{8cm} r r r}}
  {\end{tabular}}

\newcommand{\maketitlepage}{%
  {\logo\hfill\color{marca}\Huge COTIZACIÓN}%
  \par\rule{\linewidth}{1.5pt}%
}
\endinput`.split('\n');
function Field({
  name,
  type
}) {
  const {
    Badge,
    IconButton
  } = window.TectoDS;
  const I = window.TectoIcons;
  return /*#__PURE__*/React.createElement("div", {
    className: "tk-field"
  }, /*#__PURE__*/React.createElement("code", null, "\\", name), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    mono: true
  }, type));
}
function TemplateInspector({
  onToast
}) {
  const I = window.TectoIcons;
  const {
    Button,
    Switch,
    IconButton
  } = window.TectoDS;
  const [global, setGlobal] = React.useState(false);
  const fields = [['cliente', 'texto'], ['rfccliente', 'texto'], ['numero', 'texto'], ['fecha', 'fecha'], ['moneda', 'selección'], ['conceptos', 'tabla'], ['iva', 'sí/no'], ['notas', 'texto largo']];
  return /*#__PURE__*/React.createElement("div", {
    className: "tk-insp"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-insp__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-insp__h"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(I.Layout, {
    size: 16
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "cotizacion"), /*#__PURE__*/React.createElement("span", null, "/plantillas/cotizacion/"))), /*#__PURE__*/React.createElement("div", {
    className: "tk-insp__sec"
  }, "Campos ", /*#__PURE__*/React.createElement("div", {
    className: "ln"
  })), fields.map(([n, t]) => /*#__PURE__*/React.createElement(Field, {
    key: n,
    name: n,
    type: t
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(I.Plus, {
      size: 14
    }),
    onClick: () => onToast({
      tone: 'info',
      title: 'Nuevo campo',
      msg: 'Define \\comando y su tipo.'
    })
  }, "A\xF1adir campo"), /*#__PURE__*/React.createElement("div", {
    className: "tk-insp__sec"
  }, "Assets ", /*#__PURE__*/React.createElement("div", {
    className: "ln"
  })), /*#__PURE__*/React.createElement("div", {
    className: "tk-global"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Usar assets globales"), /*#__PURE__*/React.createElement("span", null, "logos y fuentes compartidos")), /*#__PURE__*/React.createElement(Switch, {
    size: "sm",
    checked: global,
    onChange: e => setGlobal(e.target.checked)
  })), !global && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "tk-asset-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(I.Image, {
    size: 13
  })), /*#__PURE__*/React.createElement("b", null, "logo.pdf"), /*#__PURE__*/React.createElement("span", null, "propio")), /*#__PURE__*/React.createElement("div", {
    className: "tk-asset-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(I.Image, {
    size: 13
  })), /*#__PURE__*/React.createElement("b", null, "sello.png"), /*#__PURE__*/React.createElement("span", null, "propio"))), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(I.Plus, {
      size: 14
    }),
    onClick: () => onToast({
      tone: 'info',
      title: 'Subir asset',
      msg: global ? 'Gestiona globales en Assets.' : 'Se guarda en /plantillas/cotizacion/assets/.'
    })
  }, global ? 'Gestionar globales' : 'Subir a esta plantilla')));
}
function TemplateWorkspace({
  status,
  onCompile,
  onDownload,
  onToast
}) {
  const {
    Editor
  } = window.TectoEditor;
  const {
    CotizacionDoc
  } = window.TectoCorp;
  const I = window.TectoIcons;
  const {
    Button,
    IconButton,
    StatusPill
  } = window.TectoDS;
  return /*#__PURE__*/React.createElement("div", {
    className: "tk-tpl-ws"
  }, /*#__PURE__*/React.createElement(TemplateInspector, {
    onToast: onToast
  }), /*#__PURE__*/React.createElement(Editor, {
    lines: CLS_LINES,
    filename: "cotizacion.cls",
    secondary: "preview.tex",
    activeLine: 13,
    caretLine: 16
  }), /*#__PURE__*/React.createElement("div", {
    className: "tk-gen__preview"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-gen__bar"
  }, /*#__PURE__*/React.createElement(I.FileText, {
    size: 16
  }), /*#__PURE__*/React.createElement("b", null, "vista previa \xB7 datos de ejemplo"), /*#__PURE__*/React.createElement("div", {
    className: "tk-gen__sp"
  }), /*#__PURE__*/React.createElement(StatusPill, {
    status: status === 'idle' ? 'idle' : status,
    time: status === 'success' ? '0.9s' : undefined
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(I.Play, {
      size: 15
    }),
    onClick: onCompile,
    loading: status === 'running'
  }, status === 'running' ? 'Compilando…' : 'Compilar'), /*#__PURE__*/React.createElement(IconButton, {
    size: "sm",
    variant: "solid",
    label: "Descargar PDF",
    icon: /*#__PURE__*/React.createElement(I.Download, {
      size: 16
    }),
    onClick: onDownload
  })), /*#__PURE__*/React.createElement("div", {
    className: "tk-gen__stage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-gen__page"
  }, /*#__PURE__*/React.createElement(CotizacionDoc, null)), status === 'running' && /*#__PURE__*/React.createElement("div", {
    className: "tk-gen__overlay"
  }, /*#__PURE__*/React.createElement(window.TectoDS.Spinner, {
    size: "lg"
  }), /*#__PURE__*/React.createElement("span", null, "Compilando con Tectonic\u2026")))));
}
window.TectoTemplate = {
  TemplateWorkspace,
  TemplateInspector,
  CLS_LINES
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tecto/TemplateEditor.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tecto/WorkspaceScreens.jsx
try { (() => {
/* Tecto UI Kit — document-workspace screens: Documentos, Plantillas, Assets. window.TectoWorkspace */
(function injectWsCSS() {
  if (document.getElementById('tecto-kit-ws-css')) return;
  const css = `
.tk-ws { flex: 1; min-height: 0; overflow: auto; background: var(--bg); }
.tk-ws__in { max-width: 960px; margin: 0 auto; padding: 30px 36px 70px; }
.tk-ws__head { display: flex; align-items: flex-end; gap: 14px; margin-bottom: 6px; }
.tk-ws__title { font-family: var(--font-serif); font-size: 28px; font-weight: 600; letter-spacing: -0.02em; color: var(--ink-strong); margin: 0; }
.tk-ws__sub { font-family: var(--font-sans); font-size: var(--text-sm); color: var(--ink-muted); margin: 3px 0 0; }
.tk-ws__sp { flex: 1; }
.tk-ws__sec { font-family: var(--font-mono); font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-subtle); margin: 28px 0 13px; }

.tk-quick { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.tk-quick__c { display: flex; align-items: center; gap: 11px; padding: 13px 14px; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); cursor: pointer; transition: border-color var(--dur-1) var(--ease-out), box-shadow var(--dur-2) var(--ease-out), transform var(--dur-2) var(--ease-out); }
.tk-quick__c:hover { border-color: var(--border-strong); box-shadow: var(--shadow-md); transform: translateY(-1px); }
.tk-quick__ic { width: 34px; height: 34px; border-radius: 8px; flex: none; display: flex; align-items: center; justify-content: center; color: #fff; }
.tk-quick__t b { display: block; font-family: var(--font-sans); font-size: var(--text-sm); font-weight: 600; color: var(--ink-strong); }
.tk-quick__t span { font-family: var(--font-mono); font-size: 10.5px; color: var(--ink-muted); }

.tk-rows { display: flex; flex-direction: column; gap: 3px; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 6px; box-shadow: var(--shadow-sm); }

.tk-tpls { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.tk-tplc { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); overflow: hidden; cursor: pointer; transition: border-color var(--dur-1) var(--ease-out), box-shadow var(--dur-2) var(--ease-out), transform var(--dur-2) var(--ease-out); }
.tk-tplc:hover { border-color: var(--border-strong); box-shadow: var(--shadow-md); transform: translateY(-2px); }
.tk-tplc__thumb { height: 132px; background: var(--bg-subtle); padding: 16px 16px 0; display: flex; justify-content: center; }
.tk-tplc__page { width: 100%; background: #fff; border-radius: 4px 4px 0 0; box-shadow: var(--shadow-md); padding: 11px; }
.tk-tplc__band { height: 8px; border-radius: 2px; width: 46%; }
.tk-tplc__ln { height: 3px; border-radius: 2px; background: #e4e7eb; margin-top: 6px; }
.tk-tplc__chip { height: 11px; width: 38%; border-radius: 2px; margin: 9px 0 0 auto; }
.tk-tplc__foot { display: flex; align-items: center; gap: 8px; padding: 11px 13px; }
.tk-tplc__foot b { font-family: var(--font-sans); font-size: var(--text-sm); font-weight: 600; color: var(--ink-strong); }
.tk-tplc__foot span { font-family: var(--font-mono); font-size: 10.5px; color: var(--ink-muted); margin-left: auto; }
.tk-tplc--new { border-style: dashed; box-shadow: none; display: flex; align-items: center; justify-content: center; min-height: 188px; }
.tk-tplc--new:hover { border-color: var(--accent); background: var(--accent-subtle-bg); }
.tk-tplc__new { display: flex; flex-direction: column; align-items: center; gap: 4px; color: var(--ink-muted); }
.tk-tplc__new span { font-family: var(--font-sans); font-size: var(--text-sm); font-weight: 600; color: var(--ink); margin-top: 4px; }
.tk-tplc__new em { font-family: var(--font-mono); font-size: 10px; font-style: normal; color: var(--ink-subtle); }

.tk-assets { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
.tk-asset { display: flex; flex-direction: column; gap: 9px; padding: 13px; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); }
.tk-asset__box { height: 76px; border-radius: var(--radius-sm); border: 1px dashed var(--border-strong); display: flex; align-items: center; justify-content: center; background: var(--surface-sunken); }
.tk-asset__n { font-family: var(--font-mono); font-size: 11px; color: var(--ink); }
.tk-asset__m { font-family: var(--font-sans); font-size: 10.5px; color: var(--ink-subtle); }
.tk-fonts { display: flex; flex-direction: column; gap: 3px; }
`;
  const el = document.createElement('style');
  el.id = 'tecto-kit-ws-css';
  el.textContent = css;
  document.head.appendChild(el);
})();
const TEMPLATES = [{
  name: 'Cotización',
  cls: 'cotizacion.cls',
  color: '#1f3a5f',
  icon: 'FileText'
}, {
  name: 'Factura',
  cls: 'factura.cls',
  color: '#1f6b4f',
  icon: 'Hash'
}, {
  name: 'Contrato',
  cls: 'contrato.cls',
  color: '#5b4636',
  icon: 'Stamp'
}, {
  name: 'Propuesta',
  cls: 'propuesta.cls',
  color: '#6d3a8f',
  icon: 'Sparkle'
}, {
  name: 'SRS',
  cls: 'srs.cls',
  color: '#2a5f8f',
  icon: 'Layout'
}, {
  name: 'Informe',
  cls: 'informe.cls',
  color: '#8a5a12',
  icon: 'FileText'
}];
function Documentos({
  onNew,
  onOpenDoc
}) {
  const I = window.TectoIcons;
  const {
    Button,
    StatusPill,
    DocRow,
    Badge
  } = window.TectoDS;
  return /*#__PURE__*/React.createElement("div", {
    className: "tk-ws"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-ws__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-ws__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "tk-ws__title"
  }, "Documentos"), /*#__PURE__*/React.createElement("p", {
    className: "tk-ws__sub"
  }, "Elige una plantilla, llena los datos, descarga el PDF. Sin tocar LaTeX.")), /*#__PURE__*/React.createElement("div", {
    className: "tk-ws__sp"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(I.Plus, {
      size: 15
    }),
    onClick: () => onNew('Cotización')
  }, "Nueva cotizaci\xF3n")), /*#__PURE__*/React.createElement("div", {
    className: "tk-ws__sec"
  }, "Crear nuevo"), /*#__PURE__*/React.createElement("div", {
    className: "tk-quick"
  }, TEMPLATES.map(t => {
    const Icon = I[t.icon] || I.FileText;
    return /*#__PURE__*/React.createElement("div", {
      className: "tk-quick__c",
      key: t.name,
      onClick: () => onNew(t.name)
    }, /*#__PURE__*/React.createElement("span", {
      className: "tk-quick__ic",
      style: {
        background: t.color
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      size: 18
    })), /*#__PURE__*/React.createElement("div", {
      className: "tk-quick__t"
    }, /*#__PURE__*/React.createElement("b", null, t.name), /*#__PURE__*/React.createElement("span", null, t.cls)));
  })), /*#__PURE__*/React.createElement("div", {
    className: "tk-ws__sec"
  }, "Recientes"), /*#__PURE__*/React.createElement("div", {
    className: "tk-rows"
  }, /*#__PURE__*/React.createElement(DocRow, {
    name: "cotizacion-0123.tex",
    meta: ['Globex Corp.', 'hace 1 h', '$8 540 USD'],
    onClick: () => onOpenDoc('Cotización'),
    aside: /*#__PURE__*/React.createElement(StatusPill, {
      status: "success",
      time: "0.9s"
    })
  }), /*#__PURE__*/React.createElement(DocRow, {
    name: "factura-0088.tex",
    meta: ['Globex Corp.', 'hace 3 h'],
    onClick: () => onOpenDoc('Cotización'),
    aside: /*#__PURE__*/React.createElement(StatusPill, {
      status: "success",
      time: "0.7s"
    })
  }), /*#__PURE__*/React.createElement(DocRow, {
    name: "contrato-cliente-b.tex",
    meta: ['borrador', 'ayer'],
    onClick: () => onOpenDoc('Cotización'),
    aside: /*#__PURE__*/React.createElement(StatusPill, {
      status: "idle"
    })
  }), /*#__PURE__*/React.createElement(DocRow, {
    name: "srs-proyecto-a.tex",
    meta: ['12 pp.', 'hace 4 d'],
    onClick: () => onOpenDoc('Cotización'),
    aside: /*#__PURE__*/React.createElement(StatusPill, {
      status: "success",
      time: "2.1s"
    })
  }))));
}
function Plantillas({
  onNew,
  onEdit
}) {
  const I = window.TectoIcons;
  const {
    Button,
    Badge,
    IconButton
  } = window.TectoDS;
  return /*#__PURE__*/React.createElement("div", {
    className: "tk-ws"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-ws__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-ws__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "tk-ws__title"
  }, "Plantillas"), /*#__PURE__*/React.createElement("p", {
    className: "tk-ws__sub"
  }, "T\xFA las creas: una carpeta con su ", /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      color: 'var(--accent-subtle-fg)'
    }
  }, ".cls"), ", sus campos y sus assets (propios o globales). El Generador las usa con datos.")), /*#__PURE__*/React.createElement("div", {
    className: "tk-ws__sp"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(I.Plus, {
      size: 15
    }),
    onClick: () => onEdit('nueva')
  }, "Nueva plantilla")), /*#__PURE__*/React.createElement("div", {
    className: "tk-ws__sec",
    style: {
      marginTop: 18
    }
  }, "Tus plantillas"), /*#__PURE__*/React.createElement("div", {
    className: "tk-tpls"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-tplc tk-tplc--new",
    onClick: () => onEdit('nueva')
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-tplc__new"
  }, /*#__PURE__*/React.createElement(I.Plus, {
    size: 22
  }), /*#__PURE__*/React.createElement("span", null, "Nueva plantilla"), /*#__PURE__*/React.createElement("em", null, "carpeta + .cls + assets"))), TEMPLATES.map(t => /*#__PURE__*/React.createElement("div", {
    className: "tk-tplc",
    key: t.name,
    onClick: () => onNew(t.name)
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-tplc__thumb"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-tplc__page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-tplc__band",
    style: {
      background: t.color
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "tk-tplc__ln",
    style: {
      width: '88%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "tk-tplc__ln",
    style: {
      width: '70%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "tk-tplc__ln",
    style: {
      width: '80%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "tk-tplc__chip",
    style: {
      background: t.color,
      opacity: 0.85
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "tk-tplc__foot"
  }, /*#__PURE__*/React.createElement("b", null, t.name), /*#__PURE__*/React.createElement("span", null, t.cls), /*#__PURE__*/React.createElement(IconButton, {
    size: "sm",
    label: "Editar plantilla",
    icon: /*#__PURE__*/React.createElement(I.PanelLeft, {
      size: 15
    }),
    onClick: e => {
      e.stopPropagation();
      onEdit(t.name);
    }
  })))))));
}
function Assets() {
  const I = window.TectoIcons;
  const {
    Badge
  } = window.TectoDS;
  return /*#__PURE__*/React.createElement("div", {
    className: "tk-ws"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-ws__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-ws__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "tk-ws__title"
  }, "Assets"), /*#__PURE__*/React.createElement("p", {
    className: "tk-ws__sub"
  }, "Logos, fuentes e im\xE1genes que comparten todas tus plantillas."))), /*#__PURE__*/React.createElement("div", {
    className: "tk-ws__sec"
  }, "Logos"), /*#__PURE__*/React.createElement("div", {
    className: "tk-assets"
  }, [['acme-logo.svg', 'SVG · 1:1'], ['acme-horizontal.svg', 'SVG · 4:1'], ['acme-mono.svg', 'SVG · mono'], ['favicon.png', 'PNG · 64px']].map(([n, m]) => /*#__PURE__*/React.createElement("div", {
    className: "tk-asset",
    key: n
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-asset__box",
    style: {
      borderStyle: 'solid'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 8,
      background: '#1f3a5f',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-serif)',
      fontSize: 19,
      fontWeight: 600
    }
  }, "A")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tk-asset__n"
  }, n), /*#__PURE__*/React.createElement("div", {
    className: "tk-asset__m"
  }, m))))), /*#__PURE__*/React.createElement("div", {
    className: "tk-ws__sec"
  }, "Fuentes"), /*#__PURE__*/React.createElement("div", {
    className: "tk-assets"
  }, [['IBM Plex Serif', 'titulares'], ['IBM Plex Sans', 'cuerpo'], ['IBM Plex Mono', 'datos'], ['Söhne', 'marca · opcional']].map(([n, m]) => /*#__PURE__*/React.createElement("div", {
    className: "tk-asset",
    key: n
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-asset__box",
    style: {
      borderStyle: 'solid'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: n.includes('Serif') ? 'var(--font-serif)' : n.includes('Mono') ? 'var(--font-mono)' : 'var(--font-sans)',
      fontSize: 30,
      fontWeight: 600,
      color: 'var(--ink-strong)'
    }
  }, "Aa")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tk-asset__n"
  }, n), /*#__PURE__*/React.createElement("div", {
    className: "tk-asset__m"
  }, m))))), /*#__PURE__*/React.createElement("div", {
    className: "tk-ws__sec"
  }, "Im\xE1genes"), /*#__PURE__*/React.createElement("div", {
    className: "tk-assets"
  }, [['portada.jpg', '1920×1080'], ['sello.png', 'PNG · α'], ['firma.png', 'PNG · α'], ['marca-agua.svg', 'SVG']].map(([n, m]) => /*#__PURE__*/React.createElement("div", {
    className: "tk-asset",
    key: n
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-asset__box"
  }, /*#__PURE__*/React.createElement(I.Image, {
    size: 24
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tk-asset__n"
  }, n), /*#__PURE__*/React.createElement("div", {
    className: "tk-asset__m"
  }, m)))))));
}
window.TectoWorkspace = {
  Documentos,
  Plantillas,
  Assets
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tecto/WorkspaceScreens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Kbd = __ds_scope.Kbd;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.DocRow = __ds_scope.DocRow;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
