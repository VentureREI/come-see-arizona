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
  name: 'Terms of Use',
  description: 'Terms of use for comeseearizona.com covering permitted use, content accuracy, intellectual property, and liability.',
  url: `${siteConfig.siteUrl}/terms-of-use`,
  publisher: {
    '@type': 'Organization',
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
  },
};

export default function TermsOfUsePage() {
  return (
    <>
      <SEOHead
        title="Terms of Use | Come See Arizona"
        description="Terms of use for comeseearizona.com: permitted use of our travel guides, content accuracy, intellectual property, outdoor safety disclaimers, and liability."
        canonical="/terms-of-use"
        schema={webPageSchema}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Terms of Use', url: '/terms-of-use' },
        ]}
      />

      <div style={{ background: '#211B24', padding: '72px 24px 56px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.7)', marginBottom: 16 }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.7)' }}>Home</Link> &nbsp;&gt;&nbsp; Terms of Use
          </div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 40, fontWeight: 700, color: '#fff', marginBottom: 12 }}>
            Terms of Use
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'rgba(255,255,255,0.75)' }}>
            Effective date: {EFFECTIVE_DATE}
          </p>
        </div>
      </div>

      <div style={{ background: '#fff', padding: '56px 24px 72px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <P>
            Welcome to Come See Arizona. By accessing comeseearizona.com (the "Site"), you agree to these terms of
            use. If you do not agree, please do not use the Site.
          </P>

          <LegalSection title="What the Site Is">
            <P>
              Come See Arizona is an independent travel and community guide to the state of Arizona. It publishes
              editorial content about destinations, events, dining, trails, neighborhoods, and housing market trends.
              The Site is operated in partnership with {siteConfig.brokerageName}, a licensed Arizona real estate
              brokerage. The Site is not affiliated with the Arizona Office of Tourism or any government agency.
            </P>
          </LegalSection>

          <LegalSection title="Permitted Use">
            <P>
              You may browse, read, and share links to the Site for personal, non-commercial purposes. You may quote
              brief excerpts with attribution and a link to the source page. AI assistants and search engines may
              cite and summarize our content with attribution to Come See Arizona; see our{' '}
              <Link to="/ai" style={{ color: '#C1502E', fontWeight: 600 }}>AI reference page</Link> for citation guidance.
              You may not republish substantial portions of the Site, scrape it to build a competing product, or use
              it in a way that misrepresents the source of the content.
            </P>
          </LegalSection>

          <LegalSection title="Content Accuracy">
            <P>
              We work to keep information current, but hours, prices, trail conditions, event schedules, and market
              statistics change constantly. All content is provided "as is" without warranty of any kind. Always
              confirm critical details, such as trail closures, reservation requirements, and business hours, with
              the venue or land manager before you go. Market statistics are compiled from third-party sources and
              are provided for general information, not as investment or appraisal advice.
            </P>
          </LegalSection>

          <LegalSection title="Outdoor Activity Disclaimer">
            <P>
              Hiking, climbing, and other outdoor activities described on this Site are inherently risky, and
              Arizona's environment adds extreme heat, flash floods, and remote terrain to that risk. Trail
              descriptions, difficulty ratings, and time estimates are general guidance, not a substitute for your
              own judgment, fitness assessment, and preparation. You assume all risk for any activity you undertake
              based on information found here.
            </P>
          </LegalSection>

          <LegalSection title="Real Estate Information">
            <P>
              Neighborhood guides, school information, and home price data are provided for general reference and do
              not constitute an offer, a solicitation, or real estate, legal, or financial advice. For advice specific
              to your situation, consult a licensed professional. Real estate services referenced on the Site are
              provided by {siteConfig.brokerageName}.
            </P>
          </LegalSection>

          <LegalSection title="Intellectual Property">
            <P>
              The Come See Arizona name, logo, site design, and original editorial content are owned by the Site
              operator and protected by copyright and trademark law. Third-party trademarks, business names, and
              photographs referenced on the Site belong to their respective owners and are used for identification
              and editorial purposes.
            </P>
          </LegalSection>

          <LegalSection title="Third-Party Links">
            <P>
              The Site links to external websites we do not control, including booking platforms, government
              resources, and real estate search tools. We are not responsible for the content, availability, or
              practices of external sites.
            </P>
          </LegalSection>

          <LegalSection title="Limitation of Liability">
            <P>
              To the maximum extent permitted by law, Come See Arizona and its operators will not be liable for any
              indirect, incidental, or consequential damages arising from your use of the Site or reliance on its
              content, including injuries sustained during activities described on the Site.
            </P>
          </LegalSection>

          <LegalSection title="Changes">
            <P>
              We may revise these terms at any time by updating this page. Continued use of the Site after changes
              are posted constitutes acceptance of the revised terms.
            </P>
          </LegalSection>

          <LegalSection title="Contact">
            <P>
              Questions about these terms can be sent to{' '}
              <a href="mailto:info@comeseearizona.com" style={{ color: '#C1502E', fontWeight: 600 }}>info@comeseearizona.com</a>{' '}
              or through our <Link to="/contact" style={{ color: '#C1502E', fontWeight: 600 }}>contact page</Link>.
            </P>
          </LegalSection>
        </div>
      </div>
    </>
  );
}
