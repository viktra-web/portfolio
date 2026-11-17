"use client";

import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");
  const cvHref = useTranslations("Contact")("cvHref");

  return (
    <section id="hero" className="hero">
      <h1 className="hero-title">{t("title")}</h1>
      <p className="hero-role">{t("role")}</p>
      <p className="hero-pitch">{t("pitch")}</p>
      <div className="hero-actions">
        <a href="#projets" className="btn btn-primary">
          {t("ctaPrimary")}
        </a>
        <a href={cvHref} className="btn btn-outline" download>
          {t("ctaSecondary")}
        </a>
      </div>
    </section>
  );
}
