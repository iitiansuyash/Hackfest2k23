/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf$/i,
      type: 'asset/source',
    })

    return config
  },
  images: {
    domains: [
      'mongodb.com',
      'res.cloudinary.com',
      'i.imgur.com',
      'drive.google.com',
      'media.licdn.com',
      '*',
    ],
  },
}

module.exports = nextConfig
