import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2, User, Mail, MessageSquare, Tag } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Input, Textarea } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })

      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1200)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card variant="glass" className="p-6 sm:p-8 border border-brand-500/20">
        <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
          Send a Message
        </h3>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-6">
          Fill out the form below and I will get back to you promptly regarding AI projects, research collaborations, or queries.
        </p>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex flex-col items-center text-center gap-3"
          >
            <CheckCircle2 size={40} className="text-emerald-500" />
            <h4 className="text-lg font-bold">Message Sent Successfully!</h4>
            <p className="text-xs leading-relaxed max-w-sm">
              Thank you for reaching out. Your message has been sent to ahes64033@gmail.com and I will respond shortly.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Your Name"
                placeholder="e.g. Sarah Connor"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                leftIcon={<User size={16} />}
                required
              />
              <Input
                label="Your Email"
                type="email"
                placeholder="e.g. sarah@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                leftIcon={<Mail size={16} />}
                required
              />
            </div>

            <Input
              label="Subject"
              placeholder="e.g. AI Project Collaboration / BI Inquiry"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              leftIcon={<Tag size={16} />}
              required
            />

            <Textarea
              label="Message"
              placeholder="Write your message here..."
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />

            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full justify-center shadow-glow-md"
                isLoading={isSubmitting}
                rightIcon={<Send size={16} />}
              >
                Send Message
              </Button>
            </div>
          </form>
        )}
      </Card>
    </motion.div>
  )
}

export default ContactForm
