import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import AnswerBlock from '../components/AnswerBlock';
import { THINGS_TO_DO_CATEGORIES } from '../data/thingsToDo';
import type { ThingsToDoCategory, Listing } from '../data/thingsToDo';

export default function ThingsToDoSubPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const category: ThingsToDoCategory | undefined = THINGS_TO_DO_CATEGORIES.find(
    (c) => c.slug === categorySlug
  );

  if (!category) {
    return (
      <div style={{ textAlign: 'center', padding: '80px 20px' }}>
        <h1>Category Not Found</h1>
        <p>The category you are looking for does not exist.</p>
        <Link to="/things-to-do" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
          &larr; Back to Things to Do
        </Link>
      </div>
    );
  }

  const paragraphs = category.description.split('\n\n');

  // Schema: CollectionPage
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${category.name} in Arizona`,
    description: category.description.slice(0, 300),
    url: `https://comeseearizona.com/things-to-do/${category.slug}`,
  };

  // Schema: TouristAttraction for first 10 listings
  const listingSchemas = category.listings.slice(0, 10).map((listing: Listing) => {
    const schema: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'TouristAttraction',
      name: listing.name,
      description: listing.description,
      address: listing.location,
    };
    if (listing.lat != null && listing.lng != null) {
      schema.geo = {
        '@type': 'GeoCoordinates',
        latitude: listing.lat,
        longitude: listing.lng,
      };
    }
    return schema;
  });

  // Schema: FAQPage
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: category.faqItems.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <SEOHead
        title={`${category.name} in Arizona | Come See Arizona`}
        description={category.description.slice(0, 160)}
        canonical={`/things-to-do/${category.slug}`}
        schema={[collectionSchema, ...listingSchemas, ...(category.faqItems.length > 0 ? [faqSchema] : [])]}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Things to Do', url: '/things-to-do' },
          { name: category.name, url: `/things-to-do/${category.slug}` },
        ]}
      />

      {/* Hero Section */}
      <div className="explore-hero">
        <div className="explore-hero-bg">
          <img src={category.heroImage} alt={category.name + ' in Arizona'} className="card-img" />
        </div>
        <div className="explore-hero-overlay" />
        <div className="explore-hero-content">
          <div className="breadcrumb-hero">
            <Link to="/">Home</Link> &nbsp;&gt;&nbsp; <Link to="/things-to-do">Things to Do</Link> &nbsp;&gt;&nbsp; {category.name}
          </div>
          <h1>{category.name} in Arizona</h1>
          <p className="hero-subtitle">{category.tagline}</p>
        </div>
      </div>

      <AnswerBlock answer={`${category.name} in Arizona: ${category.description ? category.description.split('.').slice(0, 2).join('.') + '.' : 'Explore the best ' + category.name.toLowerCase() + ' activities across the state.'}`} />

      {/* Editorial Introduction */}
      <div className="explore-section">
        <div className="explore-container-narrow">
          {paragraphs.map((text, i) => (
            <p
              key={i}
              style={
                i === 0
                  ? { fontSize: '18px', lineHeight: 1.8, color: '#39322C' }
                  : { fontSize: '16px', lineHeight: 1.7, color: '#4A4239' }
              }
            >
              {text}
            </p>
          ))}
        </div>
      </div>

      {/* Listings Section */}
      <div className="explore-section alt-bg">
        <div className="explore-container">
          <h2 className="explore-section-title">{category.name}: Top Picks</h2>
          <div className="explore-grid-2">
            {category.listings.map((listing: Listing) => (
              <div className="ttd-listing-card" key={listing.name}>
                <h3>{listing.name}</h3>
                <div className="ttd-listing-location">{listing.location}</div>
                <p className="ttd-listing-desc">{listing.description}</p>
                <div className="ttd-listing-meta">
                  {listing.priceRange && <span className="ttd-price">{listing.priceRange}</span>}
                  {listing.website && (
                    <a
                      href={listing.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 600 }}
                    >
                      Visit Website &rarr;
                    </a>
                  )}
                </div>
                {listing.tips && (
                  <div className="ttd-listing-tips">
                    <strong>Tip:</strong> {listing.tips}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Categories Section */}
      <div className="explore-section">
        <div className="explore-container">
          <h2 className="explore-section-title">Explore More Things to Do</h2>
          <div className="ttd-related-grid">
            {category.relatedCategories.map((slug) => {
              const related = THINGS_TO_DO_CATEGORIES.find((c) => c.slug === slug);
              if (!related) return null;
              return (
                <Link to={`/things-to-do/${related.slug}`} className="ttd-related-link" key={slug}>
                  {related.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      {category.faqItems.length > 0 && (
        <div className="explore-section alt-bg">
          <div className="explore-container-narrow">
            <div className="explore-faq-section">
              <h2 className="explore-faq-title">Frequently Asked Questions</h2>
              {category.faqItems.map((faq, i) => (
                <details className="explore-faq" key={i}>
                  <summary>
                    {faq.question}
                    <span className="faq-icon">+</span>
                  </summary>
                  <div className="faq-answer">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Incyte Realty Footer */}
      <div className="explore-section">
        <div className="explore-container">
          <div className="ttd-venture-section">
            <h2>Arizona Lifestyle & Real Estate</h2>
            <p>Arizona's incredible lifestyle options are a major driver of the real estate market. Proximity to golf courses, hiking preserves, cultural districts, and entertainment venues significantly impacts home values across the Valley. According to Incyte Realty's market analysis, homes near top-rated attractions and outdoor recreation in Scottsdale and Paradise Valley consistently command premium pricing. Frank Vazquez, Designated Broker and Owner of Incyte Realty with over 2,400 homes sold across the Valley, helps buyers find homes that match their lifestyle priorities.</p>
          </div>
        </div>
      </div>
    </>
  );
}
