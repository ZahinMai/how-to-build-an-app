import type { Dispatch, SetStateAction } from "react"

import { NAV_LINKS } from "@/data/portfolio"

type HeaderProps = {
  mobileOpen: boolean
  setMobileOpen: Dispatch<SetStateAction<boolean>>
  onLogoClick: () => void
}

export function Header({
  mobileOpen,
  setMobileOpen,
  onLogoClick,
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
          {NAV_LINKS.slice(0, 3).map(({ label, href }) => (
            <a key={label} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#work"
          className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl italic font-bold tracking-tight"
          style={{ fontFamily: "var(--font-serif)" }}
          aria-label="Zahin Maisa home"
          onClick={(event) => {
            event.preventDefault()
            onLogoClick()
          }}
        >
          Zahin Maisa
        </a>
        <div className="hidden items-center gap-4 md:flex">
          {NAV_LINKS.slice(3).map(({ label, href }) => (
            <a key={label} href={href} className="nav-link">
              {label}
            </a>
          ))}
          <a href="#contact" className="nav-cta">
            Contact
          </a>
        </div>
        <a href="#contact" className="nav-cta md:hidden">
          Contact
        </a>
      </div>
      <nav
        id="mobile-navigation"
        className={`mobile-navigation md:hidden ${mobileOpen ? "is-open" : ""}`}
        aria-label="Mobile navigation"
      >
        {NAV_LINKS.map(({ label, href }) => (
          <a key={label} href={href} onClick={closeMobile}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}
