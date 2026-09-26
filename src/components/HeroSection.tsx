type HeroSectionProps = {
  isTransitioning: boolean
  onEnterNotebook: () => void
}

export function HeroSection({isTransitioning, onEnterNotebook,}: HeroSectionProps) {
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
          .gate-launch svg {
            transition: transform 1400ms cubic-bezier(.16,1,.3,1), opacity 1000ms ease-in;
            transform-origin: 50% 66%;
          }
          .gate-launch.is-zooming svg {
            transform: scale(8);
            opacity: 0;
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
            .gate-launch svg, .gate-hint { transition: none; }
          }
        `}</style>

        <button
          type="button"
          className={`gate-launch ${isTransitioning ? "is-zooming" : ""}`}
          onClick={onEnterNotebook}
          aria-label="Enter the notebook through the landscape gate"
          disabled={isTransitioning}
        >
          <svg
            className="w-full max-w-[760px] h-auto mx-auto"
            viewBox="0 0 800 520"
            aria-hidden="true"
          >
            <path
              d="M120,480 L120,220 Q120,90 400,90 Q680,90 680,220 L680,480"
              fill="none"
              stroke="var(--color-ink)"
              strokeWidth="4"
            />
            <clipPath id="toranArchClip">
              <path d="M130,480 L130,222 Q130,100 400,100 Q670,100 670,222 L670,480 Z" />
            </clipPath>
            <g className="toran-scene" clipPath="url(#toranArchClip)">
              <rect
                x="120"
                y="90"
                width="560"
                height="390"
                fill="var(--color-cream)"
              />
              <circle cx="400" cy="228" r="46" fill="var(--color-burnt)" />
              <polygon
                points="130,420 260,300 340,380 430,280 560,400 670,340 670,480 130,480"
                fill="var(--color-sage)"
                opacity=".5"
              />
              <polygon
                points="130,460 220,390 320,440 420,370 540,440 670,400 670,480 130,480"
                fill="var(--color-burnt)"
                opacity=".35"
              />
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
              x1="60"
              y1="480"
              x2="740"
              y2="480"
              stroke="var(--color-ink)"
              strokeWidth="3"
            />
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
