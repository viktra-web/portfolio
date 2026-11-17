import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Schibsted_Grotesk } from "next/font/google";
import "./product.css";

const font = Schibsted_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  variable: "--pd-font",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.adeldjahnit.com"),
};

// Browser bar in the hero colour (aube), on /services and /services/confidentialite.
export const viewport: Viewport = {
  themeColor: "#F2CDBE",
};

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return <div className={`pd ${font.variable}`}>{children}</div>;
}
