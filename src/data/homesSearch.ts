/**
 * Deep links into the Incyte Realty home search (incyterealty.com/homes).
 *
 * The search accepts `?query=` with a city name or ZIP code (verified to
 * return filtered listings). Free-text neighborhood names do NOT resolve,
 * so neighborhood pages link through their primary ZIP instead.
 * UTM parameters attribute the referral traffic to these market pages.
 */

const HOMES_BASE = 'https://www.incyterealty.com/homes';
const UTM = 'utm_source=comeseearizona&utm_medium=referral&utm_campaign=market-pages';

export function homesSearchUrl(query?: string): string {
  return query
    ? `${HOMES_BASE}?query=${encodeURIComponent(query)}&${UTM}`
    : `${HOMES_BASE}?${UTM}`;
}

export function homesForCity(cityName: string): string {
  return homesSearchUrl(cityName);
}

export function homesForZip(zip: string): string {
  return homesSearchUrl(zip);
}

/** Neighborhood searches resolve via their primary ZIP; falls back to the city. */
export function homesForNeighborhood(zipCodes: string[], cityName: string): string {
  return zipCodes.length > 0 ? homesSearchUrl(zipCodes[0]) : homesSearchUrl(cityName);
}
