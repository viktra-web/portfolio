// Structured data (schema.org) of the Viktra site. Every URL comes from lib/site.ts, so the
// move to viktra.fr (BASE and SITE_URL) changes them all. Rule: nothing invented — no reviews,
// no rating, no opening hours, no street address, no precise geo.
import { SERVICES_AREA, SERVICES_EMAIL, type ServiceOffer } from "@/lib/services";
import { SITE_URL, url } from "@/lib/site";
// Static import: the metadata route of this file gets a hashed name (route group), and only
// applies to /services itself. The import gives a stable, fingerprinted URL for every page.
import ogImage from "@/app/(viktra)/services/opengraph-image.png";

/** Adel's portfolio: stays on adeldjahnit.com whatever the Viktra domain. */
export const PORTFOLIO_URL = "https://www.adeldjahnit.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/adel-djahnit-a8a677199/";

export const ORG_ID = `${url("/")}#viktra`;
export const PERSON_ID = `${url("/a-propos")}#adel-djahnit`;

/** Logo files of public/brand: served at the domain root, outside BASE. */
export const LOGO_URL = `${SITE_URL}/brand/viktra-symbol.svg`;
/** opengraph-image.png of app/(viktra)/services (1200 × 630). */
export const OG_IMAGE = {
  url: new URL(ogImage.src, SITE_URL).toString(),
  width: ogImage.width,
  height: ogImage.height,
  alt: "Viktra. Ouvert, même quand vous êtes fermé.",
};

export const HOME_DESCRIPTION =
  "Sites internet et applications pour les entreprises, les indépendants et les particuliers, par Adel Djahnit, développeur web et mobile. Prix fixe, premier rendez-vous gratuit.";

export const areaServed = [
  ...SERVICES_AREA.map((name) => ({ "@type": "City", name })),
  { "@type": "AdministrativeArea", name: "Pays de Gex" },
];

/**
 * Offer from the displayed price: "à partir de 690 €" → minPrice 690 EUR,
 * "/ mois" → monthly, "Sur devis" → no price (the page shows none).
 */
export function offerSchema(offer: ServiceOffer, pageUrl?: string) {
  const amount = offer.price.match(/\d+/);
  const base = {
    "@type": "Offer",
    name: offer.name,
    description: offer.description,
    ...(pageUrl ? { url: pageUrl } : {}),
    seller: { "@id": ORG_ID },
  };
  if (!amount) return base;
  const monthly = offer.price.includes("mois");
  return {
    ...base,
    priceCurrency: "EUR",
    priceSpecification: {
      "@type": monthly ? "UnitPriceSpecification" : "PriceSpecification",
      priceCurrency: "EUR",
      minPrice: Number(amount[0]),
      ...(monthly ? { unitCode: "MON", unitText: "mois" } : {}),
    },
  };
}

/** Home: the business (ProfessionalService is a LocalBusiness subtype) and the site. */
export function businessGraph(offers: { offer: ServiceOffer; pageUrl: string }[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": ORG_ID,
        name: "Viktra",
        slogan: "Ouvert, même quand vous êtes fermé.",
        description: HOME_DESCRIPTION,
        url: url("/"),
        logo: LOGO_URL,
        image: OG_IMAGE.url,
        telephone: "+33652338713",
        email: SERVICES_EMAIL,
        priceRange: "À partir de 150 €",
        currenciesAccepted: "EUR",
        founder: { "@id": PERSON_ID, "@type": "Person", name: "Adel Djahnit" },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Divonne-les-Bains",
          postalCode: "01220",
          addressRegion: "Ain",
          addressCountry: "FR",
        },
        areaServed,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Offres Viktra",
          itemListElement: offers.map(({ offer, pageUrl }) => offerSchema(offer, pageUrl)),
        },
        // sameAs: add the Google Business Profile URL (then LinkedIn, PagesJaunes…) once they exist.
      },
      {
        // Site name in Google: only read on a domain home page, so useful once on viktra.fr.
        "@type": "WebSite",
        "@id": `${url("/")}#website`,
        name: "Viktra",
        url: url("/"),
        inLanguage: "fr-FR",
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}

/** One offer page: the service, its offer, and the breadcrumb. */
export function serviceGraph(offer: ServiceOffer, pagePath: string, label: string) {
  const pageUrl = url(pagePath);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: offer.name,
        serviceType: offer.name,
        description: offer.description,
        url: pageUrl,
        provider: { "@id": ORG_ID, "@type": "ProfessionalService", name: "Viktra" },
        areaServed,
        offers: offerSchema(offer, pageUrl),
      },
      breadcrumbSchema(pagePath, label),
    ],
  };
}

export function breadcrumbSchema(pagePath: string, label: string) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${url(pagePath)}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Viktra", item: url("/") },
      { "@type": "ListItem", position: 2, name: label, item: url(pagePath) },
    ],
  };
}

export function breadcrumbGraph(pagePath: string, label: string) {
  return { "@context": "https://schema.org", "@graph": [breadcrumbSchema(pagePath, label)] };
}

/** /a-propos: Adel, founder of Viktra. No photo until ABOUT_PHOTO exists. */
export function personGraph(image?: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: "Adel Djahnit",
        jobTitle: "Développeur web",
        url: url("/a-propos"),
        ...(image ? { image } : {}),
        worksFor: { "@id": ORG_ID, "@type": "ProfessionalService", name: "Viktra" },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Divonne-les-Bains",
          postalCode: "01220",
          addressCountry: "FR",
        },
        sameAs: [PORTFOLIO_URL, LINKEDIN_URL],
      },
      breadcrumbSchema("/a-propos", "À propos"),
    ],
  };
}
