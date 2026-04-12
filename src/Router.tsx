import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import App from './App';
import ScrollToTop from './components/ScrollToTop';

const EventsPage = lazy(() => import('./pages/EventsPage'));
const EatAndDrinkPage = lazy(() => import('./pages/EatAndDrinkPage'));
const WhereToStayPage = lazy(() => import('./pages/WhereToStayPage'));
const TravelGuidesPage = lazy(() => import('./pages/TravelGuidesPage'));
const ArticlePage = lazy(() => import('./pages/ArticlePage'));
const HikingGuidePage = lazy(() => import('./pages/HikingGuidePage'));
const TrailPage = lazy(() => import('./pages/TrailPage'));
const TrailsLandingPage = lazy(() => import('./pages/TrailsLandingPage'));
const ItineraryPage = lazy(() => import('./pages/ItineraryPage'));
const ExplorePage = lazy(() => import('./pages/ExplorePage'));
const CountyPage = lazy(() => import('./pages/CountyPage'));
const CityPage = lazy(() => import('./pages/CityPage'));
const NeighborhoodPage = lazy(() => import('./pages/NeighborhoodPage'));
const ZipCodePage = lazy(() => import('./pages/ZipCodePage'));
const SchoolDistrictPage = lazy(() => import('./pages/SchoolDistrictPage'));
const ThingsToDoPage = lazy(() => import('./pages/ThingsToDoPage'));
const ThingsToDoSubPage = lazy(() => import('./pages/ThingsToDoSubPage'));
const TouristInfoPage = lazy(() => import('./pages/TouristInfoPage'));
const TravelTradePage = lazy(() => import('./pages/TravelTradePage'));
const MeetingsPage = lazy(() => import('./pages/MeetingsPage'));
const AboutArizonaTourismPage = lazy(() => import('./pages/AboutArizonaTourismPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="w-8 h-8 border-4 border-[#D32F2F] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="font-['Inter'] text-[#666]">Loading...</p>
      </div>
    </div>
  );
}

export default function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<LoadingFallback />}>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
