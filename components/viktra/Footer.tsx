import { SERVICES_TOWNS_SENTENCE } from "@/lib/services";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="v-footer v-dark">
      <div className="v-wrap">
        <Logo className="v-logo" />
        <p className="v-footer-line">Ouvert, même quand vous êtes fermé.</p>
        <p className="v-small">{SERVICES_TOWNS_SENTENCE}</p>
        <p className="v-small v-footer-links">
          <span>© Viktra, Adel Djahnit</span>
          <a href="/services/confidentialite">Confidentialité</a>
          <a href="/services#top">Haut de page</a>
        </p>
      </div>
    </footer>
  );
}
