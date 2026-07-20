import React from 'react'
import { motion } from 'framer-motion'
import { LineChart, Globe2, Cpu, Users } from 'lucide-react'
import { Card } from '@/components/ui/Card'

const CORE_PILLARS = [
  {
    icon: <LineChart className="text-brand-500" size={24} />,
    title: 'Analytical Thinking & BI',
    description:
      'Transforming complex datasets into data-driven solutions using Power BI, SQL, Pandas, NumPy, and statistical KPI reporting.',
  },
  {
    icon: <Globe2 className="text-emerald-500" size={24} />,
    title: 'Global Research Aptitude',
    description:
      'Participated in international research programs (New York Academy of Sciences, Nile University UGRG) developing scientific communication & critical thinking.',
  },
  {
    icon: <Cpu className="text-indigo-500" size={24} />,
    title: 'End-to-End AI Engineering',
    description:
      'Designing intelligent automation systems, computer vision models (ViTs, GANs), OCR, NLP pipelines, and RAG architectures.',
  },
  {
    icon: <Users className="text-amber-500" size={24} />,
    title: 'Leadership & Mentorship',
    description:
      'Instructed and mentored students in AI & Data Science, alongside HR/PR leadership in TEDx KFS, IYNA, and STEM Hotspot.',
  },
]

export const CoreValues: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Core Pillars & Competencies
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
          Foundational strengths driving my academic excellence and industry contributions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CORE_PILLARS.map((pillar, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Card
              variant="glass"
              className="p-6 h-full flex flex-col justify-between hover:border-brand-500/30 transition-all duration-300 group"
            >
              <div>
                <div className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800/80 w-fit group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mt-4 group-hover:text-brand-500 transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default CoreValues
