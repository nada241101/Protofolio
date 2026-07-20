import React, { useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { Sun, Moon, Menu, X, ArrowUpRight, Download } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import { useActiveSection } from '@/hooks/useActiveSection'
import { Button } from '@/components/ui/Button'
import { cn } from '@/utils/cn'
import { downloadCV } from '@/utils/cv'

interface NavItem {
  id: string
  label: string
}

const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'competitions', label: 'Competitions' },
  { id: 'contact', label: 'Contact' },
]

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const activeSection = useActiveSection(NAV_ITEMS.map((item) => item.id))
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false)

  // Scroll Progress Bar calculation
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const scrollToSection = (id: string) => {
    setIsMobileOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDownload = () => {
    setIsMobileOpen(false)
    downloadCV()
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Navbar Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        <nav className="relative flex h-14 items-center justify-between rounded-full bg-white/75 dark:bg-zinc-950/75 px-4 sm:px-6 backdrop-blur-xl border border-black/[0.08] dark:border-white/[0.08] shadow-apple-light dark:shadow-apple-dark transition-all duration-300">
          
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('hero')
            }}
            className="group flex items-center gap-2 font-display text-base font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-500 text-white font-mono text-xs shadow-glow-sm transition-transform duration-300 group-hover:scale-110">
              N
            </span>
            <span className="hidden sm:inline">NADA ESSAM</span>
          </a>

          {/* Desktop Nav Items */}
          <div
            className="hidden md:flex items-center space-x-1"
            onMouseLeave={() => setHoveredId(null)}
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id
              const isHovered = hoveredId === item.id

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.id)
                  }}
                  className={cn(
                    'relative px-3.5 py-1.5 text-xs font-medium transition-colors duration-200 rounded-full',
                    isActive
                      ? 'text-brand-600 dark:text-brand-400 font-semibold'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100',
                  )}
                >
                  {/* Magnetic Hover Pill */}
                  {isHovered && (
                    <motion.div
                      layoutId="navbar-hover-pill"
                      className="absolute inset-0 rounded-full bg-zinc-100 dark:bg-zinc-800/80 -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    />
                  )}

                  {/* Active Indicator Dot */}
                  {isActive && !isHovered && (
                    <motion.div
                      layoutId="navbar-active-dot"
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-500"
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    />
                  )}

                  {item.label}
                </a>
              )
            })}
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2">
            {/* Theme Switcher Button */}
            <button
              onClick={toggleTheme}
              className="relative p-2 rounded-full text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-colors focus:outline-none"
              aria-label="Toggle Theme"
            >
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </motion.div>
            </button>

            {/* Download CV Button */}
            <div className="hidden sm:block">
              <Button
                variant="primary"
                size="sm"
                leftIcon={<Download size={14} />}
                onClick={handleDownload}
              >
                CV
              </Button>
            </div>

            {/* CTA Contact Button */}
            <div className="hidden lg:block">
              <Button
                variant="secondary"
                size="sm"
                rightIcon={<ArrowUpRight size={14} />}
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </Button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-full text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Scroll Progress Line at Bottom of Header */}
          <motion.div
            className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-brand-500 via-brand-400 to-accent-light dark:to-accent-dark rounded-full origin-left opacity-80"
            style={{ scaleX }}
          />
        </nav>
      </div>

      {/* Mobile Drawer Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="md:hidden mx-auto max-w-7xl px-4 sm:px-6 mt-2"
          >
            <div className="glass-panel rounded-3xl p-6 flex flex-col gap-3 shadow-2xl border border-black/10 dark:border-white/10">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = activeSection === item.id
                return (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.id)
                    }}
                    className={cn(
                      'flex items-center justify-between py-2.5 px-4 rounded-2xl text-sm font-medium transition-all',
                      isActive
                        ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400 font-semibold'
                        : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900',
                    )}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                    )}
                  </motion.a>
                )
              })}

              <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-2">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                  leftIcon={<Download size={16} />}
                  onClick={handleDownload}
                >
                  Download CV
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  className="w-full justify-center"
                  rightIcon={<ArrowUpRight size={16} />}
                  onClick={() => scrollToSection('contact')}
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
