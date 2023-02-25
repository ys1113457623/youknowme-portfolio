/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['coolsen.ru'],
  }
}

module.exports = nextConfig
