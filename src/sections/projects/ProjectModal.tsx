import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react'
import { Project } from './ProjectCard'
import { Button } from '@/components/ui/Button'
import { GITHUB_URL } from '@/constants'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [project])

  if (!project) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop Backdrop Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto glass-panel rounded-3xl p-5 sm:p-8 shadow-2xl border border-black/10 dark:border-white/10 z-50 my-auto custom-scrollbar"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-zinc-900/60 text-white hover:bg-zinc-900 transition-colors z-30"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          {/* Modal Image Header */}
          <div className="relative w-full h-48 sm:h-64 rounded-2xl overflow-hidden mb-6 bg-zinc-900">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 text-white">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500 text-white text-xs font-mono font-bold mb-2">
                <Calendar size={12} />
                {project.date}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold">{project.title}</h2>
              <p className="text-xs sm:text-sm text-zinc-300 font-medium line-clamp-1">{project.subtitle}</p>
            </div>
          </div>

          {/* Modal Body Content */}
          <div className="flex flex-col gap-6">
            {/* Tech Tags */}
            <div>
              <p className="text-xs font-mono uppercase text-zinc-400 dark:text-zinc-500 mb-2">
                Technologies & Frameworks:
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-100 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Detailed Key Features */}
            <div>
              <p className="text-xs font-mono uppercase text-zinc-400 dark:text-zinc-500 mb-3">
                Key Accomplishments & Architecture:
              </p>
              <ul className="flex flex-col gap-2.5">
                {project.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <CheckCircle2 size={16} className="text-brand-500 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Link Buttons */}
            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-end gap-3">
              <a href={project.githubUrl || GITHUB_URL} target="_blank" rel="noreferrer">
                <Button variant="secondary" size="md" leftIcon={<Github size={16} />}>
                  View Repository
                </Button>
              </a>
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noreferrer">
                  <Button variant="primary" size="md" rightIcon={<ExternalLink size={16} />}>
                    Live Application
                  </Button>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default ProjectModal
