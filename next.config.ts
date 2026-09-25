import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
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
