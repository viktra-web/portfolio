import { SERVICES_AREA, SERVICES_EMAIL, serviceOffers } from "@/lib/services";

const SITE = "https://www.adeldjahnit.com";
// Canonical URL of the Viktra page.
const PAGE_URL = `${SITE}/services`;
const FOUNDER_ID = `${SITE}/#adel-djahnit`;

const offers = serviceOffers.map((offer) => {
  const base = { "@type": "Offer", name: offer.name, description: offer.description };
  const amount = offer.price.match(/\d+/);
  // "Sur devis": no price in the page, so none here.
  if (!amount) return base;
  return {
    ...base,
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      priceCurrency: "EUR",
      minPrice: Number(amount[0]),
      ...(offer.price.includes("mois") ? { unitCode: "MON" } : {}),
    },
  };
});

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${PAGE_URL}#viktra`,
      name: "Viktra",
      slogan: "Ouvert, même quand vous êtes fermé.",
      url: PAGE_URL,
      telephone: "+33652338713",
      email: SERVICES_EMAIL,
      founder: { "@id": FOUNDER_ID },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Divonne-les-Bains",
        postalCode: "01220",
        addressRegion: "Ain",
        addressCountry: "FR",
      },
      areaServed: [
        ...SERVICES_AREA.map((name) => ({ "@type": "City", name })),
        { "@type": "AdministrativeArea", name: "Pays de Gex" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Offres Viktra",
        itemListElement: offers,
      },
    },
    {
      "@type": "Person",
      "@id": FOUNDER_ID,
      name: "Adel Djahnit",
      url: SITE,
      jobTitle: "Développeur web",
    },
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
    />
  );
}
