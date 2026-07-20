import React from 'react'
import { motion, useInView, Variants } from 'framer-motion'
import { fadeInUp, scaleIn, easings } from './TransitionPresets'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  variant?: 'fadeUp' | 'scale' | 'custom'
  customVariants?: Variants
  delay?: number
  duration?: number
  once?: boolean
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  variant = 'fadeUp',
  customVariants,
  delay = 0,
  duration = 0.6,
  once = true,
}) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once, margin: '-50px' })

  const selectVariants = (): Variants => {
    if (customVariants) return customVariants
    if (variant === 'scale') return scaleIn
    return fadeInUp
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={selectVariants()}
      transition={{ delay, duration, ease: easings.appleEase }}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal
