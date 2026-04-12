import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import { siteConfig } from '../data/siteConfig';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80&auto=format';

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Arizona Travel Guides - Plan Your Perfect Trip',
  description:
    'Comprehensive Arizona travel planning guide with tips on getting here, getting around, when to visit, what to pack, sample itineraries, budget tips, and seasonal highlights.',
  url: 'https://comeandseearizona.com/travel-guides',
  publisher: {
    '@type': 'Organization',
    name: 'Come And See Arizona',
    url: 'https://comeandseearizona.com',
  },
};

const FAQS = [
  {
    question: 'What is the best time of year to visit Arizona?',
    answer:
      'October through April is the most popular time to visit Arizona, with comfortable temperatures in the 60s to 80s across the Phoenix metro area. Spring (March-April) is especially popular for spring training baseball and wildflower blooms. Summer brings extreme heat to the desert but is ideal for visiting northern Arizona destinations like Flagstaff and the Grand Canyon.',
  },
  {
    question: 'Do I need a rental car in Arizona?',
    answer:
      'Yes, a rental car is strongly recommended for visiting Arizona. The Phoenix metro area spans over 50 miles and public transportation options are limited compared to other major cities. While the Valley Metro light rail connects some key areas, most attractions, trailheads, and neighborhoods require a car to reach conveniently.',
  },
  {
    question: 'How far is the Grand Canyon from Phoenix?',
    answer:
      'The Grand Canyon South Rim is approximately 230 miles north of Phoenix, which takes about 3.5 hours to drive each way via I-17 North and Highway 64. It is possible as a day trip, but spending at least one night near the canyon allows you to experience sunrise or sunset views without the pressure of a long return drive.',
  },
  {
    question: 'What should I pack for an Arizona trip?',
    answer:
      'Always bring sunscreen (SPF 50+), a wide-brimmed hat, quality sunglasses, and a reusable water bottle. Even in winter, the desert sun is intense. If you plan to hike, bring proper footwear with good grip and plan for at least 1 liter of water per hour on the trail. Layering is important year-round because temperatures can drop 30 degrees between day and evening.',
  },
  {
    question: 'Is Arizona safe to visit in the summer?',
    answer:
      'Arizona is safe to visit in summer if you take precautions against the heat. Phoenix regularly exceeds 110 degrees Fahrenheit in June through August. Stay hydrated, avoid outdoor activities during peak heat (10am-4pm), and never leave children or pets in parked cars. Northern Arizona destinations like Flagstaff, Sedona, and Prescott offer significantly cooler temperatures in the 80s and 90s.',
  },
  {
    question: 'How much does an Arizona vacation cost?',
    answer:
      'Arizona vacations can fit a range of budgets. Budget travelers can find hotels for $80-150 per night, casual meals for $10-15, and enjoy many free hiking trails. Mid-range travelers typically spend $200-400 per night on hotels and $25-50 per meal. Luxury resort stays run $400 or more per night. Summer rates are 40-60% lower than peak season, making it a great time for budget-conscious visitors.',
  },
  {
    question: 'What are the must-see attractions in Arizona?',
    answer:
      'The top must-see attractions include the Grand Canyon (one of the Seven Natural Wonders of the World), Sedona red rock formations, Monument Valley, Saguaro National Park, Antelope Canyon, and the Sonoran Desert landscape around Phoenix. Within the Phoenix metro, popular spots include Camelback Mountain, Desert Botanical Garden, Old Town Scottsdale, and the Heard Museum.',
  },
  {
    question: 'Can I fly into Arizona or should I drive?',
    answer:
      'Phoenix Sky Harbor International Airport (PHX) is a major hub served by all major airlines and offers convenient access to the Phoenix metro area. Tucson International Airport (TUS) serves southern Arizona. If you prefer to drive, Phoenix is approximately 5 hours from Los Angeles, 4.5 hours from Las Vegas, 5.5 hours from San Diego, and 6.5 hours from Albuquerque. Amtrak also serves Flagstaff and Tucson.',
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

const SEASONS = [
  { name: 'Oct - Nov', label: 'Perfect Weather', temp: '75-85°F', vibe: 'Ideal hiking and golf. Sweet spot of pleasant weather and manageable crowds. Hotel rates begin to climb but remain below peak.', color: '#E65100' },
  { name: 'Dec - Feb', label: 'Mild Winter', temp: '60-70°F', vibe: 'Snowbird season. Mild sunny days, cool nights in the 40s. Peak hotel rates. Holiday events, bowl games, Phoenix Open.', color: '#1565C0' },
  { name: 'Mar - Apr', label: 'Spring Training', temp: '75-90°F', vibe: 'Busiest and most festive. 15 MLB teams at Cactus League. Desert wildflowers bloom. Nearly perfect weather.', color: '#2E7D32' },
  { name: 'May', label: 'Shoulder Month', temp: '95-105°F', vibe: 'Getting hot but manageable. Significant hotel deals as peak season winds down. Great for pool days.', color: '#F9A825' },
  { name: 'Jun - Aug', label: 'Summer Heat', temp: '105-115°F', vibe: 'Extreme heat, lowest prices (40-60% off). Plan outdoors before 9am. Escape north to Flagstaff or Prescott.', color: '#C62828' },
  { name: 'Sep', label: 'Monsoon Tail', temp: '100-108°F', vibe: 'Dramatic afternoon thunderstorms. Still hot but improving. One of the most affordable times to visit.', color: '#6A1B9A' },
];

const ITINERARIES = [
  { title: "3 Days of Natural Wonders", description: "Grand Canyon, Sedona red rocks, and Monument Valley on an unforgettable journey.", image: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=800&q=80", link: "/itineraries/natural-wonders" },
  { title: "3 Days of Arts and Culture", description: "Phoenix museums, Scottsdale galleries, and Native American heritage sites.", image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=800&q=80", link: "/itineraries/arts-and-culture" },
  { title: "3 Days of Arizona Dining", description: "Tucson's UNESCO gastronomy and Phoenix's vibrant food scene.", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80", link: "/itineraries/arizona-dining" },
  { title: "3 Days of Golf Paradise", description: "Tee off at world-renowned Scottsdale courses with desert backdrops.", image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80", link: "/itineraries/golf-paradise" },
];

const AREA_GUIDES = [
  { name: "Old Town Scottsdale", blurb: "Walkable dining, nightlife, galleries, and boutique shopping. Highest concentration of restaurants and bars in the Valley.", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80", link: "/explore/city/scottsdale" },
  { name: "Downtown Phoenix", blurb: "Arts, sports, conventions. Chase Field, Footprint Center, Roosevelt Row. Light rail access to Tempe and Mesa.", image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80", link: "/explore/neighborhood/downtown-phoenix" },
  { name: "Tempe", blurb: "Budget-friendly and lively. ASU, Mill Avenue, Tempe Town Lake. On the light rail line with walkable dining.", image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80", link: "/explore/city/tempe" },
  { name: "North Scottsdale", blurb: "Luxury resorts and world-class golf. Quiet, exclusive, near McDowell Sonoran Preserve and Troon North.", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", link: "/explore/neighborhood/north-scottsdale" },
  { name: "Chandler & Gilbert", blurb: "Family-friendly suburbs with great restaurants, safe neighborhoods, and lower rates than Scottsdale.", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80", link: "/explore/city/chandler" },
];

const PACKING = [
  { season: 'Always', items: 'Sunscreen SPF 50+, wide-brimmed hat, UV sunglasses, reusable water bottle. Desert air dehydrates faster than you expect.', icon: '☀' },
  { season: 'Winter (Nov-Feb)', items: 'Layers including light jacket or fleece. Evenings drop 30°F. Northern AZ may see snow.', icon: '🧥' },
  { season: 'Spring & Fall', items: 'Shorts and t-shirts by day, light layer for evening. Comfortable walking shoes for exploring.', icon: '👟' },
  { season: 'Summer', items: 'Lightweight breathable fabrics in light colors. Extra water, portable charger (heat drains batteries).', icon: '💧' },
  { season: 'For Hiking', items: 'Grip shoes (not running shoes). 1 liter water per hour minimum. Salty snacks, trekking poles for steep trails.', icon: '🥾' },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 700, color: '#1A1A1A', marginBottom: 12 }}>{children}</h2>
      <div style={{ width: 40, height: 3, background: '#D32F2F' }} />
    </div>
  );
}

const body: React.CSSProperties = { fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444' };
const wrap: React.CSSProperties = { maxWidth: 1200, margin: '0 auto', padding: '0 24px' };

export default function TravelGuidesPage() {
  return (
    <>
      <SEOHead
        title="Arizona Travel Guides - Plan Your Perfect Trip | Come And See Arizona"
        description="Comprehensive Arizona travel planning guide with tips on getting here, getting around, when to visit, what to pack, sample itineraries, budget tips, and seasonal highlights."
        canonical="/travel-guides"
        schema={[webPageSchema, faqSchema]}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Travel Guides', url: '/travel-guides' },
        ]}
      />

      {/* Hero */}
      <div className="explore-hero">
        <div className="explore-hero-bg">
          <img src={HERO_IMAGE} alt="Scenic Arizona highway stretching through the desert toward red rock formations" className="card-img" />
        </div>
        <div className="explore-hero-overlay" />
        <div className="explore-hero-content">
          <div className="breadcrumb-hero"><Link to="/">Home</Link> &nbsp;&gt;&nbsp; Travel Guides</div>
          <h1>Arizona Travel Guides</h1>
          <p className="hero-subtitle">Everything you need to plan your perfect Arizona trip.</p>
        </div>
      </div>

      {/* Intro */}
      <div style={{ background: '#fff', padding: '48px 24px' }}>
        <p style={{ ...body, maxWidth: 900, margin: '0 auto', fontSize: 18, color: '#333' }}>
          Whether you are planning your first Arizona adventure or a return trip to explore a new corner of the state, this guide covers everything from airport logistics and driving distances to month-by-month weather breakdowns, packing lists, and budget tips. Arizona rewards travelers who plan ahead - the right timing, the right base, and the right gear can make the difference between a good trip and an unforgettable one.
        </p>
      </div>

      {/* Getting Here */}
      <div style={{ background: '#FAFAFA', padding: '64px 24px' }}>
        <div style={wrap}>
          <SectionHeading>Getting Here</SectionHeading>
          <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' as const }}>
            <div style={{ flex: '1 1 400px', minWidth: 300 }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 600, color: '#222', marginBottom: 8 }}>Phoenix Sky Harbor (PHX)</h3>
              <p style={{ ...body, marginBottom: 16 }}>The primary gateway to Arizona and one of the busiest airports in the country. Three terminals - Terminal 4 handles the majority of flights. All major airlines serve PHX. The free PHX Sky Train connects terminals to the Rental Car Center in about five minutes.</p>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 600, color: '#222', marginBottom: 8, marginTop: 24 }}>Tucson International (TUS)</h3>
              <p style={{ ...body, marginBottom: 16 }}>Smaller and less crowded, with direct flights from major hubs. Easy access to Tucson, Saguaro National Park, Tombstone, and Bisbee.</p>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 600, color: '#222', marginBottom: 8, marginTop: 24 }}>By Train</h3>
              <p style={{ ...body }}>Amtrak's Southwest Chief stops in Flagstaff (Chicago to LA), and the Sunset Limited passes through Tucson (New Orleans to LA).</p>
            </div>
            <div style={{ flex: '0 1 420px', minWidth: 280 }}>
              <img src="https://images.unsplash.com/photo-1436491865332-7a61a109db05?auto=format&fit=crop&w=800&q=80" alt="Aerial view of Phoenix Sky Harbor airport" style={{ width: '100%', borderRadius: 16, marginBottom: 24 }} loading="lazy" />
              <div style={{ background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: 16, fontWeight: 700, marginBottom: 12, color: '#1A1A1A' }}>Driving Distances to Phoenix</h4>
                {[['Los Angeles', '5 hours', 'I-10'], ['Las Vegas', '4.5 hours', 'US-93'], ['San Diego', '5.5 hours', 'I-8'], ['Albuquerque', '6.5 hours', 'I-40']].map(([city, time, route]) => (
                  <div key={city} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f0f0f0', fontFamily: 'var(--font-body)', fontSize: 14 }}>
                    <span style={{ color: '#333', fontWeight: 500 }}>{city}</span>
                    <span style={{ color: '#888' }}>{time} via {route}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Getting Around */}
      <div style={{ background: '#fff', padding: '64px 24px' }}>
        <div style={wrap}>
          <SectionHeading>Getting Around</SectionHeading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {[
              { title: 'Rental Car', text: 'Essential for Arizona. The metro spans 50+ miles. Book ahead during peak season (Jan-Apr). Consider an SUV for Sedona or Monument Valley unpaved roads.', accent: '#D32F2F' },
              { title: 'Valley Metro Light Rail', text: '28 miles from north Phoenix through downtown and Tempe to east Mesa. Connects arts district, ASU, and Tempe Marketplace. Does not reach Scottsdale.', accent: '#1565C0' },
              { title: 'Rideshare & Taxis', text: 'Uber and Lyft widely available. Great for nights out and airport transfers. Short wait times in urban areas, longer in suburban locations.', accent: '#2E7D32' },
              { title: 'Parking Tips', text: 'Downtown garages $5-15/day. Old Town Scottsdale has metered + garage parking. Popular trailheads: arrive before 7am on weekends during peak season.', accent: '#E65100' },
            ].map(item => (
              <div key={item.title} style={{ borderLeft: `4px solid ${item.accent}`, background: '#FAFAFA', padding: '24px 24px', borderRadius: '0 12px 12px 0' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 600, color: '#1A1A1A', marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: '#555' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* When to Visit */}
      <div style={{ background: '#FAFAFA', padding: '64px 24px' }}>
        <div style={wrap}>
          <SectionHeading>When to Visit</SectionHeading>
          <p style={{ ...body, marginBottom: 32, maxWidth: 700 }}>Arizona's weather varies dramatically by season. Timing your visit right can save you money and ensure the best experience.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
            {SEASONS.map(s => (
              <div key={s.name} style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                <div style={{ background: s.color, padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700, color: '#fff' }}>{s.name}</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>{s.temp}</span>
                </div>
                <div style={{ padding: '20px 24px' }}>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 700, color: s.color, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>{s.label}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: '#555' }}>{s.vibe}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What to Pack */}
      <div style={{ background: '#fff', padding: '64px 24px' }}>
        <div style={wrap}>
          <SectionHeading>What to Pack</SectionHeading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: 16 }}>
            {PACKING.map(p => (
              <div key={p.season} style={{ display: 'flex', gap: 16, background: '#FFF8F6', borderLeft: '4px solid #D32F2F', padding: '20px 24px', borderRadius: '0 12px 12px 0' }}>
                <span style={{ fontSize: 28, flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 16, fontWeight: 700, color: '#1A1A1A', marginBottom: 4 }}>{p.season}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: '#555' }}>{p.items}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sample Itineraries */}
      <div style={{ background: '#FAFAFA', padding: '64px 24px' }}>
        <div style={wrap}>
          <SectionHeading>Sample Itineraries</SectionHeading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 24 }}>
            {ITINERARIES.map(it => (
              <Link to={it.link} key={it.title} style={{ textDecoration: 'none', borderRadius: 16, overflow: 'hidden', background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', transition: 'all 0.2s', display: 'block' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ aspectRatio: '16/10', overflow: 'hidden' }}>
                  <img src={it.image} alt={it.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                </div>
                <div style={{ padding: 20 }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 600, color: '#1A1A1A', marginBottom: 8 }}>{it.title}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#555', lineHeight: 1.6 }}>{it.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Where to Base Yourself */}
      <div style={{ background: '#fff', padding: '64px 24px' }}>
        <div style={wrap}>
          <SectionHeading>Where to Base Yourself</SectionHeading>
          <p style={{ ...body, marginBottom: 32 }}>
            The right neighborhood can make or break your trip. Visit our <Link to="/explore" style={{ color: '#D32F2F', fontWeight: 600 }}>Explore Arizona</Link> page for deeper community guides.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: 20 }}>
            {AREA_GUIDES.map(a => (
              <Link to={a.link} key={a.name} style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', height: 260, display: 'block', textDecoration: 'none', transition: 'transform 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
              >
                <img src={a.image} alt={a.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 60%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 24 }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 6 }}>{a.name}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.9)', lineHeight: 1.5 }}>{a.blurb}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Budget Guide */}
      <div style={{ background: '#FAFAFA', padding: '64px 24px' }}>
        <div style={wrap}>
          <SectionHeading>Budget Guide</SectionHeading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: 20, marginBottom: 32 }}>
            {[
              { title: 'Accommodations', ranges: [['Budget', '$80-150/night'], ['Mid-Range', '$200-400/night'], ['Luxury', '$400+/night']], tip: 'Summer rates are 40-60% lower across all categories.' },
              { title: 'Dining', ranges: [['Casual', '$10-15/person'], ['Mid-Range', '$25-50/person'], ['Fine Dining', '$75-150/person']], tip: 'Happy hours (4-6pm) offer big discounts on drinks and appetizers.' },
              { title: 'Transportation', ranges: [['Rental Car', '$40-80/day'], ['Museums', '$15-25/person'], ['Tours', '$50-150/person']], tip: 'Many of Arizona\'s best hikes and scenic drives are completely free.' },
            ].map(cat => (
              <div key={cat.title} style={{ background: '#fff', borderRadius: 16, padding: 28, boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 700, color: '#1A1A1A', marginBottom: 16 }}>{cat.title}</h3>
                {cat.ranges.map(([label, price]) => (
                  <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #f0f0f0' }}>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: '#333' }}>{label}</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600, color: '#D32F2F' }}>{price}</span>
                  </div>
                ))}
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#888', marginTop: 12, fontStyle: 'italic' }}>{cat.tip}</p>
              </div>
            ))}
          </div>
          <div style={{ borderLeft: '4px solid #D32F2F', background: '#FFF8F6', padding: '24px 28px', borderRadius: '0 12px 12px 0' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 600, color: '#1A1A1A', marginBottom: 8 }}>Money-Saving Tips</h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7, color: '#555' }}>
              Visit May-September for lowest hotel rates. Take advantage of happy hour specials (4-6pm). Use hotel pools for free entertainment. Attend free First Friday art walks in downtown Phoenix. Many museums offer free or discounted admission days throughout the month.
            </p>
          </div>
        </div>
      </div>

      {/* Seasonal Highlights */}
      <div style={{ background: '#fff', padding: '64px 24px' }}>
        <div style={wrap}>
          <SectionHeading>Seasonal Highlights</SectionHeading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))', gap: 24 }}>
            {[
              { season: 'Spring', image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80', text: 'Cactus League spring training brings 15 MLB teams to the Valley. Desert wildflowers bloom March through April. The best time for hiking with comfortable temperatures and long daylight hours.' },
              { season: 'Summer', image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80', text: 'Escape north to Flagstaff, Prescott, and Payson for cool mountain relief. Six Flags Hurricane Harbor and Golfland Sunsplash beat the heat. Monsoon thunderstorms from July through September offer incredible photography.' },
              { season: 'Fall', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80', text: 'Ideal weather returns in October with temperatures in the 70s and 80s. Arguably the best hiking of the year. Arizona State Fair, college football, and NFL Cardinals season bring energy.' },
              { season: 'Winter', image: 'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?auto=format&fit=crop&w=800&q=80', text: 'Paradise for those escaping cold weather. ZooLights, Las Noches de las Luminarias at Desert Botanical Garden, ice skating at CityScape. 300+ golf courses in prime condition.' },
            ].map(s => (
              <div key={s.season} style={{ background: '#FAFAFA', borderRadius: 16, overflow: 'hidden' }}>
                <div style={{ height: 180 }}>
                  <img src={s.image} alt={`${s.season} in Arizona`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                </div>
                <div style={{ padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700, color: '#1A1A1A', marginBottom: 8 }}>{s.season}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7, color: '#555' }}>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Families + Couples - two-column */}
      <div style={{ background: '#FAFAFA', padding: '64px 24px' }}>
        <div style={wrap}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))', gap: 32 }}>
            {/* Families */}
            <div style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
              <img src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80" alt="Family at Arizona resort pool" style={{ width: '100%', height: 200, objectFit: 'cover' }} loading="lazy" />
              <div style={{ padding: 28 }}>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 700, color: '#1A1A1A', marginBottom: 12 }}>Arizona for Families</h2>
                <p style={{ ...body, fontSize: 14, marginBottom: 12 }}>Arizona is an outstanding family destination. Arizona Grand Resort features Oasis Water Park with wave pool, lazy river, and slides. JW Marriott Desert Ridge offers kids' programs near OdySea Aquarium.</p>
                <p style={{ ...body, fontSize: 14, marginBottom: 16 }}>Stroller-friendly: Desert Botanical Garden, Phoenix Zoo, and OdySea Aquarium (indoor, climate-controlled - perfect for summer).</p>
                <Link to="/things-to-do" style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: '#D32F2F', textDecoration: 'none' }}>Explore Things to Do →</Link>
              </div>
            </div>
            {/* Couples */}
            <div style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
              <img src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80" alt="Romantic sunset dinner in Arizona" style={{ width: '100%', height: 200, objectFit: 'cover' }} loading="lazy" />
              <div style={{ padding: 28 }}>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 700, color: '#1A1A1A', marginBottom: 12 }}>Arizona for Couples</h2>
                <p style={{ ...body, fontSize: 14, marginBottom: 12 }}>Sedona spa weekends at Enchantment Resort and L'Auberge de Sedona. Scottsdale resort stays at The Phoenician and Mountain Shadows. Sunset dinner at Elements at Sanctuary.</p>
                <p style={{ ...body, fontSize: 14, marginBottom: 16 }}>Verde Valley wine country for a day of tasting. Sunrise hot air balloon rides over the Sonoran Desert with champagne toast and breakfast.</p>
                <Link to="/where-to-stay" style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: '#D32F2F', textDecoration: 'none' }}>Where to Stay →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Venture REI */}
      <div style={{ background: '#FAF5F0', padding: '64px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 700, color: '#1A1A1A', marginBottom: 16 }}>Planning to Visit Arizona?</h2>
          <p style={{ ...body, marginBottom: 24 }}>
            Many of our clients started as visitors before deciding to call the Valley home. {siteConfig.brokerageName} specializes in helping relocating buyers find the perfect community, from family-friendly Gilbert to luxury Scottsdale to up-and-coming Buckeye. {siteConfig.leaderName}, with {siteConfig.leaderCredential}, understands every neighborhood in the Valley.
          </p>
          <Link to="/explore" style={{ display: 'inline-block', background: '#D32F2F', color: '#fff', padding: '14px 32px', borderRadius: 28, fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>
            Explore Arizona Communities
          </Link>
        </div>
      </div>

      {/* FAQ */}
      <div style={{ background: '#FAFAFA', padding: '64px 24px' }}>
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
