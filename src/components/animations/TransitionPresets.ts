import { Transition, Variants } from 'framer-motion'

// Apple-inspired smooth spring physics presets
export const springs = {
  soft: { type: 'spring', stiffness: 100, damping: 20, mass: 1 } as Transition,
  bounce: { type: 'spring', stiffness: 300, damping: 15, mass: 0.8 } as Transition,
  snappy: { type: 'spring', stiffness: 400, damping: 30, mass: 0.8 } as Transition,
  gentle: { type: 'spring', stiffness: 120, damping: 14 } as Transition,
}

// Cubic bezier easings
export const easings = {
  appleEase: [0.25, 0.1, 0.25, 1.0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
}

// Fade in up variant
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easings.appleEase },
  },
}

// Scale up variant
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easings.easeOutQuart },
  },
}

// Stagger container variant
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
})
