const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

//const withMDX = require('@next/mdx')()
//const withMdxEnhanced = require('next-mdx-enhanced')
//const withOptimizedImages = require('next-optimized-images')

// const withReactSvg = require("next-react-svg");
// const path = require("path");
const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
})

const nextConfig = {
  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: false,
  },
  i18n: {
    locales: ['de', 'en', 'es', 'fr', 'pt-BR'],
    defaultLocale: 'pt-BR',
    localeDetection: false,
  },
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'media.graphcms.com',
      'assets.vercel.com',
    ],
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

module.exports = withPlugins(
  [
    // add plugins here..
    [withBundleAnalyzer],
    [withMDX],
  ],
  nextConfig
)
