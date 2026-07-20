import React from 'react'
import { Sparkles } from 'lucide-react'
import ContactInfoCards from './ContactInfoCards'
import ContactForm from './ContactForm'
import { Container } from '@/components/ui/Container'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative py-24 bg-surface-light dark:bg-surface-dark transition-colors duration-300 overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      <Container size="xl" className="relative z-10 flex flex-col gap-12">
        {/* Section Header */}
        <ScrollReveal variant="fadeUp">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Sparkles size={14} />
              // 06. GET IN TOUCH
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
              Let&apos;s Build Something Exceptional
            </h2>
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Open for AI engineering roles, business intelligence consulting, research partnerships, and data analytics inquiries.
            </p>
          </div>
        </ScrollReveal>

        {/* Contact Info Cards & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <ContactInfoCards />
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact
