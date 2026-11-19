// Shared data of the Viktra site: images and the Kunagi quote.
// Offers, steps, FAQ and guarantees are in lib/services.ts; home copy in lib/v4.ts.

export interface ProductImage {
  src: string;
  webp?: string;
  width: number;
  height: number;
  alt: string;
}

/** Photo of Adel for the About section. null until consent: the quote is shown instead. */
export const ABOUT_PHOTO: ProductImage | null = null;

/** First two iPhone screenshots of Bonee, from its App Store page. Empty = text row. */
export const BONEE_SHOTS: ProductImage[] = [
  {
    src: "/product/bonee-1.jpg",
    webp: "/product/bonee-1.webp",
    width: 600,
    height: 1300,
    alt: "Bonee, écran d'accueil : objectif principal, revenus, dépenses et économies du mois.",
  },
  {
    src: "/product/bonee-2.jpg",
    webp: "/product/bonee-2.webp",
    width: 600,
    height: 1300,
    alt: "Bonee, écran Mon budget : répartition des dépenses de juin et liste des transactions.",
  },
];

/** Verbatim from the Kunagi recommendation letter (public/recommendation-letter.jpg). */
export const KUNAGI_QUOTE = {
  text: "Un réel sens du service et une volonté constante de répondre aux besoins des utilisateurs et de l'équipe.",
  author:
    "Hélène Cayla, fondatrice de Kunagi, où j'ai été développeur en alternance pendant deux ans.",
  linkLabel: "Lire la lettre",
  href: "/recommendation-letter.pdf",
};

export const pricingNote =
  "Prix de départ. Le prix exact est écrit dans votre devis, après notre rendez-vous. Acompte de 40 % au lancement, solde à la livraison. L'hébergement est compris dans le suivi ; le nom de domaine se paie à part, une fois par an.";
