import type {
  AdditionalExperience,
  Education,
  Experience,
  Post,
  Project,
  Skill,
} from "@/types/portfolio"

export const NAV_LINKS = [
  { label: "Home", href: "#work" },
  { label: "Work", href: "#projects" },
  { label: "Profile", href: "#profile" },
  { label: "Side Quests", href: "#notebook" },
  { label: "Writing", href: "#writing" },
]

export const CONTACT_LINKS = [
  {
    label: "LinkedIn",
    handle: "zahin-maisa",
    href: "https://www.linkedin.com/in/zahin-maisa-3058131ba",
    color: "var(--color-mauve)",
  },
  {
    label: "Instagram",
    handle: "@zahin.notalien",
    href: "https://www.instagram.com/zahin.notalien/",
    color: "var(--color-burnt)",
  },
  {
    label: "Email",
    handle: "zahin08@outlook.com",
    href: "mailto:zahin08@outlook.com",
    color: "var(--color-forest)",
  },
  {
    label: "Phone",
    handle: "+44 7377 887085",
    href: "tel:+447377887085",
    color: "var(--color-amber)",
  },
]

export const FILTERS = [
  "All",
  "Spring Boot",
  "AI & Automation",
  "Data & Dashboards",
  "Frontend",
]

export const PROJECTS: Project[] = [
  {
    tag: "Software Engineering",
    title: "Client Onboarding Automation",
    desc: "An agentic AI workflow for processing institutional client data and accelerating account activation.",
    tech: ["Java", "Spring Boot", "Microservices"],
    color: "#cd6e3a",
    year: "2026",
    details:
      "A BNY client onboarding platform built around Spring Boot microservices and agentic AI orchestration.",
    outcome: "Reduced an account activation stage from days to minutes.",
  },
  {
    tag: "Business Analysis",
    title: "Operational Process Automation",
    desc: "A continuous improvement initiative that standardised internal IT and Project Management Office workflows.",
    tech: ["Requirements", "Automation", "Agile"],
    color: "#9a7ba0",
    year: "2025",
    details:
      "A Caterpillar initiative focused on gathering requirements, standardising processes, and supporting software delivery.",
    outcome:
      "Reduced Project Management Office administration overhead by 60%.",
  },
  {
    tag: "Data Visualisation",
    title: "Employee Engagement Platform",
    desc: "A data visualisation platform for aggregating and analysing employee engagement metrics.",
    tech: ["Data Analysis", "Visualisation", "JavaScript"],
    color: "#4a7058",
    year: "2025",
    details:
      "A Caterpillar platform designed to bring employee engagement data together for clearer analysis and reporting.",
    outcome:
      "Improved visibility of engagement metrics to support operational decision-making.",
  },
  {
    tag: "Cybersecurity",
    title: "Contract Compliance Evidence",
    desc: "Validated and delivered cyber certification evidence for a major industrial contract.",
    tech: ["Cybersecurity", "Compliance", "Documentation"],
    color: "#8fa870",
    year: "2025",
    details:
      "A Caterpillar compliance workstream focused on validating cyber certification evidence against contract requirements.",
    outcome:
      "Helped safeguard a £50M contract through accurate compliance delivery.",
  },
]

export const PROJECT_FILTERS: Record<string, string[]> = {
  "Client Onboarding Automation": ["Java", "Spring Boot", "AI & Automation"],
  "Operational Process Automation": ["Agile", "Data"],
  "Employee Engagement Platform": ["Data", "Frontend"],
  "Contract Compliance Evidence": ["Data"],
}

export const SKILLS: Skill[] = [
  { label: "Java / Spring Boot", level: 90, color: "#cd6e3a" },
  { label: "REST APIs / Microservices", level: 88, color: "#9a7ba0" },
  { label: "Python / C++ / JavaScript", level: 82, color: "#4a7058" },
  { label: "MySQL / PostgreSQL", level: 80, color: "#e8a030" },
  { label: "Angular / React", level: 78, color: "#8fa870" },
  { label: "LangChain / LangGraph / MCP", level: 75, color: "#d4a080" },
]

export const EXPERIENCE: Experience[] = [
  {
    role: "Technology Graduate Associate",
    company: "LSEG · London",
    period: "Aug 2026 — Present",
    desc: "Engineering agentic AI orchestration workflows using Java, Spring Boot microservices, and technologies including LangChain, LangGraph, and MCP.",
  },
  {
    role: "Core Java Developer (Intern)",
    company: "BNY · Manchester",
    period: "Jun 2025 — Aug 2025",
    desc: "Engineered an agentic AI workflow for BNY's Client Onboarding platform, processing institutional client data and reducing an account activation stage from days to minutes.",
  },
  {
    role: "Business Analyst (Placement)",
    company: "Caterpillar · Peterborough",
    period: "Jul 2024 — Jun 2025",
    desc: "Gathered requirements and supported software delivery to standardise internal workflows, reducing Project Management Office administration overhead by 60%.",
  },
  {
    role: "Code Sensei",
    company: "Code Ninjas · Leicester",
    period: "Jul 2023 — Apr 2025",
    desc: "Taught students aged 5–16 Scratch, Luau, JavaScript, and C#, while leading Arduino and LEGO robotics workshops.",
  },
]

export const ADDITIONAL_EXPERIENCE: AdditionalExperience[] = [
  {
    role: "Computer Science Teaching Assistant",
    company: "Holte School · Birmingham",
    period: "Feb 2026 — May 2026",
  },
  {
    role: "Teaching Intern",
    company: "Bishop Challoner Catholic College · Birmingham",
    period: "Jun 2024 — Jul 2024",
  },
  {
    role: "Computer Science Outreach Ambassador",
    company: "University of Birmingham",
    period: "Apr 2024 — Aug 2024",
  },
  {
    role: "Sales Assistant",
    company: "British Heart Foundation · Leicester",
    period: "Jun 2023 — Aug 2023",
  },
]

export const EDUCATION: Education[] = [
  {
    qualification: "Computer Science with a Year in Industry BSc",
    institution: "University of Birmingham",
    period: "Sep 2022 — Jul 2026",
    details:
      "First Class. Key modules included Artificial Intelligence, Full Stack Development, Systems Programming, Security & Networks, Intelligent Robotics, and Evolutionary Computation.",
  },
  {
    qualification: "A-levels",
    institution: "St. Paul's Catholic School · Leicester",
    period: "Aug 2020 — Jul 2022",
    details:
      "Computer Science, Mathematics, Physics, and Economics: A*, A*, A*, A.",
  },
]

export const POSTS: Post[] = [
  {
    tag: "Day outs",
    title: "A day out with no real plan",
    date: "Coming soon",
    excerpt:
      "A slow wander, a good snack, and the small joy of seeing where the afternoon takes you.",
  },
  {
    tag: "Making",
    title: "Making something just because",
    date: "Coming soon",
    excerpt:
      "A little project, a slightly messy desk, and no particular reason beyond wanting to try.",
  },
  {
    tag: "Little joys",
    title: "A small collection of good bits",
    date: "Coming soon",
    excerpt:
      "The places, objects, and tiny moments I would probably forget if I did not write them down.",
  },
]
