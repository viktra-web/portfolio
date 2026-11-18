"use client";

import { useState } from "react";

/**
 * The shop's hanging sign. A tap turns it over: "Fermé" on one side, the promise on the other.
 * Pure transform: nothing runs while the page scrolls.
 */
export default function Sign() {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      className="v2-sign"
      data-open={open || undefined}
      aria-pressed={open}
      onClick={() => setOpen((value) => !value)}
    >
      <span className="v2-sign-string" aria-hidden="true" />
      <span className="v2-sign-card">
        <span className="v2-sign-face v2-sign-front">Fermé</span>
        <span className="v2-sign-face v2-sign-back">Ouvert</span>
      </span>
      <span className="v2-sr">{open ? "Panneau : ouvert" : "Panneau : fermé. Retourner le panneau"}</span>
    </button>
  );
}
