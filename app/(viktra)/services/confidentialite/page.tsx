import type { Metadata } from "next";
import type { ReactNode } from "react";
import Footer from "@/components/viktra/Footer";
import Logo from "@/components/viktra/Logo";
import WhatsAppLink from "@/components/viktra/WhatsAppLink";
import { SERVICES_EMAIL } from "@/lib/services";

export const metadata: Metadata = {
  title: "Confidentialité | Viktra",
  robots: { index: false },
};

const email = <a href={`mailto:${SERVICES_EMAIL}`}>{SERVICES_EMAIL}</a>;

const blocks: { title: string; body: ReactNode }[] = [
  {
    title: "Responsable du traitement",
    body: <>Adel Djahnit, {email}.</>,
  },
  {
    title: "Données collectées",
    body: (
      <>
        Lorsque vous utilisez le formulaire de contact : votre nom, votre téléphone, votre email,
        votre besoin et votre message.
      </>
    ),
  },
  {
    title: "Pourquoi",
    body: (
      <>
        Ces informations servent uniquement à répondre à votre demande et à préparer un devis.
        Elles ne sont ni vendues ni utilisées pour de la publicité.
      </>
    ),
  },
  {
    title: "Base légale",
    body: (
      <>
        Le traitement repose sur les mesures précontractuelles prises à votre demande : vous me
        contactez pour obtenir une réponse ou un devis, avant tout contrat.
      </>
    ),
  },
  {
    title: "Prestataires",
    body: (
      <>
        Les messages du formulaire me sont transmis par email via le service Resend. Le site est
        hébergé par Vercel. Ces deux prestataires sont établis aux États-Unis.
      </>
    ),
  },
  {
    title: "Durée de conservation",
    body: (
      <>
        Vos informations sont conservées au maximum 3 ans après notre dernier échange, puis
        supprimées.
      </>
    ),
  },
  {
    title: "Vos droits",
    body: (
      <>
        Vous pouvez demander à accéder à vos données, à les corriger ou à les supprimer en
        écrivant à {email}. Vous pouvez aussi adresser une réclamation à la CNIL (
        <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
          cnil.fr
        </a>
        ).
      </>
    ),
  },
  {
    title: "Mesure d'audience",
    body: (
      <>
        Le site utilise Vercel Analytics pour compter les visites de façon anonyme. Aucun cookie
        publicitaire n&apos;est déposé.
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <header id="top" className="v-hero v-hero--short">
        <div className="v-wrap v-bar">
          <a href="/services" className="v-brand">
            <Logo className="v-logo" />
            <span className="v-brand-by">par Adel Djahnit</span>
          </a>
          <div className="v-bar-actions">
            <WhatsAppLink className="v-btn v-btn--primary v-btn--sm">WhatsApp</WhatsAppLink>
          </div>
        </div>
        <div className="v-wrap v-hero-body">
          <h1 className="v-h2">Confidentialité</h1>
          <p className="v-lead">
            Ce que deviennent les informations que vous m&apos;envoyez avec le formulaire de
            contact.
          </p>
          <a href="/services" className="v-link">
            Retour à la page Viktra
          </a>
        </div>
      </header>

      <main className="v-section">
        <div className="v-wrap v-narrow v-legal">
          {blocks.map((block) => (
            <section key={block.title}>
              <h2 className="v-h3">{block.title}</h2>
              <p>{block.body}</p>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
