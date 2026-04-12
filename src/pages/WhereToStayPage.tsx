import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import { siteConfig } from '../data/siteConfig';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80&auto=format';

const FAQS = [
  {
    question: 'What is the best area to stay in Arizona for first-time visitors?',
    answer:
      'Scottsdale Old Town is the top pick for first-time visitors. It offers walkable dining, nightlife, galleries, and easy access to desert hikes. Downtown Phoenix is another strong option if you prefer arts, sports venues, and a more urban feel.',
  },
  {
    question: 'When is the cheapest time to book a hotel in Arizona?',
    answer:
      'Summer (June through August) offers the lowest hotel rates across the state, especially in the Phoenix metro area. Temperatures are high, but many resorts discount rates by 40-60% and offer attractive package deals with spa credits and dining.',
  },
  {
    question: 'Are vacation rentals legal in Phoenix and Scottsdale?',
    answer:
      'Yes. Arizona state law allows short-term vacation rentals statewide, and cities cannot ban them outright. However, both Phoenix and Scottsdale enforce nuisance and noise regulations, and hosts must register with the city and collect applicable taxes.',
  },
  {
    question: 'What are the best luxury resorts in Scottsdale?',
    answer:
      'Top luxury resorts include The Phoenician, Sanctuary on Camelback Mountain, Four Seasons Resort Scottsdale at Troon North, Fairmont Scottsdale Princess, and Omni Scottsdale Resort & Spa at Montelucia. Each offers world-class dining, spas, pools, and golf.',
  },
  {
    question: 'Is it worth staying in Sedona instead of Phoenix?',
    answer:
      'Sedona is worth it if your trip is focused on nature, red rock hikes, spiritual wellness, and a quieter pace. It is about a two-hour drive from Phoenix. Many visitors split their trip between both areas to experience the contrast.',
  },
  {
    question: 'Are there good RV parks in the Phoenix area?',
    answer:
      'Yes. The Mesa and Apache Junction corridor is one of the most popular RV destinations in the country, especially for snowbirds. There are dozens of well-rated RV resorts with full hookups, pools, clubhouses, and organized activities.',
  },
  {
    question: 'How much does a hotel cost per night in Scottsdale?',
    answer:
      'Hotel prices in Scottsdale range widely. Budget-friendly options start around $80-$120 per night in summer. Mid-range hotels run $150-$300 during peak season (January through April). Luxury resorts can range from $400 to over $1,200 per night during high season.',
  },
  {
    question: 'What should I look for in an Arizona vacation rental?',
    answer:
      'Prioritize a private pool (essential from April through October), covered patio or ramada for shade, proximity to dining and trails, and whether the home is in a gated community. Check reviews for AC performance - a reliable cooling system is non-negotiable in the desert.',
  },
];

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Where to Stay in Arizona - Hotels, Resorts & Vacation Rentals',
  description:
    'A comprehensive guide to Arizona accommodations including luxury resorts, boutique hotels, vacation rentals, budget-friendly stays, and RV parks across Phoenix, Scottsdale, Sedona, and Tucson.',
  url: `${siteConfig.siteUrl}/where-to-stay`,
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

/* ───────────────────────── DATA ───────────────────────── */

const LUXURY_RESORTS = [
  { name: "The Phoenician", location: "Scottsdale", description: "Set at the base of Camelback Mountain with a championship golf course, award-winning spa, and multi-level pool complex.", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80", link: null },
  { name: "Sanctuary on Camelback Mountain", location: "Paradise Valley", description: "Perched on the north slope of Camelback with panoramic views, intimate casita-style rooms, and the celebrated Elements restaurant.", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80", link: null },
  { name: "Royal Palms Resort and Spa", location: "Phoenix", description: "Spanish Colonial architecture with lush Mediterranean gardens, originally built as a private mansion in 1929.", image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80", link: null },
  { name: "Arizona Biltmore", location: "Phoenix", description: "A Waldorf Astoria Resort since 1929, known for Frank Lloyd Wright-inspired architecture and sprawling grounds.", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80", link: null },
  { name: "Four Seasons Scottsdale", location: "North Scottsdale", description: "Secluded desert setting at Troon North with casita-style rooms, top-rated spa, and exceptional dining.", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80", link: null },
  { name: "Fairmont Scottsdale Princess", location: "Scottsdale", description: "Home to the TPC Stadium Course and WM Phoenix Open, with expansive pools and world-class spa.", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80", link: null },
  { name: "Enchantment Resort", location: "Sedona", description: "Nestled in Boynton Canyon with the award-winning Mii amo spa and direct access to red rock hiking trails.", image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=80", link: null },
  { name: "Miraval Arizona", location: "Tucson", description: "World-renowned destination spa in the Santa Catalina foothills with mindfulness workshops, equine therapy, and all-inclusive wellness.", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80", link: null },
];

const BOUTIQUE_HOTELS = [
  { name: "Hotel Valley Ho", location: "Old Town Scottsdale", description: "Restored mid-century modern gem from 1956 with a vibrant pool scene and ZuZu restaurant. Walking distance to galleries.", image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80" },
  { name: "The Scott Resort & Spa", location: "Scottsdale", description: "Contemporary design with a relaxed resort atmosphere, full-service spa, and central Scottsdale location.", image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80" },
  { name: "Arrive Phoenix", location: "Uptown Phoenix", description: "Design-forward boutique hotel with modern minimalist aesthetic, popular pool scene, and on-site coffee bar.", image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80" },
  { name: "ADERO Scottsdale", location: "Fountain Hills", description: "Arizona's first dark sky resort at the base of McDowell Mountains, with guided stargazing and Sonoran Preserve access.", image: "https://images.unsplash.com/photo-1562790351-d273a961e0e9?auto=format&fit=crop&w=800&q=80" },
  { name: "Graduate Tempe", location: "Tempe", description: "Playful design celebrating ASU culture, rooftop pool with Tempe Town Lake views, steps from Mill Avenue.", image: "https://images.unsplash.com/photo-1529290130-4ca3753253ae?auto=format&fit=crop&w=800&q=80" },
  { name: "Hotel San Carlos", location: "Downtown Phoenix", description: "Historic 1928 Art Deco hotel in the heart of downtown, near the convention center and sports arenas.", image: "https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=800&q=80" },
];

const AREA_GUIDES = [
  { name: "Scottsdale Old Town", description: "Walkable dining, nightlife, and galleries. Best for first-timers wanting evening entertainment without a car.", image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80", link: "/explore/city/scottsdale" },
  { name: "North Scottsdale", description: "Golf, hiking, and luxury resorts. Quiet, exclusive atmosphere near Troon North and McDowell Sonoran Preserve.", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", link: "/explore/neighborhood/north-scottsdale" },
  { name: "Downtown Phoenix", description: "Arts, sports, and conventions. Home to Footprint Center, Chase Field, Roosevelt Row, and the light rail.", image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80", link: "/explore/neighborhood/downtown-phoenix" },
  { name: "Tempe", description: "Budget-friendly, walkable, and vibrant. ASU campus, Mill Avenue nightlife, Tempe Town Lake, and light rail access.", image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80", link: "/explore/city/tempe" },
  { name: "Chandler & Gilbert", description: "Top choices for families with safe neighborhoods, excellent schools, parks, and lower hotel and rental rates.", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80", link: "/explore/city/chandler" },
  { name: "Tucson", description: "Laid-back, culturally rich. UNESCO City of Gastronomy, Saguaro NP, U of A, 20-40% lower rates than Scottsdale.", image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80", link: "/explore/city/tucson" },
  { name: "Sedona", description: "Nature retreats and spiritual wellness. Red rock scenery, luxury resorts, and galleries. Two hours from Phoenix.", image: "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?auto=format&fit=crop&w=800&q=80", link: null },
];

const RV_CAMPING = [
  { name: "Mesa/Apache Junction RV Resorts", location: "East Valley", description: "Ground zero for snowbird RV culture with dozens of resorts, full hookups, pools, and organized activities.", image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80" },
  { name: "Usery Mountain Regional Park", location: "Northeast Mesa", description: "Developed campgrounds with electric hookups set against the Goldfield Mountains, near Wind Cave and Pass Mountain trails.", image: "https://images.unsplash.com/photo-1478827536114-da961b7f86d2?auto=format&fit=crop&w=800&q=80" },
  { name: "Lost Dutchman State Park", location: "Apache Junction", description: "Legendary sunset views over the Superstitions with tent and RV camping, plus access to Treasure Loop and Siphon Draw trails.", image: "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?auto=format&fit=crop&w=800&q=80" },
  { name: "Sedona & Flagstaff Camping", location: "Northern Arizona", description: "Coconino National Forest offers developed campgrounds and dispersed camping among red rocks and ponderosa pines.", image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80" },
];

/* ───────────────────────── COMPONENTS ───────────────────────── */

function PlaceCard({ name, location, description, image }: { name: string; location: string; description: string; image: string }) {
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
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#555', lineHeight: 1.6 }}>{description}</p>
      </div>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 700, color: '#1A1A1A', marginBottom: 12 }}>{children}</h2>
      <div style={{ width: 40, height: 3, background: '#D32F2F' }} />
    </div>
  );
}

/* ───────────────────────── PAGE ───────────────────────── */

export default function WhereToStayPage() {
  return (
    <>
      <SEOHead
        title="Where to Stay in Arizona - Hotels, Resorts & Vacation Rentals | Come And See Arizona"
        description="A comprehensive guide to Arizona accommodations including luxury resorts, boutique hotels, vacation rentals, budget-friendly stays, and RV parks across Phoenix, Scottsdale, Sedona, and Tucson."
        canonical="/where-to-stay"
        schema={[webPageSchema, faqSchema]}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Where to Stay', url: '/where-to-stay' },
        ]}
      />

      {/* Hero Section */}
      <div className="explore-hero">
        <div className="explore-hero-bg">
          <img
            src={HERO_IMAGE}
            alt="Luxury Arizona resort pool with desert mountain views at sunset"
            className="card-img"
          />
        </div>
        <div className="explore-hero-overlay" />
        <div className="explore-hero-content">
          <div className="breadcrumb-hero">
            <Link to="/">Home</Link> &nbsp;&gt;&nbsp; Where to Stay
          </div>
          <h1>Where to Stay in Arizona</h1>
          <p className="hero-subtitle">
            From world-class luxury resorts and charming boutique hotels to vacation rentals with
            private pools - find the perfect place to stay in the Grand Canyon State.
          </p>
        </div>
      </div>

      {/* ─── 1. Intro ─── */}
      <div style={{ background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.8, color: '#333' }}>
            Arizona offers one of the most diverse and exciting accommodation landscapes in the
            American West. Whether you are planning a luxurious spa getaway in Scottsdale, a
            nature-focused retreat in Sedona, a budget-friendly family vacation in the Phoenix
            metro area, or a snowbird season in an RV resort near Apache Junction, you will find
            options that match your style, budget, and travel goals. This guide covers every major
            category of Arizona lodging so you can make the most informed choice for your trip.
          </p>
        </div>
      </div>

      {/* ─── 2. Luxury Resorts ─── */}
      <div style={{ background: '#FAFAFA', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading>Luxury Resorts</SectionHeading>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 32, maxWidth: 800 }}>
            Arizona is home to some of the finest resort properties in North America. The Scottsdale
            and Paradise Valley corridor alone contains a concentration of five-star resorts that
            rivals any destination in the country. Here are the standout properties:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 24 }}>
            {LUXURY_RESORTS.map((resort) => (
              <PlaceCard key={resort.name} name={resort.name} location={resort.location} description={resort.description} image={resort.image} />
            ))}
          </div>
        </div>
      </div>

      {/* ─── 3. Boutique Hotels ─── */}
      <div style={{ background: '#fff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading>Boutique Hotels</SectionHeading>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 32, maxWidth: 800 }}>
            Arizona's boutique hotel scene has grown significantly in recent years, offering
            travelers distinctive design, personalized service, and a sense of place that larger
            resorts cannot always replicate.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 24 }}>
            {BOUTIQUE_HOTELS.map((hotel) => (
              <PlaceCard key={hotel.name} name={hotel.name} location={hotel.location} description={hotel.description} image={hotel.image} />
            ))}
          </div>
        </div>
      </div>

      {/* ─── 4. Budget-Friendly Options ─── */}
      <div style={{ background: '#FAFAFA', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading>Budget-Friendly Options</SectionHeading>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 32, maxWidth: 800 }}>
            Arizona offers plenty of affordable accommodation options for travelers watching their
            budget. Knowing where to look can save you hundreds of dollars without sacrificing
            convenience or comfort.
          </p>

          <div style={{ borderLeft: '4px solid #D32F2F', background: '#FFF8F6', padding: '24px 28px', borderRadius: '0 12px 12px 0', marginBottom: 16 }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 600, color: '#1A1A1A', marginBottom: 8 }}>Best Areas for Value Stays</h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.7, color: '#555' }}>
              The Tempe and Mesa corridor consistently offers some of the best hotel values in the
              Phoenix metro area. Both cities are connected by the Valley Metro Light Rail, giving you
              easy access to downtown Phoenix, ASU, and major attractions without the higher price
              tags of Scottsdale. Gilbert and Chandler also offer competitive rates with access to
              excellent dining and family-friendly amenities.
            </p>
          </div>

          <div style={{ borderLeft: '4px solid #D32F2F', background: '#FFF8F6', padding: '24px 28px', borderRadius: '0 12px 12px 0', marginBottom: 16 }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 600, color: '#1A1A1A', marginBottom: 8 }}>Chain Hotel Clusters</h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.7, color: '#555' }}>
              Major hotel chains cluster near the I-17 and I-10 freeway corridors, particularly
              around interchanges with major cross-streets like Dunlap, Camelback, and Baseline. These
              locations offer rates that are often 30-50% lower than comparable properties in
              Scottsdale or downtown Phoenix. Brands like Hampton Inn, Holiday Inn Express, La Quinta,
              and Fairfield Inn maintain a strong presence along these corridors.
            </p>
          </div>

          <div style={{ borderLeft: '4px solid #D32F2F', background: '#FFF8F6', padding: '24px 28px', borderRadius: '0 12px 12px 0', marginBottom: 16 }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 600, color: '#1A1A1A', marginBottom: 8 }}>Short-Term Rentals for Budget Travelers</h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.7, color: '#555' }}>
              Airbnb and VRBO listings in neighborhoods like Tempe, central Mesa, and south Scottsdale
              can offer excellent value, especially for groups or families who can split the cost of a
              multi-bedroom home. Many budget-friendly rentals include private pools, full kitchens,
              and laundry - amenities that help reduce overall trip costs compared to hotel stays.
            </p>
          </div>
        </div>
      </div>

      {/* ─── 5. Where to Stay by Area ─── */}
      <div style={{ background: '#fff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading>Where to Stay by Area</SectionHeading>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 32, maxWidth: 800 }}>
            The right area depends on your priorities. Here is a breakdown of the best places to
            base yourself depending on what you want from your Arizona trip.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: 24 }}>
            {AREA_GUIDES.map((area) => {
              const inner = (
                <div
                  key={area.name}
                  style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', height: 280, cursor: 'pointer' }}
                >
                  <img src={area.image} alt={area.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 60%)' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 24, color: 'white' }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700, marginBottom: 6 }}>{area.name}</h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.5, opacity: 0.92 }}>{area.description}</p>
                  </div>
                </div>
              );
              return area.link ? (
                <Link key={area.name} to={area.link} style={{ textDecoration: 'none' }}>{inner}</Link>
              ) : (
                <div key={area.name}>{inner}</div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── 6. Vacation Rentals ─── */}
      <div style={{ background: '#FAFAFA', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading>Vacation Rentals and Airbnb</SectionHeading>
          <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' as const }}>
            <div style={{ flex: '0 1 380px', minWidth: 280 }}>
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
                alt="Arizona vacation rental with private pool"
                style={{ width: '100%', borderRadius: 16, objectFit: 'cover' }}
                loading="lazy"
              />
            </div>
            <div style={{ flex: '1 1 400px', minWidth: 300 }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 16 }}>
                Short-term vacation rentals have become one of the most popular ways to stay in Arizona,
                especially for families, groups, and extended-stay travelers. The market is robust across
                the Phoenix metro area and beyond.
              </p>

              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 600, color: '#222', marginTop: 24, marginBottom: 8 }}>Popular Areas for Rentals</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 16 }}>
                Scottsdale is the most popular market for vacation rentals in Arizona, particularly in
                the Old Town and south Scottsdale corridors. The Arcadia neighborhood in Phoenix - known
                for its tree-lined streets and proximity to Camelback Mountain - is another top market
                for upscale short-term rentals. Tempe attracts a younger crowd and offers solid rental
                inventory near ASU and Tempe Town Lake.
              </p>

              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 600, color: '#222', marginTop: 24, marginBottom: 8 }}>What to Expect Price-Wise</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 16 }}>
                Vacation rental pricing in Arizona varies significantly by season, location, and
                property type. A three-bedroom home with a pool in south Scottsdale might rent for
                $150-$250 per night in summer and $300-$500 per night during peak season (January
                through April). Larger luxury homes in North Scottsdale or Paradise Valley can command
                $800 to $2,000+ per night during major events like the Super Bowl, WM Phoenix Open, or
                spring training.
              </p>

              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 600, color: '#222', marginTop: 24, marginBottom: 8 }}>Short-Term Rental Regulations</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 16 }}>
                Arizona's SB 1350 law prevents cities from banning short-term rentals, but
                municipalities can regulate noise, parking, occupancy, and nuisance issues. Both
                Phoenix and Scottsdale require hosts to register with the city, maintain a local contact
                person, and collect and remit Transaction Privilege Tax (TPT). Scottsdale has enacted
                some of the stricter enforcement measures in the state, including fines for repeat
                violations and a three-strikes policy for problem properties.
              </p>

              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 600, color: '#222', marginTop: 24, marginBottom: 8 }}>Benefits of Renting a House with a Private Pool</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 16 }}>
                A private pool is one of the top reasons travelers choose a vacation rental over a hotel
                in Arizona. From April through October, daily highs regularly exceed 100°F, and having a
                pool steps from your door is a game-changer - especially for families with kids. Many
                rental homes also feature heated pools for comfortable swimming during the cooler winter
                months. Additional perks often include outdoor kitchens, fire pits, and covered patios
                that let you enjoy Arizona's year-round outdoor lifestyle.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ─── 7. RV Parks and Camping ─── */}
      <div style={{ background: '#fff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading>RV Parks and Camping</SectionHeading>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 32, maxWidth: 800 }}>
            Arizona is one of the most popular RV and camping destinations in the country, drawing
            snowbirds, road trippers, and outdoor enthusiasts year-round. The state offers
            everything from full-service RV resorts with resort-style amenities to primitive
            backcountry camping in national forests.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 24 }}>
            {RV_CAMPING.map((spot) => (
              <PlaceCard key={spot.name} name={spot.name} location={spot.location} description={spot.description} image={spot.image} />
            ))}
          </div>
        </div>
      </div>

      {/* ─── 8. Venture REI ─── */}
      <div style={{ background: '#FAF5F0', padding: '64px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 700, color: '#1A1A1A', marginBottom: 16 }}>
            From Vacation to Home - {siteConfig.brokerageName}
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444' }}>
            Many visitors who fall in love with Arizona's lifestyle choose to make it permanent.{' '}
            {siteConfig.brokerageName} helps clients transition from vacation to homeownership,
            with expertise across every Valley community. {siteConfig.leaderName}, with{' '}
            {siteConfig.leaderCredential}, has helped thousands of relocating buyers find the
            perfect Arizona community.
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

      {/* ─── 9. FAQ ─── */}
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
