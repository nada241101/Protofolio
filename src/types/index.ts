// Shared types for portfolio data
export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  link?: string
  github?: string
  image?: string
}

export interface EducationItem {
  id: string
  institution: string
  degree: string
  period: string
  description?: string
}
