/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'google.com', 'image.tmdb.org'],
  },

  // compiler: {
  //   reactRemoveProperties: true,
  // },
}

module.exports = nextConfig
