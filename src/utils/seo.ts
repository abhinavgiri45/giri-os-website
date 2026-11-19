/**
 * GIRI OS OFFICIAL WEBSITE — ADVANCED SEO & STRUCTURED DATA ENGINE
 * 
 * Provides centralized metadata, Open Graph tags, Twitter cards, canonical URLs,
 * and Schema.org JSON-LD structured data for every route and documentation article.
 */

export interface PageSeoData {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogType: 'website' | 'article';
  ogImage: string;
  structuredData: object;
}

export const SITE_ORIGIN = 'https://girios.org';
export const SITE_NAME = 'Giri OS';
export const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/logo/giri-os-logo.svg`;
export const GITHUB_REPO_URL = 'https://github.com/abhinavgiri45/giri-os';

/**
 * Global Schema.org definitions
 */
export const ORGANIZATION_SCHEMA = {
  '@type': 'Organization',
  '@id': `${SITE_ORIGIN}/#organization`,
  name: 'Giri OS Project',
  url: SITE_ORIGIN,
  logo: `${SITE_ORIGIN}/logo/giri-os-logo.svg`,
  sameAs: [
    GITHUB_REPO_URL,
    'https://github.com/abhinavgiri45/giri-os-website'
  ]
};

export const WEBSITE_SCHEMA = {
  '@type': 'WebSite',
  '@id': `${SITE_ORIGIN}/#website`,
  url: SITE_ORIGIN,
  name: 'Giri OS Official Website',
  description: 'Official website of Giri OS — an independent Linux-based operating system. ONE SYSTEM. INFINITE POSSIBILITIES.',
  publisher: { '@id': `${SITE_ORIGIN}/#organization` },
  inLanguage: 'en-US'
};

export const SOFTWARE_APPLICATION_SCHEMA = {
  '@type': 'SoftwareApplication',
  '@id': `${SITE_ORIGIN}/#software`,
  name: 'Giri OS',
  operatingSystem: 'Linux',
  applicationCategory: 'OperatingSystem',
  softwareVersion: '0.1 Genesis',
  description: 'An independent Linux-based operating system built upon Debian 12 Bookworm, Linux 6.1 LTS, and the Giri Space desktop shell.',
  url: SITE_ORIGIN,
  license: 'https://opensource.org/licenses/MIT',
  publisher: { '@id': `${SITE_ORIGIN}/#organization` },
  offers: {
    '@type': 'Offer',
    price: '0.00',
    priceCurrency: 'USD'
  }
};

/**
 * Route-specific metadata registry
 */
export const ROUTE_SEO: Record<string, PageSeoData> = {
  '/': {
    title: 'Giri OS — One OS. Three Worlds.',
    description: 'Discover Giri OS and its three application platforms: Giri Bridge, Giri Mobile and Giri Store. One unified desktop experience.',
    keywords: 'Giri OS, One OS Three Worlds, Giri Bridge, Giri Mobile, Giri Store, Linux operating system, independent OS, lightweight desktop',
    canonical: `${SITE_ORIGIN}/`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        ORGANIZATION_SCHEMA,
        WEBSITE_SCHEMA,
        SOFTWARE_APPLICATION_SCHEMA,
        {
          '@type': 'WebPage',
          '@id': `${SITE_ORIGIN}/#webpage`,
          url: `${SITE_ORIGIN}/`,
          name: 'Giri OS — One OS. Three Worlds.',
          description: 'Discover Giri OS and its three application platforms: Giri Bridge, Giri Mobile and Giri Store. One unified desktop experience.',
          isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
          about: { '@id': `${SITE_ORIGIN}/#software` }
        }
      ]
    }
  },
  '/products/giri-bridge': {
    title: 'Giri Bridge — Application Compatibility Platform | Giri OS',
    description: 'Giri Bridge is the application compatibility platform of Giri OS, bringing supported desktop applications into one integrated computing experience via Wine and DXVK.',
    keywords: 'Giri Bridge, Giri OS, desktop application compatibility, Wine staging, DXVK, prefix isolation, EXE MSI on Linux',
    canonical: `${SITE_ORIGIN}/products/giri-bridge`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        ORGANIZATION_SCHEMA,
        SOFTWARE_APPLICATION_SCHEMA,
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_ORIGIN}/` },
            { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE_ORIGIN}/#products` },
            { '@type': 'ListItem', position: 3, name: 'Giri Bridge', item: `${SITE_ORIGIN}/products/giri-bridge` }
          ]
        },
        {
          '@type': 'Product',
          name: 'Giri Bridge',
          description: 'Giri Bridge is the application compatibility platform of Giri OS, designed to bring supported desktop applications into one integrated computing experience.',
          category: 'SoftwareApplication',
          offers: {
            '@type': 'Offer',
            price: '0.00',
            priceCurrency: 'USD'
          }
        }
      ]
    }
  },
  '/products/giri-mobile': {
    title: 'Giri Mobile — Integrated Mobile Application Runtime | Giri OS',
    description: 'Giri Mobile brings supported mobile applications to the Giri OS desktop through an integrated application runtime with Giri Smart Input Mapping.',
    keywords: 'Giri Mobile, Giri OS, mobile app runtime, APK on desktop, Waydroid container, Giri Smart Input Mapping, keymap daemon',
    canonical: `${SITE_ORIGIN}/products/giri-mobile`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        ORGANIZATION_SCHEMA,
        SOFTWARE_APPLICATION_SCHEMA,
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_ORIGIN}/` },
            { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE_ORIGIN}/#products` },
            { '@type': 'ListItem', position: 3, name: 'Giri Mobile', item: `${SITE_ORIGIN}/products/giri-mobile` }
          ]
        },
        {
          '@type': 'Product',
          name: 'Giri Mobile',
          description: 'Giri Mobile brings supported mobile applications to the Giri OS desktop through an integrated application runtime.',
          category: 'SoftwareApplication',
          offers: {
            '@type': 'Offer',
            price: '0.00',
            priceCurrency: 'USD'
          }
        }
      ]
    }
  },
  '/products/giri-store': {
    title: 'Giri Store — Unified Application Marketplace | Giri OS',
    description: 'Giri Store is the unified application marketplace of Giri OS, designed to help users discover, install and manage applications through one interface.',
    keywords: 'Giri Store, Giri OS, application marketplace, Debian APT, Flatpak, Flathub, package manager, zero telemetry',
    canonical: `${SITE_ORIGIN}/products/giri-store`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        ORGANIZATION_SCHEMA,
        SOFTWARE_APPLICATION_SCHEMA,
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_ORIGIN}/` },
            { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE_ORIGIN}/#products` },
            { '@type': 'ListItem', position: 3, name: 'Giri Store', item: `${SITE_ORIGIN}/products/giri-store` }
          ]
        },
        {
          '@type': 'Product',
          name: 'Giri Store',
          description: 'Giri Store is the unified application marketplace of Giri OS, designed to help users discover, install and manage applications through one interface.',
          category: 'SoftwareApplication',
          offers: {
            '@type': 'Offer',
            price: '0.00',
            priceCurrency: 'USD'
          }
        }
      ]
    }
  },
  '/features': {
    title: 'Giri OS Features & Desktop Subsystems | Official Architecture Guide',
    description: 'Explore the modular architecture and desktop components of Giri OS: Giri Space shell, Giri Dock, Openbox window manager, live session, and zero telemetry.',
    keywords: 'Giri OS features, Giri Space, Linux desktop environment, lightweight window manager, Giri Dock, Linux subsystems, Giri OS capabilities',
    canonical: `${SITE_ORIGIN}/features`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        ORGANIZATION_SCHEMA,
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_ORIGIN}/` },
            { '@type': 'ListItem', position: 2, name: 'Features', item: `${SITE_ORIGIN}/features` }
          ]
        },
        {
          '@type': 'WebPage',
          '@id': `${SITE_ORIGIN}/features#webpage`,
          url: `${SITE_ORIGIN}/features`,
          name: 'Giri OS Features & Desktop Subsystems',
          description: 'Explore the modular architecture and desktop components of Giri OS: Giri Space shell, Giri Dock, Openbox window manager, live session, and zero telemetry.',
          isPartOf: { '@id': `${SITE_ORIGIN}/#website` }
        }
      ]
    }
  },
  '/features/application-ecosystem': {
    title: 'Giri OS — One OS. Three Worlds. | Application Ecosystem',
    description: 'Discover the three original application products of Giri OS: Giri Bridge, Giri Mobile, and Giri Store, unified in one powerful desktop experience.',
    keywords: 'Giri OS, One OS Three Worlds, Giri Bridge, Giri Mobile, Giri Store, application compatibility, mobile runtime, Linux marketplace',
    canonical: `${SITE_ORIGIN}/features/application-ecosystem`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        ORGANIZATION_SCHEMA,
        SOFTWARE_APPLICATION_SCHEMA,
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_ORIGIN}/` },
            { '@type': 'ListItem', position: 2, name: 'Features', item: `${SITE_ORIGIN}/features` },
            { '@type': 'ListItem', position: 3, name: 'Application Ecosystem', item: `${SITE_ORIGIN}/features/application-ecosystem` }
          ]
        },
        {
          '@type': 'TechArticle',
          '@id': `${SITE_ORIGIN}/features/application-ecosystem#article`,
          url: `${SITE_ORIGIN}/features/application-ecosystem`,
          name: 'ONE OS. THREE WORLDS — Giri OS Unified Application Ecosystem',
          headline: 'Giri OS Three-Product Ecosystem Architecture',
          description: 'Comprehensive technical documentation detailing how Giri OS brings together Giri Bridge, Giri Mobile, and Giri Store with prefix isolation, containerization, and smart input mapping.',
          isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
          about: { '@id': `${SITE_ORIGIN}/#software` }
        }
      ]
    }
  },
  '/editions': {
    title: 'Giri OS Editions & System Specifications | Standard, Dev & Cloud',
    description: 'Compare official Giri OS editions: Standard Desktop, Developer Workstation, and Cloud/Server. Check hardware specifications and resource requirements.',
    keywords: 'Giri OS editions, Giri OS system requirements, Linux editions, developer workstation Linux, lightweight desktop OS, Giri OS specs',
    canonical: `${SITE_ORIGIN}/editions`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        ORGANIZATION_SCHEMA,
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_ORIGIN}/` },
            { '@type': 'ListItem', position: 2, name: 'Editions', item: `${SITE_ORIGIN}/editions` }
          ]
        },
        {
          '@type': 'WebPage',
          '@id': `${SITE_ORIGIN}/editions#webpage`,
          url: `${SITE_ORIGIN}/editions`,
          name: 'Giri OS Editions & System Specifications',
          description: 'Compare official Giri OS editions: Standard Desktop, Developer Workstation, and Cloud/Server.',
          isPartOf: { '@id': `${SITE_ORIGIN}/#website` }
        }
      ]
    }
  },
  '/gallery': {
    title: 'Giri OS Gallery, 4K Wallpapers & Desktop Visuals | Official',
    description: 'Browse official Giri OS screenshots, Plymouth boot splash animations, GRUB themes, and download 12 high-resolution 4K desktop wallpapers.',
    keywords: 'Giri OS wallpapers, 4K Linux wallpapers, Giri OS screenshots, Plymouth theme, GRUB theme, Linux desktop aesthetic',
    canonical: `${SITE_ORIGIN}/gallery`,
    ogType: 'website',
    ogImage: `${SITE_ORIGIN}/wallpapers/giri-origin.png`,
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        ORGANIZATION_SCHEMA,
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_ORIGIN}/` },
            { '@type': 'ListItem', position: 2, name: 'Gallery', item: `${SITE_ORIGIN}/gallery` }
          ]
        },
        {
          '@type': 'ImageGallery',
          '@id': `${SITE_ORIGIN}/gallery#gallery`,
          url: `${SITE_ORIGIN}/gallery`,
          name: 'Giri OS Visual Gallery and 4K Wallpapers',
          description: 'High-resolution wallpapers, screenshots, Plymouth boot splash, and GRUB themes for Giri OS.',
          isPartOf: { '@id': `${SITE_ORIGIN}/#website` }
        }
      ]
    }
  },
  '/downloads': {
    title: 'Download Giri OS ISO & Verification Checksums | Official Release',
    description: 'Official download portal for Giri OS 0.1 Genesis ISO images. Verify SHA-256 cryptographic checksums, system requirements, and VirtualBox test guides.',
    keywords: 'Giri OS download, download Giri OS ISO, Giri OS Genesis 0.1, Linux ISO download, Giri OS sha256 checksum, Giri OS system requirements',
    canonical: `${SITE_ORIGIN}/downloads`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        ORGANIZATION_SCHEMA,
        SOFTWARE_APPLICATION_SCHEMA,
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_ORIGIN}/` },
            { '@type': 'ListItem', position: 2, name: 'Downloads', item: `${SITE_ORIGIN}/downloads` }
          ]
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Where can I download Giri OS 0.1 Genesis?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Official ISO releases will be published to GitHub Releases once the Genesis 0.1 stabilization phase completes. Development builds are actively tested on branch feature/genesis-stabilization.'
              }
            },
            {
              '@type': 'Question',
              name: 'How do I verify the integrity of the Giri OS ISO download?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Compare the calculated SHA-256 hash using the command "sha256sum -c giri-os-0.1-genesis-amd64.iso.sha256" against the published checksum.'
              }
            },
            {
              '@type': 'Question',
              name: 'What are the minimum system requirements for Giri OS?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Giri OS requires a 64-bit x86 dual-core processor (1.8 GHz+), 2 GB RAM (under 350MB idle usage), 20 GB free disk space, and UEFI or BIOS support.'
              }
            }
          ]
        }
      ]
    }
  },
  '/docs': {
    title: 'Giri OS Documentation & Technical Guides | Knowledge Base',
    description: 'Official Giri OS documentation: installation walkthroughs, Calamares setup, VirtualBox configuration, package management, and Linux architecture.',
    keywords: 'Giri OS documentation, Giri OS install guide, VirtualBox Linux, Calamares installer, Debian package management, Linux architecture',
    canonical: `${SITE_ORIGIN}/docs`,
    ogType: 'article',
    ogImage: DEFAULT_OG_IMAGE,
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        ORGANIZATION_SCHEMA,
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_ORIGIN}/` },
            { '@type': 'ListItem', position: 2, name: 'Documentation', item: `${SITE_ORIGIN}/docs` }
          ]
        },
        {
          '@type': 'TechArticle',
          '@id': `${SITE_ORIGIN}/docs#techarticle`,
          headline: 'Giri OS Official Documentation & Architecture Guide',
          description: 'Comprehensive guides for installing, configuring, and understanding the Giri OS Linux operating system.',
          isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
          author: { '@id': `${SITE_ORIGIN}/#organization` },
          publisher: { '@id': `${SITE_ORIGIN}/#organization` }
        }
      ]
    }
  },
  '/developers': {
    title: 'Giri OS Developer Portal — ISO Build System & Contributing',
    description: 'Build Giri OS from source using Debian live-build, test inside QEMU/KVM benches, inspect repository architecture, and contribute to open source.',
    keywords: 'Giri OS source code, build Giri OS ISO, live-build Debian, Linux OS development, open-source OS contribution, QEMU test bench',
    canonical: `${SITE_ORIGIN}/developers`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        ORGANIZATION_SCHEMA,
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_ORIGIN}/` },
            { '@type': 'ListItem', position: 2, name: 'Developers', item: `${SITE_ORIGIN}/developers` }
          ]
        },
        {
          '@type': 'WebPage',
          '@id': `${SITE_ORIGIN}/developers#webpage`,
          url: `${SITE_ORIGIN}/developers`,
          name: 'Giri OS Developer Portal — ISO Build System & Contributing',
          description: 'Build Giri OS from source using Debian live-build, test inside QEMU/KVM benches, and inspect repository architecture.',
          isPartOf: { '@id': `${SITE_ORIGIN}/#website` }
        }
      ]
    }
  },
  '/roadmap': {
    title: 'Giri OS Development Roadmap & Milestones | Genesis to Orbit',
    description: 'Track the 10-milestone development roadmap of Giri OS. Review progress from Genesis 0.1 stabilization to native shell and ISO release.',
    keywords: 'Giri OS roadmap, Linux OS roadmap, Giri OS milestones, operating system development progress, open-source milestones',
    canonical: `${SITE_ORIGIN}/roadmap`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        ORGANIZATION_SCHEMA,
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_ORIGIN}/` },
            { '@type': 'ListItem', position: 2, name: 'Roadmap', item: `${SITE_ORIGIN}/roadmap` }
          ]
        },
        {
          '@type': 'WebPage',
          '@id': `${SITE_ORIGIN}/roadmap#webpage`,
          url: `${SITE_ORIGIN}/roadmap`,
          name: 'Giri OS Development Roadmap & Milestones',
          description: 'Track the 10-milestone development roadmap of Giri OS.',
          isPartOf: { '@id': `${SITE_ORIGIN}/#website` }
        }
      ]
    }
  },
  '/changelog': {
    title: 'Giri OS Changelog & Release Notes | Genesis 0.1 Updates',
    description: 'Read detailed release notes and system changelogs for Giri OS 0.1 Genesis, including shell fixes, Calamares installer styling, and live-build scripts.',
    keywords: 'Giri OS changelog, Giri OS release notes, Genesis 0.1 updates, Linux distribution changes, Giri OS versions',
    canonical: `${SITE_ORIGIN}/changelog`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        ORGANIZATION_SCHEMA,
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_ORIGIN}/` },
            { '@type': 'ListItem', position: 2, name: 'Changelog', item: `${SITE_ORIGIN}/changelog` }
          ]
        },
        {
          '@type': 'WebPage',
          '@id': `${SITE_ORIGIN}/changelog#webpage`,
          url: `${SITE_ORIGIN}/changelog`,
          name: 'Giri OS Changelog & Release Notes',
          description: 'Read detailed release notes and system changelogs for Giri OS 0.1 Genesis.',
          isPartOf: { '@id': `${SITE_ORIGIN}/#website` }
        }
      ]
    }
  },
  '/status': {
    title: 'Giri OS Live Development Status & Subsystem Health Telemetry',
    description: 'Real-time telemetry and component operational status for Giri OS: ISO build engine, Calamares installer, Giri Space shell, and documentation.',
    keywords: 'Giri OS status, Giri OS health, development status, Linux build status, live telemetry',
    canonical: `${SITE_ORIGIN}/status`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        ORGANIZATION_SCHEMA,
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_ORIGIN}/` },
            { '@type': 'ListItem', position: 2, name: 'Status', item: `${SITE_ORIGIN}/status` }
          ]
        },
        {
          '@type': 'WebPage',
          '@id': `${SITE_ORIGIN}/status#webpage`,
          url: `${SITE_ORIGIN}/status`,
          name: 'Giri OS Live Development Status & Subsystem Health Telemetry',
          description: 'Real-time telemetry and component operational status for Giri OS.',
          isPartOf: { '@id': `${SITE_ORIGIN}/#website` }
        }
      ]
    }
  },
  '/security': {
    title: 'Giri OS Security & Privacy Architecture | Zero Telemetry Guarantee',
    description: 'Learn about Giri OS security architecture: zero telemetry, strict Debian provenance, cryptographic package validation, and minimal attack surface.',
    keywords: 'Giri OS security, Linux privacy OS, zero telemetry Linux, Debian security, secure desktop OS, open-source security',
    canonical: `${SITE_ORIGIN}/security`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        ORGANIZATION_SCHEMA,
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_ORIGIN}/` },
            { '@type': 'ListItem', position: 2, name: 'Security', item: `${SITE_ORIGIN}/security` }
          ]
        },
        {
          '@type': 'WebPage',
          '@id': `${SITE_ORIGIN}/security#webpage`,
          url: `${SITE_ORIGIN}/security`,
          name: 'Giri OS Security & Privacy Architecture',
          description: 'Learn about Giri OS security architecture: zero telemetry, strict Debian provenance, cryptographic package validation, and minimal attack surface.',
          isPartOf: { '@id': `${SITE_ORIGIN}/#website` }
        }
      ]
    }
  },
  '/about': {
    title: 'About Giri OS — Independent Linux Operating System Mission & Ethos',
    description: 'Discover the origin story, philosophy, and architectural vision of Giri OS. Built by Abhinav Giri as a free, open-source, human-centric desktop.',
    keywords: 'About Giri OS, who made Giri OS, Abhinav Giri, open source operating system, Linux mission, Giri OS founder',
    canonical: `${SITE_ORIGIN}/about`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        ORGANIZATION_SCHEMA,
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_ORIGIN}/` },
            { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE_ORIGIN}/about` }
          ]
        },
        {
          '@type': 'AboutPage',
          '@id': `${SITE_ORIGIN}/about#aboutpage`,
          url: `${SITE_ORIGIN}/about`,
          name: 'About Giri OS — Independent Linux Operating System Mission & Ethos',
          description: 'Discover the origin story, philosophy, and architectural vision of Giri OS.',
          isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
          about: { '@id': `${SITE_ORIGIN}/#software` }
        }
      ]
    }
  }
};

/**
 * Updates DOM head elements with page-specific SEO tags and structured data
 */
export function updatePageSeo(rawPath: string, custom?: Partial<PageSeoData>): void {
  // Normalize path
  const base = rawPath.split('#')[0];
  const normalized = base === '/' ? '/' : base.replace(/\/$/, '');

  const data: PageSeoData = custom
    ? { ...(ROUTE_SEO[normalized] || ROUTE_SEO['/']), ...custom }
    : ROUTE_SEO[normalized] || {
        title: '404 Page Not Found — Giri OS',
        description: 'The requested page could not be located on the official Giri OS website. Explore features, documentation, and downloads.',
        keywords: 'Giri OS, 404, page not found',
        canonical: `${SITE_ORIGIN}${normalized}`,
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: '404 Page Not Found — Giri OS'
        }
      };

  // 1. Update Title
  document.title = data.title;

  // 2. Helper to set or create meta tag
  const setMeta = (selector: string, attr: 'name' | 'property', attrValue: string, content: string) => {
    let el = document.querySelector<HTMLMetaElement>(selector);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, attrValue);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  // 3. Primary Meta Tags
  setMeta('meta[name="description"]', 'name', 'description', data.description);
  setMeta('meta[name="keywords"]', 'name', 'keywords', data.keywords);
  setMeta('meta[name="title"]', 'name', 'title', data.title);

  // 4. Canonical URL Link
  let canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', data.canonical);

  // 5. Open Graph Meta Tags
  setMeta('meta[property="og:type"]', 'property', 'og:type', data.ogType);
  setMeta('meta[property="og:url"]', 'property', 'og:url', data.canonical);
  setMeta('meta[property="og:title"]', 'property', 'og:title', data.title);
  setMeta('meta[property="og:description"]', 'property', 'og:description', data.description);
  setMeta('meta[property="og:image"]', 'property', 'og:image', data.ogImage);
  setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', SITE_NAME);

  // 6. Twitter Meta Tags
  setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
  setMeta('meta[name="twitter:url"]', 'name', 'twitter:url', data.canonical);
  setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', data.title);
  setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', data.description);
  setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', data.ogImage);

  // 7. Schema.org Structured Data (JSON-LD)
  let scriptEl = document.querySelector<HTMLScriptElement>('#schema-structured-data');
  if (!scriptEl) {
    scriptEl = document.createElement('script');
    scriptEl.id = 'schema-structured-data';
    scriptEl.type = 'application/ld+json';
    document.head.appendChild(scriptEl);
  }
  scriptEl.textContent = JSON.stringify(data.structuredData, null, 2);
}
