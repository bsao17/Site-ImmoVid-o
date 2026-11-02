// Pages locales (une par base). Rendues en HTML statique par scripts/build.mjs,
// avec les composants et données de src/app.jsx (Logo, Footer, SERVICES, PLANS).

const CITY_PAGES = [
  {
    slug: 'photographe-immobilier-royan',
    city: 'Royan',
    title: 'Photographe immobilier à Royan : photo, vidéo, drone | ACN',
    description: 'Reportages photo HDR, vidéo et drone pour vendre ou louer un bien à Royan et sur la Côte de Beauté. Agences et particuliers, devis sous 24 h, dès 149 €.',
    h1: 'Photo, vidéo et drone immobilier à Royan',
    lead: 'Pour les agences et les particuliers de Royan et de la Côte de Beauté : un reportage complet, du repérage à la mise en ligne, avec déplacement inclus.',
    local: [
      'Reconstruite après 1945, Royan est l’une des villes de France les plus marquées par l’architecture des années 1950 : villas aux lignes nettes, immeubles du front de mer, grandes baies vitrées. Ces biens se vendent sur leur lumière et leurs volumes, exactement ce que la photo HDR restitue.',
      'Autour, la Côte de Beauté mêle villas balnéaires, maisons charentaises et résidences secondaires. Beaucoup d’acheteurs viennent de loin et découvrent le bien d’abord en photo et en vidéo : la qualité des visuels décide souvent de la visite.',
    ],
    communes: ['Royan', 'Saint-Georges-de-Didonne', 'Vaux-sur-Mer', 'Saint-Palais-sur-Mer', 'Meschers-sur-Gironde', 'Talmont-sur-Gironde', 'La Tremblade', 'Saujon', 'Marennes', 'Saintes'],
    drone: 'Le drone ne survole ni les plages fréquentées ni les rassemblements, et les abords de l’aérodrome de Royan-Médis sont réglementés. Pour un bien en bord de mer, on planifie le vol tôt le matin ou hors saison, et on s’occupe des démarches.',
  },
  {
    slug: 'photographe-immobilier-la-rochelle',
    city: 'La Rochelle',
    title: 'Photographe immobilier à La Rochelle : photo, vidéo, drone | ACN',
    description: 'Reportages photo HDR, vidéo et drone pour vendre ou louer un bien à La Rochelle, sur l’île de Ré et dans l’agglomération. Devis sous 24 h, dès 149 €.',
    h1: 'Photo, vidéo et drone immobilier à La Rochelle',
    lead: 'Pour les agences et les particuliers de La Rochelle, de l’île de Ré et de l’agglomération : un reportage complet, du repérage à la mise en ligne, avec déplacement inclus.',
    local: [
      'Entre le centre historique à arcades, les maisons de ville en pierre de taille et les appartements des Minimes, les biens rochelais ont souvent des pièces étroites ou peu éclairées. Le bracketing HDR et le grand-angle permettent de les montrer tels qu’ils sont, lumineux et sans déformation.',
      'Sur l’île de Ré, les maisons basses aux volets colorés et les résidences secondaires se louent et se vendent beaucoup à distance : une vidéo de visite et des plans aériens du jardin ou de la proximité de la mer font la différence.',
    ],
    communes: ['La Rochelle', 'Lagord', 'Puilboreau', 'Périgny', 'Aytré', 'Angoulins', 'Châtelaillon-Plage', 'Nieul-sur-Mer', 'Île de Ré', 'Marans', 'Rochefort'],
    drone: 'Une grande partie de l’agglomération se trouve dans la zone de l’aéroport La Rochelle–Île de Ré : les vols y demandent une autorisation préalable. On vérifie l’adresse avant le tournage et on fait les demandes pour vous.',
  },
  {
    slug: 'photographe-immobilier-bordeaux',
    city: 'Bordeaux',
    title: 'Photographe immobilier à Bordeaux : photo, vidéo, drone | ACN',
    description: 'Reportages photo HDR, vidéo et drone pour vendre ou louer un bien à Bordeaux et dans la métropole. Agences et particuliers, devis sous 24 h, dès 149 €.',
    h1: 'Photo, vidéo et drone immobilier à Bordeaux',
    lead: 'Pour les agences et les particuliers de Bordeaux et de la métropole : un reportage complet, du repérage à la mise en ligne, avec déplacement inclus.',
    local: [
      'Échoppes, maisons de maître et appartements en pierre blonde : à Bordeaux, le charme de l’ancien se joue dans les détails, parquets, moulures, cheminées, jardins de ville. Un reportage soigné les met en avant sans tricher sur les volumes.',
      'En périphérie, chartreuses et propriétés viticoles, jusqu’à Saint-Émilion, gagnent à être montrées dans leur environnement : c’est là que la vidéo et le drone apportent ce qu’une photo seule ne peut pas dire.',
    ],
    communes: ['Bordeaux', 'Mérignac', 'Pessac', 'Talence', 'Bègles', 'Le Bouscat', 'Bruges', 'Gradignan', 'Cenon', 'Lormont', 'Libourne', 'Saint-Émilion'],
    drone: 'Le centre de Bordeaux et une large partie de la métropole sont en milieu urbain dense et dans la zone de l’aéroport de Mérignac : les vols y demandent des autorisations, et certains secteurs restent interdits. Selon l’adresse, on obtient les autorisations ou on propose des prises de vue au sol.',
  },
];

function CityNav() {
  return (
    <header className="nav">
      <div className="wrap">
        <div className="nav-bar">
          <Logo />
          <ul className="nav-links">
            {NAV.map(([t, h]) => <li key={h}><a href={'/' + h}>{t}</a></li>)}
          </ul>
          <div className="nav-actions">
            <a href="/#contact" className="btn btn-primary btn-small">Demander un devis</a>
          </div>
        </div>
      </div>
    </header>
  );
}

function CityPage({ page }) {
  return (
    <>
      <CityNav />
      <main>
        <section className="city-hero">
          <div className="wrap">
            <nav aria-label="Fil d’Ariane" className="crumbs"><a href="/">Accueil</a> / {page.city}</nav>
            <h1>{page.h1}</h1>
            <p className="lead">{page.lead}</p>
            <div className="hero-actions">
              <a href="/#contact" className="btn btn-primary">Demander un devis</a>
              <a href="/#portfolio" className="btn btn-outline">Voir nos réalisations</a>
            </div>
            <p className="city-note">Reportage photo dès 149 €, déplacement inclus jusqu’à 50 km. Pilote drone certifié DGAC.</p>
          </div>
        </section>
        <span className="flag flag-top" aria-hidden="true" />

        <section className="section">
          <div className="wrap city-cols">
            <div>
              <h2 className="title">Les biens de {page.city}</h2>
            </div>
            <div className="prose">
              {page.local.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </section>

        <section className="section section-ciel">
          <div className="wrap">
            <div className="head"><h2 className="title">Ce que nous faisons à {page.city}</h2></div>
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

        <section className="section">
          <div className="wrap city-cols">
            <div>
              <h2 className="title">Communes couvertes</h2>
              <p className="lead">Déplacement inclus dans un rayon de 50 km autour de {page.city}. Au-delà, on établit un devis sur mesure.</p>
            </div>
            <ul className="cities communes">{page.communes.map((c) => <li key={c}>{c}</li>)}</ul>
          </div>
        </section>

        <section className="section section-ciel">
          <div className="wrap city-cols">
            <div><h2 className="title">Le drone à {page.city}</h2></div>
            <div className="prose"><p>{page.drone}</p></div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="head">
              <h2 className="title">Tarifs</h2>
              <p className="lead">Prix TTC par bien, déplacement compris. Remises pour les agences selon le volume.</p>
            </div>
            <div className="table-wrap">
              <table>
                <caption className="sr-only">Tarifs des reportages pour les particuliers</caption>
                <thead><tr><th scope="col">Formule</th><th scope="col">Contenu</th><th scope="col" className="num">Prix</th></tr></thead>
                <tbody>
                  {PLANS.map((p) => (
                    <tr key={p.n}><th scope="row">{p.n}</th><td>{p.sub}</td><td className="num" data-label="Prix">{p.p} €</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: 24 }}><a href="/#tarifs" className="btn btn-outline">Voir tous les tarifs</a></p>
          </div>
        </section>

        <section className="section section-ciel">
          <div className="wrap">
            <h2 className="title">Un bien à {page.city} ?</h2>
            <p className="lead">Décrivez-le : on vous répond sous 24 h avec une proposition chiffrée et un créneau de tournage. Le devis est gratuit.</p>
            <div className="hero-actions">
              <a href="/#contact" className="btn btn-primary">Demander un devis</a>
              <a href="mailto:contact@acn-studio.fr" className="btn btn-outline">contact@acn-studio.fr</a>
            </div>
          </div>
        </section>
      </main>
      <span className="flag flag-bottom" aria-hidden="true" />
      <Footer base="/" />
    </>
  );
}
