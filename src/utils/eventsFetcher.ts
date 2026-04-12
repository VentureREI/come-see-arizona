/**
 * Dual-source events fetcher for Come And See Arizona.
 *
 * Combines Eventbrite API, PredictHQ API, and a manual fallback to
 * provide a comprehensive, always-available list of Arizona events.
 *
 * ── SETUP ──────────────────────────────────────────────────────────
 *
 * EVENTBRITE: Get your free Eventbrite OAuth token at
 *   https://www.eventbrite.com/platform/
 *   Create a private app and copy the private token.
 *   Set as VITE_EVENTBRITE_TOKEN in your .env file.
 *
 * PREDICTHQ: Get your free PredictHQ API token at
 *   https://www.predicthq.com
 *   Sign up for free, go to API Tokens in settings.
 *   Set as VITE_PREDICTHQ_TOKEN in your .env file.
 *
 * Until keys are configured, the system gracefully falls back to
 * MANUAL_EVENTS with no error shown to the user.
 * ────────────────────────────────────────────────────────────────────
 */

import type { EventItem } from '../data/events';
import { MANUAL_EVENTS } from '../data/events';

// ─── Eventbrite ─────────────────────────────────────────────────────────────

interface EventbriteVenue {
  name?: string;
  address?: {
    city?: string;
    address_1?: string;
    region?: string;
    postal_code?: string;
    localized_address_display?: string;
    latitude?: string;
    longitude?: string;
  };
}

interface EventbriteCategory {
  name?: string;
  short_name?: string;
}

interface EventbriteEvent {
  id: string;
  name?: { text?: string };
  description?: { text?: string };
  start?: { local?: string; utc?: string };
  end?: { local?: string; utc?: string };
  venue?: EventbriteVenue;
  category?: EventbriteCategory;
  url?: string;
  logo?: { url?: string };
}

function mapEventbriteCategory(cat?: EventbriteCategory): EventItem['category'] {
  const name = (cat?.short_name || cat?.name || '').toLowerCase();
  if (name.includes('sport') || name.includes('fitness')) return 'Sports';
  if (name.includes('music') || name.includes('concert')) return 'Music';
  if (name.includes('food') || name.includes('drink')) return 'Food and Drink';
  if (name.includes('art') || name.includes('film') || name.includes('craft')) return 'Arts';
  if (name.includes('family') || name.includes('kid')) return 'Family';
  if (name.includes('outdoor') || name.includes('travel') || name.includes('nature')) return 'Outdoors';
  if (name.includes('festival') || name.includes('fair')) return 'Festival';
  if (name.includes('cultural') || name.includes('heritage')) return 'Culture';
  if (name.includes('holiday') || name.includes('seasonal')) return 'Holiday';
  return 'Community';
}

function formatTime(isoLocal?: string): string {
  if (!isoLocal) return 'TBA';
  try {
    const d = new Date(isoLocal);
    return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  } catch {
    return 'TBA';
  }
}

function toDateStr(isoLocal?: string): string {
  if (!isoLocal) return '';
  return isoLocal.slice(0, 10);
}

export async function fetchEventbriteEvents(): Promise<EventItem[]> {
  const token = import.meta.env.VITE_EVENTBRITE_TOKEN;
  if (!token) return [];

  const today = new Date().toISOString().replace(/\.\d+Z$/, 'Z');
  const params = new URLSearchParams({
    'location.address': 'Arizona',
    'location.within': '200mi',
    expand: 'venue,category',
    sort_by: 'date',
    'start_date.range_start': today,
  });

  try {
    const res = await fetch(`https://www.eventbriteapi.com/v3/events/search/?${params}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) {
      console.warn(`Eventbrite API returned ${res.status}`);
      return [];
    }

    const data = await res.json();
    const events: EventbriteEvent[] = data.events || [];

    return events.map((ev): EventItem => ({
      id: `eb-${ev.id}`,
      title: ev.name?.text || 'Untitled Event',
      startDate: toDateStr(ev.start?.local),
      endDate: ev.end?.local ? toDateStr(ev.end.local) : null,
      time: formatTime(ev.start?.local),
      venueName: ev.venue?.name || 'Venue TBA',
      venueCity: ev.venue?.address?.city || 'Arizona',
      venueAddress: ev.venue?.address?.localized_address_display || '',
      category: mapEventbriteCategory(ev.category),
      description: (ev.description?.text || '').slice(0, 300),
      sourceUrl: ev.url || null,
      source: 'eventbrite',
      imageKeyword: `${ev.name?.text || 'arizona event'} ${ev.venue?.address?.city || 'arizona'}`,
      lat: ev.venue?.address?.latitude ? parseFloat(ev.venue.address.latitude) : null,
      lng: ev.venue?.address?.longitude ? parseFloat(ev.venue.address.longitude) : null,
    }));
  } catch (err) {
    console.warn('Eventbrite fetch failed:', err);
    return [];
  }
}

// ─── PredictHQ ──────────────────────────────────────────────────────────────

interface PredictHQEvent {
  id: string;
  title?: string;
  description?: string;
  start?: string;
  end?: string;
  category?: string;
  entities?: Array<{
    entity_id?: string;
    name?: string;
    type?: string;
    formatted_address?: string;
  }>;
  location?: [number, number]; // [lng, lat]
  place_hierarchies?: string[][];
}

function mapPredictHQCategory(cat?: string): EventItem['category'] {
  switch (cat) {
    case 'sports': return 'Sports';
    case 'concerts': return 'Music';
    case 'festivals': return 'Festival';
    case 'performing-arts': return 'Arts';
    case 'community': return 'Community';
    case 'conferences':
    case 'expos': return 'Culture';
    default: return 'Community';
  }
}

export async function fetchPredictHQEvents(): Promise<EventItem[]> {
  const token = import.meta.env.VITE_PREDICTHQ_TOKEN;
  if (!token) return [];

  const today = new Date().toISOString().slice(0, 10);
  const futureDate = new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

  const params = new URLSearchParams({
    'place.scope': '5308655', // PredictHQ place ID for Arizona
    'active.gte': today,
    'active.lte': futureDate,
    category: 'sports,concerts,festivals,performing-arts,community,conferences,expos',
    sort: 'start',
    limit: '100',
  });

  try {
    const res = await fetch(`https://api.predicthq.com/v1/events/?${params}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    });

    if (!res.ok) {
      console.warn(`PredictHQ API returned ${res.status}`);
      return [];
    }

    const data = await res.json();
    const events: PredictHQEvent[] = data.results || [];

    return events.map((ev): EventItem => {
      const venue = ev.entities?.find(e => e.type === 'venue');
      const startDate = ev.start ? ev.start.slice(0, 10) : '';
      const endDate = ev.end ? ev.end.slice(0, 10) : null;

      return {
        id: `phq-${ev.id}`,
        title: ev.title || 'Untitled Event',
        startDate,
        endDate: endDate !== startDate ? endDate : null,
        time: ev.start ? formatTime(ev.start) : 'TBA',
        venueName: venue?.name || 'Venue TBA',
        venueCity: 'Arizona',
        venueAddress: venue?.formatted_address || '',
        category: mapPredictHQCategory(ev.category),
        description: (ev.description || '').slice(0, 300),
        sourceUrl: null,
        source: 'predicthq',
        imageKeyword: `${ev.title || 'event'} arizona`,
        lat: ev.location ? ev.location[1] : null,
        lng: ev.location ? ev.location[0] : null,
      };
    });
  } catch (err) {
    console.warn('PredictHQ fetch failed:', err);
    return [];
  }
}

// ─── Merge & Deduplicate ────────────────────────────────────────────────────

function normalizeTitle(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function isSimilar(a: string, b: string): boolean {
  const na = normalizeTitle(a);
  const nb = normalizeTitle(b);
  if (na === nb) return true;
  // Check if one title contains the other (handles abbreviated names)
  if (na.length > 5 && nb.length > 5) {
    if (na.includes(nb) || nb.includes(na)) return true;
  }
  return false;
}

export function mergeAndDedupeEvents(...sources: EventItem[][]): EventItem[] {
  const all = sources.flat();
  const seen = new Map<string, EventItem>();

  for (const event of all) {
    const dateKey = event.startDate;
    let isDuplicate = false;

    for (const [key, existing] of seen) {
      if (key.startsWith(dateKey) && isSimilar(event.title, existing.title)) {
        // Prefer API sources over manual
        if (event.source !== 'manual' && existing.source === 'manual') {
          seen.delete(key);
          seen.set(`${dateKey}-${event.id}`, event);
        }
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      seen.set(`${dateKey}-${event.id}`, event);
    }
  }

  return Array.from(seen.values()).sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  );
}

// ─── Main getter ────────────────────────────────────────────────────────────

export async function getEvents(): Promise<EventItem[]> {
  const [ebEvents, phqEvents] = await Promise.allSettled([
    fetchEventbriteEvents(),
    fetchPredictHQEvents(),
  ]);

  const eventbrite = ebEvents.status === 'fulfilled' ? ebEvents.value : [];
  const predicthq = phqEvents.status === 'fulfilled' ? phqEvents.value : [];

  return mergeAndDedupeEvents(eventbrite, predicthq, MANUAL_EVENTS);
}
