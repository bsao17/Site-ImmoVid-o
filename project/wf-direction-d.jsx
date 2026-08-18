// Direction D — Bold Cinema Dynamique
// High-impact, scroll-jacking aesthetic. Full-screen video hero, sticky
// progress, marquee tiles, draggable carousel mock, comparator table,
// animated counters. The "modern agency" direction.

const D_BG = '#fafaf7';
const D_INK = '#0a0a0a';
const D_DIM = '#6b6b6b';
const D_FAINT = '#e5e5e0';
const D_BRAND = '#ff5a1f'; // strong orange — energy + trust
const D_SECOND = '#1d4ed8';

function DirectionD() {
  const Tag = ({ children, color }) => (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '4px 10px', borderRadius: 50,
      fontSize: 10, fontWeight: 600, letterSpacing: '0.05em',
      background: color || `${D_BRAND}15`, color: color ? '#fff' : D_BRAND,
      border: `1px solid ${color || D_BRAND}40`,
    }}>{children}</span>
  );

  return (
    <div style={{
      background: D_BG,
      color: D_INK,
      width: '100%',
      height: '100%',
      fontFamily: WF.ui,
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* —— Sticky nav with progress bar ————————————————————— */}
      <div style={{ position: 'sticky', top: 0, zIndex: 10, background: `${D_BG}f0`, backdropFilter: 'blur(8px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 36px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 28, height: 28, background: D_INK, color: D_BG, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 14, borderRadius: 8 }}>A</div>
            <div style={{ fontWeight: 800, fontSize: 16, letterSpacing: '-0.02em' }}>
              ACN<span style={{ color: D_BRAND }}>.</span>
            </div>
            <span style={{ marginLeft: 10, padding: '3px 8px', fontSize: 9, background: '#dcfce7', color: '#15803d', borderRadius: 6, fontWeight: 700, letterSpacing: '0.05em' }}>● DISPO MAI</span>
          </div>
          <div style={{ display: 'flex', gap: 22, fontSize: 12, fontWeight: 600, color: D_DIM }}>
            {['Prestations', 'Vendre seul', 'Tarifs', 'Voir la vidéo', 'Blog'].map(x => <span key={x}>{x}</span>)}
          </div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '9px 16px', fontSize: 12, fontWeight: 700, color: D_BG, background: D_INK, borderRadius: 100 }}>
            Devis gratuit →
          </span>
        </div>
        {/* progress bar */}
        <div style={{ height: 2, background: D_FAINT }}>
          <div style={{ width: '12%', height: '100%', background: D_BRAND }}></div>
        </div>
      </div>

      {/* —— HERO — fullscreen video bg ——————————————————————— */}
      <div style={{ position: 'relative', height: 540, overflow: 'hidden' }}>
        <WPhoto label="" style={{ position: 'absolute', inset: 0, background: '#0a0a0a', border: 'none', color: '#fff' }}>
          <div style={{ fontFamily: WF.hand, fontSize: 22, color: D_BRAND }}>
            ▶ video bg loop · drone villa
          </div>
        </WPhoto>
        {/* dark overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.2))' }}></div>

        <div style={{ position: 'relative', padding: 48, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: D_BG }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', gap: 8 }}>
              <Tag color={D_BRAND}>● Spécial Vente PAP</Tag>
              <Tag color="rgba(255,255,255,0.15)">2025 · Bordeaux</Tag>
            </div>
            <div style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', textAlign: 'right' }}>
              ↓ scroll<br />pour explorer
            </div>
          </div>

          <div>
            <div style={{
              fontSize: 96,
              fontWeight: 900,
              letterSpacing: '-0.045em',
              lineHeight: 0.9,
              textWrap: 'balance',
              maxWidth: 720,
            }}>
              Vendez votre bien <span style={{ color: D_BRAND }}>4 fois plus</span> vite.
            </div>
            <div style={{ marginTop: 22, fontSize: 16, maxWidth: 460, opacity: 0.85, lineHeight: 1.5 }}>
              Drone 4K + photo HDR + visite vidéo. Livré sous 48h. Économisez la commission d'agence.
            </div>
            <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ padding: '16px 26px', borderRadius: 100, background: D_BRAND, color: '#fff', fontWeight: 700, fontSize: 14 }}>
                Vendre mon bien →
              </span>
              <span style={{ padding: '16px 24px', borderRadius: 100, border: '1.5px solid rgba(255,255,255,0.4)', fontWeight: 600, fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 22, height: 22, borderRadius: '50%', background: '#fff', color: D_INK, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 9 }}>▶</span>
                Voir la vidéo <span style={{ opacity: 0.6 }}>2:14</span>
              </span>
            </div>
            {/* trust strip */}
            <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 20, fontSize: 11, opacity: 0.7 }}>
              <span>★★★★★ <strong style={{ opacity: 1 }}>4.9/5</strong></span>
              <span>—</span>
              <span>Pilote certifié DGAC</span>
              <span>—</span>
              <span>Réponse sous 24h</span>
            </div>
          </div>
        </div>
      </div>

      {/* —— Marquee client logos ————————————————————————————— */}
      <div style={{ padding: '20px 0', background: D_INK, color: D_BG, overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 60, fontSize: 13, opacity: 0.7, justifyContent: 'space-around' }}>
          <span style={{ fontFamily: WF.hand, color: D_BRAND, fontSize: 18 }}>vus sur :</span>
          {['LE BON COIN', 'SELOGER', 'LEBONCOIN', 'PAP.FR', 'BIENICI', 'OUEST-FRANCE', 'SUD OUEST'].map((x, i) => (
            <span key={i} style={{ fontWeight: 700, letterSpacing: '0.15em', fontSize: 12 }}>● {x}</span>
          ))}
        </div>
      </div>

      {/* —— SERVICES — bold tiles ————————————————————————————— */}
      <div style={{ padding: '60px 36px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32 }}>
          <div>
            <Tag>01 · Prestations</Tag>
            <div style={{ fontSize: 48, fontWeight: 900, letterSpacing: '-0.03em', marginTop: 12, lineHeight: 1, textWrap: 'balance' }}>
              Une équipe. <span style={{ color: D_BRAND }}>Quatre</span><br /> super-pouvoirs.
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button style={{ width: 36, height: 36, borderRadius: 100, border: `1.5px solid ${D_INK}`, background: 'transparent' }}>←</button>
            <button style={{ width: 36, height: 36, borderRadius: 100, background: D_INK, color: D_BG, border: 'none' }}>→</button>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          {[
            { n: '01', t: 'Drone 4K', sub: 'Aérien spectaculaire', bg: D_BRAND, fg: '#fff' },
            { n: '02', t: 'Photo HDR', sub: 'Intérieurs lumineux', bg: D_INK, fg: D_BG },
            { n: '03', t: 'Vidéo cinéma', sub: 'Visite immersive', bg: '#f59e0b', fg: '#fff' },
            { n: '04', t: 'Montage', sub: 'Prêt réseaux sociaux', bg: D_FAINT, fg: D_INK },
          ].map((s, i) => (
            <div key={i} style={{
              background: s.bg,
              color: s.fg,
              padding: 22,
              borderRadius: 24,
              aspectRatio: '4 / 5',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em' }}>{s.n}</span>
                <span style={{ width: 28, height: 28, borderRadius: 100, background: 'rgba(255,255,255,0.15)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>↗</span>
              </div>
              <div>
                <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.02em' }}>{s.t}</div>
                <div style={{ fontSize: 12, opacity: 0.75, marginTop: 4 }}>{s.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* —— FEATURE PAP comparator ————————————————————————— */}
      <div style={{ padding: '60px 36px', background: D_INK, color: D_BG }}>
        <Tag color={D_BRAND}>02 · Vendre seul</Tag>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, marginTop: 18, alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 56, fontWeight: 900, letterSpacing: '-0.035em', lineHeight: 0.95 }}>
              Économisez <span style={{ color: D_BRAND }}>14 000 €</span> en moyenne.
            </div>
            <div style={{ marginTop: 18, fontSize: 14, opacity: 0.7, maxWidth: 460, lineHeight: 1.6 }}>
              Sur un bien à 350 000 €, c'est la commission moyenne d'agence. ACN, c'est 890 € tout compris. Le calcul est vite fait.
            </div>
            <span style={{ display: 'inline-block', marginTop: 24, padding: '14px 24px', background: D_BRAND, borderRadius: 100, fontWeight: 700, fontSize: 13 }}>
              Calculer mon économie →
            </span>
          </div>
          {/* comparator */}
          <div style={{ background: '#1a1a1a', borderRadius: 24, padding: 24 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div style={{ padding: 20, background: 'rgba(255,255,255,0.04)', borderRadius: 18, opacity: 0.55 }}>
                <div style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.7 }}>Agence classique</div>
                <div style={{ fontSize: 36, fontWeight: 900, marginTop: 12, letterSpacing: '-0.02em' }}>14 000<span style={{ fontSize: 18 }}>€</span></div>
                <div style={{ fontSize: 11, marginTop: 2, opacity: 0.6 }}>4 % du prix de vente</div>
                <div style={{ marginTop: 14, fontSize: 11, lineHeight: 1.5 }}>
                  ✕ Mandat exclusif<br />
                  ✕ Visuels souvent moyens<br />
                  ✕ Décision lente
                </div>
              </div>
              <div style={{ padding: 20, background: D_BRAND, color: '#fff', borderRadius: 18, position: 'relative' }}>
                <Tag color="rgba(255,255,255,0.2)">● ACN</Tag>
                <div style={{ fontSize: 36, fontWeight: 900, marginTop: 12, letterSpacing: '-0.02em' }}>890<span style={{ fontSize: 18 }}>€</span></div>
                <div style={{ fontSize: 11, marginTop: 2, opacity: 0.85 }}>Formule Premium tout compris</div>
                <div style={{ marginTop: 14, fontSize: 11, lineHeight: 1.5 }}>
                  ✓ Aucun engagement<br />
                  ✓ Drone + photo + vidéo<br />
                  ✓ Livré sous 48h
                </div>
              </div>
            </div>
            <div style={{ marginTop: 14, padding: 16, background: 'rgba(255,255,255,0.06)', borderRadius: 14, fontSize: 13, textAlign: 'center' }}>
              <span style={{ opacity: 0.7 }}>Vous gardez</span> <strong style={{ color: D_BRAND, fontSize: 18 }}>13 110 €</strong>
            </div>
          </div>
        </div>
      </div>

      {/* —— Animated stats —————————————————————————————————— */}
      <div style={{ padding: '60px 36px', borderBottom: `1px solid ${D_FAINT}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: `1px solid ${D_FAINT}` }}>
          {[
            ['127', 'biens shootés', '+12 ce mois-ci'],
            ['-30%', 'temps de vente', 'vs annonces sans vidéo'],
            ['×4', 'vues sur annonces', 'mesuré sur LeBonCoin'],
            ['98%', 'clients satisfaits', 'satisfaction garantie'],
          ].map(([n, t, sub], i) => (
            <div key={i} style={{
              padding: '32px 22px',
              borderRight: i !== 3 ? `1px solid ${D_FAINT}` : 'none',
              position: 'relative',
            }}>
              <div style={{ fontSize: 64, fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1, color: i === 1 ? D_BRAND : D_INK }}>
                {n}
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, marginTop: 12 }}>{t}</div>
              <div style={{ fontSize: 11, color: D_DIM, marginTop: 2 }}>{sub}</div>
              <span style={{
                position: 'absolute', top: 24, right: 22,
                fontSize: 9, padding: '2px 8px', borderRadius: 100, background: '#dcfce7', color: '#15803d', fontWeight: 700,
              }}>↑ LIVE</span>
            </div>
          ))}
        </div>
      </div>

      {/* —— PORTFOLIO — YouTube showreel ———————————————————— */}
      <div style={{ padding: '60px 36px' }}>
        <Tag>03 · Showreel</Tag>
        <div style={{ fontSize: 48, fontWeight: 900, letterSpacing: '-0.03em', marginTop: 12, lineHeight: 1, marginBottom: 12 }}>
          Découvrez nos <span style={{ color: D_BRAND }}>réalisations</span>.
        </div>
        <div style={{ fontSize: 14, color: D_DIM, marginBottom: 28 }}>
          Une sélection de nos meilleurs films immobiliers — drone, visite vidéo et montage professionnel.
        </div>
        <div style={{ position: 'relative', width: '100%', borderRadius: 20, overflow: 'hidden', aspectRatio: '16/9', background: '#0a0a0a' }}>
          <iframe
            src="https://www.youtube.com/embed/tx6sB9V18x4"
            title="Showreel ImmoVidéo"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* —— PROCESS horizontal stepper ——————————————————————— */}
      <div style={{ padding: '60px 36px', background: '#f3f1eb' }}>
        <Tag>04 · Le déroulé</Tag>
        <div style={{ fontSize: 48, fontWeight: 900, letterSpacing: '-0.03em', marginTop: 12, lineHeight: 1, marginBottom: 36 }}>
          De zéro à <span style={{ color: D_BRAND }}>publié</span> en 4 jours.
        </div>
        <div style={{ position: 'relative' }}>
          {/* line */}
          <div style={{ position: 'absolute', left: 30, right: 30, top: 28, height: 2, background: D_FAINT }}></div>
          <div style={{ position: 'absolute', left: 30, top: 28, height: 2, background: D_BRAND, width: '40%' }}></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, position: 'relative' }}>
            {[
              ['1', 'Brief', '24h', 'Vous décrivez le bien, devis chiffré.', true],
              ['2', 'Repérage', '1 jour', 'Visite, lumière, plan de tournage.', true],
              ['3', 'Tournage', '½ j', 'Drone + photo + vidéo.', false],
              ['4', 'Livraison', '48h', 'Rushs + montage final.', false],
            ].map(([n, t, time, d, done], i) => (
              <div key={i} style={{ textAlign: 'left' }}>
                <div style={{
                  width: 56, height: 56,
                  borderRadius: '50%',
                  background: done ? D_INK : D_BG,
                  color: done ? D_BG : D_INK,
                  border: `2px solid ${done ? D_INK : D_FAINT}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 22, fontWeight: 800,
                  position: 'relative',
                }}>
                  {n}
                  {done && <span style={{ position: 'absolute', top: -4, right: -4, width: 18, height: 18, borderRadius: '50%', background: D_BRAND, color: '#fff', fontSize: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✓</span>}
                </div>
                <div style={{ marginTop: 16, fontSize: 18, fontWeight: 800 }}>{t}</div>
                <div style={{ fontSize: 10, fontWeight: 700, color: D_BRAND, letterSpacing: '0.1em', marginTop: 2 }}>{time.toUpperCase()}</div>
                <div style={{ fontSize: 12, color: D_DIM, marginTop: 8, lineHeight: 1.5 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* —— TARIFS — comparator —————————————————————————————— */}
      <div style={{ padding: '60px 36px' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <Tag>05 · Tarifs</Tag>
          <div style={{ fontSize: 48, fontWeight: 900, letterSpacing: '-0.03em', marginTop: 12, lineHeight: 1 }}>
            Forfaits clairs, <span style={{ color: D_BRAND }}>zéro</span> surprise.
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
          {[
            { n: 'Essentiel', p: '290', tag: '', feats: ['Photo HDR · 15 visuels', 'Retouche pro', 'Livraison 48h'] },
            { n: 'Signature', p: '590', tag: '🔥 Le + choisi', feats: ['Photo HDR · Vidéo 2 min', 'Drone 4K inclus', 'Montage dynamique', 'Livraison 48h', 'Réseaux sociaux'], featured: true },
            { n: 'Premium', p: '890', tag: 'Bien d\'exception', feats: ['Tout Signature inclus', 'Visite virtuelle 3D', 'Montage cinéma 3 min', 'Plans 2D + descriptif'] },
          ].map((p, i) => (
            <div key={i} style={{
              padding: 26,
              borderRadius: 24,
              background: p.featured ? D_INK : D_BG,
              color: p.featured ? D_BG : D_INK,
              border: `1.5px solid ${p.featured ? D_INK : D_FAINT}`,
              position: 'relative',
              transform: p.featured ? 'scale(1.04)' : 'none',
              boxShadow: p.featured ? '0 20px 60px rgba(0,0,0,0.12)' : 'none',
            }}>
              {p.tag && (
                <div style={{ position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)', padding: '4px 14px', background: D_BRAND, color: '#fff', fontSize: 10, fontWeight: 700, borderRadius: 100, letterSpacing: '0.05em' }}>
                  {p.tag}
                </div>
              )}
              <div style={{ fontSize: 22, fontWeight: 800 }}>{p.n}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 18 }}>
                <span style={{ fontSize: 56, fontWeight: 900, letterSpacing: '-0.04em', color: p.featured ? D_BRAND : D_INK }}>{p.p}</span>
                <span style={{ fontSize: 22, fontWeight: 700 }}>€</span>
                <span style={{ fontSize: 11, opacity: 0.6, marginLeft: 4 }}>HT · bien</span>
              </div>
              <div style={{ marginTop: 20, paddingTop: 18, borderTop: `1px solid ${p.featured ? 'rgba(255,255,255,0.15)' : D_FAINT}` }}>
                {p.feats.map(f => (
                  <div key={f} style={{ fontSize: 13, marginBottom: 10, display: 'flex', gap: 8 }}>
                    <span style={{ color: D_BRAND, fontWeight: 700 }}>✓</span>{f}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 20, padding: '12px 18px', textAlign: 'center', borderRadius: 100, background: p.featured ? D_BRAND : D_INK, color: '#fff', fontWeight: 700, fontSize: 13 }}>
                Choisir {p.n}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* —— ZONE GÉO interactive map ———————————————————————— */}
      <div style={{ padding: '60px 36px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 32, alignItems: 'center' }}>
          <div>
            <Tag>07 · Où on intervient</Tag>
            <div style={{ fontSize: 44, fontWeight: 900, letterSpacing: '-0.03em', marginTop: 12, lineHeight: 1 }}>
              On vient<br /><span style={{ color: D_BRAND }}>chez vous</span>.
            </div>
            <div style={{ marginTop: 16, fontSize: 13, color: D_DIM, lineHeight: 1.6 }}>
              50 km autour de nos bases. Au-delà, devis sur mesure.
            </div>
            <div style={{ marginTop: 22, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {['Bordeaux', 'Arcachon', 'Saint-Émilion', 'La Rochelle', 'Biarritz', 'Paris', 'Versailles', 'Île de Ré'].map(c => (
                <span key={c} style={{ padding: '6px 12px', background: D_FAINT, borderRadius: 100, fontSize: 12, fontWeight: 600 }}>📍 {c}</span>
              ))}
            </div>
            <div style={{ marginTop: 22, padding: 14, background: '#dcfce7', borderRadius: 14, fontSize: 12, fontWeight: 600, color: '#15803d' }}>
              ● Disponibilité immédiate — calendrier mai-juin
            </div>
          </div>
          <WPhoto label="Map interactive · pins cliquables" style={{ height: 300, background: D_INK, borderRadius: 20, border: 'none', color: '#fff' }} />
        </div>
      </div>

      {/* —— BLOG featured + 3 small ——————————————————————————— */}
      <div style={{ padding: '60px 36px', borderTop: `1px solid ${D_FAINT}`, background: '#f3f1eb' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 28 }}>
          <div>
            <Tag>08 · Le blog</Tag>
            <div style={{ fontSize: 40, fontWeight: 900, letterSpacing: '-0.03em', marginTop: 12, lineHeight: 1 }}>
              Conseils pour <span style={{ color: D_BRAND }}>bien vendre</span>.
            </div>
          </div>
          <span style={{ padding: '10px 18px', borderRadius: 100, border: `1.5px solid ${D_INK}`, fontSize: 12, fontWeight: 700 }}>Tous les articles →</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 18 }}>
          {/* Featured */}
          <div style={{ borderRadius: 24, overflow: 'hidden', background: D_BG, border: `1px solid ${D_FAINT}` }}>
            <WPhoto label="" style={{ height: 280, background: '#0a0a0a', border: 'none', color: '#fff', borderRadius: 0 }} />
            <div style={{ padding: 22 }}>
              <Tag>🔥 À LA UNE</Tag>
              <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.02em', marginTop: 12, lineHeight: 1.15 }}>
                Vendre sans agence : guide complet 2026 (+ checklist PDF).
              </div>
              <div style={{ marginTop: 12, fontSize: 13, color: D_DIM, lineHeight: 1.5 }}>
                Notre méthode pas-à-pas pour vendre votre bien seul, plus vite et au prix fort.
              </div>
              <div style={{ marginTop: 16, fontSize: 11, color: D_DIM, letterSpacing: '0.05em' }}>
                12 mai · 8 min de lecture
              </div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)', gap: 12 }}>
            {[
              ['Lumière', '5 erreurs photo qui font fuir les acheteurs'],
              ['Drone', 'Quand le drone change vraiment la donne'],
              ['Prix', 'Comment estimer son bien sans agence'],
            ].map(([cat, t], i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: 14, padding: 14, background: D_BG, borderRadius: 16, border: `1px solid ${D_FAINT}`, alignItems: 'center' }}>
                <WPhoto label="" style={{ height: 80, background: '#e2dccc', border: 'none', borderRadius: 10 }} />
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: D_BRAND, letterSpacing: '0.1em' }}>{cat.toUpperCase()}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, marginTop: 4, lineHeight: 1.3 }}>{t}</div>
                  <div style={{ fontSize: 10, color: D_DIM, marginTop: 6 }}>4 min · 28 avr.</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* —— FINAL CTA + Footer ————————————————————————————————— */}
      <div style={{ padding: '80px 36px', background: D_INK, color: D_BG, textAlign: 'center' }}>
        <div style={{ fontSize: 72, fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.95, textWrap: 'balance' }}>
          On filme votre bien ?<br /><span style={{ color: D_BRAND }}>C'est parti.</span>
        </div>
        <div style={{ marginTop: 28, display: 'inline-flex', gap: 12 }}>
          <span style={{ padding: '16px 28px', background: D_BRAND, borderRadius: 100, fontWeight: 700, fontSize: 14 }}>Devis sous 24h →</span>
          <span style={{ padding: '16px 24px', borderRadius: 100, border: '1.5px solid rgba(255,255,255,0.3)', fontWeight: 600, fontSize: 14 }}>📞 06 12 34 56 78</span>
        </div>
        <div style={{ marginTop: 60, paddingTop: 28, borderTop: `1px solid rgba(255,255,255,0.15)`, display: 'flex', justifyContent: 'space-between', fontSize: 11, opacity: 0.6 }}>
          <span>© 2026 ACN — Tous droits réservés</span>
          <span>Pilote DGAC · Studio basé à Bordeaux</span>
          <span>IG · YT · LinkedIn · TikTok</span>
        </div>
      </div>

      {/* —— sticky CTA pill ———————————————————————————————————— */}
      <div style={{
        position: 'absolute',
        bottom: 24, right: 24,
        padding: '14px 22px',
        borderRadius: 100,
        background: D_BRAND,
        color: '#fff',
        fontWeight: 700,
        fontSize: 13,
        boxShadow: '0 10px 30px rgba(255,90,31,0.4)',
      }}>
        💬 Demander un devis
      </div>
    </div>
  );
}

window.DirectionD = DirectionD;
