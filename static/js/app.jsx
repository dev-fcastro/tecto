/* --- Icons.jsx --- */
(() => {
/* Tecto UI Kit — icon set (Lucide-style, 1.75 stroke). Exposed on window.TectoIcons */
const React = window.React;

function Ico({ size = 18, children, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...rest}>
      {children}
    </svg>
  );
}

const Play = (p) => <Ico {...p}><polygon points="6 3 20 12 6 21 6 3" fill="currentColor" stroke="none" /></Ico>;
const Download = (p) => <Ico {...p}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></Ico>;
const Save = (p) => <Ico {...p}><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" /></Ico>;
const Sun = (p) => <Ico {...p}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></Ico>;
const Moon = (p) => <Ico {...p}><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></Ico>;
const FileText = (p) => <Ico {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="13" y2="17" /></Ico>;
const Folder = (p) => <Ico {...p}><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.5l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" /></Ico>;
const Clock = (p) => <Ico {...p}><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15 14" /></Ico>;
const Settings = (p) => <Ico {...p}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 7 19.4a1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0-1.1-2.7H1a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 2.6 7a1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.6 1.6 0 0 0 7 2.6h.1A1.6 1.6 0 0 0 8.2 1H8a2 2 0 1 1 4 0v.1A1.6 1.6 0 0 0 14.8 2.6a1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V7a1.6 1.6 0 0 0 1.5 1H23a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z" /></Ico>;
const Search = (p) => <Ico {...p}><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></Ico>;
const PanelLeft = (p) => <Ico {...p}><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="9" y1="3" x2="9" y2="21" /></Ico>;
const Columns = (p) => <Ico {...p}><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="12" y1="3" x2="12" y2="21" /></Ico>;
const Plus = (p) => <Ico {...p}><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></Ico>;
const Check = (p) => <Ico {...p}><polyline points="20 6 9 17 4 12" /></Ico>;
const X = (p) => <Ico {...p}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></Ico>;
const Alert = (p) => <Ico {...p}><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12" y2="17" /></Ico>;
const Lock = (p) => <Ico {...p}><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></Ico>;
const Zap = (p) => <Ico {...p}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor" stroke="none" /></Ico>;
const Menu = (p) => <Ico {...p}><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></Ico>;
const More = (p) => <Ico {...p}><circle cx="12" cy="5" r="1.4" fill="currentColor" /><circle cx="12" cy="12" r="1.4" fill="currentColor" /><circle cx="12" cy="19" r="1.4" fill="currentColor" /></Ico>;
const Copy = (p) => <Ico {...p}><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></Ico>;
const Trash = (p) => <Ico {...p}><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></Ico>;
const Chevron = (p) => <Ico {...p}><polyline points="9 18 15 12 9 6" /></Ico>;
const ZoomIn = (p) => <Ico {...p}><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></Ico>;
const Maximize = (p) => <Ico {...p}><path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3" /></Ico>;
const GitHub = (p) => <Ico {...p}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.7A5.2 5.2 0 0 0 20 4.8 4.9 4.9 0 0 0 19.9 1S18.7.6 16 2.5a13.4 13.4 0 0 0-7 0C6.3.6 5.1 1 5.1 1A4.9 4.9 0 0 0 5 4.8a5.2 5.2 0 0 0-1.4 3.7c0 5.2 3.2 6.4 6.2 6.7a3.4 3.4 0 0 0-.9 2.6V22" /></Ico>;
const Layout = (p) => <Ico {...p}><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></Ico>;
const Image = (p) => <Ico {...p}><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></Ico>;
const Building = (p) => <Ico {...p}><rect x="4" y="2" width="16" height="20" rx="1.5" /><path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" /></Ico>;
const Calendar = (p) => <Ico {...p}><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="16" y1="2" x2="16" y2="6" /></Ico>;
const Hash = (p) => <Ico {...p}><line x1="4" y1="9" x2="20" y2="9" /><line x1="4" y1="15" x2="20" y2="15" /><line x1="10" y1="3" x2="8" y2="21" /><line x1="16" y1="3" x2="14" y2="21" /></Ico>;
const Type = (p) => <Ico {...p}><polyline points="4 7 4 4 20 4 20 7" /><line x1="9" y1="20" x2="15" y2="20" /><line x1="12" y1="4" x2="12" y2="20" /></Ico>;
const Sparkle = (p) => <Ico {...p}><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" fill="currentColor" stroke="none" /></Ico>;
const Stamp = (p) => <Ico {...p}><path d="M5 22h14M6 18h12M9 10a3 3 0 1 1 6 0c0 2-2 2.5-2 4v0h-2v0c0-1.5-2-2-2-4z" /></Ico>;

window.TectoIcons = { Play, Download, Save, Sun, Moon, FileText, Folder, Clock, Settings, Search, PanelLeft, Columns, Plus, Check, X, Alert, Lock, Zap, Menu, More, Copy, Trash, Chevron, ZoomIn, Maximize, GitHub, Layout, Image, Building, Calendar, Hash, Type, Sparkle, Stamp };

})();
/* --- Chrome.jsx --- */
(() => {
/* Tecto UI Kit — logo lockup + app chrome (TopBar, LeftRail, StatusBar). window.TectoChrome */
const React = window.React;

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

function Logo({ word = true }) {
  return (
    <span className="tk-logo">
      <img className="tk-logo__mark" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IlRlY3RvIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHJ4PSIxNCIgZmlsbD0iI2M3NWIxMiI+PC9yZWN0PgogIAogIDxnIGZpbGw9IiNmZmZmZmYiPgogICAgPHJlY3QgeD0iMTQiIHk9IjE3IiB3aWR0aD0iMzYiIGhlaWdodD0iNyIgcng9IjEuNSI+PC9yZWN0PgogICAgPHJlY3QgeD0iMjguNSIgeT0iMTciIHdpZHRoPSI3IiBoZWlnaHQ9IjMxIiByeD0iMS41Ij48L3JlY3Q+CiAgICAKICAgIDxyZWN0IHg9IjIxIiB5PSI0NC41IiB3aWR0aD0iMjIiIGhlaWdodD0iNCIgcng9IjEuNSI+PC9yZWN0PgogIDwvZz4KICAKICA8cGF0aCBkPSJNMCA0MCBIMjQgTDMxIDMzIEg2NCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4xNiIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIj48L3BhdGg+Cjwvc3ZnPg==" alt="" />
      {word && <span className="tk-logo__word">Tecto</span>}
    </span>
  );
}

function TopBar({ crumb, theme, onToggleTheme }) {
  const I = window.TectoIcons;
  const { IconButton, Tooltip } = window.TectoDS;
  return (
    <div className="tk-topbar">
      <Logo />
      <div style={{ width: 1, height: 22, background: 'var(--border)', margin: '0 4px' }} />
      <div className="tk-crumb">{(crumb || []).map((c, i) => (
        <React.Fragment key={i}>
          {i > 0 && <I.Chevron size={14} />}
          {i === crumb.length - 1 ? <b>{c}</b> : <span>{c}</span>}
        </React.Fragment>
      ))}</div>
      <div className="tk-topbar__spacer" />
      <div className="tk-topbar__grp">
        <Tooltip label="Documentación" side="bottom"><IconButton size="sm" label="Ayuda" icon={<I.FileText size={16} />} /></Tooltip>
        <IconButton size="sm" label="Cambiar tema" icon={theme === 'dark' ? <I.Sun size={16} /> : <I.Moon size={16} />} onClick={onToggleTheme} />
        <span className="tk-avatar">T</span>
      </div>
    </div>
  );
}

function LeftRail({ view, setView, onLogout }) {
  const I = window.TectoIcons;
  const { Tooltip } = window.TectoDS;
  const items = [
    { id: 'docs', label: 'Documentos', icon: I.Folder },
    { id: 'templates', label: 'Plantillas', icon: I.Layout },
    { id: 'assets', label: 'Assets', icon: I.Image },
    { id: 'libre', label: 'Editor libre .tex', icon: I.Type },
    // 'editor' is a sub-view of 'templates', not a standalone nav item
    { id: 'docview', label: 'Documentación', icon: I.FileText },
  ];
  return (
    <div className="tk-rail">
      {items.map((it) => (
        <Tooltip key={it.id} label={it.label} side="bottom">
          <button className={'tk-rail__btn' + ((view === it.id || (view === 'generator' && it.id === 'docs') || (view === 'perfil' && it.id === 'settings')) ? ' tk-rail__btn--active' : '')} onClick={() => setView(it.id)} aria-label={it.label}>
            <it.icon size={19} />
          </button>
        </Tooltip>
      ))}
      <div className="tk-rail__sp" />
      <Tooltip label="Ajustes" side="bottom">
        <button className={'tk-rail__btn' + (view === 'settings' ? ' tk-rail__btn--active' : '')} onClick={() => setView('settings')} aria-label="Ajustes"><I.Settings size={19} /></button>
      </Tooltip>
      <Tooltip label="Salir" side="bottom">
        <button className="tk-rail__btn" onClick={onLogout} aria-label="Salir"><I.Lock size={19} /></button>
      </Tooltip>
    </div>
  );
}

function StatusBar({ engine }) {
  return (
    <div className="tk-status">
      <span>Tectonic <b>0.15</b></span>
      <span>{engine}</span>
      <span>UTF-8</span>
      <span>LaTeX</span>
      <div className="tk-status__sp" />
      <span>Ln <b>23</b>, Col 4</span>
      <span>112 palabras</span>
      <span>main.tex · guardado</span>
    </div>
  );
}

window.TectoChrome = { Logo, TopBar, LeftRail, StatusBar };

})();
/* --- CorpDocs.jsx --- */
(() => {
/* Tecto UI Kit — corporate document renders (the PDF output). window.TectoCorp */
const React = window.React;

const DEFAULT_BRAND = {
  name: 'Acme Estudio',
  initials: 'A',
  color: '#1f3a5f',
  tint: '#eef2f7',
  rfc: 'ACM850101AA1',
  address: 'Av. Reforma 222, CDMX · acme.studio',
};

const DEFAULT_DATA = {
  numero: '0123',
  fecha: '7 jun 2026',
  validez: '22 jun 2026',
  cliente: 'Globex Corporation',
  clienteRfc: 'GLO910215QX3',
  moneda: 'USD',
  iva: true,
  items: [
    { desc: 'Diseño e implementación de API REST', qty: 1, price: 3200 },
    { desc: 'Integración con pasarela de pago', qty: 1, price: 1400 },
    { desc: 'Soporte y mantenimiento (mensual)', qty: 3, price: 400 },
  ],
  notas: 'Validez de la oferta: 15 días. Precios en USD, no incluyen retenciones. 50% anticipo, 50% contra entrega.',
};

function fmtMoney(n, moneda) {
  const s = n.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return `$${s} ${moneda}`;
}

function totals(data) {
  const subtotal = data.items.reduce((a, it) => a + it.qty * it.price, 0);
  const iva = data.iva ? subtotal * 0.16 : 0;
  return { subtotal, iva, total: subtotal + iva };
}

function CotizacionDoc({ data = DEFAULT_DATA, brand = DEFAULT_BRAND }) {
  const t = totals(data);
  const ink = '#1a2430';
  const muted = '#5d6b7a';
  return (
    <div style={{ fontFamily: 'var(--font-sans)', color: ink, padding: '40px 40px 0', fontSize: '11px', lineHeight: 1.5 }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
        <div style={{ display: 'flex', gap: 11, alignItems: 'center' }}>
          <div style={{ width: 38, height: 38, borderRadius: 8, background: brand.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-serif)', fontSize: 21, fontWeight: 600 }}>{brand.initials}</div>
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 17, fontWeight: 600, color: ink, lineHeight: 1.1 }}>{brand.name}</div>
            <div style={{ fontSize: 9.5, color: muted, marginTop: 2 }}>{brand.address}</div>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600, letterSpacing: '0.14em', color: brand.color }}>COTIZACIÓN</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: muted, marginTop: 3 }}>N.º {data.numero}</div>
        </div>
      </div>
      <div style={{ height: 2.5, background: brand.color, borderRadius: 2, margin: '16px 0 18px' }} />

      {/* Meta */}
      <div style={{ display: 'flex', gap: 28, marginBottom: 20 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 8.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: muted, marginBottom: 4 }}>Para</div>
          <div style={{ fontWeight: 600, fontSize: 12 }}>{data.cliente}</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: muted }}>RFC {data.clienteRfc}</div>
        </div>
        <div style={{ width: 168, flex: 'none' }}>
          {[['Fecha', data.fecha], ['Válida hasta', data.validez], ['Moneda', data.moneda]].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', gap: 10, marginBottom: 4, whiteSpace: 'nowrap' }}>
              <span style={{ color: muted }}>{k}</span><span style={{ fontWeight: 500 }}>{v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Items */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 42px 78px 88px', background: brand.tint, color: brand.color, fontSize: 8.5, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '7px 10px', borderRadius: 4 }}>
        <span>Descripción</span><span style={{ textAlign: 'right' }}>Cant</span><span style={{ textAlign: 'right' }}>P. Unit</span><span style={{ textAlign: 'right' }}>Importe</span>
      </div>
      {data.items.map((it, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 42px 78px 88px', padding: '9px 10px', borderBottom: '1px solid #eceff3', fontSize: 11 }}>
          <span>{it.desc}</span>
          <span style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', color: muted }}>{it.qty}</span>
          <span style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', color: muted }}>{it.price.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>
          <span style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', fontWeight: 500 }}>{(it.qty * it.price).toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>
        </div>
      ))}

      {/* Totals */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 14 }}>
        <div style={{ width: 230 }}>
          <Row k="Subtotal" v={fmtMoney(t.subtotal, data.moneda)} muted={muted} />
          {data.iva && <Row k="IVA 16%" v={fmtMoney(t.iva, data.moneda)} muted={muted} />}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 7, paddingTop: 9, borderTop: `1.5px solid ${brand.color}` }}>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: 13, fontWeight: 600 }}>Total</span>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontWeight: 600, color: brand.color }}>{fmtMoney(t.total, data.moneda)}</span>
          </div>
        </div>
      </div>

      {/* Notes */}
      <div style={{ marginTop: 22 }}>
        <div style={{ fontSize: 8.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: muted, marginBottom: 4 }}>Condiciones</div>
        <div style={{ fontSize: 10, color: '#3c4a58', lineHeight: 1.55 }}>{data.notas}</div>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, marginTop: 30, paddingTop: 12, borderTop: '1px solid #eceff3' }}>
        <div style={{ fontSize: 8.5, color: muted, lineHeight: 1.5 }}>
          {brand.name} · RFC {brand.rfc}<br />{brand.address}
        </div>
        <div style={{ textAlign: 'center', minWidth: 130 }}>
          <div style={{ borderTop: '1px solid #9aa6b2', paddingTop: 5, fontSize: 9, color: muted }}>Firma autorizada</div>
        </div>
      </div>
      <div style={{ textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 8, color: '#9aa6b2', padding: '14px 0 18px' }}>1 / 1</div>
    </div>
  );
}

function Row({ k, v, muted }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, fontSize: 11 }}>
      <span style={{ color: muted }}>{k}</span>
      <span style={{ fontFamily: 'var(--font-mono)' }}>{v}</span>
    </div>
  );
}

window.TectoCorp = { CotizacionDoc, fmtMoney, totals, DEFAULT_BRAND, DEFAULT_DATA };

})();
/* --- WorkspaceScreens.jsx --- */
(() => {
/* Tecto UI Kit — document-workspace screens: Documentos, Plantillas, Assets. window.TectoWorkspace */
const React = window.React;

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

const TEMPLATES = [
  { name: 'Cotización', cls: 'cotizacion.cls', color: '#1f3a5f', icon: 'FileText' },
  { name: 'Factura', cls: 'factura.cls', color: '#1f6b4f', icon: 'Hash' },
  { name: 'Contrato', cls: 'contrato.cls', color: '#5b4636', icon: 'Stamp' },
  { name: 'Propuesta', cls: 'propuesta.cls', color: '#6d3a8f', icon: 'Sparkle' },
  { name: 'SRS', cls: 'srs.cls', color: '#2a5f8f', icon: 'Layout' },
  { name: 'Informe', cls: 'informe.cls', color: '#8a5a12', icon: 'FileText' },
];

function Documentos({ onNew, onOpenDoc }) {
  const I = window.TectoIcons;
  const { Button, StatusPill, DocRow, Badge } = window.TectoDS;
  return (
    <div className="tk-ws">
      <div className="tk-ws__in">
        <div className="tk-ws__head">
          <div>
            <h1 className="tk-ws__title">Documentos</h1>
            <p className="tk-ws__sub">Elige una plantilla, llena los datos, descarga el PDF. Sin tocar LaTeX.</p>
          </div>
          <div className="tk-ws__sp" />
          <Button variant="primary" size="sm" iconLeft={<I.Plus size={15} />} onClick={() => onNew('Cotización')}>Nueva cotización</Button>
        </div>

        <div className="tk-ws__sec">Crear nuevo</div>
        <div className="tk-quick">
          {TEMPLATES.map((t) => {
            const Icon = I[t.icon] || I.FileText;
            return (
              <div className="tk-quick__c" key={t.name} onClick={() => onNew(t.name)}>
                <span className="tk-quick__ic" style={{ background: t.color }}><Icon size={18} /></span>
                <div className="tk-quick__t"><b>{t.name}</b><span>{t.cls}</span></div>
              </div>
            );
          })}
        </div>

        <div className="tk-ws__sec">Recientes</div>
        <div className="tk-rows">
          <DocRow name="cotizacion-0123.tex" meta={['Globex Corp.', 'hace 1 h', '$8 540 USD']} onClick={() => onOpenDoc('Cotización')} aside={<StatusPill status="success" time="0.9s" />} />
          <DocRow name="factura-0088.tex" meta={['Globex Corp.', 'hace 3 h']} onClick={() => onOpenDoc('Cotización')} aside={<StatusPill status="success" time="0.7s" />} />
          <DocRow name="contrato-cliente-b.tex" meta={['borrador', 'ayer']} onClick={() => onOpenDoc('Cotización')} aside={<StatusPill status="idle" />} />
          <DocRow name="srs-proyecto-a.tex" meta={['12 pp.', 'hace 4 d']} onClick={() => onOpenDoc('Cotización')} aside={<StatusPill status="success" time="2.1s" />} />
        </div>
      </div>
    </div>
  );
}

function Plantillas({ onNew, onEdit }) {
  const I = window.TectoIcons;
  const { Button, Badge, IconButton } = window.TectoDS;
  return (
    <div className="tk-ws">
      <div className="tk-ws__in">
        <div className="tk-ws__head">
          <div>
            <h1 className="tk-ws__title">Plantillas</h1>
            <p className="tk-ws__sub">Tú las creas: una carpeta con su <code style={{fontFamily:'var(--font-mono)',fontSize:'12px',color:'var(--accent-subtle-fg)'}}>.cls</code>, sus campos y sus assets (propios o globales). El Generador las usa con datos.</p>
          </div>
          <div className="tk-ws__sp" />
          <Button variant="primary" size="sm" iconLeft={<I.Plus size={15} />} onClick={() => onEdit('nueva')}>Nueva plantilla</Button>
        </div>
        <div className="tk-ws__sec" style={{ marginTop: 18 }}>Tus plantillas</div>
        <div className="tk-tpls">
          <div className="tk-tplc tk-tplc--new" onClick={() => onEdit('nueva')}>
            <div className="tk-tplc__new"><I.Plus size={22} /><span>Nueva plantilla</span><em>carpeta + .cls + assets</em></div>
          </div>
          {TEMPLATES.map((t) => (
            <div className="tk-tplc" key={t.name} onClick={() => onNew(t.name)}>
              <div className="tk-tplc__thumb">
                <div className="tk-tplc__page">
                  <div className="tk-tplc__band" style={{ background: t.color }} />
                  <div className="tk-tplc__ln" style={{ width: '88%' }} />
                  <div className="tk-tplc__ln" style={{ width: '70%' }} />
                  <div className="tk-tplc__ln" style={{ width: '80%' }} />
                  <div className="tk-tplc__chip" style={{ background: t.color, opacity: 0.85 }} />
                </div>
              </div>
              <div className="tk-tplc__foot">
                <b>{t.name}</b><span>{t.cls}</span>
                <IconButton size="sm" label="Editar plantilla" icon={<I.PanelLeft size={15} />} onClick={(e) => { e.stopPropagation(); onEdit(t.name); }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Assets() {
  const I = window.TectoIcons;
  const { Badge } = window.TectoDS;
  return (
    <div className="tk-ws">
      <div className="tk-ws__in">
        <div className="tk-ws__head">
          <div>
            <h1 className="tk-ws__title">Assets</h1>
            <p className="tk-ws__sub">Logos, fuentes e imágenes que comparten todas tus plantillas.</p>
          </div>
        </div>

        <div className="tk-ws__sec">Logos</div>
        <div className="tk-assets">
          {[['acme-logo.svg', 'SVG · 1:1'], ['acme-horizontal.svg', 'SVG · 4:1'], ['acme-mono.svg', 'SVG · mono'], ['favicon.png', 'PNG · 64px']].map(([n, m]) => (
            <div className="tk-asset" key={n}>
              <div className="tk-asset__box" style={{ borderStyle: 'solid' }}>
                <span style={{ width: 34, height: 34, borderRadius: 8, background: '#1f3a5f', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-serif)', fontSize: 19, fontWeight: 600 }}>A</span>
              </div>
              <div><div className="tk-asset__n">{n}</div><div className="tk-asset__m">{m}</div></div>
            </div>
          ))}
        </div>

        <div className="tk-ws__sec">Fuentes</div>
        <div className="tk-assets">
          {[['IBM Plex Serif', 'titulares'], ['IBM Plex Sans', 'cuerpo'], ['IBM Plex Mono', 'datos'], ['Söhne', 'marca · opcional']].map(([n, m]) => (
            <div className="tk-asset" key={n}>
              <div className="tk-asset__box" style={{ borderStyle: 'solid' }}>
                <span style={{ fontFamily: n.includes('Serif') ? 'var(--font-serif)' : n.includes('Mono') ? 'var(--font-mono)' : 'var(--font-sans)', fontSize: 30, fontWeight: 600, color: 'var(--ink-strong)' }}>Aa</span>
              </div>
              <div><div className="tk-asset__n">{n}</div><div className="tk-asset__m">{m}</div></div>
            </div>
          ))}
        </div>

        <div className="tk-ws__sec">Imágenes</div>
        <div className="tk-assets">
          {[['portada.jpg', '1920×1080'], ['sello.png', 'PNG · α'], ['firma.png', 'PNG · α'], ['marca-agua.svg', 'SVG']].map(([n, m]) => (
            <div className="tk-asset" key={n}>
              <div className="tk-asset__box"><I.Image size={24} /></div>
              <div><div className="tk-asset__n">{n}</div><div className="tk-asset__m">{m}</div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

window.TectoWorkspace = { Documentos, Plantillas, Assets };

})();
/* --- Generator.jsx --- */
(() => {
/* Tecto UI Kit — document Generator: form (left) → live corporate PDF (right). window.TectoGenerator */
const React = window.React;

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

function Generator({ data, setData, status, onCompile, onDownload, pdfUrl }) {
  const I = window.TectoIcons;
  const { Input, Select, Switch, Textarea, Button, IconButton, Badge, StatusPill } = window.TectoDS;
  const TA = Textarea || ((p) => <textarea rows={3} style={{ width: '100%', fontFamily: 'var(--font-sans)', fontSize: 14, padding: '9px 11px', borderRadius: 7, border: '1px solid var(--border-strong)', background: 'var(--surface)', color: 'var(--ink)', resize: 'vertical' }} {...p} />);
  const { CotizacionDoc, fmtMoney, totals } = window.TectoCorp;
  const t = totals(data);

  const set = (k, v) => setData({ ...data, [k]: v });
  const setItem = (i, k, v) => {
    const items = data.items.map((it, j) => j === i ? { ...it, [k]: k === 'desc' ? v : (parseFloat(v) || 0) } : it);
    setData({ ...data, items });
  };
  const addItem = () => setData({ ...data, items: [...data.items, { desc: '', qty: 1, price: 0 }] });
  const delItem = (i) => setData({ ...data, items: data.items.filter((_, j) => j !== i) });

  return (
    <div className="tk-gen">
      <div className="tk-gen__form">
        <div className="tk-gen__form-in">
          <div className="tk-gen__head">
            <Badge tone="brand" mono>cotizacion.cls</Badge>
            <h2>Nueva cotización</h2>
          </div>

          <div className="tk-gen__sec">Cliente</div>
          <Input label="Razón social" value={data.cliente} onChange={(e) => set('cliente', e.target.value)} />
          <div className="tk-gen__grid2">
            <Input label="RFC" mono value={data.clienteRfc} onChange={(e) => set('clienteRfc', e.target.value)} />
            <Input label="N.º cotización" mono value={data.numero} onChange={(e) => set('numero', e.target.value)} />
          </div>

          <div className="tk-gen__sec">Vigencia</div>
          <div className="tk-gen__grid2">
            <Input label="Fecha" iconLeft={<I.Calendar size={15} />} value={data.fecha} onChange={(e) => set('fecha', e.target.value)} />
            <Input label="Válida hasta" iconLeft={<I.Calendar size={15} />} value={data.validez} onChange={(e) => set('validez', e.target.value)} />
          </div>
          <Select label="Moneda" value={data.moneda} onChange={(e) => set('moneda', e.target.value)} options={['USD', 'MXN', 'EUR']} />

          <div className="tk-gen__sec">Conceptos</div>
          <div className="tk-gen__item-h"><span>Descripción</span><span>Cant</span><span>P. Unit</span><span></span></div>
          {data.items.map((it, i) => (
            <div className="tk-gen__item" key={i}>
              <Input size="sm" value={it.desc} placeholder="Concepto…" onChange={(e) => setItem(i, 'desc', e.target.value)} />
              <Input size="sm" align="end" value={String(it.qty)} onChange={(e) => setItem(i, 'qty', e.target.value)} />
              <Input size="sm" align="end" prefix="$" value={String(it.price)} onChange={(e) => setItem(i, 'price', e.target.value)} />
              <IconButton size="sm" label="Quitar" icon={<I.Trash size={15} />} onClick={() => delItem(i)} />
            </div>
          ))}
          <div><Button variant="ghost" size="sm" iconLeft={<I.Plus size={15} />} onClick={addItem}>Añadir concepto</Button></div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Switch label="Aplicar IVA (16%)" checked={data.iva} onChange={(e) => set('iva', e.target.checked)} />
          </div>

          <div className="tk-gen__totals">
            <div className="r"><span style={{ color: 'var(--ink-muted)' }}>Subtotal</span><span>{fmtMoney(t.subtotal, data.moneda)}</span></div>
            {data.iva && <div className="r"><span style={{ color: 'var(--ink-muted)' }}>IVA 16%</span><span>{fmtMoney(t.iva, data.moneda)}</span></div>}
            <div className="r t"><span>Total</span><span>{fmtMoney(t.total, data.moneda)}</span></div>
          </div>

          <div className="tk-gen__sec">Condiciones</div>
          <TA rows={3} value={data.notas} onChange={(e) => set('notas', e.target.value)} />
        </div>
      </div>

      <div className="tk-gen__preview">
        <div className="tk-gen__bar">
          <I.FileText size={16} />
          <b>cotizacion-{data.numero}.pdf</b>
          <div className="tk-gen__sp" />
          <StatusPill status={status === 'idle' ? 'idle' : status} time={status === 'success' ? '0.9s' : undefined} />
          <Button variant="primary" size="sm" iconLeft={<I.Play size={15} />} onClick={onCompile} loading={status === 'running'}>
            {status === 'running' ? 'Compilando…' : 'Compilar'}
          </Button>
          <IconButton size="sm" variant="solid" label="Descargar PDF" icon={<I.Download size={16} />} onClick={onDownload} />
        </div>
        <div className="tk-gen__stage">
          {pdfUrl ? <iframe src={pdfUrl} style={{ width: "100%", height: "100%", border: "none", background: "#fff", borderRadius: 4, boxShadow: "var(--shadow-lg)" }} /> : <div className="tk-gen__page"><CotizacionDoc data={data} /></div>}
          {status === 'running' && (
            <div className="tk-gen__overlay">
              <window.TectoDS.Spinner size="lg" />
              <span>Componiendo con Tectonic…</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

window.TectoGenerator = { Generator };

})();
/* --- TemplateEditor.jsx --- */
(() => {
/* Tecto UI Kit — Template authoring: .cls editor + Campos/Assets inspector. window.TectoTemplate */
const React = window.React;

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

function Field({ name, type }) {
  const { Badge, IconButton } = window.TectoDS;
  const I = window.TectoIcons;
  return (
    <div className="tk-field">
      <code>\{name}</code>
      <Badge tone="neutral" mono>{type}</Badge>
    </div>
  );
}

function TemplateInspector({ onToast }) {
  const I = window.TectoIcons;
  const { Button, Switch, IconButton } = window.TectoDS;
  const [global, setGlobal] = React.useState(false);
  const fields = [
    ['cliente', 'texto'], ['rfccliente', 'texto'], ['numero', 'texto'],
    ['fecha', 'fecha'], ['moneda', 'selección'], ['conceptos', 'tabla'], ['iva', 'sí/no'], ['notas', 'texto largo'],
  ];
  return (
    <div className="tk-insp">
      <div className="tk-insp__in">
        <div className="tk-insp__h">
          <span className="ic"><I.Layout size={16} /></span>
          <div><b>cotizacion</b><span>/plantillas/cotizacion/</span></div>
        </div>

        <div className="tk-insp__sec">Campos <div className="ln" /></div>
        {fields.map(([n, t]) => <Field key={n} name={n} type={t} />)}
        <Button variant="ghost" size="sm" iconLeft={<I.Plus size={14} />} onClick={() => onToast({ tone: 'info', title: 'Nuevo campo', msg: 'Define \\comando y su tipo.' })}>Añadir campo</Button>

        <div className="tk-insp__sec">Assets <div className="ln" /></div>
        <div className="tk-global">
          <div><b>Usar assets globales</b><span>logos y fuentes compartidos</span></div>
          <Switch size="sm" checked={global} onChange={(e) => setGlobal(e.target.checked)} />
        </div>
        {!global && (
          <React.Fragment>
            <div className="tk-asset-row"><span className="ic"><I.Image size={13} /></span><b>logo.pdf</b><span>propio</span></div>
            <div className="tk-asset-row"><span className="ic"><I.Image size={13} /></span><b>sello.png</b><span>propio</span></div>
          </React.Fragment>
        )}
        <Button variant="ghost" size="sm" iconLeft={<I.Plus size={14} />} onClick={() => onToast({ tone: 'info', title: 'Subir asset', msg: global ? 'Gestiona globales en Assets.' : 'Se guarda en /plantillas/cotizacion/assets/.' })}>{global ? 'Gestionar globales' : 'Subir a esta plantilla'}</Button>
      </div>
    </div>
  );
}

function TemplateWorkspace({ status, onCompile, onDownload, onToast }) {
  const { Editor } = window.TectoEditor;
  const { CotizacionDoc } = window.TectoCorp;
  const I = window.TectoIcons;
  const { Button, IconButton, StatusPill } = window.TectoDS;
  return (
    <div className="tk-tpl-ws">
      <TemplateInspector onToast={onToast} />
      <Editor lines={CLS_LINES} filename="cotizacion.cls" secondary="preview.tex" activeLine={13} caretLine={16} />
      <div className="tk-gen__preview">
        <div className="tk-gen__bar">
          <I.FileText size={16} />
          <b>vista previa · datos de ejemplo</b>
          <div className="tk-gen__sp" />
          <StatusPill status={status === 'idle' ? 'idle' : status} time={status === 'success' ? '0.9s' : undefined} />
          <Button variant="primary" size="sm" iconLeft={<I.Play size={15} />} onClick={onCompile} loading={status === 'running'}>
            {status === 'running' ? 'Compilando…' : 'Compilar'}
          </Button>
          <IconButton size="sm" variant="solid" label="Descargar PDF" icon={<I.Download size={16} />} onClick={onDownload} />
        </div>
        <div className="tk-gen__stage">
          <div className="tk-gen__page"><CotizacionDoc /></div>
          {status === 'running' && (
            <div className="tk-gen__overlay"><window.TectoDS.Spinner size="lg" /><span>Compilando con Tectonic…</span></div>
          )}
        </div>
      </div>
    </div>
  );
}

window.TectoTemplate = { TemplateWorkspace, TemplateInspector, CLS_LINES };

})();
/* --- Editor.jsx --- */
(() => {
/* Tecto UI Kit — Editor pane: read-only preview + interactive TexEditor with highlighting. window.TectoEditor */
const React = window.React;

(function injectEditorCSS() {
  if (document.getElementById('tecto-kit-editor-css')) return;
  const css = `
/* ── Read-only preview editor ──────────────────────────────────────── */
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
.tk-caret { display: inline-block; width: 2px; height: 15px; background: var(--accent); margin-left: 1px; vertical-align: -2px; animation: tk-blink 1.1s steps(1) infinite; }
@keyframes tk-blink { 50% { opacity: 0; } }

/* ── Syntax token colors (shared) ──────────────────────────────────── */
.tk-tok-cmd     { color: var(--code-cmd); }
.tk-tok-brace   { color: var(--code-bracket); }
.tk-tok-math    { color: var(--code-math); }
.tk-tok-comment { color: var(--code-comment); font-style: italic; }
.tk-tok-string  { color: var(--code-string); }
/* Tecto-specific: {{variable}} placeholder */
.tk-tok-var { color: #e8b84b; font-weight: 600; }
/* Tecto metadata comment lines: %% SECTION: / %% {{...}} */
.tk-tok-tecto-kw  { color: #5b9bd5; font-style: normal; font-weight: 600; }
.tk-tok-tecto-val { color: #6ec28a; font-style: italic; }

/* ── TexEditor ── */
.tk-texed-wrap { display: flex; flex-direction: column; flex: 1; min-height: 0; }
.tk-texed__gutter::-webkit-scrollbar { display: none; }
.tk-texed__ta::-webkit-scrollbar { width: 8px; height: 8px; }
.tk-texed__ta::-webkit-scrollbar-track { background: transparent; }
.tk-texed__ta::-webkit-scrollbar-thumb { background: var(--border-strong); border-radius: 4px; }
`;
  const el = document.createElement('style');
  el.id = 'tecto-kit-editor-css';
  el.textContent = css;
  document.head.appendChild(el);
})();

// ── Shared tokenizer ──────────────────────────────────────────────────────────
function tokenize(line) {
  const out = [];
  // Special Tecto metadata lines: %% SECTION: ... or %% {{...}}
  const tectoSec = line.match(/^(\s*%%\s*)(SECTION:\s*)(.*)$/);
  if (tectoSec) {
    out.push({ t: tectoSec[1], c: 'tk-tok-comment' });
    out.push({ t: tectoSec[2], c: 'tk-tok-tecto-kw' });
    out.push({ t: tectoSec[3], c: 'tk-tok-tecto-val' });
    return out;
  }
  const tectoField = line.match(/^(\s*%%\s*)(\{\{.*)$/);
  if (tectoField) {
    out.push({ t: tectoField[1], c: 'tk-tok-comment' });
    // Tokenize the {{...}} part
    const rest = tectoField[2];
    const vm = rest.match(/^(\{\{)([^|}]*)(\|?.*)(\}\})(.*)$/);
    if (vm) {
      out.push({ t: vm[1], c: 'tk-tok-tecto-kw' });
      out.push({ t: vm[2], c: 'tk-tok-var' });
      out.push({ t: vm[3], c: 'tk-tok-tecto-val' });
      out.push({ t: vm[4], c: 'tk-tok-tecto-kw' });
      if (vm[5]) out.push({ t: vm[5], c: 'tk-tok-comment' });
    } else {
      out.push({ t: rest, c: 'tk-tok-tecto-val' });
    }
    return out;
  }
  // Regular line tokenizer
  const re = /(\{\{[^{}]*\}\})|(%.*$)|(\\[a-zA-Z@]+\*?|\\.)|(\$[^$]*\$)|([{}\[\]])/g;
  let last = 0, m;
  while ((m = re.exec(line)) !== null) {
    if (m.index > last) out.push({ t: line.slice(last, m.index), c: null });
    let cls = null;
    if      (m[1]) cls = 'tk-tok-var';
    else if (m[2]) cls = 'tk-tok-comment';
    else if (m[3]) cls = 'tk-tok-cmd';
    else if (m[4]) cls = 'tk-tok-math';
    else if (m[5]) cls = 'tk-tok-brace';
    out.push({ t: m[0], c: cls });
    last = m.index + m[0].length;
  }
  if (last < line.length) out.push({ t: line.slice(last), c: null });
  return out;
}

// ── Read-only Editor (decorative/preview) ─────────────────────────────────────
function Editor({ lines, activeLine = 11, caretLine = 23, filename = 'main.tex', secondary = 'refs.bib' }) {
  return (
    <div className="tk-editor">
      <div className="tk-editor__tabs">
        <div className="tk-editor__tab tk-editor__tab--active"><span className="dot" />{filename}</div>
        {secondary && <div className="tk-editor__tab">{secondary}</div>}
      </div>
      <div className="tk-editor__scroll">
        {lines.map((ln, i) => {
          const n = i + 1;
          const toks = tokenize(ln);
          return (
            <div key={i} className={'tk-editor__line' + (n === activeLine ? ' tk-editor__line--active' : '')}>
              <div className="tk-editor__gutter">{n}</div>
              <div className="tk-editor__code">
                {toks.map((tk, j) => tk.c ? <span key={j} className={tk.c}>{tk.t}</span> : <span key={j}>{tk.t}</span>)}
                {n === caretLine && <span className="tk-caret" />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── TexEditor — gutter + textarea ────────────────────────────────────────────
function TexEditor({ value, onChange, errorLog = '' }) {
  const taRef  = React.useRef(null);
  const gutRef = React.useRef(null);

  const errorMap = React.useMemo(() => {
    const m = {};
    if (!errorLog) return m;
    errorLog.split('\n').forEach(raw => {
      const hit = raw.match(/(?:main\.tex|\.tex|input):(\d+):/i);
      if (!hit) return;
      const ln = parseInt(hit[1]);
      if (!m[ln]) m[ln] = [];
      m[ln].push(raw.replace(/^error:\s*/i, '').trim());
    });
    return m;
  }, [errorLog]);

  // Sync gutter scroll — works because gutRef has height:100% + overflowY:scroll
  // so its clientHeight < scrollHeight and scrollTop can be set freely.
  const syncGutter = () => {
    if (taRef.current && gutRef.current)
      gutRef.current.scrollTop = taRef.current.scrollTop;
  };

  const onKeyDown = (e) => {
    if (e.key !== 'Tab') return;
    e.preventDefault();
    const ta  = taRef.current;
    const s   = ta.selectionStart;
    const end = ta.selectionEnd;
    const next = value.slice(0, s) + '  ' + value.slice(end);
    onChange(next);
    setTimeout(() => { ta.selectionStart = ta.selectionEnd = s + 2; }, 0);
  };

  const lines    = (value || '').split('\n');
  const errLines = Object.entries(errorMap).sort(([a],[b]) => +a - +b);
  const LINE_H   = 21;  // must match textarea line-height below
  const PT       = 12;  // padding-top — same in gutter and textarea
  const GW       = 46;  // gutter width (fits up to 4-digit numbers)

  return (
    <div style={{ display:'flex', flexDirection:'column', flex:1, minHeight:0 }}>
      {/* Editor row */}
      <div style={{ display:'flex', flex:1, minHeight:0, overflow:'hidden', background:'var(--code-bg)' }}>

        {/* Gutter: outer clips visuals; inner has height:100% + overflowY:scroll so scrollTop works */}
        <div style={{ flexShrink:0, width:GW, overflow:'hidden', background:'var(--surface-sunken)', borderRight:'1px solid var(--border)' }}>
          <div
            ref={gutRef}
            className="tk-texed__gutter"
            style={{ height:'100%', overflowY:'scroll', paddingTop:PT, boxSizing:'border-box', scrollbarWidth:'none', msOverflowStyle:'none' }}
          >
            {lines.map((_, i) => {
              const ln = i + 1;
              const isErr = !!errorMap[ln];
              return (
                <div key={i} style={{ height:LINE_H, display:'flex', alignItems:'center', justifyContent:'flex-end', paddingRight:8, boxSizing:'border-box', gap:3 }}>
                  {isErr && (
                    <div title={(errorMap[ln]||[]).join('\n')}
                      style={{ width:5, height:5, borderRadius:'50%', background:'#e05252', flexShrink:0, cursor:'help' }} />
                  )}
                  <span style={{ fontFamily:'var(--font-mono)', fontSize:12, lineHeight:LINE_H+'px', color: isErr ? '#e05252' : 'var(--code-gutter)', userSelect:'none' }}>
                    {ln}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Textarea — plain controlled textarea, no magic */}
        <textarea
          ref={taRef}
          className="tk-texed__ta"
          value={value || ''}
          onChange={e => onChange(e.target.value)}
          onScroll={syncGutter}
          onKeyDown={onKeyDown}
          spellCheck={false}
          autoCorrect="off"
          autoCapitalize="off"
          style={{
            flex:1, minWidth:0,
            padding:`${PT}px 16px 40px`,
            fontFamily:'var(--font-mono)', fontSize:13, lineHeight:LINE_H+'px',
            color:'var(--code-text)', background:'transparent',
            border:'none', outline:'none', resize:'none',
            overflowY:'auto', overflowX:'auto',
            tabSize:2, whiteSpace:'pre',
            boxSizing:'border-box',
          }}
        />
      </div>

      {/* Error panel */}
      {errLines.length > 0 && (
        <div style={{ flexShrink:0, maxHeight:120, overflowY:'auto', background:'#1a0e0e', borderTop:'1px solid #5a2020' }}>
          {errLines.map(([ln, msgs]) =>
            msgs.map((msg, j) => (
              <div key={ln+'-'+j} style={{ display:'flex', gap:8, padding:'5px 14px', fontFamily:'var(--font-mono)', fontSize:11, color:'#ff9a9a', lineHeight:1.55, borderBottom:'1px solid rgba(255,100,100,.08)' }}>
                <span style={{ color:'#e05252', fontWeight:700, flexShrink:0, minWidth:36 }}>:{ln}</span>
                <span style={{ flex:1, wordBreak:'break-word' }}>{msg}</span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

window.TectoEditor = { Editor, TexEditor };

})();
/* --- Integration + App --- */
(() => {

const React = window.React;

// ── LaTeX helpers ─────────────────────────────────────────────────────────────
const escapeLaTeX = (val) => String(val)
  .replace(/·/g, '--').replace(/—/g, '---').replace(/–/g, '--')
  .replace(/\\/g, '\\textbackslash{}')   // must be first
  .replace(/\{/g, '\\{').replace(/\}/g, '\\}')
  .replace(/\$/g, '\\$')
  .replace(/&/g,'\\&').replace(/%/g,'\\%').replace(/#/g,'\\#')
  .replace(/_/g,'\\_').replace(/\^/g,'\\^{}')
  .replace(/~/g,'\\textasciitilde{}');

const renderTex = (template, vars) =>
  template.replace(/\{\{([^{}]+)\}\}/g, (_, raw) => {
    const key = raw.trim().split('|')[0].trim(); // key is before the first |
    return escapeLaTeX(vars[key] ?? '');
  });

// ── Starter TeX para editor libre ─────────────────────────────────────────────
const FREE_STARTER_TEX = String.raw`\documentclass[12pt]{article}
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage[a4paper,margin=2.5cm]{geometry}
\usepackage{xcolor,microtype}

\definecolor{acento}{HTML}{C75B12}
\definecolor{suave}{HTML}{6B635B}

\begin{document}

\begin{center}
  {\Large\bfseries Mi Documento}\\[6pt]
  {\color{suave} Synset Solutions}
\end{center}

\vspace{1cm}
Escribe aqui tu contenido en \LaTeX{}.
Puedes usar cualquier paquete que Tectonic soporte.

\end{document}
`;

// ── CSS injection ─────────────────────────────────────────────────────────────
(function injectAllCSS() {
  if (document.getElementById('tecto-app-all-css')) return;
  const css = `
/* App chrome */
.tk-app { height: 100%; display: flex; flex-direction: column; background: var(--bg); color: var(--ink); }
.tk-body { flex: 1; min-height: 0; display: flex; }
.tk-main { flex: 1; min-width: 0; display: flex; flex-direction: column; min-height: 0; }
.tk-toasts { position: fixed; right: 18px; bottom: 18px; z-index: 300; display: flex; flex-direction: column; gap: 10px; }

/* Auth screens */
.tk-auth { height: 100%; display: flex; align-items: center; justify-content: center; background: var(--bg);
  background-image: radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0); background-size: 22px 22px; }
.tk-auth__card { width: 380px; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl); padding: 32px 32px 26px; }
.tk-auth__brand { display: flex; flex-direction: column; align-items: center; gap: 10px; margin-bottom: 24px; }
.tk-auth__mark { width: 46px; height: 46px; }
.tk-auth__t { font-family: var(--font-serif); font-size: 24px; font-weight: 600; letter-spacing: -0.02em; color: var(--ink-strong); }
.tk-auth__sub { font-family: var(--font-mono); font-size: 11px; color: var(--ink-muted); letter-spacing: 0.04em; margin-top: -4px; }
.tk-auth__fields { display: flex; flex-direction: column; gap: 12px; }
.tk-auth__foot { margin-top: 14px; text-align: center; font-family: var(--font-sans); font-size: 12px; color: var(--ink-muted); }
.tk-auth__link { color: var(--accent); cursor: pointer; text-decoration: underline; }
.tk-auth__err { font-family: var(--font-sans); font-size: 12px; color: var(--danger-fg); background: var(--danger-bg);
  border: 1px solid var(--danger); border-radius: var(--radius-sm); padding: 7px 10px; }

/* TopBar avatar menu */
.tk-topbar { display: flex; align-items: center; gap: 10px; height: var(--topbar-h); padding: 0 12px; flex: none;
  background: var(--surface); border-bottom: 1px solid var(--border); }
.tk-crumb { display: flex; align-items: center; gap: 7px; font-family: var(--font-sans); font-size: var(--text-sm); color: var(--ink-muted); }
.tk-crumb b { color: var(--ink-strong); font-weight: 600; font-family: var(--font-mono); font-size: var(--text-sm); }
.tk-topbar__spacer { flex: 1; }
.tk-topbar__grp { display: flex; align-items: center; gap: 8px; }
.tk-avatar-btn { width: 28px; height: 28px; border-radius: 50%; background: var(--accent); color: var(--accent-on);
  display: inline-flex; align-items: center; justify-content: center; font-family: var(--font-sans); font-size: 11px; font-weight: 700;
  flex: none; border: none; cursor: pointer; position: relative; }
.tk-avatar-menu { position: absolute; top: calc(100% + 8px); right: 0; background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); min-width: 180px; padding: 6px; z-index: 200; }
.tk-avatar-menu__item { display: flex; align-items: center; gap: 9px; padding: 8px 10px; border-radius: var(--radius-md);
  font-family: var(--font-sans); font-size: var(--text-sm); color: var(--ink); cursor: pointer; border: none; background: none; width: 100%; }
.tk-avatar-menu__item:hover { background: var(--surface-hover); }
.tk-avatar-menu__item--danger { color: var(--danger-fg); }
.tk-avatar-menu__sep { height: 1px; background: var(--border); margin: 4px 0; }
.tk-avatar-menu__user { padding: 8px 10px 6px; }
.tk-avatar-menu__user b { display: block; font-family: var(--font-sans); font-size: var(--text-sm); font-weight: 600; color: var(--ink-strong); }
.tk-avatar-menu__user span { font-family: var(--font-mono); font-size: 11px; color: var(--ink-muted); }

/* Dynamic generator */
.tk-dyn { flex: 1; min-height: 0; display: flex; }
.tk-dyn__form { width: 432px; flex: none; min-height: 0; overflow: auto; background: var(--surface); border-right: 1px solid var(--border); }
.tk-dyn__form-in { padding: 20px 22px 60px; display: flex; flex-direction: column; gap: 14px; }
.tk-dyn__head { display: flex; align-items: center; gap: 10px; }
.tk-dyn__head h2 { font-family: var(--font-serif); font-size: 20px; font-weight: 600; letter-spacing: -0.01em; color: var(--ink-strong); margin: 0; }
.tk-dyn__sec { font-family: var(--font-mono); font-size: 10px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-subtle); margin: 6px 0 -4px; }
.tk-dyn__grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.tk-dyn__preview { flex: 1; min-width: 0; min-height: 0; display: flex; flex-direction: column; background: var(--bg-subtle); }
.tk-dyn__bar { display: flex; align-items: center; gap: 8px; height: 44px; padding: 0 14px; flex: none; background: var(--surface); border-bottom: 1px solid var(--border); }
.tk-dyn__bar b { font-family: var(--font-mono); font-size: 12px; color: var(--ink-muted); }
.tk-dyn__sp { flex: 1; }
.tk-dyn__stage { flex: 1; min-height: 0; overflow: auto; padding: 28px; display: flex; justify-content: center; align-items: flex-start; position: relative; }
.tk-dyn__page { width: 480px; background: var(--paper); box-shadow: var(--shadow-lg); border-radius: 2px; min-height: 620px; }
.tk-dyn__empty { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; gap: 14px; color: var(--ink-subtle); font-family: var(--font-mono); font-size: 13px; }
.tk-dyn__overlay { position: absolute; inset: 0; display: flex; flex-direction: column; gap: 13px; align-items: center; justify-content: center; background: color-mix(in srgb, var(--bg-subtle) 78%, transparent); backdrop-filter: blur(1.5px); }
.tk-dyn__overlay span { font-family: var(--font-mono); font-size: 13px; color: var(--ink-muted); }
.tk-items-grid { display: grid; grid-template-columns: 1fr 60px 90px; gap: 7px; align-items: center; }
.tk-items-hdr { font-family: var(--font-mono); font-size: 9.5px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--ink-subtle); padding: 0 2px; margin-bottom: -2px; }
.tk-totals { display: flex; flex-direction: column; gap: 4px; padding: 10px 12px; background: var(--surface-sunken); border: 1px solid var(--border); border-radius: var(--radius-md); font-family: var(--font-mono); font-size: 12px; }
.tk-totals .r { display: flex; justify-content: space-between; }
.tk-totals .t { font-weight: 600; font-size: 14px; padding-top: 6px; margin-top: 2px; border-top: 1px solid var(--border-strong); }

/* Free editor + Template editor */
.tk-free { flex: 1; min-height: 0; display: flex; flex-direction: column; }
.tk-free__bar { display: flex; align-items: center; gap: 8px; height: 44px; padding: 0 14px; flex: none; background: var(--surface); border-bottom: 1px solid var(--border); }
.tk-free__body { flex: 1; min-height: 0; display: flex; }
.tk-free__editor { flex: 1; min-height: 0; display: flex; flex-direction: column; border-right: 1px solid var(--border); }
.tk-free__ta { flex: 1; width: 100%; resize: none; border: none; outline: none; padding: 16px 18px; font-family: var(--font-mono); font-size: 13px; line-height: 1.6; background: var(--code-bg); color: var(--code-text); tab-size: 2; }
.tk-free__preview { flex: 1; min-width: 0; min-height: 0; display: flex; flex-direction: column; background: var(--bg-subtle); position: relative; }

/* Template editor with inspector */
.tk-tpl-edit { flex: 1; min-height: 0; display: flex; }
.tk-tpl-insp { width: 240px; flex: none; min-height: 0; overflow: auto; background: var(--surface); border-right: 1px solid var(--border); padding: 16px; display: flex; flex-direction: column; gap: 14px; }
.tk-tpl-insp h3 { font-family: var(--font-serif); font-size: 16px; font-weight: 600; color: var(--ink-strong); margin: 0; }
.tk-tpl-insp__sec { font-family: var(--font-mono); font-size: 10px; font-weight: 600; letter-spacing: 0.07em; text-transform: uppercase; color: var(--ink-subtle); margin-top: 4px; }
.tk-var-chip { display: inline-flex; align-items: center; gap: 5px; padding: 3px 8px; background: var(--surface-sunken); border: 1px solid var(--border); border-radius: var(--radius-sm); font-family: var(--font-mono); font-size: 11px; color: var(--code-cmd); cursor: pointer; margin: 2px; }
.tk-var-chip:hover { background: var(--accent-subtle-bg); border-color: var(--border-accent); }

/* Assets screen */
.tk-assets-real { flex: 1; overflow: auto; background: var(--bg); }
.tk-assets-real__in { max-width: 960px; margin: 0 auto; padding: 30px 36px 70px; }
.tk-asset-real { display: flex; align-items: center; gap: 12px; padding: 10px 13px; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); }
.tk-asset-real__thumb { width: 48px; height: 48px; border-radius: var(--radius-sm); border: 1px solid var(--border); background: var(--surface-sunken); display: flex; align-items: center; justify-content: center; flex: none; overflow: hidden; }
.tk-asset-real__thumb img { width: 100%; height: 100%; object-fit: cover; }
.tk-asset-real__n { font-family: var(--font-mono); font-size: 12px; color: var(--ink); flex: 1; }
.tk-asset-real__m { font-family: var(--font-sans); font-size: 11px; color: var(--ink-subtle); }
.tk-asset-real__acts { display: flex; align-items: center; gap: 4px; }

/* Profile screen */
.tk-profile { flex: 1; overflow: auto; background: var(--bg); }
.tk-profile__in { max-width: 560px; margin: 0 auto; padding: 36px 36px 80px; display: flex; flex-direction: column; gap: 22px; }
.tk-profile__card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-xl); padding: 26px; box-shadow: var(--shadow-sm); display: flex; flex-direction: column; gap: 18px; }
.tk-profile__avatar { width: 64px; height: 64px; border-radius: 50%; background: var(--accent); color: var(--accent-on); display: flex; align-items: center; justify-content: center; font-family: var(--font-serif); font-size: 26px; font-weight: 700; }
.tk-profile__name { font-family: var(--font-serif); font-size: 22px; font-weight: 600; color: var(--ink-strong); }
.tk-profile__email { font-family: var(--font-mono); font-size: 12px; color: var(--ink-muted); }
.tk-profile__fields { display: flex; flex-direction: column; gap: 12px; }

/* Settings screen */
.tk-settings { flex: 1; overflow: auto; background: var(--bg); }
.tk-settings__in { max-width: 600px; margin: 0 auto; padding: 32px 36px 80px; display: flex; flex-direction: column; gap: 20px; }
.tk-set-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 20px 22px; box-shadow: var(--shadow-sm); display: flex; flex-direction: column; gap: 14px; }
.tk-set-card h3 { font-family: var(--font-serif); font-size: 16px; font-weight: 600; color: var(--ink-strong); margin: 0 0 2px; }
.tk-set-row { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
.tk-set-row span { font-family: var(--font-sans); font-size: var(--text-sm); color: var(--ink-muted); }

/* Plantillas with categories */
.tk-cat-head { font-family: var(--font-mono); font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-subtle); margin: 20px 0 10px; }

/* Login */
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
  el.id = 'tecto-app-all-css';
  el.textContent = css;
  document.head.appendChild(el);
})();

// ── NewDocModal — asks for name + client before creating from template ────────
(function injectModalCSS() {
  if (document.getElementById('tecto-modal-css')) return;
  const css = `
.tk-modal-ov { position:fixed;inset:0;background:rgba(0,0,0,.38);z-index:400;display:flex;align-items:center;justify-content:center; }
.tk-modal { background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-xl);box-shadow:var(--shadow-xl);padding:26px;width:420px;display:flex;flex-direction:column;gap:14px; }
.tk-modal__title { font-family:var(--font-serif);font-size:18px;font-weight:600;color:var(--ink-strong); }
.tk-modal__field { display:flex;flex-direction:column;gap:5px; }
.tk-modal__label { font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-muted); }
.tk-modal__input { height:36px;padding:0 10px;border-radius:var(--radius-md);border:1px solid var(--border-strong);background:var(--surface);color:var(--ink);font-family:var(--font-sans);font-size:13px;outline:none;width:100%; }
.tk-modal__input:focus { border-color:var(--accent);box-shadow:0 0 0 2px var(--accent-ring); }
.tk-modal__actions { display:flex;justify-content:flex-end;gap:8px;margin-top:4px; }
`;
  const el = document.createElement('style');
  el.id = 'tecto-modal-css';
  el.textContent = css;
  document.head.appendChild(el);
})();

const NEW_CLIENT_SENTINEL = '__new__';

function NewDocModal({ templateName, clients, onClose, onCreate }) {
  const [docName, setDocName] = React.useState('');
  const [clientId, setClientId] = React.useState(clients.length > 0 ? clients[0].id : NEW_CLIENT_SENTINEL);
  const [newClientName, setNewClientName] = React.useState('');
  const [saving, setSaving] = React.useState(false);
  const { Button } = window.TectoDS;
  const isNew = clientId === NEW_CLIENT_SENTINEL;

  const canSubmit = docName.trim() && (!isNew || newClientName.trim());

  const handleCreate = async () => {
    if (!canSubmit) return;
    setSaving(true);
    try {
      await onCreate({
        name: docName.trim(),
        clientId: isNew ? null : clientId,
        newClientName: isNew ? newClientName.trim() : null,
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="tk-modal-ov" onClick={onClose}>
      <div className="tk-modal" onClick={e => e.stopPropagation()}>
        <div className="tk-modal__title">Nuevo documento — {templateName}</div>

        <div className="tk-modal__field">
          <label className="tk-modal__label">Nombre del documento</label>
          <input className="tk-modal__input" placeholder="cotizacion-acme-2026"
            value={docName} onChange={e => setDocName(e.target.value)} autoFocus
            onKeyDown={e => { if (e.key === 'Enter' && canSubmit) handleCreate(); if (e.key === 'Escape') onClose(); }} />
        </div>

        <div className="tk-modal__field">
          <label className="tk-modal__label">Cliente</label>
          <select className="tk-modal__input" value={clientId} onChange={e => setClientId(e.target.value)}>
            {clients.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            <option value={NEW_CLIENT_SENTINEL}>+ Nuevo cliente…</option>
          </select>
        </div>

        {isNew && (
          <div className="tk-modal__field">
            <label className="tk-modal__label">Nombre del nuevo cliente</label>
            <input className="tk-modal__input" placeholder="Empresa S.A."
              value={newClientName} onChange={e => setNewClientName(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && canSubmit) handleCreate(); if (e.key === 'Escape') onClose(); }} />
          </div>
        )}

        <div className="tk-modal__actions">
          <Button variant="ghost" size="sm" onClick={onClose}>Cancelar</Button>
          <Button variant="primary" size="sm" onClick={handleCreate}
            loading={saving} disabled={!canSubmit}>
            {saving ? 'Creando…' : 'Crear documento'}
          </Button>
        </div>
      </div>
    </div>
  );
}

// FIELD_GROUPS removed — groups now come dynamically from field.section in the template

const ITEM_KEYS = new Set(['item_1_desc','item_1_hrs','item_1_total','item_2_desc','item_2_hrs','item_2_total',
  'item_3_desc','item_3_hrs','item_3_total','subtotal','itbis','total','total_doc']);

// ── ItemsTable ────────────────────────────────────────────────────────────────
function ItemsTable({ data, setData }) {
  const { Input } = window.TectoDS;
  const set = (n, key, val) => {
    const updated = { ...data, [`item_${n}_${key}`]: val };
    if (key === 'total') {
      const nums = [1,2,3].map(i => parseFloat((updated[`item_${i}_total`]||'0').replace(/,/g,'')) || 0);
      const sub = nums.reduce((a,b) => a+b, 0);
      const itbis = sub * 0.18;
      const fmt = (x) => x.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      updated.subtotal = fmt(sub);
      updated.itbis = fmt(itbis);
      updated.total = fmt(sub + itbis);
    }
    setData(updated);
  };
  const moneda = data.moneda || 'USD';
  return (
    <div style={{display:'flex',flexDirection:'column',gap:8}}>
      <div className="tk-items-hdr tk-items-grid"><span>Descripción</span><span style={{textAlign:'right'}}>Hrs/U</span><span style={{textAlign:'right'}}>Total</span></div>
      {[1,2,3].map(n => (
        <div className="tk-items-grid" key={n}>
          <Input size="sm" value={data[`item_${n}_desc`]||''} placeholder={`Ítem ${n}…`} onChange={e=>set(n,'desc',e.target.value)} />
          <Input size="sm" align="end" value={data[`item_${n}_hrs`]||''} onChange={e=>set(n,'hrs',e.target.value)} />
          <Input size="sm" align="end" prefix="$" value={data[`item_${n}_total`]||''} onChange={e=>set(n,'total',e.target.value)} />
        </div>
      ))}
      <div className="tk-totals">
        {[['Subtotal', data.subtotal],['ITBIS 18%', data.itbis],['Total', data.total]].map(([k,v]) => (
          <div key={k} className={'r'+(k==='Total'?' t':'')}>
            <span style={{color:'var(--ink-muted)'}}>{k}</span>
            <span style={{color:k==='Total'?'var(--accent)':undefined}}>{v ? `${moneda} ${v}` : '—'}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── FieldInput ────────────────────────────────────────────────────────────────
function FieldInput({ field, value, onChange }) {
  const { Input, Select } = window.TectoDS;
  if (field.type === 'textarea') return (
    <div style={{display:'flex',flexDirection:'column',gap:5}}>
      <label style={{fontFamily:'var(--font-sans)',fontSize:'var(--text-sm)',fontWeight:500,color:'var(--ink-muted)'}}>{field.label}</label>
      <textarea rows={4} value={value||''} onChange={e=>onChange(e.target.value)}
        style={{width:'100%',fontFamily:'var(--font-sans)',fontSize:14,padding:'9px 11px',
          borderRadius:7,border:'1px solid var(--border-strong)',background:'var(--surface)',
          color:'var(--ink)',resize:'vertical',boxSizing:'border-box',outline:'none'}} />
    </div>
  );
  if (field.type === 'select') return (
    <Select label={field.label} value={value||''} onChange={e=>onChange(e.target.value)} options={field.options||[]} />
  );
  return <Input label={field.label} value={value||''} onChange={e=>onChange(e.target.value)} />;
}

// ── DynamicGenerator ──────────────────────────────────────────────────────────
function DynamicGenerator({ template, data, setData, status, pdfUrl, onCompile, onDownload }) {
  const I = window.TectoIcons;
  const { Button, IconButton, StatusPill, Badge } = window.TectoDS;
  const { CotizacionDoc } = window.TectoCorp;

  if (!template) return (
    <div className="tk-dyn">
      <div className="tk-dyn__empty" style={{flex:1}}>
        <I.FileText size={36} /><span>Selecciona una plantilla para comenzar</span>
      </div>
    </div>
  );

  const fields = template.fields || [];
  const isCotz = template.id === 'tpl-cotizacion';
  const set = (k, v) => setData({ ...data, [k]: v });

  // Build section groups dynamically from field.section
  // Fields with no section fall into a nameless group rendered without header
  const sectionMap = new Map();
  for (const f of fields) {
    if (ITEM_KEYS.has(f.key)) continue;
    const sec = f.section || '';
    if (!sectionMap.has(sec)) sectionMap.set(sec, []);
    sectionMap.get(sec).push(f);
  }
  const groups = [...sectionMap.entries()].map(([label, fs]) => ({ label, fields: fs }));

  const renderGroup = (group) => {
    const gf = group.fields;
    if (!gf.length) return null;
    const useCols = gf.length === 2 && gf.every(f => f.type !== 'textarea');
    return (
      <React.Fragment key={group.label || '__main__'}>
        {group.label && <div className="tk-dyn__sec">{group.label}</div>}
        {useCols ? (
          <div className="tk-dyn__grid2">{gf.map(f => <FieldInput key={f.key} field={f} value={data[f.key] ?? ''} onChange={v=>set(f.key,v)} />)}</div>
        ) : gf.map(f => <FieldInput key={f.key} field={f} value={data[f.key] ?? ''} onChange={v=>set(f.key,v)} />)}
      </React.Fragment>
    );
  };

  const slug = (template.id||'doc').replace('tpl-','');
  const num = data.numero_cotizacion || data.version || '001';
  const docName = `${slug}-${num}.pdf`;

  return (
    <div className="tk-dyn">
      <div className="tk-dyn__form">
        <div className="tk-dyn__form-in">
          <div className="tk-dyn__head">
            <Badge tone="brand" mono>{template.id}.cls</Badge>
            <h2>{template.name}</h2>
          </div>
          {groups.map(g => renderGroup(g))}
          {isCotz && <React.Fragment><div className="tk-dyn__sec">Conceptos</div><ItemsTable data={data} setData={setData} /></React.Fragment>}
          {!groups.length && fields.filter(f=>!ITEM_KEYS.has(f.key)).map(f => (
            <FieldInput key={f.key} field={f} value={data[f.key] ?? ''} onChange={v=>set(f.key,v)} />
          ))}
        </div>
      </div>
      <div className="tk-dyn__preview">
        <div className="tk-dyn__bar">
          <I.FileText size={16} /><b>{docName}</b>
          <div className="tk-dyn__sp" />
          <StatusPill status={status} />
          <Button variant="primary" size="sm" iconLeft={<I.Play size={15}/>} onClick={onCompile} loading={status==='running'}>
            {status==='running'?'Compilando…':'Compilar'}
          </Button>
          <IconButton size="sm" variant="solid" label="Descargar PDF" icon={<I.Download size={16}/>} onClick={onDownload} />
        </div>
        <div className="tk-dyn__stage">
          {pdfUrl
            ? <iframe src={pdfUrl} title="PDF" style={{width:'100%',height:'100%',minHeight:'600px',border:'none',background:'#fff',borderRadius:4,boxShadow:'var(--shadow-lg)'}} />
            : isCotz
              ? <div className="tk-dyn__page"><window.TectoCorp.CotizacionDoc data={{...window.TectoCorp.DEFAULT_DATA,cliente:data.cliente_nombre||'',numero:data.numero_cotizacion||'001'}} /></div>
              : <div className="tk-dyn__empty" style={{height:'auto',padding:'60px 0'}}><I.FileText size={40}/><span>Rellena el formulario y presiona Compilar</span></div>
          }
          {status==='running' && (
            <div className="tk-dyn__overlay"><window.TectoDS.Spinner size="lg"/><span>Componiendo con Tectonic…</span></div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── FreeEditor ────────────────────────────────────────────────────────────────
function FreeEditor({ tex, setTex, status, pdfUrl, onCompile, onDownload, engine, setEngine, errorLog }) {
  const I = window.TectoIcons;
  const { Button, IconButton, StatusPill, Select } = window.TectoDS;
  const { TexEditor } = window.TectoEditor;
  const [filename, setFilename] = React.useState('documento.tex');
  return (
    <div className="tk-free">
      <div className="tk-free__bar">
        <I.Type size={15} style={{color:'var(--ink-muted)'}} />
        <input value={filename} onChange={e=>setFilename(e.target.value)}
          style={{fontFamily:'var(--font-mono)',fontSize:13,background:'none',border:'none',outline:'none',color:'var(--ink-strong)',width:160}} />
        <div className="tk-dyn__sp" />
        <Select value={engine} onChange={e=>setEngine(e.target.value)} options={['XeLaTeX','LuaLaTeX']}
          style={{fontSize:12,padding:'4px 8px',height:30}} />
        <StatusPill status={status} />
        <Button variant="primary" size="sm" iconLeft={<I.Play size={15}/>} onClick={onCompile} loading={status==='running'}>
          {status==='running'?'Compilando…':'Compilar'}
        </Button>
        <IconButton size="sm" variant="solid" label="Descargar" icon={<I.Download size={16}/>} onClick={onDownload} />
      </div>
      <div className="tk-free__body">
        <div className="tk-free__editor" style={{display:'flex',flexDirection:'column'}}>
          <TexEditor value={tex} onChange={setTex} errorLog={errorLog} />
        </div>
        <div className="tk-free__preview">
          {pdfUrl
            ? <iframe src={pdfUrl} title="PDF libre" style={{flex:1,width:'100%',height:'100%',minHeight:'500px',border:'none'}} />
            : <div className="tk-dyn__empty"><I.Zap size={36}/><span>Escribe LaTeX y presiona Compilar</span></div>
          }
          {status==='running' && (
            <div className="tk-dyn__overlay" style={{position:'absolute',inset:0}}><window.TectoDS.Spinner size="lg"/><span>Compilando…</span></div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── PlantillasWorkspace — lista + editor integrado ────────────────────────────
function PlantillasWorkspace({
  templates, selectedTemplate, content, setContent,
  saving, onSave, onSelect, onCreate, onDelete,
  onCompile, compileStatus, previewUrl, compileErrorLog,
}) {
  const I = window.TectoIcons;
  const { Button, IconButton, StatusPill, Badge } = window.TectoDS;
  const [showNew, setShowNew] = React.useState(false);
  const [newName, setNewName] = React.useState('');
  const [newCat, setNewCat] = React.useState('General');
  const [creating, setCreating] = React.useState(false);

  const fields = selectedTemplate ? (selectedTemplate.fields || []) : [];

  const insertVar = (key) => {
    // TexEditor renders a textarea with a known class; find it in the editor area
    const ta = document.querySelector('.tk-texed__ta');
    if (!ta) { setContent(content + `{{${key}}}`); return; }
    const s = ta.selectionStart, e = ta.selectionEnd;
    const next = content.slice(0, s) + `{{${key}}}` + content.slice(e);
    setContent(next);
    requestAnimationFrame(() => { ta.selectionStart = ta.selectionEnd = s + key.length + 4; ta.focus(); });
  };

  const doCreate = async () => {
    if (!newName.trim()) return;
    setCreating(true);
    await onCreate({ name: newName.trim(), category: newCat });
    setNewName(''); setShowNew(false); setCreating(false);
  };

  // Group by category
  const byCategory = {};
  templates.forEach(t => {
    const cat = t.category || 'General';
    if (!byCategory[cat]) byCategory[cat] = [];
    byCategory[cat].push(t);
  });

  return (
    <div style={{flex:1,minHeight:0,display:'flex'}}>

      {/* ── Left: template list ─────────────────────────────────────────── */}
      <div style={{width:240,flex:'none',display:'flex',flexDirection:'column',background:'var(--surface)',borderRight:'1px solid var(--border)',minHeight:0}}>
        {/* Header */}
        <div style={{display:'flex',alignItems:'center',gap:8,padding:'11px 12px 10px',borderBottom:'1px solid var(--border)',flex:'none'}}>
          <span style={{fontFamily:'var(--font-serif)',fontSize:15,fontWeight:600,color:'var(--ink-strong)',flex:1}}>Plantillas</span>
          <button title="Nueva plantilla"
            onClick={()=>setShowNew(v=>!v)}
            style={{width:26,height:26,borderRadius:'var(--radius-sm)',border:'1px solid var(--border)',background:'transparent',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--ink-muted)'}}>
            <I.Plus size={14}/>
          </button>
        </div>

        {/* New template form */}
        {showNew && (
          <div style={{padding:'10px 12px',borderBottom:'1px solid var(--border)',display:'flex',flexDirection:'column',gap:7,flex:'none'}}>
            <input value={newName} onChange={e=>setNewName(e.target.value)} placeholder="Nombre…"
              autoFocus onKeyDown={e=>e.key==='Enter'&&doCreate()}
              style={{fontFamily:'var(--font-sans)',fontSize:13,padding:'6px 9px',border:'1px solid var(--border-strong)',borderRadius:6,background:'var(--surface)',color:'var(--ink)',outline:'none',width:'100%',boxSizing:'border-box'}} />
            <select value={newCat} onChange={e=>setNewCat(e.target.value)}
              style={{fontFamily:'var(--font-sans)',fontSize:12,padding:'5px 8px',border:'1px solid var(--border-strong)',borderRadius:6,background:'var(--surface)',color:'var(--ink)'}}>
              {['Comercial','Legal','Técnico','RR.HH.','General'].map(c=><option key={c}>{c}</option>)}
            </select>
            <div style={{display:'flex',gap:6}}>
              <button onClick={doCreate} disabled={creating}
                style={{flex:1,padding:'5px 0',fontFamily:'var(--font-sans)',fontSize:12,fontWeight:600,
                  background:'var(--accent)',color:'var(--accent-on)',border:'none',borderRadius:6,cursor:'pointer'}}>
                {creating?'…':'Crear'}
              </button>
              <button onClick={()=>setShowNew(false)}
                style={{flex:1,padding:'5px 0',fontFamily:'var(--font-sans)',fontSize:12,
                  background:'transparent',color:'var(--ink-muted)',border:'1px solid var(--border)',borderRadius:6,cursor:'pointer'}}>
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Template list */}
        <div style={{flex:1,overflowY:'auto',padding:'6px 0'}}>
          {Object.entries(byCategory).map(([cat, tpls]) => (
            <div key={cat}>
              <div style={{padding:'8px 12px 4px',fontFamily:'var(--font-mono)',fontSize:9.5,fontWeight:600,
                letterSpacing:'0.08em',textTransform:'uppercase',color:'var(--ink-subtle)'}}>
                {cat}
              </div>
              {tpls.map(t => {
                const isSelected = selectedTemplate?.id === t.id;
                return (
                  <div key={t.id}
                    onClick={() => onSelect(t.id)}
                    style={{display:'flex',alignItems:'center',gap:9,padding:'8px 12px',cursor:'pointer',
                      background: isSelected ? 'var(--accent-subtle-bg)' : 'transparent',
                      borderLeft: isSelected ? '3px solid var(--accent)' : '3px solid transparent',
                      transition:'background 100ms'}}>
                    <span style={{width:8,height:8,borderRadius:'50%',background:t.color||'#1f3a5f',flex:'none'}}/>
                    <span style={{flex:1,fontFamily:'var(--font-sans)',fontSize:13,
                      color: isSelected ? 'var(--accent-subtle-fg)' : 'var(--ink)',
                      fontWeight: isSelected ? 600 : 400,
                      overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>
                      {t.name}
                    </span>
                    <button title="Eliminar" onClick={e=>{e.stopPropagation();if(confirm(`¿Eliminar "${t.name}"?`))onDelete(t.id);}}
                      style={{opacity:0,width:18,height:18,border:'none',background:'none',cursor:'pointer',
                        color:'var(--ink-subtle)',padding:0,display:'flex',alignItems:'center',justifyContent:'center'}}
                      className="tpl-del-btn">
                      <I.Trash size={12}/>
                    </button>
                  </div>
                );
              })}
            </div>
          ))}
          {templates.length === 0 && (
            <div style={{padding:'24px 12px',textAlign:'center',fontFamily:'var(--font-sans)',fontSize:12,color:'var(--ink-subtle)'}}>
              Sin plantillas. Crea una con el botón +
            </div>
          )}
        </div>
      </div>

      {/* ── Center: LaTeX editor ─────────────────────────────────────────── */}
      <div style={{flex:'1.3',minWidth:0,display:'flex',flexDirection:'column',borderRight:'1px solid var(--border)'}}>
        {selectedTemplate ? (
          <React.Fragment>
            {/* Editor toolbar */}
            <div className="tk-dyn__bar" style={{borderBottom:'1px solid var(--border)'}}>
              <I.PanelLeft size={15} style={{color:'var(--ink-muted)'}}/>
              <span style={{fontFamily:'var(--font-mono)',fontSize:13,color:'var(--ink-strong)',fontWeight:500}}>{selectedTemplate.id}.tex</span>
              <span style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--ink-subtle)',marginLeft:4}}>
                ({content.split('\n').length} líneas)
              </span>
              <div className="tk-dyn__sp"/>
              {/* Variable chips */}
              {fields.length > 0 && (
                <div style={{display:'flex',gap:3,flexWrap:'nowrap',overflow:'hidden',maxWidth:360}}>
                  {fields.slice(0,6).map(f => (
                    <span key={f.key} className="tk-var-chip" title={`Insertar {{${f.key}}}`}
                      onClick={()=>insertVar(f.key)}
                      style={{fontSize:10,padding:'2px 6px'}}>
                      {f.label || f.key}
                    </span>
                  ))}
                  {fields.length > 6 && (
                    <span style={{fontFamily:'var(--font-mono)',fontSize:10,color:'var(--ink-subtle)',padding:'2px 4px'}}>
                      +{fields.length-6}
                    </span>
                  )}
                </div>
              )}
              <Button variant="primary" size="sm" iconLeft={<I.Save size={14}/>} onClick={onSave} loading={saving}>
                {saving?'Guardando…':'Guardar'}
              </Button>
            </div>
            <window.TectoEditor.TexEditor value={content} onChange={setContent} errorLog={compileErrorLog || ''} />
          </React.Fragment>
        ) : (
          <div className="tk-dyn__empty">
            <I.PanelLeft size={36}/>
            <span>Selecciona una plantilla para editar su LaTeX</span>
          </div>
        )}
      </div>

      {/* ── Right: preview ──────────────────────────────────────────────── */}
      <div style={{flex:1,minWidth:0,display:'flex',flexDirection:'column',background:'var(--bg-subtle)'}}>
        <div className="tk-dyn__bar">
          <I.FileText size={15}/><b>vista previa</b>
          <div className="tk-dyn__sp"/>
          <StatusPill status={compileStatus}/>
          <Button variant="primary" size="sm" iconLeft={<I.Play size={15}/>}
            onClick={onCompile} loading={compileStatus==='running'} disabled={!selectedTemplate}>
            {compileStatus==='running'?'Compilando…':'Previsualizar'}
          </Button>
        </div>
        <div style={{flex:1,position:'relative',overflow:'hidden'}}>
          {previewUrl
            ? <iframe src={previewUrl} title="Preview" style={{width:'100%',height:'100%',minHeight:'500px',border:'none'}}/>
            : <div className="tk-dyn__empty"><I.Layout size={36}/><span>Previsualiza con datos de ejemplo</span></div>
          }
          {compileStatus==='running' && (
            <div className="tk-dyn__overlay" style={{position:'absolute',inset:0}}>
              <window.TectoDS.Spinner size="lg"/><span>Compilando…</span>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .tpl-del-btn:hover { opacity: 1 !important; color: var(--danger-fg) !important; }
        .tk-doc-row:hover .tk-doc-del { opacity: 1 !important; }
      `}</style>
    </div>
  );
}

// ── AssetsScreen ──────────────────────────────────────────────────────────────
const ASSET_TYPES = [
  {
    label: 'Imágenes',
    icon: 'Image',
    hint: (n) => `\\includegraphics[width=\\linewidth]{${n}}`,
    accept: 'image/*,.svg',
    exts: new Set(['.png','.jpg','.jpeg','.gif','.svg','.webp']),
  },
  {
    label: 'Fuentes',
    icon: 'Type',
    hint: (n) => `\\setmainfont{${n.replace(/\.[^.]+$/,'')}}`,
    accept: '.ttf,.otf,.woff,.woff2',
    exts: new Set(['.ttf','.otf','.woff','.woff2']),
  },
  {
    label: 'PDFs',
    icon: 'FileText',
    hint: (n) => `\\includepdf[pages=-]{${n}}`,
    accept: '.pdf',
    exts: new Set(['.pdf']),
  },
  {
    label: 'Otros',
    icon: 'Folder',
    hint: (n) => n,
    accept: '*',
    exts: null,
  },
];

function AssetSection({ type, items, onDelete, I, IconButton, fmt }) {
  const inputRef = React.useRef(null);
  const Icon = I[type.icon] || I.FileText;
  const isImg = type.label === 'Imágenes';

  return (
    <div style={{marginBottom: 28}}>
      <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:10}}>
        <div style={{display:'flex',alignItems:'center',gap:7}}>
          <Icon size={16} style={{color:'var(--ink-muted)'}} />
          <span style={{fontFamily:'var(--font-mono)',fontSize:11,fontWeight:600,letterSpacing:'0.07em',textTransform:'uppercase',color:'var(--ink-subtle)'}}>{type.label}</span>
          <span style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--ink-subtle)',opacity:.6}}>({items.length})</span>
        </div>
        <div style={{flex:1,height:1,background:'var(--border)'}} />
        <button
          onClick={() => inputRef.current && inputRef.current.click()}
          style={{display:'inline-flex',alignItems:'center',gap:5,padding:'4px 10px',
            fontFamily:'var(--font-sans)',fontSize:12,fontWeight:500,color:'var(--ink-muted)',
            background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'var(--radius-md)',
            cursor:'pointer',transition:'all 120ms'}}
          onMouseOver={e=>{e.currentTarget.style.borderColor='var(--border-strong)';e.currentTarget.style.color='var(--ink)';}}
          onMouseOut={e=>{e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.color='var(--ink-muted)';}}
        >
          <I.Plus size={13}/> Subir
        </button>
        <input ref={inputRef} type="file" multiple accept={type.accept} style={{display:'none'}}
          onChange={(e) => { window._assetUploadHandler && window._assetUploadHandler(e); }} />
      </div>

      {items.length === 0 ? (
        <div style={{padding:'18px 14px',background:'var(--surface)',border:'1px dashed var(--border)',
          borderRadius:'var(--radius-lg)',textAlign:'center',color:'var(--ink-subtle)',
          fontFamily:'var(--font-sans)',fontSize:12,cursor:'pointer'}}
          onClick={() => inputRef.current && inputRef.current.click()}>
          Sin {type.label.toLowerCase()} — haz clic para subir
        </div>
      ) : (
        <div style={{display:'flex',flexDirection:'column',gap:6}}>
          {items.map(a => (
            <div key={a.name} className="tk-asset-real">
              <div className="tk-asset-real__thumb">
                {isImg
                  ? <img src={`/assets/${encodeURIComponent(a.name)}`} alt={a.name}
                      onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }}
                    />
                  : null}
                <span style={{display: isImg ? 'none' : 'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100%'}}>
                  <Icon size={20} style={{color:'var(--ink-subtle)'}}/>
                </span>
              </div>
              <div style={{flex:1,minWidth:0}}>
                <div className="tk-asset-real__n">{a.name}</div>
                <div className="tk-asset-real__m">{fmt(a.size)}</div>
              </div>
              <code style={{fontFamily:'var(--font-mono)',fontSize:10,color:'var(--ink-subtle)',
                background:'var(--surface-sunken)',padding:'2px 7px',borderRadius:4,
                maxWidth:280,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',
                marginRight:8,flexShrink:0}}>
                {type.hint(a.name)}
              </code>
              <div className="tk-asset-real__acts">
                <IconButton size="sm" label="Descargar" icon={<I.Download size={14}/>}
                  onClick={()=>window.open('/assets/'+encodeURIComponent(a.name),'_blank')} />
                <IconButton size="sm" label="Eliminar" icon={<I.Trash size={14}/>}
                  onClick={()=>onDelete(a.name)} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function AssetsScreen({ assets, onUpload, onDelete }) {
  const I = window.TectoIcons;
  const { IconButton } = window.TectoDS;
  const fmt = (b) => b > 1024*1024 ? (b/1024/1024).toFixed(1)+' MB' : b > 1024 ? (b/1024).toFixed(0)+' KB' : b+' B';

  // Register global upload handler so AssetSection can reach it
  React.useEffect(() => {
    window._assetUploadHandler = onUpload;
    return () => { delete window._assetUploadHandler; };
  }, [onUpload]);

  // Classify assets by type
  const getType = (name) => {
    const ext = name.slice(name.lastIndexOf('.')).toLowerCase();
    for (const t of ASSET_TYPES.slice(0, -1)) {
      if (t.exts.has(ext)) return t.label;
    }
    return 'Otros';
  };

  const byType = {};
  ASSET_TYPES.forEach(t => { byType[t.label] = []; });
  assets.forEach(a => byType[getType(a.name)].push(a));

  return (
    <div className="tk-assets-real">
      <div className="tk-assets-real__in">
        <div className="tk-ws__head" style={{marginBottom:24}}>
          <div>
            <h1 className="tk-ws__title">Assets</h1>
            <p className="tk-ws__sub">Archivos para usar en tus plantillas LaTeX. Cada sección tiene su propio botón de subida.</p>
          </div>
        </div>
        {ASSET_TYPES.map(type => (
          <AssetSection key={type.label} type={type}
            items={byType[type.label] || []}
            onDelete={onDelete} I={I} IconButton={IconButton} fmt={fmt} />
        ))}
      </div>
    </div>
  );
}

// ── ProfileScreen ─────────────────────────────────────────────────────────────
function ProfileScreen({ user, apiFetch, pushToast, setUser }) {
  const I = window.TectoIcons;
  const { Button, Input, Badge } = window.TectoDS;
  const [name, setName] = React.useState(user?.full_name || '');
  const [company, setCompany] = React.useState(user?.company || '');
  const [saving, setSaving] = React.useState(false);
  const [curPwd, setCurPwd] = React.useState('');
  const [newPwd, setNewPwd] = React.useState('');
  const [savingPwd, setSavingPwd] = React.useState(false);

  const saveProfile = async () => {
    setSaving(true);
    try {
      const r = await apiFetch('/auth/me', { method:'PUT', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ full_name: name, company }) });
      if (r.ok) {
        setUser(u => ({ ...u, full_name: name, company }));
        pushToast({ tone:'success', title:'Perfil guardado', msg:'' });
      }
    } finally { setSaving(false); }
  };

  const savePwd = async () => {
    if (!curPwd || !newPwd) return;
    setSavingPwd(true);
    try {
      const r = await apiFetch('/auth/change-password', { method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ current_password: curPwd, new_password: newPwd }) });
      if (r.ok) {
        pushToast({ tone:'success', title:'Contraseña cambiada', msg:'' });
        setCurPwd(''); setNewPwd('');
      } else {
        const d = await r.json();
        pushToast({ tone:'danger', title:'Error', msg: d.detail || 'Error al cambiar contraseña' });
      }
    } finally { setSavingPwd(false); }
  };

  const initials = (user?.full_name || user?.email || 'U').split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2);
  return (
    <div className="tk-profile">
      <div className="tk-profile__in">
        <h1 style={{fontFamily:'var(--font-serif)',fontSize:28,fontWeight:600,letterSpacing:'-0.02em',color:'var(--ink-strong)',margin:0}}>Perfil</h1>
        <div className="tk-profile__card">
          <div style={{display:'flex',alignItems:'center',gap:16}}>
            <div className="tk-profile__avatar">{initials}</div>
            <div>
              <div className="tk-profile__name">{user?.full_name || 'Sin nombre'}</div>
              <div className="tk-profile__email">{user?.email}</div>
              <div style={{marginTop:6}}>
                <Badge tone={user?.role==='admin'?'brand':'neutral'}>{user?.role==='admin'?'Admin':'Usuario'}</Badge>
              </div>
            </div>
          </div>
          <div className="tk-profile__fields">
            <Input label="Nombre completo" value={name} onChange={e=>setName(e.target.value)} />
            <Input label="Empresa / Organización" value={company} onChange={e=>setCompany(e.target.value)} />
            <Input label="Email" value={user?.email||''} disabled />
          </div>
          <Button variant="primary" size="sm" onClick={saveProfile} loading={saving}>Guardar cambios</Button>
        </div>
        <div className="tk-profile__card">
          <h3 style={{fontFamily:'var(--font-serif)',fontSize:16,fontWeight:600,color:'var(--ink-strong)',margin:0}}>Seguridad</h3>
          <div className="tk-profile__fields">
            <Input label="Contraseña actual" type="password" value={curPwd} onChange={e=>setCurPwd(e.target.value)} />
            <Input label="Nueva contraseña" type="password" value={newPwd} onChange={e=>setNewPwd(e.target.value)} />
          </div>
          <Button variant="secondary" size="sm" onClick={savePwd} loading={savingPwd}>Cambiar contraseña</Button>
        </div>
      </div>
    </div>
  );
}

// ── SettingsScreen ────────────────────────────────────────────────────────────
function SettingsScreen({ theme, onToggleTheme, engine, setEngine }) {
  const { Switch, Select } = window.TectoDS;
  return (
    <div className="tk-settings">
      <div className="tk-settings__in">
        <h1 style={{fontFamily:'var(--font-serif)',fontSize:28,fontWeight:600,letterSpacing:'-0.02em',color:'var(--ink-strong)',margin:0}}>Ajustes</h1>
        <div className="tk-set-card">
          <h3>Apariencia</h3>
          <div className="tk-set-row">
            <span>Modo oscuro</span>
            <Switch checked={theme==='dark'} onChange={onToggleTheme} />
          </div>
        </div>
        <div className="tk-set-card">
          <h3>Compilación</h3>
          <Select label="Motor LaTeX" value={engine} onChange={e=>setEngine(e.target.value)} options={['XeLaTeX','LuaLaTeX']} />
        </div>
      </div>
    </div>
  );
}

// ── Auth screens ──────────────────────────────────────────────────────────────
const LOGO_B64 = 'PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IlRlY3RvIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHJ4PSIxNCIgZmlsbD0iI2M3NWIxMiI+PC9yZWN0PgogIAogIDxnIGZpbGw9IiNmZmZmZmYiPgogICAgPHJlY3QgeD0iMTQiIHk9IjE3IiB3aWR0aD0iMzYiIGhlaWdodD0iNyIgcng9IjEuNSI+PC9yZWN0PgogICAgPHJlY3QgeD0iMjguNSIgeT0iMTciIHdpZHRoPSI3IiBoZWlnaHQ9IjMxIiByeD0iMS41Ij48L3JlY3Q+CiAgICAKICAgIDxyZWN0IHg9IjIxIiB5PSI0NC41IiB3aWR0aD0iMjIiIGhlaWdodD0iNCIgcng9IjEuNSI+PC9yZWN0PgogIDwvZz4KICAKICA8cGF0aCBkPSJNMCA0MCBIMjQgTDMxIDMzIEg2NCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4xNiIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIj48L3BhdGg+Cjwvc3ZnPg==';

function AuthCard({ screen, setScreen, onAuth }) {
  const { Button, Input } = window.TectoDS;
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const I = window.TectoIcons;

  const submit = async () => {
    if (!email || !password) { setError('Email y contraseña son requeridos'); return; }
    setLoading(true); setError('');
    try {
      const url = screen === 'login' ? '/auth/login' : '/auth/register';
      const body = screen === 'login'
        ? { email, password }
        : { email, password, full_name: name, company };
      const r = await fetch(url, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body) });
      const d = await r.json();
      if (!r.ok) { setError(d.detail || 'Error de autenticación'); return; }
      localStorage.setItem('tecto_token', d.access_token);
      onAuth(d.access_token, d.user);
    } catch(e) {
      setError('Error de conexión con el servidor');
    } finally { setLoading(false); }
  };

  return (
    <div className="tk-auth">
      <div className="tk-login__card">
        <div className="tk-login__brand">
          <img className="tk-login__mark" src={`data:image/svg+xml;base64,${LOGO_B64}`} alt="Tecto" />
          <div className="tk-login__t">Tecto</div>
          <div className="tk-login__sub">{screen==='login'?'GENERACIÓN DOCUMENTAL':'CREAR CUENTA'}</div>
        </div>
        {error && <div className="tk-auth__err" style={{marginBottom:12}}>{error}</div>}
        <div className="tk-login__fields">
          {screen === 'register' && (
            <React.Fragment>
              <Input label="Nombre completo" value={name} onChange={e=>setName(e.target.value)} />
              <Input label="Empresa (opcional)" value={company} onChange={e=>setCompany(e.target.value)} />
            </React.Fragment>
          )}
          <Input label="Correo electrónico" type="email" value={email} onChange={e=>setEmail(e.target.value)}
            iconLeft={<I.FileText size={15}/>} onKeyDown={e=>e.key==='Enter'&&submit()} />
          <Input label="Contraseña" type="password" value={password} onChange={e=>setPassword(e.target.value)}
            iconLeft={<I.Lock size={15}/>} onKeyDown={e=>e.key==='Enter'&&submit()} />
          <Button variant="primary" fullWidth onClick={submit} loading={loading} iconRight={<I.Chevron size={15}/>}>
            {screen==='login'?'Entrar':'Crear cuenta'}
          </Button>
        </div>
        <div className="tk-login__foot">
          {screen==='login'
            ? <span>¿Sin cuenta? <span className="tk-auth__link" onClick={()=>{setScreen('register');setError('');}}>Registrarse</span></span>
            : <span>¿Ya tienes cuenta? <span className="tk-auth__link" onClick={()=>{setScreen('login');setError('');}}>Iniciar sesión</span></span>
          }
        </div>
      </div>
    </div>
  );
}

// ── TopBar with avatar menu ───────────────────────────────────────────────────
function AppTopBar({ crumb, theme, onToggleTheme, user, onProfile, onLogout }) {
  const I = window.TectoIcons;
  const { IconButton, Tooltip } = window.TectoDS;
  const [open, setOpen] = React.useState(false);
  const initials = (user?.full_name || user?.email || 'U').split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const close = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  return (
    <div className="tk-topbar">
      <window.TectoChrome.Logo />
      <div style={{ width:1, height:22, background:'var(--border)', margin:'0 4px' }} />
      <div className="tk-crumb">
        {(crumb||[]).map((c,i) => (
          <React.Fragment key={i}>
            {i>0 && <I.Chevron size={14}/>}
            {i===crumb.length-1 ? <b>{c}</b> : <span>{c}</span>}
          </React.Fragment>
        ))}
      </div>
      <div className="tk-topbar__spacer"/>
      <div className="tk-topbar__grp">
        <IconButton size="sm" label="Cambiar tema" icon={theme==='dark'?<I.Sun size={16}/>:<I.Moon size={16}/>} onClick={onToggleTheme} />
        <div ref={ref} style={{position:'relative'}}>
          <button className="tk-avatar-btn" onClick={()=>setOpen(o=>!o)} title={user?.full_name||user?.email}>
            {initials}
          </button>
          {open && (
            <div className="tk-avatar-menu">
              <div className="tk-avatar-menu__user">
                <b>{user?.full_name||'Usuario'}</b>
                <span>{user?.email}</span>
              </div>
              <div className="tk-avatar-menu__sep"/>
              <button className="tk-avatar-menu__item" onClick={()=>{onProfile();setOpen(false);}}>
                <I.Settings size={15}/> Perfil y ajustes
              </button>
              <div className="tk-avatar-menu__sep"/>
              <button className="tk-avatar-menu__item tk-avatar-menu__item--danger" onClick={()=>{onLogout();setOpen(false);}}>
                <I.Lock size={15}/> Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── DocumentosScreen — una carpeta por cada plantilla existente ───────────────
function DocumentosScreen({ onSelectTemplate, docs, templates, onOpenDoc, onDeleteDoc }) {
  const I = window.TectoIcons;
  const { StatusPill } = window.TectoDS;
  const [openFolders, setOpenFolders] = React.useState({});

  const toggle = (key) => setOpenFolders(s => ({ ...s, [key]: !s[key] }));
  const isOpen = (key) => key in openFolders ? openFolders[key] : true;

  const fmtDate = (iso) => {
    if (!iso) return '';
    const d = new Date(iso), now = new Date(), diff = (now - d) / 1000;
    if (diff < 60) return 'ahora';
    if (diff < 3600) return Math.floor(diff/60) + ' min';
    if (diff < 86400) return Math.floor(diff/3600) + ' h';
    if (diff < 604800) return Math.floor(diff/86400) + ' d';
    return d.toLocaleDateString('es-DO', { day:'numeric', month:'short' });
  };

  // Index docs by template_id → { clientName → [docs] }
  const docsByTpl = {};
  docs.forEach(d => {
    const tplId = d.template_id || '__none__';
    const client = (d.client_name || '').trim() || 'Sin cliente';
    if (!docsByTpl[tplId]) docsByTpl[tplId] = {};
    if (!docsByTpl[tplId][client]) docsByTpl[tplId][client] = [];
    docsByTpl[tplId][client].push(d);
  });

  // Group templates by category
  const byCategory = {};
  templates.forEach(t => {
    const cat = t.category || 'General';
    if (!byCategory[cat]) byCategory[cat] = [];
    byCategory[cat].push(t);
  });

  return (
    <div className="tk-ws">
      <div className="tk-ws__in">
        <div className="tk-ws__head">
          <div>
            <h1 className="tk-ws__title">Documentos</h1>
            <p className="tk-ws__sub">Una carpeta por cada plantilla. Cada cliente tiene su subcarpeta.</p>
          </div>
        </div>

        {templates.length === 0 ? (
          <div style={{textAlign:'center',padding:'60px 0',color:'var(--ink-subtle)',fontFamily:'var(--font-mono)',fontSize:13}}>
            <I.Folder size={40} style={{display:'block',margin:'0 auto 12px',opacity:.3}}/>
            Sin plantillas aún. Ve a Plantillas y crea la primera.
          </div>
        ) : (
          Object.entries(byCategory).map(([cat, tpls]) => (
            <React.Fragment key={cat}>
              <div className="tk-ws__sec" style={{marginTop:24}}>{cat}</div>
              <div style={{display:'flex',flexDirection:'column',gap:6}}>
                {tpls.map(tpl => {
                  const tplDocs = docsByTpl[tpl.id] || {};
                  const totalDocs = Object.values(tplDocs).reduce((a,c)=>a+c.length,0);
                  const tplOpen = isOpen('tpl:'+tpl.id);
                  return (
                    <div key={tpl.id} style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'var(--radius-lg)',overflow:'hidden',boxShadow:'var(--shadow-sm)'}}>

                      {/* ── Template folder row ── */}
                      <div style={{display:'flex',alignItems:'center',gap:10,padding:'10px 14px',borderBottom: tplOpen ? '1px solid var(--border)' : 'none'}}>
                        <div onClick={()=>toggle('tpl:'+tpl.id)} style={{display:'flex',alignItems:'center',gap:10,flex:1,cursor:'pointer'}}>
                          <span style={{width:10,height:10,borderRadius:3,background:tpl.color||'#1f3a5f',flex:'none'}}/>
                          <I.Chevron size={14} style={{transform:tplOpen?'rotate(90deg)':'rotate(0)',transition:'transform 150ms',color:'var(--ink-muted)',flex:'none'}}/>
                          <span style={{fontFamily:'var(--font-sans)',fontSize:14,fontWeight:600,color:'var(--ink-strong)'}}>{tpl.name}</span>
                          {totalDocs > 0 && (
                            <span style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--ink-subtle)',background:'var(--surface-sunken)',padding:'1px 7px',borderRadius:99}}>{totalDocs}</span>
                          )}
                        </div>
                        {/* New document button always visible */}
                        <button onClick={()=>onSelectTemplate(tpl.id)}
                          style={{display:'inline-flex',alignItems:'center',gap:5,padding:'4px 11px',
                            fontFamily:'var(--font-sans)',fontSize:12,fontWeight:600,
                            background:'var(--accent)',color:'var(--accent-on)',
                            border:'none',borderRadius:'var(--radius-md)',cursor:'pointer',
                            flexShrink:0}}>
                          <I.Plus size={13}/> Nuevo
                        </button>
                      </div>

                      {/* ── Client subfolders ── */}
                      {tplOpen && (
                        Object.keys(tplDocs).length === 0 ? (
                          <div style={{padding:'12px 14px 12px 34px',fontFamily:'var(--font-sans)',fontSize:12,color:'var(--ink-subtle)'}}>
                            Sin documentos — usa el botón <b>Nuevo</b> para crear el primero.
                          </div>
                        ) : (
                          Object.entries(tplDocs).map(([clientName, clientDocs]) => {
                            const clientKey = 'cli:'+tpl.id+':'+clientName;
                            const clientOpen = isOpen(clientKey);
                            return (
                              <div key={clientName}>
                                <div onClick={()=>toggle(clientKey)}
                                  style={{display:'flex',alignItems:'center',gap:9,
                                    padding:'8px 14px 8px 30px',cursor:'pointer',
                                    borderBottom:'1px solid var(--border)',background:'var(--bg)',
                                    transition:'background 100ms'}}
                                  onMouseOver={e=>e.currentTarget.style.background='var(--surface-hover)'}
                                  onMouseOut={e=>e.currentTarget.style.background='var(--bg)'}>
                                  <I.Folder size={14} style={{color:tpl.color||'var(--ink-subtle)',flex:'none'}}/>
                                  <I.Chevron size={12} style={{transform:clientOpen?'rotate(90deg)':'rotate(0)',transition:'transform 150ms',color:'var(--ink-subtle)',flex:'none'}}/>
                                  <span style={{fontFamily:'var(--font-sans)',fontSize:13,color:'var(--ink)',flex:1,fontWeight:500}}>
                                    {clientName}
                                  </span>
                                  <span style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--ink-subtle)'}}>{clientDocs.length}</span>
                                </div>
                                {clientOpen && clientDocs.map((doc, idx) => (
                                  <div key={doc.id} className="tk-doc-row"
                                    style={{display:'flex',alignItems:'center',gap:10,
                                      padding:'7px 14px 7px 50px',
                                      borderBottom: idx < clientDocs.length-1 ? '1px solid var(--border)' : 'none',
                                      cursor:'pointer',transition:'background 100ms',background:'transparent'}}
                                    onMouseOver={e=>e.currentTarget.style.background='var(--surface-hover)'}
                                    onMouseOut={e=>e.currentTarget.style.background='transparent'}
                                    onClick={()=>onOpenDoc(doc.id)}>
                                    <I.FileText size={13} style={{color:'var(--ink-subtle)',flex:'none'}}/>
                                    <span style={{fontFamily:'var(--font-mono)',fontSize:12,color:'var(--ink)',flex:1,
                                      overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>
                                      {doc.name || doc.id.slice(0,8)}
                                    </span>
                                    <span style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--ink-subtle)',flex:'none'}}>
                                      {fmtDate(doc.updated_at)}
                                    </span>
                                    <button className="tk-doc-del" title="Eliminar"
                                      onClick={e=>{e.stopPropagation();onDeleteDoc(doc.id,doc.name);}}
                                      style={{opacity:0,border:'none',background:'none',cursor:'pointer',
                                        color:'var(--danger-fg)',padding:'2px 4px',borderRadius:4,
                                        display:'flex',alignItems:'center',transition:'opacity 150ms'}}>
                                      <I.Trash size={13}/>
                                    </button>
                                  </div>
                                ))}
                              </div>
                            );
                          })
                        )
                      )}
                    </div>
                  );
                })}
              </div>
            </React.Fragment>
          ))
        )}
      </div>
    </div>
  );
}

// PlantillasScreen kept as thin redirect to Documentos — now replaced by PlantillasWorkspace above
// ── App ──────────────────────────────────────────────────────────────────────
// (PlantillasScreen removed — replaced by PlantillasWorkspace)
function _UNUSED_PlantillasScreen({ templates, onNew, onEdit, onCreate, onDelete }) {
  const I = window.TectoIcons;
  const { Button, IconButton, Badge } = window.TectoDS;
  const [showNew, setShowNew] = React.useState(false);
  const [newName, setNewName] = React.useState('');
  const [newCat, setNewCat] = React.useState('General');
  const [creating, setCreating] = React.useState(false);

  // Group by category
  const byCategory = {};
  templates.forEach(t => {
    const cat = t.category || 'General';
    if (!byCategory[cat]) byCategory[cat] = [];
    byCategory[cat].push(t);
  });

  const iconFor = (t) => {
    const map = { currency:'FileText', code:'Layout', shield:'Stamp', custom:'Hash' };
    return I[map[t.icon]||t.icon] || I.FileText;
  };

  const doCreate = async () => {
    if (!newName.trim()) return;
    setCreating(true);
    await onCreate({ name: newName.trim(), category: newCat });
    setNewName(''); setShowNew(false); setCreating(false);
  };

  return (
    <div className="tk-ws">
      <div className="tk-ws__in">
        <div className="tk-ws__head">
          <div>
            <h1 className="tk-ws__title">Plantillas</h1>
            <p className="tk-ws__sub">Gestiona y edita tus plantillas LaTeX. Cada plantilla tiene su propio <code style={{fontFamily:'var(--font-mono)',fontSize:12,color:'var(--accent-subtle-fg)'}}>tex_template</code> y variables.</p>
          </div>
          <div className="tk-ws__sp"/>
          <Button variant="primary" size="sm" iconLeft={<I.Plus size={15}/>} onClick={()=>setShowNew(v=>!v)}>Nueva plantilla</Button>
        </div>

        {showNew && (
          <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'var(--radius-lg)',padding:'16px',display:'flex',flexDirection:'column',gap:12,marginBottom:8}}>
            <input value={newName} onChange={e=>setNewName(e.target.value)}
              placeholder="Nombre de la plantilla…"
              style={{fontFamily:'var(--font-sans)',fontSize:14,padding:'8px 11px',borderRadius:7,border:'1px solid var(--border-strong)',background:'var(--surface)',color:'var(--ink)',outline:'none'}}
              onKeyDown={e=>e.key==='Enter'&&doCreate()} />
            <select value={newCat} onChange={e=>setNewCat(e.target.value)}
              style={{fontFamily:'var(--font-sans)',fontSize:13,padding:'7px 11px',borderRadius:7,border:'1px solid var(--border-strong)',background:'var(--surface)',color:'var(--ink)'}}>
              {['Comercial','Legal','Técnico','Recursos Humanos','General'].map(c=><option key={c}>{c}</option>)}
            </select>
            <div style={{display:'flex',gap:8}}>
              <Button variant="primary" size="sm" onClick={doCreate} loading={creating}>Crear plantilla vacía</Button>
              <Button variant="ghost" size="sm" onClick={()=>setShowNew(false)}>Cancelar</Button>
            </div>
          </div>
        )}

        {Object.entries(byCategory).map(([cat, tpls]) => (
          <React.Fragment key={cat}>
            <div className="tk-cat-head">{cat}</div>
            <div className="tk-tpls">
              {tpls.map(t => {
                const Icon = iconFor(t);
                return (
                  <div className="tk-tplc" key={t.id} onClick={()=>onNew(t.id)}>
                    <div className="tk-tplc__thumb">
                      <div className="tk-tplc__page">
                        <div className="tk-tplc__band" style={{background:t.color||'#1f3a5f'}}/>
                        <div className="tk-tplc__ln" style={{width:'88%'}}/><div className="tk-tplc__ln" style={{width:'70%'}}/><div className="tk-tplc__ln" style={{width:'80%'}}/>
                        <div className="tk-tplc__chip" style={{background:t.color||'#1f3a5f',opacity:.85}}/>
                      </div>
                    </div>
                    <div className="tk-tplc__foot">
                      <b>{t.name}</b><span>{t.id}</span>
                      <IconButton size="sm" label="Editar .tex" icon={<I.PanelLeft size={15}/>}
                        onClick={e=>{e.stopPropagation();onEdit(t.id);}} />
                      <IconButton size="sm" label="Eliminar" icon={<I.Trash size={14}/>}
                        onClick={e=>{e.stopPropagation();if(confirm(`¿Eliminar "${t.name}"?`))onDelete(t.id);}} />
                    </div>
                  </div>
                );
              })}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
const CRUMBS = {
  docs: ['Documentos'],
  docview: ['Documentación'],
  generator: ['Documentos', 'Nuevo documento'],
  templates: ['Plantillas'],
  assets: ['Assets'],
  editor: ['Plantillas', 'Editor de plantilla'],
  libre: ['Editor libre'],
  settings: ['Ajustes'],
  perfil: ['Perfil'],
};

function App() {
  // ── Auth state ────────────────────────────────────────────────────────────
  const [token, setToken] = React.useState(() => localStorage.getItem('tecto_token'));
  const [user, setUser] = React.useState(null);
  const [authScreen, setAuthScreen] = React.useState('login');
  const [authLoading, setAuthLoading] = React.useState(!!localStorage.getItem('tecto_token'));

  // ── App state ─────────────────────────────────────────────────────────────
  const [theme, setTheme] = React.useState(() => localStorage.getItem('tecto_theme') || 'light');
  const [view, setView] = React.useState('docs');
  const [engine, setEngine] = React.useState('XeLaTeX');

  // Generator
  const [status, setStatus] = React.useState('idle');
  const [templates, setTemplates] = React.useState([]);
  const [clients, setClients] = React.useState([]);
  const [currentTemplate, setCurrentTemplate] = React.useState(null);
  const [formData, setFormData] = React.useState({});
  const [docs, setDocs] = React.useState([]);
  const [pdfUrl, setPdfUrl] = React.useState(null);
  const [currentDocId, setCurrentDocId] = React.useState(null);
  const [pendingTemplate, setPendingTemplate] = React.useState(null); // for NewDocModal

  // Free editor
  const [freeTeX, setFreeTeX] = React.useState(FREE_STARTER_TEX);
  const [freePdfUrl, setFreePdfUrl] = React.useState(null);
  const [freeStatus, setFreeStatus] = React.useState('idle');
  const [freeErrorLog, setFreeErrorLog] = React.useState('');
  const [freeDocId] = React.useState('free-' + Math.random().toString(36).slice(2));

  // Template editor
  const [editorTemplate, setEditorTemplate] = React.useState(null);
  const [editorContent, setEditorContent] = React.useState('');
  const [editorSaving, setEditorSaving] = React.useState(false);
  const [editorPdfUrl, setEditorPdfUrl] = React.useState(null);
  const [editorStatus, setEditorStatus] = React.useState('idle');
  const [editorErrorLog, setEditorErrorLog] = React.useState('');
  const [editorDocId] = React.useState('tpl-prev-' + Math.random().toString(36).slice(2));

  // Assets
  const [assets, setAssets] = React.useState([]);

  // Toasts
  const [toasts, setToasts] = React.useState([]);

  // ── Effects ───────────────────────────────────────────────────────────────
  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('tecto_theme', theme);
  }, [theme]);

  React.useEffect(() => {
    if (token) checkAuth();
    else setAuthLoading(false);
  }, []);

  React.useEffect(() => {
    if (user) { loadTemplates(); loadDocs(); loadAssets(); loadClients(); }
  }, [user]);

  // ── apiFetch ──────────────────────────────────────────────────────────────
  const apiFetch = React.useCallback((url, opts = {}) => {
    const headers = { ...(opts.headers || {}) };
    if (token && !(opts.body instanceof FormData)) headers['Content-Type'] = headers['Content-Type'] || 'application/json';
    if (token) headers['Authorization'] = 'Bearer ' + token;
    return fetch(url, { ...opts, headers });
  }, [token]);

  // ── Auth ──────────────────────────────────────────────────────────────────
  const checkAuth = async () => {
    try {
      const r = await fetch('/auth/me', { headers: { Authorization: 'Bearer ' + localStorage.getItem('tecto_token') } });
      if (r.ok) {
        const u = await r.json();
        setUser(u);
      } else {
        localStorage.removeItem('tecto_token');
        setToken(null);
      }
    } catch(_) { setToken(null); }
    finally { setAuthLoading(false); }
  };

  const handleAuth = (tok, u) => {
    setToken(tok);
    setUser(u);
  };

  const logout = () => {
    localStorage.removeItem('tecto_token');
    setToken(null);
    setUser(null);
    setView('docs');
  };

  // ── Data loaders ──────────────────────────────────────────────────────────
  const loadTemplates = async () => {
    try { const r = await apiFetch('/templates'); if (r.ok) setTemplates(await r.json()); } catch(_) {}
  };
  const loadDocs = async () => {
    try { const r = await apiFetch('/docs'); if (r.ok) setDocs(await r.json()); } catch(_) {}
  };
  const loadAssets = async () => {
    try { const r = await apiFetch('/assets'); if (r.ok) setAssets(await r.json()); } catch(_) {}
  };
  const loadClients = async () => {
    try { const r = await apiFetch('/clients'); if (r.ok) setClients(await r.json()); } catch(_) {}
  };

  // ── Toast helper ──────────────────────────────────────────────────────────
  const pushToast = (t) => {
    const id = Math.random().toString(36).slice(2);
    setToasts(ts => [...ts, { ...t, id }]);
    setTimeout(() => setToasts(ts => ts.filter(x => x.id !== id)), 4500);
  };

  // ── Template selection — shows NewDocModal first ─────────────────────────
  const selectTemplate = async (tplId) => {
    try {
      const r = await apiFetch(`/templates/${tplId}`);
      if (!r.ok) throw new Error();
      const tpl = await r.json();
      setPendingTemplate(tpl);
    } catch(_) { pushToast({ tone:'danger', title:'Error', msg:'No se pudo cargar la plantilla.' }); }
  };

  // Called by NewDocModal on confirm
  const handleNewDocCreate = async ({ name, clientId, newClientName }) => {
    if (!pendingTemplate) return;
    try {
      let resolvedClientId = clientId;
      if (!clientId && newClientName) {
        const cr = await apiFetch('/clients', { method:'POST', body: JSON.stringify({ name: newClientName }) });
        if (cr.ok) { const c = await cr.json(); resolvedClientId = c.id; loadClients(); }
      }
      const defaults = {};
      for (const f of pendingTemplate.fields || []) defaults[f.key] = f.default || '';
      const dr = await apiFetch('/docs', { method:'POST', body: JSON.stringify({
        template_id: pendingTemplate.id, name, data: defaults, engine, client_id: resolvedClientId,
      })});
      if (!dr.ok) throw new Error('No se pudo crear el documento');
      const doc = await dr.json();
      setCurrentTemplate(pendingTemplate);
      setFormData(defaults);
      setCurrentDocId(doc.id);
      setPdfUrl(null); setStatus('idle');
      setPendingTemplate(null);
      setView('generator');
      loadDocs();
    } catch(e) { pushToast({ tone:'danger', title:'Error', msg: String(e) }); }
  };

  // ── Compile (generator) ───────────────────────────────────────────────────
  const compile = async () => {
    if (status === 'running' || !currentTemplate) return;
    setStatus('running'); setPdfUrl(null);
    try {
      const docId = currentDocId || ('doc-' + Math.random().toString(36).slice(2));
      setCurrentDocId(docId);
      const tex = renderTex(currentTemplate.tex_template, formData);
      const r = await apiFetch('/compile', { method:'POST', body: JSON.stringify({ id: docId, tex, engine }) });
      const c = await r.json();
      if (c.ok) {
        setPdfUrl(c.pdf_url + '?t=' + Date.now());
        setStatus('success');
        pushToast({ tone:'success', title:'PDF listo', msg:`Tectonic · ${c.ms}ms` });
        // Save form data back to the document so client_name persists
        if (docId) {
          apiFetch(`/docs/${docId}`, { method:'PUT', body: JSON.stringify({ data: formData }) }).catch(()=>{});
        }
        loadDocs();
      } else {
        setStatus('error');
        pushToast({ tone:'danger', title:'Error de compilación', msg:(c.log||'Fallo en Tectonic').slice(0,300) });
      }
    } catch(e) { setStatus('error'); pushToast({ tone:'danger', title:'Error', msg:String(e) }); }
  };

  // ── Compile (free editor) ─────────────────────────────────────────────────
  const compileFree = async () => {
    if (freeStatus === 'running') return;
    setFreeStatus('running'); setFreePdfUrl(null);
    try {
      const r = await apiFetch('/compile', { method:'POST', body: JSON.stringify({ id: freeDocId, tex: freeTeX, engine }) });
      const c = await r.json();
      if (c.ok) {
        setFreePdfUrl(c.pdf_url + '?t=' + Date.now());
        setFreeStatus('success');
        setFreeErrorLog('');
        pushToast({ tone:'success', title:'PDF listo', msg:`${c.ms}ms` });
      } else {
        setFreeStatus('error');
        setFreeErrorLog(c.log || '');
        pushToast({ tone:'danger', title:'Error', msg:(c.log||'Error en Tectonic').slice(0,200) });
      }
    } catch(e) { setFreeStatus('error'); pushToast({ tone:'danger', title:'Error', msg:String(e) }); }
  };

  // ── Compile (template preview) ────────────────────────────────────────────
  const compileTemplatePreview = async () => {
    if (!editorTemplate || editorStatus === 'running') return;
    setEditorStatus('running'); setEditorPdfUrl(null);
    try {
      const defaults = {};
      for (const f of editorTemplate.fields || []) defaults[f.key] = f.default || f.label || 'Ejemplo';
      const tex = renderTex(editorContent, defaults);
      const r = await apiFetch('/compile', { method:'POST', body: JSON.stringify({ id: editorDocId, tex, engine }) });
      const c = await r.json();
      if (c.ok) {
        setEditorPdfUrl(c.pdf_url + '?t=' + Date.now());
        setEditorStatus('success');
        setEditorErrorLog('');
      } else {
        setEditorStatus('error');
        setEditorErrorLog(c.log || '');
        pushToast({ tone:'danger', title:'Error de compilación', msg:(c.log||'Error').slice(0,200) });
      }
    } catch(e) { setEditorStatus('error'); }
  };

  // ── Save template ─────────────────────────────────────────────────────────
  const saveTemplate = async () => {
    if (!editorTemplate) return;
    setEditorSaving(true);
    try {
      const r = await apiFetch(`/templates/${editorTemplate.id}`, {
        method:'PUT', body: JSON.stringify({ tex_template: editorContent })
      });
      if (r.ok) {
        pushToast({ tone:'success', title:'Plantilla guardada', msg:editorTemplate.name });
        loadTemplates();
        // Reload the template so editorTemplate.fields reflects the auto-parsed fields
        const tr = await apiFetch(`/templates/${editorTemplate.id}`);
        if (tr.ok) { const tpl = await tr.json(); setEditorTemplate(tpl); }
      } else pushToast({ tone:'danger', title:'Error', msg:'No se pudo guardar' });
    } finally { setEditorSaving(false); }
  };

  // ── Open template editor ──────────────────────────────────────────────────
  const openEditor = async (tplId) => {
    try {
      const r = await apiFetch(`/templates/${tplId}`);
      if (!r.ok) throw new Error();
      const tpl = await r.json();
      setEditorTemplate(tpl);
      setEditorContent(tpl.tex_template || '');
      setEditorPdfUrl(null);
      setEditorStatus('idle');
      setView('templates');
    } catch(_) { pushToast({ tone:'danger', title:'Error', msg:'No se pudo cargar la plantilla.' }); }
  };

  // ── Create template ───────────────────────────────────────────────────────
  const createTemplate = async ({ name, category }) => {
    try {
      const starterTex = `\\documentclass[12pt]{article}\n\\usepackage[utf8]{inputenc}\n\\usepackage[T1]{fontenc}\n\\usepackage[a4paper,margin=2.5cm]{geometry}\n\\usepackage{xcolor}\n\\definecolor{acento}{HTML}{C75B12}\n\n\\begin{document}\n\n% Tu plantilla aqui\n% Variables: {{nombre_campo}}\n\n\\end{document}\n`;
      const r = await apiFetch('/templates', { method:'POST',
        body: JSON.stringify({ name, category, tex_template: starterTex, fields: [] }) });
      if (r.ok) {
        const d = await r.json();
        pushToast({ tone:'success', title:'Plantilla creada', msg:name });
        loadTemplates();
        openEditor(d.id);
      }
    } catch(_) { pushToast({ tone:'danger', title:'Error', msg:'No se pudo crear' }); }
  };

  // ── Delete template ───────────────────────────────────────────────────────
  const deleteTemplate = async (tplId) => {
    try {
      await apiFetch(`/templates/${tplId}`, { method:'DELETE' });
      pushToast({ tone:'success', title:'Plantilla eliminada', msg:'' });
      loadTemplates();
    } catch(_) {}
  };

  // ── Assets ────────────────────────────────────────────────────────────────
  const uploadAsset = async (e) => {
    const files = Array.from(e.target.files);
    for (const file of files) {
      const fd = new FormData(); fd.append('file', file);
      const r = await apiFetch('/assets', { method:'POST', body: fd });
      if (r.ok) pushToast({ tone:'success', title:'Asset subido', msg:file.name });
      else pushToast({ tone:'danger', title:'Error', msg:`No se pudo subir ${file.name}` });
    }
    loadAssets();
    e.target.value = '';
  };

  const deleteAsset = async (name) => {
    if (!confirm(`¿Eliminar "${name}"?`)) return;
    await apiFetch(`/assets/${name}`, { method:'DELETE' });
    pushToast({ tone:'success', title:'Asset eliminado', msg:name });
    loadAssets();
  };

  // ── Open existing document ────────────────────────────────────────────────
  const openDoc = async (docId) => {
    try {
      const r = await apiFetch(`/docs/${docId}`);
      if (!r.ok) throw new Error();
      const doc = await r.json();
      if (!doc.template_id) {
        pushToast({ tone:'warning', title:'Sin plantilla', msg:'Este documento no tiene plantilla asociada.' });
        return;
      }
      const tplR = await apiFetch(`/templates/${doc.template_id}`);
      if (!tplR.ok) throw new Error();
      const tpl = await tplR.json();
      setCurrentTemplate(tpl);
      setFormData(doc.data || {});
      setCurrentDocId(docId);
      setStatus('idle');
      // Check if PDF already exists
      const head = await fetch(`/download/${docId}`).catch(()=>null);
      setPdfUrl(head && head.ok ? `/download/${docId}?t=${Date.now()}` : null);
      setView('generator');
    } catch(_) {
      pushToast({ tone:'danger', title:'Error', msg:'No se pudo abrir el documento.' });
    }
  };

  // ── Delete document ───────────────────────────────────────────────────────
  const deleteDoc = async (docId, name) => {
    if (!confirm(`¿Eliminar "${name || docId.slice(0,8)}"?`)) return;
    await apiFetch(`/docs/${docId}`, { method:'DELETE' });
    pushToast({ tone:'success', title:'Documento eliminado', msg:'' });
    loadDocs();
  };

  // ── Navigation ────────────────────────────────────────────────────────────
  const goView = (v) => {
    setView(v);
    if (v === 'assets') loadAssets();
  };

  const { LeftRail, StatusBar } = window.TectoChrome;
  const { Docs } = window.TectoDocs;
  const { Toast } = window.TectoDS;

  const crumb = view === 'generator' && currentTemplate
    ? ['Documentos', currentTemplate.name]
    : view === 'editor' && editorTemplate
      ? ['Plantillas', editorTemplate.name]
      : CRUMBS[view] || [view];

  // ── Loading / Auth gate ───────────────────────────────────────────────────
  if (authLoading) return (
    <div style={{height:'100%',display:'flex',alignItems:'center',justifyContent:'center',background:'var(--bg)'}}>
      <window.TectoDS.Spinner size="lg" />
    </div>
  );

  if (!user) return <AuthCard screen={authScreen} setScreen={setAuthScreen} onAuth={handleAuth} />;

  // ── Main app ──────────────────────────────────────────────────────────────
  return (
    <div className="tk-app">
      <AppTopBar crumb={crumb} theme={theme} onToggleTheme={()=>setTheme(t=>t==='dark'?'light':'dark')}
        user={user} onProfile={()=>setView('perfil')} onLogout={logout} />
      <div className="tk-body">
        <LeftRail view={view} setView={goView} onLogout={logout} />
        <div className="tk-main">
          {view === 'docs' && (
            <DocumentosScreen templates={templates} docs={docs} onSelectTemplate={selectTemplate}
              onOpenDoc={openDoc} onDeleteDoc={deleteDoc} />
          )}
          {view === 'docview' && <Docs />}
          {view === 'generator' && (
            <DynamicGenerator
              template={currentTemplate} data={formData} setData={setFormData}
              status={status} pdfUrl={pdfUrl} onCompile={compile}
              onDownload={()=>pdfUrl?window.open(pdfUrl,'_blank'):pushToast({tone:'warning',title:'Sin PDF',msg:'Compila primero.'})}
            />
          )}
          {(view === 'templates' || view === 'editor') && (
            <PlantillasWorkspace
              templates={templates}
              selectedTemplate={editorTemplate}
              content={editorContent}
              setContent={setEditorContent}
              saving={editorSaving}
              onSave={saveTemplate}
              onSelect={openEditor}
              onCreate={createTemplate}
              onDelete={deleteTemplate}
              onCompile={compileTemplatePreview}
              compileStatus={editorStatus}
              previewUrl={editorPdfUrl}
              compileErrorLog={editorErrorLog}
            />
          )}
          {view === 'assets' && (
            <AssetsScreen assets={assets} onUpload={uploadAsset} onDelete={deleteAsset} />
          )}
          {view === 'libre' && (
            <FreeEditor
              tex={freeTeX} setTex={setFreeTeX}
              status={freeStatus} pdfUrl={freePdfUrl}
              onCompile={compileFree}
              onDownload={()=>freePdfUrl?window.open(freePdfUrl,'_blank'):pushToast({tone:'warning',title:'Sin PDF',msg:'Compila primero.'})}
              engine={engine} setEngine={setEngine}
              errorLog={freeErrorLog}
            />
          )}
          {view === 'settings' && (
            <SettingsScreen theme={theme} onToggleTheme={()=>setTheme(t=>t==='dark'?'light':'dark')} engine={engine} setEngine={setEngine} />
          )}
          {view === 'perfil' && (
            <ProfileScreen user={user} apiFetch={apiFetch} pushToast={pushToast} setUser={setUser} />
          )}
          {(view === 'templates' || view === 'editor') && <StatusBar engine={engine} />}
        </div>
      </div>
      <div className="tk-toasts">
        {toasts.map(t => (
          <Toast key={t.id} tone={t.tone} title={t.title} onClose={()=>setToasts(ts=>ts.filter(x=>x.id!==t.id))}>
            {t.msg}
          </Toast>
        ))}
      </div>
      {pendingTemplate && (
        <NewDocModal
          templateName={pendingTemplate.name}
          clients={clients}
          onClose={() => setPendingTemplate(null)}
          onCreate={handleNewDocCreate}
        />
      )}
    </div>
  );
}

window.TectoApp = { App };

(function mount() {
  if (!window.TectoApp) { setTimeout(mount, 30); return; }
  ReactDOM.createRoot(document.getElementById('root')).render(
    React.createElement(window.TectoApp.App)
  );
})();

})();
