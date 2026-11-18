import type { Metadata } from "next";
import Hero from "@/components/viktra/Hero";
import Demo from "@/components/viktra/Demo";
import OffersSummary from "@/components/viktra/OffersSummary";
import WorkList from "@/components/viktra/WorkList";
import FaqList from "@/components/viktra/FaqList";
import CtaBand from "@/components/viktra/CtaBand";
import Shell from "@/components/viktra/Shell";
import JsonLd from "@/components/viktra/JsonLd";
import { aboutCopy } from "@/lib/product";
import { serviceFaq } from "@/lib/services";
import { path } from "@/lib/site";

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

// "Une fiche Google ne suffit-elle pas ?" first: it is the first doubt of the target.
const faq = [
  ...serviceFaq.filter((item) => item.question.startsWith("Une fiche Google")),
  ...serviceFaq.filter((item) => !item.question.startsWith("Une fiche Google")),
];

export default function ServicesPage() {
  return (
    <Shell>
      <Hero />
      <Demo />
      <OffersSummary />
      <section className="v-section v-calcaire" aria-labelledby="about-title">
        <div className="v-wrap v-split">
          <div>
            <h2 className="v-h2" id="about-title">
              {aboutCopy.title}
            </h2>
            <p className="v-lead">{aboutCopy.text}</p>
            <a className="v-link" href={path("/a-propos")}>
              En savoir plus sur moi
            </a>
          </div>
          <div>
            <h2 className="v-h3">Réalisations</h2>
            <WorkList shots={false} />
            <a className="v-link" href={path("/realisations")}>
              Voir les réalisations
            </a>
          </div>
        </div>
      </section>
      <section className="v-section" aria-labelledby="faq-title">
        <div className="v-wrap v-narrow">
          <h2 className="v-h2" id="faq-title">
            Questions fréquentes
          </h2>
          <FaqList items={faq} />
        </div>
      </section>
      <CtaBand />
      <JsonLd />
    </Shell>
  );
}
