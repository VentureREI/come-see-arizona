import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import { siteConfig } from '../data/siteConfig';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80&auto=format';

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Eat and Drink in Arizona',
  description:
    'Explore Arizona\'s best restaurants, bars, breweries, coffee shops, and food halls. From award-winning Mexican cuisine and fine dining to craft beer and rooftop cocktails.',
  url: 'https://comeandseearizona.com/eat-and-drink',
  publisher: {
    '@type': 'Organization',
    name: 'Come And See Arizona',
    url: 'https://comeandseearizona.com',
  },
};

const FAQ_ITEMS = [
  {
    question: 'What are the best restaurants in Phoenix?',
    answer:
      'Phoenix is home to acclaimed restaurants like Pizzeria Bianco (nationally recognized wood-fired pizza), Barrio Cafe (modern Mexican by Chef Silvana Salcido Esparza), The Gladly (contemporary American), Hana Japanese Eatery, and Citizen Public House. The city also boasts a thriving food truck scene and outstanding Mexican restaurants like Tacos Chiwas and Cocina Madrigal.',
  },
  {
    question: 'Where can I find the best Mexican food in Arizona?',
    answer:
      'Arizona is one of the best states in the country for Mexican food. Standouts include Barrio Cafe and Cocina Madrigal in Phoenix, El Guero Canelo in Tucson (a James Beard Award winner for its Sonoran hot dogs), El Charro Cafe in Tucson (one of the oldest Mexican restaurants in the U.S.), Carolina\'s Mexican Food for flour tortillas, and Tacos Chiwas for Chihuahua-style tacos.',
  },
  {
    question: 'What are the best places to eat in Scottsdale?',
    answer:
      'Scottsdale offers a range of dining from upscale steakhouses to casual brunch spots. Top picks include Cafe Monarch (intimate fine dining), FnB Restaurant (Arizona-sourced ingredients), Steak 44 (one of the best steakhouses in the state), Hash Kitchen (creative brunch), and Mastro\'s City Hall for steaks and seafood.',
  },
  {
    question: 'Does Arizona have good craft beer?',
    answer:
      'Arizona has a thriving craft beer scene. Notable breweries include Arizona Wilderness Brewing (with locations in Gilbert and downtown Phoenix), Wren House Brewing, Huss Brewing, Four Peaks Brewing in Tempe, SanTan Brewing Company in Chandler, and Mother Bunch Brewing. Many breweries offer taprooms with food trucks and live music.',
  },
  {
    question: 'Are there wineries in Arizona?',
    answer:
      'Yes, Arizona has a growing wine industry. The Verde Valley wine trail near Sedona features wineries like Page Springs Cellars, Javelina Leap Vineyard, Oak Creek Vineyards, and Alcantara Vineyards. The Willcox and Sonoita regions in southern Arizona are also known for their vineyards. Maynard James Keenan\'s Merkin Vineyards has a tasting room in Old Town Scottsdale.',
  },
  {
    question: 'What is the best brunch in Phoenix?',
    answer:
      'Phoenix is a brunch paradise. Matt\'s Big Breakfast is a beloved institution, while Hash Kitchen in Scottsdale is famous for its build-your-own Bloody Mary bar. Other top brunch spots include Snooze An AM Eatery, Morning Squeeze, Butters Pancakes, The Henry, Over Easy, and Welcome Diner.',
  },
  {
    question: 'Where are the best rooftop bars in Phoenix?',
    answer:
      'Phoenix and Scottsdale have a growing rooftop bar scene. Popular spots include Lustre Rooftop Bar at Hotel Palomar in downtown Phoenix, Floor 13 Rooftop Bar at Hotel San Carlos, Outrider Rooftop Lounge at the Canopy by Hilton in Tempe, and The Perch Brewery in Chandler which offers elevated views alongside craft beer.',
  },
  {
    question: 'What food halls are worth visiting in Phoenix?',
    answer:
      'Phoenix has embraced the food hall trend. DeSoto Central Market in downtown Phoenix brings together multiple food vendors under one roof. Churchill is a unique container park in the Roosevelt Row arts district featuring rotating local food and drink vendors. The Uptown Farmers Market is a weekend staple, and Queen Creek Olive Mill offers a farm-to-table experience southeast of the city.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

/* ── Restaurant Data ── */

const PHOENIX_RESTAURANTS = [
  { name: "Pizzeria Bianco", location: "Heritage Square, Downtown", description: "Widely considered one of the best pizzerias in the country, Chris Bianco's wood-fired pizza helped put Phoenix on the national food map.", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80" },
  { name: "Barrio Cafe", location: "16th Street, Phoenix", description: "Chef Silvana Salcido Esparza's refined Mexican cuisine has earned national acclaim and James Beard semifinalist recognition.", image: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=800&q=80" },
  { name: "Cocina Madrigal", location: "16th Street, Phoenix", description: "Inventive Mexican dishes with bold flavors and a lively atmosphere that draws crowds every night of the week.", image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?auto=format&fit=crop&w=800&q=80" },
  { name: "Citizen Public House", location: "Camelback Corridor", description: "Known for its gastropub fare and one of the best whiskey lists in the state, with a cozy, inviting atmosphere.", image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80" },
  { name: "Tacos Chiwas", location: "South Phoenix", description: "Authentic Chihuahua-style tacos with handmade tortillas and perfectly seasoned meats that have earned a devoted following.", image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80" },
  { name: "The Gladly", location: "Camelback Corridor", description: "Contemporary American cuisine with a focus on seasonal ingredients in a polished but approachable setting.", image: "https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?auto=format&fit=crop&w=800&q=80" },
  { name: "Hana Japanese Eatery", location: "Central Phoenix", description: "A go-to for fresh, high-quality sushi and Japanese dishes in a no-frills setting that lets the food speak for itself.", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80" },
];

const SCOTTSDALE_RESTAURANTS = [
  { name: "Cafe Monarch", location: "Old Town Scottsdale", description: "A small, prix-fixe restaurant that consistently ranks among the top fine dining experiences in the state with intimate 30-seat dining.", image: "https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?auto=format&fit=crop&w=800&q=80" },
  { name: "FnB", location: "Old Town Scottsdale", description: "Focused on locally sourced Arizona ingredients with a creative, seasonal menu that highlights the state's produce and flavors.", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80" },
  { name: "Steak 44", location: "Camelback Corridor, Scottsdale", description: "One of the most sought-after steakhouses in the Valley, known for its tableside Caesar salad and prime cuts.", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80" },
  { name: "Hash Kitchen", location: "Scottsdale & Arcadia", description: "Famous for its over-the-top brunch experience featuring a massive build-your-own Bloody Mary bar and creative dishes.", image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80" },
  { name: "Mastro's City Hall", location: "Old Town Scottsdale", description: "Upscale steaks and seafood in a vibrant Old Town Scottsdale setting with live entertainment and a polished atmosphere.", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80" },
];

const TUCSON_RESTAURANTS = [
  { name: "El Charro Cafe", location: "Downtown Tucson", description: "Operating since 1922, one of the oldest Mexican restaurants in continuous operation in the United States, famous for its carne seca.", image: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=800&q=80" },
  { name: "Cafe Poca Cosa", location: "Downtown Tucson", description: "Innovative Mexican cuisine that changes daily based on what Chef Suzana Davila finds at the market, a true Tucson original.", image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?auto=format&fit=crop&w=800&q=80" },
  { name: "Bata", location: "Downtown Tucson", description: "A modern take on Tucson's culinary traditions with wood-fired dishes that celebrate the Sonoran Desert's ingredients.", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" },
  { name: "DOWNTOWN Kitchen + Cocktails", location: "Downtown Tucson", description: "James Beard Award-winning chef Janos Wilder showcases Southwestern ingredients in a contemporary, inventive setting.", image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80" },
  { name: "Mi Nidito", location: "South Tucson", description: "A Tucson institution for decades, beloved for its classic Sonoran Mexican plates and generous, hearty portions.", image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80" },
];

const OTHER_CITY_RESTAURANTS = [
  { name: "Worth Takeaway", location: "Mesa", description: "A standout sandwich and breakfast spot that punches well above its weight with creative, chef-quality dishes.", image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80" },
  { name: "Handlebar Pub & Grill", location: "Mesa", description: "Elevated pub food in a welcoming neighborhood setting that has become a local favorite for casual dining.", image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80" },
  { name: "House of Tricks", location: "Tempe", description: "A longtime favorite set in charming historic cottages, serving seasonal American fare in a beautiful garden patio setting.", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" },
  { name: "Joe's Real BBQ", location: "Gilbert", description: "An institution smoking meats over pecan wood in a rustic outdoor setting in Gilbert's Heritage District.", image: "https://images.unsplash.com/photo-1555992336-fb0d29498b13?auto=format&fit=crop&w=800&q=80" },
  { name: "Liberty Market", location: "Gilbert", description: "A bustling cafe and bakery serving breakfast, lunch, and fresh-baked goods in a converted grocery store in the Heritage District.", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80" },
  { name: "Mora Italian", location: "Chandler", description: "Scott Conant's refined Italian cuisine with house-made pastas and wood-fired dishes in downtown Chandler.", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80" },
  { name: "SanTan Brewing", location: "Chandler", description: "Both a popular brewery and a gathering spot with a solid pub menu, anchoring downtown Chandler's dining scene since 2007.", image: "https://images.unsplash.com/photo-1555658636-6e4a36218be7?auto=format&fit=crop&w=800&q=80" },
];

const FINE_DINING = [
  { name: "Binkley's Restaurant", location: "Cave Creek", description: "A tasting-menu experience that rivals the best in the country with meticulously prepared courses featuring seasonal and local ingredients.", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80" },
  { name: "Kai", location: "Wild Horse Pass, Chandler", description: "The only restaurant in Arizona with both AAA Five Diamond and Forbes Five Star ratings. The only Native American fine dining restaurant in the country.", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80" },
  { name: "Quiessence", location: "The Farm at South Mountain", description: "Farm-to-table dining in an idyllic garden setting, with ingredients sourced directly from the surrounding property.", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80" },
  { name: "Elements", location: "Sanctuary Camelback", description: "Stunning Camelback Mountain views alongside a creative, ingredient-driven menu at one of the Valley's most scenic resorts.", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" },
  { name: "Cafe Monarch", location: "Old Town Scottsdale", description: "A four-course prix-fixe experience in an intimate, 30-seat dining room that consistently ranks among the state's best.", image: "https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?auto=format&fit=crop&w=800&q=80" },
  { name: "Lon's at The Hermosa Inn", location: "Paradise Valley", description: "Southwestern-inspired cuisine in a historic hacienda atmosphere surrounded by lush gardens and Camelback views.", image: "https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=800&q=80" },
];

const BREWERIES = [
  { name: "Arizona Wilderness Brewing", location: "Gilbert & Downtown Phoenix", description: "Nationally acclaimed brewery specializing in beers brewed with locally foraged ingredients and Arizona-grown grains.", image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80" },
  { name: "Wren House Brewing", location: "Central Phoenix", description: "Operating out of a converted house, known for its rotating lineup of hop-forward IPAs and rich stouts.", image: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?auto=format&fit=crop&w=800&q=80" },
  { name: "Huss Brewing Co.", location: "Tempe & Scottsdale", description: "Founded by Jeff and Leah Huss, one of the most recognizable craft brands in the state with Scottsdale Blonde as its flagship.", image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80" },
  { name: "SanTan Brewing", location: "Downtown Chandler", description: "A Valley staple since 2007, known for HopShock IPA and MoonJuice in a bustling downtown Chandler taproom.", image: "https://images.unsplash.com/photo-1555658636-6e4a36218be7?auto=format&fit=crop&w=800&q=80" },
  { name: "Four Peaks Brewing", location: "Tempe", description: "One of Arizona's original craft breweries in a historic creamery building, famous for its Kilt Lifter Scottish-style ale.", image: "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?auto=format&fit=crop&w=800&q=80" },
  { name: "Mother Bunch Brewing", location: "Downtown Phoenix", description: "Craft beers paired with wood-fired pizzas in a lively taproom that anchors the downtown Phoenix brewery scene.", image: "https://images.unsplash.com/photo-1584225064785-c62a8b43d148?auto=format&fit=crop&w=800&q=80" },
];

const COFFEE_SHOPS = [
  { name: "Cartel Coffee Lab", location: "Multiple Locations", description: "Pioneer of Arizona's third-wave coffee movement, serving meticulously sourced and roasted beans across the Valley.", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80" },
  { name: "Provision Coffee Bar", location: "Warehouse District, Phoenix", description: "Beautifully designed space focusing on single-origin pour-overs and espresso in a creative neighborhood setting.", image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80" },
  { name: "Press Coffee", location: "Phoenix & Scottsdale", description: "One of the state's largest specialty roasters with cafes across the Valley known for consistent quality.", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80" },
  { name: "Lux Coffee Bar", location: "Central Avenue, Phoenix", description: "A Phoenix institution known for its eclectic atmosphere, strong coffee program, and Central Avenue character.", image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=800&q=80" },
  { name: "Giant Coffee", location: "Coronado Historic District", description: "Minimalist, design-forward cafe that focuses on quality over quantity in one of Phoenix's most charming neighborhoods.", image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80" },
  { name: "Songbird Coffee", location: "South Phoenix", description: "Relaxed neighborhood cafe bringing specialty coffee and a welcoming community vibe to South Phoenix.", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80" },
];

const BRUNCH_SPOTS = [
  { name: "Matt's Big Breakfast", location: "Downtown Phoenix", description: "A Phoenix institution known for cage-free eggs, griddle cakes, and long weekend lines that prove its reputation.", image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80" },
  { name: "Hash Kitchen", location: "Scottsdale & Arcadia", description: "Theatrical brunch featuring a massive build-your-own Bloody Mary bar and creative dishes like churro waffles.", image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80" },
  { name: "Snooze An AM Eatery", location: "Multiple Locations", description: "Inventive pancake flights and creative benedicts served in a fun, colorful atmosphere across multiple Valley locations.", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80" },
  { name: "The Henry", location: "Camelback Corridor", description: "Upscale brunch in a polished setting with a menu spanning avocado toast to fried chicken sandwiches.", image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?auto=format&fit=crop&w=800&q=80" },
  { name: "Welcome Diner", location: "Roosevelt Row", description: "Comfort food with a community-focused spirit on the Roosevelt Row corridor, beloved by locals and artists.", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80" },
  { name: "Over Easy", location: "Arcadia & Downtown", description: "Beloved neighborhood brunch spot with a laid-back vibe and hearty plates that keep regulars coming back.", image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=800&q=80" },
];

const FOOD_HALLS = [
  { name: "DeSoto Central Market", location: "Downtown Phoenix", description: "Communal dining space with multiple vendors offering everything from ramen to tacos to craft cocktails.", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80" },
  { name: "Churchill", location: "Roosevelt Row", description: "Repurposed shipping containers housing rotating local food and drink concepts, supporting small businesses.", image: "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&w=800&q=80" },
  { name: "Uptown Farmers Market", location: "North Central Phoenix", description: "Every Saturday morning, drawing crowds for fresh produce, artisan goods, and prepared foods from local vendors.", image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=800&q=80" },
  { name: "Queen Creek Olive Mill", location: "Queen Creek", description: "Working olive mill with tours, tastings, a marketplace, and farm-to-table restaurant southeast of Phoenix.", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80" },
];

const LATE_NIGHT = [
  { name: "Cornish Pasty Co.", location: "Multiple Locations", description: "Savory hand-held pasties with creative fillings, a favorite among the after-midnight crowd across the Valley.", image: "https://images.unsplash.com/photo-1555992336-fb0d29498b13?auto=format&fit=crop&w=800&q=80" },
  { name: "Lolo's Chicken and Waffles", location: "Central Phoenix", description: "Southern comfort food with signature fried chicken and waffle combinations, open late on weekends.", image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=800&q=80" },
  { name: "Angry Crab Shack", location: "Multiple Locations", description: "Boil-style seafood in a casual, hands-on setting with multiple Valley locations open into the late evening.", image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=800&q=80" },
  { name: "The Duce", location: "Downtown Phoenix", description: "Sprawling indoor-outdoor venue serving comfort food and cocktails into the late hours in a vintage setting.", image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=800&q=80" },
];

const ROOFTOP_BARS = [
  { name: "Lustre Rooftop Bar", location: "Hotel Palomar, Downtown Phoenix", description: "One of the original rooftop spots offering a pool-deck atmosphere and downtown skyline views.", image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80" },
  { name: "Floor 13 Rooftop Bar", location: "Hotel San Carlos, Downtown", description: "Panoramic views of downtown Phoenix from the historic Hotel San Carlos, with craft cocktails and small plates.", image: "https://images.unsplash.com/photo-1575444758702-4a6b9222c016?auto=format&fit=crop&w=800&q=80" },
  { name: "Outrider Rooftop Lounge", location: "Canopy by Hilton, Tempe", description: "Overlooking Tempe Town Lake with craft cocktails and small plates in a contemporary setting.", image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80" },
  { name: "The Perch Brewery", location: "Chandler", description: "Craft beer meets elevated views in a family-friendly rooftop setting in downtown Chandler.", image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80" },
];

/* ── Reusable Components ── */

function PlaceCard({ name, location, description, image }: { name: string; location: string; description: string; image: string }) {
  return (
    <div style={{ borderRadius: 16, overflow: 'hidden', background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', transition: 'all 0.2s' }}
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

/* ── City tab mapping ── */

const CITY_TABS: { key: string; label: string; data: typeof PHOENIX_RESTAURANTS }[] = [
  { key: 'phoenix', label: 'Phoenix', data: PHOENIX_RESTAURANTS },
  { key: 'scottsdale', label: 'Scottsdale', data: SCOTTSDALE_RESTAURANTS },
  { key: 'tucson', label: 'Tucson', data: TUCSON_RESTAURANTS },
  { key: 'other', label: 'More Cities', data: OTHER_CITY_RESTAURANTS },
];

/* ── Page ── */

export default function EatAndDrinkPage() {
  const [activeCity, setActiveCity] = useState('phoenix');
  const activeRestaurants = CITY_TABS.find(t => t.key === activeCity)?.data ?? PHOENIX_RESTAURANTS;

  return (
    <>
      <SEOHead
        title="Eat and Drink in Arizona - Best Restaurants, Bars & Food | Come And See Arizona"
        description="Explore Arizona's best restaurants, bars, breweries, coffee shops, and food halls. From award-winning Mexican cuisine and fine dining to craft beer and rooftop cocktails."
        canonical="/eat-and-drink"
        schema={[webPageSchema, faqSchema]}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Eat and Drink', url: '/eat-and-drink' },
        ]}
      />

      {/* Hero Section */}
      <div className="explore-hero">
        <div className="explore-hero-bg">
          <img
            src={HERO_IMAGE}
            alt="Beautifully plated dish at an Arizona restaurant showcasing the state's vibrant dining scene"
            className="card-img"
          />
        </div>
        <div className="explore-hero-overlay" />
        <div className="explore-hero-content">
          <div className="breadcrumb-hero">
            <Link to="/">Home</Link> &nbsp;&gt;&nbsp; Eat and Drink
          </div>
          <h1>Eat and Drink in Arizona</h1>
          <p className="hero-subtitle">
            From James Beard Award-winning Mexican cuisine and Sonoran-inspired fine dining to craft breweries, rooftop cocktails, and thriving food halls - Arizona's culinary scene is as bold and diverse as its landscape.
          </p>
        </div>
      </div>

      {/* 1. Intro */}
      <div style={{ background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.8, color: '#333' }}>
            Arizona has evolved into one of the most exciting food destinations in the American Southwest. The state's culinary identity draws from its deep Mexican and Native American roots, its access to fresh Sonoran Desert ingredients, and a new generation of chefs who are redefining what Southwestern cuisine can be. Whether you are looking for a casual taco spot, a world-class fine dining experience, a craft brewery taproom, or a sun-drenched patio brunch, Arizona delivers. The Phoenix metropolitan area alone has seen an explosion of chef-driven restaurants, creative food halls, and nationally recognized dining experiences over the past decade. Beyond the Valley, Tucson holds a UNESCO City of Gastronomy designation - the first in the United States - and the Verde Valley wine trail has put Arizona on the map for wine lovers. This guide covers the best of what the state has to offer for food and drink.
          </p>
        </div>
      </div>

      {/* 2. Best Restaurants by City */}
      <div style={{ background: '#FAFAFA', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading>Best Restaurants by City</SectionHeading>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 32 }}>
            Arizona's dining scene is spread across the entire Valley and beyond. Each city brings its own flavor, from the chef-driven restaurants of downtown Phoenix to the upscale steakhouses of Scottsdale and the heritage Mexican cuisine of Tucson. Here is a city-by-city breakdown of the restaurants worth seeking out.
          </p>

          {/* City Tabs */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const, marginBottom: 32, overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
            {CITY_TABS.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveCity(tab.key)}
                style={{
                  borderRadius: 24,
                  padding: '10px 24px',
                  border: '2px solid #D32F2F',
                  background: activeCity === tab.key ? '#D32F2F' : 'white',
                  color: activeCity === tab.key ? 'white' : '#D32F2F',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  fontWeight: 600,
                  transition: 'all 0.2s',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Restaurant Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 24 }}>
            {activeRestaurants.map(r => (
              <PlaceCard key={r.name} {...r} />
            ))}
          </div>
        </div>
      </div>

      {/* 3. Mexican and Southwestern Cuisine */}
      <div style={{ background: '#fff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading>Mexican and Southwestern Cuisine</SectionHeading>
          <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' as const, alignItems: 'flex-start' }}>
            <div style={{ flex: '1 1 400px', minWidth: 300 }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 20 }}>
                Mexican and Southwestern cuisine is the beating heart of Arizona's food identity. The state sits at the crossroads of Sonoran, Chihuahuan, and broader Mexican culinary traditions, and its proximity to the border means ingredients and techniques flow freely. <strong>Barrio Cafe</strong>, led by Chef Silvana Salcido Esparza, has been a torchbearer for elevated Mexican cuisine in Phoenix for over two decades, earning a James Beard semifinalist nod and national recognition for dishes like the guacamole tableside and cochinita pibil. <strong>Cocina Madrigal</strong> on 16th Street is known for its bold, inventive Mexican fare and colorful atmosphere. <strong>Los Sombreros</strong> in Scottsdale serves refined Oaxacan and central Mexican cuisine in a warm, hacienda-style setting.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 20 }}>
                <strong>Carolina's Mexican Food</strong> is a Phoenix institution beloved for its paper-thin flour tortillas and no-frills breakfast burritos. <strong>Tacos Chiwas</strong> brings the flavors of Chihuahua, Mexico to the Valley with handmade tortillas and perfectly seasoned meats. <strong>El Chorro</strong>, nestled against the base of Camelback Mountain, offers Southwestern-inspired fine dining in one of the most scenic settings in the Valley. In Tucson, <strong>El Guero Canelo</strong> earned a James Beard Award for its Sonoran hot dogs wrapped in bacon and topped with pinto beans, and <strong>Mi Nidito</strong> has served generations of Tucsonans with its hearty, traditional plates.
              </p>
            </div>
            <div style={{ flex: '0 1 380px', minWidth: 280 }}>
              <img
                src="https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=800&q=80"
                alt="Vibrant Mexican cuisine in Arizona"
                style={{ width: '100%', borderRadius: 16, objectFit: 'cover' as const }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 4. Fine Dining */}
      <div style={{ background: '#FAFAFA', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading>Fine Dining</SectionHeading>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 32 }}>
            Arizona's fine dining scene has matured into one of the most impressive in the Southwest. From tasting menus in Cave Creek to Native American-inspired cuisine at Wild Horse Pass, the state offers world-class culinary experiences in stunning settings.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 24 }}>
            {FINE_DINING.map(r => (
              <PlaceCard key={r.name} {...r} />
            ))}
          </div>
        </div>
      </div>

      {/* 5. Rooftop Bars */}
      <div style={{ background: '#fff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading>Rooftop Bars and Lounges</SectionHeading>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 32 }}>
            Arizona's warm climate and stunning sunsets make it a natural fit for rooftop dining and drinking. The Valley's rooftop bar scene has grown significantly in recent years, with options ranging from laid-back brewery patios to upscale cocktail lounges.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 24, marginBottom: 32 }}>
            {ROOFTOP_BARS.map(r => (
              <PlaceCard key={r.name} {...r} />
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link
              to="/articles/phoenix-best-rooftop-bars"
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
              }}
            >
              Read the Full Rooftop Bars Guide
            </Link>
          </div>
        </div>
      </div>

      {/* 6. Craft Breweries */}
      <div style={{ background: '#FAFAFA', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading>Craft Breweries</SectionHeading>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 32 }}>
            Arizona's craft beer scene has exploded over the past decade, with dozens of independent breweries operating across the Valley and beyond. From locally foraged ingredients to historic creamery buildings, each brewery brings its own character.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 24 }}>
            {BREWERIES.map(r => (
              <PlaceCard key={r.name} {...r} />
            ))}
          </div>
        </div>
      </div>

      {/* 7. Wine Country */}
      <div style={{ background: '#fff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading>Wine Bars and Arizona Wine Country</SectionHeading>
          <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' as const, alignItems: 'flex-start' }}>
            <div style={{ flex: '0 1 380px', minWidth: 280 }}>
              <img
                src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80"
                alt="Arizona wine country vineyard"
                style={{ width: '100%', borderRadius: 16, objectFit: 'cover' as const }}
                loading="lazy"
              />
            </div>
            <div style={{ flex: '1 1 400px', minWidth: 300 }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 20 }}>
                Arizona's wine industry has grown remarkably, and the state now produces award-winning wines across several distinct regions. The <strong>Verde Valley wine trail</strong> near Sedona is the most popular destination for wine lovers, with tasting rooms clustered around the towns of Cornville, Page Springs, and Cottonwood. <strong>Page Springs Cellars</strong> is the largest and one of the most acclaimed, producing Rhone-style wines with grapes grown in the region's unique high-desert terroir. <strong>Javelina Leap Vineyard &amp; Winery</strong> offers a scenic tasting experience along Oak Creek. <strong>Oak Creek Vineyards &amp; Winery</strong> and <strong>Alcantara Vineyards</strong> round out the trail with beautiful grounds and well-crafted wines.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 20 }}>
                In the Valley, <strong>Merkin Vineyards Tasting Room</strong> in Old Town Scottsdale - owned by musician Maynard James Keenan of Tool - brings Verde Valley wines to the city. <strong>LDV Winery</strong> has a Scottsdale tasting room showcasing wines from its estate vineyards in the Willcox AVA. The <strong>Willcox</strong> and <strong>Sonoita</strong> wine regions in southern Arizona are home to a growing number of vineyards, benefiting from high elevation, warm days, and cool nights that produce excellent varietals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 8. Coffee Culture */}
      <div style={{ background: '#FAFAFA', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading>Coffee Culture</SectionHeading>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 32 }}>
            Arizona's specialty coffee scene is thriving, with locally owned roasters and cafes that rival the best on the West Coast. From third-wave pioneers to minimalist design-forward spaces, the Valley's coffee culture has come into its own.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 24 }}>
            {COFFEE_SHOPS.map(r => (
              <PlaceCard key={r.name} {...r} />
            ))}
          </div>
        </div>
      </div>

      {/* 9. Food Halls */}
      <div style={{ background: '#fff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading>Food Halls and Markets</SectionHeading>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 32 }}>
            The food hall movement has taken hold in Arizona, giving local chefs and food entrepreneurs a platform to showcase their concepts in communal, vibrant spaces.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 24 }}>
            {FOOD_HALLS.map(r => (
              <PlaceCard key={r.name} {...r} />
            ))}
          </div>
        </div>
      </div>

      {/* 10. Best Brunch */}
      <div style={{ background: '#FAFAFA', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading>Best Brunch Spots</SectionHeading>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 32 }}>
            Brunch is practically a religion in Arizona, fueled by the state's year-round patio weather and a deep bench of dedicated breakfast and brunch restaurants.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 24 }}>
            {BRUNCH_SPOTS.map(r => (
              <PlaceCard key={r.name} {...r} />
            ))}
          </div>
        </div>
      </div>

      {/* 11. Late Night */}
      <div style={{ background: '#fff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading>Late Night Eats</SectionHeading>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 32 }}>
            When the sun goes down and the restaurants close, Arizona still has options for those craving a late-night meal.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 24 }}>
            {LATE_NIGHT.map(r => (
              <PlaceCard key={r.name} {...r} />
            ))}
          </div>
        </div>
      </div>

      {/* 12. Venture REI */}
      <div style={{ background: '#FAF5F0', padding: '64px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 700, color: '#1A1A1A', marginBottom: 16 }}>
            Love Arizona's Food Scene? Make It Your Neighborhood.
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 20 }}>
            Many people who visit Arizona fall in love with the food and decide to make the state home. Whether you want to live within walking distance of the restaurants in downtown Phoenix, near the craft breweries of Gilbert's Heritage District, or close to the brunch spots of Arcadia, <strong>{siteConfig.brokerageName}</strong> can help you find the right home in the right neighborhood. <strong>{siteConfig.leaderName}</strong>, with {siteConfig.leaderCredential}, specializes in matching buyers with communities that fit their lifestyle - including proximity to the dining, nightlife, and culinary experiences that make Arizona special.
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
            Explore Arizona
          </Link>
        </div>
      </div>

      {/* 13. FAQ */}
      <div style={{ background: '#FAFAFA', padding: '64px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div className="explore-faq-section">
            <h2 className="explore-faq-title">Frequently Asked Questions</h2>
            {FAQ_ITEMS.map((faq, i) => (
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
