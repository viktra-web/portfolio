import { serviceOffers, serviceSteps } from "@/lib/services";
import { offerNav, path } from "@/lib/site";
import type { OfferPage } from "@/lib/viktra-pages";
import CtaBand from "./CtaBand";
import FaqList, { pickFaq } from "./FaqList";
import PageIntro from "./PageIntro";
import Shell from "./Shell";
import WhatsAppLink from "./WhatsAppLink";

/** One page per offer: same structure, texts from lib/viktra-pages.ts. */
export default function OfferTemplate({ page }: { page: OfferPage }) {
  const offer = serviceOffers.find((item) => item.name === page.offerName);
  if (!offer) throw new Error(`Offre inconnue : ${page.offerName}`);
  const faq = pickFaq(page.faq);
  const others = offerNav.filter((item) => item.slug !== page.slug);

  return (
    <Shell current={`/${page.slug}`} offre={offer.name}>
      <PageIntro h1={page.h1} lead={page.lead}>
        <div className="v4-actions">
          <WhatsAppLink className="v4-btn v4-btn--sun" offre={offer.name}>
            {offer.cta}
          </WhatsAppLink>
        </div>
        <p className="v4-call">
          <a href={path("/tarifs")}>Voir tous les tarifs</a>
        </p>
      </PageIntro>

      <section className="v4-section" aria-labelledby="pour-qui">
        <div className="v4-wrap v4-split">
          <div>
            <h2 className="v4-h2" id="pour-qui">
              {page.forWhomTitle}
            </h2>
            <ul className="v4-list v4-list--big">
              {page.forWhom.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
          <aside className="v4-price-box" aria-label="Prix">
            <p className="v4-h3">{offer.name}</p>
            <p className="v4-price">{offer.price}</p>
            <ul className="v4-bullets">
              {offer.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="v4-small">Prix fixé au devis, après un premier rendez-vous gratuit.</p>
          </aside>
        </div>
      </section>

      <section className="v4-section v4-section--calcaire" aria-labelledby="details">
        <div className="v4-wrap v4-narrow">
          <h2 className="v4-h2" id="details">
            {page.detailsTitle}
          </h2>
          <ul className="v4-list v4-list--big">
            {page.details.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* The steps describe the making of a site: only on the site vitrine page. */}
      {page.slug === "site-vitrine" ? (
        <section className="v4-section" aria-labelledby="deroulement">
          <div className="v4-wrap">
            <h2 className="v4-h2" id="deroulement">
              Comment ça se passe
            </h2>
            <ol className="v4-steps">
              {serviceSteps.map((step) => (
                <li key={step.title}>
                  <h3 className="v4-h3">{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {faq.length > 0 ? (
        <section
          className={
            page.slug === "site-vitrine" ? "v4-section v4-section--calcaire" : "v4-section"
          }
          aria-labelledby="questions"
        >
          <div className="v4-wrap v4-narrow">
            <h2 className="v4-h2" id="questions">
              Vos questions
            </h2>
            <FaqList items={faq} />
          </div>
        </section>
      ) : null}

      <section className="v4-section" aria-labelledby="autres">
        <div className="v4-wrap">
          <h2 className="v4-h3" id="autres">
            Les autres offres
          </h2>
          <ul className="v4-chips">
            {others.map((item) => (
              <li key={item.slug}>
                <a href={path(`/${item.slug}`)}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand offre={offer.name} />
    </Shell>
  );
}
