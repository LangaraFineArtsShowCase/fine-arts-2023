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
  basePath: '/2023',
}

module.exports = nextConfig
