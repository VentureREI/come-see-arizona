import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import type { EventItem } from '../data/events';
import { lastUpdated, MANUAL_EVENTS } from '../data/events';
import { getMergedEvents, getEventsLastUpdated } from '../data/dynamicLoader';
import { getEvents } from '../utils/eventsFetcher';
import SEOHead from '../components/seo/SEOHead';
import AnswerBlock from '../components/AnswerBlock';

const CATEGORIES = ['All', 'Sports', 'Music', 'Festival', 'Arts', 'Food and Drink', 'Family', 'Outdoors'] as const;
const ITEMS_PER_PAGE = 12;

function formatMonthDay(dateStr: string): { month: string; day: string } {
  const d = new Date(dateStr + 'T12:00:00');
  return {
    month: d.toLocaleString('en-US', { month: 'short' }).toUpperCase(),
    day: d.getDate().toString(),
  };
}

function buildEventSchema(events: EventItem[]) {
  return events.map(ev => ({
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: ev.title,
    startDate: ev.startDate,
    ...(ev.endDate ? { endDate: ev.endDate } : {}),
    description: ev.description,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: ev.venueName,
      address: {
        '@type': 'PostalAddress',
        streetAddress: ev.venueAddress,
        addressLocality: ev.venueCity,
        addressRegion: 'AZ',
        addressCountry: 'US',
      },
    },
  }));
}

export default function EventsPage() {
  const [events, setEvents] = useState<EventItem[]>(MANUAL_EVENTS);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    getEvents().then(result => {
      if (!cancelled) {
        setEvents(result.length > 0 ? result : MANUAL_EVENTS);
        setLoaded(true);
      }
    });
    return () => { cancelled = true; };
  }, []);

  const filtered = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return events
      .filter(ev => new Date(ev.startDate + 'T12:00:00') >= today)
      .filter(ev => activeCategory === 'All' || ev.category === activeCategory)
      .sort((a, b) => a.startDate.localeCompare(b.startDate));
  }, [events, activeCategory]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const eventSchemas = buildEventSchema(visible);

  return (
    <>
      <SEOHead
        title="Arizona Events - Concerts, Sports, Festivals & Things to Do | Come And See Arizona"
        description="Discover upcoming events across Arizona including Cactus League spring training, Diamondbacks games, concerts, festivals, farmers markets, and more in Phoenix, Scottsdale, Tucson, and beyond."
        canonical="/events"
        schema={eventSchemas}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Events', url: '/events' },
        ]}
      />

      {/* Hero */}
      <div className="explore-hero" style={{ minHeight: 340 }}>
        <div className="explore-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80&auto=format"
            alt="Live event crowd in Arizona with desert sunset in background"
            className="card-img"
          />
        </div>
        <div className="explore-hero-overlay" />
        <div className="explore-hero-content">
          <nav className="breadcrumb-hero" aria-label="Breadcrumb">
            <Link to="/">Home</Link>{' > '}<span>Events</span>
          </nav>
          <h1>Arizona Events</h1>
          <p className="hero-subtitle">
            Concerts, sports, festivals, and things to do across Phoenix, Scottsdale, Tucson, and beyond.
          </p>
        </div>
      </div>

      <AnswerBlock answer="Arizona hosts hundreds of events year-round, from Cactus League spring training across 10 Valley stadiums to Country Thunder music festival in Florence, First Friday art walks in downtown Phoenix, and the Scottsdale Culinary Festival. Events are updated weekly and filtered to show only upcoming dates." />

      {/* Category Filters */}
      <div style={{ background: '#FAFAFA', borderBottom: '1px solid #EEE' }}>
        <div className="explore-container" style={{ padding: '20px 24px' }}>
          <div className="explore-tabs" style={{ justifyContent: 'center' }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`explore-tab ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => { setActiveCategory(cat); setVisibleCount(ITEMS_PER_PAGE); }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <section className="explore-section">
        <div className="explore-container">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 14,
            color: 'var(--color-text-secondary)',
            marginBottom: 32,
          }}>
            Showing {filtered.length} event{filtered.length !== 1 ? 's' : ''}
            {activeCategory !== 'All' ? ` in ${activeCategory}` : ''}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
            gap: 20,
          }}>
            {visible.map(ev => {
              const { month, day } = formatMonthDay(ev.startDate);
              return (
                <article
                  key={ev.id}
                  className="explore-info-card"
                  style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: 0, overflow: 'hidden', cursor: ev.sourceUrl ? 'pointer' : 'default' }}
                  onClick={() => {
                    if (ev.sourceUrl) window.open(ev.sourceUrl, '_blank', 'noopener,noreferrer');
                  }}
                  role={ev.sourceUrl ? 'link' : undefined}
                  tabIndex={ev.sourceUrl ? 0 : undefined}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && ev.sourceUrl) window.open(ev.sourceUrl, '_blank', 'noopener,noreferrer');
                  }}
                >
                  {/* Date block */}
                  <div style={{
                    flexShrink: 0,
                    width: 72,
                    minHeight: '100%',
                    background: 'var(--color-primary)',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '16px 8px',
                    borderRadius: '16px 0 0 16px',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: 1,
                      opacity: 0.9,
                    }}>{month}</span>
                    <span style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 32,
                      fontWeight: 700,
                      lineHeight: 1,
                    }}>{day}</span>
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1, padding: '16px 16px 16px 0' }}>
                    <span style={{
                      display: 'inline-block',
                      fontFamily: 'var(--font-body)',
                      fontSize: 10,
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: 1.2,
                      color: 'var(--color-primary)',
                      background: '#FFEBEE',
                      padding: '3px 8px',
                      borderRadius: 4,
                      marginBottom: 8,
                    }}>{ev.category}</span>

                    <h3 style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 18,
                      fontWeight: 700,
                      color: 'var(--color-text)',
                      lineHeight: 1.3,
                      marginBottom: 6,
                    }}>{ev.title}</h3>

                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 13,
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.4,
                      marginBottom: 4,
                    }}>
                      {ev.venueName} &middot; {ev.venueCity}
                    </p>

                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 13,
                      color: 'var(--color-text-light)',
                    }}>
                      {ev.time}
                      {ev.endDate && ev.endDate !== ev.startDate && (
                        <> &middot; through {new Date(ev.endDate + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</>
                      )}
                    </p>

                    {ev.sourceUrl && (
                      <a
                        href={ev.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-block',
                          marginTop: 8,
                          fontFamily: 'var(--font-body)',
                          fontSize: 12,
                          fontWeight: 600,
                          color: 'var(--color-primary)',
                        }}
                      >
                        Get Tickets &rarr;
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {/* Load More */}
          {hasMore && (
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <button
                onClick={() => setVisibleCount(prev => prev + ITEMS_PER_PAGE)}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 15,
                  fontWeight: 600,
                  padding: '14px 40px',
                  borderRadius: 28,
                  border: '2px solid var(--color-primary)',
                  color: 'var(--color-primary)',
                  background: 'white',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-primary)'; e.currentTarget.style.color = 'white'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = 'var(--color-primary)'; }}
              >
                Load More Events
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Attribution Footer */}
      <div style={{
        borderTop: '1px solid #EEE',
        padding: '24px',
        textAlign: 'center',
        fontFamily: 'var(--font-body)',
        fontSize: 12,
        color: 'var(--color-text-light)',
      }}>
        <p>Events last updated: {lastUpdated}</p>
        <p style={{ marginTop: 4 }}>
          Events sourced from Eventbrite and PredictHQ. Some events are manually curated by the Come And See Arizona editorial team.
          {!loaded && ' Currently showing curated events. API sources will load when configured.'}
        </p>
      </div>
    </>
  );
}
