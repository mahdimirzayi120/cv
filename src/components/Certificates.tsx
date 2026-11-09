import { CERTIFICATES, SECTIONS } from "../data"
import { SectionIntro } from "./ui"

export function Certificates() {
  const meta = SECTIONS.certificates
  return (
    <section className="section" id="certificates" aria-labelledby="certificates-title">
      <div className="container">
        <SectionIntro
          id="certificates"
          index={meta.index}
          eyebrow={meta.eyebrow}
          title={meta.title}
          aside="08 certificates"
        />

        <ol className="cert-grid">
          {CERTIFICATES.map((cert, i) => (
            <li className="cert-card" key={cert.name} data-reveal>
              <div className="cert-top">
                <span className="cert-year">{cert.year}</span>
                <span className="cert-index" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="cert-name">{cert.name}</h3>
              <p className="cert-provider">{cert.provider}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
