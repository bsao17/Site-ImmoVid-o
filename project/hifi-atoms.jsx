// Hi-fi atoms for the ACN site — design tokens, primitives, logo.
// Direction D — Bold Cinema Dynamique.

// ── Density tokens ───────────────────────────────────────────────────────────
const densityTokens = {
  compact: { padY: 48, padX: 28, gap: 12, fontMul: 0.92, heroPad: 28, headlineMul: 0.92 },
  standard: { padY: 88, padX: 56, gap: 16, fontMul: 1.0, heroPad: 56, headlineMul: 1.0 },
  comfy: { padY: 120, padX: 76, gap: 22, fontMul: 1.06, heroPad: 76, headlineMul: 1.08 },
};

// ── Palette presets ──────────────────────────────────────────────────────────
const palettes = {
  // [brand, brandSoft (light bg), brandTextOnSoft]
  orange: ['#ff5a1f', '#fff1ea', '#b3340a'],
  blue:   ['#2563eb', '#eaf0ff', '#1d3fad'],
  green:  ['#10b981', '#e6f8f1', '#067a55'],
  red:    ['#dc2626', '#fdecec', '#9d1414'],
  amber:  ['#f59e0b', '#fff5e0', '#a26a04'],
};

// ── Logo ─────────────────────────────────────────────────────────────────────
function Logo({ size = 28, dark = false, withWord = true, brand = '#ff5a1f' }) {
  const ink = dark ? '#fff' : '#0a0a0a';
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      <svg width={size} height={size} viewBox="0 0 56 56" aria-label="ACN">
        <circle cx="28" cy="28" r="24" fill="none" stroke={ink} strokeWidth="3" />
        {Array.from({ length: 6 }).map((_, i) => {
          const a = (i * 60 - 90) * Math.PI / 180;
          const x1 = 28 + Math.cos(a) * 6;
          const y1 = 28 + Math.sin(a) * 6;
          const x2 = 28 + Math.cos(a) * 20;
          const y2 = 28 + Math.sin(a) * 20;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={ink} strokeWidth="3" strokeLinecap="round" />;
        })}
        <circle cx="28" cy="28" r="5.5" fill={brand} />
      </svg>
      {withWord && (
        <span style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 900,
          fontSize: Math.round(size * 0.62),
          letterSpacing: '-0.04em',
          color: ink,
          lineHeight: 1,
        }}>
          ACN<span style={{ color: brand }}>.</span>
        </span>
      )}
    </div>
  );
}

// ── Pill (rounded button) ────────────────────────────────────────────────────
function Pill({ children, variant = 'solid', size = 'md', onClick, href, icon, brand = '#ff5a1f', style }) {
  const sizes = {
    sm: { p: '8px 14px', fs: 11 },
    md: { p: '12px 20px', fs: 13 },
    lg: { p: '16px 26px', fs: 14 },
  };
  const s = sizes[size];
  const variants = {
    solid:   { bg: brand, color: '#fff', border: 'transparent' },
    dark:    { bg: '#0a0a0a', color: '#fff', border: 'transparent' },
    ghost:   { bg: 'transparent', color: '#0a0a0a', border: '#0a0a0a' },
    light:   { bg: '#fff', color: '#0a0a0a', border: 'transparent' },
    onDark:  { bg: 'rgba(255,255,255,0.1)', color: '#fff', border: 'rgba(255,255,255,0.3)' },
  };
  const v = variants[variant];
  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href}
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        padding: s.p,
        fontFamily: 'Inter, sans-serif',
        fontSize: s.fs,
        fontWeight: 700,
        borderRadius: 100,
        background: v.bg,
        color: v.color,
        border: `1.5px solid ${v.border}`,
        cursor: 'pointer',
        textDecoration: 'none',
        transition: 'transform .15s, box-shadow .15s, background .15s',
        whiteSpace: 'nowrap',
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-1px)';
        if (variant === 'solid') e.currentTarget.style.boxShadow = `0 8px 24px ${brand}55`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = '';
      }}
    >
      {children}
      {icon}
    </Tag>
  );
}

// ── Tag (chip) ───────────────────────────────────────────────────────────────
function Tag({ children, tone = 'brand', brand = '#ff5a1f', brandSoft = '#fff1ea', brandText = '#b3340a' }) {
  const tones = {
    brand: { bg: brandSoft, fg: brandText, border: 'transparent' },
    dark: { bg: '#0a0a0a', fg: '#fff', border: 'transparent' },
    ghost: { bg: 'transparent', fg: '#0a0a0a', border: '#0a0a0a' },
    light: { bg: 'rgba(255,255,255,0.15)', fg: '#fff', border: 'rgba(255,255,255,0.3)' },
    success: { bg: '#dcfce7', fg: '#15803d', border: 'transparent' },
    onDark: { bg: 'rgba(255,255,255,0.08)', fg: 'rgba(255,255,255,0.85)', border: 'rgba(255,255,255,0.18)' },
  };
  const t = tones[tone] || tones.brand;
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '5px 12px',
      borderRadius: 100,
      background: t.bg,
      color: t.fg,
      border: `1px solid ${t.border}`,
      fontFamily: 'Inter, sans-serif',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.04em',
      lineHeight: 1.4,
      whiteSpace: 'nowrap',
    }}>{children}</span>
  );
}

// ── Eyebrow ──────────────────────────────────────────────────────────────────
function Eyebrow({ children, num, brand = '#ff5a1f' }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
      {num && (
        <span style={{
          width: 28, height: 28, borderRadius: '50%',
          background: brand, color: '#fff',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 11, fontWeight: 800,
        }}>{num}</span>
      )}
      <span style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: 12, fontWeight: 700,
        letterSpacing: '0.18em', textTransform: 'uppercase',
        color: '#6b6b6b',
      }}>{children}</span>
    </div>
  );
}

// ── Count-up hook (animated stats on first scroll-in) ────────────────────────
function useCountUp(target, opts = {}) {
  const { duration = 1400, start = 0, decimals = 0 } = opts;
  const ref = React.useRef(null);
  const [val, setVal] = React.useState(start);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started) {
          started = true;
          const t0 = performance.now();
          const tick = (now) => {
            const p = Math.min(1, (now - t0) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(start + (target - start) * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);
  return [ref, decimals ? val.toFixed(decimals) : Math.round(val)];
}

// ── Photo helper ────────────────────────────────────────────────────────────
// Wraps an Unsplash photo with a thin shimmer placeholder + optional overlay.
function Photo({ src, alt, ratio, style, rounded = 20, overlay, kenburns }) {
  const wrap = {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: rounded,
    aspectRatio: ratio,
    background: '#e5e5e0',
    ...style,
  };
  return (
    <div style={wrap}>
      <img
        src={src}
        alt={alt || ''}
        loading="lazy"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transition: 'transform .8s ease',
          animation: kenburns ? 'kenburns 14s ease-in-out infinite alternate' : undefined,
        }}
      />
      {overlay}
    </div>
  );
}

// Add Ken Burns keyframes once
if (typeof document !== 'undefined' && !document.getElementById('acn-kf')) {
  const s = document.createElement('style');
  s.id = 'acn-kf';
  s.textContent = `
    @keyframes kenburns { 0% { transform: scale(1.02); } 100% { transform: scale(1.12); } }
    @keyframes marquee  { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
    @keyframes pulse    { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
    @keyframes fadeUp   { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: none; } }
    .acn-fadeup { animation: fadeUp .8s ease both; }
    /* Hide horizontal scrollbar on portfolio carousel */
    .acn-noscrollbar::-webkit-scrollbar { display: none; }
    .acn-noscrollbar { scrollbar-width: none; }
    /* Smooth scroll for anchor links */
    html { scroll-behavior: smooth; }
    /* Section heading wrap balance */
    .acn-h { text-wrap: balance; }
  `;
  document.head.appendChild(s);
}

Object.assign(window, {
  densityTokens, palettes,
  Logo, Pill, Tag, Eyebrow, useCountUp, Photo,
});
