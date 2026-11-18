import { mainNav, offerNav, path } from "@/lib/site";
import Logo from "./Logo";
import WhatsAppLink from "./WhatsAppLink";

/** Same header on every page. Menus are native <details>: no JavaScript. */
export default function Header() {
  return (
    <header className="v-top">
      <div className="v-wrap v-bar">
        <a href={path("/")} className="v-brand">
          <Logo className="v-logo" />
          <span className="v-brand-by">par Adel Djahnit</span>
        </a>

        <nav className="v-nav" aria-label="Menu principal">
          <details className="v-drop">
            <summary>Offres</summary>
            <ul>
              {offerNav.map((item) => (
                <li key={item.slug}>
                  <a href={path(`/${item.slug}`)}>{item.label}</a>
                </li>
              ))}
            </ul>
          </details>
          {mainNav.map((item) => (
            <a key={item.href} href={path(item.href)}>
              {item.label}
            </a>
          ))}
          <WhatsAppLink className="v-btn v-btn--primary v-btn--sm">WhatsApp</WhatsAppLink>
        </nav>

        <details className="v-burger">
          <summary>Menu</summary>
          <nav aria-label="Menu">
            <p className="v-small">Offres</p>
            <ul>
              {offerNav.map((item) => (
                <li key={item.slug}>
                  <a href={path(`/${item.slug}`)}>{item.label}</a>
                </li>
              ))}
            </ul>
            <ul>
              {mainNav.map((item) => (
                <li key={item.href}>
                  <a href={path(item.href)}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
