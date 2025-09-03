/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'talktitude-images.s3.ap-northeast-2.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
