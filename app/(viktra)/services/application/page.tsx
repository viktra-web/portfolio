import type { Metadata } from "next";
import OfferTemplate from "@/components/viktra/OfferTemplate";
import { path } from "@/lib/site";
import { offerPages } from "@/lib/viktra-pages";

const page = offerPages["application"];

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: path("/application") },
  openGraph: { type: "website", url: path("/application"), siteName: "Viktra", locale: "fr_FR", title: page.metaTitle, description: page.metaDescription },
};

export default function Page() {
  return <OfferTemplate page={page} />;
}
