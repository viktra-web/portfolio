import ContactForm from "@/components/product/ContactForm";
import { sendContactRequest } from "@/app/services/actions";
import {
  BESOIN_OPTIONS,
  SERVICES_AREA,
  SERVICES_EMAIL,
  SERVICES_MAILTO,
  SERVICES_PHONE_DISPLAY,
  SERVICES_PHONE_TEL,
  whatsappUrl,
} from "@/lib/services";

export default function Contact() {
  return (
    <section id="contact" className="pd-section pd-contact" aria-labelledby="contact-title">
      <div className="pd-wrap">
        <div className="pd-head">
          {/* tabIndex: focus target of the offer links (ContactForm useOfferLinks). */}
          <h2 className="pd-h2" id="contact-title" tabIndex={-1}>
            Dites-moi ce que vous faites.
          </h2>
          <p className="pd-body">
            Je vous réponds le jour même ou le lendemain. Le premier rendez-vous est gratuit et sans engagement.
          </p>
        </div>
        <div className="pd-contact-grid">
          <aside className="pd-call" aria-labelledby="contact-side-title">
            <h3 className="pd-call-title" id="contact-side-title">
              Le plus simple : WhatsApp
            </h3>
            <a
              className="pd-btn pd-btn--primary pd-call-whatsapp"
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Écrire à Adel sur WhatsApp
            </a>
            <dl className="pd-call-list">
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
          </aside>
          <div className="pd-contact-form">
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
      </div>
    </section>
  );
}
