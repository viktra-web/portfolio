import { serviceOffers, serviceSteps } from "@/lib/services";
import { offerNav, path } from "@/lib/site";
import type { OfferPage } from "@/lib/viktra-pages";
import CtaBand from "./CtaBand";
import FaqList, { pickFaq } from "./FaqList";
import Footer from "./Footer";
import Header from "./Header";
import PageIntro from "./PageIntro";
import StickyBar from "./StickyBar";
import WhatsAppLink from "./WhatsAppLink";

/** One page per offer: same structure, texts from lib/viktra-pages.ts. */
export default function OfferTemplate({ page }: { page: OfferPage }) {
  const offer = serviceOffers.find((item) => item.name === page.offerName);
  if (!offer) throw new Error(`Offre inconnue : ${page.offerName}`);
  const faq = pickFaq(page.faq);
  const others = offerNav.filter((item) => item.slug !== page.slug);

  return (
    <>
      <Header />
      <main>
        <PageIntro h1={page.h1} lead={page.lead}>
          <div className="v-cta-row">
            <WhatsAppLink className="v-btn v-btn--primary" offre={offer.name}>
              {offer.cta}
            </WhatsAppLink>
            <a className="v-link v-link--inline" href={path("/tarifs")}>
              Voir tous les tarifs
            </a>
          </div>
        </PageIntro>

        <section className="v-section" aria-labelledby="pour-qui">
          <div className="v-wrap v-split">
            <div>
              <h2 className="v-h2" id="pour-qui">
                {page.forWhomTitle}
              </h2>
              <ul className="v-ticks v-ticks--big">
                {page.forWhom.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
            <aside className="v-price-card" aria-label="Prix">
              <p className="v-small">{offer.name}</p>
              <p className="v-price v-price--big">{offer.price}</p>
              <ul className="v-ticks">
                {offer.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="v-small">Prix fixé au devis, après un premier rendez-vous gratuit.</p>
            </aside>
          </div>
        </section>

        <section className="v-section v-calcaire" aria-labelledby="details">
          <div className="v-wrap v-narrow">
            <h2 className="v-h2" id="details">
              {page.detailsTitle}
            </h2>
            <ul className="v-ticks v-ticks--big">
              {page.details.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="v-section" aria-labelledby="deroulement">
          <div className="v-wrap">
            <h2 className="v-h2" id="deroulement">
              Comment ça se passe
            </h2>
            <ol className="v-steps">
              {serviceSteps.map((step) => (
                <li key={step.title}>
                  <h3 className="v-h3">{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {faq.length > 0 ? (
          <section className="v-section v-matin" aria-labelledby="questions">
            <div className="v-wrap v-narrow">
              <h2 className="v-h2" id="questions">
                Vos questions
              </h2>
              <FaqList items={faq} />
            </div>
          </section>
        ) : null}

        <section className="v-section" aria-labelledby="autres">
          <div className="v-wrap">
            <h2 className="v-h3" id="autres">
              Les autres offres
            </h2>
            <ul className="v-chips">
              {others.map((item) => (
                <li key={item.slug}>
                  <a href={path(`/${item.slug}`)}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CtaBand offre={offer.name} />
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
