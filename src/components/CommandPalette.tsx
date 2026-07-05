import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Command } from 'cmdk';
import * as Dialog from '@radix-ui/react-dialog';
import {
  Compass, MapPin, Mountain, CalendarDays, Newspaper, Landmark,
  UtensilsCrossed, BedDouble, Map, Sparkles, Home, Search,
} from 'lucide-react';
import { CITIES, NEIGHBORHOODS, COUNTIES } from '../data/seedingTable';
import { TRAILS } from '../data/trails';
import { TRAILS_SOUTHERN_NORTHERN } from '../data/trailsSouthernNorthern';
import { THINGS_TO_DO_CATEGORIES } from '../data/thingsToDo';
import { MANUAL_EVENTS } from '../data/events';

const CORE_PAGES = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Things to Do in Arizona', href: '/things-to-do', icon: Compass },
  { label: 'Arizona Events', href: '/events', icon: CalendarDays },
  { label: 'Eat & Drink in Arizona', href: '/eat-and-drink', icon: UtensilsCrossed },
  { label: 'Where to Stay in Arizona', href: '/where-to-stay', icon: BedDouble },
  { label: 'Arizona Travel Guides', href: '/travel-guides', icon: Map },
  { label: 'Explore Arizona Communities', href: '/explore', icon: MapPin },
  { label: 'Arizona Hiking Trails', href: '/trails', icon: Mountain },
  { label: 'Tourist Information', href: '/tourist-info', icon: Landmark },
  { label: 'For AI Assistants', href: '/ai', icon: Sparkles },
];

const ARTICLES = [
  { slug: 'celebrate-arizonas-rich-heritage', title: "Celebrate Arizona's Rich Heritage" },
  { slug: 'ancient-civilizations-southwest', title: 'Ancient Civilizations of the Southwest' },
  { slug: 'scottsdale-art-district-guide', title: "Scottsdale's Art District Guide" },
  { slug: 'route-66-through-arizona', title: 'Route 66 Through Arizona' },
  { slug: 'phoenix-best-rooftop-bars', title: "Phoenix's Best Rooftop Bars" },
  { slug: 'arizona-best-hiking-trails', title: "Arizona's Best Hiking Trails" },
  { slug: 'best-desert-resorts-spas', title: 'Best Desert Resorts & Spas' },
  { slug: 'sedona-red-rocks', title: 'Sedona Red Rocks Guide' },
  { slug: 'flagstaff-mountain-town', title: 'Flagstaff Mountain Town Guide' },
  { slug: 'bisbee-artistic-colony', title: 'Bisbee: An Artistic Colony' },
  { slug: 'prescott-old-west', title: 'Prescott Old West Charm' },
];

function formatEventDate(dateStr: string): string {
  return new Date(dateStr + 'T12:00:00').toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
  });
}

export default function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleOpenChange = (next: boolean) => {
    if (!next) setQuery('');
    onOpenChange(next);
  };

  const upcomingEvents = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const upcoming = MANUAL_EVENTS
      .filter(ev => new Date(ev.startDate + 'T12:00:00') >= today)
      .sort((a, b) => a.startDate.localeCompare(b.startDate));
    return (upcoming.length > 0 ? upcoming : MANUAL_EVENTS).slice(0, 10);
  }, []);

  const allTrails = useMemo(() => [...TRAILS, ...TRAILS_SOUTHERN_NORTHERN], []);

  const go = (href: string) => {
    handleOpenChange(false);
    navigate(href);
  };

  return (
    <Command.Dialog
      open={open}
      onOpenChange={handleOpenChange}
      label="Search Come See Arizona"
      className="csa-cmdk"
      overlayClassName="csa-cmdk-overlay"
      loop
    >
      {/* Visually hidden title/description satisfy the Radix Dialog a11y contract
          (cmdk's Dialog dedupes to the same @radix-ui/react-dialog instance). */}
      <span className="visually-hidden">
        <Dialog.Title>Search Come See Arizona</Dialog.Title>
        <Dialog.Description>Search cities, trails, events, and travel guides across the site.</Dialog.Description>
      </span>
      <div className="csa-cmdk-header">
        <Search size={18} aria-hidden="true" />
        <Command.Input
          value={query}
          onValueChange={setQuery}
          placeholder="Search cities, trails, events, guides…"
          className="csa-cmdk-input"
        />
        <kbd className="csa-cmdk-kbd">ESC</kbd>
      </div>

      <Command.List className="csa-cmdk-list">
        <Command.Empty className="csa-cmdk-empty">
          No results for &ldquo;{query}&rdquo;. Try a city, trail, or event name.
        </Command.Empty>

        <Command.Group heading="Explore" className="csa-cmdk-group">
          {CORE_PAGES.map(page => (
            <Command.Item key={page.href} value={`page ${page.label}`} onSelect={() => go(page.href)} className="csa-cmdk-item">
              <page.icon size={16} aria-hidden="true" />
              <span>{page.label}</span>
            </Command.Item>
          ))}
        </Command.Group>

        <Command.Group heading="Upcoming Events" className="csa-cmdk-group">
          {upcomingEvents.map(ev => (
            <Command.Item key={ev.id} value={`event ${ev.title} ${ev.venueCity}`} onSelect={() => go('/events')} className="csa-cmdk-item">
              <CalendarDays size={16} aria-hidden="true" />
              <span>{ev.title}</span>
              <span className="csa-cmdk-meta">{formatEventDate(ev.startDate)} · {ev.venueCity}</span>
            </Command.Item>
          ))}
        </Command.Group>

        <Command.Group heading="Hiking Trails" className="csa-cmdk-group">
          {allTrails.map(trail => (
            <Command.Item key={trail.slug} value={`trail ${trail.name} ${trail.region}`} onSelect={() => go(`/trails/${trail.slug}`)} className="csa-cmdk-item">
              <Mountain size={16} aria-hidden="true" />
              <span>{trail.name}</span>
              <span className="csa-cmdk-meta">{trail.region} · {trail.difficulty}</span>
            </Command.Item>
          ))}
        </Command.Group>

        <Command.Group heading="Things to Do" className="csa-cmdk-group">
          {THINGS_TO_DO_CATEGORIES.map(cat => (
            <Command.Item key={cat.slug} value={`things to do ${cat.name}`} onSelect={() => go(`/things-to-do/${cat.slug}`)} className="csa-cmdk-item">
              <Compass size={16} aria-hidden="true" />
              <span>{cat.name}</span>
            </Command.Item>
          ))}
        </Command.Group>

        <Command.Group heading="Travel Guides & Articles" className="csa-cmdk-group">
          {ARTICLES.map(article => (
            <Command.Item key={article.slug} value={`article ${article.title}`} onSelect={() => go(`/articles/${article.slug}`)} className="csa-cmdk-item">
              <Newspaper size={16} aria-hidden="true" />
              <span>{article.title}</span>
            </Command.Item>
          ))}
        </Command.Group>

        <Command.Group heading="Cities & Towns" className="csa-cmdk-group">
          {CITIES.map(city => (
            <Command.Item key={city.slug} value={`city ${city.name}`} onSelect={() => go(`/explore/city/${city.slug}`)} className="csa-cmdk-item">
              <MapPin size={16} aria-hidden="true" />
              <span>{city.name}</span>
              <span className="csa-cmdk-meta">Pop. {city.population.toLocaleString()}</span>
            </Command.Item>
          ))}
        </Command.Group>

        <Command.Group heading="Neighborhoods" className="csa-cmdk-group">
          {NEIGHBORHOODS.map(hood => (
            <Command.Item key={hood.slug} value={`neighborhood ${hood.name}`} onSelect={() => go(`/explore/neighborhood/${hood.slug}`)} className="csa-cmdk-item">
              <Home size={16} aria-hidden="true" />
              <span>{hood.name}</span>
            </Command.Item>
          ))}
        </Command.Group>

        <Command.Group heading="Counties" className="csa-cmdk-group">
          {COUNTIES.map(county => (
            <Command.Item key={county.slug} value={`county ${county.name}`} onSelect={() => go(`/explore/county/${county.slug}`)} className="csa-cmdk-item">
              <Landmark size={16} aria-hidden="true" />
              <span>{county.name} County</span>
            </Command.Item>
          ))}
        </Command.Group>
      </Command.List>

      <div className="csa-cmdk-footer">
        <span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
        <span><kbd>↵</kbd> open</span>
        <span><kbd>⌘K</kbd> toggle</span>
      </div>
    </Command.Dialog>
  );
}
