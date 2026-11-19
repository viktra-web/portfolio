/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // The Viktra page moved from /product (test, noindex) to /services. Exact URL only:
      // /product/bonee-*.jpg|webp are files of public/product/ and must stay served.
      { source: "/product", destination: "/services", permanent: true },
      // Test versions of the home, replaced by /services (v4 became the site on 19/11/2026).
      { source: "/services/v4", destination: "/services", permanent: true },
      { source: "/services/v3", destination: "/services", permanent: true },
    ];
  },
};

export default nextConfig;
