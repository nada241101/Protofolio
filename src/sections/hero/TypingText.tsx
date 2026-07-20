import React, { useState, useEffect } from 'react'

interface TypingTextProps {
  phrases: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  className?: string
}

export const TypingText: React.FC<TypingTextProps> = ({
  phrases,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
  className = '',
}) => {
  const [displayedText, setDisplayedText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]

    let timeout: ReturnType<typeof setTimeout>

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedText(currentPhrase.substring(0, displayedText.length - 1))
      }, deletingSpeed)
    } else {
      timeout = setTimeout(() => {
        setDisplayedText(currentPhrase.substring(0, displayedText.length + 1))
      }, typingSpeed)
    }

    if (!isDeleting && displayedText === currentPhrase) {
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, pauseDuration)
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false)
      setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length)
    }

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{displayedText}</span>
      <span className="ml-1 inline-block h-[1em] w-[3px] animate-pulse bg-brand-500 rounded-full" />
    </span>
  )
}

export default TypingText
