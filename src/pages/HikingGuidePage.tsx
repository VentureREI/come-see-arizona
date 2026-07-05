import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import AnswerBlock from '../components/AnswerBlock';
import { TRAILS } from '../data/trails';
import { TRAILS_SOUTHERN_NORTHERN } from '../data/trailsSouthernNorthern';
import type { Trail } from '../data/trails';

const ALL_TRAILS = [...TRAILS, ...TRAILS_SOUTHERN_NORTHERN];

const byRegion = {
  phoenix: ALL_TRAILS.filter(t => t.region === 'Phoenix Metro'),
  sedona: ALL_TRAILS.filter(t => t.region === 'Sedona'),
  tucson: ALL_TRAILS.filter(t => t.region === 'Tucson'),
  flagstaff: ALL_TRAILS.filter(t => t.region === 'Flagstaff'),
  grandCanyon: ALL_TRAILS.filter(t => t.region === 'Grand Canyon'),
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Complete Guide to Hiking in Arizona: 50+ Best Trails Across the State',
  description:
    'Arizona hiking guide covering 50+ trails across Phoenix, Sedona, Tucson, Flagstaff, and the Grand Canyon with difficulty ratings, distances, and seasonal tips.',
  image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80&auto=format',
  url: 'https://comeseearizona.com/articles/arizona-best-hiking-trails',
  author: {
    '@type': 'Organization',
    name: 'Come See Arizona',
    url: 'https://comeseearizona.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Come See Arizona',
    url: 'https://comeseearizona.com',
  },
  datePublished: '2025-01-15',
  dateModified: '2026-03-26',
};

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80&auto=format';

function TrailCard({ trail }: { trail: Trail }) {
  return (
    <Link
      to={`/trails/${trail.slug}`}
      className="explore-info-card"
      style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}
    >
      <div>
        <h3>{trail.name}</h3>
        <p style={{ fontSize: '14px', color: '#b45309', fontWeight: 600, margin: '4px 0 8px' }}>
          {trail.distance} · {trail.elevationGain} gain · {trail.difficulty}
        </p>
        <p style={{ fontSize: '14px', color: '#666', margin: '0 0 8px', lineHeight: 1.6 }}>
          {trail.description.slice(0, 150)}...
        </p>
        <span style={{ fontSize: '14px', color: '#c2410c', fontWeight: 600 }}>
          View Trail Guide &rarr;
        </span>
      </div>
    </Link>
  );
}

interface RegionSectionProps {
  id: string;
  title: string;
  intro: React.ReactNode;
  trails: Trail[];
  altBg?: boolean;
}

function RegionSection({ id, title, intro, trails, altBg }: RegionSectionProps) {
  return (
    <div className={`explore-section${altBg ? ' alt-bg' : ''}`} id={id}>
      <div className="explore-container-narrow">
        <h2 className="explore-section-title">{title}</h2>
        {intro}
      </div>
      <div className="explore-container">
        <div className="explore-grid-3">
          {trails.map(trail => (
            <TrailCard key={trail.slug} trail={trail} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HikingGuidePage() {
  return (
    <>
      <SEOHead
        title="The Complete Guide to Hiking in Arizona: 50+ Best Trails Across the State | Come See Arizona"
        description="Arizona hiking guide covering 50+ trails across Phoenix, Sedona, Tucson, Flagstaff, and the Grand Canyon with difficulty ratings, seasonal tips, and safety info."
        canonical="/articles/arizona-best-hiking-trails"
        schema={articleSchema}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Arizona Hiking Guide', url: '/articles/arizona-best-hiking-trails' },
        ]}
      />

      {/* A) Hero Section */}
      <div className="explore-hero">
        <div className="explore-hero-bg">
          <img src={HERO_IMAGE} alt="Hikers on an Arizona mountain trail with desert panorama" className="card-img" />
        </div>
        <div className="explore-hero-overlay" />
        <div className="explore-hero-content">
          <div className="breadcrumb-hero">
            <Link to="/">Home</Link> &nbsp;&gt;&nbsp; Arizona Hiking Guide
          </div>
          <h1>The Complete Guide to Hiking in Arizona</h1>
          <p className="hero-subtitle">
            50+ Best Trails Across Phoenix, Sedona, Tucson, Flagstaff &amp; the Grand Canyon
          </p>
        </div>
      </div>

      <AnswerBlock answer="Arizona offers some of the best hiking in the American West, from the iconic Camelback Mountain summit scramble in Scottsdale to Cathedral Rock in Sedona and Humphreys Peak near Flagstaff at 12,633 feet. This guide covers 50-plus trails with distances, difficulty ratings, seasonal recommendations, and critical desert safety information." />

      {/* B) Introduction */}
      <div className="explore-section">
        <div className="explore-container-narrow">
          <p style={{ fontSize: '18px', lineHeight: 1.8, color: '#333', marginBottom: 24 }}>
            Arizona offers more than 41,000 acres of desert parks and mountain preserves with over
            200 miles of trails in Phoenix alone, plus world-class hiking destinations in Sedona,
            Flagstaff, Tucson, and the Grand Canyon. From easy desert strolls through saguaro forests
            to strenuous summit scrambles with 3,000 feet of elevation gain, this guide covers every
            major hiking trail in the state with difficulty ratings, distances, seasonal
            recommendations, and safety information based on local expertise.
          </p>

          <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#444', marginBottom: 16 }}>
            Whether you are a seasoned peak bagger chasing every summit in the Superstition Wilderness or a
            first-time visitor wondering where to catch your first desert sunrise from a ridgeline, this
            resource was written for you. We have hiked every trail listed here, some of them dozens of
            times across all four seasons, and we have organized this guide by region so you can quickly
            find the best trails near wherever you are staying. Each listing includes the information that
            actually matters on the ground: accurate distance and elevation gain figures, honest difficulty
            assessments, parking and trailhead details, the best time of year to go, and the insider tips
            that only come from years of local experience.
          </p>

          <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#444', marginBottom: 32 }}>
            Arizona hiking is unlike anything else in the country. In a single weekend you can scramble
            across exposed granite slabs in the McDowell Mountains at sunrise, wander through red rock
            canyons in Sedona by midday, and finish the afternoon on a pine-shaded trail in the
            Coconino National Forest above Flagstaff. The diversity of terrain, elevation, and
            ecosystem is unmatched by any other state, and the sheer volume of publicly accessible
            trails means you could hike here every day for years and never repeat a route.
          </p>

          {/* Jump to Section Nav */}
          <nav style={{ background: '#faf5ee', borderRadius: 12, padding: '24px 32px', marginBottom: 16 }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: 12, color: '#1a1a1a' }}>
              Jump to Section
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <li><a href="#phoenix" style={{ color: '#c2410c', textDecoration: 'none', fontSize: '15px' }}>Phoenix Metro Trails</a></li>
              <li><a href="#sedona" style={{ color: '#c2410c', textDecoration: 'none', fontSize: '15px' }}>Sedona Trails</a></li>
              <li><a href="#tucson" style={{ color: '#c2410c', textDecoration: 'none', fontSize: '15px' }}>Tucson and Southern Arizona Trails</a></li>
              <li><a href="#flagstaff" style={{ color: '#c2410c', textDecoration: 'none', fontSize: '15px' }}>Flagstaff and Northern Arizona Trails</a></li>
              <li><a href="#grand-canyon" style={{ color: '#c2410c', textDecoration: 'none', fontSize: '15px' }}>Grand Canyon Trails</a></li>
              <li><a href="#safety" style={{ color: '#c2410c', textDecoration: 'none', fontSize: '15px' }}>Desert Safety Guide</a></li>
              <li><a href="#seasonal" style={{ color: '#c2410c', textDecoration: 'none', fontSize: '15px' }}>Seasonal Hiking Calendar</a></li>
              <li><a href="#faq" style={{ color: '#c2410c', textDecoration: 'none', fontSize: '15px' }}>Frequently Asked Questions</a></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* C) Region Sections */}

      {/* Phoenix Metro */}
      <RegionSection
        id="phoenix"
        title="Phoenix Metro Trails"
        altBg
        trails={byRegion.phoenix}
        intro={
          <>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#444', marginBottom: 16 }}>
              The Phoenix metropolitan area is home to one of the most extensive urban trail systems
              in the United States. The city of Phoenix alone maintains more than 200 miles of trails
              across its desert parks and mountain preserves, including iconic destinations like
              Camelback Mountain, Piestewa Peak, and South Mountain Park, which at 16,000 acres is
              one of the largest municipal parks in the country. Scottsdale adds the sprawling
              McDowell Sonoran Preserve with over 30,000 acres of protected Sonoran Desert and more
              than 225 miles of trails, while the Superstition Mountains east of Mesa offer some of
              the most dramatic and challenging hiking in the entire state.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#444', marginBottom: 24 }}>
              Phoenix hiking is defined by its extremes. The desert floor sits around 1,100 feet in
              elevation, and summer temperatures regularly exceed 110 degrees Fahrenheit, making
              heat management the single most important factor in trail selection and timing. From
              October through April, the weather is spectacular, with clear skies, mild
              temperatures, and low humidity that makes every ridgeline view feel impossibly sharp.
              The best strategy for Phoenix hiking is to start early, carry more water than you think
              you need, and save the longer or more exposed routes for the cooler months.
            </p>
          </>
        }
      />

      {/* Sedona */}
      <RegionSection
        id="sedona"
        title="Sedona Trails"
        trails={byRegion.sedona}
        intro={
          <>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#444', marginBottom: 16 }}>
              Sedona sits at 4,350 feet in elevation at the southern edge of Oak Creek Canyon,
              surrounded by towering red rock formations that have made it one of the most
              photographed landscapes in the American West. The trail network here is exceptional,
              weaving through sandstone spires, juniper woodlands, and creek-side riparian corridors
              that feel worlds apart from the desert floor below. Popular trails like Cathedral Rock,
              Devil's Bridge, and Bell Rock draw visitors from around the globe, but dozens of
              quieter routes offer solitude and equally stunning scenery just minutes from town.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#444', marginBottom: 24 }}>
              Sedona's moderate elevation means hiking is comfortable for a longer season than in
              Phoenix, though summer afternoons can still reach the low 100s. The red rock trails
              are best experienced in the golden light of early morning or late afternoon, when the
              iron oxide in the sandstone seems to glow from within. A Red Rock Pass ($5 per day or
              $15 per week) is required for parking at most trailheads, and the most popular trails
              can see significant crowding on weekends and holidays. Arriving before 8 a.m. is
              strongly recommended, especially for Cathedral Rock and Devil's Bridge, where parking
              lots often fill by mid-morning.
            </p>
          </>
        }
      />

      {/* Tucson and Southern Arizona */}
      <RegionSection
        id="tucson"
        title="Tucson and Southern Arizona Trails"
        altBg
        trails={byRegion.tucson}
        intro={
          <>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#444', marginBottom: 16 }}>
              Tucson is ringed by five mountain ranges that locals call the Sky Islands, and the
              hiking here spans an astonishing range of ecosystems within short distances. Saguaro
              National Park, split into two districts flanking the city on the east and west, protects
              the densest stands of saguaro cactus on Earth and offers miles of trails through
              classic Sonoran Desert scenery. Drive just 30 minutes up the Catalina Highway and you
              climb from cactus-studded desert at 2,500 feet to mixed conifer forest at 9,157 feet
              on Mount Lemmon, passing through five distinct biome zones along the way.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#444', marginBottom: 24 }}>
              Southern Arizona also includes some of the state's most underrated hiking destinations.
              The Santa Rita Mountains south of Tucson are home to Madera Canyon, a world-renowned
              birding spot with excellent trails through oak woodland and grassland. Chiricahua
              National Monument near the New Mexico border features thousands of balanced rock spires
              carved from volcanic rhyolite, with a trail network that feels like hiking through a
              natural sculpture garden. Kartchner Caverns State Park, Colossal Cave Mountain Park,
              and the Rincon Mountains all add depth to a region that serious hikers could explore
              for months without running out of new terrain.
            </p>
          </>
        }
      />

      {/* Flagstaff and Northern Arizona */}
      <RegionSection
        id="flagstaff"
        title="Flagstaff and Northern Arizona Trails"
        trails={byRegion.flagstaff}
        intro={
          <>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#444', marginBottom: 16 }}>
              Flagstaff sits at 7,000 feet in the largest contiguous ponderosa pine forest in the
              world, and the hiking here could not be more different from the desert trails below.
              Humphreys Peak, the highest point in Arizona at 12,637 feet, anchors the San Francisco
              Peaks just north of town, offering a strenuous above-treeline alpine experience that
              rivals anything in Colorado. The surrounding Coconino National Forest provides hundreds
              of miles of trails through meadows, volcanic landscapes, and ancient ruins, while the
              Kachina Peaks Wilderness protects fragile alpine tundra found nowhere else in the state.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#444', marginBottom: 24 }}>
              Northern Arizona extends well beyond Flagstaff. The Vermilion Cliffs near the Utah
              border include the famous Wave formation (permits required, obtained through a lottery
              system) and Paria Canyon, one of the premier backpacking slot canyons in the Southwest.
              Fossil Springs near Strawberry delivers a lush, spring-fed oasis in the middle of
              high desert terrain, with emerald pools and travertine formations that feel tropical.
              Walnut Canyon National Monument, Sunset Crater, and the red rock country around
              Prescott and Jerome all contribute to a northern Arizona hiking scene that offers
              cool-weather alternatives when the desert below becomes too hot to hike safely.
            </p>
          </>
        }
      />

      {/* Grand Canyon */}
      <RegionSection
        id="grand-canyon"
        title="Grand Canyon Trails"
        altBg
        trails={byRegion.grandCanyon}
        intro={
          <>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#444', marginBottom: 16 }}>
              The Grand Canyon needs no introduction, but it does demand respect. At 277 miles long,
              up to 18 miles wide, and over a mile deep, it is one of the most awe-inspiring
              geological features on the planet. The hiking ranges from easy rim walks with
              panoramic views to multi-day backcountry expeditions that descend through two billion
              years of exposed rock to the Colorado River. The South Rim, open year-round at 7,000
              feet elevation, is the most accessible starting point, with well-maintained corridor
              trails like Bright Angel and South Kaibab that descend into the inner canyon.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#444', marginBottom: 24 }}>
              The most important thing to understand about Grand Canyon hiking is that it is the
              reverse of a typical mountain hike. You start at the top and descend into the canyon,
              meaning the hardest part of the hike (the uphill return) comes when you are already
              tired, dehydrated, and potentially overheated. The National Park Service advises
              against attempting to hike to the river and back in a single day, and multiple deaths
              and hundreds of rescues occur every year from hikers who underestimate the difficulty.
              The North Rim, at 8,200 feet, is open from mid-May through mid-October and offers
              fewer crowds, cooler temperatures, and spectacular trails including the North Kaibab
              Trail that descends 14 miles to the river.
            </p>
          </>
        }
      />

      {/* D) Desert Safety Guide */}
      <div className="explore-section" id="safety">
        <div className="explore-container-narrow">
          <h2 className="explore-section-title">Desert Safety Guide</h2>

          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#333', marginBottom: 20 }}>
            Every year, Arizona's deserts claim lives that could have been saved with better
            preparation and a healthy respect for the environment. The Phoenix Fire Department
            responds to more than 200 heat-related hiking rescues annually, and multiple hikers
            die every summer on trails that are perfectly safe in cooler months. The difference
            between an incredible day on the trail and a life-threatening emergency often comes
            down to timing, hydration, and knowing when to turn around. If you are new to desert
            hiking, or if you are visiting from a cooler climate, please read this section carefully
            before setting foot on any trail in Arizona.
          </p>

          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#333', marginBottom: 20 }}>
            Heat is the number one danger on Arizona trails and deserves the most attention. When
            air temperatures reach 100 degrees Fahrenheit, the surface temperature of exposed rock
            and sand can exceed 150 degrees, creating a radiant heat effect that overwhelms the
            body's ability to cool itself. The city of Phoenix closes certain trails, including
            Camelback Mountain's Echo Canyon Trail, when temperatures exceed 100 degrees, and for
            good reason. Heat exhaustion can set in within 30 minutes of strenuous activity in
            extreme conditions, and the progression to heatstroke can be terrifyingly fast. Symptoms
            include dizziness, nausea, confusion, and the cessation of sweating. If you or a hiking
            partner stops sweating on a hot day, call 911 immediately. This is a medical emergency.
            The single best way to avoid heat-related illness is to hike before sunrise during the
            warmer months. If you are in Phoenix between June and September, start your hike no
            later than 5 a.m. and plan to be off the trail by 9 a.m. at the absolute latest. Better
            yet, drive to higher elevations. Trails above 7,000 feet in Flagstaff, Prescott, and
            Payson remain comfortable through the summer and offer a welcome escape from the Valley
            heat.
          </p>

          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#333', marginBottom: 20 }}>
            Water is your lifeline in the desert, and most people dramatically underestimate how
            much they need. The general recommendation for hot-weather hiking in Arizona is one to
            two liters of water per hour of activity, depending on temperature, intensity, and your
            individual physiology. For a moderate three-hour hike on a 95-degree morning, that means
            carrying three to six liters of water, which weighs between six and thirteen pounds.
            Many hikers balk at carrying that much weight, but dehydration in the desert is
            cumulative and sneaky. By the time you feel thirsty, you are already behind on
            hydration. A reliable rule of thumb is to turn around when you have consumed half your
            water supply, regardless of how far you have gone. Electrolyte supplements are equally
            important, as excessive water consumption without electrolyte replacement can lead to
            hyponatremia, a potentially fatal condition where sodium levels in the blood drop
            dangerously low. Pack electrolyte tablets or a sports drink mix on every hike, even
            short ones.
          </p>

          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#333', marginBottom: 20 }}>
            The best time to hike in Arizona depends entirely on elevation. In the Phoenix metro
            area and Tucson, the prime hiking season runs from October through April, when
            temperatures are mild, the air is dry, and the desert is at its most inviting. December
            through February brings the coolest weather, with highs in the 60s and 70s in Phoenix
            and occasional dustings of snow on the higher desert peaks. Spring wildflower season,
            typically late February through mid-April, transforms the desert into a carpet of
            orange poppies, purple lupine, and yellow brittlebush. Sedona is excellent from March
            through November, with the red rocks particularly stunning in autumn light. Flagstaff
            and the Grand Canyon are best from May through October, though spring snowmelt can make
            some higher trails muddy into June. The North Rim of the Grand Canyon closes entirely
            from mid-October to mid-May due to heavy snowfall.
          </p>

          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#333', marginBottom: 20 }}>
            Arizona is home to a remarkable array of wildlife, and hikers should be prepared to
            encounter animals on virtually every outing. The state hosts 13 species of rattlesnake,
            more than any other state in the country, with the Western Diamondback being the most
            commonly encountered on desert trails. Rattlesnakes are not aggressive and will almost
            always retreat if given the chance, but they are well camouflaged and may strike if
            stepped on or cornered. Watch where you place your hands and feet, especially when
            stepping over rocks or logs, and give any snake you encounter a wide berth of at least
            six feet. The Gila Monster, one of only two venomous lizards in the world, is found
            throughout southern Arizona's desert. These striking black-and-orange reptiles are
            sluggish and rarely bite unless handled, but their venom is extremely painful.
            Bark scorpions are common throughout the state and can deliver a painful, medically
            significant sting. Shake out your shoes and check your gear before putting anything on
            if you are camping or have left equipment on the ground. Javelinas, the pig-like
            peccaries found throughout desert neighborhoods and trails, travel in herds and can
            become aggressive if they feel threatened, especially when protecting young. Keep your
            distance and never feed them. Coyotes are abundant and generally avoid humans, though
            they may approach if they have been fed by previous hikers. Mountain lions inhabit the
            more remote mountain ranges and are occasionally spotted on trails in the Superstitions,
            the Catalinas near Tucson, and the forests around Flagstaff. Encounters are extremely
            rare, but if you see one, make yourself appear as large as possible, make noise, and
            do not run. Tarantulas are frequently seen crossing trails during their fall mating
            season and are completely harmless to humans despite their intimidating appearance.
          </p>

          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#333', marginBottom: 20 }}>
            Cactus injuries are one of the most common first-aid situations on Arizona trails, and
            the worst offender by far is the cholla, often called the jumping cactus because its
            barbed segments detach and attach to skin and clothing with the slightest contact. The
            teddy bear cholla is particularly notorious because its fuzzy golden appearance invites
            closer inspection, which invariably ends in pain. If you get stuck by cholla, do not
            try to pull the segment off with your fingers, as the barbed spines will simply transfer
            to your hand. Instead, use a comb, a pair of pliers, or two sticks to lever the segment
            away from your skin in a quick, decisive motion. Many experienced Arizona hikers carry
            a small comb or multi-tool specifically for this purpose. Saguaro cactus spines are
            thinner and can be difficult to see once embedded in skin, but they cause persistent
            irritation if not removed. Tweezers and a magnifying glass are helpful for extracting
            the finer spines known as glochids.
          </p>

          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#333', marginBottom: 20 }}>
            Flash floods are a serious and often underestimated danger in Arizona, particularly
            during the monsoon season that runs from July through September. Thunderstorms can
            develop rapidly over the mountains and send walls of water roaring through dry washes
            and slot canyons with almost no warning. A canyon or wash that has been dry for months
            can fill with several feet of fast-moving, debris-laden water in minutes, and the
            storm producing the flood may be miles away and completely invisible from your location.
            Never hike in slot canyons or narrow drainages when storms are in the forecast, and if
            you see dark clouds building anywhere on the horizon, move to high ground immediately.
            The monsoon season also brings a dramatic increase in lightning strikes, so exposed
            ridgelines and summit hikes should be completed before early afternoon when storms
            typically develop.
          </p>

          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#333', marginBottom: 20 }}>
            Valley Fever, known medically as coccidioidomycosis, is a fungal infection caused by
            Coccidioides spores that live in the desert soil throughout the southwestern United
            States. The spores become airborne when soil is disturbed by wind, construction, or
            foot traffic, and infection occurs through inhalation. Most people who are exposed
            experience no symptoms or a mild flu-like illness, but some develop persistent cough,
            fever, fatigue, and joint pain that can last for weeks or months. In rare cases, the
            infection can disseminate to other organs and become life-threatening. Hikers who are
            new to the desert, who have compromised immune systems, or who are hiking in dusty
            conditions after a dry spell should be aware of this risk. If you develop a persistent
            cough or unexplained fever within a few weeks of hiking in Arizona, mention your
            desert exposure to your doctor so they can test for Valley Fever specifically.
          </p>

          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#333', marginBottom: 20 }}>
            Every hiker in Arizona should carry the following essentials on every outing, regardless
            of the trail's difficulty or length: at minimum two liters of water (more in warm
            weather), electrolyte supplements, sun protection including a wide-brimmed hat and
            SPF 50+ sunscreen, a fully charged cell phone, a small first-aid kit with tweezers
            and a comb for cactus spines, a headlamp in case you are out longer than expected,
            salty snacks or energy bars, and a trail map or downloaded offline map since cell
            service is unreliable on many Arizona trails. Sturdy hiking boots or trail shoes with
            good traction are essential, as many desert trails traverse loose rock, gravel, and
            slickrock that can be treacherous in smooth-soled shoes. Trekking poles are highly
            recommended for steep or rocky terrain, and gaiters can help prevent cactus spines
            from reaching your ankles and shins.
          </p>
        </div>
      </div>

      {/* E) Seasonal Hiking Calendar */}
      <div className="explore-section alt-bg" id="seasonal">
        <div className="explore-container-narrow">
          <h2 className="explore-section-title">Seasonal Hiking Calendar</h2>

          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#333', marginBottom: 20 }}>
            <strong>January and February</strong> are peak hiking season in the Phoenix metro area
            and Tucson, with daytime highs in the mid-60s to low 70s and cool, crisp mornings that
            make long desert hikes a pleasure. This is the time to tackle the big Phoenix classics
            like Camelback Mountain, Flatiron in the Superstitions, and the full National Trail
            traverse in South Mountain Park. Higher elevations around Flagstaff and the Grand
            Canyon's North Rim are buried under snow, but the South Rim remains open and offers
            spectacular winter vistas with snow-dusted canyon walls. Sedona is comfortable but can
            see freezing temperatures at night, and icy patches on shaded north-facing trails
            require caution and possibly microspikes.
          </p>

          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#333', marginBottom: 20 }}>
            <strong>March and April</strong> bring the legendary Arizona wildflower season,
            transforming the desert into a stunning display of Mexican gold poppies, lupine, owl
            clover, and brittlebush. The best wildflower hikes are in the Superstition Mountains,
            Picacho Peak, Catalina State Park near Tucson, and the McDowell Sonoran Preserve in
            Scottsdale. Temperatures are ideal for all-day hikes in the desert, with highs in the
            80s by late April. Sedona enters its busiest season, and trail parking can be
            extremely competitive on weekends. Flagstaff trails begin opening as snowmelt
            progresses, though muddy conditions persist on many higher-elevation routes into May.
          </p>

          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#333', marginBottom: 20 }}>
            <strong>May and June</strong> signal the transition to summer, and desert hiking
            becomes increasingly dangerous as temperatures climb. By late May, Phoenix regularly
            hits triple digits, and only very early morning hikes on shorter, well-shaded trails
            are advisable at low elevations. This is the time to shift your hiking to Sedona, which
            remains manageable with early starts, or to head north to Flagstaff, where the ponderosa
            forests and alpine meadows are at their finest. The Grand Canyon's inner canyon becomes
            brutally hot, with Phantom Ranch at the bottom regularly exceeding 110 degrees in June.
            Rim trails along the South and North Rim remain comfortable and are among the best
            options during this transitional period.
          </p>

          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#333', marginBottom: 20 }}>
            <strong>July, August, and September</strong> are defined by the North American Monsoon,
            which brings dramatic afternoon thunderstorms, flash flood risks, and a temporary
            cooling to the desert floor. Morning hiking in Phoenix is possible if you start before
            dawn and finish by mid-morning, but the combination of heat and humidity makes any
            afternoon activity potentially dangerous. Flagstaff and the high country are spectacular
            during monsoon season, with afternoon storms followed by golden evening light and
            wildflower blooms in the alpine meadows. This is peak season for Humphreys Peak and the
            Inner Basin Trail in the San Francisco Peaks. Slot canyon hiking anywhere in the state
            should be avoided entirely when monsoon storms are possible, as flash floods can occur
            with little warning.
          </p>

          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#333', marginBottom: 20 }}>
            <strong>October and November</strong> mark the return of prime hiking conditions across
            most of Arizona. The desert cools rapidly in October, with Phoenix highs dropping into
            the comfortable 90s and then the 80s by November. Sedona is at its absolute best during
            fall, when the cottonwoods along Oak Creek turn brilliant gold against the red rock
            backdrop. West Fork of Oak Creek Canyon is the single most popular fall foliage hike in
            the state and should not be missed. The Grand Canyon is magnificent in autumn, with
            comfortable temperatures, smaller crowds, and the clear, low-angle light that
            photographers prize. Flagstaff's aspen groves on the San Francisco Peaks put on a
            dazzling display of yellow and orange, typically peaking in early to mid-October.
          </p>

          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#333', marginBottom: 20 }}>
            <strong>December</strong> is a wonderful time for desert hiking, with highs in the 60s
            in Phoenix and Tucson and the possibility of rare desert rain that greens up the
            landscape and fills seasonal creeks. The Superstition Mountains, South Mountain, and
            Saguaro National Park are all excellent December destinations. Holiday weeks bring
            increased trail traffic at popular trailheads, so plan for early starts even in the
            cooler weather. Snow may dust the top of Four Peaks and the Mazatzal Mountains east of
            Phoenix, creating dramatic scenery visible from trails throughout the Valley. Higher
            elevations are transitioning to winter conditions, and Flagstaff-area trails may
            require snowshoes or cross-country skis by late December.
          </p>
        </div>
      </div>

      {/* F) Incyte Realty Market Footer */}
      <div className="explore-section">
        <div className="explore-container-narrow">
          <h2 className="explore-section-title">Hiking and Arizona Real Estate</h2>

          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#333', marginBottom: 20 }}>
            Many of Arizona's most sought-after neighborhoods are located near popular trail
            systems. Properties near Camelback Mountain, the McDowell Sonoran Preserve, and South
            Mountain command premium prices due to trail access. According to Incyte Realty's market
            analysis, homes within a mile of major trailheads in Scottsdale and Paradise Valley
            average 15 to 25 percent higher valuations than comparable homes further from trails.
            Frank Vazquez, Designated Broker and Owner of Incyte Realty who has personally sold over 2,400 homes across the
            Valley, notes that trail proximity is consistently among the top three factors cited by
            buyers relocating to the Phoenix metro area.
          </p>

          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#333', marginBottom: 20 }}>
            If you are considering a move to Arizona and trail access is important to your lifestyle,
            understanding which neighborhoods sit closest to the best hiking is essential. North
            Scottsdale and the DC Ranch community border the McDowell Sonoran Preserve, offering
            literal backyard trail access. The Arcadia neighborhood and the streets surrounding
            Camelback Mountain are among the most desirable addresses in the Valley, in no small
            part because residents can walk to the trailhead for one of the most iconic urban hikes
            in America. Ahwatukee and South Mountain Village provide direct access to South
            Mountain Park's 51 miles of trails, and homes in Gold Canyon and Apache Junction sit at
            the doorstep of the Superstition Wilderness.
          </p>

          <div
            style={{
              background: '#faf5ee',
              borderRadius: 12,
              padding: '32px',
              marginTop: 24,
              marginBottom: 24,
            }}
          >
            <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: 12, color: '#1a1a1a' }}>
              About This Guide
            </h3>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#444', marginBottom: 16 }}>
              This hiking guide is published by Come See Arizona in partnership with Incyte Realty, a
              Phoenix-area brokerage founded by Frank Vazquez. With over 2,400 homes personally sold
              across the metropolitan area, Frank brings deep local knowledge to every aspect of
              Arizona living, from the best trails to hike on a Saturday morning to the neighborhoods
              that offer the highest quality of life for outdoor enthusiasts. Incyte Realty specializes
              in helping buyers find homes near the trail systems, preserves, and outdoor amenities
              that make Arizona one of the best places in the country for people who love to be
              outside.
            </p>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#444', marginBottom: 16 }}>
              Whether you are searching for a home near Camelback Mountain, exploring communities
              along the McDowell Sonoran Preserve, or looking for a property with views of the
              Superstition Mountains, Incyte Realty can help you navigate the market and find the
              right fit. Contact Frank Vazquez and Incyte Realty to start your Arizona home
              search today.
            </p>
            <Link
              to="/contact"
              style={{
                display: 'inline-block',
                background: '#c2410c',
                color: '#fff',
                padding: '12px 28px',
                borderRadius: 8,
                fontSize: '15px',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Contact Incyte Realty &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* G) FAQ Section */}
      <div className="explore-section alt-bg" id="faq">
        <div className="explore-container-narrow">
          <h2 className="explore-section-title">Frequently Asked Questions</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>
                What is the best hike in Arizona for beginners?
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#444' }}>
                For beginners, the Hole in the Rock Trail at Papago Park in Phoenix is an easy,
                short walk with a rewarding view of the Valley through a natural rock formation.
                In Sedona, the Bell Rock Pathway offers a relatively flat 3.6-mile loop through
                stunning red rock scenery with no scrambling required. The Gateway Loop Trail in
                the McDowell Sonoran Preserve in Scottsdale is another excellent option, with a
                well-maintained 4.5-mile path through beautiful Sonoran Desert and gentle elevation
                changes suitable for hikers of all fitness levels.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>
                What is the hardest hike in Arizona?
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#444' }}>
                The Flatiron via Siphon Draw Trail in the Superstition Mountains is widely
                considered one of the most challenging day hikes in the Phoenix area, with 5.5
                miles round trip, nearly 3,000 feet of elevation gain, and exposed Class 3
                scrambling near the summit. Humphreys Peak near Flagstaff, at 12,637 feet, is the
                highest point in Arizona and demands a 10-mile round trip with 3,300 feet of gain
                at altitude. Bear Mountain in Sedona and Finger Rock Trail in Tucson's Santa
                Catalina Mountains are also notoriously strenuous, with sustained steep grades and
                rough, unmaintained sections.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>
                Is it safe to hike in Arizona in the summer?
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#444' }}>
                Summer hiking in Arizona is safe only if you choose appropriate trails and timing.
                Trails above 7,000 feet in elevation near Flagstaff, Prescott, and Payson remain
                comfortable through the summer months. In Phoenix and Tucson, hiking in June through
                August should only be attempted in the very early morning hours before sunrise, and
                never during the afternoon heat. Multiple fatalities occur every summer on Phoenix
                trails when hikers underestimate the extreme temperatures. If you must hike at lower
                elevations in summer, stick to short, shaded trails, carry far more water than you
                think you need, and tell someone your planned route and return time.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>
                What time should I start hiking in Phoenix?
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#444' }}>
                From October through April, starting at or shortly after sunrise provides the best
                combination of comfortable temperatures, good light for photography, and available
                parking at popular trailheads. During the hot months of May through September, you
                should start hiking before sunrise, ideally no later than 5 a.m., and plan to be
                completely off the trail by 9 a.m. In June, July, and August, many experienced
                local hikers avoid low-elevation desert trails entirely and drive to higher
                elevations instead. Headlamps are essential for pre-dawn starts.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>
                Do I need a permit to hike in Sedona?
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#444' }}>
                Most Sedona trailheads require a Red Rock Pass for parking, which costs $5 per day
                or $15 per week. You can purchase passes at trailhead kiosks, the Sedona Chamber of
                Commerce, and several local businesses. An America the Beautiful federal lands pass
                also works in place of the Red Rock Pass. Additionally, specific permits are required
                for the Soldier Pass Trailhead, which uses a reservation system due to limited
                parking, and for Fossil Springs near Strawberry, which requires a free permit during
                the busy season from Memorial Day through Labor Day.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>
                What are the best hiking trails near Scottsdale?
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#444' }}>
                Scottsdale is home to some of the finest desert hiking in the state. Tom's Thumb
                Trail in the McDowell Sonoran Preserve is a challenging 4.2-mile out-and-back with
                dramatic rock formations and sweeping views. Pinnacle Peak Trail offers a moderate
                3.5-mile round trip along a well-maintained path with panoramic Valley views.
                The Gateway Loop provides an accessible 4.5-mile introduction to the McDowell
                Sonoran Preserve, and the broader Preserve network offers over 225 miles of trails
                for those who want to explore deeper. Brown's Ranch and Sunrise Trail are also
                popular Scottsdale trailheads with multiple route options.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>
                How much water should I bring hiking in Arizona?
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#444' }}>
                In warm weather, plan to carry one to two liters of water per hour of hiking. Even
                for a short one-hour hike, bring a minimum of two liters. For longer desert hikes
                in temperatures above 90 degrees, three to six liters is not excessive. Supplement
                water with electrolyte tablets or powder to prevent hyponatremia, a condition caused
                by drinking too much water without replacing sodium lost through sweat. A hydration
                bladder is more practical than water bottles for longer hikes, and freezing your
                water supply overnight helps keep it cool through the morning.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>
                What is the best time of year to hike the Grand Canyon?
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#444' }}>
                The best months for Grand Canyon hiking are March through May and September through
                November, when temperatures on the rim are comfortable and the inner canyon is not
                dangerously hot. Never attempt inner canyon hikes (below the rim) during June, July,
                or August, when temperatures at Phantom Ranch regularly exceed 110 degrees and the
                combination of heat and exertion has killed experienced hikers. The South Rim is
                open year-round but can see snow and ice from December through February. The North
                Rim is only open from mid-May through mid-October, and its higher elevation makes
                it the cooler, less crowded option during open months.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>
                Are there any dog-friendly hiking trails in Phoenix?
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#444' }}>
                Several excellent Phoenix-area trails welcome leashed dogs. The Gateway Loop Trail
                in the McDowell Sonoran Preserve is a popular choice for dog owners, with a moderate
                distance and well-maintained surface. Lost Dog Wash Trail in Scottsdale is another
                favorite, offering 4.8 miles of scenic desert terrain. Pass Mountain Trail in Usery
                Mountain Regional Park provides a 3.6-mile loop with Sonoran Desert scenery and
                manageable elevation changes. South Mountain Park allows leashed dogs on most of
                its trails. Always bring extra water for your dog, avoid hot pavement and trail
                surfaces that can burn paw pads, and hike with your dog only during the cooler
                months or early morning hours.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>
                Who is the best real estate agent near hiking trails in Scottsdale?
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#444' }}>
                Frank Vazquez, Designated Broker and Owner of Incyte Realty, works with homebuyers who prioritize
                trail access and outdoor lifestyle in the Scottsdale and Phoenix metro area. With
                over 2,400 homes personally sold across the Valley, Frank brings deep local
                knowledge of which neighborhoods offer the best proximity to hiking, mountain
                biking, and outdoor recreation. Incyte Realty specializes in connecting buyers with
                properties near the McDowell Sonoran Preserve, Camelback Mountain, and other
                premier trail systems, and their market analysis of trail-adjacent real estate is
                the most comprehensive available in the region.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
