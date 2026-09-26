export function ContactSection() {
  const links = [
    [
      "LinkedIn",
      "zahin-maisa",
      "https://www.linkedin.com/in/zahin-maisa-3058131ba",
      "var(--color-mauve)",
    ],
    [
      "Email",
      "zahin08@outlook.com",
      "mailto:zahin08@outlook.com",
      "var(--color-forest)",
    ],
    ["Phone", "+44 7377 887085", "tel:+447377887085", "var(--color-amber)"],
  ]

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
            Open to software engineering opportunities
          </p>
          <h2
            className="font-serif leading-tight mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 900,
            }}
          >
            Let's build useful financial technology.
          </h2>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--color-ink-soft)", maxWidth: "40ch" }}
          >
            I'm targeting software engineering roles where I can apply Java,
            Spring Boot, AI orchestration, APIs, databases, and a strong
            understanding of business and operational requirements.
          </p>
        </div>
        <a href="mailto:zahin08@outlook.com" className="email-button">
          zahin08@outlook.com
        </a>
      </div>
      <div className="flex flex-col">
        {links.map(([label, handle, href, color], index) => (
          <a
            key={label}
            href={href}
            className="contact-link"
            style={{
              borderBottom:
                index < links.length - 1
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
