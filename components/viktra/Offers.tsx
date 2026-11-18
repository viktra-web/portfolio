import { pricingNote } from "@/lib/product";
import { serviceGuarantees, serviceOffers, serviceSteps } from "@/lib/services";
import WhatsAppLink from "./WhatsAppLink";

export default function Offers() {
  return (
    <section id="tarifs" className="v-section" aria-labelledby="tarifs-title">
      <div className="v-wrap">
        <h2 className="v-h2" id="tarifs-title">
          Ce que ça coûte
        </h2>

        <ul className="v-offers">
          {serviceOffers.map((offer) => {
            const main = offer.besoin === "site";
            return (
              <li className={main ? "v-offer v-offer--main" : "v-offer"} key={offer.name}>
                <div className="v-offer-head">
                  <h3 className="v-h3">{offer.name}</h3>
                  <p className="v-price">{offer.price}</p>
                </div>
                <div className="v-offer-body">
                  <p>{offer.description}</p>
                  <ul className="v-ticks">
                    {offer.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <WhatsAppLink
                    className={main ? "v-btn v-btn--primary" : "v-btn v-btn--line"}
                    offre={offer.name}
                  >
                    {offer.cta}
                  </WhatsAppLink>
                </div>
              </li>
            );
          })}
        </ul>
        <p className="v-small v-note">{pricingNote}</p>

        <h2 className="v-h2 v-gap" id="deroulement">
          Comment ça se passe
        </h2>
        <ol className="v-steps">
          {serviceSteps.map((step) => (
            <li key={step.title}>
              <h3 className="v-h3">{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>

        <ul className="v-guarantees">
          {serviceGuarantees.map((item) => (
            <li key={item.title}>
              <h3 className="v-h3">{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
