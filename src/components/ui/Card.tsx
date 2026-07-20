import React, { useRef } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/utils/cn'
import { useMouseGlow } from '@/hooks/useMouseGlow'

export interface CardProps extends HTMLMotionProps<'div'> {
  variant?: 'glass' | 'default' | 'subtle' | 'outline'
  enableGlow?: boolean
  glowColor?: string
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className,
      variant = 'glass',
      enableGlow = true,
      glowColor = 'rgba(16, 185, 129, 0.12)',
      ...props
    },
    ref,
  ) => {
    const internalRef = useRef<HTMLDivElement>(null)
    const cardRef = (ref as React.RefObject<HTMLDivElement>) || internalRef
    const { elementX, elementY, isHovered } = useMouseGlow(cardRef)

    const variants = {
      glass:
        'bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-black/[0.08] dark:border-white/[0.08] shadow-apple-light dark:shadow-apple-dark',
      default:
        'bg-surface-light dark:bg-surface-dark border border-zinc-200 dark:border-zinc-800 shadow-sm',
      subtle:
        'bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/60 dark:border-zinc-800/60',
      outline:
        'bg-transparent border border-zinc-200 dark:border-zinc-800',
    }

    return (
      <motion.div
        ref={cardRef}
        className={cn(
          'relative overflow-hidden rounded-3xl p-6 transition-all duration-300',
          variants[variant],
          className,
        )}
        {...props}
      >
        {enableGlow && (
          <motion.div
            className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-opacity duration-500"
            animate={{
              x: elementX,
              y: elementY,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              width: 300,
              height: 300,
              background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
            }}
          />
        )}
        <div className="relative z-10">{children}</div>
      </motion.div>
    )
  },
)

Card.displayName = 'Card'

export default Card
