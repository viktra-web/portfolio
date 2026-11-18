import type { ReactNode } from "react";
import { Bricolage_Grotesque } from "next/font/google";
import "./v2.css";

// V2 test: its own face, self-hosted by next/font (no request to Google at runtime).
const font = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  axes: ["wdth", "opsz"],
  variable: "--v2-font",
  display: "swap",
});

export default function V2Layout({ children }: { children: ReactNode }) {
  return <div className={`v2 ${font.variable}`}>{children}</div>;
}
