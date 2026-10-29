import type {NextConfig} from 'next';
import { RETIRED_POSTS } from './src/config/retired-posts';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // 2026-10-12 remap: tag pages whose phrase became a category keyword are retired and 301 to the owning category (no 404s, no cannibalisation).
  async redirects() {
    return [
      // 2026-10-29: thin legacy posts merged into the page that owns the same intent (see src/config/retired-posts.ts).
      ...Object.entries(RETIRED_POSTS).map(([slug, destination]) => ({ source: `/blog/${slug}`, destination, permanent: true })),
      // 2026-10-25: the Melbourne and Perth moped posts were merged (their keywords belong to the city pages) into one guide.
      { source: '/blog/electric-moped-melbourne-road-legal-guide', destination: '/blog/moped-e-scooter-electric-road-legal-guide/', permanent: true },
      { source: '/blog/electric-moped-perth-buyers-guide', destination: '/blog/moped-e-scooter-electric-road-legal-guide/', permanent: true },
      { source: '/blog/rtr-ebike-australia-review', destination: '/electric-motor-bikes/rtr-ebike/', permanent: true },
      { source: '/blog/rtr-ebike-vs-super-soco-cpx-commuter-comparison', destination: '/electric-motor-bikes/rtr-ebike/', permanent: true },
      { source: '/blog/tag/fast-electric-bikes', destination: '/blog/fast-electric-bikes-australia-fastest-e-bikes-by-category/', permanent: true },
      { source: '/blog/tag/fastest-e-bike-australia', destination: '/blog/fast-electric-bikes-australia-fastest-e-bikes-by-category/', permanent: true },
      { source: '/blog/tag/battery-electric-bicycle', destination: '/electric-bike-batteries/', permanent: true },
      { source: '/blog/tag/best-e-bikes-australia', destination: '/electric-motor-bikes/best-electric-bikes-australia/', permanent: true },
      { source: '/blog/tag/charger-for-e-bike', destination: '/accessories/', permanent: true },
      { source: '/blog/tag/childs-dirt-bike', destination: '/electric-dirt-bikes/kids/', permanent: true },
      { source: '/blog/tag/dirt-bike-for-kids', destination: '/electric-dirt-bikes/kids/', permanent: true },
      { source: '/blog/tag/e-bike-battery', destination: '/electric-bike-batteries/', permanent: true },
      { source: '/blog/tag/e-bike-chargers', destination: '/accessories/', permanent: true },
      { source: '/blog/tag/e-cycle-battery', destination: '/electric-bike-batteries/', permanent: true },
      { source: '/blog/tag/fat-tyre-electric-bike', destination: '/electric-fat-tyre-bikes/', permanent: true },
      { source: '/blog/tag/low-cost-electric-bike', destination: '/electric-bikes/cheap/', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        // CORS + correct Content-Type on all .well-known agent-discovery files
        source: '/.well-known/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Accept, Content-Type' },
        ],
      },
      {
        source: '/llms-full.txt',
        headers: [
          { key: 'Content-Type', value: 'text/markdown; charset=utf-8' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Vary', value: 'Accept' },
        ],
      },
      {
        // llms.txt served as text/markdown so agents get the right Content-Type
        source: '/llms.txt',
        headers: [
          { key: 'Content-Type', value: 'text/markdown; charset=utf-8' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Vary', value: 'Accept' },
        ],
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Allow access to remote image placeholder.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**', // This allows any path under the hostname
      },
    ],
  },
  output: 'standalone',
  trailingSlash: true,
  transpilePackages: ['motion'],
  webpack: (config, {dev}) => {
    // Resolve .ts/.tsx before .js/.jsx so site.ts is always preferred over site.js
    const exts: string[] = config.resolve.extensions ?? [];
    config.resolve.extensions = [
      '.ts', '.tsx',
      ...exts.filter((e: string) => e !== '.ts' && e !== '.tsx'),
    ];

    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modify—file watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
