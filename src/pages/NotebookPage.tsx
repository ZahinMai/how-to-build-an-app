import { useEffect, useState } from "react"

import { LandscapeArtwork } from "@/components/LandscapeArtwork"
import { VlogPhoto } from "@/components/VlogPhoto"
import { POSTS } from "@/data/portfolio"
import type { Post } from "@/types/portfolio"

type NotebookPageProps = {
  onOpenPost: (post: Post) => void
  onBack: () => void
  backgroundScale: number
  landscapeMoving: boolean
}

const CREAM = "var(--color-cream)"
const POST_CATEGORIES = ["All", ...new Set(POSTS.map((post) => post.tag))]

export function NotebookPage({
  onOpenPost,
  onBack,
  backgroundScale,
  landscapeMoving,
}: NotebookPageProps) {
  const [activeCategory, setActiveCategory] = useState("All")
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

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
          <a
            className="notebook-nav-link"
            href="https://chat.whatsapp.com/Br262Z4PeMK9KmI13HeEP1"
            target="_blank"
            rel="noreferrer"
          >
            Sober Socials
          </a>
        </div>
      </header>

      <section className="notebook-hero" aria-labelledby="notebook-title">
        <div
          className="notebook-desert"
          aria-hidden="true"
          style={{ transform: `translate3d(0, ${scrollY * 0.2}px, 0)` }}
        >
          <svg
            className={`notebook-landscape ${landscapeMoving ? "is-moving" : ""}`}
            viewBox="120 90 560 390"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            style={{ transform: `scale(${backgroundScale})` }}
          >
            <LandscapeArtwork />
          </svg>
        </div>
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
          {POST_CATEGORIES.map((category, index) => (
            <button
              key={category}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              style={{
                borderRight:
                  index < POST_CATEGORIES.length - 1
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
            return (
              <button
                key={post.title}
                className="notebook-post-card"
                onClick={() => onOpenPost(post)}
              >
                <span className="notebook-post-cover">
                  <VlogPhoto
                    file={post.coverImage}
                    alt={`Cover photo for ${post.title}`}
                    className="notebook-post-art"
                  />
                  <span className="notebook-art-sticker">Photo diary</span>
                </span>
                <div className="notebook-post-meta">
                  <span className="notebook-tag">{post.tag}</span>
                </div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <div className="notebook-post-bottom">
                  <span>{post.date}</span>
                  <span className="notebook-read">Preview →</span>
                </div>
              </button>
            )
          })}
        </div>
      </section>
    </div>
  )
}
