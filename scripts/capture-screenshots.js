import { execFileSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const mode = process.argv[2] || 'before';
const outDir = path.resolve(__dirname, `../public/screenshots/${mode}`);

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const targets = [
  { name: `${mode}_desktop_homepage.png`, url: 'http://127.0.0.1:4173/', size: '1920,1080' },
  { name: `${mode}_mobile_homepage.png`, url: 'http://127.0.0.1:4173/', size: '390,844' },
  { name: `${mode}_giri_bridge.png`, url: 'http://127.0.0.1:4173/products/giri-bridge', size: '1920,1080' },
  { name: `${mode}_giri_mobile.png`, url: 'http://127.0.0.1:4173/products/giri-mobile', size: '1920,1080' },
  { name: `${mode}_giri_store.png`, url: 'http://127.0.0.1:4173/products/giri-store', size: '1920,1080' },
  { name: `${mode}_about.png`, url: 'http://127.0.0.1:4173/about', size: '1920,1080' },
  { name: `${mode}_features.png`, url: 'http://127.0.0.1:4173/features', size: '1920,1080' }
];

console.log(`Capturing ${mode} screenshots...`);

for (const target of targets) {
  const dest = path.join(outDir, target.name);
  console.log(`[Capture] ${target.name} (${target.size}) -> ${target.url}`);
  try {
    execFileSync(CHROME, [
      '--headless=new',
      '--disable-gpu',
      `--screenshot=${dest}`,
      `--window-size=${target.size}`,
      '--virtual-time-budget=2000',
      target.url
    ], { stdio: 'ignore' });
    console.log(`[OK] Saved: ${dest} (${fs.statSync(dest).size} bytes)`);
  } catch (err) {
    console.error(`[Error] Failed to capture ${target.name}:`, err.message);
  }
}

console.log('Capture finished.');
