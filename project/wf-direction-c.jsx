// Direction C — Architectural Minimal
// Beige bg, lots of whitespace, serif typography, architecture-firm vibe.
// Calm, museum-grade. Numbers and small caps as accents.

const C_BG = '#f1ede5';
const C_INK = '#1a1814';
const C_DIM = '#6e6859';
const C_FAINT = '#d8d1c2';
const C_ACCENT = '#7a5a3a'; // muted earth
const C_SERIF = '"Cormorant Garamond", "EB Garamond", Georgia, serif';

function DirectionC() {
  return (
    <div style={{
      background: C_BG,
      color: C_INK,
      width: '100%',
      height: '100%',
      fontFamily: WF.ui,
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* —— Nav — extreme minimal ——————————————————————————— */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '24px 48px',
      }}>
        <div style={{ fontFamily: C_SERIF, fontSize: 22, fontWeight: 500, letterSpacing: '0.05em' }}>
          A · C · N
        </div>
        <div style={{ display: 'flex', gap: 32, fontSize: 11, color: C_DIM, fontWeight: 500, letterSpacing: '0.06em' }}>
          {['Index', 'Studio', 'Vente PAP', 'Tarifs', 'Carnet', 'Contact'].map(x => <span key={x}>{x}</span>)}
        </div>
        <div style={{ fontSize: 11, color: C_DIM, letterSpacing: '0.08em' }}>FR · EN</div>
      </div>
      <div style={{ height: 1, background: C_FAINT, margin: '0 48px' }}></div>

      {/* —— HERO — split title/image ————————————————————————— */}
      <div style={{ padding: '64px 48px 80px', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 60, alignItems: 'end' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
              <span style={{ width: 36, height: 1, background: C_INK }}></span>
              <span style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase' }}>n° 001 — Vente Particulier</span>
            </div>
            <div style={{
              fontFamily: C_SERIF,
              fontSize: 84,
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: '-0.01em',
              textWrap: 'balance',
            }}>
              L'image,<br />
              à juste<br />
              <em style={{ fontWeight: 400 }}>distance.</em>
            </div>
            <div style={{ marginTop: 36, maxWidth: 340, fontSize: 13, lineHeight: 1.65, color: C_DIM }}>
              Studio de production visuelle dédié à l'immobilier. Drone, photo & film pour particuliers vendeurs.
            </div>
            <div style={{ marginTop: 36, display: 'flex', alignItems: 'center', gap: 24 }}>
              <span style={{ fontSize: 12, fontWeight: 600, borderBottom: `1.5px solid ${C_INK}`, paddingBottom: 4 }}>
                Prendre rendez-vous →
              </span>
              <span style={{ fontSize: 11, color: C_DIM, letterSpacing: '0.05em' }}>Réponse sous 24h</span>
            </div>
          </div>
          <WPhoto label="Photo intérieur · arch" style={{
            height: 520,
            background: '#e2dccc',
            border: 'none',
            color: C_DIM,
            borderRadius: 0,
          }} />
        </div>

        <div style={{ marginTop: 60, paddingTop: 20, borderTop: `1px solid ${C_FAINT}`, display: 'flex', justifyContent: 'space-between', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: C_DIM }}>
          <span>Index ↓</span>
          <span>I. Studio · II. Vente PAP · III. Tarifs · IV. Carnet</span>
          <span>Mai 2026</span>
        </div>
      </div>

      {/* —— INDEX / SERVICES — text-only list ————————————————— */}
      <div style={{ padding: '60px 48px', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 40 }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: C_DIM }}>I.</div>
            <div style={{ fontFamily: C_SERIF, fontSize: 28, fontWeight: 400, marginTop: 8, lineHeight: 1.1 }}>
              Le studio,<br /><em>quatre métiers.</em>
            </div>
          </div>
          <div>
            {[
              ['01', 'Drone 4K', 'Vues aériennes — autorisation DGAC en règle, 50 km de rayon'],
              ['02', 'Photographie', 'HDR · 24 Mpx · objectifs grand-angle pour valoriser les volumes'],
              ['03', 'Vidéo cinéma', 'Stabilisation gimbal · slider · 4K 50p'],
              ['04', 'Post-production', 'Étalonnage DaVinci · livraison rushs sous 48h'],
            ].map(([n, t, d]) => (
              <div key={n} style={{ display: 'grid', gridTemplateColumns: '48px 160px 1fr', gap: 24, padding: '22px 0', borderTop: `1px solid ${C_FAINT}`, alignItems: 'baseline' }}>
                <div style={{ fontFamily: C_SERIF, fontSize: 22, fontStyle: 'italic', color: C_ACCENT }}>{n}</div>
                <div style={{ fontFamily: C_SERIF, fontSize: 22, fontWeight: 400 }}>{t}</div>
                <div style={{ fontSize: 12, color: C_DIM, lineHeight: 1.6 }}>{d}</div>
              </div>
            ))}
            <div style={{ borderTop: `1px solid ${C_FAINT}` }}></div>
          </div>
        </div>
      </div>

      {/* —— FEATURE PAP — image full-bleed ————————————————————— */}
      <div style={{ padding: '0 0 80px' }}>
        <WPhoto label="VILLA ARCACHON · DRONE" style={{
          height: 480,
          background: '#d4c9af',
          border: 'none',
          color: C_DIM,
          borderRadius: 0,
          margin: '0 48px',
        }} />
        <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr 1fr', gap: 40, padding: '40px 48px 0' }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: C_DIM }}>II.</div>
            <div style={{ fontFamily: C_SERIF, fontSize: 28, fontWeight: 400, marginTop: 8, lineHeight: 1.1 }}>
              Vendre seul,<br /><em>mieux qu'une agence.</em>
            </div>
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.7, color: C_INK }}>
            La commission d'agence, sur un bien à 350 000 €, représente 14 000 €. Notre prestation complète, drone et vidéo incluse, vaut 890 €.
            <br /><br />
            Vous gardez la marge, et la qualité visuelle d'un studio professionnel.
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.7, color: C_DIM }}>
            Le premier contact se joue sur l'annonce. Photos floues, lumière jaune, cadrage approximatif : autant de raisons de cliquer plus loin. Nous traitons votre bien comme un projet d'édition.
          </div>
        </div>
      </div>

      {/* —— STATS — typography as art ——————————————————————— */}
      <div style={{ padding: '80px 48px', borderTop: `1px solid ${C_FAINT}`, borderBottom: `1px solid ${C_FAINT}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {[
            ['127', 'biens shootés depuis 2023'],
            ['30', '% temps de vente en moins'],
            ['×4', 'vues moyennes sur l\'annonce'],
            ['48', 'heures, livraison rushs'],
          ].map(([n, t], i) => (
            <div key={i}>
              <div style={{
                fontFamily: C_SERIF,
                fontSize: 96,
                fontWeight: 400,
                lineHeight: 0.85,
                letterSpacing: '-0.02em',
                color: i === 1 ? C_ACCENT : C_INK,
              }}>
                {n}
              </div>
              <div style={{ marginTop: 16, paddingTop: 10, borderTop: `1px solid ${C_INK}`, fontSize: 11, color: C_DIM, letterSpacing: '0.05em', lineHeight: 1.4 }}>{t}</div>
            </div>
          ))}
        </div>
      </div>

      {/* —— PORTFOLIO — 2-col grid generous gutters —————————— */}
      <div style={{ padding: '80px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 40, marginBottom: 32 }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: C_DIM }}>III.</div>
            <div style={{ fontFamily: C_SERIF, fontSize: 28, fontWeight: 400, marginTop: 8, lineHeight: 1.1 }}>
              Sélection<br /><em>de travaux.</em>
            </div>
          </div>
          <div style={{ alignSelf: 'end', fontSize: 11, color: C_DIM, letterSpacing: '0.05em' }}>
            Six biens, six histoires — 2025 / 2026.
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
          {[
            ['Villa P130', 'Arcachon', '2025'],
            ['Loft G', 'Bordeaux Bastide', '2025'],
            ['Maison de pierre', 'Saint-Émilion', '2026'],
            ['Appartement Hauss.', 'Paris 7e', '2026'],
          ].map(([t, loc, year], i) => (
            <div key={i}>
              <WPhoto label="" style={{ height: 320, background: '#e2dccc', border: 'none', color: C_DIM, borderRadius: 0 }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 16, paddingTop: 12, borderTop: `1px solid ${C_FAINT}` }}>
                <div>
                  <div style={{ fontFamily: C_SERIF, fontSize: 20, fontWeight: 400 }}>{t}</div>
                  <div style={{ fontSize: 11, color: C_DIM, letterSpacing: '0.05em', marginTop: 2 }}>{loc}</div>
                </div>
                <div style={{ fontFamily: C_SERIF, fontSize: 16, fontStyle: 'italic', color: C_DIM }}>{year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* —— PROCESS — vertical timeline ——————————————————————— */}
      <div style={{ padding: '80px 48px', borderTop: `1px solid ${C_FAINT}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 40 }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: C_DIM }}>IV.</div>
            <div style={{ fontFamily: C_SERIF, fontSize: 28, fontWeight: 400, marginTop: 8, lineHeight: 1.1 }}>
              Le déroulé,<br /><em>en quatre temps.</em>
            </div>
          </div>
          <div style={{ borderLeft: `1px solid ${C_INK}`, paddingLeft: 32 }}>
            {[
              ['i.', 'Prise de contact', 'Vous nous décrivez vos besoins et votre projet.', ''],
              ['ii.', 'Repérage', 'On finalise le projet ensemble et devis chiffré.', ''],
              ['iii.', 'Tournage', 'Réalisation : vidéo, photos, réseaux sociaux, site internet (selon option choisie).', ''],
              ['iv.', 'Présentation', 'Livraison des livrables et mise en production.', ''],
            ].map(([n, t, d, tm], i) => (
              <div key={i} style={{ position: 'relative', paddingBottom: i === 3 ? 0 : 36 }}>
                <div style={{ position: 'absolute', left: -40, top: 4, width: 16, height: 1, background: C_INK }}></div>
                <div style={{ position: 'absolute', left: -36, top: -2, width: 8, height: 8, borderRadius: '50%', background: i === 0 ? C_ACCENT : C_BG, border: `1.5px solid ${C_INK}` }}></div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
                  <span style={{ fontFamily: C_SERIF, fontStyle: 'italic', color: C_ACCENT, fontSize: 16 }}>{n}</span>
                  <span style={{ fontFamily: C_SERIF, fontSize: 24, fontWeight: 400 }}>{t}</span>
                  <span style={{ marginLeft: 'auto', fontSize: 11, color: C_DIM, letterSpacing: '0.1em' }}>{tm}</span>
                </div>
                <div style={{ fontSize: 13, color: C_DIM, lineHeight: 1.6, marginTop: 8, maxWidth: 460 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* —— TARIFS — text-based, delicate lines ——————————————— */}
      <div style={{ padding: '80px 48px', background: '#ebe6da', borderTop: `1px solid ${C_FAINT}`, borderBottom: `1px solid ${C_FAINT}` }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: C_DIM, marginBottom: 12 }}>V. — Honoraires</div>
          <div style={{ fontFamily: C_SERIF, fontSize: 40, fontWeight: 400, letterSpacing: '-0.01em' }}>
            Trois formules, <em>en toute clarté.</em>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderTop: `1px solid ${C_INK}` }}>
          {[
            { n: 'Essentiel', p: '290', feats: ['Photo HDR · 15 visuels', 'Retouche & livraison 48h'] },
            { n: 'Signature', p: '590', feats: ['Photo HDR · Vidéo visite 2 min', 'Drone 4K · post-production'], featured: true },
            { n: 'Premium', p: '890', feats: ['Tout Signature inclus', 'Visite virtuelle 3D', 'Montage cinéma 3 min'] },
          ].map((p, i) => (
            <div key={i} style={{
              padding: '32px 24px',
              borderRight: i !== 2 ? `1px solid ${C_INK}` : 'none',
              background: p.featured ? C_BG : 'transparent',
              textAlign: 'center',
            }}>
              <div style={{ fontFamily: C_SERIF, fontSize: 28, fontWeight: 400 }}>{p.n}</div>
              <div style={{ marginTop: 18, display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 4 }}>
                <span style={{ fontFamily: C_SERIF, fontSize: 64, fontWeight: 400, color: p.featured ? C_ACCENT : C_INK }}>{p.p}</span>
                <span style={{ fontFamily: C_SERIF, fontSize: 24, color: p.featured ? C_ACCENT : C_INK }}>€</span>
              </div>
              <div style={{ fontSize: 10, color: C_DIM, letterSpacing: '0.18em', textTransform: 'uppercase' }}>HT par bien</div>
              <div style={{ width: 32, height: 1, background: C_INK, margin: '24px auto' }}></div>
              {p.feats.map(f => (
                <div key={f} style={{ fontSize: 12, color: C_DIM, marginBottom: 6, fontStyle: 'italic', fontFamily: C_SERIF, fontSize: 14 }}>{f}</div>
              ))}
              <div style={{ marginTop: 24, fontSize: 11, fontWeight: 600, borderBottom: `1.5px solid ${C_INK}`, paddingBottom: 4, display: 'inline-block' }}>
                Réserver →
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* —— TESTIMONIAL — oversized opening quote ——————————— */}
      <div style={{ padding: '100px 48px', textAlign: 'center' }}>
        <div style={{ fontFamily: C_SERIF, fontSize: 140, color: C_ACCENT, lineHeight: 0.5, marginBottom: 0 }}>"</div>
        <div style={{ fontFamily: C_SERIF, fontSize: 40, fontWeight: 400, fontStyle: 'italic', lineHeight: 1.25, maxWidth: 800, margin: '0 auto', textWrap: 'balance' }}>
          Onze jours pour vendre. La vidéo a fait toute la différence — et nous avons gardé 14 000 € de marge.
        </div>
        <div style={{ marginTop: 32, fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: C_DIM }}>
          Marie L. — Pessac, Maison familiale 4 chambres
        </div>
        <div style={{ marginTop: 32, display: 'flex', justifyContent: 'center', gap: 10 }}>
          {[1, 2, 3, 4].map(i => (
            <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: i === 1 ? C_ACCENT : C_FAINT }}></div>
          ))}
        </div>
      </div>

      {/* —— ZONE GÉO — line map —————————————————————————————— */}
      <div style={{ padding: '60px 48px', borderTop: `1px solid ${C_FAINT}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: C_DIM }}>VI. — Territoire</div>
            <div style={{ fontFamily: C_SERIF, fontSize: 36, fontWeight: 400, letterSpacing: '-0.01em', marginTop: 12, lineHeight: 1.05 }}>
              Nouvelle-Aquitaine<br />& Île-de-France.
            </div>
            <div style={{ marginTop: 18, fontSize: 13, color: C_DIM, lineHeight: 1.6 }}>
              Déplacement inclus dans un rayon de 50 km. Au-delà, devis sur mesure.
            </div>
            <div style={{ marginTop: 24, columnCount: 2, fontSize: 12, color: C_INK, columnGap: 24 }}>
              {['Bordeaux', 'Arcachon', 'Saint-Émilion', 'La Rochelle', 'Biarritz', 'Bayonne', 'Paris', 'Versailles'].map(c => (
                <div key={c} style={{ marginBottom: 4, breakInside: 'avoid' }}>— {c}</div>
              ))}
            </div>
          </div>
          {/* simple line drawing of France */}
          <svg viewBox="0 0 300 280" style={{ width: '100%', height: 280 }}>
            <path d="M 80 30 L 150 25 L 210 50 L 240 100 L 250 160 L 220 210 L 180 240 L 130 245 L 80 230 L 50 200 L 40 150 L 50 90 Z"
              fill="none" stroke={C_INK} strokeWidth="1.2" />
            {[
              [90, 180, 'Bordeaux'],
              [70, 195, 'Arcachon'],
              [110, 230, 'Biarritz'],
              [180, 90, 'Paris'],
              [60, 140, 'La Rochelle'],
            ].map(([x, y, name], i) => (
              <g key={i}>
                <circle cx={x} cy={y} r="3" fill={C_ACCENT} />
                <text x={x + 8} y={y + 4} fontSize="9" fill={C_INK} fontFamily="serif" fontStyle="italic">{name}</text>
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* —— CARNET / blog — list with date ————————————————————— */}
      <div style={{ padding: '60px 48px', borderTop: `1px solid ${C_FAINT}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 32 }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: C_DIM }}>VII. — Carnet</div>
            <div style={{ fontFamily: C_SERIF, fontSize: 32, fontWeight: 400, letterSpacing: '-0.01em', marginTop: 8 }}>
              Notes & <em>conseils.</em>
            </div>
          </div>
          <div style={{ fontSize: 11, color: C_DIM, fontWeight: 600, borderBottom: `1.5px solid ${C_INK}`, paddingBottom: 2 }}>Tout le carnet →</div>
        </div>
        {[
          ['12.05.26', 'Cinq erreurs photo qui font fuir les acheteurs', 'Lumière · Composition'],
          ['28.04.26', 'Quand le drone est-il vraiment utile en immobilier ?', 'Aérien · Réglementation'],
          ['15.04.26', 'Vendre sans agence : retour d\'expérience d\'un client', 'PAP · Témoignage'],
        ].map(([date, t, cat], i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '100px 1fr 220px 80px', gap: 24, padding: '20px 0', borderTop: `1px solid ${C_FAINT}`, alignItems: 'baseline' }}>
            <div style={{ fontSize: 11, fontFamily: 'monospace', color: C_DIM, letterSpacing: '0.05em' }}>{date}</div>
            <div style={{ fontFamily: C_SERIF, fontSize: 20, fontWeight: 400 }}>{t}</div>
            <div style={{ fontSize: 11, color: C_DIM, fontStyle: 'italic' }}>{cat}</div>
            <div style={{ fontSize: 11, color: C_INK, fontWeight: 600, textAlign: 'right' }}>Lire →</div>
          </div>
        ))}
        <div style={{ borderTop: `1px solid ${C_FAINT}` }}></div>
      </div>

      {/* —— FOOTER ————————————————————————————————————————— */}
      <div style={{ padding: '80px 48px 40px' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{ fontFamily: C_SERIF, fontSize: 56, fontWeight: 400, letterSpacing: '-0.01em', lineHeight: 1.05 }}>
            Parlons de votre <em>bien</em>.
          </div>
          <div style={{ marginTop: 28, display: 'inline-flex', gap: 18, alignItems: 'center' }}>
            <span style={{ padding: '14px 28px', background: C_INK, color: C_BG, fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Prendre rendez-vous
            </span>
            <span style={{ fontSize: 12, color: C_DIM }}>ou écrivez à hello@acn-studio.fr</span>
          </div>
        </div>
        <div style={{ paddingTop: 24, borderTop: `1px solid ${C_INK}`, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <div style={{ fontFamily: C_SERIF, fontSize: 18, fontWeight: 500, letterSpacing: '0.05em' }}>A · C · N</div>
          <div style={{ display: 'flex', gap: 24, fontSize: 11, color: C_DIM, letterSpacing: '0.05em' }}>
            {['Instagram', 'YouTube', 'LinkedIn', 'Mentions légales'].map(x => <span key={x}>{x}</span>)}
          </div>
          <div style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: C_DIM }}>© MMXXVI</div>
        </div>
      </div>
    </div>
  );
}

window.DirectionC = DirectionC;
