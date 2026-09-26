import type { Post } from "@/types/portfolio"

type BlogPostPageProps = {
  post: Post
  onBack: () => void
}

export function BlogPostPage({ post, onBack }: BlogPostPageProps) {
  return (
    <main className="notebook-page mx-auto max-w-3xl px-6 py-16 md:px-12">
      <button className="button-secondary mb-12" onClick={onBack}>
        ← Back to portfolio
      </button>
      <p className="eyebrow mb-4" style={{ color: "var(--color-mauve)" }}>
        {post.tag} · {post.date}
      </p>
      <h1
        className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-8"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {post.title}
      </h1>
      <p
        className="text-lg leading-relaxed mb-12"
        style={{ color: "var(--color-ink-soft)" }}
      >
        {post.excerpt}
      </p>
      <div className="border-t-2 border-[var(--color-ink)] pt-8">
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--color-ink-soft)" }}
        >
          This little story is still taking shape. Soon this space will hold
          the photos, details, and small moments from the day.
        </p>
      </div>
    </main>
  )
}
