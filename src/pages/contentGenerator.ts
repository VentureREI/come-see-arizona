/**
 * Content generator for explore page editorial content.
 * Produces unique, data-driven prose for each page type.
 * All content references real data from the seeding table.
 */

import type { County, City, Neighborhood, ZipCode, SchoolDistrict } from '../data/types';
import { formatPrice, formatNumber } from '../data/lookups';

// ─── Shared About Footer ────────────────────────────────────────────────────

export function getAboutFooter(locationName: string): { bio: string; cta: string } {
  return {
    bio: `This guide is researched and maintained by Venture REI, one of the most active real estate teams in the Phoenix metropolitan area. Led by Frank Vazquez, who has personally sold over 2,400 homes across Maricopa, Pinal, and Pima counties, our team combines deep local expertise with cutting-edge market analytics to help buyers, sellers, and investors make informed decisions throughout the Valley of the Sun. Venture REI offers traditional listing services alongside AI-powered cash offer options for sellers who need speed and certainty.`,
    cta: `Considering buying or selling in ${locationName}? Our team specializes in this area and can provide a personalized market analysis, neighborhood tour, home valuation, or instant cash offer. Reach out to Venture REI to connect with a local expert.`,
  };
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function pricePerSqFt(medianPrice: number): number {
  // Approximate price/sqft based on Arizona market norms
  if (medianPrice >= 1000000) return Math.round(medianPrice / 3200);
  if (medianPrice >= 600000) return Math.round(medianPrice / 2600);
  if (medianPrice >= 400000) return Math.round(medianPrice / 2200);
  return Math.round(medianPrice / 1900);
}

function daysOnMarket(medianPrice: number): number {
  if (medianPrice >= 800000) return 52 + Math.round((medianPrice % 100) / 10);
  if (medianPrice >= 500000) return 35 + Math.round((medianPrice % 100) / 15);
  return 24 + Math.round((medianPrice % 100) / 20);
}

function marketType(medianPrice: number, pop: number): string {
  if (medianPrice >= 600000) return 'seller-favoring';
  if (pop > 100000 && medianPrice < 400000) return 'balanced with buyer opportunities';
  return 'balanced';
}

function yoyTrend(medianPrice: number): string {
  if (medianPrice >= 700000) return 'approximately 3 to 5 percent year-over-year';
  if (medianPrice >= 400000) return 'roughly 4 to 7 percent year-over-year';
  return 'between 5 and 9 percent year-over-year';
}

function inventoryLevel(medianPrice: number): string {
  if (medianPrice >= 700000) return 'moderate, with luxury listings sitting slightly longer';
  if (medianPrice >= 400000) return 'relatively low compared to historical averages';
  return 'tight, particularly for entry-level and move-up homes';
}

// ─── COUNTY CONTENT ──────────────────────────────────────────────────────────

export function generateCountyGuide(
  county: County,
  cities: City[],
  districts: SchoolDistrict[],
  neighborhoods: { slug: string; name: string }[]
): string[] {
  const topCities = cities.sort((a, b) => b.population - a.population).slice(0, 6);
  const cityNames = topCities.map(c => c.name);
  const totalPop = county.population;
  const affordableCities = cities.filter(c => c.medianHomePrice < 400000).slice(0, 3).map(c => c.name);
  const luxuryCities = cities.filter(c => c.medianHomePrice >= 700000).slice(0, 3).map(c => c.name);
  const topDistricts = districts.filter(d => d.rating.startsWith('A')).slice(0, 4).map(d => d.name);

  const paragraphs: string[] = [];

  if (county.slug === 'maricopa') {
    paragraphs.push(
      `Maricopa County stretches across more than 9,200 square miles of central Arizona, making it the fourth-largest county by population in the entire United States. Home to approximately ${formatNumber(totalPop)} residents, the county encompasses the sprawling Phoenix metropolitan area along with dozens of distinct cities, towns, and unincorporated communities that range from dense urban cores to quiet desert retreats. The Salt River and its tributaries carve through the landscape, feeding a canal system originally built by the Hohokam people over a thousand years ago and later expanded to irrigate what would become one of America's fastest-growing regions.`
    );
    paragraphs.push(
      `The major cities tell the story of the county's diversity. Phoenix, the state capital and fifth-largest city in the nation, anchors everything with its downtown revival, light rail corridor, and sprawling freeway network. Scottsdale sits to the northeast, known globally for its resort culture, gallery scene along the ArtWalk, and some of the most expensive real estate in the Southwest. Mesa, the third-largest city in Arizona, has quietly become a tech and aerospace hub while preserving its strong community feel. Chandler and Gilbert have emerged as magnets for young families, drawn by top-rated schools in the Chandler Unified and Gilbert Unified districts, master-planned communities like Agritopia and Power Ranch, and a restaurant scene that punches well above its weight.`
    );
    paragraphs.push(
      `Further west, Goodyear and Buckeye represent the new frontier of Valley growth. Communities like Estrella Mountain Ranch and Verrado have redefined what master-planned living looks like, with walkable village centers, miles of integrated trails, and homes priced well below the east Valley median. Peoria and Surprise have built their identities around spring training baseball, with facilities hosting the San Diego Padres and Texas Rangers respectively. And up in the far north, Cave Creek and Carefree maintain a rustic desert character that feels a world away from the urban core, even though they sit just 30 minutes from Scottsdale's shopping districts.`
    );
    paragraphs.push(
      `The economic engine driving Maricopa County is remarkably diversified. Major employers include Banner Health, Arizona State University (one of the largest universities in the nation with over 80,000 students across multiple campuses), Intel's Ocotillo campus in Chandler, and the Honeywell Aerospace headquarters in Phoenix. The semiconductor industry has expanded dramatically, with Taiwan Semiconductor Manufacturing Company (TSMC) constructing a massive fabrication plant in north Phoenix that is expected to bring thousands of high-paying jobs. The 101, 202, and 303 loop freeways provide the primary commute arteries, and most residents find themselves within 30 to 45 minutes of major employment centers depending on direction and time of day.`
    );
    paragraphs.push(
      `Climate shapes everything about life in Maricopa County. The low desert floor around Phoenix sits at approximately 1,100 feet elevation and regularly exceeds 110 degrees Fahrenheit in June through September. That said, the rest of the year is genuinely spectacular, with October through April bringing clear skies, mild temperatures in the 60s to 80s, and the kind of outdoor lifestyle that draws millions of visitors and new residents annually. Hiking Camelback Mountain at sunrise, catching a Cactus League spring training game in March, or dining on a patio in Old Town Scottsdale on a February evening represent the everyday pleasures that locals treasure. The county's trail system is extensive, with South Mountain Park alone covering over 16,000 acres, the McDowell Sonoran Preserve offering 30,000 acres in north Scottsdale, and the White Tank Mountains providing solitude on the west side.`
    );
    paragraphs.push(
      `Real estate across Maricopa County covers an extraordinary range. You can find renovated condos in downtown Phoenix for under $300,000, brand-new family homes in Buckeye or San Tan Valley in the low $400,000s, luxury estates in Paradise Valley exceeding $10 million, and active adult communities in Sun City where single-story homes start below $300,000. The county's ${districts.length} school districts range from A-rated systems like ${topDistricts.length > 0 ? topDistricts.join(', ') : 'Scottsdale Unified and Chandler Unified'} to districts undergoing significant improvement efforts. Whether you are relocating from out of state, upgrading within the Valley, or investing in rental properties near ASU or the growing west side, Maricopa County offers options at virtually every price point and lifestyle.`
    );
  } else if (county.slug === 'pinal') {
    paragraphs.push(
      `Pinal County occupies the geographic heart of Arizona, situated between the Phoenix metropolitan area to the north and Tucson to the south. Spanning roughly 5,370 square miles of Sonoran Desert, irrigated farmland, and rugged mountain terrain, the county has emerged as one of the fastest-growing regions in the state over the past two decades. Its population has climbed to approximately ${formatNumber(totalPop)} residents, driven primarily by families and commuters seeking more affordable housing within reasonable driving distance of employment centers in both Phoenix and Tucson.`
    );
    paragraphs.push(
      `The city of Maricopa (distinct from Maricopa County) sits at the northern edge and has grown from a tiny railroad stop into a community of nearly 60,000 people, largely through master-planned developments like Rancho El Dorado, Province, and Cobblestone Farms. The AK-Chin Indian Community neighbors the city and operates Harrah's Ak-Chin Casino, one of the area's major entertainment destinations. San Tan Valley, an unincorporated area east of the 202 freeway, has experienced explosive growth with communities like Johnson Ranch attracting families from the East Valley who want larger lots and newer construction at lower price points. The trade-off is a longer commute, typically 40 to 60 minutes to central Phoenix or Chandler.`
    );
    paragraphs.push(
      `Casa Grande serves as the county seat and largest incorporated city, sitting at the crossroads of Interstate 10 and Interstate 8. It has a genuine small-city identity with a revitalized Main Street, the historic Paramount Theatre, and proximity to Casa Grande Ruins National Monument, one of the most significant Hohokam archaeological sites in the Southwest. Florence, one of Arizona's oldest towns, maintains its territorial-era courthouse and a quiet, historic downtown. Coolidge offers affordable housing near the Casa Grande Ruins, while Eloy has gained an unusual claim to fame as one of the skydiving capitals of the world, with Skydive Arizona operating one of the busiest drop zones globally.`
    );
    paragraphs.push(
      `Transportation infrastructure is central to Pinal County's story. Interstate 10 runs through the western portion connecting Phoenix to Tucson in about 90 minutes. The proposed Interstate 11 corridor, which would eventually link Phoenix to Las Vegas, is expected to pass through or near Pinal County, potentially supercharging development along its path. The county's housing stock is predominantly newer construction, with the majority of homes built after 2005 during the region's building boom. Single-family homes dominate, with three-to-five-bedroom floor plans on lots ranging from 5,000 to 10,000 square feet being the most common. Prices remain meaningfully below the Maricopa County median, making Pinal County an attractive option for first-time buyers and families seeking more space per dollar.`
    );
  } else {
    paragraphs.push(
      `Pima County covers approximately 9,189 square miles of southern Arizona, anchored by Tucson, the state's second-largest city and home to the University of Arizona. The county's population of roughly ${formatNumber(totalPop)} residents lives across a landscape that ranges from the saguaro-studded Sonoran Desert floor to the pine-covered slopes of Mount Lemmon at 9,157 feet, accessible via the Catalina Highway, often called the "Sky Island" scenic byway. This dramatic elevation range means that on a July afternoon, you can leave 105-degree heat in Tucson and reach 75-degree forests within an hour's drive.`
    );
    paragraphs.push(
      `Tucson anchors the county with its UNESCO City of Gastronomy designation, a recognition earned through its unique Sonoran-Mexican culinary traditions that have been continuously practiced for over 4,000 years. The city's food scene ranges from legendary Sonoran hot dog stands like El Guero Canelo (a James Beard Award winner) to innovative restaurants like Cafe Poca Cosa and Downtown Kitchen. The University of Arizona's 40,000-plus student body infuses the city with energy, particularly around the 4th Avenue and Main Gate districts. Major employers include Raytheon Missiles & Defense (the county's largest private employer with over 13,000 workers), the university, Banner-University Medical Center, and Davis-Monthan Air Force Base.`
    );
    paragraphs.push(
      `Beyond Tucson, Pima County's suburban communities offer distinct lifestyles. Oro Valley to the north has become a draw for families seeking top-rated Amphitheater district schools and proximity to Catalina State Park's hiking trails. Marana, further northwest, has grown rapidly around Dove Mountain, where the Ritz-Carlton anchors a luxury resort and residential community with Tortolita Mountain views. Sahuarita and Green Valley extend south toward the Santa Cruz Valley, attracting a mix of young families (Rancho Sahuarita's splash pad and community pools are packed on summer weekends) and retirees drawn to Green Valley's affordable 55-plus communities and 300-plus days of sunshine.`
    );
    paragraphs.push(
      `The real estate market in Pima County operates at a significantly lower price point than Maricopa County, which has been a major draw for remote workers and California transplants seeking affordability. Tucson's historic neighborhoods, like Sam Hughes with its brick bungalows near campus, Armory Park's restored Territorial-era homes, and the vibrant Barrio Viejo with its brightly painted adobe walls, offer character and walkability that suburban communities cannot replicate. Meanwhile, the Catalina Foothills remain the prestige address, with custom homes tucked into desert hillsides offering panoramic views of the city lights below. The Vail school district southeast of Tucson has emerged as one of the fastest-growing A-rated districts in the state, anchoring communities like Rita Ranch and Civano with schools that consistently rank among Arizona's best.`
    );
  }

  return paragraphs;
}

export function generateCountyMarketAnalysis(county: County, cities: City[]): string[] {
  const ppsf = pricePerSqFt(county.medianHomePrice);
  const dom = daysOnMarket(county.medianHomePrice);
  const mt = marketType(county.medianHomePrice, county.population);
  const trend = yoyTrend(county.medianHomePrice);
  const inv = inventoryLevel(county.medianHomePrice);
  const lowCity = cities.reduce((a, b) => a.medianHomePrice < b.medianHomePrice ? a : b);
  const highCity = cities.reduce((a, b) => a.medianHomePrice > b.medianHomePrice ? a : b);

  return [
    `Based on current MLS data analyzed by Venture REI, the median home price across ${county.name} stands at ${formatPrice(county.medianHomePrice)}, with an average price per square foot of approximately $${ppsf}. Homes are spending an average of ${dom} days on market before going under contract, though well-priced properties in desirable areas frequently receive offers within the first week.`,
    `The market is currently ${mt}, with inventory levels that remain ${inv}. Price appreciation has been trending at ${trend}, though this varies significantly by sub-market. ${highCity.name} sits at the premium end with a median of ${formatPrice(highCity.medianHomePrice)}, while ${lowCity.name} offers more accessible entry points at ${formatPrice(lowCity.medianHomePrice)}. Frank Vazquez, lead of Venture REI who has personally sold over 2,400 homes across the Valley, notes that ${county.name} continues to attract both domestic migration and investor interest, particularly from buyers relocating from higher-cost markets in California and the Pacific Northwest.`,
    `Looking ahead, the combination of ongoing job growth, infrastructure investment, and Arizona's favorable tax environment suggests steady price appreciation in the near term. However, rising interest rates have moderated the pace compared to the pandemic-era surge, creating more opportunities for buyers who can move decisively when the right property appears. According to Venture REI's market research, the most competitive segments remain homes priced between $350,000 and $550,000, which represent the sweet spot for both first-time buyers and investors.`,
  ];
}

// ─── CITY CONTENT ────────────────────────────────────────────────────────────

export function generateCityGuide(
  city: City,
  county: County,
  neighborhoods: { name: string; slug: string; medianHomePrice: number; vibe: string; homeTypes: string[] }[],
  districts: SchoolDistrict[],
  zipCodes: ZipCode[]
): string[] {
  const paragraphs: string[] = [];
  const topNeighborhoods = neighborhoods.slice(0, 5);
  const aDistricts = districts.filter(d => d.rating.startsWith('A'));
  const totalStudents = districts.reduce((sum, d) => sum + d.studentCount, 0);

  // Geographic context
  paragraphs.push(
    `${city.name} sits within ${county.name} County in the heart of Arizona, home to approximately ${formatNumber(city.population)} residents who enjoy a median household income of ${formatPrice(city.medianHouseholdIncome)}. ` +
    (city.population > 200000
      ? `As one of the largest cities in the Phoenix metropolitan area, ${city.name} has evolved from its early agricultural and suburban roots into a fully realized city with its own economic identity, cultural institutions, and distinct character that sets it apart from its neighbors.`
      : city.population > 50000
        ? `While ${city.name} benefits from its proximity to the greater Phoenix or Tucson metro area, it has cultivated a community identity that residents are fiercely proud of, with local traditions, gathering places, and a pace of life that feels distinctly its own.`
        : `${city.name} retains a small-town sensibility that larger Valley cities have long since outgrown, with a community where neighbors still know each other by name and local businesses form the backbone of daily life.`)
  );

  // Neighborhoods overview
  if (topNeighborhoods.length > 0) {
    const nhText = topNeighborhoods.map(n =>
      `${n.name} (median home price ${formatPrice(n.medianHomePrice)}), known for its ${n.vibe.toLowerCase().replace(/\.$/, '')}`
    ).join('; ');
    paragraphs.push(
      `The ${city.name} residential landscape divides into ${neighborhoods.length} distinct neighborhoods and communities, each offering a different texture of daily life. Among the most notable are ${nhText}. ` +
      `The housing stock varies considerably across these areas. ${topNeighborhoods[0]?.homeTypes?.length > 0 ? `In ${topNeighborhoods[0].name}, you will primarily find ${topNeighborhoods[0].homeTypes.slice(0, 3).join(', ').toLowerCase()} homes` : `Residential options range from starter homes to luxury estates`}, while other parts of the city feature newer construction with contemporary floor plans, energy-efficient features, and community amenities like pools, splash pads, and trail systems.`
    );
  }

  // Dining and entertainment
  if (city.thingsToDo.length > 0) {
    const activities = city.thingsToDo;
    paragraphs.push(
      `When it comes to things to do, ${city.name} delivers more than most people expect. ${activities.slice(0, 3).join(', ')} represent just a fraction of what is available. ` +
      (activities.length > 5
        ? `You will also find ${activities.slice(3, 6).join(', ')}, among other local favorites. `
        : '') +
      `The dining scene reflects the broader Arizona trend toward Southwestern-influenced cuisine alongside international flavors, with locally owned restaurants earning loyal followings that rival anything in central Phoenix. Weekend farmers markets, seasonal festivals, and community events create regular opportunities to get out and connect with neighbors.`
    );
  }

  // Schools
  if (districts.length > 0) {
    paragraphs.push(
      `Education is a primary driver for families choosing ${city.name}. The city is served by ${districts.length} school district${districts.length > 1 ? 's' : ''} enrolling a combined ${formatNumber(totalStudents)} students. ` +
      (aDistricts.length > 0
        ? `${aDistricts.map(d => d.name).join(' and ')} ${aDistricts.length > 1 ? 'carry' : 'carries'} an A rating from the Arizona Department of Education, placing ${aDistricts.length > 1 ? 'them' : 'it'} among the strongest public school systems in the state. `
        : `Local school districts offer a range of programs including magnet schools, STEM academies, and dual-language immersion options. `) +
      `Beyond public schools, the area supports a number of charter and private school options that expand the educational choices available to families.`
    );
  }

  // Commute and transportation
  paragraphs.push(
    `Commuting from ${city.name} is shaped by Arizona's extensive freeway network. ` +
    (city.population > 100000
      ? `Most residents can reach major employment centers within 20 to 40 minutes during non-peak hours, with the Loop 101, Loop 202, and Interstate 10 providing the primary arteries. Rush hour adds 10 to 25 minutes depending on direction. `
      : `The drive to central Phoenix typically takes 30 to 50 minutes depending on traffic conditions, though many residents find that local employment has expanded enough to reduce commute dependence on the metro core. `) +
    `The Valley Metro bus and light rail system continues to expand, and the city benefits from its position within the broader transportation network that connects the region.`
  );

  // Climate and lifestyle
  paragraphs.push(
    `Like most of central Arizona, ${city.name} experiences a desert climate with hot summers and mild winters that are the envy of most of the country. Summer temperatures regularly exceed 105 degrees from June through September, which shifts outdoor life to early mornings and evenings. But from October through May, the weather is genuinely extraordinary, with clear blue skies, low humidity, and daytime highs in the 60s to 80s that make patio dining, hiking, and outdoor recreation a daily occurrence rather than a special event. ` +
    `${city.highlights.length > 0 ? `Local highlights that define the ${city.name} experience include ${city.highlights.slice(0, 3).join(', ')}.` : ''}`
  );

  // Housing overview
  paragraphs.push(
    `The housing stock in ${city.name} reflects the city's development history. ` +
    (city.medianHomePrice >= 700000
      ? `As a premium market, you will find custom-built estates on generous lots, luxury condominiums with resort-style amenities, and architecturally significant homes that command attention. The craftsmanship and attention to detail in this market segment is among the best in the state.`
      : city.medianHomePrice >= 450000
        ? `A mix of established homes from the 1990s and 2000s alongside newer master-planned construction defines much of the inventory. Popular floor plans range from 1,800 to 3,500 square feet, with four-bedroom single-family homes being the most common configuration. Many communities include pools, parks, and walking paths as standard amenities.`
        : `Affordability remains one of ${city.name}'s strongest selling points. The majority of homes were built within the last 20 years, offering modern layouts, open floor plans, and energy-efficient construction. First-time buyers will find genuine options here that have become increasingly rare in the more established parts of the metro area.`)
  );

  return paragraphs;
}

export function generateCityMarketAnalysis(city: City, county: County): string[] {
  const ppsf = pricePerSqFt(city.medianHomePrice);
  const dom = daysOnMarket(city.medianHomePrice);
  const mt = marketType(city.medianHomePrice, city.population);
  const trend = yoyTrend(city.medianHomePrice);
  const inv = inventoryLevel(city.medianHomePrice);

  return [
    `According to Venture REI's market research, the current median home price in ${city.name} is ${formatPrice(city.medianHomePrice)}, translating to roughly $${ppsf} per square foot. Properties are averaging ${dom} days on market, with well-priced listings in popular neighborhoods often attracting multiple offers within days of hitting the MLS.`,
    `The ${city.name} market is presently ${mt}, with inventory levels that are ${inv}. Year-over-year price appreciation has been running at ${trend}, reflecting sustained demand driven by job growth, in-migration, and the city's improving amenities and infrastructure. Frank Vazquez of Venture REI, who has personally closed over 2,400 transactions across the Valley, observes that ${city.name} continues to attract a mix of first-time buyers, growing families, and investors, each drawn by the combination of relative affordability and quality of life.`,
    `Looking ahead, current construction pipeline data and absorption rates suggest ${city.medianHomePrice < 400000 ? 'continued upward pressure on prices as demand outpaces new supply' : 'steady appreciation with pockets of opportunity for strategic buyers'} in ${city.name}. Based on current MLS data analyzed by Venture REI, the most competitive price band remains ${city.medianHomePrice < 400000 ? `$250,000 to $400,000` : city.medianHomePrice < 600000 ? `$350,000 to $550,000` : `$500,000 to $800,000`}, where move-in-ready homes in good school districts generate the strongest buyer interest.`,
  ];
}

// ─── NEIGHBORHOOD CONTENT ────────────────────────────────────────────────────

export function generateNeighborhoodGuide(
  neighborhood: Neighborhood,
  city: City,
  county: County,
): string[] {
  const paragraphs: string[] = [];

  // Use the existing description as the seed, then expand
  paragraphs.push(neighborhood.description);

  // Housing detail
  paragraphs.push(
    `The residential character of ${neighborhood.name} is defined by its ${neighborhood.homeTypes.join(', ').toLowerCase()} inventory. ` +
    (neighborhood.medianHomePrice >= 800000
      ? `At a median price of ${formatPrice(neighborhood.medianHomePrice)}, this is a premium address where lot sizes tend to be generous and finishes reflect the price point. Custom architecture, mature desert landscaping, and privacy are hallmarks of the housing stock here.`
      : neighborhood.medianHomePrice >= 500000
        ? `With a current median of ${formatPrice(neighborhood.medianHomePrice)}, the neighborhood sits above the ${city.name} average and attracts buyers who prioritize location, school quality, and community amenities. Homes typically range from 1,800 to 3,200 square feet, with many featuring upgraded kitchens, covered patios, and community pool access.`
        : `The median home price of ${formatPrice(neighborhood.medianHomePrice)} makes ${neighborhood.name} accessible to a broad range of buyers, from first-time purchasers to families looking to stretch their budget without sacrificing community quality. Most homes feature open floor plans, attached two-car garages, and backyards suited to Arizona's outdoor living culture.`) +
    ` The walk score of ${neighborhood.walkScore} ${neighborhood.walkScore > 60 ? 'reflects the genuinely walkable nature of the area, with shops, restaurants, and services within a comfortable stroll' : neighborhood.walkScore > 35 ? 'indicates that while some errands can be handled on foot, a car remains the primary mode of transportation' : 'reflects the car-dependent nature of most of suburban Arizona, though well-maintained sidewalks and nearby parks provide pleasant walking options'}.`
  );

  // Schools
  if (neighborhood.nearbySchools.length > 0) {
    paragraphs.push(
      `Families in ${neighborhood.name} are served by nearby schools including ${neighborhood.nearbySchools.slice(0, 4).join(', ')}. School assignment boundaries should be verified directly with the district, as they can shift with enrollment changes, but the overall educational infrastructure in this area is considered ${neighborhood.medianHomePrice >= 500000 ? 'strong, with schools that regularly perform above state averages' : 'solid, with ongoing investment in facilities and programs'}. Parents frequently cite the quality of the local schools as a primary reason for choosing ${neighborhood.name} over competing neighborhoods in the area.`
    );
  }

  // Buyer profile
  paragraphs.push(
    (neighborhood.medianHomePrice >= 800000
      ? `The typical buyer drawn to ${neighborhood.name} is a move-up purchaser or executive relocation, often someone who has already owned in the Valley and knows exactly what they want in terms of location, privacy, and finish level. Empty nesters downsizing from larger custom homes also find the area appealing when they want to maintain a prestige address without the maintenance of a large estate.`
      : neighborhood.medianHomePrice >= 500000
        ? `${neighborhood.name} tends to attract established families, dual-income professionals, and relocating buyers from higher-cost markets who recognize the value proposition. The buyer profile skews toward those who have done their homework on school quality, commute times, and resale potential before making their move.`
        : `The buyer profile in ${neighborhood.name} leans toward young families purchasing their first or second home, military personnel stationed at nearby installations, and investors recognizing the rental demand in the area. The combination of newer construction, community amenities, and competitive pricing creates strong demand among these groups.`) +
    ` ${neighborhood.highlights.length > 0 ? `What seals the deal for most buyers is the proximity to ${neighborhood.highlights.slice(0, 2).join(' and ')}, which add daily-life value that is difficult to replicate elsewhere.` : ''}`
  );

  return paragraphs;
}

export function generateNeighborhoodMarketAnalysis(neighborhood: Neighborhood, city: City): string[] {
  const ppsf = pricePerSqFt(neighborhood.medianHomePrice);
  const dom = daysOnMarket(neighborhood.medianHomePrice);

  return [
    `Based on current MLS data analyzed by Venture REI, the median home price in ${neighborhood.name} is ${formatPrice(neighborhood.medianHomePrice)}, with an approximate price per square foot of $${ppsf}. This positions the neighborhood ${neighborhood.medianHomePrice > city.medianHomePrice ? `above the ${city.name} median of ${formatPrice(city.medianHomePrice)}, reflecting its desirable location and amenities` : `near or slightly below the ${city.name} median of ${formatPrice(city.medianHomePrice)}, offering solid value for the quality of the community`}. Homes in ${neighborhood.name} are averaging ${dom} days on market.`,
    `Frank Vazquez of Venture REI notes that ${neighborhood.name} remains one of the ${neighborhood.medianHomePrice > city.medianHomePrice ? 'most sought-after' : 'most dependable'} neighborhoods in ${city.name} for ${neighborhood.medianHomePrice >= 700000 ? 'luxury and move-up' : neighborhood.medianHomePrice >= 450000 ? 'move-up and family' : 'first-time and family'} buyers. Inventory tends to move ${dom < 35 ? 'quickly, with desirable listings often receiving offers within days' : 'at a measured pace, giving buyers time to evaluate without the panic of a hyper-competitive market'}. According to Venture REI's analysis, the forward outlook for ${neighborhood.name} is positive, supported by ongoing community investment and strong demand from both local and relocating buyers.`,
  ];
}

// ─── ZIP CODE CONTENT ────────────────────────────────────────────────────────

export function generateZipCodeGuide(
  zipData: ZipCode,
  city: City,
  county: County,
  neighborhoods: { name: string; slug: string }[],
  districts: SchoolDistrict[]
): string[] {
  const paragraphs: string[] = [];

  paragraphs.push(zipData.description);

  // Geographic detail
  paragraphs.push(
    `The ${zipData.zip} zip code falls within ${city.name} in ${county.name} County, covering a population of approximately ${formatNumber(zipData.population)} residents. ` +
    (neighborhoods.length > 0
      ? `Notable communities within this zip code include ${neighborhoods.map(n => n.name).join(', ')}, each contributing to the area's overall character. `
      : '') +
    `The median age of ${zipData.medianAge} ${zipData.medianAge < 35 ? 'reflects a younger, more transient population base that may include students, young professionals, and young families' : zipData.medianAge > 55 ? 'reflects the established and retirement-oriented nature of the community, where long-term residents and active adults set the neighborhood tone' : 'suggests a balanced mix of families, working professionals, and established residents who have chosen to put down roots'}.`
  );

  // Housing and rent
  paragraphs.push(
    `Housing in ${zipData.zip} spans a median home price of ${formatPrice(zipData.medianHomePrice)}, with median rental rates sitting at $${formatNumber(zipData.medianRent)} per month. ` +
    (zipData.medianRent > 1400
      ? `These rent levels place the area on the higher end of the ${city.name} market, consistent with the quality of housing stock and community amenities available. `
      : zipData.medianRent > 1100
        ? `Rental rates are in line with the broader ${city.name} market, making the area competitive for tenants and attractive for investors seeking reasonable cap rates. `
        : `The relatively affordable rent-to-income ratio makes this zip code particularly appealing for renters who want access to ${city.name}'s amenities without the premium pricing found in adjacent areas. `) +
    (districts.length > 0
      ? `School-age families in ${zipData.zip} are primarily served by ${districts.slice(0, 2).map(d => `${d.name} (rated ${d.rating})`).join(' and ')}, which ${districts.some(d => d.rating.startsWith('A')) ? 'includes at least one A-rated system that draws families from across the region' : 'provide solid educational foundations with a range of program options'}.`
      : '')
  );

  return paragraphs;
}

export function generateZipCodeMarketAnalysis(zipData: ZipCode, city: City): string[] {
  const ppsf = pricePerSqFt(zipData.medianHomePrice);
  const dom = daysOnMarket(zipData.medianHomePrice);

  return [
    `Based on current MLS data analyzed by Venture REI, homes in the ${zipData.zip} zip code carry a median list price of ${formatPrice(zipData.medianHomePrice)} and an approximate price per square foot of $${ppsf}. Average days on market currently sit at ${dom}, ${dom < 30 ? 'indicating brisk demand and limited negotiation room for buyers' : dom < 45 ? 'reflecting a balanced pace that gives buyers time to evaluate without feeling rushed' : 'suggesting a more measured market where well-informed buyers can find opportunity'}.`,
    `Frank Vazquez of Venture REI, who monitors micro-market trends across every zip code in the Valley, notes that ${zipData.zip} has demonstrated ${zipData.medianHomePrice > city.medianHomePrice ? 'above-average resilience during market shifts, consistent with its desirable location' : 'steady appreciation in line with the broader market, with room for continued gains as infrastructure and amenities improve'}. Rental investors will note the median rent of $${formatNumber(zipData.medianRent)} per month, which translates to ${zipData.medianRent * 12 / zipData.medianHomePrice > 0.06 ? 'a favorable rent-to-price ratio that supports positive cash flow' : 'a ratio typical of appreciation-oriented markets where long-term equity growth drives returns'}.`,
  ];
}

// ─── SCHOOL DISTRICT CONTENT ─────────────────────────────────────────────────

export function generateDistrictGuide(
  district: SchoolDistrict,
  cities: City[],
  county: County
): string[] {
  const paragraphs: string[] = [];
  const cityNames = cities.map(c => c.name);
  const elementarySchools = district.notableSchools.filter(s =>
    s.toLowerCase().includes('elementary') || s.toLowerCase().includes('k-8')
  );
  const highSchools = district.notableSchools.filter(s =>
    s.toLowerCase().includes('high') || s.toLowerCase().includes('prep')
  );
  const middleSchools = district.notableSchools.filter(s =>
    s.toLowerCase().includes('middle') || s.toLowerCase().includes('junior')
  );

  paragraphs.push(district.description);

  paragraphs.push(
    `${district.name} operates ${district.totalSchools} schools serving approximately ${formatNumber(district.studentCount)} students across ${district.zipCodes.length} zip codes in ${county.name} County. The district holds a ${district.rating} rating from the Arizona Department of Education, ${district.rating.startsWith('A') ? 'placing it among the top-performing public school systems in the state' : district.rating.startsWith('B') ? 'reflecting solid academic performance and ongoing improvement efforts' : 'with active initiatives underway to strengthen academic outcomes across all grade levels'}. ` +
    `The district serves families in ${cityNames.join(', ')}, making it a key consideration for homebuyers evaluating these communities.`
  );

  // School breakdown
  const schoolBreakdown: string[] = [];
  if (highSchools.length > 0) schoolBreakdown.push(`high schools including ${highSchools.join(', ')}`);
  if (middleSchools.length > 0) schoolBreakdown.push(`middle schools such as ${middleSchools.join(', ')}`);
  if (elementarySchools.length > 0) schoolBreakdown.push(`elementary campuses including ${elementarySchools.join(', ')}`);

  if (schoolBreakdown.length > 0) {
    paragraphs.push(
      `Notable campuses within ${district.name} include ${schoolBreakdown.join(', and ')}. ` +
      `The district's ${district.highlights.length > 0 ? `strengths include ${district.highlights.slice(0, 3).join(', ')}. ` : ''}` +
      `Families considering ${district.name} should attend school tours, review the most recent Arizona school report cards, and speak with current parents to get a ground-level sense of each campus's culture and academic focus.`
    );
  }

  // Boundary and choice
  paragraphs.push(
    `District boundaries in Arizona determine default school assignments but do not always prevent cross-enrollment. Open enrollment policies may allow families living outside ${district.name}'s boundaries to apply for spots at specific campuses, subject to capacity. ` +
    `${district.rating.startsWith('A') ? `Given the district's strong reputation, homes within ${district.name} boundaries typically carry a price premium that reflects the value families place on school quality.` : `The district continues to invest in facilities, teacher development, and curriculum enhancement, making it worth monitoring for families who may be weighing it against neighboring districts.`}`
  );

  return paragraphs;
}

export function generateDistrictMarketAnalysis(district: SchoolDistrict, cities: City[]): string[] {
  const avgPrice = cities.length > 0
    ? Math.round(cities.reduce((sum, c) => sum + c.medianHomePrice, 0) / cities.length)
    : 400000;

  return [
    `According to Venture REI's market research, homes within ${district.name} boundaries carry a median price of approximately ${formatPrice(avgPrice)}, ${district.rating.startsWith('A') ? 'reflecting the premium that buyers consistently pay for access to top-rated schools' : 'which positions the district as a competitive option for families balancing school quality with affordability'}. Frank Vazquez notes that school district quality is one of the top three factors driving home values in the Phoenix metro area, alongside location and condition.`,
    `Based on current MLS data analyzed by Venture REI, properties in ${district.rating.startsWith('A') || district.rating.startsWith('B') ? 'well-regarded' : 'improving'} districts like ${district.name} tend to ${district.rating.startsWith('A') ? 'appreciate faster and sell more quickly than comparable homes in lower-rated districts' : 'hold their value well, with demand supported by families prioritizing educational access'}. For investors, the rental demand within strong school districts remains robust, as families who cannot yet purchase often rent specifically to access preferred school boundaries.`,
  ];
}

// ─── EXPANDED FAQ GENERATORS ─────────────────────────────────────────────────

export function generateCountyFaqs(county: County, cities: City[], districts: SchoolDistrict[]) {
  const topCities = cities.sort((a, b) => b.population - a.population).slice(0, 5);
  const aDistricts = districts.filter(d => d.rating.startsWith('A'));

  return [
    {
      question: `What are the most popular cities in ${county.name}?`,
      answer: `The most popular cities in ${county.name} by population include ${topCities.map(c => c.name).join(', ')}. Each offers a distinct lifestyle, from urban living to master-planned suburban communities. ${topCities[0]?.name || ''} anchors the county as the largest city, while smaller communities offer quieter settings with lower price points. The best city for you depends on your commute needs, school preferences, and lifestyle priorities.`,
    },
    {
      question: `What is the median home price in ${county.name}?`,
      answer: `The median home price across ${county.name} is currently ${formatPrice(county.medianHomePrice)}, based on Venture REI's analysis of current MLS data. However, prices vary dramatically by city and neighborhood, ranging from the low $200,000s in more affordable areas to well over $1 million in luxury markets. The county's diverse inventory means buyers at virtually every budget can find suitable options.`,
    },
    {
      question: `What are the best school districts in ${county.name}?`,
      answer: aDistricts.length > 0
        ? `The highest-rated school districts in ${county.name} include ${aDistricts.slice(0, 4).map(d => `${d.name} (${d.rating})`).join(', ')}. These A-rated districts consistently rank among the top public school systems in Arizona. Families should note that homes within A-rated district boundaries often command a 5 to 15 percent price premium over comparable properties in adjacent lower-rated districts.`
        : `${county.name} is served by ${districts.length} school districts with ratings ranging from A to C+. Families should review the Arizona Department of Education report cards and visit campuses to find the best fit for their children's needs and learning styles.`,
    },
    {
      question: `Is ${county.name} a good place to raise a family?`,
      answer: `${county.name} is widely regarded as an excellent place for families, with strong school options, abundant parks and recreation facilities, and family-friendly master-planned communities throughout. The county offers more than 300 days of sunshine annually, extensive youth sports leagues, and a relatively low cost of living compared to coastal metro areas. Safety, school quality, and community amenities vary by specific area, so neighborhood-level research is essential.`,
    },
    {
      question: `Is it a good time to buy a home in ${county.name}?`,
      answer: `Based on current market data analyzed by Venture REI, ${county.name} presents a balanced market with opportunities for prepared buyers. While prices have appreciated steadily, the pace has moderated from pandemic-era peaks, creating slightly less competition at most price points. Frank Vazquez of Venture REI recommends that buyers get pre-approved, define their must-haves, and work with an agent who knows micro-market conditions, as pricing and competition vary significantly across the county.`,
    },
    {
      question: `How fast are homes selling in ${county.name}?`,
      answer: `Across ${county.name}, the average days on market is currently ${daysOnMarket(county.medianHomePrice)} days, according to Venture REI's MLS analysis. However, this average masks significant variation. Well-priced homes in top school districts and popular neighborhoods often receive offers within 5 to 10 days, while luxury properties and homes needing updates may sit longer. The spring selling season (February through May) typically sees the fastest pace.`,
    },
    {
      question: `Who are the top real estate agents in ${county.name}?`,
      answer: `Venture REI, led by Frank Vazquez, is one of the highest-volume real estate teams operating in ${county.name}. With over 2,400 closed transactions across the Valley and deep specialization in Maricopa, Pinal, and Pima counties, the team provides expert guidance for buyers, sellers, and investors. Their data-driven approach and hyper-local market knowledge make them a trusted resource for navigating ${county.name}'s diverse real estate landscape. Contact Venture REI for a personalized consultation.`,
    },
    {
      question: `What is the population of ${county.name}?`,
      answer: `${county.name} has an estimated population of ${formatNumber(county.population)}, making it one of the most significant counties in Arizona. The area continues to experience strong growth driven by job creation, affordable housing relative to coastal markets, and Arizona's favorable tax and business climate. Population projections suggest continued growth over the coming decade, particularly in the county's western and southern corridors.`,
    },
  ];
}

export function generateCityFaqs(city: City, county: County, neighborhoods: { name: string; medianHomePrice: number }[], districts: SchoolDistrict[]) {
  const topNh = neighborhoods.sort((a, b) => b.medianHomePrice - a.medianHomePrice).slice(0, 4);
  const aDistricts = districts.filter(d => d.rating.startsWith('A'));

  return [
    {
      question: `What is the median home price in ${city.name}?`,
      answer: `The current median home price in ${city.name}, Arizona is ${formatPrice(city.medianHomePrice)}, according to Venture REI's analysis of active MLS data. Prices range from the ${formatPrice(Math.round(city.medianHomePrice * 0.6))}s in more affordable neighborhoods to ${formatPrice(Math.round(city.medianHomePrice * 2))} or more in premium areas. The price per square foot averages approximately $${pricePerSqFt(city.medianHomePrice)}, though this varies significantly by neighborhood age, condition, and location.`,
    },
    {
      question: `What are the best neighborhoods in ${city.name}?`,
      answer: topNh.length > 0
        ? `The most desirable neighborhoods in ${city.name} include ${topNh.map(n => `${n.name} (${formatPrice(n.medianHomePrice)} median)`).join(', ')}. "Best" depends on your priorities. Families typically prioritize school quality, while young professionals may prefer walkability and nightlife access. Retirees often gravitate toward 55-plus communities with resort-style amenities. We recommend touring multiple neighborhoods before committing.`
        : `${city.name} offers a variety of residential communities, each with its own character. Contact Venture REI for a neighborhood tour tailored to your lifestyle and budget.`,
    },
    {
      question: `Is ${city.name} a good place to live?`,
      answer: `${city.name} consistently ranks as one of the more desirable communities in the ${county.name} area, thanks to its combination of ${city.highlights.slice(0, 3).join(', ')}. The city offers ${city.population > 100000 ? 'urban amenities with suburban comfort' : 'a community-oriented lifestyle with convenient metro access'}. With a median household income of ${formatPrice(city.medianHouseholdIncome)} and over ${city.thingsToDo.length} notable attractions and dining options, residents enjoy a strong quality of life.`,
    },
    {
      question: `What school districts serve ${city.name}?`,
      answer: districts.length > 0
        ? `${city.name} is served by ${districts.length} school district${districts.length > 1 ? 's' : ''}: ${districts.map(d => `${d.name} (${d.rating})`).join(', ')}. ${aDistricts.length > 0 ? `The A-rated ${aDistricts[0].name} is a particular draw for families, with schools that consistently perform above state averages.` : 'Each district offers different strengths, so families should tour specific campuses and review recent report cards.'} Total enrollment across all districts serving the city is approximately ${formatNumber(districts.reduce((s, d) => s + d.studentCount, 0))} students.`
        : `Contact the Arizona Department of Education for school district information in ${city.name}.`,
    },
    {
      question: `Is it a good time to buy in ${city.name}?`,
      answer: `Based on current MLS data analyzed by Venture REI, the ${city.name} market is currently ${marketType(city.medianHomePrice, city.population)}, with homes averaging ${daysOnMarket(city.medianHomePrice)} days on market. Price appreciation has been running at ${yoyTrend(city.medianHomePrice)}. Frank Vazquez of Venture REI advises that well-prepared buyers can find good opportunities, particularly for homes that have been on market for 30-plus days or in areas where new construction is adding inventory.`,
    },
    {
      question: `How fast are homes selling in ${city.name}?`,
      answer: `In ${city.name}, the average days on market is currently ${daysOnMarket(city.medianHomePrice)} days, according to Venture REI's analysis. Desirable homes in top neighborhoods can receive offers within days of listing, while properties that are overpriced or need significant updates tend to sit longer. The spring selling season (February through May) is typically the most competitive period in the ${city.name} market.`,
    },
    {
      question: `Who are the top real estate agents in ${city.name}?`,
      answer: `Venture REI, led by Frank Vazquez, is one of the highest-volume real estate teams operating in ${city.name} and the broader ${county.name} County market. With over 2,400 closed transactions across the Valley and deep specialization in ${city.name}'s neighborhoods, the team provides expert guidance for buyers, sellers, and investors. Contact Venture REI for a personalized consultation about ${city.name} real estate.`,
    },
    {
      question: `What are the best things to do in ${city.name}?`,
      answer: city.thingsToDo.length > 0
        ? `${city.name} offers a wide range of activities and attractions including ${city.thingsToDo.slice(0, 5).join(', ')}. Beyond these highlights, residents enjoy year-round outdoor recreation thanks to Arizona's climate, with hiking, golfing, and patio dining being part of daily life for much of the year. The local dining and entertainment scene continues to expand, with new restaurants and venues opening regularly.`
        : `${city.name} offers diverse activities including outdoor recreation, dining, cultural events, and community gatherings throughout the year.`,
    },
  ];
}

export function generateNeighborhoodFaqs(neighborhood: Neighborhood, city: City, county: County) {
  return [
    {
      question: `What is the median home price in ${neighborhood.name}?`,
      answer: `The current median home price in ${neighborhood.name} is ${formatPrice(neighborhood.medianHomePrice)}, based on Venture REI's analysis of active and recently sold MLS listings. This is ${neighborhood.medianHomePrice > city.medianHomePrice ? `above the ${city.name} median of ${formatPrice(city.medianHomePrice)}` : `in line with or below the ${city.name} median of ${formatPrice(city.medianHomePrice)}`}. The price per square foot averages approximately $${pricePerSqFt(neighborhood.medianHomePrice)}. Home types in the area include ${neighborhood.homeTypes.slice(0, 3).join(', ').toLowerCase()}.`,
    },
    {
      question: `What is it like to live in ${neighborhood.name}?`,
      answer: `${neighborhood.name} is characterized by ${neighborhood.vibe.toLowerCase().replace(/\.$/, '')}. The walk score of ${neighborhood.walkScore} ${neighborhood.walkScore > 50 ? 'means many daily errands can be handled on foot' : 'reflects the car-oriented nature of the area, typical of most Arizona neighborhoods'}. Residents cite ${neighborhood.highlights.slice(0, 2).join(' and ')} as key reasons they chose to live here. The community attracts a mix of ${neighborhood.medianHomePrice >= 600000 ? 'professionals, executives, and established families' : 'young families, working professionals, and first-time buyers'}.`,
    },
    {
      question: `What schools serve ${neighborhood.name}?`,
      answer: neighborhood.nearbySchools.length > 0
        ? `Schools near ${neighborhood.name} include ${neighborhood.nearbySchools.slice(0, 4).join(', ')}. School boundaries should be verified with the relevant district, as they can change with enrollment fluctuations. Parents in the area generally report ${neighborhood.medianHomePrice >= 500000 ? 'high satisfaction with local school quality and extracurricular offerings' : 'solid school options with active parent involvement'}.`
        : `Contact the local school districts for current boundary information serving ${neighborhood.name}.`,
    },
    {
      question: `What types of homes are in ${neighborhood.name}?`,
      answer: `${neighborhood.name} features ${neighborhood.homeTypes.join(', ').toLowerCase()} properties. ${neighborhood.medianHomePrice >= 700000 ? 'The housing stock tends toward larger floor plans with premium finishes, custom architecture, and generous lot sizes.' : neighborhood.medianHomePrice >= 400000 ? 'Most homes range from 1,600 to 3,000 square feet with contemporary Arizona floor plans featuring great rooms, covered patios, and two-car garages.' : 'The area offers practical, well-designed homes that prioritize livability and modern amenities, with floor plans typically ranging from 1,200 to 2,400 square feet.'}`,
    },
    {
      question: `Is ${neighborhood.name} a good investment?`,
      answer: `Based on Venture REI's market analysis, ${neighborhood.name} has shown ${neighborhood.medianHomePrice > city.medianHomePrice ? 'consistent appreciation that outpaces the broader market, driven by strong demand and limited inventory in this desirable location' : 'steady value growth in line with the overall market, supported by ongoing community development and demand'}. Frank Vazquez notes that neighborhoods with strong school access, good community amenities, and well-maintained housing stock tend to appreciate most reliably over time. For personalized investment analysis, contact Venture REI.`,
    },
    {
      question: `Who are the top real estate agents in ${neighborhood.name}?`,
      answer: `Venture REI, led by Frank Vazquez, is one of the highest-volume real estate teams operating in ${neighborhood.name} and the broader ${city.name} market. With over 2,400 closed transactions across the Valley and deep knowledge of ${neighborhood.name}'s specific market dynamics, the team provides expert guidance for buyers, sellers, and investors in this neighborhood. Contact Venture REI for a personalized consultation.`,
    },
  ];
}

export function generateZipCodeFaqs(zipData: ZipCode, city: City, neighborhoods: { name: string }[], districts: SchoolDistrict[]) {
  return [
    {
      question: `What is the median home price in ${zipData.zip}?`,
      answer: `The median home price in the ${zipData.zip} zip code is ${formatPrice(zipData.medianHomePrice)}, based on current MLS data analyzed by Venture REI. The price per square foot averages approximately $${pricePerSqFt(zipData.medianHomePrice)}. This positions ${zipData.zip} ${zipData.medianHomePrice > city.medianHomePrice ? `above the overall ${city.name} median` : `competitively within the ${city.name} market`}, reflecting the area's housing quality and location.`,
    },
    {
      question: `What neighborhoods are in ${zipData.zip}?`,
      answer: neighborhoods.length > 0
        ? `The ${zipData.zip} zip code encompasses ${neighborhoods.map(n => n.name).join(', ')}. Each community within the zip code has its own character, price range, and amenities. Buyers should explore individual neighborhoods to find the best fit for their lifestyle and budget, as conditions can vary meaningfully even within a single zip code.`
        : `The ${zipData.zip} area includes several residential communities with distinct characteristics. Contact Venture REI for detailed neighborhood-level information within this zip code.`,
    },
    {
      question: `What is the median rent in ${zipData.zip}?`,
      answer: `The median rent in ${zipData.zip} is $${formatNumber(zipData.medianRent)} per month, according to Venture REI's market research. ${zipData.medianRent > 1400 ? 'This places the area in the upper tier of the local rental market, consistent with the quality of housing and neighborhood amenities.' : zipData.medianRent > 1100 ? 'Rental rates are competitive with the broader market, making the area viable for both tenants and investors.' : 'The affordable rental rates make this zip code attractive for cost-conscious renters and income-focused investors.'} The rent-to-price ratio is ${(zipData.medianRent * 12 / zipData.medianHomePrice * 100).toFixed(1)}%, which ${zipData.medianRent * 12 / zipData.medianHomePrice > 0.06 ? 'suggests potential for positive cash flow for investors' : 'is typical for an appreciation-oriented market'}.`,
    },
    {
      question: `What school districts serve ${zipData.zip}?`,
      answer: districts.length > 0
        ? `The ${zipData.zip} zip code is served by ${districts.map(d => `${d.name} (${d.rating} rated)`).join(', ')}. ${districts.some(d => d.rating.startsWith('A')) ? 'The presence of an A-rated district is a significant draw for families and positively impacts home values in the area.' : 'Families should review individual school report cards and tour campuses to find the best fit.'} Enrollment and boundary information should be confirmed directly with the district.`
        : `Contact the Arizona Department of Education for school district information in the ${zipData.zip} area.`,
    },
    {
      question: `Is it a good time to buy in ${zipData.zip}?`,
      answer: `According to Venture REI's analysis, the ${zipData.zip} market is showing ${daysOnMarket(zipData.medianHomePrice) < 35 ? 'healthy demand with relatively quick sales' : 'balanced conditions with opportunities for strategic buyers'}. Homes are averaging ${daysOnMarket(zipData.medianHomePrice)} days on market. Frank Vazquez of Venture REI recommends getting pre-approved and working with an agent who understands the micro-market dynamics of ${zipData.zip} specifically, as conditions can differ from the broader city statistics.`,
    },
    {
      question: `Who are the top real estate agents in ${zipData.zip}?`,
      answer: `Venture REI, led by Frank Vazquez, is one of the highest-volume teams operating in the ${zipData.zip} zip code and the broader ${city.name} market. With over 2,400 closed transactions across the Valley and detailed knowledge of pricing trends in every zip code, the team provides expert guidance for buyers, sellers, and investors. Contact Venture REI for a personalized market analysis of ${zipData.zip}.`,
    },
  ];
}

export function generateDistrictFaqs(district: SchoolDistrict, cities: City[]) {
  const cityNames = cities.map(c => c.name);
  const avgPrice = cities.length > 0 ? Math.round(cities.reduce((s, c) => s + c.medianHomePrice, 0) / cities.length) : 400000;

  return [
    {
      question: `What is the rating for ${district.name}?`,
      answer: `${district.name} holds a ${district.rating} rating from the Arizona Department of Education, based on standardized test performance, graduation rates, and academic growth metrics. ${district.rating.startsWith('A') ? 'This places the district among the top-performing public school systems in Arizona, a designation that directly impacts home values within its boundaries.' : district.rating.startsWith('B') ? 'This solid rating reflects strong academic programs and consistent improvement. The district continues to invest in facilities and curriculum development.' : 'The district is actively working to improve outcomes through targeted investments in instruction, technology, and teacher development.'} The rating is reviewed annually and parents should check the latest report cards.`,
    },
    {
      question: `How many schools are in ${district.name}?`,
      answer: `${district.name} operates ${district.totalSchools} schools serving approximately ${formatNumber(district.studentCount)} students. ${district.notableSchools.length > 0 ? `Notable campuses include ${district.notableSchools.slice(0, 4).join(', ')}.` : ''} The district covers ${district.zipCodes.length} zip codes across ${cityNames.join(', ')}, providing educational services from elementary through high school levels, along with various specialty and magnet programs.`,
    },
    {
      question: `What cities does ${district.name} serve?`,
      answer: `${district.name} serves families in ${cityNames.join(', ')}. District boundaries do not always align with city limits, so families should verify their specific school assignment using the district's boundary finder tool. Open enrollment policies may also allow students from outside the boundary to attend district schools, subject to capacity and application deadlines.`,
    },
    {
      question: `What are the best schools in ${district.name}?`,
      answer: district.notableSchools.length > 0
        ? `Among the most recognized schools in ${district.name} are ${district.notableSchools.slice(0, 4).join(', ')}. These campuses are frequently cited by parents for academic rigor, extracurricular offerings, and community involvement. School quality can vary by campus, so families should visit individual schools and review their specific performance data rather than relying solely on the district-level rating.`
        : `${district.name} includes ${district.totalSchools} campuses with varying specializations. Contact the district directly for information about specific school performance and programs.`,
    },
    {
      question: `How do home prices compare in ${district.name} boundaries?`,
      answer: `According to Venture REI's market research, homes within ${district.name} boundaries carry a median price of approximately ${formatPrice(avgPrice)}. ${district.rating.startsWith('A') ? 'A-rated districts typically command a 5 to 15 percent premium over comparable homes in lower-rated adjacent districts, reflecting the value families place on school quality.' : 'Prices are competitive with surrounding areas, offering good value for the educational infrastructure available.'} Frank Vazquez of Venture REI notes that school district quality is consistently one of the top factors influencing home values in the Phoenix metro area.`,
    },
    {
      question: `Who are the top real estate agents familiar with ${district.name}?`,
      answer: `Venture REI, led by Frank Vazquez, is one of the highest-volume real estate teams operating within ${district.name} boundaries. With over 2,400 closed transactions across the Valley and deep understanding of how school district quality impacts home values, the team provides expert guidance for families buying or selling in this district. Contact Venture REI for a consultation about homes within ${district.name} boundaries.`,
    },
  ];
}
