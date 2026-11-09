import { EXPERIENCE, SECTIONS } from "../data"
import { BriefcaseIcon } from "./icons"
import { SectionIntro } from "./ui"

export function Experience() {
  const meta = SECTIONS.experience
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <SectionIntro
          id="experience"
          index={meta.index}
          eyebrow={meta.eyebrow}
          title={meta.title}
          aside="01 position"
        />

        {EXPERIENCE.map((job) => (
          <article className="exp-card" key={job.role} data-reveal>
            <div className="exp-aside">
              <span className="exp-icon" aria-hidden="true">
                <BriefcaseIcon size={20} />
              </span>
              <p className="exp-years">{job.years}</p>
            </div>
            <div className="exp-body">
              <h3 className="exp-role">{job.role}</h3>
              <p className="exp-company">{job.company}</p>
              <ul className="exp-details">
                {job.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
