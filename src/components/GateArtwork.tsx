import { LandscapeArtwork } from "@/components/LandscapeArtwork"

type GateArtworkProps = {
  clipPathId: string
}

export function GateArtwork({ clipPathId }: GateArtworkProps) {
  return (
    <>
      <path
        className="toran-gate-frame"
        d="M120,480 L120,220 Q120,90 400,90 Q680,90 680,220 L680,480"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="4"
      />
      <clipPath id={clipPathId}>
        <path d="M130,480 L130,222 Q130,100 400,100 Q670,100 670,222 L670,480 Z" />
      </clipPath>
      <g className="toran-scene" clipPath={`url(#${clipPathId})`}>
        <LandscapeArtwork />
      </g>
      <g className="toran-door-left">
        <rect
          x="120"
          y="210"
          width="46"
          height="270"
          rx="10"
          fill="var(--color-cream)"
          stroke="var(--color-ink)"
          strokeWidth="3"
        />
        <circle cx="143" cy="260" r="7" fill="var(--color-burnt)" />
        <circle cx="143" cy="320" r="7" fill="var(--color-sage)" />
        <circle cx="143" cy="380" r="7" fill="var(--color-burnt)" />
      </g>
      <g className="toran-door-right">
        <rect
          x="634"
          y="210"
          width="46"
          height="270"
          rx="10"
          fill="var(--color-cream)"
          stroke="var(--color-ink)"
          strokeWidth="3"
        />
        <circle cx="657" cy="260" r="7" fill="var(--color-burnt)" />
        <circle cx="657" cy="320" r="7" fill="var(--color-sage)" />
        <circle cx="657" cy="380" r="7" fill="var(--color-burnt)" />
      </g>
      <line
        className="toran-gate-frame"
        x1="60"
        y1="480"
        x2="740"
        y2="480"
        stroke="var(--color-ink)"
        strokeWidth="3"
      />
    </>
  )
}
