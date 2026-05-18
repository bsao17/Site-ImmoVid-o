// Shared sketchy/wireframe primitives for the ACN wireframes.
// Low-fi vibe — solid black ink lines on cream paper, single accent color per
// direction, handwritten annotations.

const WF = {
  paper: '#fafaf7',
  ink: '#1a1a1a',
  inkDim: '#6b6b6b',
  inkFaint: '#cfcdc7',
  hand: '"Caveat", "Comic Sans MS", cursive',
  ui: '"Inter", system-ui, sans-serif',
  serif: '"Fraunces", "Playfair Display", Georgia, serif',
};

// ── Photo placeholder ────────────────────────────────────────────────────────
// A box with diagonal cross-hatch indicating "image goes here", plus an optional
// caption. The pattern is an inline SVG data-URI so it works without any setup.
const photoPattern = `url("data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'>
    <path d='M0 40 L40 0 M-10 10 L10 -10 M30 50 L50 30' stroke='#1a1a1a' stroke-width='0.6' stroke-opacity='0.18' fill='none'/>
  </svg>`
)}")`;

function WPhoto({ children, label, style, dim, dashed, accent, ...rest }) {
  return (
    <div
      style={{
        position: 'relative',
        background: dim ? '#ececea' : '#f0eee8',
        backgroundImage: photoPattern,
        border: `${dashed ? '1.5px dashed' : '1.5px solid'} ${accent || WF.ink}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: WF.inkDim,
        fontFamily: WF.ui,
        fontSize: 11,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        overflow: 'hidden',
        ...style,
      }}
      {...rest}
    >
      {/* corner crosses to make it feel sketchy */}
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.4 }}>
        <line x1="0" y1="0" x2="100" y2="100" stroke={accent || WF.ink} strokeWidth="0.3" />
        <line x1="100" y1="0" x2="0" y2="100" stroke={accent || WF.ink} strokeWidth="0.3" />
      </svg>
      <div style={{ position: 'relative', textAlign: 'center', lineHeight: 1.3 }}>
        {label || 'photo'}
        {children}
      </div>
    </div>
  );
}

// ── Generic box (text placeholder lines) ─────────────────────────────────────
function WLine({ w = '100%', h = 8, mb = 6, opacity = 1, color }) {
  return (
    <div
      style={{
        width: w,
        height: h,
        background: color || WF.ink,
        marginBottom: mb,
        opacity,
        borderRadius: h / 2,
      }}
    />
  );
}

function WLines({ count = 3, widths, color }) {
  const ws = widths || ['100%', '95%', '70%'];
  return (
    <div>
      {Array.from({ length: count }).map((_, i) => (
        <WLine key={i} w={ws[i % ws.length]} h={6} mb={6} opacity={0.5} color={color} />
      ))}
    </div>
  );
}

// ── Handwritten annotation with optional arrow ───────────────────────────────
function WNote({ children, style, accent }) {
  return (
    <div
      style={{
        fontFamily: WF.hand,
        fontSize: 18,
        color: accent || '#b8351c',
        lineHeight: 1.05,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// Curly arrow drawn in SVG — points from anchor to label area
function WArrow({ width = 60, height = 40, dir = 'rightDown', accent }) {
  const c = accent || '#b8351c';
  // Different presets
  const paths = {
    rightDown: 'M2 4 C 20 4, 30 18, 56 34',
    leftDown: 'M58 4 C 40 4, 30 18, 4 34',
    rightUp: 'M2 36 C 20 36, 30 22, 56 6',
    leftUp: 'M58 36 C 40 36, 30 22, 4 6',
    down: 'M30 2 C 30 14, 30 18, 30 36',
  };
  const tip = {
    rightDown: 'M50 28 L56 34 L48 36',
    leftDown: 'M10 28 L4 34 L12 36',
    rightUp: 'M50 12 L56 6 L48 4',
    leftUp: 'M10 12 L4 6 L12 4',
    down: 'M24 30 L30 36 L36 30',
  };
  return (
    <svg width={width} height={height} viewBox="0 0 60 40" style={{ overflow: 'visible' }}>
      <path d={paths[dir]} stroke={c} strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d={tip[dir]} stroke={c} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Sketchy button ───────────────────────────────────────────────────────────
function WBtn({ children, primary, accent, style, ...rest }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '8px 16px',
        fontFamily: WF.ui,
        fontWeight: 600,
        fontSize: 12,
        background: primary ? (accent || WF.ink) : 'transparent',
        color: primary ? WF.paper : WF.ink,
        border: `1.5px solid ${accent || WF.ink}`,
        borderRadius: 22,
        whiteSpace: 'nowrap',
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}

// ── Sketchy section divider with a label ─────────────────────────────────────
function WSectionTag({ children, color }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        fontFamily: WF.ui,
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: color || WF.inkDim,
      }}
    >
      <span style={{ width: 24, height: 1, background: color || WF.inkDim }}></span>
      {children}
    </div>
  );
}

// ── Frame wrapper for whole wireframe page ───────────────────────────────────
function WPage({ children, accent }) {
  return (
    <div
      style={{
        background: WF.paper,
        color: WF.ink,
        fontFamily: WF.ui,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
        // subtle paper texture
        backgroundImage:
          `radial-gradient(circle at 20% 30%, rgba(0,0,0,0.012) 0, transparent 50%), radial-gradient(circle at 80% 70%, rgba(0,0,0,0.012) 0, transparent 50%)`,
      }}
    >
      {children}
    </div>
  );
}

// ── Nav placeholder ──────────────────────────────────────────────────────────
function WNav({ logo = 'ACN.', items = ['Prestations', 'Immobilier PAP', 'Tarifs', 'Portfolio', 'Blog'], accent, dark }) {
  const fg = dark ? WF.paper : WF.ink;
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '18px 36px',
        borderBottom: `1px solid ${dark ? 'rgba(255,255,255,0.15)' : WF.inkFaint}`,
        background: dark ? WF.ink : 'transparent',
        color: fg,
      }}
    >
      <div style={{ fontFamily: WF.ui, fontWeight: 800, fontSize: 18, letterSpacing: '-0.02em' }}>
        {logo}
        <span style={{ color: accent || WF.ink }}>.</span>
      </div>
      <div style={{ display: 'flex', gap: 22, fontSize: 11, fontWeight: 500, color: dark ? 'rgba(255,255,255,0.7)' : WF.inkDim }}>
        {items.map((x) => (
          <span key={x}>{x}</span>
        ))}
      </div>
      <WBtn primary accent={accent} style={dark ? { background: WF.paper, color: WF.ink, borderColor: WF.paper } : null}>
        Devis 24h
      </WBtn>
    </div>
  );
}

Object.assign(window, { WF, WPhoto, WLine, WLines, WNote, WArrow, WBtn, WSectionTag, WPage, WNav });
