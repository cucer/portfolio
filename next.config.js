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
  output: 'export',
};

module.exports = nextConfig;
