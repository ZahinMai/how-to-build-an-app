export type Project = {
  tag: string
  title: string
  desc: string
  tech: string[]
  color: string
  year: string
  details: string
  outcome: string
}

export type Post = {
  tag: string
  title: string
  date: string
  excerpt: string
}

export type Skill = {
  label: string
  level: number
  color: string
}

export type Experience = {
  role: string
  company: string
  period: string
  desc: string
}

export type AdditionalExperience = {
  role: string
  company: string
  period: string
}

export type Education = {
  qualification: string
  institution: string
  period: string
  details: string
}
