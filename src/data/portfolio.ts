import type {
  AdditionalExperience,
  Education,
  Experience,
  Post,
  Project,
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

export const PROJECTS: Project[] = [
  {
    tag: "Robotics",
    title: "Webots Multi-Robot Coordination",
    desc: "A little cafeteria world where cleaning robots try out different ways of sharing tasks and getting around.",
    tech: ["Webots", "Python", "Multi-Agent Systems", "A* Navigation"],
    color: "#4a7058",
    year: "2025",
    details:
      "Built in Webots to play with baseline, swarm, and auction-based coordination. The robots navigate around the same cafeteria, collect spawned trash, and log what happens across different strategies.",
    repositoryUrl: "https://github.com/ZahinMai/Clean-Up-Crew",
  },
]

export const SKILLS = [
  "Java",
  "Spring Boot",
  "REST APIs",
  "Microservices",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Angular",
  "React",
  "JavaScript",
  "Python",
  "C++",
  "LangChain",
  "LangGraph",
  "MCP",
  "AWS",
  "Docker",
  "Agile / Scrum",
]

export const EXPERIENCE: Experience[] = [
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
    desc: "Taught students aged 5-16 Scratch, Luau, JavaScript, and C#, while leading Arduino and LEGO robotics workshops.",
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
  {
    role: "Tutor",
    company: "My Learning Room · Remote",
    period: "Jan 2023 — Jun 2023",
  },
  {
    role: "Production Operative",
    company: "HelloFresh · Nuneaton",
    period: "Nov 2022 — Jan 2023",
  },
]

export const LEADERSHIP_AND_ACTIVITIES = [
  {
    title: "STEM outreach and volunteering",
    details:
      "Supported STEM events, spoke at local schools, and helped students find work experience in STEM.",
  },
  {
    title: "Co-founder, Caterpillar EDGE",
    details: "Co-founded Caterpillar's Ethnically Diverse Group of Employees.",
  },
]

export const EDUCATION: Education[] = [
  {
    qualification: "Computer Science with a Year in Industry BSc",
    institution: "University of Birmingham",
    period: "Sep 2022 — Jul 2026",
    details:
      "First Class. Key modules included Artificial Intelligence, Full Stack Development, Systems Programming, Security & Networks, Intelligent Robotics, Evolutionary Computation, and Teaching Computer Science in Schools.",
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
    tag: "Birmingham",
    title: "Things to do in Birmingham",
    date: "A city day out",
    excerpt:
      "A camera-roll kind of guide to canal walks, good coffee, colourful corners and an unhurried day in Birmingham.",
    coverImage: "things-to-do-birmingham-cover.jpg",
  },
  {
    tag: "Everyday",
    title: "Microdosing my dream life",
    date: "Little by little",
    excerpt:
      "Tiny rituals, small adventures and the everyday choices that make ordinary weeks feel a little more like the life I want.",
    coverImage: "microdosing-dream-life-cover.jpg",
  },
  {
    tag: "Little joys",
    title: "Little things I love",
    date: "A photo diary",
    excerpt:
      "A scrapbook of the small, lovely details that make me pause, look closer and feel glad to be here.",
    coverImage: "little-things-i-love-cover.jpg",
  },
]
