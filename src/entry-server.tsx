import { Suspense } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';
import ThingsToDoPage from './pages/ThingsToDoPage';
import ThingsToDoSubPage from './pages/ThingsToDoSubPage';
import EatAndDrinkPage from './pages/EatAndDrinkPage';
import EventsPage from './pages/EventsPage';
import WhereToStayPage from './pages/WhereToStayPage';
import TravelGuidesPage from './pages/TravelGuidesPage';
import ArticlePage from './pages/ArticlePage';
import HikingGuidePage from './pages/HikingGuidePage';
import TrailPage from './pages/TrailPage';
import TrailsLandingPage from './pages/TrailsLandingPage';
import ItineraryPage from './pages/ItineraryPage';
import ExplorePage from './pages/ExplorePage';
import CountyPage from './pages/CountyPage';
import CityPage from './pages/CityPage';
import NeighborhoodPage from './pages/NeighborhoodPage';
import ZipCodePage from './pages/ZipCodePage';
import SchoolDistrictPage from './pages/SchoolDistrictPage';
import TouristInfoPage from './pages/TouristInfoPage';
import TravelTradePage from './pages/TravelTradePage';
import MeetingsPage from './pages/MeetingsPage';
import AboutArizonaTourismPage from './pages/AboutArizonaTourismPage';
import AIHubPage from './pages/AIHubPage';
import ItinerariesLandingPage from './pages/ItinerariesLandingPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfUsePage from './pages/TermsOfUsePage';
import AccessibilityPage from './pages/AccessibilityPage';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';

// eslint-disable-next-line react-refresh/only-export-components -- server-only file, fast refresh does not apply
function ServerApp({ location }: { location: string }) {
  // The Suspense boundary must mirror the client Router's structure: without
  // it the prerendered HTML lacks the <!--$--> boundary markers hydrateRoot
  // expects, so every page hydration fails (React #418) and re-renders
  // client-side. Pages are imported statically here, so nothing suspends and
  // the fallback never renders on the server.
  return (
    <StaticRouter location={location}>
      <SiteHeader />
      <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/things-to-do" element={<ThingsToDoPage />} />
        <Route path="/things-to-do/:categorySlug" element={<ThingsToDoSubPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/eat-and-drink" element={<EatAndDrinkPage />} />
        <Route path="/where-to-stay" element={<WhereToStayPage />} />
        <Route path="/travel-guides" element={<TravelGuidesPage />} />
        <Route path="/articles/arizona-best-hiking-trails" element={<HikingGuidePage />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
        <Route path="/trails" element={<TrailsLandingPage />} />
        <Route path="/trails/:slug" element={<TrailPage />} />
        <Route path="/itineraries" element={<ItinerariesLandingPage />} />
        <Route path="/itineraries/:slug" element={<ItineraryPage />} />
        <Route path="/tourist-info" element={<TouristInfoPage />} />
        <Route path="/travel-trade" element={<TravelTradePage />} />
        <Route path="/meetings" element={<MeetingsPage />} />
        <Route path="/about-arizona-tourism" element={<AboutArizonaTourismPage />} />
        <Route path="/ai" element={<AIHubPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-use" element={<TermsOfUsePage />} />
        <Route path="/accessibility" element={<AccessibilityPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/explore/county/:countySlug" element={<CountyPage />} />
        <Route path="/explore/city/:citySlug" element={<CityPage />} />
        <Route path="/explore/neighborhood/:neighborhoodSlug" element={<NeighborhoodPage />} />
        <Route path="/explore/zip/:zipCode" element={<ZipCodePage />} />
        <Route path="/explore/school-district/:districtSlug" element={<SchoolDistrictPage />} />
      </Routes>
      </Suspense>
      <SiteFooter />
    </StaticRouter>
  );
}

export function render(url: string): { html: string; head: string } {
  let html = renderToString(
    <HelmetProvider>
      <ServerApp location={url} />
    </HelmetProvider>
  );

  // Extract Helmet-rendered tags from the HTML body to inject into <head>.
  // Also hoist React 19's inline <link rel="preload"> resource hints (emitted
  // by renderToString for fetchPriority="high" images): left inside #root they
  // break hydration matching (error #418) and in <head> they start earlier.
  const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/);
  const metaMatches = html.match(/<meta[^>]*(?:name="description"|property="og:|name="twitter:|name="robots")[^>]*>/g) || [];
  const linkMatches = html.match(/<link[^>]*rel="(?:canonical|preload)"[^>]*>/g) || [];

  const head = [
    titleMatch ? `<title>${titleMatch[1]}</title>` : '',
    ...metaMatches,
    ...linkMatches,
  ].filter(Boolean).join('\n');

  // react-helmet-async leaves these tags inline in the rendered body. Title,
  // meta, and link are injected into <head> above and stripped from the body —
  // React 19 hoists those element types on the client, so hydration tolerates
  // their absence. JSON-LD <script> tags must STAY in the body: React does not
  // hoist inline scripts, so stripping them makes the client render an element
  // the server HTML lacks (hydration error #418). JSON-LD is valid for
  // crawlers anywhere in the document.
  for (const tag of [...metaMatches, ...linkMatches]) {
    html = html.replace(tag, '');
  }
  if (titleMatch) html = html.replace(titleMatch[0], '');

  return { html, head };
}
