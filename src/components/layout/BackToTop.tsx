import { AnimatePresence, motion } from 'motion/react'
import { ArrowUp } from 'lucide-react'
import { useScrolled } from '../../hooks/useScrolled'

export function BackToTop() {
  const visible = useScrolled(900)

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#top"
          aria-label="Back to top"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.2 }}
          className="fixed right-5 bottom-5 z-40 inline-flex size-11 items-center justify-center rounded-full border border-line-strong bg-elevated/90 text-muted shadow-lg shadow-black/10 backdrop-blur transition-colors hover:text-accent sm:right-8 sm:bottom-8"
        >
          <ArrowUp className="size-4" aria-hidden />
        </motion.a>
      )}
    </AnimatePresence>
  )
}
