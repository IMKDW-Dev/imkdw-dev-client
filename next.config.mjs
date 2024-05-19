/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'local-static.imkdw.dev',
      },
      {
        protocol: 'https',
        hostname: 'static.imkdw.dev',
      },
    ],
  },
};

export default nextConfig;
