// 2026-10-29: Semrush gap keywords added to category copy (one owner per keyword) and links into the new posts.
const fs = require('fs');
const sub = (f, pairs) => {
  let t = fs.readFileSync(f, 'utf8');
  const crlf = t.includes('\r\n');
  t = t.replace(/\r\n/g, '\n');
  for (const [a, b] of pairs) { if (!t.includes(a)) throw new Error(f + ' missing: ' + a.slice(0, 60)); t = t.replace(a, b); }
  fs.writeFileSync(f, crlf ? t.replace(/\n/g, '\r\n') : t);
};
sub('src/config/category-secondary.ts', [
  // pit bikes: 'pit bikes' and 'pit bike'
  ["      `An electric pit bike suits paddocks, tracks and tight trails, with instant torque and low running costs. Compare wheel size, battery and top speed on each listing.`,\n      `Orders over $1,500 ship free from Mittagong NSW, with a 12-month Australian warranty.`,\n    ],\n    links: [\n      { href: '/electric-dirt-bikes/kids/', label: 'Electric dirt bikes for kids' },\n      { href: '/electric-dirt-bikes/', label: 'Electric dirt bikes' },\n    ],",
   "      `An electric pit bike suits paddocks, tracks and tight trails, with instant torque and low running costs. Compare wheel size, battery and top speed on each listing.`,\n      `Shopping for pit bikes? Every pit bike on this page is new and electric, from lightweight starters to the quickest 72V models, and each listing shows battery, weight and warranty.`,\n      `Orders over $1,500 ship free from Mittagong NSW, with a 12-month Australian warranty.`,\n    ],\n    links: [\n      { href: '/blog/ebox-dragster-electric-pit-bike-australia/', label: 'Ebox and Dragster pit bikes compared' },\n      { href: '/blog/rtr-lite-electric-pit-bike-comparison-australia/', label: 'RTR Lite vs Sport vs Alpha' },\n      { href: '/blog/electric-pit-bike-australia-guide/', label: 'Electric pitbike guide' },\n      { href: '/electric-dirt-bikes/kids/', label: 'Electric dirt bikes for kids' },\n      { href: '/electric-dirt-bikes/', label: 'Electric dirt bikes' },\n    ],"],
  // balance bikes: flight risk electric bike
  ["      `A balance bike teaches young riders balance and steering before they move on. Look for a low seat, a speed limit and a battery that fits the rider's age.`,\n      `Orders over $1,500 ship free from Mittagong NSW, with a 12-month Australian warranty.`,\n    ],",
   "      `A balance bike teaches young riders balance and steering before they move on. Look for a low seat, a speed limit and a battery that fits the rider's age.`,\n      `The Flight Risk electric bike range is listed here too. The FR101 is made for ages 4 to 7 and is $1,399, and the other Flight Risk models step up in size and price, so read each product page for the battery, motor and warranty.`,\n      `Orders over $1,500 ship free from Mittagong NSW, with a 12-month Australian warranty.`,\n    ],"],
  // sur-ron: surron australia
  ["      `The Light Bee X is the lightweight all-rounder, while the Ultra Bee adds power and battery for faster trail and track riding. Compare both on this page with prices and specs.`,\n      `Orders over $1,500 ship free from Mittagong NSW, with a 12-month Australian warranty.`,\n    ],\n    links: [\n      { href: '/electric-dirt-bikes/', label: 'All electric dirt bikes' },\n      { href: '/electric-dirt-bikes/cheap/', label: 'Cheap electric dirt bikes' },\n    ],",
   "      `The Light Bee X is the lightweight all-rounder, while the Ultra Bee adds power and battery for faster trail and track riding. Compare both on this page with prices and specs.`,\n      `Looking for Surron Australia stock? This page lists every Sur-Ron we sell, new, with an Australian warranty and delivery from Mittagong NSW.`,\n      `Orders over $1,500 ship free from Mittagong NSW, with a 12-month Australian warranty.`,\n    ],\n    links: [\n      { href: '/blog/surron-light-bee-x-vs-ultra-bee-vs-storm-bee/', label: 'Light Bee X vs Ultra Bee vs Storm Bee' },\n      { href: '/electric-dirt-bikes/', label: 'All electric dirt bikes' },\n      { href: '/electric-dirt-bikes/cheap/', label: 'Cheap electric dirt bikes' },\n    ],"],
  // rtr ebike
  ["      `RTR (Ready To Rip) electric bikes are built for off-road riding on private property and designated off-road areas. Compare the S Classic and the Pro by price and read each product page for specifications.`,",
   "      `RTR (Ready To Rip) electric bikes are built for off-road riding on private property and designated off-road areas. Compare the S Classic and the Pro by price and read each product page for specifications. If you are comparing RTR electric bikes with the pit bike models, see the RTR Lite, Sport and Alpha guide below.`,"],
  ["    links: [\n      { href: '/electric-bikes/', label: 'Electric bikes for sale' },\n      { href: '/electric-bikes/cheap/', label: 'Cheap electric bikes' },\n    ],\n  },\n  '/electric-motor-bikes/commuter-mopeds/': {",
   "    links: [\n      { href: '/blog/rtr-lite-electric-pit-bike-comparison-australia/', label: 'RTR Lite vs Sport vs Alpha' },\n      { href: '/electric-bikes/', label: 'Electric bikes for sale' },\n      { href: '/electric-bikes/cheap/', label: 'Cheap electric bikes' },\n    ],\n  },\n  '/electric-motor-bikes/commuter-mopeds/': {"],
]);
sub('src/config/seo.ts', [
  ["    keywords: 'electric pit bike for sale, electric pit bike, electric pit bikes, e pit bike, fast electric pit bike, pit bikes australia',\n    main: 'electric pit bike for sale',\n    primary: ['electric pit bike', 'electric pit bikes', 'e pit bike', 'fast electric pit bike', 'pit bikes australia'],",
   "    keywords: 'electric pit bike for sale, electric pit bike, electric pit bikes, e pit bike, fast electric pit bike, pit bikes australia, pit bikes, pit bike',\n    main: 'electric pit bike for sale',\n    primary: ['electric pit bike', 'electric pit bikes', 'e pit bike', 'fast electric pit bike', 'pit bikes australia', 'pit bikes', 'pit bike'],"],
]);
console.log('patched');
