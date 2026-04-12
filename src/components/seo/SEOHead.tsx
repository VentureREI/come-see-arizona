import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  schema?: object | object[];
  breadcrumbs: Array<{ name: string; url: string }>;
}

export default function SEOHead({ title, description, canonical, schema, breadcrumbs }: SEOHeadProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta('description', description);
    setMeta('robots', 'index, follow, max-snippet:-1, max-image-preview:large');
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:url', `https://comeandseearizona.com${canonical}`, true);
    setMeta('og:type', 'website', true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);

    let linkEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!linkEl) {
      linkEl = document.createElement('link');
      linkEl.rel = 'canonical';
      document.head.appendChild(linkEl);
    }
    linkEl.href = `https://comeandseearizona.com${canonical}`;

    // Remove old dynamic schema
    document.querySelectorAll('script[data-dynamic-schema]').forEach(el => el.remove());

    // Breadcrumb schema
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: b.name,
        item: `https://comeandseearizona.com${b.url}`,
      })),
    };

    const bcScript = document.createElement('script');
    bcScript.type = 'application/ld+json';
    bcScript.setAttribute('data-dynamic-schema', 'breadcrumb');
    bcScript.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(bcScript);

    // Page schema
    if (schema) {
      const schemas = Array.isArray(schema) ? schema : [schema];
      schemas.forEach((s, i) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-dynamic-schema', `page-${i}`);
        script.textContent = JSON.stringify(s);
        document.head.appendChild(script);
      });
    }

    return () => {
      document.querySelectorAll('script[data-dynamic-schema]').forEach(el => el.remove());
    };
  }, [title, description, canonical, schema, breadcrumbs]);

  return null;
}
