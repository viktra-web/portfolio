import type { Metadata } from "next";
import Hero from "@/components/viktra/Hero";
import Demo from "@/components/viktra/Demo";
import Offers from "@/components/viktra/Offers";
import About from "@/components/viktra/About";
import Faq from "@/components/viktra/Faq";
import Contact from "@/components/viktra/Contact";
import Footer from "@/components/viktra/Footer";
import StickyBar from "@/components/viktra/StickyBar";
import JsonLd from "@/components/viktra/JsonLd";

const title = "Création de site internet à Divonne-les-Bains | Viktra";
const description =
  "Sites vitrines et fiches Google pour les commerces, artisans et indépendants du Pays de Gex, de Nyon et de Genève. Prix fixe, premier rendez-vous gratuit.";

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
      <Hero />
      <main>
        <Demo />
        <Offers />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <StickyBar />
      <JsonLd />
    </>
  );
}
