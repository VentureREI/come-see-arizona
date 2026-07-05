/**
 * Build Validation Script
 *
 * Every autonomous agent runs this before committing to ensure they never
 * push broken code. Checks TypeScript compilation, Vite build, dynamic JSON
 * integrity, sitemap URL count, and minimum event count.
 *
 * Usage: npx tsx scripts/validate-build.ts
 * Exit code 0 = all checks pass, 1 = something failed
 */

import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.resolve(__dirname, '..');
let failed = false;

function check(name: string, fn: () => void) {
  try {
    fn();
    console.log(`PASS: ${name}`);
  } catch (err) {
    console.error(`FAIL: ${name}`);
    console.error(`  ${err instanceof Error ? err.message : err}`);
    failed = true;
  }
}

function run(cmd: string) {
  execSync(cmd, { cwd: ROOT, stdio: 'pipe', timeout: 120_000 });
}

// 1. TypeScript compiler check
check('TypeScript compilation', () => {
  run('npx tsc --noEmit');
});

// 2. Vite build — build into a throwaway directory. Building into dist/ here
// would empty it and destroy the prerendered HTML that `npm run build` just
// wrote (vite only emits client assets; the 475 page files come from
// scripts/prerender.ts).
check('Vite build', () => {
  run('npx vite build --outDir dist-validate --emptyOutDir');
  run('rm -rf dist-validate');
});

// 3. Dynamic JSON files parse correctly
const jsonFiles = [
  'src/data/dynamic/marketPrices.json',
  'src/data/dynamic/trailConditions.json',
  'src/data/dynamic/featuredContent.json',
  'src/data/dynamic/events.json',
];

for (const file of jsonFiles) {
  check(`JSON parse: ${file}`, () => {
    const fullPath = path.join(ROOT, file);
    if (!fs.existsSync(fullPath)) {
      throw new Error(`File not found: ${file}`);
    }
    JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
  });
}

// 4. Sitemap URL count
check('Sitemap has 400+ URLs', () => {
  const sitemapPath = path.join(ROOT, 'public/sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    throw new Error('public/sitemap.xml not found - run npx tsx scripts/generate-sitemap.ts first');
  }
  const content = fs.readFileSync(sitemapPath, 'utf-8');
  const urlCount = (content.match(/<url>/g) || []).length;
  if (urlCount < 400) {
    throw new Error(`Sitemap has only ${urlCount} URLs (minimum 400)`);
  }
});

// 5. Events count
check('Events file has 20+ events', () => {
  const eventsPath = path.join(ROOT, 'src/data/dynamic/events.json');
  const data = JSON.parse(fs.readFileSync(eventsPath, 'utf-8'));
  const count = Array.isArray(data.events) ? data.events.length : 0;
  if (count < 20) {
    throw new Error(`events.json has only ${count} events (minimum 20)`);
  }
});

if (failed) {
  console.error('\nValidation FAILED - do not commit.');
  process.exit(1);
} else {
  console.log('\nAll checks passed.');
  process.exit(0);
}
