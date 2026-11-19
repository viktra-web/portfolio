import type { Metadata } from "next";
import CtaBand from "@/components/viktra/CtaBand";
import FaqList, { pickFaq } from "@/components/viktra/FaqList";
import PageIntro from "@/components/viktra/PageIntro";
import Shell from "@/components/viktra/Shell";
import { pricingNote } from "@/lib/product";
import { serviceOffers } from "@/lib/services";
import { path } from "@/lib/site";
import { pageTexts, slugOfOffer } from "@/lib/viktra-pages";
import { BreadcrumbJsonLd } from "@/components/viktra/seo/PageJsonLd";
import { viktraMetadata } from "@/components/viktra/seo/metadata";

const t = pageTexts.tarifs;

export const metadata: Metadata = viktraMetadata({
  pagePath: "/tarifs",
  title: t.metaTitle,
  description: t.metaDescription,
});

export default function TarifsPage() {
  return (
    <Shell current="/tarifs">
      <PageIntro h1={t.h1} lead={t.lead} />
      <section className="v4-section" aria-label="Offres et prix">
        <div className="v4-wrap">
          <ul className="v4-rows">
            {serviceOffers.map((offer) => (
              <li key={offer.name}>
                <div>
                  <h2 className="v4-h3">{offer.name}</h2>
                  <p className="v4-price">{offer.price}</p>
                </div>
                <div>
                  <p className="v4-offer-text">{offer.description}</p>
                  <ul className="v4-bullets">
                    {offer.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a className="v4-more" href={path(`/${slugOfOffer(offer.name)}`)}>
                    Voir l&apos;offre {offer.name}
                  </a>
                </div>
              </li>
            ))}
          </ul>
          <p className="v4-note">{pricingNote}</p>
        </div>
      </section>
      <section className="v4-section v4-section--calcaire" aria-labelledby="questions">
        <div className="v4-wrap v4-narrow">
          <h2 className="v4-h2" id="questions">
            Questions sur les prix
          </h2>
          <FaqList items={pickFaq(["Combien coûte", "Et ensuite", "Vous travaillez avec des clients en Suisse"])} />
        </div>
      </section>
      <CtaBand />
      <BreadcrumbJsonLd pagePath="/tarifs" label="Tarifs" />
    </Shell>
  );
}
