import { PERSONAL, PROFILE } from "../data"
import { GlobeIcon, MailIcon, PhoneIcon, PinIcon } from "./icons"

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-identity">
          <p className="footer-name">{PROFILE.name}</p>
          <p className="footer-role">
            {PROFILE.role} · {PROFILE.affiliation}
          </p>
        </div>

        <div className="footer-col">
          <p className="footer-label">Contact</p>
          <ul className="footer-list">
            <li>
              <MailIcon size={14} />
              <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
            </li>
            <li>
              <PhoneIcon size={14} />
              <a href={`tel:${PROFILE.phoneHref}`}>{PROFILE.phone}</a>
            </li>
            <li>
              <PinIcon size={14} />
              <span>{PROFILE.location}</span>
            </li>
            <li>
              <GlobeIcon size={14} />
              <span>
                Social: <span className="mono">{PROFILE.social}</span>
              </span>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <p className="footer-label">Personal details</p>
          <dl className="footer-details">
            {PERSONAL.map((item) => (
              <div className="footer-detail" key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="container footer-base">
        <p>
          © {year} {PROFILE.name}
        </p>
        <p>Last updated: {PROFILE.lastUpdated}</p>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  )
}
