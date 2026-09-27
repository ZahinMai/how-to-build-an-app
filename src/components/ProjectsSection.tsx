import { PROJECTS } from "@/data/portfolio"
import type { Project } from "@/types/portfolio"

type ProjectsSectionProps = {
  onSelect: (project: Project) => void
}

export function ProjectsSection({ onSelect }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      style={{ borderBottom: "2px solid var(--color-ink)" }}
    >
      <div className="section-heading-grid">
        <div className="section-title">Projects &amp; Experiments</div>
        <div className="section-intro">
          Projects, experiments, and things I’ve enjoyed making along the way.
        </div>
      </div>
      {PROJECTS.map((project, index) => (
        <button
          key={project.title}
          className="project-row text-left w-full group"
          onClick={() => onSelect(project)}
          style={{
            borderBottom:
              index < PROJECTS.length - 1
                ? "1px solid var(--color-ink)"
                : undefined,
          }}
        >
          <span
            className="project-left"
            style={{ borderRight: "1px solid var(--color-ink)" }}
          >
            <span
              className="project-color"
              style={{ backgroundColor: project.color }}
            />
            <span className="flex flex-col justify-center px-6 py-10 md:px-10 flex-1">
              <span className="eyebrow mb-3" style={{ color: project.color }}>
                {project.tag} · {project.year}
              </span>
              <span
                className="font-serif text-3xl md:text-4xl font-bold mb-4 leading-tight group-hover:opacity-70 transition-opacity"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {project.title}
              </span>
              <span
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-ink-soft)", maxWidth: "36ch" }}
              >
                {project.desc}
              </span>
            </span>
          </span>
          <span className="flex flex-col justify-between px-6 py-10 md:px-10">
            <span className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-pill">
                  {tech}
                </span>
              ))}
            </span>
            <span
              className="flex items-center gap-3 text-sm font-medium uppercase tracking-widest group-hover:gap-6 transition-all"
              style={{ color: project.color }}
            >
              Take a look <span className="text-xl">→</span>
            </span>
          </span>
        </button>
      ))}
    </section>
  )
}
