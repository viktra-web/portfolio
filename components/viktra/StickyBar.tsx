import { SERVICES_PHONE_TEL } from "@/lib/services";
import WhatsAppLink from "./WhatsAppLink";

/** Mobile only, pure CSS (position: fixed): nothing is computed while the page scrolls. */
export default function StickyBar() {
  return (
    <nav aria-label="Contact rapide" className="v-sticky">
      <WhatsAppLink className="v-btn v-btn--primary">WhatsApp</WhatsAppLink>
      <a className="v-btn v-btn--light" href={SERVICES_PHONE_TEL}>
        Appeler
      </a>
    </nav>
  );
}
