import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Award, CheckCircle2 } from 'lucide-react'
import { Card } from '@/components/ui/Card'

export interface CompetitionItem {
  id: string
  title: string
  date: string
  organization?: string
  description: string
  badge: string
  icon: React.ReactNode
}

interface CompetitionCardProps {
  item: CompetitionItem
  index: number
}

export const CompetitionCard: React.FC<CompetitionCardProps> = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex flex-col"
    >
      <Card
        variant="glass"
        className="group relative p-6 hover:border-brand-500/40 transition-all duration-300 shadow-apple-light dark:shadow-apple-dark"
      >
        {/* Header Row */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-mono font-bold">
            <Calendar size={12} />
            {item.date}
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-amber-500/15 text-amber-600 dark:text-amber-400 text-[11px] font-bold">
            <Award size={12} />
            {item.badge}
          </span>
        </div>

        {/* Title & Organization */}
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-2xl bg-zinc-100 dark:bg-zinc-800/80 text-brand-500 shrink-0 group-hover:scale-110 transition-transform duration-300">
            {item.icon}
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-brand-500 transition-colors">
              {item.title}
            </h3>
            {item.organization && (
              <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mt-0.5">
                {item.organization}
              </p>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="mt-4 pt-3 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-start gap-2.5">
          <CheckCircle2 size={16} className="text-brand-500 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {item.description}
          </p>
        </div>
      </Card>
    </motion.div>
  )
}

export default CompetitionCard
