# ThreeUI Design Research & Component Selection

**Project:** Giri OS Official Website (`giri-os-website`)  
**Design Reference:** [ThreeUI](https://threeui.com/) & [ThreeUI Browse](https://threeui.com/browse)  
**Document Version:** 1.0.0  
**Date:** November 2026  
**License Strategy:** 100% Original Implementation & Clean-Room Reproduction (MIT Compatible)

---

## 1. Executive Summary & Aesthetic Alignment

ThreeUI (created by Meng To) sets a high benchmark for futuristic, tactile, and WebGL-integrated user interfaces. It combines restrained glassmorphism, isometric spatial grids, glowing kinetic borders, and real-time Three.js geometric sculptures with modern typography and dark-mode elegance.

For **Giri OS** ("ONE SYSTEM. INFINITE POSSIBILITIES."), the website requires a serious, high-tech operating system aesthetic rather than a generic crypto or agency layout. We draw structural and interactive inspiration from ThreeUI's top design patterns while building clean-room, custom Three.js and CSS implementations tailored directly to Giri OS's official branding (Electric Blue, Cyan, Violet, Midnight Navy).

---

## 2. Selected ThreeUI References & Architectural Integration

| Reference | ThreeUI Component Type | Website Location | Intended Usage & Interaction Pattern | Implementation & Integration Approach |
| :--- | :--- | :--- | :--- | :--- |
| **Aureon** | 3D Portal & Hardware Aesthetic | Homepage Hero (Primary 3D Emblem) | Dimensional 3D Giri OS four-pane window formation floating in space with cyan/blue edge lighting, reactive mouse tracking, and subtle breathing rotation. | Custom Three.js canvas utilizing `BoxGeometry` with rounded bevels, metalness/roughness shaders, dynamic point lights (`#00D2FF`, `#0066FF`, `#7928CA`, `#A855F7`), and automatic CSS 2D fallback for non-WebGL hardware. |
| **Umbra** | Dark Cinema & Chrome Accents | Global Design System & Action Buttons | High-contrast dark surfaces (`#060913`, `#0B0F19`), subtle border gradients, and the **Umbra Chrome Button** style with luminous border reflection and tactile press states. | Custom CSS variables with backdrop blur, conic-gradient border highlights, and hover state transforms. Clean, accessible contrast conforming to WCAG AA. |
| **Isometric Motion Grid** | Dynamic Spatial Grid | Section Backgrounds & Tech Foundation | Isometric perspective wireframe grid that pulses subtly beneath feature matrices, representing OS architecture layers and kernel abstraction. | Canvas-based isometric rendering or CSS perspective grid with animated SVG beam lines, optimized for 60fps with zero layout thrashing. |
| **Workshop Codex** | Structured Chapter Layout | Documentation Portal & Guides | Left-hand indexed sidebar navigation, sticky Table of Contents, code blocks with syntax styling, and step-by-step breadcrumb progress. | Modular React documentation layout with full keyboard accessibility, fuzzy search, syntax-highlighted code blocks, and copy-to-clipboard feedback. |
| **OBLO** | Sculptural Pill & Geometric Highlights | Product Showcase & Status Badges | Minimal pill badges with translucent background, micro-glows, and status indicators (`Available`, `In Development`, `Planned`). | Reusable React `StatusBadge` component with subtle pulsing dots and semantic status color tokens. |
| **Perspective UI** | Tilt & Depth Responsive Cards | Features & Desktop Component Showcase | Interactive cards that tilt gently on mouse move, revealing depth in desktop screenshots, Giri Dock, and Giri Control Center previews. | CSS 3D `perspective(1000px) rotateX() rotateY()` transforms with smooth damping, reduced-motion media query compliance, and mobile touch fallback. |
| **Astral Atlas** | Locus Node & Timeline Explorer | Project Roadmap & Milestones | Connected nodes showing the chronological journey from Genesis 0.1 stabilization through Release Candidate and beyond. | SVG connected nodes with status rings, milestone cards, expandable test verification details, and completion indicators. |
| **Aniwall** | Smooth Media & Visual Feed | OS Gallery & Wallpaper Showcase | Filterable, responsive masonry/grid modal gallery displaying official OS wallpapers, Plymouth themes, Grub themes, and desktop previews. | React grid with category filtering (Desktop, Plymouth, Grub, Wallpapers, Installer) and accessible full-screen modal lightbox. |
| **Volta Atelier** | Monospace Precision & Telemetry | Development Status & Metrics Dashboard | Clean dashboard cards showing verified build status, branch tracking, Git commit references, and known issue telemetry. | Real-time static telemetry cards with monospace labels, honest build indicators, and direct links to GitHub workflows. |

---

## 3. Licensing, Attribution, and Intellectual Property Protection

1. **Licensing Status:**
   - ThreeUI source assets, 3D GLTF models, and proprietary commercial templates are subject to ThreeUI commercial licensing.
   - To guarantee total legal compliance and full open-source compatibility under the **MIT License**, **no proprietary ThreeUI code, copyrighted 3D meshes, commercial fonts, or trademarked assets are copied into the Giri OS repository**.

2. **Clean-Room Design Implementation:**
   - All Three.js shaders, lighting rigs, geometric configurations, and CSS animations are authored natively for Giri OS.
   - The 3D hero uses Giri OS's official four-pane window geometry (Top-Left: Cyan-Blue, Top-Right: Electric Blue, Bottom-Left: Electric Violet, Bottom-Right: Violet-Magenta) rather than external generic models.
   - All icons utilize the standard open-source Lucide icon set (ISC / MIT license).
   - Fonts use high-performance open web fonts: `Inter`, `Space Grotesk`, and `JetBrains Mono` (SIL Open Font License).

3. **Performance & Device Fallbacks:**
   - Every 3D WebGL element incorporates a low-overhead static vector/CSS fallback for users on battery-saver mode, mobile devices with restricted WebGL contexts, or users with `prefers-reduced-motion` enabled.
