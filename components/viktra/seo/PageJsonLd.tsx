import { serviceOffers } from "@/lib/services";
import { SITE_URL, offerNav, type OfferSlug } from "@/lib/site";
import { offerPages } from "@/lib/viktra-pages";
import { ABOUT_PHOTO } from "@/lib/product";
import { JsonLdScript } from "../JsonLd";
import { breadcrumbGraph, personGraph, serviceGraph } from "./schema";

/** Offer page: Service + Offer (price of serviceOffers, EUR) + breadcrumb. */
export function ServiceJsonLd({ slug }: { slug: OfferSlug }) {
  const offer = serviceOffers.find((item) => item.name === offerPages[slug].offerName);
  if (!offer) return null;
  const label = offerNav.find((item) => item.slug === slug)?.label ?? offer.name;
  return <JsonLdScript data={serviceGraph(offer, `/${slug}`, label)} />;
}

/** Inner page without its own entity: breadcrumb only. */
export function BreadcrumbJsonLd({ pagePath, label }: { pagePath: string; label: string }) {
  return <JsonLdScript data={breadcrumbGraph(pagePath, label)} />;
}

/** /a-propos: Person Adel Djahnit + breadcrumb. */
export function PersonJsonLd() {
  const image = ABOUT_PHOTO ? new URL(ABOUT_PHOTO.src, SITE_URL).toString() : undefined;
  return <JsonLdScript data={personGraph(image)} />;
}
