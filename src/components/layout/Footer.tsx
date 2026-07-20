import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { GITHUB_URL, EMAIL_ADDRESS, LINKEDIN_URL } from '@/constants'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative bg-zinc-950 text-white border-t border-zinc-800/80 transition-colors duration-300 pt-16 pb-12 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      <Container size="xl" className="relative z-10 flex flex-col gap-12">
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-12 border-b border-zinc-800/80 text-center lg:text-left">
          {/* Logo & Tagline */}
          <div className="flex flex-col gap-2">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault()
                scrollToTop()
              }}
              className="inline-flex items-center gap-2 font-display text-2xl font-black tracking-tight text-white hover:text-brand-400 transition-colors"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-white font-mono text-sm shadow-glow-sm">
                N
              </span>
              NADA ESSAM MOHAMMED AMIN
            </a>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
              AI Engineer • Data Analyst • Business Intelligence Specialist
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-zinc-300">
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero') }} className="hover:text-brand-400 transition-colors">Home</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }} className="hover:text-brand-400 transition-colors">About</a>
            <a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education') }} className="hover:text-brand-400 transition-colors">Education</a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects') }} className="hover:text-brand-400 transition-colors">Projects</a>
            <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills') }} className="hover:text-brand-400 transition-colors">Skills</a>
            <a href="#competitions" onClick={(e) => { e.preventDefault(); scrollToSection('competitions') }} className="hover:text-brand-400 transition-colors">Competitions</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }} className="hover:text-brand-400 transition-colors">Contact</a>
          </nav>

          {/* Back to Top Button */}
          <motion.button
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 hover:border-brand-500/50 text-xs font-mono font-semibold text-zinc-300 hover:text-white transition-all shadow-md shrink-0"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <div className="p-1 rounded-full bg-zinc-800 group-hover:bg-brand-500 text-zinc-300 group-hover:text-white transition-colors">
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </motion.button>
        </div>

        {/* Bottom Socials & Copyright Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Nada Essam Mohammed Amin. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
