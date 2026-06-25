/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // All assets are local in /public, so the default loader is fine.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
