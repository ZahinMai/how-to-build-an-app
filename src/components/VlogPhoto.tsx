const photoAssets = import.meta.glob<string>(
  "@/assets/blog/*.{avif,gif,jpeg,jpg,png,webp}",
  { eager: true, import: "default", query: "?url" },
)

type VlogPhotoProps = {
  file: string
  alt: string
  caption?: string
  className?: string
}

export function VlogPhoto({ file, alt, caption, className }: VlogPhotoProps) {
  const source = Object.entries(photoAssets).find(([path]) =>
    path.endsWith(`/${file}`),
  )?.[1]

  return (
    <figure className={`vlog-photo ${className ?? ""}`}>
      {source ? (
        <img src={source} alt={alt} loading="lazy" />
      ) : (
        <div className="vlog-photo-placeholder" role="img" aria-label={alt}>
          <span className="vlog-photo-icon" aria-hidden="true">
            +
          </span>
          <span className="vlog-photo-label">Photo goes here</span>
          <code>src/assets/blog/{file}</code>
        </div>
      )}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
