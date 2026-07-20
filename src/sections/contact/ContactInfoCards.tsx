import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { GITHUB_URL, GITHUB_HANDLE, EMAIL_ADDRESS, PHONE_NUMBER, LINKEDIN_URL } from '@/constants'

export const ContactInfoCards: React.FC = () => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(EMAIL_ADDRESS)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Direct Contact Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card variant="glass" className="p-6 flex items-center justify-between hover:border-brand-500/40 transition-colors">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-brand-500/15 text-brand-500">
              <Mail size={22} />
            </div>
            <div>
              <p className="text-xs font-mono uppercase text-zinc-400 dark:text-zinc-500">Direct Email</p>
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 hover:text-brand-500 transition-colors"
              >
                {EMAIL_ADDRESS}
              </a>
            </div>
          </div>
          <button
            onClick={copyToClipboard}
            className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 hover:text-brand-500 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            title="Copy Email"
            aria-label="Copy Email to Clipboard"
          >
            {copied ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
          </button>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card variant="glass" className="p-6 flex items-center gap-4 hover:border-brand-500/40 transition-colors">
          <div className="p-3 rounded-2xl bg-emerald-500/15 text-emerald-500">
            <Phone size={22} />
          </div>
          <div>
            <p className="text-xs font-mono uppercase text-zinc-400 dark:text-zinc-500">Phone Number</p>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 hover:text-brand-500 transition-colors"
            >
              {PHONE_NUMBER}
            </a>
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card variant="glass" className="p-6 flex items-center gap-4 hover:border-brand-500/40 transition-colors">
          <div className="p-3 rounded-2xl bg-indigo-500/15 text-indigo-500">
            <MapPin size={22} />
          </div>
          <div>
            <p className="text-xs font-mono uppercase text-zinc-400 dark:text-zinc-500">Base Location</p>
            <p className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100">
              Alexandria, Egypt
            </p>
          </div>
        </Card>
      </motion.div>

      {/* Social Network Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-2 gap-4 mt-2"
      >
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="group"
        >
          <Card variant="glass" className="p-4 flex items-center gap-3 hover:border-brand-500/40 transition-colors">
            <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 group-hover:text-brand-500 transition-colors">
              <Github size={20} />
            </div>
            <div>
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">GitHub</p>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">{GITHUB_HANDLE}</p>
            </div>
          </Card>
        </a>

        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
          className="group"
        >
          <Card variant="glass" className="p-4 flex items-center gap-3 hover:border-brand-500/40 transition-colors">
            <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-blue-600 dark:text-blue-400 group-hover:text-brand-500 transition-colors">
              <Linkedin size={20} />
            </div>
            <div>
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">LinkedIn</p>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Nada Essam</p>
            </div>
          </Card>
        </a>
      </motion.div>
    </div>
  )
}

export default ContactInfoCards
