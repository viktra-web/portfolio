import { SERVICES_PHONE_DISPLAY, SERVICES_PHONE_TEL } from "@/lib/services";
import { path } from "@/lib/site";
import WhatsAppLink from "./WhatsAppLink";

/** Last block of every page: the three ways to reach Adel, WhatsApp first. */
export default function CtaBand({ offre }: { offre?: string }) {
  return (
    <section className="v-section v-dark" aria-labelledby="cta-title">
      <div className="v-wrap">
        <h2 className="v-h2" id="cta-title">
          Premier rendez-vous de 20 minutes, gratuit.
        </h2>
        <p className="v-lead">
          Chez vous ou par téléphone, sans engagement. Je vous réponds le jour même ou le
          lendemain.
        </p>
        <div className="v-cta-row">
          <WhatsAppLink className="v-btn v-btn--primary" offre={offre}>
            Écrire à Adel sur WhatsApp
          </WhatsAppLink>
          <a className="v-btn v-btn--light" href={SERVICES_PHONE_TEL}>
            Appeler le {SERVICES_PHONE_DISPLAY}
          </a>
        </div>
        <a className="v-link" href={path("/contact")}>
          Ou remplir le formulaire
        </a>
      </div>
    </section>
  );
}
