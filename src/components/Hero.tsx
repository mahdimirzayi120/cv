import { PROFILE, STATS } from "../data"
import { ArrowDownIcon, DownloadIcon, GlobeIcon, MailIcon, PhoneIcon, PinIcon } from "./icons"

const formatStat = (value: number, decimals: number) =>
  value.toFixed(decimals)

export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" data-parallax="grid" />
        <div className="hero-glow" data-parallax="glow" />
        <div className="hero-vignette" />
      </div>

      <div className="container hero-inner">
        <div className="hero-grid-layout">
          <div className="hero-content">
            <p className="hero-kicker" data-hero="kicker">
              <span className="kicker-mark" aria-hidden="true" />
              Curriculum Vitae
            </p>

            <h1 className="hero-name" data-hero="name">
              {PROFILE.name}
            </h1>

            <div className="hero-intro">
              <p className="hero-role" data-hero="role">
                {PROFILE.role}
              </p>
              <p className="hero-affil" data-hero="affil">
                {PROFILE.affiliation} <span aria-hidden="true">·</span> Tehran, Iran
              </p>
            </div>

            <ul className="hero-meta" data-hero="meta" aria-label="Contact information">
              <li>
                <MailIcon size={15} />
                <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
              </li>
              <li>
                <PhoneIcon size={15} />
                <a href={`tel:${PROFILE.phoneHref}`}>{PROFILE.phone}</a>
              </li>
              <li className="hero-meta-wide">
                <PinIcon size={15} />
                <span>{PROFILE.location}</span>
              </li>
              <li>
                <GlobeIcon size={15} />
                <span>
                  Social: <span className="mono">{PROFILE.social}</span>
                </span>
              </li>
            </ul>

            <div className="hero-actions" data-hero="actions">
              <a className="btn btn-primary" href={PROFILE.cv} download>
                Download CV<span className="btn-hint">PDF</span>
                <DownloadIcon size={16} />
              </a>
              <a className="btn btn-ghost" href={`mailto:${PROFILE.email}`}>
                Email
                <MailIcon size={16} />
              </a>
            </div>
          </div>

          <div className="hero-media" data-hero="photo">
            <img
              src={PROFILE.photo}
              alt={PROFILE.name}
              className="hero-photo"
              loading="eager"
            />
          </div>
        </div>
      </div>

      <div className="container">
        <ul className="hero-stats" aria-label="Academic highlights">
          {STATS.map((stat) => (
            <li className="stat" key={stat.label} data-stat>
              <p className="stat-value">
                {stat.prefix ? <span className="stat-prefix">{stat.prefix}</span> : null}
                <span data-count={stat.value} data-decimals={stat.decimals}>
                  {formatStat(stat.value, stat.decimals)}
                </span>
                {stat.suffix ? <span className="stat-suffix">{stat.suffix}</span> : null}
              </p>
              <p className="stat-label">{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>

      <a className="scroll-cue" href="#summary" aria-label="Scroll to summary">
        <span>Scroll</span>
        <ArrowDownIcon size={15} />
      </a>
    </header>
  )
}
