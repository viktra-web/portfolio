// Texts of the Viktra pages. Rule: nothing invented. Each sentence comes from a validated
// text (lib/services.ts, lib/product.ts) or says plainly what is missing: [à demander].
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
    metaTitle: "Création de site vitrine Pays de Gex, dès 690 € | Viktra",
    metaDescription:
      "Site vitrine de 1 à 5 pages pour les commerces et artisans de Divonne, Gex, Ferney, Saint-Genis, Nyon et Genève. Lisible sur téléphone, prix fixe.",
    h1: "Un site vitrine pour votre commerce du Pays de Gex, dès 690 €.",
    lead: "Un site clair, rapide et lisible sur téléphone, qui présente votre activité et permet de vous contacter ou de demander un devis en un clic.",
    forWhomTitle: "Pour qui",
    forWhom: [
      "Vous voulez présenter vos prestations en détail, afficher vos tarifs ou recevoir des demandes de devis.",
      "Vous n'avez ni textes ni photos. Je vous aide à rédiger les textes pendant le rendez-vous, et on peut partir des photos de votre téléphone.",
      "Vous êtes à Divonne-les-Bains, Gex, Ferney-Voltaire, Saint-Genis-Pouilly, Nyon ou Genève.",
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
    metaTitle: "Fiche Google Divonne et Pays de Gex, dès 150 € | Viktra",
    metaDescription:
      "Fiche Google complète et à jour : photos, horaires, catégories, description, réponses aux avis. Pour les commerces de Divonne, Gex, Nyon et Genève.",
    h1: "Une fiche Google à jour pour votre commerce du Pays de Gex, dès 150 €.",
    lead: "Photos, horaires, catégories, description, réponses aux avis. C'est souvent la première chose que vos clients voient.",
    forWhomTitle: "Pour qui",
    forWhom: [
      "Vous voulez être trouvé quand on tape votre métier et votre ville sur Google.",
      "Vos horaires, vos photos ou votre description sur Google ne sont pas à jour.",
      "Vous n'avez pas besoin d'un site pour l'instant. Pour certains commerces, une fiche Google suffit : c'est pour ça que je la propose seule.",
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
    metaTitle: "Maintenance de site internet, Pays de Gex | Viktra",
    metaDescription:
      "Hébergement, mises à jour et petites modifications de votre site (horaires, tarifs, photos, carte). Dès 50 €/mois, sans engagement, Pays de Gex.",
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
    metaTitle: "Création d'application mobile et web, Pays de Gex | Viktra",
    metaDescription:
      "Application iPhone, Android ou web pour un commerce : réservation, fidélité, outil pour votre équipe. Publication sur les stores. Sur devis.",
    h1: "Création d'application mobile ou web, quand un site ne suffit plus.",
    lead: "Réservation, fidélité, outil pour votre équipe. Chaque projet est différent, le prix aussi : on en parle, puis vous recevez un devis.",
    forWhomTitle: "Pour qui",
    forWhom: [
      "Vous voulez proposer à vos clients une réservation ou une carte de fidélité, ou donner un outil à votre équipe.",
      "Un site vitrine ne suffit pas pour ce que vous voulez faire.",
    ],
    detailsTitle: "Un exemple",
    details: [
      "Bonee, une application de budget que j'ai co-développée, est publiée sur l'App Store et le Google Play Store.",
    ],
    faq: ["Vous travaillez avec des clients en Suisse"],
  },
};

export const pageTexts = {
  tarifs: {
    metaTitle: "Tarifs site vitrine et fiche Google, Pays de Gex | Viktra",
    metaDescription:
      "Site vitrine dès 690 €, fiche Google dès 150 €, suivi dès 50 €/mois sans engagement. Devis à prix fixe après un premier rendez-vous gratuit.",
    h1: "Tarifs : site vitrine, fiche Google et suivi",
    lead: "Ce sont des prix de départ. Le prix exact est écrit dans votre devis, après notre rendez-vous.",
  },
  realisations: {
    metaTitle: "Réalisations d'Adel Djahnit, Divonne-les-Bains | Viktra",
    metaDescription:
      "Site du club JSL Judo, textes du site Globalpronet à Genève, application Bonee : les projets d'Adel Djahnit, développeur web à Divonne-les-Bains.",
    h1: "Réalisations",
    lead: "Trois projets, et ce que j'ai fait sur chacun.",
  },
  aPropos: {
    metaTitle: "Adel Djahnit, développeur web à Divonne-les-Bains | Viktra",
    metaDescription:
      "Adel Djahnit, développeur web à Divonne-les-Bains. Un seul interlocuteur, du premier rendez-vous au suivi, pour les commerces du Pays de Gex et de Genève.",
    h1: "Adel Djahnit, développeur web à Divonne-les-Bains.",
    lead: "On se rencontre en personne, et c'est moi qui crée votre site, du premier rendez-vous à la mise en ligne.",
  },
  contact: {
    metaTitle: "Contact et devis gratuit, Divonne-les-Bains | Viktra",
    metaDescription:
      "Écrivez à Adel sur WhatsApp ou appelez le 06 52 33 87 13. Réponse le jour même ou le lendemain. Premier rendez-vous de 20 minutes, gratuit.",
    h1: "Dites-moi ce que vous faites.",
    lead: "Écrivez-moi sur WhatsApp, appelez-moi ou remplissez le formulaire. Je vous réponds le jour même ou le lendemain. Le premier rendez-vous est gratuit et sans engagement.",
  },
};

/** Page of an offer, from its name in serviceOffers (the two lists are not in the same order). */
export function slugOfOffer(name: string): OfferSlug {
  const page = Object.values(offerPages).find((item) => item.offerName === name);
  if (!page) throw new Error(`Pas de page pour l'offre : ${name}`);
  return page.slug;
}
