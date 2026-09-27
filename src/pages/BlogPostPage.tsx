import { BLOG_STORIES } from "@/data/blogStories"
import type { Post } from "@/types/portfolio"
import { VlogPhoto } from "@/components/VlogPhoto"

type BlogPostPageProps = {
  post: Post
  onBack: () => void
}

export function BlogPostPage({ post, onBack }: BlogPostPageProps) {
  const story = BLOG_STORIES[post.title]

  return (
    <main className="vlog-page notebook-page">
      <header className="vlog-nav">
        <button className="notebook-nav-link" onClick={onBack}>
          ← Back to journal
        </button>
        <span className="notebook-nav-title">Out of Office</span>
        <a className="notebook-nav-link" href="#vlog-top">
          Back to top ↑
        </a>
      </header>

      <article id="vlog-top" className="vlog-article">
        <div className="vlog-heading">
          <p className="eyebrow mb-5" style={{ color: "var(--color-burnt)" }}>
            {post.tag} <span aria-hidden="true">·</span> {post.date}{" "}
            <span aria-hidden="true">·</span> A photo diary
          </p>
          <h1>{post.title}</h1>
          <p className="vlog-deck">{post.excerpt}</p>
        </div>

        <VlogPhoto
          file={post.coverImage}
          alt={`Cover photo for ${post.title}`}
          caption={`The opening frame — add ${post.coverImage} to your blog photos.`}
          className="vlog-cover"
        />

        <p className="vlog-opening">{story.opening}</p>

        <div className="vlog-chapters">
          {story.chapters.map((chapter, index) => (
            <section className="vlog-chapter" key={chapter.title}>
              <div className="vlog-chapter-copy">
                <p className="eyebrow" style={{ color: "var(--color-mauve)" }}>
                  Chapter {String(index + 1).padStart(2, "0")}
                </p>
                <h2>{chapter.title}</h2>
                <p>{chapter.text}</p>
              </div>
              <div
                className={`vlog-gallery vlog-gallery-${chapter.photos.length}`}
              >
                {chapter.photos.map((photo) => (
                  <VlogPhoto
                    key={photo.file}
                    file={photo.file}
                    alt={photo.alt}
                    caption={photo.caption}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer className="vlog-endnote">
          <span aria-hidden="true">✳</span>
          <p>That’s the little photo diary for now. More soon.</p>
          <button className="button-secondary" onClick={onBack}>
            Back to all posts
          </button>
        </footer>
      </article>
    </main>
  )
}
