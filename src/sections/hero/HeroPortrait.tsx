import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Sparkles, GraduationCap, Award } from 'lucide-react'
import profileImage from '@/assets/images/photo_2025-11-24_11-02-19.jpeg'

export const HeroPortrait: React.FC = () => {
  // 3D Parallax Motion Setup
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-150, 150], [8, -8])
  const rotateY = useTransform(x, [-150, 150], [-8, 8])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(e.clientX - centerX)
    y.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div className="relative flex items-center justify-center max-w-full overflow-visible">
      {/* Background Radial Glow */}
      <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-brand-500/30 via-emerald-400/20 to-accent-light/30 blur-3xl animate-pulse-glow" />

      {/* 3D Tilt Container */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
        className="relative z-10 cursor-pointer max-w-full"
      >
        {/* Animated Glowing Conic Border Frame */}
        <div className="relative p-[3px] rounded-3xl overflow-hidden shadow-2xl bg-zinc-200 dark:bg-zinc-800">
          <div
            className="absolute inset-[-100%] animate-spin-slow opacity-80"
            style={{
              background:
                'conic-gradient(from 0deg at 50% 50%, #10b981 0deg, transparent 90deg, #ec4899 180deg, transparent 270deg, #10b981 360deg)',
            }}
          />

          {/* Main Portrait Image Wrapper */}
          <div className="relative w-64 h-72 sm:w-80 sm:h-96 rounded-[22px] overflow-hidden bg-zinc-900">
            <img
              src={profileImage}
              alt="Nada Essam Mohammed Amin - AI Engineer"
              className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.98] transition-transform duration-700 hover:scale-105"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
              <span className="text-xs font-mono font-bold tracking-wider opacity-90">NADA ESSAM</span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/30 border border-emerald-400/40 text-[10px] font-semibold text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Alexandria, Egypt
              </span>
            </div>
          </div>
        </div>

        {/* Floating Badge 1 - Top Left: Grad Project A+ */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-3 -left-2 sm:-left-6 z-20 glass-panel rounded-2xl p-2.5 sm:p-3 flex items-center gap-2.5 sm:gap-3 shadow-lg border border-black/10 dark:border-white/10"
        >
          <div className="p-1.5 sm:p-2 rounded-xl bg-brand-500/15 text-brand-500">
            <Award size={16} />
          </div>
          <div>
            <p className="text-[11px] sm:text-xs font-bold text-zinc-900 dark:text-zinc-100">Grad Project A+</p>
            <p className="text-[9px] sm:text-[10px] text-zinc-500 dark:text-zinc-400">Faculty of AI</p>
          </div>
        </motion.div>

        {/* Floating Badge 2 - Bottom Right: CGPA 3.41 */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute -bottom-3 -right-2 sm:-right-6 z-20 glass-panel rounded-2xl p-2.5 sm:p-3 flex items-center gap-2.5 sm:gap-3 shadow-lg border border-black/10 dark:border-white/10"
        >
          <div className="p-1.5 sm:p-2 rounded-xl bg-emerald-500/15 text-emerald-500">
            <GraduationCap size={16} />
          </div>
          <div>
            <p className="text-[11px] sm:text-xs font-bold text-zinc-900 dark:text-zinc-100">CGPA: 3.41 / 4.00</p>
            <p className="text-[9px] sm:text-[10px] text-zinc-500 dark:text-zinc-400">Bachelor of AI</p>
          </div>
        </motion.div>

        {/* Floating Badge 3 - Top Right Sparkle */}
        <motion.div
          animate={{ scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 -right-3 sm:-right-6 z-20 p-2 sm:p-2.5 rounded-full glass-panel text-brand-500 shadow-lg border border-brand-500/20"
        >
          <Sparkles size={16} />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default HeroPortrait
