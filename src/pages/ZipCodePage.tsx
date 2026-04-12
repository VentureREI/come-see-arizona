import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import {
  getZipCode,
  getCity,
  getCounty,
  getNeighborhoodsByZip,
  getDistrictsByZip,
  formatPrice,
  formatNumber,
} from '../data/lookups';
import { getHeroImage, getNeighborhoodImage } from './exploreImages';
import { generateZipCodeGuide, generateZipCodeMarketAnalysis, generateZipCodeFaqs, getAboutFooter } from './contentGenerator';
import AnswerBlock from '../components/AnswerBlock';
import { getMarketPricesLastUpdated } from '../data/dynamicLoader';

export default function ZipCodePage() {
  const { zipCode } = useParams<{ zipCode: string }>();

  const zipData = zipCode ? getZipCode(zipCode) : undefined;
  const city = zipData ? getCity(zipData.citySlug) : undefined;
  const county = zipData ? getCounty(zipData.countySlug) : undefined;
  const neighborhoods = zipCode ? getNeighborhoodsByZip(zipCode) : [];
  const districts = zipCode ? getDistrictsByZip(zipCode) : [];

  if (!zipData || !city || !county) {
    return (
      <div className="explore-hero" style={{ minHeight: '100vh' }}>
        <div className="explore-hero-overlay" />
        <div className="explore-hero-content">
          <h1>Zip Code Not Found</h1>
          <p className="hero-subtitle">
            Sorry, we couldn't find information for zip code {zipCode}. It may not be an Arizona zip code in our database.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '24px', flexWrap: 'wrap' }}>
            <Link to="/" className="explore-pill active">Back to Home</Link>
            <Link to="/explore" className="explore-pill">Explore Arizona</Link>
          </div>
        </div>
      </div>
    );
  }

  const guideParagraphs = generateZipCodeGuide(zipData, city, county, neighborhoods, districts);
  const marketParagraphs = generateZipCodeMarketAnalysis(zipData, city);
  const expandedFaqs = generateZipCodeFaqs(zipData, city, neighborhoods, districts);
  const aboutFooter = getAboutFooter(zipData.zip);

  const seoDescription = `The ${zipData.zip} zip code in ${city.name}, AZ has a median home price of ${formatPrice(zipData.medianHomePrice)} and a population of ${formatNumber(zipData.population)}. Explore neighborhoods, schools, and more.`.slice(0, 155);

  const postalAddressSchema = {
    '@context': 'https://schema.org',
    '@type': 'PostalAddress',
    postalCode: zipData.zip,
    addressLocality: city.name,
    addressRegion: 'AZ',
    addressCountry: 'US',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: expandedFaqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Explore', url: '/explore' },
    { name: county.name, url: `/explore/county/${county.slug}` },
    { name: city.name, url: `/explore/city/${city.slug}` },
    { name: zipData.zip, url: `/explore/zip/${zipData.zip}` },
  ];

  const nearbyZips = city.zipCodes.filter(z => z !== zipData.zip);

  const ratingClass = (rating: string) => {
    const letter = rating.charAt(0).toUpperCase();
    switch (letter) {
      case 'A': return 'rating-a';
      case 'B': return 'rating-b';
      case 'C': return 'rating-c';
      case 'D': return 'rating-d';
      default: return 'rating-c';
    }
  };

  return (
    <>
      <SEOHead
        title={`${zipData.zip} Zip Code Guide - ${city.name}, AZ | Come And See Arizona`}
        description={seoDescription}
        canonical={`/explore/zip/${zipData.zip}`}
        schema={[postalAddressSchema, faqSchema]}
        breadcrumbs={breadcrumbs}
      />

      {/* A) Hero */}
      <section className="explore-hero">
        <div className="explore-hero-bg">
          <img src={getHeroImage(county.slug)} alt={`${city.name}, Arizona landscape`} />
        </div>
        <div className="explore-hero-overlay" />
        <div className="explore-hero-content">
          <nav className="breadcrumb-hero" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.url}>
                {i > 0 && ' > '}
                {i < breadcrumbs.length - 1 ? (
                  <Link to={crumb.url}>{crumb.name}</Link>
                ) : (
                  <span>{crumb.name}</span>
                )}
              </span>
            ))}
          </nav>
          <h1>Living in {zipData.zip} - {city.name}, Arizona</h1>
          <p className="hero-subtitle">
            Your complete guide to the {zipData.zip} zip code area: homes, neighborhoods, schools, and community insights.
          </p>
        </div>
      </section>

      {/* Answer Block */}
      <AnswerBlock answer={`ZIP code ${zipData.zip} is located in ${city.name}, ${county.name}, Arizona. The median home price in this area is approximately ${formatPrice(zipData.medianHomePrice)} with a median household age of ${zipData.medianAge}. ${zipData.description.split('.')[0]}.`} />

      {/* B) Stats */}
      <div className="explore-stats-row">
        <div className="explore-stat-card">
          <div className="stat-number">{formatNumber(zipData.population)}</div>
          <div className="stat-label">Population</div>
        </div>
        <div className="explore-stat-card">
          <div className="stat-number">{formatPrice(zipData.medianHomePrice)}</div>
          <div className="stat-label">Median Home Price</div>
        </div>
        <div className="explore-stat-card">
          <div className="stat-number">${formatNumber(zipData.medianRent)}/mo</div>
          <div className="stat-label">Median Rent</div>
        </div>
        <div className="explore-stat-card">
          <div className="stat-number">{zipData.medianAge}</div>
          <div className="stat-label">Median Age</div>
        </div>
      </div>
      <div style={{ textAlign: 'center', padding: '8px 24px', fontFamily: 'var(--font-body)', fontSize: 13, color: '#888' }}>
        Market data last updated: {getMarketPricesLastUpdated()}
      </div>

      {/* C) Guide */}
      <section className="explore-section">
        <div className="explore-container-narrow">
          <h2 className="explore-section-title">The Complete Guide to {zipData.zip} - {city.name}, AZ</h2>
          {guideParagraphs.map((p, i) => (
            <p key={i} className="explore-description">{p}</p>
          ))}
        </div>
      </section>

      {/* C2) Real Estate Market */}
      <section className="explore-section">
        <div className="explore-container-narrow">
          <h2 className="explore-section-title">Real Estate Market in {zipData.zip}</h2>
          {marketParagraphs.map((p, i) => (
            <p key={i} className="explore-description">{p}</p>
          ))}
        </div>
      </section>

      {/* D) Neighborhoods */}
      {neighborhoods.length > 0 && (
        <section className="explore-section alt-bg">
          <div className="explore-container-narrow">
            <h2 className="explore-section-title">Neighborhoods in {zipData.zip}</h2>
          </div>
          <div className="explore-container">
            <div className="explore-card-grid">
              {neighborhoods.map(neighborhood => (
                <Link
                  key={neighborhood.slug}
                  to={`/explore/neighborhood/${neighborhood.slug}`}
                  className="explore-info-card"
                >
                  <h3>{neighborhood.name}</h3>
                  <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', marginBottom: '12px' }}>
                    {neighborhood.description.length > 120
                      ? neighborhood.description.slice(0, 120) + '...'
                      : neighborhood.description}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px' }}>
                    <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                      {formatPrice(neighborhood.medianHomePrice)}
                    </span>
                    <span className="explore-pill" style={{ fontSize: '12px', padding: '4px 12px' }}>
                      {neighborhood.vibe}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* E) School Districts */}
      {districts.length > 0 && (
        <section className="explore-section">
          <div className="explore-container-narrow">
            <h2 className="explore-section-title">School Districts Serving {zipData.zip}</h2>
          </div>
          <div className="explore-container">
            <div className="explore-card-grid">
              {districts.map(district => (
                <Link
                  key={district.slug}
                  to={`/explore/school-district/${district.slug}`}
                  className="explore-info-card"
                  style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
                >
                  <div className={`rating-badge ${ratingClass(district.rating)}`}>
                    {district.rating}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ marginBottom: '4px' }}>{district.name}</h3>
                    <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>
                      {formatNumber(district.studentCount)} students &middot; {district.totalSchools} schools
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* F) Highlights */}
      {zipData.highlights.length > 0 && (
        <section className="explore-section alt-bg">
          <div className="explore-container-narrow">
            <h2 className="explore-section-title">What Makes {zipData.zip} a Great Place to Live</h2>
            <ul className="explore-highlights">
              {zipData.highlights.map((highlight, i) => (
                <li key={i}>
                  <span className="highlight-icon">&#10003;</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* G) Explore Links */}
      <section className="explore-section">
        <div className="explore-container-narrow">
          <h2 className="explore-section-title">Explore {city.name}</h2>
        </div>
        <div className="explore-container">
          <div className="explore-card-grid">
            <Link to={`/explore/city/${city.slug}`} className="explore-info-card">
              <h3>{city.name} City Guide</h3>
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                Explore everything {city.name} has to offer
              </p>
            </Link>
            <Link to={`/explore/county/${county.slug}`} className="explore-info-card">
              <h3>{county.name} Overview</h3>
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                Discover the greater {county.name} area
              </p>
            </Link>
            {nearbyZips.map(z => (
              <Link key={z} to={`/explore/zip/${z}`} className="explore-info-card">
                <h3>Zip Code {z}</h3>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                  Nearby zip code in {city.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* H) FAQ */}
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

      {/* I) About Footer */}
      <section className="explore-section" style={{ background: '#FAF5F0' }}>
        <div className="explore-container-narrow">
          <div className="explore-faq-section">
            <h2 className="explore-faq-title">About This Guide</h2>
            <p className="explore-description">{aboutFooter.bio}</p>
            <p className="explore-description">{aboutFooter.cta}</p>
            <div style={{ maxWidth: 800, margin: '24px auto 0', textAlign: 'center' }}>
              <a href="https://venturerei.com" target="_blank" rel="noopener noreferrer"
                 style={{ display: 'inline-block', background: 'var(--color-primary)', color: 'white', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, padding: '14px 36px', borderRadius: 28 }}>
                Contact Venture REI
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
