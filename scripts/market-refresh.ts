/**
 * Market data refresh via the Perplexity API.
 *
 * Researches current residential market metrics (median sale price, price per
 * square foot, days on market, YoY change, market balance) for Arizona
 * counties and cities using web-grounded Perplexity Sonar with citations,
 * validates every number against sanity bounds and the previous dataset, and
 * writes src/data/dynamic/marketPrices.json.
 *
 * POLICY:
 *  - zillow.com is excluded from search at the API level and its citations
 *    are rejected. Never remove this exclusion.
 *  - A value that fails validation keeps the previous verified value; it is
 *    never replaced with a guess.
 *  - This script only writes the data file. Review `git diff
 *    src/data/dynamic/marketPrices.json` before building and deploying.
 *
 * Usage:
 *   npm run market:refresh            # full refresh (3 counties + all cities)
 *   npm run market:refresh -- --dry   # research + validate, print, write nothing
 *   npm run market:refresh -- --limit 5   # first 5 cities only (plus counties)
 *
 * Requires PERPLEXITY_API_KEY in .env.local (never a VITE_ variable).
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { CITIES } from '../src/data/cities';
import { COUNTIES } from '../src/data/counties';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_FILE = path.join(ROOT, 'src/data/dynamic/marketPrices.json');

// ── env ─────────────────────────────────────────────────────────────────────

function loadEnvLocal(): void {
  const envPath = path.join(ROOT, '.env.local');
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}
loadEnvLocal();

const API_KEY = process.env.PERPLEXITY_API_KEY;
const DRY = process.argv.includes('--dry');
const limitArg = process.argv.indexOf('--limit');
const LIMIT = limitArg !== -1 ? Number(process.argv[limitArg + 1]) : Infinity;

if (!API_KEY) {
  console.error(
    'PERPLEXITY_API_KEY is not set.\n' +
    'Add it to .env.local in the project root:\n\n' +
    '  PERPLEXITY_API_KEY=pplx-...\n\n' +
    'Get a key at https://www.perplexity.ai/settings/api',
  );
  process.exit(1);
}

// ── types ───────────────────────────────────────────────────────────────────

interface MetricsResult {
  medianHomePrice: number;
  pricePerSqFt: number | null;
  avgDaysOnMarket: number | null;
  yearOverYearChange: string | null;
  marketBalance: 'buyer' | 'seller' | 'balanced' | null;
  asOfMonth: string;
  confidence: 'high' | 'medium' | 'low';
}

interface Citation { url: string }

// ── Perplexity client ───────────────────────────────────────────────────────

const METRICS_SCHEMA = {
  type: 'object',
  properties: {
    medianHomePrice: { type: 'number', description: 'Median residential sale price in USD' },
    pricePerSqFt: { type: ['number', 'null'], description: 'Median price per square foot in USD, null if not found' },
    avgDaysOnMarket: { type: ['number', 'null'], description: 'Average or median days on market, null if not found' },
    yearOverYearChange: { type: ['string', 'null'], description: 'Year-over-year median price change, e.g. "+3.2%" or "-1.5%", null if not found' },
    marketBalance: { type: ['string', 'null'], enum: ['buyer', 'seller', 'balanced', null], description: 'Whether conditions favor buyers, sellers, or are balanced' },
    asOfMonth: { type: 'string', description: 'The month the data reflects, e.g. "2026-06"' },
    confidence: { type: 'string', enum: ['high', 'medium', 'low'], description: 'Confidence that figures are accurate and recent' },
  },
  required: ['medianHomePrice', 'pricePerSqFt', 'avgDaysOnMarket', 'yearOverYearChange', 'marketBalance', 'asOfMonth', 'confidence'],
} as const;

async function perplexity(
  userPrompt: string,
  jsonSchema: object | null,
): Promise<{ content: string; citations: Citation[] }> {
  const body: Record<string, unknown> = {
    model: 'sonar-pro',
    messages: [
      {
        role: 'system',
        content:
          'You are a real estate data researcher. Report only figures you find in the cited sources — never estimate or interpolate. ' +
          'Prefer the most recent month available from Redfin, Realtor.com, ARMLS market reports, Norada, or reputable local news. ' +
          'Never use zillow.com or Zillow-derived figures.',
      },
      { role: 'user', content: userPrompt },
    ],
    // POLICY: exclude Zillow at the search layer. Never remove.
    search_domain_filter: ['-zillow.com'],
    search_recency_filter: 'month',
    temperature: 0.1,
    max_tokens: 900,
  };
  if (jsonSchema) {
    body.response_format = { type: 'json_schema', json_schema: { schema: jsonSchema } };
  }

  for (let attempt = 1; attempt <= 3; attempt++) {
    const res = await fetch('https://api.perplexity.ai/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${API_KEY}` },
      body: JSON.stringify(body),
    });
    if (res.status === 429 || res.status >= 500) {
      const wait = attempt * 4000;
      console.warn(`  API ${res.status}, retrying in ${wait / 1000}s…`);
      await new Promise(r => setTimeout(r, wait));
      continue;
    }
    if (!res.ok) throw new Error(`Perplexity API ${res.status}: ${(await res.text()).slice(0, 300)}`);
    const data = await res.json() as {
      choices: Array<{ message: { content: string } }>;
      citations?: string[];
      search_results?: Array<{ url: string }>;
    };
    const urls = (data.citations ?? data.search_results?.map(s => s.url) ?? [])
      .filter(u => !/zillow\.com/i.test(u)) // belt-and-suspenders on the Zillow ban
      .map(url => ({ url }));
    return { content: data.choices[0]?.message?.content ?? '', citations: urls };
  }
  throw new Error('Perplexity API: retries exhausted');
}

// ── validation ──────────────────────────────────────────────────────────────

interface PrevEntry { medianHomePrice?: number }

function validateMetrics(
  name: string,
  m: MetricsResult,
  prev: PrevEntry | undefined,
  citations: Citation[],
): string[] {
  const problems: string[] = [];
  if (citations.length < 1) problems.push('no citations returned');
  if (!(m.medianHomePrice >= 100_000 && m.medianHomePrice <= 5_000_000)) {
    problems.push(`median ${m.medianHomePrice} outside sane bounds`);
  }
  if (prev?.medianHomePrice) {
    const drift = Math.abs(m.medianHomePrice / prev.medianHomePrice - 1);
    if (drift > 0.25) problems.push(`median moved ${(drift * 100).toFixed(0)}% vs previous — implausible`);
  }
  if (m.pricePerSqFt !== null && !(m.pricePerSqFt >= 80 && m.pricePerSqFt <= 1200)) {
    problems.push(`price/sqft ${m.pricePerSqFt} outside sane bounds`);
  }
  if (m.avgDaysOnMarket !== null && !(m.avgDaysOnMarket >= 3 && m.avgDaysOnMarket <= 180)) {
    problems.push(`days on market ${m.avgDaysOnMarket} outside sane bounds`);
  }
  if (m.yearOverYearChange !== null && !/^[+-]?\d{1,2}(\.\d+)?%$/.test(m.yearOverYearChange.trim())) {
    problems.push(`YoY "${m.yearOverYearChange}" not a percentage`);
  }
  if (m.confidence === 'low') problems.push('model reported low confidence');
  if (problems.length) console.warn(`  REJECTED ${name}: ${problems.join('; ')}`);
  return problems;
}

function hostnames(citations: Citation[]): string[] {
  return [...new Set(citations.map(c => {
    try { return new URL(c.url).hostname.replace(/^www\./, ''); } catch { return c.url; }
  }))];
}

// ── research tasks ──────────────────────────────────────────────────────────

async function researchMetrics(label: string, query: string, prev: PrevEntry | undefined) {
  const { content, citations } = await perplexity(
    `${query}\n\nReturn the requested JSON. Use null for any figure you cannot find in a cited source.`,
    METRICS_SCHEMA,
  );
  const parsed = JSON.parse(content) as MetricsResult;
  const problems = validateMetrics(label, parsed, prev, citations);
  return { parsed, citations, ok: problems.length === 0 };
}

async function main() {
  const prev = JSON.parse(fs.readFileSync(OUT_FILE, 'utf8')) as {
    counties: Record<string, Record<string, unknown>>;
    cities: Record<string, Record<string, unknown>>;
    neighborhoods?: Record<string, unknown>;
  };

  const today = new Date().toISOString().slice(0, 10);
  const out = {
    lastUpdated: today,
    method: 'Perplexity Sonar web research with citation validation (scripts/market-refresh.ts). Zillow excluded by policy.',
    sourceNames: [] as string[],
    counties: {} as Record<string, unknown>,
    cities: {} as Record<string, unknown>,
    neighborhoods: prev.neighborhoods ?? {},
  };
  const allSources = new Set<string>();
  let accepted = 0, rejected = 0;

  // Counties: metrics + a short cited trend narrative
  for (const county of COUNTIES) {
    console.log(`County: ${county.name}`);
    const prevEntry = prev.counties?.[county.slug] as PrevEntry | undefined;
    const { parsed, citations, ok } = await researchMetrics(
      county.name,
      `What are the current residential real estate market statistics for ${county.name} County, Arizona? I need: median sale price, median price per square foot, average days on market, year-over-year median price change, and whether conditions currently favor buyers or sellers.`,
      prevEntry,
    );

    const { content: narrative, citations: narrCites } = await perplexity(
      `In 3-4 factual sentences, summarize the current residential real estate trend in ${county.name} County, Arizona: price direction, inventory, buyer/seller dynamics, and any notable local drivers (employers, construction, migration). Plain prose, no numbers you cannot cite, no marketing language.`,
      null,
    );

    if (ok) {
      out.counties[county.slug] = {
        medianHomePrice: Math.round(parsed.medianHomePrice),
        pricePerSqFt: parsed.pricePerSqFt !== null ? Math.round(parsed.pricePerSqFt) : (prevEntry as Record<string, unknown> | undefined)?.pricePerSqFt ?? null,
        avgDaysOnMarket: parsed.avgDaysOnMarket !== null ? Math.round(parsed.avgDaysOnMarket) : (prevEntry as Record<string, unknown> | undefined)?.avgDaysOnMarket ?? null,
        inventoryLevel: (prev.counties?.[county.slug]?.inventoryLevel as string) ?? 'unreported',
        marketTrend: parsed.marketBalance === 'seller' ? 'appreciating' : parsed.marketBalance === 'buyer' ? 'softening' : 'stable',
        yearOverYearChange: parsed.yearOverYearChange ?? prev.counties?.[county.slug]?.yearOverYearChange ?? null,
        asOf: parsed.asOfMonth,
        confidence: parsed.confidence,
        citations: citations.slice(0, 5).map(c => c.url),
        narrative: narrative.trim(),
        narrativeCitations: narrCites.slice(0, 5).map(c => c.url),
      };
      accepted++;
      [...citations, ...narrCites].forEach(c => hostnames([c]).forEach(h => allSources.add(h)));
    } else {
      out.counties[county.slug] = prev.counties?.[county.slug] ?? {};
      rejected++;
    }
    await new Promise(r => setTimeout(r, 600));
  }

  // Cities
  const cities = CITIES.slice(0, LIMIT);
  for (const city of cities) {
    console.log(`City: ${city.name}`);
    const prevEntry = prev.cities?.[city.slug] as PrevEntry | undefined;
    try {
      const { parsed, citations, ok } = await researchMetrics(
        city.name,
        `What are the current residential real estate market statistics for ${city.name}, Arizona? I need: median sale price, median price per square foot, average days on market, year-over-year median price change, and whether conditions currently favor buyers or sellers.`,
        prevEntry,
      );
      if (ok) {
        out.cities[city.slug] = {
          medianHomePrice: Math.round(parsed.medianHomePrice),
          pricePerSqFt: parsed.pricePerSqFt !== null ? Math.round(parsed.pricePerSqFt) : null,
          avgDaysOnMarket: parsed.avgDaysOnMarket !== null ? Math.round(parsed.avgDaysOnMarket) : null,
          marketType: parsed.marketBalance ?? 'balanced',
          yearOverYearChange: parsed.yearOverYearChange,
          asOf: parsed.asOfMonth,
          confidence: parsed.confidence,
          citations: citations.slice(0, 5).map(c => c.url),
        };
        accepted++;
        citations.forEach(c => hostnames([c]).forEach(h => allSources.add(h)));
      } else if (prev.cities?.[city.slug]) {
        out.cities[city.slug] = prev.cities[city.slug];
        rejected++;
      } else {
        rejected++;
      }
    } catch (err) {
      console.warn(`  ERROR ${city.name}: ${err instanceof Error ? err.message : err} — keeping previous entry`);
      if (prev.cities?.[city.slug]) out.cities[city.slug] = prev.cities[city.slug];
      rejected++;
    }
    await new Promise(r => setTimeout(r, 600));
  }

  out.sourceNames = [...allSources].sort();

  console.log(`\nAccepted: ${accepted}, rejected/kept-previous: ${rejected}`);
  console.log(`Sources: ${out.sourceNames.join(', ')}`);

  if (DRY) {
    console.log('\n--dry: not writing. Sample output:');
    console.log(JSON.stringify(out.counties, null, 2).slice(0, 2000));
    return;
  }

  fs.writeFileSync(OUT_FILE, JSON.stringify(out, null, 2) + '\n');
  console.log(`\nWrote ${OUT_FILE}`);
  console.log('Review with: git diff src/data/dynamic/marketPrices.json');
  console.log('Then: npm run build && deploy');
}

main().catch(err => { console.error(err); process.exit(1); });
