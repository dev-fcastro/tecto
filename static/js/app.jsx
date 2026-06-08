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
    { id: 'docview', label: 'Documentación', icon: I.FileText },
    { id: 'editor', label: 'Editor de plantilla', icon: I.PanelLeft },
  ];
  return (
    <div className="tk-rail">
      {items.map((it) => (
        <Tooltip key={it.id} label={it.label} side="bottom">
          <button className={'tk-rail__btn' + ((view === it.id || (view === 'generator' && it.id === 'docs')) ? ' tk-rail__btn--active' : '')} onClick={() => setView(it.id)} aria-label={it.label}>
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
/* Tecto UI Kit — code Editor pane (Monaco-like) with LaTeX highlighting. window.TectoEditor */
const React = window.React;

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
  let last = 0, m;
  while ((m = re.exec(line)) !== null) {
    if (m.index > last) out.push({ t: line.slice(last, m.index), c: null });
    let cls = null;
    if (m[1]) cls = 'tk-tok-comment';
    else if (m[2]) cls = 'tk-tok-cmd';
    else if (m[3]) cls = 'tk-tok-math';
    else if (m[4]) cls = 'tk-tok-brace';
    out.push({ t: m[0], c: cls });
    last = m.index + m[0].length;
  }
  if (last < line.length) out.push({ t: line.slice(last), c: null });
  return out;
}

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

window.TectoEditor = { Editor };

})();
/* --- Integration + App --- */
(() => {

const BRAND = {
  name: 'Synset Solutions',
  initials: 'SS',
  color: '#1f3a5f',
  tint: '#eef2f7',
  rfc: 'SYN850101AA1',
  address: 'Santo Domingo, RD',
  email: 'hola@synsetsolutions.com',
  tel: '+1 (809) 000-0000',
};

function buildTemplateData(formData) {
  const { totals } = window.TectoCorp;
  const t = totals(formData);
  const items = [
    { id: 'docs', label: 'Documentos', icon: I.Folder },
    { id: 'templates', label: 'Plantillas', icon: I.Layout },
    { id: 'assets', label: 'Assets', icon: I.Image },
    { id: 'docview', label: 'Documentación', icon: I.FileText },
    { id: 'editor', label: 'Editor de plantilla', icon: I.PanelLeft },
  ];
  while (items.length < 3) items.push({ desc: '', qty: 0, price: 0 });
  const fmt = (n) => n.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return {
    empresa_nombre: BRAND.name,
    empresa_direccion: BRAND.address,
    empresa_email: BRAND.email,
    empresa_tel: BRAND.tel,
    numero_cotizacion: formData.numero,
    fecha: formData.fecha,
    cliente_nombre: formData.cliente || '',
    cliente_empresa: formData.clienteEmpresa || '',
    cliente_email: formData.clienteEmail || '',
    descripcion_proyecto: formData.descripcion || '',
    item_1_desc: items[0].desc,
    item_1_hrs: String(items[0].qty),
    item_1_total: fmt(items[0].qty * items[0].price),
    item_2_desc: items[1].desc,
    item_2_hrs: String(items[1].qty),
    item_2_total: fmt(items[1].qty * items[1].price),
    item_3_desc: items[2].desc,
    item_3_hrs: String(items[2].qty),
    item_3_total: fmt(items[2].qty * items[2].price),
    subtotal: fmt(t.subtotal),
    itbis: fmt(t.iva),
    total: fmt(t.total),
    moneda: formData.moneda,
    condiciones_pago: formData.notas,
    validez: formData.validez,
  };
}

const today = new Date();
const pad = (n) => String(n).padStart(2, '0');
const todayStr = `${pad(today.getDate())} ${['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'][today.getMonth()]} ${today.getFullYear()}`;
const validStr = (() => {
  const v = new Date(today); v.setDate(v.getDate() + 15);
  return `${pad(v.getDate())} ${['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'][v.getMonth()]} ${v.getFullYear()}`;
})();

const DEFAULT_DATA = {
  numero: `${today.getFullYear()}${pad(today.getMonth()+1)}${pad(today.getDate())}-001`,
  fecha: todayStr,
  validez: validStr,
  cliente: '',
  clienteEmpresa: '',
  clienteEmail: '',
  descripcion: '',
  moneda: 'USD',
  iva: true,
  items: [{ desc: '', qty: 1, price: 0 }],
  notas: 'Validez de la oferta: 15 días. 50% de anticipo al inicio, 50% contra entrega.',
};

const escapeLaTeX = (val) => String(val)
  .replace(/·/g, '--').replace(/—/g, '---').replace(/–/g, '--')
  .replace(/\\/g, '\\textbackslash{}')
  .replace(/&/g,'\\&').replace(/%/g,'\\%').replace(/#/g,'\\#')
  .replace(/_/g,'\\_').replace(/\^/g,'\\^{}')
  .replace(/~/g,'\\textasciitilde{}');

const renderTex = (template, vars) => template.replace(/\{\{([^}]+)\}\}/g, (_, key) =>
  escapeLaTeX(vars[key.trim()] ?? ''));

/* Tecto UI Kit — app orchestrator: document workspace + generator + editor. window.TectoApp */
const React = window.React;

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

function Login({ onAuth }) {
  const I = window.TectoIcons;
  const { Button, Input } = window.TectoDS;
  return (
    <div className="tk-login">
      <div className="tk-login__card">
        <div className="tk-login__brand">
          <img className="tk-login__mark" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IlRlY3RvIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHJ4PSIxNCIgZmlsbD0iI2M3NWIxMiI+PC9yZWN0PgogIAogIDxnIGZpbGw9IiNmZmZmZmYiPgogICAgPHJlY3QgeD0iMTQiIHk9IjE3IiB3aWR0aD0iMzYiIGhlaWdodD0iNyIgcng9IjEuNSI+PC9yZWN0PgogICAgPHJlY3QgeD0iMjguNSIgeT0iMTciIHdpZHRoPSI3IiBoZWlnaHQ9IjMxIiByeD0iMS41Ij48L3JlY3Q+CiAgICAKICAgIDxyZWN0IHg9IjIxIiB5PSI0NC41IiB3aWR0aD0iMjIiIGhlaWdodD0iNCIgcng9IjEuNSI+PC9yZWN0PgogIDwvZz4KICAKICA8cGF0aCBkPSJNMCA0MCBIMjQgTDMxIDMzIEg2NCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4xNiIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIj48L3BhdGg+Cjwvc3ZnPg==" alt="Tecto" />
          <div className="tk-login__t">Tecto</div>
          <div className="tk-login__sub">GENERACIÓN DOCUMENTAL · SELF-HOSTED</div>
        </div>
        <div className="tk-login__fields">
          <Input label="Correo" defaultValue="tu@servidor.dev" iconLeft={<I.FileText size={15} />} />
          <Input label="Contraseña" type="password" defaultValue="latex" iconLeft={<I.Lock size={15} />} />
          <Button variant="primary" fullWidth onClick={onAuth} iconRight={<I.Chevron size={15} />}>Entrar</Button>
        </div>
        <div className="tk-login__foot">Instancia self-hosted · sólo para tu empresa</div>
      </div>
    </div>
  );
}

function EditorWorkspace({ status, onCompile, onDownload, engine, setEngine }) {
  const { Editor } = window.TectoEditor;
  const { PdfPreview } = window.TectoPreview;
  const { LINES } = window.TectoSample;
  return (
    <div className="tk-split">
      <Editor lines={LINES} activeLine={11} caretLine={23} />
      <PdfPreview status={status} onCompile={onCompile} onDownload={onDownload} engine={engine} setEngine={setEngine} />
    </div>
  );
}

const CRUMBS = {
  docs: ['Documentos'],
  docview: ['Documentación'],
  generator: ['Documentos', 'Nueva cotización'],
  templates: ['Plantillas'],
  assets: ['Assets'],
  editor: ['Plantillas', 'cotizacion.cls'],
  settings: ['Ajustes'],
};

function App() {
  const [authed, setAuthed] = React.useState(true);
  const [theme, setTheme] = React.useState('light');
  const [view, setView] = React.useState('generator');
  const [engine, setEngine] = React.useState('XeLaTeX');
  const [status, setStatus] = React.useState('success');
  const [data, setData] = React.useState(DEFAULT_DATA);
  const [pdfUrl, setPdfUrl] = React.useState(null);
  const [currentDocId, setCurrentDocId] = React.useState(null);
  const [toasts, setToasts] = React.useState([]);
  const timer = React.useRef(null);

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  const pushToast = (t) => {
    const id = Math.random().toString(36).slice(2);
    setToasts((ts) => [...ts, { ...t, id }]);
    setTimeout(() => setToasts((ts) => ts.filter((x) => x.id !== id)), 4200);
  };

  
  const compile = async () => {
    if (status === 'running') return;
    setStatus('running');
    setPdfUrl(null);
    try {
      const tplRes = await fetch('/templates/tpl-cotizacion');
      if (!tplRes.ok) throw new Error('No se pudo cargar la plantilla');
      const tpl = await tplRes.json();
      const tex = renderTex(tpl.tex_template, buildTemplateData(data));
      const docId = 'doc-' + Math.random().toString(36).slice(2);
      setCurrentDocId(docId);
      const compRes = await fetch('/compile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: docId, tex, engine }),
      });
      const comp = await compRes.json();
      if (comp.ok) {
        setPdfUrl(comp.pdf_url + '?t=' + Date.now());
        setStatus('success');
        pushToast({ tone: 'success', title: 'PDF listo', msg: `Tectonic · ${comp.ms}ms` });
      } else {
        setStatus('error');
        pushToast({ tone: 'danger', title: 'Error', msg: comp.log || 'Fallo en Tectonic' });
      }
    } catch (err) {
      setStatus('error');
      pushToast({ tone: 'danger', title: 'Error', msg: String(err) });
    }
  };


  const newDoc = (template) => {
    setView('generator');
    setStatus('success');
    if (template && template !== 'Cotización') {
      pushToast({ tone: 'brand', title: `Plantilla: ${template}`, msg: 'Misma mecánica — demo con Cotización.' });
    }
  };
  const openDoc = () => { setView('generator'); setStatus('success'); };
  const goView = (v) => { setView(v); if (v === 'editor' || v === 'generator') setStatus('success'); };

  const { TopBar, LeftRail, StatusBar } = window.TectoChrome;
  const { Settings } = window.TectoScreens;
  const { Docs } = window.TectoDocs;
  const { Documentos, Plantillas, Assets } = window.TectoWorkspace;
  const { Generator } = window.TectoGenerator;
  const { TemplateWorkspace } = window.TectoTemplate;
  const { Toast } = window.TectoDS;

  if (!authed) return <Login onAuth={() => { setAuthed(true); setView('generator'); }} />;

  return (
    <div className="tk-app">
      <TopBar crumb={CRUMBS[view]} theme={theme} onToggleTheme={toggleTheme} />
      <div className="tk-body">
        <LeftRail view={view} setView={goView} onLogout={() => setAuthed(false)} />
        <div className="tk-main">
          {view === 'docs' && <Documentos onNew={newDoc} onOpenDoc={openDoc} />}
          {view === 'docview' && <Docs />}
          {view === 'generator' && (
            <Generator data={data} setData={setData} status={status} pdfUrl={pdfUrl}
              onCompile={compile}
              onDownload={() => { if (pdfUrl) window.open(pdfUrl, "_blank"); else pushToast({ tone: "warning", title: "Sin PDF", msg: "Compila primero." }); }} />
          )}
          {view === 'templates' && <Plantillas onNew={newDoc} onEdit={(name) => { setView('editor'); setStatus('success'); if (name === 'nueva') pushToast({ tone: 'brand', title: 'Nueva plantilla', msg: 'Carpeta /plantillas/nueva/ — edita su .cls y sus campos.' }); }} />}
          {view === 'assets' && <Assets />}
          {view === 'editor' && (
            <TemplateWorkspace status={status} onCompile={compile}
              onDownload={() => pushToast({ tone: 'brand', title: 'Descargando…', msg: 'cotizacion-preview.pdf' })}
              onToast={pushToast} />
          )}
          {view === 'settings' && <Settings theme={theme} onToggleTheme={toggleTheme} engine={engine} setEngine={setEngine} />}
          {view === 'editor' && <StatusBar engine={engine} />}
        </div>
      </div>
      <div className="tk-toasts">
        {toasts.map((t) => (
          <Toast key={t.id} tone={t.tone} title={t.title} onClose={() => setToasts((ts) => ts.filter((x) => x.id !== t.id))}>{t.msg}</Toast>
        ))}
      </div>
    </div>
  );
}

window.TectoApp = { App, Login };


  (function mount() {
    if (!window.TectoApp) { setTimeout(mount, 30); return; }
    ReactDOM.createRoot(document.getElementById('root')).render(
      React.createElement(window.TectoApp.App)
    );
  })();
})();
