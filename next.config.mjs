/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // The Viktra page moved from /product (test, noindex) to /services. Exact URL only:
      // /product/bonee-*.jpg|webp are files of public/product/ and must stay served.
      { source: "/product", destination: "/services", permanent: true },
    ];
  },
};

export default nextConfig;
