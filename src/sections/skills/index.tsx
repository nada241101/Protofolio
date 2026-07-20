import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Brain, LineChart, Smartphone, Target, Wrench } from 'lucide-react'
import SkillCategoryCard, { SkillCategory } from './SkillCategoryCard'
import { Container } from '@/components/ui/Container'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming Languages',
    description: 'Core development & scripting languages',
    icon: <Code2 size={24} />,
    skills: [
      { name: 'Python', highlight: true },
      { name: 'SQL', highlight: true },
      { name: 'Dart', highlight: true },
      { name: 'Java' },
      { name: 'C++' },
      { name: 'Kotlin' },
    ],
  },
  {
    id: 'ai-ml',
    title: 'Artificial Intelligence & ML',
    description: 'Deep Learning, Vision, NLP & RAG architectures',
    icon: <Brain size={24} />,
    skills: [
      { name: 'Machine Learning', highlight: true },
      { name: 'Deep Learning', highlight: true },
      { name: 'Computer Vision', highlight: true },
      { name: 'NLP', highlight: true },
      { name: 'Generative AI' },
      { name: 'RAG' },
      { name: 'OCR' },
      { name: 'Prompt Engineering' },
    ],
  },
  {
    id: 'data-bi',
    title: 'Data Analytics & BI',
    description: 'Business Intelligence, KPI reporting & analytics',
    icon: <LineChart size={24} />,
    skills: [
      { name: 'Power BI', highlight: true },
      { name: 'Pandas', highlight: true },
      { name: 'NumPy', highlight: true },
      { name: 'Data Analytics' },
      { name: 'Data Visualization' },
      { name: 'KPI Reporting' },
      { name: 'Time-Series Forecasting' },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile Development (Flutter)',
    description: 'Clean Architecture & cross-platform apps',
    icon: <Smartphone size={24} />,
    skills: [
      { name: 'Flutter', highlight: true },
      { name: 'Firebase', highlight: true },
      { name: 'REST APIs', highlight: true },
      { name: 'Clean Architecture' },
      { name: 'State Management' },
    ],
  },
  {
    id: 'business',
    title: 'Marketing & Business Strategy',
    description: 'Customer analysis & growth strategy',
    icon: <Target size={24} />,
    skills: [
      { name: 'Market Research', highlight: true },
      { name: 'Marketing Strategy' },
      { name: 'Content Marketing' },
      { name: 'Social Media Marketing' },
      { name: 'Customer Analysis' },
    ],
  },
  {
    id: 'tools-soft',
    title: 'Tools, Platforms & Soft Skills',
    description: 'Development environments & leadership',
    icon: <Wrench size={24} />,
    skills: [
      { name: 'Git & GitHub', highlight: true },
      { name: 'Jupyter Notebook' },
      { name: 'Google Colab' },
      { name: 'Android Studio' },
      { name: 'Figma' },
      { name: 'Leadership', highlight: true },
      { name: 'Problem Solving', highlight: true },
      { name: 'Critical Thinking' },
      { name: 'Communication' },
      { name: 'Teamwork' },
      { name: 'Creativity' },
    ],
  },
]

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative py-24 bg-surface-light dark:bg-surface-dark transition-colors duration-300 overflow-hidden"
    >
      {/* Background Decorative Ambient Blur */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      <Container size="xl" className="relative z-10 flex flex-col gap-12">
        {/* Section Header */}
        <ScrollReveal variant="fadeUp">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <span className="inline-block text-xs font-mono font-bold tracking-widest text-brand-600 dark:text-brand-400 uppercase mb-3">
              // 04. TECHNICAL EXPERTISE & TOOLS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
              Technical Skills & Competencies
            </h2>
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Extensive technical capabilities spanning artificial intelligence algorithms, data analytics, Power BI dashboards, Flutter mobile architecture, and strategic problem solving.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Category Skill Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <SkillCategoryCard key={category.id} category={category} index={idx} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Skills
