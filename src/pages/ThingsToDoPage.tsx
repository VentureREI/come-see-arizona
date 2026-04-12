import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import {
  THINGS_TO_DO_CATEGORIES,
  FEATURED_ACTIVITIES,
  SEASONAL_GUIDE,
  MAIN_PAGE_FAQS,
} from '../data/thingsToDo';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=1920&q=80&auto=format';

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Things to Do in Arizona',
  description:
    'Discover the best things to do in Arizona from desert hiking and world-class golf to museums, nightlife, spa resorts, and family adventures. 300+ days of sunshine await.',
  url: 'https://comeandseearizona.com/things-to-do',
  publisher: {
    '@type': 'Organization',
    name: 'Come And See Arizona',
    url: 'https://comeandseearizona.com',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: MAIN_PAGE_FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function ThingsToDoPage() {
  return (
    <>
      <SEOHead
        title="Things to Do in Arizona - Activities, Attractions & Experiences | Come And See Arizona"
        description="Discover the best things to do in Arizona from desert hiking and world-class golf to museums, nightlife, spa resorts, and family adventures. 300+ days of sunshine await."
        canonical="/things-to-do"
        schema={[webPageSchema, faqSchema]}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Things to Do', url: '/things-to-do' },
        ]}
      />

      {/* Hero Section */}
      <div className="explore-hero">
        <div className="explore-hero-bg">
          <img src={HERO_IMAGE} alt="Scenic Arizona desert landscape with saguaro cacti and vibrant sunset" className="card-img" />
        </div>
        <div className="explore-hero-overlay" />
        <div className="explore-hero-content">
          <div className="breadcrumb-hero">
            <Link to="/">Home</Link> &nbsp;&gt;&nbsp; Things to Do
          </div>
          <h1>Things to Do in Arizona</h1>
          <p className="hero-subtitle">
            From desert hiking and world-class golf to cultural museums, vibrant nightlife, and family adventures. Explore everything Arizona has to offer.
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <div className="explore-section">
        <div className="explore-container-narrow">
          <p style={{ fontSize: '18px', lineHeight: 1.8, color: '#333', marginBottom: 24 }}>
            Arizona is one of the most dynamic destinations in the American Southwest, offering an extraordinary range of activities for residents and visitors alike. With more than 300 days of sunshine each year, the state provides a year-round playground for outdoor enthusiasts, culture seekers, and families. The Phoenix metropolitan area alone encompasses over 41,000 acres of desert parks and mountain preserves, making it one of the largest urban park systems in the country. Beyond the trails, Arizona is home to world-class golf with over 300 courses statewide, a thriving arts and cultural scene anchored by institutions like the Phoenix Art Museum, Scottsdale Museum of Contemporary Art, and Heard Museum, and a full lineup of professional sports teams spanning the NFL, NBA, NHL, and MLB. Outdoor recreation stretches from desert hiking and rock climbing in the Sonoran lowlands to skiing and snowboarding at Arizona Snowbowl in Flagstaff. Whether you are looking for a relaxing spa weekend in Scottsdale, an adrenaline-fueled off-road adventure in the Superstition Mountains, or a family-friendly day at one of the state's many water parks and botanical gardens, Arizona delivers experiences that are hard to match anywhere else in the country.
          </p>
        </div>
      </div>

      {/* Category Cards Grid */}
      <div className="explore-section alt-bg">
        <div className="explore-container">
          <h2 className="explore-section-title">Explore by Category</h2>
          <div className="explore-grid-3">
            {THINGS_TO_DO_CATEGORIES.map((category) => (
              <Link to={`/things-to-do/${category.slug}`} className="ttd-category-card" key={category.slug}>
                <img src={category.heroImage} alt={category.name} className="card-img" />
                <div className="ttd-card-gradient" />
                <div className="ttd-card-body">
                  <h3>{category.name}</h3>
                  <p>{category.tagline}</p>
                  <span className="ttd-card-link">Explore &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Activities Section */}
      <div className="explore-section">
        <div className="explore-container">
          <h2 className="explore-section-title">Featured Activities & Attractions</h2>
          <div className="explore-grid-4">
            {FEATURED_ACTIVITIES.map((activity) => (
              <div className="ttd-featured-card" key={activity.name}>
                <img src={activity.image} alt={activity.name} className="ttd-featured-img" />
                <div className="ttd-featured-body">
                  <div className="ttd-featured-category">{activity.category}</div>
                  <h3>{activity.name}</h3>
                  <div className="ttd-featured-location">{activity.location}</div>
                  <p className="ttd-featured-desc">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Seasonal Guide Section */}
      <div className="explore-section alt-bg">
        <div className="explore-container">
          <h2 className="explore-section-title">Seasonal Activity Guide</h2>
          <div className="ttd-seasonal-grid">
            {(['fall', 'winter', 'spring', 'summer'] as const).map((season) => (
              <div className="ttd-season-card" key={season}>
                <h3>{SEASONAL_GUIDE[season].title}</h3>
                <p>{SEASONAL_GUIDE[season].description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Venture REI Section */}
      <div className="explore-section">
        <div className="explore-container">
          <div className="ttd-venture-section">
            <h2>Arizona Lifestyle & Real Estate</h2>
            <p>
              Arizona's incredible lifestyle options are a major driver of the real estate market. Proximity to golf courses, hiking preserves, cultural districts, and entertainment venues significantly impacts home values across the Valley. According to Venture REI's market analysis, homes near top-rated attractions and outdoor recreation in Scottsdale and Paradise Valley consistently command premium pricing. Frank Vazquez, lead of Venture REI with over 2,400 homes sold across the Valley, helps buyers find homes that match their lifestyle priorities.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="explore-section alt-bg">
        <div className="explore-container-narrow">
          <div className="explore-faq-section">
            <h2 className="explore-faq-title">Frequently Asked Questions</h2>
            {MAIN_PAGE_FAQS.map((faq, i) => (
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
    </>
  );
}
