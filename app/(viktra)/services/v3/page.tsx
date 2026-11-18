import type { Metadata } from "next";
import Logo from "@/components/viktra/Logo";
import WhatsAppLink from "@/components/viktra/WhatsAppLink";
import ClientTest from "@/components/v3/ClientTest";
import LiveBar from "@/components/v3/LiveBar";
import MyDay from "@/components/v3/MyDay";
import { BONEE_SHOTS, KUNAGI_QUOTE, productHero } from "@/lib/product";
import {
  SERVICES_EMAIL,
  SERVICES_MAILTO,
  SERVICES_PHONE_DISPLAY,
  SERVICES_PHONE_TEL,
  SERVICES_TOWNS_SENTENCE,
  serviceFaq,
  serviceOffers,
  serviceSteps,
} from "@/lib/services";
import { mainNav, offerNav, path } from "@/lib/site";
import { slugOfOffer } from "@/lib/viktra-pages";
import "./v3.css";

export const metadata: Metadata = {
  title: "Viktra, version 3 (test)",
  robots: { index: false, follow: false },
};

/** What Viktra really did on each project, and its measures (to measure, never estimated). */
const WORK = [
  {
    name: "JSL Judo",
    url: "[adresse à fournir]",
    what: "Création du site internet du club.",
    shot: null,
  },
  {
    name: "Globalpronet",
    url: "globalpronet.ch",
    href: "https://globalpronet.ch",
    what: "Réécriture des textes du site pour Google. Le design n'est pas de Viktra.",
    shot: null,
  },
  {
    name: "Bonee",
    url: "App Store · Google Play",
    href: "https://apps.apple.com/fr/app/bonee-budget-%C3%A9pargne/id6762883127",
    what: "Application de budget co-développée, publiée sur l'App Store et Google Play.",
    shot: "bonee",
  },
] as const;

const faq = [
  ...serviceFaq.filter((item) => item.question.startsWith("Une fiche Google")),
  ...serviceFaq.filter((item) => !item.question.startsWith("Une fiche Google")),
];

export default function V3Home() {
  return (
    <div className="v3">
      <a className="v3-skip" href="#contenu">
        Aller au contenu
      </a>
      <LiveBar />

      <header className="v3-top">
        <div className="v3-wrap v3-top-row">
          <a href={path("/v3")} className="v3-brand">
            <Logo className="v3-logo" />
            <span>par Adel Djahnit</span>
          </a>
          <nav className="v3-nav" aria-label="Menu principal">
            {offerNav.map((item) => (
              <a key={item.slug} href={path(`/${item.slug}`)}>
                {item.label}
              </a>
            ))}
            <a href={path("/realisations")}>Réalisations</a>
            <a href={path("/contact")}>Contact</a>
          </nav>
          <details className="v3-burger">
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
        {/* ---------- 1. Who, what, and real work ---------- */}
        <section className="v3-hero" aria-labelledby="hero">
          <div className="v3-wrap v3-hero-grid">
            <div>
              <h1 className="v3-h1" id="hero">
                {productHero.title}
              </h1>
              <p className="v3-lead">{productHero.lead}</p>
              <div className="v3-actions">
                <WhatsAppLink className="v3-btn v3-btn--sun">
                  Écrire à Adel sur WhatsApp
                </WhatsAppLink>
                <a className="v3-btn v3-btn--line" href={SERVICES_PHONE_TEL}>
                  {SERVICES_PHONE_DISPLAY}
                </a>
              </div>
              <ul className="v3-facts">
                {productHero.facts.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>
            </div>

            <figure className="v3-devices">
              <div className="v3-stage">
                <div className="v3-browser v3-laptop">
                  <div className="v3-browser-bar" aria-hidden="true">
                    <span className="v3-browser-dots">
                      <i />
                      <i />
                      <i />
                    </span>
                    <span className="v3-browser-url">
                      adeldjahnit.com/services
                    </span>
                  </div>
                  <picture>
                    <source srcSet="/v3/viktra-site.webp" type="image/webp" />
                    {/* eslint-disable-next-line @next/next/no-img-element -- static capture, sized */}
                    <img
                      src="/v3/viktra-site.jpg"
                      alt="Le site Viktra sur un ordinateur : titre, présentation d'Adel et bouton WhatsApp."
                      width={1200}
                      height={750}
                      fetchPriority="high"
                    />
                  </picture>
                </div>
                <div className="v3-phone">
                  <picture>
                    {BONEE_SHOTS[0].webp ? (
                      <source srcSet={BONEE_SHOTS[0].webp} type="image/webp" />
                    ) : null}
                    {/* eslint-disable-next-line @next/next/no-img-element -- static capture, sized */}
                    <img
                      src={BONEE_SHOTS[0].src}
                      alt={BONEE_SHOTS[0].alt}
                      width={BONEE_SHOTS[0].width}
                      height={BONEE_SHOTS[0].height}
                    />
                  </picture>
                </div>
              </div>
              <figcaption className="v3-small">
                Ce site, sur ordinateur. Bonee, application co-développée, sur
                téléphone.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ---------- 2. Ce que je fais : la fiche technique ---------- */}
        <section className="v3-section" aria-labelledby="offres">
          <div className="v3-wrap">
            <h2 className="v3-h2" id="offres">
              Sites internet et fiches Google pour les commerces du Pays de Gex,
              de Nyon et de Genève.
            </h2>
            <table className="v3-spec">
              <caption className="v3-sr">Les offres et leurs prix</caption>
              <thead>
                <tr>
                  <th scope="col">Offre</th>
                  <th scope="col">Prix</th>
                  <th scope="col">Compris</th>
                </tr>
              </thead>
              <tbody>
                {serviceOffers.map((offer) => (
                  <tr
                    key={offer.name}
                    className={
                      offer.besoin === "site" ? "v3-spec-main" : undefined
                    }
                  >
                    <th scope="row">
                      <a href={path(`/${slugOfOffer(offer.name)}`)}>
                        {offer.name}
                      </a>
                    </th>
                    <td className="v3-num">{offer.price}</td>
                    <td>{offer.items.join(", ")}.</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="v3-small">
              Prix de départ, fixés au devis après un premier rendez-vous
              gratuit de 20 minutes. Acompte de 40 %, solde à la livraison.
            </p>
          </div>
        </section>

        {/* ---------- 2 bis. The client's test, as a second step ---------- */}
        <section
          className="v3-section v3-section--calcaire"
          aria-labelledby="test"
        >
          <div className="v3-wrap v3-hero-grid">
            <div>
              <h2 className="v3-h2" id="test">
                Vos clients vous trouvent-ils sur Google&nbsp;?
              </h2>
              <p className="v3-lead">
                Faites le test, comme un client : votre métier, votre ville, et
                vous voyez ce qu&apos;il voit.
              </p>
            </div>
            <ClientTest />
          </div>
        </section>

        {/* ---------- 3. Réalisations, avec ce qui a vraiment été fait ---------- */}
        <section
          className="v3-section v3-section--matin"
          aria-labelledby="realisations"
        >
          <div className="v3-wrap">
            <h2 className="v3-h2" id="realisations">
              Réalisations
            </h2>
            <div className="v3-work">
              {WORK.map((item) => (
                <article key={item.name} className="v3-work-item">
                  <div className="v3-browser">
                    <div className="v3-browser-bar" aria-hidden="true">
                      <span className="v3-browser-dots">
                        <i />
                        <i />
                        <i />
                      </span>
                      <span className="v3-browser-url">{item.url}</span>
                    </div>
                    <div className="v3-browser-view">
                      {item.shot === "bonee" ? (
                        <div className="v3-shots">
                          {BONEE_SHOTS.map((shot) => (
                            <picture key={shot.src}>
                              {shot.webp ? (
                                <source srcSet={shot.webp} type="image/webp" />
                              ) : null}
                              {/* eslint-disable-next-line @next/next/no-img-element -- static, sized */}
                              <img
                                src={shot.src}
                                alt={shot.alt}
                                width={shot.width}
                                height={shot.height}
                                loading="lazy"
                                decoding="async"
                              />
                            </picture>
                          ))}
                        </div>
                      ) : (
                        <p className="v3-todo">Capture du site [à fournir]</p>
                      )}
                    </div>
                  </div>
                  <h3 className="v3-h3">{item.name}</h3>
                  <p>{item.what}</p>
                  <dl className="v3-measures">
                    <div>
                      <dt>Score mobile Google</dt>
                      <dd>[à mesurer]</dd>
                    </div>
                    <div>
                      <dt>Poids de la page</dt>
                      <dd>[à mesurer]</dd>
                    </div>
                  </dl>
                  {"href" in item && item.href ? (
                    <a
                      className="v3-link"
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Voir en ligne
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- 4. Le slogan, avec ses propres horaires ---------- */}
        <section
          className="v3-section v3-section--dark"
          aria-labelledby="journee"
        >
          <div className="v3-wrap v3-split">
            <div>
              <h2 className="v3-h2" id="journee">
                Ouvert, même quand vous êtes fermé.
              </h2>
              <p className="v3-lead">Réglez vos horaires.</p>
            </div>
            <MyDay />
          </div>
        </section>

        {/* ---------- 5. La méthode : une vraie séquence ---------- */}
        <section className="v3-section" aria-labelledby="methode">
          <div className="v3-wrap">
            <h2 className="v3-h2" id="methode">
              Comment ça se passe
            </h2>
            <ol className="v3-steps">
              {serviceSteps.map((step) => (
                <li key={step.title}>
                  <h3 className="v3-h3">{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------- 6. Vos doutes ---------- */}
        <section
          className="v3-section v3-section--calcaire"
          aria-labelledby="doutes"
        >
          <div className="v3-wrap v3-narrow">
            <h2 className="v3-h2" id="doutes">
              Vos doutes
            </h2>
            <div className="v3-faq">
              {faq.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- 7. Celui qui fait ---------- */}
        <section
          className="v3-section v3-section--dark"
          aria-labelledby="contact"
        >
          <div className="v3-wrap v3-split">
            <div>
              <h2 className="v3-h2" id="contact">
                Vous parlez à celui qui fait.
              </h2>
              <p className="v3-lead">
                Je suis Adel Djahnit, développeur web à Divonne-les-Bains. Je
                vous réponds le jour même ou le lendemain.
              </p>
              <div className="v3-actions">
                <WhatsAppLink className="v3-btn v3-btn--sun">
                  Écrire à Adel sur WhatsApp
                </WhatsAppLink>
                <a className="v3-btn v3-btn--line" href={SERVICES_PHONE_TEL}>
                  {SERVICES_PHONE_DISPLAY}
                </a>
              </div>
            </div>
            <figure className="v3-quote">
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
        </section>
      </main>

      <footer className="v3-foot">
        <div className="v3-wrap v3-foot-grid">
          <div>
            <Logo className="v3-logo" />
            <p className="v3-foot-line">Ouvert, même quand vous êtes fermé.</p>
            <p className="v3-small">{SERVICES_TOWNS_SENTENCE}</p>
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
        <div className="v3-wrap">
          <dl className="v3-measures v3-measures--site">
            <div>
              <dt>Cette page</dt>
              <dd>Next.js, sans traceur publicitaire</dd>
            </div>
            <div>
              <dt>Score mobile Google</dt>
              <dd>[à mesurer après mise en ligne]</dd>
            </div>
          </dl>
        </div>
      </footer>

      <nav className="v3-bar" aria-label="Contact rapide">
        <WhatsAppLink className="v3-btn v3-btn--sun">WhatsApp</WhatsAppLink>
        <a className="v3-btn v3-btn--light" href={SERVICES_PHONE_TEL}>
          Appeler
        </a>
      </nav>
    </div>
  );
}
