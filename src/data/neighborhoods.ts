import type { Neighborhood } from './types';

export const NEIGHBORHOODS: Neighborhood[] = [
  // ============================================================
  // PHOENIX (citySlug: "phoenix", countySlug: "maricopa")
  // ============================================================
  {
    slug: "arcadia",
    name: "Arcadia",
    citySlug: "phoenix",
    countySlug: "maricopa",
    zipCodes: ["85018", "85008"],
    description:
      "Arcadia is the neighborhood that makes people fall in love with Phoenix. Nestled between Camelback Mountain to the north and the Arizona Canal to the south, this pocket of the city blends midcentury ranch homes with sleek new luxury builds shaded by mature citrus trees and towering palms. Residents jog and bike along the canal paths, grab a pastry at La Grande Orange, and hike Camelback before the heat sets in. The lots here are generous, the yards are green, and the restaurants along 44th Street keep the dining scene lively without the Scottsdale crowds. If you want a neighborhood that feels both established and evolving, Arcadia delivers on every front.",
    medianHomePrice: 1200000,
    homeTypes: ["Single-Family", "Luxury Estate", "Ranch"],
    vibe: "Tree-lined streets with a mix of midcentury ranch homes and new luxury builds tucked between Camelback and the canal.",
    nearbySchools: ["Arcadia High School", "Hopi Elementary", "Tavan Elementary"],
    walkScore: 45,
    highlights: [
      "Camelback Mountain hiking",
      "La Grande Orange Grocery",
      "Postino WineCafe",
      "Canal running paths",
    ],
  },
  {
    slug: "biltmore",
    name: "Biltmore",
    citySlug: "phoenix",
    countySlug: "maricopa",
    zipCodes: ["85016"],
    description:
      "The Biltmore area carries a legacy that stretches back to the 1929 opening of the Arizona Biltmore resort, designed with input from Frank Lloyd Wright. Today, the neighborhood surrounds that iconic property with a mix of luxury condos, gated estates, and elegant single-family homes. Biltmore Fashion Park anchors the retail scene with high-end boutiques and restaurants like The Capital Grille and True Food Kitchen. The tree-lined streets feel more like a resort campus than a typical subdivision, and the proximity to both Camelback Mountain and the 51 freeway makes it a practical choice for professionals who want polish without a long commute. Sunday brunch at Wrigley Mansion remains a local tradition worth keeping.",
    medianHomePrice: 850000,
    homeTypes: ["Condo", "Luxury Estate", "Single-Family", "Townhome"],
    vibe: "Polished resort living near the Arizona Biltmore with upscale shopping at Biltmore Fashion Park.",
    nearbySchools: [
      "Madison Simis Elementary",
      "Biltmore Preparatory Academy",
      "Camelback High School",
    ],
    walkScore: 55,
    highlights: [
      "Arizona Biltmore Resort",
      "Biltmore Fashion Park",
      "Wrigley Mansion",
      "Frank Lloyd Wright architecture",
    ],
  },
  {
    slug: "north-central",
    name: "North Central Phoenix",
    citySlug: "phoenix",
    countySlug: "maricopa",
    zipCodes: ["85012", "85013", "85014"],
    description:
      "North Central is the neighborhood that longtime Phoenicians brag about. The corridor along Central Avenue from Camelback Road up to Northern Avenue is lined with mature trees, historic homes, and locally owned businesses that give the area its distinct character. Families gather at Luci's at the Orchard for weekend breakfast, kids ride bikes to neighborhood parks, and the Saturday farmers market draws regulars who know each vendor by name. Homes range from 1940s brick bungalows to custom contemporary builds, and the lots are bigger than anywhere else this close to downtown. North Central proves you do not have to leave the city to find a real neighborhood with deep roots and genuine community.",
    medianHomePrice: 650000,
    homeTypes: ["Single-Family", "Historic Bungalow", "Ranch", "Custom"],
    vibe: "One of Phoenix's most established corridors where mature trees line Central Avenue and families gather at local coffee shops.",
    nearbySchools: [
      "Madison Highland Prep",
      "Camelback High School",
      "Central High School",
      "Royal Palm Middle School",
    ],
    walkScore: 52,
    highlights: [
      "Central Avenue corridor",
      "Phoenix Mountain Preserve",
      "Luci's at the Orchard",
      "North Central farmers market",
    ],
  },
  {
    slug: "camelback-east",
    name: "Camelback East",
    citySlug: "phoenix",
    countySlug: "maricopa",
    zipCodes: ["85018"],
    description:
      "Camelback East puts you on the slopes of one of Arizona's most famous landmarks. The homes here climb the hillside east of Camelback Mountain, offering panoramic views of the valley floor and city lights that stretch to the horizon. Echo Canyon Trail is practically in the backyard, and residents can be at the Scottsdale border in minutes. The housing stock includes sprawling estates with private casitas, updated midcentury gems, and newer luxury builds designed to frame the mountain. Dining options along Camelback Road range from neighborhood Italian spots to resort-caliber restaurants at The Phoenician and Sanctuary on Camelback. This is aspirational Phoenix living with a surprisingly relaxed, outdoorsy vibe.",
    medianHomePrice: 750000,
    homeTypes: ["Single-Family", "Luxury Estate", "Condo"],
    vibe: "Upscale living on the slopes of Camelback Mountain with panoramic city views and quick access to Scottsdale.",
    nearbySchools: ["Arcadia High School", "Tavan Elementary", "Hopi Elementary"],
    walkScore: 40,
    highlights: [
      "Echo Canyon Trail",
      "Camelback Mountain summit",
      "The Phoenician resort nearby",
      "Sanctuary on Camelback",
    ],
  },
  {
    slug: "desert-ridge",
    name: "Desert Ridge",
    citySlug: "phoenix",
    countySlug: "maricopa",
    zipCodes: ["85050"],
    description:
      "Desert Ridge is north Phoenix's answer to the master-planned question. Built in the early 2000s around the massive Desert Ridge Marketplace, this community delivers wide streets, community parks, and mountain views in nearly every direction. Families love the top-rated Pinnacle High School, the abundance of youth sports leagues at Cashman Park, and the convenience of having Target, Trader Joe's, and dozens of restaurants within a few minutes' drive. The Musical Instrument Museum sits at the community's edge, and the 101 freeway provides quick access to Scottsdale and Tempe. Homes are well-maintained and range from entry-level townhomes to spacious family houses with pools and three-car garages.",
    medianHomePrice: 550000,
    homeTypes: ["Single-Family", "Townhome", "Condo"],
    vibe: "A master-planned community anchored by Desert Ridge Marketplace with wide streets and mountain views in every direction.",
    nearbySchools: [
      "Pinnacle High School",
      "Explorer Middle School",
      "Desert Trails Elementary",
    ],
    walkScore: 35,
    highlights: [
      "Desert Ridge Marketplace",
      "Cashman Park",
      "Butterfly Wonderland nearby",
      "Musical Instrument Museum",
    ],
  },
  {
    slug: "ahwatukee",
    name: "Ahwatukee Foothills",
    citySlug: "phoenix",
    countySlug: "maricopa",
    zipCodes: ["85044", "85045", "85048"],
    description:
      "Ahwatukee sits tucked between South Mountain and Interstate 10, creating a self-contained community that locals half-jokingly call its own city. The Foothills area has its own town center, its own high schools, and a loyal resident base that rarely feels the need to cross the mountain. Families here appreciate the Kyrene school district, the proximity to Club West and Ahwatukee Country Club golf courses, and the miles of desert trails that start where the subdivisions end. Weekend mornings mean farmers market runs and coffee at local spots along Chandler Boulevard. The housing stock is mostly 1990s and 2000s single-family homes, many with pools and mountain views, plus newer townhomes and patio homes for those looking to downsize.",
    medianHomePrice: 480000,
    homeTypes: ["Single-Family", "Townhome", "Patio Home"],
    vibe: "A self-contained foothill community tucked between South Mountain and I-10 with its own town center feel.",
    nearbySchools: [
      "Desert Vista High School",
      "Mountain Pointe High School",
      "Kyrene de la Mirada",
    ],
    walkScore: 30,
    highlights: [
      "South Mountain Park",
      "Ahwatukee Country Club",
      "Club West Golf",
      "Foothills Community Foundation",
    ],
  },
  {
    slug: "encanto",
    name: "Encanto-Palmcroft",
    citySlug: "phoenix",
    countySlug: "maricopa",
    zipCodes: ["85003", "85007"],
    description:
      "Encanto-Palmcroft is where Phoenix history lives. Developed in the 1920s and 1930s, this neighborhood features some of the city's finest Spanish Colonial Revival homes alongside English Tudor cottages and stately Colonials, all set on wide, palm-lined streets. Encanto Park, with its lake, boathouse, golf course, and bandshell, serves as the neighborhood's gathering place. Families picnic on the lawns, joggers circle the lake, and the adjacent Enchanted Island amusement park keeps young kids entertained for hours. Light rail access on Central Avenue makes commuting easy, and the nearby Coronado Historic District adds even more walkable charm. This is the neighborhood for people who appreciate character, craftsmanship, and a front-porch lifestyle.",
    medianHomePrice: 600000,
    homeTypes: ["Historic", "Single-Family", "Spanish Colonial", "Tudor"],
    vibe: "One of Phoenix's original historic neighborhoods where Spanish Colonial revival homes sit alongside Tudors and Encanto Park is the backyard.",
    nearbySchools: [
      "Kenilworth Middle School",
      "Encanto Elementary",
      "Central High School",
    ],
    walkScore: 60,
    highlights: [
      "Encanto Park",
      "Encanto Golf Course",
      "Coronado Historic District nearby",
      "Light rail access",
    ],
  },
  {
    slug: "willo",
    name: "Willo Historic District",
    citySlug: "phoenix",
    countySlug: "maricopa",
    zipCodes: ["85003"],
    description:
      "Willo is the kind of neighborhood that surprises people who think Phoenix is all sprawl and stucco. Bounded roughly by McDowell Road, Thomas Road, 1st Avenue, and 7th Avenue, this historic district is packed with 1920s and 1930s bungalows, Tudor revivals, and Craftsman homes set under a canopy of mature trees. The annual Willo Home Tour draws thousands who want a peek inside these lovingly restored houses. Third Avenue offers a growing row of restaurants and cafes, and the light rail stop on Central puts you downtown in minutes. It is one of the few places in Phoenix where you can walk to dinner, stroll home under streetlights, and feel like you are living in a small town with a big city at your doorstep.",
    medianHomePrice: 550000,
    homeTypes: ["Historic Bungalow", "Ranch", "Tudor", "Craftsman"],
    vibe: "Phoenix's most walkable historic neighborhood where 1920s bungalows and mature trees create a small-town feel minutes from downtown.",
    nearbySchools: [
      "Kenilworth Middle School",
      "Garfield Elementary",
      "Central High School",
    ],
    walkScore: 68,
    highlights: [
      "Annual Willo Home Tour",
      "Downtown proximity",
      "Light rail access",
      "Verdian restaurant row on 3rd Ave",
    ],
  },
  {
    slug: "roosevelt-row",
    name: "Roosevelt Row Arts District",
    citySlug: "phoenix",
    countySlug: "maricopa",
    zipCodes: ["85004"],
    description:
      "Roosevelt Row is where Phoenix gets creative. Stretching along Roosevelt Street between 7th Avenue and 16th Street, this arts district pulses with murals, galleries, independent bookstores, and chef-driven restaurants. First Friday art walks transform the area into a massive block party each month, and the energy carries over into daily life with open studio nights and pop-up markets. Housing here skews toward lofts, modern condos, and adaptive reuse projects in former warehouse buildings. ASU's downtown campus brings a youthful energy, and the light rail connects you to Tempe and Mesa without a car. If you want an urban lifestyle in Arizona with real cultural depth, Roosevelt Row is the only neighborhood that truly delivers it.",
    medianHomePrice: 400000,
    homeTypes: ["Condo", "Loft", "Townhome", "Adaptive Reuse"],
    vibe: "The creative heart of Phoenix where murals cover every wall and First Friday art walks draw thousands monthly.",
    nearbySchools: ["Roosevelt Elementary", "ASU Downtown Phoenix campus"],
    walkScore: 82,
    highlights: [
      "First Friday Art Walk",
      "Roosevelt Row murals",
      "Changing Hands bookstore",
      "Palabras bilingual bookstore",
    ],
  },
  {
    slug: "downtown-phoenix",
    name: "Downtown Phoenix",
    citySlug: "phoenix",
    countySlug: "maricopa",
    zipCodes: ["85003", "85004"],
    description:
      "Downtown Phoenix has been reborn. What was once a ghost town after 5 p.m. is now a thriving urban district with new high-rise condos, renovated historic buildings, and a restaurant scene that can hold its own against any Western city. Chase Field and Footprint Center anchor the sports and entertainment calendar, Heritage Square preserves a piece of territorial-era Phoenix, and CityScape offers dining and nightlife on a walkable plaza. The light rail threads through the core, connecting downtown to Midtown, Tempe, and Mesa. New residential towers are bringing thousands of residents into the heart of the city, creating the density and street life that Phoenix has needed for decades. This is ground zero for Arizona's urban future.",
    medianHomePrice: 380000,
    homeTypes: ["Condo", "High-Rise", "Loft", "Townhome"],
    vibe: "The urban core of Arizona with light rail, sports arenas, and a rapidly growing residential scene.",
    nearbySchools: ["ASU Downtown Phoenix campus", "Roosevelt Elementary"],
    walkScore: 85,
    highlights: [
      "Chase Field",
      "Footprint Center",
      "Heritage Square",
      "CityScape",
      "Phoenix Convention Center",
    ],
  },
  {
    slug: "midtown-phoenix",
    name: "Midtown Phoenix",
    citySlug: "phoenix",
    countySlug: "maricopa",
    zipCodes: ["85012", "85014", "85016"],
    description:
      "Midtown Phoenix is the connective tissue between downtown's urban energy and the residential calm of North Central. Running along Central Avenue from McDowell to Camelback, this corridor is home to the Heard Museum, the Phoenix Art Museum, and Steele Indian School Park. The Uptown Farmers Market draws weekend crowds, and restaurant rows along Central and Camelback keep the dining options fresh. Housing ranges from 1950s ranches on quiet side streets to newer condo towers along the light rail line. The walkability here is some of the best in the Valley, and the creative energy of nearby Roosevelt Row spills northward. For renters and buyers who want to be in the middle of everything without sacrificing neighborhood charm, Midtown delivers.",
    medianHomePrice: 500000,
    homeTypes: ["Single-Family", "Condo", "Townhome", "Ranch"],
    vibe: "Central Phoenix's most connected corridor where Heard Museum, galleries, and restaurants line Central Avenue.",
    nearbySchools: [
      "Madison Highland Prep",
      "Creighton Elementary",
      "Camelback High School",
    ],
    walkScore: 62,
    highlights: [
      "Heard Museum",
      "Steele Indian School Park",
      "Phoenix Art Museum",
      "Uptown Farmers Market",
    ],
  },
  {
    slug: "moon-valley",
    name: "Moon Valley",
    citySlug: "phoenix",
    countySlug: "maricopa",
    zipCodes: ["85022", "85023"],
    description:
      "Moon Valley is where north-central Phoenix slows down. Built around the Moon Valley Country Club in the 1960s and 1970s, this neighborhood has a mature, settled feel with established trees, cul-de-sac streets, and homes that sit on generous lots. Families have lived here for generations, drawn by the strong schools, the proximity to North Mountain Park and Lookout Mountain, and the quiet evenings on back patios. You can hike to the top of North Mountain in 20 minutes and see the entire Valley spread below. The Pointe Hilton Tapatio Cliffs resort sits at the neighborhood's edge, adding a touch of resort atmosphere. Moon Valley is not flashy, but it is the kind of place where neighbors know each other and roots run deep.",
    medianHomePrice: 480000,
    homeTypes: ["Single-Family", "Ranch", "Custom"],
    vibe: "A quiet golf course community in north-central Phoenix where families have put down roots for decades.",
    nearbySchools: [
      "Moon Valley High School",
      "Royal Palm Middle School",
      "Mountain Sky Junior High",
    ],
    walkScore: 28,
    highlights: [
      "Moon Valley Country Club",
      "North Mountain Park",
      "Pointe Hilton Tapatio Cliffs",
      "Lookout Mountain",
    ],
  },
  {
    slug: "deer-valley",
    name: "Deer Valley",
    citySlug: "phoenix",
    countySlug: "maricopa",
    zipCodes: ["85024", "85027", "85085"],
    description:
      "Deer Valley covers a wide stretch of north Phoenix where families consistently rank the schools among the Valley's best. The Deer Valley Unified School District anchors the community, and campuses like Sandra Day O'Connor High School and Barry Goldwater High School have earned strong reputations. The Deer Valley Rock Art Center preserves ancient Hohokam petroglyphs on a hillside just off the I-17 corridor, and Reach 11 Sports Complex provides fields and trails for every age group. Norterra shopping center adds modern retail to the area's north end. Housing is predominantly single-family homes built from the 1990s onward, with newer construction pushing further north. Freeway access via I-17 and the 101 makes commuting straightforward, and Lake Pleasant is a short drive away.",
    medianHomePrice: 420000,
    homeTypes: ["Single-Family", "Townhome", "Patio Home"],
    vibe: "Suburban north Phoenix with top-rated Deer Valley schools, community parks, and easy freeway access.",
    nearbySchools: [
      "Barry Goldwater High School",
      "Sandra Day O'Connor High School",
      "Deer Valley High School",
    ],
    walkScore: 25,
    highlights: [
      "Deer Valley Rock Art Center",
      "Reach 11 Sports Complex",
      "Norterra shopping",
      "Ben Avery Shooting Facility",
    ],
  },
  {
    slug: "norterra",
    name: "Norterra",
    citySlug: "phoenix",
    countySlug: "maricopa",
    zipCodes: ["85085", "85086"],
    description:
      "Norterra represents one of north Phoenix's most polished master-planned communities, built in the mid-2000s around a retail village anchored by Target, Safeway, and a growing roster of restaurants. The homes are newer construction with desert-contemporary architecture, open floor plans, and energy-efficient features. Sonoran Desert trails start where the subdivisions end, and the views of the Bradshaw Mountains to the north are unobstructed on clear days. Boulder Creek High School serves the community and has earned a solid academic reputation. Weekend life here revolves around the community pool, Saturday soccer games at nearby parks, and quick trips to Lake Pleasant for boating. The I-17 freeway provides a direct commute corridor to downtown Phoenix and Scottsdale via the 101.",
    medianHomePrice: 520000,
    homeTypes: ["Single-Family", "Townhome"],
    vibe: "One of north Phoenix's newest master-planned communities built around a retail village and surrounded by open desert.",
    nearbySchools: [
      "Boulder Creek High School",
      "Norterra Canyon School",
      "Fireside Elementary",
    ],
    walkScore: 30,
    highlights: [
      "Norterra retail village",
      "Sonoran Desert trails",
      "Lake Pleasant nearby",
      "I-17 corridor access",
    ],
  },
  {
    slug: "laveen",
    name: "Laveen",
    citySlug: "phoenix",
    countySlug: "maricopa",
    zipCodes: ["85339"],
    description:
      "Laveen is south Phoenix's biggest growth story. Once a rural farming community with horse properties and cotton fields, it has transformed into a booming residential area with new subdivisions, new schools, and a fiercely proud local identity. The Laveen Civic Center serves as a community hub, and South Mountain Park is right next door with thousands of acres of trails and open desert. You can still find larger lots with equestrian zoning alongside newer master-planned communities with modern amenities. Betty Fairfax High School and a wave of new elementary campuses serve a young and growing population. The commute into central Phoenix is manageable via Baseline Road and the I-10, and home prices remain well below the Valley average, making Laveen one of the metro area's strongest value propositions.",
    medianHomePrice: 380000,
    homeTypes: ["Single-Family", "Townhome"],
    vibe: "A rapidly growing south Phoenix community with new builds, equestrian lots, and a strong sense of neighborhood pride.",
    nearbySchools: [
      "Laveen Elementary",
      "Betty Fairfax High School",
      "Vista del Sur",
    ],
    walkScore: 18,
    highlights: [
      "South Mountain Park access",
      "New development",
      "Large lots",
      "Laveen Civic Center",
    ],
  },
  {
    slug: "maryvale",
    name: "Maryvale",
    citySlug: "phoenix",
    countySlug: "maricopa",
    zipCodes: ["85031", "85033", "85035"],
    description:
      "Maryvale is one of Phoenix's most culturally vibrant neighborhoods, and locals know the food alone is worth the visit. Taco trucks, birria spots, panaderias, and family-run Mexican restaurants line the main corridors, making this one of the best food destinations in the Valley. Maryvale Baseball Park hosts spring training games that bring Major League energy to the neighborhood each February and March. The housing stock is mostly affordable single-family ranch homes built in the 1960s and 1970s, perfect for first-time buyers and growing families. Estrella Mountain Regional Park is a short drive west, offering hiking and picnic areas. The community is tight-knit and diverse, and ongoing investment in parks, schools, and infrastructure is steadily reshaping Maryvale's trajectory.",
    medianHomePrice: 300000,
    homeTypes: ["Single-Family", "Ranch", "Starter Home"],
    vibe: "One of Phoenix's most diverse neighborhoods with affordable homes, local taco shops on every corner, and Maryvale Baseball Park.",
    nearbySchools: [
      "Maryvale High School",
      "Alhambra High School",
      "Cartwright Elementary",
    ],
    walkScore: 35,
    highlights: [
      "Maryvale Baseball Park (spring training)",
      "Affordable entry point",
      "Cultural diversity",
      "Estrella Mountain Park nearby",
    ],
  },
  {
    slug: "south-mountain",
    name: "South Mountain",
    citySlug: "phoenix",
    countySlug: "maricopa",
    zipCodes: ["85040", "85042"],
    description:
      "South Mountain is defined by its namesake preserve, the largest municipal park in the country at over 16,000 acres. The neighborhood spreads along the base of the mountain range, offering residents immediate access to trails for hiking, mountain biking, and horseback riding. Dobbins Lookout provides one of the best sunset viewpoints in the entire Valley, and ancient Hohokam petroglyphs dot the rocky hillsides. The housing here is diverse, ranging from modest ranch homes and manufactured housing to newer subdivision builds. South Mountain High School has deep community roots, and the area is seeing new investment in commercial corridors along Baseline and 24th Street. If you want wide-open skies, room to breathe, and a mountain in your backyard, this is the spot.",
    medianHomePrice: 350000,
    homeTypes: ["Single-Family", "Ranch", "Manufactured"],
    vibe: "Spread along the base of South Mountain Park, Arizona's largest municipal park, with horseback riding, mountain biking, and wide-open skies.",
    nearbySchools: [
      "South Mountain High School",
      "Baseline Middle School",
      "Kyrene del Pueblo",
    ],
    walkScore: 20,
    highlights: [
      "South Mountain Park and Preserve",
      "16,000 acres of desert trails",
      "Dobbins Lookout",
      "Petroglyphs",
    ],
  },
  {
    slug: "north-gateway",
    name: "North Gateway",
    citySlug: "phoenix",
    countySlug: "maricopa",
    zipCodes: ["85086"],
    description:
      "North Gateway is the frontier of Phoenix growth, where brand-new homes sit at the edge of open desert and construction cranes dot the horizon. This rapidly developing area near the I-17 and Carefree Highway is attracting families who want modern floor plans, energy-efficient builds, and room to grow without the sticker shock of more established neighborhoods. Lake Pleasant Regional Park is a short drive north for boating, fishing, and waterside camping. Desert washes and trail systems weave through the new communities, and retail is following the rooftops with grocery stores and restaurants filling in along Carefree Highway. Schools are expanding to keep pace with the population surge, and early buyers here are building equity in one of the Valley's fastest-appreciating corridors.",
    medianHomePrice: 470000,
    homeTypes: ["Single-Family", "New Construction"],
    vibe: "Rapidly developing north Phoenix with brand-new homes, desert washes, and proximity to Lake Pleasant.",
    nearbySchools: [
      "Boulder Creek High School",
      "Gavilan Peak School",
      "Diamond Canyon Elementary",
    ],
    walkScore: 15,
    highlights: [
      "New construction",
      "Lake Pleasant access",
      "Desert hiking",
      "Growing retail",
    ],
  },
  {
    slug: "desert-view",
    name: "Desert View",
    citySlug: "phoenix",
    countySlug: "maricopa",
    zipCodes: ["85050", "85054"],
    description:
      "Desert View occupies a sweet spot in north Phoenix, right along the Scottsdale border where the Tatum Boulevard corridor meets the 101 freeway. Homes here look out toward the McDowell Mountains, and the proximity to Desert Ridge Marketplace means shopping, dining, and entertainment are minutes away. The neighborhood draws families who want Pinnacle High School's strong academics and the convenience of north Scottsdale amenities at Phoenix price points. The housing stock is well-maintained, mostly built in the late 1990s and 2000s, with a mix of single-family homes, patio homes, and townhome communities. Weekend routines include Saturday morning hikes at the nearby McDowell Sonoran Preserve and brunch along the Scottsdale Road restaurant corridor.",
    medianHomePrice: 500000,
    homeTypes: ["Single-Family", "Townhome", "Patio Home"],
    vibe: "A north Phoenix pocket on the Scottsdale border where homes look out toward the McDowell Mountains.",
    nearbySchools: [
      "Pinnacle High School",
      "Desert Canyon Elementary",
      "Explorer Middle School",
    ],
    walkScore: 32,
    highlights: [
      "Scottsdale border",
      "Desert Ridge Marketplace nearby",
      "Mountain views",
      "Tatum corridor",
    ],
  },
  {
    slug: "tramonto",
    name: "Tramonto",
    citySlug: "phoenix",
    countySlug: "maricopa",
    zipCodes: ["85086"],
    description:
      "Tramonto is a master-planned community in the north Valley that rewards residents with some of the most dramatic sunset views in metropolitan Phoenix. The name means sunset in Italian, and the western-facing homesites deliver on that promise with unobstructed views toward the Bradshaw Mountains. A community recreation center with pools, fitness facilities, and gathering spaces anchors daily life, while well-maintained trails wind through the desert washes that border the community. Boulder Creek High School serves the area, and families appreciate the newer school campuses that have been built to keep up with growth. The homes are mostly mid-2000s construction with stucco exteriors, tile roofs, and open floor plans. Lake Pleasant is an easy drive north for weekend boating and fishing.",
    medianHomePrice: 450000,
    homeTypes: ["Single-Family", "Patio Home"],
    vibe: "A north Phoenix master-planned community with a recreation center, community pools, and sunset views toward the Bradshaw Mountains.",
    nearbySchools: ["Boulder Creek High School", "Tramonto Ridge School"],
    walkScore: 20,
    highlights: [
      "Community recreation center",
      "Mountain views",
      "Hiking trails",
      "North Valley location",
    ],
  },

  // ============================================================
  // SCOTTSDALE (citySlug: "scottsdale", countySlug: "maricopa")
  // ============================================================
  {
    slug: "dc-ranch",
    name: "DC Ranch",
    citySlug: "scottsdale",
    countySlug: "maricopa",
    zipCodes: ["85255"],
    description:
      "DC Ranch is north Scottsdale luxury at its most refined. Nestled against the McDowell Mountains with direct access to the McDowell Sonoran Preserve, this master-planned community offers gated neighborhoods, two private clubs, and a charming Market Street village with restaurants, boutiques, and a Saturday farmers market. The Country Club at DC Ranch and the ultra-exclusive Silverleaf Club cater to different tiers of membership, from family-focused to corporate elite. Homes range from elegant patio homes in the mid-range to custom estates that push well into the millions, all designed to complement the desert landscape. The trail system connects to thousands of acres of protected Sonoran Desert, making it a paradise for hikers, trail runners, and mountain bikers who want world-class recreation outside their front door.",
    medianHomePrice: 1500000,
    homeTypes: ["Luxury Estate", "Custom", "Single-Family"],
    vibe: "A guarded luxury enclave at the base of the McDowell Mountains with a market street village and two private clubs.",
    nearbySchools: [
      "Desert Mountain High School",
      "Cochise Elementary",
      "Copper Ridge School",
    ],
    walkScore: 18,
    highlights: [
      "DC Ranch Market Street",
      "McDowell Sonoran Preserve",
      "Country Club at DC Ranch",
      "Silverleaf Club",
    ],
  },
  {
    slug: "grayhawk",
    name: "Grayhawk",
    citySlug: "scottsdale",
    countySlug: "maricopa",
    zipCodes: ["85255"],
    description:
      "Grayhawk delivers the north Scottsdale lifestyle without the gated exclusivity. This community is built around two championship golf courses, the Raptor and the Talon, and the Grayhawk village serves as a social hub with restaurants like Phil's Grill and an AJ's Fine Foods that doubles as a gathering spot. Families love the top-rated schools, the community parks with splash pads and playgrounds, and the trails that connect to the broader north Scottsdale path network. Housing options range from attached patio homes and townhomes to larger single-family residences with mountain views. The 101 freeway provides quick access to employment centers along the Scottsdale Road corridor, and the McDowell Sonoran Preserve is minutes away for weekend hikes. Grayhawk balances community warmth with Scottsdale polish.",
    medianHomePrice: 850000,
    homeTypes: ["Single-Family", "Townhome", "Patio Home", "Condo"],
    vibe: "A north Scottsdale golf community centered around two championship courses with a lively village of restaurants and shops.",
    nearbySchools: [
      "Desert Mountain High School",
      "Grayhawk Elementary",
      "Copper Ridge School",
    ],
    walkScore: 30,
    highlights: [
      "Grayhawk Golf Club (Raptor and Talon courses)",
      "AJ's Fine Foods",
      "Phil's Grill",
      "Community parks and pools",
    ],
  },
  {
    slug: "gainey-ranch",
    name: "Gainey Ranch",
    citySlug: "scottsdale",
    countySlug: "maricopa",
    zipCodes: ["85258"],
    description:
      "Gainey Ranch is one of Scottsdale's crown jewels. This gated community, developed by the Gainey family on former agricultural land, features meticulously maintained fairways, lush lakes, and estates that blend seamlessly into the manicured landscape. The Hyatt Regency Scottsdale Resort anchors the eastern edge, bringing resort-level dining and spa services to the neighborhood. The Gainey Village shopping center adds boutique retail and dining options right outside the gates. Homes here range from elegant attached villas along the golf course to sprawling custom estates with private courtyards and casitas. The Gainey Ranch Golf Club offers 27 holes of championship golf, and the community's central Scottsdale location puts Old Town, Fashion Square, and the 101 freeway within easy reach.",
    medianHomePrice: 1200000,
    homeTypes: ["Luxury Estate", "Condo", "Villa", "Custom"],
    vibe: "One of Scottsdale's most prestigious addresses where gated estates overlook manicured fairways and the Hyatt Regency resort.",
    nearbySchools: [
      "Chaparral High School",
      "Kiva Elementary",
      "Mohave Middle School",
    ],
    walkScore: 25,
    highlights: [
      "Gainey Ranch Golf Club",
      "Hyatt Regency Scottsdale",
      "The Gainey Village",
      "Lakes and waterways",
    ],
  },
  {
    slug: "mccormick-ranch",
    name: "McCormick Ranch",
    citySlug: "scottsdale",
    countySlug: "maricopa",
    zipCodes: ["85258", "85260"],
    description:
      "McCormick Ranch holds the distinction of being Scottsdale's first master-planned community, and decades later, it still stands as one of the Valley's best neighborhoods to call home. Built around a network of lakes, golf courses, and bike paths, this community feels green and connected in a way that most desert neighborhoods do not. Lake Margherite is the centerpiece, drawing joggers, cyclists, and families with strollers along its shores. The McCormick-Stillman Railroad Park nearby is a beloved family destination with a working carousel and miniature train rides. Housing ranges from updated original-era townhomes and condos to remodeled single-family homes with lake or golf course views. The Shea Boulevard corridor provides easy access to shopping, dining, and the 101 freeway.",
    medianHomePrice: 700000,
    homeTypes: ["Single-Family", "Townhome", "Condo", "Patio Home"],
    vibe: "Scottsdale's original master-planned community built around interconnected lakes, golf courses, and miles of bike paths.",
    nearbySchools: [
      "Chaparral High School",
      "Cochise Elementary",
      "Cocopah Middle School",
    ],
    walkScore: 38,
    highlights: [
      "McCormick Ranch Golf Club",
      "Lake Margherite",
      "Bike path network",
      "McCormick-Stillman Railroad Park",
    ],
  },
  {
    slug: "old-town-scottsdale",
    name: "Old Town Scottsdale",
    citySlug: "scottsdale",
    countySlug: "maricopa",
    zipCodes: ["85251"],
    description:
      "Old Town Scottsdale is Arizona's most walkable, most entertaining, and most dynamic urban neighborhood. From the Thursday night ArtWalk along the gallery district to the weekend energy of the Entertainment District to the high-end shopping at Scottsdale Fashion Square and Scottsdale Waterfront, Old Town packs an enormous amount of life into a compact area. Fifth Avenue shops cater to tourists and locals alike, and the restaurant scene stretches from upscale steakhouses to late-night taco spots. Housing is mostly condos, townhomes, and modern high-rises, with adaptive reuse projects converting older buildings into stylish lofts. The Scottsdale trolley and walkable grid make a car optional for daily errands. This is where Scottsdale's personality shines brightest.",
    medianHomePrice: 550000,
    homeTypes: ["Condo", "Townhome", "High-Rise", "Adaptive Reuse"],
    vibe: "The beating heart of Scottsdale where galleries, nightlife, and restaurants fill walkable blocks from the waterfront to 5th Avenue.",
    nearbySchools: [
      "Saguaro High School",
      "Navajo Elementary",
      "Tonalea K-8",
    ],
    walkScore: 78,
    highlights: [
      "Scottsdale ArtWalk",
      "5th Avenue shops",
      "Scottsdale Waterfront",
      "Entertainment district",
      "SouthBridge",
    ],
  },
  {
    slug: "north-scottsdale",
    name: "North Scottsdale",
    citySlug: "scottsdale",
    countySlug: "maricopa",
    zipCodes: ["85262"],
    description:
      "North Scottsdale is where the Sonoran Desert lives up to its postcard reputation. Custom homes on acre-plus lots sit among saguaros and palo verdes, with views stretching across washes and mountain ridgelines. Gated communities like Whisper Rock, Estancia, and Desert Highlands attract buyers who want privacy, space, and world-class golf. Pinnacle Peak anchors the area as both a landmark and a trailhead, and the Boulders Resort nearby adds a resort dimension. This is not a dense or walkable neighborhood by any measure, but that is precisely the point. Residents here chose the desert for its solitude, its sunsets, and the feeling of living on the edge of wild country while still being 30 minutes from Scottsdale Fashion Square and Sky Harbor airport.",
    medianHomePrice: 1100000,
    homeTypes: ["Luxury Estate", "Custom", "Ranchette", "Single-Family"],
    vibe: "Where the Sonoran Desert meets gated luxury, with custom homes on acre-plus lots and protected desert washes.",
    nearbySchools: [
      "Cactus Shadows High School",
      "Desert Sun Academy",
      "Lone Mountain Elementary",
    ],
    walkScore: 10,
    highlights: [
      "Troon North Golf Club",
      "Pinnacle Peak",
      "AZ-101 corridor",
      "Boulders Resort nearby",
    ],
  },
  {
    slug: "troon",
    name: "Troon",
    citySlug: "scottsdale",
    countySlug: "maricopa",
    zipCodes: ["85262"],
    description:
      "Troon is the pinnacle of north Scottsdale living, an exclusive enclave where custom homes are designed to merge with the desert landscape beneath Pinnacle Peak. The Troon North Golf Club, with its Monument and Pinnacle courses, consistently ranks among the top public courses in Arizona and draws golfers from around the world. Homes here are architectural statements, built with natural stone, rusted steel, and walls of glass that frame mountain panoramas. Guard-gated communities like Troon Village, Troon Fairways, and Estancia offer varying levels of privacy and amenity access. The Sonoran Desert envelops the area, and residents share the trails with jackrabbits, roadrunners, and the occasional coyote. This is desert luxury at its most dramatic.",
    medianHomePrice: 1300000,
    homeTypes: ["Luxury Estate", "Custom", "Golf Villa"],
    vibe: "An exclusive north Scottsdale enclave set against Pinnacle Peak with world-class golf and some of the valley's finest custom homes.",
    nearbySchools: ["Cactus Shadows High School", "Desert Sun Academy"],
    walkScore: 8,
    highlights: [
      "Troon North Golf Club",
      "Pinnacle Peak views",
      "Gated communities",
      "Desert luxury living",
    ],
  },
  {
    slug: "mcdowell-mountain-ranch",
    name: "McDowell Mountain Ranch",
    citySlug: "scottsdale",
    countySlug: "maricopa",
    zipCodes: ["85255"],
    description:
      "McDowell Mountain Ranch is north Scottsdale's best-kept secret for families who want trail access, community amenities, and solid schools without the seven-figure price tag. The community sits at the base of the McDowell Mountains with direct entry points into the McDowell Sonoran Preserve, one of the largest urban preserves in the country. The aquatic center and community parks keep kids busy, and the network of walking paths connects neighborhoods to schools, shopping, and each other. Desert Mountain High School serves the area with strong academics and competitive sports programs. Homes range from townhomes and patio homes to larger custom residences with mountain views. Thompson Peak Parkway connects to the 101 freeway, making this an accessible home base for work and play.",
    medianHomePrice: 750000,
    homeTypes: ["Single-Family", "Townhome", "Custom"],
    vibe: "A family-friendly community with direct trail access into the McDowell Sonoran Preserve and a vibrant aquatic center.",
    nearbySchools: [
      "Desert Mountain High School",
      "McDowell Mountain Elementary",
      "Cochise Elementary",
    ],
    walkScore: 22,
    highlights: [
      "McDowell Sonoran Preserve trails",
      "Aquatic Center",
      "Community parks",
      "Thompson Peak Parkway",
    ],
  },
  {
    slug: "scottsdale-ranch",
    name: "Scottsdale Ranch",
    citySlug: "scottsdale",
    countySlug: "maricopa",
    zipCodes: ["85258", "85260"],
    description:
      "Scottsdale Ranch is an established community near the intersection of Shea Boulevard and the 101 freeway, offering a comfortable, family-oriented lifestyle in the heart of Scottsdale. The neighborhood centers around Scottsdale Ranch Park, a community gathering place with sports fields, playgrounds, and ramadas that host weekend birthday parties and holiday events. Many of the homes back up to lakes or green belts, giving the area a lush feel that stands out in the desert. The TPC Scottsdale, home of the Waste Management Phoenix Open, is just down the road. Housing includes original single-family homes from the 1980s and 1990s alongside updated patio homes and townhomes. The Shea corridor puts grocery stores, medical offices, and restaurants within a five-minute drive.",
    medianHomePrice: 650000,
    homeTypes: ["Single-Family", "Patio Home", "Townhome"],
    vibe: "An established lakeside community near Shea Boulevard with mature landscaping and a real neighborhood feel.",
    nearbySchools: [
      "Chaparral High School",
      "Cochise Elementary",
      "Sequoya Elementary",
    ],
    walkScore: 32,
    highlights: [
      "Scottsdale Ranch Park",
      "Lake community",
      "Shea Boulevard corridor",
      "Near TPC Scottsdale",
    ],
  },
  {
    slug: "kierland",
    name: "Kierland",
    citySlug: "scottsdale",
    countySlug: "maricopa",
    zipCodes: ["85254"],
    description:
      "Kierland is the Scottsdale neighborhood that feels most like a walkable urban village. Anchored by Kierland Commons and the adjacent Scottsdale Quarter, this area offers one of the highest concentrations of restaurants, boutiques, and entertainment venues in the Valley, all connected by pedestrian-friendly streets and outdoor plazas. The Westin Kierland Resort adds spa services, golf, and resort dining to the mix. Condos and townhomes within walking distance of the retail centers are especially popular with young professionals and empty nesters who want a low-maintenance lifestyle with everything at their doorstep. Single-family neighborhoods nearby offer more space while keeping Kierland's amenities close. The 101 freeway and Scottsdale Road provide easy commuter access, and the energy here never really slows down.",
    medianHomePrice: 680000,
    homeTypes: ["Condo", "Townhome", "Single-Family"],
    vibe: "Built around Kierland Commons and the Westin resort, this area is one of Scottsdale's most walkable with shops and restaurants steps away.",
    nearbySchools: [
      "Chaparral High School",
      "Sequoya Elementary",
      "Navajo Elementary",
    ],
    walkScore: 55,
    highlights: [
      "Kierland Commons shopping",
      "Scottsdale Quarter",
      "Westin Kierland Resort",
      "North Sight Blvd restaurants",
    ],
  },

  // ============================================================
  // MESA (citySlug: "mesa", countySlug: "maricopa")
  // ============================================================
  {
    slug: "las-sendas",
    name: "Las Sendas",
    citySlug: "mesa",
    countySlug: "maricopa",
    zipCodes: ["85207"],
    description:
      "Las Sendas is northeast Mesa's premier hillside community, built into the foothills of the Usery Mountains with views that stretch across the Valley floor to Four Peaks and beyond. The Las Sendas Golf Club offers one of the most scenic rounds in the state, with holes carved into the natural desert terrain. The Trailhead members club provides pools, fitness, and a gathering point for community events. Homes range from courtyard patio homes at the lower elevations to custom hillside estates with dramatic desert landscaping and infinity pools. The Usery Mountain Regional Park is practically in the backyard, offering miles of trails including the popular Wind Cave trail. Red Mountain Freeway access keeps the commute manageable, and the neighborhood's elevated position means cooler evening breezes and stunning sunsets.",
    medianHomePrice: 650000,
    homeTypes: ["Single-Family", "Custom", "Luxury Estate", "Patio Home"],
    vibe: "A hillside golf community in the Usery Mountain foothills with panoramic Valley views and a members-only trailhead club.",
    nearbySchools: [
      "Red Mountain High School",
      "Las Sendas Elementary",
      "Fremont Junior High",
    ],
    walkScore: 15,
    highlights: [
      "Las Sendas Golf Club",
      "Usery Mountain Regional Park",
      "Wind Cave Trail",
      "Mountain views",
    ],
  },
  {
    slug: "red-mountain",
    name: "Red Mountain",
    citySlug: "mesa",
    countySlug: "maricopa",
    zipCodes: ["85207", "85215"],
    description:
      "Red Mountain is the established heart of northeast Mesa, a family-centered area defined by its namesake landmark and a strong sense of community. Red Mountain Park and the adjacent trails offer easy hiking, and Red Mountain High School has been producing generations of alumni since 1975. The housing stock is mostly single-family homes from the 1980s and 1990s, many of which have been thoughtfully updated while keeping their spacious desert lots. The Bush Highway and Saguaro Lake are a short drive northeast for weekend kayaking and tubing on the Salt River. Mesa Riverview shopping center and the Mesa Arts Center are a quick trip down the 202 freeway. Families appreciate the mature trees, quiet cul-de-sacs, and the feeling that this part of Mesa has been loved and lived in for a long time.",
    medianHomePrice: 480000,
    homeTypes: ["Single-Family", "Ranch", "Patio Home"],
    vibe: "Established northeast Mesa with a beloved high school, desert trails, and quick access to Saguaro Lake.",
    nearbySchools: [
      "Red Mountain High School",
      "Shepherd Junior High",
      "Red Mountain Ranch Elementary",
    ],
    walkScore: 28,
    highlights: [
      "Red Mountain Park",
      "Saguaro Lake access",
      "Salt River tubing",
      "Red Mountain High School legacy",
    ],
  },
  {
    slug: "dobson-ranch",
    name: "Dobson Ranch",
    citySlug: "mesa",
    countySlug: "maricopa",
    zipCodes: ["85202"],
    description:
      "Dobson Ranch is one of Mesa's original master-planned communities, and four decades later, it remains one of the most sought-after addresses in the East Valley. Built around a network of lakes, parks, and tree-lined walking paths, the neighborhood offers a mature, settled feel that newer communities simply cannot replicate. The man-made lakes throughout the community attract ducks, herons, and evening walkers, while Dobson Ranch Park provides sports fields, a swimming pool, and a community center. The light rail runs along Main Street on the neighborhood's northern edge, providing car-free access to Tempe and Phoenix. Shopping at Fiesta Mall and the Superstition Springs corridor is close. Homes here are affordable and range from townhomes and condos to traditional single-family houses, many with lake or greenbelt views.",
    medianHomePrice: 380000,
    homeTypes: ["Single-Family", "Townhome", "Condo"],
    vibe: "Mesa's beloved lakeside community with mature trees, walking paths, and light rail access along Main Street.",
    nearbySchools: [
      "Dobson High School",
      "Riverview High School",
      "Rhodes Junior High",
    ],
    walkScore: 48,
    highlights: [
      "Lake and greenbelt system",
      "Light rail access",
      "Dobson Ranch Park",
      "Mature landscaping",
    ],
  },
  {
    slug: "superstition-springs",
    name: "Superstition Springs",
    citySlug: "mesa",
    countySlug: "maricopa",
    zipCodes: ["85206", "85209"],
    description:
      "Superstition Springs takes its name from the mountain range visible on the eastern horizon and the shopping center that has anchored east Mesa's retail scene for decades. Superstition Springs Center and the surrounding Power Road corridor offer every shopping and dining option a family could need, while the Superstition Springs Golf Club provides 18 holes of affordable public golf. The neighborhood is predominantly single-family homes built in the 1990s and 2000s, with well-maintained HOA communities, community pools, and proximity to the 202 Santan Freeway. Eastmark and Gateway Airport are nearby, bringing new employment and energy to the area. The Superstition Mountains provide a dramatic eastern backdrop, and the Lost Dutchman State Park is a reasonable weekend drive. This is practical, comfortable East Valley living at its best.",
    medianHomePrice: 420000,
    homeTypes: ["Single-Family", "Townhome", "Patio Home"],
    vibe: "East Mesa's shopping and golf hub with Superstition Mountain views and easy freeway access.",
    nearbySchools: [
      "Mountain View High School",
      "Stapley Junior High",
      "Hale Elementary",
    ],
    walkScore: 35,
    highlights: [
      "Superstition Springs Center",
      "Superstition Springs Golf Club",
      "Power Road corridor",
      "Superstition Mountain views",
    ],
  },
  {
    slug: "eastmark",
    name: "Eastmark",
    citySlug: "mesa",
    countySlug: "maricopa",
    zipCodes: ["85212"],
    description:
      "Eastmark is southeast Mesa's flagship new community, and it has redefined what a modern Arizona neighborhood can be. Built on the site of the former Williams Air Force Base, this master-planned development centers community life around The Mark, a gathering space with food trucks, a splash pad, event lawns, and community programming that keeps the calendar packed. Homes are contemporary in design with smart-home features, efficient floor plans, and the kind of builder variety that gives buyers real choices. The Great Park serves as the community's green heart, with sports fields, playgrounds, and a catch-and-release fishing lake. Eastmark schools within the Higley Unified district have quickly earned strong reputations. The 202 freeway and Gateway Airport are minutes away, and the tech corridor along Elliot Road continues to attract employers.",
    medianHomePrice: 480000,
    homeTypes: ["Single-Family", "Townhome", "New Construction"],
    vibe: "Mesa's most celebrated new community with The Mark gathering space, a Great Park, and smart-home technology.",
    nearbySchools: [
      "Eastmark High School",
      "Eastmark Junior High",
      "Sequoia Pathway Academy",
    ],
    walkScore: 30,
    highlights: [
      "The Mark community gathering space",
      "Great Park",
      "Food truck events",
      "Gateway Airport corridor",
    ],
  },
  {
    slug: "mesa-downtown",
    name: "Mesa Downtown",
    citySlug: "mesa",
    countySlug: "maricopa",
    zipCodes: ["85201", "85210"],
    description:
      "Downtown Mesa is in the middle of one of the most exciting urban revivals in the Valley. The once-sleepy Main Street corridor has come alive with new restaurants, craft breweries, co-working spaces, and the Mesa Arts Center, one of the largest performing arts venues in the Southwest. The light rail connects downtown Mesa to Tempe and Phoenix, and a wave of new condo and apartment development is bringing residents into the walkable core. The Mesa City Plaza hosts farmers markets and community events, and locally owned businesses are filling storefronts that sat empty for years. Housing is affordable compared to Tempe and Scottsdale, making this an attractive option for first-time buyers and creatives. The energy here is genuine, and the revitalization still has room to grow.",
    medianHomePrice: 320000,
    homeTypes: ["Condo", "Townhome", "Single-Family", "Historic"],
    vibe: "A revitalizing urban core with the Mesa Arts Center, light rail, and an emerging restaurant and brewery scene.",
    nearbySchools: [
      "Mesa High School",
      "Carson Junior High",
      "Emerson Elementary",
    ],
    walkScore: 62,
    highlights: [
      "Mesa Arts Center",
      "Light rail access",
      "Main Street restaurants",
      "Mesa Farmers Market",
    ],
  },

  // ============================================================
  // CHANDLER (citySlug: "chandler", countySlug: "maricopa")
  // ============================================================
  {
    slug: "ocotillo",
    name: "Ocotillo",
    citySlug: "chandler",
    countySlug: "maricopa",
    zipCodes: ["85248", "85249"],
    description:
      "Ocotillo is south Chandler's crown jewel, a lakeside community built around a massive man-made lake and the Ocotillo Golf Resort. The lake draws stand-up paddleboarders, kayakers, and evening walkers, while the golf courses offer 27 holes of championship play. Shopping and dining along the Alma School Road corridor includes popular spots like The Porch and Brio Tuscan Grille at Chandler Fashion Center nearby. Homes surround the lakes and fairways, with many offering waterfront or golf course views. The Chandler Unified School District serves the area with consistently high-performing campuses. The 202 Santan Freeway and Price Road corridor provide commuter access to the tech jobs concentrated in south Chandler's employment centers. Ocotillo successfully blends resort-style living with everyday suburban convenience.",
    medianHomePrice: 600000,
    homeTypes: ["Single-Family", "Townhome", "Luxury Estate", "Patio Home"],
    vibe: "A lakeside community built around Ocotillo Golf Resort with waterfront living and top Chandler schools.",
    nearbySchools: [
      "Hamilton High School",
      "Santan Junior High",
      "Basha High School",
    ],
    walkScore: 30,
    highlights: [
      "Ocotillo Golf Resort",
      "Man-made lake with water sports",
      "Chandler Fashion Center nearby",
      "Price Road tech corridor",
    ],
  },
  {
    slug: "fulton-ranch",
    name: "Fulton Ranch",
    citySlug: "chandler",
    countySlug: "maricopa",
    zipCodes: ["85224", "85226"],
    description:
      "Fulton Ranch sits in the heart of Chandler and offers a well-rounded community experience centered around neighborhood parks, tree-lined walking paths, and a convenient location near the intersection of the 101 and 202 freeways. The community was built in the early 2000s and has matured nicely, with established landscaping and homes that reflect a range of sizes and price points. Intel's Chandler campus is a short commute south, and Downtown Chandler's restaurant row is just up Arizona Avenue. Chandler Unified schools serve the area, and families appreciate the reliable bus routes and nearby charter options. The Paseo Trail, a multi-use path that connects several Chandler neighborhoods, runs through the area. Fulton Ranch Park provides a community pool, sports courts, and picnic areas that host neighborhood gatherings year-round.",
    medianHomePrice: 480000,
    homeTypes: ["Single-Family", "Townhome", "Patio Home"],
    vibe: "A mature, centrally located Chandler community with parks, trails, and freeway access for tech corridor commuters.",
    nearbySchools: [
      "Chandler High School",
      "Willis Junior High",
      "Fulton Elementary",
    ],
    walkScore: 38,
    highlights: [
      "Fulton Ranch Park",
      "Paseo Trail",
      "Near Intel campus",
      "Downtown Chandler access",
    ],
  },
  {
    slug: "sun-groves",
    name: "Sun Groves",
    citySlug: "chandler",
    countySlug: "maricopa",
    zipCodes: ["85249"],
    description:
      "Sun Groves occupies a prime stretch of south Chandler where the homes are newer, the lots are generous, and the views of the San Tan Mountains to the east create a scenic daily backdrop. This planned community was built in the 2000s with family living in mind, and it shows in the wide sidewalks, pocket parks, and the community recreation center that keeps kids and adults active. Basha High School, one of the top-ranked campuses in the Chandler district, is a major draw for families. The 202 Santan Freeway is minutes away, connecting residents to employment centers across the Valley. Weekend life revolves around Saturday morning trail runs at nearby San Tan Mountain Regional Park and brunch along the Queen Creek Road corridor. Sun Groves is suburban Chandler at its most polished.",
    medianHomePrice: 520000,
    homeTypes: ["Single-Family", "Townhome"],
    vibe: "A south Chandler planned community with San Tan Mountain views, strong schools, and a family-first atmosphere.",
    nearbySchools: [
      "Basha High School",
      "Payne Junior High",
      "Sun Groves Elementary",
    ],
    walkScore: 25,
    highlights: [
      "San Tan Mountain views",
      "Community recreation center",
      "Basha High School district",
      "202 Santan Freeway access",
    ],
  },
  {
    slug: "chandler-downtown",
    name: "Chandler Downtown",
    citySlug: "chandler",
    countySlug: "maricopa",
    zipCodes: ["85225"],
    description:
      "Downtown Chandler has quietly become one of the Valley's best walkable neighborhoods. Arizona Avenue between Chandler Boulevard and Frye Road is lined with locally owned restaurants, craft breweries like SanTan Brewing Company, and boutique shops that give the area a small-town Main Street feel. The Chandler Center for the Arts hosts concerts and performances throughout the year, and the downtown farmers market draws weekend regulars. Housing ranges from charming 1950s ranch homes on tree-lined streets to new condo and townhome developments designed to capitalize on the walkable lifestyle. The annual Chandler Ostrich Festival and monthly art walks keep the community calendar full. Chandler's investment in its downtown has paid off, creating a genuine gathering place that residents are proud to call their own.",
    medianHomePrice: 400000,
    homeTypes: ["Single-Family", "Condo", "Townhome", "Ranch"],
    vibe: "A walkable, brewery-and-bistro downtown with a small-town feel and year-round community events.",
    nearbySchools: [
      "Chandler High School",
      "San Marcos Elementary",
      "Galveston Elementary",
    ],
    walkScore: 65,
    highlights: [
      "SanTan Brewing Company",
      "Chandler Center for the Arts",
      "Downtown farmers market",
      "Arizona Avenue restaurant row",
    ],
  },

  // ============================================================
  // GILBERT (citySlug: "gilbert", countySlug: "maricopa")
  // ============================================================
  {
    slug: "power-ranch",
    name: "Power Ranch",
    citySlug: "gilbert",
    countySlug: "maricopa",
    zipCodes: ["85297"],
    description:
      "Power Ranch is one of Gilbert's most established master-planned communities, and the reason is simple: it delivers everything a family needs without pretension. Built around a network of parks, fishing lakes, and community centers, Power Ranch offers a lifestyle that keeps kids outside and neighbors connected. The community boasts multiple pools, sports courts, and a full calendar of HOA events from summer movie nights to holiday festivals. Gilbert Public Schools serve the area with top-rated campuses, and the Power Road corridor provides access to every retail and dining option imaginable. Homes range from starter townhomes to larger single-family residences with pools and RV gates. The San Tan Mountain Regional Park is a short drive south for weekend hiking. Power Ranch is the community that gives Gilbert its family-friendly reputation.",
    medianHomePrice: 520000,
    homeTypes: ["Single-Family", "Townhome", "Patio Home"],
    vibe: "A beloved Gilbert master-planned community with fishing lakes, community events, and Gilbert's top-rated schools.",
    nearbySchools: [
      "Higley High School",
      "Power Ranch Elementary",
      "Sossaman Middle School",
    ],
    walkScore: 28,
    highlights: [
      "Community fishing lakes",
      "Power Ranch parks and pools",
      "San Tan Mountain Regional Park nearby",
      "Year-round HOA events",
    ],
  },
  {
    slug: "morrison-ranch",
    name: "Morrison Ranch",
    citySlug: "gilbert",
    countySlug: "maricopa",
    zipCodes: ["85234"],
    description:
      "Morrison Ranch is a newer Gilbert community that has quickly earned a reputation for its thoughtful design and family-centered amenities. The homes here reflect contemporary Arizona architecture with open floor plans, covered patios, and desert-adapted landscaping that keeps maintenance manageable. Community parks dot the neighborhood, connected by walking paths that wind past play structures, ramadas, and open green spaces. Gilbert Road and the 202 freeway provide easy access to Chandler's tech corridor, SanTan Village shopping, and the wider East Valley. Morrison Ranch Elementary and nearby campuses in the Gilbert Unified School District draw families who prioritize education. The neighborhood has a clean, well-maintained feel that reflects resident pride, and the location between established Gilbert and the growing southeast Valley corridor gives it long-term value.",
    medianHomePrice: 550000,
    homeTypes: ["Single-Family", "Townhome"],
    vibe: "A well-designed newer Gilbert community with contemporary homes, walking paths, and top-rated Gilbert schools.",
    nearbySchools: [
      "Mesquite High School",
      "Morrison Ranch Elementary",
      "South Valley Junior High",
    ],
    walkScore: 30,
    highlights: [
      "Community parks and paths",
      "Gilbert Unified schools",
      "Near SanTan Village Mall",
      "Contemporary home designs",
    ],
  },
  {
    slug: "val-vista-lakes",
    name: "Val Vista Lakes",
    citySlug: "gilbert",
    countySlug: "maricopa",
    zipCodes: ["85234"],
    description:
      "Val Vista Lakes is Gilbert's original lakeside community, and the neighborhood's waterfront lifestyle has made it a perennial favorite since it was built in the 1980s. The man-made lakes that wind through the community support paddleboarding, kayaking, and catch-and-release fishing, while tree-lined walking paths connect the waterfront to parks, playgrounds, and a community center. Many homes back directly onto the water, with private docks and patio views that feel worlds away from the desert. The Val Vista Lakes community center hosts swim meets, tennis leagues, and neighborhood socials. Gilbert's top-rated schools are a major draw for families, and the location near Val Vista Drive and Baseline Road puts shopping and dining within easy reach. This is a neighborhood where lakeside living meets East Valley convenience.",
    medianHomePrice: 500000,
    homeTypes: ["Single-Family", "Townhome", "Condo"],
    vibe: "Gilbert's beloved lakeside community with waterfront paths, paddleboarding, and a community center that keeps neighbors connected.",
    nearbySchools: [
      "Gilbert High School",
      "Greenfield Junior High",
      "Val Vista Lakes Elementary",
    ],
    walkScore: 35,
    highlights: [
      "Lakeside living and water sports",
      "Community center and pools",
      "Tree-lined walking paths",
      "Gilbert Unified schools",
    ],
  },
  {
    slug: "agritopia",
    name: "Agritopia",
    citySlug: "gilbert",
    countySlug: "maricopa",
    zipCodes: ["85296"],
    description:
      "Agritopia is unlike any other neighborhood in the Valley. This urban farm community in central Gilbert was built around a working organic farm, and residents can literally walk from their front porch to pick fresh produce at the farm stand. Joe's Farm Grill, a beloved Valley restaurant housed in the original Johnston family farmhouse, anchors the community's food culture. The Coffee Shop next door and Barnone, an indoor-outdoor entertainment venue with craft food stalls, have made Agritopia a destination for the entire metro area. Homes are designed in a neo-traditional style with front porches, tree-lined streets, and alley-loaded garages that prioritize pedestrian life. The lots are compact but the community spaces are generous. Gilbert Unified schools serve the area, and the Higley Road corridor connects to the 202 freeway.",
    medianHomePrice: 650000,
    homeTypes: ["Single-Family", "Cottage", "Custom"],
    vibe: "An urban farm community where working organic fields, Joe's Farm Grill, and front-porch living create something truly unique.",
    nearbySchools: [
      "Gilbert Classical Academy",
      "Highland Junior High",
      "Patterson Elementary",
    ],
    walkScore: 52,
    highlights: [
      "Working organic farm",
      "Joe's Farm Grill",
      "Barnone entertainment venue",
      "Front-porch community design",
    ],
  },
  {
    slug: "gilbert-downtown",
    name: "Gilbert Downtown",
    citySlug: "gilbert",
    countySlug: "maricopa",
    zipCodes: ["85233", "85234"],
    description:
      "Downtown Gilbert has transformed from a quiet agricultural crossroads into one of the Valley's most charming dining and entertainment districts. The Heritage District along Gilbert Road between Elliot and Guadalupe is packed with restaurants, ice cream shops, wine bars, and boutiques, all housed in a mix of renovated historic buildings and new construction that respects the area's agricultural roots. The Gilbert Water Tower is the iconic landmark, and the seasonal farmers market draws loyal weekend crowds. Housing in the surrounding blocks includes original ranch homes from the 1970s and 1980s alongside newer infill townhomes and cottages. Gilbert Unified schools serve the area, and the walkability here is among the best in the East Valley. If you want a downtown that feels genuine rather than manufactured, Gilbert delivers.",
    medianHomePrice: 420000,
    homeTypes: ["Single-Family", "Ranch", "Townhome", "Cottage"],
    vibe: "A charming Heritage District with restaurants, boutiques, and walkable streets that honor Gilbert's farming roots.",
    nearbySchools: [
      "Gilbert High School",
      "Mesquite Junior High",
      "Gilbert Elementary",
    ],
    walkScore: 58,
    highlights: [
      "Heritage District dining",
      "Gilbert Water Tower",
      "Downtown farmers market",
      "Walkable restaurant row",
    ],
  },

  // ============================================================
  // TEMPE (citySlug: "tempe", countySlug: "maricopa")
  // ============================================================
  {
    slug: "tempe-downtown",
    name: "Tempe Downtown",
    citySlug: "tempe",
    countySlug: "maricopa",
    zipCodes: ["85281"],
    description:
      "Downtown Tempe is the most energetic urban neighborhood in the East Valley, fueled by Arizona State University's main campus and the vibrant Mill Avenue District. Tempe Town Lake stretches along the Salt River, offering kayaking, paddleboarding, and a lakeside path popular with runners and cyclists. Mill Avenue's bars, restaurants, and live music venues keep the nightlife buzzing, while Tempe Marketplace and the surrounding blocks add retail depth. New high-rise apartments and condos have reshaped the skyline, bringing a density and walkability that rivals downtown Phoenix. The light rail connects Tempe to Mesa, Phoenix, and the airport, making car-free living genuinely possible. Housing ranges from student-oriented apartments to upscale condos with lake views. This is urban Arizona at its most vibrant and connected.",
    medianHomePrice: 380000,
    homeTypes: ["Condo", "High-Rise", "Townhome", "Loft"],
    vibe: "ASU's front yard with Tempe Town Lake, Mill Avenue nightlife, and light rail connectivity.",
    nearbySchools: [
      "Arizona State University",
      "Tempe High School",
      "Connolly Middle School",
    ],
    walkScore: 80,
    highlights: [
      "Tempe Town Lake",
      "Mill Avenue District",
      "Light rail access",
      "ASU campus",
      "Tempe Marketplace",
    ],
  },
  {
    slug: "maple-ash",
    name: "Maple-Ash",
    citySlug: "tempe",
    countySlug: "maricopa",
    zipCodes: ["85281"],
    description:
      "Maple-Ash is Tempe's most charming historic neighborhood, a tree-canopied pocket of streets just north of downtown where 1930s and 1940s bungalows sit on quiet lots shaded by massive ash and elm trees. The neighborhood is small and walkable, with an intimate scale that makes it feel more like a Midwestern college town than a Sunbelt suburb. Residents walk to Mill Avenue restaurants, bike to ASU events, and gather at neighborhood potlucks that have been a tradition for decades. The homes are modest in size but rich in character, with wood floors, original casement windows, and covered front porches. Tempe's light rail stops are within walking distance, and the neighborhood's central location puts everything in the Valley within easy reach. Maple-Ash is for people who value authenticity over square footage.",
    medianHomePrice: 520000,
    homeTypes: ["Historic Bungalow", "Ranch", "Craftsman", "Cottage"],
    vibe: "Tempe's most charming historic pocket with tree-canopied streets, 1930s bungalows, and a walkable path to Mill Avenue.",
    nearbySchools: [
      "Tempe High School",
      "Connolly Middle School",
      "Holdeman Elementary",
    ],
    walkScore: 75,
    highlights: [
      "Historic bungalow architecture",
      "Walkable to Mill Avenue",
      "Mature tree canopy",
      "Neighborhood character and community",
    ],
  },
  {
    slug: "university-heights",
    name: "University Heights",
    citySlug: "tempe",
    countySlug: "maricopa",
    zipCodes: ["85281", "85282"],
    description:
      "University Heights is the Tempe neighborhood that bridges campus life and residential calm. Located south of ASU's main campus between Rural Road and Mill Avenue, this area has a youthful energy tempered by long-term homeowners who appreciate the walkability and central location. The housing mix includes 1960s ranch homes with large yards, updated duplexes, and newer infill townhomes designed for the urban-minded buyer. Students, professors, young professionals, and retirees share the sidewalks, creating a diverse and dynamic community. Tempe Beach Park and the Town Lake are a bike ride north, and the 202 and I-10 freeways are accessible via Broadway and University. Local coffee shops and neighborhood restaurants along University Drive and Apache Boulevard give the area a relaxed, everyday vibe.",
    medianHomePrice: 400000,
    homeTypes: ["Single-Family", "Ranch", "Townhome", "Duplex"],
    vibe: "A walkable Tempe neighborhood between ASU and the freeway with a diverse mix of residents and housing styles.",
    nearbySchools: [
      "Arizona State University",
      "Tempe High School",
      "Marcos de Niza High School",
    ],
    walkScore: 68,
    highlights: [
      "ASU campus proximity",
      "Walkable to shops and restaurants",
      "Tempe Beach Park nearby",
      "Light rail access",
    ],
  },

  // ============================================================
  // GLENDALE (citySlug: "glendale", countySlug: "maricopa")
  // ============================================================
  {
    slug: "arrowhead-ranch",
    name: "Arrowhead Ranch",
    citySlug: "glendale",
    countySlug: "maricopa",
    zipCodes: ["85308"],
    description:
      "Arrowhead Ranch is the heart of northwest Glendale and one of the West Valley's most desirable neighborhoods. Built around the Arrowhead Country Club and anchored by the Arrowhead Towne Center mall, this community has been attracting families since the 1990s with its solid schools, well-maintained parks, and reliable home values. The 101 freeway runs right through the area, providing quick access to Scottsdale, Tempe, and downtown Phoenix. Homes range from starter properties to larger estate-style houses on the golf course, with many featuring pools, covered patios, and mountain views toward the White Tank Mountains to the west. Deer Valley Unified School District schools serve the area, and the retail along 75th Avenue and Bell Road means you rarely need to leave the neighborhood. Arrowhead Ranch is dependable, comfortable, and built to last.",
    medianHomePrice: 430000,
    homeTypes: ["Single-Family", "Townhome", "Patio Home"],
    vibe: "A well-established northwest Glendale community with a country club, top schools, and quick 101 freeway access.",
    nearbySchools: [
      "Deer Valley High School",
      "Mountain Ridge High School",
      "Arrowhead Elementary",
    ],
    walkScore: 38,
    highlights: [
      "Arrowhead Towne Center",
      "Arrowhead Country Club",
      "101 freeway access",
      "Deer Valley schools",
    ],
  },
  {
    slug: "glendale-downtown",
    name: "Glendale Downtown",
    citySlug: "glendale",
    countySlug: "maricopa",
    zipCodes: ["85301"],
    description:
      "Downtown Glendale is the antique capital of Arizona, and locals know the charming brick-front shops and vintage stores along Glendale Avenue are worth the drive from anywhere in the Valley. Historic Catlin Court, a neighborhood of restored bungalows turned into boutiques, cafes, and galleries, anchors the area with small-town character. The Cerreta Candy Company offers factory tours and handmade chocolates, and the annual Glendale Glitters holiday light display transforms downtown into a winter wonderland each December. Housing in the surrounding blocks includes affordable ranch homes from the 1950s and 1960s, many on generous lots with mature citrus trees. The light rail's western extension is improving connectivity, and the neighborhood's affordability makes it a strong option for first-time buyers looking for character and community.",
    medianHomePrice: 300000,
    homeTypes: ["Single-Family", "Ranch", "Historic Bungalow"],
    vibe: "Arizona's antique capital with Catlin Court charm, affordable ranch homes, and the famous Glendale Glitters holiday display.",
    nearbySchools: [
      "Glendale High School",
      "Independencia Elementary",
      "Bicentennial South Elementary",
    ],
    walkScore: 55,
    highlights: [
      "Catlin Court antique district",
      "Cerreta Candy Company",
      "Glendale Glitters holiday display",
      "Affordable historic homes",
    ],
  },

  // ============================================================
  // PEORIA (citySlug: "peoria", countySlug: "maricopa")
  // ============================================================
  {
    slug: "vistancia",
    name: "Vistancia",
    citySlug: "peoria",
    countySlug: "maricopa",
    zipCodes: ["85383"],
    description:
      "Vistancia is Peoria's signature master-planned community, a sprawling development in the north Valley that has attracted thousands of families with its excellent schools, abundant parks, and mountain-framed desert views. The community includes multiple distinct villages, each with its own personality and price range, from starter homes to luxury builds. A vibrant retail village along Vistancia Boulevard provides grocery stores, restaurants, and services, while the community trail system connects neighborhoods to schools and parks. Lake Pleasant Regional Park is a short drive north, opening up boating, fishing, and lakeside camping on weekends. Sunrise Mountain sits on the eastern edge, offering a quick hike with 360-degree Valley views. Peoria Unified School District campuses within Vistancia consistently rank among the best in the state.",
    medianHomePrice: 520000,
    homeTypes: ["Single-Family", "Townhome", "Patio Home"],
    vibe: "Peoria's master-planned crown jewel with village retail, mountain views, and some of Arizona's highest-rated schools.",
    nearbySchools: [
      "Sunrise Mountain High School",
      "Vistancia Elementary",
      "Heritage Elementary",
    ],
    walkScore: 25,
    highlights: [
      "Lake Pleasant Regional Park nearby",
      "Sunrise Mountain hiking",
      "Vistancia Village retail",
      "Top-rated Peoria schools",
    ],
  },
  {
    slug: "peoria-downtown",
    name: "Peoria Downtown",
    citySlug: "peoria",
    countySlug: "maricopa",
    zipCodes: ["85345"],
    description:
      "Downtown Peoria, known locally as Old Town Peoria, has been quietly revitalizing along Grand Avenue with new restaurants, a brewpub scene, and community events that are bringing fresh energy to one of the Valley's oldest agricultural towns. The Peoria Center for the Performing Arts and the nearby Peoria Sports Complex, home to spring training for the San Diego Padres and Seattle Mariners, anchor the area's entertainment offerings. Housing is affordable, with 1970s and 1980s ranch homes on large lots available at prices well below the Valley median. The New River trail system provides bike and walking paths, and Rio Vista Park offers community recreation. The neighborhood rewards buyers who recognize that early investment in a revitalizing area pays dividends. Old Town Peoria has roots and is growing new branches.",
    medianHomePrice: 350000,
    homeTypes: ["Single-Family", "Ranch", "Starter Home"],
    vibe: "A revitalizing agricultural town center with spring training baseball, craft breweries, and affordable ranch homes.",
    nearbySchools: [
      "Peoria High School",
      "Centennial High School",
      "Alta Loma Elementary",
    ],
    walkScore: 40,
    highlights: [
      "Peoria Sports Complex (spring training)",
      "Grand Avenue revitalization",
      "Peoria Center for the Performing Arts",
      "Affordable housing stock",
    ],
  },
  {
    slug: "trilogy-at-vistancia",
    name: "Trilogy at Vistancia",
    citySlug: "peoria",
    countySlug: "maricopa",
    zipCodes: ["85383"],
    description:
      "Trilogy at Vistancia is the Valley's premier active-adult community, designed for residents 55 and older who want resort-style living without leaving the neighborhood. The Kiva Club serves as the social and fitness hub with pools, a spa, a performance stage, and more clubs and activity groups than you can count. The Wickenburg-style championship golf course weaves through the community, and the views of the surrounding desert and distant mountains are breathtaking from the elevated homesites. Homes are single-level, energy-efficient designs with open floor plans and outdoor living spaces built for the Arizona climate. Lake Pleasant is minutes away for weekend boating, and the Vistancia retail village handles daily errands. The community calendar is packed with concerts, wine tastings, fitness classes, and group travel. Retirement here is anything but sedentary.",
    medianHomePrice: 480000,
    homeTypes: ["Single-Family", "Patio Home", "Villa"],
    vibe: "A premier 55-plus community with resort-caliber amenities, championship golf, and a social calendar that never stops.",
    nearbySchools: ["Sunrise Mountain High School", "Vistancia Elementary"],
    walkScore: 18,
    highlights: [
      "Kiva Club amenity center",
      "Championship golf course",
      "Lake Pleasant access",
      "Active-adult lifestyle",
    ],
  },

  // ============================================================
  // SURPRISE (citySlug: "surprise", countySlug: "maricopa")
  // ============================================================
  {
    slug: "marley-park",
    name: "Marley Park",
    citySlug: "surprise",
    countySlug: "maricopa",
    zipCodes: ["85379"],
    description:
      "Marley Park is the neighborhood that put Surprise on the map as more than just a retirement destination. This award-winning community was designed with a neo-traditional philosophy: front porches face the street, alleys handle garage access, and pocket parks appear on nearly every block. The Marley Park Heritage Club serves as the community gathering space with pools, a fitness center, and event lawns. Tree-lined sidewalks connect neighborhoods to schools, the community farm, and a playground network that keeps kids entertained. The homes are well-built, with architectural standards that give the streetscape a cohesive, inviting look. Surprise Stadium, where the Kansas City Royals and Texas Rangers hold spring training, is nearby. The 303 freeway provides west Valley commuter access. Marley Park proves that thoughtful planning creates neighborhoods people genuinely love.",
    medianHomePrice: 450000,
    homeTypes: ["Single-Family", "Townhome", "Cottage"],
    vibe: "An award-winning neo-traditional community with front porches, pocket parks, and a community farm in the heart of Surprise.",
    nearbySchools: [
      "Willow Canyon High School",
      "Marley Park Elementary",
      "Desert Oasis Elementary",
    ],
    walkScore: 35,
    highlights: [
      "Neo-traditional front-porch design",
      "Heritage Club amenity center",
      "Community farm",
      "Surprise Stadium spring training",
    ],
  },
  {
    slug: "surprise-farms",
    name: "Surprise Farms",
    citySlug: "surprise",
    countySlug: "maricopa",
    zipCodes: ["85388"],
    description:
      "Surprise Farms is one of the newer master-planned communities in the northwest Valley, offering fresh construction, modern floor plans, and a growing list of amenities that attract young families and relocating professionals. The community is built around green spaces, walking paths, and a central park that hosts neighborhood events. Homes feature energy-efficient construction, open-concept layouts, and covered patios designed for Arizona's outdoor lifestyle. The Dysart Unified School District serves the area with expanding campuses. The 303 freeway connects to the broader Valley, and the Prasada retail development nearby is bringing new shopping and dining to the area. White Tank Mountain Regional Park provides weekend hiking options, and Surprise Recreation Campus offers aquatic facilities and sports fields. The value per square foot here remains strong, drawing buyers priced out of the East Valley.",
    medianHomePrice: 400000,
    homeTypes: ["Single-Family", "Townhome", "New Construction"],
    vibe: "A fast-growing Surprise community with new construction, modern amenities, and strong value in the northwest Valley.",
    nearbySchools: [
      "Valley Vista High School",
      "Dysart High School",
      "Surprise Farms Elementary",
    ],
    walkScore: 22,
    highlights: [
      "New construction homes",
      "White Tank Mountain Regional Park nearby",
      "Prasada retail development",
      "303 freeway access",
    ],
  },

  // ============================================================
  // GOODYEAR (citySlug: "goodyear", countySlug: "maricopa")
  // ============================================================
  {
    slug: "estrella-mountain-ranch",
    name: "Estrella Mountain Ranch",
    citySlug: "goodyear",
    countySlug: "maricopa",
    zipCodes: ["85338"],
    description:
      "Estrella Mountain Ranch is the West Valley's answer to the question of whether master-planned communities can feel genuinely connected to the land. Set at the base of the Sierra Estrella Mountains, this community offers direct trail access to Estrella Mountain Regional Park, a lake for fishing and kayaking, and a championship golf course that plays through desert washes and along mountainsides. The Starpointe Residents Club anchors community life with pools, a fitness center, and gathering spaces. Homes range from affordable starter residences to spacious custom lots with mountain views. Agua Fria Union High School District and Litchfield Elementary campuses serve the area. The 303 freeway connects to I-10 for commuting, and Goodyear's PebbleCreek commercial corridor is nearby for daily needs. This is outdoor-focused West Valley living done right.",
    medianHomePrice: 430000,
    homeTypes: ["Single-Family", "Townhome", "Custom"],
    vibe: "A mountain-base community with trail access, a community lake, and championship golf in Goodyear's growing west side.",
    nearbySchools: [
      "Estrella Foothills High School",
      "Estrella Mountain Elementary",
      "Western Sky Middle School",
    ],
    walkScore: 20,
    highlights: [
      "Estrella Mountain Regional Park",
      "Community lake",
      "Golf course",
      "Starpointe Residents Club",
    ],
  },
  {
    slug: "palm-valley",
    name: "Palm Valley",
    citySlug: "goodyear",
    countySlug: "maricopa",
    zipCodes: ["85395"],
    description:
      "Palm Valley is Goodyear's most established and sought-after community, centered around the Palm Valley Golf Club and a network of lakes, parks, and tree-lined streets that give the area a mature, settled character. The PebbleCreek commercial corridor along the neighborhood's north side provides grocery stores, restaurants, and medical offices, while the Goodyear Ballpark hosts spring training baseball for the Cleveland Guardians and Cincinnati Reds. Families love the Litchfield Elementary District schools and the community's reputation for safety and neighborliness. Homes range from patio homes and townhomes for empty nesters to larger four- and five-bedroom houses for growing families. The I-10 freeway is minutes south, and the 303 connects to the broader West Valley. Palm Valley has been Goodyear's gold standard for over two decades.",
    medianHomePrice: 450000,
    homeTypes: ["Single-Family", "Patio Home", "Townhome"],
    vibe: "Goodyear's most established community with a golf club, spring training ballpark, and mature tree-lined streets.",
    nearbySchools: [
      "Millennium High School",
      "Desert Edge High School",
      "Palm Valley Elementary",
    ],
    walkScore: 30,
    highlights: [
      "Palm Valley Golf Club",
      "Goodyear Ballpark (spring training)",
      "PebbleCreek shopping corridor",
      "Community lakes and parks",
    ],
  },
  {
    slug: "canyon-trails",
    name: "Canyon Trails",
    citySlug: "goodyear",
    countySlug: "maricopa",
    zipCodes: ["85338"],
    description:
      "Canyon Trails is one of Goodyear's newest master-planned communities, attracting a wave of young families and first-time buyers with its modern homes, community parks, and competitive pricing. The community is built along the Estrella Mountain corridor with mountain views to the south and a growing network of paths, playgrounds, and pocket parks. The Canyon Trails Community Center provides pools, fitness facilities, and event space. Agua Fria Union High School District campuses serve the area, and new school construction is keeping pace with residential growth. The 303 freeway provides commuter access to I-10 and the broader Valley, while the Estrella Mountain Regional Park is a short drive for weekend hiking and biking. Goodyear's rapid commercial development along McDowell Road is adding restaurants, retail, and services that reduce the need to travel east.",
    medianHomePrice: 400000,
    homeTypes: ["Single-Family", "Townhome", "New Construction"],
    vibe: "A growing Goodyear community with new homes, mountain views, and a young, energetic resident base.",
    nearbySchools: [
      "Canyon View High School",
      "Western Sky Middle School",
      "Canyon Trails Elementary",
    ],
    walkScore: 18,
    highlights: [
      "Canyon Trails Community Center",
      "Estrella Mountain views",
      "New construction value",
      "303 freeway access",
    ],
  },
  {
    slug: "pebblecreek",
    name: "PebbleCreek",
    citySlug: "goodyear",
    countySlug: "maricopa",
    zipCodes: ["85395"],
    description:
      "PebbleCreek is Goodyear's answer to Sun City, a thriving active-adult community designed for residents 55 and older who want golf, fitness, and a packed social calendar in the West Valley. Two championship golf courses, the Eagle's Nest and the Tuscany Falls, wind through the community, and the Creative Arts Center offers everything from pottery studios to stained glass workshops. The fitness center and resort-style pools rival any commercial gym. Homes are single-level designs with low-maintenance yards and floor plans built for entertaining. The community's Eagle's Nest clubhouse hosts dances, concerts, and holiday events that keep the social scene buzzing year-round. Goodyear Ballpark is nearby for spring training games, and the White Tank Mountains provide a scenic western backdrop. PebbleCreek proves that active retirement in Arizona can be both affordable and abundant.",
    medianHomePrice: 400000,
    homeTypes: ["Single-Family", "Patio Home", "Villa"],
    vibe: "A vibrant 55-plus community with two golf courses, creative arts studios, and a social calendar packed year-round.",
    nearbySchools: ["Millennium High School", "Palm Valley Elementary"],
    walkScore: 22,
    highlights: [
      "Two championship golf courses",
      "Creative Arts Center",
      "Eagle's Nest clubhouse",
      "Resort-style pools and fitness",
    ],
  },
  {
    slug: "cantamia",
    name: "Cantamia",
    citySlug: "goodyear",
    countySlug: "maricopa",
    zipCodes: ["85338"],
    description:
      "Cantamia is a boutique community within the larger Estrella development in Goodyear, designed for active adults who want a smaller, more intimate neighborhood without sacrificing amenities. The community centers around a stunning clubhouse with a resort pool, fitness center, and outdoor entertaining spaces that take advantage of the Estrella Mountain views. Homes are single-level with modern open floor plans, gourmet kitchens, and covered patios that blur the line between indoor and outdoor living. The trail system connects to Estrella Mountain Regional Park, and the Estrella golf course is minutes away. The I-10 and 303 freeways handle commuting for those who are still working, while the Goodyear and Buckeye commercial corridors provide shopping and dining. Cantamia appeals to downsizers who want quality over quantity and a tight-knit community.",
    medianHomePrice: 380000,
    homeTypes: ["Single-Family", "Patio Home"],
    vibe: "A boutique active-adult community with mountain views, a resort-style clubhouse, and trails to Estrella Mountain Regional Park.",
    nearbySchools: [
      "Estrella Foothills High School",
      "Estrella Mountain Elementary",
    ],
    walkScore: 15,
    highlights: [
      "Resort-style clubhouse",
      "Estrella Mountain views",
      "Trail access",
      "Intimate community size",
    ],
  },

  // ============================================================
  // BUCKEYE (citySlug: "buckeye", countySlug: "maricopa")
  // ============================================================
  {
    slug: "verrado",
    name: "Verrado",
    citySlug: "buckeye",
    countySlug: "maricopa",
    zipCodes: ["85396"],
    description:
      "Verrado is the crown jewel of Buckeye and one of the most thoughtfully designed master-planned communities in the entire Valley. Set against the White Tank Mountains, the community features a walkable Main Street with locally owned shops, restaurants, and a heritage-style downtown that hosts farmers markets and community events. Homes range from starter-sized to custom estates, all designed with front porches, tree-lined streets, and alley-loaded garages that create a pedestrian-friendly environment. The Victory Club amenity center offers pools, splash pads, fitness facilities, and event space. The Agua Fria Union and Buckeye Union school districts serve the area with highly regarded campuses. Skyline Regional Park provides mountain hiking at the community's western edge, and the I-10 freeway connects to the broader Valley. Verrado feels like a small town that happens to sit in a growing metropolis.",
    medianHomePrice: 450000,
    homeTypes: ["Single-Family", "Townhome", "Custom", "Cottage"],
    vibe: "A walkable Main Street community against the White Tank Mountains with front porches, local shops, and small-town spirit.",
    nearbySchools: [
      "Verrado High School",
      "Verrado Middle School",
      "Verrado Heritage Elementary",
    ],
    walkScore: 35,
    highlights: [
      "Walkable Main Street",
      "White Tank Mountains backdrop",
      "Victory Club amenity center",
      "Skyline Regional Park",
    ],
  },
  {
    slug: "tartesso",
    name: "Tartesso",
    citySlug: "buckeye",
    countySlug: "maricopa",
    zipCodes: ["85396"],
    description:
      "Tartesso is one of Buckeye's fastest-growing communities, drawing families from across the Valley with its new construction homes, competitive pricing, and a location that balances desert openness with growing convenience. The community is built along the I-10 corridor west of Verrado, offering mountain views toward the White Tanks and a community center with pools, playgrounds, and sports courts. Homes are builder-fresh with modern floor plans, energy-efficient features, and the kind of square footage that would cost significantly more in the East Valley. The Buckeye Union School District is expanding rapidly to serve the area, with new campuses coming online to keep pace with growth. Sundance Park and the community trail system provide recreation, and the I-10 corridor is adding retail and services as rooftops multiply. Early buyers here are building equity in one of the Valley's strongest growth corridors.",
    medianHomePrice: 380000,
    homeTypes: ["Single-Family", "New Construction"],
    vibe: "A rapidly growing Buckeye community with new construction, competitive prices, and White Tank Mountain views.",
    nearbySchools: [
      "Youngker High School",
      "Tartesso Elementary",
      "Buckeye Union schools",
    ],
    walkScore: 15,
    highlights: [
      "New construction value",
      "White Tank Mountain views",
      "Community center and pools",
      "I-10 corridor growth",
    ],
  },
  {
    slug: "festival-ranch",
    name: "Festival Ranch",
    citySlug: "buckeye",
    countySlug: "maricopa",
    zipCodes: ["85326"],
    description:
      "Festival Ranch is an established Buckeye community that has matured into a comfortable, family-oriented neighborhood with strong community bonds. Located near the intersection of MC 85 and Watson Road, this development offers single-family homes with spacious yards, community parks, and a recreation center with a pool and fitness area. The Buckeye Union School District serves the area, and families appreciate the quiet streets and neighborhood feel that Festival Ranch maintains even as Buckeye grows around it. The nearby Buckeye Hills Regional Park provides weekend hiking with panoramic desert views, and the town of Buckeye's growing commercial corridor along Yuma Road adds new dining and shopping options. Home prices remain among the most affordable in the metro area, making Festival Ranch an ideal entry point for first-time buyers and young families.",
    medianHomePrice: 370000,
    homeTypes: ["Single-Family", "Starter Home"],
    vibe: "An affordable, family-friendly Buckeye neighborhood with community parks and strong neighborhood bonds.",
    nearbySchools: [
      "Buckeye Union High School",
      "Buckeye Elementary",
      "Sundance Elementary",
    ],
    walkScore: 12,
    highlights: [
      "Affordable home prices",
      "Community recreation center",
      "Buckeye Hills Regional Park nearby",
      "Growing commercial corridor",
    ],
  },

  // ============================================================
  // QUEEN CREEK (citySlug: "queen-creek", countySlug: "maricopa")
  // ============================================================
  {
    slug: "circle-g",
    name: "Circle G at Queen Creek",
    citySlug: "queen-creek",
    countySlug: "maricopa",
    zipCodes: ["85142"],
    description:
      "Circle G is one of Queen Creek's original residential communities, and its horse-friendly lots and equestrian lifestyle set it apart from the newer master-planned developments nearby. Many properties here feature horse privileges, allowing residents to keep their animals on-site and ride along the area's equestrian trails. The lots are generous by Valley standards, often a half-acre or more, and the homes reflect a range of styles from updated ranchers to custom Southwest builds. Queen Creek's charming downtown along Ellsworth Road offers farm-to-table dining, a local olive mill, and the Schnepf Farms complex, which hosts seasonal festivals that draw visitors from across Arizona. The Queen Creek Unified School District provides strong academics, and San Tan Mountain Regional Park is a short drive for hiking and mountain biking.",
    medianHomePrice: 500000,
    homeTypes: ["Single-Family", "Ranchette", "Custom"],
    vibe: "A horse-friendly Queen Creek community with large lots, equestrian trails, and proximity to Schnepf Farms.",
    nearbySchools: [
      "Queen Creek High School",
      "Newell Barney Junior High",
      "Frances Brandon Pickett Elementary",
    ],
    walkScore: 15,
    highlights: [
      "Equestrian properties",
      "Schnepf Farms seasonal festivals",
      "San Tan Mountain Regional Park",
      "Queen Creek Olive Mill",
    ],
  },
  {
    slug: "queen-creek-station",
    name: "Queen Creek Station",
    citySlug: "queen-creek",
    countySlug: "maricopa",
    zipCodes: ["85142"],
    description:
      "Queen Creek Station is a newer master-planned community that captures the small-town energy Queen Creek is known for while offering the modern amenities today's families expect. The community includes a central park, splash pad, sports courts, and walking paths that connect neighborhoods to schools and green spaces. Homes are contemporary in design with open floor plans, covered patios, and two-car garages, built by a roster of respected national and regional builders. Queen Creek Unified School District campuses serve the area, and the growing Ellsworth Road corridor brings new dining and retail within easy reach. San Tan Mountain Regional Park offers weekend hiking, and Queen Creek's agricultural heritage remains visible in the farm tours, u-pick events, and roadside produce stands that dot the surrounding landscape.",
    medianHomePrice: 480000,
    homeTypes: ["Single-Family", "Townhome", "New Construction"],
    vibe: "A modern Queen Creek community with contemporary homes, community parks, and the town's signature small-town charm.",
    nearbySchools: [
      "Queen Creek High School",
      "Queen Creek Middle School",
      "Jack Barnes Elementary",
    ],
    walkScore: 20,
    highlights: [
      "Central park and splash pad",
      "Queen Creek small-town feel",
      "San Tan Mountain Regional Park",
      "Ellsworth Road corridor",
    ],
  },

  // ============================================================
  // PARADISE VALLEY (citySlug: "paradise-valley", countySlug: "maricopa")
  // ============================================================
  {
    slug: "paradise-valley-estates",
    name: "Paradise Valley Estates",
    citySlug: "paradise-valley",
    countySlug: "maricopa",
    zipCodes: ["85253"],
    description:
      "Paradise Valley Estates represent some of the most coveted real estate in all of Arizona. The town of Paradise Valley, nestled between Camelback Mountain and Mummy Mountain, has no commercial zoning, no streetlights, and a one-acre minimum lot size that preserves its quiet, exclusive character. Estates here feature custom architecture by nationally recognized firms, resort-style pools and outdoor entertaining spaces, and views that encompass the McDowell Mountains, Piestewa Peak, and the city lights below. The Scottsdale Unified School District serves the area, and world-class resorts like The Phoenician, Mountain Shadows, and the Sanctuary are essentially neighbors. This is where Arizona's most prominent business leaders, athletes, and executives live. The privacy is absolute, the landscapes are immaculate, and the sunsets from your own backyard rival any viewpoint in the state.",
    medianHomePrice: 2500000,
    homeTypes: ["Luxury Estate", "Custom", "Compound"],
    vibe: "Arizona's most exclusive residential enclave with one-acre minimums, custom estates, and mountain views in every direction.",
    nearbySchools: [
      "Scottsdale Unified School District",
      "Kiva Elementary",
      "Chaparral High School",
    ],
    walkScore: 8,
    highlights: [
      "One-acre minimum lots",
      "Camelback and Mummy Mountain views",
      "Adjacent world-class resorts",
      "Ultra-private residential enclave",
    ],
  },
  {
    slug: "clearwater-hills",
    name: "Clearwater Hills",
    citySlug: "paradise-valley",
    countySlug: "maricopa",
    zipCodes: ["85253"],
    description:
      "Clearwater Hills is the most prestigious pocket within the already-exclusive town of Paradise Valley. Perched on elevated terrain with commanding views of Camelback Mountain, Mummy Mountain, and the surrounding Valley, the estates here are architectural masterworks set on multi-acre lots with privacy walls, guest houses, and grounds that rival boutique resorts. The neighborhood's winding roads and lack of sidewalks or commercial intrusion create an atmosphere of complete seclusion. Scottsdale's finest dining, shopping, and gallery districts are minutes away, and the Mountain Shadows resort and Camelback Golf Club sit at the base of the hill. Homes in Clearwater Hills rarely come to market, and when they do, they command the highest prices in the state. This is Arizona residential real estate at its absolute pinnacle.",
    medianHomePrice: 3000000,
    homeTypes: ["Luxury Estate", "Custom", "Compound"],
    vibe: "The pinnacle of Paradise Valley living with multi-acre estates, panoramic mountain views, and complete seclusion.",
    nearbySchools: [
      "Scottsdale Unified School District",
      "Kiva Elementary",
      "Chaparral High School",
    ],
    walkScore: 5,
    highlights: [
      "Highest home values in Arizona",
      "Panoramic mountain views",
      "Multi-acre estate lots",
      "Complete residential seclusion",
    ],
  },

  // ============================================================
  // FOUNTAIN HILLS (citySlug: "fountain-hills", countySlug: "maricopa")
  // ============================================================
  {
    slug: "firerock",
    name: "FireRock",
    citySlug: "fountain-hills",
    countySlug: "maricopa",
    zipCodes: ["85268"],
    description:
      "FireRock is Fountain Hills' premier gated golf community, set high in the McDowell Mountain foothills with sweeping views of Four Peaks, the Mazatzal Mountains, and the red-rock terrain that gives the community its name. The FireRock Country Club features a championship golf course designed by the Gary Panks group, along with dining, fitness, and social amenities that create a true club lifestyle. Homes are custom-built on generous desert lots, with architectural styles ranging from contemporary desert modern to rustic Southwest. The community's elevation provides cooler temperatures than the Valley floor, and the night sky views are spectacular. Fountain Hills' famous 560-foot fountain is a short drive downtown, and the McDowell Mountain Regional Park's trail system offers hiking and biking directly from the community's edge.",
    medianHomePrice: 900000,
    homeTypes: ["Luxury Estate", "Custom", "Golf Villa"],
    vibe: "A gated golf community in the McDowell Mountain foothills with custom homes and Four Peaks panoramas.",
    nearbySchools: [
      "Fountain Hills High School",
      "Four Peaks Elementary",
      "Fountain Hills Middle School",
    ],
    walkScore: 10,
    highlights: [
      "FireRock Country Club",
      "McDowell Mountain views",
      "Custom desert homes",
      "McDowell Mountain Regional Park",
    ],
  },
  {
    slug: "fountain-hills-downtown",
    name: "Fountain Hills Downtown",
    citySlug: "fountain-hills",
    countySlug: "maricopa",
    zipCodes: ["85268"],
    description:
      "Downtown Fountain Hills is a small-town gem centered around the world-famous Fountain Hills fountain, which shoots water up to 560 feet into the air every hour from the center of a lakeside park. The town's Avenue of the Fountains is lined with shops, galleries, restaurants, and the community center that hosts weekly art fairs and seasonal festivals. The Great Fair, held each fall and spring, draws thousands of visitors with artisan vendors and live music. Housing near downtown includes condos and townhomes along the lake, established single-family homes with desert landscaping, and newer patio homes designed for low-maintenance living. The Fountain Hills Unified School District is small and attentive, and the community's location east of Scottsdale provides a buffer from Valley sprawl while keeping city amenities within a 25-minute drive.",
    medianHomePrice: 550000,
    homeTypes: ["Single-Family", "Condo", "Townhome", "Patio Home"],
    vibe: "A charming small town centered around the famous 560-foot fountain, with galleries, restaurants, and a close-knit community.",
    nearbySchools: [
      "Fountain Hills High School",
      "Fountain Hills Middle School",
      "McDowell Mountain Elementary",
    ],
    walkScore: 35,
    highlights: [
      "World-famous fountain",
      "Avenue of the Fountains shops",
      "The Great Fair",
      "Fountain Park lakeside setting",
    ],
  },

  // ============================================================
  // CAVE CREEK (citySlug: "cave-creek", countySlug: "maricopa")
  // ============================================================
  {
    slug: "tatum-ranch",
    name: "Tatum Ranch",
    citySlug: "cave-creek",
    countySlug: "maricopa",
    zipCodes: ["85331"],
    description:
      "Tatum Ranch is the gateway to Cave Creek's desert lifestyle, a master-planned community along the Tatum Boulevard corridor where suburban convenience meets Sonoran Desert beauty. The community is built around the Rancho Manana Golf Club, and the homes look out toward Black Mountain, Elephant Butte, and the dramatic boulder formations that define the Cave Creek landscape. Tatum Ranch Park provides sports fields, playgrounds, and a community center, while the Tatum Boulevard commercial corridor offers grocery stores, restaurants, and services. Cave Creek's famous Western-themed downtown with its honky-tonk bars, art galleries, and trail rides is just up the road. The Cactus Shadows High School campus serves the area with strong academics and a close-knit campus culture. Tatum Ranch gives you the Cave Creek vibe with the daily conveniences of suburban Phoenix.",
    medianHomePrice: 650000,
    homeTypes: ["Single-Family", "Custom", "Patio Home"],
    vibe: "A desert master-planned community at the mouth of Cave Creek with golf, mountain views, and a Western-town neighbor.",
    nearbySchools: [
      "Cactus Shadows High School",
      "Black Mountain Elementary",
      "Sonoran Trails Middle School",
    ],
    walkScore: 22,
    highlights: [
      "Rancho Manana Golf Club",
      "Black Mountain views",
      "Cave Creek downtown nearby",
      "Tatum Ranch Park",
    ],
  },
  {
    slug: "cave-creek-downtown",
    name: "Cave Creek Downtown",
    citySlug: "cave-creek",
    countySlug: "maricopa",
    zipCodes: ["85331"],
    description:
      "Downtown Cave Creek is the Valley's most authentic Western town, a place where horses are still tied up outside saloons, live country music spills out of Harold's Corral on weekends, and the Spur Cross Ranch Conservation Area preserves thousands of acres of pristine Sonoran Desert. The town center along Cave Creek Road is lined with art galleries, Southwestern boutiques, biker-friendly bars, and restaurants like the Horny Toad that have been feeding locals for decades. Housing around downtown includes custom homes on acre-plus lots, ranchettes with horse privileges, and older properties with the kind of character that new construction cannot replicate. The lifestyle here is deliberately unhurried. Residents keep horses, hike to ancient petroglyphs, and watch coyotes cross their driveways at dusk. Cave Creek is where Phoenix goes to remember what Arizona used to feel like.",
    medianHomePrice: 700000,
    homeTypes: ["Custom", "Ranchette", "Single-Family"],
    vibe: "Arizona's most authentic Western town with saloons, galleries, horse properties, and the Spur Cross Conservation Area.",
    nearbySchools: [
      "Cactus Shadows High School",
      "Desert Sun Academy",
      "Black Mountain Elementary",
    ],
    walkScore: 18,
    highlights: [
      "Spur Cross Ranch Conservation Area",
      "Harold's Corral",
      "Western-town atmosphere",
      "Horse properties and equestrian trails",
    ],
  },

  // ============================================================
  // ANTHEM (citySlug: "anthem", countySlug: "maricopa")
  // ============================================================
  {
    slug: "anthem-country-club",
    name: "Anthem Country Club",
    citySlug: "anthem",
    countySlug: "maricopa",
    zipCodes: ["85086"],
    description:
      "Anthem Country Club is the gated, amenity-rich side of the Anthem master-planned community in north Phoenix. The Persimmon and Ironwood golf courses provide 36 holes of championship golf, and the country club offers dining, fitness, tennis, and a social calendar that rivals any resort. Homes range from elegant patio homes along the fairways to spacious family residences and custom hillside estates with Daisy Mountain views. The community's elevation provides slightly cooler temperatures than the Valley floor, and the desert landscape is particularly stunning during spring wildflower season. Boulder Creek High School and Anthem-area elementary campuses serve families with strong academic programs. The I-17 freeway connects to downtown Phoenix in about 35 minutes, and the New River trail system adds hiking and biking options. Anthem Country Club delivers a resort lifestyle with real community roots.",
    medianHomePrice: 550000,
    homeTypes: ["Single-Family", "Custom", "Patio Home", "Golf Villa"],
    vibe: "A gated golf community in Anthem with 36 holes, country club dining, and Daisy Mountain views.",
    nearbySchools: [
      "Boulder Creek High School",
      "Anthem School",
      "Diamond Canyon Elementary",
    ],
    walkScore: 15,
    highlights: [
      "Persimmon and Ironwood golf courses",
      "Country club amenities",
      "Daisy Mountain views",
      "Gated community security",
    ],
  },
  {
    slug: "anthem-parkside",
    name: "Anthem Parkside",
    citySlug: "anthem",
    countySlug: "maricopa",
    zipCodes: ["85086"],
    description:
      "Anthem Parkside is the family-friendly, non-gated portion of the Anthem master-planned community, and it has earned a reputation as one of the best places to raise kids in the north Valley. The Community Center is a massive amenity complex with water slides, lap pools, sports courts, a rock climbing wall, and event spaces that host everything from movie nights to holiday celebrations. The park system is extensive, with playgrounds, sports fields, and trail connections throughout the community. Boulder Creek High School, Anthem School, and a network of elementary campuses provide strong education options. Homes are well-maintained, mostly built between 2000 and 2010, with traditional and Southwestern architectural styles. The I-17 commute corridor connects to Phoenix and Scottsdale, and the Anthem retail center handles groceries, dining, and everyday needs. Parkside is where Anthem's community spirit lives.",
    medianHomePrice: 450000,
    homeTypes: ["Single-Family", "Townhome"],
    vibe: "Anthem's family heart with a massive community center, water park amenities, and some of the north Valley's best schools.",
    nearbySchools: [
      "Boulder Creek High School",
      "Anthem School",
      "Gavilan Peak School",
    ],
    walkScore: 22,
    highlights: [
      "Anthem Community Center and water park",
      "Extensive park system",
      "Boulder Creek High School",
      "Trail network",
    ],
  },

  // ============================================================
  // SAN TAN VALLEY (citySlug: "san-tan-valley", countySlug: "pinal")
  // ============================================================
  {
    slug: "johnson-ranch",
    name: "Johnson Ranch",
    citySlug: "san-tan-valley",
    countySlug: "pinal",
    zipCodes: ["85143"],
    description:
      "Johnson Ranch is San Tan Valley's original master-planned community and remains one of Pinal County's most desirable addresses. The Johnson Ranch Golf Club anchors the community with an affordable but well-maintained 18-hole course, and the community center provides pools, fitness, and gathering spaces. Homes range from starter-sized three-bedrooms to larger family homes with pools and mountain views. The J.O. Combs Unified School District serves the area with campuses that have improved steadily as enrollment has grown. San Tan Mountain Regional Park is practically in the backyard, offering some of the best desert hiking in the southeast Valley. The Hunt Highway corridor connects to the 202 freeway, and commercial development along Ironwood Drive has brought grocery stores, restaurants, and medical offices closer to home. Johnson Ranch offers solid value and a genuine community atmosphere.",
    medianHomePrice: 380000,
    homeTypes: ["Single-Family", "Townhome", "Patio Home"],
    vibe: "San Tan Valley's anchor community with a golf club, mountain park access, and strong neighborhood bonds.",
    nearbySchools: [
      "Combs High School",
      "Combs Middle School",
      "Saddleback Elementary",
    ],
    walkScore: 18,
    highlights: [
      "Johnson Ranch Golf Club",
      "San Tan Mountain Regional Park",
      "Community center and pools",
      "Affordable family homes",
    ],
  },
  {
    slug: "pecan-creek",
    name: "Pecan Creek",
    citySlug: "san-tan-valley",
    countySlug: "pinal",
    zipCodes: ["85140"],
    description:
      "Pecan Creek is a quiet, affordable community in San Tan Valley that appeals to families and retirees who want space, value, and a slower pace of life. The neighborhood gets its name from the pecan orchards that once dominated this stretch of Pinal County, and some of that agricultural character remains in the area's wide-open feel and generous lot sizes. Homes are mostly single-family construction from the 2000s and 2010s, with practical floor plans and desert landscaping. The community park provides a gathering place for neighborhood events, and the San Tan Mountain Regional Park is nearby for hiking. The J.O. Combs school district campuses serve the area, and the Ironwood corridor provides retail and dining. Pecan Creek delivers honest value in a part of the Valley that is growing steadily without losing its unhurried character.",
    medianHomePrice: 350000,
    homeTypes: ["Single-Family", "Starter Home"],
    vibe: "A quiet, affordable San Tan Valley neighborhood with generous lots and a connection to the area's agricultural past.",
    nearbySchools: [
      "Combs High School",
      "San Tan Foothills High School",
      "Bridges Elementary",
    ],
    walkScore: 10,
    highlights: [
      "Affordable home prices",
      "San Tan Mountain Regional Park nearby",
      "Large lots",
      "Growing retail along Ironwood",
    ],
  },
  {
    slug: "circle-cross-ranch",
    name: "Circle Cross Ranch",
    citySlug: "san-tan-valley",
    countySlug: "pinal",
    zipCodes: ["85143"],
    description:
      "Circle Cross Ranch is one of San Tan Valley's newer master-planned communities, designed with modern families in mind and priced to attract buyers who want more home for their money than the East Valley typically allows. The community features a recreation center with pools, sports courts, and community event space, plus a network of walking paths that connect neighborhoods to parks and schools. Homes are contemporary in design with open floor plans and energy-efficient construction. The J.O. Combs Unified School District serves the area with campuses that continue to grow alongside the community. San Tan Mountain Regional Park provides hiking and mountain biking trails, and the commercial development along the Hunt Highway and Bella Vista corridors is bringing new dining and shopping options. Circle Cross Ranch is building equity in a market with strong upside potential.",
    medianHomePrice: 400000,
    homeTypes: ["Single-Family", "New Construction", "Townhome"],
    vibe: "A modern San Tan Valley community with recreation amenities, new construction, and strong home-value growth potential.",
    nearbySchools: [
      "Combs High School",
      "Combs Middle School",
      "Circle Cross Ranch Elementary",
    ],
    walkScore: 15,
    highlights: [
      "Recreation center and pools",
      "San Tan Mountain Regional Park",
      "New construction homes",
      "Growing commercial corridor",
    ],
  },

  // ============================================================
  // FLORENCE (citySlug: "florence", countySlug: "pinal")
  // ============================================================
  {
    slug: "anthem-at-merrill-ranch",
    name: "Anthem at Merrill Ranch",
    citySlug: "florence",
    countySlug: "pinal",
    zipCodes: ["85132"],
    description:
      "Anthem at Merrill Ranch brings the popular Anthem brand to Florence with a master-planned community that features a championship golf course, a resort-style community center, and a growing roster of amenities designed to keep residents active and connected. The Merrill Ranch Golf Club provides a scenic 18-hole experience with mountain views, and the community center offers pools, fitness classes, and event space. Homes are mostly newer construction with single-family floor plans ranging from starter to spacious. The community is growing rapidly, with new retail and restaurant development along the Hunt Highway corridor reducing the need to drive into the Phoenix metro. Florence itself has deep Arizona history, with a preserved Main Street and the final resting place of many territorial-era figures. This is an emerging community with small-town roots and modern ambitions.",
    medianHomePrice: 380000,
    homeTypes: ["Single-Family", "New Construction", "Patio Home"],
    vibe: "A growing Anthem-branded community in Florence with golf, a community center, and Arizona's small-town heritage nearby.",
    nearbySchools: [
      "Poston Butte High School",
      "Florence Unified schools",
      "Anthem Elementary",
    ],
    walkScore: 15,
    highlights: [
      "Merrill Ranch Golf Club",
      "Community center and pools",
      "Historic Florence Main Street",
      "Growing retail development",
    ],
  },
  {
    slug: "florence-downtown",
    name: "Florence Downtown",
    citySlug: "florence",
    countySlug: "pinal",
    zipCodes: ["85132"],
    description:
      "Downtown Florence is one of Arizona's hidden gems, a historic town center that predates Phoenix statehood and has preserved its territorial-era architecture better than almost any community in the state. Main Street features adobe buildings, a restored 1891 courthouse, and the Pinal County Historical Museum, which chronicles the area's mining, ranching, and Native American heritage. The town hosts monthly art walks and seasonal festivals that draw visitors from across the region. Housing near downtown is remarkably affordable, with older adobe and stucco homes alongside newer ranch-style builds. The McFarland State Historic Park preserves one of the oldest buildings in the area. Florence is 60 miles southeast of Phoenix, giving it a true small-town feel. For buyers seeking history, affordability, and a slower pace, Florence's downtown corridor offers something the big city simply cannot.",
    medianHomePrice: 280000,
    homeTypes: ["Single-Family", "Ranch", "Adobe", "Historic"],
    vibe: "One of Arizona's oldest towns with territorial-era architecture, a living Main Street, and deeply affordable housing.",
    nearbySchools: [
      "Florence High School",
      "Florence Junior High",
      "Florence Elementary",
    ],
    walkScore: 40,
    highlights: [
      "Territorial-era Main Street",
      "Pinal County Historical Museum",
      "McFarland State Historic Park",
      "Monthly art walks",
    ],
  },

  // ============================================================
  // MARICOPA CITY (citySlug: "maricopa-city", countySlug: "pinal")
  // ============================================================
  {
    slug: "province",
    name: "Province",
    citySlug: "maricopa-city",
    countySlug: "pinal",
    zipCodes: ["85138"],
    description:
      "Province is the City of Maricopa's premier active-adult community, designed for residents 55 and older who want resort-level amenities without leaving home. The Province Recreation Center features a state-of-the-art fitness facility, indoor and outdoor pools, tennis and pickleball courts, a creative arts studio, and an event hall that hosts dances, lectures, and holiday celebrations. A championship golf course winds through the community, offering affordable rounds with mountain views. Homes are single-level designs with low-maintenance yards and open floor plans built for entertaining. The social calendar is packed, with over 100 clubs and interest groups ranging from woodworking to hiking to wine tasting. The City of Maricopa's growing retail corridor along John Wayne Parkway handles daily errands, and the I-10/I-8 interchange provides highway access to the broader Valley.",
    medianHomePrice: 350000,
    homeTypes: ["Single-Family", "Patio Home", "Villa"],
    vibe: "Maricopa's flagship 55-plus community with a golf course, 100-plus social clubs, and a packed events calendar.",
    nearbySchools: ["Maricopa High School", "Maricopa Wells Middle School"],
    walkScore: 18,
    highlights: [
      "Province Recreation Center",
      "Championship golf course",
      "100-plus social clubs",
      "Resort-style pools and fitness",
    ],
  },
  {
    slug: "rancho-el-dorado",
    name: "Rancho El Dorado",
    citySlug: "maricopa-city",
    countySlug: "pinal",
    zipCodes: ["85138"],
    description:
      "Rancho El Dorado is one of the City of Maricopa's largest and most established master-planned communities. The neighborhood is anchored by the Elements at Rancho El Dorado community center, which offers pools, sports courts, a playground, and event space. The Copper Sky Recreation Complex, Maricopa's crown jewel public facility, is nearby with an aquatic center, multipurpose fields, and a regional park. Homes range from compact starter properties to spacious four- and five-bedroom family homes with pools and covered patios. The Maricopa Unified School District has invested heavily in new campuses, and the community's proximity to the John Wayne Parkway commercial corridor puts grocery stores, dining, and healthcare within a short drive. Home prices remain well below the Phoenix metro average, attracting first-time buyers and families seeking space and value.",
    medianHomePrice: 340000,
    homeTypes: ["Single-Family", "Townhome"],
    vibe: "A large, established Maricopa community with a community center, affordable homes, and proximity to Copper Sky Recreation Complex.",
    nearbySchools: [
      "Maricopa High School",
      "Desert Wind Middle School",
      "Santa Rosa Elementary",
    ],
    walkScore: 15,
    highlights: [
      "Elements community center",
      "Copper Sky Recreation Complex",
      "Affordable home prices",
      "John Wayne Parkway corridor",
    ],
  },
  {
    slug: "the-villages-at-rancho-el-dorado",
    name: "The Villages at Rancho El Dorado",
    citySlug: "maricopa-city",
    countySlug: "pinal",
    zipCodes: ["85138"],
    description:
      "The Villages at Rancho El Dorado is a distinct section within the broader Rancho El Dorado community, offering its own recreation facilities and a slightly different character from the surrounding neighborhoods. The Villages community center provides a pool, splash pad, fitness room, and ramadas for neighborhood gatherings. Homes here are newer than in the original Rancho El Dorado sections, with updated floor plans and modern finishes. The Maricopa Unified School District serves the area, and the community's family-oriented atmosphere shines through in the well-used parks and the neighborhood events organized throughout the year. Copper Sky Recreation Complex is within biking distance, and the John Wayne Parkway corridor continues to add retail options. The Villages delivers Maricopa's value proposition with a slightly more updated housing stock and its own recreation identity.",
    medianHomePrice: 320000,
    homeTypes: ["Single-Family", "Starter Home"],
    vibe: "A family-friendly section of Rancho El Dorado with its own recreation center and updated home designs.",
    nearbySchools: [
      "Maricopa High School",
      "Desert Wind Middle School",
      "Pima Butte Elementary",
    ],
    walkScore: 12,
    highlights: [
      "Villages community center and pool",
      "Updated home designs",
      "Copper Sky Recreation Complex nearby",
      "Affordable family homes",
    ],
  },
  {
    slug: "cobblestone-farms",
    name: "Cobblestone Farms",
    citySlug: "maricopa-city",
    countySlug: "pinal",
    zipCodes: ["85138"],
    description:
      "Cobblestone Farms is a well-planned residential community in the City of Maricopa that balances affordability with quality construction and community amenities. The neighborhood features a recreation center with a pool, fitness room, and community gathering space, plus a network of walking paths and pocket parks that connect the community. Homes are mostly single-family construction built in the 2000s and 2010s, with stucco exteriors, tile roofs, and practical floor plans for family living. The Maricopa Unified School District serves the area, and the community's location near the intersection of Honeycutt Road and John Wayne Parkway provides easy access to Maricopa's commercial corridor. The surrounding open desert provides unobstructed views and a sense of space that denser Valley communities lack. Cobblestone Farms is a solid choice for buyers who want quality at a price point that builds long-term financial stability.",
    medianHomePrice: 360000,
    homeTypes: ["Single-Family", "Patio Home"],
    vibe: "A well-planned Maricopa community with a recreation center, walking paths, and homes priced for long-term value.",
    nearbySchools: [
      "Maricopa High School",
      "Maricopa Wells Middle School",
      "Butterfield Elementary",
    ],
    walkScore: 12,
    highlights: [
      "Community recreation center",
      "Walking paths and parks",
      "Affordable pricing",
      "Open desert views",
    ],
  },
  {
    slug: "glennwilde",
    name: "Glennwilde",
    citySlug: "maricopa-city",
    countySlug: "pinal",
    zipCodes: ["85138"],
    description:
      "Glennwilde is one of the City of Maricopa's family-focused communities, known for its active homeowner association, well-maintained common areas, and a community center that serves as the neighborhood's social hub. The Glennwilde Groves recreation center features pools, sports courts, a fitness room, and event space where holiday parties, movie nights, and community meetings bring neighbors together. Homes are single-family construction with desert landscaping, attached garages, and covered patios built for the Arizona lifestyle. The Maricopa Unified School District serves the area, and Butterfield Elementary is within the community. The surrounding cotton fields and open desert give Glennwilde a rural edge that newer Maricopa developments have begun to lose. The I-10 interchange is nearby for commuting, and the John Wayne Parkway commercial corridor provides grocery stores and restaurants. Glennwilde is Maricopa at its most community-oriented.",
    medianHomePrice: 330000,
    homeTypes: ["Single-Family", "Starter Home"],
    vibe: "A community-focused Maricopa neighborhood with an active HOA, a popular recreation center, and a rural desert setting.",
    nearbySchools: [
      "Maricopa High School",
      "Desert Wind Middle School",
      "Butterfield Elementary",
    ],
    walkScore: 10,
    highlights: [
      "Glennwilde Groves recreation center",
      "Active HOA community events",
      "Affordable family homes",
      "Rural desert character",
    ],
  },

  // ============================================================
  // CASA GRANDE (citySlug: "casa-grande", countySlug: "pinal")
  // ============================================================
  {
    slug: "mission-royale",
    name: "Mission Royale",
    citySlug: "casa-grande",
    countySlug: "pinal",
    zipCodes: ["85194"],
    description:
      "Mission Royale is Casa Grande's standout active-adult community, offering residents 55 and older a full suite of resort-style amenities at prices that are a fraction of what similar communities charge in the Phoenix metro. The Mission Royale clubhouse features a resort pool, fitness center, ballroom, card rooms, and craft studios. An 18-hole championship golf course winds through the community with mountain views toward the Picacho Peak and the Santa Cruz Valley. Homes are single-level with open floor plans, covered patios, and low-maintenance desert yards. The social calendar stays busy with clubs for everything from pickleball to painting to poker. Casa Grande's growing retail corridor along Florence Boulevard provides grocery stores, restaurants, and medical services. The I-10 freeway connects to the Phoenix metro in about 50 minutes, and Tucson is an hour south.",
    medianHomePrice: 320000,
    homeTypes: ["Single-Family", "Patio Home", "Villa"],
    vibe: "Casa Grande's premier 55-plus community with golf, a resort clubhouse, and stunning Picacho Peak views.",
    nearbySchools: ["Casa Grande Union High School", "Villago Middle School"],
    walkScore: 12,
    highlights: [
      "Championship golf course",
      "Resort-style clubhouse",
      "Picacho Peak views",
      "Active social calendar",
    ],
  },
  {
    slug: "casa-grande-downtown",
    name: "Casa Grande Downtown",
    citySlug: "casa-grande",
    countySlug: "pinal",
    zipCodes: ["85122"],
    description:
      "Downtown Casa Grande is a true Arizona small town, with a historic Main Street that tells the story of a community built on cotton farming, copper mining, and the railroad. The restored 1920s-era buildings along Florence Boulevard house local restaurants, shops, and the Casa Grande Art Museum. The Neon Sign Park preserves vintage roadside signage that once guided travelers along the old highway. Housing near downtown is some of the most affordable in southern Arizona, with older ranch homes, adobe-style properties, and newer infill construction available at prices that would be impossible in the Phoenix metro. The Casa Grande Ruins National Monument, preserving a 650-year-old Hohokam great house, is just outside town. The I-10 and I-8 interchange provides highway access in all directions. Downtown Casa Grande is honest, unpretentious, and rich with desert history.",
    medianHomePrice: 240000,
    homeTypes: ["Single-Family", "Ranch", "Adobe", "Starter Home"],
    vibe: "An affordable small-town center with historic Main Street character, vintage neon, and deep Arizona roots.",
    nearbySchools: [
      "Casa Grande Union High School",
      "Casa Grande Middle School",
      "Cholla Elementary",
    ],
    walkScore: 45,
    highlights: [
      "Casa Grande Ruins National Monument",
      "Neon Sign Park",
      "Historic Florence Boulevard",
      "Most affordable housing in the region",
    ],
  },

  // ============================================================
  // TUCSON (citySlug: "tucson", countySlug: "pima")
  // ============================================================
  {
    slug: "catalina-foothills",
    name: "Catalina Foothills",
    citySlug: "tucson",
    countySlug: "pima",
    zipCodes: ["85718", "85750"],
    description:
      "The Catalina Foothills is Tucson's most coveted residential area, climbing the slopes of the Santa Catalina Mountains above the city with homes that command sweeping views of the Tucson basin, the sunsets over the Tucson Mountains, and the twinkling city lights at night. Skyline Drive and Sunrise Drive wind through neighborhoods that range from midcentury modern gems to contemporary desert estates on multi-acre lots. The Catalina Foothills School District is one of the best in Arizona, and the shopping and dining along the River Road and Campbell Avenue corridors give the area a refined, village-like atmosphere. Ventana Canyon and Sabino Canyon provide world-class hiking access directly from the community. La Encantada, an upscale outdoor shopping center, anchors the retail scene. The Foothills represents Tucson living at its most beautiful and accomplished.",
    medianHomePrice: 650000,
    homeTypes: ["Single-Family", "Luxury Estate", "Custom", "Midcentury Modern"],
    vibe: "Tucson's premier hillside community with Santa Catalina Mountain views, top schools, and access to Sabino Canyon.",
    nearbySchools: [
      "Catalina Foothills High School",
      "Canyon View Elementary",
      "Orange Grove Middle School",
    ],
    walkScore: 25,
    highlights: [
      "Sabino Canyon access",
      "La Encantada shopping",
      "Catalina Foothills School District",
      "Panoramic city and mountain views",
    ],
  },
  {
    slug: "sam-hughes",
    name: "Sam Hughes",
    citySlug: "tucson",
    countySlug: "pima",
    zipCodes: ["85719"],
    description:
      "Sam Hughes is Tucson's quintessential walkable neighborhood, a tree-shaded pocket between the University of Arizona campus and Reid Park that has been attracting professors, artists, and families for nearly a century. The streets are lined with 1930s and 1940s brick bungalows, Spanish Colonial homes, and mature desert willows that create a canopy rare in the Sonoran Desert. Sam Hughes Elementary is one of Tucson's most beloved schools, and the neighborhood's walkability to campus, Fourth Avenue shops, and the Hi Corbett Field spring training complex makes it one of the most connected areas in southern Arizona. Reid Park Zoo is right next door, and the Saturday morning farmers market on 4th Avenue is a weekly ritual. Sam Hughes rewards residents with the kind of neighborhood character that takes decades to develop and can never be replicated.",
    medianHomePrice: 450000,
    homeTypes: ["Single-Family", "Historic Bungalow", "Spanish Colonial", "Ranch"],
    vibe: "Tucson's most walkable historic neighborhood with tree-lined streets, brick bungalows, and University of Arizona proximity.",
    nearbySchools: [
      "Sam Hughes Elementary",
      "University of Arizona",
      "Mansfeld Middle School",
    ],
    walkScore: 72,
    highlights: [
      "Walkable to University of Arizona",
      "Reid Park and Zoo",
      "Historic brick bungalows",
      "4th Avenue shops nearby",
    ],
  },
  {
    slug: "armory-park",
    name: "Armory Park",
    citySlug: "tucson",
    countySlug: "pima",
    zipCodes: ["85701"],
    description:
      "Armory Park is one of Tucson's oldest neighborhoods, a walkable district just south of downtown where territorial-era adobe homes sit alongside Victorian cottages and Craftsman bungalows. The neighborhood takes its name from the former armory building, and the Armory Park itself serves as a community gathering place with a swimming pool, basketball courts, and shaded picnic areas. The Children's Museum Tucson is located here, and the Fourth Avenue commercial district is a short walk north. The Tucson streetcar connects the neighborhood to the University of Arizona and Main Gate Square. Housing ranges from lovingly restored adobes to newer infill townhomes, and the walkability here is among the best in the city. The Saturday morning Mercado San Agustin farmers market nearby is a Tucson institution. Armory Park is for buyers who value history, walkability, and Tucson's distinct cultural personality.",
    medianHomePrice: 380000,
    homeTypes: ["Historic", "Adobe", "Victorian", "Townhome"],
    vibe: "A historic Tucson neighborhood with territorial-era adobes, streetcar access, and walkable proximity to downtown.",
    nearbySchools: [
      "Tucson Magnet High School",
      "Borton Magnet Elementary",
      "Safford K-8",
    ],
    walkScore: 75,
    highlights: [
      "Territorial-era architecture",
      "Children's Museum Tucson",
      "Tucson streetcar access",
      "Fourth Avenue proximity",
    ],
  },
  {
    slug: "barrio-viejo",
    name: "Barrio Viejo",
    citySlug: "tucson",
    countySlug: "pima",
    zipCodes: ["85701"],
    description:
      "Barrio Viejo is the soul of Tucson. This historic neighborhood south of the Convention Center is one of the oldest continuously inhabited communities in the country, with adobe row houses dating to the 1880s and streets that reflect the neighborhood's Mexican-American heritage. Colorful murals and hand-painted facades line the narrow streets, and the neighborhood's cultural pride shines through in every restored home and local gathering. Mercado San Agustin, a mixed-use development inspired by traditional Mexican market halls, anchors the neighborhood's western edge with restaurants, a coffee shop, and the celebrated Mercado farmers market. The Tucson streetcar stops nearby, connecting to downtown and the university. Housing is limited and highly sought after, with restored adobes and Sonoran-style row houses fetching premium prices. Barrio Viejo is irreplaceable, and the residents know it.",
    medianHomePrice: 350000,
    homeTypes: ["Adobe", "Historic Row House", "Sonoran", "Townhome"],
    vibe: "Tucson's cultural heart with 1880s adobe row houses, colorful murals, and the Mercado San Agustin market.",
    nearbySchools: [
      "Tucson Magnet High School",
      "Davis Bilingual Magnet School",
      "Safford K-8",
    ],
    walkScore: 78,
    highlights: [
      "Mercado San Agustin",
      "Historic adobe architecture",
      "Colorful murals and cultural heritage",
      "Tucson streetcar access",
    ],
  },
  {
    slug: "tucson-downtown",
    name: "Tucson Downtown",
    citySlug: "tucson",
    countySlug: "pima",
    zipCodes: ["85701", "85702"],
    description:
      "Downtown Tucson has experienced one of the most exciting urban revivals in the Southwest. Congress Street is the main artery, lined with locally owned restaurants, live music venues, vintage shops, and the historic Fox Tucson Theatre, a restored 1930s movie palace that now hosts concerts and events. The Tucson streetcar connects downtown to the University of Arizona, and the Hotel Congress bar and courtyard have been a social institution since the 1920s. The Tucson Convention Center and surrounding blocks host events year-round, and the new developments along Broadway are adding residential and commercial density. Housing ranges from loft conversions in historic buildings to new modern condos and infill townhomes. The dining scene here is nationally recognized, befitting Tucson's UNESCO City of Gastronomy designation. Downtown Tucson is where the city's culture, food, and creativity converge.",
    medianHomePrice: 300000,
    homeTypes: ["Condo", "Loft", "Townhome", "Adaptive Reuse"],
    vibe: "Tucson's vibrant urban core with Congress Street nightlife, the streetcar, and a nationally recognized food scene.",
    nearbySchools: [
      "Tucson Magnet High School",
      "University of Arizona",
      "Safford K-8",
    ],
    walkScore: 82,
    highlights: [
      "Congress Street dining and nightlife",
      "Hotel Congress",
      "Fox Tucson Theatre",
      "UNESCO City of Gastronomy",
      "Tucson streetcar",
    ],
  },
  {
    slug: "civano",
    name: "Civano",
    citySlug: "tucson",
    countySlug: "pima",
    zipCodes: ["85747"],
    description:
      "Civano is Tucson's model sustainable community, designed in the 1990s with a vision of reduced energy use, water conservation, and neighborhood connectivity. Homes here are built to exceed energy codes, with passive solar orientation, thick insulated walls, and desert landscaping that minimizes water consumption. The neighborhood is organized around a central commercial hub with a cafe, community center, and small businesses, all reachable on foot from the surrounding homes. Walking paths and bike lanes connect the community, and the design encourages front-porch living and neighborly interaction. The housing stock includes a range of styles from small cottages to larger family homes, all reflecting sustainable design principles. Colossal Cave Mountain Park is nearby for hiking, and the Houghton Road corridor connects to the broader Tucson area. Civano proves that thoughtful planning can create a community that is both environmentally responsible and genuinely livable.",
    medianHomePrice: 380000,
    homeTypes: ["Single-Family", "Cottage", "Custom"],
    vibe: "Tucson's pioneering sustainable community with energy-efficient homes, walkable design, and a strong environmental ethos.",
    nearbySchools: [
      "Vail High School",
      "Esmond Station K-8",
      "Civano Community School",
    ],
    walkScore: 30,
    highlights: [
      "Sustainable community design",
      "Energy-efficient homes",
      "Walkable neighborhood center",
      "Colossal Cave Mountain Park nearby",
    ],
  },
  {
    slug: "rita-ranch",
    name: "Rita Ranch",
    citySlug: "tucson",
    countySlug: "pima",
    zipCodes: ["85747"],
    description:
      "Rita Ranch is southeast Tucson's largest and most established master-planned community, and its family-focused atmosphere has made it one of the most popular neighborhoods on the city's growing east side. The community features multiple parks, a recreation center with pools, and a network of walking paths that connect neighborhoods to schools and green spaces. The Vail School District, one of the fastest-growing in Arizona, serves the area with highly regarded campuses. Homes are mostly single-family construction from the late 1990s and 2000s, well-maintained and priced below the Tucson metro average. The Houghton Road corridor provides easy access to shopping, dining, and the I-10 freeway, while Saguaro National Park's Rincon Mountain District is a short drive east. The Rincon Mountains provide a dramatic eastern backdrop, and sunrises here are unforgettable. Rita Ranch is where southeast Tucson families put down roots.",
    medianHomePrice: 350000,
    homeTypes: ["Single-Family", "Townhome", "Patio Home"],
    vibe: "Southeast Tucson's family community with strong Vail schools, mountain views, and proximity to Saguaro National Park.",
    nearbySchools: [
      "Vail High School",
      "Empire High School",
      "Esmond Station K-8",
    ],
    walkScore: 22,
    highlights: [
      "Vail School District",
      "Saguaro National Park proximity",
      "Community parks and pools",
      "Rincon Mountain views",
    ],
  },
  {
    slug: "tanque-verde-valley",
    name: "Tanque Verde Valley",
    citySlug: "tucson",
    countySlug: "pima",
    zipCodes: ["85749"],
    description:
      "The Tanque Verde Valley is Tucson's horse country, a swath of ranchettes, custom homes, and equestrian properties spread across the foothills between the Rincon and Catalina Mountains. Tanque Verde Road winds through the valley past guest ranches, trailheads, and the entrance to Saguaro National Park East. The lots here are generous, often an acre or more, and many properties feature horse facilities, riding arenas, and direct access to trail systems. The Tanque Verde Guest Ranch has been welcoming visitors since the 1920s, and the ranch lifestyle remains the defining character of the area. Tanque Verde Elementary and Sabino High School serve the community. The night sky here is darker than most of Tucson, and the wildlife is abundant, with deer, javelina, and the occasional bobcat crossing the property. This is rural Tucson living at its finest.",
    medianHomePrice: 550000,
    homeTypes: ["Single-Family", "Ranchette", "Custom", "Equestrian"],
    vibe: "Tucson's horse country with ranchettes, mountain views, and trail access to Saguaro National Park East.",
    nearbySchools: [
      "Sabino High School",
      "Tanque Verde Elementary",
      "Emily Gray Junior High",
    ],
    walkScore: 10,
    highlights: [
      "Saguaro National Park East",
      "Equestrian properties",
      "Tanque Verde Guest Ranch",
      "Dark sky views",
    ],
  },
  {
    slug: "broadmoor-broadway",
    name: "Broadmoor-Broadway",
    citySlug: "tucson",
    countySlug: "pima",
    zipCodes: ["85710", "85711"],
    description:
      "Broadmoor-Broadway is a central Tucson neighborhood that delivers an authentic, diverse, and surprisingly affordable urban experience. The Broadway Boulevard corridor is lined with family-owned restaurants representing cuisines from Mexican to Vietnamese to Ethiopian, making this one of the best food stretches in southern Arizona. The Broadmoor neighborhood itself features midcentury ranch homes on tree-lined streets, many of which have been lovingly updated while keeping their original character. Reid Park is nearby for morning jogs and visits to the Reid Park Zoo, and the Tucson Country Club adds a touch of elegance to the area's northern edge. The University of Arizona is a short drive west, and the Broadway streetscape improvement project is bringing new sidewalks, bike lanes, and landscaping to the corridor. This is the Tucson neighborhood that locals recommend when someone asks where to find the real city.",
    medianHomePrice: 320000,
    homeTypes: ["Single-Family", "Ranch", "Midcentury Modern"],
    vibe: "A diverse central Tucson corridor with incredible food, midcentury homes, and the authentic spirit of the city.",
    nearbySchools: [
      "Palo Verde Magnet High School",
      "Naylor Middle School",
      "Hollinger K-8",
    ],
    walkScore: 50,
    highlights: [
      "Broadway Boulevard food corridor",
      "Reid Park and Zoo proximity",
      "Midcentury architecture",
      "Diverse dining scene",
    ],
  },
  {
    slug: "midvale-park",
    name: "Midvale Park",
    citySlug: "tucson",
    countySlug: "pima",
    zipCodes: ["85716"],
    description:
      "Midvale Park is a central Tucson neighborhood that captures the city's low-key charm in a compact, affordable package. Located between Grant Road and Speedway Boulevard along the Country Club Road corridor, this area features modest ranch homes from the 1950s and 1960s on well-established lots with mature landscaping. The neighborhood is close to Tucson Medical Center, the University of Arizona, and the Campbell Avenue shopping district, giving it a central-city convenience that newer outskirt neighborhoods lack. Reid Park is a short drive south, and the El Con Center provides major retail. The housing stock is perfect for first-time buyers and investors, with prices well below the Tucson median and good bones for renovation. Midvale Park does not try to be flashy, and that is precisely its appeal. It is real Tucson for real budgets.",
    medianHomePrice: 280000,
    homeTypes: ["Single-Family", "Ranch", "Starter Home"],
    vibe: "An affordable central Tucson neighborhood with midcentury ranch homes and excellent proximity to hospitals and university.",
    nearbySchools: [
      "Tucson High School",
      "Doolen Middle School",
      "Soleng Tom Elementary",
    ],
    walkScore: 55,
    highlights: [
      "Near Tucson Medical Center",
      "Central city convenience",
      "Affordable midcentury homes",
      "Reid Park nearby",
    ],
  },
  {
    slug: "iron-horse",
    name: "Iron Horse",
    citySlug: "tucson",
    countySlug: "pima",
    zipCodes: ["85730", "85747"],
    description:
      "Iron Horse is a well-established neighborhood in southeast Tucson, named for the railroad heritage that shaped the area's early development. The community sits near the intersection of the Houghton Road corridor and I-10, providing strong commuter access while maintaining a quiet, residential character. Homes are predominantly single-family construction from the early 2000s, with Southwestern-style architecture, stucco exteriors, and desert landscaping. The Vail School District serves the eastern portions, contributing to the area's appeal for families. Julian Wash Greenway, a multi-use path along the Julian Wash drainage, provides a popular route for walkers, joggers, and cyclists. The Houghton Road commercial corridor is adding new retail and services, and Saguaro National Park East is a manageable drive for weekend hiking. Iron Horse is practical, well-located, and a reliable choice for southeast Tucson buyers.",
    medianHomePrice: 380000,
    homeTypes: ["Single-Family", "Townhome", "Patio Home"],
    vibe: "A well-established southeast Tucson community with Julian Wash trails, Vail schools, and solid commuter access.",
    nearbySchools: [
      "Vail High School",
      "Esmond Station K-8",
      "Mesquite Elementary",
    ],
    walkScore: 20,
    highlights: [
      "Julian Wash Greenway",
      "Vail School District",
      "Houghton Road corridor",
      "Saguaro National Park access",
    ],
  },
  {
    slug: "dove-mountain-tucson",
    name: "Dove Mountain (Tucson Area)",
    citySlug: "tucson",
    countySlug: "pima",
    zipCodes: ["85739"],
    description:
      "Dove Mountain is a luxury resort and residential community set in the Tortolita Mountain foothills northwest of Tucson. The Ritz-Carlton Dove Mountain resort anchors the area with world-class spa services, dining, and the Jack Nicklaus-designed golf course at The Gallery. Homes range from attached casitas and patio homes to custom estates on hillside lots with panoramic views of the Tucson basin and surrounding mountain ranges. The community is within the Marana Unified School District, and the growing town of Marana provides nearby shopping and dining. Wild Burro Trail and the Tortolita Mountain Park offer hiking directly from the community, and the sunsets from the elevated homesites paint the sky in shades of pink, orange, and purple every evening. Dove Mountain appeals to buyers who want the Tucson lifestyle elevated by resort amenities and pristine desert surroundings.",
    medianHomePrice: 300000,
    homeTypes: ["Condo", "Patio Home", "Single-Family"],
    vibe: "A resort community in the Tortolita foothills with Ritz-Carlton amenities, Jack Nicklaus golf, and mountain panoramas.",
    nearbySchools: [
      "Marana High School",
      "Dove Mountain CSTEM K-8",
      "Tortolita Middle School",
    ],
    walkScore: 10,
    highlights: [
      "Ritz-Carlton Dove Mountain",
      "The Gallery golf course",
      "Wild Burro Trail",
      "Tortolita Mountain views",
    ],
  },
  {
    slug: "starr-pass",
    name: "Starr Pass",
    citySlug: "tucson",
    countySlug: "pima",
    zipCodes: ["85745"],
    description:
      "Starr Pass is a resort and residential community set into the rugged foothills of the Tucson Mountains on the city's west side. The JW Marriott Starr Pass Resort anchors the area with a championship golf course, spa, multiple pools, and dining that make it a destination in its own right. Homes in the surrounding residential neighborhoods feature mountain and city views, with single-family houses, townhomes, and custom lots available across a range of price points. The Tucson Mountain Park and the Arizona-Sonora Desert Museum are nearby, providing some of the best desert experiences in the state. Gates Pass, the famous overlook with uninterrupted views across the Avra Valley to Kitt Peak, is a short drive. Starr Pass gives residents the feeling of living in a national park while staying within the Tucson city limits.",
    medianHomePrice: 420000,
    homeTypes: ["Single-Family", "Townhome", "Custom", "Condo"],
    vibe: "A resort community in the Tucson Mountains with JW Marriott amenities, city views, and desert museum access.",
    nearbySchools: [
      "Tucson High School",
      "Mission View Elementary",
      "Pueblo Magnet High School",
    ],
    walkScore: 15,
    highlights: [
      "JW Marriott Starr Pass Resort",
      "Gates Pass overlook",
      "Arizona-Sonora Desert Museum nearby",
      "Tucson Mountain Park",
    ],
  },

  // ============================================================
  // ORO VALLEY (citySlug: "oro-valley", countySlug: "pima")
  // ============================================================
  {
    slug: "rancho-vistoso",
    name: "Rancho Vistoso",
    citySlug: "oro-valley",
    countySlug: "pima",
    zipCodes: ["85755"],
    description:
      "Rancho Vistoso is Oro Valley's largest and most established master-planned community, nestled against the Santa Catalina Mountains with views that remind residents daily why they chose southern Arizona. The community offers a championship golf course, miles of walking and biking trails, and multiple community parks that host neighborhood events throughout the year. The Oro Valley Marketplace provides nearby shopping and dining, while the Catalina State Park and its network of trails are practically in the backyard. Amphitheater Unified School District schools serve the area with strong academic records. Homes range from townhomes and patio homes for empty nesters to larger single-family residences for growing families. The community has matured beautifully since its development in the 1990s, with established desert landscaping and a comfortable, unhurried pace. Rancho Vistoso is Oro Valley living at its most complete.",
    medianHomePrice: 450000,
    homeTypes: ["Single-Family", "Townhome", "Patio Home"],
    vibe: "Oro Valley's anchor community with golf, mountain trails, and Catalina State Park access at the Catalina Mountain base.",
    nearbySchools: [
      "Canyon del Oro High School",
      "Pusch Ridge Christian Academy",
      "Wilson K-8",
    ],
    walkScore: 22,
    highlights: [
      "Catalina State Park access",
      "Championship golf course",
      "Community trail system",
      "Santa Catalina Mountain views",
    ],
  },
  {
    slug: "oro-valley-marketplace",
    name: "Oro Valley Marketplace Area",
    citySlug: "oro-valley",
    countySlug: "pima",
    zipCodes: ["85737"],
    description:
      "The Oro Valley Marketplace area is the commercial and social heart of Oro Valley, centered around the outdoor shopping center that serves as the town's gathering place. The Marketplace hosts a popular Saturday farmers market, seasonal concerts, and community events on its central lawn. Restaurants and shops line the walkable paths, and the adjacent neighborhoods offer a mix of established single-family homes, townhomes, and newer construction. Oracle Road provides a direct corridor to Tucson, while the Catalina Mountains frame the eastern horizon. The Steam Pump Ranch, a preserved 19th-century homestead, offers a connection to Oro Valley's ranching past. The Amphitheater and Marana school districts serve the area with strong academic options. This is the most accessible part of Oro Valley, with the convenience of town-center living and the natural beauty that defines the community.",
    medianHomePrice: 420000,
    homeTypes: ["Single-Family", "Townhome", "Condo"],
    vibe: "Oro Valley's town center with the Marketplace, farmers markets, and a walkable village atmosphere beneath the Catalina Mountains.",
    nearbySchools: [
      "Canyon del Oro High School",
      "Ironwood Ridge High School",
      "Coronado K-8",
    ],
    walkScore: 38,
    highlights: [
      "Oro Valley Marketplace",
      "Saturday farmers market",
      "Steam Pump Ranch",
      "Oracle Road corridor",
    ],
  },

  // ============================================================
  // MARANA (citySlug: "marana", countySlug: "pima")
  // ============================================================
  {
    slug: "dove-mountain",
    name: "Dove Mountain",
    citySlug: "marana",
    countySlug: "pima",
    zipCodes: ["85658"],
    description:
      "Dove Mountain in Marana is a luxury master-planned community in the Tortolita Mountain foothills that has become one of southern Arizona's most desirable addresses. The Ritz-Carlton Dove Mountain provides world-class resort amenities, and the Jack Nicklaus-designed golf courses at The Gallery are consistently ranked among Arizona's best. Homes range from attached villas and casitas in gated enclaves to custom hillside estates with panoramic views stretching from the Santa Catalina Mountains to Picacho Peak. The Wild Burro Trail and Tortolita Mountain Park provide hiking and mountain biking terrain directly from the community. The Marana Unified School District serves the area, and the town of Marana's growing retail corridor along Twin Peaks Road provides convenient shopping. The sunsets here, viewed from the community's elevated terrain, are among the most dramatic in the Tucson metro area.",
    medianHomePrice: 550000,
    homeTypes: ["Luxury Estate", "Custom", "Villa", "Single-Family"],
    vibe: "A luxury Marana community in the Tortolita foothills with Ritz-Carlton living, Nicklaus golf, and desert panoramas.",
    nearbySchools: [
      "Marana High School",
      "Dove Mountain CSTEM K-8",
      "Mountain View High School",
    ],
    walkScore: 8,
    highlights: [
      "Ritz-Carlton Dove Mountain",
      "The Gallery Golf Club",
      "Wild Burro Trail",
      "Tortolita Mountain views",
    ],
  },
  {
    slug: "gladden-farms",
    name: "Gladden Farms",
    citySlug: "marana",
    countySlug: "pima",
    zipCodes: ["85653"],
    description:
      "Gladden Farms is Marana's fastest-growing master-planned community, attracting young families with its modern homes, strong schools, and a community atmosphere that balances new development with natural desert surroundings. The community features multiple parks, walking paths, a splash pad, and a recreation center that serves as the social hub. Homes are contemporary construction with energy-efficient features, open floor plans, and covered patios that make the most of Arizona's outdoor climate. The Marana Unified School District serves the area with campuses that have earned solid academic reputations. Saguaro National Park West is visible on the horizon, and the Tucson Mountains provide a stunning western backdrop. The Twin Peaks Road corridor connects to I-10 and the broader Tucson area, while local retail development along Gladden Farms Boulevard is reducing the need to drive into town. This is where Marana's future is taking shape.",
    medianHomePrice: 380000,
    homeTypes: ["Single-Family", "Townhome", "New Construction"],
    vibe: "Marana's booming family community with new homes, a splash-pad park, and views of Saguaro National Park West.",
    nearbySchools: [
      "Marana High School",
      "Marana Middle School",
      "Gladden Farms Elementary",
    ],
    walkScore: 18,
    highlights: [
      "Community parks and splash pad",
      "Saguaro National Park West views",
      "New construction value",
      "Marana Unified schools",
    ],
  },
  {
    slug: "continental-ranch",
    name: "Continental Ranch",
    citySlug: "marana",
    countySlug: "pima",
    zipCodes: ["85743"],
    description:
      "Continental Ranch is one of northwest Tucson's most established master-planned communities, offering a mature neighborhood feel with community pools, parks, and a recreation center that has been bringing neighbors together for over two decades. The community sits near the intersection of I-10 and Cortaro Farms Road, providing strong commuter access to the Tucson metro area. Homes range from starter-sized properties to spacious family residences, many with updated interiors and established desert landscaping. The Marana Unified School District and Amphitheater Unified School District both serve portions of the community. The Tortolita Mountains provide a scenic northern backdrop, and the Santa Cruz River Park trail system is accessible for biking and walking. Continental Reserve, an adjacent newer phase, has added fresh housing stock. Continental Ranch is a reliable, family-friendly neighborhood that has proven its staying power in the northwest Tucson market.",
    medianHomePrice: 350000,
    homeTypes: ["Single-Family", "Townhome", "Patio Home"],
    vibe: "An established northwest Tucson community with mature landscaping, community pools, and strong freeway access.",
    nearbySchools: [
      "Ironwood Ridge High School",
      "Continental Ranch K-8",
      "Tortolita Middle School",
    ],
    walkScore: 25,
    highlights: [
      "Community recreation center",
      "Tortolita Mountain views",
      "I-10 commuter access",
      "Santa Cruz River Park trail",
    ],
  },

  // ============================================================
  // SAHUARITA (citySlug: "sahuarita", countySlug: "pima")
  // ============================================================
  {
    slug: "rancho-sahuarita",
    name: "Rancho Sahuarita",
    citySlug: "sahuarita",
    countySlug: "pima",
    zipCodes: ["85629"],
    description:
      "Rancho Sahuarita is southern Tucson's premier master-planned community, offering a family-focused lifestyle in the growing town of Sahuarita between Tucson and the Santa Rita Mountains. The community is anchored by a private lake club with a beach, pools, water slides, and a clubhouse that serves as the social center. Community parks, sports fields, and walking paths connect the neighborhoods, and the Sahuarita Unified School District serves the area with campuses that families consistently praise. Homes are mostly newer construction with single-family floor plans ranging from starter properties to spacious family residences. The Fry's Marketplace shopping center on Sahuarita Road provides daily conveniences, and the pecan orchards that border the community recall the area's agricultural heritage. The Santa Rita Mountains rise to the south, providing hiking access at Madera Canyon, one of the world's top birding destinations. Rancho Sahuarita is a complete community with roots in the land.",
    medianHomePrice: 360000,
    homeTypes: ["Single-Family", "Townhome", "New Construction"],
    vibe: "A family-centered community with a private lake club, top Sahuarita schools, and Santa Rita Mountain views.",
    nearbySchools: [
      "Walden Grove High School",
      "Sahuarita Middle School",
      "Rancho Sahuarita Elementary",
    ],
    walkScore: 22,
    highlights: [
      "Private lake club and beach",
      "Madera Canyon birding nearby",
      "Santa Rita Mountain views",
      "Community parks and walking paths",
    ],
  },

  // ============================================================
  // GREEN VALLEY (citySlug: "green-valley", countySlug: "pima")
  // ============================================================
  {
    slug: "quail-creek",
    name: "Quail Creek",
    citySlug: "green-valley",
    countySlug: "pima",
    zipCodes: ["85614"],
    description:
      "Quail Creek is Green Valley's premier active-adult community, a 55-plus destination that draws retirees from across the country with its combination of affordable luxury, social vibrancy, and year-round sunshine. The community features two championship golf courses, a resort-style clubhouse with fitness, pools, and dining, and over 100 clubs and activity groups that keep the social calendar packed. Homes are single-level with open floor plans, low-maintenance yards, and mountain views toward the Santa Rita range. The creative arts center, woodworking shop, and stained glass studio cater to the community's creative side. Green Valley's retail corridor along I-19 provides grocery stores, medical offices, and restaurants. Madera Canyon is a short drive for hiking and world-class birding. Quail Creek delivers the retirement lifestyle that people picture when they imagine moving to southern Arizona.",
    medianHomePrice: 350000,
    homeTypes: ["Single-Family", "Patio Home", "Villa"],
    vibe: "Green Valley's premier 55-plus community with two golf courses, a creative arts center, and Santa Rita Mountain views.",
    nearbySchools: ["Continental Elementary", "Sahuarita High School"],
    walkScore: 15,
    highlights: [
      "Two championship golf courses",
      "Resort-style clubhouse",
      "100-plus clubs and activities",
      "Madera Canyon proximity",
    ],
  },
  {
    slug: "green-valley-downtown",
    name: "Green Valley Downtown",
    citySlug: "green-valley",
    countySlug: "pima",
    zipCodes: ["85614"],
    description:
      "Downtown Green Valley is the commercial and social hub of this unincorporated retirement community south of Tucson. The Green Valley Village shopping center and surrounding commercial corridors along La Canada Drive and Esperanza Boulevard provide grocery stores, medical offices, banks, and restaurants that serve the local population. The community has a strong volunteer culture, with organizations like the Green Valley Recreation centers offering fitness classes, social clubs, and community events. Housing ranges from very affordable 1970s and 1980s single-family homes and townhomes to updated patio homes in gated communities. The Santa Rita Mountains to the east and the desert landscape to the west frame every view. The I-19 freeway connects to Tucson in about 30 minutes. Green Valley downtown is unpretentious, affordable, and deeply community-oriented, a place where neighbors look out for each other and the pace of life is exactly as slow as you want it to be.",
    medianHomePrice: 220000,
    homeTypes: ["Single-Family", "Townhome", "Patio Home", "Manufactured"],
    vibe: "An affordable retirement hub with a strong volunteer culture, mountain views, and a genuine small-town pace of life.",
    nearbySchools: ["Continental Elementary", "Sahuarita High School"],
    walkScore: 30,
    highlights: [
      "Green Valley Recreation centers",
      "Extremely affordable housing",
      "Santa Rita Mountain views",
      "Strong volunteer community",
    ],
  },

  // ============================================================
  // APACHE JUNCTION (citySlug: "apache-junction", countySlug: "maricopa")
  // ============================================================
  {
    slug: "superstition-foothills",
    name: "Superstition Foothills",
    citySlug: "apache-junction",
    countySlug: "maricopa",
    zipCodes: ["85119"],
    description:
      "Superstition Foothills is where the Valley meets the wild desert. Located on the eastern edge of Apache Junction at the base of the Superstition Mountains, this area offers custom homes on large lots with unobstructed views of the legendary mountain range that inspired the Lost Dutchman gold mine legend. Lost Dutchman State Park is the primary trailhead, offering hiking trails that wind through cactus-studded hillsides with views stretching across the Valley floor. The Gold Canyon Golf Resort is nearby, and the Apache Trail scenic drive begins just up the road. Homes here are a mix of custom builds, ranchettes, and newer construction, many on lots of an acre or more. The lifestyle is deliberately rural, with dark skies, quiet nights, and the kind of sunset views that stop you in your tracks. This is for buyers who want the Superstitions as their backyard.",
    medianHomePrice: 380000,
    homeTypes: ["Single-Family", "Custom", "Ranchette"],
    vibe: "Desert living at the base of the Superstition Mountains with large lots, trail access, and legendary sunsets.",
    nearbySchools: [
      "Apache Junction High School",
      "Desert Vista Elementary",
      "Four Peaks Elementary",
    ],
    walkScore: 8,
    highlights: [
      "Lost Dutchman State Park",
      "Superstition Mountain views",
      "Apache Trail scenic drive",
      "Gold Canyon Golf Resort nearby",
    ],
  },
  {
    slug: "apache-junction-downtown",
    name: "Apache Junction Downtown",
    citySlug: "apache-junction",
    countySlug: "maricopa",
    zipCodes: ["85120"],
    description:
      "Downtown Apache Junction is a no-frills Western town with a personality all its own. The Apache Boulevard corridor mixes local restaurants, thrift stores, biker bars, and small businesses that serve a community proud of its independent, rural-adjacent character. The Lost Dutchman Days festival each February celebrates the area's gold-rush heritage with rodeo events, a parade, and a carnival. The Apache Junction Farmers Market brings local produce and crafts to town, and the Mining Camp Restaurant serves family-style meals in a re-created mining town setting. Housing is among the most affordable in the greater Phoenix area, with older ranch homes, manufactured housing, and newer starter homes available at entry-level prices. The Superstition Mountains dominate the eastern horizon, providing a dramatic backdrop for daily life. Apache Junction is rough around the edges, real in its bones, and cheaper than anywhere else this close to the mountains.",
    medianHomePrice: 280000,
    homeTypes: ["Single-Family", "Ranch", "Manufactured", "Starter Home"],
    vibe: "A no-frills Western town with affordable housing, rodeo heritage, and Superstition Mountain views on the horizon.",
    nearbySchools: [
      "Apache Junction High School",
      "Cactus Canyon Junior High",
      "Peralta Trail Elementary",
    ],
    walkScore: 35,
    highlights: [
      "Lost Dutchman Days festival",
      "Mining Camp Restaurant",
      "Most affordable metro-area housing",
      "Superstition Mountain backdrop",
    ],
  },

  // ============================================================
  // LITCHFIELD PARK (citySlug: "litchfield-park", countySlug: "maricopa")
  // ============================================================
  {
    slug: "litchfield-park-historic",
    name: "Litchfield Park Historic",
    citySlug: "litchfield-park",
    countySlug: "maricopa",
    zipCodes: ["85340"],
    description:
      "Historic Litchfield Park is the West Valley's most charming small town, a place where the Wigwam resort has been hosting guests since the 1920s and the streets are lined with mature trees, historic homes, and a genuine village atmosphere. The town was originally developed by the Goodyear Tire and Rubber Company for its cotton farming operations, and that planned, orderly character remains in the wide streets, green parks, and well-maintained properties. The downtown village features local restaurants, boutiques, and the Litchfield Park Historical Society museum. Homes range from restored original bungalows and ranch houses to newer custom builds on generous lots. The community hosts seasonal festivals, outdoor concerts at the Litchfield Park amphitheater, and a farmers market that draws loyal regulars. This is small-town Arizona at its most refined and welcoming.",
    medianHomePrice: 550000,
    homeTypes: ["Single-Family", "Historic Bungalow", "Ranch", "Custom"],
    vibe: "A charming historic small town with the Wigwam resort, village shops, and tree-lined streets rooted in early 1900s Arizona.",
    nearbySchools: [
      "Millennium High School",
      "Litchfield Elementary",
      "Western Sky Middle School",
    ],
    walkScore: 42,
    highlights: [
      "Wigwam resort heritage",
      "Downtown village shops",
      "Historic tree-lined streets",
      "Seasonal festivals and concerts",
    ],
  },
  {
    slug: "wigwam-area",
    name: "Wigwam Area",
    citySlug: "litchfield-park",
    countySlug: "maricopa",
    zipCodes: ["85340"],
    description:
      "The Wigwam Area encompasses the neighborhoods surrounding the historic Wigwam resort, one of Arizona's original luxury destinations. The resort's three golf courses, spa, and dining options create a resort-adjacent lifestyle for homeowners in the surrounding streets. Homes range from updated ranch properties built in the 1960s and 1970s to newer custom builds that take advantage of golf course and mountain views. The mature landscaping here, including towering palm trees, citrus groves, and manicured lawns, gives the area a lushness that stands out in the West Valley. Litchfield Park Elementary and nearby campuses provide solid education options. The I-10 freeway is accessible via Litchfield Road, connecting to the broader metro area. The Wigwam Area feels like a retreat from the busier corridors, with wide streets, quiet evenings, and the historic resort serving as an elegant anchor for the community.",
    medianHomePrice: 500000,
    homeTypes: ["Single-Family", "Ranch", "Custom"],
    vibe: "Resort-adjacent living near the historic Wigwam with golf course homes, mature landscaping, and a retreat-like atmosphere.",
    nearbySchools: [
      "Millennium High School",
      "Litchfield Elementary",
      "Wigwam Creek Middle School",
    ],
    walkScore: 30,
    highlights: [
      "Wigwam resort and golf courses",
      "Mature palm-lined streets",
      "Resort-adjacent lifestyle",
      "Historic Litchfield Park village",
    ],
  },

  // ============================================================
  // SUN CITY (citySlug: "sun-city", countySlug: "maricopa")
  // ============================================================
  {
    slug: "sun-city-center",
    name: "Sun City Center",
    citySlug: "sun-city",
    countySlug: "maricopa",
    zipCodes: ["85351"],
    description:
      "Sun City Center is the heart of America's original active-adult community, the place that Del Webb built in 1960 and changed retirement forever. The Sun City model, with its recreation centers, golf courses, and age-restricted living, has been copied worldwide, but the original retains a character and community spirit that imitators struggle to match. Seven recreation centers offer pools, fitness, arts and crafts, bowling alleys, and meeting spaces. Eight golf courses provide more holes per capita than almost anywhere in the country. Homes are primarily single-level ranch-style residences with carports, small yards, and prices that make retirement affordable. The Sun City Home Owners Association maintains common areas and organizes events. Grand Avenue provides shopping and dining, and the Luke Air Force Base flyovers add a patriotic soundtrack. Sun City Center is a living piece of Arizona history.",
    medianHomePrice: 280000,
    homeTypes: ["Single-Family", "Patio Home", "Ranch"],
    vibe: "America's original retirement community with seven rec centers, eight golf courses, and a pioneering spirit since 1960.",
    nearbySchools: ["Peoria Unified School District", "Dysart Unified School District"],
    walkScore: 30,
    highlights: [
      "Seven recreation centers",
      "Eight golf courses",
      "Del Webb's original active-adult community",
      "Affordable retirement living",
    ],
  },
  {
    slug: "sun-city-south",
    name: "Sun City South",
    citySlug: "sun-city",
    countySlug: "maricopa",
    zipCodes: ["85373"],
    description:
      "Sun City South encompasses the southern portions of Del Webb's original Sun City community, extending toward Grand Avenue and the Agua Fria River corridor. This section offers the same active-adult lifestyle as the rest of Sun City, with recreation center access, golf course privileges, and a community of engaged retirees who fill their days with clubs, classes, and social events. The homes here tend to be slightly larger and newer than those in the original core, with many built in the 1970s and early 1980s. Some properties feature expanded lots and updated interiors. The Sundome Center for the Performing Arts hosts concerts and events that draw audiences from across the West Valley. Bell Road provides shopping and dining access, and the community's western edge offers views toward the White Tank Mountains. Sun City South is the quieter side of the original retirement revolution.",
    medianHomePrice: 300000,
    homeTypes: ["Single-Family", "Patio Home", "Ranch"],
    vibe: "The southern stretch of original Sun City with recreation centers, golf access, and White Tank Mountain views.",
    nearbySchools: ["Dysart Unified School District", "Peoria Unified School District"],
    walkScore: 25,
    highlights: [
      "Sundome Center for the Performing Arts",
      "Sun City recreation centers",
      "Golf course living",
      "White Tank Mountain views",
    ],
  },

  // ============================================================
  // SUN CITY WEST (citySlug: "sun-city-west", countySlug: "maricopa")
  // ============================================================
  {
    slug: "sun-city-west-core",
    name: "Sun City West Core",
    citySlug: "sun-city-west",
    countySlug: "maricopa",
    zipCodes: ["85375"],
    description:
      "Sun City West is the sequel to Sun City, and many residents argue it improved on the original. Built in the 1970s and 1980s as Del Webb's next chapter, Sun City West offers four recreation centers, seven golf courses, and a social scene that keeps 30,000-plus residents as busy as they want to be. The R.H. Johnson Recreation Center is the crown jewel, with indoor pools, a fitness center, art studios, and a performing arts theater. The Lizard Acres Pub inside the center has become a beloved local hangout. Homes are single-level ranch and patio-home designs, many updated with modern kitchens and Arizona rooms. The community's western edge borders the White Tank Mountain Regional Park, providing hiking access. Meeker Boulevard and R.H. Johnson Boulevard anchor the commercial corridors with grocery stores, medical offices, and restaurants. Sun City West is active retirement done right.",
    medianHomePrice: 350000,
    homeTypes: ["Single-Family", "Patio Home", "Villa"],
    vibe: "Del Webb's encore community with seven golf courses, four rec centers, and an active-adult lifestyle that never gets old.",
    nearbySchools: ["Dysart Unified School District", "Nadaburg Unified School District"],
    walkScore: 28,
    highlights: [
      "R.H. Johnson Recreation Center",
      "Seven golf courses",
      "White Tank Mountain Regional Park",
      "Lizard Acres Pub",
    ],
  },

  // ============================================================
  // GOLD CANYON (citySlug: "gold-canyon", countySlug: "maricopa")
  // ============================================================
  {
    slug: "gold-canyon-east",
    name: "Gold Canyon East",
    citySlug: "gold-canyon",
    countySlug: "maricopa",
    zipCodes: ["85118"],
    description:
      "Gold Canyon East is the more developed side of this Superstition Mountain foothill community, home to the Superstition Mountain Golf and Country Club and residential neighborhoods with direct views of the legendary mountain range. The club offers two championship courses, a clubhouse, fitness, and dining that create a self-contained lifestyle. Homes range from golf villas and patio homes to custom estates on elevated lots with panoramic mountain views. The Lost Dutchman State Park is minutes away for hiking, and the Apache Trail scenic drive begins at the community's edge. The community atmosphere is relaxed and neighborly, with a mix of full-time residents and seasonal visitors who come for the winter sunshine. Shopping and dining along the US-60 corridor serve daily needs, and the drive to Mesa and the broader East Valley takes about 30 minutes. Gold Canyon East is mountain-town living without the altitude.",
    medianHomePrice: 450000,
    homeTypes: ["Single-Family", "Custom", "Golf Villa", "Patio Home"],
    vibe: "A Superstition Mountain foothill community with championship golf, custom homes, and access to the Apache Trail.",
    nearbySchools: [
      "Apache Junction High School",
      "Gold Canyon Elementary",
      "Peralta Trail Elementary",
    ],
    walkScore: 10,
    highlights: [
      "Superstition Mountain Golf and Country Club",
      "Lost Dutchman State Park",
      "Apache Trail scenic drive",
      "Superstition Mountain panoramas",
    ],
  },
  {
    slug: "mountainbrook-village",
    name: "Mountainbrook Village",
    citySlug: "gold-canyon",
    countySlug: "maricopa",
    zipCodes: ["85118"],
    description:
      "Mountainbrook Village is a master-planned community in Gold Canyon that offers an accessible entry point into the Superstition Mountain foothill lifestyle. The community features a recreation center with a pool, fitness room, and gathering space, plus walking paths and parks that take advantage of the desert scenery. Homes are mostly single-family construction with single-level floor plans popular with retirees and families alike. The Superstition Mountains dominate the eastern view from nearly every property, and the proximity to Lost Dutchman State Park makes weekend hiking a regular activity. The US-60 corridor provides access to Mesa and the broader Valley, while Gold Canyon's local shops and restaurants handle daily needs. The community atmosphere is quiet and welcoming, with a pace of life that reflects Gold Canyon's small-town character. Mountainbrook Village is the neighborhood for buyers who want mountain living at a reasonable price.",
    medianHomePrice: 400000,
    homeTypes: ["Single-Family", "Patio Home"],
    vibe: "An accessible Gold Canyon community with a recreation center, mountain views, and a quiet, small-town pace.",
    nearbySchools: [
      "Apache Junction High School",
      "Gold Canyon Elementary",
      "Cactus Canyon Junior High",
    ],
    walkScore: 12,
    highlights: [
      "Superstition Mountain views",
      "Community recreation center",
      "Lost Dutchman State Park nearby",
      "Small-town atmosphere",
    ],
  },

  // ============================================================
  // WICKENBURG (citySlug: "wickenburg", countySlug: "maricopa")
  // ============================================================
  {
    slug: "wickenburg-ranch",
    name: "Wickenburg Ranch",
    citySlug: "wickenburg",
    countySlug: "maricopa",
    zipCodes: ["85390"],
    description:
      "Wickenburg Ranch is a luxury master-planned community that brings resort-style amenities to the historic ranching town of Wickenburg, about an hour northwest of Phoenix. The community centers around the Big Wick Golf Course, a championship layout with mountain views and desert terrain, and the Clubhouse provides dining, fitness, pools, and social spaces. Homes are single-level designs with open floor plans, covered patios, and desert landscaping that blends with the surrounding High Sonoran terrain. The Hassayampa River runs nearby, and the Vulture Peak Trail offers one of the region's most rewarding hikes. Downtown Wickenburg's western heritage is alive in the Desert Caballeros Western Museum, the guest ranches, and the annual Gold Rush Days celebration. Wickenburg Ranch appeals to retirees and remote workers who want luxury living in a genuine Arizona ranching town with room to breathe.",
    medianHomePrice: 420000,
    homeTypes: ["Single-Family", "Patio Home", "Villa"],
    vibe: "A luxury golf community in the historic ranching town of Wickenburg with desert vistas and a genuine Western heritage.",
    nearbySchools: [
      "Wickenburg High School",
      "Hassayampa Elementary",
      "Vulture Peak Middle School",
    ],
    walkScore: 8,
    highlights: [
      "Big Wick Golf Course",
      "Desert Caballeros Western Museum",
      "Vulture Peak Trail",
      "Hassayampa River access",
    ],
  },
  {
    slug: "wickenburg-downtown",
    name: "Wickenburg Downtown",
    citySlug: "wickenburg",
    countySlug: "maricopa",
    zipCodes: ["85390"],
    description:
      "Downtown Wickenburg is one of Arizona's best-preserved Western towns, a place where the Jail Tree still stands on the main street and the Desert Caballeros Western Museum houses one of the finest collections of Western art in the country. Frontier Street is lined with boutiques, antique stores, galleries, and restaurants that cater to both locals and the tourists who discover this town an hour northwest of Phoenix. The historic dude ranches in the surrounding area continue to offer horseback riding and cowboy experiences. Housing near downtown includes older ranch homes, territorial-style houses, and ranchettes on larger lots. The Hassayampa River Preserve provides birding and nature trails. Annual events like Gold Rush Days and the Bluegrass Festival fill the town with energy. Wickenburg downtown is for buyers who want to live in a place that feels like the real Arizona rather than a Sun Belt development.",
    medianHomePrice: 320000,
    homeTypes: ["Single-Family", "Ranch", "Ranchette", "Historic"],
    vibe: "A preserved Western town with galleries, dude ranches, and the authentic Arizona frontier spirit an hour from Phoenix.",
    nearbySchools: [
      "Wickenburg High School",
      "Hassayampa Elementary",
      "Festival Foothills Elementary",
    ],
    walkScore: 45,
    highlights: [
      "Desert Caballeros Western Museum",
      "Historic Frontier Street",
      "Hassayampa River Preserve",
      "Gold Rush Days festival",
    ],
  },

  // ============================================================
  // TOLLESON (citySlug: "tolleson", countySlug: "maricopa")
  // ============================================================
  {
    slug: "tolleson-center",
    name: "Tolleson Center",
    citySlug: "tolleson",
    countySlug: "maricopa",
    zipCodes: ["85353"],
    description:
      "Tolleson is a small, tight-knit community in the heart of the West Valley that has been quietly growing while maintaining its strong sense of identity. The town was founded in 1912 as a farming community, and that agricultural heritage still shows in the flat, open landscape and the pride residents take in their schools and local institutions. Tolleson Union High School and the local elementary campuses serve as community anchors. The Van Buren corridor and 91st Avenue provide commercial services, and the I-10 freeway is close for commuting. Housing is predominantly single-family homes and newer subdivisions with prices that remain among the most affordable in the metro area. The Tolleson Community Center hosts events and recreation programs, and the city has invested in park improvements and streetscape upgrades. Tolleson rewards buyers who value community roots and honest pricing over polish.",
    medianHomePrice: 310000,
    homeTypes: ["Single-Family", "Starter Home", "Ranch"],
    vibe: "A small, proud West Valley community with agricultural roots, affordable homes, and a strong local identity.",
    nearbySchools: [
      "Tolleson Union High School",
      "Tolleson Elementary",
      "Arizona Desert Elementary",
    ],
    walkScore: 35,
    highlights: [
      "Affordable West Valley pricing",
      "Community center and parks",
      "I-10 freeway access",
      "Agricultural heritage",
    ],
  },

  // ============================================================
  // EL MIRAGE (citySlug: "el-mirage", countySlug: "maricopa")
  // ============================================================
  {
    slug: "el-mirage-center",
    name: "El Mirage Center",
    citySlug: "el-mirage",
    countySlug: "maricopa",
    zipCodes: ["85335"],
    description:
      "El Mirage is a small West Valley city that offers some of the most affordable housing in the Phoenix metro area. Located between Glendale and Surprise along El Mirage Road, the city has a compact footprint with a mix of older ranch homes, newer subdivision builds, and manufactured housing that serves a diverse, working-class community. The El Mirage Community Center and adjacent park provide recreation and gathering spaces, and the city's annual events, including the holiday light parade, bring neighbors together. The Dysart Unified School District serves the area. Shopping along Bell Road and Grand Avenue is nearby, and the 303 freeway provides commuter access to the broader Valley. Luke Air Force Base, one of the region's largest employers, is adjacent. El Mirage is for practical buyers who want to own a home in the metro area without stretching their budget to the breaking point.",
    medianHomePrice: 330000,
    homeTypes: ["Single-Family", "Ranch", "Manufactured", "Starter Home"],
    vibe: "An affordable West Valley city near Luke Air Force Base with a diverse community and practical home prices.",
    nearbySchools: [
      "Dysart High School",
      "El Mirage Elementary",
      "Luke Elementary",
    ],
    walkScore: 30,
    highlights: [
      "Most affordable metro-area homes",
      "Luke Air Force Base proximity",
      "Community center and parks",
      "303 freeway access",
    ],
  },

  // ============================================================
  // YOUNGTOWN (citySlug: "youngtown", countySlug: "maricopa")
  // ============================================================
  {
    slug: "youngtown-center",
    name: "Youngtown Center",
    citySlug: "youngtown",
    countySlug: "maricopa",
    zipCodes: ["85363"],
    description:
      "Youngtown holds the distinction of being the first age-restricted community ever built in the United States, predating even Sun City. Founded in 1954, this tiny West Valley town covers just over a square mile and maintains a quiet, unhurried character that longtime residents cherish. The homes are modest ranch-style properties from the 1950s and 1960s, many of which have been updated while retaining their original character. Youngtown's age restrictions have been relaxed over the years, and the community now welcomes all ages. The town park and community center serve as gathering places, and the proximity to Sun City and Sun City West provides access to additional recreation and shopping. Grand Avenue and 111th Avenue handle daily needs. Housing here is deeply affordable, making Youngtown a smart choice for first-time buyers, retirees, and investors. History and value intersect in this overlooked West Valley gem.",
    medianHomePrice: 280000,
    homeTypes: ["Single-Family", "Ranch", "Starter Home"],
    vibe: "America's first age-restricted community, now open to all ages, with deeply affordable midcentury homes and quiet streets.",
    nearbySchools: [
      "Peoria Unified School District",
      "Dysart Unified School District",
    ],
    walkScore: 35,
    highlights: [
      "First age-restricted community in the US",
      "Deeply affordable housing",
      "Sun City and Sun City West proximity",
      "Quiet small-town character",
    ],
  },

  // ============================================================
  // COOLIDGE (citySlug: "coolidge", countySlug: "pinal")
  // ============================================================
  {
    slug: "coolidge-center",
    name: "Coolidge Center",
    citySlug: "coolidge",
    countySlug: "pinal",
    zipCodes: ["85128"],
    description:
      "Coolidge is a small agricultural city in Pinal County that offers some of the most affordable housing in all of southern Arizona. Named after President Calvin Coolidge, who dedicated the nearby Coolidge Dam in 1930, the town has deep roots in cotton farming and irrigation that shaped the region's economy. Central Avenue serves as the main commercial corridor with local businesses, restaurants, and the Coolidge Historical Museum. The Casa Grande Ruins National Monument, preserving the 650-year-old Hohokam great house, is located just outside town. Housing is primarily single-family ranch homes and newer subdivision builds at prices that make homeownership accessible for almost any budget. The Coolidge Unified School District serves the area. The I-10 freeway is accessible via the Florence Highway, connecting to the Phoenix metro in about an hour. Coolidge is for buyers who value land, affordability, and a small-town lifestyle.",
    medianHomePrice: 260000,
    homeTypes: ["Single-Family", "Ranch", "Manufactured", "Starter Home"],
    vibe: "A small Pinal County farm town with deeply affordable housing, Hohokam ruins nearby, and authentic rural Arizona character.",
    nearbySchools: [
      "Coolidge High School",
      "Coolidge Junior High",
      "West Elementary",
    ],
    walkScore: 35,
    highlights: [
      "Casa Grande Ruins National Monument nearby",
      "Most affordable housing in the region",
      "Agricultural heritage",
      "Coolidge Historical Museum",
    ],
  },

  // ============================================================
  // VAIL (citySlug: "vail", countySlug: "pima")
  // ============================================================
  {
    slug: "vail-center",
    name: "Vail Center",
    citySlug: "vail",
    countySlug: "pima",
    zipCodes: ["85641"],
    description:
      "Vail is a fast-growing community southeast of Tucson that has become one of the most sought-after family destinations in Pima County, driven primarily by the Vail Unified School District's outstanding reputation. The Vail schools consistently rank among the top in Arizona, and families relocate specifically for the educational opportunities. The Colossal Cave Mountain Park provides nearby recreation, and the Rincon Mountains form a dramatic eastern backdrop. The community is primarily residential, with newer master-planned neighborhoods, ranch properties, and scattered custom homes. The I-10 corridor connects to Tucson in about 20 minutes, and local retail along the Houghton Road extension is growing to meet demand. The Cienega Creek Natural Preserve provides riparian habitat and walking trails unique to the area. Vail has the energy of a community still coming into its own, with excellent schools as the foundation.",
    medianHomePrice: 380000,
    homeTypes: ["Single-Family", "Ranchette", "New Construction"],
    vibe: "A fast-growing family community southeast of Tucson built around Arizona's top-rated Vail School District.",
    nearbySchools: [
      "Cienega High School",
      "Vail Academy and High School",
      "Esmond Station K-8",
    ],
    walkScore: 15,
    highlights: [
      "Top-rated Vail School District",
      "Colossal Cave Mountain Park",
      "Rincon Mountain views",
      "Cienega Creek Natural Preserve",
    ],
  },

  // ============================================================
  // CAREFREE (citySlug: "carefree", countySlug: "maricopa")
  // ============================================================
  {
    slug: "carefree-center",
    name: "Carefree Center",
    citySlug: "carefree",
    countySlug: "maricopa",
    zipCodes: ["85377"],
    description:
      "Carefree is one of the most unique small towns in Arizona, a planned community founded in the 1950s with street names like Nonchalant Avenue, Easy Street, and Reckless Road that reflect the laid-back desert lifestyle its founders envisioned. The town center features the iconic Carefree Sundial, one of the largest in the Western Hemisphere, and the surrounding plaza hosts galleries, boutiques, and seasonal events like the Carefree Fine Art and Wine Festival. The Boulders Resort, a luxury destination set among massive granite boulder formations, borders the town. Homes in Carefree are primarily custom desert estates on large lots, with architectural styles that respect the Sonoran landscape. The town enforces strict building codes that preserve dark skies and natural views. Cave Creek's Western town center is next door. Carefree is for buyers who want refined desert living in a place that takes its name seriously.",
    medianHomePrice: 950000,
    homeTypes: ["Custom", "Luxury Estate", "Single-Family"],
    vibe: "A thoughtfully planned desert town with the iconic Sundial, Boulders Resort, and custom estates on boulder-studded lots.",
    nearbySchools: [
      "Cactus Shadows High School",
      "Desert Sun Academy",
      "Black Mountain Elementary",
    ],
    walkScore: 20,
    highlights: [
      "Carefree Sundial",
      "Boulders Resort",
      "Fine Art and Wine Festival",
      "Dark sky preserve",
    ],
  },

  // ============================================================
  // SOUTH TUCSON (citySlug: "south-tucson", countySlug: "pima")
  // ============================================================
  {
    slug: "south-tucson-center",
    name: "South Tucson Center",
    citySlug: "south-tucson",
    countySlug: "pima",
    zipCodes: ["85713"],
    description:
      "South Tucson is a one-square-mile city surrounded by Tucson that packs more culinary firepower per block than almost anywhere in the Southwest. The South 12th Avenue and South 6th Avenue corridors are lined with family-owned Mexican restaurants, taquerias, bakeries, and markets that have been serving the community for generations. Mi Nidito, famously visited by President Clinton, is the most well-known, but locals will tell you a dozen other spots are just as good. The community is predominantly Mexican-American, with a strong cultural identity reflected in the murals, the music, and the neighborhood gatherings. Housing is deeply affordable, with small single-family homes and older properties available at prices that are a fraction of the Tucson average. The area has real challenges, but it also has real soul. South Tucson is the cultural and culinary heart of southern Arizona for those who know where to look.",
    medianHomePrice: 150000,
    homeTypes: ["Single-Family", "Ranch", "Starter Home"],
    vibe: "A one-square-mile culinary powerhouse with legendary Mexican restaurants, deep cultural roots, and the most affordable homes in the Tucson area.",
    nearbySchools: [
      "Pueblo Magnet High School",
      "Mission View Elementary",
      "Ochoa Community Magnet",
    ],
    walkScore: 60,
    highlights: [
      "Legendary Mexican food corridor",
      "Mi Nidito restaurant",
      "Most affordable Tucson homes",
      "Strong Mexican-American cultural identity",
    ],
  },

  // ============================================================
  // CATALINA (citySlug: "catalina", countySlug: "pima")
  // ============================================================
  {
    slug: "saddlebrooke",
    name: "SaddleBrooke",
    citySlug: "catalina",
    countySlug: "pima",
    zipCodes: ["85739"],
    description:
      "SaddleBrooke is a premier active-adult community north of Tucson, nestled between the Santa Catalina Mountains and the Tortolita range in the unincorporated community of Catalina. The community offers two clubhouses, multiple golf courses, tennis and pickleball complexes, pools, fitness centers, and over 100 clubs that keep residents socially engaged. The MountainView course and the SaddleBrooke courses provide championship-caliber golf with mountain panoramas. Homes are single-level designs ranging from attached villas to spacious custom-feel residences, all with low-maintenance desert yards. The Catalina State Park is nearby for hiking and nature photography, and the Biosphere 2 science facility is just up the road. Oracle Road connects to Tucson in about 30 minutes. SaddleBrooke has earned a reputation as one of the top retirement communities in Arizona, and residents consistently cite the mountain views, the social scene, and the year-round sunshine as reasons they stay.",
    medianHomePrice: 400000,
    homeTypes: ["Single-Family", "Villa", "Patio Home"],
    vibe: "A top-tier 55-plus community between two mountain ranges with championship golf, 100-plus clubs, and year-round sunshine.",
    nearbySchools: ["Catalina Unified School District", "Oracle schools"],
    walkScore: 10,
    highlights: [
      "Multiple golf courses",
      "Two clubhouses",
      "Catalina State Park proximity",
      "Biosphere 2 nearby",
    ],
  },

  // ============================================================
  // CHANDLER - additional (citySlug: "chandler", countySlug: "maricopa")
  // ============================================================
  {
    slug: "sun-lakes",
    name: "Sun Lakes",
    citySlug: "chandler",
    countySlug: "maricopa",
    zipCodes: ["85248"],
    description:
      "Sun Lakes is south Chandler's established active-adult community, a collection of age-restricted neighborhoods that together form one of the Valley's most popular retirement destinations. The community includes multiple recreation centers, golf courses, pools, and club facilities spread across several distinct villages including Cottonwood, Palo Verde, Ironwood, and Oakwood. Each village has its own personality and amenity set, giving residents options that range from modest and social to upscale and golf-oriented. Homes are primarily single-level with desert landscaping and floor plans designed for comfortable one-story living. The community's location near the Chandler/Gilbert border provides easy access to shopping, dining, and medical services along the Alma School and Arizona Avenue corridors. The Gila River runs along the community's southern edge, and the nearby Rawhide Western Town adds a touch of Arizona fun. Sun Lakes is proven, popular, and perennially in demand.",
    medianHomePrice: 400000,
    homeTypes: ["Single-Family", "Patio Home", "Villa"],
    vibe: "An established Chandler retirement community with multiple villages, golf courses, and recreation centers in the heart of the East Valley.",
    nearbySchools: ["Chandler Unified School District", "Kyrene School District"],
    walkScore: 20,
    highlights: [
      "Multiple recreation centers",
      "Several golf courses",
      "Village-style community design",
      "Rawhide Western Town nearby",
    ],
  },

  // ============================================================
  // MESA - additional (citySlug: "mesa", countySlug: "maricopa")
  // ============================================================
  {
    slug: "the-groves",
    name: "The Groves",
    citySlug: "mesa",
    countySlug: "maricopa",
    zipCodes: ["85212"],
    description:
      "The Groves is a newer community in southeast Mesa that has earned a devoted following among families who want quality construction, community amenities, and the kind of neighborhood design that encourages connection. The community features a central park, walking paths, playgrounds, and a splash pad that serves as the summer gathering point. Homes are contemporary in design with open floor plans, covered patios, and energy-efficient features standard in modern Arizona construction. The Higley Unified School District serves the area with campuses that consistently rank among the best in the state. The 202 Santan Freeway provides commuter access to Chandler's tech corridor and the broader Valley, while the Eastmark commercial developments nearby add dining and shopping options. The agricultural heritage of southeast Mesa is still visible in the citrus groves and farm fields that border the community's edges, lending the area a character that pure subdivisions lack.",
    medianHomePrice: 500000,
    homeTypes: ["Single-Family", "Townhome", "New Construction"],
    vibe: "A newer southeast Mesa community with citrus-grove heritage, Higley schools, and family-centered park design.",
    nearbySchools: [
      "Higley High School",
      "Higley Traditional Academy",
      "Power Ranch Elementary",
    ],
    walkScore: 22,
    highlights: [
      "Central park and splash pad",
      "Higley Unified School District",
      "202 Santan Freeway access",
      "Citrus grove heritage",
    ],
  },
  {
    slug: "cadence-at-gateway",
    name: "Cadence at Gateway",
    citySlug: "mesa",
    countySlug: "maricopa",
    zipCodes: ["85212"],
    description:
      "Cadence at Gateway is one of southeast Mesa's newest master-planned communities, positioned near the Phoenix-Mesa Gateway Airport and the burgeoning employment corridor along the Elliot Road and Power Road intersection. The community was designed for modern living with parks, trails, a community center, and gathering spaces that promote an active, social lifestyle. Homes feature contemporary architecture with smart-home technology, energy-efficient construction, and floor plans that maximize indoor-outdoor living. Multiple builders offer a range of sizes and price points, giving buyers flexibility. The Gateway employment corridor, anchored by the airport and surrounding business parks, is drawing new companies and jobs to the area. The 202 freeway connects to the broader Valley, and Eastmark's retail and entertainment options are nearby. Cadence represents the future of Mesa's southeast growth, combining location, value, and modern community design.",
    medianHomePrice: 460000,
    homeTypes: ["Single-Family", "Townhome", "New Construction"],
    vibe: "A modern Mesa community near the Gateway Airport corridor with smart-home technology and contemporary community design.",
    nearbySchools: [
      "Eastmark High School",
      "Sequoia Pathway Academy",
      "Gateway Pointe Elementary",
    ],
    walkScore: 18,
    highlights: [
      "Gateway Airport employment corridor",
      "Smart-home technology",
      "Community parks and trails",
      "202 freeway access",
    ],
  },

  // ============================================================
  // ELOY (citySlug: "eloy", countySlug: "pinal")
  // ============================================================
  {
    slug: "robson-ranch",
    name: "Robson Ranch",
    citySlug: "eloy",
    countySlug: "pinal",
    zipCodes: ["85131"],
    description:
      "Robson Ranch is an active-adult community in Eloy that offers a surprising amount of resort-style living in the agricultural heartland of Pinal County. The community centers around a championship golf course with mountain views toward Picacho Peak, and the clubhouse provides dining, fitness, pools, and a packed calendar of social events. The creative arts center, woodworking shop, and activity rooms support the interests of a resident community that stays impressively engaged. Homes are single-level with low-maintenance desert yards, open floor plans, and covered patios designed for entertaining. The community's location along the I-10 corridor between Phoenix and Tucson puts both metro areas within an hour's drive. Picacho Peak State Park is nearby for hiking, and the annual Civil War reenactment at the park draws visitors from across the state. Robson Ranch proves that quality retirement living does not require a big-city address.",
    medianHomePrice: 320000,
    homeTypes: ["Single-Family", "Patio Home", "Villa"],
    vibe: "A resort-style 55-plus community in Pinal County with championship golf, Picacho Peak views, and a vibrant social scene.",
    nearbySchools: ["Eloy Elementary School District", "Santa Cruz Valley Union High School"],
    walkScore: 5,
    highlights: [
      "Championship golf course",
      "Picacho Peak State Park nearby",
      "Resort-style clubhouse",
      "Between Phoenix and Tucson on I-10",
    ],
  },
];
