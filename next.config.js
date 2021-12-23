/** @type {import('next').NextConfig} */

module.exports = {
  experimental: { 
    esmExternals: true,
    outputStandalone: true,
  },

  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },

};
