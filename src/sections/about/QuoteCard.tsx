import React from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { Card } from '@/components/ui/Card'

export const QuoteCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card
        variant="glass"
        className="relative overflow-hidden p-8 sm:p-10 border border-brand-500/20 bg-gradient-to-r from-brand-500/5 via-transparent to-accent-light/5"
      >
        <div className="absolute top-4 right-6 text-brand-500/15 dark:text-brand-400/10 pointer-events-none">
          <Quote size={120} />
        </div>

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Quote size={12} />
            <span>Mission & Philosophy</span>
          </div>

          <blockquote className="text-lg sm:text-2xl font-serif italic text-zinc-800 dark:text-zinc-200 leading-relaxed">
            &ldquo;Passionate about advancing AI through research, education, and real-world applications while transforming complex challenges into innovative, data-driven solutions.&rdquo;
          </blockquote>

          <div className="mt-6 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center font-bold text-white text-sm shadow-glow-sm">
              NE
            </div>
            <div>
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Nada Essam Mohammed Amin</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">AI Engineer & Data Analyst</p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export default QuoteCard
