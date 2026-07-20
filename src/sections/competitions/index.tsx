import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Zap, Globe, Lightbulb, Cpu, Award, Users, HeartHandshake } from 'lucide-react'
import CompetitionCard, { CompetitionItem } from './CompetitionCard'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

const COMPETITIONS_DATA: CompetitionItem[] = [
  {
    id: 'ideal-student',
    title: 'Ideal Student Competition',
    date: 'Dec. 2025',
    badge: 'University Honor',
    description: 'Recognized for academic excellence, leadership, and community engagement at the university level.',
    icon: <Trophy size={20} className="text-amber-500" />,
  },
  {
    id: 'ugrg-nile',
    title: 'UGRG – Nile University Research Program',
    organization: 'Nile University',
    date: 'Aug. 2024',
    badge: 'Sustainability Research',
    description: 'Conducted sustainability research on cactus-based bioelectric energy generation for desert rehabilitation.',
    icon: <Zap size={20} className="text-emerald-500" />,
  },
  {
    id: 'climate-olympiad',
    title: 'Climate Science Olympiad',
    date: 'Jun. 2023',
    badge: 'Water Harvesting Solution',
    description: 'Designed an atmospheric water harvesting solution using silica gel to support sustainable desert irrigation.',
    icon: <Globe size={20} className="text-brand-500" />,
  },
  {
    id: 'smart-innovative',
    title: 'Smart Innovative Competition',
    date: 'Feb. 2023',
    badge: 'Thermoelectric Energy',
    description: 'Developed a thermoelectric energy harvesting solution for sustainable off-grid power generation.',
    icon: <Lightbulb size={20} className="text-yellow-500" />,
  },
  {
    id: 'appx-zewail',
    title: 'APPX – Zewail City',
    organization: 'Zewail City of Science and Technology',
    date: 'Dec. 2021',
    badge: 'Smart Irrigation Tech',
    description: 'Built an Arduino-based smart irrigation system using soil moisture sensors for water optimization.',
    icon: <Cpu size={20} className="text-indigo-500" />,
  },
  {
    id: 'diamond-challenge',
    title: 'Diamond Challenge for High School Entrepreneurs',
    date: 'Oct. 2021',
    badge: 'Global Innovation',
    description: 'Designed an innovative oxygen extraction concept from seawater to address COVID-19 medical supply challenges.',
    icon: <Award size={20} className="text-purple-500" />,
  },
]

const LEADERSHIP_ACTIVITIES = [
  {
    role: 'HR Member',
    organization: 'IYNA Gharbia • TEDx KFS',
    icon: <Users size={18} className="text-brand-500" />,
  },
  {
    role: 'PR Member',
    organization: 'STEM Hotspot • KFS Astronomy Club',
    icon: <HeartHandshake size={18} className="text-emerald-500" />,
  },
]

export const Competitions: React.FC = () => {
  return (
    <section
      id="competitions"
      className="relative py-24 bg-surface-light dark:bg-surface-dark transition-colors duration-300 overflow-hidden"
    >
      {/* Ambient Radial Background Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <Container size="xl" className="relative z-10 flex flex-col gap-12">
        {/* Section Header */}
        <ScrollReveal variant="fadeUp">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <span className="inline-block text-xs font-mono font-bold tracking-widest text-brand-600 dark:text-brand-400 uppercase mb-3">
              // 05. AWARDS, RESEARCH & HACKATHONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
              Competitions & Research Awards
            </h2>
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Recognized across national and global innovation competitions, research programs, and student leadership initiatives.
            </p>
          </div>
        </ScrollReveal>

        {/* Competitions Grid Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COMPETITIONS_DATA.map((item, idx) => (
            <CompetitionCard key={item.id} item={item} index={idx} />
          ))}
        </div>

        {/* Leadership & Activities Row */}
        <ScrollReveal variant="fadeUp" delay={0.2}>
          <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 text-center mb-6">
              Leadership & Community Engagement
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {LEADERSHIP_ACTIVITIES.map((act, idx) => (
                <Card
                  key={idx}
                  variant="glass"
                  className="p-5 flex items-center gap-4 hover:border-brand-500/40 transition-colors"
                >
                  <div className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800/80 shrink-0">
                    {act.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                      {act.role}
                    </h4>
                    <p className="text-xs font-semibold text-brand-600 dark:text-brand-400 mt-0.5">
                      {act.organization}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}

export default Competitions
