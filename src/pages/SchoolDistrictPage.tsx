import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import { getSchoolDistrict, getCity, getCounty, getZipCode, formatNumber } from '../data/lookups';
import { getHeroImage, getCityImage } from './exploreImages';
import { generateDistrictGuide, generateDistrictMarketAnalysis, generateDistrictFaqs, getAboutFooter } from './contentGenerator';
import AnswerBlock from '../components/AnswerBlock';

function ratingClass(rating: string): string {
  const r = rating.charAt(0).toUpperCase();
  if (r === 'A') return 'rating-a';
  if (r === 'B') return 'rating-b';
  if (r === 'C') return 'rating-c';
  return 'rating-d';
}

export default function SchoolDistrictPage() {
  const { districtSlug } = useParams<{ districtSlug: string }>();
  const district = districtSlug ? getSchoolDistrict(districtSlug) : undefined;

  if (!district) {
    return (
      <div className="explore-hero" style={{ minHeight: '60vh' }}>
        <div className="explore-hero-overlay" />
        <div className="explore-hero-content">
          <h1>School District Not Found</h1>
          <p className="hero-subtitle">
            Sorry, we couldn't find this school district. It may have been moved or doesn't exist.
          </p>
          <Link to="/" className="explore-pill active" style={{ marginTop: 24, display: 'inline-block' }}>
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const county = getCounty(district.countySlug);
  const cities = district.citySlugs.map(s => getCity(s)).filter(Boolean) as NonNullable<ReturnType<typeof getCity>>[];
  const zipCodes = district.zipCodes.map(z => getZipCode(z)).filter(Boolean) as NonNullable<ReturnType<typeof getZipCode>>[];
  const cityNames = cities.map(c => c.name);

  const guideParagraphs = county ? generateDistrictGuide(district, cities, county) : [district.description];
  const marketParagraphs = generateDistrictMarketAnalysis(district, cities);
  const expandedFaqs = generateDistrictFaqs(district, cities);
  const aboutFooter = getAboutFooter(district.name);

  const seoDescription = `${district.name} has a ${district.rating} rating with ${formatNumber(district.studentCount)} students across ${district.totalSchools} schools in Arizona.`.slice(0, 155);
  const canonical = `/explore/school-district/${district.slug}`;

  const educationalOrgSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: district.name,
    description: district.description,
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'AZ',
      addressCountry: 'US',
    },
    numberOfEmployees: undefined,
    areaServed: cityNames.map(name => ({
      '@type': 'City',
      name,
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: expandedFaqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Explore', url: '/explore' },
    ...(county ? [{ name: county.name, url: `/explore/county/${county.slug}` }] : []),
    { name: district.name, url: canonical },
  ];

  return (
    <div>
      <SEOHead
        title={`${district.name} Schools & Ratings | Come And See Arizona`}
        description={seoDescription}
        canonical={canonical}
        schema={[educationalOrgSchema, faqSchema]}
        breadcrumbs={breadcrumbs}
      />

      {/* A) Hero */}
      <section className="explore-hero">
        <div className="explore-hero-bg">
          <img src={getHeroImage(district.countySlug)} alt={`${district.name} area landscape`} />
        </div>
        <div className="explore-hero-overlay" />
        <div className="explore-hero-content">
          <div className="breadcrumb-hero">
            <Link to="/">Home</Link> &nbsp;&rsaquo;&nbsp;{' '}
            <Link to="/explore">Explore</Link> &nbsp;&rsaquo;&nbsp;{' '}
            {county && (
              <>
                <Link to={`/explore/county/${county.slug}`}>{county.name}</Link> &nbsp;&rsaquo;&nbsp;{' '}
              </>
            )}
            <span>{district.name}</span>
          </div>
          <div className={`rating-badge large ${ratingClass(district.rating)}`} style={{ margin: '0 auto 20px' }}>
            {district.rating}
          </div>
          <h1>{district.name}</h1>
          <p className="hero-subtitle">
            {formatNumber(district.studentCount)} students &middot; {district.totalSchools} schools &middot; {district.zipCodes.length} zip codes served
          </p>
        </div>
      </section>

      {/* Answer Block */}
      <AnswerBlock answer={`${district.name} serves students across ${district.citySlugs.length} cities in ${county?.name ?? 'Arizona'}. The district is rated ${district.rating} and includes ${district.totalSchools} schools with approximately ${formatNumber(district.studentCount)} students. ${district.description.split('.')[0]}.`} />

      {/* B) Stats Row */}
      <div className="explore-stats-row">
        <div className="explore-stat-card">
          <div className="stat-number">{district.totalSchools}</div>
          <div className="stat-label">Total Schools</div>
        </div>
        <div className="explore-stat-card">
          <div className="stat-number">{formatNumber(district.studentCount)}</div>
          <div className="stat-label">Student Count</div>
        </div>
        <div className="explore-stat-card">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span className={`rating-badge ${ratingClass(district.rating)}`}>{district.rating}</span>
          </div>
          <div className="stat-label">Rating</div>
        </div>
        <div className="explore-stat-card">
          <div className="stat-number">{district.zipCodes.length}</div>
          <div className="stat-label">Zip Codes Served</div>
        </div>
      </div>

      {/* C) District Guide */}
      <section className="explore-section">
        <div className="explore-container-narrow">
          <h2 className="explore-section-title">The Definitive Guide to {district.name}</h2>
          {guideParagraphs.map((p, i) => (
            <p key={i} className="explore-description">{p}</p>
          ))}
        </div>
      </section>

      {/* C2) Real Estate Market Section */}
      <section className="explore-section alt-bg">
        <div className="explore-container-narrow">
          <h2 className="explore-section-title">Real Estate Market in {district.name}</h2>
          {marketParagraphs.map((p, i) => (
            <p key={i} className="explore-description">{p}</p>
          ))}
        </div>
      </section>

      {/* D) Notable Schools */}
      {district.notableSchools.length > 0 && (
        <section className="explore-section">
          <div className="explore-container-narrow">
            <h2 className="explore-section-title">Notable Schools in {district.name}</h2>
          </div>
          <div className="explore-container">
            <div className="explore-card-grid">
              {district.notableSchools.map(school => (
                <div key={school} className="explore-info-card" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span
                    className={`rating-badge ${ratingClass(district.rating)}`}
                    style={{ width: 12, height: 12, minWidth: 12, borderRadius: '50%', fontSize: 0 }}
                  />
                  <h3 style={{ marginBottom: 0 }}>{school}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* E) Cities Served */}
      {cities.length > 0 && (
        <section className="explore-section alt-bg">
          <div className="explore-container-narrow">
            <h2 className="explore-section-title">Cities Served by {district.name}</h2>
          </div>
          <div className="explore-container">
            <div className="explore-card-grid">
              {cities.map(city => (
                <Link key={city.slug} to={`/explore/city/${city.slug}`} className="explore-image-card city-card" style={{ aspectRatio: '16/10' }}>
                  <img className="card-img" src={getCityImage(city.slug)} alt={city.name} />
                  <div className="card-gradient" />
                  <div className="card-body">
                    <h3>{city.name}</h3>
                    <div className="card-stats">
                      <span>Pop. {formatNumber(city.population)}</span>
                      <span>{city.zipCodes.length} zip codes</span>
                    </div>
                    <span className="card-link">Explore &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* F) Zip Codes */}
      {district.zipCodes.length > 0 && (
        <section className="explore-section">
          <div className="explore-container-narrow">
            <h2 className="explore-section-title">Zip Codes in {district.name}</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {district.zipCodes.map(zip => (
                <Link key={zip} to={`/explore/zip/${zip}`} className="explore-pill">
                  {zip}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* G) District Highlights */}
      {district.highlights.length > 0 && (
        <section className="explore-section alt-bg">
          <div className="explore-container-narrow">
            <h2 className="explore-section-title">District Highlights</h2>
            <ul className="explore-highlights">
              {district.highlights.map((highlight, i) => (
                <li key={i}>
                  <span className="highlight-icon">&#10003;</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* H) FAQs */}
      <section className="explore-section">
        <div className="explore-container-narrow">
          <div className="explore-faq-section">
            <h2 className="explore-faq-title">Frequently Asked Questions</h2>
            {expandedFaqs.map((faq, i) => (
              <details key={i} className="explore-faq">
                <summary>
                  <span>{faq.question}</span>
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
    </div>
  );
}
