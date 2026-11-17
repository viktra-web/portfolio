import type { Metadata } from "next";
import Hero from "@/components/product/Hero";
import Story from "@/components/product/StoryLazy";
import Pricing from "@/components/product/Pricing";
import About from "@/components/product/About";
import Work from "@/components/product/Work";
import Faq from "@/components/product/Faq";
import Contact from "@/components/product/Contact";
import Footer from "@/components/product/Footer";
import StickyBar from "@/components/product/StickyBar";
import JsonLd from "@/components/product/JsonLd";
import { storyShared, storyTrades } from "@/lib/product";
import { SERVICES_PHONE_TEL, serviceStory } from "@/lib/services";

const title = "Création de site internet à Divonne-les-Bains | Viktra";
const description =
  "Sites vitrines et fiches Google pour les commerces, artisans et indépendants du Pays de Gex, de Nyon et de Genève. Prix fixe, rendez-vous chez vous.";

export const metadata: Metadata = {
  title,
  description,
  // /services?besoin=… is the same page.
  alternates: { canonical: "/services" },
  // Link preview (WhatsApp, LinkedIn, iMessage). The image is opengraph-image.png in this folder.
  openGraph: {
    type: "website",
    url: "/services",
    siteName: "Viktra",
    locale: "fr_FR",
    title,
    description,
  },
  twitter: { card: "summary_large_image" },
};

export default function ServicesPage() {
  return (
    <>
      <main className="pd-main">
        <Hero />
        <Story chapters={serviceStory} trades={storyTrades} shared={storyShared} />
        <Pricing />
        <About />
        <Work />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <StickyBar phoneTel={SERVICES_PHONE_TEL} />
      <JsonLd />
    </>
  );
}
