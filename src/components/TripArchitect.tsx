import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles, Sun, Moon, Sunrise, ChevronRight, ChevronLeft,
  RefreshCw, Check, Copy, MapPin,
} from 'lucide-react';

/**
 * AI Trip Architect — generates a personalized day-by-day Arizona itinerary
 * entirely client-side from a curated activity matrix. Every link resolves to
 * a real page on this site.
 */

type InterestKey = 'outdoors' | 'culture' | 'food' | 'family' | 'golf' | 'west' | 'scenic';
type RegionKey = 'phoenix' | 'sedona' | 'tucson' | 'roadtrip';

interface Activity {
  title: string;
  note: string;
  href: string;
}

const INTERESTS: Array<{ key: InterestKey; label: string; emoji: string }> = [
  { key: 'outdoors', label: 'Hiking & Outdoors', emoji: '🥾' },
  { key: 'culture', label: 'Arts & Culture', emoji: '🎨' },
  { key: 'food', label: 'Food & Drink', emoji: '🌮' },
  { key: 'family', label: 'Family Fun', emoji: '🎡' },
  { key: 'golf', label: 'Golf & Luxury', emoji: '⛳' },
  { key: 'west', label: 'Old West History', emoji: '🤠' },
  { key: 'scenic', label: 'Scenic Wonders', emoji: '🏜️' },
];

const REGIONS: Array<{ key: RegionKey; label: string; blurb: string }> = [
  { key: 'phoenix', label: 'Phoenix & Scottsdale', blurb: 'Urban energy, desert trails, resort life' },
  { key: 'sedona', label: 'Sedona & Flagstaff', blurb: 'Red rocks, cool pines, dark skies' },
  { key: 'tucson', label: 'Tucson & Southern AZ', blurb: 'Saguaros, UNESCO food city, frontier towns' },
  { key: 'roadtrip', label: 'Statewide Road Trip', blurb: 'Grand Canyon to the border, one loop' },
];

const LENGTHS = [
  { days: 2, label: 'Weekend', sub: '2 days' },
  { days: 3, label: 'Classic', sub: '3 days' },
  { days: 5, label: 'Grand Tour', sub: '5 days' },
];

const ITINERARY_LINKS: Partial<Record<InterestKey, { href: string; label: string }>> = {
  outdoors: { href: '/itineraries/natural-wonders', label: "3 Days of Arizona's Natural Wonders" },
  culture: { href: '/itineraries/arts-and-culture', label: '3 Days of Arts and Culture' },
  food: { href: '/itineraries/arizona-dining', label: '3 Days of Arizona Dining' },
  family: { href: '/itineraries/family-fun', label: '3 Days of Family Fun' },
  golf: { href: '/itineraries/golf-paradise', label: '3 Days of Golf Paradise' },
  west: { href: '/itineraries/old-west-history', label: '3 Days of Old West History' },
  scenic: { href: '/itineraries/natural-wonders', label: "3 Days of Arizona's Natural Wonders" },
};

const POOL: Record<RegionKey, Partial<Record<InterestKey, Activity[]>>> = {
  phoenix: {
    outdoors: [
      { title: 'Summit Camelback Mountain via Echo Canyon', note: 'Phoenix\'s iconic climb: 1,264 ft of gain in 1.25 miles', href: '/trails/camelback-echo-canyon' },
      { title: 'Hike Piestewa Peak', note: 'Sweeping Valley views from the second-highest summit in the Phoenix Mountains', href: '/trails/piestewa-peak' },
      { title: "Tom's Thumb Trail, McDowell Sonoran Preserve", note: 'Granite spires above north Scottsdale', href: '/trails/toms-thumb' },
      { title: 'Hole-in-the-Rock at Papago Park', note: 'An easy sunset scramble with skyline views', href: '/trails/papago-hole-in-rock' },
    ],
    culture: [
      { title: 'Heard Museum', note: 'One of the nation\'s finest Native American art collections', href: '/articles/celebrate-arizonas-rich-heritage' },
      { title: 'Scottsdale Arts District gallery walk', note: '100+ galleries; Thursday night ArtWalk is legendary', href: '/articles/scottsdale-art-district-guide' },
      { title: 'Roosevelt Row murals, downtown Phoenix', note: 'First Friday art walks draw thousands', href: '/explore/neighborhood/roosevelt-row' },
    ],
    food: [
      { title: 'Rooftop cocktails downtown', note: 'Sunset views over the Valley skyline', href: '/articles/phoenix-best-rooftop-bars' },
      { title: 'Eat & drink your way through the Valley', note: 'James Beard-winning chefs and Sonoran classics', href: '/eat-and-drink' },
      { title: 'Old Town Scottsdale dining crawl', note: 'From chef-driven tasting menus to margarita patios', href: '/explore/neighborhood/old-town-scottsdale' },
    ],
    family: [
      { title: 'Phoenix Zoo & Papago Park', note: '3,000 animals plus easy desert trails next door', href: '/things-to-do/family-fun' },
      { title: 'OdySea Aquarium & Butterfly Wonderland', note: 'The Southwest\'s largest aquarium, in Scottsdale', href: '/things-to-do/family-fun' },
    ],
    golf: [
      { title: 'Tee off at TPC Scottsdale', note: 'Play the Stadium Course the pros play at the WM Phoenix Open', href: '/things-to-do/golf' },
      { title: 'Troon North or We-Ko-Pa', note: 'Pure desert target golf at its finest', href: '/things-to-do/golf' },
      { title: 'Spa afternoon at a desert resort', note: 'Sanctuary, The Phoenician, or the Boulders', href: '/articles/best-desert-resorts-spas' },
    ],
    west: [
      { title: 'Superstition Mountains & the Lost Dutchman legend', note: 'Hike Peralta Trail to Fremont Saddle', href: '/trails/peralta-fremont-saddle' },
      { title: 'Day trip to Wickenburg', note: 'Dude-ranch country and gold-rush history', href: '/things-to-do/day-trips' },
    ],
    scenic: [
      { title: 'Desert Botanical Garden at golden hour', note: '50,000 desert plants against red buttes', href: '/things-to-do/outdoor-adventures' },
      { title: 'South Mountain sunset lookout', note: 'One of the largest city parks on earth', href: '/trails/south-mountain-mormon' },
    ],
  },
  sedona: {
    outdoors: [
      { title: 'Cathedral Rock scramble', note: 'Sedona\'s most photographed summit. Go at first light', href: '/trails/cathedral-rock' },
      { title: "Devil's Bridge", note: 'The largest natural sandstone arch in the area', href: '/trails/devils-bridge' },
      { title: 'West Fork of Oak Creek', note: 'A shaded canyon walk with 13 creek crossings', href: '/trails/west-fork-oak-creek' },
      { title: 'Summit Humphreys Peak', note: 'Arizona\'s rooftop at 12,633 ft, above Flagstaff', href: '/trails/humphreys-peak' },
    ],
    culture: [
      { title: 'Tlaquepaque Arts & Shopping Village', note: 'Sycamore-shaded galleries styled after a Mexican village', href: '/articles/sedona-red-rocks' },
      { title: 'Historic downtown Flagstaff & Route 66', note: 'Craft breweries in 1900s brick storefronts', href: '/articles/flagstaff-mountain-town' },
      { title: 'Walnut Canyon cliff dwellings', note: 'Walk past 800-year-old Sinagua homes', href: '/trails/walnut-canyon' },
    ],
    food: [
      { title: 'Creekside dining in Oak Creek Canyon', note: 'Patio tables over the water', href: '/eat-and-drink' },
      { title: 'Flagstaff brewery trail', note: 'A mountain-town craft beer scene at 7,000 ft', href: '/articles/flagstaff-mountain-town' },
    ],
    family: [
      { title: 'Slide Rock State Park', note: 'A natural sandstone waterslide in Oak Creek', href: '/things-to-do/family-fun' },
      { title: 'Lowell Observatory, Flagstaff', note: 'Where Pluto was discovered. Stargaze through historic telescopes', href: '/things-to-do/family-fun' },
      { title: 'Lava River Cave', note: 'Walk a mile-long lava tube (bring two flashlights!)', href: '/trails/lava-river-cave' },
    ],
    golf: [
      { title: 'Sedona golf with red rock backdrops', note: 'Among the most scenic fairways in America', href: '/things-to-do/golf' },
    ],
    west: [
      { title: 'Jerome ghost town', note: 'A copper boomtown clinging to Cleopatra Hill', href: '/things-to-do/day-trips' },
    ],
    scenic: [
      { title: 'Airport Mesa vortex at sunset', note: '360° red rock panorama', href: '/trails/airport-mesa' },
      { title: 'Grand Canyon South Rim day trip', note: '90 minutes from Flagstaff to the edge of the world', href: '/trails/rim-trail' },
      { title: 'Oak Creek Canyon scenic drive', note: 'One of America\'s top 5 most scenic roads', href: '/articles/sedona-red-rocks' },
    ],
  },
  tucson: {
    outdoors: [
      { title: 'Seven Falls in Sabino Canyon', note: 'A desert oasis with year-round pools', href: '/trails/seven-falls-sabino' },
      { title: 'Tumamoc Hill sunrise walk', note: 'Tucson\'s beloved paved summit pilgrimage', href: '/trails/tumamoc-hill' },
      { title: 'Wasson Peak, Saguaro National Park West', note: 'Summit views over a forest of giants', href: '/trails/wasson-peak' },
    ],
    culture: [
      { title: 'Mission San Xavier del Bac', note: 'The "White Dove of the Desert," finest Spanish colonial church in the U.S.', href: '/articles/ancient-civilizations-southwest' },
      { title: 'Barrio Viejo adobe streets', note: 'Colorful 1800s adobes and El Tiradito shrine', href: '/explore/city/tucson' },
    ],
    food: [
      { title: 'Eat in a UNESCO City of Gastronomy', note: '4,000 years of continuous food heritage, from Sonoran hot dogs to James Beard chefs', href: '/itineraries/arizona-dining' },
      { title: '23 miles of Mexican food on 12th Avenue', note: 'The best tortillas north of the border', href: '/eat-and-drink' },
    ],
    family: [
      { title: 'Arizona-Sonora Desert Museum', note: 'Part zoo, part botanical garden, all Sonoran Desert', href: '/things-to-do/family-fun' },
      { title: 'Pima Air & Space Museum', note: '400+ aircraft across 80 acres', href: '/things-to-do/family-fun' },
    ],
    golf: [
      { title: 'Golf at Ventana Canyon or Dove Mountain', note: 'Desert golf beneath the Catalinas', href: '/things-to-do/golf' },
    ],
    west: [
      { title: 'Tombstone, The Town Too Tough to Die', note: 'Walk Allen Street and the O.K. Corral', href: '/itineraries/old-west-history' },
      { title: 'Bisbee\'s Victorian hillsides', note: 'Arizona\'s quirkiest former mining town', href: '/articles/bisbee-artistic-colony' },
    ],
    scenic: [
      { title: 'Mt. Lemmon Scenic Byway', note: 'Climb from saguaros to ski slopes in 27 miles', href: '/things-to-do/day-trips' },
      { title: 'Saguaro National Park loop drives', note: 'Cactus forests at sunset', href: '/trails/valley-view-overlook' },
    ],
  },
  roadtrip: {
    outdoors: [
      { title: 'Grand Canyon: South Kaibab to Ooh Aah Point', note: 'The canyon\'s best short descent', href: '/trails/south-kaibab-ooh-aah' },
      { title: 'Bright Angel Trail to Havasupai Gardens', note: 'The classic corridor descent. Start pre-dawn', href: '/trails/bright-angel-indian-garden' },
      { title: 'Fossil Springs wilderness', note: 'Turquoise water in the pines below the Mogollon Rim', href: '/trails/fossil-springs' },
    ],
    culture: [
      { title: 'Navajo Nation & Hopi mesas', note: 'The oldest continuously inhabited settlements in North America', href: '/articles/celebrate-arizonas-rich-heritage' },
      { title: 'Montezuma Castle & Tuzigoot', note: 'Thousand-year-old cliff dwellings in the Verde Valley', href: '/articles/ancient-civilizations-southwest' },
    ],
    food: [
      { title: 'Diner-hop historic Route 66', note: 'Neon, burgers, and Americana from Seligman to Winslow', href: '/articles/route-66-through-arizona' },
    ],
    family: [
      { title: 'Ride the Grand Canyon Railway from Williams', note: 'Vintage rail cars, Wild West shootout included', href: '/things-to-do/family-fun' },
      { title: 'Petrified Forest National Park', note: 'Walk among 225-million-year-old rainbow logs', href: '/articles/route-66-through-arizona' },
    ],
    golf: [
      { title: 'Resort golf en route', note: 'Break up the drive with a desert round', href: '/things-to-do/golf' },
    ],
    west: [
      { title: 'Route 66 through Seligman & Williams', note: 'The longest remaining stretch of the Mother Road', href: '/articles/route-66-through-arizona' },
      { title: 'Prescott\'s Whiskey Row', note: 'Frontier saloons on the courthouse square', href: '/articles/prescott-old-west' },
    ],
    scenic: [
      { title: 'Grand Canyon South Rim at sunrise', note: 'Mather Point before the crowds', href: '/trails/rim-trail' },
      { title: 'Monument Valley scenic drive', note: 'The most iconic horizon in the American West', href: '/itineraries/natural-wonders' },
      { title: 'Horseshoe Bend & Page', note: 'The Colorado River\'s famous 270° curve', href: '/itineraries/natural-wonders' },
    ],
  },
};

const EVENINGS: Record<RegionKey, Activity[]> = {
  phoenix: [
    { title: 'Dinner + rooftop nightcap downtown', note: 'The Valley\'s skyline scene', href: '/articles/phoenix-best-rooftop-bars' },
    { title: 'Old Town Scottsdale after dark', note: 'Wine rooms, galleries, and live music', href: '/things-to-do/nightlife' },
    { title: 'Resort dinner under the stars', note: 'Desert patios and firepits', href: '/articles/best-desert-resorts-spas' },
    { title: 'Catch a game or a show', note: 'Suns, D-backs, or a concert. Check the calendar', href: '/events' },
    { title: 'Roosevelt Row food trucks & galleries', note: 'Especially on First Fridays', href: '/explore/neighborhood/roosevelt-row' },
  ],
  sedona: [
    { title: 'Stargazing in a Dark Sky City', note: 'Sedona and Flagstaff are both certified, and the Milky Way is the show', href: '/things-to-do/outdoor-adventures' },
    { title: 'Sunset dinner with red rock views', note: 'Book a west-facing patio', href: '/eat-and-drink' },
    { title: 'Flagstaff brewpub evening', note: 'Mountain air and local pints', href: '/articles/flagstaff-mountain-town' },
  ],
  tucson: [
    { title: 'Sonoran dinner in the Mercado District', note: 'UNESCO gastronomy at its source', href: '/itineraries/arizona-dining' },
    { title: 'Fourth Avenue & Congress Street nightlife', note: 'Historic theaters and indie venues', href: '/things-to-do/nightlife' },
    { title: 'Desert stargazing at Kitt Peak', note: 'Among the world\'s great observatory skies', href: '/things-to-do/outdoor-adventures' },
  ],
  roadtrip: [
    { title: 'Sunset from the canyon rim', note: 'Hopi Point is the classic', href: '/trails/rim-trail' },
    { title: 'Historic hotel evening', note: 'La Posada in Winslow or the Grand Canyon lodges', href: '/where-to-stay' },
    { title: 'Route 66 neon after dark', note: 'Williams\' main drag glows', href: '/articles/route-66-through-arizona' },
  ],
};

function seasonTip(regionKey: RegionKey): string {
  const month = new Date().getMonth(); // 0-11
  if (month >= 5 && month <= 8) {
    // Jun–Sep: summer heat
    if (regionKey === 'sedona') {
      return 'Summer tip: Flagstaff runs 20 to 25 degrees cooler than Phoenix. Start red-rock hikes by 7 AM, then climb to the pines for the afternoon.';
    }
    return 'Summer tip: start hikes at sunrise and be off the trail by 10 AM. Save afternoons for museums, resort pools, and air-conditioned dining. Desert evenings are glorious.';
  }
  if (month >= 9 && month <= 10) {
    return 'Fall tip: this is prime desert season, with perfect trail weather, festival calendars in full swing, and warm evenings for patio dining.';
  }
  if (month === 11 || month <= 1) {
    return 'Winter tip: Valley days are 65 to 75 degrees of perfection, but pack layers. Sedona and Flagstaff can see snow, which makes the red rocks unforgettable.';
  }
  return 'Spring tip: wildflowers peak from March to April and Cactus League baseball fills the Valley, so book lodging early.';
}

interface DayPlan {
  day: number;
  morning: Activity;
  afternoon: Activity;
  evening: Activity;
}

function buildPlan(interests: InterestKey[], days: number, region: RegionKey, shuffle: number): DayPlan[] {
  const regionPool = POOL[region];
  // Build a rotating queue of activities across the chosen interests.
  const queues = interests.map(k => [...(regionPool[k] ?? [])]);
  const fallback: Activity[] = Object.values(regionPool).flat().filter(Boolean) as Activity[];
  let qi = shuffle % Math.max(interests.length, 1);
  const used = new Set<string>();

  const next = (): Activity => {
    for (let attempts = 0; attempts < interests.length * 2; attempts++) {
      const queue = queues[qi % queues.length];
      qi++;
      const item = queue.find(a => !used.has(a.title));
      if (item) { used.add(item.title); return item; }
    }
    const spare = fallback.find(a => !used.has(a.title)) ?? fallback[0];
    used.add(spare.title);
    return spare;
  };

  const evenings = EVENINGS[region];
  return Array.from({ length: days }, (_, i) => ({
    day: i + 1,
    morning: next(),
    afternoon: next(),
    evening: evenings[(i + shuffle) % evenings.length],
  }));
}

export default function TripArchitect() {
  const [step, setStep] = useState(0);
  const [interests, setInterests] = useState<InterestKey[]>([]);
  const [days, setDays] = useState(3);
  const [region, setRegion] = useState<RegionKey | null>(null);
  const [generating, setGenerating] = useState(false);
  const [shuffle, setShuffle] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const plan = useMemo(
    () => (region && interests.length > 0 ? buildPlan(interests, days, region, shuffle) : []),
    [interests, days, region, shuffle],
  );

  const toggleInterest = (key: InterestKey) => {
    setInterests(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]);
  };

  const generate = () => {
    setGenerating(true);
    setRevealed(false);
    setStep(3);
    // Brief synthesis pause so the reveal reads as a considered plan.
    setTimeout(() => { setGenerating(false); setRevealed(true); }, 1100);
  };

  const regenerate = () => {
    setShuffle(s => s + 1);
    setGenerating(true);
    setRevealed(false);
    setTimeout(() => { setGenerating(false); setRevealed(true); }, 700);
  };

  const copyPlan = async () => {
    const regionLabel = REGIONS.find(r => r.key === region)?.label ?? '';
    const lines = [
      `My ${days}-day ${regionLabel} itinerary, built with the Come See Arizona Trip Architect`,
      '',
      ...plan.flatMap(d => [
        `Day ${d.day}:`,
        `  Morning: ${d.morning.title}`,
        `  Afternoon: ${d.afternoon.title}`,
        `  Evening: ${d.evening.title}`,
        '',
      ]),
      'Plan yours at https://comeseearizona.com',
    ];
    try {
      await navigator.clipboard.writeText(lines.join('\n'));
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard unavailable (permissions/insecure context) — button simply doesn't confirm.
    }
  };

  const matchedItinerary = interests.length > 0 ? ITINERARY_LINKS[interests[0]] : undefined;

  return (
    <div className="trip-architect" id="trip-architect">
      <div className="ta-glow" aria-hidden="true" />
      <div className="ta-header">
        <span className="ta-badge"><Sparkles size={14} aria-hidden="true" /> AI Trip Architect</span>
        <h2>Design Your Perfect Arizona Trip</h2>
        <p>Answer three questions and get a personalized, day-by-day itinerary built from local expertise, instantly.</p>
      </div>

      {/* Step indicators */}
      <div className="ta-steps" role="tablist" aria-label="Trip Architect steps">
        {['Interests', 'Length', 'Home Base', 'Your Trip'].map((label, i) => (
          <div key={label} className={`ta-step ${step === i ? 'active' : ''} ${step > i ? 'done' : ''}`}>
            <span className="ta-step-num">{step > i ? <Check size={12} aria-hidden="true" /> : i + 1}</span>
            <span className="ta-step-label">{label}</span>
          </div>
        ))}
      </div>

      {step === 0 && (
        <div className="ta-panel">
          <h3>What draws you to Arizona?</h3>
          <p className="ta-hint">Pick as many as you like.</p>
          <div className="ta-chips">
            {INTERESTS.map(item => (
              <button
                key={item.key}
                className={`ta-chip ${interests.includes(item.key) ? 'selected' : ''}`}
                onClick={() => toggleInterest(item.key)}
                aria-pressed={interests.includes(item.key)}
              >
                <span aria-hidden="true">{item.emoji}</span> {item.label}
              </button>
            ))}
          </div>
          <div className="ta-actions">
            <button className="ta-next" disabled={interests.length === 0} onClick={() => setStep(1)}>
              Continue <ChevronRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="ta-panel">
          <h3>How long is your trip?</h3>
          <div className="ta-cards">
            {LENGTHS.map(len => (
              <button
                key={len.days}
                className={`ta-card ${days === len.days ? 'selected' : ''}`}
                onClick={() => setDays(len.days)}
                aria-pressed={days === len.days}
              >
                <span className="ta-card-title">{len.label}</span>
                <span className="ta-card-sub">{len.sub}</span>
              </button>
            ))}
          </div>
          <div className="ta-actions">
            <button className="ta-back" onClick={() => setStep(0)}><ChevronLeft size={16} aria-hidden="true" /> Back</button>
            <button className="ta-next" onClick={() => setStep(2)}>Continue <ChevronRight size={16} aria-hidden="true" /></button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="ta-panel">
          <h3>Where will you base yourself?</h3>
          <div className="ta-cards ta-cards-wide">
            {REGIONS.map(r => (
              <button
                key={r.key}
                className={`ta-card ${region === r.key ? 'selected' : ''}`}
                onClick={() => setRegion(r.key)}
                aria-pressed={region === r.key}
              >
                <span className="ta-card-title"><MapPin size={14} aria-hidden="true" /> {r.label}</span>
                <span className="ta-card-sub">{r.blurb}</span>
              </button>
            ))}
          </div>
          <div className="ta-actions">
            <button className="ta-back" onClick={() => setStep(1)}><ChevronLeft size={16} aria-hidden="true" /> Back</button>
            <button className="ta-next ta-generate" disabled={!region} onClick={generate}>
              <Sparkles size={16} aria-hidden="true" /> Build My Itinerary
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="ta-panel">
          {generating ? (
            <div className="ta-thinking" role="status" aria-live="polite">
              <div className="ta-orbit" aria-hidden="true"><span /><span /><span /></div>
              <p>Mapping {days} days across {REGIONS.find(r => r.key === region)?.label}…</p>
            </div>
          ) : (
            <div className={`ta-result ${revealed ? 'revealed' : ''}`}>
              <div className="ta-result-head">
                <h3>Your {days}-Day {REGIONS.find(r => r.key === region)?.label} Itinerary</h3>
                <div className="ta-result-tools">
                  <button onClick={regenerate} aria-label="Regenerate itinerary"><RefreshCw size={15} aria-hidden="true" /> Remix</button>
                  <button onClick={copyPlan} aria-label="Copy itinerary to clipboard">
                    {copied ? <><Check size={15} aria-hidden="true" /> Copied</> : <><Copy size={15} aria-hidden="true" /> Copy</>}
                  </button>
                </div>
              </div>

              <p className="ta-season-tip">{region ? seasonTip(region) : ''}</p>

              <div className="ta-days">
                {plan.map(d => (
                  <div key={d.day} className="ta-day" style={{ animationDelay: `${(d.day - 1) * 120}ms` }}>
                    <div className="ta-day-label">Day {d.day}</div>
                    <div className="ta-slots">
                      {[
                        { icon: Sunrise, name: 'Morning', activity: d.morning },
                        { icon: Sun, name: 'Afternoon', activity: d.afternoon },
                        { icon: Moon, name: 'Evening', activity: d.evening },
                      ].map(slot => (
                        <Link key={slot.name} to={slot.activity.href} className="ta-slot">
                          <span className="ta-slot-time"><slot.icon size={14} aria-hidden="true" /> {slot.name}</span>
                          <span className="ta-slot-title">{slot.activity.title}</span>
                          <span className="ta-slot-note">{slot.activity.note}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="ta-footer-links">
                {matchedItinerary && (
                  <Link to={matchedItinerary.href} className="ta-curated-link">
                    Prefer a hand-built plan? Read {matchedItinerary.label} <ChevronRight size={14} aria-hidden="true" />
                  </Link>
                )}
                <button className="ta-restart" onClick={() => { setStep(0); setRevealed(false); }}>
                  Start over
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
