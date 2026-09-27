import type { CSSProperties } from "react"

import { GateArtwork } from "@/components/GateArtwork"

export type GateBounds = {
  left: number
  top: number
  width: number
  height: number
  targetLeft: number
  targetTop: number
  targetWidth: number
  targetHeight: number
  backgroundScale: number
}

export function getGateBounds(svg: SVGSVGElement): GateBounds {
  const bounds = svg.getBoundingClientRect()
  const scale =
    Math.max(window.innerWidth / 560, window.innerHeight / 400) * 1.06
  const notebookFitScale = Math.max(
    window.innerWidth / 560,
    window.innerHeight / 390,
  )
  const targetWidth = 800 * scale
  const targetHeight = 520 * scale

  return {
    left: bounds.left,
    top: bounds.top,
    width: bounds.width,
    height: bounds.height,
    targetLeft: window.innerWidth / 2 - 400 * scale,
    targetTop: window.innerHeight / 2 - 290 * scale,
    targetWidth,
    targetHeight,
    backgroundScale: scale / notebookFitScale,
  }
}

type GateTransitionProps = {
  bounds: GateBounds
  phase: "zooming" | "revealing"
  onZoomComplete: () => void
  onRevealComplete: () => void
}

export function GateTransition({
  bounds,
  phase,
  onZoomComplete,
  onRevealComplete,
}: GateTransitionProps) {
  return (
    <div
      className={`gate-world-transition ${phase}`}
      style={
        {
          "--gate-start-left": `${bounds.left}px`,
          "--gate-start-top": `${bounds.top}px`,
          "--gate-start-width": `${bounds.width}px`,
          "--gate-start-height": `${bounds.height}px`,
          "--gate-end-left": `${bounds.targetLeft}px`,
          "--gate-end-top": `${bounds.targetTop}px`,
          "--gate-end-width": `${bounds.targetWidth}px`,
          "--gate-end-height": `${bounds.targetHeight}px`,
        } as CSSProperties
      }
      onAnimationEnd={
        phase === "zooming"
          ? (event) => {
              if (
                event.target === event.currentTarget &&
                event.animationName === "gate-world-zoom"
              ) {
                onZoomComplete()
              }
            }
          : undefined
      }
      onTransitionEnd={
        phase === "revealing"
          ? (event) => {
              if (event.propertyName === "opacity") onRevealComplete()
            }
          : undefined
      }
      aria-hidden="true"
    >
      <svg viewBox="0 0 800 520" focusable="false">
        <GateArtwork clipPathId="transition-gate-arch" />
      </svg>
    </div>
  )
}
