// Renders the site logo mark (same artwork as the header in components/Nav.tsx) to public/images/logo-mark.png for emails (email clients do not show SVG).
const sharp = require('sharp');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 40 40">
  <defs><linearGradient id="g" x1="0" y1="1" x2="1" y2="0">
    <stop offset="0%" stop-color="#0369a1"/><stop offset="55%" stop-color="#0ea5e9"/><stop offset="100%" stop-color="#f97316"/>
  </linearGradient></defs>
  <rect width="40" height="40" rx="10" fill="url(#g)"/>
  <g transform="translate(10 10)" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="10" cy="10" r="7"/>
    <path d="M12.5 3.5L9 10L12.5 10L7.5 16.5"/>
  </g>
</svg>`;
sharp(Buffer.from(svg)).png().toFile('public/images/logo-mark.png').then((i) => console.log('logo-mark.png', i.width + 'x' + i.height, i.size + ' bytes'));
