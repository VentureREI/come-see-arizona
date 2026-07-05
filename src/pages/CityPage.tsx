import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import { getCity, getCounty, getNeighborhoodsByCity, getZipCodesByCity, getDistrictsByCity, getNearbyCities, formatPrice, formatNumber } from '../data/lookups';
import { getCityImage, getNeighborhoodImage, getHeroImage } from './exploreImages';
import { generateCityGuide, generateCityMarketAnalysis, generateCityFaqs, getAboutFooter } from './contentGenerator';
import AnswerBlock from '../components/AnswerBlock';
import { getMarketPricesLastUpdated } from '../data/dynamicLoader';

function getRatingClass(rating: string): string {
  const letter = rating.charAt(0).toUpperCase();
  if (letter === 'A') return 'rating-a';
  if (letter === 'B') return 'rating-b';
  if (letter === 'C') return 'rating-c';
  return 'rating-d';
}

export default function CityPage() {
  const { citySlug } = useParams<{ citySlug: string }>();

  const city = citySlug ? getCity(citySlug) : undefined;
  const county = city ? getCounty(city.countySlug) : undefined;
  const neighborhoods = citySlug ? getNeighborhoodsByCity(citySlug) : [];
  const zipCodes = citySlug ? getZipCodesByCity(citySlug) : [];
  const districts = citySlug ? getDistrictsByCity(citySlug) : [];
  const nearbyCities = citySlug ? getNearbyCities(citySlug, 6) : [];

  if (!city || !county) {
    return (
      <div className="explore-hero" style={{ minHeight: '100vh' }}>
        <div className="explore-hero-bg">
          <img src={getHeroImage('explore')} alt="Arizona landscape" />
        </div>
        <div className="explore-hero-overlay" />
        <div className="explore-hero-content" style={{ textAlign: 'center' }}>
          <h1>City Not Found</h1>
          <p className="hero-subtitle" style={{ marginBottom: '32px' }}>
            Sorry, we could not find information about this city. It may have been removed or the URL may be incorrect.
          </p>
          <Link
            to="/explore"
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
            Explore All Arizona Cities
          </Link>
        </div>
      </div>
    );
  }

  const descriptionParagraphs = city.description.length > 300
    ? [city.description.slice(0, city.description.indexOf('.', Math.floor(city.description.length / 2)) + 1), city.description.slice(city.description.indexOf('.', Math.floor(city.description.length / 2)) + 1).trim()]
    : [city.description];

  const guideParagraphs = generateCityGuide(city, county, neighborhoods, districts, zipCodes);
  const marketParagraphs = generateCityMarketAnalysis(city, county);
  const expandedFaqs = generateCityFaqs(city, county, neighborhoods, districts);
  const aboutFooter = getAboutFooter(city.name);

  const seoDescription = `${city.name}, AZ has a median home price of ${formatPrice(city.medianHomePrice)} and a population of ${formatNumber(city.population)}. Explore neighborhoods, schools, and things to do.`.slice(0, 155);

  const topNeighborhoods = neighborhoods.slice(0, 3).map(n => n.name).join(', ');
  const topDistricts = districts.slice(0, 3).map(d => d.name).join(', ');
  const topThingsToDo = city.thingsToDo.slice(0, 3).join(', ');
  const zipList = zipCodes.map(z => z.zip).join(', ');

  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: `${city.name}, Arizona`,
    description: city.description,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: city.lat,
      longitude: city.lng,
    },
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: `${county.name}, Arizona`,
    },
  };

  const faqItems = [
    {
      question: `What is the median home price in ${city.name}?`,
      answer: `The median home price in ${city.name}, Arizona is ${formatPrice(city.medianHomePrice)}. This reflects current market conditions across the city's ${neighborhoods.length} neighborhoods, with prices varying by area.`,
    },
    {
      question: `What are the best neighborhoods in ${city.name}?`,
      answer: neighborhoods.length > 0
        ? `${city.name} has ${neighborhoods.length} distinct neighborhoods including ${topNeighborhoods}. Each offers a unique character, home styles, and price range to suit different lifestyles.`
        : `${city.name} offers a variety of residential areas. Explore the city to find the neighborhood that best fits your lifestyle and budget.`,
    },
    {
      question: `What school districts serve ${city.name}?`,
      answer: districts.length > 0
        ? `${city.name} is served by ${districts.length} school district${districts.length > 1 ? 's' : ''}, including ${topDistricts}. These districts serve ${formatNumber(districts.reduce((sum, d) => sum + d.studentCount, 0))} students combined.`
        : `Contact local education authorities for information about school districts serving ${city.name}.`,
    },
    {
      question: `What is there to do in ${city.name}?`,
      answer: city.thingsToDo.length > 0
        ? `Popular things to do in ${city.name} include ${topThingsToDo}, and more. The city offers ${city.thingsToDo.length} notable attractions and activities for residents and visitors.`
        : `${city.name} offers a variety of activities and attractions for residents and visitors to enjoy throughout the year.`,
    },
    {
      question: `What zip codes are in ${city.name}?`,
      answer: zipCodes.length > 0
        ? `${city.name}, Arizona includes ${zipCodes.length} zip code${zipCodes.length > 1 ? 's' : ''}: ${zipList}. Each zip code area has its own median home price and demographic profile.`
        : `Contact the USPS or local postal service for zip code information in ${city.name}.`,
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: expandedFaqs.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div>
      <SEOHead
        title={`${city.name}, Arizona - Neighborhoods, Home Prices, Schools & Guide | Come See Arizona`}
        description={seoDescription}
        canonical={`/explore/city/${city.slug}`}
        schema={[placeSchema, faqSchema]}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Explore', url: '/explore' },
          { name: `${county.name}`, url: `/explore/county/${county.slug}` },
          { name: city.name, url: `/explore/city/${city.slug}` },
        ]}
      />

      {/* A) Hero */}
      <section className="explore-hero">
        <div className="explore-hero-bg">
          <img src={getCityImage(city.slug)} alt={`${city.name}, Arizona`} className="card-img" />
        </div>
        <div className="explore-hero-overlay" />
        <div className="explore-hero-content">
          <nav className="breadcrumb-hero" aria-label="Breadcrumb">
            <Link to="/">Home</Link> &rsaquo; <Link to="/explore">Explore</Link> &rsaquo;{' '}
            <Link to={`/explore/county/${county.slug}`}>{county.name}</Link> &rsaquo; {city.name}
          </nav>
          <h1>Guide to Living in {city.name}, Arizona</h1>
          <p className="hero-subtitle">
            Discover neighborhoods, home prices, schools, and things to do in {city.name}.
          </p>
        </div>
      </section>

      {/* Answer Block */}
      <AnswerBlock answer={`${city.name}, Arizona has a population of approximately ${formatNumber(city.population)} and sits in ${county.name}. The median home price is ${formatPrice(city.medianHomePrice)}, with ${neighborhoods.length} distinct neighborhoods and ${zipCodes.length} zip codes. ${city.description.split('.')[0]}.`} />

      {/* B) Stats */}
      <div className="explore-stats-row">
        <div className="explore-stat-card">
          <div className="stat-number" style={{ color: 'var(--color-text)' }}>{formatNumber(city.population)}</div>
          <div className="stat-label">Population</div>
        </div>
        <div className="explore-stat-card">
          <div className="stat-number">{formatPrice(city.medianHomePrice)}</div>
          <div className="stat-label">Median Home Price</div>
        </div>
        <div className="explore-stat-card">
          <div className="stat-number" style={{ color: 'var(--color-text)' }}>{formatPrice(city.medianHouseholdIncome)}</div>
          <div className="stat-label">Median Income</div>
        </div>
        <div className="explore-stat-card">
          <div className="stat-number" style={{ color: 'var(--color-text)' }}>{neighborhoods.length}</div>
          <div className="stat-label">Neighborhoods</div>
        </div>
      </div>
      <div style={{ textAlign: 'center', padding: '8px 24px', fontFamily: 'var(--font-body)', fontSize: 13, color: '#8D847A' }}>
        Market data last updated: {getMarketPricesLastUpdated()}
      </div>

      {/* C) Definitive Guide */}
      <section className="explore-section">
        <div className="explore-container-narrow">
          <h2 className="explore-section-title">The Definitive Guide to {city.name}, Arizona</h2>
          {guideParagraphs.map((p, i) => (
            <p key={i} className="explore-description">{p}</p>
          ))}
        </div>
      </section>

      {/* C2) Real Estate Market */}
      <section className="explore-section alt-bg">
        <div className="explore-container-narrow">
          <h2 className="explore-section-title">Real Estate Market in {city.name}</h2>
          {marketParagraphs.map((p, i) => (
            <p key={i} className="explore-description">{p}</p>
          ))}
        </div>
      </section>

      {/* D) Neighborhoods */}
      {neighborhoods.length > 0 && (
        <section className="explore-section">
          <div className="explore-container-narrow">
            <h2 className="explore-section-title">Neighborhoods in {city.name}</h2>
          </div>
          <div className="explore-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '24px' }}>
              {neighborhoods.map(neighborhood => (
                <Link
                  key={neighborhood.slug}
                  to={`/explore/neighborhood/${neighborhood.slug}`}
                  className="explore-info-card"
                >
                  <h3>{neighborhood.name}</h3>
                  <p style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '18px', margin: '8px 0' }}>
                    {formatPrice(neighborhood.medianHomePrice)}
                  </p>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', fontStyle: 'italic', marginBottom: '12px' }}>
                    {neighborhood.vibe}
                  </p>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
                    Explore neighborhood &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* E) Things to Do */}
      {city.thingsToDo.length > 0 && (
        <section className="explore-section alt-bg">
          <div className="explore-container-narrow">
            <h2 className="explore-section-title">Things to Do in {city.name}</h2>
            <ul className="explore-highlights" style={{ maxWidth: '100%' }}>
              {city.thingsToDo.map((item, i) => (
                <li key={i}>
                  <span className="highlight-icon">&#10003;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* F) Zip Codes */}
      {zipCodes.length > 0 && (
        <section className="explore-section">
          <div className="explore-container-narrow">
            <h2 className="explore-section-title">Zip Codes in {city.name}</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {zipCodes.map(zip => (
                <Link
                  key={zip.zip}
                  to={`/explore/zip/${zip.zip}`}
                  className="explore-pill"
                >
                  {zip.zip} &middot; {formatPrice(zip.medianHomePrice)}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* G) School Districts */}
      {districts.length > 0 && (
        <section className="explore-section alt-bg">
          <div className="explore-container-narrow">
            <h2 className="explore-section-title">School Districts Serving {city.name}</h2>
            <div className="explore-grid-2">
              {districts.map(district => (
                <Link
                  key={district.slug}
                  to={`/explore/school-district/${district.slug}`}
                  className="explore-info-card"
                  style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
                >
                  <span className={`rating-badge ${getRatingClass(district.rating)}`}>
                    {district.rating}
                  </span>
                  <div style={{ flex: 1 }}>
                    <h3>{district.name}</h3>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                      {formatNumber(district.studentCount)} students &middot; {district.totalSchools} schools
                    </p>
                  </div>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)', flexShrink: 0 }}>
                    View &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* H) Nearby Cities */}
      {nearbyCities.length > 0 && (
        <section className="explore-section">
          <div className="explore-container-narrow">
            <h2 className="explore-section-title">Nearby Cities</h2>
          </div>
          <div className="explore-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '24px' }}>
              {nearbyCities.map(nearby => (
                <Link
                  key={nearby.slug}
                  to={`/explore/city/${nearby.slug}`}
                  className="explore-image-card city-card"
                  style={{ maxWidth: '380px', width: '100%', justifySelf: 'center' }}
                >
                  <img src={getCityImage(nearby.slug)} alt={nearby.name} className="card-img" style={{ aspectRatio: '16/10' }} />
                  <div className="card-gradient" />
                  <div className="card-body">
                    <h3>{nearby.name}</h3>
                    <div className="card-stats">
                      <span>Pop. {formatNumber(nearby.population)}</span>
                      <span>{formatPrice(nearby.medianHomePrice)}</span>
                    </div>
                    <span className="card-link">Explore &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* I) FAQ */}
      <section className="explore-section alt-bg">
        <div className="explore-container-narrow">
          <div className="explore-faq-section">
            <h2 className="explore-faq-title">Frequently Asked Questions</h2>
            {expandedFaqs.map((faq, i) => (
              <details key={i} className="explore-faq">
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

      {/* J) About Footer */}
      <section className="explore-section" style={{ background: '#FAF5F0' }}>
        <div className="explore-container-narrow">
          <h2 className="explore-section-title">About This Guide</h2>
          <p className="explore-description">{aboutFooter.bio}</p>
          <p className="explore-description" style={{ marginTop: 16 }}>{aboutFooter.cta}</p>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link
              to="/contact"
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
              Contact Incyte Realty
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
