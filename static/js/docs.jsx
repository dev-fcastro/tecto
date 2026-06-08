const React = window.React;

function Docs() {
  const [markdown, setMarkdown] = React.useState('# Cargando documentación...');

  React.useEffect(() => {
    fetch('/static/docs/help.md')
      .then(res => res.text())
      .then(text => setMarkdown(text))
      .catch(err => setMarkdown('# Error\nNo se pudo cargar la documentación.'));
  }, []);

  // Un parser muy básico para no depender de librerías externas pesadas
  const renderMarkdown = (md) => {
    const html = md
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
      .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
      .replace(/\*(.*)\*/gim, '<i>$1</i>')
      .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
      .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
      .replace(/\n$/gim, '<br />');

    return { __html: html };
  };

  return (
    <div className="tk-ws">
      <div className="tk-ws__in">
        <div className="tk-ws__head">
          <div>
            <h1 className="tk-ws__title">Documentación</h1>
            <p className="tk-ws__sub">Guías, referencias y flujos de trabajo de Tecto.</p>
          </div>
        </div>
        <div className="tk-rows" style={{ padding: '24px', lineHeight: '1.6' }}>
            <div dangerouslySetInnerHTML={renderMarkdown(markdown)} />
        </div>
      </div>
    </div>
  );
}

window.TectoDocs = { Docs };
