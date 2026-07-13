/**
 * Automated Sitemap Generator
 *
 * Scans all route definitions and data files to generate a complete sitemap.xml.
 * Run: npx tsx scripts/generate-sitemap.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://comeseearizona.com';
const TODAY = new Date().toISOString().split('T')[0];
const STATIC_DATE = '2026-01-01';

interface SitemapEntry {
  url: string;
  lastmod: string;
  priority: number;
  changefreq: string;
}

function loadJsonData(filePath: string): unknown {
  const fullPath = path.resolve(__dirname, '..', filePath);
  if (!fs.existsSync(fullPath)) return null;
  return JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
}

function loadTsArraySlugs(filePath: string, slugPattern: RegExp): string[] {
  const fullPath = path.resolve(__dirname, '..', filePath);
  if (!fs.existsSync(fullPath)) return [];
  const content = fs.readFileSync(fullPath, 'utf-8');
  const slugs: string[] = [];
  let match;
  while ((match = slugPattern.exec(content)) !== null) {
    slugs.push(match[1]);
  }
  return slugs;
}

function loadZipCodes(filePath: string): string[] {
  const fullPath = path.resolve(__dirname, '..', filePath);
  if (!fs.existsSync(fullPath)) return [];
  const content = fs.readFileSync(fullPath, 'utf-8');
  const zips: string[] = [];
  const zipPattern = /zip:\s*['"](\d{5})['"]/g;
  let match;
  while ((match = zipPattern.exec(content)) !== null) {
    zips.push(match[1]);
  }
  return zips;
}

function generateSitemap(): void {
  const entries: SitemapEntry[] = [];

  // Homepage
  entries.push({ url: '/', lastmod: TODAY, priority: 1.0, changefreq: 'daily' });

  // Main section pages
  const mainSections = ['/things-to-do', '/eat-and-drink', '/events', '/where-to-stay', '/travel-guides', '/explore', '/trails', '/itineraries', '/tourist-info', '/travel-trade', '/meetings', '/about-arizona-tourism', '/ai'];
  for (const section of mainSections) {
    entries.push({ url: section, lastmod: TODAY, priority: 0.9, changefreq: 'daily' });
  }

  // Utility and legal pages
  for (const page of ['/contact', '/privacy-policy', '/terms-of-use', '/accessibility']) {
    entries.push({ url: page, lastmod: STATIC_DATE, priority: 0.3, changefreq: 'yearly' });
  }

  // County pages
  const countySlugs = loadTsArraySlugs('src/data/counties.ts', /slug:\s*'([^']+)'/g);
  for (const slug of countySlugs) {
    entries.push({ url: `/explore/county/${slug}`, lastmod: TODAY, priority: 0.8, changefreq: 'weekly' });
  }

  // City pages
  const citySlugs = loadTsArraySlugs('src/data/cities.ts', /slug:\s*'([^']+)'/g);
  for (const slug of citySlugs) {
    entries.push({ url: `/explore/city/${slug}`, lastmod: TODAY, priority: 0.8, changefreq: 'weekly' });
  }

  // Neighborhood pages
  const neighborhoodSlugs = loadTsArraySlugs('src/data/neighborhoods.ts', /slug:\s*"([^"]+)"/g);
  for (const slug of neighborhoodSlugs) {
    entries.push({ url: `/explore/neighborhood/${slug}`, lastmod: TODAY, priority: 0.7, changefreq: 'weekly' });
  }

  // Trail pages
  const trailSlugs = [
    ...loadTsArraySlugs('src/data/trails.ts', /slug:\s*'([^']+)'/g),
    ...loadTsArraySlugs('src/data/trailsSouthernNorthern.ts', /slug:\s*'([^']+)'/g),
  ];
  for (const slug of trailSlugs) {
    entries.push({ url: `/trails/${slug}`, lastmod: TODAY, priority: 0.7, changefreq: 'weekly' });
  }

  // Zip code pages
  const zipCodes = loadZipCodes('src/data/zipCodes.ts');
  for (const zip of zipCodes) {
    entries.push({ url: `/explore/zip/${zip}`, lastmod: STATIC_DATE, priority: 0.6, changefreq: 'monthly' });
  }

  // School district pages
  const districtSlugs = loadTsArraySlugs('src/data/schoolDistricts.ts', /slug:\s*'([^']+)'/g);
  for (const slug of districtSlugs) {
    entries.push({ url: `/explore/school-district/${slug}`, lastmod: STATIC_DATE, priority: 0.6, changefreq: 'monthly' });
  }

  // Things to do sub-pages
  const thingsToDoSlugs = loadTsArraySlugs('src/data/thingsToDo.ts', /slug:\s*"([^"]+)"/g);
  for (const slug of thingsToDoSlugs) {
    entries.push({ url: `/things-to-do/${slug}`, lastmod: STATIC_DATE, priority: 0.7, changefreq: 'monthly' });
  }

  // Housing market report pages (hub + one per city with verified market data)
  entries.push({ url: '/housing-market', lastmod: TODAY, priority: 0.9, changefreq: 'weekly' });
  const marketPath = path.resolve(__dirname, '..', 'src/data/dynamic/marketPrices.json');
  if (fs.existsSync(marketPath)) {
    const marketData = JSON.parse(fs.readFileSync(marketPath, 'utf-8')) as { cities?: Record<string, unknown> };
    for (const slug of Object.keys(marketData.cities ?? {})) {
      entries.push({ url: `/housing-market/${slug}`, lastmod: TODAY, priority: 0.8, changefreq: 'weekly' });
    }
  }

  // Itinerary pages (route list mirrors scripts/prerender.ts)
  for (const slug of ['natural-wonders', 'arts-and-culture', 'arizona-dining', 'golf-paradise', 'family-fun', 'old-west-history']) {
    entries.push({ url: `/itineraries/${slug}`, lastmod: STATIC_DATE, priority: 0.6, changefreq: 'monthly' });
  }

  // Article pages - scan src/pages for article-like routes
  const articlesDir = path.resolve(__dirname, '..', 'src/pages/articles');
  if (fs.existsSync(articlesDir)) {
    const articleFiles = fs.readdirSync(articlesDir).filter(f => f.endsWith('.tsx'));
    for (const file of articleFiles) {
      const slug = file.replace('.tsx', '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
      entries.push({ url: `/articles/${slug}`, lastmod: TODAY, priority: 0.5, changefreq: 'monthly' });
    }
  }

  // ArticlePage data-driven routes (ARTICLES object keys in src/pages/ArticlePage.tsx)
  const articleSlugs = loadTsArraySlugs('src/pages/ArticlePage.tsx', /'([a-z0-9]+(?:-[a-z0-9]+)+)':\s*\{/g);
  for (const slug of articleSlugs) {
    if (!entries.some(e => e.url === `/articles/${slug}`)) {
      entries.push({ url: `/articles/${slug}`, lastmod: TODAY, priority: 0.6, changefreq: 'monthly' });
    }
  }

  // Static article routes from Router.tsx
  const routerPath = path.resolve(__dirname, '..', 'src/Router.tsx');
  if (fs.existsSync(routerPath)) {
    const routerContent = fs.readFileSync(routerPath, 'utf-8');
    const articleRoutePattern = /path="\/articles\/([^":]+)"/g;
    let match;
    while ((match = articleRoutePattern.exec(routerContent)) !== null) {
      const slug = match[1];
      if (!entries.some(e => e.url === `/articles/${slug}`)) {
        entries.push({ url: `/articles/${slug}`, lastmod: TODAY, priority: 0.5, changefreq: 'monthly' });
      }
    }
  }

  // Build the XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(e => `  <url>
    <loc>${SITE_URL}${e.url}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority.toFixed(1)}</priority>
  </url>`).join('\n')}
</urlset>
`;

  const outputPath = path.resolve(__dirname, '..', 'public/sitemap.xml');
  fs.writeFileSync(outputPath, xml, 'utf-8');
  console.log(`Sitemap generated with ${entries.length} URLs → public/sitemap.xml`);
}

generateSitemap();
