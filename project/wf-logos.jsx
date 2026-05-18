// Logo variants for ACN

function LogoBoard() {
  const variants = [
    {
      title: 'A — Wordmark actuel (raffiné)',
      sub: 'Ce qui existe sur le site, juste typé plus serré',
      render: () => (
        <div style={{ display: 'flex', alignItems: 'baseline' }}>
          <span style={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: 64, letterSpacing: '-0.05em' }}>ACN</span>
          <span style={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: 64, color: '#2563eb' }}>.</span>
        </div>
      ),
      bg: '#fff',
      ink: '#0a0a0a',
    },
    {
      title: 'B — Éditorial / serif',
      sub: 'Magazine, lettres espacées comme une masthead',
      render: () => (
        <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontWeight: 600, fontSize: 56, letterSpacing: '0.02em' }}>
          ACN<em style={{ color: '#b8351c', fontStyle: 'italic' }}>.</em>
        </div>
      ),
      bg: '#fafaf7',
      ink: '#0a0a0a',
    },
    {
      title: 'C — Monogramme cinéma',
      sub: 'Marque + sous-marque, frame cinéma, doré',
      render: () => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 64, height: 64, border: '2px solid #c9a961', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 8, background: '#c9a961', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0e0e0c', fontWeight: 800, fontSize: 22, fontFamily: '"Inter", sans-serif', letterSpacing: '-0.04em' }}>A</div>
          </div>
          <div>
            <div style={{ fontFamily: '"Inter", sans-serif', fontWeight: 700, fontSize: 28, letterSpacing: '0.15em', color: '#0e0e0c' }}>ACN</div>
            <div style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#888' }}>Studio · Est. 2023</div>
          </div>
        </div>
      ),
      bg: '#fafaf7',
      ink: '#0a0a0a',
    },
    {
      title: 'D — Pictogramme objectif',
      sub: 'Diaph + sigle, contemporain, scalable',
      render: () => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <svg width="56" height="56" viewBox="0 0 56 56">
            <circle cx="28" cy="28" r="24" fill="none" stroke="#0a0a0a" strokeWidth="2.5" />
            {Array.from({ length: 6 }).map((_, i) => {
              const a = (i * 60 - 90) * Math.PI / 180;
              const x1 = 28 + Math.cos(a) * 5;
              const y1 = 28 + Math.sin(a) * 5;
              const x2 = 28 + Math.cos(a) * 20;
              const y2 = 28 + Math.sin(a) * 20;
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" />;
            })}
            <circle cx="28" cy="28" r="5" fill="#ff5a1f" />
          </svg>
          <div>
            <div style={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: 32, letterSpacing: '-0.04em' }}>ACN</div>
            <div style={{ fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#888' }}>Production audiovisuelle</div>
          </div>
        </div>
      ),
      bg: '#fafaf7',
      ink: '#0a0a0a',
    },
    {
      title: 'E — Drone abstrait',
      sub: 'Forme = vol drone vu de dessus, joue le storytelling',
      render: () => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <svg width="64" height="56" viewBox="0 0 64 56">
            {/* drone arms (X) */}
            <line x1="10" y1="10" x2="54" y2="46" stroke="#0a0a0a" strokeWidth="3" strokeLinecap="round" />
            <line x1="54" y1="10" x2="10" y2="46" stroke="#0a0a0a" strokeWidth="3" strokeLinecap="round" />
            {/* propellers */}
            {[[10, 10], [54, 10], [10, 46], [54, 46]].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="7" fill="none" stroke="#0a0a0a" strokeWidth="2" />
            ))}
            {/* center body */}
            <rect x="22" y="20" width="20" height="16" rx="3" fill="#0a0a0a" />
            <circle cx="32" cy="28" r="3" fill="#7a5a3a" />
          </svg>
          <div style={{ fontFamily: '"Inter", sans-serif', fontWeight: 900, fontSize: 40, letterSpacing: '-0.05em' }}>
            ACN<span style={{ color: '#7a5a3a' }}>.</span>
          </div>
        </div>
      ),
      bg: '#fafaf7',
      ink: '#0a0a0a',
    },
    {
      title: 'F — Stencil cinéma',
      sub: 'Très brand-y, premium, comme un titre de film',
      render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <div style={{ fontSize: 9, letterSpacing: '0.5em', color: '#888' }}>— A FILM BY —</div>
          <div style={{
            fontFamily: '"Fraunces", Georgia, serif',
            fontWeight: 300,
            fontSize: 56,
            letterSpacing: '0.06em',
            background: '#0e0e0c',
            color: '#fafaf7',
            padding: '6px 22px',
          }}>
            A C N
          </div>
          <div style={{ fontSize: 9, letterSpacing: '0.45em', color: '#888', marginTop: 2 }}>STUDIO · 2023</div>
        </div>
      ),
      bg: '#fafaf7',
      ink: '#0a0a0a',
    },
  ];

  return (
    <div style={{
      background: '#fafaf7',
      width: '100%',
      height: '100%',
      padding: 32,
      fontFamily: WF.ui,
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16,
      alignContent: 'start',
    }}>
      {variants.map((v, i) => (
        <div key={i} style={{
          background: v.bg,
          border: `1px solid #e5e2da`,
          borderRadius: 18,
          padding: 20,
          minHeight: 200,
          display: 'flex',
          flexDirection: 'column',
        }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888' }}>Variante</div>
          <div style={{ fontSize: 13, fontWeight: 700, marginTop: 4, color: v.ink }}>{v.title}</div>
          <div style={{ fontSize: 11, color: '#888', marginTop: 4, lineHeight: 1.4 }}>{v.sub}</div>
          <div style={{
            flex: 1,
            marginTop: 16,
            border: `1px dashed #d6d1c0`,
            borderRadius: 12,
            padding: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#fff',
          }}>
            {v.render()}
          </div>
        </div>
      ))}
    </div>
  );
}

window.LogoBoard = LogoBoard;
