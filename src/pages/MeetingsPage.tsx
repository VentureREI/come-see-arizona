import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import { siteConfig } from '../data/siteConfig';

/* ───────────────────────── DATA ───────────────────────── */

const VENUES = [
  {
    name: 'Phoenix Convention Center',
    location: '100 N 3rd St, Phoenix',
    stats: '900K+ sq ft | 99 meeting rooms | 312,500 sq ft exhibit hall',
    description: 'One of the largest convention centers in the Southwest, centrally located in downtown Phoenix with direct light rail access, hundreds of nearby hotel rooms, and a walkable entertainment district.',
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf18c4e236?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Scottsdale Resort Conference Centers',
    location: 'Scottsdale, AZ',
    stats: 'Fairmont Princess | JW Marriott Camelback Inn | Westin Kierland',
    description: 'Multiple resort-based conference facilities offering luxury meeting spaces surrounded by championship golf courses, world-class spas, and the Sonoran Desert landscape.',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Tucson Convention Center',
    location: 'Tucson, AZ',
    stats: '205K sq ft | 9,000-seat arena | Performing arts theater',
    description: 'A versatile multi-venue complex in the heart of downtown Tucson with exhibit halls, meeting rooms, a concert arena, and performing arts facilities steps from historic Fourth Avenue.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Glendale & West Valley',
    location: 'Glendale, AZ',
    stats: 'State Farm Stadium 72K+ capacity | Desert Diamond Arena',
    description: 'Home to NFL and NCAA events, the West Valley sports and entertainment district hosts major conventions, trade shows, and large-scale corporate gatherings with ample parking and hotel inventory.',
    image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Sedona Retreats',
    location: 'Sedona, AZ',
    stats: 'Enchantment Resort | Hilton Sedona | L\'Auberge de Sedona',
    description: 'Intimate executive retreat venues set among iconic red rock formations, ideal for C-suite offsites, leadership summits, and corporate wellness retreats with a focus on inspiration and renewal.',
    image: 'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?auto=format&fit=crop&w=800&q=80',
  },
];

const UPCOMING_EVENTS = [
  {
    title: 'NCAA Women\'s Final Four Fan Events',
    startDate: '2026-04-03',
    endDate: '2026-04-05',
    description: 'Fan festivals, watch parties, and community events surrounding the NCAA Women\'s Final Four basketball tournament at Footprint Center in downtown Phoenix.',
  },
  {
    title: 'VIVA PHX Music Festival',
    startDate: '2026-04-15',
    endDate: '2026-04-20',
    description: 'A multi-day, multi-venue music festival showcasing hundreds of artists across downtown Phoenix venues, celebrating the city\'s diverse music scene.',
  },
  {
    title: 'Forbes 30 Under 30 Summit',
    startDate: '2026-04-19',
    endDate: '2026-04-22',
    description: 'Forbes brings thousands of young entrepreneurs, innovators, and leaders together for networking, panels, and collaboration at the Phoenix Convention Center.',
  },
  {
    title: 'U.S. Gymnastics Championships',
    startDate: '2026-08-06',
    endDate: '2026-08-09',
    description: 'The premier national gymnastics competition featuring top athletes competing for national titles and world championship team selection at the Phoenix Convention Center.',
  },
];

const FAQS = [
  {
    question: 'How large is Phoenix Convention Center?',
    answer: 'Phoenix Convention Center offers over 900,000 square feet of total space, including a 312,500 square foot exhibit hall, 99 meeting rooms, and three ballrooms. It is one of the largest convention centers in the southwestern United States and can accommodate events ranging from intimate board meetings to full-scale trade shows with tens of thousands of attendees.',
  },
  {
    question: 'Best time for conferences in Arizona?',
    answer: 'The peak conference season in Arizona runs from October through April, when daytime temperatures range from the mid-60s to low 90s. January through March is especially popular due to ideal weather, spring training season, and high delegate satisfaction. Summer months (June through August) offer significantly lower venue and hotel rates, making them attractive for budget-conscious planners willing to work around the heat.',
  },
  {
    question: 'Is Phoenix Convention Center near hotels?',
    answer: 'Yes. There are over 4,000 hotel rooms within walking distance of the Phoenix Convention Center, including the Sheraton Phoenix Downtown, Hyatt Regency Phoenix, and Renaissance Phoenix Downtown. The Valley Metro Light Rail stops directly at the convention center, connecting to additional hotel inventory in Tempe, Mesa, and along the Central Avenue corridor.',
  },
  {
    question: 'What airports serve Arizona?',
    answer: 'Phoenix Sky Harbor International Airport (PHX) is the primary gateway, offering direct flights to over 100 domestic and 20 international destinations. It is located just 10 minutes from downtown Phoenix and the convention center. Tucson International Airport (TUS) and Phoenix-Mesa Gateway Airport (AZA) serve as secondary options. Sky Harbor consistently ranks among the top airports in the country for on-time performance and passenger satisfaction.',
  },
  {
    question: 'Outdoor event options?',
    answer: 'Arizona is one of the best states in the country for outdoor events thanks to 300+ days of sunshine annually. Popular outdoor event venues include Scottsdale Civic Center Park, Tempe Beach Park along Tempe Town Lake, Desert Botanical Garden, and numerous resort properties with outdoor pavilions and lawns. Many planners incorporate outdoor receptions, team-building excursions, and golf outings into their conference agendas.',
  },
];

const PLANNING_RESOURCES = [
  { name: 'Phoenix Convention Center', url: 'https://www.phoenixconventioncenter.com', description: 'Official venue information, floor plans, and booking inquiries.' },
  { name: 'Visit Phoenix Meetings', url: 'https://www.visitphoenix.com/meetings', description: 'Destination services, site selection assistance, and planner resources.' },
  { name: 'Experience Scottsdale Meetings', url: 'https://www.experiencescottsdale.com/meetings', description: 'Resort conference planning, group rates, and Scottsdale event support.' },
];

function formatMonthDay(dateStr: string): { month: string; day: string } {
  const d = new Date(dateStr + 'T12:00:00');
  return {
    month: d.toLocaleString('en-US', { month: 'short' }).toUpperCase(),
    day: d.getDate().toString(),
  };
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Meetings and Conventions in Arizona',
  description:
    'Plan your next meeting or convention in Arizona. Explore major venues, upcoming events, and planning resources for the Phoenix metro area, Scottsdale, Tucson, and Sedona.',
  url: `${siteConfig.siteUrl}/meetings`,
  publisher: {
    '@type': 'Organization',
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
  },
};

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

/* ───────────────────────── COMPONENTS ───────────────────────── */

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 700, color: '#1A1A1A', marginBottom: 12 }}>{children}</h2>
      <div style={{ width: 40, height: 3, background: '#D32F2F' }} />
    </div>
  );
}

function VenueCard({ name, location, stats, description, image }: { name: string; location: string; stats: string; description: string; image: string }) {
  return (
    <div
      style={{ borderRadius: 16, overflow: 'hidden', background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', transition: 'all 0.2s' }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      <div style={{ aspectRatio: '16/10', overflow: 'hidden' }}>
        <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
      </div>
      <div style={{ padding: 20 }}>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 600, color: '#1A1A1A', marginBottom: 4 }}>{name}</h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>{location}</p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#D32F2F', fontWeight: 600, marginBottom: 8 }}>{stats}</p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#555', lineHeight: 1.6 }}>{description}</p>
      </div>
    </div>
  );
}

/* ───────────────────────── PAGE ───────────────────────── */

export default function MeetingsPage() {
  return (
    <>
      <SEOHead
        title="Meetings and Conventions in Arizona | Come And See Arizona"
        description="Plan your next meeting or convention in Arizona. Explore major venues like Phoenix Convention Center, upcoming events, and planning resources across Phoenix, Scottsdale, Tucson, and Sedona."
        canonical="/meetings"
        schema={[webPageSchema, faqSchema]}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Meetings', url: '/meetings' },
        ]}
      />

      {/* Hero */}
      <div className="explore-hero">
        <div className="explore-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80&auto=format"
            alt="Large convention center event with professional lighting and attendees networking"
            className="card-img"
          />
        </div>
        <div className="explore-hero-overlay" />
        <div className="explore-hero-content">
          <div className="breadcrumb-hero">
            <Link to="/">Home</Link> &nbsp;&gt;&nbsp; Meetings
          </div>
          <h1>Meetings and Conventions in Arizona</h1>
          <p className="hero-subtitle">
            World-class venues, 300+ days of sunshine, and a destination your attendees will actually want to visit.
            Plan your next convention, conference, or corporate retreat in the heart of the Southwest.
          </p>
        </div>
      </div>

      {/* ─── 1. Why Meet in Arizona ─── */}
      <div style={{ background: '#fff', padding: '48px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading>Why Meet in Arizona</SectionHeading>
          <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' as const }}>
            <div style={{ flex: '1 1 400px', minWidth: 300 }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 16 }}>
                Arizona has emerged as one of the top convention and meetings destinations in the
                United States, combining world-class infrastructure with a climate and lifestyle that
                keep delegates engaged and energized. The Phoenix Convention Center alone offers over
                900,000 square feet of versatile event space, making it one of the largest and most
                modern facilities in the Southwest.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 16 }}>
                In 2025, downtown Phoenix hosted over 70 conventions drawing more than 293,000
                delegates and generating a $453.7 million economic impact. Those numbers reflect a
                destination that consistently delivers for planners and attendees alike.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444' }}>
                Beyond the convention floor, Arizona offers unparalleled post-conference experiences -
                from championship golf and luxury spa treatments to red rock hikes and world-class
                dining. It is a destination that turns a business trip into something delegates look
                forward to attending.
              </p>
            </div>
            <div style={{ flex: '0 1 380px', minWidth: 280 }}>
              <img
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80"
                alt="Professional conference session with speaker presenting to engaged audience"
                style={{ width: '100%', borderRadius: 16, objectFit: 'cover' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ─── 2. Major Venues ─── */}
      <div style={{ background: '#FAFAFA', padding: '48px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading>Major Venues</SectionHeading>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 32, maxWidth: 800 }}>
            From massive convention centers to intimate resort retreats, Arizona offers venues for
            every type of meeting, conference, and corporate event.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 24 }}>
            {VENUES.map((venue) => (
              <VenueCard key={venue.name} {...venue} />
            ))}
          </div>
        </div>
      </div>

      {/* ─── 3. Upcoming Major Events ─── */}
      <div style={{ background: '#fff', padding: '48px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading>Upcoming Major Events</SectionHeading>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 32, maxWidth: 800 }}>
            Major events coming to Phoenix Convention Center and the surrounding area in 2026.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 24 }}>
            {UPCOMING_EVENTS.map((ev) => {
              const { month, day } = formatMonthDay(ev.startDate);
              const endFormatted = ev.endDate
                ? new Date(ev.endDate + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
                : null;
              return (
                <div
                  key={ev.title}
                  style={{
                    borderRadius: 16,
                    overflow: 'hidden',
                    background: '#fff',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                    display: 'flex',
                    gap: 0,
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  {/* Date block */}
                  <div style={{
                    flexShrink: 0,
                    width: 80,
                    minHeight: '100%',
                    background: '#D32F2F',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px 8px',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 12,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: 1,
                      opacity: 0.9,
                    }}>{month}</span>
                    <span style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 36,
                      fontWeight: 700,
                      lineHeight: 1,
                    }}>{day}</span>
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1, padding: 20 }}>
                    <h3 style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 18,
                      fontWeight: 700,
                      color: '#1A1A1A',
                      lineHeight: 1.3,
                      marginBottom: 8,
                    }}>{ev.title}</h3>
                    {endFormatted && (
                      <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 13,
                        color: '#888',
                        marginBottom: 8,
                      }}>
                        Through {endFormatted}
                      </p>
                    )}
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 14,
                      color: '#555',
                      lineHeight: 1.6,
                    }}>{ev.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── 4. Why Attendees Love Arizona ─── */}
      <div style={{ background: '#FAFAFA', padding: '48px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading>Why Attendees Love Arizona</SectionHeading>

          <div style={{ borderLeft: '4px solid #D32F2F', background: '#FFF8F6', padding: '24px 28px', borderRadius: '0 12px 12px 0', marginBottom: 16 }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 600, color: '#1A1A1A', marginBottom: 8 }}>300+ Days of Sunshine</h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.7, color: '#555' }}>
              Arizona averages over 300 days of sunshine per year, making it one of the most
              weather-reliable convention destinations in the country. Planners can count on clear
              skies and comfortable temperatures from October through April, with virtually zero risk
              of weather-related disruptions.
            </p>
          </div>

          <div style={{ borderLeft: '4px solid #D32F2F', background: '#FFF8F6', padding: '24px 28px', borderRadius: '0 12px 12px 0', marginBottom: 16 }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 600, color: '#1A1A1A', marginBottom: 8 }}>PHX Airport Direct Flights</h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.7, color: '#555' }}>
              Phoenix Sky Harbor International Airport offers nonstop service to over 100 domestic
              and 20 international destinations. It is just 10 minutes from the convention center,
              with light rail service connecting the airport directly to downtown venues.
            </p>
          </div>

          <div style={{ borderLeft: '4px solid #D32F2F', background: '#FFF8F6', padding: '24px 28px', borderRadius: '0 12px 12px 0', marginBottom: 16 }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 600, color: '#1A1A1A', marginBottom: 8 }}>75,000+ Hotel Rooms</h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.7, color: '#555' }}>
              The Greater Phoenix metro area offers over 75,000 hotel rooms across every price point
              and style, from full-service convention hotels within walking distance of the convention
              center to luxury resorts in Scottsdale and budget-friendly options connected by light rail.
            </p>
          </div>

          <div style={{ borderLeft: '4px solid #D32F2F', background: '#FFF8F6', padding: '24px 28px', borderRadius: '0 12px 12px 0', marginBottom: 16 }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 600, color: '#1A1A1A', marginBottom: 8 }}>Walkable Downtown + Light Rail</h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.7, color: '#555' }}>
              Downtown Phoenix has been transformed into a walkable urban core with restaurants,
              breweries, museums, and entertainment venues surrounding the convention center. The
              Valley Metro Light Rail connects downtown to Tempe, Mesa, and Sky Harbor Airport,
              giving attendees easy mobility without rental cars.
            </p>
          </div>

          <div style={{ borderLeft: '4px solid #D32F2F', background: '#FFF8F6', padding: '24px 28px', borderRadius: '0 12px 12px 0', marginBottom: 16 }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 600, color: '#1A1A1A', marginBottom: 8 }}>Post-Conference Activities</h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.7, color: '#555' }}>
              Arizona offers unmatched post-conference experiences including over 200 championship
              golf courses, world-class resort spas, desert hiking trails minutes from downtown,
              and a dining scene that ranges from James Beard award-winning restaurants to authentic
              Sonoran Mexican cuisine. Attendees consistently cite the destination itself as a major
              reason for attending Arizona-based events.
            </p>
          </div>
        </div>
      </div>

      {/* ─── 5. Planning Resources ─── */}
      <div style={{ background: '#fff', padding: '48px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading>Planning Resources</SectionHeading>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 32, maxWidth: 800 }}>
            These organizations provide complimentary planning assistance, site selection support,
            and destination services for meeting planners considering Arizona.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {PLANNING_RESOURCES.map((resource) => (
              <a
                key={resource.name}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  padding: '20px 24px',
                  background: '#FAFAFA',
                  borderRadius: 12,
                  textDecoration: 'none',
                  border: '1px solid #EEE',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'; e.currentTarget.style.borderColor = '#D32F2F'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#EEE'; }}
              >
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 600, color: '#D32F2F', marginBottom: 4 }}>
                  {resource.name} &rarr;
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#555', lineHeight: 1.5 }}>
                  {resource.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ─── 6. Venture REI ─── */}
      <div style={{ background: '#FAF5F0', padding: '48px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 700, color: '#1A1A1A', marginBottom: 16 }}>
            From Conference to Community - {siteConfig.brokerageName}
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444' }}>
            Every year, hundreds of convention attendees who visit Arizona decide to make the move
            permanent. {siteConfig.brokerageName} specializes in helping corporate relocations and
            professionals who first experienced Arizona through a business trip find the right
            community to call home. {siteConfig.leaderName}, with {siteConfig.leaderCredential},
            understands the unique needs of professionals relocating from out of state.
          </p>
          <Link
            to="/explore"
            style={{
              display: 'inline-block',
              background: '#D32F2F',
              color: 'white',
              padding: '14px 32px',
              borderRadius: 28,
              fontFamily: 'var(--font-body)',
              fontSize: 15,
              fontWeight: 600,
              textDecoration: 'none',
              marginTop: 20,
            }}
          >
            Explore Arizona Communities
          </Link>
        </div>
      </div>

      {/* ─── 7. FAQ ─── */}
      <div className="explore-section alt-bg">
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
