import type { Metadata } from "next";
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

export default function ProductLayout({ children }: { children: ReactNode }) {
  return <div className={`pd ${font.variable}`}>{children}</div>;
}
