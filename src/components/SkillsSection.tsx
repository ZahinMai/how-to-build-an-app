import { SKILLS } from "@/data/portfolio"

const METRICS = [
  ["1st", "Class degree", "var(--color-burnt)", "var(--color-cream)"],
  ["3", "Core technologies", "var(--color-cream)", "var(--color-ink)"],
  ["60%", "PMO overhead reduced", "var(--color-mauve)", "var(--color-cream)"],
  ["£50M", "Contract safeguarded", "var(--color-cream)", "var(--color-ink)"],
  ["5–16", "Students taught", "var(--color-forest)", "var(--color-cream)"],
  [
    "1",
    "Account activation stage improved",
    "var(--color-amber)",
    "var(--color-ink)",
  ],
]

export function SkillsSection() {
  return (
    <section id="skills" style={{ borderBottom: "2px solid var(--color-ink)" }}>
      <div className="two-column-grid">
        <div style={{ borderRight: "2px solid var(--color-ink)" }}>
          <div
            className="section-title"
            style={{ borderBottom: "1px solid var(--color-ink)" }}
          >
            Skills
          </div>
          <div className="px-6 py-10 md:px-12 flex flex-col gap-6">
            {SKILLS.map((skill) => (
              <div key={skill.label}>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-sm font-medium">{skill.label}</span>
                  <span
                    className="font-serif text-xl font-bold"
                    style={{
                      fontFamily: "var(--font-serif)",
                      color: skill.color,
                    }}
                  >
                    {skill.level}%
                  </span>
                </div>
                <div
                  className="h-2 overflow-hidden"
                  style={{
                    backgroundColor: "var(--color-silver)",
                    opacity: 0.4,
                  }}
                >
                  <div
                    className="h-full"
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: skill.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid" style={{ gridTemplateRows: "auto 1fr" }}>
          <div
            className="section-title"
            style={{ borderBottom: "1px solid var(--color-ink)" }}
          >
            By the Numbers
          </div>
          <div className="grid grid-cols-2 grid-rows-3">
            {METRICS.map(([value, label, backgroundColor, color], index) => (
              <div
                key={label}
                className="flex flex-col justify-center px-6 py-8 md:px-8"
                style={{
                  backgroundColor,
                  color,
                  borderRight:
                    index % 2 === 0 ? "1px solid var(--color-ink)" : undefined,
                  borderBottom:
                    index < 4 ? "1px solid var(--color-ink)" : undefined,
                }}
              >
                <div
                  className="font-serif font-black leading-none mb-1"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  }}
                >
                  {value}
                </div>
                <div className="text-xs uppercase tracking-widest opacity-80">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
