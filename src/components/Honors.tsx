import { HONORS, SECTIONS } from "../data"
import { AwardIcon } from "./icons"
import { SectionIntro } from "./ui"

export function Honors() {
  const meta = SECTIONS.honors
  return (
    <section className="section" id="honors" aria-labelledby="honors-title">
      <div className="container">
        <SectionIntro
          id="honors"
          index={meta.index}
          eyebrow={meta.eyebrow}
          title={meta.title}
          aside="04 distinctions"
        />

        <ol className="honor-list">
          {HONORS.map((honor) => (
            <li className="honor-row" key={honor.text} data-reveal>
              <span className="honor-icon" aria-hidden="true">
                <AwardIcon size={18} />
              </span>
              <p className="honor-text">{honor.text}</p>
              <span className="honor-year">{honor.year ?? ""}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
