import React from 'react'
import { Code, Brain, Database, Smartphone, Megaphone, Users, Sparkles } from 'lucide-react'
import SkillCategoryCard, { SkillCategory } from './SkillCategoryCard'
import { Container } from '@/components/ui/Container'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    subtitle: 'Core development languages',
    icon: <Code size={20} className="text-brand-500" />,
    skills: ['Python', 'SQL', 'Dart', 'HTML / CSS', 'C++', 'Java'],
  },
  {
    title: 'AI & Machine Learning',
    subtitle: 'Deep Learning & Vision Transformers',
    icon: <Brain size={20} className="text-emerald-500" />,
    skills: [
      'Machine Learning',
      'Deep Learning',
      'Computer Vision (ViTs)',
      'Natural Language Processing (NLP)',
      'LangChain & RAG Systems',
      'PaddleOCR',
      'Generative Adversarial Networks (GANs)',
      'Supervised & Unsupervised Learning',
    ],
  },
  {
    title: 'Data Analytics & Business Intelligence',
    subtitle: 'Dashboards & KPI reporting',
    icon: <Database size={20} className="text-indigo-500" />,
    skills: [
      'Power BI',
      'Data Analytics',
      'Data Visualization & Dashboards',
      'SQL Query Optimization',
      'Time-Series Forecasting',
      'Advanced Excel & Pivot Tables',
    ],
  },
  {
    title: 'Mobile Application Development',
    subtitle: 'Cross-platform mobile apps',
    icon: <Smartphone size={20} className="text-purple-500" />,
    skills: [
      'Flutter & Dart',
      'State Management (Provider / Bloc)',
      'Firebase Integration',
      'REST APIs & JSON',
      'Clean Architecture & Mobile UI/UX',
    ],
  },
  {
    title: 'Digital Marketing & Strategy',
    subtitle: 'Market research & strategy',
    icon: <Megaphone size={20} className="text-amber-500" />,
    skills: [
      'Digital Marketing Strategy',
      'Content Marketing & SEO',
      'Market Research & Competitor Analysis',
      'Branding & Growth Strategy',
    ],
  },
  {
    title: 'Tools & Soft Skills',
    subtitle: 'Collaboration & agile tools',
    icon: <Users size={20} className="text-rose-500" />,
    skills: [
      'Git & GitHub',
      'Jira & Agile Methodologies',
      'Problem Solving & Analytical Thinking',
      'Teamwork & Communication',
      'Leadership & Public Speaking',
    ],
  },
]

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative py-24 bg-surface-light dark:bg-surface-dark transition-colors duration-300 overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      <Container size="xl" className="relative z-10 flex flex-col gap-12">
        {/* Section Header */}
        <ScrollReveal variant="fadeUp">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Sparkles size={14} />
              // 04. TECHNICAL COMPETENCIES & TOOLKIT
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
              Technical & Analytical Skills
            </h2>
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Comprehensive toolkit spanning artificial intelligence, business intelligence analytics, mobile software engineering, and strategic execution.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <SkillCategoryCard key={idx} category={category} index={idx} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Skills
