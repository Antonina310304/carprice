/** @type {import('next').NextConfig} */
module.exports = {
  experimental: { esmExternals: true },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
