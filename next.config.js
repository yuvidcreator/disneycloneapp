/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'google.com', 'image.tmdb.org', 'disneyapp.vercel.app'],
  },

  // compiler: {
  //   reactRemoveProperties: true,
  // },
}

module.exports = nextConfig
