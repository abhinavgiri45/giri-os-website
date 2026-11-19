import http from 'http';

http.get('http://127.0.0.1:4173/', (res) => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    console.log('--- BROWSER TAB & FAVICON METADATA AUDIT ---');
    console.log('HTTP Status:', res.statusCode);
    const titleMatch = html.match(/<title>(.*?)<\/title>/);
    console.log('Page Title:', titleMatch ? titleMatch[1] : 'NOT FOUND');
    
    const iconRegex = /<link[^>]+rel=["'](?:icon|apple-touch-icon|manifest)["'][^>]*>/gi;
    const icons = html.match(iconRegex) || [];
    console.log(`Found ${icons.length} favicon/icon declarations:`);
    icons.forEach(tag => console.log('  ' + tag));
  });
});
