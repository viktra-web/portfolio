import type { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import StickyBar from "./StickyBar";

/** Header, page, footer and mobile bar: the frame of every Viktra page. */
export default function Shell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <StickyBar />
    </>
  );
}
