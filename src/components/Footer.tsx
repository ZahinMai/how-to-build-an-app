export function Footer() {
  return (
    <footer className="footer">
      <span
        className="font-serif text-lg italic font-bold"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        Zahin Maisa
      </span>
      <span
        className="text-xs uppercase tracking-widest"
        style={{ color: "var(--color-silver)" }}
      >
        © 2026
      </span>
      <a
        href="#work"
        className="text-xs uppercase tracking-widest hover:opacity-60"
      >
        Back to top ↑
      </a>
    </footer>
  )
}
