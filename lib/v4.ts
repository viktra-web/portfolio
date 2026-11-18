// Copy for /services/v4 (test, noindex): plan in docs/research/09-decision-v4.md.
// Offers, steps, FAQ and the Kunagi quote stay in lib/services.ts and lib/product.ts:
// this file only holds what is new, plus the choice of what the page shows.
import { BONEE_SHOTS, type ProductImage } from "@/lib/product";
import { serviceFaq, serviceSteps } from "@/lib/services";

export const v4Hero = {
  title: "Bonjour, je suis Adel, développeur web et mobile.",
  lead: "Vous avez besoin d'un site ou d'une application ? Racontez-moi votre projet.",
  facts: [
    "Développeur full stack, deux ans en alternance chez Kunagi.",
    "React, Next.js, React Native, .NET, Laravel.",
    "Je vous réponds le jour même ou le lendemain.",
    "Je me déplace dans le Pays de Gex, à Nyon et à Genève.",
  ],
};

/** Under the laptop, one per screen. The second one is [à valider] by Adel (plan 09). */
export const v4Captions = {
  bonee: "Bonee, application que j'ai conçue et développée, sur l'App Store et Google Play.",
  viktra: "Ce site, Viktra, que j'ai développé.",
};

export const VIKTRA_SHOT: ProductImage = {
  src: "/v3/viktra-site.jpg",
  webp: "/v3/viktra-site.webp",
  width: 1200,
  height: 750,
  alt: "Le site Viktra sur un ordinateur : titre, présentation d'Adel et bouton WhatsApp.",
};

export { BONEE_SHOTS };

export const BONEE_APP_STORE =
  "https://apps.apple.com/fr/app/bonee-budget-%C3%A9pargne/id6762883127";
/** [à demander] to Adel: the Google Play link. null = nothing shown. */
export const BONEE_GOOGLE_PLAY: string | null = null;

export const v4Work = {
  title: "Projets choisis",
  intro: "Je démarre mon activité : voici ce que j'ai déjà construit, et comment je travaille.",
  bonee: {
    name: "Bonee",
    text: "Application de budget : j'ai repris les maquettes et développé l'application de A à Z. Disponible sur iPhone et Android.",
  },
  viktra: {
    name: "Viktra",
    text: "Le site de mon agence : Next.js, sans traceur publicitaire.",
  },
  /** Store links [à demander]: nothing shown until Adel gives them. */
  kunagi: {
    name: "Kunagi",
    type: "Application iPhone et Android.",
    text: "Développeur full stack pendant deux ans d'alternance : application React Native, back-end Laravel.",
  },
  othersTitle: "Autres travaux",
  others: [
    {
      name: "Globalpronet",
      text: "Visibilité Google : réécriture des textes du site pour être mieux trouvé.",
    },
    {
      name: "JSL Judo",
      text: "Création du site internet du club, pas encore mis en ligne par le club.",
    },
  ],
};

export const v4OffersTitle = "Un site ou une application ? Parlons-en.";

/** Step 3 covers apps too: wording [à valider] by Adel (plan 09). */
export const v4Steps = serviceSteps.map((step, index) =>
  index === 2 ? { ...step, title: "Je crée votre site ou votre application" } : step
);

/** Four doubts, in this order: total cost, afterwards, delay, Switzerland. */
const FAQ_ORDER = [
  "Combien coûte un site au total ?",
  "Et ensuite, qu'est-ce que je paie chaque mois ou chaque année ?",
  "En combien de temps mon site est-il en ligne ?",
  "Vous travaillez avec des clients en Suisse ?",
];

export const v4Faq = FAQ_ORDER.map((question) => {
  const item = serviceFaq.find((entry) => entry.question === question);
  if (!item) throw new Error(`Question absente de lib/services.ts : ${question}`);
  return item;
});

export const v4Contact = {
  title: "Vous parlez à celui qui fait.",
  lead: "Je suis Adel Djahnit, développeur web à Divonne-les-Bains. Je vous réponds le jour même ou le lendemain.",
};

/** The only condition under which the laptop turns over on scroll (Adel, 19/11/2026). */
export const V4_MOTION_QUERY =
  "(min-width: 900px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";
