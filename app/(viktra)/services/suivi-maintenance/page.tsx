import type { Metadata } from "next";
import OfferTemplate from "@/components/viktra/OfferTemplate";
import { ServiceJsonLd } from "@/components/viktra/seo/PageJsonLd";
import { viktraMetadata } from "@/components/viktra/seo/metadata";
import { offerPages } from "@/lib/viktra-pages";

const page = offerPages["suivi-maintenance"];

export const metadata: Metadata = viktraMetadata({
  pagePath: "/suivi-maintenance",
  title: page.metaTitle,
  description: page.metaDescription,
});

export default function Page() {
  return (
    <>
      <OfferTemplate page={page} />
      <ServiceJsonLd slug="suivi-maintenance" />
    </>
  );
}
