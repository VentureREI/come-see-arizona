import { renderToString } from 'react-dom/server';
import { StaticRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import type { HelmetServerState } from 'react-helmet-async';

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

function ServerApp({ location }: { location: string }) {
  return (
    <StaticRouter location={location}>
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
        <Route path="/itineraries/:slug" element={<ItineraryPage />} />
        <Route path="/tourist-info" element={<TouristInfoPage />} />
        <Route path="/travel-trade" element={<TravelTradePage />} />
        <Route path="/meetings" element={<MeetingsPage />} />
        <Route path="/about-arizona-tourism" element={<AboutArizonaTourismPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/explore/county/:countySlug" element={<CountyPage />} />
        <Route path="/explore/city/:citySlug" element={<CityPage />} />
        <Route path="/explore/neighborhood/:neighborhoodSlug" element={<NeighborhoodPage />} />
        <Route path="/explore/zip/:zipCode" element={<ZipCodePage />} />
        <Route path="/explore/school-district/:districtSlug" element={<SchoolDistrictPage />} />
      </Routes>
    </StaticRouter>
  );
}

export function render(url: string): { html: string; head: string } {
  const helmetContext: { helmet?: HelmetServerState | null } = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <ServerApp location={url} />
    </HelmetProvider>
  );
  const helmet = helmetContext.helmet;
  const head = helmet ? [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ].join('\n') : '';
  return { html, head };
}
