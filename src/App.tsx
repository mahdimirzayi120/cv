import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import { useGSAP } from "@gsap/react"
import { NAV_LINKS } from "./data"
import { Nav } from "./components/Nav"
import { Hero } from "./components/Hero"
import { Summary } from "./components/Summary"
import { Education } from "./components/Education"
import { Coursework } from "./components/Coursework"
import { Research } from "./components/Research"
import { Skills } from "./components/Skills"
import { Certificates } from "./components/Certificates"
import { Experience } from "./components/Experience"
import { Projects } from "./components/Projects"
import { Honors } from "./components/Honors"
import { Languages } from "./components/Languages"
import { Recommenders } from "./components/Recommenders"
import { Footer } from "./components/Footer"

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)

export default function App() {
  const root = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const scope = root.current
      if (!scope) return

      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      const splits: SplitText[] = []
      const nav = document.getElementById("site-nav")
      const navLinks = gsap.utils.toArray<HTMLElement>("[data-nav-link]")

      const setActiveLink = (id: string | null) => {
        navLinks.forEach((link) => {
          const isActive = id !== null && link.dataset.navLink === id
          link.classList.toggle("is-active", isActive)
          if (isActive) {
            link.setAttribute("aria-current", "location")
            const row = link.parentElement
            if (row && row.scrollWidth > row.clientWidth + 1) {
              const target = link.offsetLeft - (row.clientWidth - link.offsetWidth) / 2
              row.scrollTo({
                left: Math.max(0, target),
                behavior: prefersReduced ? "auto" : "smooth",
              })
            }
          } else {
            link.removeAttribute("aria-current")
          }
        })
      }

      ScrollTrigger.create({
        start: "top -24",
        end: "max",
        onToggle: (self) => nav?.classList.toggle("is-scrolled", self.isActive),
      })

      ScrollTrigger.create({
        trigger: "#top",
        start: "top top",
        end: "bottom 40%",
        onToggle: (self) => {
          if (self.isActive) setActiveLink(null)
        },
      })

      NAV_LINKS.forEach(({ id }) => {
        const section = document.getElementById(id)
        if (!section) return
        ScrollTrigger.create({
          trigger: section,
          start: "top 40%",
          end: "bottom 40%",
          onToggle: (self) => {
            if (self.isActive) setActiveLink(id)
          },
        })
      })

      const mm = gsap.matchMedia()

      if (!prefersReduced) {
        gsap.to(".scroll-progress-fill", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
        })

        const nameEl = scope.querySelector<HTMLElement>(".hero-name")
        let nameSplit: SplitText | null = null
        if (nameEl) {
          nameSplit = new SplitText(nameEl, {
            type: "chars,words",
            mask: "words",
            charsClass: "char",
          })
          splits.push(nameSplit)
        }

        const hero = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.15 })

        hero
          .from('[data-hero="kicker"]', { y: 16, autoAlpha: 0, duration: 0.7 }, 0)
          .from(
            nameSplit ? nameSplit.chars : '[data-hero="name"]',
            {
              yPercent: 118,
              autoAlpha: 0,
              duration: 1,
              stagger: 0.018,
              ease: "power4.out",
            },
            0.05
          )
          .from('[data-hero="role"]', { y: 18, autoAlpha: 0, duration: 0.7 }, "-=0.6")
          .from('[data-hero="affil"]', { y: 16, autoAlpha: 0, duration: 0.7 }, "-=0.55")
          .from(
            '[data-hero="meta"] > li',
            { y: 12, autoAlpha: 0, duration: 0.5, stagger: 0.06 },
            "-=0.45"
          )
          .from(
            '[data-hero="actions"] > *',
            { y: 12, autoAlpha: 0, duration: 0.5, stagger: 0.06 },
            "-=0.35"
          )
          .from('[data-hero="photo"]', { y: 20, autoAlpha: 0, duration: 0.8 }, "-=0.5")
          .from("[data-stat]", { y: 18, autoAlpha: 0, duration: 0.65, stagger: 0.07 }, "-=0.3")
          .from(".scroll-cue", { autoAlpha: 0, duration: 0.6 }, "-=0.4")

        gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
          const end = Number(el.dataset.count)
          const decimals = Number(el.dataset.decimals ?? 0)
          const state = { value: 0 }
          gsap.to(state, {
            value: end,
            duration: 1.7,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 95%", once: true },
            onUpdate: () => {
              el.textContent = state.value.toFixed(decimals)
            },
          })
        })

        gsap.utils.toArray<HTMLElement>(".section-title").forEach((title) => {
          const split = new SplitText(title, { type: "lines", mask: "lines" })
          splits.push(split)
          gsap.from(split.lines, {
            yPercent: 110,
            autoAlpha: 0,
            duration: 0.9,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: { trigger: title, start: "top 88%", once: true },
          })
        })

        ScrollTrigger.batch(gsap.utils.toArray<HTMLElement>("[data-reveal]"), {
          start: "top 92%",
          once: true,
          onEnter: (batch) =>
            gsap.fromTo(
              batch,
              { y: 24, autoAlpha: 0 },
              {
                y: 0,
                autoAlpha: 1,
                duration: 0.7,
                ease: "power2.out",
                stagger: 0.06,
                overwrite: true,
              }
            ),
        })

        gsap.utils.toArray<HTMLElement>("[data-skill-bar]").forEach((bar) => {
          const percent = Number(bar.dataset.skillBar)
          const label = bar.closest(".skill")?.querySelector<HTMLElement>("[data-skill-value]")

          gsap.fromTo(
            bar,
            { scaleX: 0 },
            {
              scaleX: 1,
              duration: 1.35,
              ease: "power3.out",
              scrollTrigger: { trigger: bar, start: "top 94%", once: true },
            }
          )

          if (label) {
            const state = { value: 0 }
            gsap.to(state, {
              value: percent,
              duration: 1.35,
              ease: "power3.out",
              scrollTrigger: { trigger: bar, start: "top 94%", once: true },
              onUpdate: () => {
                label.textContent = `${Math.round(state.value)}%`
              },
            })
          }
        })

        mm.add("(min-width: 900px)", () => {
          gsap.to('[data-parallax="grid"]', {
            yPercent: 12,
            ease: "none",
            scrollTrigger: {
              trigger: ".hero",
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          })

          gsap.to('[data-parallax="glow"]', {
            yPercent: -10,
            ease: "none",
            scrollTrigger: {
              trigger: ".hero",
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          })
        })
      }

      const refresh = () => ScrollTrigger.refresh()
      if (document.fonts?.ready) {
        document.fonts.ready.then(refresh).catch(() => undefined)
      }
      window.addEventListener("load", refresh)
      window.setTimeout(refresh, 1200)

      const scrollToHash = () => {
        const id = decodeURIComponent(window.location.hash.slice(1))
        if (!id) return
        const target = document.getElementById(id)
        if (!target) return
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: "instant", block: "start" })
          requestAnimationFrame(refresh)
        })
      }

      scrollToHash()

      return () => {
        window.removeEventListener("load", refresh)
        mm.revert()
        splits.forEach((split) => split.revert())
      }
    },
    { scope: root }
  )

  return (
    <div ref={root}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Summary />
        <Education />
        <Coursework />
        <Research />
        <Skills />
        <Certificates />
        <Experience />
        <Projects />
        <Honors />
        <Languages />
        <Recommenders />
      </main>
      <Footer />
    </div>
  )
}
