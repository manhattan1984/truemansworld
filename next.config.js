/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['woakwmdkqyfsikmmcwvu.supabase.co'],
  },
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig
