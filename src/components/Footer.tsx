import { CONTACT_LINKS } from "@/data/portfolio"

export function Footer() {
  const footerLinks = CONTACT_LINKS.filter(({ label }) =>
    ["LinkedIn", "Instagram", "Email"].includes(label),
  )

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
        {footerLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-xs uppercase tracking-widest hover:opacity-60"
            target={href.startsWith("https://") ? "_blank" : undefined}
            rel={href.startsWith("https://") ? "noreferrer" : undefined}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  )
}
