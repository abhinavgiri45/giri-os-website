# GIRI OS OFFICIAL WEBSITE — GNU LICENCE ALIGNMENT REPORT

**Project:** Giri OS Official Website  
**Repository:** `https://github.com/abhinavgiri45/giri-os-website`  
**OS Repository:** `https://github.com/abhinavgiri45/giri-os`  
**Primary Code License:** GNU General Public License v3.0 or later (GPL-3.0-or-later)  
**Media & Assets License:** Creative Commons Attribution 4.0 International (CC BY 4.0)  
**Status:** 100% Aligned & Audited  

---

## 1. Executive Summary

This report certifies that the official Giri OS website has been completely transitioned to match the licensing model of the core Giri OS operating system repository. All outdated references to permissive licenses (such as MIT) have been eradicated from the codebase, documentation, structured data, and UI components.

The website is now officially licensed under the **GNU General Public License version 3 or (at your option) any later version (GPL-3.0-or-later)** for source code, while brand assets, vector emblems, documentation, and curated wallpapers are governed by the **Creative Commons Attribution 4.0 International (CC BY 4.0)** license.

---

## 2. Upstream Repository License Alignment

The core operating system repository [`abhinavgiri45/giri-os`](https://github.com/abhinavgiri45/giri-os) establishes the foundational legal framework in its `LICENSE` file:

```text
Giri OS — Operating System & Official Assets
Copyright (C) 2026 Giri OS Open Source Project
SPDX-License-Identifier: GPL-3.0-or-later AND CC-BY-4.0

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
```

The website repository (`giri-os-website`) is now in exact, bit-for-bit harmony with this licensing architecture.

---

## 3. Codebase Changes & Remediation Inventory

Every instance of licensing metadata across the website project was audited and updated:

| File / Component | Previous State | Remediated Current State | Verification Status |
| :--- | :--- | :--- | :--- |
| `LICENSE` | Standard MIT License | Full 674-line GNU General Public License v3.0 text with dual-licensing header notice. | Verified |
| `THIRD_PARTY_NOTICES.md` | Missing | Newly authored notice cataloging licenses for React, Vite, Three.js, Tailwind, Lucide, Inter, Space Grotesk, JetBrains Mono, and ThreeUI clean-room design credit. | Verified |
| `src/components/Footer.tsx` | "Released under the MIT License." | *"&copy; 2026 Giri OS Open Source Project. Released under the GNU General Public License v3.0 or later (GPL-3.0-or-later)."* | Verified |
| `src/pages/AboutPage.tsx` | Referenced MIT License in licensing section. | Comprehensively updated section detailing the four GNU software freedoms and CC BY 4.0 brand licensing, with direct link to GNU GPL v3 text. | Verified |
| `index.html` (JSON-LD) | `"license": "https://opensource.org/licenses/MIT"` | `"license": "https://www.gnu.org/licenses/gpl-3.0.html"` in Schema.org SoftwareApplication entity. | Verified |
| `README.md` | MIT badge and MIT footer notice. | `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](LICENSE)` and detailed GPL-3.0-or-later / CC-BY-4.0 dual-licensing breakdown. | Verified |
| `scripts/test-runner.js` | Checked for MIT license string. | Programmatically asserts that `LICENSE` contains `GNU GENERAL PUBLIC LICENSE` and `GPL-3.0-or-later`. | Verified |

---

## 4. Dual-Licensing Scope Definition

To ensure open-source compliance while enabling clear reuse parameters:

### 1. Website Source Code & Build Pipeline (GPL-3.0-or-later):
- All TypeScript/TSX source code (`src/`).
- WebGL 3D animation scripts (`src/components/ThreeHero.tsx`).
- Responsive styling rules and Tailwind tokens (`src/styles/globals.css`, `tailwind.config.js`).
- Build configurations and automated audit suites (`scripts/`, `vite.config.ts`).
- Guarantees: Users are free to run, inspect, share, modify, and redistribute the code under identical copyleft provisions.

### 2. Branding, Media & Documentation (CC BY 4.0):
- Official vector emblems and raster logos (`public/logo/`, `public/icons/`).
- Curated 4K desktop wallpapers (`public/wallpapers/`).
- Plymouth and GRUB visual theme assets (`public/images/`).
- Documentation articles and educational guides (`src/data/docs.ts`).
- Guarantees: Creators and community members may freely share and adapt assets provided appropriate credit is given to the Giri OS project.

---

## 5. Third-Party Open Source Notice Summary

The newly established `THIRD_PARTY_NOTICES.md` documents all third-party components utilized in the website build:

- **React & React DOM:** MIT License (Copyright Meta Platforms, Inc.)
- **Three.js:** MIT License (Copyright Ricardo Cabello / Mr.doob)
- **Vite:** MIT License (Copyright Yuxi (Evan) You & Vite Contributors)
- **Tailwind CSS:** MIT License (Copyright Tailwind Labs, Inc.)
- **Lucide React:** ISC License (Copyright Lucide Contributors)
- **Inter Font Family:** SIL Open Font License 1.1 (Copyright Rasmus Andersson)
- **Space Grotesk Font:** SIL Open Font License 1.1 (Copyright Florian Karsten)
- **JetBrains Mono Font:** SIL Open Font License 1.1 (Copyright JetBrains s.r.o.)
- **ThreeUI:** Clean-room design inspiration acknowledgment (https://threeui.com/)
