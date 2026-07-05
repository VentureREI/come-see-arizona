import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import { buildItinerarySchema } from '../components/seo/schema';
import AnswerBlock from '../components/AnswerBlock';

interface ItineraryDay {
  dayNumber: number;
  title: string;
  description: string;
}

interface Itinerary {
  title: string;
  description: string;
  heroImage: string;
  days: ItineraryDay[];
}

const ITINERARIES: Record<string, Itinerary> = {
  'natural-wonders': {
    title: '3 Days of Arizona\'s Natural Wonders',
    description:
      'Arizona is home to some of the most breathtaking natural landscapes on the planet. From the mile-deep Grand Canyon to the towering red rock formations of Sedona and the iconic mesas of Monument Valley, this itinerary takes you through the best that the state has to offer. Whether you are an avid hiker or a casual sightseer, you will find something to take your breath away at every stop along the way.\n\nThis three-day journey covers roughly 500 miles of scenic Arizona terrain, weaving through high desert, ponderosa pine forests, and Navajo Nation lands. Each day is packed with unforgettable viewpoints, short hikes, and opportunities to connect with the land. Pack your camera, bring plenty of water, and prepare for an adventure you will never forget.',
    heroImage: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1920&q=80',
    days: [
      {
        dayNumber: 1,
        title: 'Grand Canyon South Rim',
        description:
          'Start your Arizona adventure at the Grand Canyon South Rim, one of the Seven Natural Wonders of the World. Begin your morning with a hike along the Bright Angel Trail, which descends into the canyon and offers stunning views of the layered rock formations that span nearly two billion years of geological history. Even a short walk down the first mile and a half to the first rest house rewards you with perspectives that are impossible to capture in photographs.\n\nAfter your hike, head to Mather Point for panoramic views of the canyon stretching out in every direction. Spend the afternoon exploring the Rim Trail, stopping at various overlooks along the way. As the day winds down, make your way to Hopi Point, widely regarded as the best spot on the South Rim for watching the sunset. The way the fading light paints the canyon walls in shades of orange, red, and purple is a sight that stays with you long after you leave.',
      },
      {
        dayNumber: 2,
        title: 'Sedona Red Rock Country',
        description:
          'Drive south from the Grand Canyon through Oak Creek Canyon, one of the most scenic drives in Arizona, and arrive in Sedona by mid-morning. Start with a hike up Cathedral Rock, a moderately challenging trail that rewards you with sweeping views of the entire Red Rock region. If you prefer a gentler walk, the Bell Rock Pathway offers easy terrain with equally impressive scenery and is suitable for all fitness levels.\n\nIn the afternoon, visit the Chapel of the Holy Cross, a striking architectural landmark built directly into the red rock cliffs. The views from the chapel plaza are extraordinary. Finish your day with a stroll through Tlaquepaque Arts and Shopping Village, a beautifully designed complex modeled after a traditional Mexican village. Browse galleries featuring local artists, shop for handcrafted jewelry and pottery, and enjoy dinner at one of the village restaurants as the red rocks glow in the evening light.',
      },
      {
        dayNumber: 3,
        title: 'Monument Valley',
        description:
          'Wake up early and drive northeast to Monument Valley Navajo Tribal Park, one of the most photographed landscapes in the American West. If you are staying at The View Hotel, set your alarm before dawn to witness the sunrise over the East and West Mitten Buttes from your room or the hotel terrace. The way the first light of day illuminates the sandstone towers against a vast desert sky is nothing short of magical.\n\nBook a Navajo guided tour to explore areas of the valley that are not accessible to the general public. Your guide will share stories about the history, culture, and spiritual significance of this sacred land. The tour takes you past landmarks like John Ford Point, Totem Pole, and the Ear of the Wind arch. After the guided tour, drive the 17-mile scenic loop road on your own, stopping at each overlook to take in the immense scale of the buttes and mesas that have served as backdrops for countless films and photographs.',
      },
    ],
  },
  'arts-and-culture': {
    title: '3 Days of Arts and Culture',
    description:
      'Arizona has a thriving arts and culture scene that spans Native American heritage, Western art traditions, contemporary galleries, and vibrant street art. This itinerary guides you through the creative heart of the state, visiting world-class museums, independent galleries, historic neighborhoods, and cultural landmarks in Phoenix, Scottsdale, and Tucson.\n\nOver three days, you will experience the rich diversity of Arizona\'s cultural landscape. From the stunning Native American art collections at the Heard Museum to the contemporary works along Scottsdale\'s Gallery Row and the colorful murals of Tucson\'s Barrio Viejo, this trip proves that Arizona\'s beauty extends far beyond its natural scenery.',
    heroImage: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1920&q=80',
    days: [
      {
        dayNumber: 1,
        title: 'Phoenix Museums and Galleries',
        description:
          'Begin your cultural journey at the Heard Museum in central Phoenix, one of the finest museums in the country dedicated to the art and history of Native American peoples. The museum\'s permanent collection includes over 40,000 works spanning centuries, with particular strength in Hopi kachina dolls, Navajo textiles, and contemporary Native art. Allow at least two to three hours to fully appreciate the exhibits.\n\nAfter lunch, walk over to the Phoenix Art Museum, the largest art museum in the southwestern United States. The collection ranges from Renaissance paintings to modern and contemporary works, with an excellent collection of fashion design. In the late afternoon, head to the Roosevelt Row Arts District, known locally as RoRo. This vibrant neighborhood is packed with independent galleries, colorful murals, and creative spaces. End your evening with dinner at Barrio Cafe, where chef Silvana Salcido Esparza serves elevated Mexican cuisine inspired by the regional traditions of Mexico.',
      },
      {
        dayNumber: 2,
        title: 'Scottsdale Art Scene',
        description:
          'Head east to Scottsdale, which has earned a reputation as one of the top art destinations in the country. Start your morning along the Scottsdale ArtWalk galleries, a district that stretches along Main Street and Marshall Way with more than 100 galleries showcasing everything from traditional Western bronze sculptures to cutting-edge contemporary installations. Thursday evenings are especially popular when many galleries host openings, but weekday mornings offer a quieter, more intimate experience.\n\nVisit the Scottsdale Museum of Contemporary Art (SMoCA), a sleek museum designed by architect Will Bruder that hosts rotating exhibitions of art, architecture, and design. After exploring the museum, wander through Old Town Scottsdale to browse boutiques and Western-themed shops. Cap off your day with dinner at FnB, a celebrated restaurant in the arts district where chef Charleen Badman creates seasonal vegetable-forward dishes using ingredients sourced from Arizona farms.',
      },
      {
        dayNumber: 3,
        title: 'Tucson Cultural Gems',
        description:
          'Drive south to Tucson, a city with deep cultural roots and a creative spirit all its own. Start at the Arizona-Sonora Desert Museum on the west side of town, which blends a zoo, botanical garden, natural history museum, and aquarium into a single immersive experience set against the Sonoran Desert landscape. The hummingbird aviary and the raptor free-flight demonstrations are particular highlights.\n\nIn the afternoon, visit the DeGrazia Gallery in the Sun, a historic gallery and studio built by beloved Arizona artist Ettore "Ted" DeGrazia. The adobe buildings, desert gardens, and open-air chapel create a peaceful setting for exploring his colorful paintings of Southwestern life. From there, head to the Barrio Viejo neighborhood, one of the oldest residential areas in Tucson, where beautifully preserved adobe homes sit alongside vibrant murals and small galleries. Finish your day along 4th Avenue, a funky commercial strip lined with vintage shops, bookstores, cafes, and local restaurants.',
      },
    ],
  },
  'arizona-dining': {
    title: '3 Days of Arizona Dining',
    description:
      'Arizona\'s food scene has grown into one of the most exciting and diverse in the country. Tucson holds the distinction of being the first UNESCO City of Gastronomy in the United States, and Phoenix and Scottsdale are home to James Beard Award-winning chefs and a flourishing independent restaurant culture. This itinerary takes you on a culinary tour through the best flavors of the state.\n\nFrom the Sonoran-style hot dogs and mole-rich tamales of Tucson to the artisan pizzas and creative tasting menus of the Valley, each day is designed around memorable meals at places that define Arizona\'s food identity. Come hungry, and plan to take your time savoring every bite.',
    heroImage: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80',
    days: [
      {
        dayNumber: 1,
        title: 'Tucson UNESCO Gastronomy',
        description:
          'Start your food journey in Tucson, the culinary soul of Arizona. For lunch, head to El Guero Canelo, the Tucson institution that won a James Beard Award for its legendary Sonoran hot dogs. These bacon-wrapped beauties are loaded with pinto beans, fresh tomato, mustard, jalapeño sauce, and a squeeze of lime. The casual, colorful atmosphere is quintessential Tucson.\n\nFor a more refined lunch or early dinner, visit Cafe Poca Cosa in downtown Tucson. Chef Suzana Davila creates a menu that changes twice daily, drawing on the regional cuisines of Mexico with dishes like chicken in a complex mole negro or pork braised in a tomatillo and chile verde sauce. Before or after your main meals, stop by the Tucson Tamale Company for handmade tamales in flavors ranging from traditional red chile pork to inventive green corn and cheese. The tamales are made from scratch daily using stone-ground corn.',
      },
      {
        dayNumber: 2,
        title: 'Phoenix Food Scene',
        description:
          'Drive north to Phoenix and start with what many consider the best pizza in America. Pizzeria Bianco, founded by Chris Bianco in the Heritage Square neighborhood, serves wood-fired Neapolitan-style pizzas using house-made mozzarella and locally sourced ingredients. The Rosa, topped with red onion, rosemary, Arizona pistachios, and Parmigiano, is a must-order. Arrive early because lines form quickly.\n\nFor dinner, return to Barrio Cafe on 16th Street, where chef Silvana Salcido Esparza has been redefining Mexican cuisine in Phoenix for over two decades. Her cochinita pibil and tableside guacamole are legendary. Between meals, grab a late afternoon snack at Hana Japanese Eatery for some of the freshest omakase-style sushi in the Valley. In the evening, explore The Churchill, a collection of locally owned food and retail businesses housed in repurposed shipping containers. It is a great spot for craft cocktails and a casual bite.',
      },
      {
        dayNumber: 3,
        title: 'Scottsdale Fine Dining',
        description:
          'Wrap up your culinary tour in Scottsdale, where the dining scene ranges from polished fine dining to creative brunch spots. Start your morning at Hash Kitchen, a brunch-focused restaurant with a build-your-own Bloody Mary bar featuring over 40 garnishes and toppings. The menu includes inventive dishes like churro waffles and lobster hash that make this a popular weekend destination.\n\nFor lunch, head to Citizen Public House, known for its chop salad and an extensive whiskey collection that numbers in the hundreds. The smoked chicken wings and pork belly appetizers are excellent starters. In the evening, treat yourself to dinner at FnB, where chef Charleen Badman puts Arizona-grown produce at the center of every dish. Her roasted beets and seasonal vegetable plates have earned national recognition. If you still have room, end the night at Maple and Ash for dry-aged steaks and an impressive wine list in a stylish, energetic atmosphere.',
      },
    ],
  },
  'golf-paradise': {
    title: '3 Days of Golf Paradise',
    description:
      'With over 300 days of sunshine each year and more than 200 golf courses across the state, Arizona is one of the premier golf destinations in the world. The Scottsdale and Phoenix corridor alone is home to dozens of championship-level courses designed by legends like Tom Weiskopf, Jay Morrish, and Tom Fazio. This itinerary takes you to some of the most celebrated courses in the Valley.\n\nWhether you are a scratch golfer or a weekend warrior, the combination of stunning desert scenery, impeccable course conditions, and year-round playability makes Arizona a golfer\'s dream. Each day features a different golfing experience, from the famous TPC Scottsdale to the desert masterpiece of Troon North and the tribal courses at We-Ko-Pa.',
    heroImage: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1920&q=80',
    days: [
      {
        dayNumber: 1,
        title: 'TPC Scottsdale',
        description:
          'Tee off your Arizona golf trip at TPC Scottsdale, home of the WM Phoenix Open, the most attended tournament in professional golf. Play the Stadium Course, the same layout the pros tackle every February. The par-3 16th hole is the iconic "Coliseum" that becomes a 20,000-seat amphitheater during the tournament. Even without the crowds, standing on that tee box is a thrill. The course offers a championship-level challenge with wide fairways, well-guarded greens, and beautiful desert landscaping.\n\nIf you have time for a second round or prefer a less intense experience, the Champions Course at TPC Scottsdale offers a more relaxed but equally beautiful round of golf. After your round, enjoy lunch at the clubhouse, where the patio overlooks the 18th green and offers views of the McDowell Mountains. It is the perfect way to relax and recap your round before heading to your hotel for the evening.',
      },
      {
        dayNumber: 2,
        title: 'Troon North Golf Club',
        description:
          'Head north to Troon North Golf Club in North Scottsdale for a true desert golf experience. The Monument Course, designed by Tom Weiskopf and Jay Morrish, is consistently ranked among the top public courses in Arizona. The layout winds through giant granite boulders and towering saguaro cacti, with each hole framed by the Sonoran Desert in a way that feels both wild and meticulously crafted. The par-3 holes are especially memorable, requiring precise iron play over desert washes to well-protected greens.\n\nThe Pinnacle Course at Troon North is equally spectacular, offering a slightly different character with more elevation changes and dramatic views of Pinnacle Peak. After your round, consider spending the afternoon at the nearby Boulders Resort, a luxury desert retreat nestled among 12-million-year-old granite boulder formations. Enjoy a spa treatment, a sunset cocktail on the terrace, or simply take in the striking landscape before dinner.',
      },
      {
        dayNumber: 3,
        title: 'We-Ko-Pa and Grayhawk',
        description:
          'Finish your golf trip at We-Ko-Pa Golf Club, located on the Fort McDowell Yavapai Nation east of Scottsdale. The Cholla Course, designed by Scott Miller, features a links-style layout with sweeping views of the Four Peaks and Red Mountain. The wide fairways are forgiving off the tee, but the green complexes demand accurate approach shots. The Saguaro Course, designed by Bill Coore and Ben Crenshaw, takes a more natural approach, with holes that flow through the existing desert terrain with minimal disturbance to the landscape.\n\nFor your afternoon round, head to Grayhawk Golf Club, another premier Scottsdale destination. The Talon Course, designed by David Graham and Gary Panks, is a target-style desert layout with dramatic elevation changes and risk-reward par 5s. The Raptor Course, redesigned by Tom Fazio, is a slightly more forgiving parkland-style track. After your final round, toast to three incredible days of Arizona golf at Phil\'s Grill at Grayhawk, a laid-back spot popular with golfers and locals alike.',
      },
    ],
  },
  'family-fun': {
    title: '3 Days of Family Fun',
    description:
      'Arizona is packed with family-friendly attractions that go far beyond the desert scenery. From world-class zoos and aquariums to hands-on science exhibits and outdoor adventures, there is something to captivate every member of the family. This itinerary is designed to keep kids and adults entertained with a mix of education, nature, and pure fun.\n\nSpread across three days, this trip covers the best family destinations in the Phoenix metro area and a day trip to the Sedona and Verde Valley region. The pace is relaxed enough to avoid meltdowns but packed with enough variety to keep everyone engaged. Bring sunscreen, comfortable shoes, and a sense of adventure.',
    heroImage: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1920&q=80',
    days: [
      {
        dayNumber: 1,
        title: 'Phoenix Zoo and Desert Botanical Garden',
        description:
          'Start your family adventure at the Phoenix Zoo, one of the largest privately owned nonprofit zoos in the country. Located in Papago Park, the zoo is home to more than 3,000 animals across four themed trails. Kids especially love the Monkey Village, where squirrel monkeys roam freely around visitors, and the Stingray Bay touch pool. The Arizona Trail section features native animals like javelinas, black bears, and mountain lions in naturalistic habitats.\n\nAfter the zoo, walk next door to the Desert Botanical Garden, a stunning 140-acre garden showcasing thousands of species of cacti, succulents, and desert plants from around the world. The garden offers a series of looping trails with interactive exhibits that are engaging for children. Keep an eye out for hummingbirds, roadrunners, and jackrabbits along the paths. End the afternoon with a short hike at Papago Park, where the Hole-in-the-Rock trail leads to a natural geological formation with great views of downtown Phoenix.',
      },
      {
        dayNumber: 2,
        title: 'OdySea Aquarium and Butterfly Wonderland',
        description:
          'Spend your second day at the OdySea in the Desert complex in north Scottsdale. Start at OdySea Aquarium, the largest aquarium in the Southwest, where you can walk through an underwater tunnel surrounded by sharks, sea turtles, and rays. The SeaTREK experience lets older kids walk on the floor of the ocean tank wearing a special diving helmet. The penguin exhibit and the interactive touch pools are big hits with younger children.\n\nRight next door, Butterfly Wonderland houses the largest indoor butterfly habitat in the country. Walk through a tropical rainforest conservatory filled with thousands of butterflies from around the world. The 3D theater and the emergence gallery, where you can watch butterflies breaking free from their chrysalises, are both fascinating. If the kids still have energy after that, head to Mavrix Entertainment for bowling, laser tag, and arcade games. It is an upscale entertainment venue with a full restaurant, making it easy to combine dinner with an evening of fun.',
      },
      {
        dayNumber: 3,
        title: 'Sedona and Verde Valley Day Trip',
        description:
          'Take a day trip north to the Sedona and Verde Valley area for a change of scenery and some outdoor adventure. Your first stop is Slide Rock State Park in Oak Creek Canyon, where a natural water slide formed by the smooth red rock creek bed provides hours of splashing fun for kids and adults alike. The swimming area is surrounded by towering red cliffs and apple orchards, creating one of the most beautiful swimming holes in Arizona. Arrive early in summer to secure a good spot.\n\nAfter drying off, drive to Camp Verde and visit Out of Africa Wildlife Park, a unique animal park where you can ride a safari bus through habitats with giraffes, zebras, and ostriches. The Predator Feed show and the Giant Snake Show are thrilling and educational. On your way back to Phoenix, make a quick stop at Montezuma Castle National Monument, a remarkably well-preserved cliff dwelling built by the Sinagua people over 600 years ago. The five-story structure, tucked into a limestone cliff face above Beaver Creek, is one of the best-preserved prehistoric ruins in North America.',
      },
    ],
  },
  'old-west-history': {
    title: '3 Days of Old West History',
    description:
      'Arizona played a central role in the story of the American frontier, and the echoes of that era still ring through its mining towns, ghost towns, and historic main streets. This itinerary takes you to the places where cowboys, miners, and outlaws shaped the history of the West. From the legendary streets of Tombstone to the copper mines of Bisbee and the haunted saloons of Jerome, each stop brings the past to life.\n\nOver three days, you will explore some of the most authentic and well-preserved Western towns in the United States. These are not theme parks or recreations. They are real places with real history, where you can walk the same streets as Wyatt Earp, descend into mines that once fueled the Arizona economy, and explore buildings that have stood for well over a century.',
    heroImage: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1920&q=80',
    days: [
      {
        dayNumber: 1,
        title: 'Tombstone',
        description:
          'Begin your Old West adventure in Tombstone, "The Town Too Tough to Die." Head straight to the O.K. Corral, the site of the most famous gunfight in Western history. Daily reenactments bring the 1881 showdown between the Earps, Doc Holliday, and the Clanton-McLaury gang to life with impressive authenticity. The adjacent Historama theater provides excellent context about the events leading up to and following the gunfight.\n\nAfter the O.K. Corral, visit the Bird Cage Theatre, a remarkably preserved saloon, theater, and gambling hall that operated 24 hours a day during Tombstone\'s silver mining boom in the 1880s. Bullet holes still pockmark the walls and ceiling. Walk up the hill to Boothill Graveyard, the final resting place of outlaws, miners, and settlers, where the headstone inscriptions range from somber to darkly humorous. End your day with a stagecoach ride through the historic district, passing Victorian-era buildings that line Allen Street while your driver shares tales of the town\'s wild past.',
      },
      {
        dayNumber: 2,
        title: 'Bisbee Mining Town',
        description:
          'Drive 25 miles south to Bisbee, a former copper mining town that has reinvented itself as one of Arizona\'s most charming and quirky communities. Start with the Copper Queen Mine Tour, where you don a hard hat and headlamp and ride a mine cart 1,500 feet into the mountain. A retired miner guides you through the tunnels, explaining the dangerous and backbreaking work that produced billions of pounds of copper over the mine\'s 100-year history.\n\nAfter emerging from the mine, explore Brewery Gulch, the historic entertainment district that once boasted over 40 saloons packed into a single block. Today the street is home to galleries, antique shops, and a handful of bars that carry on the tradition. Visit the Bisbee Mining and Historical Museum, housed in the former headquarters of the Copper Queen Consolidated Mining Company, for a deeper look at the town\'s role in shaping Arizona\'s economy. The exhibits cover everything from the geology of the copper deposits to the labor struggles of the early twentieth century.',
      },
      {
        dayNumber: 3,
        title: 'Jerome, Prescott, and Goldfield',
        description:
          'Start your final day in Jerome, a former copper mining town perched on the side of Cleopatra Hill above the Verde Valley. Once home to over 15,000 residents, Jerome was nearly abandoned after the mines closed in 1953 and is now known as "The Largest Ghost Town in America." Today it has a population of around 450 and is filled with art galleries, wine tasting rooms, and quirky museums. Visit the Jerome State Historic Park, housed in the 1916 mansion of mine owner James "Rawhide Jimmy" Douglas, for panoramic views and fascinating exhibits about the town\'s boom-and-bust history.\n\nFrom Jerome, drive northwest to Prescott and stroll down Whiskey Row, a block of saloons and bars along Montezuma Street that has been the social center of this former territorial capital since the 1860s. The Palace Restaurant and Saloon, operating since 1877, is the oldest bar in Arizona. On your drive back toward Phoenix, make a final stop at Goldfield Ghost Town near Apache Junction at the base of the Superstition Mountains. This reconstructed 1890s mining town offers gold mine tours, gold panning, a narrow gauge railroad ride, and spectacular views of the legendary mountains where the Lost Dutchman\'s Mine is said to be hidden.',
      },
    ],
  },
};

const HERO_IMAGES: Record<string, string> = {
  'natural-wonders': 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1920&q=80',
  'arts-and-culture': 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1920&q=80',
  'arizona-dining': 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80',
  'golf-paradise': 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1920&q=80',
  'family-fun': 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1920&q=80',
  'old-west-history': 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1920&q=80',
};

export default function ItineraryPage() {
  const { slug } = useParams<{ slug: string }>();
  const itinerary = slug ? ITINERARIES[slug] : undefined;

  if (!itinerary || !slug) {
    return (
      <div className="explore-section" style={{ textAlign: 'center', padding: '120px 20px' }}>
        <div className="explore-container">
          <h1>Itinerary Not Found</h1>
          <p className="explore-description" style={{ marginTop: '16px' }}>
            Sorry, we could not find the itinerary you are looking for.
          </p>
          <Link
            to="/"
            style={{
              display: 'inline-block',
              marginTop: '24px',
              background: 'var(--color-primary)',
              color: 'white',
              padding: '14px 32px',
              borderRadius: '50px',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '15px',
            }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const descriptionParagraphs = itinerary.description.split('\n\n');

  const allSlugs = Object.keys(ITINERARIES);
  const otherItineraries = allSlugs.filter((s) => s !== slug);

  return (
    <>
      <SEOHead
        title={`${itinerary.title} | Come See Arizona`}
        description={descriptionParagraphs[0]}
        canonical={`/itineraries/${slug}`}
        image={HERO_IMAGES[slug!] || itinerary.heroImage}
        imageAlt={itinerary.title}
        schema={buildItinerarySchema({
          name: itinerary.title,
          description: itinerary.description,
          url: `/itineraries/${slug}`,
          image: HERO_IMAGES[slug!] || itinerary.heroImage,
          days: itinerary.days,
        })}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: itinerary.title, url: `/itineraries/${slug}` },
        ]}
      />

      {/* Hero Section */}
      <div className="explore-hero">
        <div className="explore-hero-bg">
          <img
            src={HERO_IMAGES[slug] || itinerary.heroImage}
            alt={itinerary.title}
            className="card-img"
          />
        </div>
        <div className="explore-hero-overlay" />
        <div className="explore-hero-content">
          <div className="breadcrumb-hero">
            <Link to="/">Home</Link> &nbsp;&gt;&nbsp;{' '}
            Itineraries &nbsp;&gt;&nbsp;{' '}
            {itinerary.title}
          </div>
          <h1>{itinerary.title}</h1>
        </div>
      </div>

      <AnswerBlock answer={`${itinerary.title}: ${itinerary.description.split('.').slice(0, 2).join('.') + '.'}`} />

      {/* Overview Section */}
      <div className="explore-section">
        <div className="explore-container-narrow">
          {descriptionParagraphs.map((paragraph, index) => (
            <p key={index} className="explore-description">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Day Sections */}
      {itinerary.days.map((day) => {
        const dayParagraphs = day.description.split('\n\n');
        return (
          <div key={day.dayNumber} className={`explore-section${day.dayNumber % 2 === 0 ? ' alt-bg' : ''}`}>
            <div className="explore-container-narrow">
              <h2 className="explore-section-title">
                Day {day.dayNumber}: {day.title}
              </h2>
              {dayParagraphs.map((paragraph, index) => (
                <p key={index} className="explore-description">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        );
      })}

      {/* More Itineraries */}
      <div className="explore-section alt-bg">
        <div className="explore-container-narrow">
          <h2 className="explore-section-title">More Itineraries</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '20px' }}>
            {otherItineraries.map((otherSlug) => (
              <Link
                key={otherSlug}
                to={`/itineraries/${otherSlug}`}
                className="explore-image-card"
                style={{ minHeight: 200 }}
              >
                <img src={HERO_IMAGES[otherSlug]} alt={ITINERARIES[otherSlug].title} className="card-img" />
                <div className="card-gradient" />
                <div className="card-body">
                  <h3>{ITINERARIES[otherSlug].title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Incyte Realty Footer */}
      <div style={{ background: '#FAF5F0', padding: '48px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 700, color: '#211B24', marginBottom: 12 }}>Planning Your Arizona Trip?</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#4A4239', marginBottom: 20 }}>
            Many visitors who fall in love with Arizona on trips like this decide to make it home. Incyte Realty helps buyers find the right community, from resort-adjacent Scottsdale to family-friendly Gilbert to emerging west Valley markets. Frank Vazquez and team offer straightforward guidance with no pressure.
          </p>
          <Link to="/explore" style={{ display: 'inline-block', background: '#C1502E', color: '#fff', padding: '14px 32px', borderRadius: 28, fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>
            Explore Arizona Communities
          </Link>
        </div>
      </div>
    </>
  );
}
