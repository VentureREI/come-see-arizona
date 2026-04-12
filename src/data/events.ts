/**
 * Events data - the EventItem interface lives here, but the actual event data
 * is stored in src/data/dynamic/events.json so that the Events Scout agent can
 * update it without touching TypeScript. This file re-exports the parsed JSON.
 */

import eventsData from './dynamic/events.json';

export interface EventItem {
  id: string;
  title: string;
  startDate: string;
  endDate: string | null;
  time: string;
  venueName: string;
  venueCity: string;
  venueAddress: string;
  category: 'Sports' | 'Music' | 'Festival' | 'Arts' | 'Food and Drink' | 'Family' | 'Outdoors' | 'Culture' | 'Community' | 'Holiday';
  description: string;
  sourceUrl: string | null;
  source: 'manual' | 'eventbrite' | 'predicthq';
  imageKeyword: string;
  lat: number | null;
  lng: number | null;
}

export const lastUpdated: string = eventsData.lastUpdated;

export const MANUAL_EVENTS: EventItem[] = eventsData.events as EventItem[];
