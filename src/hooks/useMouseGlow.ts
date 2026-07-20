import { useState, useEffect, RefObject } from 'react'

interface MousePosition {
  x: number
  y: number
  elementX: number
  elementY: number
  isHovered: boolean
}

export function useMouseGlow(elementRef: RefObject<HTMLElement>): MousePosition {
  const [mousePos, setMousePos] = useState<MousePosition>({
    x: 0,
    y: 0,
    elementX: 0,
    elementY: 0,
    isHovered: false,
  })

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const elementX = e.clientX - rect.left
      const elementY = e.clientY - rect.top

      setMousePos({
        x: e.clientX,
        y: e.clientY,
        elementX,
        elementY,
        isHovered: true,
      })
    }

    const handleMouseEnter = () => {
      setMousePos((prev) => ({ ...prev, isHovered: true }))
    }

    const handleMouseLeave = () => {
      setMousePos((prev) => ({ ...prev, isHovered: false }))
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseenter', handleMouseEnter)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseenter', handleMouseEnter)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [elementRef])

  return mousePos
}

export default useMouseGlow
