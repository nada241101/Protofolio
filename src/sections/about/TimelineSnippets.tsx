import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Microscope, Award } from 'lucide-react'
import { Card } from '@/components/ui/Card'

interface TimelineItem {
  period: string
  role: string
  organization: string
  description: string
  icon: React.ReactNode
  tag: string
}

const TIMELINE_ITEMS: TimelineItem[] = [
  {
    period: 'Oct 2022 – Jun 2026',
    role: 'Bachelor of Artificial Intelligence',
    organization: 'Faculty of Artificial Intelligence, Kafr El-Sheikh University',
    description: 'Graduation project: A+ | CGPA: 3.41 / 4.00. Coursework in ML, Deep Learning, Computer Vision, NLP, BI, & Software Engineering.',
    icon: <GraduationCap size={16} className="text-brand-500" />,
    tag: 'Education',
  },
  {
    period: 'Oct 2025 – Dec 2025',
    role: 'AI & Data Science Instructor / Trainee',
    organization: 'Project-Based Training & ML Pipelines',
    description: 'Delivered hands-on AI & BI training. Built end-to-end Python ML pipelines for predictive analytics and model optimization.',
    icon: <Briefcase size={16} className="text-emerald-500" />,
    tag: 'Instruction & ML',
  },
  {
    period: 'Aug 2025 – Sep 2025',
    role: 'Business Intelligence Analyst Trainee',
    organization: 'Information Technology Institute (ITI)',
    description: 'Built interactive Power BI dashboards, analyzed business datasets using SQL & Excel, and delivered KPI data reporting.',
    icon: <Award size={16} className="text-indigo-500" />,
    tag: 'BI & Analytics',
  },
  {
    period: 'Sep 2021 – Nov 2021',
    role: 'Research Program Participant',
    organization: 'New York Academy of Sciences',
    description: 'Conducted scientific research through a global program, collaborating in an international scientific environment.',
    icon: <Microscope size={16} className="text-purple-500" />,
    tag: 'Global Research',
  },
]

export const TimelineSnippets: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Career & Academic Milestones
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
          Key highlights showcasing education, research programs, and professional roles.
        </p>
      </div>

      <div className="relative pl-6 border-l-2 border-zinc-200 dark:border-zinc-800 flex flex-col gap-6">
        {TIMELINE_ITEMS.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative"
          >
            {/* Timeline Dot Icon */}
            <div className="absolute -left-[35px] top-1.5 p-1.5 rounded-full bg-white dark:bg-zinc-900 border-2 border-brand-500 shadow-sm">
              {item.icon}
            </div>

            <Card variant="glass" className="p-5 hover:border-brand-500/30 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono font-semibold text-brand-600 dark:text-brand-400">
                  {item.period}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-[10px] font-semibold text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
                  {item.tag}
                </span>
              </div>
              <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mt-2">
                {item.role}
              </h4>
              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                {item.organization}
              </p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                {item.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default TimelineSnippets
