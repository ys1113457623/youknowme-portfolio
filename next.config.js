/** @type {import('next').NextConfig} */
const dns = require("dns");

dns.setDefaultResultOrder("ipv4first")
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['coolsen.ru','cdn.sanity.io'],
  }
}

module.exports = nextConfig
