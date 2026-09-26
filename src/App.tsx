import { useCallback, useEffect, useState } from "react"

import { POSTS } from "@/data/portfolio"
import { useModalEffects } from "@/hooks/useModalEffects"
import type { Post, Project } from "@/types/portfolio"
import { ContactSection } from "@/components/ContactSection"
import { DetailModal } from "@/components/DetailModal"
import { EducationSection } from "@/components/EducationSection"
import { ExperienceSection } from "@/components/ExperienceSection"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { SkillsSection } from "@/components/SkillsSection"
import { WritingSection } from "@/components/WritingSection"
import { BlogPostPage } from "@/pages/BlogPostPage"
import { NotebookPage } from "@/pages/NotebookPage"

function App() {
  const [filter, setFilter] = useState("All")
  const [mobileOpen, setMobileOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activePost, setActivePost] = useState<Post | null>(null)
  const [showNotebook, setShowNotebook] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

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
    }

    onHashChange()
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activePost, showNotebook])

  useEffect(() => {
    if (!isTransitioning) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.location.hash = "notebook"
      setIsTransitioning(false)
      return
    }

    const timeout = window.setTimeout(() => {
      window.location.hash = "notebook"
      setIsTransitioning(false)
    }, 1450)

    return () => window.clearTimeout(timeout)
  }, [isTransitioning])

  const openPost = (post: Post) => {
    const index = POSTS.findIndex((item) => item.title === post.title)
    window.location.hash = `post-${index}`
  }

  const returnToNotebook = () => {
    window.location.hash = "notebook"
  }

  const returnToPortfolio = () => {
    window.location.hash = "work"
  }

  const openFromLogo = () => {
    if (activePost || showNotebook) {
      window.location.hash = "work"
      return
    }

    setIsTransitioning(true)
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
      {activePost ? (
        <>
          <Header
            filter={filter}
            mobileOpen={mobileOpen}
            setFilter={setFilter}
            setMobileOpen={setMobileOpen}
            onLogoClick={openFromLogo}
          />
          <BlogPostPage post={activePost} onBack={returnToNotebook} />
          <Footer />
        </>
      ) : showNotebook ? (
        <>
          <NotebookPage onOpenPost={openPost} onBack={returnToPortfolio} />
          <Footer />
        </>
      ) : (
        <>
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <Header
            filter={filter}
            mobileOpen={mobileOpen}
            setFilter={setFilter}
            setMobileOpen={setMobileOpen}
            onLogoClick={openFromLogo}
          />
          <main id="main">
            <HeroSection
              isTransitioning={isTransitioning}
              onEnterNotebook={openFromLogo}
            />
            <ProjectsSection filter={filter} onSelect={setSelectedProject} />
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
