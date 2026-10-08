import React from 'react';
import Link from 'next/link';

// "Ready to buy?" block for the older guides (posts that are not rich posts). It adds buyer-intent keywords from the Semrush AU bank
// (T = Transactional, C = Commercial, volumes/month) and links the guide to the matching money page. Rich posts have their own buying section.
interface Bucket { heading: string; text: string; links: { href: string; label: string }[]; test: RegExp; }

const BUCKETS: Bucket[] = [
  {
    test: /battery|batteries|charger|cells|72v|60v|range|controller|torp/,
    heading: 'E Bike Parts Australia: Batteries and Chargers for Sale', // e bike parts australia 90 T; electric bike parts australia 110 C; e bike batteries 480 C
    text: 'Looking for e bike parts Australia riders can rely on? Shop e bike batteries, chargers and controllers with fitment confirmed before you buy. Our electric bike parts Australia range ships nationwide, with free freight over $1,500.',
    links: [{ href: '/electric-bike-batteries/', label: 'Electric bike batteries' }, { href: '/accessories/', label: 'E bike parts' }],
  },
  {
    test: /sur-?ron|surron/,
    heading: 'Sur Ron Ebike for Sale in Australia', // sur ron ebike for sale 140 T; sur ron electric bike price 140 T; surrons for sale 110 T
    text: 'Ready to buy? See the Sur Ron electric bike price and every Sur Ron ebike for sale on our Sur-Ron page, including Surrons for sale with specs and warranty shown. Free freight applies to orders over $1,500.',
    links: [{ href: '/electric-dirt-bikes/sur-ron/', label: 'Sur-Ron for sale' }, { href: '/electric-dirt-bikes/cheap/', label: 'Cheap electric dirt bikes' }],
  },
  {
    test: /e-ride/,
    heading: 'E Ride Pro Australia: Bikes for Sale', // e ride pro australia 170 C
    text: 'Compare the E-Ride Pro range with prices and specs on one page. E Ride Pro Australia buyers can add a bike to the cart online, and orders over $1,500 ship free.',
    links: [{ href: '/brands/e-ride-pro/', label: 'E-Ride Pro Australia' }, { href: '/electric-dirt-bikes/', label: 'Electric dirt bikes for sale' }],
  },
  {
    test: /kids|age|children|teen|junior|oset/,
    heading: 'Electric Dirt Bike for Kids: Bikes for Sale', // electric dirt bike for kids 320 C; kids electric dirt bike 590 C
    text: 'Ready to choose a kids electric dirt bike? Compare age range, top speed and battery on each listing, and buy online with free freight over $1,500. Always supervise young riders.',
    links: [{ href: '/electric-dirt-bikes/kids/', label: 'Electric dirt bikes for kids' }, { href: '/electric-balance-bikes/', label: 'Electric balance bikes' }],
  },
  {
    test: /pit-bike/,
    heading: 'Electric Pit Bike for Sale in Australia', // electric pit bike 720 C; electric pit bike for sale 20
    text: 'See every electric pit bike for sale with prices, motor power and battery shown. Free freight applies to orders over $1,500.',
    links: [{ href: '/electric-pit-bikes/', label: 'Electric pit bikes' }, { href: '/electric-dirt-bikes/kids/', label: 'Electric dirt bikes for kids' }],
  },
  {
    test: /motorcycle|motorbike|motor-bike|moped|road-legal|registration|licence|insurance/,
    heading: 'Electric Motorcycle for Sale in Australia', // electric motorcycle for sale 260 T; electric motorbikes for sale 210 T; electric motorbike for sale 140 T
    text: 'Browse an electric motorcycle for sale or compare electric motorbikes for sale, from road-focused models to off-road bikes. Check your state rules for registration and licence, then order online with free freight over $1,500.',
    links: [{ href: '/electric-motorcycles/', label: 'Electric motorcycles' }, { href: '/electric-motor-bikes/', label: 'Electric motorbikes' }],
  },
  {
    test: /ebike|e-bike|fat|rtr|commut|best-electric-bike|bike-australia/,
    heading: 'Electric Bikes for Sale in Australia', // electric bikes for sale 1,600 T; electric bike price 480 T; buy electric bike australia 90 T
    text: 'Ready to buy? Compare electric bikes for sale with the electric bike price shown on every listing, from commuter e bikes to fat tyre cruisers. You can buy electric bike Australia-wide online and orders over $1,500 ship free.',
    links: [{ href: '/electric-bikes/', label: 'Electric bikes for sale' }, { href: '/electric-bikes/cheap/', label: 'Cheap electric bikes' }],
  },
  {
    test: /cost|price|finance|payid|crypto/,
    heading: 'Electric Bike Price and Ways to Pay', // electric bike price 480 T; e bike price 320 T; electric dirt bike for sale 170 T
    text: 'Every electric dirt bike for sale on our shop shows its price up front, and you save 10% when you pay by crypto or PayID. Compare the electric bike price across models before you buy.',
    links: [{ href: '/shop/', label: 'Shop all models' }, { href: '/electric-dirt-bikes/cheap/', label: 'Cheap electric dirt bikes' }],
  },
];

const DEFAULT: Omit<Bucket, 'test'> = {
  heading: 'Electric Dirt Bike for Sale in Australia', // electric dirt bike for sale 170 T; electric dirt bikes for sale 110 T; buy electric dirt bike 40 T
  text: 'Ready to buy? Browse every electric dirt bike for sale in Australia, compare electric dirt bikes for sale by power, battery and price, then buy electric dirt bike models online. Free freight applies to orders over $1,500.',
  links: [{ href: '/electric-dirt-bikes/', label: 'Electric dirt bikes for sale' }, { href: '/shop/', label: 'Shop all models' }],
};

export function BlogBuyBlock({ slug }: { slug: string }) {
  const b = BUCKETS.find((x) => x.test.test(slug)) ?? DEFAULT;
  return (
    <section aria-label="Buy now" className="mt-8 p-5 sm:p-6 rounded-2xl bg-sky-50 border border-sky-200 space-y-2">
      <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">{b.heading}</h2>
      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{b.text}</p>
      <p className="text-sm font-semibold">
        {b.links.map((l, i) => (
          <React.Fragment key={l.href}>
            {i > 0 && ' · '}
            <Link href={l.href} className="text-sky-700 hover:underline">{l.label}</Link>
          </React.Fragment>
        ))}
      </p>
    </section>
  );
}
