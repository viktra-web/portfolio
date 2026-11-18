"use client";

import { useEffect, useState } from "react";
import { whatsappUrl } from "@/lib/services";

/**
 * Mobile quick actions. Hidden (transform only) while the hero button, the contact
 * section or the footer is on screen, so only one "devis" button is visible at a time.
 */
export default function StickyBar({ phoneTel }: { phoneTel: string }) {
  // Hidden on first paint: the page opens on the hero button.
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const targets = [
      document.querySelector(".pd-hero-actions"),
      document.getElementById("contact"),
      document.querySelector(".pd-footer"),
    ]
      .filter((el): el is Element => el !== null);
    if (targets.length === 0) {
      setHidden(false);
      return;
    }
    // The observer only reports targets that changed: keep the state of each one.
    const visible = new Map<Element, boolean>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) visible.set(entry.target, entry.isIntersecting);
      setHidden(Array.from(visible.values()).some(Boolean));
    });
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Contact rapide"
      className="pd-sticky pd-dark"
      data-hidden={hidden || undefined}
      aria-hidden={hidden || undefined}
    >
      <a
        className="pd-btn pd-btn--primary"
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={hidden ? -1 : undefined}
      >
        WhatsApp
      </a>
      <a className="pd-btn pd-btn--secondary" href={phoneTel} tabIndex={hidden ? -1 : undefined}>
        Appeler
      </a>
    </nav>
  );
}
