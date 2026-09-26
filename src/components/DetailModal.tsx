import type { Project } from "@/types/portfolio"

type DetailModalProps = {
  project: Project | null
  onClose: () => void
}

export function DetailModal({ project, onClose }: DetailModalProps) {
  if (!project) return null

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          className="modal-close"
          aria-label="Close dialog"
          onClick={onClose}
        >
          ×
        </button>
        <p className="eyebrow mb-3" style={{ color: project.color }}>
          {project.tag} · {project.year}
        </p>
        <h2
          id="modal-title"
          className="font-serif text-4xl md:text-5xl font-bold mb-5"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {project.title}
        </h2>
        <p
          className="leading-relaxed mb-6"
          style={{ color: "var(--color-ink-soft)" }}
        >
          {project.details}
        </p>
        <p className="text-sm leading-relaxed mb-8">
          <strong>Outcome:</strong> {project.outcome}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
