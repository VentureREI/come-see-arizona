import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import { buildArticleSchema } from '../components/seo/schema';
import AnswerBlock from '../components/AnswerBlock';

interface Article {
  title: string;
  description: string[];
  imageUrl: string;
  category: string;
}

const ARTICLES: Record<string, Article> = {
  'celebrate-arizonas-rich-heritage': {
    title: "Celebrate Arizona's Rich Heritage",
    description: [
      "Arizona's cultural heritage runs deeper than the canyons that carve through its landscape. From the ancient traditions of the Navajo Nation and the Hopi villages perched atop remote mesas to the vibrant celebrations that fill city streets today, the state offers an extraordinary tapestry of living history. The Heard Museum in Phoenix stands as one of the nation's finest institutions dedicated to Native American art and culture, housing more than 40,000 works that span centuries of creativity and resilience. Just minutes away, Pueblo Grande Museum and Archaeological Park preserves the ruins of a Hohokam village that thrived here over a thousand years ago.",
      "Visitors who venture beyond the Valley will find even richer connections to the past. The Navajo Nation, the largest Native American reservation in the country, covers more than 27,000 square miles of breathtaking terrain dotted with sacred sites, traditional hogans, and communities where the Navajo language is spoken daily. The Hopi villages on the mesas of northeastern Arizona are among the oldest continuously inhabited settlements in North America, and guided tours offer a rare window into traditions that have endured for millennia.",
      "In Tucson, the Arizona State Museum at the University of Arizona holds the world's largest collection of Southwest Native pottery and provides context for understanding the many peoples who have called this region home. Throughout the year, powwows, cultural festivals, and art markets bring communities together across the state. Whether you are watching traditional dances at a tribal fair or browsing contemporary Indigenous art in a Scottsdale gallery, Arizona's heritage is not something preserved behind glass. It is alive, evolving, and waiting to be experienced firsthand.",
    ],
    imageUrl: 'https://images.unsplash.com/photo-1558645836-e44122a743ee?auto=format&fit=crop&w=1600&q=80',
    category: 'Culture & Heritage',
  },

  'ancient-civilizations-southwest': {
    title: 'Ancient Civilizations of the Southwest',
    description: [
      "Long before European explorers set foot in the desert, sophisticated civilizations thrived across what is now Arizona. Their legacy endures in the remarkable cliff dwellings, stone pueblos, and ceremonial structures that dot the landscape from the Verde Valley to the high desert plateaus. Montezuma Castle National Monument, nestled into a limestone cliff above Beaver Creek, is one of the best-preserved cliff dwellings in North America. Built by the Sinagua people around 700 years ago, the five-story, 20-room structure offers a stunning testament to the ingenuity of its builders.",
      "Nearby, Tuzigoot National Monument crowns a limestone ridge overlooking the Verde River, where a sprawling pueblo once housed hundreds of residents. Further south, Casa Grande Ruins National Monument in Coolidge protects a massive four-story earthen structure built by the ancient Sonoran Desert people around 1350 CE. Its purpose remains a mystery, though archaeologists believe it may have served as an astronomical observatory or ceremonial gathering place.",
      "Canyon de Chelly on the Navajo Nation is among the most awe-inspiring archaeological sites in the entire Southwest. Spider Rock rises 800 feet from the canyon floor, and the sandstone walls shelter White House Ruin and dozens of other ancient dwellings. North of Flagstaff, Wupatki National Monument preserves the ruins of communities that flourished after the eruption of Sunset Crater around 1085 CE, when volcanic ash enriched the soil and drew settlers from across the region.",
      "Exploring these sites is more than a history lesson. It is a chance to stand in the places where people built homes, raised families, farmed the arid land, and created art that still inspires wonder today. Each monument offers interpretive trails, ranger programs, and visitor centers that bring these ancient stories to life.",
    ],
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80',
    category: 'History & Archaeology',
  },

  'scottsdale-art-district-guide': {
    title: 'Scottsdale Art District Guide',
    description: [
      "Scottsdale has earned its reputation as the West's most vibrant art destination, and the Scottsdale Arts District is where that creative energy is most concentrated. Stretching along Marshall Way and Main Street in Old Town, the district is home to more than 100 galleries, studios, and creative spaces showcasing everything from traditional Western bronzes to cutting-edge contemporary installations. On Thursday evenings, the legendary ArtWalk transforms the neighborhood into an open-air celebration of creativity, with galleries opening their doors, artists greeting visitors, and live music filling the warm desert air.",
      "Marshall Way is the spine of the gallery scene, lined with spaces that range from intimate artist-run studios to world-class galleries representing internationally recognized names. Main Street galleries tend toward Southwestern and Western art, with stunning landscapes, Native American jewelry, and hand-crafted pottery on display. The Scottsdale Museum of Contemporary Art (SMoCA) anchors the district's more adventurous side, presenting rotating exhibitions that challenge and delight in equal measure.",
      "Beyond the polished gallery spaces, Cattletrack Arts Compound offers a grittier, more bohemian experience. This cluster of studios and workshops near the Arizona Canal has been nurturing artists since the 1930s, and open studio events reveal painters, sculptors, and printmakers at work in their creative habitats. Seasonal art festivals, including the acclaimed Scottsdale ArtsFest, draw collectors and casual browsers from around the world.",
      "Whether you are a serious collector hunting for your next acquisition or a curious traveler who simply loves beautiful things, the Scottsdale Arts District delivers. Plan to spend at least a full afternoon wandering, and do not be surprised if you find yourself returning the next day to see something you missed.",
    ],
    imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1600&q=80',
    category: 'Arts & Culture',
  },

  'route-66-through-arizona': {
    title: 'Route 66 Through Arizona',
    description: [
      "Arizona claims over 400 miles of the Mother Road, and driving Route 66 across the state is one of America's great road trip experiences. The highway enters from New Mexico near Lupton, winds through the painted landscapes of the Navajo Nation, and eventually crosses the Colorado River at Topock before slipping into California. Along the way, it threads through small towns that have preserved the spirit of mid-century travel with neon signs, vintage motels, and diners serving honest, hearty food.",
      "Holbrook makes a perfect first stop, where the Wigwam Motel lets you sleep in a concrete teepee just as travelers did in the 1950s. Nearby, Petrified Forest National Park and the Painted Desert showcase millions of years of geological history in vivid bands of crimson, purple, and gold. Further west, Winslow earned a permanent spot in pop culture thanks to the Eagles song 'Take It Easy,' and Standin' on the Corner Park commemorates the moment with a life-size bronze statue and a mural.",
      "Flagstaff serves as the route's mountain oasis, with its historic downtown, craft breweries, and proximity to the San Francisco Peaks. Heading west, Williams bills itself as the 'Gateway to the Grand Canyon' and retains more of its original Route 66 character than perhaps any other town in the state. The restored downtown is packed with retro shops, steakhouses, and the Grand Canyon Railway depot.",
      "The stretch from Williams to Seligman is pure nostalgia. Seligman is widely credited as the birthplace of the Route 66 revival movement, and its roadside attractions, quirky gift shops, and Angel Delgadillo's famous barbershop draw pilgrims from around the globe. Driving this road is not about getting somewhere fast. It is about savoring the journey, pulling over for a photo, and letting the romance of the open highway work its magic.",
    ],
    imageUrl: 'https://images.unsplash.com/photo-1545580492-8859ba8323f0?auto=format&fit=crop&w=1600&q=80',
    category: 'Road Trips',
  },

  'phoenix-best-rooftop-bars': {
    title: "Phoenix's Best Rooftop Bars",
    description: [
      "When the sun dips below the Sierra Estrella and the sky turns shades of tangerine and violet, there is no better place to be than a rooftop bar in Phoenix or Scottsdale. The Valley's year-round warm evenings and dramatic desert sunsets make elevated drinking a way of life here, and the city's bar scene has responded with a growing collection of stylish rooftop venues that pair craft cocktails with panoramic views.",
      "Lustre Rooftop Garden in downtown Phoenix sits atop Hotel Palomar and offers a lush, garden-like setting with plunge pools, cabanas, and creative cocktails that draw a fashionable crowd. Nearby, The Rooftop at The Clarendon delivers a more laid-back vibe with strong drinks, DJ sets, and unobstructed views of Piestewa Peak. For a more refined experience, Skysill Rooftop Lounge in Tempe perches above the Marriott and serves elevated small plates alongside its cocktail menu, with sweeping views of Tempe Town Lake and the surrounding mountains.",
      "In Scottsdale, Hotel Valley Ho's ZuZu lounge channels mid-century modern cool with poolside seating, retro decor, and a killer happy hour that locals swear by. For something truly special, Orange Sky at Talking Stick Resort rises 15 floors above the Salt River Pima-Maricopa Indian Community, offering fine dining and floor-to-ceiling windows that frame the entire Valley from Camelback Mountain to Four Peaks.",
      "Most rooftop bars in the Valley are at their best during the cooler months from October through April, when patio season is in full swing and the weather is nothing short of perfect. Arrive before sunset to claim a good spot, and let the colors of the Arizona sky do the rest.",
    ],
    imageUrl: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1600&q=80',
    category: 'Food & Drink',
  },

  'arizona-best-hiking-trails': {
    title: "Arizona's Best Hiking Trails",
    description: [
      "Arizona is a hiker's paradise, offering trails that range from gentle desert strolls to grueling summit pushes through alpine terrain. The diversity of landscapes is staggering. In a single state, you can trek through saguaro-studded Sonoran Desert, scramble up red sandstone formations, descend into one of the world's deepest canyons, and summit a 12,000-foot peak dusted with snow. Few places on Earth offer that kind of variety within a day's drive.",
      "In the Phoenix metro area, Camelback Mountain's Echo Canyon Trail is the iconic urban hike, a steep and rocky 1.2-mile climb that rewards with 360-degree views of the sprawling Valley below. Piestewa Peak Summit Trail offers a similar challenge with slightly smaller crowds, while Tom's Thumb in north Scottsdale leads hikers through dramatic granite formations in the McDowell Sonoran Preserve. Each of these trails can be completed in a morning, making them perfect for visitors staying in the city.",
      "Sedona's Cathedral Rock Trail is widely considered one of the most beautiful short hikes in the country. The scramble to the saddle between the towering red spires is exhilarating, and the views of Oak Creek Canyon and the surrounding buttes are unforgettable. At the Grand Canyon, the Bright Angel Trail descends from the South Rim into the heart of the canyon, passing through layers of geological history that span nearly two billion years. This is not a day hike to take lightly, but even walking a mile or two down and back delivers a profound sense of the canyon's scale.",
      "For peak baggers, Humphreys Peak near Flagstaff stands at 12,633 feet as Arizona's highest point. The trail climbs through fragrant pine and spruce forests before emerging above the tree line into a windswept alpine landscape unlike anything else in the state. No matter your skill level, Arizona has a trail waiting for you.",
    ],
    imageUrl: 'https://images.unsplash.com/photo-1682686581362-796145f0e123?auto=format&fit=crop&w=1600&q=80',
    category: 'Outdoor Adventure',
  },

  'best-desert-resorts-spas': {
    title: "Arizona's Best Desert Resorts & Spas",
    description: [
      "Arizona has long been a destination for those seeking relaxation, renewal, and a touch of luxury under wide open skies. The state's resort scene is among the finest in North America, blending world-class amenities with the natural beauty of the Sonoran Desert, red rock country, and pine-covered mountains. Whether you are looking for a romantic getaway, a wellness retreat, or a base camp for desert adventures, Arizona's resorts deliver an experience that is hard to match anywhere else.",
      "The Phoenician in Scottsdale is the gold standard of Valley luxury, with its terraced pools, championship golf course, and a spa that draws on botanical ingredients from its own on-site garden. Sanctuary on Camelback Mountain offers a more intimate and design-forward experience, with casita-style accommodations tucked into the mountainside and an award-winning restaurant that has become a destination in its own right. The Boulders Resort in Carefree takes its name from the 12-million-year-old granite formations that surround it, creating a landscape so dramatic that it feels like staying inside a sculpture garden.",
      "Four Seasons Resort Scottsdale at Troon North blends Southwestern architecture with five-star service, offering casitas with private plunge pools and views of Pinnacle Peak. In Tucson, Miraval Arizona Resort and Spa pioneered the wellness retreat concept and continues to set the standard with mindfulness programs, outdoor adventures, and spa treatments rooted in the healing traditions of the desert.",
      "For a completely different flavor of Arizona luxury, L'Auberge de Sedona sits along Oak Creek beneath towering sycamores and red rock cliffs. The creekside cabins, outdoor dining, and stargazing programs make it one of the most romantic properties in the Southwest. No matter which resort you choose, the combination of impeccable service, stunning scenery, and that unmistakable Arizona light will leave you already planning your return visit.",
    ],
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80',
    category: 'Travel & Luxury',
  },

  'sedona-red-rocks': {
    title: "Sedona's Red Rock Guide",
    description: [
      "Sedona sits in a natural amphitheater surrounded by towering red sandstone formations that glow like embers at sunrise and deepen to burgundy as the sun sets. It is one of the most visually striking places in North America, and its combination of world-class hiking, spiritual energy, thriving arts scene, and exceptional dining make it far more than a pretty backdrop. Located about two hours north of Phoenix along a scenic highway that climbs through the desert and into the high country, Sedona feels like entering another world entirely.",
      "The red rock formations are the main attraction, and there is no shortage of ways to experience them. Bell Rock, Cathedral Rock, and Courthouse Butte are among the most photographed landmarks, and trails of varying difficulty wind through and around them all. Sedona is also famous for its vortex sites, locations where the earth's energy is said to be especially strong. Whether or not you subscribe to the metaphysical claims, there is no denying that places like Airport Mesa, Boynton Canyon, and Bell Rock carry a palpable sense of calm and wonder.",
      "The arts and dining scene punches well above its weight for a town of roughly 10,000 residents. Tlaquepaque Arts and Shopping Village is a beautifully designed marketplace modeled after a traditional Mexican village, filled with galleries, boutiques, and studios. Elote Cafe has earned a cult following for its Mexican-inspired dishes built around fire-roasted corn and bold Southwestern flavors. Mariposa Latin Inspired Grill offers stunning red rock views alongside creative Latin American cuisine that draws foodies from across the state.",
      "Sedona rewards visitors who slow down and stay a while. Catch the sunrise from Airport Mesa, hike to the saddle of Cathedral Rock in the morning light, browse galleries in the afternoon, and end the day with a memorable dinner as the rocks turn gold outside your window. It is a place that stays with you long after you leave.",
    ],
    imageUrl: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1600&q=80',
    category: 'Destinations',
  },

  'flagstaff-mountain-town': {
    title: 'Flagstaff Mountain Town Guide',
    description: [
      "Sitting at nearly 7,000 feet in the shadow of the San Francisco Peaks, Flagstaff is Arizona's mountain town, a place where ponderosa pines replace saguaros and snowfall replaces sunshine for much of the winter. It is also a vibrant college town, home to Northern Arizona University, and serves as the primary gateway to the Grand Canyon's South Rim, just 80 miles to the northwest. Historic Route 66 runs straight through the heart of downtown, lending the city a nostalgic charm that blends seamlessly with its youthful, outdoorsy energy.",
      "Outdoor recreation is woven into daily life here. Arizona Snowbowl, set on the slopes of the San Francisco Peaks, offers excellent skiing and snowboarding from November through April, with a vertical drop of over 2,000 feet. In summer, the same mountain becomes a hiking and mountain biking playground, and the Flagstaff Urban Trail System connects neighborhoods, parks, and natural areas throughout the city. The Arizona Trail passes right through town, offering access to some of the most scenic backcountry in the state.",
      "Flagstaff's cultural offerings are equally compelling. Lowell Observatory, perched on Mars Hill above downtown, is where Pluto was discovered in 1930 and continues to offer public stargazing programs that take full advantage of Flagstaff's designation as the world's first International Dark Sky City. The Museum of Northern Arizona explores the region's geology, biology, and Native cultures through excellent exhibits and seasonal festivals.",
      "Downtown Flagstaff is a walkable stretch of independent bookstores, vintage shops, craft breweries, and restaurants that reflect the town's eclectic personality. Mother Road Brewing, Lumberyard Brewing, and Historic Brewing have turned the city into a legitimate craft beer destination. Whether you are passing through on your way to the Grand Canyon or settling in for a long weekend, Flagstaff has a way of making you want to stay a little longer than you planned.",
    ],
    imageUrl: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1600&q=80',
    category: 'Destinations',
  },

  'bisbee-artistic-colony': {
    title: 'Bisbee: Arizona\'s Artistic Colony',
    description: [
      "Tucked into the Mule Mountains of southeastern Arizona, Bisbee is a former copper mining town that has reinvented itself as one of the most charming and creative small communities in the American West. Its steep, winding streets are lined with colorful Victorian homes, art galleries, quirky shops, and cafes that spill out onto narrow sidewalks. The town's dramatic topography, built into the walls of a canyon, gives it a vertical, almost European feel that is unlike anywhere else in the state.",
      "Mining put Bisbee on the map in the late 1800s, and the Copper Queen Mine Tour remains one of the town's top attractions. Visitors don hard hats and headlamps and descend into the underground tunnels where miners once extracted millions of tons of copper ore. The Bisbee Mining and Historical Museum, housed in the former headquarters of the Copper Queen Consolidated Mining Company, provides excellent context for understanding how the industry shaped the town and the broader region.",
      "When the mines closed in the 1970s, artists, musicians, and free spirits moved in, drawn by cheap rent, beautiful light, and a welcoming community. Today, galleries and studios are scattered throughout town, and Brewery Gulch, the old red-light district, has been reborn as a lively strip of bars, restaurants, and live music venues. Annual events like the Bisbee 1000 Stair Climb and the Bisbee Blues Festival draw visitors from across the country.",
      "Accommodations range from the historic Copper Queen Hotel, rumored to be haunted, to eclectic vacation rentals tucked into hillside cottages. Bisbee is the kind of place where you come for a day trip and find yourself rearranging your itinerary to stay for three. Its creative spirit, layered history, and genuine small-town warmth make it one of Arizona's most rewarding destinations.",
    ],
    imageUrl: 'https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?auto=format&fit=crop&w=1600&q=80',
    category: 'Destinations',
  },

  'prescott-old-west': {
    title: "Prescott: Arizona's Old West Capital",
    description: [
      "Prescott holds a special place in Arizona history as the state's original territorial capital, and its downtown still radiates the kind of Old West character that most towns can only imitate. Courthouse Plaza, anchored by the stately Yavapai County Courthouse and its shaded grounds, serves as the heart of the community and the site of festivals, farmers markets, and holiday celebrations throughout the year. The famous Whiskey Row lines the south side of the plaza, a block of historic saloons, restaurants, and shops that has been keeping spirits high since the 1860s.",
      "The town sits at a pleasant 5,400 feet in the Bradshaw Mountains, giving it four mild seasons and a climate that feels worlds away from the scorching Valley floor. Watson Lake, just minutes from downtown, is a stunner. Enormous granite boulders rise from the water's edge, creating a landscape that looks more like the Sierra Nevada than the Arizona high country. Kayaking, rock climbing, and sunset photography are popular activities here, and the Watson Lake Loop Trail offers an easy and scenic hike around the shoreline.",
      "Prescott National Forest surrounds the town on nearly every side, providing endless opportunities for hiking, mountain biking, horseback riding, and camping. The Granite Mountain Wilderness and Thumb Butte are local favorites for day hikes with rewarding views. Back in town, the antique shops along Cortez Street and Montezuma Street are a treasure hunter's dream, stocked with Western memorabilia, vintage furniture, and one-of-a-kind finds.",
      "The town's calendar is packed with events that celebrate its heritage, including the World's Oldest Rodeo held every Fourth of July since 1888. Prescott manages to honor its past without feeling stuck in it. The growing craft beer scene, farm-to-table restaurants, and thriving arts community give it a contemporary edge that keeps both longtime residents and first-time visitors coming back for more.",
    ],
    imageUrl: 'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?auto=format&fit=crop&w=1600&q=80',
    category: 'Destinations',
  },
};

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? ARTICLES[slug] : undefined;

  if (!article) {
    return (
      <>
        <SEOHead
          title="Article Not Found | Come See Arizona"
          description="The article you are looking for could not be found. Explore our other guides to Arizona destinations, culture, and adventures."
          canonical={`/articles/${slug || ''}`}
          breadcrumbs={[
            { name: 'Home', url: '/' },
            { name: 'Article Not Found', url: `/articles/${slug || ''}` },
          ]}
        />
        <div className="explore-section" style={{ textAlign: 'center', padding: '120px 24px' }}>
          <div className="explore-container">
            <h1>Article Not Found</h1>
            <p className="explore-description" style={{ marginTop: '16px' }}>
              Sorry, we could not find the article you were looking for. It may have been moved or no longer exists.
            </p>
            <div style={{ marginTop: '32px', display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <Link to="/" className="btn btn-primary">Back to Home</Link>
              <Link to="/explore" className="btn btn-secondary">Explore Arizona</Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title={`${article.title} | Come See Arizona`}
        description={article.description[0].slice(0, 160)}
        canonical={`/articles/${slug}`}
        image={article.imageUrl}
        imageAlt={article.title}
        schema={buildArticleSchema({
          headline: article.title,
          description: article.description[0].slice(0, 250),
          url: `/articles/${slug}`,
          image: article.imageUrl,
          // TODO: replace placeholders with real per-article dates added to ARTICLES data.
          datePublished: '2026-01-01',
          dateModified: '2026-03-26',
        })}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: article.title, url: `/articles/${slug}` },
        ]}
      />

      {/* Hero Section */}
      <div className="explore-hero">
        <div className="explore-hero-bg">
          <img src={article.imageUrl} alt={article.title} className="card-img" />
        </div>
        <div className="explore-hero-overlay" />
        <div className="explore-hero-content">
          <div className="breadcrumb-hero">
            <Link to="/">Home</Link> &nbsp;&gt;&nbsp; {article.title}
          </div>
          <h1>{article.title}</h1>
          <p className="hero-subtitle">{article.category}</p>
        </div>
      </div>

      <AnswerBlock answer={article.description[0].slice(0, 300)} />

      {/* Article Content */}
      <div className="explore-section">
        <div className="explore-container-narrow">
          {article.description.map((paragraph, index) => (
            <p key={index} className="explore-description">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Incyte Realty Footer */}
      <div style={{ background: '#FAF5F0', padding: '48px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#4A4239' }}>
            Real estate market data and community insights powered by Incyte Realty. Frank Vazquez and team provide honest, no-pressure guidance for buyers and sellers across the Valley.
          </p>
          <Link to="/explore" style={{ display: 'inline-block', marginTop: 16, background: '#C1502E', color: '#fff', padding: '12px 28px', borderRadius: 28, fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
            Explore Arizona Communities
          </Link>
        </div>
      </div>
    </>
  );
}
