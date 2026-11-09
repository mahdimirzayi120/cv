import { LANGUAGES, SECTIONS } from "../data"
import { SectionIntro } from "./ui"

export function Languages() {
  const meta = SECTIONS.languages
  return (
    <section className="section" id="languages" aria-labelledby="languages-title">
      <div className="container">
        <SectionIntro
          id="languages"
          index={meta.index}
          eyebrow={meta.eyebrow}
          title={meta.title}
          aside="CEFR scale · A1 — C2"
        />

        <div className="lang-grid">
          {LANGUAGES.map((language) => (
            <div className="lang-card" key={language.skill} data-reveal>
              <div className="lang-head">
                <span className="lang-skill">{language.skill}</span>
                <span className="lang-level">{language.level}</span>
              </div>
              <div className="lang-meter" aria-hidden="true">
                {[1, 2, 3, 4, 5, 6].map((step) => (
                  <span
                    key={step}
                    className={step <= language.step ? "lang-step is-on" : "lang-step"}
                  />
                ))}
              </div>
              <span className="sr-only">
                {language.skill}: {language.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
