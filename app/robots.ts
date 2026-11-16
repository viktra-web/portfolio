import type { MetadataRoute } from "next";

// No disallow on the noindex pages: a blocked page hides its noindex from Google.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.adeldjahnit.com/sitemap.xml",
  };
}
