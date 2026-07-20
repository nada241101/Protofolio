import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award, MapPin, Calendar, Download } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { downloadCV } from '@/utils/cv'

const STATS = [
  {
    icon: <Award className="text-brand-500" size={20} />,
    value: 'A+',
    label: 'Graduation Project',
    subtext: 'Faculty of AI',
  },
  {
    icon: <GraduationCap className="text-emerald-500" size={20} />,
    value: '3.41 / 4.00',
    label: 'Academic CGPA',
    subtext: 'Bachelor of AI',
  },
  {
    icon: <MapPin className="text-indigo-500" size={20} />,
    value: 'Alexandria',
    label: 'Base Location',
    subtext: 'Egypt',
  },
  {
    icon: <Calendar className="text-purple-500" size={20} />,
    value: '2022 – 2026',
    label: 'Degree Period',
    subtext: 'Kafr El-Sheikh University',
  },
]

export const AboutHeader: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Section Header Badge & Large Typography */}
      <div>
        <div className="flex items-center justify-between flex-wrap gap-4 mb-3">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-mono font-bold tracking-widest text-brand-600 dark:text-brand-400 uppercase"
          >
            // 01. ABOUT NADA ESSAM
          </motion.span>

          <Button
            variant="glass"
            size="sm"
            leftIcon={<Download size={14} />}
            onClick={downloadCV}
          >
            Download Full CV
          </Button>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]"
        >
          Engineering Intelligence,{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-500 via-emerald-400 to-accent-light dark:to-accent-dark">
            Data Analytics & Strategy
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed"
        >
          AI Engineer specializing in Artificial Intelligence, Machine Learning, Data Analytics, and Business Intelligence. Experienced in developing AI-powered systems, intelligent automation, and scalable software solutions with strong research aptitude and creative problem-solving skills.
        </motion.p>
      </div>

      {/* Grid of Key CV Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
        {STATS.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Card variant="glass" className="p-5 flex flex-col gap-2 hover:border-brand-500/40 transition-colors">
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800/80">{stat.icon}</div>
                <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase">VERIFIED</span>
              </div>
              <div className="mt-2">
                <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
                  {stat.value}
                </p>
                <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 mt-1">{stat.label}</p>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400">{stat.subtext}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AboutHeader
