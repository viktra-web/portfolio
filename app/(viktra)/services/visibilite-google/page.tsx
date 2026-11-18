import type { Metadata } from "next";
import OfferTemplate from "@/components/viktra/OfferTemplate";
import { path } from "@/lib/site";
import { offerPages } from "@/lib/viktra-pages";

const page = offerPages["visibilite-google"];

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: path("/visibilite-google") },
  openGraph: { type: "website", url: path("/visibilite-google"), siteName: "Viktra", locale: "fr_FR", title: page.metaTitle, description: page.metaDescription },
};

export default function Page() {
  return <OfferTemplate page={page} />;
}
