import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '..', 'dist');

console.log('====================================================');
console.log('GIRI OS WEBSITE — PRODUCTION OUTPUT VERIFIER');
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

// 1. Static dist asset existence
console.log('--- 1. Checking dist/ Output Directory ---');
assert(fs.existsSync(distDir), 'dist/ directory exists');
assert(fs.existsSync(path.join(distDir, 'index.html')), 'dist/index.html exists');
assert(fs.existsSync(path.join(distDir, '_redirects')), 'dist/_redirects exists');
assert(fs.existsSync(path.join(distDir, '_headers')), 'dist/_headers exists');
assert(fs.existsSync(path.join(distDir, 'robots.txt')), 'dist/robots.txt exists');
assert(fs.existsSync(path.join(distDir, 'sitemap.xml')), 'dist/sitemap.xml exists');
assert(fs.existsSync(path.join(distDir, 'favicon.svg')), 'dist/favicon.svg exists');
assert(fs.existsSync(path.join(distDir, 'logo', 'giri-os-logo.svg')), 'dist/logo/giri-os-logo.svg exists');
assert(fs.existsSync(path.join(distDir, 'wallpapers', 'giri-origin.png')), 'dist/wallpapers/giri-origin.png exists');

// 2. Measure Dist Bundle Sizes
console.log('\n--- 2. Production Bundle Size Budget Check ---');
const assetsDir = path.join(distDir, 'assets');
const assetFiles = fs.readdirSync(assetsDir);

let totalJsSize = 0;
let totalCssSize = 0;

assetFiles.forEach(file => {
  const stat = fs.statSync(path.join(assetsDir, file));
  if (file.endsWith('.js')) {
    totalJsSize += stat.size;
    console.log(`  JS: ${file} (${(stat.size / 1024).toFixed(1)} KB)`);
  } else if (file.endsWith('.css')) {
    totalCssSize += stat.size;
    console.log(`  CSS: ${file} (${(stat.size / 1024).toFixed(1)} KB)`);
  }
});

console.log(`\n  Total JS: ${(totalJsSize / 1024).toFixed(1)} KB`);
console.log(`  Total CSS: ${(totalCssSize / 1024).toFixed(1)} KB`);

// Assert budgets
assert(totalCssSize < 100 * 1024, `CSS size budget passed (<100KB, actual: ${(totalCssSize / 1024).toFixed(1)} KB)`);
assert(totalJsSize < 900 * 1024, `JS size budget passed (<900KB with Three.js, actual: ${(totalJsSize / 1024).toFixed(1)} KB)`);

// 3. Spin up lightweight HTTP server simulating Cloudflare Pages with SPA redirect
console.log('\n--- 3. Testing Simulated Edge Server HTTP Requests ---');

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
  '.json': 'application/json'
};

const server = http.createServer((req, res) => {
  const urlPath = req.url.split('?')[0];
  let filePath = path.join(distDir, urlPath);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    // Cloudflare SPA fallback: serve index.html
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(path.join(distDir, 'index.html')).pipe(res);
  }
});

server.listen(4199, '127.0.0.1', async () => {
  console.log('Simulated production server listening on http://127.0.0.1:4199');

  const testEndpoints = [
    { url: 'http://127.0.0.1:4199/', expectedStatus: 200, checkBody: 'Giri OS' },
    { url: 'http://127.0.0.1:4199/features', expectedStatus: 200, checkBody: 'Giri OS' },
    { url: 'http://127.0.0.1:4199/docs', expectedStatus: 200, checkBody: 'Giri OS' },
    { url: 'http://127.0.0.1:4199/downloads', expectedStatus: 200, checkBody: 'Giri OS' },
    { url: 'http://127.0.0.1:4199/status', expectedStatus: 200, checkBody: 'Giri OS' },
    { url: 'http://127.0.0.1:4199/robots.txt', expectedStatus: 200, checkBody: 'User-agent' },
    { url: 'http://127.0.0.1:4199/sitemap.xml', expectedStatus: 200, checkBody: 'urlset' },
    { url: 'http://127.0.0.1:4199/logo/giri-os-logo.svg', expectedStatus: 200, checkBody: '<svg' },
    { url: 'http://127.0.0.1:4199/favicon.svg', expectedStatus: 200, checkBody: '<svg' }
  ];

  for (const ep of testEndpoints) {
    try {
      const response = await fetch(ep.url);
      const body = await response.text();
      assert(
        response.status === ep.expectedStatus && body.includes(ep.checkBody),
        `Endpoint: ${ep.url} (Status: ${response.status}, matched: "${ep.checkBody}")`
      );
    } catch (err) {
      assert(false, `Endpoint failed: ${ep.url} - ${err.message}`);
    }
  }

  server.close(() => {
    console.log('\n====================================================');
    console.log(`PRODUCTION VERIFICATION SUMMARY: ${passCount} Passed, ${failCount} Failed`);
    console.log('====================================================');

    if (failCount > 0) {
      process.exitCode = 1;
    } else {
      process.exitCode = 0;
    }
  });
});
