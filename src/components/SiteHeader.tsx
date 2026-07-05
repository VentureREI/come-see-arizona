import { useEffect, useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { NAV_ITEMS } from '../data/navigation';

/**
 * Global site header, rendered on every page (client Router and SSR entry
 * mirror each other). Glass effect on scroll comes from .main-nav.scrolled.
 */
export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`main-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-left">
            <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <a href="/" className="logo" aria-label="Come See Arizona - Home">
              <img src="/come-see-arizona.png" alt="Come See Arizona" width={677} height={369} fetchPriority="high" decoding="async" style={{ height: 90, width: 'auto' }} />
            </a>
          </div>

          <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
            <ul role="list" style={{ display: 'contents' }}>
              {NAV_ITEMS.map((item) => (
                <li key={item.label} style={{ display: 'contents' }}>
                  <a href={item.href} className="nav-link" title={item.label}>
                    {item.shortLabel}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-right">
            <button
              className="search-btn"
              aria-label="Search Come See Arizona (Command+K)"
              onClick={() => window.dispatchEvent(new Event('csa:open-search'))}
            >
              <Search size={20} />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <nav className="mobile-menu" aria-label="Mobile navigation">
          <ul role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="mobile-nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
