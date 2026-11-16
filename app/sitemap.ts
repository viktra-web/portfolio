import type { MetadataRoute } from "next";

// Indexable pages only: /product (test) and /services/confidentialite are noindex.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.adeldjahnit.com/" },
    { url: "https://www.adeldjahnit.com/services" },
  ];
}
