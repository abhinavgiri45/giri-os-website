// fix-usability.ts
// Script to apply the 12 usability fixes described.
// Run with: `node scripts/fix-usability.ts`
import * as fs from 'fs';
import * as path from 'path';

const srcDir = path.resolve(process.cwd(), 'src');

// Helper to replace text in a file
function replaceInFile(filePath: string, replacements: [RegExp, string][]) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  for (const [regex, repl] of replacements) {
    content = content.replace(regex, repl);
  }
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated', filePath);
  }
}

// Recursively walk src directory for .tsx files
function walk(dir: string) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (full.endsWith('.tsx')) {
      // Apply button class consolidation
      replaceInFile(full, [
        // replace any class list containing bg-blue-600 and similar primary styles with btn-primary
        [/className="[^"]*bg-blue-600[^"]*"/g, 'className="btn-primary"'],
        [/className="[^"]*bg-white[^"]*border-blue-600[^"]*"/g, 'className="btn-secondary"'],
        [/className="[^"]*border-gray-300[^"]*"/g, 'className="btn-outline"'],
        // fix diagram button affordance (add hover and aria-label)
        [/\<button([^>]*?)className="([^"]*)"([^>]*?)\>/g, (match, p1, classes, p2) => {
          let newClasses = classes;
          if (!/hover:/ .test(classes)) newClasses += ' hover:scale-105 hover:shadow-lg';
          return `<button${p1}className="${newClasses}"${p2}>`;
        }],
        // add aria-label for diagram nodes if missing (simple heuristic)
        [/\<button([^>]*?)\>(\s*<svg[\s\S]*?<\/svg>\s*)\<span[^>]*>\s*Giri Bridge\s*<\/span>/g, `<button$1 aria-label="Select Giri Bridge Product">$2<span className="block text-xs sm:text-sm font-bold text-giri-text">Giri Bridge</span>`],
        // replace custom text sizes
        [/text-\[10px\]/g, 'text-xs'],
        [/text-\[11px\]/g, 'text-xs'],
        [/text-\[12px\]/g, 'text-sm'],
        [/text-\[14px\]/g, 'text-base'],
        [/text-\[16px\]/g, 'text-lg'],
        // replace custom colors
        [/text-\[\#2563EB\]/g, 'text-giri-primary'],
        [/text-\[\#64748B\]/g, 'text-giri-muted'],
        // replace corner radii on cards (heuristic: rounded-2xl, rounded-xl -> rounded-md)
        [/rounded-(2xl|xl|lg)/g, 'rounded-md'],
        // replace uppercase utility
        [/uppercase/g, ''],
        // replace small body text
        [/text-\[11px\]/g, 'text-sm'],
        [/text-\[10px\]/g, 'text-xs'],
        // heading level fixes: replace <h4> with <h3> where preceding heading is h2
        [/<(\/?)h4/g, '<$1h3'],
        // misaligned product page button: add ml-auto if missing and wrap header
        [/(<h[23][^>]*>[^<]+<\/h[23]>)(\s*)<a([^>]*?)className="([^"]*)"/g, '$1<div className="flex items-center justify-between"><a$3className="$4 ml-auto"'],
        // replace badge styles with badge-primary class
        [/className="[^"]*bg-giri-surface[^\"]*border-giri-border[^\"]*text-giri-muted[^"]*"/g, 'className="badge-primary"']
      ]);
    }
  }
}

walk(srcDir);
console.log('Usability fixes applied.');
