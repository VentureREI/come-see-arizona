import { Link } from 'react-router-dom';
import { Mail, MessageSquare, Home, Briefcase } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';
import { siteConfig } from '../data/siteConfig';
import AnswerBlock from '../components/AnswerBlock';

const CONTACT_OPTIONS = [
  {
    icon: Mail,
    title: 'General Inquiries',
    detail: 'info@comeseearizona.com',
    href: 'mailto:info@comeseearizona.com',
    description: 'Questions about Arizona travel, corrections to our guides, or anything else about the site. We read every message and typically respond within two business days.',
  },
  {
    icon: MessageSquare,
    title: 'Content Corrections',
    detail: 'info@comeseearizona.com',
    href: 'mailto:info@comeseearizona.com?subject=Content%20Correction',
    description: 'Spotted outdated hours, a closed trail, or a restaurant that has moved? Tell us the page and what changed and we will verify and update it.',
  },
  {
    icon: Briefcase,
    title: 'Partnerships and Media',
    detail: 'info@comeseearizona.com',
    href: 'mailto:info@comeseearizona.com?subject=Partnership%20Inquiry',
    description: 'Tourism boards, attractions, and media outlets: reach out about listings, collaborations, or use of our content with attribution.',
  },
  {
    icon: Home,
    title: 'Arizona Real Estate',
    detail: siteConfig.brokerageName,
    href: '/explore',
    internal: true,
    description: `Thinking about making Arizona home? ${siteConfig.leaderName}, ${siteConfig.leaderJobTitle} of ${siteConfig.brokerageName}, helps relocating buyers find the right Valley community. Start with our community guides.`,
  },
];

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Come See Arizona',
  description: 'Contact Come See Arizona for travel questions, content corrections, partnerships, and Arizona relocation guidance.',
  url: `${siteConfig.siteUrl}/contact`,
  publisher: {
    '@type': 'Organization',
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    email: 'info@comeseearizona.com',
  },
};

export default function ContactPage() {
  return (
    <>
      <SEOHead
        title="Contact Us | Come See Arizona"
        description="Contact Come See Arizona for travel questions, content corrections, partnership inquiries, and Arizona relocation guidance from Incyte Realty."
        canonical="/contact"
        schema={contactSchema}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' },
        ]}
      />

      {/* ─── Header ─── */}
      <div style={{ background: '#211B24', padding: '80px 24px 64px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.7)', marginBottom: 16 }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.7)' }}>Home</Link> &nbsp;&gt;&nbsp; Contact
          </div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 40, fontWeight: 700, color: '#fff', marginBottom: 16 }}>
            Contact Us
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', maxWidth: 640 }}>
            Questions, corrections, partnerships, or planning a move to Arizona: here is how to reach us.
          </p>
        </div>
      </div>

      <AnswerBlock answer="Contact Come See Arizona by email at info@comeseearizona.com for general questions, content corrections, and partnership inquiries. Responses typically arrive within two business days. For Arizona real estate and relocation questions, the site is operated in partnership with Incyte Realty, led by designated broker Frank Vazquez." />

      {/* ─── Contact options ─── */}
      <div style={{ background: '#F7F1E8', padding: '48px 24px 64px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 380px), 1fr))', gap: 24 }}>
            {CONTACT_OPTIONS.map((option) => {
              const Icon = option.icon;
              const inner = (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 12, background: '#FAF3EB', color: '#C1502E' }}>
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700, color: '#211B24', margin: 0 }}>
                      {option.title}
                    </h2>
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600, color: '#C1502E', marginBottom: 10 }}>
                    {option.detail}
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7, color: '#5C5348', margin: 0 }}>
                    {option.description}
                  </p>
                </>
              );
              const cardStyle: React.CSSProperties = {
                background: '#fff',
                borderRadius: 16,
                boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                padding: 28,
                textDecoration: 'none',
                display: 'block',
              };
              return option.internal ? (
                <Link key={option.title} to={option.href} style={cardStyle}>{inner}</Link>
              ) : (
                <a key={option.title} href={option.href} style={cardStyle}>{inner}</a>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── Before you write ─── */}
      <div style={{ background: '#fff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 700, color: '#211B24', marginBottom: 16 }}>
            Answers You Might Find Faster
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8, color: '#4A4239', marginBottom: 12 }}>
            Common visitor questions about weather, safety, time zones, and getting around are answered on our{' '}
            <Link to="/tourist-info" style={{ color: '#C1502E', fontWeight: 600 }}>visitor information page</Link>.
            For trip planning, start with our <Link to="/itineraries" style={{ color: '#C1502E', fontWeight: 600 }}>three-day itineraries</Link>,{' '}
            <Link to="/things-to-do" style={{ color: '#C1502E', fontWeight: 600 }}>things to do</Link>, and{' '}
            <Link to="/trails" style={{ color: '#C1502E', fontWeight: 600 }}>trail guides</Link>.
            Neighborhood, school, and home price questions are covered in our{' '}
            <Link to="/explore" style={{ color: '#C1502E', fontWeight: 600 }}>community guides</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
