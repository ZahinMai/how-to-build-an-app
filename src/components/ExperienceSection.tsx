import { ADDITIONAL_EXPERIENCE, EXPERIENCE } from "@/data/portfolio"

export function ExperienceSection() {
  return (
    <section
      id="experience"
      style={{ borderBottom: "2px solid var(--color-ink)" }}
    >
      <div
        className="section-title"
        style={{ borderBottom: "1px solid var(--color-ink)" }}
      >
        Experience
      </div>
      {EXPERIENCE.map((item, index) => (
        <div
          key={item.company}
          className="experience-row"
          style={{
            borderBottom:
              index < EXPERIENCE.length - 1
                ? "1px solid var(--color-ink)"
                : undefined,
          }}
        >
          <div
            className="px-6 py-8 md:px-12"
            style={{ borderRight: "1px solid var(--color-ink)" }}
          >
            <p
              className="eyebrow mb-1"
              style={{ color: "var(--color-silver)" }}
            >
              {item.period}
            </p>
            <p
              className="font-serif text-xl font-bold"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {item.company}
            </p>
          </div>
          <div className="px-6 py-8 md:px-12">
            <p className="eyebrow mb-2" style={{ color: "var(--color-burnt)" }}>
              {item.role}
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--color-ink-soft)" }}
            >
              {item.desc}
            </p>
          </div>
        </div>
      ))}
      <div
        className="section-title"
        style={{
          borderTop: "1px solid var(--color-ink)",
          borderBottom: "1px solid var(--color-ink)",
        }}
      >
        Additional Experience
      </div>
      {ADDITIONAL_EXPERIENCE.map((item, index) => (
        <div
          key={item.role}
          className="experience-row"
          style={{
            borderBottom:
              index < ADDITIONAL_EXPERIENCE.length - 1
                ? "1px solid var(--color-ink)"
                : undefined,
          }}
        >
          <div
            className="px-6 py-6 md:px-12"
            style={{ borderRight: "1px solid var(--color-ink)" }}
          >
            <p className="eyebrow" style={{ color: "var(--color-silver)" }}>
              {item.period}
            </p>
          </div>
          <div className="px-6 py-6 md:px-12">
            <p className="eyebrow" style={{ color: "var(--color-burnt)" }}>
              {item.role}
            </p>
            <p
              className="font-serif text-lg font-bold"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {item.company}
            </p>
          </div>
        </div>
      ))}
    </section>
  )
}
