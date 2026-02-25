/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath,
  assetPrefix: basePath,
  webpack: (config, { dev }) => {
    if (dev) {
      // Avoid webpack persistent cache corruption in synced folders (e.g. OneDrive).
      config.cache = false;
    }

    return config;
  }
};

export default nextConfig;
