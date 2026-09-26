import { SKILLS } from "@/data/portfolio"

const METRICS = [
  [
    "1st",
    "Class BSc in Computer Science",
    "var(--color-burnt)",
    "var(--color-cream)",
  ],
  ["60%", "Reduction in PMO admin", "var(--color-cream)", "var(--color-ink)"],
  [
    "£50M",
    "Contract supported by cyber certification evidence",
    "var(--color-mauve)",
    "var(--color-cream)",
  ],
  [
    "Days → minutes",
    "Account activation stage at BNY",
    "var(--color-cream)",
    "var(--color-ink)",
  ],
  [
    "5–16",
    "Age range of coding students",
    "var(--color-forest)",
    "var(--color-cream)",
  ],
  [
    "100%",
    "Taster-to-student conversion",
    "var(--color-amber)",
    "var(--color-ink)",
  ],
]

export function SkillsSection() {
  return (
    <section
      id="profile"
      style={{ borderBottom: "2px solid var(--color-ink)" }}
    >
      <div className="two-column-grid">
        <div id="skills" style={{ borderRight: "2px solid var(--color-ink)" }}>
          <div
            className="section-title"
            style={{ borderBottom: "1px solid var(--color-ink)" }}
          >
            Skills &amp; tools
          </div>
          <div className="skill-list px-6 py-8 md:px-12">
            {SKILLS.map((skill) => (
              <span key={skill} className="skill-item">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="grid" style={{ gridTemplateRows: "auto 1fr" }}>
          <div
            className="section-title"
            style={{ borderBottom: "1px solid var(--color-ink)" }}
          >
            Selected highlights
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
                  className={`metric-value font-serif font-black leading-none mb-1 ${
                    value === "Days → minutes" ? "metric-value-long" : ""
                  }`}
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
