import { SECTIONS, SUMMARY } from "../data"
import { SectionIntro } from "./ui"

export function Summary() {
  const meta = SECTIONS.summary
  return (
    <section className="section" id="summary" aria-labelledby="summary-title">
      <div className="container">
        <SectionIntro
          id="summary"
          index={meta.index}
          eyebrow={meta.eyebrow}
          title={meta.title}
        />

        <div className="summary-card" data-reveal>
          <p className="summary-text">{SUMMARY}</p>
        </div>
      </div>
    </section>
  )
}
