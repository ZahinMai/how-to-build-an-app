import { CONTACT_LINKS } from "@/data/portfolio"
import cvPdf from "@/assets/cv-zahin.pdf"

export function ContactSection() {
  return (
    <section
      id="contact"
      className="contact-grid"
      style={{ borderBottom: "2px solid var(--color-ink)" }}
    >
      <div
        className="contact-copy px-6 py-10 md:px-12 md:py-12 flex flex-col justify-center"
        style={{ borderRight: "2px solid var(--color-ink)" }}
      >
        <div>
          <p className="eyebrow mb-4" style={{ color: "var(--color-burnt)" }}>
            A few other corners of the internet
          </p>
          <h2
            className="font-serif leading-tight mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 900,
            }}
          >
            Around the web
          </h2>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--color-ink-soft)", maxWidth: "40ch" }}
          >
            This site is a snapshot of what I do and what I’m curious about.
            LinkedIn is for work-related updates; Instagram is a bit more
            everyday. Email works for everything else.
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        {CONTACT_LINKS.map(({ label, handle, href, color }, index) => (
          <a
            key={label}
            href={href}
            className="contact-link"
            style={{
              borderBottom:
                index < CONTACT_LINKS.length - 1
                  ? "1px solid var(--color-ink)"
                  : undefined,
            }}
          >
            <span className="text-xs uppercase tracking-widest">{label}</span>
            <span
              className="font-serif text-xl font-bold"
              style={{ fontFamily: "var(--font-serif)", color }}
            >
              {handle} →
            </span>
          </a>
        ))}
        <a
          href={cvPdf}
          download="Zahin-Maisa-CV.pdf"
          className="contact-link contact-download text-left"
          style={{ borderTop: "1px solid var(--color-ink)" }}
        >
          <span className="text-xs uppercase tracking-widest">CV</span>
          <span
            className="font-serif text-xl font-bold"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-burnt)",
            }}
          >
            Download CV ↓
          </span>
        </a>
      </div>
    </section>
  )
}
