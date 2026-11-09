import { PROJECTS, SECTIONS } from "../data"
import { SectionIntro } from "./ui"

export function Projects() {
  const meta = SECTIONS.projects
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionIntro
          id="projects"
          index={meta.index}
          eyebrow={meta.eyebrow}
          title={meta.title}
          aside="04 projects"
        />

        <div className="project-grid">
          {PROJECTS.map((project, i) => (
            <article className="project-card" key={project.title} data-reveal>
              <span className="project-index" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                {project.body ? <p className="project-text">{project.body}</p> : null}
                <p className="project-meta">{project.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
