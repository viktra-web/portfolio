import type { ReactNode } from "react";
import { BONEE_SHOTS, workIntro } from "@/lib/product";
import { serviceWork, type ServiceWorkItem } from "@/lib/services";

const cleanLabel = (label: string) => label.replace(/\s*→$/, "");

function WorkLink({ work }: { work: ServiceWorkItem }) {
  if (!work.href || !work.linkLabel) return null;
  return (
    <a className="pd-textlink" href={work.href} target="_blank" rel="noopener noreferrer">
      {cleanLabel(work.linkLabel)}
    </a>
  );
}

/** One project per row, separated by a rule: name on the left, what was done on the right. */
function WorkRow({ work, children }: { work: ServiceWorkItem; children?: ReactNode }) {
  return (
    <article className="pd-work-row">
      <h3 className="pd-work-name">{work.name}</h3>
      <div className="pd-work-meta">
        <p className="pd-work-type">{work.type}</p>
        <p className="pd-body">{work.description}</p>
        <WorkLink work={work} />
        {children}
      </div>
    </article>
  );
}

function BoneeShots() {
  return (
    <div className="pd-shots">
      {BONEE_SHOTS.map((shot) => (
        <div className="pd-shot" key={shot.src}>
          <picture>
            {shot.webp ? <source srcSet={shot.webp} type="image/webp" /> : null}
            {/* eslint-disable-next-line @next/next/no-img-element -- static App Store screenshots, already sized */}
            <img
              src={shot.src}
              alt={shot.alt}
              width={shot.width}
              height={shot.height}
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>
      ))}
    </div>
  );
}

export default function Work() {
  // Client work first, Bonee (a personal app) last; its App Store screenshots sit in its row.
  const order = ["JSL Judo", "Globalpronet", "Bonee"];
  const bonee = serviceWork.find((work) => work.name === "Bonee");
  const rows = [
    ...order.flatMap((name) => serviceWork.filter((work) => work.name === name)),
    ...serviceWork.filter((work) => !order.includes(work.name)),
  ];

  return (
    <section id="realisations" className="pd-section pd-work" aria-labelledby="realisations-title">
      <div className="pd-wrap pd-split">
        <div className="pd-split-head pd-head">
          <h2 className="pd-h2" id="realisations-title">
            Réalisations
          </h2>
          <p className="pd-body">{workIntro}</p>
        </div>

        <div className="pd-split-body pd-work-list">
          {rows.map((work) => (
            <WorkRow work={work} key={work.name}>
              {work === bonee && BONEE_SHOTS.length > 0 ? <BoneeShots /> : null}
            </WorkRow>
          ))}
        </div>
      </div>
    </section>
  );
}
