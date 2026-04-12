import { COUNTIES, CITIES, NEIGHBORHOODS, ZIP_CODES, SCHOOL_DISTRICTS } from './seedingTable';
import type { County, City, Neighborhood, ZipCode, SchoolDistrict } from './types';
import { getMergedCounty, getMergedCity, getMergedNeighborhood } from './dynamicLoader';

// Index maps for O(1) lookups
const countyMap = new Map<string, County>(COUNTIES.map(c => [c.slug, c]));
const cityMap = new Map<string, City>(CITIES.map(c => [c.slug, c]));
const neighborhoodMap = new Map<string, Neighborhood>(NEIGHBORHOODS.map(n => [n.slug, n]));
const zipMap = new Map<string, ZipCode>(ZIP_CODES.map(z => [z.zip, z]));
const districtMap = new Map<string, SchoolDistrict>(SCHOOL_DISTRICTS.map(d => [d.slug, d]));

export function getCounty(slug: string): County | undefined {
  return getMergedCounty(slug) ?? countyMap.get(slug);
}

export function getCity(slug: string): City | undefined {
  return getMergedCity(slug) ?? cityMap.get(slug);
}

export function getNeighborhood(slug: string): Neighborhood | undefined {
  return getMergedNeighborhood(slug) ?? neighborhoodMap.get(slug);
}

export function getZipCode(zip: string): ZipCode | undefined {
  return zipMap.get(zip);
}

export function getSchoolDistrict(slug: string): SchoolDistrict | undefined {
  return districtMap.get(slug);
}

export function getCitiesByCounty(countySlug: string): City[] {
  return CITIES.filter(c => c.countySlug === countySlug);
}

export function getNeighborhoodsByCity(citySlug: string): Neighborhood[] {
  return NEIGHBORHOODS.filter(n => n.citySlug === citySlug);
}

export function getNeighborhoodsByCounty(countySlug: string): Neighborhood[] {
  return NEIGHBORHOODS.filter(n => n.countySlug === countySlug);
}

export function getZipCodesByCity(citySlug: string): ZipCode[] {
  return ZIP_CODES.filter(z => z.citySlug === citySlug);
}

export function getDistrictsByCounty(countySlug: string): SchoolDistrict[] {
  return SCHOOL_DISTRICTS.filter(d => d.countySlug === countySlug);
}

export function getDistrictsByCity(citySlug: string): SchoolDistrict[] {
  return SCHOOL_DISTRICTS.filter(d => d.citySlugs.includes(citySlug));
}

export function getNeighborhoodsByZip(zip: string): Neighborhood[] {
  const zipData = zipMap.get(zip);
  if (!zipData) return [];
  return zipData.neighborhoodSlugs.map(s => neighborhoodMap.get(s)).filter(Boolean) as Neighborhood[];
}

export function getDistrictsByZip(zip: string): SchoolDistrict[] {
  const zipData = zipMap.get(zip);
  if (!zipData) return [];
  return zipData.schoolDistrictSlugs.map(s => districtMap.get(s)).filter(Boolean) as SchoolDistrict[];
}

export function getNearbyCities(citySlug: string, limit = 5): City[] {
  const city = cityMap.get(citySlug);
  if (!city) return [];
  return CITIES
    .filter(c => c.slug !== citySlug && c.countySlug === city.countySlug)
    .map(c => ({
      city: c,
      distance: Math.sqrt(Math.pow(c.lat - city.lat, 2) + Math.pow(c.lng - city.lng, 2)),
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, limit)
    .map(c => c.city);
}

export function searchAll(query: string): Array<{ type: string; slug: string; name: string; subtitle: string }> {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  const results: Array<{ type: string; slug: string; name: string; subtitle: string }> = [];

  for (const c of COUNTIES) {
    if (c.name.toLowerCase().includes(q)) {
      results.push({ type: 'county', slug: c.slug, name: c.name, subtitle: `County · Pop. ${c.population.toLocaleString()}` });
    }
  }
  for (const c of CITIES) {
    if (c.name.toLowerCase().includes(q)) {
      const county = countyMap.get(c.countySlug);
      results.push({ type: 'city', slug: c.slug, name: c.name, subtitle: `City in ${county?.name || c.countySlug} · Pop. ${c.population.toLocaleString()}` });
    }
  }
  for (const n of NEIGHBORHOODS) {
    if (n.name.toLowerCase().includes(q)) {
      const city = cityMap.get(n.citySlug);
      results.push({ type: 'neighborhood', slug: n.slug, name: n.name, subtitle: `Neighborhood in ${city?.name || n.citySlug}` });
    }
  }
  for (const z of ZIP_CODES) {
    if (z.zip.includes(q)) {
      const city = cityMap.get(z.citySlug);
      results.push({ type: 'zip', slug: z.zip, name: z.zip, subtitle: `Zip Code in ${city?.name || z.citySlug}` });
    }
  }
  for (const d of SCHOOL_DISTRICTS) {
    if (d.name.toLowerCase().includes(q)) {
      results.push({ type: 'school-district', slug: d.slug, name: d.name, subtitle: `School District · ${d.rating} rated` });
    }
  }

  return results.slice(0, 20);
}

export function formatPrice(price: number): string {
  if (price >= 1000000) {
    return `$${(price / 1000000).toFixed(1)}M`;
  }
  return `$${(price / 1000).toFixed(0)}K`;
}

export function formatNumber(n: number): string {
  return n.toLocaleString();
}
