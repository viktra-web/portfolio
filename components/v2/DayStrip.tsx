/**
 * Exemple fictif : 24 hours of a bakery. The shop is open 6 h 30 – 19 h; the site never closes.
 * Messages arrive outside opening hours. Static SVG-free markup, positions in % of the day.
 */
const OPEN = { from: 6.5, to: 19 };
const MESSAGES = [
  { at: 5.9, label: "5 h 54" },
  { at: 22.78, label: "22 h 47" },
];
const pct = (h: number) => `${(h / 24) * 100}%`;

export default function DayStrip() {
  return (
    <div className="v2-strip" role="img" aria-label="Exemple fictif : la boutique est ouverte de 6 h 30 à 19 h, le site reçoit des messages à 22 h 47 et à 5 h 54.">
      <div className="v2-strip-row" aria-hidden="true">
        <span className="v2-strip-label">La boutique</span>
        <span className="v2-strip-track">
          <span
            className="v2-strip-bar v2-strip-bar--shop"
            style={{ left: pct(OPEN.from), width: pct(OPEN.to - OPEN.from) }}
          />
        </span>
      </div>
      <div className="v2-strip-row" aria-hidden="true">
        <span className="v2-strip-label">Le site</span>
        <span className="v2-strip-track">
          <span className="v2-strip-bar v2-strip-bar--site" style={{ left: 0, width: "100%" }} />
          {MESSAGES.map((m) => (
            <span key={m.label} className="v2-strip-msg" style={{ left: pct(m.at) }}>
              <span
                className="v2-strip-msg-label"
                // Near the end of the day the label opens to the left, to stay inside the plaque.
                style={m.at > 20 ? { left: "auto", right: "-0.3rem", transform: "none" } : undefined}
              >
                {m.label}
              </span>
            </span>
          ))}
        </span>
      </div>
      <div className="v2-strip-axis" aria-hidden="true">
        <span className="v2-strip-label" />
        <span className="v2-strip-ticks">
          {[0, 6, 12, 18, 24].map((h) => (
            <span key={h} style={{ left: pct(h) }}>
              {h} h
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
