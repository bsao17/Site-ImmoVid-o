// Hi-fi sections: Nav, Hero, Marquee, Services, Feature PAP, Stats.

const unsplash = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}`;

// ── NAV ──────────────────────────────────────────────────────────────────────
function Nav({ brand }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 60,
      background: scrolled ? 'rgba(250,250,247,0.86)' : 'transparent',
      backdropFilter: scrolled ? 'blur(14px) saturate(1.2)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(14px) saturate(1.2)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent',
      transition: 'background .25s, border-color .25s',
    }}>
      <div style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: '16px 28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <Logo brand={brand} size={30} />
          <Tag tone="success">● Dispo mai-juin</Tag>
        </div>
        <nav style={{ display: 'flex', gap: 26, fontSize: 14, fontWeight: 600, color: '#3a3a3a' }}>
          {[
            ['Prestations', '#prestations'],
            ['Vendre seul', '#pap'],
            ['Tarifs', '#tarifs'],
            ['Showreel', '#portfolio'],
            ['Blog', '#blog'],
          ].map(([t, h]) => (
            <a key={t} href={h} style={{ color: 'inherit', textDecoration: 'none', transition: 'color .15s' }}
               onMouseEnter={(e) => e.currentTarget.style.color = brand}
               onMouseLeave={(e) => e.currentTarget.style.color = '#3a3a3a'}>{t}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <Pill href="#contact" variant="dark" size="md" brand={brand}>
            Devis gratuit →
          </Pill>
        </div>
      </div>
      {/* Scroll progress bar */}
      <div style={{ height: 2, background: 'rgba(0,0,0,0.05)' }}>
        <div style={{ width: `${progress}%`, height: '100%', background: brand, transition: 'width .1s linear' }}></div>
      </div>
    </header>
  );
}

// ── HERO ─────────────────────────────────────────────────────────────────────
function Hero({ brand, brandSoft, brandText }) {
  return (
    <section style={{
      position: 'relative',
      minHeight: 'min(820px, 92vh)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      color: '#fff',
    }}>
      {/* Background photo + Ken Burns */}
      <Photo
        src={unsplash('1613490493576-7fde63acd811', 2400)}
        alt="Villa avec piscine, prise de vue par drone"
        kenburns
        rounded={0}
        style={{ position: 'absolute', inset: 0, aspectRatio: 'auto' }}
      />
      {/* Gradient overlays */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(110deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0.15) 100%)',
      }}></div>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 30%, transparent 60%, rgba(0,0,0,0.55) 100%)',
      }}></div>

      {/* Content */}
      <div style={{
        position: 'relative',
        maxWidth: 1280,
        width: '100%',
        margin: '0 auto',
        padding: '40px 28px',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
        <div style={{ marginTop: 'auto', maxWidth: 880 }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 26 }} className="acn-fadeup">
            <Tag tone="light"><span style={{ color: brand }}>●</span> Vente Particulier-à-Particulier</Tag>
            <Tag tone="light">Bordeaux · La Rochelle · Royan</Tag>
          </div>

          <h1 className="acn-h acn-fadeup" style={{
            fontSize: 'clamp(48px, 8.4vw, 116px)',
            fontWeight: 900,
            letterSpacing: '-0.045em',
            lineHeight: 0.9,
            margin: '0 0 24px',
            animationDelay: '.08s',
          }}>
            Vendez votre bien <span style={{ color: brand }}>4 fois plus</span> vite.
          </h1>

          <p className="acn-fadeup" style={{
            fontSize: 'clamp(15px, 1.4vw, 19px)',
            maxWidth: 560,
            color: 'rgba(255,255,255,0.88)',
            lineHeight: 1.55,
            margin: '0 0 32px',
            animationDelay: '.16s',
          }}>
            Drone 4K, photo HDR & visite vidéo cinéma. Livré sous 48h. Économisez la commission d'agence — vous gardez la marge.
          </p>

          <div className="acn-fadeup" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', animationDelay: '.24s' }}>
            <Pill href="#contact" variant="solid" size="lg" brand={brand}>
              Vendre mon bien <span>→</span>
            </Pill>
            <Pill href="#portfolio" variant="onDark" size="lg" brand={brand}>
              <span style={{
                width: 24, height: 24, borderRadius: '50%', background: '#fff', color: '#0a0a0a',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 9, paddingLeft: 1,
              }}>▶</span>
              Voir le showreel
              <span style={{ opacity: 0.6, fontSize: 12 }}>2:14</span>
            </Pill>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', marginLeft: 4 }}>
              <span style={{ color: '#fff', fontWeight: 700 }}>à partir de 190 €</span>
              <span style={{ opacity: 0.65 }}> · tout inclus</span>
            </span>
          </div>

          {/* Trust strip */}
          <div className="acn-fadeup" style={{
            marginTop: 40,
            display: 'flex',
            gap: 28,
            flexWrap: 'wrap',
            alignItems: 'center',
            fontSize: 12,
            color: 'rgba(255,255,255,0.78)',
            animationDelay: '.32s',
          }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <span style={{ color: '#facc15', letterSpacing: '0.1em' }}>★★★★★</span>
              <strong style={{ color: '#fff' }}>4,9/5</strong>
              <span style={{ opacity: 0.7 }}>· 86 avis vérifiés</span>
            </span>
            <span style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.2)' }}></span>
            <span>🛡️ Pilote certifié DGAC</span>
            <span style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.2)' }}></span>
            <span>⚡️ Réponse sous 24h</span>
            <span style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.2)' }}></span>
            <span>📍 50 km autour de Royan, La Rochelle & Bordeaux</span>
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{
          position: 'absolute',
          right: 28, bottom: 24,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
          fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)',
        }}>
          <span>scroll</span>
          <span style={{ width: 1, height: 36, background: 'rgba(255,255,255,0.4)' }}></span>
        </div>
      </div>
    </section>
  );
}

// ── MARQUEE — vu sur ─────────────────────────────────────────────────────────
function Marquee({ brand }) {
  const items = ['LeBonCoin', 'SeLoger', 'PAP.fr', 'BienIci', 'Ouest-France', 'Sud Ouest', 'Logic-Immo', 'AVendreALouer'];
  const doubled = [...items, ...items];
  return (
    <div style={{
      background: '#0a0a0a',
      color: '#fff',
      padding: '22px 0',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <div style={{
        display: 'flex',
        gap: 60,
        whiteSpace: 'nowrap',
        animation: 'marquee 28s linear infinite',
        width: 'max-content',
      }}>
        {doubled.map((x, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 14, fontSize: 14, fontWeight: 600, opacity: 0.7 }}>
            <span style={{ color: brand, fontSize: 18 }}>✦</span>
            <span style={{ letterSpacing: '0.05em' }}>Visible sur <strong style={{ opacity: 1, fontWeight: 800 }}>{x}</strong></span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ── SERVICES ─────────────────────────────────────────────────────────────────
function Services({ brand, brandSoft, brandText }) {
  const services = [
    {
      n: '01',
      title: 'Drone 4K',
      sub: 'Vues aériennes spectaculaires',
      body: 'DJI Mavic, Avata, Pocket & Air Unit O4 Pro. Autorisations DGAC en règle. Idéal pour vues aériennes, panoramiques et environnement.',
      photo: '1502672260266-1c1ef2d93688',
      bg: brand,
      fg: '#fff',
    },
    {
      n: '02',
      title: 'Photo HDR',
      sub: 'Intérieurs lumineux',
      body: 'Sony α7 IV · 24 Mpx. Bracketing HDR, retouche pro. Volumes valorisés, lumière parfaite — même par temps gris.',
      photo: '1600585154340-be6161a56a0c',
      bg: '#0a0a0a',
      fg: '#fff',
    },
    {
      n: '03',
      title: 'Vidéo cinéma',
      sub: 'Visite immersive 4K',
      body: 'Ronin RS3 · slider · objectifs grand-angle. Visite qui filtre les curieux et fait basculer les bonnes visites.',
      photo: '1600596542815-ffad4c1539a9',
      bg: '#f59e0b',
      fg: '#fff',
    },
    {
      n: '04',
      title: 'Montage',
      sub: 'Prêt réseaux sociaux',
      body: 'DaVinci Resolve · étalonnage cinéma. Formats Insta, TikTok, YouTube, MP4 HD pour les annonces. Livré sous 48h.',
      photo: '1493809842364-78817add7ffb',
      bg: '#e5e5e0',
      fg: '#0a0a0a',
    },
  ];

  return (
    <section id="prestations" style={{ padding: 'var(--pad-y) var(--pad-x)', maxWidth: 1280, margin: '0 auto' }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap',
        gap: 24, marginBottom: 40,
      }}>
        <div style={{ maxWidth: 640 }}>
          <Eyebrow num="01" brand={brand}>Prestations</Eyebrow>
          <h2 className="acn-h" style={{
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 900, letterSpacing: '-0.035em', lineHeight: 1, margin: 0,
          }}>
            Une équipe. <span style={{ color: brand }}>Quatre</span> super-pouvoirs.
          </h2>
        </div>
        <p style={{ maxWidth: 360, color: '#6b6b6b', fontSize: 15, lineHeight: 1.55, margin: 0 }}>
          Une seule équipe pour tout produire — du tournage à la livraison finale. Aucun sous-traitant, aucune perte de qualité.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 'var(--gap)',
      }}>
        {services.map((s, i) => (
          <article key={i} style={{
            position: 'relative',
            borderRadius: 28,
            overflow: 'hidden',
            background: s.bg,
            color: s.fg,
            padding: 24,
            aspectRatio: '3 / 4.4',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            cursor: 'pointer',
            transition: 'transform .3s cubic-bezier(.2,.7,.3,1), box-shadow .3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-6px)';
            e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.18)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = '';
            e.currentTarget.style.boxShadow = '';
          }}>
            {/* Photo as background */}
            <img
              src={unsplash(s.photo, 600)}
              alt=""
              style={{
                position: 'absolute', inset: 0, width: '100%', height: '100%',
                objectFit: 'cover', mixBlendMode: 'overlay', opacity: 0.35,
              }}
            />
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.1em' }}>{s.n}</span>
              <span style={{
                width: 32, height: 32, borderRadius: '50%',
                background: 'rgba(255,255,255,0.15)',
                border: `1px solid ${s.fg === '#fff' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.15)'}`,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 14,
              }}>↗</span>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-0.025em', marginBottom: 6 }}>{s.title}</div>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.75, marginBottom: 14 }}>{s.sub}</div>
              <div style={{ fontSize: 13, lineHeight: 1.5, opacity: 0.85 }}>{s.body}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ── FEATURE PAP — comparator with live calculator ────────────────────────────
function FeaturePAP({ brand, brandSoft, brandText }) {
  const [price, setPrice] = React.useState(350000);
  const commission = Math.round(price * 0.04);
  const acnPrice = 590;
  const savings = commission - acnPrice;

  const fmt = (n) => n.toLocaleString('fr-FR');

  return (
    <section id="pap" style={{
      background: '#0a0a0a',
      color: '#fff',
      padding: 'var(--pad-y) var(--pad-x)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Eyebrow num="02" brand={brand}>Vendre seul, mieux qu'avec une agence</Eyebrow>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 60,
          alignItems: 'center',
        }}>
          <div>
            <h2 className="acn-h" style={{
              fontSize: 'clamp(40px, 5.4vw, 80px)',
              fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.95, margin: '0 0 22px',
            }}>
              Économisez <span style={{ color: brand }}>{fmt(savings)} €</span> sur votre vente.
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.72)', lineHeight: 1.6, maxWidth: 500, margin: '0 0 28px' }}>
              Sur un bien à <strong style={{ color: '#fff' }}>{fmt(price)} €</strong>, la commission d'agence vous coûte <strong style={{ color: '#fff' }}>{fmt(commission)} €</strong>.
              Notre formule Premium tout compris : <strong style={{ color: brand }}>{acnPrice} €</strong>.
            </p>

            {/* Slider */}
            <div style={{
              background: 'rgba(255,255,255,0.05)',
              borderRadius: 16,
              padding: 20,
              marginBottom: 24,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>Prix de votre bien</span>
                <span style={{ fontSize: 18, fontWeight: 800 }}>{fmt(price)} €</span>
              </div>
              <input
                type="range"
                min="100000" max="2000000" step="10000"
                value={price}
                onChange={(e) => setPrice(parseInt(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: brand,
                  cursor: 'pointer',
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>
                <span>100 k€</span>
                <span>2 M€</span>
              </div>
            </div>

            <Pill href="#contact" variant="solid" size="lg" brand={brand}>
              Calculer mon devis →
            </Pill>
          </div>

          {/* Comparator */}
          <div style={{
            background: '#161614',
            borderRadius: 28,
            padding: 24,
            border: '1px solid rgba(255,255,255,0.08)',
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
              <div style={{
                padding: 22, background: 'rgba(255,255,255,0.04)', borderRadius: 20,
                opacity: 0.65, position: 'relative',
              }}>
                <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.7, marginBottom: 14 }}>Agence classique</div>
                <div style={{ fontSize: 42, fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1 }}>
                  {fmt(commission)}<span style={{ fontSize: 20, opacity: 0.7 }}> €</span>
                </div>
                <div style={{ fontSize: 11, opacity: 0.6, marginTop: 4 }}>≈ 4 % du prix de vente</div>
                <div style={{ marginTop: 16, fontSize: 12, lineHeight: 1.7, opacity: 0.85 }}>
                  ✕ Mandat (souvent exclusif)<br />
                  ✕ Photos parfois moyennes<br />
                  ✕ Décision lente
                </div>
              </div>
              <div style={{
                padding: 22, background: brand, color: '#fff', borderRadius: 20, position: 'relative',
                boxShadow: `0 20px 50px ${brand}55`,
              }}>
                <Tag tone="light">● ACN</Tag>
                <div style={{ fontSize: 42, fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1, marginTop: 14 }}>
                  590<span style={{ fontSize: 20, opacity: 0.85 }}> €</span>
                </div>
                <div style={{ fontSize: 11, opacity: 0.85, marginTop: 4 }}>Formule Premium, tout compris</div>
                <div style={{ marginTop: 16, fontSize: 12, lineHeight: 1.7 }}>
                  ✓ Zéro engagement<br />
                  ✓ Drone + photo + vidéo<br />
                  ✓ Livré sous 48 h
                </div>
              </div>
            </div>
            <div style={{
              padding: 18,
              background: 'rgba(255,255,255,0.06)',
              borderRadius: 16,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <span style={{ fontSize: 13, opacity: 0.7 }}>Économie nette</span>
              <span style={{ fontSize: 28, fontWeight: 900, color: brand, letterSpacing: '-0.025em' }}>
                +{fmt(savings)} €
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── STATS — animated counters ────────────────────────────────────────────────
function Stats({ brand }) {
  const stats = [
    { target: 127, suffix: '', label: 'Biens shootés', sub: '+ 12 ce mois-ci' },
    { target: 30, prefix: '−', suffix: ' %', label: 'Temps de vente', sub: 'vs. annonces sans vidéo' },
    { target: 4, prefix: '×', suffix: '', label: 'Vues sur annonces', sub: 'mesuré sur LeBonCoin' },
    { target: 98, suffix: ' %', label: 'Clients satisfaits', sub: '86 avis vérifiés' },
  ];
  return (
    <section style={{
      maxWidth: 1280, margin: '0 auto',
      padding: 'calc(var(--pad-y) * 0.7) var(--pad-x)',
      borderTop: '1px solid #e5e5e0', borderBottom: '1px solid #e5e5e0',
    }}>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
      }}>
        {stats.map((s, i) => {
          const [ref, val] = useCountUp(s.target);
          return (
            <div key={i} ref={ref} style={{
              padding: '28px 22px',
              borderRight: i !== 3 ? '1px solid #e5e5e0' : 'none',
              position: 'relative',
            }}>
              <div style={{
                fontSize: 'clamp(48px, 5.5vw, 76px)',
                fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1,
                color: i === 1 ? brand : '#0a0a0a',
              }}>
                {s.prefix || ''}{val}{s.suffix || ''}
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, marginTop: 14 }}>{s.label}</div>
              <div style={{ fontSize: 12, color: '#6b6b6b', marginTop: 4 }}>{s.sub}</div>
              <span style={{
                position: 'absolute', top: 26, right: 22,
                fontSize: 9, padding: '3px 8px', borderRadius: 100,
                background: '#dcfce7', color: '#15803d', fontWeight: 800, letterSpacing: '0.08em',
                display: 'inline-flex', alignItems: 'center', gap: 4,
              }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#22c55e', animation: 'pulse 1.6s infinite' }}></span>
                LIVE
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

Object.assign(window, { unsplash, Nav, Hero, Marquee, Services, FeaturePAP, Stats });
