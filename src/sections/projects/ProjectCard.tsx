import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Calendar, CheckCircle2, ArrowUpRight } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { GITHUB_URL } from '@/constants'

export interface Project {
  id: string
  title: string
  subtitle: string
  category: 'ai' | 'data' | 'mobile' | 'research'
  date: string
  tags: string[]
  bullets: string[]
  githubUrl?: string
  demoUrl?: string
  image: string
  featured?: boolean
}

interface ProjectCardProps {
  project: Project
  onOpenModal?: (project: Project) => void
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="h-full flex flex-col"
    >
      <Card
        variant="glass"
        className="group relative h-full flex flex-col justify-between overflow-hidden p-6 hover:border-brand-500/40 transition-all duration-300 shadow-apple-light dark:shadow-apple-dark"
      >
        {/* Top Image Preview Box with Gradient & Badge */}
        <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden mb-6 bg-zinc-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.95] group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />

          {/* Date & Category Pills */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-950/70 text-xs font-mono font-bold text-brand-400 backdrop-blur-md border border-white/10">
              <Calendar size={12} />
              {project.date}
            </span>
            {project.featured && (
              <span className="px-2.5 py-0.5 rounded-full bg-brand-500 text-white text-[10px] font-bold uppercase tracking-wider shadow-glow-sm">
                Featured Flagship
              </span>
            )}
          </div>

          {/* Bottom Title Bar Overlay */}
          <div className="absolute bottom-3 left-4 right-4 z-10 text-white">
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight group-hover:text-brand-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-xs text-zinc-300 font-medium line-clamp-1">{project.subtitle}</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-grow flex flex-col justify-between gap-4">
          <div>
            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/60"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Bullet Highlights */}
            <ul className="flex flex-col gap-2 mb-4">
              {project.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <CheckCircle2 size={14} className="text-brand-500 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Actions Row */}
          <div className="pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <a
                href={project.githubUrl || GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full text-zinc-600 dark:text-zinc-300 hover:text-brand-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                aria-label="GitHub Repository"
              >
                <Github size={18} />
              </a>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full text-zinc-600 dark:text-zinc-300 hover:text-brand-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  aria-label="Live Demo"
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>

            {onOpenModal && (
              <Button
                variant="ghost"
                size="sm"
                rightIcon={<ArrowUpRight size={14} />}
                onClick={() => onOpenModal(project)}
                className="text-xs"
              >
                View Details
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export default ProjectCard
