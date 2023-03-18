/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // hostname "admin.langarafinagradshow.com"
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.langarafinagradshow.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
