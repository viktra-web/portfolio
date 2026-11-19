import { mainNav, offerNav, path } from "@/lib/site";
import Logo from "./Logo";

/** Same header on every page. The mobile menu is a native <details>: no JavaScript. */
export default function Header({ current }: { current?: string }) {
  const links = [
    ...offerNav.map((item) => ({ href: `/${item.slug}`, label: item.label })),
    ...mainNav,
  ];
  const aria = (href: string) => (href === current ? ("page" as const) : undefined);
  return (
    <header className="v4-top">
      <a className="v4-skip" href="#contenu">
        Aller au contenu
      </a>
      <div className="v4-wrap v4-top-row">
        <a href={path("/")} className="v4-brand" aria-current={aria("/")}>
          <Logo className="v4-logo" />
          <span>par Adel Djahnit</span>
        </a>
        <nav className="v4-nav" aria-label="Menu principal">
          {links.map((item) => (
            <a key={item.href} href={path(item.href)} aria-current={aria(item.href)}>
              {item.label}
            </a>
          ))}
        </nav>
        <details className="v4-burger">
          <summary>Menu</summary>
          <nav aria-label="Menu">
            <a href={path("/")} aria-current={aria("/")}>
              Accueil
            </a>
            {links.map((item) => (
              <a key={item.href} href={path(item.href)} aria-current={aria(item.href)}>
                {item.label}
              </a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
