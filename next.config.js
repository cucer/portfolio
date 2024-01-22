/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/jectask',
        destination: 'https://www.jectask.com',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
