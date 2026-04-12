/**
 * IndexNow Ping Script
 *
 * IndexNow instantly notifies Google, Bing, Yandex, and other search engines
 * that your content has changed. Generate an API key at
 * https://www.bing.com/indexnow - it is free. Place the key file at
 * public/[your-key].txt as verification.
 *
 * Usage: npx tsx scripts/ping-indexnow.ts https://example.com/page1 https://example.com/page2
 */

const SITE_URL = 'https://www.comeseearizona.com';

async function pingIndexNow(urls: string[]) {
  const apiKey = process.env.INDEXNOW_API_KEY;

  if (!apiKey) {
    console.log('INDEXNOW_API_KEY not set - skipping IndexNow ping.');
    console.log('Generate a free key at https://www.bing.com/indexnow');
    return;
  }

  if (urls.length === 0) {
    console.log('No URLs provided. Usage: npx tsx scripts/ping-indexnow.ts <url1> <url2> ...');
    return;
  }

  const payload = {
    host: new URL(SITE_URL).hostname,
    key: apiKey,
    keyLocation: `${SITE_URL}/${apiKey}.txt`,
    urlList: urls,
  };

  console.log(`Pinging IndexNow with ${urls.length} URL(s)...`);

  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (response.ok || response.status === 202) {
    console.log(`IndexNow accepted ${urls.length} URL(s) (status ${response.status})`);
  } else {
    const text = await response.text();
    console.error(`IndexNow returned ${response.status}: ${text}`);
    process.exit(1);
  }
}

const urls = process.argv.slice(2);
pingIndexNow(urls);
