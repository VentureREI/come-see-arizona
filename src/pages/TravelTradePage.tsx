import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import { siteConfig } from '../data/siteConfig';
import AnswerBlock from '../components/AnswerBlock';

/* ───────────────────────── Helpers ───────────────────────── */

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 700, color: '#1A1A1A', marginBottom: 12 }}>{children}</h2>
      <div style={{ width: 40, height: 3, background: '#D32F2F' }} />
    </div>
  );
}

/* ───────────────────────── Data ───────────────────────── */

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1558645836-e44122a743ee?w=1920&q=80&auto=format';

const STATS = [
  { label: 'Annual Visitors', value: '45M+' },
  { label: 'Direct Spending', value: '$25B+' },
  { label: 'Tourism Jobs', value: '200K+' },
  { label: 'Hotel Rooms', value: '75K+' },
  { label: 'Golf Courses', value: '300+' },
  { label: 'NPS Sites', value: '22' },
];

const DESTINATIONS = [
  {
    name: 'Greater Phoenix & Scottsdale',
    location: 'Central Arizona',
    description: 'World-class luxury resorts, championship golf, full-service spas, and MLB Spring Training. The Valley of the Sun is Arizona\'s largest metro and a premier meetings and incentive destination.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Sedona',
    location: 'Verde Valley, Northern Arizona',
    description: 'Iconic red rock formations, Jeep tours, wellness retreats, world-class hiking, and a thriving arts community. A top-tier spiritual and adventure destination.',
    image: 'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Grand Canyon',
    location: 'Northern Arizona',
    description: 'One of the Seven Natural Wonders of the World. South Rim and North Rim experiences, helicopter tours, whitewater rafting on the Colorado River, and rim-to-rim treks.',
    image: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Tucson & Southern Arizona',
    location: 'Southern Arizona',
    description: 'UNESCO City of Gastronomy, Saguaro National Park, Old West history in Tombstone, world-class birding, and authentic Sonoran Desert culture.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Northern Arizona',
    location: 'Flagstaff & Beyond',
    description: 'Flagstaff mountain charm, historic Route 66, Petrified Forest National Park, Meteor Crater, and cool-weather summer escapes at 7,000 feet elevation.',
    image: 'https://images.unsplash.com/photo-1545167496-c1e092d383a2?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Arizona Wine Country',
    location: 'Verde Valley, Willcox & Sonoita',
    description: 'A rapidly growing wine region with over 120 vineyards. Verde Valley tasting rooms, Willcox AVA varietals, and Sonoita\'s rolling grassland vineyards.',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80',
  },
];

const FAQS = [
  {
    question: 'What makes Arizona unique as a travel destination?',
    answer:
      'Arizona offers an unmatched combination of natural wonders, cultural heritage, and year-round sunshine. From the Grand Canyon and Sonoran Desert to world-class resorts and a UNESCO-recognized culinary scene in Tucson, the state delivers diverse experiences that appeal to every traveler segment. With 300-plus days of sunshine, 5 national parks, 22 National Park Service sites, and 22 Native American communities, Arizona provides itinerary depth that few destinations can match.',
  },
  {
    question: 'What is the best season for group travel to Arizona?',
    answer:
      'October through April is the peak season for group travel, with comfortable daytime temperatures between 65 and 85 degrees Fahrenheit in the Phoenix metro area. Spring (March-April) is especially popular due to MLB Spring Training and wildflower season. For budget-conscious groups, May and September offer pleasant weather with significantly lower hotel rates. Summer is ideal for northern Arizona destinations like Flagstaff, Sedona, and the Grand Canyon.',
  },
  {
    question: 'What are the top luxury resorts for incentive trips?',
    answer:
      'Scottsdale and the greater Phoenix area are home to some of the finest incentive-grade resorts in North America. Top properties include The Phoenician, Sanctuary on Camelback Mountain, Four Seasons Resort Scottsdale at Troon North, Fairmont Scottsdale Princess, The Scottsdale Resort at McCormick Ranch, and the Arizona Biltmore. Many feature 18-hole championship golf courses, full-service spas, multiple dining venues, and flexible meeting space for 20 to 2,000 attendees.',
  },
  {
    question: 'How do travelers get to Arizona?',
    answer:
      'Phoenix Sky Harbor International Airport (PHX) is a major hub served by all major domestic and international airlines, with over 1,200 daily flights. Tucson International Airport (TUS) serves southern Arizona. Phoenix is approximately 5 hours by car from Los Angeles, 4.5 hours from Las Vegas, and 6 hours from San Diego. Amtrak serves Flagstaff and Tucson on the Southwest Chief and Sunset Limited routes respectively.',
  },
  {
    question: 'What wine country options are available in Arizona?',
    answer:
      'Arizona\'s wine industry has grown to over 120 vineyards and three recognized AVAs (American Viticultural Areas). The Verde Valley near Sedona features walkable tasting rooms in Jerome, Cottonwood, and Cornville. The Willcox AVA in southeastern Arizona produces excellent Rhone-style varietals and Spanish-inspired blends. The Sonoita-Elgin corridor offers boutique wineries set against rolling grasslands at 5,000 feet elevation. Wine trail itineraries pair well with culinary, hiking, and cultural experiences.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Arizona Travel Trade - Resources for Travel Professionals',
  description:
    'Trade resources for travel agents, tour operators, and meeting planners working with Arizona as a destination. Destination highlights, tourism statistics, and partnership opportunities.',
  url: `${siteConfig.siteUrl}/travel-trade`,
  publisher: {
    '@type': 'Organization',
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
  },
};

/* ───────────────────────── Styles ───────────────────────── */

const bodyText: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 16,
  lineHeight: 1.8,
  color: '#444',
};

const wideContainer: React.CSSProperties = {
  maxWidth: 1200,
  margin: '0 auto',
};

const narrowContainer: React.CSSProperties = {
  maxWidth: 900,
  margin: '0 auto',
};

const cardGrid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
  gap: 24,
};

const calloutBox: React.CSSProperties = {
  borderLeft: '4px solid #D32F2F',
  background: '#FFF8F6',
  padding: '24px 28px',
  borderRadius: '0 12px 12px 0',
};

/* ───────────────────────── Component ───────────────────────── */

export default function TravelTradePage() {
  return (
    <>
      <SEOHead
        title="Arizona Travel Trade - Resources for Travel Professionals | Come See Arizona"
        description="Trade resources for travel agents, tour operators, and meeting planners working with Arizona as a destination. Destination highlights, tourism statistics, and partnership opportunities."
        canonical="/travel-trade"
        schema={[webPageSchema, faqSchema]}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Travel Trade', url: '/travel-trade' },
        ]}
      />

      {/* ─── Hero ─── */}
      <div className="explore-hero">
        <div className="explore-hero-bg">
          <img src={HERO_IMAGE} alt="Arizona desert landscape at golden hour" className="card-img" />
        </div>
        <div className="explore-hero-overlay" />
        <div className="explore-hero-content">
          <div className="breadcrumb-hero">
            <Link to="/">Home</Link> &nbsp;&gt;&nbsp; Travel Trade
          </div>
          <h1>Arizona Travel Trade</h1>
          <p className="hero-subtitle">
            Resources, destination insights, and partnership opportunities for travel agents, tour operators, and meeting planners
          </p>
        </div>
      </div>

      <AnswerBlock answer="Arizona welcomes over 45 million visitors annually with more than 25 billion dollars in direct travel spending. The state offers travel professionals a year-round destination with world-class resorts, five national parks, and 300-plus days of sunshine. This page provides tourism statistics, destination highlights, and Arizona Office of Tourism partnership resources." />

      {/* ─── 1. Why Arizona ─── */}
      <div style={{ background: '#fff', padding: '48px 24px' }}>
        <div style={wideContainer}>
          <SectionHeading>Why Arizona</SectionHeading>
          <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' as const, alignItems: 'center' }}>
            <div style={{ flex: '1 1 400px', ...bodyText }}>
              <p style={{ marginBottom: 16 }}>
                Arizona is one of the fastest-growing travel destinations in the United States, welcoming over <strong>45 million visitors annually</strong> who contribute more than <strong>$25 billion in direct spending</strong> to the state economy.
              </p>
              <p style={{ marginBottom: 16 }}>
                With <strong>300-plus days of sunshine</strong> each year, Arizona delivers reliable weather that makes it an ideal year-round destination. The state is home to <strong>world-class resorts</strong> concentrated in the Scottsdale and Phoenix corridor, providing exceptional options for incentive travel, meetings, and luxury leisure groups.
              </p>
              <p style={{ marginBottom: 16 }}>
                Arizona boasts <strong>5 national parks</strong> including the Grand Canyon, Petrified Forest, and Saguaro, along with 22 total National Park Service sites. From desert golf and spa wellness to canyon adventures and wine country, the diversity of experiences makes Arizona easy to sell across multiple client segments.
              </p>
              <p>
                The state also offers rich Native American cultural heritage, a UNESCO-designated City of Gastronomy in Tucson, and vibrant arts scenes in Scottsdale, Jerome, and Bisbee.
              </p>
            </div>
            <div style={{ flex: '0 1 380px' }}>
              <img
                src="https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=800&q=80"
                alt="Grand Canyon panoramic view"
                style={{ width: '100%', borderRadius: 12, display: 'block' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ─── 2. Key Tourism Statistics ─── */}
      <div style={{ background: '#FAFAFA', padding: '48px 24px' }}>
        <div style={wideContainer}>
          <SectionHeading>Key Tourism Statistics</SectionHeading>
          <div style={cardGrid}>
            {STATS.map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: '#fff',
                  borderRadius: 12,
                  padding: 20,
                  textAlign: 'center',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 32,
                    fontWeight: 800,
                    color: '#D32F2F',
                    marginBottom: 8,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 14,
                    fontWeight: 600,
                    color: '#666',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── 3. Destination Highlights ─── */}
      <div style={{ background: '#fff', padding: '48px 24px' }}>
        <div style={wideContainer}>
          <SectionHeading>Destination Highlights</SectionHeading>
          <div style={cardGrid}>
            {DESTINATIONS.map((dest) => (
              <div
                key={dest.name}
                style={{
                  background: '#fff',
                  borderRadius: 12,
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
              >
                <div style={{ aspectRatio: '16/10', overflow: 'hidden' }}>
                  <img
                    src={dest.image}
                    alt={dest.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ padding: '20px 24px 24px' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 18,
                      fontWeight: 700,
                      color: '#1A1A1A',
                      marginBottom: 4,
                    }}
                  >
                    {dest.name}
                  </h3>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 13,
                      color: '#999',
                      marginBottom: 12,
                      textTransform: 'uppercase',
                      letterSpacing: '0.3px',
                    }}
                  >
                    {dest.location}
                  </div>
                  <p style={{ ...bodyText, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                    {dest.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── 4. Arizona Office of Tourism Resources ─── */}
      <div style={{ background: '#FAFAFA', padding: '48px 24px' }}>
        <div style={narrowContainer}>
          <SectionHeading>Arizona Office of Tourism Resources</SectionHeading>
          <p style={{ ...bodyText, marginBottom: 24 }}>
            The Arizona Office of Tourism (AOT) provides a range of tools and resources to help travel professionals sell Arizona effectively. Below are key resources and programs available to the trade:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={calloutBox}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 16, fontWeight: 700, color: '#1A1A1A', marginBottom: 8 }}>
                Official Tourism Office
              </h3>
              <p style={{ ...bodyText, fontSize: 15, margin: 0 }}>
                The Arizona Office of Tourism at <strong>tourism.az.gov</strong> is the primary resource for trade professionals, offering destination guides, high-resolution image libraries, and partnership opportunities.
              </p>
            </div>
            <div style={calloutBox}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 16, fontWeight: 700, color: '#1A1A1A', marginBottom: 8 }}>
                State Visitor Guide
              </h3>
              <p style={{ ...bodyText, fontSize: 15, margin: 0 }}>
                Order or download the official Arizona State Visitor Guide, a comprehensive print and digital publication covering all regions, attractions, and travel planning details for your clients.
              </p>
            </div>
            <div style={calloutBox}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 16, fontWeight: 700, color: '#1A1A1A', marginBottom: 8 }}>
                Visit Arizona Consumer Site
              </h3>
              <p style={{ ...bodyText, fontSize: 15, margin: 0 }}>
                The consumer-facing site <strong>visitarizona.com</strong> is the official travel planning portal with itineraries, event calendars, and destination content that can be shared directly with clients.
              </p>
            </div>
            <div style={calloutBox}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 16, fontWeight: 700, color: '#1A1A1A', marginBottom: 8 }}>
                Arizona Tourism University (ATU)
              </h3>
              <p style={{ ...bodyText, fontSize: 15, margin: 0 }}>
                ATU offers free webinars and online training modules designed for travel advisors. Complete courses to become an Arizona Tourism Specialist and gain in-depth destination knowledge for selling Arizona.
              </p>
            </div>
            <div style={calloutBox}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 16, fontWeight: 700, color: '#1A1A1A', marginBottom: 8 }}>
                Trade Shows & Events
              </h3>
              <p style={{ ...bodyText, fontSize: 15, margin: 0 }}>
                Arizona is represented at major travel industry events including <strong>IPW</strong> (the leading international inbound travel trade show), <strong>Go West Summit</strong> (focused on western U.S. destinations), and <strong>ITB Berlin</strong> (the world&apos;s largest travel trade show). These events offer direct access to Arizona suppliers and DMO partners.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ─── 5. Working With Come See Arizona ─── */}
      <div style={{ background: '#fff', padding: '48px 24px' }}>
        <div style={narrowContainer}>
          <SectionHeading>Working With Come See Arizona</SectionHeading>
          <div style={bodyText}>
            <p style={{ marginBottom: 16 }}>
              Come See Arizona is a comprehensive destination resource powered by {siteConfig.brokerageName}, led by {siteConfig.leaderName} with {siteConfig.leaderCredential}. We provide in-depth neighborhood guides, community profiles, and lifestyle content that goes beyond typical tourism resources.
            </p>
            <p style={{ marginBottom: 16 }}>
              For travel professionals, we offer partnership and content licensing opportunities. Our local expertise covers the Phoenix metro area and surrounding communities in granular detail, making us an ideal resource for clients considering extended stays, relocation-tourism, or investment travel.
            </p>
            <p style={{ marginBottom: 16 }}>
              Whether your clients are exploring Arizona as a vacation destination, a snowbird retreat, or a permanent relocation, our team can provide destination briefings, neighborhood comparisons, school district information, and cost-of-living insights that complement your travel planning services.
            </p>
            <p>
              To discuss partnership opportunities, content licensing, or custom destination briefings, reach out through our website or connect with us directly.
            </p>
          </div>
        </div>
      </div>

      {/* ─── 6. Venture REI ─── */}
      <div style={{ background: '#FAF5F0', padding: '48px 24px' }}>
        <div style={narrowContainer}>
          <SectionHeading>Venture REI</SectionHeading>
          <div style={bodyText}>
            <p style={{ marginBottom: 16 }}>
              {siteConfig.brokerageName} specializes in helping individuals and families relocate to Arizona. For travel trade professionals with clients exploring corporate relocation, remote-work relocations, or retirement moves, our team provides comprehensive relocation services including neighborhood tours, school evaluations, market analysis, and community matching.
            </p>
            <p style={{ marginBottom: 24 }}>
              We work with HR departments, relocation management companies, and individual transferees to ensure a smooth transition to Arizona. Our deep knowledge of every community across Maricopa, Pinal, and Pima counties means we can match your clients with the right neighborhood based on commute patterns, lifestyle preferences, and budget.
            </p>
            <div style={{ textAlign: 'center' }}>
              <Link
                to="/explore"
                style={{
                  display: 'inline-block',
                  background: '#D32F2F',
                  color: 'white',
                  padding: '14px 36px',
                  borderRadius: 50,
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: 15,
                  textDecoration: 'none',
                  transition: 'background 0.2s',
                }}
              >
                Explore Arizona Communities
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ─── 7. FAQ ─── */}
      <div style={{ background: '#FAFAFA', padding: '48px 24px' }}>
        <div style={narrowContainer}>
          <div className="explore-faq-section">
            <h2 className="explore-faq-title">Frequently Asked Questions</h2>
            {FAQS.map((faq, i) => (
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
