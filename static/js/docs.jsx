
(function injectDocsCSS() {
  if (document.getElementById('tecto-docs-css')) return;
  const css = `
.tk-doc-root { flex: 1; min-height: 0; display: flex; overflow: hidden; background: var(--bg); }

/* TOC */
.tk-doc-nav { width: 224px; flex: none; overflow-y: auto; background: var(--surface); border-right: 1px solid var(--border); padding: 22px 0 60px; }
.tk-doc-nav__hd { font-family: var(--font-mono); font-size: 9.5px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-subtle); padding: 0 18px 10px; }
.tk-doc-nav__btn { display: block; width: 100%; text-align: left; border: none; background: none; cursor: pointer; padding: 5px 18px; font-family: var(--font-sans); font-size: 13px; color: var(--ink-muted); border-left: 2px solid transparent; line-height: 1.55; box-sizing: border-box; }
.tk-doc-nav__btn:hover { color: var(--ink); background: var(--surface-hover); }
.tk-doc-nav__btn--active { color: var(--accent); border-left-color: var(--accent); font-weight: 600; }
.tk-doc-nav__btn--h3 { padding-left: 32px; font-size: 12px; }
.tk-doc-nav__sep { height: 1px; background: var(--border); margin: 8px 18px; }

/* Body */
.tk-doc-body { flex: 1; overflow-y: auto; }
.tk-doc-body-in { max-width: 760px; padding: 36px 52px 100px; }

/* Typography */
.tk-doc-h1 { font-family: var(--font-serif); font-size: 30px; font-weight: 600; letter-spacing: -0.02em; color: var(--ink-strong); margin: 0 0 8px; }
.tk-doc-lead { font-size: 15px; color: var(--ink-muted); margin: 0 0 30px; line-height: 1.65; font-family: var(--font-sans); }
.tk-doc-h2 { font-family: var(--font-serif); font-size: 22px; font-weight: 600; color: var(--ink-strong); margin: 44px 0 12px; padding-top: 44px; border-top: 1px solid var(--border); scroll-margin-top: 16px; }
.tk-doc-h3 { font-family: var(--font-sans); font-size: 14px; font-weight: 700; color: var(--ink-strong); margin: 24px 0 8px; scroll-margin-top: 16px; }
.tk-doc-p { font-size: 14px; color: var(--ink); line-height: 1.78; margin: 0 0 14px; font-family: var(--font-sans); }
.tk-doc-ic { font-family: var(--font-mono); font-size: 12.5px; background: var(--surface-sunken); border: 1px solid var(--border); border-radius: 3px; padding: 1px 5px; color: var(--code-cmd); white-space: nowrap; }
.tk-doc-a { color: var(--accent); text-decoration: none; }
.tk-doc-a:hover { text-decoration: underline; }
.tk-doc-body-in strong { font-weight: 600; color: var(--ink-strong); }

/* Code block */
.tk-doc-code { margin: 10px 0 18px; border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; }
.tk-doc-code--prerst { border-radius: var(--radius-lg) var(--radius-lg) 0 0; margin-bottom: 0; }
.tk-doc-code__bar { display: flex; align-items: center; justify-content: space-between; padding: 7px 14px; background: var(--surface-sunken); border-bottom: 1px solid var(--border); }
.tk-doc-code__lang { font-family: var(--font-mono); font-size: 9.5px; font-weight: 700; letter-spacing: 0.09em; text-transform: uppercase; color: var(--ink-subtle); }
.tk-doc-code__copy { font-family: var(--font-mono); font-size: 11px; padding: 3px 10px; border: 1px solid var(--border); border-radius: var(--radius-sm); background: var(--surface); color: var(--ink-muted); cursor: pointer; transition: color 120ms, border-color 120ms; }
.tk-doc-code__copy:hover { color: var(--ink); }
.tk-doc-code__copy--ok { color: var(--accent) !important; border-color: var(--accent) !important; }
.tk-doc-code__pre { margin: 0; padding: 14px 16px; background: var(--code-bg); font-family: var(--font-mono); font-size: 13px; line-height: 1.65; color: var(--code-text); overflow-x: auto; white-space: pre; }

/* Result block */
.tk-doc-result { margin: 0 0 20px; border: 1px solid var(--border); border-top: 2px solid color-mix(in srgb, var(--accent) 35%, var(--border)); border-radius: 0 0 var(--radius-lg) var(--radius-lg); padding: 10px 16px 12px; background: color-mix(in srgb, var(--accent) 5%, var(--bg)); }
.tk-doc-result__lbl { display: flex; align-items: center; gap: 5px; font-family: var(--font-mono); font-size: 9.5px; font-weight: 700; letter-spacing: 0.09em; text-transform: uppercase; color: var(--accent); margin-bottom: 6px; }
.tk-doc-result__body { font-size: 13px; color: var(--ink); line-height: 1.68; font-family: var(--font-sans); }
.tk-doc-result__body p { margin: 0 0 4px; }

/* Blockquote */
.tk-doc-bq { border-left: 3px solid var(--accent); margin: 12px 0 20px; padding: 10px 16px; background: var(--accent-subtle-bg); border-radius: 0 var(--radius-md) var(--radius-md) 0; }
.tk-doc-bq p { margin: 0; font-size: 13.5px; line-height: 1.65; font-family: var(--font-sans); color: var(--ink); }

/* Table */
.tk-doc-tbl { width: 100%; border-collapse: collapse; margin: 10px 0 22px; font-size: 13.5px; }
.tk-doc-tbl th { background: var(--surface-sunken); font-family: var(--font-mono); font-size: 11px; font-weight: 600; letter-spacing: 0.04em; color: var(--ink-muted); padding: 8px 14px; text-align: left; border: 1px solid var(--border); }
.tk-doc-tbl td { padding: 7px 14px; border: 1px solid var(--border); color: var(--ink); vertical-align: top; line-height: 1.55; font-family: var(--font-sans); }
.tk-doc-tbl tr:nth-child(even) td { background: var(--surface-sunken); }

/* Lists */
.tk-doc-ul, .tk-doc-ol { margin: 4px 0 16px; padding-left: 24px; }
.tk-doc-ul li, .tk-doc-ol li { font-size: 14px; color: var(--ink); line-height: 1.78; margin-bottom: 4px; font-family: var(--font-sans); }

/* HR */
.tk-doc-hr { border: none; border-top: 1px solid var(--border); margin: 36px 0; }

/* Loading */
.tk-doc-loading { display: flex; align-items: center; justify-content: center; flex: 1; color: var(--ink-muted); font-family: var(--font-mono); font-size: 13px; }
`;
  const el = document.createElement('style');
  el.id = 'tecto-docs-css';
  el.textContent = css;
  document.head.appendChild(el);
})();

// ── Inline markdown → HTML ────────────────────────────────────────────────────
function inlineMd(text) {
  return text
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/\\\|/g, '&#124;')
    .replace(/`([^`]+)`/g, '<code class="tk-doc-ic">$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*\n]+)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a class="tk-doc-a" href="$2">$1</a>');
}

// ── Block parser ──────────────────────────────────────────────────────────────
function parseBlocks(md) {
  const lines = md.split('\n');
  const blocks = [];
  let i = 0;
  let codeSeq = 0;

  const slugify = t => t.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/^-+|-+$/g, '');

  while (i < lines.length) {
    const line = lines[i];

    // Heading
    const hm = line.match(/^(#{1,3})\s+(.*)/);
    if (hm) {
      blocks.push({ type: 'h' + hm[1].length, id: slugify(hm[2].replace(/[*`]/g, '')), text: hm[2] });
      i++; continue;
    }

    // HR
    if (/^---+$/.test(line.trim())) {
      blocks.push({ type: 'hr' });
      i++; continue;
    }

    // Code / result fence
    if (line.startsWith('```')) {
      const lang = line.slice(3).trim() || 'text';
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) { codeLines.push(lines[i]); i++; }
      i++; // closing ```
      const code = codeLines.join('\n');
      if (lang === 'result') {
        blocks.push({ type: 'result', text: code });
      } else {
        blocks.push({ type: 'code', lang, code, id: 'c' + (codeSeq++) });
      }
      continue;
    }

    // Table (GFM: leading |, separator on next line)
    if (line.trimStart().startsWith('|') && i + 1 < lines.length && /^[\|\s\-:]+$/.test(lines[i + 1])) {
      const headers = line.split('|').slice(1, -1).map(h => h.trim());
      i += 2;
      const rows = [];
      while (i < lines.length && lines[i].trimStart().startsWith('|')) {
        rows.push(lines[i].split('|').slice(1, -1).map(c => c.trim()));
        i++;
      }
      blocks.push({ type: 'table', headers, rows });
      continue;
    }

    // Blockquote
    if (line.startsWith('> ')) {
      const bqLines = [];
      while (i < lines.length && lines[i].startsWith('> ')) { bqLines.push(lines[i].slice(2)); i++; }
      blocks.push({ type: 'bq', text: bqLines.join(' ') });
      continue;
    }

    // Unordered list
    if (/^[-*]\s/.test(line)) {
      const items = [];
      while (i < lines.length && /^[-*]\s/.test(lines[i])) { items.push(lines[i].replace(/^[-*]\s/, '')); i++; }
      blocks.push({ type: 'ul', items });
      continue;
    }

    // Ordered list
    if (/^\d+\.\s/.test(line)) {
      const items = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) { items.push(lines[i].replace(/^\d+\.\s+/, '')); i++; }
      blocks.push({ type: 'ol', items });
      continue;
    }

    // Empty line
    if (line.trim() === '') { i++; continue; }

    // Paragraph — collect until a structural line
    const pLines = [];
    const isStructural = l =>
      l.trim() === '' || /^#{1,3}\s/.test(l) || l.startsWith('```') ||
      l.startsWith('> ') || /^[-*]\s/.test(l) || /^\d+\.\s/.test(l) ||
      /^---+$/.test(l.trim()) || l.trimStart().startsWith('|');
    while (i < lines.length && !isStructural(lines[i])) { pLines.push(lines[i]); i++; }
    if (pLines.length) blocks.push({ type: 'p', text: pLines.join(' ') });
  }

  // Mark: first p after h1 → lead; code followed by result → preResult
  if (blocks.length >= 2 && blocks[0].type === 'h1' && blocks[1].type === 'p') blocks[1].lead = true;
  for (let j = 0; j < blocks.length - 1; j++) {
    if (blocks[j].type === 'code' && blocks[j + 1].type === 'result') blocks[j].preResult = true;
  }

  return blocks;
}

// ── Block renderer ────────────────────────────────────────────────────────────
const LANG_LABEL = { latex: 'LaTeX', bash: 'Shell', sh: 'Shell', yaml: 'YAML', json: 'JSON', text: 'Texto', '': 'Texto' };

function Block({ b, nextIsResult, copied, onCopy }) {
  switch (b.type) {
    case 'h1': return <h1 id={b.id} className="tk-doc-h1">{b.text}</h1>;
    case 'h2': return <h2 id={b.id} className="tk-doc-h2" dangerouslySetInnerHTML={{ __html: inlineMd(b.text) }} />;
    case 'h3': return <h3 id={b.id} className="tk-doc-h3" dangerouslySetInnerHTML={{ __html: inlineMd(b.text) }} />;
    case 'p':  return <p className={b.lead ? 'tk-doc-lead' : 'tk-doc-p'} dangerouslySetInnerHTML={{ __html: inlineMd(b.text) }} />;
    case 'hr': return <hr className="tk-doc-hr" />;
    case 'bq': return <div className="tk-doc-bq"><p dangerouslySetInnerHTML={{ __html: inlineMd(b.text) }} /></div>;
    case 'ul': return <ul className="tk-doc-ul">{b.items.map((it, i) => <li key={i} dangerouslySetInnerHTML={{ __html: inlineMd(it) }} />)}</ul>;
    case 'ol': return <ol className="tk-doc-ol">{b.items.map((it, i) => <li key={i} dangerouslySetInnerHTML={{ __html: inlineMd(it) }} />)}</ol>;
    case 'table': return (
      <table className="tk-doc-tbl">
        <thead><tr>{b.headers.map((h, i) => <th key={i} dangerouslySetInnerHTML={{ __html: inlineMd(h) }} />)}</tr></thead>
        <tbody>{b.rows.map((row, ri) => <tr key={ri}>{row.map((cell, ci) => <td key={ci} dangerouslySetInnerHTML={{ __html: inlineMd(cell) }} />)}</tr>)}</tbody>
      </table>
    );
    case 'code': {
      const label = LANG_LABEL[b.lang] || b.lang;
      const ok = copied === b.id;
      return (
        <div className={`tk-doc-code${b.preResult ? ' tk-doc-code--prerst' : ''}`}>
          <div className="tk-doc-code__bar">
            <span className="tk-doc-code__lang">{label}</span>
            <button className={`tk-doc-code__copy${ok ? ' tk-doc-code__copy--ok' : ''}`}
              onClick={() => onCopy(b.code, b.id)}>
              {ok ? '✓ Copiado' : 'Copiar'}
            </button>
          </div>
          <pre className="tk-doc-code__pre">{b.code}</pre>
        </div>
      );
    }
    case 'result': return (
      <div className="tk-doc-result">
        <div className="tk-doc-result__lbl">
          <svg width="11" height="11" viewBox="0 0 12 12" fill="currentColor"><path d="M2 6.5 5 9.5 10 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
          Resultado
        </div>
        <div className="tk-doc-result__body" dangerouslySetInnerHTML={{ __html: inlineMd(b.text).replace(/\n/g, '<br/>') }} />
      </div>
    );
    default: return null;
  }
}

// ── Docs component ────────────────────────────────────────────────────────────
function Docs() {
  const [blocks, setBlocks] = React.useState(null);
  const [activeId, setActiveId] = React.useState('');
  const [copied, setCopied] = React.useState(null);
  const bodyRef = React.useRef(null);

  React.useEffect(() => {
    fetch('/static/docs/help.md')
      .then(r => r.ok ? r.text() : Promise.reject(r.status))
      .then(text => setBlocks(parseBlocks(text)))
      .catch(err => setBlocks([{ type: 'p', text: `Error al cargar la documentación (${err}).` }]));
  }, []);

  // Track active section via IntersectionObserver
  React.useEffect(() => {
    if (!blocks || !bodyRef.current) return;
    const body = bodyRef.current;
    const targets = body.querySelectorAll('h2[id], h3[id]');
    if (!targets.length) return;

    const obs = new IntersectionObserver(entries => {
      const hit = entries.find(e => e.isIntersecting);
      if (hit) setActiveId(hit.target.id);
    }, { root: body, rootMargin: '0px 0px -55% 0px', threshold: 0 });

    targets.forEach(t => obs.observe(t));
    return () => obs.disconnect();
  }, [blocks]);

  const toc = (blocks || []).filter(b => b.type === 'h2' || b.type === 'h3');

  const scrollTo = id => {
    bodyRef.current?.querySelector('#' + id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const copyCode = (code, id) => {
    const done = () => { setCopied(id); setTimeout(() => setCopied(null), 2200); };
    if (navigator.clipboard) { navigator.clipboard.writeText(code).then(done).catch(() => fallback(code, done)); }
    else { fallback(code, done); }
  };

  const fallback = (text, cb) => {
    const ta = document.createElement('textarea');
    Object.assign(ta.style, { position: 'fixed', opacity: '0' });
    ta.value = text;
    document.body.appendChild(ta);
    ta.focus(); ta.select();
    try { document.execCommand('copy'); } catch {}
    document.body.removeChild(ta);
    cb();
  };

  if (!blocks) return <div className="tk-doc-loading">Cargando documentación…</div>;

  return (
    <div className="tk-doc-root">
      <nav className="tk-doc-nav">
        <div className="tk-doc-nav__hd">Contenido</div>
        {toc.map((b, i) => (
          <button key={i}
            className={`tk-doc-nav__btn${b.type === 'h3' ? ' tk-doc-nav__btn--h3' : ''}${activeId === b.id ? ' tk-doc-nav__btn--active' : ''}`}
            onClick={() => scrollTo(b.id)}>
            {b.text.replace(/[*`]/g, '')}
          </button>
        ))}
      </nav>

      <div className="tk-doc-body" ref={bodyRef}>
        <div className="tk-doc-body-in">
          {blocks.map((b, i) => (
            <Block key={i} b={b}
              nextIsResult={i + 1 < blocks.length && blocks[i + 1].type === 'result'}
              copied={copied} onCopy={copyCode} />
          ))}
        </div>
      </div>
    </div>
  );
}

window.TectoDocs = { Docs };
