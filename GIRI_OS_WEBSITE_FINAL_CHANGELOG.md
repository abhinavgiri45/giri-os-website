# GIRI OS OFFICIAL WEBSITE — PRODUCTION CHANGELOG

**Repository:** [`abhinavgiri45/giri-os-website`](https://github.com/abhinavgiri45/giri-os-website)  
**Product:** Giri OS  
**Milestone:** 1.0.0 (Production-Ready Release)  
**Date:** November 19, 2026  

---

## [1.0.0] — 2026-11-19 (Final Production Release)

### Added
- **Interactive Three.js 3D Hero Emblem:**
  - Real-time geometric 3D rendering of the official four-pane window emblem with metalness, roughness, and clearcoat physical shaders.
  - Reactive mouse tracking tilt with smooth damping and harmonic floating motion.
  - Floating ambient starfield particle dust in Electric Cyan and Violet.
  - Automatic `visibilitychange` throttling: pauses animation loop when tab is backgrounded.
  - `IntersectionObserver` integration: pauses rendering loop when scrolled off-screen.
  - Dynamic `prefers-reduced-motion` listener to respect accessibility preferences.
  - Accessible static 2D vector fallback with glow for low-power or non-WebGL devices.
  - Mobile touch protection: applied `touch-action: pan-y` to prevent canvas gesture hijacking.
- **Dedicated 404 Not Found Page (`NotFoundPage.tsx`):**
  - Clean error recovery screen displaying Locus Not Found with quick navigation shortcuts to Home, Docs, Features, and Downloads.
- **Documentation Deep Linking & Hash Routing:**
  - Added hash observer in `DocsPage.tsx` allowing direct URL linking to articles (e.g., `/docs#virtualbox`, `/docs#calamares-guide`, `/docs#system-requirements`).
  - Added copy-to-clipboard functionality on all documentation code blocks.
  - Empty search state with one-click "Clear Search" button.
- **Enhanced Gallery Lightbox Modal:**
  - Implemented Previous and Next controls inside the full-screen modal.
  - Added Left and Right keyboard arrow listeners to navigate through all 12 official wallpapers and themes.
  - Added active index counter (e.g., `Item 3 of 12`).
  - Direct download button for high-resolution desktop wallpapers.
- **Dynamic Per-Route Document Titles:**
  - SPA router automatically updates `document.title` and canonical link upon navigation.
- **Accessibility & Skip Link Navigation:**
  - Implemented accessible `#main-content` skip link.
  - Added `role="banner"`, `role="navigation"`, `aria-current="page"`, and `aria-expanded` attributes.
- **Cloudflare Pages Edge Security Headers:**
  - Added `public/_headers` specifying CSP, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, and `Referrer-Policy`.
  - Configured long-term immutable caching for static assets (`/assets/*`).
- **Telemetry Live Refresh Controller:**
  - Added tactile "Refresh" button with spin animation and timestamp feedback in `StatusPage.tsx`.

### Changed & Refined
- **Navigation Architecture:**
  - Added desktop "More" dropdown menu in `Navbar.tsx` to provide 1-click access to all 12 primary pages.
  - Outside-click and Escape key listeners close the dropdown and mobile drawer automatically.
- **Feature Filter Optimization:**
  - Added empty state card in `FeaturesPage.tsx` with a "Reset Filters" action when category and status combinations yield zero results.
- **Download Verification Box:**
  - Added one-click copy button for the SHA-256 verification command.
  - Added direct link button to the VirtualBox testing guide.
- **Theme Color Synchronization:**
  - `useTheme` hook dynamically synchronizes `<meta name="theme-color">` between Midnight Navy (`#060913`) and Crisp Light (`#F8FAFC`).

### Security & Integrity
- Verified zero exposed API keys or secrets.
- Verified zero usage of `dangerouslySetInnerHTML`.
- Enforced `rel="noopener noreferrer"` across all external outbound links.
- Strictly maintained 100% separation from the operating system repository (`C:\Users\abhin\OneDrive\Desktop\giri-os`).
