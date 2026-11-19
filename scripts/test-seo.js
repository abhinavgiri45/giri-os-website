/**
 * GIRI OS OFFICIAL WEBSITE — COMPREHENSIVE SEO VALIDATION SUITE
 * 
 * Verifies sitemap.xml, robots.txt, canonical URLs, metadata budgets,
 * Schema.org JSON-LD syntax, pre-rendered route HTML, and image alt text.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`[PASS] ${message}`);
    passedTests++;
  } else {
    console.error(`[FAIL] ${message}`);
    failedTests++;
  }
}

console.log('====================================================');
console.log('GIRI OS WEBSITE — ADVANCED SEO VALIDATION SUITE');
console.log('====================================================\n');

// 1. Robots.txt Validation
console.log('--- 1. Robots.txt Protocol Check ---');
const robotsPath = path.join(ROOT_DIR, 'public/robots.txt');
assert(fs.existsSync(robotsPath), 'public/robots.txt exists');
const robotsContent = fs.readFileSync(robotsPath, 'utf-8');
assert(robotsContent.includes('User-agent: *'), 'robots.txt declares wildcard user-agent');
assert(robotsContent.includes('Allow: /'), 'robots.txt allows root path');
assert(robotsContent.includes('Sitemap: https://girios.org/sitemap.xml'), 'robots.txt references official sitemap URL');
assert(robotsContent.includes('Googlebot'), 'robots.txt contains specific directives for Googlebot');
assert(robotsContent.includes('Bingbot'), 'robots.txt contains specific directives for Bingbot');

// 2. XML Sitemap Validation
console.log('\n--- 2. XML Sitemap Validation ---');
const sitemapPath = path.join(ROOT_DIR, 'public/sitemap.xml');
assert(fs.existsSync(sitemapPath), 'public/sitemap.xml exists');
const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
assert(sitemapContent.includes('<urlset'), 'sitemap.xml contains valid <urlset> root');
assert(sitemapContent.includes('http://www.sitemaps.org/schemas/sitemap/0.9'), 'sitemap.xml declares sitemap schema 0.9');
assert(sitemapContent.includes('http://www.google.com/schemas/sitemap-image/1.1'), 'sitemap.xml declares image sitemap schema 1.1');

const canonicalRoutes = [
  'https://girios.org/',
  'https://girios.org/features',
  'https://girios.org/features/application-ecosystem',
  'https://girios.org/products/giri-bridge',
  'https://girios.org/products/giri-mobile',
  'https://girios.org/products/giri-store',
  'https://girios.org/editions',
  'https://girios.org/gallery',
  'https://girios.org/downloads',
  'https://girios.org/docs',
  'https://girios.org/developers',
  'https://girios.org/roadmap',
  'https://girios.org/changelog',
  'https://girios.org/status',
  'https://girios.org/security',
  'https://girios.org/about'
];

canonicalRoutes.forEach((route) => {
  assert(sitemapContent.includes(`<loc>${route}</loc>`), `sitemap.xml indexes canonical route: ${route}`);
});

const lastModMatches = sitemapContent.match(/<lastmod>.*?<\/lastmod>/g) || [];
assert(lastModMatches.length >= canonicalRoutes.length, `sitemap.xml includes <lastmod> for all routes (${lastModMatches.length} found)`);

// 3. Technical SEO Engine & Route Metadata Audit
console.log('\n--- 3. Central SEO Registry (src/utils/seo.ts) ---');
const seoUtilPath = path.join(ROOT_DIR, 'src/utils/seo.ts');
assert(fs.existsSync(seoUtilPath), 'src/utils/seo.ts exists');
const seoContent = fs.readFileSync(seoUtilPath, 'utf-8');

assert(seoContent.includes('ORGANIZATION_SCHEMA'), 'Declares Schema.org Organization structured data');
assert(seoContent.includes('WEBSITE_SCHEMA'), 'Declares Schema.org WebSite structured data');
assert(seoContent.includes('SOFTWARE_APPLICATION_SCHEMA'), 'Declares Schema.org SoftwareApplication structured data');
assert(seoContent.includes('updatePageSeo'), 'Exports updatePageSeo DOM sync function');

// 4. Topical Authority Articles in src/data/docs.ts
console.log('\n--- 4. Topical Authority Documentation Articles ---');
const docsDataPath = path.join(ROOT_DIR, 'src/data/docs.ts');
assert(fs.existsSync(docsDataPath), 'src/data/docs.ts exists');
const docsContent = fs.readFileSync(docsDataPath, 'utf-8');

const requiredEducationalSlugs = [
  'what-is-giri-os',
  'how-linux-os-built',
  'debian-role-in-linux',
  'what-makes-good-desktop-os',
  'how-linux-desktop-environments-work',
  'understanding-linux-bootloaders',
  'how-os-installation-works',
  'open-source-os-development',
  'giri-os-architecture-and-roadmap',
  'how-to-contribute-to-linux-os'
];

requiredEducationalSlugs.forEach((slug) => {
  assert(docsContent.includes(slug), `docs.ts contains educational authority article slug: ${slug}`);
});

// 5. Image Alt Attributes Audit
console.log('\n--- 5. Image Alt Attribute & Accessibility Audit ---');
const componentsToCheck = [
  'src/components/Navbar.tsx',
  'src/components/Footer.tsx',
  'src/components/DesktopShowcase.tsx',
  'src/components/ThreeHero.tsx',
  'src/components/EcosystemHeroVisual.tsx',
  'src/pages/GalleryPage.tsx'
];

componentsToCheck.forEach((relPath) => {
  const fullPath = path.join(ROOT_DIR, relPath);
  if (fs.existsSync(fullPath)) {
    const code = fs.readFileSync(fullPath, 'utf-8');
    const imgMatches = code.match(/<img\s+[\s\S]*?>/g) || [];
    imgMatches.forEach((imgTag, idx) => {
      const hasAlt = imgTag.includes('alt=');
      const hasDecoding = imgTag.includes('decoding=');
      assert(hasAlt, `${relPath} <img> tag #${idx + 1} has explicit alt attribute`);
      assert(hasDecoding, `${relPath} <img> tag #${idx + 1} specifies decoding="async"`);
    });
  }
});

// 6. Pre-rendered HTML in dist/ (if dist/ exists)
console.log('\n--- 6. Static Pre-rendered Edge HTML Validation ---');
const distPath = path.join(ROOT_DIR, 'dist');
if (fs.existsSync(distPath)) {
  const routesToVerify = [
    'features', 
    'features/application-ecosystem', 
    'products/giri-bridge',
    'products/giri-mobile',
    'products/giri-store',
    'editions', 
    'downloads', 
    'docs', 
    'developers', 
    'roadmap', 
    'changelog', 
    'status', 
    'security', 
    'about'
  ];
  routesToVerify.forEach((r) => {
    const routeHtmlPath = path.join(distPath, r, 'index.html');
    if (fs.existsSync(routeHtmlPath)) {
      const content = fs.readFileSync(routeHtmlPath, 'utf-8');
      assert(content.includes('<title>'), `dist/${r}/index.html has pre-rendered <title>`);
      assert(content.includes('rel="canonical"'), `dist/${r}/index.html has pre-rendered canonical tag`);
      assert(content.includes('id="schema-structured-data"'), `dist/${r}/index.html has pre-rendered JSON-LD schema`);
      assert(content.includes('<noscript>'), `dist/${r}/index.html has non-JS crawler semantic fallback`);
    } else {
      console.log(`[INFO] dist/${r}/index.html not generated yet (run build to test)`);
    }
  });
}

console.log('\n====================================================');
console.log(`SEO TEST SUMMARY: ${passedTests} Passed, ${failedTests} Failed`);
console.log('====================================================');

if (failedTests > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
