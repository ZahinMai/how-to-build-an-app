import { EDUCATION } from "@/data/portfolio"

export function EducationSection() {
  return (
    <section
      id="education"
      style={{ borderBottom: "2px solid var(--color-ink)" }}
    >
      <div
        className="section-title"
        style={{ borderBottom: "1px solid var(--color-ink)" }}
      >
        Education
      </div>
      {EDUCATION.map((item, index) => (
        <div
          key={item.qualification}
          className="experience-row"
          style={{
            borderBottom:
              index < EDUCATION.length - 1
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
              {item.institution}
            </p>
          </div>
          <div className="px-6 py-8 md:px-12">
            <p className="eyebrow mb-2" style={{ color: "var(--color-burnt)" }}>
              {item.qualification}
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--color-ink-soft)" }}
            >
              {item.details}
            </p>
          </div>
        </div>
      ))}
    </section>
  )
}
