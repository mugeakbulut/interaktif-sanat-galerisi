/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    unoptimized: true,  // Resim optimizasyonunu kapat
    domains: ['mugeakbulut.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mugeakbulut.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig