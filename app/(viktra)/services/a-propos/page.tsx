import type { Metadata } from "next";
import CtaBand from "@/components/viktra/CtaBand";
import PageIntro from "@/components/viktra/PageIntro";
import Shell from "@/components/viktra/Shell";
import { ABOUT_PHOTO, KUNAGI_QUOTE } from "@/lib/product";
import { SERVICES_AREA, serviceGuarantees } from "@/lib/services";
import { path } from "@/lib/site";
import { pageTexts } from "@/lib/viktra-pages";

const t = pageTexts.aPropos;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: { canonical: path("/a-propos") },
};

export default function AProposPage() {
  return (
    <Shell>
      <PageIntro h1={t.h1} lead={t.lead} />
      <section className="v-section" aria-label="Adel Djahnit">
        <div className="v-wrap v-split">
          {ABOUT_PHOTO ? (
            // eslint-disable-next-line @next/next/no-img-element -- static, already sized
            <img
              className="v-photo"
              src={ABOUT_PHOTO.src}
              alt={ABOUT_PHOTO.alt}
              width={ABOUT_PHOTO.width}
              height={ABOUT_PHOTO.height}
            />
          ) : (
            <div className="v-placeholder">Photo d&apos;Adel [à fournir]</div>
          )}
          <div>
            <figure className="v-quote v-quote--first">
              <blockquote>
                <p>{"« " + KUNAGI_QUOTE.text + " »"}</p>
              </blockquote>
              <figcaption className="v-small">
                {KUNAGI_QUOTE.author}{" "}
                <a href={KUNAGI_QUOTE.href} target="_blank" rel="noopener">
                  {KUNAGI_QUOTE.linkLabel}
                </a>
              </figcaption>
            </figure>
            <p className="v-lead">
              Installé à Divonne-les-Bains, je me déplace à {SERVICES_AREA.slice(1).join(", ")}.
            </p>
          </div>
        </div>
      </section>
      <section className="v-section v-calcaire" aria-labelledby="engagements">
        <div className="v-wrap">
          <h2 className="v-h2" id="engagements">
            Mes engagements
          </h2>
          <ul className="v-guarantees">
            {serviceGuarantees.map((item) => (
              <li key={item.title}>
                <h3 className="v-h3">{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
          <a className="v-link" href={path("/realisations")}>
            Voir mes réalisations
          </a>
        </div>
      </section>
      <CtaBand />
    </Shell>
  );
}
