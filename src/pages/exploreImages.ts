// Maps location slugs to Arizona-relevant Unsplash images for hero backgrounds and cards

const U = 'https://images.unsplash.com';

// Hero backgrounds by county/type
export const heroImages: Record<string, string> = {
  explore: `${U}/photo-1558645836-e44122a743ee?w=1920&q=80&auto=format`,
  maricopa: `${U}/photo-1577643816920-65b43ba99fba?w=1920&q=80&auto=format`,
  pinal: `${U}/photo-1509316975850-ff9c5deb0cd9?w=1920&q=80&auto=format`,
  pima: `${U}/photo-1494548162494-384bba4ab999?w=1920&q=80&auto=format`,
};

// City-specific images - curated Arizona photos
const cityImages: Record<string, string> = {
  // Maricopa County
  'phoenix': `${U}/photo-1577643816920-65b43ba99fba?w=600&q=80&auto=format`,       // Phoenix skyline
  'scottsdale': `${U}/photo-1566073771259-6a8506099945?w=600&q=80&auto=format`,     // Scottsdale resort
  'mesa': `${U}/photo-1506905925346-21bda4d32df4?w=600&q=80&auto=format`,           // Red Mountain
  'chandler': `${U}/photo-1560448204-e02f11c3d0e2?w=600&q=80&auto=format`,          // Modern suburban
  'gilbert': `${U}/photo-1564013799919-ab600027ffc6?w=600&q=80&auto=format`,        // Family home
  'tempe': `${U}/photo-1519501025264-65ba15a82390?w=600&q=80&auto=format`,           // Urban campus
  'glendale': `${U}/photo-1542401886-65d6c61db217?w=600&q=80&auto=format`,           // Stadium area sunset
  'peoria': `${U}/photo-1505843513577-22bb7d21e455?w=600&q=80&auto=format`,          // Desert sunset community
  'surprise': `${U}/photo-1518098268026-4e89f1a2cd8e?w=600&q=80&auto=format`,        // Desert landscape
  'goodyear': `${U}/photo-1501785888041-af3ef285b470?w=600&q=80&auto=format`,        // Estrella mountains
  'avondale': `${U}/photo-1504280390367-361c6d9f38f4?w=600&q=80&auto=format`,        // Desert road
  'buckeye': `${U}/photo-1469854523086-cc02fe5d8800?w=600&q=80&auto=format`,         // Open desert road
  'queen-creek': `${U}/photo-1500382017468-9049fed747ef?w=600&q=80&auto=format`,     // Farm community
  'paradise-valley': `${U}/photo-1582719508461-905c673771fd?w=600&q=80&auto=format`, // Luxury resort
  'fountain-hills': `${U}/photo-1507525428034-b723cf961d3e?w=600&q=80&auto=format`,  // Fountain
  'cave-creek': `${U}/photo-1474044159687-1ee9f3a51722?w=600&q=80&auto=format`,      // Desert canyon
  'carefree': `${U}/photo-1445019980597-93fa8acb246c?w=600&q=80&auto=format`,        // Desert resort
  'anthem': `${U}/photo-1600596542815-ffad4c1539a9?w=600&q=80&auto=format`,          // Modern home
  'litchfield-park': `${U}/photo-1600585154340-be6161a56a0c?w=600&q=80&auto=format`, // Upscale home
  'tolleson': `${U}/photo-1570129477492-45c003edd2be?w=600&q=80&auto=format`,        // House exterior
  'el-mirage': `${U}/photo-1512917774080-9991f1c4c750?w=600&q=80&auto=format`,       // Residential
  'youngtown': `${U}/photo-1583608205776-bfd35f0d9f83?w=600&q=80&auto=format`,       // Front yard
  'sun-city': `${U}/photo-1535131749006-b7f58c99034b?w=600&q=80&auto=format`,        // Golf course
  'sun-city-west': `${U}/photo-1535131749006-b7f58c99034b?w=600&q=80&auto=format`,   // Golf course
  'wickenburg': `${U}/photo-1474044159687-1ee9f3a51722?w=600&q=80&auto=format`,      // Western desert
  'apache-junction': `${U}/photo-1518098268026-4e89f1a2cd8e?w=600&q=80&auto=format`, // Superstitions
  'gold-canyon': `${U}/photo-1509316975850-ff9c5deb0cd9?w=600&q=80&auto=format`,     // Desert canyon
  // Pinal County
  'san-tan-valley': `${U}/photo-1600596542815-ffad4c1539a9?w=600&q=80&auto=format`,
  'florence': `${U}/photo-1469854523086-cc02fe5d8800?w=600&q=80&auto=format`,
  'maricopa-city': `${U}/photo-1500382017468-9049fed747ef?w=600&q=80&auto=format`,
  'casa-grande': `${U}/photo-1504280390367-361c6d9f38f4?w=600&q=80&auto=format`,
  'coolidge': `${U}/photo-1509316975850-ff9c5deb0cd9?w=600&q=80&auto=format`,
  'eloy': `${U}/photo-1469854523086-cc02fe5d8800?w=600&q=80&auto=format`,
  'arizona-city': `${U}/photo-1518098268026-4e89f1a2cd8e?w=600&q=80&auto=format`,
  // Pima County
  'tucson': `${U}/photo-1494548162494-384bba4ab999?w=600&q=80&auto=format`,          // Saguaro sunset
  'oro-valley': `${U}/photo-1501785888041-af3ef285b470?w=600&q=80&auto=format`,      // Mountain views
  'marana': `${U}/photo-1505843513577-22bb7d21e455?w=600&q=80&auto=format`,           // Desert community
  'sahuarita': `${U}/photo-1500382017468-9049fed747ef?w=600&q=80&auto=format`,        // Southern AZ
  'green-valley': `${U}/photo-1535131749006-b7f58c99034b?w=600&q=80&auto=format`,     // Golf/retirement
  'south-tucson': `${U}/photo-1449824913935-59a10b8d2000?w=600&q=80&auto=format`,     // Urban
  'catalina': `${U}/photo-1474044159687-1ee9f3a51722?w=600&q=80&auto=format`,
  'vail': `${U}/photo-1509316975850-ff9c5deb0cd9?w=600&q=80&auto=format`,
};

// Neighborhood-specific images - unique per neighborhood
const neighborhoodImages: Record<string, string> = {
  // Phoenix
  'arcadia': `${U}/photo-1600585154340-be6161a56a0c?w=600&q=80&auto=format`,              // Tree-lined luxury
  'biltmore': `${U}/photo-1582719508461-905c673771fd?w=600&q=80&auto=format`,             // Resort elegance
  'north-central': `${U}/photo-1564013799919-ab600027ffc6?w=600&q=80&auto=format`,        // Historic homes
  'camelback-east': `${U}/photo-1506905925346-21bda4d32df4?w=600&q=80&auto=format`,       // Mountain views
  'desert-ridge': `${U}/photo-1560448204-e02f11c3d0e2?w=600&q=80&auto=format`,            // Modern shopping area
  'ahwatukee': `${U}/photo-1501785888041-af3ef285b470?w=600&q=80&auto=format`,            // Foothills
  'encanto': `${U}/photo-1512917774080-9991f1c4c750?w=600&q=80&auto=format`,              // Historic bungalow
  'willo': `${U}/photo-1570129477492-45c003edd2be?w=600&q=80&auto=format`,                // Historic district
  'roosevelt-row': `${U}/photo-1449824913935-59a10b8d2000?w=600&q=80&auto=format`,        // Urban arts
  'downtown-phoenix': `${U}/photo-1577643816920-65b43ba99fba?w=600&q=80&auto=format`,     // City skyline
  'midtown-phoenix': `${U}/photo-1519501025264-65ba15a82390?w=600&q=80&auto=format`,      // Urban corridor
  'moon-valley': `${U}/photo-1505843513577-22bb7d21e455?w=600&q=80&auto=format`,          // Mountain preserve
  'deer-valley': `${U}/photo-1600596542815-ffad4c1539a9?w=600&q=80&auto=format`,          // North Phoenix
  'norterra': `${U}/photo-1558645836-e44122a743ee?w=600&q=80&auto=format`,                // Desert community
  'laveen': `${U}/photo-1500382017468-9049fed747ef?w=600&q=80&auto=format`,               // South Mountain area
  'maryvale': `${U}/photo-1583608205776-bfd35f0d9f83?w=600&q=80&auto=format`,             // West Phoenix
  'south-mountain': `${U}/photo-1474044159687-1ee9f3a51722?w=600&q=80&auto=format`,       // South Mountain
  'north-gateway': `${U}/photo-1504280390367-361c6d9f38f4?w=600&q=80&auto=format`,        // North Phoenix
  'desert-view': `${U}/photo-1518098268026-4e89f1a2cd8e?w=600&q=80&auto=format`,          // Desert views
  'tramonto': `${U}/photo-1542401886-65d6c61db217?w=600&q=80&auto=format`,                // Sunset community

  // Scottsdale
  'dc-ranch': `${U}/photo-1551882547-ff40c63fe5fa?w=600&q=80&auto=format`,                // Luxury desert estate
  'grayhawk': `${U}/photo-1535131749006-b7f58c99034b?w=600&q=80&auto=format`,             // Golf course desert
  'gainey-ranch': `${U}/photo-1582719508461-905c673771fd?w=600&q=80&auto=format`,         // Gated luxury
  'mccormick-ranch': `${U}/photo-1507525428034-b723cf961d3e?w=600&q=80&auto=format`,      // Lake community
  'old-town-scottsdale': `${U}/photo-1566073771259-6a8506099945?w=600&q=80&auto=format`,  // Downtown galleries
  'north-scottsdale': `${U}/photo-1445019980597-93fa8acb246c?w=600&q=80&auto=format`,     // Desert luxury
  'troon': `${U}/photo-1542314831-068cd1dbfeeb?w=600&q=80&auto=format`,                   // Pinnacle Peak area
  'mcdowell-mountain-ranch': `${U}/photo-1520250497591-112f2f40a3f4?w=600&q=80&auto=format`, // McDowell Mountains
  'scottsdale-ranch': `${U}/photo-1600596542815-ffad4c1539a9?w=600&q=80&auto=format`,     // Ranch-style homes
  'kierland': `${U}/photo-1560448204-e02f11c3d0e2?w=600&q=80&auto=format`,                // Kierland Commons

  // Mesa
  'las-sendas': `${U}/photo-1506905925346-21bda4d32df4?w=600&q=80&auto=format`,           // Red Mountain
  'red-mountain': `${U}/photo-1474044159687-1ee9f3a51722?w=600&q=80&auto=format`,         // Mesa mountains
  'dobson-ranch': `${U}/photo-1564013799919-ab600027ffc6?w=600&q=80&auto=format`,         // Suburban
  'superstition-springs': `${U}/photo-1518098268026-4e89f1a2cd8e?w=600&q=80&auto=format`, // Superstitions
  'eastmark': `${U}/photo-1600596542815-ffad4c1539a9?w=600&q=80&auto=format`,             // Modern community
  'mesa-downtown': `${U}/photo-1449824913935-59a10b8d2000?w=600&q=80&auto=format`,        // Downtown Mesa

  // Chandler
  'ocotillo': `${U}/photo-1507525428034-b723cf961d3e?w=600&q=80&auto=format`,             // Lake community
  'fulton-ranch': `${U}/photo-1600585154340-be6161a56a0c?w=600&q=80&auto=format`,         // Luxury homes
  'sun-groves': `${U}/photo-1500382017468-9049fed747ef?w=600&q=80&auto=format`,
  'chandler-downtown': `${U}/photo-1519501025264-65ba15a82390?w=600&q=80&auto=format`,    // Downtown

  // Gilbert
  'power-ranch': `${U}/photo-1560448204-e02f11c3d0e2?w=600&q=80&auto=format`,             // Master planned
  'morrison-ranch': `${U}/photo-1600596542815-ffad4c1539a9?w=600&q=80&auto=format`,
  'val-vista-lakes': `${U}/photo-1507525428034-b723cf961d3e?w=600&q=80&auto=format`,      // Lake community
  'agritopia': `${U}/photo-1500382017468-9049fed747ef?w=600&q=80&auto=format`,            // Farm community
  'gilbert-downtown': `${U}/photo-1449824913935-59a10b8d2000?w=600&q=80&auto=format`,     // Heritage district

  // Tempe
  'tempe-downtown': `${U}/photo-1519501025264-65ba15a82390?w=600&q=80&auto=format`,       // ASU area
  'maple-ash': `${U}/photo-1512917774080-9991f1c4c750?w=600&q=80&auto=format`,
  'university-heights': `${U}/photo-1449824913935-59a10b8d2000?w=600&q=80&auto=format`,

  // Glendale
  'arrowhead-ranch': `${U}/photo-1564013799919-ab600027ffc6?w=600&q=80&auto=format`,
  'glendale-downtown': `${U}/photo-1570129477492-45c003edd2be?w=600&q=80&auto=format`,

  // Peoria/Surprise
  'vistancia': `${U}/photo-1558645836-e44122a743ee?w=600&q=80&auto=format`,               // Desert community
  'peoria-downtown': `${U}/photo-1570129477492-45c003edd2be?w=600&q=80&auto=format`,
  'trilogy-at-vistancia': `${U}/photo-1535131749006-b7f58c99034b?w=600&q=80&auto=format`,  // Active adult
  'marley-park': `${U}/photo-1564013799919-ab600027ffc6?w=600&q=80&auto=format`,
  'surprise-farms': `${U}/photo-1583608205776-bfd35f0d9f83?w=600&q=80&auto=format`,

  // Goodyear/Buckeye/West Valley
  'estrella-mountain-ranch': `${U}/photo-1501785888041-af3ef285b470?w=600&q=80&auto=format`, // Mountain views
  'palm-valley': `${U}/photo-1505843513577-22bb7d21e455?w=600&q=80&auto=format`,
  'canyon-trails': `${U}/photo-1469854523086-cc02fe5d8800?w=600&q=80&auto=format`,
  'pebblecreek': `${U}/photo-1535131749006-b7f58c99034b?w=600&q=80&auto=format`,
  'cantamia': `${U}/photo-1600585154340-be6161a56a0c?w=600&q=80&auto=format`,
  'verrado': `${U}/photo-1542401886-65d6c61db217?w=600&q=80&auto=format`,                // Mountain community
  'tartesso': `${U}/photo-1504280390367-361c6d9f38f4?w=600&q=80&auto=format`,
  'festival-ranch': `${U}/photo-1500382017468-9049fed747ef?w=600&q=80&auto=format`,

  // Queen Creek / Paradise Valley / Fountain Hills
  'circle-g': `${U}/photo-1500382017468-9049fed747ef?w=600&q=80&auto=format`,
  'queen-creek-station': `${U}/photo-1560448204-e02f11c3d0e2?w=600&q=80&auto=format`,
  'paradise-valley-estates': `${U}/photo-1551882547-ff40c63fe5fa?w=600&q=80&auto=format`, // Ultra luxury
  'clearwater-hills': `${U}/photo-1582719508461-905c673771fd?w=600&q=80&auto=format`,
  'firerock': `${U}/photo-1542314831-068cd1dbfeeb?w=600&q=80&auto=format`,
  'fountain-hills-downtown': `${U}/photo-1507525428034-b723cf961d3e?w=600&q=80&auto=format`,
  'tatum-ranch': `${U}/photo-1558645836-e44122a743ee?w=600&q=80&auto=format`,
  'cave-creek-downtown': `${U}/photo-1474044159687-1ee9f3a51722?w=600&q=80&auto=format`,

  // Anthem
  'anthem-country-club': `${U}/photo-1535131749006-b7f58c99034b?w=600&q=80&auto=format`,
  'anthem-parkside': `${U}/photo-1564013799919-ab600027ffc6?w=600&q=80&auto=format`,

  // Pinal County
  'johnson-ranch': `${U}/photo-1560448204-e02f11c3d0e2?w=600&q=80&auto=format`,
  'pecan-creek': `${U}/photo-1500382017468-9049fed747ef?w=600&q=80&auto=format`,
  'circle-cross-ranch': `${U}/photo-1504280390367-361c6d9f38f4?w=600&q=80&auto=format`,
  'anthem-at-merrill-ranch': `${U}/photo-1600596542815-ffad4c1539a9?w=600&q=80&auto=format`,
  'florence-downtown': `${U}/photo-1469854523086-cc02fe5d8800?w=600&q=80&auto=format`,
  'province': `${U}/photo-1583608205776-bfd35f0d9f83?w=600&q=80&auto=format`,
  'rancho-el-dorado': `${U}/photo-1570129477492-45c003edd2be?w=600&q=80&auto=format`,
  'the-villages-at-rancho-el-dorado': `${U}/photo-1512917774080-9991f1c4c750?w=600&q=80&auto=format`,
  'cobblestone-farms': `${U}/photo-1564013799919-ab600027ffc6?w=600&q=80&auto=format`,
  'glennwilde': `${U}/photo-1600596542815-ffad4c1539a9?w=600&q=80&auto=format`,
  'mission-royale': `${U}/photo-1535131749006-b7f58c99034b?w=600&q=80&auto=format`,
  'casa-grande-downtown': `${U}/photo-1449824913935-59a10b8d2000?w=600&q=80&auto=format`,

  // Tucson / Pima County
  'catalina-foothills': `${U}/photo-1501785888041-af3ef285b470?w=600&q=80&auto=format`,   // Catalina Mountains
  'sam-hughes': `${U}/photo-1512917774080-9991f1c4c750?w=600&q=80&auto=format`,           // Historic university
  'armory-park': `${U}/photo-1449824913935-59a10b8d2000?w=600&q=80&auto=format`,          // Downtown Tucson
  'barrio-viejo': `${U}/photo-1570129477492-45c003edd2be?w=600&q=80&auto=format`,         // Colorful adobe
  'tucson-downtown': `${U}/photo-1494548162494-384bba4ab999?w=600&q=80&auto=format`,      // Tucson urban
  'civano': `${U}/photo-1505843513577-22bb7d21e455?w=600&q=80&auto=format`,
  'rita-ranch': `${U}/photo-1560448204-e02f11c3d0e2?w=600&q=80&auto=format`,
  'tanque-verde-valley': `${U}/photo-1518098268026-4e89f1a2cd8e?w=600&q=80&auto=format`,  // Desert valley
  'broadmoor-broadway': `${U}/photo-1519501025264-65ba15a82390?w=600&q=80&auto=format`,
  'midvale-park': `${U}/photo-1583608205776-bfd35f0d9f83?w=600&q=80&auto=format`,
  'iron-horse': `${U}/photo-1600596542815-ffad4c1539a9?w=600&q=80&auto=format`,
  'dove-mountain-tucson': `${U}/photo-1474044159687-1ee9f3a51722?w=600&q=80&auto=format`,
  'starr-pass': `${U}/photo-1542314831-068cd1dbfeeb?w=600&q=80&auto=format`,
  'rancho-vistoso': `${U}/photo-1558645836-e44122a743ee?w=600&q=80&auto=format`,
  'oro-valley-marketplace': `${U}/photo-1560448204-e02f11c3d0e2?w=600&q=80&auto=format`,
  'dove-mountain': `${U}/photo-1501785888041-af3ef285b470?w=600&q=80&auto=format`,
  'gladden-farms': `${U}/photo-1500382017468-9049fed747ef?w=600&q=80&auto=format`,
  'continental-ranch': `${U}/photo-1564013799919-ab600027ffc6?w=600&q=80&auto=format`,
  'rancho-sahuarita': `${U}/photo-1600585154340-be6161a56a0c?w=600&q=80&auto=format`,
  'quail-creek': `${U}/photo-1535131749006-b7f58c99034b?w=600&q=80&auto=format`,
  'green-valley-downtown': `${U}/photo-1504280390367-361c6d9f38f4?w=600&q=80&auto=format`,

  // Misc
  'superstition-foothills': `${U}/photo-1518098268026-4e89f1a2cd8e?w=600&q=80&auto=format`,
  'apache-junction-downtown': `${U}/photo-1474044159687-1ee9f3a51722?w=600&q=80&auto=format`,
  'litchfield-park-historic': `${U}/photo-1600585154340-be6161a56a0c?w=600&q=80&auto=format`,
  'wigwam-area': `${U}/photo-1582719508461-905c673771fd?w=600&q=80&auto=format`,
  'sun-city-center': `${U}/photo-1535131749006-b7f58c99034b?w=600&q=80&auto=format`,
  'sun-city-south': `${U}/photo-1535131749006-b7f58c99034b?w=600&q=80&auto=format`,
  'sun-city-west-core': `${U}/photo-1535131749006-b7f58c99034b?w=600&q=80&auto=format`,
  'gold-canyon-east': `${U}/photo-1509316975850-ff9c5deb0cd9?w=600&q=80&auto=format`,
  'mountainbrook-village': `${U}/photo-1501785888041-af3ef285b470?w=600&q=80&auto=format`,
  'wickenburg-ranch': `${U}/photo-1542401886-65d6c61db217?w=600&q=80&auto=format`,
  'wickenburg-downtown': `${U}/photo-1474044159687-1ee9f3a51722?w=600&q=80&auto=format`,
  'tolleson-center': `${U}/photo-1570129477492-45c003edd2be?w=600&q=80&auto=format`,
  'el-mirage-center': `${U}/photo-1583608205776-bfd35f0d9f83?w=600&q=80&auto=format`,
  'youngtown-center': `${U}/photo-1512917774080-9991f1c4c750?w=600&q=80&auto=format`,
  'coolidge-center': `${U}/photo-1504280390367-361c6d9f38f4?w=600&q=80&auto=format`,
  'vail-center': `${U}/photo-1505843513577-22bb7d21e455?w=600&q=80&auto=format`,
  'carefree-center': `${U}/photo-1445019980597-93fa8acb246c?w=600&q=80&auto=format`,
  'south-tucson-center': `${U}/photo-1449824913935-59a10b8d2000?w=600&q=80&auto=format`,
  'saddlebrooke': `${U}/photo-1535131749006-b7f58c99034b?w=600&q=80&auto=format`,
  'sun-lakes': `${U}/photo-1535131749006-b7f58c99034b?w=600&q=80&auto=format`,
  'the-groves': `${U}/photo-1500382017468-9049fed747ef?w=600&q=80&auto=format`,
  'cadence-at-gateway': `${U}/photo-1600596542815-ffad4c1539a9?w=600&q=80&auto=format`,
  'robson-ranch': `${U}/photo-1535131749006-b7f58c99034b?w=600&q=80&auto=format`,
};

// Fallback pools for slugs not in the explicit maps
const fallbackCity = [
  `${U}/photo-1558645836-e44122a743ee?w=600&q=80&auto=format`,
  `${U}/photo-1494548162494-384bba4ab999?w=600&q=80&auto=format`,
  `${U}/photo-1474044159687-1ee9f3a51722?w=600&q=80&auto=format`,
  `${U}/photo-1509316975850-ff9c5deb0cd9?w=600&q=80&auto=format`,
  `${U}/photo-1542401886-65d6c61db217?w=600&q=80&auto=format`,
  `${U}/photo-1504280390367-361c6d9f38f4?w=600&q=80&auto=format`,
  `${U}/photo-1501785888041-af3ef285b470?w=600&q=80&auto=format`,
  `${U}/photo-1505843513577-22bb7d21e455?w=600&q=80&auto=format`,
];

const fallbackNeighborhood = [
  `${U}/photo-1558645836-e44122a743ee?w=600&q=80&auto=format`,
  `${U}/photo-1501785888041-af3ef285b470?w=600&q=80&auto=format`,
  `${U}/photo-1518098268026-4e89f1a2cd8e?w=600&q=80&auto=format`,
  `${U}/photo-1474044159687-1ee9f3a51722?w=600&q=80&auto=format`,
  `${U}/photo-1505843513577-22bb7d21e455?w=600&q=80&auto=format`,
  `${U}/photo-1542401886-65d6c61db217?w=600&q=80&auto=format`,
  `${U}/photo-1494548162494-384bba4ab999?w=600&q=80&auto=format`,
  `${U}/photo-1509316975850-ff9c5deb0cd9?w=600&q=80&auto=format`,
];

const schoolPhotos = [
  `${U}/photo-1580582932707-520aed937b7b?w=600&q=80&auto=format`,
  `${U}/photo-1562774053-701939374585?w=600&q=80&auto=format`,
  `${U}/photo-1523050854058-8df90110c9f1?w=600&q=80&auto=format`,
];

function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function getCityImage(slug: string): string {
  return cityImages[slug] ?? fallbackCity[hashCode(slug) % fallbackCity.length];
}

export function getNeighborhoodImage(slug: string): string {
  return neighborhoodImages[slug] ?? fallbackNeighborhood[hashCode(slug) % fallbackNeighborhood.length];
}

export function getSchoolImage(slug: string): string {
  return schoolPhotos[hashCode(slug) % schoolPhotos.length];
}

export function getHeroImage(slug: string): string {
  return heroImages[slug] || heroImages.explore;
}
