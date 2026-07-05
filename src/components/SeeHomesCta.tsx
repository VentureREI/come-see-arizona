import { Home, ArrowRight } from 'lucide-react';

/**
 * "See Homes For Sale" call to action linking into the Incyte Realty
 * live home search, pre-filtered for the page's area.
 */
export default function SeeHomesCta({ href, areaLabel }: { href: string; areaLabel: string }) {
  return (
    <div className="homes-cta">
      <div className="homes-cta-text">
        <span className="homes-cta-title">Ready to look at actual listings?</span>
        <span className="homes-cta-sub">
          Browse live homes for sale in {areaLabel} on Incyte Realty's search, updated in real time.
        </span>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener"
        className="homes-cta-btn"
        aria-label={`See homes for sale in ${areaLabel} on Incyte Realty (opens in a new tab)`}
      >
        <Home size={17} aria-hidden="true" />
        See Homes For Sale
        <ArrowRight size={15} aria-hidden="true" />
      </a>
    </div>
  );
}
