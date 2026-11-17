import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { EASE_OUT } from '../../lib/utils'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

/** Fades content up once when it scrolls into view. Respects reduced-motion via <MotionConfig>. */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  )
}
