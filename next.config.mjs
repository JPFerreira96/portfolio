/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const isVercel = process.env.VERCEL === "1";

const nextConfig = {
  ...(isVercel
    ? {
        // Keep Next.js server output on Vercel (no static export mode).
        distDir: "out"
      }
    : {
        // Static export for environments like GitHub Pages.
        output: "export",
        trailingSlash: true
      }),
  images: {
    unoptimized: !isVercel
  },
  basePath,
  assetPrefix: basePath || undefined,
  webpack: (config, { dev }) => {
    if (dev) {
      // Avoid webpack persistent cache corruption in synced folders (e.g. OneDrive).
      config.cache = false;
    }

    return config;
  }
};

export default nextConfig;
