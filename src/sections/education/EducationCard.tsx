import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award, BookOpen, Calendar, CheckCircle2 } from 'lucide-react'
import { Card } from '@/components/ui/Card'

const COURSEWORK = [
  'Machine Learning',
  'Deep Learning',
  'Computer Vision',
  'NLP',
  'Data Analytics',
  'Business Intelligence',
  'Database Systems',
  'Software Engineering',
]

export const EducationCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card
        variant="glass"
        className="relative overflow-hidden p-6 sm:p-8 border border-brand-500/30 bg-gradient-to-r from-brand-500/5 via-transparent to-emerald-500/5"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          
          {/* Main Info */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-semibold uppercase tracking-wider">
                <GraduationCap size={14} />
                Bachelor Degree
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <Calendar size={13} />
                Oct. 2022 – Jun. 2026
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-100">
              Bachelor of Artificial Intelligence
            </h3>
            <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-300">
              Faculty of Artificial Intelligence, Kafr El-Sheikh University
            </p>

            {/* Coursework Tags */}
            <div className="mt-2">
              <p className="text-xs font-mono uppercase text-zinc-400 dark:text-zinc-500 mb-2 flex items-center gap-1.5">
                <BookOpen size={12} />
                Relevant Coursework:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {COURSEWORK.map((course, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 text-xs font-medium border border-zinc-200/80 dark:border-zinc-700/60"
                  >
                    <CheckCircle2 size={10} className="text-brand-500" />
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stat Badges */}
          <div className="flex flex-row lg:flex-col gap-4 shrink-0 border-t lg:border-t-0 lg:border-l border-zinc-200 dark:border-zinc-800 pt-4 lg:pt-0 lg:pl-6 justify-around lg:justify-center">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-brand-500/15 text-brand-500">
                <Award size={22} />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-zinc-100">A+</p>
                <p className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-400">Graduation Project</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-emerald-500/15 text-emerald-500">
                <GraduationCap size={22} />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-zinc-100">3.41 / 4.00</p>
                <p className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-400">Academic CGPA</p>
              </div>
            </div>
          </div>

        </div>
      </Card>
    </motion.div>
  )
}

export default EducationCard
