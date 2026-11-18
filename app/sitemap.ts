import type { MetadataRoute } from "next";
import { PORTFOLIO_URL } from "@/components/viktra/seo/schema";
import { SITE_URL, mainNav, offerNav, url } from "@/lib/site";

// Indexable pages only: /confidentialite and /mentions-legales are noindex,
// /product redirects to /services. Every Viktra URL comes from lib/site.ts.
export default function sitemap(): MetadataRoute.Sitemap {
  // The portfolio home is listed only while it shares the Viktra domain: a sitemap
  // served on viktra.fr cannot list adeldjahnit.com URLs.
  const portfolio = SITE_URL === PORTFOLIO_URL ? [{ url: `${PORTFOLIO_URL}/` }] : [];
  return [
    ...portfolio,
    { url: url("/") },
    ...offerNav.map((item) => ({ url: url(`/${item.slug}`) })),
    ...mainNav.map((item) => ({ url: url(item.href) })),
  ];
}
