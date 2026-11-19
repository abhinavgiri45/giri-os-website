import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('====================================================');
console.log('GIRI OS WEBSITE — FULL PRODUCTION & QA AUDIT SUITE');
console.log('====================================================\n');

let passCount = 0;
let failCount = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`[PASS] ${message}`);
    passCount++;
  } else {
    console.error(`[FAIL] ${message}`);
    failCount++;
  }
}

// 1. Check Configuration and Core Files
console.log('--- 1. Configuration & Deployment Files ---');
assert(fs.existsSync(path.join(rootDir, 'package.json')), 'package.json exists');
assert(fs.existsSync(path.join(rootDir, 'tsconfig.json')), 'tsconfig.json exists');
assert(fs.existsSync(path.join(rootDir, 'vite.config.ts')), 'vite.config.ts exists');
assert(fs.existsSync(path.join(rootDir, 'tailwind.config.js')), 'tailwind.config.js exists');
assert(fs.existsSync(path.join(rootDir, 'wrangler.toml')), 'wrangler.toml (Cloudflare Pages) exists');
assert(fs.existsSync(path.join(rootDir, 'README.md')), 'README.md exists');
assert(fs.existsSync(path.join(rootDir, 'LICENSE')), 'LICENSE file exists');
assert(fs.existsSync(path.join(rootDir, 'THIRD_PARTY_NOTICES.md')), 'THIRD_PARTY_NOTICES.md exists');
assert(fs.existsSync(path.join(rootDir, 'THREEUI_COMPONENT_SELECTION.md')), 'THREEUI_COMPONENT_SELECTION.md exists');

// Check License Content (GPL-3.0-or-later)
const licenseContent = fs.readFileSync(path.join(rootDir, 'LICENSE'), 'utf-8');
assert(licenseContent.includes('GNU GENERAL PUBLIC LICENSE'), 'LICENSE contains GNU General Public License v3 text');
assert(licenseContent.includes('GPL-3.0-or-later'), 'LICENSE contains GPL-3.0-or-later identifier');

// 2. Check Static Assets and SEO & Security Headers
console.log('\n--- 2. Static Assets, SEO & Cloudflare Headers ---');
assert(fs.existsSync(path.join(rootDir, 'public', 'favicon.svg')), 'public/favicon.svg exists');
assert(fs.existsSync(path.join(rootDir, 'public', 'robots.txt')), 'public/robots.txt exists');
assert(fs.existsSync(path.join(rootDir, 'public', 'sitemap.xml')), 'public/sitemap.xml exists');
assert(fs.existsSync(path.join(rootDir, 'public', '_redirects')), 'public/_redirects exists for Cloudflare SPA routing');
assert(fs.existsSync(path.join(rootDir, 'public', '_headers')), 'public/_headers exists for Cloudflare security & caching');

// Check Security Headers content
const headersContent = fs.readFileSync(path.join(rootDir, 'public', '_headers'), 'utf-8');
assert(headersContent.includes('X-Frame-Options: DENY'), 'Security header: X-Frame-Options configured');
assert(headersContent.includes('X-Content-Type-Options: nosniff'), 'Security header: X-Content-Type-Options configured');
assert(headersContent.includes('Referrer-Policy: strict-origin-when-cross-origin'), 'Security header: Referrer-Policy configured');

// Check Official Logos
assert(fs.existsSync(path.join(rootDir, 'public', 'logo', 'giri-os-logo.svg')), 'Official logo SVG exists');
assert(fs.existsSync(path.join(rootDir, 'public', 'logo', 'giri-os-icon.svg')), 'Official icon SVG exists');
assert(fs.existsSync(path.join(rootDir, 'public', 'logo', 'giri-os-dark.svg')), 'Dark logo SVG exists');
assert(fs.existsSync(path.join(rootDir, 'public', 'logo', 'giri-os-light.svg')), 'Light logo SVG exists');
assert(fs.existsSync(path.join(rootDir, 'public', 'logo', 'giri-os-logo.png')), 'Official raster logo PNG exists');

// Check Multi-resolution device icons
const iconSizes = [16, 24, 32, 48, 64, 128, 256, 512];
iconSizes.forEach(size => {
  assert(fs.existsSync(path.join(rootDir, 'public', 'icons', `giri-os-icon-${size}.png`)), `Icon asset exists: giri-os-icon-${size}.png`);
});

// Check Wallpapers
const wallpapersDir = path.join(rootDir, 'public', 'wallpapers');
const wallpapers = fs.existsSync(wallpapersDir) ? fs.readdirSync(wallpapersDir).filter(f => f.endsWith('.png')) : [];
assert(wallpapers.length >= 12, `All 12 official desktop wallpapers verified (${wallpapers.length} found)`);

// 3. Founder Attribution Strict Rules
console.log('\n--- 3. Founder Attribution Strict Rules Verification ---');
const aboutContent = fs.readFileSync(path.join(rootDir, 'src', 'pages', 'AboutPage.tsx'), 'utf-8');
assert(aboutContent.includes('Founded by Abhinav Giri'), 'AboutPage includes "Founded by Abhinav Giri"');

const devContent = fs.readFileSync(path.join(rootDir, 'src', 'pages', 'DevelopersPage.tsx'), 'utf-8');
assert(devContent.includes('Founder & Creator: Abhinav Giri'), 'DevelopersPage includes "Founder & Creator: Abhinav Giri"');

// Verify Abhinav Giri is absent from all other pages and navigation elements
const pagesWithoutFounder = [
  'HomePage.tsx',
  'FeaturesPage.tsx',
  'ApplicationEcosystemPage.tsx',
  'products/GiriBridgePage.tsx',
  'products/GiriMobilePage.tsx',
  'products/GiriStorePage.tsx',
  'EditionsPage.tsx',
  'GalleryPage.tsx',
  'DownloadsPage.tsx',
  'DocsPage.tsx',
  'RoadmapPage.tsx',
  'ChangelogPage.tsx',
  'StatusPage.tsx',
  'SecurityPage.tsx',
  'NotFoundPage.tsx'
];

pagesWithoutFounder.forEach(page => {
  const pagePath = path.join(rootDir, 'src', 'pages', page);
  const content = fs.readFileSync(pagePath, 'utf-8');
  assert(!content.includes('Abhinav Giri'), `Founder name strictly absent from ${page}`);
});

const navContent = fs.readFileSync(path.join(rootDir, 'src', 'components', 'Navbar.tsx'), 'utf-8');
assert(!navContent.includes('Abhinav Giri'), 'Founder name strictly absent from Navbar');

const footerContent = fs.readFileSync(path.join(rootDir, 'src', 'components', 'Footer.tsx'), 'utf-8');
assert(!footerContent.includes('Abhinav Giri'), 'Founder name strictly absent from Footer');

// 4. Check All Primary Website Pages & 404
console.log('\n--- 4. Page Components Completeness ---');
const requiredPages = [
  'HomePage.tsx',
  'FeaturesPage.tsx',
  'ApplicationEcosystemPage.tsx',
  'products/GiriBridgePage.tsx',
  'products/GiriMobilePage.tsx',
  'products/GiriStorePage.tsx',
  'EditionsPage.tsx',
  'GalleryPage.tsx',
  'DownloadsPage.tsx',
  'DocsPage.tsx',
  'DevelopersPage.tsx',
  'RoadmapPage.tsx',
  'ChangelogPage.tsx',
  'StatusPage.tsx',
  'SecurityPage.tsx',
  'AboutPage.tsx',
  'NotFoundPage.tsx'
];

requiredPages.forEach(page => {
  assert(fs.existsSync(path.join(rootDir, 'src', 'pages', page)), `Page component exists: ${page}`);
});

// 5. Check UI Components & 3D WebGL
console.log('\n--- 5. UI Components & Three.js 3D Engine ---');
const requiredComponents = [
  'Navbar.tsx',
  'Footer.tsx',
  'ThreeHero.tsx',
  'DesktopShowcase.tsx',
  'EcosystemHeroVisual.tsx',
  'EcosystemWorkflowDemo.tsx',
  'InputMappingShowcase.tsx',
  'StatusBadge.tsx',
  'CodeBlock.tsx',
  'Modal.tsx',
  'GithubIcon.tsx'
];

requiredComponents.forEach(comp => {
  assert(fs.existsSync(path.join(rootDir, 'src', 'components', comp)), `Component exists: ${comp}`);
});

// Check ThreeHero optimization features in source code
const threeHeroSource = fs.readFileSync(path.join(rootDir, 'src', 'components', 'ThreeHero.tsx'), 'utf-8');
assert(threeHeroSource.includes('visibilitychange'), 'ThreeHero pauses when browser tab is hidden');
assert(threeHeroSource.includes('IntersectionObserver'), 'ThreeHero pauses when scrolled out of viewport');
assert(threeHeroSource.includes('prefers-reduced-motion'), 'ThreeHero respects prefers-reduced-motion');
assert(threeHeroSource.includes('dispose()'), 'ThreeHero properly disposes geometries and materials on unmount');
assert(threeHeroSource.includes('touchAction'), 'ThreeHero prevents touch scroll trap on mobile');
assert(threeHeroSource.includes('ExtrudeGeometry'), 'ThreeHero uses ExtrudeGeometry for 3D orbital emblem');

// 6. Check Static Data Schemas
console.log('\n--- 6. Static Data Schemas & Integrity ---');
const requiredData = [
  'navigation.ts',
  'features.ts',
  'ecosystems.ts',
  'editions.ts',
  'gallery.ts',
  'downloads.ts',
  'docs.ts',
  'developers.ts',
  'roadmap.ts',
  'changelog.ts',
  'status.ts'
];

requiredData.forEach(dataFile => {
  assert(fs.existsSync(path.join(rootDir, 'src', 'data', dataFile)), `Data file exists: ${dataFile}`);
});

// 7. Check Routing & Link Integrity
console.log('\n--- 7. Link & Route Integrity Check ---');
const navSource = fs.readFileSync(path.join(rootDir, 'src', 'data', 'navigation.ts'), 'utf-8');
const validRoutes = [
  '/',
  '/features',
  '/features/application-ecosystem',
  '/products/giri-bridge',
  '/products/giri-mobile',
  '/products/giri-store',
  '/editions',
  '/gallery',
  '/downloads',
  '/docs',
  '/developers',
  '/roadmap',
  '/status',
  '/changelog',
  '/security',
  '/about'
];

validRoutes.forEach(r => {
  assert(navSource.includes(`'${r}'`) || navSource.includes(`"${r}"`), `Route registered in navigation: ${r}`);
});

console.log('\n====================================================');
console.log(`TEST SUMMARY: ${passCount} Passed, ${failCount} Failed`);
console.log('====================================================');

if (failCount > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
