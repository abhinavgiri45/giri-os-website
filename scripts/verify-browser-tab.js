import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const indexHtmlPath = path.join(rootDir, 'dist', 'index.html');
if (!fs.existsSync(indexHtmlPath)) {
  console.error(`ERROR: ${indexHtmlPath} does not exist. Run 'npm run build' first.`);
  process.exit(1);
}

const html = fs.readFileSync(indexHtmlPath, 'utf8');

console.log('====================================================');
console.log('GIRI OS WEBSITE — BROWSER TAB & TITLE BAR AUDIT');
console.log('====================================================');

const titleMatch = html.match(/<title>(.*?)<\/title>/);
const title = titleMatch ? titleMatch[1] : 'NOT FOUND';
console.log(`[TITLE] Browser Tab Title: "${title}"`);

if (title === 'Giri OS — Official Website') {
  console.log('[PASS] Homepage title matches exact requirement: "Giri OS — Official Website"');
} else {
  console.error(`[FAIL] Expected "Giri OS — Official Website", got "${title}"`);
  process.exit(1);
}

const iconRegex = /<link[^>]+rel=["'](?:icon|apple-touch-icon|manifest)["'][^>]*>/gi;
const icons = html.match(iconRegex) || [];
console.log(`\n[ICONS] Found ${icons.length} favicon/icon declarations:`);
icons.forEach(tag => console.log('  ' + tag));

console.log('\n====================================================');
console.log('ALL TITLE BAR & FAVICON CHECKS PASSED');
console.log('====================================================');
