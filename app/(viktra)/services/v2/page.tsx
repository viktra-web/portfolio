import type { Metadata } from "next";
import Logo from "@/components/viktra/Logo";
import TradeDemo from "@/components/viktra/TradeDemo";
import WhatsAppLink from "@/components/viktra/WhatsAppLink";
import DayStrip from "@/components/v2/DayStrip";
import SearchCheck from "@/components/v2/SearchCheck";
import Storefront from "@/components/v2/Storefront";
import { KUNAGI_QUOTE, aboutCopy, productHero, storyShared, storyTrades } from "@/lib/product";
import {
  SERVICES_EMAIL,
  SERVICES_MAILTO,
  SERVICES_PHONE_DISPLAY,
  SERVICES_PHONE_TEL,
  SERVICES_TOWNS_SENTENCE,
  serviceFaq,
  serviceOffers,
  serviceStory,
  serviceWork,
  whatsappUrl,
} from "@/lib/services";
import { mainNav, offerNav, path } from "@/lib/site";
import { slugOfOffer } from "@/lib/viktra-pages";

export const metadata: Metadata = {
  title: "Viktra, version 2 (test)",
  robots: { index: false, follow: false },
};

const work = ["JSL Judo", "Globalpronet", "Bonee"].flatMap((name) =>
  serviceWork.filter((item) => item.name === name)
);
const faq = [
  ...serviceFaq.filter((item) => item.question.startsWith("Une fiche Google")),
  ...serviceFaq.filter((item) => !item.question.startsWith("Une fiche Google")),
];

export default function V2Home() {
  return (
    <>
      <a className="v2-skip" href="#contenu">
        Aller au contenu
      </a>

      {/* ---------- Night: the street ---------- */}
      <header className="v2-night">
        <div className="v2-wrap v2-top">
          <a href={path("/v2")} className="v2-brand">
            <Logo className="v2-logo" />
            <span>par Adel Djahnit</span>
          </a>
          <nav className="v2-nav" aria-label="Menu principal">
            {offerNav.map((item) => (
              <a key={item.slug} href={path(`/${item.slug}`)}>
                {item.label}
              </a>
            ))}
            <a href={path("/tarifs")}>Tarifs</a>
            <a href={path("/contact")}>Contact</a>
          </nav>
          <details className="v2-burger">
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

        <div className="v2-wrap v2-hero" id="contenu">
          <div className="v2-hero-text">
            <h1 className="v2-h1">Vos clients vous cherchent sur Google. Vous trouvent-ils&nbsp;?</h1>
            <p className="v2-lead">
              Faites le test, comme un client : tapez votre métier, choisissez votre ville.
            </p>
            <SearchCheck />
          </div>
          <div className="v2-hero-answer">
            <p className="v2-answer-title">Vous n&apos;y êtes pas, ou mal&nbsp;? C&apos;est mon travail.</p>
            <p className="v2-lead">{productHero.lead}</p>
            <div className="v2-actions">
              <WhatsAppLink className="v2-btn v2-btn--red">Écrire à Adel sur WhatsApp</WhatsAppLink>
              <a className="v2-call" href={SERVICES_PHONE_TEL}>
                ou appeler le {SERVICES_PHONE_DISPLAY}
              </a>
            </div>
            <p className="v2-note">{productHero.ctaNote}</p>
          </div>
        </div>
      </header>

      <main>
        {/* ---------- The enamel plaque: the promise, measured over a day ---------- */}
        <section className="v2-section v2-street" aria-labelledby="journee">
          <div className="v2-wrap">
            <div className="v2-split v2-slogan">
              <h2 className="v2-h1 v2-h1--slogan">Ouvert, même quand vous êtes fermé.</h2>
              <Storefront />
            </div>
            <div className="v2-plaque">
              <h2 className="v2-h2" id="journee">
                Votre boutique ferme à 19 h. Votre site, jamais.
              </h2>
              <DayStrip />
              <p className="v2-plaque-note">Exemple fictif : une boulangerie ouverte de 6 h 30 à 19 h.</p>
            </div>
            <ol className="v2-story">
              {serviceStory.map((step) => (
                <li key={step.title}>
                  <h3 className="v2-h3">{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------- Morning: try it with your trade ---------- */}
        <section className="v2-section v2-morning" aria-labelledby="essai">
          <div className="v2-wrap v2-split">
            <div>
              <h2 className="v2-h2" id="essai">
                À quoi ressemblera votre site.
              </h2>
              <p className="v2-lead">
                Choisissez un métier : le téléphone montre ce que vos clients verront.
              </p>
            </div>
            <TradeDemo trades={storyTrades} shared={storyShared} whatsappBase={whatsappUrl()} />
          </div>
        </section>

        {/* ---------- Day: the offers, as a shop's price board ---------- */}
        <section className="v2-section v2-day" aria-labelledby="offres">
          <div className="v2-wrap">
            <h2 className="v2-h2" id="offres">
              Ce que je fais, et ce que ça coûte.
            </h2>
            <ul className="v2-board">
              {serviceOffers.map((offer) => (
                <li key={offer.name} className={offer.besoin === "site" ? "v2-board-main" : undefined}>
                  <a href={path(`/${slugOfOffer(offer.name)}`)}>
                    <span className="v2-board-price">
                      {offer.price.startsWith("à partir de") ? (
                        <>
                          <span className="v2-board-from">à partir de</span>
                          {offer.price.replace("à partir de ", "")}
                        </>
                      ) : (
                        offer.price
                      )}
                    </span>
                    <span className="v2-board-name">{offer.name}</span>
                    <span className="v2-board-desc">{offer.description}</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="v2-small">
              Prix de départ, fixés au devis après un premier rendez-vous gratuit. Acompte de 40 %,
              solde à la livraison.
            </p>
          </div>
        </section>

        {/* ---------- The person behind the counter ---------- */}
        <section className="v2-section v2-counter" aria-labelledby="adel">
          <div className="v2-wrap v2-split">
            <div>
              <h2 className="v2-h2" id="adel">
                {aboutCopy.title}
              </h2>
              <p className="v2-lead">{aboutCopy.text}</p>
              <figure className="v2-quote">
                <blockquote>
                  <p>{"« " + KUNAGI_QUOTE.text + " »"}</p>
                </blockquote>
                <figcaption>
                  {KUNAGI_QUOTE.author}{" "}
                  <a href={KUNAGI_QUOTE.href} target="_blank" rel="noopener">
                    {KUNAGI_QUOTE.linkLabel}
                  </a>
                </figcaption>
              </figure>
            </div>
            <div>
              <h3 className="v2-h3">Réalisations</h3>
              <ul className="v2-work">
                {work.map((item) => (
                  <li key={item.name}>
                    <p className="v2-work-name">{item.name}</p>
                    <p className="v2-small">{item.type}</p>
                    <p>{item.description}</p>
                    {item.href && item.linkLabel ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer">
                        {item.linkLabel.replace(/\s*→$/, "")}
                      </a>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="v2-section v2-day" aria-labelledby="questions">
          <div className="v2-wrap v2-narrow">
            <h2 className="v2-h2" id="questions">
              Vos questions
            </h2>
            <div className="v2-faq">
              {faq.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Dawn: the requests are waiting ---------- */}
        <section className="v2-section v2-dawn" aria-labelledby="contact">
          <div className="v2-wrap">
            <h2 className="v2-h1 v2-h1--cta" id="contact">
              Premier rendez-vous de 20 minutes, gratuit.
            </h2>
            <p className="v2-lead">
              Chez vous ou par téléphone, sans engagement. Je vous réponds le jour même ou le
              lendemain.
            </p>
            <div className="v2-actions">
              <WhatsAppLink className="v2-btn v2-btn--red">Écrire à Adel sur WhatsApp</WhatsAppLink>
              <a className="v2-btn v2-btn--line" href={SERVICES_PHONE_TEL}>
                Appeler le {SERVICES_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="v2-night v2-foot">
        <div className="v2-wrap v2-foot-grid">
          <div>
            <Logo className="v2-logo" />
            <p className="v2-foot-line">Ouvert, même quand vous êtes fermé.</p>
            <p className="v2-small">{SERVICES_TOWNS_SENTENCE}</p>
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

      <nav className="v2-bar" aria-label="Contact rapide">
        <WhatsAppLink className="v2-btn v2-btn--red">WhatsApp</WhatsAppLink>
        <a className="v2-btn v2-btn--line" href={SERVICES_PHONE_TEL}>
          Appeler
        </a>
      </nav>
    </>
  );
}
