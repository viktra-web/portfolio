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
    <Shell>
      <PageIntro h1={t.h1} lead={t.lead} />
      <section className="v-section" aria-label="Offres et prix">
        <div className="v-wrap">
          <ul className="v-offers">
            {serviceOffers.map((offer) => {
              const main = offer.besoin === "site";
              return (
                <li className={main ? "v-offer v-offer--main" : "v-offer"} key={offer.name}>
                  <div className="v-offer-head">
                    <h2 className="v-h3">{offer.name}</h2>
                    <p className="v-price">{offer.price}</p>
                  </div>
                  <div className="v-offer-body">
                    <p>{offer.description}</p>
                    <ul className="v-ticks">
                      {offer.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <a className="v-link" href={path(`/${slugOfOffer(offer.name)}`)}>
                      En savoir plus sur {offer.name.toLowerCase()}
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
          <p className="v-note">{pricingNote}</p>
        </div>
      </section>
      <section className="v-section v-matin" aria-labelledby="questions">
        <div className="v-wrap v-narrow">
          <h2 className="v-h2" id="questions">
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
