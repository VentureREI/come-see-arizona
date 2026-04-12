import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import { siteConfig } from '../data/siteConfig';

/* ───────────────────────── helpers ───────────────────────── */

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 700, color: '#1A1A1A', marginBottom: 12 }}>{children}</h2>
      <div style={{ width: 40, height: 3, background: '#D32F2F' }} />
    </div>
  );
}

/* ───────────────────────── data ───────────────────────── */

const VISITOR_CENTERS = [
  {
    name: 'Arizona Office of Tourism Visitor Center',
    address: '118 N 7th Ave, Phoenix, AZ 85007',
    hours: 'Open daily 8am-5pm',
    phone: '(602) 364-3700',
    description: 'The state\'s official visitor center in downtown Phoenix offers maps, brochures, and expert advice on attractions statewide. Staff can help plan road trips, recommend hidden gems, and provide seasonal event calendars.',
  },
  {
    name: 'Scottsdale Visitor Center',
    address: '4343 N Scottsdale Rd, Suite 170, Scottsdale, AZ 85251',
    hours: 'Open daily 9am-5pm',
    phone: '(480) 421-1004',
    description: 'Located in the Galleria Corporate Centre near Old Town, this center specializes in Scottsdale dining, art walks, golf, and spa experiences. Pick up the Official Scottsdale Visitors Guide and seasonal event listings.',
  },
  {
    name: 'Sedona Visitor Center',
    address: '331 Forest Rd, Sedona, AZ 86336',
    hours: 'Open daily 8:30am-5pm',
    phone: '(928) 282-7722',
    description: 'Perched at the gateway to Red Rock Country, this center provides trail maps, vortex information, and Red Rock Pass details. Rangers and volunteers can recommend hikes based on your fitness level and time.',
  },
  {
    name: 'Tucson Visitor Center',
    address: '811 N Euclid Ave, Tucson, AZ 85719',
    hours: 'Open daily 9am-5pm',
    phone: '(520) 624-1817',
    description: 'Situated near the University of Arizona campus, this center covers Tucson and Southern Arizona attractions. Get information on Saguaro National Park, the Arizona-Sonora Desert Museum, and Tucson\'s UNESCO-designated gastronomy scene.',
  },
  {
    name: 'Flagstaff Visitor Center',
    address: '1 E Route 66, Flagstaff, AZ 86001',
    hours: 'Open daily 8am-5pm',
    phone: '(928) 774-9541',
    description: 'Housed in the historic 1926 Amtrak station on Route 66, this center is the gateway to Northern Arizona. Staff provide guides to Grand Canyon day trips, Walnut Canyon, Sunset Crater, and winter skiing at Arizona Snowbowl.',
  },
  {
    name: 'Grand Canyon Visitor Center (South Rim)',
    address: 'South Entrance Rd, Grand Canyon Village, AZ 86023',
    hours: 'Open daily 8am-5pm',
    phone: '(928) 638-7888',
    description: 'The primary orientation point for South Rim visitors, located near Mather Point. View the 20-minute park film, browse the bookstore, and get advice on trails, shuttles, and ranger-led programs.',
  },
  {
    name: 'Mesa Convention & Visitors Bureau',
    address: '120 N Center St, Mesa, AZ 85201',
    hours: 'Open Monday-Friday 8am-5pm',
    phone: '(480) 827-4700',
    description: 'Covers Mesa and the East Valley region including spring training venues, Usery Mountain Regional Park, and the Apache Trail. Great resource for families seeking kid-friendly attractions and cultural experiences.',
  },
];

const PHONE_RESOURCES = [
  { title: 'Emergency Services', info: '911', detail: 'Police, fire, and medical emergencies anywhere in Arizona.' },
  { title: 'Arizona Road Conditions', info: '511 or az511.gov', detail: 'Real-time highway conditions, closures, construction updates, and weather alerts.' },
  { title: 'Poison Control', info: '1-800-222-1222', detail: 'Available 24/7 for poisoning emergencies including snake bites and scorpion stings.' },
  { title: 'Grand Canyon National Park', info: '(928) 638-7888', detail: 'Park information, permit inquiries, and emergency assistance.' },
  { title: 'Arizona Game & Fish Department', info: '(602) 942-3000', detail: 'Wildlife encounters, fishing licenses, and hunting regulations.' },
  { title: 'Maricopa County Heat Relief', info: '(602) 506-6616', detail: 'Heat relief stations, hydration locations, and cooling centers during extreme heat events.' },
  { title: 'Arizona Office of Tourism', info: 'tourism.az.gov', detail: 'Official state tourism website with trip planning resources, itineraries, and event calendars.' },
];

const FAST_FACTS = [
  { value: 'Phoenix', label: 'Capital' },
  { value: '7.4M', label: 'Population' },
  { value: 'MST (No DST)', label: 'Time Zone' },
  { value: '113,990 sq mi', label: 'Area' },
  { value: '12,633 ft', label: 'Highest Point (Humphreys Peak)' },
  { value: 'Feb 14, 1912', label: 'Statehood' },
  { value: 'Saguaro Cactus Blossom', label: 'State Flower' },
  { value: '7-9%', label: 'Sales Tax' },
  { value: 'The Grand Canyon State', label: 'Nickname' },
];

const CLIMATE_ZONES = [
  {
    zone: 'Low Desert',
    locations: 'Phoenix, Tucson',
    range: '65-115\u00B0F',
    color: '#E65100',
    description: 'Hot summers with mild, sunny winters. Summer highs regularly exceed 110\u00B0F from June through September. Winter days average a pleasant 65-75\u00B0F with cool evenings. The most popular visitor season runs October through April.',
  },
  {
    zone: 'High Desert',
    locations: 'Sedona, Prescott',
    range: '50-100\u00B0F',
    color: '#F9A825',
    description: 'Moderate four-season climate with warm summers and cooler winters. Expect occasional snow in Prescott. Spring and fall are ideal for hiking with comfortable daytime temperatures in the 70s and 80s.',
  },
  {
    zone: 'Mountain',
    locations: 'Flagstaff',
    range: '25-80\u00B0F',
    color: '#1565C0',
    description: 'Cool mountain climate with true four seasons. Winter brings regular snowfall and skiing. Summer highs rarely exceed 80\u00B0F, making it a popular escape from desert heat. Fall foliage is spectacular in late September and October.',
  },
];

const FAQS = [
  {
    question: 'What time zone is Arizona in?',
    answer: 'Arizona is in the Mountain Standard Time (MST) zone, which is UTC-7. Unlike most states, Arizona does not change its clocks for daylight saving time, so the time remains constant year-round. The one exception is the Navajo Nation, which does observe DST.',
  },
  {
    question: 'Does Arizona observe daylight saving time?',
    answer: 'No. Arizona is one of only two states (along with Hawaii) that does not observe daylight saving time. This means Arizona is on the same time as Pacific Daylight Time in summer and Mountain Standard Time in winter. The Navajo Nation is the only part of the state that follows DST.',
  },
  {
    question: 'When is the best time to visit Arizona?',
    answer: 'The best time depends on where you are going. For the Phoenix and Tucson areas, October through April offers the most comfortable weather with daytime highs in the 60s to 80s. For Northern Arizona, Sedona, and the Grand Canyon, late spring (April-May) and early fall (September-October) are ideal. Summer is perfect for Flagstaff and the mountain regions.',
  },
  {
    question: 'Is it safe to hike in Arizona in summer?',
    answer: 'Hiking in Arizona\'s low desert during summer months (June-September) can be extremely dangerous due to temperatures exceeding 110\u00B0F. If you must hike in summer, start before sunrise, carry at least one liter of water per hour, and choose shaded canyon trails. Mountain and high desert areas like Flagstaff and Prescott remain comfortable for summer hiking.',
  },
  {
    question: 'Do I need a car in Arizona?',
    answer: 'Yes, a car is highly recommended for visiting Arizona. Public transit is limited outside of central Phoenix and Tempe. Most scenic attractions, national parks, and trailheads require a vehicle. Ride-share services are available in the metro area, but renting a car gives you the most flexibility for exploring the state.',
  },
  {
    question: 'What is the sales tax in Arizona?',
    answer: 'Arizona\'s combined sales tax rate ranges from approximately 7% to 9% depending on the city and county. The state base rate is 5.6%, with additional local taxes varying by jurisdiction. Scottsdale, Phoenix, and Tucson each have slightly different total rates. There is no sales tax on groceries in Arizona.',
  },
];

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Arizona Visitor Information',
  description:
    'Essential visitor information for Arizona travelers including visitor centers, emergency contacts, weather, safety tips, accessibility, and frequently asked questions.',
  url: `${siteConfig.siteUrl}/tourist-info`,
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

/* ───────────────────────── component ───────────────────────── */

export default function TouristInfoPage() {
  return (
    <>
      <SEOHead
        title="Arizona Visitor Information | Come And See Arizona"
        description="Essential visitor information for Arizona travelers including visitor centers, emergency contacts, weather and climate guides, safety tips, and answers to the most common questions about visiting the Grand Canyon State."
        canonical="/tourist-info"
        schema={[webPageSchema, faqSchema]}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Tourist Info', url: '/tourist-info' },
        ]}
      />

      {/* ─── Hero ─── */}
      <div className="explore-hero">
        <div className="explore-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1577643816920-65b43ba99fba?w=1920&q=80&auto=format"
            alt="Phoenix skyline at sunset"
            className="card-img"
          />
        </div>
        <div className="explore-hero-overlay" />
        <div className="explore-hero-content">
          <div className="breadcrumb-hero">
            <Link to="/">Home</Link> &nbsp;&gt;&nbsp; Tourist Info
          </div>
          <h1>Arizona Visitor Information</h1>
          <p className="hero-subtitle">
            Everything you need to know before and during your visit to the Grand Canyon State
          </p>
        </div>
      </div>

      {/* ─── 1. Visitor Centers ─── */}
      <div style={{ background: '#FAFAFA', padding: '48px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <SectionHeading>Visitor Centers</SectionHeading>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 32, maxWidth: 900 }}>
            Arizona&apos;s visitor centers are staffed by knowledgeable locals who can help you make the most of your trip. Stop in for free maps, trail guides, event calendars, and personalized recommendations.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 24 }}>
            {VISITOR_CENTERS.map((center) => (
              <div
                key={center.name}
                style={{
                  background: '#fff',
                  borderRadius: 16,
                  boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                  padding: 24,
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700, color: '#1A1A1A', marginBottom: 12 }}>
                  {center.name}
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#666', marginBottom: 6 }}>
                  {center.address}
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#666', marginBottom: 6 }}>
                  {center.hours}
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: '#D32F2F', marginBottom: 12 }}>
                  {center.phone}
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7, color: '#555' }}>
                  {center.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── 2. Essential Phone Numbers ─── */}
      <div style={{ background: '#fff', padding: '48px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          <SectionHeading>Essential Phone Numbers</SectionHeading>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 32 }}>
            Save these numbers before your trip. In an emergency, always dial 911 first.
          </p>
          {PHONE_RESOURCES.map((resource) => (
            <div
              key={resource.title}
              style={{
                borderLeft: '4px solid #D32F2F',
                background: '#FFF8F6',
                padding: '24px 28px',
                borderRadius: '0 12px 12px 0',
                marginBottom: 16,
              }}
            >
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: 16, fontWeight: 700, color: '#1A1A1A', marginBottom: 4 }}>
                {resource.title}
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 18, fontWeight: 700, color: '#D32F2F', marginBottom: 8 }}>
                {resource.info}
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: '#555', margin: 0 }}>
                {resource.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── 3. Arizona Fast Facts ─── */}
      <div style={{ background: '#FAFAFA', padding: '48px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <SectionHeading>Arizona Fast Facts</SectionHeading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 24 }}>
            {FAST_FACTS.map((fact) => (
              <div
                key={fact.label}
                style={{
                  background: '#fff',
                  borderRadius: 12,
                  padding: 20,
                  textAlign: 'center',
                }}
              >
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 700, color: '#D32F2F', marginBottom: 8 }}>
                  {fact.value}
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {fact.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── 4. Weather and Climate ─── */}
      <div style={{ background: '#fff', padding: '48px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <SectionHeading>Weather and Climate</SectionHeading>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 32, maxWidth: 900 }}>
            Arizona spans multiple climate zones, from scorching low desert to snowy mountain peaks. Understanding the climate of your destination is essential for packing, planning activities, and staying safe.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 24, marginBottom: 32 }}>
            {CLIMATE_ZONES.map((zone) => (
              <div
                key={zone.zone}
                style={{
                  background: '#fff',
                  borderRadius: 16,
                  boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                  overflow: 'hidden',
                }}
              >
                <div style={{ background: zone.color, padding: '16px 24px' }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700, color: '#fff', margin: 0 }}>
                    {zone.zone}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.9)', margin: '4px 0 0' }}>
                    {zone.locations}
                  </p>
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700, color: zone.color, marginBottom: 12 }}>
                    {zone.range}
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7, color: '#555', margin: 0 }}>
                    {zone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ maxWidth: 900 }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444' }}>
              <strong>Monsoon Season (June-September):</strong> Arizona experiences a dramatic monsoon season with intense afternoon thunderstorms, dust storms (haboobs), and flash flooding. Storms can develop rapidly and bring dangerous lightning, hail, and sudden temperature drops. Never drive through flooded roads - Arizona&apos;s &quot;Stupid Motorist Law&quot; holds drivers liable for rescue costs if they enter a barricaded flooded crossing.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444', marginTop: 16 }}>
              <strong>UV Exposure:</strong> Arizona&apos;s high elevation and clear skies mean intense UV radiation year-round. Wear SPF 30+ sunscreen, a wide-brimmed hat, and UV-protective sunglasses even on cloudy days. Reapply sunscreen every two hours, especially when hiking or swimming. The UV index regularly reaches &quot;Very High&quot; or &quot;Extreme&quot; levels from March through October.
            </p>
          </div>
        </div>
      </div>

      {/* ─── 5. Health and Safety ─── */}
      <div style={{ background: '#FAFAFA', padding: '48px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          <SectionHeading>Health and Safety</SectionHeading>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 32 }}>
            Arizona&apos;s desert environment presents unique safety considerations. A little preparation goes a long way toward ensuring a safe and enjoyable visit.
          </p>

          <div
            style={{
              borderLeft: '4px solid #D32F2F',
              background: '#FFF8F6',
              padding: '24px 28px',
              borderRadius: '0 12px 12px 0',
              marginBottom: 16,
            }}
          >
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: 16, fontWeight: 700, color: '#1A1A1A', marginBottom: 8 }}>
              Heat Safety
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444', margin: 0 }}>
              Heat-related illness is the leading cause of weather-related death in Arizona. Carry at least one liter of water per person per hour when outdoors. Learn to recognize the signs of heat exhaustion: heavy sweating, weakness, nausea, dizziness, and rapid pulse. If symptoms appear, move to shade or air conditioning immediately and hydrate. Never leave children or pets in a parked vehicle - interior temperatures can exceed 150&deg;F within minutes.
            </p>
          </div>

          <div
            style={{
              borderLeft: '4px solid #D32F2F',
              background: '#FFF8F6',
              padding: '24px 28px',
              borderRadius: '0 12px 12px 0',
              marginBottom: 16,
            }}
          >
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: 16, fontWeight: 700, color: '#1A1A1A', marginBottom: 8 }}>
              Wildlife
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444', margin: 0 }}>
              Arizona is home to rattlesnakes, scorpions, Gila monsters, and javelinas. Watch where you step and place your hands on trails, especially near rocks and brush. Shake out shoes and clothing left outdoors. If bitten by a rattlesnake, remain calm, immobilize the affected limb, and call 911 immediately. Do not apply a tourniquet or attempt to suck out venom.
            </p>
          </div>

          <div
            style={{
              borderLeft: '4px solid #D32F2F',
              background: '#FFF8F6',
              padding: '24px 28px',
              borderRadius: '0 12px 12px 0',
              marginBottom: 16,
            }}
          >
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: 16, fontWeight: 700, color: '#1A1A1A', marginBottom: 8 }}>
              Driving Safety
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444', margin: 0 }}>
              Dust storms (haboobs) can reduce visibility to near zero in seconds. If you encounter one while driving, pull completely off the roadway, turn off your headlights, set your parking brake, and wait for the storm to pass. Flash floods are common during monsoon season and can sweep away vehicles in seconds. Never attempt to cross a flooded wash, even if the water appears shallow. On rural highways, watch for livestock and wildlife crossings, especially at dawn and dusk.
            </p>
          </div>

          <div
            style={{
              borderLeft: '4px solid #D32F2F',
              background: '#FFF8F6',
              padding: '24px 28px',
              borderRadius: '0 12px 12px 0',
              marginBottom: 16,
            }}
          >
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: 16, fontWeight: 700, color: '#1A1A1A', marginBottom: 8 }}>
              Altitude
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444', margin: 0 }}>
              Flagstaff sits at 7,000 feet and the Grand Canyon South Rim at 7,000 feet. If you are coming from sea level, you may experience mild altitude sickness including headache, shortness of breath, and fatigue. Take it easy on your first day at elevation, stay hydrated, and avoid strenuous activity until you acclimate. Consult your doctor if you have heart or respiratory conditions.
            </p>
          </div>
        </div>
      </div>

      {/* ─── 6. Accessibility ─── */}
      <div style={{ background: '#fff', padding: '48px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          <SectionHeading>Accessibility</SectionHeading>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 16 }}>
            Arizona offers a growing number of wheelchair-accessible attractions and trails for visitors with mobility challenges. The Grand Canyon&apos;s paved Rim Trail stretches over 13 miles along the South Rim with multiple accessible viewpoints, shuttle stops, and rest areas. Saguaro National Park in Tucson features accessible scenic drives and short paved paths through iconic cactus forests.
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 16 }}>
            In the Phoenix metro area, the Desert Botanical Garden, Heard Museum, and Phoenix Zoo all provide wheelchair access, accessible restrooms, and loaner wheelchairs. Papago Park and Tempe Town Lake offer paved, level paths ideal for wheelchairs and strollers. Many Scottsdale resorts provide ADA-compliant rooms, pool lifts, and accessible spa facilities.
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444' }}>
            Valley Metro operates accessible buses and the light rail system throughout the Phoenix metro area, with ramps, priority seating, and audio announcements at every station. Visitors with an Access pass from any U.S. transit agency can ride at reduced fares. For national parks, the America the Beautiful Access Pass provides free lifetime entry and discounted camping for visitors with permanent disabilities.
          </p>
        </div>
      </div>

      {/* ─── 7. Venture REI ─── */}
      <div style={{ background: '#FAF5F0', padding: '64px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 700, color: '#1A1A1A', marginBottom: 16 }}>
            From Vacation to Home - {siteConfig.brokerageName}
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444' }}>
            Many visitors who fall in love with Arizona&apos;s lifestyle choose to make it permanent.{' '}
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

      {/* ─── 8. FAQ ─── */}
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
