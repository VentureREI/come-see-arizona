import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import {
  getNeighborhood,
  getCity,
  getCounty,
  getNeighborhoodsByCity,
  getZipCode,
  getSchoolDistrict,
  formatPrice,
} from '../data/lookups';
import type { Neighborhood } from '../data/types';
import { getNeighborhoodImage } from './exploreImages';
import { generateNeighborhoodGuide, generateNeighborhoodMarketAnalysis, generateNeighborhoodFaqs, getAboutFooter } from './contentGenerator';
import AnswerBlock from '../components/AnswerBlock';
import { getMarketPricesLastUpdated } from '../data/dynamicLoader';

export default function NeighborhoodPage() {
  const { neighborhoodSlug } = useParams<{ neighborhoodSlug: string }>();

  const neighborhood = neighborhoodSlug ? getNeighborhood(neighborhoodSlug) : undefined;
  const city = neighborhood ? getCity(neighborhood.citySlug) : undefined;
  const county = neighborhood ? getCounty(neighborhood.countySlug) : undefined;
  const siblingNeighborhoods = city
    ? getNeighborhoodsByCity(city.slug).filter((n) => n.slug !== neighborhood?.slug)
    : [];
  const zipCodeData = neighborhood
    ? neighborhood.zipCodes.map((z) => getZipCode(z)).filter(Boolean)
    : [];
  const schoolDistrictSlugs = new Set<string>();
  zipCodeData.forEach((z) => {
    if (z) {
      z.schoolDistrictSlugs.forEach((s) => schoolDistrictSlugs.add(s));
    }
  });
  const schoolDistricts = Array.from(schoolDistrictSlugs)
    .map((s) => getSchoolDistrict(s))
    .filter(Boolean);

  if (!neighborhood || !city || !county) {
    return (
      <div className="explore-hero" style={{ minHeight: '100vh', justifyContent: 'center' }}>
        <div className="explore-hero-content" style={{ textAlign: 'center' }}>
          <h1>Neighborhood Not Found</h1>
          <p className="hero-subtitle" style={{ marginBottom: 32 }}>
            Sorry, we couldn't find the neighborhood you're looking for. It may have been moved or doesn't exist.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="explore-pill active">
              Back to Home
            </Link>
            <Link to="/explore" className="explore-pill">
              Explore Arizona
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const guideParagraphs = generateNeighborhoodGuide(neighborhood, city, county);
  const marketParagraphs = generateNeighborhoodMarketAnalysis(neighborhood, city);
  const expandedFaqs = generateNeighborhoodFaqs(neighborhood, city, county);
  const aboutFooter = getAboutFooter(neighborhood.name);

  const seoDescription =
    `${neighborhood.name} is a ${neighborhood.vibe.toLowerCase()} neighborhood in ${city.name}, AZ with a median home price of ${formatPrice(neighborhood.medianHomePrice)} and a walk score of ${neighborhood.walkScore}.`.slice(
      0,
      155,
    );

  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: neighborhood.name,
    description: neighborhood.description,
    containedInPlace: {
      '@type': 'City',
      name: city.name,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: `${county.name}`,
      },
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: expandedFaqs.map((faq: { question: string; answer: string }) => ({
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
    { name: `${county.name}`, url: `/explore/county/${county.slug}` },
    { name: city.name, url: `/explore/city/${city.slug}` },
    { name: neighborhood.name, url: `/explore/neighborhood/${neighborhood.slug}` },
  ];

  const displayedSiblings = siblingNeighborhoods.slice(0, 6);
  const heroImage = getNeighborhoodImage(neighborhood.slug);

  return (
    <div>
      <SEOHead
        title={`${neighborhood.name} Neighborhood Guide | Come See Arizona`}
        description={seoDescription}
        canonical={`/explore/neighborhood/${neighborhood.slug}`}
        schema={[placeSchema, faqSchema]}
        breadcrumbs={breadcrumbs}
      />

      {/* A) Hero */}
      <section className="explore-hero">
        <div className="explore-hero-bg">
          <img src={heroImage} alt={`${neighborhood.name} neighborhood in ${city.name}, Arizona`} />
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
          <h1>{neighborhood.name} in {city.name}, Arizona</h1>
          <p className="hero-subtitle" style={{ fontStyle: 'italic' }}>
            {neighborhood.vibe}
          </p>
        </div>
      </section>

      {/* Answer Block */}
      <AnswerBlock answer={`${neighborhood.name} is a neighborhood in ${city.name}, Arizona with a median home price of ${formatPrice(neighborhood.medianHomePrice)} and a walk score of ${neighborhood.walkScore}. ${neighborhood.description.split('.')[0]}.`} />

      {/* B) Stats */}
      <div className="explore-stats-row">
        <div className="explore-stat-card">
          <div className="stat-number">{formatPrice(neighborhood.medianHomePrice)}</div>
          <div className="stat-label">Median Home Price</div>
        </div>
        <div className="explore-stat-card">
          <div className="stat-number">{neighborhood.walkScore}</div>
          <div className="stat-label">Walk Score</div>
        </div>
        <div className="explore-stat-card">
          <div className="stat-number">{neighborhood.zipCodes.length}</div>
          <div className="stat-label">Zip Code{neighborhood.zipCodes.length > 1 ? 's' : ''}</div>
        </div>
        <div className="explore-stat-card">
          <div className="stat-number">{neighborhood.homeTypes.length}</div>
          <div className="stat-label">Home Types</div>
        </div>
      </div>
      <div style={{ textAlign: 'center', padding: '8px 24px', fontFamily: 'var(--font-body)', fontSize: 13, color: '#888' }}>
        Market data last updated: {getMarketPricesLastUpdated()}
      </div>

      {/* C) Definitive Guide */}
      <section className="explore-section">
        <div className="explore-container-narrow">
          <h2 className="explore-section-title">The Definitive Guide to {neighborhood.name}</h2>
          {guideParagraphs.map((p, i) => (
            <p key={i} className="explore-description">{p}</p>
          ))}
        </div>
      </section>

      {/* C2) Real Estate Market */}
      <section className="explore-section alt-bg">
        <div className="explore-container-narrow">
          <h2 className="explore-section-title">Real Estate Market in {neighborhood.name}</h2>
          {marketParagraphs.map((p, i) => (
            <p key={i} className="explore-description">{p}</p>
          ))}
        </div>
      </section>

      {/* D) Home Types */}
      <section className="explore-section alt-bg">
        <div className="explore-container-narrow">
          <h2 className="explore-section-title">Home Types in {neighborhood.name}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {neighborhood.homeTypes.map((type) => (
              <span key={type} className="explore-pill active">
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* E) Schools */}
      {neighborhood.nearbySchools.length > 0 && (
        <section className="explore-section">
          <div className="explore-container-narrow">
            <h2 className="explore-section-title">Schools Near {neighborhood.name}</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {neighborhood.nearbySchools.map((school) => {
                const matchingDistrict = schoolDistricts.find((d) =>
                  d?.notableSchools.some(
                    (ns) => ns.toLowerCase() === school.toLowerCase(),
                  ),
                );
                return (
                  <li key={school} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 14 }}>
                    <span style={{ color: 'var(--color-primary)', marginTop: 2, fontSize: 18, lineHeight: 1 }} aria-hidden="true">
                      &bull;
                    </span>
                    <div>
                      <span style={{ fontSize: 16, color: 'var(--color-text)' }}>{school}</span>
                      {matchingDistrict && (
                        <Link
                          to={`/explore/school-district/${matchingDistrict.slug}`}
                          style={{ marginLeft: 10, fontSize: 13, color: 'var(--color-primary)', fontWeight: 600 }}
                        >
                          {matchingDistrict.name} District
                        </Link>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
            {schoolDistricts.length > 0 && (
              <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', gap: 16 }}>
                {schoolDistricts.map(
                  (district) =>
                    district && (
                      <Link
                        key={district.slug}
                        to={`/explore/school-district/${district.slug}`}
                        style={{ fontSize: 14, color: 'var(--color-primary)', fontWeight: 600 }}
                      >
                        View {district.name} District page &rarr;
                      </Link>
                    ),
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* F) Zip Codes */}
      <section className="explore-section">
        <div className="explore-container-narrow">
          <h2 className="explore-section-title">Zip Codes</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {neighborhood.zipCodes.map((zip) => (
              <Link key={zip} to={`/explore/zip/${zip}`} className="explore-pill">
                {zip}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* G) Sibling Neighborhoods */}
      {displayedSiblings.length > 0 && (
        <section className="explore-section alt-bg">
          <div className="explore-container-narrow">
            <h2 className="explore-section-title">More Neighborhoods in {city.name}</h2>
          </div>
          <div className="explore-container">
            <div className="explore-card-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '24px' }}>
              {displayedSiblings.map((sibling) => (
                <Link
                  key={sibling.slug}
                  to={`/explore/neighborhood/${sibling.slug}`}
                  className="explore-image-card neighborhood-explore-card"
                  style={{ aspectRatio: '16/10' }}
                >
                  <img
                    className="card-img"
                    src={getNeighborhoodImage(sibling.slug)}
                    alt={`${sibling.name} neighborhood`}
                  />
                  <div className="card-gradient" />
                  <div className="card-body">
                    <h3>{sibling.name}</h3>
                    <div className="card-vibe">{sibling.vibe}</div>
                    <div className="card-stats">
                      <span>{formatPrice(sibling.medianHomePrice)}</span>
                      <span>Walk Score: {sibling.walkScore}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* H) Explore Links */}
      <section className="explore-section">
        <div className="explore-container-narrow">
          <h2 className="explore-section-title">Continue Exploring</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <Link to={`/explore/city/${city.slug}`} className="explore-pill active" style={{ fontSize: 15, padding: '12px 28px' }}>
              {city.name} City Guide
            </Link>
            <Link to={`/explore/county/${county.slug}`} className="explore-pill" style={{ fontSize: 15, padding: '12px 28px' }}>
              {county.name} Guide
            </Link>
          </div>
        </div>
      </section>

      {/* I) FAQ */}
      <section className="explore-section alt-bg">
        <div className="explore-container-narrow">
          <div className="explore-faq-section">
            <h2 className="explore-faq-title">Frequently Asked Questions</h2>
            {expandedFaqs.map((faq) => (
              <details key={faq.question} className="explore-faq">
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
          <p className="explore-description" style={{ fontWeight: 600 }}>{aboutFooter.cta}</p>
          <div style={{ marginTop: 24 }}>
            <a
              href="https://www.venturerei.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="explore-pill active"
              style={{ fontSize: 16, padding: '14px 36px', display: 'inline-block', textAlign: 'center' }}
            >
              Contact Venture REI
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
