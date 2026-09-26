export function Footer() {
  return (
    <footer className="footer">
      <a
        href="#work"
        className="font-serif text-lg italic font-bold"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        Zahin Maisa
      </a>
      <span
        className="text-xs uppercase tracking-widest"
        style={{ color: "var(--color-silver)" }}
      >
        Software Engineer · 2026
      </span>
      <div className="flex gap-6">
        {["LinkedIn", "Email", "Phone"].map((label) => (
          <a
            key={label}
            href="#contact"
            className="text-xs uppercase tracking-widest hover:opacity-60"
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  )
}
