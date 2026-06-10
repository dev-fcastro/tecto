
(function injectAppCSS() {
  if (document.getElementById('tecto-app-css')) return;
  const css = `
.tk-app { height: 100%; display: flex; flex-direction: column; background: var(--bg); color: var(--ink); overflow: hidden; }
.tk-body { flex: 1; min-height: 0; display: flex; overflow: hidden; }
.tk-main { flex: 1; min-width: 0; display: flex; flex-direction: column; min-height: 0; overflow: hidden; }
.tk-toasts { position: fixed; right: 18px; bottom: 18px; z-index: 300; display: flex; flex-direction: column; gap: 10px; }
`;
  const el = document.createElement('style');
  el.id = 'tecto-app-css';
  el.textContent = css;
  document.head.appendChild(el);
})();

// ── LaTeX helpers ─────────────────────────────────────────────────────────────
const escapeLaTeX = (val) => {
  const v = String(val).replace(/·/g, '--').replace(/—/g, '---').replace(/–/g, '--');
  const escapeMap = {
    '\\': '\\textbackslash{}', '{': '\\{', '}': '\\}',
    '$': '\\$', '&': '\\&', '%': '\\%', '#': '\\#',
    '_': '\\_', '^': '\\^{}', '~': '\\textasciitilde{}'
  };
  return v.replace(/[\\{}$&%#_^~]/g, (m) => escapeMap[m]);
};

const renderTex = (template, vars) => {
  const lines = template.split('\n');
  return lines.map(line => {
    const isTectoComment = line.trim().startsWith('%%');
    return line.replace(/\{\{([^{}]+)\}\}/g, (_, raw) => {
      const parts = raw.trim().split('|');
      const key = parts[0].trim();
      
      // Definition in a comment line -> remove from output (it's metadata)
      if (isTectoComment && parts.length > 1) return "";
      
      const val = escapeLaTeX(vars[key] ?? '');
      if (isTectoComment) {
        return val.replace(/\n/g, '\n%% ');
      }
      return val;
    });
  }).join('\n');
};

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

// ── Route crumbs ──────────────────────────────────────────────────────────────
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

// ── App ───────────────────────────────────────────────────────────────────────
function App() {
  const {
    DynamicGenerator, FreeEditor, PlantillasWorkspace, DocumentosScreen,
    AssetsScreen, SettingsScreen, ProfileScreen, AuthCard, NewDocModal, AppTopBar,
  } = window.TectoScreens;
  const { LeftRail, StatusBar } = window.TectoChrome;
  const { Docs } = window.TectoDocs;
  const { Toast } = window.TectoDS;

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
  const [pendingTemplate, setPendingTemplate] = React.useState(null);
  const autoSaveTimeout = React.useRef(null);

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
    if (!currentDocId || view !== 'generator') return;
    if (autoSaveTimeout.current) clearTimeout(autoSaveTimeout.current);
    autoSaveTimeout.current = setTimeout(() => {
      apiFetch(`/docs/${currentDocId}`, { method:'PUT', body: JSON.stringify({ data: formData }) }).catch(()=>{});
    }, 1500);
    return () => clearTimeout(autoSaveTimeout.current);
  }, [formData, currentDocId, view]);

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

  // ── Template selection — shows NewDocModal first ──────────────────────────
  const selectTemplate = async (tplId) => {
    try {
      const r = await apiFetch(`/templates/${tplId}`);
      if (!r.ok) throw new Error();
      const tpl = await r.json();
      setPendingTemplate(tpl);
    } catch(_) { pushToast({ tone:'danger', title:'Error', msg:'No se pudo cargar la plantilla.' }); }
  };

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
