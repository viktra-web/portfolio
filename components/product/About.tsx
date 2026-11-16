import { RevealGroup } from "@/components/product/motion/reveal";
import { ABOUT_PHOTO, KUNAGI_QUOTE, aboutCopy } from "@/lib/product";
import { serviceGuarantees } from "@/lib/services";

function Attribution() {
  return (
    <figcaption className="pd-quote-by">
      {KUNAGI_QUOTE.author}{" "}
      <a href={KUNAGI_QUOTE.href} target="_blank" rel="noopener">
        {KUNAGI_QUOTE.linkLabel}
      </a>
    </figcaption>
  );
}

export default function About() {
  const guarantees = serviceGuarantees.filter(
    (item) => !aboutCopy.hiddenGuarantees.includes(item.title)
  );

  return (
    <section id="a-propos" className="pd-section pd-about" aria-labelledby="about-title">
      <div className="pd-wrap">
        {/* The only third-party voice on the page: it leads the section, full width. */}
        <div className="pd-about-media">
          {ABOUT_PHOTO ? (
            <RevealGroup preset="shutter" amount={0.3}>
              <div className="pd-shutter" data-shutter="">
                {/* Plain <img>: next/image would add a client chunk shared with the home page. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ABOUT_PHOTO.src}
                  alt={ABOUT_PHOTO.alt}
                  width={ABOUT_PHOTO.width}
                  height={ABOUT_PHOTO.height}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </RevealGroup>
          ) : (
            <figure className="pd-quote pd-quote--large">
              <blockquote>
                <p>{"«\u00a0"}{KUNAGI_QUOTE.text}{"\u00a0»"}</p>
              </blockquote>
              <Attribution />
            </figure>
          )}
        </div>

        <div className="pd-split pd-about-row">
          <div className="pd-split-head">
            <h2 className="pd-h2" id="about-title">
              {aboutCopy.title}
            </h2>
          </div>
          <div className="pd-split-body">
            <p className="pd-body pd-about-lead">{aboutCopy.text}</p>
            {ABOUT_PHOTO ? (
              <figure className="pd-quote">
                <blockquote>
                  <p>{"«\u00a0"}{KUNAGI_QUOTE.text}{"\u00a0»"}</p>
                </blockquote>
                <Attribution />
              </figure>
            ) : null}
            <ul className="pd-guarantees">
              {guarantees.map((item) => (
                <li key={item.title}>
                  <h3 className="pd-guarantee-title">{item.title}</h3>
                  <p className="pd-guarantee-text">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
