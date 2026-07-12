import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import { siteConfig } from '../data/siteConfig';
import AnswerBlock from '../components/AnswerBlock';
import { ITINERARIES } from '../data/itineraries';

// Local card images (public/) keyed by itinerary slug, matching the homepage cards.
const CARD_IMAGES: Record<string, string> = {
  'natural-wonders': '/itinerary-nature.jpg',
  'arts-and-culture': '/itinerary-culture.jpg',
  'arizona-dining': '/itinerary-dining.jpg',
  'golf-paradise': '/itinerary-golf.jpg',
  'family-fun': '/itinerary-family.jpg',
  'old-west-history': '/itinerary-history.jpg',
};

const slugs = Object.keys(ITINERARIES);

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Arizona Trip Itineraries',
  description: 'Curated three-day Arizona trip itineraries covering natural wonders, arts and culture, dining, golf, family fun, and Old West history.',
  numberOfItems: slugs.length,
  itemListElement: slugs.map((slug, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: ITINERARIES[slug].title,
    url: `${siteConfig.siteUrl}/itineraries/${slug}`,
  })),
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Arizona Trip Itineraries',
  description: 'Six curated three-day Arizona itineraries with day-by-day plans for the Grand Canyon, Sedona, Phoenix, Scottsdale, Tucson, and beyond.',
  url: `${siteConfig.siteUrl}/itineraries`,
  publisher: {
    '@type': 'Organization',
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
  },
};

export default function ItinerariesLandingPage() {
  return (
    <>
      <SEOHead
        title="Arizona Trip Itineraries - 3-Day Travel Plans | Come See Arizona"
        description="Six curated three-day Arizona itineraries with day-by-day plans: Grand Canyon and Sedona natural wonders, arts and culture, dining, golf, family fun, and Old West history."
        canonical="/itineraries"
        schema={[webPageSchema, itemListSchema]}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Itineraries', url: '/itineraries' },
        ]}
      />

      {/* ─── Hero ─── */}
      <div className="explore-hero">
        <div className="explore-hero-bg">
          <img src="/itinerary-nature.jpg" alt="Red rock formations of Sedona, Arizona" className="card-img" />
        </div>
        <div className="explore-hero-overlay" />
        <div className="explore-hero-content">
          <div className="breadcrumb-hero">
            <Link to="/">Home</Link> &nbsp;&gt;&nbsp; Itineraries
          </div>
          <h1>Arizona Trip Itineraries</h1>
          <p className="hero-subtitle">
            Curated three-day plans built around the best of the Grand Canyon State
          </p>
        </div>
      </div>

      <AnswerBlock answer="Come See Arizona publishes six curated three-day Arizona itineraries: Natural Wonders (Grand Canyon, Sedona, Monument Valley), Arts and Culture (Phoenix, Scottsdale, Tucson), Arizona Dining (Tucson UNESCO gastronomy through Scottsdale fine dining), Golf Paradise (TPC Scottsdale, Troon North, We-Ko-Pa), Family Fun (Phoenix Zoo, OdySea Aquarium, Slide Rock), and Old West History (Tombstone, Bisbee, Jerome). Each includes day-by-day plans with specific stops, trails, and restaurants." />

      {/* ─── Itinerary cards ─── */}
      <div style={{ background: '#F7F1E8', padding: '48px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#4A4239', marginBottom: 40, maxWidth: 900 }}>
            Each itinerary below is a complete three-day plan with specific stops, trails, restaurants, and timing built in.
            Pick the one that matches your travel style, or combine two for a longer trip. Every plan starts from the
            Phoenix metro area unless noted, and all of them work year-round with seasonal adjustments for summer heat.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: 28 }}>
            {slugs.map((slug) => {
              const itinerary = ITINERARIES[slug];
              const summary = itinerary.description.split('\n\n')[0];
              return (
                <Link
                  key={slug}
                  to={`/itineraries/${slug}`}
                  style={{
                    background: '#fff',
                    borderRadius: 16,
                    boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                    overflow: 'hidden',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <img
                    src={CARD_IMAGES[slug] || itinerary.heroImage}
                    alt={itinerary.title}
                    loading="lazy"
                    decoding="async"
                    width={600}
                    height={400}
                    style={{ width: '100%', height: 200, objectFit: 'cover' }}
                  />
                  <div style={{ padding: 24, display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 700, color: '#211B24', marginBottom: 12 }}>
                      {itinerary.title}
                    </h2>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7, color: '#5C5348', marginBottom: 16, flex: 1 }}>
                      {summary.length > 220 ? `${summary.slice(0, summary.lastIndexOf(' ', 220))}...` : summary}
                    </p>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: '#C1502E' }}>
                      View the 3-day plan &rarr;
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── Planning help ─── */}
      <div style={{ background: '#fff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 700, color: '#211B24', marginBottom: 16 }}>
            Need Help Planning?
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#4A4239', marginBottom: 12 }}>
            Start with our <Link to="/tourist-info" style={{ color: '#C1502E', fontWeight: 600 }}>visitor information guide</Link> for
            weather, safety, and seasonal advice, then browse <Link to="/things-to-do" style={{ color: '#C1502E', fontWeight: 600 }}>things to do</Link> and{' '}
            <Link to="/trails" style={{ color: '#C1502E', fontWeight: 600 }}>hiking trails</Link> to customize any itinerary.
            For places to stay along the way, see our <Link to="/where-to-stay" style={{ color: '#C1502E', fontWeight: 600 }}>lodging guide</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
