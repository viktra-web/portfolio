import type { Metadata } from "next";
import CtaBand from "@/components/viktra/CtaBand";
import PageIntro from "@/components/viktra/PageIntro";
import ProjectList from "@/components/viktra/ProjectList";
import Shell from "@/components/viktra/Shell";
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
    <Shell current="/realisations">
      <PageIntro h1={t.h1} lead={t.lead} />
      <section className="v4-section v4-section--flush" aria-label="Projets">
        <div className="v4-wrap">
          <ProjectList level={2} />
        </div>
      </section>
      <CtaBand />
      <BreadcrumbJsonLd pagePath="/realisations" label="Réalisations" />
    </Shell>
  );
}
