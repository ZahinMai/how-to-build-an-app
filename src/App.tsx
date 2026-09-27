import { useCallback, useEffect, useState } from "react"

import { POSTS } from "@/data/portfolio"
import { useModalEffects } from "@/hooks/useModalEffects"
import type { Post, Project } from "@/types/portfolio"
import { ContactSection } from "@/components/ContactSection"
import { DetailModal } from "@/components/DetailModal"
import { EducationSection } from "@/components/EducationSection"
import { ExperienceSection } from "@/components/ExperienceSection"
import { Footer } from "@/components/Footer"
import {
  GateTransition,
  getGateBounds,
  type GateBounds,
} from "@/components/GateTransition"
import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { SkillsSection } from "@/components/SkillsSection"
import { WritingSection } from "@/components/WritingSection"
import { BlogPostPage } from "@/pages/BlogPostPage"
import { NotebookPage } from "@/pages/NotebookPage"

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activePost, setActivePost] = useState<Post | null>(null)
  const [showNotebook, setShowNotebook] = useState(false)
  const [notebookBackgroundScale, setNotebookBackgroundScale] = useState(1)
  const [notebookLandscapeMoving, setNotebookLandscapeMoving] = useState(false)
  const [gateTransition, setGateTransition] = useState<{
    bounds: GateBounds
    phase: "zooming" | "revealing"
  } | null>(null)

  const closeAll = useCallback(() => {
    setSelectedProject(null)
    setMobileOpen(false)
  }, [])

  useModalEffects({
    isOpen: selectedProject !== null,
    closeAll,
  })

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash
      const postIndex = hash.match(/^#post-(\d+)$/)?.[1]
      setActivePost(postIndex ? (POSTS[Number(postIndex)] ?? null) : null)
      setShowNotebook(hash === "#notebook")
      if (hash === "#notebook") {
        setGateTransition((current) =>
          current?.phase === "zooming"
            ? { ...current, phase: "revealing" }
            : current,
        )
      }
    }

    onHashChange()
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activePost, showNotebook])

  const openPost = (post: Post) => {
    const index = POSTS.findIndex((item) => item.title === post.title)
    window.location.hash = `post-${index}`
  }

  const returnToNotebook = () => {
    window.location.hash = "notebook"
  }

  const returnToPortfolio = () => {
    setNotebookBackgroundScale(1)
    setNotebookLandscapeMoving(false)
    window.location.hash = "work"
  }

  const beginNotebookTransition = (bounds: GateBounds) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.location.hash = "notebook"
      return
    }

    setNotebookBackgroundScale(bounds.backgroundScale)
    setNotebookLandscapeMoving(false)
    setGateTransition({ bounds, phase: "zooming" })
  }

  const openFromLogo = () => {
    if (activePost || showNotebook) {
      window.location.hash = "work"
      return
    }

    window.scrollTo(0, 0)
    const gateSvg = document.querySelector<SVGSVGElement>(".gate-landscape-svg")
    if (gateSvg) beginNotebookTransition(getGateBounds(gateSvg))
  }

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "var(--color-cream)",
        color: "var(--color-ink)",
        fontFamily: "var(--font-sans)",
      }}
    >
      {gateTransition && (
        <GateTransition
          bounds={gateTransition.bounds}
          phase={gateTransition.phase}
          onZoomComplete={() => {
            setGateTransition((current) =>
              current ? { ...current, phase: "revealing" } : current,
            )
            window.location.hash = "notebook"
          }}
          onRevealComplete={() => {
            setGateTransition(null)
            setNotebookLandscapeMoving(true)
          }}
        />
      )}
      {activePost ? (
        <>
          <BlogPostPage post={activePost} onBack={returnToNotebook} />
          <Footer />
        </>
      ) : showNotebook ? (
        <>
          <NotebookPage
            onOpenPost={openPost}
            onBack={returnToPortfolio}
            backgroundScale={notebookBackgroundScale}
            landscapeMoving={notebookLandscapeMoving}
          />
          <Footer />
        </>
      ) : (
        <>
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <Header
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
            onLogoClick={openFromLogo}
          />
          <main id="main">
            <HeroSection
              isTransitioning={gateTransition !== null}
              onEnterNotebook={beginNotebookTransition}
            />
            <ProjectsSection onSelect={setSelectedProject} />
            <SkillsSection />
            <ExperienceSection />
            <EducationSection />
            <WritingSection onSelect={openPost} />
            <ContactSection />
          </main>
          <Footer />
          <DetailModal project={selectedProject} onClose={closeAll} />
        </>
      )}
    </div>
  )
}

export default App
