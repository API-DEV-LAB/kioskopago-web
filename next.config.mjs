/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
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
