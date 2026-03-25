/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/kiosko',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
