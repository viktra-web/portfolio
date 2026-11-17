import type { Metadata } from "next";
import Home from "@/components/Home";
import frMessages from "@/messages/fr.json";

// Set on the page, not in the root layout: /services and /product keep their own previews.
export const metadata: Metadata = {
  metadataBase: new URL("https://www.adeldjahnit.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Adel Djahnit",
    locale: "fr_FR",
    title: frMessages.Meta.title,
    description: frMessages.Meta.description,
    images: [
      {
        url: "/og-adel-djahnit.png",
        width: 1200,
        height: 630,
        alt: "Adel Djahnit, développeur Fullstack (React, .NET, Azure), près de Genève",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return <Home />;
}
