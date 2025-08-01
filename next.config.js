/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add or update the transpilePackages option to ensure compatibility with client-side bundling
  transpilePackages: [
    '@supabase/supabase-js',
    '@supabase/realtime-js',
    '@supabase/ssr',
    'ws',
    'isows',
    // Add other packages here if you encounter similar errors with them
  ],
  // Simplified config for WebContainer compatibility
  experimental: {
    esmExternals: 'loose'
  },
  webpack: (config, { isServer }) => {
    // Disable webpack caching for WebContainer stability
    config.cache = false;
    
    // Add WebContainer-specific configurations
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }

    return config;
  },
};

module.exports = nextConfig;