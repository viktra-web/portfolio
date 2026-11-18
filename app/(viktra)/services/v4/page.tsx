import type { Metadata } from "next";
import Logo from "@/components/viktra/Logo";
import WhatsAppLink from "@/components/viktra/WhatsAppLink";
import LaptopScene from "@/components/v4/LaptopScene";
import { KUNAGI_QUOTE, type ProductImage } from "@/lib/product";
import {
  SERVICES_EMAIL,
  SERVICES_MAILTO,
  SERVICES_PHONE_DISPLAY,
  SERVICES_PHONE_TEL,
  serviceOffers,
} from "@/lib/services";
import { mainNav, offerNav, path } from "@/lib/site";
import {
  BONEE_APP_STORE,
  BONEE_GOOGLE_PLAY,
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
import "./v4.css";

export const metadata: Metadata = {
  title: "Viktra, version 4 (test)",
  robots: { index: false, follow: false },
};

/** Without JS: the static entry (phone, auto height), whatever the screen. */
const NO_JS_CSS =
  ".v4-scene{height:auto!important}.v4-stage{position:static!important;height:auto!important}" +
  ".v4-slot,.v4-cap{display:none!important}.v4-phone-fig{display:block!important}";

function Picture({ image, eager = false }: { image: ProductImage; eager?: boolean }) {
  return (
    <picture>
      {image.webp ? <source srcSet={image.webp} type="image/webp" /> : null}
      {/* eslint-disable-next-line @next/next/no-img-element -- static capture, sized */}
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading={eager ? "eager" : "lazy"}
      />
    </picture>
  );
}

export default function V4Home() {
  return (
    <div className="v4">
      <noscript dangerouslySetInnerHTML={{ __html: `<style>${NO_JS_CSS}</style>` }} />
      <a className="v4-skip" href="#contenu">
        Aller au contenu
      </a>

      <header className="v4-top">
        <div className="v4-wrap v4-top-row">
          <a href={path("/v4")} className="v4-brand">
            <Logo className="v4-logo" />
            <span>par Adel Djahnit</span>
          </a>
          <nav className="v4-nav" aria-label="Menu principal">
            {offerNav.map((item) => (
              <a key={item.slug} href={path(`/${item.slug}`)}>
                {item.label}
              </a>
            ))}
            <a href={path("/realisations")}>Réalisations</a>
            <a href={path("/contact")}>Contact</a>
          </nav>
          <details className="v4-burger">
            <summary>Menu</summary>
            <nav aria-label="Menu">
              {offerNav.map((item) => (
                <a key={item.slug} href={path(`/${item.slug}`)}>
                  {item.label}
                </a>
              ))}
              {mainNav.map((item) => (
                <a key={item.href} href={path(item.href)}>
                  {item.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </header>

      <main id="contenu">
        {/* ---------- 1. Entry: who, and the laptop that turns over ---------- */}
        <LaptopScene bonee={BONEE_SHOTS} viktra={VIKTRA_SHOT} captions={v4Captions}>
          <h1 className="v4-h1" id="hero">
            {v4Hero.title}
          </h1>
          <p className="v4-lead">{v4Hero.lead}</p>
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

            <article className="v4-project">
              <div className="v4-project-shots">
                {BONEE_SHOTS.map((image) => (
                  <div key={image.src} className="v4-phone v4-phone--small">
                    <Picture image={image} />
                  </div>
                ))}
              </div>
              <div className="v4-project-text">
                <h3 className="v4-h3">{v4Work.bonee.name}</h3>
                <p>{v4Work.bonee.text}</p>
                <p className="v4-links">
                  <a className="v4-link" href={BONEE_APP_STORE} target="_blank" rel="noopener noreferrer">
                    Voir sur l&apos;App Store
                  </a>
                  {BONEE_GOOGLE_PLAY ? (
                    <a className="v4-link" href={BONEE_GOOGLE_PLAY} target="_blank" rel="noopener noreferrer">
                      Voir sur Google Play
                    </a>
                  ) : null}
                </p>
              </div>
            </article>

            <article className="v4-project">
              <div className="v4-frame">
                <Picture image={VIKTRA_SHOT} />
              </div>
              <div className="v4-project-text">
                <h3 className="v4-h3">{v4Work.viktra.name}</h3>
                <p>{v4Work.viktra.text}</p>
              </div>
            </article>

            <article className="v4-project v4-project--text">
              <div className="v4-project-text">
                <h3 className="v4-h3">{v4Work.kunagi.name}</h3>
                <p className="v4-type">{v4Work.kunagi.type}</p>
                <p>{v4Work.kunagi.text}</p>
              </div>
            </article>

            <h3 className="v4-h3 v4-others-title">{v4Work.othersTitle}</h3>
            <ul className="v4-others">
              {v4Work.others.map((item) => (
                <li key={item.name}>
                  <strong>{item.name}</strong>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
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
                  <summary>{item.question}</summary>
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
      </main>

      <footer className="v4-foot">
        <div className="v4-wrap v4-foot-grid">
          <div>
            <Logo className="v4-logo" />
            <p className="v4-foot-line">Ouvert, même quand vous êtes fermé.</p>
          </div>
          <nav aria-label="Pages">
            {offerNav.map((item) => (
              <a key={item.slug} href={path(`/${item.slug}`)}>
                {item.label}
              </a>
            ))}
            {mainNav.map((item) => (
              <a key={item.href} href={path(item.href)}>
                {item.label}
              </a>
            ))}
          </nav>
          <div>
            <a href={SERVICES_PHONE_TEL}>{SERVICES_PHONE_DISPLAY}</a>
            <a href={SERVICES_MAILTO}>{SERVICES_EMAIL}</a>
            <a href={path("/mentions-legales")}>Mentions légales</a>
            <a href={path("/confidentialite")}>Confidentialité</a>
          </div>
        </div>
      </footer>

      <nav className="v4-bar" aria-label="Contact rapide">
        <WhatsAppLink className="v4-btn v4-btn--sun">WhatsApp</WhatsAppLink>
        <a className="v4-btn v4-btn--light" href={SERVICES_PHONE_TEL}>
          Appeler
        </a>
      </nav>
    </div>
  );
}
