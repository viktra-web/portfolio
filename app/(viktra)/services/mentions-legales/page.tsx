import type { Metadata } from "next";
import PageIntro from "@/components/viktra/PageIntro";
import Shell from "@/components/viktra/Shell";
import { SERVICES_EMAIL, SERVICES_PHONE_DISPLAY } from "@/lib/services";
import { viktraMetadata } from "@/components/viktra/seo/metadata";

// Draft: completed when the micro-enterprise exists (SIRET, early December 2026).
export const metadata: Metadata = viktraMetadata({
  pagePath: "/mentions-legales",
  title: "Mentions légales | Viktra",
  description: "Éditeur et hébergeur du site Viktra.",
  noindex: true,
});

// Missing before going live (not shown on the page): SIRET, full street address, TVA mention
// (art. 293 B du CGI or the CIBS wording, to confirm), Vercel's postal address.
const rows: [string, string][] = [
  ["Éditeur", "Adel Djahnit, entrepreneur individuel (micro-entreprise), nom commercial Viktra"],
  ["SIRET", "Communiqué à la création de la micro-entreprise, en décembre 2026"],
  ["Adresse", "01220 Divonne-les-Bains, France"],
  ["Contact", `${SERVICES_EMAIL}, ${SERVICES_PHONE_DISPLAY}`],
  ["Directeur de la publication", "Adel Djahnit"],
  ["Hébergeur", "Vercel Inc., États-Unis"],
];

export default function MentionsPage() {
  return (
    <Shell current="/mentions-legales">
      <PageIntro h1="Mentions légales" lead="Les informations sur l'éditeur et l'hébergeur de ce site." />
      <section className="v4-section">
        <div className="v4-wrap">
          <dl className="v4-coords">
            {rows.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </Shell>
  );
}
