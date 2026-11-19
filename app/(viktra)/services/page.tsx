import type { Metadata } from "next";
import LaptopScene from "@/components/v4/LaptopScene";
import { nbsp } from "@/components/viktra/FaqList";
import JsonLd from "@/components/viktra/JsonLd";
import ProjectList from "@/components/viktra/ProjectList";
import Shell from "@/components/viktra/Shell";
import WhatsAppLink from "@/components/viktra/WhatsAppLink";
import { viktraMetadata } from "@/components/viktra/seo/metadata";
import { HOME_DESCRIPTION } from "@/components/viktra/seo/schema";
import { KUNAGI_QUOTE } from "@/lib/product";
import { SERVICES_PHONE_DISPLAY, SERVICES_PHONE_TEL, serviceOffers } from "@/lib/services";
import { path } from "@/lib/site";
import {
  BONEE_SHOTS,
  VIKTRA_SHOT,
  v4Captions,
  v4Contact,
  v4Faq,
  v4Hero,
  v4OffersTitle,
  v4Steps,
  v4Work,
} from "@/lib/v4";
import { slugOfOffer } from "@/lib/viktra-pages";

export const metadata: Metadata = viktraMetadata({
  // /services?besoin=… is the same page: the canonical drops the query.
  pagePath: "/",
  title: "Viktra, sites internet et applications, par Adel Djahnit",
  description: HOME_DESCRIPTION,
});

/** Without JS: the static entry (phone, auto height), whatever the screen. */
const NO_JS_CSS =
  ".v4-scene{height:auto!important}.v4-stage{position:static!important;height:auto!important}" +
  ".v4-slot,.v4-cap{display:none!important}.v4-phone-fig{display:block!important}";

export default function ServicesHome() {
  return (
    <Shell current="/">
      <noscript dangerouslySetInnerHTML={{ __html: `<style>${NO_JS_CSS}</style>` }} />

      {/* ---------- 1. Entry: who, and the laptop that turns over ---------- */}
      <LaptopScene bonee={BONEE_SHOTS} viktra={VIKTRA_SHOT} captions={v4Captions}>
        <h1 className="v4-h1" id="hero">
          {v4Hero.title}
        </h1>
        <p className="v4-lead">
          {v4Hero.lead.map((sentence) => (
            <span key={sentence} className="v4-lead-line">
              {sentence}
            </span>
          ))}
        </p>
        <div className="v4-actions">
          <WhatsAppLink className="v4-btn v4-btn--sun">Écrire à Adel sur WhatsApp</WhatsAppLink>
        </div>
        <p className="v4-call">
          Ou appelez le <a href={SERVICES_PHONE_TEL}>{SERVICES_PHONE_DISPLAY}</a>
        </p>
        <ul className="v4-facts">
          {v4Hero.facts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </LaptopScene>

      {/* ---------- 2. Projets choisis ---------- */}
      <section className="v4-section" aria-labelledby="projets">
        <div className="v4-wrap">
          <h2 className="v4-h2" id="projets">
            {v4Work.title}
          </h2>
          <p className="v4-lead">{v4Work.intro}</p>
          <ProjectList />
        </div>
      </section>

      {/* ---------- 3. Offres ---------- */}
      <section className="v4-section v4-section--calcaire" aria-labelledby="offres">
        <div className="v4-wrap">
          <h2 className="v4-h2" id="offres">
            {v4OffersTitle}
          </h2>
          <ul className="v4-offers">
            {serviceOffers.map((offer) => (
              <li key={offer.name}>
                <h3 className="v4-h3">
                  <a href={path(`/${slugOfOffer(offer.name)}`)}>{offer.name}</a>
                </h3>
                <p className="v4-price">{offer.price}</p>
                <p className="v4-offer-text">{offer.description}</p>
              </li>
            ))}
          </ul>
          <p className="v4-small">
            Prix de départ, fixés au devis après un premier rendez-vous gratuit de 20 minutes.
            Acompte de 40&nbsp;%, solde à la livraison.
          </p>
          <a className="v4-more" href={path("/tarifs")}>
            Voir les tarifs en détail
          </a>
        </div>
      </section>

      {/* ---------- 4. Comment ça se passe ---------- */}
      <section className="v4-section" aria-labelledby="methode">
        <div className="v4-wrap">
          <h2 className="v4-h2" id="methode">
            Comment ça se passe
          </h2>
          <ol className="v4-steps">
            {v4Steps.map((step) => (
              <li key={step.title}>
                <h3 className="v4-h3">{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- 5. Vos doutes ---------- */}
      <section className="v4-section v4-section--calcaire" aria-labelledby="doutes">
        <div className="v4-wrap v4-narrow">
          <h2 className="v4-h2" id="doutes">
            Vos doutes
          </h2>
          <div className="v4-faq">
            {v4Faq.map((item) => (
              <details key={item.question}>
                <summary>{nbsp(item.question)}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 6. Contact ---------- */}
      <section className="v4-section v4-section--dark" aria-labelledby="contact">
        <div className="v4-wrap v4-split">
          <div>
            <h2 className="v4-h2" id="contact">
              {v4Contact.title}
            </h2>
            <p className="v4-lead">{v4Contact.lead}</p>
            <div className="v4-actions">
              <WhatsAppLink className="v4-btn v4-btn--sun">Écrire à Adel sur WhatsApp</WhatsAppLink>
              <a className="v4-btn v4-btn--line" href={SERVICES_PHONE_TEL}>
                {SERVICES_PHONE_DISPLAY}
              </a>
            </div>
            <a className="v4-more v4-dark-link" href={path("/a-propos")}>
              En savoir plus sur moi
            </a>
          </div>
          <figure className="v4-quote">
            <blockquote>
              <p>{"« " + KUNAGI_QUOTE.text + " »"}</p>
            </blockquote>
            <figcaption>
              {KUNAGI_QUOTE.author}{" "}
              <a href={KUNAGI_QUOTE.href} target="_blank" rel="noopener">
                {KUNAGI_QUOTE.linkLabel}
              </a>
            </figcaption>
          </figure>
        </div>
      </section>
      <JsonLd />
    </Shell>
  );
}
