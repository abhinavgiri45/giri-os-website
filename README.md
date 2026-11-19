# Giri OS Official Website

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Framework: React + Vite](https://img.shields.io/badge/Framework-React%20%2B%20Vite-61dafb.svg)](https://vitejs.dev/)
[![Styling: Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-38bdf8.svg)](https://tailwindcss.com/)
[![3D Engine: Three.js](https://img.shields.io/badge/3D%20Engine-Three.js-black.svg)](https://threejs.org/)
[![Hosting: Cloudflare Pages](https://img.shields.io/badge/Deployment-Cloudflare%20Pages-f38020.svg)](https://pages.cloudflare.com/)

> **ONE SYSTEM. INFINITE POSSIBILITIES.**  
> Official website of **Giri OS** — an independent Linux-based operating system. Explore features, editions, documentation, development updates, source code, and official releases.

---

## Overview

The Giri OS website is engineered as a standalone, high-performance static web application designed to reflect the technical sophistication, minimalist ergonomics, and visual identity of Giri OS Genesis 0.1.

- **OS Product:** Giri OS (Current Version: 0.1 Genesis)
- **Primary OS Repository:** [`abhinavgiri45/giri-os`](https://github.com/abhinavgiri45/giri-os)
- **Website Repository:** [`abhinavgiri45/giri-os-website`](https://github.com/abhinavgiri45/giri-os-website)
- **Target Hosting Platform:** Cloudflare Pages (Direct Git Integration)

---

## Architecture & Technology Stack

| Domain | Technology | Purpose |
| :--- | :--- | :--- |
| **Runtime & Build** | React 18 + Vite 5 + TypeScript | Blazing fast HMR, strict type safety, zero-lag client navigation |
| **3D & WebGL** | Three.js | Real-time interactive 3D hero emblem, kinetic tilt, dynamic lighting |
| **Styling & Tokens** | Tailwind CSS + Custom CSS Variables | Midnight Navy palette (`#060913`, `#0B0F19`), glassmorphism, dark/light themes |
| **Design Language** | ThreeUI Design Integration | Tactile Aureon crystal buttons, Umbra chrome borders, isometric motion grid |
| **Icons** | Lucide React | High-contrast, clean open-source vector glyphs |
| **SEO & Social** | Open Graph, Twitter Cards, JSON-LD, Sitemap | Complete semantic indexing, rich link previews, sitemap generation |
| **Hosting Config** | Cloudflare Pages `_redirects` & `wrangler.toml` | Zero-configuration SPA routing, high-performance edge CDN |

---

## Design System & ThreeUI Alignment

The visual aesthetic is inspired by [ThreeUI](https://threeui.com/) and tailored directly to Giri OS's official four-pane geometric window identity:

- **Midnight Navy (`#060913`):** Deep space backdrop providing maximum contrast.
- **Deep Surface (`#0B0F19`):** Ground level glassmorphic cards and elevated navigation.
- **Electric Blue (`#2563EB` / `#0066FF`):** Core brand energy and primary action illumination.
- **Cyan (`#06B6D4` / `#00D2FF`):** Telemetry accents, terminal code highlights, and interactive hover glow.
- **Electric Violet (`#8B5CF6` / `#7928CA`):** Secondary dimensional depth and badge accents.
- **Radiant Magenta (`#A855F7`):** Fourth window pane specular reflections.

For in-depth analysis of selected ThreeUI patterns and clean-room implementation details, consult [`THREEUI_COMPONENT_SELECTION.md`](./THREEUI_COMPONENT_SELECTION.md).

---

## Directory Structure

```text
giri-os-website/
│
├── public/
│   ├── favicon.svg             # Official Giri OS vector favicon
│   ├── robots.txt              # Search engine crawling rules
│   ├── sitemap.xml             # Search engine XML index
│   ├── _redirects              # Cloudflare Pages SPA client-side routing
│   ├── logo/                   # Official vector SVG brand emblems
│   ├── wallpapers/             # Verified 4K desktop wallpapers
│   └── images/                 # Plymouth and GRUB verified assets
│
├── src/
│   ├── components/             # Reusable UI widgets & 3D canvas
│   │   ├── Navbar.tsx          # Responsive floating header & mobile drawer
│   │   ├── Footer.tsx          # Multi-column semantic footer
│   │   ├── ThreeHero.tsx       # Three.js 3D Emblem with kinetic mouse tracking
│   │   ├── DesktopShowcase.tsx # Interactive desktop environment preview
│   │   ├── StatusBadge.tsx     # ThreeUI pill badges (Available, In Dev, Planned)
│   │   ├── CodeBlock.tsx       # Syntax styled code blocks with copy-to-clipboard
│   │   └── Modal.tsx           # Full-screen accessible gallery lightbox
│   │
│   ├── pages/                  # All 12 primary website pages
│   │   ├── HomePage.tsx        # Hero, vision, showcase, features, editions, CTA
│   │   ├── FeaturesPage.tsx    # Filterable catalog of 13 Giri OS components
│   │   ├── EditionsPage.tsx    # Standard, Developer & Cloud specifications
│   │   ├── GalleryPage.tsx     # OS screenshots, wallpapers, and concept previews
│   │   ├── DownloadsPage.tsx   # Verified download guidance & honest status
│   │   ├── DocsPage.tsx        # Searchable documentation with sidebar & TOC
│   │   ├── DevelopersPage.tsx  # Build instructions, VM bench, Git workflow
│   │   ├── RoadmapPage.tsx     # Milestones 1 to 10 with verified deliverable checks
│   │   ├── ChangelogPage.tsx   # Release notes for Genesis 0.1 & future builds
│   │   ├── StatusPage.tsx      # Live telemetry, active branch & bug triage
│   │   ├── SecurityPage.tsx    # Cryptographic provenance & privacy philosophy
│   │   └── AboutPage.tsx       # Origins, mission, and open-source principles
│   │
│   ├── data/                   # Structured static data models & schemas
│   ├── hooks/                  # Custom React hooks (useTheme, etc.)
│   ├── styles/                 # Tailwind configuration and CSS variable tokens
│   ├── App.tsx                 # Client-side router & layout frame
│   └── main.tsx                # Application root entrypoint
│
├── scripts/
│   └── test-runner.js          # Automated audit & asset integrity test runner
│
├── THREEUI_COMPONENT_SELECTION.md # Design research & licensing manifesto
├── wrangler.toml               # Cloudflare Pages configuration
├── vite.config.ts              # Vite production bundler configuration
├── tailwind.config.js          # Tailwind CSS design token mappings
├── package.json                # Project dependencies and npm scripts
├── LICENSE                     # MIT License
└── README.md                   # Project documentation
```

---

## Local Development

### Prerequisites
- Node.js `v20+` or `v24+`
- npm `v10+`

### Installation
```bash
# Clone the website repository
git clone https://github.com/abhinavgiri45/giri-os-website.git
cd giri-os-website

# Install dependencies
npm install
```

### Running Dev Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Running Test Suite
```bash
npm test
```
Executes the automated asset, schema, and routing integrity audit.

### Production Build
```bash
npm run build
```
Compiles TypeScript and outputs the production bundle to `./dist`.

---

## Cloudflare Pages Deployment

Deploying `giri-os-website` to Cloudflare Pages is completely automated via GitHub integration:

1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/) and select **Workers & Pages**.
2. Click **Create Application** > **Pages** > **Connect to Git**.
3. Select the repository **`abhinavgiri45/giri-os-website`**.
4. Configure Build Settings:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (default)
5. Click **Save and Deploy**.

Cloudflare Pages automatically detects the `public/_redirects` file (`/* /index.html 200`) to enable flawless client-side single-page navigation without 404 errors on deep links.

---

## License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.
