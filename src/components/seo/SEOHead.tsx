import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../../data/siteConfig';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  schema?: object | object[];
  breadcrumbs: Array<{ name: string; url: string }>;
  /** Absolute or root-relative URL of the page's primary share image (1200x630 recommended). */
  image?: string;
  /** Descriptive alt text for the share image. */
  imageAlt?: string;
}

const DEFAULT_IMAGE = `${siteConfig.siteUrl}/hero-desert.jpg`;

export default function SEOHead({
  title,
  description,
  canonical,
  schema,
  breadcrumbs,
  image,
  imageAlt,
}: SEOHeadProps) {
  const siteUrl = siteConfig.siteUrl;
  const fullCanonical = `${siteUrl}${canonical}`;

  // Allow root-relative or absolute image URLs; fall back to the site hero.
  const resolvedImage = image
    ? image.startsWith('http')
      ? image
      : `${siteUrl}${image}`
    : DEFAULT_IMAGE;
  const resolvedImageAlt = imageAlt || title;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.name,
      item: `${siteUrl}${b.url}`,
    })),
  };

  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      <link rel="canonical" href={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Come See Arizona" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={resolvedImage} />
      <meta property="og:image:alt" content={resolvedImageAlt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={resolvedImage} />
      <meta name="twitter:image:alt" content={resolvedImageAlt} />
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
      ))}
    </Helmet>
  );
}
