import type { Metadata } from "next";
import CtaBand from "@/components/viktra/CtaBand";
import PageIntro from "@/components/viktra/PageIntro";
import Shell from "@/components/viktra/Shell";
import { ABOUT_PHOTO, KUNAGI_QUOTE } from "@/lib/product";
import { serviceGuarantees } from "@/lib/services";
import { path } from "@/lib/site";
import { pageTexts } from "@/lib/viktra-pages";
import { PersonJsonLd } from "@/components/viktra/seo/PageJsonLd";
import { viktraMetadata } from "@/components/viktra/seo/metadata";

const t = pageTexts.aPropos;

export const metadata: Metadata = viktraMetadata({
  pagePath: "/a-propos",
  title: t.metaTitle,
  description: t.metaDescription,
});

export default function AProposPage() {
  return (
    <Shell current="/a-propos">
      <PageIntro h1={t.h1} lead={t.lead} />
      <section className="v4-section" aria-labelledby="parcours">
        <div className="v4-wrap v4-split">
          <div>
            {ABOUT_PHOTO ? (
              // eslint-disable-next-line @next/next/no-img-element -- static, already sized
              <img
                className="v4-about-photo"
                src={ABOUT_PHOTO.src}
                alt={ABOUT_PHOTO.alt}
                width={ABOUT_PHOTO.width}
                height={ABOUT_PHOTO.height}
              />
            ) : null}
            <h2 className="v4-h2" id="parcours">
              {t.pathTitle}
            </h2>
            <ul className="v4-list v4-list--big">
              {t.path.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <a className="v4-more" href={path("/realisations")}>
              Voir mes projets
            </a>
          </div>
          <figure className="v4-quote">
            <blockquote>
              <p>{"« " + KUNAGI_QUOTE.text + " »"}</p>
            </blockquote>
            <figcaption>
              {KUNAGI_QUOTE.author}{" "}
              <a href={KUNAGI_QUOTE.href} target="_blank" rel="noopener">
                {KUNAGI_QUOTE.linkLabel}
              </a>
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="v4-section v4-section--calcaire" aria-labelledby="engagements">
        <div className="v4-wrap">
          <h2 className="v4-h2" id="engagements">
            Mes engagements
          </h2>
          <ul className="v4-rows">
            {serviceGuarantees.map((item) => (
              <li key={item.title}>
                <h3 className="v4-h3">{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
      <PersonJsonLd />
    </Shell>
  );
}
