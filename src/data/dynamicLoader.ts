/**
 * Dynamic Data Merge Layer
 *
 * Overlays dynamic JSON data (updated by autonomous agents) onto the static
 * TypeScript data at build time. If a dynamic file is missing or malformed,
 * the static data is returned unchanged.
 */

import { COUNTIES, CITIES, NEIGHBORHOODS } from './seedingTable';
import { TRAILS } from './trails';
import { TRAILS_SOUTHERN_NORTHERN } from './trailsSouthernNorthern';
import type { County, City, Neighborhood } from './types';
import type { Trail } from './trails';
import type { EventItem } from './events';

import marketPrices from './dynamic/marketPrices.json';
import trailConditions from './dynamic/trailConditions.json';
import featuredContent from './dynamic/featuredContent.json';
import eventsData from './dynamic/events.json';

// ── Market prices ───────────────────────────────────────────────────────

interface DynamicCityPrice {
  medianHomePrice: number;
  pricePerSqFt: number | null;
  avgDaysOnMarket: number | null;
  marketType: string;
  yearOverYearChange?: string | null;
  asOf?: string;
  confidence?: string;
  citations?: string[];
}

interface DynamicCountyPrice {
  medianHomePrice: number;
  pricePerSqFt: number | null;
  avgDaysOnMarket: number | null;
  inventoryLevel: string;
  marketTrend: string;
  yearOverYearChange: string | null;
  asOf?: string;
  confidence?: string;
  citations?: string[];
  narrative?: string;
  narrativeCitations?: string[];
}

interface DynamicNeighborhoodPrice {
  medianHomePrice: number;
}

interface TrailCondition {
  status: 'open' | 'closed' | 'restricted';
  note: string;
  lastChecked: string;
}

const cityPrices = (marketPrices?.cities ?? {}) as Record<string, DynamicCityPrice>;
const countyPrices = (marketPrices?.counties ?? {}) as Record<string, DynamicCountyPrice>;
const neighborhoodPrices = (marketPrices?.neighborhoods ?? {}) as Record<string, DynamicNeighborhoodPrice>;
const conditions = (trailConditions?.conditions ?? {}) as Record<string, TrailCondition>;

const ALL_TRAILS: Trail[] = [...TRAILS, ...TRAILS_SOUTHERN_NORTHERN];

// ── Merged getters ──────────────────────────────────────────────────────

export function getMergedCounty(slug: string): (County & { pricePerSqFt?: number; avgDaysOnMarket?: number; inventoryLevel?: string; marketTrend?: string; yearOverYearChange?: string }) | undefined {
  const county = COUNTIES.find(c => c.slug === slug);
  if (!county) return undefined;
  const dynamic = countyPrices[slug];
  if (!dynamic) return county;
  return {
    ...county,
    medianHomePrice: dynamic.medianHomePrice,
    pricePerSqFt: dynamic.pricePerSqFt ?? undefined,
    avgDaysOnMarket: dynamic.avgDaysOnMarket ?? undefined,
    inventoryLevel: dynamic.inventoryLevel,
    marketTrend: dynamic.marketTrend,
    yearOverYearChange: dynamic.yearOverYearChange ?? undefined,
  };
}

export function getMergedCity(slug: string): (City & { pricePerSqFt?: number; avgDaysOnMarket?: number; marketType?: string }) | undefined {
  const city = CITIES.find(c => c.slug === slug);
  if (!city) return undefined;
  const dynamic = cityPrices[slug];
  if (!dynamic) return city;
  return {
    ...city,
    medianHomePrice: dynamic.medianHomePrice,
    pricePerSqFt: dynamic.pricePerSqFt ?? undefined,
    avgDaysOnMarket: dynamic.avgDaysOnMarket ?? undefined,
    marketType: dynamic.marketType,
  };
}

export function getMergedNeighborhood(slug: string): Neighborhood | undefined {
  const neighborhood = NEIGHBORHOODS.find(n => n.slug === slug);
  if (!neighborhood) return undefined;
  const dynamic = neighborhoodPrices[slug];
  if (!dynamic) return neighborhood;
  return {
    ...neighborhood,
    medianHomePrice: dynamic.medianHomePrice,
  };
}

export function getMergedTrail(slug: string): (Trail & { condition?: TrailCondition }) | undefined {
  const trail = ALL_TRAILS.find(t => t.slug === slug);
  if (!trail) return undefined;
  const condition = conditions[slug];
  if (!condition) return trail;
  return {
    ...trail,
    condition,
  };
}

export function getMergedEvents(): EventItem[] {
  return (eventsData?.events ?? []) as EventItem[];
}

export function getEventsLastUpdated(): string {
  return eventsData?.lastUpdated ?? '';
}

export function getFeaturedContent() {
  return featuredContent;
}

export function getMarketPricesLastUpdated(): string {
  return marketPrices?.lastUpdated ?? '';
}

// ── Verified market data accessors ──────────────────────────────────────
// Content generators must pull market metrics (price/sqft, days on market,
// YoY change, market type) ONLY from here. If an entity has no entry, the
// metric is unknown and must be omitted from copy — never approximated.

export function getCountyMarket(slug: string): DynamicCountyPrice | undefined {
  return countyPrices[slug];
}

export function getCityMarket(slug: string): DynamicCityPrice | undefined {
  return cityPrices[slug];
}

/** Names of the public sources behind the current marketPrices.json (e.g. ["redfin.com", "realtor.com"]). */
export function getMarketSourceNames(): string[] {
  return ((marketPrices as { sourceNames?: string[] }).sourceNames ?? []);
}

/** Footer attribution: update date plus source hostnames when available. */
export function getMarketAttribution(): string {
  const date = getMarketPricesLastUpdated();
  const sources = getMarketSourceNames();
  if (!date) return '';
  return sources.length > 0
    ? `Market data last updated: ${date} · Sources: ${sources.join(', ')}`
    : `Market data last updated: ${date}`;
}

export function getTrailConditionsLastUpdated(): string {
  return trailConditions?.lastUpdated ?? '';
}
