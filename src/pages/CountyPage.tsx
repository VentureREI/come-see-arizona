import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import { getCounty, getCitiesByCounty, getDistrictsByCounty, getNeighborhoodsByCounty, formatPrice, formatNumber } from '../data/lookups';
import { getHeroImage, getCityImage } from './exploreImages';
import { generateCountyGuide, generateCountyMarketAnalysis, generateCountyFaqs, getAboutFooter } from './contentGenerator';
import AnswerBlock from '../components/AnswerBlock';
import { getMarketAttribution, getCountyMarket } from '../data/dynamicLoader';

export default function CountyPage() {
  const { countySlug } = useParams<{ countySlug: string }>();

  if (!countySlug) {
    return (
      <div className="explore-hero" style={{ minHeight: '60vh' }}>
        <div className="explore-hero-overlay" />
        <div className="explore-hero-content">
          <h1>County Not Found</h1>
          <p className="hero-subtitle">
            We couldn't find the county you're looking for. It may have been moved or doesn't exist.
          </p>
          <Link to="/explore" className="explore-image-card card-body card-link" style={{ display: 'inline-block', marginTop: 24, background: 'var(--color-primary)', color: 'white', padding: '12px 28px', borderRadius: 24, fontWeight: 600 }}>
            Explore Arizona
          </Link>
        </div>
      </div>
    );
  }

  const county = getCounty(countySlug);
  const cities = getCitiesByCounty(countySlug);
  const districts = getDistrictsByCounty(countySlug);
  const neighborhoods = getNeighborhoodsByCounty(countySlug);

  if (!county) {
    return (
      <div className="explore-hero" style={{ minHeight: '60vh' }}>
        <div className="explore-hero-overlay" />
        <div className="explore-hero-content">
          <h1>County Not Found</h1>
          <p className="hero-subtitle">
            We couldn't find the county you're looking for. Try browsing all counties or return home.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 24, flexWrap: 'wrap' }}>
            <Link to="/" style={{ background: 'var(--color-primary)', color: 'white', padding: '12px 28px', borderRadius: 24, fontWeight: 600, fontFamily: 'var(--font-body)' }}>
              Back to Home
            </Link>
            <Link to="/explore" style={{ border: '2px solid white', color: 'white', padding: '12px 28px', borderRadius: 24, fontWeight: 600, fontFamily: 'var(--font-body)' }}>
              Explore Arizona
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const guideParagraphs = generateCountyGuide(county, cities, districts);
  const marketAnalysis = generateCountyMarketAnalysis(county, cities);
  const countyMarket = getCountyMarket(county.slug);
  const expandedFaqs = generateCountyFaqs(county, cities, districts);
  const aboutFooter = getAboutFooter(county.name);

  const canonical = `/explore/county/${county.slug}`;

  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: county.name,
    description: county.description,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: county.lat,
      longitude: county.lng,
    },
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'AZ',
      addressCountry: 'US',
    },
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Explore Arizona', url: '/explore' },
    { name: county.name, url: canonical },
  ];

  const seoDescription = `${county.name} is home to ${formatNumber(county.population)} residents across ${cities.length} cities. Explore neighborhoods, school districts, and things to do in ${county.name}, Arizona.`;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: expandedFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  // Other counties for "Explore More" section
  const otherCountySlugs = ['maricopa', 'pinal', 'pima'].filter(s => s !== county.slug);
  const otherCounties = otherCountySlugs.map(s => getCounty(s)).filter(Boolean);

  return (
    <>
      <SEOHead
        title={`${county.name} - Cities, Home Prices & Community Guide | Come See Arizona`}
        description={seoDescription}
        canonical={canonical}
        schema={[placeSchema, faqSchema]}
        breadcrumbs={breadcrumbs}
      />

      {/* A) Hero Section */}
      <div className="explore-hero">
        <div className="explore-hero-bg">
          <img src={getHeroImage(countySlug)} alt={`${county.name} Arizona landscape`} className="card-img" />
        </div>
        <div className="explore-hero-overlay" />
        <div className="explore-hero-content">
          <nav className="breadcrumb-hero" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            {' > '}
            <Link to="/explore">Explore</Link>
            {' > '}
            <span>{county.name}</span>
          </nav>
          <h1>Guide to {county.name}, Arizona</h1>
          <p className="hero-subtitle">
            Everything you need to know about living in, visiting, and exploring {county.name}.
          </p>
        </div>
      </div>

      {/* Answer Block */}
      <AnswerBlock answer={`${county.name} is home to ${cities.length} cities and towns with a median home price of ${formatPrice(county.medianHomePrice)}. ${county.highlights[0]}. This guide covers every city, neighborhood, zip code, and school district in ${county.name}.`} />

      {/* B) Stats Row */}
      <div className="explore-stats-row">
        <div className="explore-stat-card">
          <div className="stat-number">{formatNumber(county.population)}</div>
          <div className="stat-label">Population</div>
        </div>
        <div className="explore-stat-card">
          <div className="stat-number">{formatPrice(county.medianHomePrice)}</div>
          <div className="stat-label">Median Home Price</div>
        </div>
        <div className="explore-stat-card">
          <div className="stat-number">{cities.length}</div>
          <div className="stat-label">Cities</div>
        </div>
        <div className="explore-stat-card">
          <div className="stat-number">{neighborhoods.length}</div>
          <div className="stat-label">Neighborhoods</div>
        </div>
        <div className="explore-stat-card">
          <div className="stat-number">{districts.length}</div>
          <div className="stat-label">School Districts</div>
        </div>
      </div>
      <div style={{ textAlign: 'center', padding: '8px 24px', fontFamily: 'var(--font-body)', fontSize: 13, color: '#8D847A' }}>
        {getMarketAttribution()}
      </div>

      {/* C) Description Section */}
      <section className="explore-section">
        <div className="explore-container-narrow">
          <h2 className="explore-section-title">The Definitive Guide to {county.name}</h2>
          {guideParagraphs.map((p, i) => (
            <p key={i} className="explore-description">{p}</p>
          ))}
          {county.highlights.length > 0 && (
            <ul className="explore-highlights">
              {county.highlights.map((h, i) => (
                <li key={i}><span className="highlight-icon">✓</span><span>{h}</span></li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* C2) Real Estate Market Section */}
      <section className="explore-section alt-bg">
        <div className="explore-container-narrow">
          <h2 className="explore-section-title">Real Estate Market in {county.name}</h2>
          {marketAnalysis.map((p, i) => (
            <p key={i} className="explore-description">{p}</p>
          ))}
          {countyMarket?.narrative && (
            <div style={{
              marginTop: 24,
              padding: '18px 22px',
              background: '#FAF3EB',
              border: '1px solid #E7DFD3',
              borderLeft: '3px solid var(--color-primary)',
              borderRadius: '0 12px 12px 0',
            }}>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: 1.4,
                color: 'var(--color-text-light)', marginBottom: 8,
              }}>
                Current Trend Research{countyMarket.asOf ? ` · ${countyMarket.asOf}` : ''}
              </p>
              <p className="explore-description" style={{ marginBottom: countyMarket.narrativeCitations?.length ? 10 : 0 }}>
                {countyMarket.narrative}
              </p>
              {countyMarket.narrativeCitations && countyMarket.narrativeCitations.length > 0 && (
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--color-text-light)' }}>
                  Sources:{' '}
                  {countyMarket.narrativeCitations.map((url, i) => (
                    <a key={url} href={url} target="_blank" rel="noopener noreferrer nofollow"
                       style={{ color: 'var(--color-primary)' }}>
                      [{i + 1}]
                    </a>
                  )).reduce<React.ReactNode[]>((acc, el, i) => i === 0 ? [el] : [...acc, ' ', el], [])}
                </p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* D) Cities Section */}
      {cities.length > 0 && (
        <section className="explore-section">
          <div className="explore-container-narrow">
            <h2 className="explore-section-title">Cities in {county.name}</h2>
          </div>
          <div className="explore-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '24px' }}>
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  to={`/explore/city/${city.slug}`}
                  className="explore-image-card city-card"
                  style={{ maxWidth: '380px', width: '100%', justifySelf: 'center' }}
                  aria-label={`Explore ${city.name}, AZ`}
                >
                  <img src={getCityImage(city.slug)} alt={`${city.name}, Arizona`} className="card-img" style={{ aspectRatio: '16/10' }} />
                  <div className="card-gradient" />
                  <div className="card-body">
                    <h3>{city.name}</h3>
                    <div className="card-stats">
                      <span>Pop. {formatNumber(city.population)}</span>
                      <span>{formatPrice(city.medianHomePrice)}</span>
                    </div>
                    <span className="card-link">Explore &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* E) School Districts Section */}
      {districts.length > 0 && (
        <section className="explore-section alt-bg">
          <div className="explore-container-narrow">
            <h2 className="explore-section-title">School Districts in {county.name}</h2>
            <div className="explore-card-grid">
              {districts.map((district) => (
                <Link
                  key={district.slug}
                  to={`/explore/school-district/${district.slug}`}
                  className="explore-info-card"
                  style={{ display: 'flex', alignItems: 'center', gap: 16 }}
                  aria-label={`View ${district.name} school district details`}
                >
                  <span className={`rating-badge rating-${district.rating.charAt(0).toLowerCase()}`}>
                    {district.rating}
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3>{district.name}</h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--color-text-secondary)', marginTop: 4 }}>
                      {formatNumber(district.studentCount)} students &middot; {district.totalSchools} schools
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* F) Explore More Section */}
      <section className="explore-section">
        <div className="explore-container-narrow">
          <h2 className="explore-section-title">Explore More Counties</h2>
        </div>
        <div className="explore-container">
          <div className="explore-card-grid">
            {otherCounties.map((other) =>
              other ? (
                <Link
                  key={other.slug}
                  to={`/explore/county/${other.slug}`}
                  className="explore-image-card county-card"
                >
                  <img src={getHeroImage(other.slug)} alt={`${other.name} County, Arizona`} className="card-img" style={{ aspectRatio: '16/10' }} />
                  <div className="card-gradient" />
                  <div className="card-body">
                    <h3>{other.name}</h3>
                    <div className="card-stats">
                      <span>Pop. {formatNumber(other.population)}</span>
                      <span>{formatPrice(other.medianHomePrice)}</span>
                    </div>
                    <span className="card-link">Explore &rarr;</span>
                  </div>
                </Link>
              ) : null
            )}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link
              to="/explore"
              style={{
                display: 'inline-block',
                background: 'var(--color-primary)',
                color: 'white',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: 15,
                padding: '14px 36px',
                borderRadius: 28,
                transition: 'background 0.2s',
              }}
            >
              Browse All of Arizona
            </Link>
          </div>
        </div>
      </section>

      {/* G) FAQ Section */}
      <section className="explore-section alt-bg">
        <div className="explore-container-narrow">
          <div className="explore-faq-section">
            <h2 className="explore-faq-title">Frequently Asked Questions</h2>
            {expandedFaqs.map((faq, idx) => (
              <details key={idx} className="explore-faq">
                <summary>
                  {faq.question}
                  <span className="faq-icon">+</span>
                </summary>
                <div className="faq-answer">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* H) About Footer */}
      <section className="explore-section" style={{ background: '#FAF5F0' }}>
        <div className="explore-container-narrow">
          <div className="explore-faq-section">
            <h2 className="explore-faq-title">About This Guide</h2>
            <p className="explore-description">{aboutFooter.bio}</p>
            <p className="explore-description">{aboutFooter.cta}</p>
            <div style={{ maxWidth: 800, margin: '24px auto 0', textAlign: 'center' }}>
              <a href="https://www.incyterealty.com" target="_blank" rel="noopener noreferrer"
                 style={{ display: 'inline-block', background: 'var(--color-primary)', color: 'white', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, padding: '14px 36px', borderRadius: 28 }}>
                Contact Incyte Realty
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
