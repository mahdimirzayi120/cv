import type { ReactNode } from "react"
import { INTERESTS, SECTIONS } from "../data"
import { CpuIcon, NetworkIcon, ShieldIcon } from "./icons"
import { SectionIntro } from "./ui"

const ICONS: Record<string, ReactNode> = {
  Algorithms: <NetworkIcon size={22} />,
  "Artificial Intelligence": <CpuIcon size={22} />,
  "Network / Cyber Security": <ShieldIcon size={22} />,
}

export function Research() {
  const meta = SECTIONS.research
  return (
    <section className="section" id="research" aria-labelledby="research-title">
      <div className="container">
        <SectionIntro
          id="research"
          index={meta.index}
          eyebrow={meta.eyebrow}
          title={meta.title}
          aside="03 areas"
        />

        <ul className="interest-grid">
          {INTERESTS.map((interest, i) => (
            <li className="interest-card" key={interest} data-reveal>
              <div className="interest-icon" aria-hidden="true">
                {ICONS[interest]}
              </div>
              <span className="interest-index" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="interest-name">{interest}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
