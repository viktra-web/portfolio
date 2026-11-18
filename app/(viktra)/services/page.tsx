import type { Metadata } from "next";
import Hero from "@/components/viktra/Hero";
import Demo from "@/components/viktra/Demo";
import OffersSummary from "@/components/viktra/OffersSummary";
import WorkList from "@/components/viktra/WorkList";
import FaqList from "@/components/viktra/FaqList";
import CtaBand from "@/components/viktra/CtaBand";
import Shell from "@/components/viktra/Shell";
import JsonLd from "@/components/viktra/JsonLd";
import { viktraMetadata } from "@/components/viktra/seo/metadata";
import { HOME_DESCRIPTION } from "@/components/viktra/seo/schema";
import { aboutCopy } from "@/lib/product";
import { serviceFaq } from "@/lib/services";
import { path } from "@/lib/site";

export const metadata: Metadata = viktraMetadata({
  // /services?besoin=… is the same page: the canonical drops the query.
  pagePath: "/",
  title: "Création de site internet à Divonne-les-Bains | Viktra",
  description: HOME_DESCRIPTION,
});

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
