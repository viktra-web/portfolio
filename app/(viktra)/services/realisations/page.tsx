import type { Metadata } from "next";
import CtaBand from "@/components/viktra/CtaBand";
import PageIntro from "@/components/viktra/PageIntro";
import Shell from "@/components/viktra/Shell";
import WorkList from "@/components/viktra/WorkList";
import { pageTexts } from "@/lib/viktra-pages";
import { BreadcrumbJsonLd } from "@/components/viktra/seo/PageJsonLd";
import { viktraMetadata } from "@/components/viktra/seo/metadata";

const t = pageTexts.realisations;

export const metadata: Metadata = viktraMetadata({
  pagePath: "/realisations",
  title: t.metaTitle,
  description: t.metaDescription,
});

export default function RealisationsPage() {
  return (
    <Shell>
      <PageIntro h1={t.h1} lead={t.lead} />
      <section className="v-section" aria-label="Projets">
        <div className="v-wrap v-narrow">
          <WorkList />
        </div>
      </section>
      <CtaBand />
      <BreadcrumbJsonLd pagePath="/realisations" label="Réalisations" />
    </Shell>
  );
}
