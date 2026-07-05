// Shared navigation data used by the global SiteHeader/SiteFooter (all pages).

export const NAV_ITEMS = [
  { label: 'Things to Do in Arizona', shortLabel: 'Things to Do', href: '/things-to-do' },
  { label: 'Eat & Drink in Arizona', shortLabel: 'Eat & Drink', href: '/eat-and-drink' },
  { label: 'Arizona Events', shortLabel: 'Events', href: '/events' },
  { label: 'Where to Stay in Arizona', shortLabel: 'Where to Stay', href: '/where-to-stay' },
  { label: 'Arizona Travel Guides', shortLabel: 'Travel Guides', href: '/travel-guides' },
  { label: 'Explore Arizona Communities', shortLabel: 'Explore AZ', href: '/explore' },
];

export const FOOTER_LINKS = {
  explore: [
    { label: 'Things to Do in Arizona', href: '/things-to-do' },
    { label: 'Eat & Drink in Arizona', href: '/eat-and-drink' },
    { label: 'Find Arizona Events', href: '/events' },
    { label: 'Where to Stay in Arizona', href: '/where-to-stay' },
    { label: 'Arizona Travel Guides', href: '/travel-guides' },
    { label: 'Explore Arizona Communities', href: '/explore' },
  ],
  plan: [
    { label: 'Tourist Info', href: '/tourist-info' },
    { label: 'Travel Trade', href: '/travel-trade' },
    { label: 'Meetings', href: '/meetings' },
    { label: 'About Arizona Tourism', href: '/about-arizona-tourism' },
    { label: 'For AI Assistants', href: '/ai' },
  ],
};
