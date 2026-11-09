import { EDUCATION, SECTIONS } from "../data"
import { SectionIntro } from "./ui"

export function Education() {
  const meta = SECTIONS.education
  return (
    <section className="section" id="education" aria-labelledby="education-title">
      <div className="container">
        <SectionIntro id="education" index={meta.index} eyebrow={meta.eyebrow} title={meta.title} />

        <ol className="edu-list">
          {EDUCATION.map((entry) => (
            <li className="edu-item" key={entry.degree} data-reveal>
              <p className="edu-years">{entry.years}</p>
              <div className="edu-body">
                <h3 className="edu-degree">{entry.degree}</h3>
                <p className="edu-inst">
                  {entry.institution}
                  <span className="edu-place"> — {entry.place}</span>
                </p>
                {entry.note ? <p className="edu-note">{entry.note}</p> : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
