import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export const ScrollIndicator: React.FC = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById('about')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.button
      onClick={handleScroll}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="group flex flex-col items-center gap-2 cursor-pointer focus:outline-none select-none"
      aria-label="Scroll to next section"
    >
      <span className="text-[11px] font-mono tracking-widest text-zinc-400 dark:text-zinc-500 uppercase group-hover:text-brand-500 transition-colors">
        Scroll Down
      </span>

      {/* Mouse Outer Body */}
      <div className="relative w-5 h-9 rounded-full border-2 border-zinc-400 dark:border-zinc-600 group-hover:border-brand-500 transition-colors flex justify-center pt-2">
        {/* Animated Inner Wheel Dot */}
        <motion.div
          animate={{
            y: [0, 10, 0],
            opacity: [1, 0.2, 1],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-1 h-2 rounded-full bg-brand-500"
        />
      </div>

      <ChevronDown size={14} className="text-zinc-400 dark:text-zinc-600 group-hover:text-brand-500 animate-bounce" />
    </motion.button>
  )
}

export default ScrollIndicator
