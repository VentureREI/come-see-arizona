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
  name: 'Privacy Policy',
  description: 'Privacy policy for Come See Arizona covering the information we collect, how it is used, and your choices.',
  url: `${siteConfig.siteUrl}/privacy-policy`,
  publisher: {
    '@type': 'Organization',
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEOHead
        title="Privacy Policy | Come See Arizona"
        description="How Come See Arizona collects, uses, and protects your information, including newsletter signups, server logs, and third-party services."
        canonical="/privacy-policy"
        schema={webPageSchema}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Privacy Policy', url: '/privacy-policy' },
        ]}
      />

      <div style={{ background: '#211B24', padding: '72px 24px 56px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.7)', marginBottom: 16 }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.7)' }}>Home</Link> &nbsp;&gt;&nbsp; Privacy Policy
          </div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 40, fontWeight: 700, color: '#fff', marginBottom: 12 }}>
            Privacy Policy
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'rgba(255,255,255,0.75)' }}>
            Effective date: {EFFECTIVE_DATE}
          </p>
        </div>
      </div>

      <div style={{ background: '#fff', padding: '56px 24px 72px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <P>
            Come See Arizona ("we," "us," or "our") operates comeseearizona.com. This policy explains what
            information we collect when you use the site, how we use it, and the choices you have. We keep data
            collection to the minimum needed to run a travel guide.
          </P>

          <LegalSection title="Information We Collect">
            <P>
              <strong>Newsletter signups.</strong> If you subscribe to our newsletter, we collect the email address
              you provide. Subscribing is optional and requires your explicit consent at the time of signup.
            </P>
            <P>
              <strong>Server and hosting logs.</strong> Like nearly every website, our hosting provider automatically
              records standard technical information when you visit, such as your IP address, browser type, the pages
              you request, and the time of the request. These logs are used for security, debugging, and capacity
              planning, not for building profiles of individual visitors.
            </P>
            <P>
              <strong>Messages you send us.</strong> If you email us, we receive your email address and the contents
              of your message. We use them only to respond to you.
            </P>
          </LegalSection>

          <LegalSection title="What We Do Not Do">
            <P>
              We do not sell your personal information. We do not run third-party advertising networks on the site,
              and we do not use cross-site tracking cookies. We do not require an account to read anything we publish.
            </P>
          </LegalSection>

          <LegalSection title="How We Use Information">
            <P>
              Newsletter email addresses are used only to send the Come See Arizona newsletter. Every issue includes
              an unsubscribe link, and you can also unsubscribe at any time by emailing{' '}
              <a href="mailto:info@comeseearizona.com" style={{ color: '#C1502E', fontWeight: 600 }}>info@comeseearizona.com</a>.
              Technical log data is used to keep the site secure, fast, and reliable.
            </P>
          </LegalSection>

          <LegalSection title="Third-Party Services">
            <P>
              The site is hosted on infrastructure provided by third-party hosting services, which process request
              data on our behalf. Some images are served from third-party content delivery networks, and some pages
              load public data such as weather conditions from external providers. These providers receive standard
              request information (such as your IP address) when your browser fetches those resources.
            </P>
            <P>
              Our pages link to external websites, including real estate search tools operated by{' '}
              {siteConfig.brokerageName}. Once you leave comeseearizona.com, the privacy practices of the destination
              site apply. We encourage you to review the privacy policy of any site you visit.
            </P>
          </LegalSection>

          <LegalSection title="Data Retention">
            <P>
              Newsletter addresses are kept until you unsubscribe, after which they are removed from our active
              mailing list. Hosting logs are retained on our provider's standard rotation schedule and are not
              archived by us long term.
            </P>
          </LegalSection>

          <LegalSection title="Your Rights and Choices">
            <P>
              You may request a copy of the personal information we hold about you, ask us to correct it, or ask us
              to delete it by emailing{' '}
              <a href="mailto:info@comeseearizona.com" style={{ color: '#C1502E', fontWeight: 600 }}>info@comeseearizona.com</a>.
              We will respond to verified requests within 30 days. Depending on where you live, you may have
              additional rights under laws such as the California Consumer Privacy Act or the EU General Data
              Protection Regulation; we honor those rights for all visitors regardless of location.
            </P>
          </LegalSection>

          <LegalSection title="Children's Privacy">
            <P>
              The site is a general-audience travel guide and is not directed at children under 13. We do not
              knowingly collect personal information from children. If you believe a child has provided us with
              personal information, contact us and we will delete it.
            </P>
          </LegalSection>

          <LegalSection title="Changes to This Policy">
            <P>
              We may update this policy from time to time. When we do, we will update the effective date at the top
              of this page. Material changes will be noted on the homepage or in the newsletter.
            </P>
          </LegalSection>

          <LegalSection title="Contact">
            <P>
              Questions about this policy can be sent to{' '}
              <a href="mailto:info@comeseearizona.com" style={{ color: '#C1502E', fontWeight: 600 }}>info@comeseearizona.com</a>{' '}
              or through our <Link to="/contact" style={{ color: '#C1502E', fontWeight: 600 }}>contact page</Link>.
            </P>
          </LegalSection>
        </div>
      </div>
    </>
  );
}
