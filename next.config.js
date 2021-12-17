const withPWA = require('next-pwa');

module.exports = withPWA({
  env: {
    NEXT_PUBLIC_RESUME_LINK: '1Y5ttDgKB_Q3NVjPe5lzKZxYOrP7nEX5v',
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  images: {
    domains: ['i.ibb.co'],
  },
  experimental: {
    publicDirectory: true,
  },
});
