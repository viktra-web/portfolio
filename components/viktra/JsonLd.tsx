import { serviceOffers } from "@/lib/services";
import { offerNav, url } from "@/lib/site";
import { offerPages } from "@/lib/viktra-pages";
import { businessGraph } from "./seo/schema";

/** Inline JSON-LD, with "<" escaped so the content cannot close the script tag. */
export function JsonLdScript({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

/** Home: ProfessionalService "Viktra" with its four offers, each linked to its page. */
export default function JsonLd() {
  // Match offers to pages by name (offerNav and serviceOffers are not in the same order).
  const offers = offerNav.flatMap(({ slug }) => {
    const offer = serviceOffers.find((item) => item.name === offerPages[slug].offerName);
    return offer ? [{ offer, pageUrl: url(`/${slug}`) }] : [];
  });
  return <JsonLdScript data={businessGraph(offers)} />;
}
