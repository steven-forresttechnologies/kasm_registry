/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: "Forrest Technologies Kasm Registry",
    description: 'Custom Images for Kasm Workspaces',
    icon: '/img/logo.svg',
    listUrl: 'https://steven-forresttechnologies.github.io/kasm_registry/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  basePath: '/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
