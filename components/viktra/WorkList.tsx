import { BONEE_SHOTS } from "@/lib/product";
import { serviceWork } from "@/lib/services";

// Client work first, Bonee (a personal app) last.
const ORDER = ["JSL Judo", "Globalpronet", "Bonee"];
export const workRows = [
  ...ORDER.flatMap((name) => serviceWork.filter((work) => work.name === name)),
  ...serviceWork.filter((work) => !ORDER.includes(work.name)),
];

export default function WorkList({
  shots = true,
  level = 3,
}: {
  shots?: boolean;
  level?: 2 | 3;
}) {
  const Title = level === 2 ? "h2" : "h3";
  return (
    <ul className="v-work">
      {workRows.map((work) => (
        <li key={work.name}>
          <Title className="v-h3">{work.name}</Title>
          <p className="v-small">{work.type}</p>
          <p>{work.description}</p>
          {work.href && work.linkLabel ? (
            <a className="v-link" href={work.href} target="_blank" rel="noopener noreferrer">
              {work.linkLabel.replace(/\s*→$/, "")}
            </a>
          ) : null}
          {shots && work.name === "Bonee" ? (
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
  );
}
