import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Sparkles, Brain, Database, LineChart, Code, FileText } from 'lucide-react'
import NeuralNetworkCanvas from './NeuralNetworkCanvas'
import TypingText from './TypingText'
import HeroPortrait from './HeroPortrait'
import ScrollIndicator from './ScrollIndicator'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { MouseGlow } from '@/components/ui/MouseGlow'
import { downloadCV } from '@/utils/cv'

const TECH_TAGS = [
  { icon: <Brain size={12} />, label: 'AI & Machine Learning' },
  { icon: <LineChart size={12} />, label: 'Power BI & Data Analytics' },
  { icon: <Database size={12} />, label: 'Python & SQL' },
  { icon: <Code size={12} />, label: 'Computer Vision & NLP' },
]

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-10 overflow-hidden bg-surface-light dark:bg-surface-dark transition-colors duration-300"
    >
      {/* Interactive Canvas Particle & Neural Network Background */}
      <NeuralNetworkCanvas />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-dot-grid bg-dot-grid-md opacity-40 pointer-events-none z-0" />

      {/* Mouse Glow Ambient Spotlight */}
      <MouseGlow className="relative z-10 my-auto" glowSize={500} glowOpacity={0.6}>
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-8">
            
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              {/* Verified Name Badge Tag */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-brand-500/30 text-brand-600 dark:text-brand-400 text-xs font-semibold tracking-wide uppercase shadow-sm mb-6"
              >
                <Sparkles size={14} className="text-brand-500 animate-spin-slow" />
                <span>Nada Essam Mohammed Amin</span>
              </motion.div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.1]">
                AI Engineer &{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-500 via-emerald-400 to-accent-light dark:to-accent-dark">
                  Data Analytics
                </span>{' '}
                Specialist
              </h1>

              {/* Dynamic Typewriter Subheadline */}
              <div className="mt-4 text-xl sm:text-2xl font-medium text-zinc-600 dark:text-zinc-300 h-10 flex items-center">
                <span className="mr-2 text-zinc-400 dark:text-zinc-500 font-mono text-base">&gt;</span>
                <TypingText
                  phrases={[
                    'AI & Machine Learning Engineer',
                    'Data & Business Intelligence Analyst',
                    'Computer Vision & NLP Developer',
                    'Digital Marketing & Strategy Enthusiast',
                  ]}
                  className="font-display font-semibold text-brand-600 dark:text-brand-400"
                />
              </div>

              {/* Verified Bio Paragraph from CV Summary */}
              <p className="mt-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                Specializing in Artificial Intelligence, Machine Learning, Data Analytics, and Business Intelligence with hands-on experience in developing AI-powered systems, intelligent automation, and scalable software solutions.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  leftIcon={<Download size={18} />}
                  onClick={downloadCV}
                  className="shadow-glow-md"
                >
                  Download CV
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  rightIcon={<ArrowRight size={18} />}
                  onClick={() => scrollToSection('projects')}
                >
                  Explore Projects
                </Button>

                <Button
                  variant="glass"
                  size="lg"
                  leftIcon={<FileText size={18} />}
                  onClick={() => scrollToSection('contact')}
                >
                  Get in Touch
                </Button>
              </div>

              {/* Quick Tech Pill Tags from CV */}
              <div className="mt-10 flex flex-col sm:flex-row items-center gap-3">
                <span className="text-xs font-mono uppercase text-zinc-400 dark:text-zinc-500 shrink-0">
                  Core Expertise:
                </span>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                  {TECH_TAGS.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60"
                    >
                      {tag.icon}
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column: 3D Portrait Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="lg:col-span-5 flex justify-center"
            >
              <HeroPortrait />
            </motion.div>
          </div>
        </Container>
      </MouseGlow>

      {/* Bottom Scroll Prompt Indicator */}
      <div className="relative z-10 flex justify-center pt-6">
        <ScrollIndicator />
      </div>
    </section>
  )
}

export default Hero
