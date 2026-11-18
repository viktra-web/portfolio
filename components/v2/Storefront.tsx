import Sign from "./Sign";

/**
 * Exemple fictif : a shopfront at night, drawn flat in SVG. The window is dark (closed),
 * the phone in front of it is not. The only motion: the message arrives once, on load.
 */
export default function Storefront() {
  return (
    <figure className="v2-shop">
      <svg className="v2-shop-art" viewBox="0 0 560 520" aria-hidden="true" focusable="false">
        {/* Jura line behind the street */}
        <path className="v2-c-ridge" d="M0 210 C80 200 150 150 230 120 C290 98 330 110 380 140 C450 180 510 175 560 168 L560 520 L0 520 Z" />
        {/* facade */}
        <rect className="v2-c-wall" x="40" y="150" width="480" height="370" />
        {/* fascia with the shop name */}
        <rect className="v2-c-fascia" x="40" y="150" width="480" height="62" />
        <text className="v2-c-fascia-text" x="280" y="192" textAnchor="middle">
          VOTRE COMMERCE
        </text>
        {/* awning: alternating stripes */}
        {Array.from({ length: 12 }, (_, i) => (
          <path
            key={i}
            className={i % 2 ? "v2-c-awning-b" : "v2-c-awning-a"}
            d={`M${40 + i * 40} 212 h40 l-6 46 h-40 z`}
          />
        ))}
        <path className="v2-c-awning-edge" d="M34 258 h480 v10 h-480 z" />
        {/* shop window, dark: the shop is closed */}
        <rect className="v2-c-window" x="70" y="292" width="270" height="200" />
        <rect className="v2-c-shelf" x="90" y="390" width="230" height="8" />
        <rect className="v2-c-shelf" x="90" y="440" width="230" height="8" />
        <rect className="v2-c-goods" x="104" y="356" width="34" height="34" rx="17" />
        <rect className="v2-c-goods" x="150" y="364" width="52" height="26" rx="6" />
        <rect className="v2-c-goods" x="216" y="350" width="26" height="40" rx="4" />
        <rect className="v2-c-goods" x="120" y="414" width="60" height="26" rx="13" />
        <rect className="v2-c-goods" x="232" y="408" width="40" height="32" rx="6" />
        {/* door */}
        <rect className="v2-c-door" x="370" y="292" width="120" height="228" />
        <rect className="v2-c-door-glass" x="386" y="308" width="88" height="120" />
        <circle className="v2-c-knob" cx="478" cy="420" r="5" />
        {/* hours plate on the door */}
        <rect className="v2-c-plate" x="386" y="442" width="88" height="40" rx="4" />
        <text className="v2-c-plate-text" x="430" y="460" textAnchor="middle">6 h 30</text>
        <text className="v2-c-plate-text" x="430" y="475" textAnchor="middle">19 h 00</text>
        {/* pavement */}
        <rect className="v2-c-street" x="0" y="500" width="560" height="20" />
      </svg>

      <div className="v2-shop-sign">
        <Sign />
      </div>

      <div className="v2-phone" role="img" aria-label="Exemple fictif : un téléphone reçoit un message à 22 h 47">
        <p className="v2-phone-time" aria-hidden="true">22:47</p>
        <div className="v2-notif" aria-hidden="true">
          <p className="v2-notif-head">
            <span>Nouveau message</span>
            <span>maintenant</span>
          </p>
          <p>« Bonjour, vous faites des gâteaux d&apos;anniversaire ? »</p>
        </div>
      </div>

      <figcaption className="v2-caption">Exemple fictif. Touchez le panneau.</figcaption>
    </figure>
  );
}
