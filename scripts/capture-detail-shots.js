import { execFileSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outDir = path.resolve(__dirname, '../public/screenshots/after');

const shots = [
  { name: 'after_header_navbar.png', url: 'http://127.0.0.1:4173/', size: '1920,260' },
  { name: 'after_ecosystem_hub.png', url: 'http://127.0.0.1:4173/features/application-ecosystem', size: '1920,1080' },
  { name: 'after_developers_portal.png', url: 'http://127.0.0.1:4173/developers', size: '1920,1080' }
];

shots.forEach(s => {
  const dest = path.join(outDir, s.name);
  console.log(`[Detail Shot] ${s.name} -> ${s.url}`);
  try {
    execFileSync(CHROME, [
      '--headless=new',
      '--disable-gpu',
      `--screenshot=${dest}`,
      `--window-size=${s.size}`,
      '--virtual-time-budget=2000',
      s.url
    ], { stdio: 'ignore' });
    console.log(`[OK] Saved ${s.name}`);
  } catch (e) {
    console.error(`[Error] ${s.name}:`, e.message);
  }
});
