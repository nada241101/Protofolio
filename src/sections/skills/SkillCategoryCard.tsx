import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { cn } from '@/utils/cn'

export interface SkillItem {
  name: string
  highlight?: boolean
}

export interface SkillCategory {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  skills: SkillItem[]
}

interface SkillCategoryCardProps {
  category: SkillCategory
  index: number
}

export const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="h-full flex flex-col"
    >
      <Card
        variant="glass"
        className="group h-full p-6 flex flex-col justify-between hover:border-brand-500/40 transition-all duration-300 shadow-apple-light dark:shadow-apple-dark"
      >
        <div>
          {/* Card Header with Icon */}
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800/80 text-brand-500 group-hover:scale-110 transition-transform duration-300 shadow-sm">
              {category.icon}
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-brand-500 transition-colors">
                {category.title}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">{category.description}</p>
            </div>
          </div>

          {/* Interactive Skill Badge Pills */}
          <div className="flex flex-wrap gap-2 mt-4">
            {category.skills.map((skill, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.06, y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className={cn(
                  'cursor-default px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all select-none',
                  skill.highlight
                    ? 'bg-brand-500/15 text-brand-600 dark:text-brand-400 border border-brand-500/30 shadow-sm'
                    : 'bg-zinc-100/80 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/60 hover:border-zinc-400 dark:hover:border-zinc-500',
                )}
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Bottom Skill Count Footer */}
        <div className="mt-6 pt-3 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
          <span>{category.skills.length} Competencies</span>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-500 opacity-60" />
        </div>
      </Card>
    </motion.div>
  )
}

export default SkillCategoryCard
