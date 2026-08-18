// Direction B — Cinéma Sombre Premium
// Dark theme, gold accent. Letterbox feel. Cinema poster aesthetic.
// Studios that shoot luxury real estate / corporate.

const B_GOLD = '#c9a961';
const B_BG = '#0e0e0c';
const B_BG2 = '#16161300';
const B_INK = '#f5f1e8';
const B_DIM = 'rgba(245,241,232,0.55)';
const B_FAINT = 'rgba(245,241,232,0.12)';

function DirectionB() {
  return (
    <div style={{
      background: B_BG,
      color: B_INK,
      width: '100%',
      height: '100%',
      fontFamily: WF.ui,
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* —— Nav ———————————————————————————————————— */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '18px 36px',
        borderBottom: `1px solid ${B_FAINT}`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 22, height: 22, border: `1.5px solid ${B_GOLD}`, position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 4, background: B_GOLD }}></div>
          </div>
          <div style={{ fontWeight: 700, fontSize: 16, letterSpacing: '0.12em' }}>ACN</div>
          <span style={{ fontSize: 9, letterSpacing: '0.3em', color: B_DIM, paddingLeft: 12, borderLeft: `1px solid ${B_FAINT}`, marginLeft: 4 }}>EST. 2023</span>
        </div>
        <div style={{ display: 'flex', gap: 26, fontSize: 11, color: B_DIM, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          {['Films', 'Immobilier', 'Tarifs', 'Studio', 'Contact'].map(x => <span key={x}>{x}</span>)}
        </div>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 16px', fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: B_BG, background: B_GOLD, borderRadius: 0 }}>
          Devis film →
        </span>
      </div>

      {/* —— HERO : cinema poster ————————————————————————————— */}
      <div style={{ padding: '0 36px', position: 'relative' }}>
        {/* letterbox bars hint */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 28, background: B_BG, zIndex: 2 }}></div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 28, background: B_BG, zIndex: 2 }}></div>

        <div style={{ position: 'relative', height: 480, marginTop: 28, marginBottom: 28 }}>
          <WPhoto label="" style={{ position: 'absolute', inset: 0, background: '#1a1a16', border: `1px solid ${B_FAINT}`, color: B_DIM }}>
            <div style={{ fontFamily: WF.hand, fontSize: 18, color: B_GOLD, marginTop: 8 }}>
              video bg muet · drone villa
            </div>
          </WPhoto>

          {/* Title overlay */}
          <div style={{ position: 'absolute', inset: 0, padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', zIndex: 3 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ fontSize: 9, letterSpacing: '0.4em', textTransform: 'uppercase', color: B_GOLD }}>
                A film by ACN Studio
              </div>
              <div style={{ fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: B_DIM, textAlign: 'right' }}>
                Production audiovisuelle<br />Bordeaux · Paris
              </div>
            </div>

            <div>
              <div style={{ fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', color: B_GOLD, marginBottom: 14 }}>
                — Édition Particulier ·  2026 —
              </div>
              <div style={{
                fontFamily: '"Fraunces", Georgia, serif',
                fontSize: 76,
                fontWeight: 300,
                letterSpacing: '-0.02em',
                lineHeight: 0.92,
                textWrap: 'balance',
                maxWidth: 560,
              }}>
                Votre bien<br />
                mérite un <em style={{ color: B_GOLD, fontWeight: 400 }}>vrai</em><br />
                film.
              </div>
              <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 24 }}>
                <span style={{ padding: '12px 22px', fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: B_BG, background: B_GOLD }}>
                  ▶ Voir la vidéo
                </span>
                <span style={{ fontSize: 11, color: B_DIM, letterSpacing: '0.1em' }}>
                  2 min 14 — 4K cinéma
                </span>
              </div>
            </div>
          </div>

          {/* Cinema corner marks */}
          {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((p, i) => {
            const pos = {
              'top-left': { top: 36, left: 8 },
              'top-right': { top: 36, right: 8 },
              'bottom-left': { bottom: 36, left: 8 },
              'bottom-right': { bottom: 36, right: 8 },
            }[p];
            return (
              <div key={p} style={{ position: 'absolute', ...pos, width: 14, height: 14, zIndex: 4 }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: 14, height: 1.5, background: B_GOLD, ...(p.includes('bottom') ? { top: 'auto', bottom: 0 } : {}) }}></div>
                <div style={{ position: 'absolute', top: 0, left: 0, width: 1.5, height: 14, background: B_GOLD, ...(p.includes('right') ? { left: 'auto', right: 0 } : {}) }}></div>
              </div>
            );
          })}
        </div>

        {/* scroll marker */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 16, fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: B_DIM }}>
          <span>↓ Découvrir</span>
          <span>● ● ● ● ●</span>
          <span>SCN 01 / 09</span>
        </div>
      </div>

      {/* —— SERVICES — poster tiles ————————————————————————— */}
      <div style={{ padding: '60px 36px', borderTop: `1px solid ${B_FAINT}` }}>
        <div style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: B_GOLD, marginBottom: 8 }}>
          — Acte I · Prestations
        </div>
        <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontSize: 44, fontWeight: 300, letterSpacing: '-0.02em', marginBottom: 32 }}>
          Quatre métiers, un seul studio.
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          {[
            ['I', 'Drone 4K', 'Vues aériennes cinéma'],
            ['II', 'Photographie', 'HDR · 24 Mpx'],
            ['III', 'Vidéo cinéma', '4K · stabilisée'],
            ['IV', 'Post-production', 'Étalonnage DaVinci'],
          ].map(([n, t, sub], i) => (
            <div key={i} style={{
              border: `1px solid ${B_FAINT}`,
              padding: 18,
              aspectRatio: '3 / 4',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              background: i === 1 ? 'rgba(201,169,97,0.04)' : 'transparent',
            }}>
              <div style={{ fontFamily: '"Fraunces", serif', fontSize: 36, color: B_GOLD, fontWeight: 300 }}>{n}</div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 6 }}>{t}</div>
                <div style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: B_DIM }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* —— FEATURE PAP ———————————————————————————————————— */}
      <div style={{ padding: '64px 36px', borderTop: `1px solid ${B_FAINT}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
          <WPhoto label="VISITE 4K" style={{ height: 380, background: '#1a1a16', border: `1px solid ${B_FAINT}`, color: B_DIM }} />
          <div>
            <div style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: B_GOLD, marginBottom: 8 }}>
              — Acte II · Vente PAP
            </div>
            <div style={{ fontFamily: '"Fraunces", serif', fontSize: 40, fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.05 }}>
              Une économie de <em style={{ color: B_GOLD }}>14 000 €</em><br />en moyenne.
            </div>
            <div style={{ marginTop: 18, fontSize: 13, color: B_DIM, lineHeight: 1.6, maxWidth: 380 }}>
              Sur un bien à 350 000 €, la commission d'agence représente 14 000 €. Notre prestation complète : 890 €. Faites le calcul.
            </div>
            <div style={{ marginTop: 24, paddingTop: 18, borderTop: `1px solid ${B_FAINT}` }}>
              {['Drone + Photo + Vidéo', 'Livraison sous 48h', 'Réseaux sociaux inclus'].map(x => (
                <div key={x} style={{ display: 'flex', gap: 12, marginBottom: 10, fontSize: 12 }}>
                  <span style={{ color: B_GOLD, fontFamily: '"Fraunces", serif' }}>—</span>
                  <span>{x}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* —— STATS — awards style ————————————————————————————— */}
      <div style={{ padding: '64px 36px', background: '#070705', borderTop: `1px solid ${B_FAINT}`, borderBottom: `1px solid ${B_FAINT}` }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: B_GOLD, marginBottom: 8 }}>
            — Chiffres clés —
          </div>
          <div style={{ fontFamily: '"Fraunces", serif', fontSize: 36, fontWeight: 300, letterSpacing: '-0.02em' }}>
            Trois saisons, des résultats.
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
          {[
            ['127', 'Biens shootés'],
            ['-30%', 'Temps de vente'],
            ['×4', 'Vues sur annonces'],
            ['98%', 'Clients satisfaits'],
          ].map(([n, t], i) => (
            <div key={i} style={{
              textAlign: 'center',
              padding: '28px 12px',
              border: `1px solid ${B_FAINT}`,
              position: 'relative',
            }}>
              {/* Laurel hint */}
              <div style={{ position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)', fontSize: 14, color: B_GOLD, letterSpacing: '0.4em' }}>❋</div>
              <div style={{ fontFamily: '"Fraunces", serif', fontSize: 56, fontWeight: 300, color: B_GOLD, lineHeight: 1, letterSpacing: '-0.02em', marginTop: 18 }}>{n}</div>
              <div style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', marginTop: 12, color: B_DIM }}>{t}</div>
            </div>
          ))}
        </div>
      </div>

      {/* —— PORTFOLIO film strip ——————————————————————————— */}
      <div style={{ padding: '60px 0 60px 36px', borderBottom: `1px solid ${B_FAINT}` }}>
        <div style={{ paddingRight: 36, marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: B_GOLD, marginBottom: 8 }}>
              — Acte III · Filmographie
            </div>
            <div style={{ fontFamily: '"Fraunces", serif', fontSize: 36, fontWeight: 300 }}>
              Sélection 2025—2026.
            </div>
          </div>
          <div style={{ fontSize: 11, color: B_DIM, letterSpacing: '0.15em' }}>← → naviguer</div>
        </div>
        {/* Film strip mockup */}
        <div style={{ display: 'flex', gap: 12, overflow: 'hidden', paddingBottom: 8 }}>
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} style={{ flex: '0 0 320px', position: 'relative' }}>
              <WPhoto label={`FILM N° ${i.toString().padStart(2, '0')}`} style={{ height: 200, background: '#1a1a16', border: `1px solid ${B_FAINT}`, color: B_DIM, position: 'relative' }} />
              {/* film perforations */}
              <div style={{ position: 'absolute', top: 4, left: 4, right: 4, display: 'flex', justifyContent: 'space-between' }}>
                {Array.from({ length: 6 }).map((_, j) => (
                  <div key={j} style={{ width: 8, height: 4, background: B_BG, border: `1px solid ${B_FAINT}` }}></div>
                ))}
              </div>
              <div style={{ marginTop: 14, display: 'flex', justifyContent: 'space-between', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                <span>Villa P{i}30 · Arcachon</span>
                <span style={{ color: B_GOLD }}>2:14</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* —— PROCESS — storyboard frames ————————————————————— */}
      <div style={{ padding: '60px 36px', borderBottom: `1px solid ${B_FAINT}` }}>
        <div style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: B_GOLD, marginBottom: 8 }}>
          — Acte IV · Le déroulé
        </div>
        <div style={{ fontFamily: '"Fraunces", serif', fontSize: 36, fontWeight: 300, marginBottom: 32 }}>
          Storyboard d'un projet.
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          {[
            ['SCN 01', 'Brief & devis', '24h'],
            ['SCN 02', 'Repérage', '1 jour'],
            ['SCN 03', 'Tournage', '½ journée'],
            ['SCN 04', 'Livraison', '48h'],
          ].map(([n, t, d], i) => (
            <div key={i}>
              <div style={{ position: 'relative', aspectRatio: '4/3', border: `1.5px solid ${B_FAINT}`, marginBottom: 12 }}>
                <div style={{ position: 'absolute', top: 8, left: 10, fontSize: 9, letterSpacing: '0.2em', color: B_GOLD }}>{n}</div>
                <div style={{ position: 'absolute', bottom: 8, right: 10, fontSize: 9, letterSpacing: '0.2em', color: B_DIM }}>{d}</div>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Fraunces", serif', fontSize: 36, color: B_GOLD, fontWeight: 300 }}>
                  {i + 1}
                </div>
              </div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>{t}</div>
              <div style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: B_DIM, marginTop: 4 }}>Caption · {d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* —— TARIFS — premium cards ——————————————————————————— */}
      <div style={{ padding: '60px 36px' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: B_GOLD, marginBottom: 8 }}>
            — Tarification —
          </div>
          <div style={{ fontFamily: '"Fraunces", serif', fontSize: 40, fontWeight: 300 }}>
            Trois éditions au choix.
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {[
            { n: 'Essentiel', p: '290', tag: 'Studio', feats: ['Reportage photo HDR', '15 photos retouchées', 'Livraison 48h'] },
            { n: 'Signature', p: '590', tag: 'Le + demandé', feats: ['Photo + Vidéo visite', 'Drone 4K', 'Montage 2 min', 'Livraison 48h'], featured: true },
            { n: 'Premium', p: '890', tag: "Bien d'exception", feats: ['Tout Signature inclus', 'Visite virtuelle 3D', 'Montage cinéma 3 min', 'Plans 2D inclus'] },
          ].map((p, i) => (
            <div key={i} style={{
              border: `1px solid ${p.featured ? B_GOLD : B_FAINT}`,
              padding: '28px 22px',
              background: p.featured ? 'rgba(201,169,97,0.05)' : 'transparent',
              position: 'relative',
            }}>
              {p.featured && (
                <div style={{ position: 'absolute', top: -1, left: -1, padding: '4px 10px', background: B_GOLD, color: B_BG, fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700 }}>
                  Best seller
                </div>
              )}
              <div style={{ fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: B_DIM, marginTop: p.featured ? 14 : 0 }}>{p.tag}</div>
              <div style={{ fontFamily: '"Fraunces", serif', fontSize: 28, fontWeight: 400, marginTop: 8 }}>{p.n}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 14 }}>
                <span style={{ fontFamily: '"Fraunces", serif', fontSize: 52, fontWeight: 300, color: B_GOLD }}>{p.p}</span>
                <span style={{ fontFamily: '"Fraunces", serif', fontSize: 18, color: B_GOLD }}>€</span>
              </div>
              <div style={{ fontSize: 10, color: B_DIM, letterSpacing: '0.15em', textTransform: 'uppercase' }}>HT · par bien</div>
              <div style={{ marginTop: 20, paddingTop: 16, borderTop: `1px solid ${B_FAINT}` }}>
                {p.feats.map(f => (
                  <div key={f} style={{ fontSize: 12, marginBottom: 8, display: 'flex', gap: 10 }}>
                    <span style={{ color: B_GOLD }}>+</span>{f}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 20, padding: '10px 14px', textAlign: 'center', fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: p.featured ? B_BG : B_INK, background: p.featured ? B_GOLD : 'transparent', border: `1px solid ${p.featured ? B_GOLD : B_FAINT}` }}>
                Réserver
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* —— TESTIMONIALS — spotlight ————————————————————————— */}
      <div style={{ padding: '64px 36px', borderTop: `1px solid ${B_FAINT}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {[
            ['« 11 jours pour vendre. La vidéo a fait toute la différence. »', 'Marie L.', 'Pessac · Maison'],
            ['« 14 000 € d\'économie de commission. Service impeccable. »', 'Famille D.', 'Bordeaux · Appartement'],
            ['« Le drone a fait basculer la décision finale. »', 'Julien R.', 'Arcachon · Villa'],
          ].map(([q, n, c], i) => (
            <div key={i} style={{ borderLeft: `2px solid ${B_GOLD}`, padding: '4px 0 4px 18px' }}>
              <div style={{ fontFamily: '"Fraunces", serif', fontSize: 16, fontStyle: 'italic', fontWeight: 400, lineHeight: 1.4 }}>{q}</div>
              <div style={{ marginTop: 14, fontSize: 11, fontWeight: 700 }}>{n}</div>
              <div style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: B_DIM, marginTop: 2 }}>{c}</div>
            </div>
          ))}
        </div>
      </div>

      {/* —— ZONE GÉO ————————————————————————————————————————— */}
      <div style={{ padding: '60px 36px', borderTop: `1px solid ${B_FAINT}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 32, alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: B_GOLD, marginBottom: 8 }}>
              — Territoire —
            </div>
            <div style={{ fontFamily: '"Fraunces", serif', fontSize: 32, fontWeight: 300, letterSpacing: '-0.02em' }}>
              Sud-Ouest<br />& Île-de-France.
            </div>
            <div style={{ marginTop: 16, fontSize: 12, color: B_DIM, lineHeight: 1.5 }}>
              Déplacement inclus 50 km. Au-delà, devis sur mesure pour biens d'exception.
            </div>
            <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, fontSize: 11 }}>
              {['Bordeaux', 'Arcachon', 'Biarritz', 'La Rochelle', 'Paris', 'Versailles'].map(c => (
                <div key={c} style={{ color: B_INK }}>
                  <span style={{ color: B_GOLD, marginRight: 6 }}>◇</span>{c}
                </div>
              ))}
            </div>
          </div>
          <WPhoto label="Carte sombre · pins dorés" style={{ height: 240, background: '#1a1a16', border: `1px solid ${B_FAINT}`, color: B_DIM }} />
        </div>
      </div>

      {/* —— JOURNAL ————————————————————————————————————————— */}
      <div style={{ padding: '60px 36px', borderTop: `1px solid ${B_FAINT}` }}>
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: B_GOLD, marginBottom: 8 }}>
            — Notes du studio —
          </div>
          <div style={{ fontFamily: '"Fraunces", serif', fontSize: 32, fontWeight: 300 }}>Les conseils du chef opérateur.</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {[
            ['Lumière', 'Cinq erreurs photo qui font fuir les acheteurs'],
            ['Drone', 'Quand le drone est-il vraiment utile ?'],
            ['Vente PAP', 'Combien j\'ai économisé en vendant seul'],
          ].map(([cat, t], i) => (
            <div key={i} style={{ border: `1px solid ${B_FAINT}`, padding: 18 }}>
              <WPhoto style={{ height: 120, background: '#1a1a16', border: `1px solid ${B_FAINT}`, color: B_DIM }} />
              <div style={{ marginTop: 14, fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', color: B_GOLD }}>{cat}</div>
              <div style={{ fontFamily: '"Fraunces", serif', fontSize: 17, fontWeight: 400, marginTop: 6, lineHeight: 1.3 }}>{t}</div>
              <div style={{ fontSize: 10, color: B_DIM, marginTop: 12, letterSpacing: '0.1em' }}>12 mai · 4 min</div>
            </div>
          ))}
        </div>
      </div>

      {/* —— FOOTER / CTA ————————————————————————————————————— */}
      <div style={{ padding: '60px 36px', background: '#070705', borderTop: `1px solid ${B_GOLD}` }}>
        <div style={{ textAlign: 'center', marginBottom: 30 }}>
          <div style={{ fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', color: B_GOLD, marginBottom: 12 }}>
            — Fin —
          </div>
          <div style={{ fontFamily: '"Fraunces", serif', fontSize: 48, fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.05 }}>
            Et si on tournait<br />votre bien ?
          </div>
          <div style={{ marginTop: 20 }}>
            <span style={{ padding: '14px 28px', fontSize: 11, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: B_BG, background: B_GOLD }}>
              Demander un devis →
            </span>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 28, marginTop: 28, borderTop: `1px solid ${B_FAINT}`, fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: B_DIM }}>
          <span>© 2026 ACN Studio</span>
          <span>Télépilote certifié DGAC</span>
          <span>Instagram · YouTube · LinkedIn</span>
        </div>
      </div>
    </div>
  );
}

window.DirectionB = DirectionB;
