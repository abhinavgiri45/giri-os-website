export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: 'Overview', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'Editions', href: '/editions' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Downloads', href: '/downloads' },
  { label: 'Documentation', href: '/docs' },
  { label: 'Developers', href: '/developers' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'Status', href: '/status' },
  { label: 'Changelog', href: '/changelog' },
  { label: 'Security', href: '/security' },
  { label: 'About', href: '/about' },
];

export const FOOTER_SECTIONS = [
  {
    title: 'Product',
    items: [
      { label: 'Overview', href: '/' },
      { label: 'Features', href: '/features' },
      { label: 'Editions', href: '/editions' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Downloads', href: '/downloads' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'Documentation', href: '/docs' },
      { label: 'Getting Started', href: '/docs#getting-started' },
      { label: 'VirtualBox Guide', href: '/docs#virtualbox' },
      { label: 'Roadmap', href: '/roadmap' },
      { label: 'Changelog', href: '/changelog' },
    ],
  },
  {
    title: 'Developers',
    items: [
      { label: 'Developer Portal', href: '/developers' },
      { label: 'Development Status', href: '/status' },
      { label: 'Build Instructions', href: '/developers#build' },
      { label: 'Contribution Guide', href: '/developers#contribute' },
      { label: 'GitHub Repository', href: 'https://github.com/abhinavgiri45/giri-os' },
    ],
  },
  {
    title: 'Project',
    items: [
      { label: 'About Giri OS', href: '/about' },
      { label: 'Security & Privacy', href: '/security' },
      { label: 'Licence Information', href: '/about#license' },
      { label: 'Website Source', href: 'https://github.com/abhinavgiri45/giri-os-website' },
    ],
  },
];
