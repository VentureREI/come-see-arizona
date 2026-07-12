import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import { siteConfig } from '../data/siteConfig';

const EFFECTIVE_DATE = 'July 11, 2026';

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 40 }}>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700, color: '#211B24', marginBottom: 12 }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#4A4239', marginBottom: 12 }}>
      {children}
    </p>
  );
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Accessibility Statement',
  description: 'Accessibility statement for comeseearizona.com: our WCAG 2.1 AA commitment, current measures, and how to report barriers.',
  url: `${siteConfig.siteUrl}/accessibility`,
  publisher: {
    '@type': 'Organization',
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
  },
};

export default function AccessibilityPage() {
  return (
    <>
      <SEOHead
        title="Accessibility Statement | Come See Arizona"
        description="Come See Arizona's accessibility commitment: WCAG 2.1 AA conformance target, current site measures, accessible Arizona travel resources, and how to report barriers."
        canonical="/accessibility"
        schema={webPageSchema}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Accessibility', url: '/accessibility' },
        ]}
      />

      <div style={{ background: '#211B24', padding: '72px 24px 56px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.7)', marginBottom: 16 }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.7)' }}>Home</Link> &nbsp;&gt;&nbsp; Accessibility
          </div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 40, fontWeight: 700, color: '#fff', marginBottom: 12 }}>
            Accessibility Statement
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'rgba(255,255,255,0.75)' }}>
            Last reviewed: {EFFECTIVE_DATE}
          </p>
        </div>
      </div>

      <div style={{ background: '#fff', padding: '56px 24px 72px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <P>
            Come See Arizona wants every traveler to be able to plan an Arizona trip using this site, regardless of
            ability or the technology they use. We aim to conform to the Web Content Accessibility Guidelines
            (WCAG) 2.1 Level AA and treat accessibility as an ongoing part of how we build and maintain the site.
          </P>

          <LegalSection title="What We Do Today">
            <P>
              The site is built with semantic HTML landmarks, descriptive headings in a logical order, and labeled
              navigation regions so screen readers can move through pages efficiently. Images carry descriptive
              alternative text, interactive controls have accessible names, and color choices target WCAG contrast
              ratios against their backgrounds. The site works at 200 percent zoom, respects your operating system's
              font and motion preferences where possible, and every page renders complete content without requiring
              JavaScript for reading.
            </P>
            <P>
              Keyboard users can reach all navigation, search (available via Ctrl+K or Command+K as well as an
              on-screen button), and interactive elements in a predictable tab order.
            </P>
          </LegalSection>

          <LegalSection title="Known Limitations">
            <P>
              Some embedded third-party content, such as maps and externally hosted media, may not fully meet our
              accessibility targets. Where a third-party widget presents a barrier, the surrounding text on the page
              carries the same essential information. We review these gaps as part of ongoing site audits.
            </P>
          </LegalSection>

          <LegalSection title="Accessible Travel in Arizona">
            <P>
              Beyond this website, we publish information for travelers with mobility needs, including accessible
              trails, attractions, and transit options, in our{' '}
              <Link to="/tourist-info" style={{ color: '#C1502E', fontWeight: 600 }}>visitor information guide</Link>.
              Highlights include the Grand Canyon's paved Rim Trail, the Desert Botanical Garden, and Valley Metro's
              accessible bus and light rail network. Trail pages note surface type and elevation gain to help you
              judge suitability.
            </P>
          </LegalSection>

          <LegalSection title="Report a Barrier">
            <P>
              If you encounter any part of this site that is difficult to use with assistive technology, we want to
              know. Email{' '}
              <a href="mailto:info@comeseearizona.com?subject=Accessibility%20Feedback" style={{ color: '#C1502E', fontWeight: 600 }}>
                info@comeseearizona.com
              </a>{' '}
              with the page address and a description of the problem. We prioritize accessibility reports and aim to
              respond within two business days.
            </P>
          </LegalSection>
        </div>
      </div>
    </>
  );
}
