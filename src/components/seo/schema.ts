import { siteConfig } from '../../data/siteConfig';

export const SITE_URL = siteConfig.siteUrl; // single source of truth for host

const CONTEXT = 'https://schema.org';

/** Organization node reused as author/publisher. */
export const organizationSchema = {
  '@context': CONTEXT,
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: siteConfig.siteName,
  url: SITE_URL,
  logo: `${SITE_URL}${siteConfig.logoPath}`,
  // sameAs intentionally omitted until real, owned profiles are confirmed.
};

/** Article builder. image is strongly recommended by Google; pass the page's hero image. */
export function buildArticleSchema(opts: {
  headline: string;
  description: string;
  url: string; // absolute or path; path is resolved against SITE_URL
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  authorUrl?: string;
}) {
  const url = opts.url.startsWith('http') ? opts.url : `${SITE_URL}${opts.url}`;
  return {
    '@context': CONTEXT,
    '@type': 'Article',
    headline: opts.headline.slice(0, 110),
    description: opts.description,
    ...(opts.image ? { image: opts.image } : {}),
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: opts.authorName
      ? { '@type': 'Organization', name: opts.authorName, url: opts.authorUrl ?? SITE_URL }
      : { '@type': 'Organization', name: siteConfig.siteName, url: SITE_URL },
    publisher: organizationSchema,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };
}

/** TouristTrip + ItemList for multi-day itineraries. */
export function buildItinerarySchema(opts: {
  name: string;
  description: string;
  url: string;
  image?: string;
  days: Array<{ dayNumber: number; title: string; description: string }>;
}) {
  const url = opts.url.startsWith('http') ? opts.url : `${SITE_URL}${opts.url}`;
  return {
    '@context': CONTEXT,
    '@type': 'TouristTrip',
    name: opts.name,
    description: opts.description.split('\n\n')[0],
    url,
    ...(opts.image ? { image: opts.image } : {}),
    itinerary: {
      '@type': 'ItemList',
      numberOfItems: opts.days.length,
      itemListElement: opts.days.map((d) => ({
        '@type': 'ListItem',
        position: d.dayNumber,
        item: {
          '@type': 'TouristAttraction',
          name: d.title,
          description: d.description.split('\n\n')[0],
        },
      })),
    },
  };
}
