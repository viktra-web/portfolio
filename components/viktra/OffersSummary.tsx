import { serviceOffers } from "@/lib/services";
import { path } from "@/lib/site";
import { slugOfOffer } from "@/lib/viktra-pages";

/** Home: one line per offer, each leading to its own page. */
export default function OffersSummary() {
  return (
    <section id="offres" className="v-section" aria-labelledby="offres-title">
      <div className="v-wrap">
        <h2 className="v-h2" id="offres-title">
          Ce que je fais
        </h2>
        <ul className="v-index">
          {serviceOffers.map((offer) => (
            <li key={offer.name}>
              <a href={path(`/${slugOfOffer(offer.name)}`)}>
                <span className="v-index-name">{offer.name}</span>
                <span className="v-index-price">{offer.price}</span>
                <span className="v-index-desc">{offer.description}</span>
              </a>
            </li>
          ))}
        </ul>
        <a className="v-link" href={path("/tarifs")}>
          Comparer les tarifs
        </a>
      </div>
    </section>
  );
}
