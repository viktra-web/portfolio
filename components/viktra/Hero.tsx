import { productHero, storyShared, storyTrades } from "@/lib/product";
import {
  SERVICES_PHONE_DISPLAY,
  SERVICES_PHONE_TEL,
  whatsappUrl,
} from "@/lib/services";
import TradeDemo from "./TradeDemo";
import WhatsAppLink from "./WhatsAppLink";

export default function Hero() {
  return (
    <section id="top" className="v-hero" aria-labelledby="hero-title">
      <div className="v-wrap v-hero-body">
        <div>
          <h1 className="v-h1" id="hero-title">{productHero.title}</h1>
          <p className="v-lead">{productHero.lead}</p>
          <div className="v-hero-actions">
            <WhatsAppLink className="v-btn v-btn--primary">
              Écrire à Adel sur WhatsApp
            </WhatsAppLink>
            <p className="v-hero-call">
              Ou appelez le{" "}
              <a href={SERVICES_PHONE_TEL}>{SERVICES_PHONE_DISPLAY}</a>
            </p>
            <p className="v-small">{productHero.ctaNote}</p>
          </div>
          <ul className="v-facts">
            {productHero.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>
        {/* The memorable thing of the page: what a customer sees on his phone. */}
        <TradeDemo
          trades={storyTrades}
          shared={storyShared}
          whatsappBase={whatsappUrl()}
        />
      </div>
    </section>
  );
}
