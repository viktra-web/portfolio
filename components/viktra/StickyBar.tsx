import { SERVICES_PHONE_TEL } from "@/lib/services";
import WhatsAppLink from "./WhatsAppLink";

/** Mobile only, pure CSS (position: fixed): nothing is computed while the page scrolls. */
export default function StickyBar({ offre }: { offre?: string }) {
  return (
    <nav className="v4-bar" aria-label="Contact rapide">
      <WhatsAppLink className="v4-btn v4-btn--sun" offre={offre}>
        WhatsApp
      </WhatsAppLink>
      <a className="v4-btn v4-btn--light" href={SERVICES_PHONE_TEL}>
        Appeler
      </a>
    </nav>
  );
}
