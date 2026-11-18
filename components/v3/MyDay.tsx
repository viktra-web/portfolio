"use client";

import { useState } from "react";

const fmt = (h: number) => `${Math.floor(h)} h${h % 1 ? " 30" : ""}`;

/**
 * « Votre journée » : the visitor sets his own opening hours; the bar shows the hours when
 * only his site and his Google listing answer. Computed from his numbers only.
 */
export default function MyDay() {
  const [open, setOpen] = useState(8);
  const [close, setClose] = useState(19);
  const from = Math.min(open, close - 0.5);
  const closedHours = 24 - (close - from);

  return (
    <div className="v3-day">
      <div className="v3-day-controls">
        <label className="v3-field">
          <span>J&apos;ouvre à {fmt(from)}</span>
          <input
            type="range"
            min={5}
            max={12}
            step={0.5}
            value={open}
            onChange={(e) => setOpen(Number(e.target.value))}
          />
        </label>
        <label className="v3-field">
          <span>Je ferme à {fmt(close)}</span>
          <input
            type="range"
            min={14}
            max={23}
            step={0.5}
            value={close}
            onChange={(e) => setClose(Number(e.target.value))}
          />
        </label>
      </div>

      <div className="v3-day-bar" aria-hidden="true">
        <span
          className="v3-day-open"
          style={{ left: `${(from / 24) * 100}%`, width: `${((close - from) / 24) * 100}%` }}
        />
      </div>
      <div className="v3-day-axis" aria-hidden="true">
        <span>0 h</span>
        <span>6 h</span>
        <span>12 h</span>
        <span>18 h</span>
        <span>24 h</span>
      </div>

      <p className="v3-day-result" aria-live="polite">
        Votre boutique est fermée <strong>{fmt(closedHours)} sur 24</strong>.
        Pendant ces heures, seuls votre site et votre fiche Google répondent à ceux qui vous
        cherchent.
      </p>
    </div>
  );
}
