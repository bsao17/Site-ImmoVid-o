// Page d'accueil ACN. Compilée et pré-rendue par scripts/build.mjs (npm run build).

// ─── CONTENU ─────────────────────────────────────────────────────────────────

const unsplash = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}`;

// Visuel d'accueil. Dès que l'extrait drone est prêt (MP4 de 10 à 20 s, sans
// titre incrusté), le déposer dans media/ et renseigner `video`.
const HERO = {
  video: null,
  image: unsplash('1613490493576-7fde63acd811', 2400),
  alt: 'Maison avec piscine vue du ciel',
};

const VIDEOS = [
  { id: 'VwtgjyW36R0', label: 'Jardin sauvage',  title: 'La beauté est un jardin sauvage' },
  { id: 'lhqjexkMRU8', label: 'Vol drone FPV',   title: 'Vol en Chimera Custom au-dessus d’un parc, avant les vendanges' },
  { id: 'cMjm1aVMTb0', label: 'Balade FPV',      title: 'Fais de ton rêve une idée, et de cette idée une balade en FPV' },
];

// Photos de reportages réels : { src: 'media/xxx.jpg', alt: '...' }. La grille
// n'apparaît que lorsqu'il y en a.
const PHOTOS = [];

const SERVICES = [
  { t: 'Photo HDR', d: 'Des pièces lumineuses et des volumes fidèles, même par temps gris. 15 à 25 photos retouchées par reportage.', s: 'Sony α7 IV, bracketing HDR, redressement des perspectives' },
  { t: 'Vidéo', d: 'Une visite filmée pièce par pièce : les acheteurs savent à quoi s’attendre avant de se déplacer.', s: 'Stabilisateur, grand-angle, 60 à 90 secondes' },
  { t: 'Drone', d: 'Le terrain, la piscine, la vue et ce qu’il y a autour, montrés en un seul plan.', s: 'Pilote certifié DGAC, autorisations de vol en règle' },
  { t: 'Montage', d: 'Des fichiers prêts à publier sur les portails, Instagram, TikTok et YouTube.', s: 'Étalonnage, musique sous licence, versions horizontale et verticale' },
];

const PLANS = [
  { n: 'Essentiel', p: 149, a: 129, sub: 'Reportage photo, pour un bien qui se suffit à lui-même.',
    f: ['15 à 20 photos HDR', 'Retouche et redressement', 'Photo aérienne incluse', 'Livraison en haute définition'] },
  { n: 'Signature', p: 279, a: 249, sub: 'Photo et vidéo, le duo qui fait la différence sur les portails.', featured: true,
    f: ['20 à 25 photos HDR', 'Vidéo de 60 à 90 secondes', 'Versions horizontale et verticale', 'Montage et musique sous licence'] },
  { n: 'Premium', p: 399, a: 369, sub: 'Photo, vidéo et drone, quand le site autorise le vol.',
    f: ['Tout le contenu Signature', 'Plans photo et vidéo au drone', 'Montage complet, version verticale', 'Site dédié au bien en option'] },
];

const AGENCY_TIERS = [
  { vol: '1 bien / mois', sub: 'pour tester', prices: ['149 €', '279 €', '399 €'] },
  { vol: '3 à 4 biens / mois', sub: 'le rythme courant', prices: ['129 €', '249 €', '369 €'], featured: true },
  { vol: '5 biens / mois et plus', sub: 'planning négocié', prices: ['Sur devis', 'Sur devis', 'Sur devis'] },
];
const AGENCY_ROWS = ['Photo', 'Photo et vidéo', 'Photo, vidéo et drone'];

const WEBSITES = [
  { n: 'Mini-site d’un bien', d: 'Une page dédiée : galerie, vidéo, description, carte, formulaire de contact.', p: '249 €', a: '199 €' },
  { n: 'Site vitrine d’agence', d: 'Accueil, équipe, mandats, contact. Responsive, référencement de base, mise en ligne incluse.', p: '990 à 1 490 €', a: 'Sur devis' },
  { n: 'Maintenance', d: 'Hébergement, certificat SSL, sauvegardes, mises à jour et petites modifications.', p: '49 à 79 € / mois', a: '49 € / mois' },
];

const STEPS = [
  { t: 'Prise de contact', d: 'Vous décrivez le bien et ce dont vous avez besoin. On commence par écouter, le devis vient après.' },
  { t: 'Repérage', d: 'On cale le projet ensemble et vous recevez un devis chiffré, clair et détaillé.' },
  { t: 'Tournage', d: 'Photo, vidéo, drone et, selon l’option choisie, site dédié au bien.' },
  { t: 'Livraison', d: 'Vous recevez les fichiers et le site est mis en ligne. L’annonce est prête.' },
];

// Positions projetées depuis les coordonnées réelles (1 unité ≈ 2 km).
const CITIES = [
  { name: 'La Rochelle',   x: 17.6, y: 16.1, big: true },
  { name: 'Île de Ré',     x: 9.0,  y: 13.9, left: true },
  { name: "Île d'Oléron",  x: 11.3, y: 28.3, left: true },
  { name: 'Royan',         x: 22.2, y: 46.1, big: true },
  { name: 'Bordeaux',      x: 39.8, y: 89.4, big: true, above: true },
  { name: 'Saint-Émilion', x: 56.2, y: 86.6 },
  { name: 'Arcachon',      x: 16.8, y: 99.3 },
  { name: 'Cap Ferret',    x: 13.7, y: 101.0, left: true },
];

const POSTS = [
  { t: 'Vendre sans agence : la méthode 2026, avec checklist', d: 'Notre méthode pas à pas pour vendre votre bien sans agence.', meta: '12 mai 2026, 8 min de lecture', photo: '1560518883-ce09059eeffa', url: 'articles/vendre-sans-agence-methode-2026/' },
  { t: '5 erreurs photo qui font fuir les acheteurs', meta: '28 avril, 4 min de lecture', photo: '1545324418-cc1a3fa10c00', url: 'articles/5-erreurs-photo-qui-font-fuir-les-acheteurs/' },
  { t: 'Quand le drone change vraiment la donne', meta: '15 avril, 5 min de lecture', photo: '1469474968028-56623f02e42e', url: 'articles/quand-le-drone-change-vraiment-la-donne/' },
  { t: 'Comment estimer son bien sans agence', meta: '2 avril, 6 min de lecture', photo: '1556909114-f6e7ad7d3136', url: 'articles/comment-estimer-son-bien-sans-agence/' },
];

const fmt = (n) => n.toLocaleString('fr-FR');

// ─── COMPOSANTS ──────────────────────────────────────────────────────────────

function Logo({ dark = false }) {
  const ink = dark ? '#fff' : '#262B30';
  return (
    <a href="/" className="logo" aria-label="ACN, accueil">
      <svg width="30" height="30" viewBox="0 0 56 56" aria-hidden="true">
        <circle cx="28" cy="28" r="24" fill="none" stroke={ink} strokeWidth="3" />
        {Array.from({ length: 6 }).map((_, i) => {
          const a = (i * 60 - 90) * Math.PI / 180;
          return <line key={i} x1={28 + Math.cos(a) * 6} y1={28 + Math.sin(a) * 6} x2={28 + Math.cos(a) * 20} y2={28 + Math.sin(a) * 20} stroke={ink} strokeWidth="3" strokeLinecap="round" />;
        })}
        <circle cx="28" cy="28" r="5.5" fill="#B8436A" />
      </svg>
      ACN
    </a>
  );
}

const NAV = [['Réalisations', '#portfolio'], ['Prestations', '#prestations'], ['Tarifs', '#tarifs'], ['Blog', '#blog']];

function Nav() {
  const [open, setOpen] = React.useState(false);
  const links = (
    <ul className="nav-links">
      {NAV.map(([t, h]) => <li key={h}><a href={h} onClick={() => setOpen(false)}>{t}</a></li>)}
    </ul>
  );
  return (
    <header className="nav">
      <div className="wrap">
        <div className="nav-bar">
          <Logo />
          {links}
          <div className="nav-actions">
            <a href="#contact" className="btn btn-primary btn-small">Demander un devis</a>
            <button type="button" className="nav-toggle" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
              {open ? 'Fermer' : 'Menu'}
            </button>
          </div>
        </div>
        <nav id="menu" className={open ? 'nav-panel open' : 'nav-panel'} aria-label="Menu">{links}</nav>
      </div>
    </header>
  );
}

function Hero() {
  const videoRef = React.useRef(null);
  React.useEffect(() => {
    const v = videoRef.current;
    if (v && window.matchMedia('(prefers-reduced-motion: reduce)').matches) v.pause();
  }, []);
  return (
    <section className="hero">
      {HERO.video
        ? <video ref={videoRef} className="hero-media" src={HERO.video} poster={HERO.image} autoPlay muted loop playsInline aria-hidden="true" />
        : <img className="hero-media" src={HERO.image} alt={HERO.alt} fetchpriority="high" />}
      <div className="wrap hero-body">
        <h1>Photo, vidéo et drone pour vendre vos biens.</h1>
        <p className="hero-lead">
          En Charente-Maritime et autour de Bordeaux, un seul interlocuteur du repérage à la mise en ligne,
          pour les agences comme pour les particuliers qui vendent seuls.
        </p>
        <div className="hero-actions">
          <a href="#agences" className="btn btn-primary">Je suis une agence</a>
          <a href="#pap" className="btn btn-light">Je vends seul</a>
        </div>
        <p className="hero-note">Reportage photo dès 149 €, déplacement inclus jusqu’à 50 km. Pilote drone certifié DGAC.</p>
      </div>
    </section>
  );
}

function Portfolio() {
  const [active, setActive] = React.useState(0);
  const [picked, setPicked] = React.useState(false);
  const v = VIDEOS[active];
  return (
    <section id="portfolio" className="section">
      <div className="wrap">
        <div className="head">
          <h2 className="title">Réalisations</h2>
          <p className="lead">Extraits de nos tournages : drone, visite filmée et montage.</p>
        </div>
        <div className="player">
          <iframe
            key={v.id}
            src={`https://www.youtube.com/embed/${v.id}${picked ? '?autoplay=1' : ''}`}
            title={v.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="reels" role="tablist" aria-label="Choisir une vidéo">
          {VIDEOS.map((x, i) => (
            <button key={x.id} type="button" role="tab" className="reel" aria-selected={i === active} title={x.title}
              onClick={() => { setActive(i); setPicked(true); }}>
              <img src={`https://i.ytimg.com/vi/${x.id}/mqdefault.jpg`} alt="" loading="lazy" />
              <span>{x.label}</span>
            </button>
          ))}
        </div>
        {PHOTOS.length > 0 && (
          <div className="gallery">
            {PHOTOS.map((p) => <img key={p.src} src={p.src} alt={p.alt} loading="lazy" />)}
          </div>
        )}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="prestations" className="section section-ciel">
      <div className="wrap">
        <div className="head">
          <h2 className="title">Prestations</h2>
          <p className="lead">Tournage, retouche et montage sont faits en interne : la personne qui vient sur place est celle qui vous livre les fichiers.</p>
        </div>
        <ul className="services">
          {SERVICES.map((s) => (
            <li key={s.t} className="service">
              <h3>{s.t}</h3>
              <p>{s.d}<small>{s.s}</small></p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Calculator() {
  const [price, setPrice] = React.useState(350000);
  const commission = Math.round(price * 0.04);
  const from = PLANS[0].p;
  return (
    <div className="calc">
      <div>
        <h3>Vendre seul, avec des visuels d’agence.</h3>
        <p>
          Une commission d’environ 4 % représente une somme importante. Vendre seul vous l’évite,
          mais votre annonce doit alors convaincre toute seule.
        </p>
        <label htmlFor="prix">Prix de votre bien <strong>{fmt(price)} €</strong></label>
        <input id="prix" type="range" min="100000" max="2000000" step="10000" value={price}
          onChange={(e) => setPrice(parseInt(e.target.value, 10))} />
      </div>
      <dl>
        <div><dt>Commission d’agence (≈ 4 %)</dt><dd>{fmt(commission)} €</dd></div>
        <div><dt>Reportage ACN</dt><dd>dès {from} €</dd></div>
        <div className="total"><dt>Écart</dt><dd>{fmt(commission - from)} €</dd></div>
      </dl>
    </div>
  );
}

function Pricing() {
  const [mode, setMode] = React.useState('particulier');
  // Les liens #agences et #pap (accueil, autres pages) ouvrent le bon onglet.
  React.useEffect(() => {
    const sync = () => {
      if (location.hash === '#agences') setMode('agence');
      if (location.hash === '#pap') setMode('particulier');
    };
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);
  const agency = mode === 'agence';
  return (
    <section id="tarifs" className="section">
      <span id="agences" /><span id="pap" />
      <div className="wrap">
        <div className="head">
          <h2 className="title">Tarifs</h2>
          <p className="lead">Prix TTC par bien. Tout est inclus : déplacement jusqu’à 50 km, tournage, post-production et livraison.</p>
        </div>

        <div className="switch" role="tablist" aria-label="Vous êtes">
          <button type="button" role="tab" aria-selected={!agency} onClick={() => setMode('particulier')}>Je vends seul</button>
          <button type="button" role="tab" aria-selected={agency} onClick={() => setMode('agence')}>Je suis une agence</button>
        </div>

        {!agency && (
          <>
            <div className="plans">
              {PLANS.map((p) => (
                <article key={p.n} className={p.featured ? 'plan plan-featured' : 'plan'}>
                  <h3>{p.n}</h3>
                  <p className="plan-sub">{p.sub}</p>
                  <div className="price">{p.p} €<small>par bien</small></div>
                  <ul>{p.f.map((f) => <li key={f}>{f}</li>)}</ul>
                  <a href="#contact" className={p.featured ? 'btn btn-primary' : 'btn btn-outline'}>Demander un devis</a>
                </article>
              ))}
            </div>
            <Calculator />
          </>
        )}

        {agency && (
          <>
            <div className="table-wrap">
              <table>
                <caption className="sr-only">Tarifs agences par bien, selon le volume mensuel</caption>
                <thead>
                  <tr>
                    <th scope="col">Formule</th>
                    {AGENCY_TIERS.map((t) => (
                      <th key={t.vol} scope="col" className={t.featured ? 'num col-featured' : 'num'}>{t.vol}<span>{t.sub}</span></th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {AGENCY_ROWS.map((row, r) => (
                    <tr key={row}>
                      <th scope="row">{row}</th>
                      {AGENCY_TIERS.map((t) => <td key={t.vol} data-label={t.vol} className={t.featured ? 'num col-featured' : 'num'}>{t.prices[r]}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="note">Le tarif partenaire s’applique au volume réellement commandé dans le mois, sans engagement. Un interlocuteur unique pour tous vos mandats.</p>
            <p style={{ marginTop: 24 }}><a href="#contact" className="btn btn-primary">Demander un devis</a></p>
          </>
        )}

        <div id="web" className="sub-block">
          <h3>Sites internet</h3>
          <p>Pour que vos visuels aient leur propre page, pas seulement une annonce.</p>
          <div className="table-wrap">
            <table>
              <caption className="sr-only">Tarifs des sites internet</caption>
              <thead>
                <tr><th scope="col">Offre</th><th scope="col">Contenu</th><th scope="col" className="num">{agency ? 'Tarif agence' : 'Tarif'}</th></tr>
              </thead>
              <tbody>
                {WEBSITES.map((w) => (
                  <tr key={w.n}><th scope="row">{w.n}</th><td>{w.d}</td><td className="num" data-label={agency ? 'Tarif agence' : 'Tarif'}>{agency ? w.a : w.p}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="deroule" className="section section-ciel">
      <div className="wrap">
        <div className="head"><h2 className="title">Comment ça se passe</h2></div>
        <ol className="steps">
          {STEPS.map((s) => <li key={s.t}><h3>{s.t}</h3><p>{s.d}</p></li>)}
        </ol>
      </div>
    </section>
  );
}

function Zone() {
  return (
    <section id="zone" className="section">
      <div className="wrap zone">
        <div>
          <h2 className="title">Zone d’intervention</h2>
          <p className="lead">
            Déplacement inclus dans un rayon de 50 km autour de Royan, La Rochelle et Bordeaux.
            Au-delà, on établit un devis sur mesure.
          </p>
          <p style={{ marginTop: 16, color: 'var(--ardoise-doux)' }}>
            En Charente-Maritime, 22 % des logements sont des résidences secondaires (INSEE, 2023), plus du double
            de la moyenne nationale : beaucoup d’acheteurs découvrent le bien à distance, en photo et en vidéo.
          </p>
          <ul className="cities">{CITIES.map((c) => <li key={c.name}>{c.name}</li>)}</ul>
        </div>
        <div className="map">
          <svg viewBox="-25 -15 125 140" width="100%" height="100%" role="img" aria-label="Carte : rayon de 50 km autour de La Rochelle, Royan et Bordeaux">
            {CITIES.filter((c) => c.big).map((c) => (
              <circle key={'r' + c.name} cx={c.x} cy={c.y} r="25" fill="rgba(63,107,85,.10)" stroke="#3F6B55" strokeOpacity=".5" strokeWidth=".4" strokeDasharray="1.5 1" />
            ))}
            {CITIES.map((c) => (
              <g key={c.name}>
                <circle cx={c.x} cy={c.y} r={c.big ? 2.2 : 1.4} fill={c.big ? '#B8436A' : '#3F6B55'} />
                <text x={c.above ? c.x : c.left ? c.x - 2.8 : c.x + 2.8} y={c.above ? c.y - 4 : c.y + 1.6} textAnchor={c.above ? 'middle' : c.left ? 'end' : 'start'}
                  fontSize={c.big ? 5.4 : 4.2} fill="#262B30" fontFamily="Archivo, sans-serif" fontWeight={c.big ? 700 : 500}>{c.name}</text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}

function Blog() {
  const [first, ...rest] = POSTS;
  return (
    <section id="blog" className="section section-ciel">
      <div className="wrap">
        <div className="head"><h2 className="title">Conseils pour vendre</h2></div>
        <div className="posts">
          <a href={first.url} className="post">
            <img src={unsplash(first.photo, 1000)} alt="" loading="lazy" />
            <h3>{first.t}</h3>
            <p>{first.d}</p>
            <div className="meta">{first.meta}</div>
          </a>
          <ul className="post-list">
            {rest.map((a) => (
              <li key={a.url}>
                <a href={a.url} className="post-row">
                  <img src={unsplash(a.photo, 300)} alt="" loading="lazy" />
                  <div><h3>{a.t}</h3><div className="meta">{a.meta}</div></div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formStatus, setFormStatus] = React.useState('idle');
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('loading');
    fetch(e.target.action, { method: 'POST', body: new FormData(e.target) })
      .then(r => { if (!r.ok) throw Error(); setFormStatus('success'); })
      .catch(() => setFormStatus('error'));
  };
  return (
    <section id="contact" className="section">
      <div className="wrap contact">
        <div>
          <h2 className="title">Demander un devis</h2>
          <p className="lead">Décrivez le bien : on vous répond sous 24 h avec une proposition chiffrée et un créneau de tournage. Le devis est gratuit.</p>
          <p className="contact-mail"><a href="mailto:contact@acn-studio.fr">contact@acn-studio.fr</a></p>
        </div>
        {formStatus === 'success' ? (
          <div className="form-done" role="status">
            <strong>Demande envoyée.</strong>
            Merci ! On vous répond sous 24 h.
          </div>
        ) : (
          <form action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit} className="form">
            <input type="hidden" name="subject" value="Nouveau devis ACN" />
            <input type="hidden" name="access_key" value="22a373dc-cbea-4a06-8d1c-5f616773988d" />
            <label className="field">Nom<input name="name" autoComplete="name" /></label>
            <label className="field">Vous êtes
              <select name="profil" defaultValue="Particulier">
                <option>Particulier</option>
                <option>Agence immobilière</option>
                <option>Autre</option>
              </select>
            </label>
            <label className="field">Email<input name="email" type="email" required autoComplete="email" /></label>
            <label className="field">Téléphone (facultatif)<input name="phone" type="tel" autoComplete="tel" /></label>
            <label className="field field-full">Votre bien et votre besoin
              <textarea name="message" placeholder="Type de bien, ville, prestations souhaitées, date idéale…" />
            </label>
            {formStatus === 'error' && (
              <p className="form-msg error" role="alert">Erreur d'envoi. Réessayez ou écrivez-nous à contact@acn-studio.fr</p>
            )}
            <button type="submit" className="btn btn-primary" disabled={formStatus === 'loading'}>
              {formStatus === 'loading' ? 'Envoi en cours…' : 'Demander un devis'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Logo dark />
            <p style={{ marginTop: 14, maxWidth: 30 + 'em' }}>Photo, vidéo, drone et sites internet pour l’immobilier, en Charente-Maritime et autour de Bordeaux.</p>
          </div>
          <div>
            <h2>Le site</h2>
            <ul>
              {[...NAV, ['Contact', '#contact']].map(([t, h]) => <li key={h}><a href={h}>{t}</a></li>)}
            </ul>
          </div>
          <div>
            <h2>Contact</h2>
            <ul>
              <li><a href="mailto:contact@acn-studio.fr">contact@acn-studio.fr</a></li>
              <li>Royan, La Rochelle, Bordeaux</li>
            </ul>
          </div>
        </div>
        <div className="footer-legal">
          <span>© 2026 ACN</span>
          <a href="mentions-legales/">Mentions légales</a>
          <a href="cgv/">Conditions générales de vente</a>
          <a href="politique-confidentialite/">Politique de confidentialité</a>
        </div>
      </div>
    </footer>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <Pricing />
        <Process />
        <Zone />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

if (typeof window !== 'undefined') {
  ReactDOM.hydrateRoot(document.getElementById('root'), <App />);
}
