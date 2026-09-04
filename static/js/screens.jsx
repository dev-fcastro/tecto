
(function injectScreensCSS() {
  if (document.getElementById('tecto-screens-css')) return;
  const css = `
/* App chrome */
.tk-app { height: 100%; display: flex; flex-direction: column; background: var(--bg); color: var(--ink); overflow: hidden; }
.tk-body { flex: 1; min-height: 0; display: flex; overflow: hidden; }
.tk-main { flex: 1; min-width: 0; display: flex; flex-direction: column; min-height: 0; overflow: hidden; }
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

/* Free editor */
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

/* Split pane divider */
.tk-split-divider { width: 5px; flex-shrink: 0; cursor: col-resize; background: var(--border); transition: background 150ms; user-select: none; }
.tk-split-divider:hover, .tk-split-divider:active { background: var(--accent); }

/* Plantillas categories */
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

/* Modal */
.tk-modal-ov { position:fixed;inset:0;background:rgba(0,0,0,.38);z-index:400;display:flex;align-items:center;justify-content:center; }
.tk-modal { background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-xl);box-shadow:var(--shadow-xl);padding:26px;width:420px;display:flex;flex-direction:column;gap:14px; }
.tk-modal__title { font-family:var(--font-serif);font-size:18px;font-weight:600;color:var(--ink-strong); }
.tk-modal__field { display:flex;flex-direction:column;gap:5px; }
.tk-modal__label { font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-muted); }
.tk-modal__input { height:36px;padding:0 10px;border-radius:var(--radius-md);border:1px solid var(--border-strong);background:var(--surface);color:var(--ink);font-family:var(--font-sans);font-size:13px;outline:none;width:100%; }
.tk-modal__input:focus { border-color:var(--accent);box-shadow:0 0 0 2px var(--accent-ring); }
.tk-modal__actions { display:flex;justify-content:flex-end;gap:8px;margin-top:4px; }

/* Shared workspace layout */
.tk-ws { flex: 1; min-height: 0; overflow: auto; background: var(--bg); }
.tk-ws__in { max-width: 960px; margin: 0 auto; padding: 30px 36px 70px; }
.tk-ws__head { display: flex; align-items: flex-end; gap: 14px; margin-bottom: 6px; }
.tk-ws__title { font-family: var(--font-serif); font-size: 28px; font-weight: 600; letter-spacing: -0.02em; color: var(--ink-strong); margin: 0; }
.tk-ws__sub { font-family: var(--font-sans); font-size: var(--text-sm); color: var(--ink-muted); margin: 3px 0 0; }
.tk-ws__sp { flex: 1; }
.tk-ws__sec { font-family: var(--font-mono); font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-subtle); margin: 28px 0 13px; }
`;
  const el = document.createElement('style');
  el.id = 'tecto-screens-css';
  el.textContent = css;
  document.head.appendChild(el);
})();

// ── NewDocModal ───────────────────────────────────────────────────────────────
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

// ── ItemsTable ────────────────────────────────────────────────────────────────
const ITEM_KEYS = new Set(['item_1_desc','item_1_hrs','item_1_total','item_2_desc','item_2_hrs','item_2_total',
  'item_3_desc','item_3_hrs','item_3_total','subtotal','itbis','total','total_doc']);

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

// ── SplitPane ─────────────────────────────────────────────────────────────────
function SplitPane({ left, right, defaultLeft = 50, minLeft = 20, maxLeft = 80 }) {
  const [leftPct, setLeftPct] = React.useState(defaultLeft);
  const containerRef = React.useRef(null);

  const onPointerDown = (e) => {
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (e.buttons !== 1) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = ((e.clientX - rect.left) / rect.width) * 100;
    setLeftPct(Math.min(maxLeft, Math.max(minLeft, pct)));
  };

  return (
    <div ref={containerRef} style={{ display:'flex', flex:1, minHeight:0, overflow:'hidden' }}>
      <div style={{ width:`${leftPct}%`, minHeight:0, overflow:'hidden', display:'flex', flexDirection:'column' }}>
        {left}
      </div>
      <div
        className="tk-split-divider"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
      />
      <div style={{ flex:1, minWidth:0, minHeight:0, overflow:'hidden', display:'flex', flexDirection:'column' }}>
        {right}
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
      <SplitPane
        left={
          <div style={{display:'flex',flexDirection:'column',flex:1,minHeight:0}}>
            <TexEditor value={tex} onChange={setTex} errorLog={errorLog} />
          </div>
        }
        right={
          <div className="tk-free__preview" style={{flex:1,position:'relative'}}>
            {pdfUrl
              ? <iframe src={pdfUrl} title="PDF libre" style={{width:'100%',height:'100%',border:'none'}} />
              : <div className="tk-dyn__empty"><I.Zap size={36}/><span>Escribe LaTeX y presiona Compilar</span></div>
            }
            {status==='running' && (
              <div className="tk-dyn__overlay" style={{position:'absolute',inset:0}}><window.TectoDS.Spinner size="lg"/><span>Compilando…</span></div>
            )}
          </div>
        }
      />
    </div>
  );
}

// ── PlantillasWorkspace ───────────────────────────────────────────────────────
function PlantillasWorkspace({
  templates, selectedTemplate, content, setContent,
  saving, onSave, onSelect, onCreate, onDelete,
  onCompile, compileStatus, previewUrl, compileErrorLog,
}) {
  const I = window.TectoIcons;
  const { Button, StatusPill } = window.TectoDS;
  const [showNew, setShowNew] = React.useState(false);
  const [newName, setNewName] = React.useState('');
  const [newCat, setNewCat] = React.useState('General');
  const [creating, setCreating] = React.useState(false);

  const fields = selectedTemplate ? (selectedTemplate.fields || []) : [];

  const insertVar = (key) => {
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

  const byCategory = {};
  templates.forEach(t => {
    const cat = t.category || 'General';
    if (!byCategory[cat]) byCategory[cat] = [];
    byCategory[cat].push(t);
  });

  return (
    <div style={{flex:1,minHeight:0,display:'flex'}}>

      {/* Left: template list */}
      <div style={{width:240,flex:'none',display:'flex',flexDirection:'column',background:'var(--surface)',borderRight:'1px solid var(--border)',minHeight:0}}>
        <div style={{display:'flex',alignItems:'center',gap:8,padding:'11px 12px 10px',borderBottom:'1px solid var(--border)',flex:'none'}}>
          <span style={{fontFamily:'var(--font-serif)',fontSize:15,fontWeight:600,color:'var(--ink-strong)',flex:1}}>Plantillas</span>
          <button title="Nueva plantilla"
            onClick={()=>setShowNew(v=>!v)}
            style={{width:26,height:26,borderRadius:'var(--radius-sm)',border:'1px solid var(--border)',background:'transparent',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--ink-muted)'}}>
            <I.Plus size={14}/>
          </button>
        </div>

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

      <SplitPane
        defaultLeft={57}
        left={
          <div style={{flex:1,minHeight:0,display:'flex',flexDirection:'column'}}>
            {selectedTemplate ? (
              <React.Fragment>
                <div className="tk-dyn__bar" style={{borderBottom:'1px solid var(--border)'}}>
                  <I.PanelLeft size={15} style={{color:'var(--ink-muted)'}}/>
                  <span style={{fontFamily:'var(--font-mono)',fontSize:13,color:'var(--ink-strong)',fontWeight:500}}>{selectedTemplate.id}.tex</span>
                  <span style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--ink-subtle)',marginLeft:4}}>
                    ({content.split('\n').length} líneas)
                  </span>
                  <div className="tk-dyn__sp"/>
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
        }
        right={
          <div style={{flex:1,minHeight:0,display:'flex',flexDirection:'column',background:'var(--bg-subtle)'}}>
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
                ? <iframe src={previewUrl} title="Preview" style={{width:'100%',height:'100%',border:'none'}}/>
                : <div className="tk-dyn__empty"><I.Layout size={36}/><span>Previsualiza con datos de ejemplo</span></div>
              }
              {compileStatus==='running' && (
                <div className="tk-dyn__overlay" style={{position:'absolute',inset:0}}>
                  <window.TectoDS.Spinner size="lg"/><span>Compilando…</span>
                </div>
              )}
            </div>
          </div>
        }
      />

      <style>{`
        .tpl-del-btn:hover { opacity: 1 !important; color: var(--danger-fg) !important; }
        .tk-doc-row:hover .tk-doc-del { opacity: 1 !important; }
      `}</style>
    </div>
  );
}

// ── DocumentosScreen ──────────────────────────────────────────────────────────
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

  const docsByTpl = {};
  docs.forEach(d => {
    const tplId = d.template_id || '__none__';
    const client = (d.client_name || '').trim() || 'Sin cliente';
    if (!docsByTpl[tplId]) docsByTpl[tplId] = {};
    if (!docsByTpl[tplId][client]) docsByTpl[tplId][client] = [];
    docsByTpl[tplId][client].push(d);
  });

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

                      <div style={{display:'flex',alignItems:'center',gap:10,padding:'10px 14px',borderBottom: tplOpen ? '1px solid var(--border)' : 'none'}}>
                        <div onClick={()=>toggle('tpl:'+tpl.id)} style={{display:'flex',alignItems:'center',gap:10,flex:1,cursor:'pointer'}}>
                          <span style={{width:10,height:10,borderRadius:3,background:tpl.color||'#1f3a5f',flex:'none'}}/>
                          <I.Chevron size={14} style={{transform:tplOpen?'rotate(90deg)':'rotate(0)',transition:'transform 150ms',color:'var(--ink-muted)',flex:'none'}}/>
                          <span style={{fontFamily:'var(--font-sans)',fontSize:14,fontWeight:600,color:'var(--ink-strong)'}}>{tpl.name}</span>
                          {totalDocs > 0 && (
                            <span style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--ink-subtle)',background:'var(--surface-sunken)',padding:'1px 7px',borderRadius:99}}>{totalDocs}</span>
                          )}
                        </div>
                        <button onClick={()=>onSelectTemplate(tpl.id)}
                          style={{display:'inline-flex',alignItems:'center',gap:5,padding:'4px 11px',
                            fontFamily:'var(--font-sans)',fontSize:12,fontWeight:600,
                            background:'var(--accent)',color:'var(--accent-on)',
                            border:'none',borderRadius:'var(--radius-md)',cursor:'pointer',
                            flexShrink:0}}>
                          <I.Plus size={13}/> Nuevo
                        </button>
                      </div>

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

  React.useEffect(() => {
    window._assetUploadHandler = onUpload;
    return () => { delete window._assetUploadHandler; };
  }, [onUpload]);

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

// ── ProfileScreen ─────────────────────────────────────────────────────────────
function ProfileScreen({ user, apiFetch, pushToast, setUser }) {
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

// ── AuthCard ──────────────────────────────────────────────────────────────────
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
    const normalizedEmail = email.trim();
    const normalizedCompany = company.trim();
    if (!normalizedEmail || !password) { setError('Email y contraseña son requeridos'); return; }
    if (screen === 'register' && !normalizedCompany) { setError('La empresa es requerida'); return; }
    setLoading(true); setError('');
    try {
      const url = screen === 'login' ? '/auth/login' : '/auth/register';
      const body = screen === 'login'
        ? { email: normalizedEmail, password }
        : { email: normalizedEmail, password, full_name: name.trim(), company: normalizedCompany };
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
              <Input label="Empresa / Organización" value={company} onChange={e=>setCompany(e.target.value)}
                required autoComplete="organization" name="organization" />
            </React.Fragment>
          )}
          <Input label="Correo electrónico" type="email" value={email} onChange={e=>setEmail(e.target.value)}
            required autoComplete="email" name="email" inputMode="email" autoCapitalize="none" spellCheck={false}
            iconLeft={<I.FileText size={15}/>} onKeyDown={e=>e.key==='Enter'&&submit()} />
          <Input label="Contraseña" type="password" value={password} onChange={e=>setPassword(e.target.value)}
            required autoComplete={screen==='login' ? 'current-password' : 'new-password'} name="password"
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

// ── AppTopBar ─────────────────────────────────────────────────────────────────
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

window.TectoScreens = {
  DynamicGenerator, FreeEditor, PlantillasWorkspace, DocumentosScreen,
  AssetsScreen, SettingsScreen, ProfileScreen, AuthCard, NewDocModal, AppTopBar,
};
