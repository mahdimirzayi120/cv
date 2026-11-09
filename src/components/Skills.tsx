import type { CSSProperties } from "react"
import { ADDITIONAL_SKILLS, SECTIONS, SKILLS } from "../data"
import { SectionIntro } from "./ui"

export function Skills() {
  const meta = SECTIONS.skills
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionIntro
          id="skills"
          index={meta.index}
          eyebrow={meta.eyebrow}
          title={meta.title}
          aside="08 core skills"
        />

        <div className="skills-layout">
          <div className="skills-list">
            {SKILLS.map((skill) => (
              <div className="skill" key={skill.name} data-reveal>
                <div className="skill-head">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-pct" data-skill-value={skill.value}>
                    {skill.value}%
                  </span>
                </div>
                <div
                  className="skill-track"
                  role="progressbar"
                  aria-label={`${skill.name} proficiency`}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={skill.value}
                >
                  <span
                    className="skill-fill"
                    data-skill-bar={skill.value}
                    style={{ "--pct": skill.value } as CSSProperties}
                  />
                </div>
              </div>
            ))}
          </div>

          <aside className="skills-aside" aria-label="Additional technical background">
            <div className="aside-block" data-reveal>
              <p className="aside-label">Basic familiarity</p>
              <p className="aside-value">{ADDITIONAL_SKILLS.familiarity}</p>
            </div>
            <div className="aside-block" data-reveal>
              <p className="aside-label">Additional</p>
              <ul className="aside-list">
                {ADDITIONAL_SKILLS.items.map((item) => (
                  <li
                    key={item}
                    className={item.includes("Math olympiad qualifier") ? "aside-item-featured" : undefined}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
