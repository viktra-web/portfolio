import type { MetadataRoute } from "next";
import { offerNav, url } from "@/lib/site";

// Indexable pages only: confidentialité and mentions légales are noindex,
// /product redirects to /services.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.adeldjahnit.com/" },
    { url: url("/") },
    ...offerNav.map((item) => ({ url: url(`/${item.slug}`) })),
    { url: url("/tarifs") },
    { url: url("/realisations") },
    { url: url("/a-propos") },
    { url: url("/contact") },
  ];
}
