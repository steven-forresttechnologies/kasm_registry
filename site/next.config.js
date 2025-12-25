/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: "Teja's Kasm Registry",
    description: 'My Custom Images for Kasm Workspaces',
    icon: '/img/logo.svg',
    listUrl: 'https://registry.tejaswaroop.com/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
