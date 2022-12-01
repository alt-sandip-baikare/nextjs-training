/** @type {import('next').NextConfig} */
const path = require('path')


const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
        // pathname: '/account123/**',
      },
    ],
  },
  env:{
    NavItems :[
      { link: '/', name : 'Home' },
      { link: '/about', name : 'About' },
      { link: '/courses', name : 'Courses' },
      { link: '/facilities', name : 'Facilities' },
      { link: '/products', name: 'Products' },
      { link: '/contact', name: 'Contact' },
    ],
    MONGODB_URI: process.env.MONGODB_URI,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

}

module.exports = nextConfig
