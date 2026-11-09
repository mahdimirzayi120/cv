import { RECOMMENDERS, SECTIONS } from "../data"
import { ScholarLink, SectionIntro } from "./ui"

const initials = (name: string) => {
  const parts = name.replace(/^Dr\.\s+/i, "").split(/\s+/)
  return `${parts[0]?.[0] ?? ""}${parts[parts.length - 1]?.[0] ?? ""}`.toUpperCase()
}

export function Recommenders() {
  const meta = SECTIONS.recommenders
  return (
    <section className="section section-dark" id="recommenders" aria-labelledby="recommenders-title">
      <div className="container">
        <SectionIntro
          id="recommenders"
          index={meta.index}
          eyebrow={meta.eyebrow}
          title={meta.title}
          aside="Google Scholar profiles"
        />

        <div className="rec-grid">
          {RECOMMENDERS.map((recommender) => (
            <article className="rec-card" key={recommender.name} data-reveal>
              <span className="rec-seal" aria-hidden="true">
                {initials(recommender.name)}
              </span>
              <div className="rec-body">
                <h3 className="rec-name">{recommender.name}</h3>
                <p className="rec-meta">Recommender</p>
                <ScholarLink
                  scholarId={recommender.scholarId}
                  professor={recommender.name}
                  showId
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
