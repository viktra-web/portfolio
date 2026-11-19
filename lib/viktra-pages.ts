// Texts of the Viktra pages. Rule: nothing invented. Each sentence comes from a validated
// text (lib/services.ts, lib/product.ts, lib/v4.ts).
// Target since 19/11/2026: everyone who needs a site or an app (companies, independents,
// individuals). No town in a heading (h1/h2), no technical jargon.
import type { OfferSlug } from "@/lib/site";

export interface OfferPage {
  slug: OfferSlug;
  /** Name of the offer in lib/services.ts serviceOffers (price, items, cta come from there). */
  offerName: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  forWhomTitle: string;
  forWhom: string[];
  detailsTitle: string;
  details: string[];
  /** Questions of serviceFaq (lib/services.ts) shown on this page, by their first words. */
  faq: string[];
}

export const offerPages: Record<OfferSlug, OfferPage> = {
  "site-vitrine": {
    slug: "site-vitrine",
    offerName: "Site vitrine",
    metaTitle: "Création de site vitrine, dès 690 € | Viktra",
    metaDescription:
      "Site vitrine de 1 à 5 pages, lisible sur téléphone, à prix fixe. Par Adel Djahnit, développeur web : Pays de Gex, Nyon et Genève.",
    h1: "Un site vitrine pour présenter votre activité, dès 690 €.",
    lead: "Un site clair, rapide et lisible sur téléphone, qui présente votre activité et permet de vous contacter ou de demander un devis en un clic.",
    forWhomTitle: "Pour qui",
    forWhom: [
      "Vous voulez présenter vos prestations en détail, afficher vos tarifs ou recevoir des demandes de devis.",
      "Vous n'avez ni textes ni photos. Je vous aide à rédiger les textes pendant le rendez-vous, et on peut partir des photos de votre téléphone.",
      "Je me déplace dans le Pays de Gex, à Nyon et à Genève. Le premier rendez-vous peut aussi se faire par téléphone.",
    ],
    detailsTitle: "Ce que vous recevez",
    details: [
      "Un bouton pour vous appeler et un formulaire pour demander un devis. Les demandes arrivent directement chez vous.",
      "Des textes qui citent votre métier et votre ville, pour être trouvé sur Google. Vous les relisez avant la mise en ligne.",
      "Votre site en ligne en 2 semaines environ, une fois vos textes et photos reçus.",
      "Le nom de domaine à votre nom. Si vous arrêtez le suivi, je vous remets tout ce qu'il faut pour le confier à quelqu'un d'autre.",
    ],
    faq: [
      "Combien coûte",
      "Et ensuite",
      "En combien de temps",
      "Je n'ai ni textes",
      "Est-ce que je serai premier",
      "Vous travaillez avec des clients en Suisse",
    ],
  },
  "visibilite-google": {
    slug: "visibilite-google",
    offerName: "Visibilité Google",
    metaTitle: "Fiche Google à jour, dès 150 € | Viktra",
    metaDescription:
      "Fiche Google complète et à jour : photos, horaires, catégories, description, réponses aux avis. Dès 150 €, Pays de Gex, Nyon et Genève.",
    h1: "Une fiche Google à jour pour votre activité, dès 150 €.",
    lead: "Photos, horaires, catégories, description, réponses aux avis. C'est souvent la première chose que vos clients voient.",
    forWhomTitle: "Pour qui",
    forWhom: [
      "Vous voulez être trouvé quand on tape votre métier et votre ville sur Google.",
      "Vos horaires, vos photos ou votre description sur Google ne sont pas à jour.",
      "Vous n'avez pas besoin d'un site pour l'instant. Pour certaines activités, une fiche Google suffit : c'est pour ça que je la propose seule.",
    ],
    detailsTitle: "Ce que je fais",
    details: [
      "Je complète votre fiche : photos, horaires, catégories, description.",
      "Les réponses aux avis, et des conseils pour en obtenir de nouveaux.",
      "C'est plus rapide à mettre en place qu'un site.",
    ],
    faq: ["Une fiche Google ne suffit", "Est-ce que je serai premier", "Combien coûte", "En combien de temps"],
  },
  "suivi-maintenance": {
    slug: "suivi-maintenance",
    offerName: "Suivi et maintenance",
    metaTitle: "Suivi et maintenance de site internet | Viktra",
    metaDescription:
      "Hébergement, mises à jour et petites modifications de votre site (horaires, tarifs, photos, carte). Dès 50 €/mois, sans engagement.",
    h1: "Suivi et maintenance de votre site, dès 50 € par mois.",
    lead: "Hébergement, mises à jour et petites modifications (horaires, carte, tarifs, photos). Vous m'envoyez un message, je m'en occupe.",
    forWhomTitle: "Pour qui",
    forWhom: [
      "Votre site est en ligne et vous voulez qu'il reste à jour sans y toucher vous-même.",
      "Vos horaires, vos tarifs, votre carte ou vos photos changent.",
    ],
    detailsTitle: "Ce qui est compris",
    details: [
      "L'hébergement du site et les mises à jour.",
      "Les petites modifications : horaires, tarifs, photos, carte.",
      "Sans engagement : le suivi s'arrête quand vous le souhaitez.",
      "Le nom de domaine est à votre nom. Si vous arrêtez le suivi, je vous remets tout ce qu'il faut pour le confier à quelqu'un d'autre.",
      "Non compris : le nom de domaine, payé à part une fois par an. Son prix exact figure dans le devis.",
    ],
    faq: ["Et ensuite"],
  },
  application: {
    slug: "application",
    offerName: "Création d'application",
    metaTitle: "Création d'application iPhone, Android et web | Viktra",
    metaDescription:
      "Application iPhone, Android ou web : réservation, fidélité, outil pour votre équipe. Publication sur l'App Store et Google Play. Sur devis.",
    h1: "Création d'application mobile ou web, quand un site ne suffit plus.",
    lead: "Réservation, fidélité, outil pour votre équipe. Chaque projet est différent, le prix aussi : on en parle, puis vous recevez un devis.",
    forWhomTitle: "Pour qui",
    forWhom: [
      "Vous voulez proposer à vos clients une réservation ou une carte de fidélité, ou donner un outil à votre équipe.",
      "Un site vitrine ne suffit pas pour ce que vous voulez faire.",
    ],
    detailsTitle: "Des exemples",
    details: [
      "Bonee, une application de budget que j'ai conçue et développée de A à Z, est publiée sur l'App Store et le Google Play Store.",
      "Chez Kunagi, pendant deux ans d'alternance, j'ai travaillé sur une application iPhone et Android, de l'écran jusqu'au serveur.",
    ],
    faq: ["Vous travaillez avec des clients en Suisse"],
  },
};

export const pageTexts = {
  tarifs: {
    metaTitle: "Tarifs : site vitrine, application, fiche Google et suivi | Viktra",
    metaDescription:
      "Site vitrine dès 690 €, fiche Google dès 150 €, suivi dès 50 €/mois sans engagement, application sur devis. Devis à prix fixe après un premier rendez-vous gratuit.",
    h1: "Tarifs",
    lead: "Ce sont des prix de départ. Le prix exact est écrit dans votre devis, après notre rendez-vous.",
  },
  realisations: {
    metaTitle: "Projets choisis d'Adel Djahnit | Viktra",
    metaDescription:
      "L'application Bonee, le site de Viktra, deux ans d'alternance chez Kunagi, puis Globalpronet et JSL Judo : les projets d'Adel Djahnit, développeur web et mobile.",
    h1: "Projets choisis",
    lead: "Je démarre mon activité : voici ce que j'ai déjà construit, et comment je travaille.",
  },
  aPropos: {
    metaTitle: "Adel Djahnit, développeur web et mobile | Viktra",
    metaDescription:
      "Adel Djahnit, développeur web et mobile installé à Divonne-les-Bains. Un seul interlocuteur, du premier rendez-vous au suivi de votre site ou de votre application.",
    h1: "Adel Djahnit, développeur web et mobile.",
    lead: "On se rencontre en personne, et c'est moi qui crée votre site ou votre application, du premier rendez-vous à la mise en ligne.",
    pathTitle: "Mon parcours",
    path: [
      "Deux ans d'alternance comme développeur chez Kunagi : une application iPhone et Android, de l'écran jusqu'au serveur.",
      "Bonee, une application de budget que j'ai conçue et développée de A à Z, publiée sur l'App Store et Google Play.",
      "Aujourd'hui, je lance Viktra, mon agence : des sites et des applications pour les entreprises, les indépendants et les particuliers.",
    ],
  },
  contact: {
    metaTitle: "Contact et devis gratuit | Viktra",
    metaDescription:
      "Écrivez à Adel sur WhatsApp ou appelez le 06 52 33 87 13. Réponse le jour même ou le lendemain. Premier rendez-vous de 20 minutes, gratuit.",
    h1: "Racontez-moi votre projet.",
    lead: "Écrivez-moi sur WhatsApp, appelez-moi ou remplissez le formulaire. Je vous réponds le jour même ou le lendemain. Le premier rendez-vous est gratuit et sans engagement.",
  },
};

/** Page of an offer, from its name in serviceOffers (the two lists are not in the same order). */
export function slugOfOffer(name: string): OfferSlug {
  const page = Object.values(offerPages).find((item) => item.offerName === name);
  if (!page) throw new Error(`Pas de page pour l'offre : ${name}`);
  return page.slug;
}
