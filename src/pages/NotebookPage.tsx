import { useEffect, useMemo, useState } from "react"

import { POSTS } from "@/data/portfolio"
import type { Post } from "@/types/portfolio"

type NotebookPageProps = {
  onOpenPost: (post: Post) => void
  onBack: () => void
}

const CREAM = "var(--color-cream)"
const SAND = "#ead8b5"
const POST_ART = [
  {
    background: "#d8c8a2",
    illustration: (
      <svg viewBox="0 0 500 360" aria-hidden="true">
        <circle cx="370" cy="95" r="48" fill="#e7925b" />
        <path d="M0 230 125 130l95 85 105-125 175 135v135H0Z" fill="#8fa870" />
        <path d="M0 278 125 205l110 75 105-80 160 75v85H0Z" fill="#cd6e3a" opacity=".72" />
        <path d="M160 360c0-55 38-96 88-96s88 41 88 96" fill="#f5e5c7" />
        <path d="M211 278h74l-7 82h-60Z" fill="#a47a99" />
        <path d="M284 292c45-8 43 40 0 39" fill="none" stroke="#a47a99" strokeWidth="12" />
      </svg>
    ),
  },
  {
    background: "#d9b9a0",
    illustration: (
      <svg viewBox="0 0 500 360" aria-hidden="true">
        <rect x="90" y="60" width="320" height="245" rx="8" fill="#f5e5c7" transform="rotate(-5 250 180)" />
        <path d="m151 221 76-98 42 54 42-30 70 87H151Z" fill="#8fa870" />
        <circle cx="340" cy="116" r="23" fill="#e7925b" />
        <path d="M0 310c110-30 250-18 500-52v102H0Z" fill="#a47a99" opacity=".8" />
        <path d="M213 284c8-55 25-78 45-96m0 96c2-48 23-67 48-79m-93 79c-5-33-21-47-41-57" fill="none" stroke="#698464" strokeWidth="8" strokeLinecap="round" />
        <circle cx="257" cy="183" r="12" fill="#e7925b" />
        <circle cx="310" cy="202" r="12" fill="#f2b05a" />
        <circle cx="171" cy="225" r="12" fill="#a47a99" />
      </svg>
    ),
  },
  {
    background: "#c8d0b2",
    illustration: (
      <svg viewBox="0 0 500 360" aria-hidden="true">
        <path d="M0 258c98-62 169-42 244 0s161 49 256-8v110H0Z" fill="#8fa870" />
        <rect x="191" y="104" width="122" height="128" rx="14" fill="#f5e5c7" />
        <path d="M313 133c76-17 75 80 0 69" fill="none" stroke="#f5e5c7" strokeWidth="19" />
        <path d="M214 88c-19-24 25-30 7-58m49 58c-19-24 25-30 7-58" fill="none" stroke="#a47a99" strokeWidth="8" strokeLinecap="round" />
        <path d="M106 236c2-54 7-93 39-121m-39 121c-1-41-20-62-48-75m47 49c20-34 43-42 66-44" fill="none" stroke="#698464" strokeWidth="8" strokeLinecap="round" />
        <circle cx="146" cy="111" r="15" fill="#e7925b" />
        <circle cx="96" cy="163" r="15" fill="#a47a99" />
        <circle cx="172" cy="164" r="15" fill="#f2b05a" />
      </svg>
    ),
  },
]

export function NotebookPage({ onOpenPost, onBack }: NotebookPageProps) {
  const [activeCategory, setActiveCategory] = useState("All")
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const categories = useMemo(
    () => ["All", ...new Set(POSTS.map((post) => post.tag))],
    [],
  )
  const filteredPosts =
    activeCategory === "All"
      ? POSTS
      : POSTS.filter((post) => post.tag === activeCategory)

  return (
    <div
      className="notebook"
      style={{
        backgroundColor: CREAM,
        color: "var(--color-ink)",
        fontFamily: "var(--font-sans)",
      }}
    >
      <header className="notebook-nav">
        <div className="notebook-nav-inner">
          <button className="notebook-nav-link" onClick={onBack}>
            ← Back to reality
          </button>
          <span className="notebook-nav-title">Out of Office</span>
          <a className="notebook-nav-link" href="#">Secret Society</a>
        </div>
      </header>

      <section className="notebook-hero" aria-labelledby="notebook-title">
        <div
          className="notebook-desert"
          aria-hidden="true"
          style={{ transform: `translate3d(0, ${scrollY * 0.2}px, 0)` }}
        >
          <svg
            className="notebook-landscape"
            viewBox="0 0 1600 900"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <rect width="1600" height="900" fill="var(--color-cream)" />
            <circle cx="1190" cy="300" r="96" fill="var(--color-burnt)" />
            <polygon
              points="0,650 280,450 500,590 820,350 1110,590 1390,410 1600,520 1600,900 0,900"
              fill="var(--color-sage)"
              opacity=".8"
            />
            <polygon
              points="0,760 250,620 490,735 790,570 1080,735 1370,610 1600,690 1600,900 0,900"
              fill="var(--color-burnt)"
              opacity=".55"
            />
          </svg>
        </div>
        <div className="notebook-hero-fade" aria-hidden="true" />
        <div className="notebook-hero-copy">
          <h1
            id="notebook-title"
            className="font-serif"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3.5rem, 8vw, 7rem)",
              fontWeight: 900,
              lineHeight: 0.98,
              color: "var(--color-ink)",
            }}
          >
            Out of Office
          </h1>
          <p
            className="mt-5"
            style={{
              color: "var(--color-ink-soft)",
              maxWidth: "40ch",
              lineHeight: 1.7,
              fontSize: "0.95rem",
            }}
          >
            Day-outs, small creative experiments, and bits of everyday life
            worth keeping.
          </p>
          <div className="notebook-scroll-cue" aria-hidden="true">
            <span>Scroll to wander</span>
            <div />
          </div>
        </div>
      </section>

      <section className="notebook-content" aria-label="Personal journal">
        <nav
          className="notebook-categories"
          aria-label="Filter journal entries by category"
        >
          {categories.map((category, index) => (
            <button
              key={category}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              style={{
                borderRight:
                  index < categories.length - 1
                    ? "1px solid var(--color-ink)"
                    : undefined,
              }}
            >
              {category}
            </button>
          ))}
        </nav>

        <div className="notebook-post-grid">
          {filteredPosts.map((post) => {
            const artIndex = POSTS.findIndex((item) => item.title === post.title)
            const art = POST_ART[artIndex % POST_ART.length]

            return (
            <button
              key={post.title}
              className="notebook-post-card"
              onClick={() => onOpenPost(post)}
            >
              <span
                className="notebook-post-art"
                style={{ backgroundColor: art.background }}
              >
                {art.illustration}
                <span className="notebook-art-sticker">a little story</span>
              </span>
              <div className="notebook-post-meta">
                <span className="notebook-tag">{post.tag}</span>
                <span className="notebook-coming-soon">A note for later</span>
              </div>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <div className="notebook-post-bottom">
                <span>{post.date}</span>
                <span className="notebook-read">Take a peek →</span>
              </div>
            </button>
            )
          })}
        </div>
        <div className="notebook-sand-fade" aria-hidden="true" />
      </section>

      <footer className="notebook-footer">
        <button className="notebook-footer-name" onClick={onBack}>
          Zahin Maisa
        </button>
        <span>Writing · 2026</span>
        <button className="notebook-footer-link" onClick={onBack}>
          Back to portfolio
        </button>
      </footer>
    </div>
  )
}
