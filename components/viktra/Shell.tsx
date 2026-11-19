import type { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import StickyBar from "./StickyBar";

/**
 * Header, page, footer and mobile bar: the frame of every Viktra page.
 * `current` is the page path as in lib/site.ts ("/", "/tarifs"…), marked in the menu.
 */
export default function Shell({
  children,
  current,
  offre,
}: {
  children: ReactNode;
  current?: string;
  offre?: string;
}) {
  return (
    <>
      <Header current={current} />
      <main id="contenu">{children}</main>
      <Footer />
      <StickyBar offre={offre} />
    </>
  );
}
