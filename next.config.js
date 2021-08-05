//const withMDX = require('@next/mdx')()
const withMdxEnhanced = require('next-mdx-enhanced')
const withOptimizedImages = require('next-optimized-images')

// const withReactSvg = require("next-react-svg");
// const path = require("path");

module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  i18n: {
    locales: ['de', 'en', 'es', 'fr', 'pt-br'],
    defaultLocale: 'pt-br',
  },
  images: {
    domains: ['lh3.googleusercontent.com', 'media.graphcms.com'],
  },
  async redirects() {
    return [
      {
        source: '/shop/item',
        destination: '/shop',
        permanent: true,
      },
      {
        source: '/blog/:slug',
        destination: '/blog',
        permanent: true,
      },
    ]
  },
}
