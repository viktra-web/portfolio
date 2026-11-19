import { BONEE_APP_STORE, BONEE_GOOGLE_PLAY, BONEE_SHOTS, VIKTRA_SHOT, v4Work } from "@/lib/v4";
import Picture from "./Picture";

/**
 * "Projets choisis": Bonee, Viktra, Kunagi, then the other work in text.
 * Home: under an h2 (projects in h3). /realisations: under the h1 (projects in h2).
 */
export default function ProjectList({ level = 3 }: { level?: 2 | 3 }) {
  const Title = level === 2 ? "h2" : "h3";
  return (
    <>
      <article className="v4-project">
        <div className="v4-project-shots">
          {BONEE_SHOTS.map((image) => (
            <div key={image.src} className="v4-phone v4-phone--small">
              <Picture image={image} />
            </div>
          ))}
        </div>
        <div className="v4-project-text">
          <Title className="v4-h3">{v4Work.bonee.name}</Title>
          <p>{v4Work.bonee.text}</p>
          <p className="v4-links">
            <a className="v4-link" href={BONEE_APP_STORE} target="_blank" rel="noopener noreferrer">
              Voir sur l&apos;App Store
            </a>
            {BONEE_GOOGLE_PLAY ? (
              <a className="v4-link" href={BONEE_GOOGLE_PLAY} target="_blank" rel="noopener noreferrer">
                Voir sur Google Play
              </a>
            ) : null}
          </p>
        </div>
      </article>

      <article className="v4-project">
        <div className="v4-frame">
          <Picture image={VIKTRA_SHOT} />
        </div>
        <div className="v4-project-text">
          <Title className="v4-h3">{v4Work.viktra.name}</Title>
          <p>{v4Work.viktra.text}</p>
        </div>
      </article>

      <article className="v4-project v4-project--text">
        <div className="v4-project-text">
          <Title className="v4-h3">{v4Work.kunagi.name}</Title>
          <p className="v4-type">{v4Work.kunagi.type}</p>
          <p>{v4Work.kunagi.text}</p>
        </div>
      </article>

      <Title className="v4-h3 v4-others-title">{v4Work.othersTitle}</Title>
      <ul className="v4-others">
        {v4Work.others.map((item) => (
          <li key={item.name}>
            <strong>{item.name}</strong>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
