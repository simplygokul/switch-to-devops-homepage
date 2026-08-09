/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isDev ? '' : '/switch-to-devops-homepage',
  assetPrefix: isDev ? '' : '/switch-to-devops-homepage/',
};

export default nextConfig;
