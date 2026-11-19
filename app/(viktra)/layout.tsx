import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { Schibsted_Grotesk } from "next/font/google";
import { SITE_URL } from "@/lib/site";
// Shared style of every Viktra page (v4, 19/11/2026).
import "./v4.css";

// Own root layout: the Viktra pages load neither the portfolio CSS nor its three fonts.
const font = Schibsted_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  variable: "--v-font",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

export const viewport: Viewport = {
  themeColor: "#FBFBF9",
  viewportFit: "cover",
};

export default function ViktraLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={font.variable}>
      <body className="v4">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
