import { useState, useEffect, useRef, useMemo } from 'react';
import {
  Menu, X, Search, ChevronRight, ChevronLeft,
  Clock, ArrowRight, Mail,
  Facebook, Twitter, Instagram, Youtube
} from 'lucide-react';
import { getMergedEvents } from './data/dynamicLoader';
import type { EventItem } from './data/events';
import './App.css';

// Navigation items
const NAV_ITEMS = [
  { label: 'Things to Do in Arizona', shortLabel: 'Things to Do', href: '/things-to-do' },
  { label: 'Eat & Drink in Arizona', shortLabel: 'Eat & Drink', href: '/eat-and-drink' },
  { label: 'Arizona Events', shortLabel: 'Events', href: '/events' },
  { label: 'Where to Stay in Arizona', shortLabel: 'Where to Stay', href: '/where-to-stay' },
  { label: 'Arizona Travel Guides', shortLabel: 'Travel Guides', href: '/travel-guides' },
];

// Featured articles
const FEATURED_ARTICLES = [
  {
    id: 1,
    image: '/featured-heritage.jpg',
    imageAlt: 'Native American cultural celebration with traditional dancers in Arizona desert setting',
    category: 'Things to Do',
    subcategory: 'Culture',
    title: "Celebrate Arizona's Rich Heritage",
    description: 'Explore Arizona\'s rich cultural heritage from Native American traditions and ancient cliff dwellings to Spanish colonial missions and vibrant modern celebrations across the state.',
    author: 'Come And See Arizona',
    datePublished: '2026-03-01',
    url: '/articles/celebrate-arizonas-rich-heritage',
  },
  {
    id: 2,
    image: '/featured-ancient.jpg',
    imageAlt: 'Ancient cliff dwellings at Montezuma Castle National Monument in Verde Valley, Arizona',
    category: 'Things to Do',
    subcategory: 'Museums',
    title: 'Ancient Civilizations of the Southwest',
    description: 'Explore Arizona\'s ancient civilizations at sites like Montezuma Castle, Tuzigoot National Monument, Casa Grande Ruins, and the cliff dwellings of Canyon de Chelly.',
    author: 'Come And See Arizona',
    datePublished: '2026-02-15',
    url: '/articles/ancient-civilizations-southwest',
  },
];

// Secondary articles
const SECONDARY_ARTICLES = [
  {
    id: 3,
    image: '/article-scottsdale.jpg',
    imageAlt: 'Art galleries and sculptures along the Scottsdale Arts District at night, Arizona',
    category: 'Things to Do',
    subcategory: 'Arts',
    title: "Scottsdale's Art District Guide",
    description: 'Navigate Scottsdale\'s thriving art district featuring over 100 galleries, the Thursday evening ArtWalk, Scottsdale Museum of Contemporary Art, and Western art at the Cattletrack Arts Compound.',
    author: 'Come And See Arizona',
    datePublished: '2026-02-20',
    url: '/articles/scottsdale-art-district-guide',
  },
  {
    id: 4,
    image: '/article-route66.jpg',
    imageAlt: 'Historic Route 66 through the Arizona desert with vintage neon signs and retro motels',
    category: 'Things to Do',
    subcategory: 'Attractions',
    title: 'Route 66 Through Arizona',
    description: 'Drive the longest remaining stretch of historic Route 66 through Arizona, from the Painted Desert and Petrified Forest to Seligman, Williams, and Flagstaff. Over 400 miles of Americana.',
    author: 'Come And See Arizona',
    datePublished: '2026-01-10',
    url: '/articles/route-66-through-arizona',
  },
];

// Helper: get upcoming events from dynamic data, filtered and sorted
function getWeekendDates(): string {
  const today = new Date();
  const day = today.getDay(); // 0=Sun, 6=Sat
  const sat = new Date(today);
  if (day === 6) {
    // today is Saturday, use today
  } else if (day === 0) {
    // today is Sunday, go back to yesterday (Saturday)
    sat.setDate(sat.getDate() - 1);
  } else {
    // Mon-Fri: advance to coming Saturday
    sat.setDate(sat.getDate() + (6 - day));
  }
  const sun = new Date(sat);
  sun.setDate(sun.getDate() + 1);

  const fmt = (d: Date) => d.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
  const year = sun.getFullYear();
  return `${fmt(sat)} - ${fmt(sun)}, ${year}`;
}

function getUpcomingEvents(): Array<{ id: string; month: string; day: string; year: string; isoDate: string; category: string; title: string; time: string; location: string; sourceUrl: string | null }> {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const allEvents: EventItem[] = getMergedEvents();
  return allEvents
    .filter(ev => new Date(ev.startDate + 'T12:00:00') >= today)
    .sort((a, b) => a.startDate.localeCompare(b.startDate))
    .slice(0, 5)
    .map(ev => {
      const d = new Date(ev.startDate + 'T12:00:00');
      return {
        id: ev.id,
        month: d.toLocaleString('en-US', { month: 'short' }).toUpperCase(),
        day: d.getDate().toString().padStart(2, '0'),
        year: d.getFullYear().toString(),
        isoDate: ev.startDate,
        category: ev.category,
        title: ev.title,
        time: ev.time,
        location: `${ev.venueName}, ${ev.venueCity}`,
        sourceUrl: ev.sourceUrl,
      };
    });
}

// Helper: get the next big featured event for the promo banner
function getFeaturedEvent(): EventItem | null {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const allEvents: EventItem[] = getMergedEvents();
  const majorCategories = ['Festival', 'Music', 'Sports'];
  const major = allEvents
    .filter(ev => {
      if (new Date(ev.startDate + 'T12:00:00') < today) return false;
      if (!majorCategories.includes(ev.category)) return false;
      // Prefer multi-day or well-known events
      if (ev.endDate && ev.endDate !== ev.startDate) return true;
      // Also include single-day major events
      return true;
    })
    .sort((a, b) => a.startDate.localeCompare(b.startDate));
  return major[0] ?? null;
}

// Itineraries
const ITINERARIES = [
  {
    id: 1,
    image: '/itinerary-nature.jpg',
    imageAlt: 'Grand Canyon South Rim panoramic view at sunrise with layered rock formations, Arizona',
    title: "3 Days of Arizona's Natural Wonders",
    description: 'Experience the Grand Canyon, Sedona red rocks, and Monument Valley on this unforgettable journey.',
    url: '/itineraries/natural-wonders',
  },
  {
    id: 2,
    image: '/itinerary-culture.jpg',
    imageAlt: 'Phoenix Art Museum modern exterior with contemporary architecture under blue Arizona sky',
    title: '3 Days of Arts and Culture',
    description: 'Explore Phoenix museums, Scottsdale galleries, and Native American heritage sites.',
    url: '/itineraries/arts-and-culture',
  },
  {
    id: 3,
    image: '/itinerary-dining.jpg',
    imageAlt: 'Gourmet Southwestern cuisine with colorful plated dishes at an Arizona restaurant',
    title: '3 Days of Arizona Dining',
    description: 'Savor Tucson\'s UNESCO-recognized gastronomy and Phoenix\'s vibrant food scene.',
    url: '/itineraries/arizona-dining',
  },
  {
    id: 4,
    image: '/itinerary-golf.jpg',
    imageAlt: 'Luxury golf course fairway in Scottsdale with Sonoran Desert mountains in background, Arizona',
    title: '3 Days of Golf Paradise',
    description: 'Tee off at world-renowned Scottsdale courses with stunning desert backdrops.',
    url: '/itineraries/golf-paradise',
  },
  {
    id: 5,
    image: '/itinerary-family.jpg',
    imageAlt: 'Families enjoying exhibits at the Phoenix Zoo with desert animals on a sunny Arizona day',
    title: '3 Days of Family Fun',
    description: 'Enjoy Phoenix Zoo, Children\'s Museum, and outdoor adventures for all ages.',
    url: '/itineraries/family-fun',
  },
  {
    id: 6,
    image: '/itinerary-history.jpg',
    imageAlt: 'Historic Tombstone Arizona Old West town with wooden sidewalks and frontier buildings',
    title: '3 Days of Old West History',
    description: 'Step back in time in Tombstone, Bisbee, and Arizona\'s historic mining towns.',
    url: '/itineraries/old-west-history',
  },
];

// More articles
const MORE_ARTICLES = [
  {
    id: 5,
    image: '/article-rooftop.jpg',
    imageAlt: 'Trendy rooftop bar in downtown Phoenix at sunset with city skyline views and craft cocktails',
    category: 'Eat & Drink',
    subcategory: 'Bars',
    title: "Phoenix's Best Rooftop Bars",
    description: 'Discover the best rooftop bars in Phoenix for craft cocktails, city skyline views, and sunset happy hours, from downtown hotspots to Scottsdale lounges.',
    author: 'Daniel Djang',
    datePublished: '2026-03-05',
    url: '/articles/phoenix-best-rooftop-bars',
  },
  {
    id: 6,
    image: '/article-hiking.jpg',
    imageAlt: 'Hikers ascending Camelback Mountain trail with Phoenix skyline in the distance, Arizona',
    category: 'Things to Do',
    subcategory: 'Outdoors',
    title: "Arizona's Best Hiking Trails",
    description: 'A guide to Arizona\'s best hiking trails from Camelback Mountain in Phoenix and Cathedral Rock in Sedona to Bright Angel Trail at the Grand Canyon.',
    author: 'Come And See Arizona',
    datePublished: '2026-02-01',
    url: '/articles/arizona-best-hiking-trails',
  },
  {
    id: 7,
    image: '/article-resort.jpg',
    imageAlt: 'Luxury desert resort infinity pool with mountain views and palm trees in Scottsdale, Arizona',
    category: 'Things to Do',
    subcategory: 'Wellness',
    title: 'Best Desert Resorts & Spas',
    description: 'Arizona\'s finest desert resorts and spas including The Phoenician, Sanctuary on Camelback Mountain, The Boulders Resort, and Four Seasons Scottsdale.',
    author: 'Come And See Arizona',
    datePublished: '2026-01-20',
    url: '/articles/best-desert-resorts-spas',
  },
];

// Neighborhoods
const NEIGHBORHOODS = [
  { name: 'Old Town Scottsdale', subtitle: 'Arts & Shopping', image: '/neighborhood-scottsdale.jpg', imageAlt: 'Old Town Scottsdale street scene with western architecture, art galleries, and vibrant pedestrian atmosphere, Arizona', url: '/explore/neighborhood/old-town-scottsdale' },
  { name: 'Downtown Phoenix', subtitle: 'Urban Core', image: '/neighborhood-phoenix.jpg', imageAlt: 'Downtown Phoenix skyline with modern skyscrapers and city center under blue Arizona sky', url: '/explore/neighborhood/downtown-phoenix' },
  { name: 'Sedona Red Rocks', subtitle: 'Spiritual Retreat', image: '/neighborhood-sedona.jpg', imageAlt: 'Sedona Arizona red rock formations including Cathedral Rock at golden hour', url: '/articles/sedona-red-rocks' },
  { name: 'Tucson Historic District', subtitle: 'Cultural Heritage', image: '/neighborhood-tucson.jpg', imageAlt: 'Tucson historic district with colorful adobe architecture and Mexican cultural influences, Arizona', url: '/explore/city/tucson' },
  { name: 'Paradise Valley', subtitle: 'Luxury Living', image: '/neighborhood-paradise.jpg', imageAlt: 'Paradise Valley luxury desert homes with Camelback Mountain views, Scottsdale Arizona', url: '/explore/city/paradise-valley' },
  { name: 'Flagstaff', subtitle: 'Mountain Town', image: '/neighborhood-flagstaff.jpg', imageAlt: 'Flagstaff Arizona mountain town downtown with pine trees and historic Route 66 buildings', url: '/articles/flagstaff-mountain-town' },
  { name: 'Bisbee', subtitle: 'Artistic Colony', image: '/neighborhood-bisbee.jpg', imageAlt: 'Bisbee Arizona hillside town with colorful Victorian houses and artistic community', url: '/articles/bisbee-artistic-colony' },
  { name: 'Prescott', subtitle: 'Old West Charm', image: '/neighborhood-prescott.jpg', imageAlt: 'Prescott Arizona Whiskey Row with historic western frontier saloons and architecture', url: '/articles/prescott-old-west' },
];

// Artist quotes for "These Lovely Streets"
const ARTIST_QUOTES = [
  {
    id: 1,
    image: '/hero-canyon.jpg',
    imageAlt: 'Dramatic Arizona canyon landscape at golden hour with layered rock formations',
    quote: 'The desert light here is unlike anywhere else. It transforms everything it touches.',
    artist: 'Local Artist',
    title: 'Desert Light Series',
  },
  {
    id: 2,
    image: '/history-redrock.jpg',
    imageAlt: 'Ancient red rock formations in Arizona desert showcasing geological history',
    quote: 'Arizona is where ancient history meets infinite possibility.',
    artist: 'Native Artist',
    title: 'Timeless Horizons',
  },
];

// Footer links
const FOOTER_LINKS = {
  explore: [
    { label: 'Things to Do in Arizona', href: '/things-to-do' },
    { label: 'Eat & Drink in Arizona', href: '/eat-and-drink' },
    { label: 'Find Arizona Events', href: '/events' },
    { label: 'Where to Stay in Arizona', href: '/where-to-stay' },
    { label: 'Arizona Travel Guides', href: '/travel-guides' },
  ],
  plan: [
    { label: 'Tourist Info', href: '/tourist-info' },
    { label: 'Travel Trade', href: '/travel-trade' },
    { label: 'Meetings', href: '/meetings' },
    { label: 'About Arizona Tourism', href: '/about-arizona-tourism' },
  ],
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bannerClosed, setBannerClosed] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [itineraryScroll, setItineraryScroll] = useState(0);
  const itineraryRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeQuote, setActiveQuote] = useState(0);

  const upcomingEvents = useMemo(() => getUpcomingEvents(), []);
  const featuredEvent = useMemo(() => getFeaturedEvent(), []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollItinerary = (direction: 'left' | 'right') => {
    if (itineraryRef.current) {
      const scrollAmount = 400;
      const newScroll = direction === 'left'
        ? Math.max(0, itineraryScroll - scrollAmount)
        : itineraryScroll + scrollAmount;
      itineraryRef.current.scrollTo({ left: newScroll, behavior: 'smooth' });
      setItineraryScroll(newScroll);
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <div className="app">
      {/* Top Banner */}
      {!bannerClosed && (
        <div className="top-banner" role="banner">
          <p>The Best Things to Do in Arizona this Weekend: {getWeekendDates()}</p>
          <button className="banner-close" onClick={() => setBannerClosed(true)} aria-label="Close banner">
            <X size={18} />
          </button>
        </div>
      )}

      {/* Navigation */}
      <header className={`main-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-left">
            <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <a href="/" className="logo" aria-label="Come And See Arizona - Home">
              <img src="/come_see_arizona_logo.png" alt="Come And See Arizona" style={{ height: 90, width: 'auto' }} />
            </a>
          </div>

          <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
            <ul role="list" style={{ display: 'contents' }}>
              {NAV_ITEMS.map((item) => (
                <li key={item.label} style={{ display: 'contents' }}>
                  <a href={item.href} className="nav-link" title={item.label}>
                    {item.shortLabel}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-right">
            <button className="search-btn" aria-label="Search Come And See Arizona">
              <Search size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="mobile-menu" aria-label="Mobile navigation">
          <ul role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="mobile-nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Hero Section */}
      <section className="hero-section" aria-label="Welcome to Arizona">
        <div className="hero-video">
          <img src="/hero-desert.jpg" alt="Aerial view of Arizona's Sonoran Desert landscape at golden hour with dramatic canyon formations" className="hero-image" />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <h1 className="visually-hidden">Come And See Arizona - Your Guide to Things to Do, Events, Dining & Travel</h1>
          <span className="quote-mark">"</span>
          <blockquote>
            Arizona is not just a place you visit. It's a place that stays with you long after you've left.
          </blockquote>
          <cite>- Local Resident</cite>
          <span className="quote-mark closing">"</span>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="featured-section" aria-label="Featured stories about Arizona">
        <div className="container">
          <h2 className="section-title">Featured Stories</h2>
          <div className="articles-grid two-col">
            {FEATURED_ARTICLES.map((article) => (
              <article key={article.id} className="article-card large">
                <a href={article.url} aria-label={`Read: ${article.title}`}>
                  <div className="article-image">
                    <img src={article.image} alt={article.imageAlt} />
                    <div className="article-overlay" />
                  </div>
                  <div className="article-content">
                    <div className="article-meta">
                      <span className="category">{article.category}</span>
                      <span className="subcategory">{article.subcategory}</span>
                    </div>
                    <h3 className="article-title">{article.title}</h3>
                    <p className="article-description visually-hidden">{article.description}</p>
                    <div className="article-author">
                      <span>by</span>
                      <span className="author-name">{article.author}</span>
                      <time dateTime={article.datePublished} className="visually-hidden">{article.datePublished}</time>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Articles */}
      <section className="secondary-section" aria-label="More featured Arizona stories">
        <div className="container">
          <div className="articles-grid two-col">
            {SECONDARY_ARTICLES.map((article) => (
              <article key={article.id} className="article-card medium">
                <a href={article.url} aria-label={`Read: ${article.title}`}>
                  <div className="article-image">
                    <img src={article.image} alt={article.imageAlt} />
                    <div className="article-overlay" />
                  </div>
                  <div className="article-content">
                    <div className="article-meta">
                      <span className="category">{article.category}</span>
                      <span className="subcategory">{article.subcategory}</span>
                    </div>
                    <h3 className="article-title">{article.title}</h3>
                    <p className="article-description visually-hidden">{article.description}</p>
                    <div className="article-author">
                      <span>by</span>
                      <span className="author-name">{article.author}</span>
                      <time dateTime={article.datePublished} className="visually-hidden">{article.datePublished}</time>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="events-section" aria-label="Upcoming events in Arizona">
        <div className="container">
          <div className="section-header">
            <h2>Upcoming Events in Arizona</h2>
            <a href="/events" className="view-all" aria-label="View all Arizona events">
              View All Events <ChevronRight size={16} />
            </a>
          </div>
          <div className="events-grid">
            {upcomingEvents.map((event) => (
              <article key={event.id} className="event-card" style={{ cursor: 'pointer' }}
                onClick={() => {
                  if (event.sourceUrl) {
                    window.open(event.sourceUrl, '_blank', 'noopener,noreferrer');
                  } else {
                    window.location.href = '/events';
                  }
                }}
                role="link"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    if (event.sourceUrl) {
                      window.open(event.sourceUrl, '_blank', 'noopener,noreferrer');
                    } else {
                      window.location.href = '/events';
                    }
                  }
                }}
              >
                <div className="event-date">
                  <span className="month">{event.month}</span>
                  <time dateTime={event.isoDate} className="day">{event.day}</time>
                </div>
                <div className="event-info">
                  <span className="event-category">{event.category}</span>
                  <h3 className="event-title">{event.title}</h3>
                  <div className="event-time">
                    <Clock size={14} />
                    <span>{event.time}</span>
                  </div>
                  <span className="visually-hidden">{event.location}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Event / Promotion */}
      {featuredEvent ? (
        <section className="promo-section" aria-label={`Featured: ${featuredEvent.title}`}>
          <div className="promo-bg">
            <img src="/promo-stadium.jpg" alt="Arizona event venue illuminated at night" />
            <div className="promo-overlay" />
          </div>
          <div className="container">
            <div className="promo-content">
              <span className="promo-label">Featured Event</span>
              <h2>{featuredEvent.title}</h2>
              <p>{featuredEvent.description}</p>
              <a href="/events" className="promo-btn" aria-label={`Learn more about ${featuredEvent.title}`}>
                View Events <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>
      ) : (
        <section className="promo-section" aria-label="Experience Arizona">
          <div className="promo-bg">
            <img src="/hero-desert.jpg" alt="Arizona desert sunset with saguaro cacti and dramatic sky" />
            <div className="promo-overlay" />
          </div>
          <div className="container">
            <div className="promo-content">
              <span className="promo-label">Featured</span>
              <h2>Experience the Valley of the Sun</h2>
              <p>
                From world-class hiking and dining to professional sports and vibrant arts
                districts, Arizona offers something extraordinary for every visitor.
              </p>
              <a href="/things-to-do" className="promo-btn" aria-label="Explore things to do in Arizona">
                Explore Things to Do <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Itineraries Carousel */}
      <section className="itineraries-section" aria-label="Arizona 3-day trip itineraries">
        <div className="container">
          <div className="section-header">
            <div>
              <h2>Find Your Perfect Arizona Itinerary</h2>
              <p className="section-subtitle">Discover the best of Arizona with our curated 3-day itineraries covering natural wonders, arts, dining, golf, family fun, and Old West history.</p>
            </div>
            <div className="carousel-controls">
              <button onClick={() => scrollItinerary('left')} aria-label="Scroll itineraries left">
                <ChevronLeft size={24} />
              </button>
              <button onClick={() => scrollItinerary('right')} aria-label="Scroll itineraries right">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          <div className="itineraries-carousel" ref={itineraryRef}>
            {ITINERARIES.map((itinerary) => (
              <article key={itinerary.id} className="itinerary-card">
                <div className="itinerary-image">
                  <img src={itinerary.image} alt={itinerary.imageAlt} />
                </div>
                <div className="itinerary-content">
                  <h3>{itinerary.title}</h3>
                  <p>{itinerary.description}</p>
                  <a href={itinerary.url} className="read-more" aria-label={`Read more: ${itinerary.title}`}>
                    Read More <ChevronRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* More Articles */}
      <section className="more-articles-section" aria-label="More Arizona travel articles">
        <div className="container">
          <div className="articles-grid three-col">
            {MORE_ARTICLES.map((article) => (
              <article key={article.id} className="article-card small">
                <a href={article.url} aria-label={`Read: ${article.title}`}>
                  <div className="article-image">
                    <img src={article.image} alt={article.imageAlt} />
                  </div>
                  <div className="article-content-below">
                    <div className="article-meta">
                      <span className="category">{article.category}</span>
                      <span className="subcategory">{article.subcategory}</span>
                    </div>
                    <h3 className="article-title">{article.title}</h3>
                    <p className="article-description visually-hidden">{article.description}</p>
                    <div className="article-author">
                      <span>by</span>
                      <span className="author-name">{article.author}</span>
                      <time dateTime={article.datePublished} className="visually-hidden">{article.datePublished}</time>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* These Lovely Streets - Artist Carousel */}
      <section className="artist-section" aria-label="Arizona artist perspectives">
        <div className="container">
          <div className="section-header centered">
            <h2>These Lovely Streets</h2>
          </div>
          <div className="artist-carousel">
            <div className="artist-slide">
              <div className="artist-image">
                <img src={ARTIST_QUOTES[activeQuote].image} alt={ARTIST_QUOTES[activeQuote].imageAlt} />
                <div className="artist-overlay" />
              </div>
              <div className="artist-quote-content">
                <span className="quote-mark">&ldquo;</span>
                <blockquote>{ARTIST_QUOTES[activeQuote].quote}</blockquote>
                <div className="artist-info">
                  <span className="artist-name">{ARTIST_QUOTES[activeQuote].artist}</span>
                  <span className="artist-title">{ARTIST_QUOTES[activeQuote].title}</span>
                </div>
              </div>
            </div>
            <div className="artist-nav">
              <button
                onClick={() => setActiveQuote((prev) => (prev === 0 ? ARTIST_QUOTES.length - 1 : prev - 1))}
                aria-label="Previous artist quote"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => setActiveQuote((prev) => (prev === ARTIST_QUOTES.length - 1 ? 0 : prev + 1))}
                aria-label="Next artist quote"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="neighborhoods-section" aria-label="Arizona neighborhoods and destinations to explore">
        <div className="container">
          <div className="section-header centered">
            <h2>Explore Arizona Neighborhoods</h2>
            <p className="section-description">
              Arizona is home to stunning natural wonders, vibrant cities, and diverse experiences.
              The best way to discover Arizona is by exploring all of its unique regions and neighborhoods, from Old Town Scottsdale's galleries to Bisbee's artistic colony and Prescott's Whiskey Row.
            </p>
          </div>
          <div className="neighborhoods-grid">
            {NEIGHBORHOODS.map((hood) => (
              <a key={hood.name} href={hood.url} className="neighborhood-card" aria-label={`Explore ${hood.name} - ${hood.subtitle}`}>
                <div className="neighborhood-image">
                  <img src={hood.image} alt={hood.imageAlt} />
                  <div className="neighborhood-overlay">
                    <span className="plus-icon">+</span>
                  </div>
                </div>
                <div className="neighborhood-info">
                  <span className="neighborhood-subtitle">{hood.subtitle}</span>
                  <h3 className="neighborhood-name">{hood.name}</h3>
                </div>
              </a>
            ))}
          </div>
          {/* Explore More Cross-Links */}
          <nav className="explore-more" aria-label="Explore more Arizona content">
            <h3 className="visually-hidden">Explore More Arizona</h3>
            <div className="explore-more-links">
              <a href="/things-to-do">Things to Do in Arizona</a>
              <a href="/eat-and-drink">Arizona Dining & Nightlife</a>
              <a href="/events">Upcoming Arizona Events</a>
              <a href="/itineraries">Arizona Trip Itineraries</a>
              <a href="/where-to-stay">Where to Stay in Arizona</a>
            </div>
          </nav>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section" aria-label="Subscribe to the Come And See Arizona newsletter">
        <div className="newsletter-bg">
          <img src="/newsletter-bg.jpg" alt="Arizona desert sunset with saguaro cacti silhouettes against an orange and purple sky" />
          <div className="newsletter-overlay" />
        </div>
        <div className="container">
          <div className="newsletter-content">
            <h2>Come And See Arizona Newsletter</h2>
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <div className="input-group">
                  <Mail size={20} />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-label="Email address for newsletter"
                  />
                </div>
                <label className="consent">
                  <input type="checkbox" required />
                  <span>
                    I consent to receive the Come And See Arizona newsletter. You can learn more by reading our
                    <a href="/privacy-policy"> privacy policy</a>, and you can opt out at any time.
                  </span>
                </label>
                <button type="submit" className="subscribe-btn">Subscribe</button>
              </form>
            ) : (
              <div className="success-message">
                <p>Thank you for subscribing!</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer" aria-label="Site footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                <img src="/come_see_arizona_logo.png" alt="Come And See Arizona" style={{ height: 40, width: 'auto' }} />
                <h3 className="footer-logo" style={{ margin: 0 }}>Come And See Arizona</h3>
              </div>
              <p>The official guide to Arizona. Find great deals, things to do, travel guides and more.</p>
              <address className="footer-address">
                Arizona, United States<br />
                <a href="mailto:info@comeandseearizona.com">info@comeandseearizona.com</a>
              </address>
            </div>
            <div className="footer-links-col">
              <h4>Explore</h4>
              <ul>
                {FOOTER_LINKS.explore.map((link) => (
                  <li key={link.label}><a href={link.href}>{link.label}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-links-col">
              <h4>Plan Your Trip</h4>
              <ul>
                {FOOTER_LINKS.plan.map((link) => (
                  <li key={link.label}><a href={link.href}>{link.label}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-social">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="https://facebook.com/comeandseearizona" aria-label="Follow Come And See Arizona on Facebook"><Facebook size={20} /></a>
                <a href="https://twitter.com/comeandseearizona" aria-label="Follow Come And See Arizona on Twitter"><Twitter size={20} /></a>
                <a href="https://instagram.com/comeandseearizona" aria-label="Follow Come And See Arizona on Instagram"><Instagram size={20} /></a>
                <a href="https://youtube.com/comeandseearizona" aria-label="Follow Come And See Arizona on YouTube"><Youtube size={20} /></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Come And See Arizona. All rights reserved. <span className="last-updated">Last Updated: March 2026</span></p>
            <div className="footer-legal">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-of-use">Terms of Use</a>
              <a href="/accessibility">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
