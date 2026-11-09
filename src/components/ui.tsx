import { scholarUrl } from "../data"
import { ExternalIcon } from "./icons"

export function SectionIntro({
  id,
  index,
  eyebrow,
  title,
  aside,
}: {
  id: string
  index: string
  eyebrow: string
  title: string
  aside?: string
}) {
  return (
    <header className="section-head">
      <p className="section-eyebrow" data-reveal>
        <span className="section-index">{index}</span>
        <span className="section-rule" aria-hidden="true" />
        <span className="section-eyebrow-label">{eyebrow}</span>
      </p>
      <div className="section-title-row">
        <h2 className="section-title" id={`${id}-title`}>
          {title}
        </h2>
        {aside ? (
          <p className="section-aside" data-reveal>
            {aside}
          </p>
        ) : null}
      </div>
    </header>
  )
}

export function ScholarLink({
  scholarId,
  professor,
  showId = false,
}: {
  scholarId: string
  professor: string
  showId?: boolean
}) {
  return (
    <a
      className="scholar-link"
      href={scholarUrl(scholarId)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${professor} on Google Scholar (opens in a new tab)`}
    >
      <span>Google Scholar</span>
      <ExternalIcon size={12} />
      {showId ? <span className="scholar-id">scholar: {scholarId}</span> : null}
    </a>
  )
}
