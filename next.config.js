/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.digikala.com','dkstatics-public.digikala.com','dkstatics-public-2.digikala.com','dkms.digikala.com' , 'dkstatics-private.digikala.com'],
  },
  experimental: {
    outputStandalone: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
