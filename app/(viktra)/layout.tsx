import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { Schibsted_Grotesk } from "next/font/google";
import "./viktra.css";

// Own root layout: the Viktra pages load neither the portfolio CSS nor its three fonts.
const font = Schibsted_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  variable: "--v-font",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.adeldjahnit.com"),
};

export const viewport: Viewport = {
  themeColor: "#F2CDBE",
};

export default function ViktraLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={font.variable}>
      <body className="v">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
