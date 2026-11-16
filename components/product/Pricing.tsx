import { pricingNote } from "@/lib/product";
import { serviceOffers, serviceSteps } from "@/lib/services";

/** "à partir de 25 € / mois" → { from: "à partir de", amount: "25 €", unit: "/ mois" } */
function splitPrice(price: string) {
  const prefix = price.match(/^à partir de\s*/);
  const rest = prefix ? price.slice(prefix[0].length) : price;
  const slash = rest.indexOf(" / ");
  return {
    from: prefix ? prefix[0].trim() : null,
    amount: slash === -1 ? rest : rest.slice(0, slash),
    unit: slash === -1 ? null : rest.slice(slash + 1),
  };
}

export default function Pricing() {
  return (
    <>
      <section id="tarifs" className="pd-section pd-dark pd-pricing" aria-labelledby="tarifs-title">
        <div className="pd-wrap pd-split">
          <div className="pd-split-head">
            <h2 className="pd-h2" id="tarifs-title">
              Ce que ça coûte
            </h2>
          </div>
          <div className="pd-split-body">
            <ul className="pd-offers">
              {serviceOffers.map((offer) => {
                const price = splitPrice(offer.price);
                // The thick rule marks the usual offer, it is not decoration.
                const main = offer.besoin === "site";
                return (
                  <li className={`pd-offer${main ? " pd-offer--main" : ""}`} key={offer.name}>
                    <h3 className="pd-offer-name">{offer.name}</h3>
                    <div className="pd-offer-price">
                      <p className="pd-price">
                        {price.from ? <span className="pd-price-from">{price.from} </span> : null}
                        <span
                          className={`pd-price-amount${
                            /\d/.test(price.amount) ? "" : " pd-price-amount--text"
                          }`}
                        >
                          {price.amount}
                        </span>
                        {price.unit ? <span className="pd-price-unit"> {price.unit}</span> : null}
                      </p>
                    </div>
                    <div className="pd-offer-body">
                      <p className="pd-offer-desc">{offer.description}</p>
                      <ul className="pd-offer-items">
                        {offer.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <a
                      className={`pd-btn ${main ? "pd-btn--primary" : "pd-btn--secondary"} pd-offer-cta`}
                      href={`/product?besoin=${offer.besoin}#contact`}
                      data-besoin={offer.besoin}
                    >
                      {offer.cta}
                    </a>
                  </li>
                );
              })}
            </ul>
            <p className="pd-note">{pricingNote}</p>
          </div>
        </div>
      </section>

      <section
        id="deroulement"
        className="pd-section pd-dark pd-steps-section"
        aria-labelledby="deroulement-title"
      >
        <div className="pd-wrap">
          <h2 className="pd-h2" id="deroulement-title">
            Comment ça se passe
          </h2>
          <div className="pd-steps">
            <span className="pd-steps-track" aria-hidden="true">
              <span className="pd-steps-fill" />
            </span>
            <ol className="pd-steps-list">
              {serviceSteps.map((step, index) => (
                <li className="pd-step" key={step.title}>
                  <span className="pd-step-num" aria-hidden="true">
                    {index + 1}
                  </span>
                  <h3 className="pd-step-title">{step.title}</h3>
                  <p className="pd-step-text">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
          <a className="pd-btn pd-btn--primary pd-steps-cta" href="#contact">
            Prendre rendez-vous
          </a>
        </div>
      </section>
    </>
  );
}
