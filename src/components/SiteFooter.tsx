import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { FOOTER_LINKS } from '../data/navigation';

/** Global site footer, rendered on every page (mirrored in the SSR entry). */
export default function SiteFooter() {
  return (
    <footer className="main-footer" aria-label="Site footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
              <img src="/come-see-arizona.png" alt="Come See Arizona" width={677} height={369} loading="lazy" decoding="async" style={{ height: 40, width: 'auto' }} />
              <h3 className="footer-logo" style={{ margin: 0 }}>Come See Arizona</h3>
            </div>
            <p>The definitive independent guide to Arizona. Find great deals, things to do, travel guides and more.</p>
            <address className="footer-address">
              Arizona, United States<br />
              <a href="mailto:info@comeseearizona.com">info@comeseearizona.com</a>
            </address>
          </div>
          <div className="footer-links-col">
            <h4>Explore</h4>
            <ul>
              {FOOTER_LINKS.explore.map((link) => (
                <li key={link.label}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-links-col">
            <h4>Plan Your Trip</h4>
            <ul>
              {FOOTER_LINKS.plan.map((link) => (
                <li key={link.label}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://facebook.com/comeseearizona" aria-label="Follow Come See Arizona on Facebook"><Facebook size={20} /></a>
              <a href="https://twitter.com/comeseearizona" aria-label="Follow Come See Arizona on Twitter"><Twitter size={20} /></a>
              <a href="https://instagram.com/comeseearizona" aria-label="Follow Come See Arizona on Instagram"><Instagram size={20} /></a>
              <a href="https://youtube.com/comeseearizona" aria-label="Follow Come See Arizona on YouTube"><Youtube size={20} /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Come See Arizona. All rights reserved. <span className="last-updated">Last Updated: July 2026</span></p>
          <div className="footer-legal">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-use">Terms of Use</a>
            <a href="/accessibility">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
