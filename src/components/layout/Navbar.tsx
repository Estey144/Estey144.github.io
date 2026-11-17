import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FileText, Menu, X } from 'lucide-react'
import { navItems, profile } from '../../data/profile'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useScrolled } from '../../hooks/useScrolled'
import { assetUrl, cn } from '../../lib/utils'
import { Container } from '../ui/Container'
import { ThemeToggle } from './ThemeToggle'

const sectionIds = navItems.map((item) => item.id)

export function Navbar() {
  const scrolled = useScrolled(12)
  const active = useActiveSection(sectionIds)
  const [open, setOpen] = useState(false)

  // Mobile menu: lock page scroll, close on Escape or when resizing to desktop.
  useEffect(() => {
    if (!open) return
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 768 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const solid = scrolled || open

  return (
    <>
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300',
        solid ? 'border-line bg-bg/80 backdrop-blur-xl' : 'border-transparent',
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="font-mono text-[15px] font-medium tracking-tight text-fg"
          aria-label={`${profile.name} — back to top`}
        >
          <span className="text-subtle">~/</span>
          {profile.handle}
          <span className="caret ml-0.5 inline-block h-[1.05em] w-[0.55em] translate-y-[0.18em] bg-accent" aria-hidden />
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-0.5">
            {navItems.map((item) => {
              const isActive = active === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? 'location' : undefined}
                    className={cn(
                      'relative block rounded-full px-3.5 py-1.5 text-sm transition-colors',
                      isActive ? 'text-fg' : 'text-muted hover:text-fg',
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full border border-line bg-surface"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          {profile.resume && (
            <a
              href={assetUrl(profile.resume)}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-1 hidden h-9 items-center gap-1.5 rounded-full border border-line-strong px-3.5 text-[13px] font-medium transition-colors hover:bg-surface sm:inline-flex"
            >
              <FileText className="size-3.5" aria-hidden />
              Résumé
            </a>
          )}
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex size-9 items-center justify-center rounded-full text-fg transition-colors hover:bg-surface md:hidden"
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </Container>
    </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-bg md:hidden"
          >
            <Container className="py-6">
              <ul className="border-t border-line">
                {navItems.map((item, i) => (
                  <li key={item.id} className="border-b border-line">
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'flex items-baseline gap-4 py-4 text-2xl font-medium tracking-tight',
                        active === item.id ? 'text-accent' : 'text-fg',
                      )}
                    >
                      <span className="font-mono text-xs text-subtle">0{i + 1}</span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              {profile.resume && (
                <a
                  href={assetUrl(profile.resume)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex h-11 items-center gap-2 rounded-full border border-line-strong px-5 text-sm font-medium"
                >
                  <FileText className="size-4" aria-hidden />
                  View résumé
                </a>
              )}
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
