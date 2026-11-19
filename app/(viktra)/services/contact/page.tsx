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
import { BreadcrumbJsonLd } from "@/components/viktra/seo/PageJsonLd";
import { viktraMetadata } from "@/components/viktra/seo/metadata";

const t = pageTexts.contact;

export const metadata: Metadata = viktraMetadata({
  pagePath: "/contact",
  title: t.metaTitle,
  description: t.metaDescription,
});

export default function ContactPage() {
  return (
    <Shell current="/contact">
      <PageIntro h1={t.h1} lead={t.lead}>
        <div className="v4-actions">
          <WhatsAppLink className="v4-btn v4-btn--sun">Écrire à Adel sur WhatsApp</WhatsAppLink>
        </div>
        <p className="v4-call">
          Ou appelez le <a href={SERVICES_PHONE_TEL}>{SERVICES_PHONE_DISPLAY}</a>
        </p>
      </PageIntro>
      <section id="contact" className="v4-section" aria-label="Formulaire et coordonnées">
        <div className="v4-wrap v4-split">
          <dl className="v4-coords">
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
              <dt>Déplacements</dt>
              <dd>{SERVICES_AREA.join(", ")}</dd>
            </div>
          </dl>
          <div>
            <h2 className="v4-h3 v4-form-title" id="contact-title" tabIndex={-1}>
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
      <BreadcrumbJsonLd pagePath="/contact" label="Contact" />
    </Shell>
  );
}
