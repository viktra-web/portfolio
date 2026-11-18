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
    metaTitle: "Création de site vitrine dans le Pays de Gex, dès 690 € | Viktra",
    metaDescription:
      "Site vitrine de 1 à 5 pages pour les commerces et artisans de Divonne, Gex, Ferney, Saint-Genis, Nyon et Genève. Lisible sur téléphone, prix fixe, en ligne en 2 semaines environ.",
    h1: "Un site vitrine pour votre commerce, dès 690 €.",
    lead: "Un site clair, rapide et lisible sur téléphone, qui présente votre activité et permet de vous contacter ou de demander un devis en un clic.",
    forWhomTitle: "Pour qui",
    forWhom: [
      "Vous voulez présenter vos prestations en détail, afficher vos tarifs ou recevoir des demandes de devis.",
      "Vous n'avez ni textes ni photos : on les prépare ensemble pendant le rendez-vous, les photos de votre téléphone suffisent.",
      "Vous êtes à Divonne-les-Bains, Gex, Ferney-Voltaire, Saint-Genis-Pouilly, Nyon ou Genève.",
    ],
    detailsTitle: "Ce que vous recevez",
    details: [
      "Le nom de domaine est à votre nom.",
      "Des textes qui citent votre métier et votre ville, pour le référencement local.",
      "Vous voyez l'avancement et vous donnez votre avis à chaque étape.",
    ],
    faq: ["Combien coûte", "En combien de temps", "Je n'ai ni textes", "Est-ce que je serai premier"],
  },
  "visibilite-google": {
    slug: "visibilite-google",
    offerName: "Visibilité Google",
    metaTitle: "Fiche Google pour commerces et artisans du Pays de Gex, dès 150 € | Viktra",
    metaDescription:
      "Fiche Google complète et à jour (photos, horaires, catégories, description, réponses aux avis) pour les commerces de Divonne, Gex, Nyon et Genève. Dès 150 €.",
    h1: "Votre fiche Google complète et à jour, dès 150 €.",
    lead: "Photos, horaires, catégories, description, réponses aux avis. C'est souvent la première chose que vos clients voient.",
    forWhomTitle: "Pour qui",
    forWhom: [
      "Pour certains commerces, une fiche Google suffit : c'est pour ça que je la propose seule.",
      "Vous voulez être trouvé quand on tape votre métier et votre ville sur Google.",
    ],
    detailsTitle: "Ce que je fais",
    details: [
      "Une fiche Google complète : photos, horaires, catégories, description.",
      "Des conseils pour obtenir des avis.",
    ],
    faq: ["Une fiche Google ne suffit", "Est-ce que je serai premier", "Combien coûte"],
  },
  "suivi-maintenance": {
    slug: "suivi-maintenance",
    offerName: "Suivi et maintenance",
    metaTitle: "Suivi et maintenance de site internet, dès 50 €/mois | Viktra",
    metaDescription:
      "Hébergement, mises à jour et petites modifications de votre site (horaires, carte, tarifs, photos), sans engagement. Pays de Gex, Nyon, Genève.",
    h1: "Votre site suivi et à jour, dès 50 € par mois.",
    lead: "Hébergement, mises à jour et petites modifications (horaires, carte, tarifs, photos). Vous m'envoyez un message, je m'en occupe.",
    forWhomTitle: "Ce qui est compris",
    forWhom: [
      "L'hébergement du site.",
      "Les mises à jour.",
      "Les petites modifications : horaires, tarifs, photos, carte.",
    ],
    detailsTitle: "Vos garanties",
    details: [
      "Sans engagement : le suivi s'arrête quand vous le souhaitez.",
      "Le nom de domaine est à votre nom. Si vous arrêtez le suivi, je vous remets tout ce qu'il faut pour le confier à quelqu'un d'autre.",
      "Le nom de domaine se paie à part, une fois par an : son prix exact figure dans le devis.",
    ],
    faq: ["Et ensuite"],
  },
  application: {
    slug: "application",
    offerName: "Création d'application",
    metaTitle: "Création d'application mobile ou web sur mesure | Viktra",
    metaDescription:
      "Application iPhone, Android ou web pour un commerce ou une petite entreprise : réservation, fidélité, outil pour votre équipe. Sur devis.",
    h1: "Une application sur mesure, quand un site ne suffit plus.",
    lead: "Réservation, fidélité, outil pour votre équipe. Chaque projet est différent, le prix aussi : on en parle, puis vous recevez un devis.",
    forWhomTitle: "Ce que je fais",
    forWhom: [
      "Une application iPhone, Android ou web.",
      "La publication sur l'App Store et Google Play.",
      "Le suivi après la mise en ligne.",
    ],
    detailsTitle: "Un exemple",
    details: [
      "Bonee, une application de budget que j'ai co-développée, est publiée sur l'App Store et le Google Play Store.",
    ],
    faq: [],
  },
};

export const pageTexts = {
  tarifs: {
    metaTitle: "Tarifs : site vitrine, fiche Google, suivi | Viktra",
    metaDescription:
      "Site vitrine dès 690 €, fiche Google dès 150 €, suivi dès 50 €/mois sans engagement. Devis à prix fixe après un premier rendez-vous gratuit.",
    h1: "Les tarifs",
    lead: "Prix de départ. Le prix exact est écrit dans votre devis, après notre rendez-vous.",
  },
  realisations: {
    metaTitle: "Réalisations | Viktra",
    metaDescription: "Les projets d'Adel Djahnit : site du club JSL Judo, textes du site Globalpronet, application Bonee.",
    h1: "Réalisations",
    lead: "Ce que j'ai fait, projet par projet.",
  },
  aPropos: {
    metaTitle: "À propos : Adel Djahnit, développeur web à Divonne-les-Bains | Viktra",
    metaDescription:
      "Adel Djahnit, développeur web à Divonne-les-Bains. Un seul interlocuteur, du premier rendez-vous au suivi, pour les commerces du Pays de Gex, de Nyon et de Genève.",
    h1: "Vous parlez à celui qui fait.",
    lead: "Je suis Adel Djahnit. On se rencontre en personne, et c'est moi qui crée votre site, du premier rendez-vous à la mise en ligne.",
  },
  contact: {
    metaTitle: "Contact et devis gratuit | Viktra",
    metaDescription:
      "Écrivez à Adel sur WhatsApp, appelez le 06 52 33 87 13 ou remplissez le formulaire. Premier rendez-vous de 20 minutes, gratuit.",
    h1: "Dites-moi ce que vous faites.",
    lead: "Je vous réponds le jour même ou le lendemain. Le premier rendez-vous est gratuit et sans engagement.",
  },
};
