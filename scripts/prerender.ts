/**
 * Static HTML Prerendering Script
 *
 * Renders every route to static HTML at build time so AI crawlers
 * get fully rendered content instead of an empty div#root.
 *
 * Usage: npm run build:client && npx tsx scripts/prerender.ts
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

function extractSlugs(filePath: string, pattern: RegExp): string[] {
  const fullPath = path.join(ROOT, filePath);
  if (!fs.existsSync(fullPath)) return [];
  const content = fs.readFileSync(fullPath, 'utf-8');
  const slugs: string[] = [];
  let match;
  while ((match = pattern.exec(content)) !== null) {
    slugs.push(match[1]);
  }
  return slugs;
}

function extractZips(filePath: string): string[] {
  const fullPath = path.join(ROOT, filePath);
  if (!fs.existsSync(fullPath)) return [];
  const content = fs.readFileSync(fullPath, 'utf-8');
  const zips: string[] = [];
  const pattern = /zip:\s*['"](\d{5})['"]/g;
  let match;
  while ((match = pattern.exec(content)) !== null) {
    zips.push(match[1]);
  }
  return zips;
}

async function prerender() {
  const distPath = path.join(ROOT, 'dist');
  const templatePath = path.join(distPath, 'index.html');

  if (!fs.existsSync(templatePath)) {
    console.error('dist/index.html not found. Run "npm run build:client" first.');
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, 'utf-8');

  // Create a Vite dev server in SSR mode to load the entry-server module
  const vite = await createServer({
    root: ROOT,
    server: { middlewareMode: true },
    appType: 'custom',
    logLevel: 'warn',
  });

  const { render } = await vite.ssrLoadModule('/src/entry-server.tsx') as { render: (url: string) => { html: string; head: string } };

  // Build the complete route list
  const routes: string[] = [
    '/',
    '/things-to-do',
    '/eat-and-drink',
    '/events',
    '/where-to-stay',
    '/travel-guides',
    '/explore',
    '/trails',
    '/articles/arizona-best-hiking-trails',
    '/tourist-info',
    '/travel-trade',
    '/meetings',
    '/about-arizona-tourism',
    '/ai',
    '/itineraries',
    '/contact',
    '/privacy-policy',
    '/terms-of-use',
    '/accessibility',
  ];

  // Things-to-do sub-pages
  const ttdSlugs = extractSlugs('src/data/thingsToDo.ts', /slug:\s*"([^"]+)"/g);
  for (const slug of ttdSlugs) routes.push(`/things-to-do/${slug}`);

  // Counties
  const countySlugs = extractSlugs('src/data/counties.ts', /slug:\s*'([^']+)'/g);
  for (const slug of countySlugs) routes.push(`/explore/county/${slug}`);

  // Cities
  const citySlugs = extractSlugs('src/data/cities.ts', /slug:\s*'([^']+)'/g);
  for (const slug of citySlugs) routes.push(`/explore/city/${slug}`);

  // Neighborhoods
  const neighborhoodSlugs = extractSlugs('src/data/neighborhoods.ts', /slug:\s*"([^"]+)"/g);
  for (const slug of neighborhoodSlugs) routes.push(`/explore/neighborhood/${slug}`);

  // Zip codes
  const zips = extractZips('src/data/zipCodes.ts');
  for (const zip of zips) routes.push(`/explore/zip/${zip}`);

  // School districts
  const districtSlugs = extractSlugs('src/data/schoolDistricts.ts', /slug:\s*'([^']+)'/g);
  for (const slug of districtSlugs) routes.push(`/explore/school-district/${slug}`);

  // Trails
  const trailSlugs = [
    ...extractSlugs('src/data/trails.ts', /slug:\s*'([^']+)'/g),
    ...extractSlugs('src/data/trailsSouthernNorthern.ts', /slug:\s*'([^']+)'/g),
  ];
  for (const slug of trailSlugs) routes.push(`/trails/${slug}`);

  // Itineraries
  for (const slug of ['natural-wonders', 'arts-and-culture', 'arizona-dining', 'golf-paradise', 'family-fun', 'old-west-history']) {
    routes.push(`/itineraries/${slug}`);
  }

  // Housing market report pages (hub + one per city with verified market data)
  routes.push('/housing-market');
  const marketPath = path.join(ROOT, 'src/data/dynamic/marketPrices.json');
  if (fs.existsSync(marketPath)) {
    const marketData = JSON.parse(fs.readFileSync(marketPath, 'utf-8')) as { cities?: Record<string, unknown> };
    for (const slug of Object.keys(marketData.cities ?? {})) {
      routes.push(`/housing-market/${slug}`);
    }
  }

  // Article routes from Router
  const articlesDir = path.join(ROOT, 'src', 'pages', 'articles');
  if (fs.existsSync(articlesDir)) {
    const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.tsx'));
    for (const file of files) {
      const slug = file.replace('.tsx', '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
      routes.push(`/articles/${slug}`);
    }
  }

  // ArticlePage data-driven routes (ARTICLES object keys in src/pages/ArticlePage.tsx)
  // arizona-best-hiking-trails is served by HikingGuidePage and already in the base list.
  const articleSlugs = extractSlugs('src/pages/ArticlePage.tsx', /'([a-z0-9]+(?:-[a-z0-9]+)+)':\s*\{/g);
  for (const slug of articleSlugs) {
    const route = `/articles/${slug}`;
    if (!routes.includes(route)) routes.push(route);
  }

  console.log(`Prerendering ${routes.length} routes...`);

  let success = 0;
  let failed = 0;

  for (const route of routes) {
    try {
      const { html: appHtml, head } = render(route);

      // Strip hardcoded title and meta tags from template so Helmet's page-specific ones take precedence
      let html = template;
      if (head.includes('<title')) {
        html = html.replace(/<title>[^<]*<\/title>/g, '');
        html = html.replace(/<meta\s[^>]*name="description"[^>]*>/g, '');
        html = html.replace(/<meta\s[^>]*property="og:title"[^>]*>/g, '');
        html = html.replace(/<meta\s[^>]*property="og:description"[^>]*>/g, '');
        html = html.replace(/<meta\s[^>]*name="twitter:title"[^>]*>/g, '');
        html = html.replace(/<meta\s[^>]*name="twitter:description"[^>]*>/g, '');
        html = html.replace(/<meta\s[^>]*name="twitter:card"[^>]*>/g, '');
        html = html.replace(/<meta\s[^>]*name="robots"[^>]*>/g, '');
        html = html.replace(/<link\s[^>]*rel="canonical"[^>]*>/g, '');
        html = html.replace(/<meta\s[^>]*property="og:url"[^>]*>/g, '');
        // Strip template image/identity OG tags so SEOHead's per-page versions win (no duplicates)
        html = html.replace(/<meta\s[^>]*property="og:image"[^>]*>/g, '');
        html = html.replace(/<meta\s[^>]*name="twitter:image"[^>]*>/g, '');
        html = html.replace(/<meta\s[^>]*property="og:site_name"[^>]*>/g, '');
        html = html.replace(/<meta\s[^>]*property="og:locale"[^>]*>/g, '');
      }
      html = html
        .replace('</head>', `${head}\n</head>`)
        .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

      const filePath = route === '/'
        ? path.join(distPath, 'index.html')
        : path.join(distPath, ...route.slice(1).split('/'), 'index.html');

      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, html);
      success++;
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      // Only log first 5 failures to avoid flooding
      if (failed < 5) console.error(`  FAILED: ${route} - ${msg.slice(0, 120)}`);
      failed++;
    }
  }

  if (failed > 5) console.error(`  ... and ${failed - 5} more failures`);
  console.log(`\nPrerendering complete: ${success} succeeded, ${failed} failed out of ${routes.length} total`);

  await vite.close();

  if (failed > routes.length * 0.5) {
    console.error('More than 50% of routes failed. Check for SSR compatibility issues.');
    process.exit(1);
  }
}

prerender().catch(err => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
