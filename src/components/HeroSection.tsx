import { useRef } from "react"

import { getGateBounds, type GateBounds } from "@/components/GateTransition"
import { GateArtwork } from "@/components/GateArtwork"

type HeroSectionProps = {
  isTransitioning: boolean
  onEnterNotebook: (bounds: GateBounds) => void
}

export function HeroSection({
  isTransitioning,
  onEnterNotebook,
}: HeroSectionProps) {
  const gateSvgRef = useRef<SVGSVGElement>(null)

  const enterNotebook = () => {
    const svg = gateSvgRef.current
    if (!svg) return

    onEnterNotebook(getGateBounds(svg))
  }

  return (
    <section id="work" style={{ borderBottom: "2px solid var(--color-ink)" }}>
      <div
        className="relative flex flex-col items-center justify-center text-center overflow-hidden px-6 py-20 md:py-28"
        style={{ backgroundColor: "var(--color-sage)" }}
      >
        {/* Gate animation — pure CSS, respects prefers-reduced-motion */}
        <style>{`
          @keyframes toranDoorLeft { from { transform: translateX(0); } to { transform: translateX(-34px); } }
          @keyframes toranDoorRight { from { transform: translateX(0); } to { transform: translateX(34px); } }
          @keyframes toranReveal { from { opacity: 0; } to { opacity: 1; } }
          .gate-launch {
            display: block;
            width: 100%;
            max-width: 760px;
            padding: 0;
            border: 0;
            background: transparent;
          }
          .gate-hint { transition: opacity 350ms ease; }
          .gate-hint.is-zooming { opacity: 0; }
          .toran-reveal.is-zooming { animation: none; opacity: 0; transition: opacity 450ms ease; }
          .toran-door-left, .toran-door-right {
            animation-duration: 1800ms;
            animation-timing-function: cubic-bezier(.2,.8,.2,1);
            animation-delay: 250ms;
            animation-fill-mode: both;
          }
          .toran-door-left { animation-name: toranDoorLeft; }
          .toran-door-right { animation-name: toranDoorRight; }
          .toran-scene, .toran-reveal { animation: toranReveal 900ms ease-out 260ms both; }
          @media (prefers-reduced-motion: reduce) {
            .toran-door-left, .toran-door-right, .toran-scene, .toran-reveal { animation: none; }
            .gate-hint { transition: none; }
          }
        `}</style>

        <button
          type="button"
          className={`gate-launch ${isTransitioning ? "is-zooming" : ""}`}
          onClick={enterNotebook}
          aria-label="Enter the notebook through the landscape gate"
          disabled={isTransitioning}
        >
          <svg
            ref={gateSvgRef}
            className="gate-landscape-svg w-full max-w-[760px] h-auto mx-auto"
            viewBox="0 0 800 520"
            aria-hidden="true"
          >
            <GateArtwork clipPathId="portfolio-gate-arch" />
          </svg>
        </button>

        <div
          className={`toran-reveal mt-8 w-full max-w-5xl ${
            isTransitioning ? "is-zooming" : ""
          }`}
        >
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.75rem, 5vw, 4.5rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              color: "var(--color-ink)",
            }}
          >
            A portfolio, a notebook, and a few side quests.
          </h1>
          <p
            className="mt-4 mx-auto max-w-4xl"
            style={{ color: "var(--color-ink-soft)" }}
          >
            I'm Zahin — a full stack software developer working across Java,
            agentic AI, and technical Business Analysis. This site is part
            professional portfolio, part notebook, and part home for the
            interests and side quests that keep me curious.
          </p>
        </div>
      </div>
    </section>
  )
}
