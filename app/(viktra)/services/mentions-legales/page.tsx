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

const rows: [string, string][] = [
  ["Éditeur", "Adel Djahnit, entrepreneur individuel (micro-entreprise), nom commercial Viktra"],
  ["SIRET", "[à fournir]"],
  ["Adresse", "[à fournir : adresse à publier]"],
  ["Contact", `${SERVICES_EMAIL}, ${SERVICES_PHONE_DISPLAY}`],
  ["Directeur de la publication", "Adel Djahnit"],
  ["TVA", "[à confirmer] TVA non applicable, art. L. 223 et s. du CIBS"],
  ["Hébergeur", "Vercel Inc. [adresse à vérifier]"],
];

export default function MentionsPage() {
  return (
    <Shell>
      <PageIntro h1="Mentions légales" lead="Les informations sur l'éditeur et l'hébergeur de ce site." />
      <section className="v-section">
        <div className="v-wrap v-narrow">
          <dl className="v-coords">
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
