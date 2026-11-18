import {
  SERVICES_EMAIL,
  SERVICES_MAILTO,
  SERVICES_PHONE_DISPLAY,
  SERVICES_PHONE_TEL,
  SERVICES_TOWNS_SENTENCE,
} from "@/lib/services";
import { mainNav, offerNav, path } from "@/lib/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="v-footer v-dark">
      <div className="v-wrap v-footer-grid">
        <div>
          <a href={path("/")} className="v-brand">
            <Logo className="v-logo" />
          </a>
          <p className="v-footer-line">Ouvert, même quand vous êtes fermé.</p>
          <p className="v-small">{SERVICES_TOWNS_SENTENCE}</p>
        </div>
        <nav aria-label="Offres">
          <h2 className="v-footer-title">Offres</h2>
          <ul>
            {offerNav.map((item) => (
              <li key={item.slug}>
                <a href={path(`/${item.slug}`)}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Viktra">
          <h2 className="v-footer-title">Viktra</h2>
          <ul>
            {mainNav.map((item) => (
              <li key={item.href}>
                <a href={path(item.href)}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="v-footer-title">Contact</h2>
          <ul>
            <li>
              <a href={SERVICES_PHONE_TEL}>{SERVICES_PHONE_DISPLAY}</a>
            </li>
            <li>
              <a href={SERVICES_MAILTO}>{SERVICES_EMAIL}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="v-wrap">
        <p className="v-small v-footer-links">
          <span>© Viktra, Adel Djahnit</span>
          <a href={path("/mentions-legales")}>Mentions légales</a>
          <a href={path("/confidentialite")}>Confidentialité</a>
        </p>
      </div>
    </footer>
  );
}
