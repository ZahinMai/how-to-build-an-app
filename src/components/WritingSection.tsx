import { POSTS } from "@/data/portfolio"
import type { Post } from "@/types/portfolio"

type WritingSectionProps = {
  onSelect: (post: Post) => void
}

export function WritingSection({ onSelect }: WritingSectionProps) {
  return (
    <section
      id="writing"
      style={{ borderBottom: "2px solid var(--color-ink)" }}
    >
      <div className="section-heading-grid">
        <div className="section-title">Writing</div>
        <div className="section-intro flex items-center justify-between gap-6">
          <span>Notes from the work, the interests, and the side quests.</span>
          <button
            className="text-xs uppercase tracking-widest font-medium hover:opacity-60"
            onClick={() => onSelect(POSTS[0])}
          >
            Latest →
          </button>
        </div>
      </div>
      <div className="posts-grid">
        {POSTS.map((post, index) => (
          <button
            key={post.title}
            className="post-card text-left"
            onClick={() => onSelect(post)}
            style={{
              borderRight: index < 2 ? "1px solid var(--color-ink)" : undefined,
            }}
          >
            <span
              className="eyebrow mb-4"
              style={{ color: "var(--color-mauve)" }}
            >
              {post.tag} · {post.date}
            </span>
            <span
              className="font-serif text-2xl font-bold leading-snug"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {post.title}
            </span>
            <span
              className="mt-6 text-xs uppercase tracking-widest font-medium"
              style={{ color: "var(--color-burnt)" }}
            >
              Read →
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}
