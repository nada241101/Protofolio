import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Microscope, Layers } from 'lucide-react'
import EducationCard from './EducationCard'
import TimelineItem, { TimelineData } from './TimelineItem'
import { Container } from '@/components/ui/Container'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { cn } from '@/utils/cn'

const TIMELINE_DATA: TimelineData[] = [
  {
    id: 'exp-1',
    period: 'Oct 2025 – Dec 2025',
    role: 'AI & Data Science Instructor',
    organization: 'Project-Based Training',
    category: 'experience',
    bullets: [
      'Delivered hands-on AI, ML, Data Analytics, and BI training through project-based learning.',
      'Mentored students in developing AI solutions using Python and modern AI tools.',
    ],
    skills: ['Python', 'AI / ML', 'Data Analytics', 'Business Intelligence'],
    icon: <Briefcase size={14} className="text-brand-500" />,
  },
  {
    id: 'exp-2',
    period: 'Oct 2025 – Dec 2025',
    role: 'AI & Machine Learning Trainee',
    organization: 'End-to-End ML Pipelines',
    category: 'experience',
    bullets: [
      'Built end-to-end ML pipelines using Python for predictive analytics and model optimization.',
      'Applied supervised and unsupervised learning to solve real-world data problems.',
    ],
    skills: ['Supervised Learning', 'Unsupervised Learning', 'Predictive Analytics', 'Model Optimization'],
    icon: <Briefcase size={14} className="text-brand-500" />,
  },
  {
    id: 'exp-3',
    period: 'Aug 2025 – Sep 2025',
    role: 'Business Intelligence Analyst Trainee',
    organization: 'Information Technology Institute (ITI)',
    category: 'experience',
    bullets: [
      'Built interactive Power BI dashboards and analyzed business data using SQL and Excel.',
      'Delivered data-driven insights through visualization and KPI reporting.',
    ],
    skills: ['Power BI', 'SQL', 'Excel', 'KPI Reporting', 'Data Visualization'],
    icon: <Briefcase size={14} className="text-brand-500" />,
  },
  {
    id: 'exp-4',
    period: 'Jan 2025 – Apr 2025',
    role: 'Flutter Developer Intern',
    organization: 'Konecta',
    category: 'experience',
    bullets: [
      'Developed scalable Flutter applications using clean architecture and responsive UI design.',
      'Integrated Firebase, SQL, authentication, and REST APIs into mobile applications.',
    ],
    skills: ['Flutter', 'Firebase', 'SQL', 'REST APIs', 'Clean Architecture'],
    icon: <Briefcase size={14} className="text-brand-500" />,
  },
  {
    id: 'exp-5',
    period: 'Apr 2024 – Oct 2024',
    role: 'Mobile Application Development Trainee',
    organization: 'Digital Egypt Pioneers Initiative (DEPI)',
    category: 'experience',
    bullets: [
      'Developed cross-platform Flutter applications using clean architecture and state management.',
      'Implemented Firebase, REST APIs, local storage, and Agile development practices.',
    ],
    skills: ['Flutter', 'Dart', 'State Management', 'REST APIs', 'Agile'],
    icon: <Briefcase size={14} className="text-brand-500" />,
  },
  {
    id: 'exp-6',
    period: 'Aug 2024 – Sep 2024',
    role: 'AI Trainee',
    organization: 'Huawei HCIA-AI Learning',
    category: 'experience',
    bullets: [
      'Completed hands-on AI, ML, and Deep Learning training using the Huawei HCIA-AI curriculum.',
      'Applied AI fundamentals to real-world use cases while strengthening problem-solving and analytical skills.',
    ],
    skills: ['Huawei HCIA-AI', 'Deep Learning', 'Machine Learning', 'Problem Solving'],
    icon: <Briefcase size={14} className="text-brand-500" />,
  },
  {
    id: 'res-1',
    period: 'Sep 2021 – Nov 2021',
    role: 'Research Program Participant',
    organization: 'New York Academy of Sciences',
    category: 'research',
    bullets: [
      'Conducted scientific research through a global research program, strengthening critical thinking and analytical skills.',
      'Collaborated in an international research environment while developing scientific communication and teamwork skills.',
    ],
    skills: ['Scientific Research', 'International Collaboration', 'Scientific Communication'],
    icon: <Microscope size={14} className="text-emerald-500" />,
  },
]

type CategoryFilter = 'all' | 'experience' | 'research'

export const Education: React.FC = () => {
  const [filter, setFilter] = useState<CategoryFilter>('all')

  const filteredItems = TIMELINE_DATA.filter((item) => {
    if (filter === 'all') return true
    return item.category === filter
  })

  return (
    <section
      id="education"
      className="relative py-24 bg-surface-light dark:bg-surface-dark transition-colors duration-300 overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      <Container size="xl" className="relative z-10 flex flex-col gap-12">
        {/* Header Badge & Title */}
        <ScrollReveal variant="fadeUp">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="inline-block text-xs font-mono font-bold tracking-widest text-brand-600 dark:text-brand-400 uppercase mb-3">
              // 02. ACADEMIC & PROFESSIONAL JOURNEY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
              Education & Training Timeline
            </h2>
            <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
              Academic degree at Kafr El-Sheikh University combined with intensive practical training programs in AI, BI analytics, software engineering, and global research.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Degree Glass Card */}
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <EducationCard />
        </ScrollReveal>

        {/* Filter Category Tabs */}
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
            <Layers size={18} className="text-brand-500" />
            Practical Experience & Training
          </h3>

          <div className="flex items-center gap-2 p-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <button
              onClick={() => setFilter('all')}
              className={cn(
                'px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all',
                filter === 'all'
                  ? 'bg-white dark:bg-zinc-800 text-brand-600 dark:text-brand-400 shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100',
              )}
            >
              All Milestones ({TIMELINE_DATA.length})
            </button>
            <button
              onClick={() => setFilter('experience')}
              className={cn(
                'px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all',
                filter === 'experience'
                  ? 'bg-white dark:bg-zinc-800 text-brand-600 dark:text-brand-400 shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100',
              )}
            >
              Training & Internships
            </button>
            <button
              onClick={() => setFilter('research')}
              className={cn(
                'px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all',
                filter === 'research'
                  ? 'bg-white dark:bg-zinc-800 text-brand-600 dark:text-brand-400 shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100',
              )}
            >
              Research
            </button>
          </div>
        </div>

        {/* Timeline Items Stream */}
        <div className="mt-4">
          {filteredItems.map((item, idx) => (
            <TimelineItem key={item.id} data={item} index={idx} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Education
