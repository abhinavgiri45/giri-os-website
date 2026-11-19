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
assert(fs.existsSync(path.join(rootDir, 'LICENSE')), 'LICENSE (MIT) exists');
assert(fs.existsSync(path.join(rootDir, 'THREEUI_COMPONENT_SELECTION.md')), 'THREEUI_COMPONENT_SELECTION.md exists');

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
assert(fs.existsSync(path.join(rootDir, 'public', 'logo', 'giri-os-monochrome.svg')), 'Monochrome logo SVG exists');

// Check Wallpapers
const wallpapersDir = path.join(rootDir, 'public', 'wallpapers');
const wallpapers = fs.existsSync(wallpapersDir) ? fs.readdirSync(wallpapersDir).filter(f => f.endsWith('.png')) : [];
assert(wallpapers.length >= 12, `All 12 official desktop wallpapers verified (${wallpapers.length} found)`);

// 3. Check All Primary Website Pages & 404
console.log('\n--- 3. Page Components Completeness ---');
const requiredPages = [
  'HomePage.tsx',
  'FeaturesPage.tsx',
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

// 4. Check UI Components & 3D WebGL
console.log('\n--- 4. UI Components & Three.js 3D Engine ---');
const requiredComponents = [
  'Navbar.tsx',
  'Footer.tsx',
  'ThreeHero.tsx',
  'DesktopShowcase.tsx',
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

// 5. Check Static Data Schemas
console.log('\n--- 5. Static Data Schemas & Integrity ---');
const requiredData = [
  'navigation.ts',
  'features.ts',
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

// Check Routing & Link Integrity
console.log('\n--- 6. Link & Route Integrity Check ---');
const navSource = fs.readFileSync(path.join(rootDir, 'src', 'data', 'navigation.ts'), 'utf-8');
const validRoutes = [
  '/',
  '/features',
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
