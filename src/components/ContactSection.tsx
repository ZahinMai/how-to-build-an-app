import { CONTACT_LINKS } from "@/data/portfolio"

export function ContactSection() {
  return (
    <section
      id="contact"
      className="contact-grid"
      style={{ borderBottom: "2px solid var(--color-ink)" }}
    >
      <div
        className="px-6 py-16 md:px-12 flex flex-col justify-between"
        style={{ borderRight: "2px solid var(--color-ink)" }}
      >
        <div>
          <p className="eyebrow mb-4" style={{ color: "var(--color-burnt)" }}>
            Find me elsewhere
          </p>
          <h2
            className="font-serif leading-tight mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 900,
            }}
          >
            A little more about me.
          </h2>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--color-ink-soft)", maxWidth: "40ch" }}
          >
            This is where I share what I work on, what I make, and the side
            quests that catch my attention. For the more official bits, you can
            find me on LinkedIn—or just send me a note.
          </p>
        </div>
        <a href="mailto:zahin08@outlook.com" className="email-button">
          zahin08@outlook.com
        </a>
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
      </div>
    </section>
  )
}
