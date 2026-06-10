
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

function Row({ k, v, muted }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, fontSize: 11 }}>
      <span style={{ color: muted }}>{k}</span>
      <span style={{ fontFamily: 'var(--font-mono)' }}>{v}</span>
    </div>
  );
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

window.TectoCorp = { CotizacionDoc, fmtMoney, totals, DEFAULT_BRAND, DEFAULT_DATA };
