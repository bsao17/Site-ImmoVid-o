// Main app — assembles the design canvas with all wireframe directions + logos.

function App() {
  return (
    <DesignCanvas>
      <DCSection
        id="intro"
        title="ACN — Nouvelle maquette du site"
        subtitle="Phase 1 · Wireframes basse fidélité pour explorer la structure et l'ambiance. On choisira une direction (ou un mix) puis on passera en haute fidélité."
      >
        <DCArtboard id="intro-card" label="Lisez-moi" width={520} height={520}>
          <IntroCard />
        </DCArtboard>
      </DCSection>

      <DCSection
        id="directions"
        title="4 directions visuelles"
        subtitle="Chaque maquette présente l'intégralité de la page d'accueil. Mêmes sections (hero, prestations, focus PAP, stats, portfolio, process, tarifs, témoignages, zone, blog) — quatre traitements visuels radicalement différents."
      >
        <DCArtboard id="dir-a" label="A · Magazine Éditorial" width={760} height={3800}>
          <DirectionA />
        </DCArtboard>
        <DCArtboard id="dir-b" label="B · Cinéma Sombre Premium" width={760} height={3900}>
          <DirectionB />
        </DCArtboard>
        <DCArtboard id="dir-c" label="C · Architectural Minimal" width={760} height={4100}>
          <DirectionC />
        </DCArtboard>
        <DCArtboard id="dir-d" label="D · Bold Cinema Dynamique" width={760} height={4300}>
          <DirectionD />
        </DCArtboard>
      </DCSection>

      <DCSection
        id="logos"
        title="Variantes de logotype"
        subtitle="Six pistes — du wordmark actuel raffiné à un pictogramme drone. À choisir indépendamment de la direction visuelle."
      >
        <DCArtboard id="logos" label="Logotype · 6 pistes" width={720} height={920}>
          <LogoBoard />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

function IntroCard() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      padding: 32,
      background: '#fafaf7',
      fontFamily: WF.ui,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      overflow: 'hidden',
    }}>
      <div style={{ fontFamily: WF.hand, fontSize: 32, color: '#b8351c', lineHeight: 1 }}>
        Maquette ACN —<br />4 directions à explorer.
      </div>
      <div style={{ fontSize: 13, lineHeight: 1.6, color: '#444' }}>
        Le site actuel est propre mais peut être poussé sur l'impact visuel et la confiance. Voici 4 directions très différentes pour la page d'accueil — toutes en mode wireframe pour rester sur la <strong>structure</strong> et l'<strong>ambiance</strong> avant le détail.
      </div>
      <div style={{ borderTop: '1px solid #e5e2da', paddingTop: 12, marginTop: 4 }}>
        <div style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888', fontWeight: 700, marginBottom: 8 }}>Les 4 directions</div>
        {[
          ['A', 'Magazine Éditorial', 'Cover-story, serif, asymétries, nombres oversized. Pour positionner ACN comme un studio sérieux et raffiné.', '#b8351c'],
          ['B', 'Cinéma Sombre Premium', 'Dark + doré, letterbox, film strip, awards. Pour les biens d\'exception et le corporate haut de gamme.', '#c9a961'],
          ['C', 'Architectural Minimal', 'Beige, beaucoup d\'espace, serif Garamond. Pour un positionnement architecte / galerie d\'art.', '#7a5a3a'],
          ['D', 'Bold Cinema Dynamique', 'Orange vif, gras, marquee, comparateur, sticky CTA. Conversion-first, moderne, énergique.', '#ff5a1f'],
        ].map(([letter, title, desc, color]) => (
          <div key={letter} style={{ display: 'flex', gap: 12, marginBottom: 10 }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 13, flex: '0 0 28px' }}>{letter}</div>
            <div style={{ fontSize: 12 }}>
              <strong>{title}</strong>
              <div style={{ color: '#666', lineHeight: 1.4, marginTop: 2 }}>{desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{
        marginTop: 'auto',
        padding: 12,
        background: '#fff8e1',
        border: '1px dashed #d4a017',
        borderRadius: 10,
        fontSize: 12,
        color: '#5a4a10',
        lineHeight: 1.45,
      }}>
        <strong>Étape suivante :</strong> dites-moi laquelle vous parle le plus (ou un mix : "ambiance B + structure D"). Je pousse en haute fidélité avec vraies photos Unsplash, vrais composants, et Tweaks (palette + densité).
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
