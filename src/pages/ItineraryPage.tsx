import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import { buildItinerarySchema } from '../components/seo/schema';
import AnswerBlock from '../components/AnswerBlock';
import { ITINERARIES } from '../data/itineraries';

const HERO_IMAGES: Record<string, string> = {
  'natural-wonders': 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1920&q=80',
  'arts-and-culture': 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1920&q=80',
  'arizona-dining': 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80',
  'golf-paradise': 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1920&q=80',
  'family-fun': 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1920&q=80',
  'old-west-history': 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1920&q=80',
};

export default function ItineraryPage() {
  const { slug } = useParams<{ slug: string }>();
  const itinerary = slug ? ITINERARIES[slug] : undefined;

  if (!itinerary || !slug) {
    return (
      <div className="explore-section" style={{ textAlign: 'center', padding: '120px 20px' }}>
        <div className="explore-container">
          <h1>Itinerary Not Found</h1>
          <p className="explore-description" style={{ marginTop: '16px' }}>
            Sorry, we could not find the itinerary you are looking for.
          </p>
          <Link
            to="/"
            style={{
              display: 'inline-block',
              marginTop: '24px',
              background: 'var(--color-primary)',
              color: 'white',
              padding: '14px 32px',
              borderRadius: '50px',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '15px',
            }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const descriptionParagraphs = itinerary.description.split('\n\n');

  const allSlugs = Object.keys(ITINERARIES);
  const otherItineraries = allSlugs.filter((s) => s !== slug);

  return (
    <>
      <SEOHead
        title={`${itinerary.title} | Come See Arizona`}
        description={descriptionParagraphs[0]}
        canonical={`/itineraries/${slug}`}
        image={HERO_IMAGES[slug!] || itinerary.heroImage}
        imageAlt={itinerary.title}
        schema={buildItinerarySchema({
          name: itinerary.title,
          description: itinerary.description,
          url: `/itineraries/${slug}`,
          image: HERO_IMAGES[slug!] || itinerary.heroImage,
          days: itinerary.days,
        })}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: itinerary.title, url: `/itineraries/${slug}` },
        ]}
      />

      {/* Hero Section */}
      <div className="explore-hero">
        <div className="explore-hero-bg">
          <img
            src={HERO_IMAGES[slug] || itinerary.heroImage}
            alt={itinerary.title}
            className="card-img"
          />
        </div>
        <div className="explore-hero-overlay" />
        <div className="explore-hero-content">
          <div className="breadcrumb-hero">
            <Link to="/">Home</Link> &nbsp;&gt;&nbsp;{' '}
            Itineraries &nbsp;&gt;&nbsp;{' '}
            {itinerary.title}
          </div>
          <h1>{itinerary.title}</h1>
        </div>
      </div>

      <AnswerBlock answer={`${itinerary.title}: ${itinerary.description.split('.').slice(0, 2).join('.') + '.'}`} />

      {/* Overview Section */}
      <div className="explore-section">
        <div className="explore-container-narrow">
          {descriptionParagraphs.map((paragraph, index) => (
            <p key={index} className="explore-description">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Day Sections */}
      {itinerary.days.map((day) => {
        const dayParagraphs = day.description.split('\n\n');
        return (
          <div key={day.dayNumber} className={`explore-section${day.dayNumber % 2 === 0 ? ' alt-bg' : ''}`}>
            <div className="explore-container-narrow">
              <h2 className="explore-section-title">
                Day {day.dayNumber}: {day.title}
              </h2>
              {dayParagraphs.map((paragraph, index) => (
                <p key={index} className="explore-description">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        );
      })}

      {/* More Itineraries */}
      <div className="explore-section alt-bg">
        <div className="explore-container-narrow">
          <h2 className="explore-section-title">More Itineraries</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '20px' }}>
            {otherItineraries.map((otherSlug) => (
              <Link
                key={otherSlug}
                to={`/itineraries/${otherSlug}`}
                className="explore-image-card"
                style={{ minHeight: 200 }}
              >
                <img src={HERO_IMAGES[otherSlug]} alt={ITINERARIES[otherSlug].title} className="card-img" />
                <div className="card-gradient" />
                <div className="card-body">
                  <h3>{ITINERARIES[otherSlug].title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Incyte Realty Footer */}
      <div style={{ background: '#FAF5F0', padding: '48px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 700, color: '#211B24', marginBottom: 12 }}>Planning Your Arizona Trip?</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#4A4239', marginBottom: 20 }}>
            Many visitors who fall in love with Arizona on trips like this decide to make it home. Incyte Realty helps buyers find the right community, from resort-adjacent Scottsdale to family-friendly Gilbert to emerging west Valley markets. Frank Vazquez and team offer straightforward guidance with no pressure.
          </p>
          <Link to="/explore" style={{ display: 'inline-block', background: '#C1502E', color: '#fff', padding: '14px 32px', borderRadius: 28, fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>
            Explore Arizona Communities
          </Link>
        </div>
      </div>
    </>
  );
}
