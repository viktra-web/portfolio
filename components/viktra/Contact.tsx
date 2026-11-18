import { sendContactRequest } from "@/lib/contact-action";
import {
  BESOIN_OPTIONS,
  SERVICES_AREA,
  SERVICES_EMAIL,
  SERVICES_MAILTO,
  SERVICES_PHONE_DISPLAY,
  SERVICES_PHONE_TEL,
} from "@/lib/services";
import ContactForm from "./ContactForm";
import WhatsAppLink from "./WhatsAppLink";

export default function Contact() {
  return (
    <section id="contact" className="v-section v-dark" aria-labelledby="contact-title">
      <div className="v-wrap v-split">
        <div>
          <h2 className="v-h2" id="contact-title" tabIndex={-1}>
            Dites-moi ce que vous faites.
          </h2>
          <p className="v-lead">
            Je vous réponds le jour même ou le lendemain. Le premier rendez-vous est gratuit et sans
            engagement.
          </p>
          <WhatsAppLink className="v-btn v-btn--primary">Écrire à Adel sur WhatsApp</WhatsAppLink>
          <dl className="v-coords">
            <div>
              <dt>Téléphone</dt>
              <dd>
                <a href={SERVICES_PHONE_TEL}>{SERVICES_PHONE_DISPLAY}</a>
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={SERVICES_MAILTO}>{SERVICES_EMAIL}</a>
              </dd>
            </div>
            <div>
              <dt>Zone</dt>
              <dd>{SERVICES_AREA.join(", ")}</dd>
            </div>
          </dl>
        </div>
        <div>
          <h3 className="v-h3 v-form-title">Ou par le formulaire</h3>
          <ContactForm
            action={sendContactRequest}
            besoinOptions={BESOIN_OPTIONS}
            email={SERVICES_EMAIL}
            phoneDisplay={SERVICES_PHONE_DISPLAY}
            phoneTel={SERVICES_PHONE_TEL}
            privacyLink={<a href="/services/confidentialite">Confidentialité</a>}
          />
        </div>
      </div>
    </section>
  );
}
