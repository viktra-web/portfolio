import {
  SERVICES_EMAIL,
  SERVICES_MAILTO,
  SERVICES_PHONE_DISPLAY,
  SERVICES_PHONE_TEL,
} from "@/lib/services";
import { mainNav, offerNav, path } from "@/lib/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="v4-foot">
      <div className="v4-wrap v4-foot-grid">
        <div>
          <a href={path("/")} aria-label="Viktra, accueil">
            <Logo className="v4-logo" />
          </a>
          <p className="v4-foot-line">Ouvert, même quand vous êtes fermé.</p>
        </div>
        <nav aria-label="Pages">
          {offerNav.map((item) => (
            <a key={item.slug} href={path(`/${item.slug}`)}>
              {item.label}
            </a>
          ))}
          {mainNav.map((item) => (
            <a key={item.href} href={path(item.href)}>
              {item.label}
            </a>
          ))}
        </nav>
        <div>
          <a href={SERVICES_PHONE_TEL}>{SERVICES_PHONE_DISPLAY}</a>
          <a href={SERVICES_MAILTO}>{SERVICES_EMAIL}</a>
          <a href={path("/mentions-legales")}>Mentions légales</a>
          <a href={path("/confidentialite")}>Confidentialité</a>
        </div>
      </div>
    </footer>
  );
}
