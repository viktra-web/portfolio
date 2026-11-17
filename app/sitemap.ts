import type { MetadataRoute } from "next";

// Indexable pages only: /services/confidentialite is noindex, /product redirects to /services.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.adeldjahnit.com/" },
    { url: "https://www.adeldjahnit.com/services" },
  ];
}
