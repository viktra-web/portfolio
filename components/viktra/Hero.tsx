import { productHero, storyShared, storyTrades } from "@/lib/product";
import {
  SERVICES_PHONE_DISPLAY,
  SERVICES_PHONE_TEL,
  whatsappUrl,
} from "@/lib/services";
import TradeDemo from "./TradeDemo";
import Logo from "./Logo";
import WhatsAppLink from "./WhatsAppLink";

export default function Hero() {
  return (
    <header id="top" className="v-hero">
      <div className="v-wrap v-bar">
        <a href="#top" className="v-brand">
          <Logo className="v-logo" />
          <span className="v-brand-by">par Adel Djahnit</span>
        </a>
        <div className="v-bar-actions">
          <a href={SERVICES_PHONE_TEL} className="v-bar-phone">
            {SERVICES_PHONE_DISPLAY}
          </a>
          <WhatsAppLink className="v-btn v-btn--primary v-btn--sm">
            WhatsApp
          </WhatsAppLink>
        </div>
      </div>

      <div className="v-wrap v-hero-body">
        <div>
          <h1 className="v-h1">{productHero.title}</h1>
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
    </header>
  );
}
