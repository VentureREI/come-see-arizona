import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import { TRAILS } from '../data/trails';
import { TRAILS_SOUTHERN_NORTHERN } from '../data/trailsSouthernNorthern';
import type { Trail } from '../data/trails';
import { getMergedTrail } from '../data/dynamicLoader';
import AnswerBlock from '../components/AnswerBlock';

const ALL_TRAILS: Trail[] = [...TRAILS, ...TRAILS_SOUTHERN_NORTHERN];

function getTrailBySlug(slug: string): (Trail & { condition?: { status: string; note: string; lastChecked: string } }) | undefined {
  return getMergedTrail(slug) ?? ALL_TRAILS.find((t) => t.slug === slug);
}

function splitIntoParagraphs(text: string): string[] {
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
  const paragraphs: string[] = [];
  for (let i = 0; i < sentences.length; i += 3) {
    paragraphs.push(sentences.slice(i, i + 3).join('').trim());
  }
  return paragraphs.filter((p) => p.length > 0);
}

function getDifficultyColor(difficulty: string): string {
  const d = difficulty.toLowerCase();
  if (d === 'easy') return '#2e7d32';
  if (d === 'moderate') return '#1565c0';
  if (d === 'hard') return '#e65100';
  if (d.includes('very hard') || d.includes('expert') || d.includes('strenuous')) return '#c62828';
  return '#1565c0';
}

function getPackingList(difficulty: string, region: string): string[] {
  const base = [
    'Plenty of water (at least 1 liter per hour of hiking)',
    'Sun protection: hat, sunglasses, and sunscreen (SPF 50+)',
    'Sturdy hiking shoes or boots with good traction',
    'Trail snacks and energy bars',
    'First aid kit with blister care supplies',
    'Fully charged phone with downloaded trail map',
  ];

  const d = difficulty.toLowerCase();
  if (d === 'hard' || d.includes('very hard') || d.includes('strenuous') || d.includes('expert')) {
    base.push(
      'Trekking poles for steep terrain',
      'Extra layers for elevation changes',
      'Headlamp in case of delayed return',
      'Emergency whistle and signaling mirror',
    );
  }

  const r = region.toLowerCase();
  if (r.includes('desert') || r.includes('sonoran') || r.includes('phoenix') || r.includes('tucson') || r.includes('scottsdale')) {
    base.push(
      'Electrolyte packets or sports drink mix',
      'Cooling towel for extreme heat',
    );
  }
  if (r.includes('flagstaff') || r.includes('northern') || r.includes('alpine') || r.includes('mountain') || r.includes('rim')) {
    base.push(
      'Warm mid-layer (temperatures drop at elevation)',
      'Rain jacket (afternoon storms are common in summer)',
    );
  }

  return base;
}

export default function TrailPage() {
  const { slug } = useParams<{ slug: string }>();

  const trail = slug ? getTrailBySlug(slug) : undefined;

  if (!trail) {
    return (
      <div className="explore-hero" style={{ minHeight: '100vh' }}>
        <div className="explore-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1682686581362-796145f0e123?auto=format&fit=crop&w=1600&q=80"
            alt="Arizona hiking landscape"
          />
        </div>
        <div className="explore-hero-overlay" />
        <div className="explore-hero-content" style={{ textAlign: 'center' }}>
          <h1>Trail Not Found</h1>
          <p className="hero-subtitle" style={{ marginBottom: '32px' }}>
            Sorry, we could not find information about this trail. It may have been removed or the URL may be incorrect.
          </p>
          <Link
            to="/articles/arizona-best-hiking-trails"
            style={{
              display: 'inline-block',
              background: 'var(--color-primary)',
              color: 'white',
              fontWeight: 600,
              padding: '14px 32px',
              borderRadius: '8px',
              transition: 'opacity 0.2s',
            }}
          >
            View All Arizona Hiking Trails
          </Link>
        </div>
      </div>
    );
  }

  const descriptionParagraphs = splitIntoParagraphs(trail.description);
  const packingList = getPackingList(trail.difficulty, trail.region);
  const nearbyTrails = (trail.nearbyTrailSlugs || [])
    .map((s) => getTrailBySlug(s))
    .filter((t): t is Trail => t !== undefined);

  const seoTitle = `${trail.name} Trail Guide | Arizona Hiking | Come And See Arizona`;
  const seoDescription = `Hike ${trail.name} in ${trail.region}, Arizona. ${trail.distance} miles, ${trail.elevationGain} ft elevation gain. Difficulty: ${trail.difficulty}. Complete trail guide with directions, tips, and nearby trails.`.slice(0, 160);

  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: trail.name,
    description: trail.description,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: trail.lat,
      longitude: trail.lng,
    },
    address: trail.trailheadAddress || undefined,
  };

  return (
    <div>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonical={`/trails/${trail.slug}`}
        schema={placeSchema}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Arizona Hiking Guide', url: '/articles/arizona-best-hiking-trails' },
          { name: trail.name, url: `/trails/${trail.slug}` },
        ]}
      />

      {/* A) Hero */}
      <section className="explore-hero">
        <div className="explore-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1682686581362-796145f0e123?auto=format&fit=crop&w=1600&q=80"
            alt={`${trail.name} hiking trail in Arizona`}
            className="card-img"
          />
        </div>
        <div className="explore-hero-overlay" />
        <div className="explore-hero-content">
          <nav className="breadcrumb-hero" aria-label="Breadcrumb">
            <Link to="/">Home</Link> &rsaquo;{' '}
            <Link to="/articles/arizona-best-hiking-trails">Arizona Hiking Guide</Link> &rsaquo;{' '}
            {trail.name}
          </nav>
          <h1>{trail.name}</h1>
          <p className="hero-subtitle">
            {trail.region} &middot; {trail.difficulty}
          </p>
        </div>
      </section>

      {/* B) Quick Stats Bar */}
      <div className="explore-container">
        <div className="explore-stats-row">
          <div className="explore-stat-card">
            <div className="stat-number" style={{ color: 'var(--color-text)' }}>
              {trail.distance} mi
            </div>
            <div className="stat-label">Distance</div>
          </div>
          <div className="explore-stat-card">
            <div className="stat-number" style={{ color: 'var(--color-text)' }}>
              {trail.elevationGain.toLocaleString()} ft
            </div>
            <div className="stat-label">Elevation Gain</div>
          </div>
          <div className="explore-stat-card">
            <div
              className="stat-number"
              style={{ color: getDifficultyColor(trail.difficulty) }}
            >
              {trail.difficulty}
            </div>
            <div className="stat-label">Difficulty</div>
          </div>
          <div className="explore-stat-card">
            <div className="stat-number" style={{ color: 'var(--color-text)' }}>
              {trail.estimatedTime}
            </div>
            <div className="stat-label">Estimated Time</div>
          </div>
          <div className="explore-stat-card">
            <div className="stat-number" style={{ color: trail.dogFriendly ? '#2e7d32' : '#c62828' }}>
              {trail.dogFriendly ? '\u2713 Yes' : '\u2717 No'}
            </div>
            <div className="stat-label">Dog Friendly</div>
          </div>
          <div className="explore-stat-card">
            <div className="stat-number" style={{ color: trail.fee ? '#e65100' : '#2e7d32' }}>
              {trail.fee ? trail.fee : 'Free'}
            </div>
            <div className="stat-label">Fee Required</div>
          </div>
        </div>
      </div>

      {/* Answer Block */}
      <AnswerBlock answer={`${trail.name} is a ${trail.distance} ${trail.difficulty.toLowerCase()} trail in ${trail.region}, Arizona with ${trail.elevationGain} of elevation gain. The estimated hiking time is ${trail.estimatedTime}. ${trail.description.split('.')[0]}.`} />

      {/* C) Trail Description */}
      <section className="explore-section">
        <div className="explore-container-narrow">
          <h2 className="explore-section-title">About {trail.name}</h2>
          {descriptionParagraphs.map((p, i) => (
            <p key={i} className="explore-description">{p}</p>
          ))}
        </div>
      </section>

      {/* D) Getting There */}
      <section className="explore-section alt-bg">
        <div className="explore-container-narrow">
          <h2 className="explore-section-title">Getting There</h2>
          {trail.trailheadAddress && (
            <p className="explore-description">
              <strong>Trailhead Address:</strong> {trail.trailheadAddress}
            </p>
          )}
          {trail.parkingNotes && (
            <p className="explore-description">
              <strong>Parking:</strong> {trail.parkingNotes}
            </p>
          )}
          {!trail.trailheadAddress && !trail.parkingNotes && (
            <p className="explore-description">
              Check with local land management agencies for the most up-to-date trailhead access and parking information.
            </p>
          )}
        </div>
      </section>

      {/* E) Best Time to Hike */}
      <section className="explore-section">
        <div className="explore-container-narrow">
          <h2 className="explore-section-title">Best Time to Hike</h2>
          <p className="explore-description">
            <strong>Best Season:</strong> {trail.bestSeason}
          </p>
          <p className="explore-description">
            For the most comfortable experience on {trail.name}, plan your hike during the
            recommended season. In the warmer months, start early in the morning to avoid peak
            heat, especially on exposed desert trails. Always check current weather conditions
            and trail status before heading out.
          </p>
        </div>
      </section>

      {/* F) What to Bring */}
      <section className="explore-section alt-bg">
        <div className="explore-container-narrow">
          <h2 className="explore-section-title">What to Bring</h2>
          <p className="explore-description">
            Based on the {trail.difficulty.toLowerCase()} difficulty rating and {trail.region} location,
            here is a recommended packing list for this hike:
          </p>
          <ul className="explore-highlights" style={{ maxWidth: '100%' }}>
            {packingList.map((item, i) => (
              <li key={i}>
                <span className="highlight-icon">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* G) Nearby Trails */}
      {nearbyTrails.length > 0 && (
        <section className="explore-section">
          <div className="explore-container">
            <h2 className="explore-section-title">Nearby Trails</h2>
            <div className="explore-grid-3">
              {nearbyTrails.map((nearby) => (
                <Link
                  key={nearby.slug}
                  to={`/trails/${nearby.slug}`}
                  className="explore-info-card"
                >
                  <h3>{nearby.name}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: '8px 0' }}>
                    {nearby.distance} miles
                  </p>
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#fff',
                      backgroundColor: getDifficultyColor(nearby.difficulty),
                      marginBottom: '12px',
                    }}
                  >
                    {nearby.difficulty}
                  </span>
                  <br />
                  <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
                    View trail guide &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* H) Back Links */}
      <section className="explore-section alt-bg">
        <div className="explore-container-narrow" style={{ textAlign: 'center', padding: '40px 0' }}>
          <Link
            to="/articles/arizona-best-hiking-trails"
            style={{
              display: 'inline-block',
              background: 'var(--color-primary)',
              color: 'white',
              fontWeight: 600,
              padding: '14px 32px',
              borderRadius: '8px',
              transition: 'opacity 0.2s',
              marginRight: '16px',
              marginBottom: '12px',
            }}
          >
            View All Arizona Hiking Trails
          </Link>
          <Link
            to="/"
            style={{
              display: 'inline-block',
              border: '2px solid var(--color-primary)',
              color: 'var(--color-primary)',
              fontWeight: 600,
              padding: '14px 32px',
              borderRadius: '8px',
              transition: 'all 0.2s',
              marginBottom: '12px',
            }}
          >
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
