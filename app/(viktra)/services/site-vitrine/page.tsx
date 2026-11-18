import type { Metadata } from "next";
import OfferTemplate from "@/components/viktra/OfferTemplate";
import { path } from "@/lib/site";
import { offerPages } from "@/lib/viktra-pages";

const page = offerPages["site-vitrine"];

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: path("/site-vitrine") },
  openGraph: { type: "website", url: path("/site-vitrine"), siteName: "Viktra", locale: "fr_FR", title: page.metaTitle, description: page.metaDescription },
};

export default function Page() {
  return <OfferTemplate page={page} />;
}
