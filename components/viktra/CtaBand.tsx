import { SERVICES_PHONE_DISPLAY, SERVICES_PHONE_TEL } from "@/lib/services";
import { path } from "@/lib/site";
import WhatsAppLink from "./WhatsAppLink";

/** Last block of every inner page: the three ways to reach Adel, WhatsApp first. */
export default function CtaBand({ offre }: { offre?: string }) {
  return (
    <section className="v4-section v4-section--dark" aria-labelledby="cta-title">
      <div className="v4-wrap">
        <h2 className="v4-h2" id="cta-title">
          Premier rendez-vous de 20 minutes, gratuit.
        </h2>
        <p className="v4-lead">
          Chez vous ou par téléphone, sans engagement. Je vous réponds le jour même ou le
          lendemain.
        </p>
        <div className="v4-actions">
          <WhatsAppLink className="v4-btn v4-btn--sun" offre={offre}>
            Écrire à Adel sur WhatsApp
          </WhatsAppLink>
          <a className="v4-btn v4-btn--line" href={SERVICES_PHONE_TEL}>
            Appeler le {SERVICES_PHONE_DISPLAY}
          </a>
        </div>
        <a className="v4-more v4-dark-link" href={path("/contact")}>
          Ou remplir le formulaire
        </a>
      </div>
    </section>
  );
}
