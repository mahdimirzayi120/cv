import { useEffect, useState } from "react"
import { NAV_LINKS } from "../data"
import { MoonIcon, SunIcon } from "./icons"

export function Nav() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof document !== "undefined") {
      const current = document.documentElement.getAttribute("data-theme")
      if (current === "dark" || current === "light") return current
    }
    if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark"
    }
    return "light"
  })

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = (e: MediaQueryListEvent) => {
      const saved = localStorage.getItem("theme")
      if (!saved) {
        const next = e.matches ? "dark" : "light"
        setTheme(next)
        document.documentElement.setAttribute("data-theme", next)
      }
    }
    media.addEventListener("change", handleChange)
    return () => media.removeEventListener("change", handleChange)
  }, [])

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark"
    setTheme(next)
    document.documentElement.setAttribute("data-theme", next)
    try {
      localStorage.setItem("theme", next)
    } catch {}
  }

  return (
    <header className="site-nav" id="site-nav">
      <div className="nav-inner">
        <a className="brand" href="#top" aria-label="Muhammad Mahdi Mirzayi — back to top">
          <span className="brand-mark" aria-hidden="true">
            MM
          </span>
          <span className="brand-text">
            <span className="brand-name">Muhammad Mahdi Mirzayi</span>
            <span className="brand-sub">Curriculum Vitae</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Resume sections">
          {NAV_LINKS.map((link) => (
            <a key={link.id} className="nav-link" href={`#${link.id}`} data-nav-link={link.id}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Switch to day mode" : "Switch to night mode"}
          title={theme === "dark" ? "Switch to day mode" : "Switch to night mode"}
        >
          {theme === "dark" ? (
            <>
              <SunIcon size={15} />
              <span>Day</span>
            </>
          ) : (
            <>
              <MoonIcon size={15} />
              <span>Night</span>
            </>
          )}
        </button>
      </div>
      <div className="scroll-progress" aria-hidden="true">
        <span className="scroll-progress-fill" />
      </div>
    </header>
  )
}
