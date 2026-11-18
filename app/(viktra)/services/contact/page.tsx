import type { Metadata } from "next";
import ContactForm from "@/components/viktra/ContactForm";
import PageIntro from "@/components/viktra/PageIntro";
import Shell from "@/components/viktra/Shell";
import WhatsAppLink from "@/components/viktra/WhatsAppLink";
import { sendContactRequest } from "@/lib/contact-action";
import {
  BESOIN_OPTIONS,
  SERVICES_AREA,
  SERVICES_EMAIL,
  SERVICES_MAILTO,
  SERVICES_PHONE_DISPLAY,
  SERVICES_PHONE_TEL,
} from "@/lib/services";
import { path } from "@/lib/site";
import { pageTexts } from "@/lib/viktra-pages";

const t = pageTexts.contact;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: { canonical: path("/contact") },
};

export default function ContactPage() {
  return (
    <Shell>
      <PageIntro h1={t.h1} lead={t.lead}>
        <div className="v-cta-row">
          <WhatsAppLink className="v-btn v-btn--primary">Écrire à Adel sur WhatsApp</WhatsAppLink>
        </div>
      </PageIntro>
      <section id="contact" className="v-section" aria-label="Formulaire et coordonnées">
        <div className="v-wrap v-split">
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
          <div>
            <h2 className="v-h3 v-form-title" id="contact-title" tabIndex={-1}>
              Le formulaire
            </h2>
            <ContactForm
              action={sendContactRequest}
              besoinOptions={BESOIN_OPTIONS}
              email={SERVICES_EMAIL}
              phoneDisplay={SERVICES_PHONE_DISPLAY}
              phoneTel={SERVICES_PHONE_TEL}
              privacyLink={<a href={path("/confidentialite")}>Confidentialité</a>}
            />
          </div>
        </div>
      </section>
    </Shell>
  );
}
