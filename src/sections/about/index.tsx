import React from 'react'
import AboutHeader from './AboutHeader'
import QuoteCard from './QuoteCard'
import CoreValues from './CoreValues'
import TimelineSnippets from './TimelineSnippets'
import { Container } from '@/components/ui/Container'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-24 bg-surface-light dark:bg-surface-dark transition-colors duration-300 overflow-hidden"
    >
      {/* Background Decorative Ambient Blur */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <Container size="xl" className="relative z-10 flex flex-col gap-16">
        {/* Section Header & Large Typography */}
        <ScrollReveal variant="fadeUp">
          <AboutHeader />
        </ScrollReveal>

        {/* Quote Callout Card */}
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <QuoteCard />
        </ScrollReveal>

        {/* Core Values & Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <ScrollReveal variant="fadeUp" delay={0.2} className="lg:col-span-6">
            <CoreValues />
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.3} className="lg:col-span-6">
            <TimelineSnippets />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}

export default About
