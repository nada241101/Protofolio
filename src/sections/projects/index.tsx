import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import ProjectCard, { Project } from './ProjectCard'
import ProjectModal from './ProjectModal'
import { Container } from '@/components/ui/Container'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { cn } from '@/utils/cn'
import { GITHUB_URL } from '@/constants'

const PROJECTS_DATA: Project[] = [
  {
    id: 'nassaq',
    title: 'NassaQ',
    subtitle: 'AI Document Management System | PaddleOCR • LangChain • RAG • NLP • Streamlit',
    category: 'ai',
    date: 'Jan. – Jun. 2026',
    tags: ['PaddleOCR', 'LangChain', 'RAG', 'NLP', 'Streamlit', 'RBAC'],
    bullets: [
      'Developed an enterprise AI platform integrating 6+ intelligent modules, including bilingual OCR, semantic search, Retrieval-Augmented Generation (RAG), document classification, RBAC, and analytics dashboards.',
      'Supported 2 languages (Arabic & English), 4+ document formats, and implemented storage optimization to improve document retrieval, security, and team productivity.',
    ],
    githubUrl: GITHUB_URL,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 'chronos-insight',
    title: 'ChronosInsight',
    subtitle: 'AI Manuscript Restoration | Python • ViTs • GANs • OpenCV • NLP',
    category: 'ai',
    date: 'Sep. 2025',
    tags: ['Vision Transformers (ViTs)', 'GANs', 'OpenCV', 'NLP', 'Deep Learning'],
    bullets: [
      'Developed a deep learning pipeline using ViTs, GANs, OCR, and NLP for manuscript restoration and handwriting recognition.',
      'Implemented semantic indexing and document classification using unsupervised learning.',
    ],
    githubUrl: GITHUB_URL,
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'ecopulse',
    title: 'EcoPulse',
    subtitle: 'Carbon Intelligence Platform | Python • ML • Time-Series • Power BI • SQL',
    category: 'data',
    date: 'Oct. 2025',
    tags: ['Time-Series Forecasting', 'Power BI', 'SQL', 'IoT Data', 'Machine Learning'],
    bullets: [
      'Built an AI-powered sustainability platform leveraging IoT, geospatial, and time-series data for emissions forecasting.',
      'Developed Power BI dashboards and ML forecasting models for sustainability insights.',
    ],
    githubUrl: GITHUB_URL,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'whisker-bites',
    title: 'Whisker Bites',
    subtitle: 'Food Ordering App | Flutter • Dart • Firebase • SQL • REST APIs',
    category: 'mobile',
    date: 'Dec. 2024',
    tags: ['Flutter', 'Dart', 'Firebase', 'SQL', 'REST APIs'],
    bullets: [
      'Developed a scalable food ordering application with authentication, dynamic menus, cart, and secure checkout.',
      'Integrated SQL database architecture for efficient management of users, orders, menus, and payments.',
    ],
    githubUrl: GITHUB_URL,
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'plantiful',
    title: 'Plantiful',
    subtitle: 'Smart Plant Care App | Flutter • Dart • Firebase • Weather API',
    category: 'mobile',
    date: 'Oct. 2024',
    tags: ['Flutter', 'Dart', 'Weather API', 'Geolocation', 'Smart Irrigation'],
    bullets: [
      'Developed a Flutter-based smart plant care app integrating Weather API, geolocation, smart irrigation, and plant monitoring.',
      'Implemented intelligent plant care recommendations to optimize irrigation efficiency and enhance sustainable gardening.',
    ],
    githubUrl: GITHUB_URL,
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'electro-plants',
    title: 'Electro Plants',
    subtitle: 'Bioelectric Energy Research | MFCs • Bioenergy • Clean Energy',
    category: 'research',
    date: 'Oct. 2022',
    tags: ['MFCs', 'Bioenergy', 'Clean Energy', 'Microbial Fuel Cells', 'Green Tech'],
    bullets: [
      'Investigated Microbial Fuel Cells (MFCs) for renewable bioelectric energy generation.',
      'Evaluated bioenergy generation techniques to improve renewable energy efficiency for sustainable agricultural applications.',
    ],
    githubUrl: GITHUB_URL,
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop',
  },
]

type ProjectCategory = 'all' | 'ai' | 'data' | 'mobile' | 'research'

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ProjectCategory>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (activeTab === 'all') return true
    return p.category === activeTab
  })

  return (
    <section
      id="projects"
      className="relative py-24 bg-surface-light dark:bg-surface-dark transition-colors duration-300 overflow-hidden"
    >
      {/* Background Glow Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

      <Container size="xl" className="relative z-10 flex flex-col gap-12">
        {/* Section Header */}
        <ScrollReveal variant="fadeUp">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Sparkles size={14} />
              // 03. FEATURED WORK & INNOVATIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
              Enterprise AI Platforms & Engineering Projects
            </h2>
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Demonstrating expertise in AI document management, manuscript restoration with ViTs & GANs, emissions forecasting platforms, and cross-platform applications.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2">
          <button
            onClick={() => setActiveTab('all')}
            className={cn(
              'px-4 py-2 rounded-full text-xs font-semibold transition-all',
              activeTab === 'all'
                ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-md'
                : 'glass-panel text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100',
            )}
          >
            All Projects ({PROJECTS_DATA.length})
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={cn(
              'px-4 py-2 rounded-full text-xs font-semibold transition-all',
              activeTab === 'ai'
                ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-md'
                : 'glass-panel text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100',
            )}
          >
            AI & Machine Learning (2)
          </button>
          <button
            onClick={() => setActiveTab('data')}
            className={cn(
              'px-4 py-2 rounded-full text-xs font-semibold transition-all',
              activeTab === 'data'
                ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-md'
                : 'glass-panel text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100',
            )}
          >
            Data & Sustainability (1)
          </button>
          <button
            onClick={() => setActiveTab('mobile')}
            className={cn(
              'px-4 py-2 rounded-full text-xs font-semibold transition-all',
              activeTab === 'mobile'
                ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-md'
                : 'glass-panel text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100',
            )}
          >
            Mobile Apps (2)
          </button>
          <button
            onClick={() => setActiveTab('research')}
            className={cn(
              'px-4 py-2 rounded-full text-xs font-semibold transition-all',
              activeTab === 'research'
                ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-md'
                : 'glass-panel text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100',
            )}
          >
            Green Tech Research (1)
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>
      </Container>

      {/* Expanded Modal View */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}

export default Projects
