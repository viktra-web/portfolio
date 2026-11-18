import type { Metadata } from "next";
import { SITE_URL, path } from "@/lib/site";
import { OG_IMAGE } from "./schema";

/**
 * Metadata of a Viktra page: canonical, Open Graph and Twitter card built with lib/site.ts.
 * The OG image is set explicitly: the opengraph-image.png file of the services folder only
 * applies to /services, not to its child pages (checked on the build).
 */
export function viktraMetadata({
  pagePath,
  title,
  description,
  noindex = false,
}: {
  pagePath: string;
  title: string;
  description?: string;
  noindex?: boolean;
}): Metadata {
  const canonical = path(pagePath);
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: { canonical },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      type: "website",
      url: canonical,
      siteName: "Viktra",
      locale: "fr_FR",
      title,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
