/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // hostname "admin.langarafinagradshow.com"
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.langarafinagradshow.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  basePath: '/2024',
}

module.exports = nextConfig
