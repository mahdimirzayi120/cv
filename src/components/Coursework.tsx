import { COURSES, SECTIONS } from "../data"
import { ScholarLink, SectionIntro } from "./ui"

export function Coursework() {
  const meta = SECTIONS.coursework
  return (
    <section className="section" id="coursework" aria-labelledby="coursework-title">
      <div className="container">
        <SectionIntro
          id="coursework"
          index={meta.index}
          eyebrow={meta.eyebrow}
          title={meta.title}
          aside="05 courses · graded results"
        />

        <div className="course-grid">
          {COURSES.map((course, i) => (
            <article className="course-card" key={course.course} data-reveal>
              <div className="course-top">
                <p className="course-score">
                  <span className="course-score-value">{course.score}</span>
                  <span className="course-score-max">/ 20</span>
                </p>
                <span className="course-index" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="course-name">{course.course}</h3>
              <div className="course-foot">
                <span className="course-prof">{course.professor}</span>
                <ScholarLink scholarId={course.scholarId} professor={course.professor} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
