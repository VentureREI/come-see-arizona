/**
 * Assembles the /housing-market report pages from verified market data.
 *
 * Every number on these pages comes from marketPrices.json (via
 * dynamicLoader) joined to the static city records for names and county
 * grouping. Nothing here computes new market statistics; missing fields
 * are omitted, never approximated.
 */

import { getAllCityMarkets, getCityMarket, getCountyMarket, getMarketPricesLastUpdated } from './dynamicLoader';
import type { DynamicCityPrice } from './dynamicLoader';
import { getCity, getCounty } from './lookups';

export interface MarketReportRow {
  slug: string;
  name: string;
  countySlug: string;
  countyName: string;
  market: DynamicCityPrice;
}

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/** Exact dollar figure ("$461,457") for report pages, where precision is the point (site-wide formatPrice abbreviates to $461K). */
export function formatPriceFull(price: number): string {
  return `$${price.toLocaleString('en-US')}`;
}

/** "2026-07-05" or "2026-07" -> "July 2026". Falls back to the raw string. */
export function formatReportMonth(isoDate: string): string {
  const match = /^(\d{4})-(\d{2})/.exec(isoDate);
  if (!match) return isoDate;
  const month = MONTH_NAMES[Number(match[2]) - 1];
  return month ? `${month} ${match[1]}` : isoDate;
}

/** The report's display month, from the data file's lastUpdated stamp. */
export function getReportMonth(): string {
  return formatReportMonth(getMarketPricesLastUpdated());
}

/** All cities with verified market data, joined to their static records. */
export function getMarketReportRows(): MarketReportRow[] {
  const rows: MarketReportRow[] = [];
  for (const [slug, market] of Object.entries(getAllCityMarkets())) {
    const city = getCity(slug);
    if (!city) continue;
    const county = getCounty(city.countySlug);
    rows.push({
      slug,
      name: city.name,
      countySlug: city.countySlug,
      countyName: county?.name ?? city.countySlug,
      market,
    });
  }
  return rows.sort((a, b) => b.market.medianHomePrice - a.market.medianHomePrice);
}

/** Phoenix metro = Maricopa and Pinal county cities; Tucson metro = Pima. */
export function getMetroRows(metro: 'phoenix' | 'tucson'): MarketReportRow[] {
  const counties = metro === 'phoenix' ? ['maricopa', 'pinal'] : ['pima'];
  return getMarketReportRows().filter((r) => counties.includes(r.countySlug));
}

/** Cities with a verified year-over-year figure, sorted by movement (parse is for ordering only; the displayed value is the raw string). */
export function getYoyMovers(): Array<MarketReportRow & { yoyValue: number }> {
  return getMarketReportRows()
    .filter((r) => r.market.yearOverYearChange)
    .map((r) => ({ ...r, yoyValue: parseFloat((r.market.yearOverYearChange as string).replace('%', '')) }))
    .filter((r) => !Number.isNaN(r.yoyValue))
    .sort((a, b) => b.yoyValue - a.yoyValue);
}

export function getReportRow(slug: string): MarketReportRow | undefined {
  const market = getCityMarket(slug);
  if (!market) return undefined;
  const city = getCity(slug);
  if (!city) return undefined;
  const county = getCounty(city.countySlug);
  return {
    slug,
    name: city.name,
    countySlug: city.countySlug,
    countyName: county?.name ?? city.countySlug,
    market,
  };
}

/** Other report cities in the same county, for the nearby-markets section. */
export function getCountyPeers(slug: string): MarketReportRow[] {
  const row = getReportRow(slug);
  if (!row) return [];
  return getMarketReportRows().filter((r) => r.countySlug === row.countySlug && r.slug !== slug);
}

export { getCountyMarket };

export const MARKET_TYPE_LABELS: Record<string, string> = {
  buyer: "buyer's market",
  seller: "seller's market",
  balanced: 'balanced market',
};
