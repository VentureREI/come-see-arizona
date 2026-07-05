import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import { siteConfig } from '../data/siteConfig';
import AnswerBlock from '../components/AnswerBlock';

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 700, color: '#211B24', marginBottom: 12 }}>{children}</h2>
      <div style={{ width: 40, height: 3, background: '#C1502E' }} />
    </div>
  );
}

const HERO_IMAGE = 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=1920&q=80&auto=format';

const STATS = [
  { value: '45M+', label: 'Annual Visitors' },
  { value: '$25B+', label: 'Economic Impact' },
  { value: '200K+', label: 'Tourism Jobs' },
  { value: '75K+', label: 'Hotel Rooms' },
  { value: '12M+', label: 'NPS Visits' },
  { value: '2M+', label: 'International Visitors' },
  { value: '300+', label: 'Golf Courses' },
  { value: '30+', label: 'State Parks' },
];

const TIMELINE_EVENTS = [
  { year: '1901', description: 'Fred Harvey and the Santa Fe Railway bring the first tourists to the Grand Canyon, launching Arizona as a destination.' },
  { year: '1930s', description: 'The dude ranch and resort era begins in Scottsdale, attracting visitors seeking the romance of the Old West.' },
  { year: '1960s', description: 'Scottsdale earns its nickname as "The West\'s Most Western Town," becoming a cultural and artistic hub.' },
  { year: '1996', description: 'Arizona hosts its first Super Bowl at Sun Devil Stadium in Tempe, putting the state on the national sports stage.' },
  { year: '2008', description: 'Super Bowl XLII is played at University of Phoenix Stadium, cementing Arizona as a premier sporting destination.' },
  { year: '2015', description: 'Super Bowl XLIX returns to University of Phoenix Stadium, drawing worldwide attention to the Valley of the Sun.' },
  { year: '2023', description: 'Super Bowl LVII at State Farm Stadium in Glendale showcases Arizona\'s world-class event infrastructure.' },
  { year: 'Present', description: 'Arizona welcomes 45M+ visitors annually, with a tourism economy exceeding $25 billion.' },
];

const FAQS = [
  {
    question: 'Who runs Come See Arizona?',
    answer: `Come See Arizona is published by ${siteConfig.brokerageName}, led by ${siteConfig.leaderName} (${siteConfig.leaderCredential}). Our editorial team combines local expertise with AI-driven content intelligence to provide the most comprehensive resource for Arizona visitors and residents.`,
  },
  {
    question: 'How is content kept accurate?',
    answer: 'We use a combination of real-time data feeds, AI-powered content agents, and human editorial review. Our sources include MLS listings, Eventbrite, PredictHQ, USFS trail databases, and official municipal records. Content is refreshed on a continuous cycle to ensure accuracy.',
  },
  {
    question: 'Is Come See Arizona affiliated with the Arizona Office of Tourism?',
    answer: 'No. Come See Arizona is an independent publication. While we reference and support the Arizona Office of Tourism\'s initiatives, including AppreciateAZ and Visit Arizona campaigns, we are not affiliated with or funded by any government tourism agency.',
  },
  {
    question: 'How can I suggest a correction?',
    answer: 'We take accuracy seriously. If you spot an error or outdated information, please contact us at info@comeseearizona.com with the page URL and a description of the issue. Our editorial team reviews all submissions and publishes corrections promptly.',
  },
  {
    question: 'Does Come See Arizona accept advertising?',
    answer: 'No. Come See Arizona does not accept paid placements, sponsored content, or advertising. All recommendations and rankings are based on editorial judgment, public data, and community feedback. This policy ensures our readers can trust every recommendation.',
  },
];

const CONTACT_CARDS = [
  {
    icon: '✉',
    title: 'General Inquiries',
    text: 'Questions, feedback, or partnership ideas',
    detail: 'info@comeseearizona.com',
  },
  {
    icon: '🏠',
    title: 'Incyte Realty',
    text: 'Buying, selling, or relocating to Arizona',
    detail: 'www.incyterealty.com',
  },
  {
    icon: '📝',
    title: 'Content Corrections',
    text: 'Report inaccurate or outdated information',
    detail: 'info@comeseearizona.com',
  },
  {
    icon: '📱',
    title: 'Social Media',
    text: 'Follow us for daily Arizona inspiration',
    detail: '@comeseearizona',
  },
];

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'About Arizona Tourism',
  description:
    'Learn about Arizona\'s tourism industry, the Come See Arizona mission, and our commitment to providing the most comprehensive guide to the Grand Canyon State.',
  url: 'https://comeseearizona.com/about-arizona-tourism',
};

export default function AboutArizonaTourismPage() {
  return (
    <>
      <SEOHead
        title="About Arizona Tourism | Come See Arizona"
        description="Learn about Arizona's tourism industry, the Come See Arizona mission, and our commitment to providing the most comprehensive guide to the Grand Canyon State."
        canonical="/about-arizona-tourism"
        schema={webPageSchema}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'About Arizona Tourism', url: '/about-arizona-tourism' },
        ]}
      />

      {/* Hero */}
      <div className="explore-hero">
        <div className="explore-hero-bg">
          <img src={HERO_IMAGE} alt="Dramatic Arizona canyon with layered red rock formations" className="card-img" />
        </div>
        <div className="explore-hero-overlay" />
        <div className="explore-hero-content">
          <div className="breadcrumb-hero">
            <Link to="/">Home</Link> &nbsp;&gt;&nbsp; About Arizona Tourism
          </div>
          <h1>About Arizona Tourism</h1>
          <p className="hero-subtitle">
            From the Grand Canyon to the Sonoran Desert, Arizona draws over 45 million visitors each year. Learn about the state's tourism industry and the mission behind Come See Arizona.
          </p>
        </div>
      </div>

      <AnswerBlock answer="Come See Arizona is an independent destination and community resource covering the entire state. Content is researched by local experts and updated multiple times per week. Real estate market analysis is provided by Incyte Realty, founded by Frank Vazquez with over 2,400 homes personally sold across the Phoenix metropolitan area." />

      {/* Section 1: About Come See Arizona */}
      <div style={{ background: '#fff', padding: '48px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading>About Come See Arizona</SectionHeading>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'flex-start' }}>
            <div style={{ flex: '1 1 400px', fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#4A4239' }}>
              <p>
                Come See Arizona is the most comprehensive travel and relocation resource for the Grand Canyon State. Our mission is to help visitors, newcomers, and lifelong residents discover everything Arizona has to offer - from world-famous landmarks to hidden neighborhood gems.
              </p>
              <p style={{ marginTop: 16 }}>
                We cover every city, neighborhood, zip code, and school district across Maricopa, Pinal, and Pima counties. Each community page features real data on home prices, school ratings, local events, trails, restaurants, and things to do - all powered by AI-driven content intelligence that keeps information fresh and accurate.
              </p>
              <p style={{ marginTop: 16 }}>
                Come See Arizona is published in partnership with <strong>{siteConfig.brokerageName}</strong>, a leading Arizona real estate team led by <strong>{siteConfig.leaderName}</strong>, with {siteConfig.leaderCredential}. Our combination of local expertise, real estate knowledge, and advanced content technology makes this the definitive guide for anyone exploring Arizona.
              </p>
              <p style={{ marginTop: 16 }}>
                Whether you're planning a weekend getaway, scouting your next hometown, or simply curious about what makes Arizona special, Come See Arizona is your starting point.
              </p>
            </div>
            <div style={{ flex: '0 1 320px', display: 'flex', justifyContent: 'center' }}>
              <img
                src="/come-see-arizona.png"
                alt="Come See Arizona"
                style={{ width: '100%', maxWidth: 300, borderRadius: 16 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Arizona Tourism By The Numbers */}
      <div style={{ background: '#F7F1E8', padding: '48px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading>Arizona Tourism By The Numbers</SectionHeading>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
              gap: 24,
            }}
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: '#fff',
                  borderRadius: 12,
                  padding: 20,
                  textAlign: 'center',
                }}
              >
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 700, color: '#C1502E' }}>
                  {stat.value}
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, textTransform: 'uppercase', color: '#8D847A', marginTop: 8 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: Arizona Tourism History */}
      <div style={{ background: '#fff', padding: '48px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading>Arizona Tourism History</SectionHeading>
          <div style={{ position: 'relative', paddingLeft: 32 }}>
            {/* Vertical connecting line */}
            <div
              style={{
                position: 'absolute',
                left: 5,
                top: 6,
                bottom: 6,
                width: 2,
                background: '#E0E0E0',
              }}
            />
            {TIMELINE_EVENTS.map((event, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: i < TIMELINE_EVENTS.length - 1 ? 28 : 0, position: 'relative' }}>
                {/* Dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: -32,
                    top: 6,
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    background: '#C1502E',
                    flexShrink: 0,
                  }}
                />
                {/* Content */}
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#4A4239' }}>
                  <strong style={{ color: '#211B24', fontFamily: 'var(--font-heading)' }}>{event.year}</strong>
                  <span style={{ margin: '0 8px', color: '#CFC7BC' }}> -</span>
                  {event.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 4: Arizona Office of Tourism */}
      <div style={{ background: '#F7F1E8', padding: '48px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading>Arizona Office of Tourism</SectionHeading>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#4A4239' }}>
            <p>
              The Arizona Office of Tourism (AOT) is the state agency responsible for marketing Arizona as a travel destination to domestic and international audiences. Operating under the Visit Arizona brand, AOT coordinates campaigns, research, and partnerships that support the state's $25 billion tourism economy.
            </p>
            <p style={{ marginTop: 16 }}>
              AOT's international marketing efforts target key markets in Canada, Mexico, the United Kingdom, Germany, and Asia-Pacific, helping to attract over 2 million international visitors to the state each year. Their research division publishes annual data on visitor spending, lodging performance, and economic impact by region.
            </p>
            <p style={{ marginTop: 16 }}>
              One of AOT's most visible initiatives is <strong>AppreciateAZ</strong>, a responsible tourism campaign that encourages visitors to respect natural landscapes, stay on designated trails, pack out waste, and support local businesses. The campaign has become a cornerstone of Arizona's approach to balancing tourism growth with environmental stewardship.
            </p>
          </div>
        </div>
      </div>

      {/* Section 5: Sustainable Tourism */}
      <div style={{ background: '#fff', padding: '48px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading>Sustainable Tourism</SectionHeading>
          <div
            style={{
              borderLeft: '4px solid #2E7D32',
              background: '#F1F8E9',
              borderRadius: 8,
              padding: '24px 28px',
              fontFamily: 'var(--font-body)',
              fontSize: 16,
              lineHeight: 1.8,
              color: '#4A4239',
            }}
          >
            <p>
              <strong style={{ color: '#2E7D32' }}>AppreciateAZ</strong> is Arizona's statewide initiative to promote responsible tourism. The campaign asks visitors and residents alike to treat the state's natural treasures with care - from the Grand Canyon's fragile rim trails to the delicate Sonoran Desert ecosystem.
            </p>
            <p style={{ marginTop: 16 }}>
              Key principles include staying on marked trails, carrying out all trash, respecting wildlife, conserving water, and supporting locally owned businesses. These guidelines align with the national <strong>Leave No Trace</strong> framework, which provides seven principles for minimizing human impact on the outdoors.
            </p>
            <p style={{ marginTop: 16 }}>
              Arizona's desert environment is more fragile than many visitors realize. Cryptobiotic soil crusts can take decades to recover from a single footprint, and saguaro cacti - Arizona's iconic symbol - grow as little as one inch per year. Sustainable tourism practices ensure these irreplaceable resources endure for future generations.
            </p>
          </div>
        </div>
      </div>

      {/* Section 6: Our Editorial Standards */}
      <div style={{ background: '#F7F1E8', padding: '48px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading>Our Editorial Standards</SectionHeading>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#4A4239' }}>
            <p>
              Every page on Come See Arizona is built on real data, not guesswork. We pull from authoritative sources including MLS real estate listings, Eventbrite and PredictHQ for events, USFS trail databases for hiking information, and official school district records for education data.
            </p>
            <p style={{ marginTop: 16 }}>
              We do not accept paid inclusion. No business, neighborhood, or community can pay to be featured, ranked higher, or reviewed favorably. Our editorial decisions are based entirely on data quality, reader interest, and geographic completeness.
            </p>
            <p style={{ marginTop: 16 }}>
              Our AI-driven content agents continuously monitor data sources for changes - new trail closures, updated home prices, rescheduled events - and flag content for refresh. Every automated update is validated against editorial standards before publication, ensuring accuracy without sacrificing timeliness.
            </p>
          </div>
        </div>
      </div>

      {/* Section 7: Contact */}
      <div style={{ background: '#fff', padding: '48px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading>Contact</SectionHeading>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
              gap: 24,
            }}
          >
            {CONTACT_CARDS.map((card) => (
              <div
                key={card.title}
                style={{
                  background: '#F7F1E8',
                  borderRadius: 12,
                  padding: 24,
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 12 }}>{card.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700, color: '#211B24', marginBottom: 8 }}>
                  {card.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: '#6B6259', marginBottom: 8 }}>
                  {card.text}
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: '#C1502E' }}>
                  {card.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 8: Incyte Realty */}
      <div style={{ background: '#FAF5F0', padding: '48px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading>About This Guide</SectionHeading>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#4A4239' }}>
            <p>
              Come See Arizona is published by <strong>{siteConfig.brokerageName}</strong>, one of Arizona's most experienced real estate teams. Led by <strong>{siteConfig.leaderName}</strong>, with {siteConfig.leaderCredential}, {siteConfig.brokerageName} combines deep local knowledge with cutting-edge technology to serve buyers, sellers, and investors across the Phoenix metro area and beyond.
            </p>
            <p style={{ marginTop: 16 }}>
              This guide reflects our belief that choosing where to live - or where to visit - deserves the same quality of research and insight that goes into buying a home. Every page is designed to help you make confident decisions about Arizona.
            </p>
            <div style={{ marginTop: 24, textAlign: 'center' }}>
              <Link
                to="/explore"
                style={{
                  display: 'inline-block',
                  background: '#C1502E',
                  color: '#fff',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: 16,
                  padding: '14px 32px',
                  borderRadius: 8,
                  textDecoration: 'none',
                }}
              >
                Explore Arizona
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Section 9: FAQ */}
      <div style={{ background: '#F7F1E8', padding: '48px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
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
