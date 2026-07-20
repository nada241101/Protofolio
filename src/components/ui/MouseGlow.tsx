import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useMouseGlow } from '@/hooks/useMouseGlow'

interface MouseGlowProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
  glowSize?: number
  glowOpacity?: number
}

export const MouseGlow: React.FC<MouseGlowProps> = ({
  children,
  className = '',
  glowColor = 'rgba(16, 185, 129, 0.15)', // Default OpenAI Emerald
  glowSize = 350,
  glowOpacity = 0.8,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { elementX, elementY, isHovered } = useMouseGlow(containerRef)

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl transition-opacity duration-500"
        animate={{
          x: elementX,
          y: elementY,
          opacity: isHovered ? glowOpacity : 0,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.5 }}
        style={{
          width: glowSize,
          height: glowSize,
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
        }}
      />
      {children}
    </div>
  )
}

export default MouseGlow
