// Direction A — Magazine Éditorial
// Cover-story feel: asymmetric grids, big serif headlines, oversized
// numbers, kicker tags, pull quotes, edition info, captions.

const A_ACCENT = '#b8351c'; // editorial red
const A_SERIF = '"Fraunces", "Playfair Display", Georgia, serif';

function DirectionA() {
  const ink = WF.ink;
  const accent = A_ACCENT;

  return (
    <WPage>
      {/* —— Masthead nav ———————————————————————————————————————— */}
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', padding: '20px 40px', borderBottom: `2px solid ${ink}` }}>
        <div style={{ fontFamily: WF.ui, fontSize: 9, letterSpacing: '0.25em', fontWeight: 700, color: WF.inkDim }}>ÉDITION N°47 — MAI 2026</div>
        <div style={{ fontFamily: A_SERIF, fontWeight: 800, fontSize: 28, letterSpacing: '-0.04em' }}>
          ACN<span style={{ color: accent }}>.</span>
        </div>
        <div style={{ fontFamily: WF.ui, fontSize: 9, letterSpacing: '0.25em', fontWeight: 700, color: WF.inkDim }}>PRODUCTION VISUELLE</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 28, padding: '12px 40px', fontSize: 11, fontFamily: WF.ui, fontWeight: 500, color: WF.inkDim, borderBottom: `1px solid ${WF.inkFaint}` }}>
        {['À la une', 'Prestations', 'Vente PAP', 'Portfolio', 'Tarifs', 'Journal', 'Contact'].map(x => <span key={x}>{x}</span>)}
      </div>

      {/* —— HERO : magazine cover ————————————————————————————— */}
      <div style={{ padding: '32px 40px 16px', position: 'relative' }}>
        <WNote style={{ position: 'absolute', top: 8, right: 40 }}>
          ↗ titre serif "magazine"
        </WNote>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 32, alignItems: 'end' }}>
          <div>
            <div style={{ fontFamily: WF.ui, fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: accent, marginBottom: 18 }}>
              Cover Story · Vente Particulier
            </div>
            <div style={{ fontFamily: A_SERIF, fontSize: 64, lineHeight: 0.95, fontWeight: 600, letterSpacing: '-0.025em', textWrap: 'balance' }}>
              L'image,<br />
              c'est ce qui<br />
              <em style={{ color: accent }}>vend</em> votre bien.
            </div>
            <div style={{ marginTop: 24, maxWidth: 360, fontSize: 13, lineHeight: 1.55, color: WF.inkDim }}>
              Drone, photo & vidéo haute définition pour particuliers vendeurs. Sans commission d'agence — vous gardez la marge.
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
              <WBtn primary accent={accent}>Vendre mon bien →</WBtn>
              <WBtn accent={accent}>Voir le portfolio</WBtn>
            </div>
          </div>
          <WPhoto label="DRONE · VILLA" accent={accent} style={{ height: 360, borderRadius: 0 }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24, paddingTop: 16, borderTop: `1px solid ${ink}`, fontSize: 10, fontFamily: WF.ui, letterSpacing: '0.18em', textTransform: 'uppercase', color: WF.inkDim }}>
          <span>↓ Faites défiler</span>
          <span>Réponse sous 24h · Devis gratuit</span>
          <span>p. 02 — Prestations</span>
        </div>
      </div>

      {/* —— TABLE OF CONTENTS / Services ——————————————————————— */}
      <div style={{ padding: '60px 40px 40px', background: '#f3f1eb', borderTop: `1px solid ${ink}`, borderBottom: `1px solid ${ink}`, position: 'relative' }}>
        <WNote style={{ position: 'absolute', top: 12, right: 40 }} accent={accent}>
          sommaire éditorial
        </WNote>
        <WSectionTag>Sommaire — Prestations</WSectionTag>
        <div style={{ fontFamily: A_SERIF, fontSize: 36, fontWeight: 600, letterSpacing: '-0.02em', marginTop: 8, marginBottom: 28 }}>
          Du ciel au salon, en quatre actes.
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: `1px solid ${ink}` }}>
          {[
            ['01', 'Drone 4K', 'Aérien'],
            ['02', 'Photo HDR', 'Intérieur'],
            ['03', 'Vidéo cinéma', 'Visite'],
            ['04', 'Post-production', 'Montage'],
          ].map(([n, t, sub]) => (
            <div key={n} style={{ borderRight: n !== '04' ? `1px solid ${ink}` : 'none', padding: '20px 16px' }}>
              <div style={{ fontFamily: A_SERIF, fontStyle: 'italic', fontSize: 36, color: accent, lineHeight: 1 }}>{n}</div>
              <div style={{ fontFamily: A_SERIF, fontSize: 20, fontWeight: 600, marginTop: 12 }}>{t}</div>
              <div style={{ fontSize: 10, color: WF.inkDim, letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 4 }}>{sub}</div>
              <div style={{ marginTop: 12 }}>
                <WLines count={3} widths={['100%', '90%', '60%']} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* —— FEATURE: PAP focus —————————————————————————————— */}
      <div style={{ padding: '64px 40px', position: 'relative' }}>
        <WSectionTag color={accent}>Feature · Vente Particulier-à-Particulier</WSectionTag>
        <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 32, marginTop: 16 }}>
          <div>
            <div style={{ fontFamily: A_SERIF, fontSize: 38, lineHeight: 1.05, fontWeight: 600, letterSpacing: '-0.02em' }}>
              Vendez comme un pro, sans les frais d'agence.
            </div>
            <div style={{ marginTop: 18, fontSize: 12.5, lineHeight: 1.6, color: WF.inkDim, columnCount: 1 }}>
              Dans la vente PAP, le premier contact se joue en 3 secondes sur l'annonce. La qualité des visuels fait la différence entre un bien qui stagne et un bien qui se vend au prix fort.
            </div>
            <div style={{ marginTop: 24, paddingTop: 16, borderTop: `1px solid ${ink}` }}>
              {['Volumes & lumière valorisés', 'Vidéo immersive qui filtre les visites', 'Drone pour situer l\'environnement'].map(x => (
                <div key={x} style={{ display: 'flex', gap: 10, marginBottom: 8, fontSize: 12 }}>
                  <span style={{ color: accent, fontFamily: A_SERIF, fontStyle: 'italic' }}>—</span>
                  <span>{x}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <WPhoto label="INTÉRIEUR · SALON" accent={accent} style={{ height: 280, borderRadius: 0 }} />
            <div style={{ fontSize: 9, fontFamily: WF.ui, letterSpacing: '0.15em', textTransform: 'uppercase', color: WF.inkDim, marginTop: 8 }}>
              Fig. 01 — Visite filmée 4K, Bordeaux centre.
            </div>
            <div style={{ marginTop: 20, padding: '20px 24px', borderLeft: `3px solid ${accent}`, background: '#f8f6f0' }}>
              <div style={{ fontFamily: A_SERIF, fontSize: 22, fontStyle: 'italic', lineHeight: 1.3, fontWeight: 500 }}>
                « Vendu en 11 jours, au prix demandé. La vidéo drone a fait toute la différence. »
              </div>
              <div style={{ marginTop: 10, fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: WF.inkDim }}>
                Marie L. — Maison, Pessac
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* —— STATS — oversized numbers ————————————————————————— */}
      <div style={{ padding: '48px 40px', background: ink, color: WF.paper, position: 'relative' }}>
        <WNote style={{ position: 'absolute', top: 8, right: 40, color: '#fff' }}>
          chiffres en gros, captions en petit
        </WNote>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {[
            ['127', 'Biens shootés', '2023-2026'],
            ['-30%', 'Temps de vente moyen', 'vs. annonces sans vidéo'],
            ['×4', 'Vues sur annonces', 'effet vidéo + drone'],
            ['×98%', 'Clients satisfaits', 'satisfaction garantie'],
          ].map(([n, t, s], i) => (
            <div key={i} style={{ borderLeft: i ? `1px solid rgba(255,255,255,0.15)` : 'none', paddingLeft: i ? 20 : 0 }}>
              <div style={{ fontFamily: A_SERIF, fontSize: 56, fontWeight: 600, lineHeight: 1, letterSpacing: '-0.03em', color: i === 1 ? accent : WF.paper }}>{n}</div>
              <div style={{ fontFamily: A_SERIF, fontSize: 14, fontStyle: 'italic', marginTop: 8 }}>{t}</div>
              <div style={{ fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginTop: 6 }}>{s}</div>
            </div>
          ))}
        </div>
      </div>

      {/* —— PORTFOLIO gallery — asymmetric ————————————————————— */}
      <div style={{ padding: '64px 40px', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 24 }}>
          <div>
            <WSectionTag>Portfolio — Reportages récents</WSectionTag>
            <div style={{ fontFamily: A_SERIF, fontSize: 38, fontWeight: 600, letterSpacing: '-0.02em', marginTop: 8 }}>
              Six reportages, six histoires.
            </div>
          </div>
          <div style={{ fontFamily: WF.ui, fontSize: 11, color: WF.inkDim }}>
            Voir tous les projets →
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gridAutoRows: '120px', gap: 12 }}>
          <WPhoto label="VILLA #01" accent={accent} style={{ gridColumn: 'span 4', gridRow: 'span 2' }} />
          <WPhoto label="DRONE #02" style={{ gridColumn: 'span 2', gridRow: 'span 1' }} />
          <WPhoto label="LOFT #03" style={{ gridColumn: 'span 2', gridRow: 'span 1' }} />
          <WPhoto label="JARDIN #04" style={{ gridColumn: 'span 2', gridRow: 'span 2' }} />
          <WPhoto label="CHALET #05" style={{ gridColumn: 'span 2', gridRow: 'span 2' }} />
          <WPhoto label="APPART #06" accent={accent} style={{ gridColumn: 'span 2', gridRow: 'span 1' }} />
        </div>
      </div>

      {/* —— PROCESS — numbered editorial steps —————————————————— */}
      <div style={{ padding: '64px 40px', background: '#f3f1eb', borderTop: `1px solid ${ink}`, position: 'relative' }}>
        <WNote style={{ position: 'absolute', top: 12, right: 40 }} accent={accent}>process façon longread
        </WNote>
        <WSectionTag>Comment ça marche</WSectionTag>
        <div style={{ fontFamily: A_SERIF, fontSize: 38, fontWeight: 600, letterSpacing: '-0.02em', marginTop: 8, marginBottom: 32 }}>
          Quatre étapes, zéro friction.
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px 48px' }}>
          {[
            ['I.', 'Prise de contact', 'Vous nous décrivez vos besoins et votre projet.'],
            ['II.', 'Repérage', 'On finalise le projet ensemble et devis chiffré.'],
            ['III.', 'Tournage', 'Réalisation : vidéo, photos, réseaux sociaux, site internet (selon option choisie).'],
            ['IV.', 'Présentation', 'Livraison des livrables et mise en production.'],
          ].map(([r, t, d], i) => (
            <div key={i} style={{ display: 'flex', gap: 20 }}>
              <div style={{ fontFamily: A_SERIF, fontStyle: 'italic', fontSize: 44, color: accent, lineHeight: 1, flex: '0 0 60px' }}>{r}</div>
              <div>
                <div style={{ fontFamily: A_SERIF, fontSize: 22, fontWeight: 600 }}>{t}</div>
                <div style={{ fontSize: 12, color: WF.inkDim, marginTop: 6, lineHeight: 1.5 }}>{d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* —— TARIFS / formules ————————————————————————————————— */}
      <div style={{ padding: '64px 40px' }}>
        <WSectionTag>Tarifs</WSectionTag>
        <div style={{ fontFamily: A_SERIF, fontSize: 38, fontWeight: 600, letterSpacing: '-0.02em', marginTop: 8, marginBottom: 28 }}>
          Trois formules, transparentes.
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: `2px solid ${ink}`, borderBottom: `2px solid ${ink}` }}>
          {[
            { name: 'Essentiel', price: '290', tag: 'Studio', items: ['Reportage photo HDR', '15 photos retouchées'] },
            { name: 'Signature', price: '590', tag: 'Le + demandé', items: ['Photo HDR + Vidéo visite', 'Drone 4K (si autorisé)', 'Montage 2 min'], featured: true },
            { name: 'Premium', price: '890', tag: 'Bien d\'exception', items: ['Tout Signature inclus', 'Visite virtuelle 3D', 'Montage cinéma 3 min', 'Plans 2D + descriptif'] },
          ].map((p, i) => (
            <div key={i} style={{
              borderLeft: i ? `1px solid ${ink}` : 'none',
              padding: '28px 22px',
              background: p.featured ? '#1a1a1a' : 'transparent',
              color: p.featured ? WF.paper : ink,
            }}>
              <div style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: p.featured ? accent : WF.inkDim, fontWeight: 700 }}>{p.tag}</div>
              <div style={{ fontFamily: A_SERIF, fontSize: 26, fontWeight: 600, marginTop: 8 }}>{p.name}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 14 }}>
                <span style={{ fontFamily: A_SERIF, fontSize: 48, fontWeight: 600 }}>{p.price}</span>
                <span style={{ fontFamily: A_SERIF, fontSize: 20 }}>€</span>
                <span style={{ fontSize: 11, color: p.featured ? 'rgba(255,255,255,0.5)' : WF.inkDim, marginLeft: 4 }}>HT · bien</span>
              </div>
              <div style={{ marginTop: 18, borderTop: `1px solid ${p.featured ? 'rgba(255,255,255,0.15)' : WF.inkFaint}`, paddingTop: 14 }}>
                {p.items.map(it => (
                  <div key={it} style={{ fontSize: 12, marginBottom: 8, display: 'flex', gap: 8 }}>
                    <span style={{ color: accent }}>✓</span> {it}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 18 }}>
                <WBtn primary={p.featured} accent={p.featured ? accent : ink} style={p.featured ? { borderColor: accent, background: accent } : null}>
                  Choisir
                </WBtn>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* —— TESTIMONIALS — pull quotes —————————————————————————— */}
      <div style={{ padding: '64px 40px', background: '#f3f1eb', borderTop: `1px solid ${ink}` }}>
        <WSectionTag>Ce qu'on en dit</WSectionTag>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, marginTop: 24 }}>
          {[
            ['« 11 jours pour vendre. Du jamais vu sur ma rue. »', 'Marie L. · Pessac'],
            ['« Le drone a fait basculer la décision de l\'acheteur. »', 'Julien R. · Arcachon'],
            ['« Économie : 14 000 € de commission. Service impeccable. »', 'Famille D. · Bordeaux'],
          ].map(([q, a], i) => (
            <div key={i}>
              <div style={{ fontFamily: A_SERIF, fontSize: 36, color: accent, lineHeight: 0.8 }}>"</div>
              <div style={{ fontFamily: A_SERIF, fontSize: 17, fontStyle: 'italic', lineHeight: 1.35, marginTop: -8 }}>{q}</div>
              <div style={{ marginTop: 14, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: WF.inkDim }}>{a}</div>
            </div>
          ))}
        </div>
      </div>

      {/* —— ZONE GÉO ————————————————————————————————————————— */}
      <div style={{ padding: '64px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
        <div>
          <WSectionTag>Zone d'intervention</WSectionTag>
          <div style={{ fontFamily: A_SERIF, fontSize: 36, fontWeight: 600, letterSpacing: '-0.02em', marginTop: 8 }}>
            Nouvelle-Aquitaine & Île-de-France.
          </div>
          <div style={{ marginTop: 16, fontSize: 13, color: WF.inkDim, lineHeight: 1.55 }}>
            Déplacement inclus dans un rayon de 50 km. Au-delà, devis sur mesure pour les biens d'exception.
          </div>
          <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, fontSize: 12 }}>
            {['Bordeaux', 'Arcachon', 'Saint-Émilion', 'La Rochelle', 'Biarritz', 'Paris 75', 'Versailles', 'Île de Ré'].map(c => (
              <div key={c} style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                <span style={{ color: accent }}>●</span>{c}
              </div>
            ))}
          </div>
        </div>
        <WPhoto label="CARTE FRANCE — pins éditoriaux" accent={accent} style={{ height: 240, borderRadius: 0 }} />
      </div>

      {/* —— BLOG / Journal ————————————————————————————————————— */}
      <div style={{ padding: '48px 40px 64px', background: '#f3f1eb', borderTop: `1px solid ${ink}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 24 }}>
          <div>
            <WSectionTag>Le Journal — conseils vente PAP</WSectionTag>
            <div style={{ fontFamily: A_SERIF, fontSize: 32, fontWeight: 600, letterSpacing: '-0.02em', marginTop: 8 }}>
              Articles récents.
            </div>
          </div>
          <div style={{ fontFamily: WF.ui, fontSize: 11, color: WF.inkDim }}>Tout le journal →</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {[
            ['Lumière', '5 erreurs photo qui font fuir les acheteurs.'],
            ['Drone', 'Quand le drone est-il vraiment utile ?'],
            ['Vente PAP', 'Combien j\'ai économisé en vendant sans agence.'],
          ].map(([cat, title], i) => (
            <div key={i}>
              <WPhoto style={{ height: 140, borderRadius: 0 }} accent={i === 0 ? accent : undefined} />
              <div style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: accent, fontWeight: 700, marginTop: 14 }}>{cat}</div>
              <div style={{ fontFamily: A_SERIF, fontSize: 19, fontWeight: 600, lineHeight: 1.25, marginTop: 6 }}>{title}</div>
              <div style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: WF.inkDim, marginTop: 10 }}>12 mai · 4 min de lecture</div>
            </div>
          ))}
        </div>
      </div>

      {/* —— Footer / contact ————————————————————————————————— */}
      <div style={{ padding: '48px 40px', background: ink, color: WF.paper }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 40, alignItems: 'start' }}>
          <div>
            <div style={{ fontFamily: A_SERIF, fontSize: 36, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.05 }}>
              Parlons de<br />votre bien.
            </div>
            <div style={{ marginTop: 16, fontSize: 13, color: 'rgba(255,255,255,0.6)', maxWidth: 320, lineHeight: 1.55 }}>
              Devis chiffré sous 24h. Réponse personnalisée, jamais un template.
            </div>
            <div style={{ marginTop: 20, display: 'flex', gap: 12 }}>
              <WBtn primary accent={accent}>Demander un devis</WBtn>
              <WBtn style={{ color: WF.paper, borderColor: 'rgba(255,255,255,0.4)' }}>06 12 34 56 78</WBtn>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, fontSize: 11, color: 'rgba(255,255,255,0.7)' }}>
            <div>
              <div style={{ fontWeight: 700, color: WF.paper, marginBottom: 10, letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: 10 }}>Navigation</div>
              {['Prestations', 'Tarifs', 'Portfolio', 'Journal'].map(x => <div key={x} style={{ marginBottom: 4 }}>{x}</div>)}
            </div>
            <div>
              <div style={{ fontWeight: 700, color: WF.paper, marginBottom: 10, letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: 10 }}>Suivez-nous</div>
              {['Instagram', 'YouTube', 'LinkedIn'].map(x => <div key={x} style={{ marginBottom: 4 }}>{x}</div>)}
            </div>
          </div>
        </div>
        <div style={{ marginTop: 32, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.15)', display: 'flex', justifyContent: 'space-between', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
          <span>© 2026 ACN Production</span>
          <span>Télépilote certifié DGAC — SIRET 000 000 000</span>
        </div>
      </div>
    </WPage>
  );
}

window.DirectionA = DirectionA;
