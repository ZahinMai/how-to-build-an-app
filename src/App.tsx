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

function App() {
  const [filter, setFilter] = useState("All")
  const [mobileOpen, setMobileOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activePost, setActivePost] = useState<Post | null>(null)

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
      const postIndex = window.location.hash.match(/^#post-(\d+)$/)?.[1]
      setActivePost(postIndex ? (POSTS[Number(postIndex)] ?? null) : null)
    }

    onHashChange()
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  const openPost = (post: Post) => {
    const index = POSTS.findIndex((item) => item.title === post.title)
    window.location.hash = `post-${index}`
  }

  const returnToPortfolio = () => {
    window.location.hash = "work"
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
          />
          <BlogPostPage post={activePost} onBack={returnToPortfolio} />
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
          />
          <main id="main">
            <HeroSection />
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
