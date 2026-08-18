// Hi-fi sections (bottom): Portfolio, Process, Pricing, Zone, Blog, CTA, Footer.

// ── PORTFOLIO — YouTube showreel ────────────────────────────────────────────
function Portfolio({ brand, brandSoft, brandText }) {
  return (
    <section id="portfolio" style={{ padding: 'var(--pad-y) var(--pad-x)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: 32 }}>
          <Eyebrow num="03" brand={brand}>Showreel</Eyebrow>
          <h2 className="acn-h" style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 900, letterSpacing: '-0.035em', lineHeight: 1, margin: 0 }}>
            Découvrez nos <span style={{ color: brand }}>réalisations</span>.
          </h2>
          <p style={{ marginTop: 12, color: '#6b6b6b', fontSize: 15 }}>
            Une sélection de nos meilleurs films immobiliers — drone, visite vidéo et montage professionnel.
          </p>
        </div>
        <div style={{ position: 'relative', width: '100%', borderRadius: 24, overflow: 'hidden', aspectRatio: '16/9', background: '#0a0a0a', boxShadow: '0 20px 60px rgba(0,0,0,0.25)' }}>
          <iframe
            src="https://www.youtube.com/embed/tx6sB9V18x4"
            title="Showreel ImmoVidéo"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

// ── PROCESS ──────────────────────────────────────────────────────────────────
function Process({ brand, brandSoft, brandText }) {
  const steps = [
    { n: 1, t: 'Prise de contact', d: 'Vous nous décrivez vos besoins et votre projet. Pas de devis pour l\'instant — on écoute.' },
    { n: 2, t: 'Repérage', d: 'On finalise le projet ensemble et vous recevez un devis chiffré, clair et détaillé.' },
    { n: 3, t: 'Tournage', d: 'Réalisation : vidéo, photos, réseaux sociaux, site internet dédié au bien (selon option choisie).' },
    { n: 4, t: 'Présentation', d: 'Livraison des livrables et mise en production du site — votre bien est prêt à être vendu.' },
  ];
  return (
    <section style={{
      background: '#f3f1eb',
      padding: 'var(--pad-y) var(--pad-x)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: 48, maxWidth: 720 }}>
          <Eyebrow num="04" brand={brand}>Le déroulé</Eyebrow>
          <h2 className="acn-h" style={{
            fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 900, letterSpacing: '-0.035em', lineHeight: 1, margin: 0,
          }}>
            De zéro à <span style={{ color: brand }}>vendu</span> en 4 étapes.
          </h2>
        </div>

        {/* Progress line */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '8%', right: '8%', top: 36, height: 2, background: '#d6d3c8' }}></div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, position: 'relative' }}>
            {steps.map((s, i) => (
              <div key={i} style={{ textAlign: 'left' }}>
                <div style={{
                  width: 72, height: 72,
                  borderRadius: '50%',
                  background: '#0a0a0a',
                  color: '#fff',
                  border: '4px solid #f3f1eb',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 28, fontWeight: 900, letterSpacing: '-0.02em',
                  position: 'relative',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                }}>
                  {s.n}
                  <span style={{
                    position: 'absolute', top: -2, right: -2,
                    background: brand, color: '#fff',
                    width: 22, height: 22, borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 10, fontWeight: 800,
                    border: '2px solid #f3f1eb',
                  }}>✓</span>
                </div>
                <h3 style={{ margin: '14px 0 8px', fontSize: 22, fontWeight: 800, letterSpacing: '-0.02em' }}>{s.t}</h3>
                <p style={{ margin: 0, color: '#5a5a5a', fontSize: 14, lineHeight: 1.55 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── PRICING ──────────────────────────────────────────────────────────────────
function Pricing({ brand, brandSoft, brandText }) {
  const plans = [
    {
      n: 'Essentiel', p: 190, tag: null,
      sub: 'Pour un studio ou un T2 lumineux.',
      feats: ['Reportage photo HDR · 15 visuels', 'Retouche professionnelle', 'Livraison sous 48h', 'Formats web & print', 'Photo aérienne'],
    },
    {
      n: 'Signature', p: 390, tag: '🔥 Le + choisi', featured: true,
      sub: 'Le bon compromis qualité / prix.',
      feats: ['Photo HDR + Vidéo visite 2 min', 'Drone 4K (si autorisé)', 'Montage dynamique', 'Livraison sous 48h', 'Formats réseaux sociaux'],
    },
    {
      n: 'Premium', p: 590, tag: 'Bien d\'exception',
      sub: 'Le grand jeu, pour les biens rares.',
      feats: ['Tout Signature inclus', 'Site internet dédié au bien', 'Montage cinéma 3 min', 'Plans 2D + descriptif', 'Diffusion sur nos réseaux'],
    },
  ];
  return (
    <section id="tarifs" style={{ padding: 'var(--pad-y) var(--pad-x)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <Eyebrow num="05" brand={brand}>Tarifs</Eyebrow>
          <h2 className="acn-h" style={{
            fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 900, letterSpacing: '-0.035em', lineHeight: 1, margin: '0 auto', maxWidth: 720,
          }}>
            Forfaits clairs, <span style={{ color: brand }}>zéro</span> surprise.
          </h2>
          <p style={{ marginTop: 14, color: '#6b6b6b', fontSize: 15, maxWidth: 520, margin: '14px auto 0' }}>
            Tout est inclus : déplacement (50 km), tournage, post-production, livraison. Pas de coût caché.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'var(--gap)',
          alignItems: 'stretch',
        }}>
          {plans.map((p, i) => (
            <article key={i} style={{
              position: 'relative',
              padding: '32px 28px',
              borderRadius: 28,
              background: p.featured ? '#0a0a0a' : '#fff',
              color: p.featured ? '#fff' : '#0a0a0a',
              border: `1.5px solid ${p.featured ? '#0a0a0a' : '#e5e5e0'}`,
              boxShadow: p.featured ? '0 30px 80px rgba(0,0,0,0.18)' : '0 1px 0 rgba(0,0,0,0.02)',
              transform: p.featured ? 'translateY(-12px)' : 'none',
              display: 'flex', flexDirection: 'column',
            }}>
              {p.tag && (
                <div style={{
                  position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
                  padding: '6px 14px', background: brand, color: '#fff',
                  fontSize: 11, fontWeight: 800, letterSpacing: '0.05em', borderRadius: 100,
                  whiteSpace: 'nowrap', boxShadow: `0 10px 30px ${brand}55`,
                }}>
                  {p.tag}
                </div>
              )}
              <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em' }}>{p.n}</div>
              <div style={{ fontSize: 13, color: p.featured ? 'rgba(255,255,255,0.6)' : '#6b6b6b', marginTop: 4 }}>{p.sub}</div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 22 }}>
                <span style={{
                  fontSize: 64, fontWeight: 900, letterSpacing: '-0.045em', lineHeight: 1,
                  color: p.featured ? brand : '#0a0a0a',
                }}>{p.p}</span>
                <span style={{ fontSize: 22, fontWeight: 700 }}>€</span>
                <span style={{ fontSize: 12, marginLeft: 6, color: p.featured ? 'rgba(255,255,255,0.5)' : '#6b6b6b' }}>TTC · par bien</span>
              </div>

              <div style={{ marginTop: 22, paddingTop: 22, borderTop: `1px solid ${p.featured ? 'rgba(255,255,255,0.12)' : '#e5e5e0'}` }}>
                {p.feats.map(f => (
                  <div key={f} style={{ fontSize: 14, marginBottom: 12, display: 'flex', gap: 10, lineHeight: 1.4 }}>
                    <span style={{
                      width: 18, height: 18, borderRadius: '50%',
                      background: p.featured ? brand : brandSoft,
                      color: p.featured ? '#fff' : brand,
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 11, fontWeight: 800, flex: '0 0 18px',
                    }}>✓</span>
                    {f}
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 'auto', paddingTop: 24 }}>
                <Pill
                  href="#contact"
                  variant={p.featured ? 'solid' : 'dark'}
                  size="lg"
                  brand={brand}
                  style={{ width: '100%', display: 'flex' }}
                >
                  Choisir {p.n}
                </Pill>
              </div>
            </article>
          ))}
        </div>

        <p style={{ textAlign: 'center', marginTop: 28, fontSize: 13, color: '#6b6b6b' }}>
          Vous avez plusieurs biens ou un projet corporate ? <a href="#contact" style={{ color: '#0a0a0a', fontWeight: 700 }}>Devis sur mesure →</a>
        </p>
      </div>
    </section>
  );
}

// ── ZONE ─────────────────────────────────────────────────────────────────────
function Zone({ brand, brandSoft, brandText }) {
  const cities = [
    { name: 'Bordeaux', x: 82, y: 195, big: true },
    { name: 'Arcachon', x: 60, y: 210 },
    { name: 'Saint-Émilion', x: 108, y: 188 },
    { name: 'Cap Ferret', x: 46, y: 207 },
    { name: 'La Rochelle', x: 76, y: 155, big: true },
    { name: 'Île de Ré', x: 56, y: 150 },
    { name: 'Île d\'Oléron', x: 56, y: 168 },
    { name: 'Royan', x: 74, y: 176, big: true },
  ];
  return (
    <section style={{ padding: 'var(--pad-y) var(--pad-x)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 56, alignItems: 'center' }}>
        <div>
          <Eyebrow num="07" brand={brand}>Zone d'intervention</Eyebrow>
          <h2 className="acn-h" style={{ fontSize: 'clamp(36px, 4.6vw, 56px)', fontWeight: 900, letterSpacing: '-0.035em', lineHeight: 1, margin: 0 }}>
            On vient<br /><span style={{ color: brand }}>chez vous</span>.
          </h2>
          <p style={{ marginTop: 18, fontSize: 16, color: '#3a3a3a', lineHeight: 1.6, maxWidth: 420 }}>
            Déplacement inclus dans un rayon de <strong>50&nbsp;km</strong> autour de nos trois bases. Au-delà, devis sur mesure pour les biens d'exception.
          </p>
          <div style={{ marginTop: 24, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {cities.map(c => (
              <span key={c.name} style={{
                padding: '8px 14px', borderRadius: 100,
                background: '#fff', border: '1px solid #e5e5e0',
                fontSize: 13, fontWeight: 600,
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <span style={{ color: brand }}>📍</span>{c.name}
              </span>
            ))}
          </div>
          <div style={{
            marginTop: 24,
            padding: '14px 18px',
            background: '#dcfce7',
            color: '#15803d',
            borderRadius: 14,
            fontSize: 13, fontWeight: 600,
            display: 'inline-flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: '50%', background: '#22c55e',
              animation: 'pulse 1.6s infinite',
            }}></span>
            Disponibilité immédiate — créneaux mai & juin
          </div>
        </div>

        <div style={{
          background: '#0a0a0a',
          color: '#fff',
          borderRadius: 28,
          padding: 28,
          aspectRatio: '1.2',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* SVG map of France */}
          <svg viewBox="0 0 220 280" style={{ width: '100%', height: '100%' }}>
            {/* very rough France outline */}
            <path d="M 80 30 L 130 20 L 175 35 L 210 75 L 215 130 L 200 180 L 180 220 L 145 250 L 100 255 L 60 240 L 30 200 L 25 150 L 35 90 Z"
                  fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" />
            {/* Inner grid */}
            {Array.from({length: 8}).map((_, i) => (
              <line key={'h'+i} x1="0" y1={i*40} x2="220" y2={i*40} stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
            ))}
            {Array.from({length: 6}).map((_, i) => (
              <line key={'v'+i} x1={i*40} y1="0" x2={i*40} y2="280" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
            ))}
            {/* Pins */}
            {cities.map((c, i) => (
              <g key={i}>
                {c.big && (
                  <circle cx={c.x} cy={c.y} r="14" fill={brand} opacity="0.18">
                    <animate attributeName="r" values="14;20;14" dur="2.4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.18;0;0.18" dur="2.4s" repeatCount="indefinite" />
                  </circle>
                )}
                <circle cx={c.x} cy={c.y} r={c.big ? 5 : 3} fill={brand} stroke="#fff" strokeWidth="1.4" />
                <text x={c.x + 8} y={c.y + 3} fontSize={c.big ? '8.5' : '7'} fill="#fff" fontFamily="Inter, sans-serif" fontWeight={c.big ? 700 : 500}>
                  {c.name}
                </text>
              </g>
            ))}
          </svg>
          <div style={{
            position: 'absolute', bottom: 18, right: 22,
            fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)',
          }}>
            Bases : Royan · La Rochelle · Bordeaux
          </div>
        </div>
      </div>
    </section>
  );
}

// ── BLOG ─────────────────────────────────────────────────────────────────────
function Blog({ brand, brandSoft, brandText }) {
  const featured = {
    cat: 'Guide complet',
    t: 'Vendre sans agence : la méthode 2026 (+ checklist PDF).',
    sub: 'Notre méthode pas-à-pas pour vendre votre bien seul, plus vite et au prix fort.',
    time: '8 min',
    date: '12 mai 2026',
    photo: '1560518883-ce09059eeffa',
  };
  const small = [
    { cat: 'Lumière', t: '5 erreurs photo qui font fuir les acheteurs', time: '4 min', date: '28 avr.', photo: '1545324418-cc1a3fa10c00' },
    { cat: 'Drone', t: 'Quand le drone change vraiment la donne', time: '5 min', date: '15 avr.', photo: '1469474968028-56623f02e42e' },
    { cat: 'Prix', t: 'Comment estimer son bien sans agence', time: '6 min', date: '02 avr.', photo: '1556909114-f6e7ad7d3136' },
  ];
  return (
    <section id="blog" style={{
      background: '#f3f1eb',
      padding: 'var(--pad-y) var(--pad-x)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: 40 }}>
          <div>
            <Eyebrow num="08" brand={brand}>Le blog</Eyebrow>
            <h2 className="acn-h" style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 900, letterSpacing: '-0.035em', lineHeight: 1, margin: 0 }}>
              Conseils pour <span style={{ color: brand }}>bien vendre</span>.
            </h2>
          </div>
          <Pill variant="ghost" size="md" brand={brand} href="#">Tous les articles →</Pill>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 18 }}>
          {/* Featured */}
          <article style={{ background: '#fff', borderRadius: 28, overflow: 'hidden', border: '1px solid #e5e5e0', cursor: 'pointer' }}>
            <Photo src={unsplash(featured.photo, 1000)} alt={featured.t} style={{ aspectRatio: '16/9', borderRadius: 0 }} />
            <div style={{ padding: 28 }}>
              <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
                <Tag tone="brand" brand={brand} brandSoft={brandSoft} brandText={brandText}>🔥 À la une</Tag>
                <Tag tone="ghost">{featured.cat}</Tag>
              </div>
              <h3 style={{ margin: 0, fontSize: 28, fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.15 }}>
                {featured.t}
              </h3>
              <p style={{ marginTop: 12, color: '#5a5a5a', fontSize: 15, lineHeight: 1.55 }}>{featured.sub}</p>
              <div style={{ marginTop: 18, fontSize: 12, color: '#6b6b6b', letterSpacing: '0.05em', display: 'flex', gap: 16, whiteSpace: 'nowrap' }}>
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.time} de lecture</span>
              </div>
            </div>
          </article>

          {/* Small articles */}
          <div style={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)', gap: 12 }}>
            {small.map((a, i) => (
              <article key={i} style={{
                background: '#fff', borderRadius: 20, padding: 14,
                border: '1px solid #e5e5e0',
                display: 'grid', gridTemplateColumns: '120px 1fr', gap: 16, alignItems: 'center',
                cursor: 'pointer', transition: 'transform .2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(4px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = ''}>
                <Photo src={unsplash(a.photo, 400)} alt={a.t} style={{ aspectRatio: '1', borderRadius: 12 }} />
                <div>
                  <div style={{ fontSize: 10, fontWeight: 800, color: brand, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{a.cat}</div>
                  <h4 style={{ margin: '6px 0 0', fontSize: 16, fontWeight: 800, lineHeight: 1.3, letterSpacing: '-0.01em' }}>{a.t}</h4>
                  <div style={{ marginTop: 10, fontSize: 11, color: '#6b6b6b' }}>{a.date} · {a.time}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── CTA + Footer ─────────────────────────────────────────────────────────────
function CTAFooter({ brand, brandSoft, brandText }) {
  return (
    <footer id="contact" style={{ background: '#0a0a0a', color: '#fff' }}>
      {/* CTA */}
      <div style={{ padding: 'var(--pad-y) var(--pad-x)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* glow */}
        <div style={{
          position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
          width: 600, height: 600, borderRadius: '50%',
          background: `radial-gradient(closest-side, ${brand}66, transparent 70%)`,
          filter: 'blur(40px)', pointerEvents: 'none',
        }}></div>
        <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto' }}>
          <Tag tone="onDark">● Réponse sous 24h, devis gratuit</Tag>
          <h2 className="acn-h" style={{
            margin: '18px 0 24px',
            fontSize: 'clamp(48px, 8vw, 108px)',
            fontWeight: 900, letterSpacing: '-0.045em', lineHeight: 0.92,
          }}>
            On filme<br />votre bien&nbsp;? <span style={{ color: brand }}>C'est parti.</span>
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', maxWidth: 500, margin: '0 auto 28px', lineHeight: 1.55 }}>
            Décrivez-nous votre projet — on revient sous 24h avec une proposition chiffrée et un créneau de tournage.
          </p>

          {/* Mini form */}
          <form
            onSubmit={(e) => { e.preventDefault(); alert('Merci ! On vous répond sous 24h.'); }}
            style={{
              display: 'flex', flexWrap: 'wrap', gap: 10, maxWidth: 620, margin: '0 auto',
              background: 'rgba(255,255,255,0.06)',
              padding: 8, borderRadius: 100,
              border: '1px solid rgba(255,255,255,0.12)',
            }}>
            <input
              type="email"
              required
              placeholder="votre.email@exemple.com"
              style={{
                flex: 1, minWidth: 220,
                padding: '12px 20px',
                background: 'transparent',
                border: 'none', outline: 'none',
                color: '#fff', fontSize: 14, fontFamily: 'inherit',
              }}
            />
            <button type="submit" style={{
              padding: '12px 24px',
              background: brand, color: '#fff',
              border: 'none', borderRadius: 100,
              fontWeight: 700, fontSize: 14, cursor: 'pointer',
              transition: 'transform .15s, box-shadow .15s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = `0 8px 24px ${brand}77`; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
              Demander un devis →
            </button>
          </form>

          <div style={{ marginTop: 28, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 28, fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>
            <a href="mailto:hello@acn-studio.fr" style={{ color: 'inherit', textDecoration: 'none', display: 'inline-flex', gap: 8, alignItems: 'center' }}>✉ hello@acn-studio.fr</a>
          </div>
        </div>
      </div>

      {/* Footer cols */}
      <div style={{ padding: '40px var(--pad-x)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40 }}>
          <div>
            <Logo brand={brand} size={36} dark />
            <p style={{ marginTop: 16, fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, maxWidth: 280 }}>
              Studio de production audiovisuelle spécialisé immobilier et corporate. Drone · Photo · Vidéo · Montage.
            </p>
            <div style={{ marginTop: 18, display: 'flex', gap: 10 }}>
              {['IG', 'YT', 'LI', 'TT'].map(s => (
                <a key={s} href="#" style={{
                  width: 38, height: 38, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: 12,
                }}>{s}</a>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 14 }}>Studio</div>
            {['Prestations', 'Tarifs', 'Voir la vidéo', 'Blog'].map(x => (
              <div key={x} style={{ marginBottom: 8, fontSize: 13 }}><a href="#" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>{x}</a></div>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 14 }}>Services</div>
            {['Vente PAP', 'Agences', 'Corporate', 'Drone seul'].map(x => (
              <div key={x} style={{ marginBottom: 8, fontSize: 13 }}><a href="#" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>{x}</a></div>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 14 }}>Contact</div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>
              hello@acn-studio.fr<br />
              Royan · La Rochelle · Bordeaux
            </div>
          </div>
        </div>

        <div style={{
          maxWidth: 1280, margin: '40px auto 0', paddingTop: 24,
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
          fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em',
        }}>
          <span>© 2026 ACN Production · Tous droits réservés</span>
          <span>Pilote certifié DGAC · SIRET 000 000 000 00000</span>
          <span><a href="#" style={{ color: 'inherit' }}>Mentions légales</a> · <a href="#" style={{ color: 'inherit' }}>CGV</a></span>
        </div>
      </div>
    </footer>
  );
}

// ── Sticky CTA pill (bottom-right) ────────────────────────────────────────────
function StickyCTA({ brand }) {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <a href="#contact" style={{
      position: 'fixed', bottom: 24, right: 24, zIndex: 50,
      padding: '14px 22px', borderRadius: 100,
      background: brand, color: '#fff',
      fontWeight: 700, fontSize: 14,
      boxShadow: `0 16px 40px ${brand}66`,
      textDecoration: 'none',
      display: 'inline-flex', alignItems: 'center', gap: 8,
      transform: visible ? 'translateY(0)' : 'translateY(120px)',
      opacity: visible ? 1 : 0,
      transition: 'transform .35s cubic-bezier(.2,.7,.3,1), opacity .25s',
    }}>
      💬 Devis sous 24h
    </a>
  );
}

Object.assign(window, { Portfolio, Process, Pricing, Zone, Blog, CTAFooter, StickyCTA });
