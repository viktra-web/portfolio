"use client";

import { useEffect, useState } from "react";

/** Hour in the Pays de Gex / Geneva, whatever the visitor's own time zone. */
function now() {
  const parts = new Intl.DateTimeFormat("fr-FR", {
    timeZone: "Europe/Zurich",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
  const minute = parts.find((p) => p.type === "minute")?.value ?? "00";
  return { hour, label: `${hour} h ${minute}` };
}

/**
 * Live line at the top of the page: the local time, and what it means for a shop.
 * The page itself always stays light (evening mode removed on 19/11/2026).
 * Rendered after mount only (no hydration mismatch); updated every 30 s, never on scroll.
 */
export default function LiveBar() {
  const [time, setTime] = useState<{ hour: number; label: string } | null>(null);

  useEffect(() => {
    const tick = () => {
      setTime(now());
    };
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  const evening = time ? time.hour >= 19 || time.hour < 7 : false;

  return (
    <p className="v3-live" aria-live="off">
      <span className="v3-live-dot" aria-hidden="true" />
      <span className="v3-live-place">Pays de Gex</span>
      <span className="v3-live-time">{time ? time.label : " "}</span>
      <span className="v3-live-text">
        {time
          ? evening
            ? "Les boutiques sont fermées. Votre site, lui, est ouvert."
            : "En ce moment, des clients cherchent un commerce sur leur téléphone."
          : " "}
      </span>
    </p>
  );
}
