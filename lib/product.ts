// Copy and data for the Viktra page on /services ("L'affiche du matin").
// Validated texts (offers, steps, FAQ, guarantees, story chapters) stay in lib/services.ts
// and are imported by the server components; this file only holds what is new.
import { storyMockup } from "@/lib/services";

export const productHero = {
  title: "Le site de votre commerce, fait près de chez vous.",
  lead: "Je suis Adel, développeur web à Divonne-les-Bains. Je crée des sites et des fiches Google pour que les commerces et artisans du Pays de Gex, de Nyon et de Genève soient trouvés, puis appelés.",
  /** Under the main button: what happens when you tap it. */
  ctaNote: "Premier rendez-vous de 20 minutes, gratuit.",
  /** Price, delay and ownership, all from lib/services.ts (offers, items, guarantees). */
  facts: [
    "Site vitrine dès 690 €, prix fixé au devis",
    "En ligne 2 semaines environ après vos textes et photos",
    "Le nom de domaine est à votre nom",
  ],
};

export type TradeGlyph = "wheat" | "drop" | "scissors" | "plate";

export interface StoryTrade {
  id: string;
  label: string;
  glyph: TradeGlyph;
  brand: string;
  search: string;
  name: string;
  monogram: string;
  meta: string;
  /** Main button of the fictional site: what this trade's customers come to do. */
  call: string;
  headline: string;
  hoursTitle: string;
  hours: string;
  chips: string[];
  formTitle: string;
  notifText: string;
}

/** Shared by every trade in the phone mockup. */
export const storyShared = {
  time: storyMockup.time,
  chip: storyMockup.chip,
  directions: storyMockup.directions,
  send: storyMockup.send,
  notifTitle: "Nouveau message",
  notifWhen: "maintenant",
  mapCaption: "Grand-Rue, votre ville",
  caption: "Exemple fictif : ce commerce n'existe pas.",
  legend: "Essayez avec votre métier",
};

export type StoryShared = typeof storyShared;

export const storyTrades: StoryTrade[] = [
  {
    id: "boulangerie",
    label: "Boulangerie",
    glyph: "wheat",
    brand: "#8A4B1F",
    search: storyMockup.search,
    name: storyMockup.name,
    monogram: storyMockup.monogram,
    meta: "Boulangerie, ouvert",
    call: storyMockup.call,
    headline: storyMockup.headline,
    hoursTitle: storyMockup.hoursTitle,
    hours: storyMockup.hours,
    chips: storyMockup.chips,
    formTitle: storyMockup.formTitle,
    notifText: storyMockup.notifText,
  },
  {
    id: "plombier",
    label: "Plombier",
    glyph: "drop",
    brand: "#1F5FA8",
    search: "plombier divonne",
    name: "Mercier Plomberie",
    monogram: "M",
    meta: "Plombier, ouvert",
    call: "Urgence : appeler",
    headline: "Dépannage, chauffe-eau et salles de bain",
    hoursTitle: "Disponible aujourd'hui",
    hours: "7 h 30 – 18 h 30",
    chips: ["Fuite d'eau", "Chauffe-eau", "Salle de bain"],
    formTitle: "Demander un devis",
    notifText: "« Bonjour, j'ai une fuite sous l'évier, vous pouvez passer aujourd'hui ? »",
  },
  {
    id: "coiffeuse",
    label: "Coiffeuse",
    glyph: "scissors",
    brand: "#7A3E6B",
    search: "coiffeuse gex",
    name: "Salon Lumière",
    monogram: "L",
    meta: "Coiffeuse, ouvert",
    call: "Prendre RDV",
    headline: "Coupe, couleur et brushing, avec ou sans rendez-vous",
    hoursTitle: "Ouvert aujourd'hui",
    hours: "9 h 00 – 19 h 00",
    chips: ["Coupe femme", "Couleur", "Coupe homme"],
    formTitle: "Prendre rendez-vous",
    notifText: "« Bonjour, vous avez une place samedi matin ? »",
  },
  {
    id: "restaurant",
    label: "Restaurant",
    glyph: "plate",
    brand: "#2F5D3A",
    search: "restaurant nyon",
    name: "Le Comptoir du Lac",
    monogram: "C",
    meta: "Restaurant, ouvert",
    call: "Réserver",
    headline: "Cuisine de saison, menu du jour à midi",
    hoursTitle: "Ouvert aujourd'hui",
    hours: "11 h 45 – 14 h 00 et 19 h – 22 h",
    chips: ["Menu du jour", "Terrasse", "Groupes"],
    formTitle: "Réserver une table",
    notifText: "« Bonjour, une table pour 4 ce soir à 20 h ? »",
  },
];

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

export const aboutCopy = {
  title: "Vous parlez à celui qui fait.",
  text: "Je suis Adel Djahnit. On se rencontre en personne, et c'est moi qui crée votre site, du premier rendez-vous à la mise en ligne.",
  /** Already said by the Suivi offer and the contact form: not repeated on /services. */
  hiddenGuarantees: ["Sans engagement"],
};

/** Verbatim from the Kunagi recommendation letter (public/recommendation-letter.jpg). */
export const KUNAGI_QUOTE = {
  text: "Un réel sens du service et une volonté constante de répondre aux besoins des utilisateurs et de l'équipe.",
  author:
    "Hélène Cayla, fondatrice de Kunagi, où j'ai été développeur full stack en alternance pendant deux ans.",
  linkLabel: "Lire la lettre",
  href: "/recommendation-letter.pdf",
};

export const workIntro = "Ce que j'ai fait, projet par projet.";

export const pricingNote =
  "Prix de départ. Le prix exact est écrit dans votre devis, après notre rendez-vous. Acompte de 40 % au lancement, solde à la livraison. L'hébergement est compris dans le suivi ; le nom de domaine se paie à part, une fois par an.";
