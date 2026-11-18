// Where the Viktra site lives. Today: adeldjahnit.com/services. When viktra.fr is ready,
// change BASE to "" and SITE_URL to "https://viktra.fr": every link follows.
export const SITE_URL = "https://www.adeldjahnit.com";
export const BASE = "/services";

/** Internal link: path("/tarifs") → "/services/tarifs", path("/") → "/services". */
export function path(p: string) {
  if (p === "/" || p === "") return BASE || "/";
  return `${BASE}${p}`;
}

export const url = (p: string) => `${SITE_URL}${path(p)}`;

export type OfferSlug = "site-vitrine" | "visibilite-google" | "suivi-maintenance" | "application";

/** Menu: the four offers, then the other pages. */
export const offerNav: { slug: OfferSlug; label: string }[] = [
  { slug: "site-vitrine", label: "Site vitrine" },
  { slug: "visibilite-google", label: "Visibilité Google" },
  { slug: "suivi-maintenance", label: "Suivi et maintenance" },
  { slug: "application", label: "Application" },
];

export const mainNav = [
  { href: "/tarifs", label: "Tarifs" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];
