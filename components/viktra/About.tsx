import { BONEE_SHOTS, KUNAGI_QUOTE, aboutCopy } from "@/lib/product";
import { serviceWork } from "@/lib/services";

// Client work first, Bonee (a personal app) last.
const ORDER = ["JSL Judo", "Globalpronet", "Bonee"];
const rows = [
  ...ORDER.flatMap((name) => serviceWork.filter((work) => work.name === name)),
  ...serviceWork.filter((work) => !ORDER.includes(work.name)),
];

export default function About() {
  return (
    <section id="a-propos" className="v-section v-calcaire" aria-labelledby="about-title">
      <div className="v-wrap v-split">
        <div>
          <h2 className="v-h2" id="about-title">
            {aboutCopy.title}
          </h2>
          <p className="v-lead">{aboutCopy.text}</p>
          <figure className="v-quote">
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
        </div>

        <div>
          <h2 className="v-h2" id="realisations">
            Réalisations
          </h2>
          <ul className="v-work">
            {rows.map((work) => (
              <li key={work.name}>
                <h3 className="v-h3">{work.name}</h3>
                <p className="v-small">{work.type}</p>
                <p>{work.description}</p>
                {work.href && work.linkLabel ? (
                  <a className="v-link" href={work.href} target="_blank" rel="noopener noreferrer">
                    {work.linkLabel.replace(/\s*→$/, "")}
                  </a>
                ) : null}
                {work.name === "Bonee" ? (
                  <div className="v-shots">
                    {BONEE_SHOTS.map((shot) => (
                      <picture key={shot.src}>
                        {shot.webp ? <source srcSet={shot.webp} type="image/webp" /> : null}
                        {/* eslint-disable-next-line @next/next/no-img-element -- static, already sized */}
                        <img
                          src={shot.src}
                          alt={shot.alt}
                          width={shot.width}
                          height={shot.height}
                          loading="lazy"
                          decoding="async"
                        />
                      </picture>
                    ))}
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
