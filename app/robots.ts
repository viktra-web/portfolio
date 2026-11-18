import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// No disallow on the noindex pages: a blocked page hides its noindex from Google.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
