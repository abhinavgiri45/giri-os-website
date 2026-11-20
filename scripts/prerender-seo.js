/**
 * GIRI OS OFFICIAL WEBSITE — SEO STATIC PRE-RENDERER
 * 
 * Generates route-specific HTML files in dist/ for all canonical routes.
 * Injects pre-rendered metadata, Open Graph tags, canonical links, 
 * Schema.org JSON-LD, and semantic HTML snapshots for search crawlers.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');

// Route metadata definition matching src/utils/seo.ts
const ROUTE_SNAPSHOTS = [
  {
    path: '/features',
    title: 'Giri OS Features & Desktop Subsystems | Official Architecture Guide',
    description: 'Explore the modular architecture and desktop components of Giri OS: Giri Space shell, Giri Dock, Openbox window manager, live session, and zero telemetry.',
    canonical: 'https://giri-os.pages.dev/features',
    h1: 'Giri OS Features & Desktop Subsystems',
    summary: 'Every layer of Giri OS is designed to be modular, fast, and transparent. Explore Giri Space, Openbox window manager, Picom compositor, Calamares installer, and our zero-telemetry architecture.',
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://giri-os.pages.dev/' },
            { '@type': 'ListItem', position: 2, name: 'Features', item: 'https://giri-os.pages.dev/features' }
          ]
        },
        {
          '@type': 'WebPage',
          name: 'Giri OS Features & Desktop Subsystems',
          url: 'https://giri-os.pages.dev/features'
        }
      ]
    }
  },
  {
    path: '/features/application-ecosystem',
    title: 'Giri OS — One OS. Three Worlds. | Application Ecosystem',
    description: 'Discover the three original application products of Giri OS: Giri Bridge, Giri Mobile, and Giri Store, unified in one powerful desktop experience.',
    canonical: 'https://giri-os.pages.dev/features/application-ecosystem',
    h1: 'ONE OS. THREE WORLDS — Giri OS Unified Application Ecosystem',
    summary: 'Giri Bridge. Giri Mobile. Giri Store. Three powerful application platforms unified into one seamless desktop experience. Explore Wine compatibility, containerized mobile runtimes, smart input mapping, and universal package discovery.',
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://giri-os.pages.dev/' },
            { '@type': 'ListItem', position: 2, name: 'Features', item: 'https://giri-os.pages.dev/features' },
            { '@type': 'ListItem', position: 3, name: 'Application Ecosystem', item: 'https://giri-os.pages.dev/features/application-ecosystem' }
          ]
        },
        {
          '@type': 'TechArticle',
          name: 'ONE OS. THREE WORLDS — Giri OS Unified Application Ecosystem',
          headline: 'Giri OS Three-Product Ecosystem Architecture',
          description: 'Comprehensive technical documentation detailing how Giri OS brings together Giri Bridge, Giri Mobile, and Giri Store with prefix isolation, containerization, and smart input mapping.',
          url: 'https://giri-os.pages.dev/features/application-ecosystem'
        }
      ]
    }
  },
  {
    path: '/products/giri-bridge',
    title: 'Giri Bridge — Application Compatibility Platform | Giri OS',
    description: 'Giri Bridge is the application compatibility platform of Giri OS, bringing supported desktop applications into one integrated computing experience via Wine and DXVK.',
    canonical: 'https://giri-os.pages.dev/products/giri-bridge',
    h1: 'Giri Bridge — Desktop Application Compatibility Platform',
    summary: 'Bring supported desktop applications into your Giri OS experience with isolated Wine prefixes, Direct3D-to-Vulkan translation, and automatic desktop launcher generation.',
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://giri-os.pages.dev/' },
            { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://giri-os.pages.dev/#products' },
            { '@type': 'ListItem', position: 3, name: 'Giri Bridge', item: 'https://giri-os.pages.dev/products/giri-bridge' }
          ]
        },
        {
          '@type': 'Product',
          name: 'Giri Bridge',
          description: 'Giri Bridge is the application compatibility platform of Giri OS, designed to bring supported desktop applications into one integrated computing experience.',
          url: 'https://giri-os.pages.dev/products/giri-bridge'
        }
      ]
    }
  },
  {
    path: '/products/giri-mobile',
    title: 'Giri Mobile — Integrated Mobile Application Runtime | Giri OS',
    description: 'Giri Mobile brings supported mobile applications to the Giri OS desktop through an integrated application runtime with Giri Smart Input Mapping.',
    canonical: 'https://giri-os.pages.dev/products/giri-mobile',
    h1: 'Giri Mobile — Integrated Mobile Application Runtime',
    summary: 'Extend your desktop experience with supported mobile applications. Powered by containerized AOSP on the Linux host kernel, Giri Smart Input Mapping, and desktop window integration.',
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://giri-os.pages.dev/' },
            { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://giri-os.pages.dev/#products' },
            { '@type': 'ListItem', position: 3, name: 'Giri Mobile', item: 'https://giri-os.pages.dev/products/giri-mobile' }
          ]
        },
        {
          '@type': 'Product',
          name: 'Giri Mobile',
          description: 'Giri Mobile brings supported mobile applications to the Giri OS desktop through an integrated application runtime.',
          url: 'https://giri-os.pages.dev/products/giri-mobile'
        }
      ]
    }
  },
  {
    path: '/products/giri-store',
    title: 'Giri Store — Unified Application Marketplace | Giri OS',
    description: 'Giri Store is the unified application marketplace of Giri OS, designed to help users discover, install and manage applications through one interface.',
    canonical: 'https://giri-os.pages.dev/products/giri-store',
    h1: 'Giri Store — Unified Application Marketplace',
    summary: 'Discover, install, and manage applications through one unified marketplace bridging Debian APT repositories and Flathub universal Flatpaks with zero telemetry.',
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://giri-os.pages.dev/' },
            { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://giri-os.pages.dev/#products' },
            { '@type': 'ListItem', position: 3, name: 'Giri Store', item: 'https://giri-os.pages.dev/products/giri-store' }
          ]
        },
        {
          '@type': 'Product',
          name: 'Giri Store',
          description: 'Giri Store is the unified application marketplace of Giri OS, designed to help users discover, install and manage applications through one interface.',
          url: 'https://giri-os.pages.dev/products/giri-store'
        }
      ]
    }
  },
  {
    path: '/editions',
    title: 'Giri OS Editions & System Specifications | Standard, Dev & Cloud',
    description: 'Compare official Giri OS editions: Standard Desktop, Developer Workstation, and Cloud/Server. Check hardware specifications and resource requirements.',
    canonical: 'https://giri-os.pages.dev/editions',
    h1: 'Giri OS Operating System Editions',
    summary: 'Compare Giri OS Standard Edition, Developer Workstation, and Cloud Server editions with full hardware requirement matrices and package manifests.',
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://giri-os.pages.dev/' },
            { '@type': 'ListItem', position: 2, name: 'Editions', item: 'https://giri-os.pages.dev/editions' }
          ]
        },
        {
          '@type': 'WebPage',
          name: 'Giri OS Editions & System Specifications',
          url: 'https://giri-os.pages.dev/editions'
        }
      ]
    }
  },
  {
    path: '/gallery',
    title: 'Giri OS Gallery, 4K Wallpapers & Desktop Visuals | Official',
    description: 'Browse official Giri OS screenshots, Plymouth boot splash animations, GRUB themes, and download 12 high-resolution 4K desktop wallpapers.',
    canonical: 'https://giri-os.pages.dev/gallery',
    h1: 'Giri OS Visual Gallery & 4K Wallpapers',
    summary: 'High-resolution screenshots, boot splash themes, GRUB bootloader aesthetics, and 12 official 4K wallpapers available for download.',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ImageGallery',
      name: 'Giri OS Visual Gallery and 4K Wallpapers',
      url: 'https://giri-os.pages.dev/gallery'
    }
  },
  {
    path: '/downloads',
    title: 'Download Giri OS ISO & Verification Checksums | Official Release',
    description: 'Official download portal for Giri OS 0.1 Genesis ISO images. Verify SHA-256 cryptographic checksums, system requirements, and VirtualBox test guides.',
    canonical: 'https://giri-os.pages.dev/downloads',
    h1: 'Giri OS Official Downloads & Validation',
    summary: 'Acquire verified cryptographic release images of Giri OS Genesis 0.1. Published with SHA-256 digests and Oracle VirtualBox test instructions.',
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'SoftwareApplication',
          name: 'Giri OS',
          operatingSystem: 'Linux',
          softwareVersion: '0.1 Genesis',
          url: 'https://giri-os.pages.dev/downloads'
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Where can I download Giri OS 0.1 Genesis?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Official ISO releases are distributed via GitHub Releases upon conclusion of live-build validation.'
              }
            }
          ]
        }
      ]
    }
  },
  {
    path: '/docs',
    title: 'Giri OS Documentation & Technical Guides | Knowledge Base',
    description: 'Official Giri OS documentation: installation walkthroughs, Calamares setup, VirtualBox configuration, package management, and Linux architecture.',
    canonical: 'https://giri-os.pages.dev/docs',
    h1: 'Giri OS Documentation & Architecture Knowledge Base',
    summary: 'Comprehensive engineering guides: What is Giri OS, system requirements, VirtualBox setup, Calamares installation, Openbox window management, Debian base, and Linux architecture.',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Giri OS Official Documentation & Architecture Guide',
      url: 'https://giri-os.pages.dev/docs'
    }
  },
  {
    path: '/developers',
    title: 'Giri OS Developer Portal — ISO Build System & Contributing',
    description: 'Build Giri OS from source using Debian live-build, test inside QEMU/KVM benches, inspect repository architecture, and contribute to open source.',
    canonical: 'https://giri-os.pages.dev/developers',
    h1: 'Giri OS Developer Portal & Build Pipeline',
    summary: 'Complete technical instructions for building Giri OS from source code with Debian live-build, testing inside QEMU, and contributing via Git pull requests.',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Giri OS Developer Portal',
      url: 'https://giri-os.pages.dev/developers'
    }
  },
  {
    path: '/roadmap',
    title: 'Giri OS Development Roadmap & Milestones | Genesis to Orbit',
    description: 'Track the 10-milestone development roadmap of Giri OS. Review progress from Genesis 0.1 stabilization to native shell and ISO release.',
    canonical: 'https://giri-os.pages.dev/roadmap',
    h1: 'Giri OS Development Roadmap & Milestones',
    summary: 'Tracking 10 development milestones: from Core Live-Build Foundation and Genesis 0.1 stabilization to native compiled shell and Wayland migration.',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Giri OS Development Roadmap',
      url: 'https://giri-os.pages.dev/roadmap'
    }
  },
  {
    path: '/changelog',
    title: 'Giri OS Changelog & Release Notes | Genesis 0.1 Updates',
    description: 'Read detailed release notes and system changelogs for Giri OS 0.1 Genesis, including shell fixes, Calamares installer styling, and live-build scripts.',
    canonical: 'https://giri-os.pages.dev/changelog',
    h1: 'Giri OS System Changelog & Release Notes',
    summary: 'Comprehensive version history and release notes for Giri OS Genesis 0.1, including live-build configuration, Plymouth boot engine, and installer styling.',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Giri OS Changelog',
      url: 'https://giri-os.pages.dev/changelog'
    }
  },
  {
    path: '/status',
    title: 'Giri OS Live Development Status & Subsystem Health Telemetry',
    description: 'Real-time telemetry and component operational status for Giri OS: ISO build engine, Calamares installer, Giri Space shell, and documentation.',
    canonical: 'https://giri-os.pages.dev/status',
    h1: 'Giri OS Live Development Status & Telemetry',
    summary: 'Live health and operational telemetry for all Giri OS subsystems: live-build pipeline, Calamares graphical installer, Openbox shell, and website.',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Giri OS Development Status',
      url: 'https://giri-os.pages.dev/status'
    }
  },
  {
    path: '/security',
    title: 'Giri OS Security & Privacy Architecture | Zero Telemetry Guarantee',
    description: 'Learn about Giri OS security architecture: zero telemetry, strict Debian provenance, cryptographic package validation, and minimal attack surface.',
    canonical: 'https://giri-os.pages.dev/security',
    h1: 'Giri OS Security & Privacy Architecture',
    summary: 'Our zero-telemetry guarantee, Debian package provenance, cryptographic signing, user agency, and attack-surface minimization practices.',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Giri OS Security & Privacy',
      url: 'https://giri-os.pages.dev/security'
    }
  },
  {
    path: '/about',
    title: 'About Giri OS — Independent Linux Operating System Mission & Ethos',
    description: 'Discover the origin story, philosophy, and architectural vision of Giri OS. Built by Abhinav Giri as a free, open-source, human-centric desktop.',
    canonical: 'https://giri-os.pages.dev/about',
    h1: 'About Giri OS: Project Origins & Ethos',
    summary: 'Founded on the conviction that a modern desktop operating system should be quiet, capable, and respectful. An independent Linux project by Abhinav Giri.',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About Giri OS',
      url: 'https://giri-os.pages.dev/about'
    }
  }
];

function prerender() {
  console.log('====================================================');
  console.log('GIRI OS WEBSITE — SEO STATIC PRE-RENDERER');
  console.log('====================================================\n');

  const baseHtmlPath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(baseHtmlPath)) {
    console.error(`[ERROR] Base HTML file not found at ${baseHtmlPath}`);
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(baseHtmlPath, 'utf-8');
  let generatedCount = 0;

  for (const route of ROUTE_SNAPSHOTS) {
    const routeDir = path.join(DIST_DIR, route.path.replace(/^\//, ''));
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }

    let modifiedHtml = baseHtml;

    // 1. Replace Title
    modifiedHtml = modifiedHtml.replace(
      /<title>.*?<\/title>/i,
      `<title>${route.title}</title>`
    );

    // 2. Replace Meta Description
    modifiedHtml = modifiedHtml.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
      `<meta name="description" content="${route.description}" />`
    );

    // 3. Replace Canonical Link
    modifiedHtml = modifiedHtml.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
      `<link rel="canonical" href="${route.canonical}" />`
    );

    // 4. Replace Open Graph Tags
    modifiedHtml = modifiedHtml.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:title" content="${route.title}" />`
    );
    modifiedHtml = modifiedHtml.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:description" content="${route.description}" />`
    );
    modifiedHtml = modifiedHtml.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:url" content="${route.canonical}" />`
    );

    // 5. Replace Twitter Tags
    modifiedHtml = modifiedHtml.replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:title" content="${route.title}" />`
    );
    modifiedHtml = modifiedHtml.replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:description" content="${route.description}" />`
    );
    modifiedHtml = modifiedHtml.replace(
      /<meta\s+name="twitter:url"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:url" content="${route.canonical}" />`
    );

    // 6. Replace Schema JSON-LD
    const jsonLdString = JSON.stringify(route.structuredData, null, 2);
    modifiedHtml = modifiedHtml.replace(
      /<script\s+id="schema-structured-data"\s+type="application\/ld\+json">[\s\S]*?<\/script>/i,
      `<script id="schema-structured-data" type="application/ld+json">\n${jsonLdString}\n    </script>`
    );

    // 7. Inject Semantic Pre-rendered Snapshot for non-JS crawlers
    const semanticSnapshot = `
      <noscript>
        <div style="padding: 2rem; max-width: 800px; margin: 0 auto; color: #fff; font-family: sans-serif;">
          <h1>${route.h1}</h1>
          <p>${route.summary}</p>
          <nav>
            <a href="/">Home</a> | 
            <a href="/features">Features</a> | 
            <a href="/downloads">Downloads</a> | 
            <a href="/docs">Documentation</a> | 
            <a href="/about">About</a>
          </nav>
        </div>
      </noscript>
    `;
    modifiedHtml = modifiedHtml.replace(
      /<div id="root"><\/div>/,
      `<div id="root"></div>\n${semanticSnapshot}`
    );

    const targetPath = path.join(routeDir, 'index.html');
    fs.writeFileSync(targetPath, modifiedHtml, 'utf-8');
    console.log(`[PRE-RENDER] Generated: ${targetPath}`);
    generatedCount++;
  }

  console.log(`\nSuccessfully pre-rendered ${generatedCount} route HTML files in dist/`);
}

prerender();
