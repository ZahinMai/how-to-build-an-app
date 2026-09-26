import type { Dispatch, SetStateAction } from "react"

import { FILTERS, NAV_LINKS } from "@/data/portfolio"

type HeaderProps = {
  filter: string
  mobileOpen: boolean
  setFilter: Dispatch<SetStateAction<string>>
  setMobileOpen: Dispatch<SetStateAction<boolean>>
}

export function Header({
  filter,
  mobileOpen,
  setFilter,
  setMobileOpen,
}: HeaderProps) {
  const closeMobile = () => setMobileOpen(false)

  return (
    <header style={{ borderBottom: "2px solid var(--color-ink)" }}>
      <div className="relative flex items-center justify-between px-5 py-4 md:px-8">
        <button
          className="mobile-menu-button md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
        <nav className="hidden gap-6 md:flex" aria-label="Primary navigation">
          {NAV_LINKS.slice(0, 3).map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="nav-link">
              {link}
            </a>
          ))}
        </nav>
        <a
          href="#work"
          className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl italic font-bold tracking-tight"
          style={{ fontFamily: "var(--font-serif)" }}
          aria-label="Zahin Maisa home"
        >
          Zahin Maisa
        </a>
        <div className="hidden items-center gap-4 md:flex">
          {NAV_LINKS.slice(3).map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="nav-link">
              {link}
            </a>
          ))}
          <a href="#contact" className="nav-cta">
            Hire Me
          </a>
        </div>
        <a href="#contact" className="nav-cta md:hidden">
          Hire Me
        </a>
      </div>
      <nav
        id="mobile-navigation"
        className={`mobile-navigation md:hidden ${mobileOpen ? "is-open" : ""}`}
        aria-label="Mobile navigation"
      >
        {NAV_LINKS.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={closeMobile}>
            {link}
          </a>
        ))}
      </nav>
      <div className="category-strip">
        {FILTERS.map((category, index) => (
          <button
            key={category}
            aria-pressed={filter === category}
            onClick={() => setFilter(category)}
            className="category-button"
            style={{
              borderRight:
                index < FILTERS.length - 1
                  ? "1px solid var(--color-ink)"
                  : undefined,
            }}
          >
            {category}
          </button>
        ))}
      </div>
    </header>
  )
}
