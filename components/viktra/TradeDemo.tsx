"use client";

import { useState } from "react";
import type { StoryShared, StoryTrade } from "@/lib/product";

/**
 * Fictional site on a phone. Picking a trade only swaps text: no scroll effect,
 * no animation, nothing runs while the page scrolls.
 */
export default function TradeDemo({
  trades,
  shared,
  whatsappBase,
}: {
  trades: StoryTrade[];
  shared: StoryShared;
  /** wa.me URL ending with "Mon activité : " (encoded), the trade is appended. */
  whatsappBase: string;
}) {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState(false);
  const trade = trades[index];

  return (
    <div className="v-demo">
      <fieldset className="v-pills">
        <legend className="v-sr">{shared.legend}</legend>
        {trades.map((item, i) => (
          <label className="v-pill" key={item.id}>
            <input
              type="radio"
              name="v-trade"
              value={item.id}
              checked={i === index}
              onChange={() => {
                setIndex(i);
                setPicked(true);
              }}
            />
            <span>{item.label}</span>
          </label>
        ))}
      </fieldset>

      <figure className="v-phone-fig">
        <div
          className="v-phone"
          role="img"
          aria-label={`Exemple fictif : le site de ${trade.name} sur un téléphone`}
          style={{ "--v-brand": trade.brand } as React.CSSProperties}
        >
          <div className="v-phone-screen" aria-hidden="true">
            <p className="v-ph-time">{shared.time}</p>
            <div className="v-ph-head">
              <span className="v-ph-mono">{trade.monogram}</span>
              <span>
                <strong>{trade.name}</strong>
                <span className="v-ph-meta">{trade.meta}</span>
              </span>
            </div>
            <p className="v-ph-title">{trade.headline}</p>
            <div className="v-ph-actions">
              <span className="v-ph-btn">{trade.call}</span>
              <span className="v-ph-btn v-ph-btn--line">{shared.directions}</span>
            </div>
            <div className="v-ph-box">
              <strong>{trade.hoursTitle}</strong>
              <span>{trade.hours}</span>
            </div>
            <ul className="v-ph-chips">
              {trade.chips.map((chip) => (
                <li key={chip}>{chip}</li>
              ))}
            </ul>
            <div className="v-ph-notif">
              <strong>
                {shared.notifTitle} · {shared.notifWhen}
              </strong>
              <span>{trade.notifText}</span>
            </div>
          </div>
        </div>
        <figcaption className="v-small">{shared.caption}</figcaption>
      </figure>

      <a
        className="v-link"
        href={whatsappBase + (picked ? encodeURIComponent(trade.label.toLowerCase()) : "")}
        target="_blank"
        rel="noopener noreferrer"
      >
        Parlez-moi de votre activité sur WhatsApp
      </a>
    </div>
  );
}
