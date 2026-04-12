import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import { COUNTIES, CITIES, NEIGHBORHOODS, ZIP_CODES, SCHOOL_DISTRICTS } from '../data/seedingTable';
import { searchAll, formatPrice, formatNumber } from '../data/lookups';
import { heroImages, getHeroImage, getCityImage } from './exploreImages';

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Explore Arizona Cities, Neighborhoods & Zip Codes',
  description:
    'Explore every city, neighborhood, zip code, and school district in Maricopa, Pinal, and Pima counties. Find detailed guides to Arizona communities with home prices, schools, and things to do.',
  url: 'https://comeandseearizona.com/explore',
};

type ActiveTab = 'cities' | 'neighborhoods' | 'zips' | 'districts';

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<ActiveTab>('cities');

  const searchResults = searchAll(searchQuery);

  const featuredCities = [...CITIES]
    .sort((a, b) => b.population - a.population)
    .slice(0, 16);

  const citiesByCounty = COUNTIES.map((county) => ({
    county,
    cities: CITIES.filter((c) => c.countySlug === county.slug).sort((a, b) =>
      a.name.localeCompare(b.name)
    ),
  }));

  const neighborhoodsByCity = CITIES
    .filter((city) => NEIGHBORHOODS.some((n) => n.citySlug === city.slug))
    .map((city) => ({
      city,
      neighborhoods: NEIGHBORHOODS.filter((n) => n.citySlug === city.slug).sort((a, b) =>
        a.name.localeCompare(b.name)
      ),
    }))
    .sort((a, b) => a.city.name.localeCompare(b.city.name));

  const zipsByCity = CITIES
    .filter((city) => ZIP_CODES.some((z) => z.citySlug === city.slug))
    .map((city) => ({
      city,
      zips: ZIP_CODES.filter((z) => z.citySlug === city.slug).sort((a, b) =>
        a.zip.localeCompare(b.zip)
      ),
    }))
    .sort((a, b) => a.city.name.localeCompare(b.city.name));

  const districtsByCounty = COUNTIES.map((county) => ({
    county,
    districts: SCHOOL_DISTRICTS.filter((d) => d.countySlug === county.slug).sort((a, b) =>
      a.name.localeCompare(b.name)
    ),
  }));

  const getResultLink = (result: { type: string; slug: string }) => {
    switch (result.type) {
      case 'county':
        return `/explore/county/${result.slug}`;
      case 'city':
        return `/explore/city/${result.slug}`;
      case 'neighborhood':
        return `/explore/neighborhood/${result.slug}`;
      case 'zip':
        return `/explore/zip/${result.slug}`;
      case 'school-district':
        return `/explore/school-district/${result.slug}`;
      default:
        return '/explore';
    }
  };

  const getRatingClass = (rating: string) => {
    const letter = rating.charAt(0).toUpperCase();
    if (letter === 'A') return 'rating-a';
    if (letter === 'B') return 'rating-b';
    if (letter === 'C') return 'rating-c';
    return 'rating-d';
  };

  return (
    <>
      <SEOHead
        title="Explore Arizona Cities, Neighborhoods & Zip Codes | Come And See Arizona"
        description="Explore every city, neighborhood, zip code, and school district in Maricopa, Pinal, and Pima counties. Find detailed guides to Arizona communities with home prices, schools, and things to do."
        canonical="/explore"
        schema={webPageSchema}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Explore Arizona', url: '/explore' },
        ]}
      />

      {/* A) Hero Section */}
      <div className="explore-hero">
        <div className="explore-hero-bg">
          <img src={heroImages.explore} alt="Arizona desert panorama" className="card-img" />
        </div>
        <div className="explore-hero-overlay" />
        <div className="explore-hero-content">
          <div className="breadcrumb-hero">
            <Link to="/">Home</Link> &nbsp;&gt;&nbsp; Explore Arizona
          </div>
          <h1>Explore Arizona</h1>
          <p className="hero-subtitle">
            Discover every city, neighborhood, and community across the Valley
          </p>
        </div>
      </div>

      {/* B) Search Bar */}
      <div className="explore-container">
        <div className="explore-search">
          <div className="explore-search-input">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search cities, neighborhoods, zip codes..."
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                style={{ padding: '8px', color: '#999' }}
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          {searchQuery && searchResults.length > 0 && (
            <div className="explore-search-dropdown">
              {searchResults.map((result) => (
                <Link
                  key={`${result.type}-${result.slug}`}
                  to={getResultLink(result)}
                  onClick={() => setSearchQuery('')}
                >
                  <span className="result-name">{result.name}</span>
                  <span className="result-subtitle">{result.subtitle}</span>
                </Link>
              ))}
            </div>
          )}
          {searchQuery && searchResults.length === 0 && (
            <div className="explore-search-dropdown" style={{ padding: '20px 24px', color: '#999', fontSize: '14px' }}>
              No results found for &ldquo;{searchQuery}&rdquo;
            </div>
          )}
        </div>
      </div>

      {/* C) Stats Row */}
      <div className="explore-container">
        <div className="explore-stats-row">
          {[
            { label: 'Counties', value: COUNTIES.length },
            { label: 'Cities', value: CITIES.length },
            { label: 'Neighborhoods', value: NEIGHBORHOODS.length },
            { label: 'Zip Codes', value: ZIP_CODES.length },
            { label: 'School Districts', value: SCHOOL_DISTRICTS.length },
          ].map((stat) => (
            <div key={stat.label} className="explore-stat-card">
              <div className="stat-number">{formatNumber(stat.value)}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* D) Counties Section */}
      <div className="explore-section">
        <div className="explore-container-narrow">
          <h2 className="explore-section-title">Explore by County</h2>
        </div>
        <div className="explore-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {COUNTIES.map((county) => {
              const cityCount = CITIES.filter((c) => c.countySlug === county.slug).length;
              return (
                <Link
                  key={county.slug}
                  to={`/explore/county/${county.slug}`}
                  className="explore-image-card county-card"
                >
                  <img src={getHeroImage(county.slug)} alt={county.name} className="card-img" />
                  <div className="card-gradient" />
                  <div className="card-body">
                    <h3>{county.name}</h3>
                    <div className="card-stats">
                      <span>Pop. {formatNumber(county.population)}</span>
                      <span>{formatPrice(county.medianHomePrice)}</span>
                      <span>{cityCount} cities</span>
                    </div>
                    <span className="card-link">
                      Explore &rarr;
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* E) Featured Cities */}
      <div className="explore-section alt-bg">
        <div className="explore-container-narrow">
          <h2 className="explore-section-title">Featured Cities</h2>
        </div>
        <div className="explore-container">
          <div className="explore-card-grid">
            {featuredCities.map((city) => (
              <Link
                key={city.slug}
                to={`/explore/city/${city.slug}`}
                className="explore-image-card city-card"
              >
                <img src={getCityImage(city.slug)} alt={city.name} className="card-img" />
                <div className="card-gradient" />
                <div className="card-body">
                  <h3 style={{ fontSize: '18px' }}>{city.name}</h3>
                  <div className="card-stats">
                    <span>Pop. {formatNumber(city.population)}</span>
                    <span>{formatPrice(city.medianHomePrice)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* F) Browse by Type */}
      <div className="explore-section">
        <div className="explore-container-narrow">
          <h2 className="explore-section-title">Browse by Type</h2>
        </div>
        <div className="explore-container">
          <div className="explore-tabs">
            {([
              { key: 'cities' as ActiveTab, label: `Cities (${CITIES.length})` },
              { key: 'neighborhoods' as ActiveTab, label: `Neighborhoods (${NEIGHBORHOODS.length})` },
              { key: 'zips' as ActiveTab, label: `Zip Codes (${ZIP_CODES.length})` },
              { key: 'districts' as ActiveTab, label: `Districts (${SCHOOL_DISTRICTS.length})` },
            ]).map((tab) => (
              <button
                key={tab.key}
                className={`explore-tab${activeTab === tab.key ? ' active' : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Cities Tab */}
          {activeTab === 'cities' && (
            <div className="explore-grid-3">
              {citiesByCounty.map(({ county, cities }) => (
                <div key={county.slug}>
                  <h4 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '18px',
                    fontWeight: 700,
                    marginBottom: '16px',
                    color: 'var(--color-text)',
                  }}>
                    {county.name}
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {cities.map((city) => (
                      <Link
                        key={city.slug}
                        to={`/explore/city/${city.slug}`}
                        className="explore-pill"
                      >
                        {city.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Neighborhoods Tab */}
          {activeTab === 'neighborhoods' && (
            <div style={{ columnCount: 3, columnGap: '32px' }}>
              {neighborhoodsByCity.map(({ city, neighborhoods }) => (
                <div key={city.slug} style={{ breakInside: 'avoid', marginBottom: '24px' }}>
                  <h4 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '16px',
                    fontWeight: 700,
                    marginBottom: '10px',
                    color: 'var(--color-text)',
                  }}>
                    {city.name}
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {neighborhoods.map((n) => (
                      <Link
                        key={n.slug}
                        to={`/explore/neighborhood/${n.slug}`}
                        className="explore-pill"
                      >
                        {n.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Zips Tab */}
          {activeTab === 'zips' && (
            <div style={{ columnCount: 3, columnGap: '32px' }}>
              {zipsByCity.map(({ city, zips }) => (
                <div key={city.slug} style={{ breakInside: 'avoid', marginBottom: '24px' }}>
                  <h4 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '16px',
                    fontWeight: 700,
                    marginBottom: '10px',
                    color: 'var(--color-text)',
                  }}>
                    {city.name}
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {zips.map((z) => (
                      <Link
                        key={z.zip}
                        to={`/explore/zip/${z.zip}`}
                        className="explore-pill"
                      >
                        {z.zip}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Districts Tab */}
          {activeTab === 'districts' && (
            <div>
              {districtsByCounty.map(({ county, districts }) => (
                <div key={county.slug} style={{ marginBottom: '32px' }}>
                  <h4 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '18px',
                    fontWeight: 700,
                    marginBottom: '16px',
                    color: 'var(--color-text)',
                  }}>
                    {county.name}
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {districts.map((d) => (
                      <Link
                        key={d.slug}
                        to={`/explore/school-district/${d.slug}`}
                        className="explore-pill"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                      >
                        {d.name}
                        <span
                          className={`rating-badge ${getRatingClass(d.rating)}`}
                          style={{ width: '26px', height: '26px', fontSize: '12px', borderRadius: '6px' }}
                        >
                          {d.rating}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* G) Footer CTA */}
      <div className="explore-section alt-bg" style={{ textAlign: 'center' }}>
        <div className="explore-container">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '18px',
            color: 'var(--color-text-secondary)',
            marginBottom: '20px',
          }}>
            Can&apos;t find what you&apos;re looking for?
          </p>
          <Link
            to="/"
            style={{
              display: 'inline-block',
              background: 'var(--color-primary)',
              color: 'white',
              padding: '14px 32px',
              borderRadius: '50px',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '15px',
              transition: 'background 0.2s',
            }}
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </>
  );
}
