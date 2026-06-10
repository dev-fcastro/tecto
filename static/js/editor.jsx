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
.tk-caret { display: inline-block; width: 2px; height: 15px; background: var(--accent); margin-left: 1px; vertical-align: -2px; animation: tk-blink 1.1s steps(1) infinite; }
@keyframes tk-blink { 50% { opacity: 0; } }

.tk-tok-cmd     { color: var(--code-cmd); }
.tk-tok-brace   { color: var(--code-bracket); }
.tk-tok-math    { color: var(--code-math); }
.tk-tok-comment { color: var(--code-comment); font-style: italic; }
.tk-tok-string  { color: var(--code-string); }
.tk-tok-var { color: #e8b84b; font-weight: 600; }
.tk-tok-tecto-kw  { color: #5b9bd5; font-style: normal; font-weight: 600; }
.tk-tok-tecto-val { color: #6ec28a; font-style: italic; }

.tk-texed-wrap { display: flex; flex-direction: column; flex: 1; min-height: 0; }
.tk-texed__gutter::-webkit-scrollbar { display: none; }
.tk-texed__ta::-webkit-scrollbar { width: 8px; height: 8px; }
.tk-texed__ta::-webkit-scrollbar-track { background: transparent; }
.tk-texed__ta::-webkit-scrollbar-thumb { background: var(--border-strong); border-radius: 4px; }
.tk-texed__hl::-webkit-scrollbar { display: none; }
`;
  const el = document.createElement('style');
  el.id = 'tecto-kit-editor-css';
  el.textContent = css;
  document.head.appendChild(el);
})();

function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function tokenize(line) {
  const out = [];
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

function TexEditor({ value, onChange, errorLog = '' }) {
  const taRef  = React.useRef(null);
  const gutRef = React.useRef(null);
  const hlRef  = React.useRef(null);

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

  const syncScroll = () => {
    const ta = taRef.current;
    if (!ta) return;
    if (gutRef.current) gutRef.current.scrollTop = ta.scrollTop;
    if (hlRef.current) { hlRef.current.scrollTop = ta.scrollTop; hlRef.current.scrollLeft = ta.scrollLeft; }
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

  const highlightedHTML = React.useMemo(() => {
    return (value || '').split('\n').map(line => {
      const toks = tokenize(line);
      return toks.map(tk => tk.c ? `<span class="${tk.c}">${escHtml(tk.t)}</span>` : escHtml(tk.t)).join('');
    }).join('\n');
  }, [value]);

  const lines    = (value || '').split('\n');
  const errLines = Object.entries(errorMap).sort(([a],[b]) => +a - +b);
  const LINE_H   = 21;  // must match textarea line-height
  const PT       = 12;  // padding-top — same in gutter and textarea
  const GW       = 46;  // gutter width (fits up to 4-digit numbers)

  return (
    <div style={{ display:'flex', flexDirection:'column', flex:1, minHeight:0 }}>
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

        <div style={{ position:'relative', flex:1, minWidth:0, overflow:'hidden' }}>
          <div
            ref={hlRef}
            aria-hidden="true"
            className="tk-texed__hl"
            dangerouslySetInnerHTML={{ __html: highlightedHTML }}
            style={{ position:'absolute', inset:0, pointerEvents:'none',
              overflow:'scroll', scrollbarWidth:'none', msOverflowStyle:'none',
              padding:`${PT}px 16px 40px`, fontFamily:'var(--font-mono)', fontSize:13, lineHeight:LINE_H+'px',
              whiteSpace:'pre', color:'var(--code-text)', boxSizing:'border-box' }}
          />
          <textarea
            ref={taRef}
            className="tk-texed__ta"
            value={value || ''}
            onChange={e => onChange(e.target.value)}
            onScroll={syncScroll}
            onKeyDown={onKeyDown}
            spellCheck={false}
            autoCorrect="off"
            autoCapitalize="off"
            style={{ position:'absolute', inset:0,
              padding:`${PT}px 16px 40px`,
              fontFamily:'var(--font-mono)', fontSize:13, lineHeight:LINE_H+'px',
              color:'transparent', caretColor:'var(--code-text)', background:'transparent',
              border:'none', outline:'none', resize:'none',
              overflowY:'auto', overflowX:'auto',
              tabSize:2, whiteSpace:'pre', boxSizing:'border-box' }}
          />
        </div>
      </div>

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

window.TectoEditor = { TexEditor };
