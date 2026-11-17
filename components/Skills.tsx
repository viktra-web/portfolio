"use client";

import { useTranslations } from "next-intl";
import { skillCategories, type SkillIcon } from "@/lib/skills";

function SkillGlyph({ icon }: { icon: SkillIcon }) {
  if (icon.kind === "brand") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d={icon.icon.path} />
      </svg>
    );
  }

  const { Icon } = icon;
  return <Icon size={20} aria-hidden="true" />;
}

export default function Skills() {
  const t = useTranslations("SectionTitles");

  return (
    <section id="competences" className="section">
      <h2 className="section-title">{t("competences")}</h2>
      <div className="skills-list">
        {skillCategories.map((category) => (
          <div className="skill-row" key={category.label}>
            <span className="skill-row-label">{category.label}</span>
            <div className="skill-row-items">
              {category.items.map((item) => (
                <a
                  key={item.name}
                  className="skill-item"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SkillGlyph icon={item.icon} />
                  <span className="skill-item-name">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
