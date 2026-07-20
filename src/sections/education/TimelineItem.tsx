import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Building2, CheckCircle2 } from 'lucide-react'
import { Card } from '@/components/ui/Card'

export interface TimelineData {
  id: string
  period: string
  role: string
  organization: string
  category: 'education' | 'experience' | 'research'
  bullets: string[]
  skills: string[]
  icon: React.ReactNode
}

interface TimelineItemProps {
  data: TimelineData
  index: number
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ data, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative pl-8 sm:pl-10 pb-10 last:pb-0"
    >
      {/* Vertical Connection Line */}
      <div className="absolute left-[15px] top-8 bottom-0 w-[2px] bg-zinc-200 dark:bg-zinc-800" />

      {/* Glowing Node Dot Icon */}
      <div className="absolute left-0 top-1 p-2 rounded-full bg-white dark:bg-zinc-900 border-2 border-brand-500 shadow-glow-sm z-10">
        {data.icon}
      </div>

      {/* Main Glass Card */}
      <Card
        variant="glass"
        className="p-5 sm:p-6 hover:border-brand-500/40 transition-all duration-300 group"
      >
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs font-mono font-bold text-brand-600 dark:text-brand-400 border border-zinc-200 dark:border-zinc-700">
            <Calendar size={12} />
            {data.period}
          </span>
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            {data.category}
          </span>
        </div>

        {/* Role & Organization */}
        <h4 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-brand-500 transition-colors">
          {data.role}
        </h4>
        <p className="text-xs sm:text-sm font-semibold text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5 mt-0.5">
          <Building2 size={13} className="text-brand-500 shrink-0" />
          {data.organization}
        </p>

        {/* Bullet Achievements */}
        <ul className="mt-3 flex flex-col gap-2">
          {data.bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <CheckCircle2 size={14} className="text-brand-500 shrink-0 mt-0.5" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Skill Pills */}
        <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-zinc-200/60 dark:border-zinc-800/60">
          {data.skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60"
            >
              {skill}
            </span>
          ))}
        </div>
      </Card>
    </motion.div>
  )
}

export default TimelineItem
