
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
    { id: 'clients', label: 'Clientes', icon: I.Building },
    { id: 'templates', label: 'Plantillas', icon: I.Layout },
    { id: 'assets', label: 'Assets', icon: I.Image },
    { id: 'libre', label: 'Editor libre .tex', icon: I.Type },
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
