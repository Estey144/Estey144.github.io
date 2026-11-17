import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'
import { Container } from './Container'
import { Reveal } from './Reveal'

interface SectionProps {
  id: string
  index: string
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  children: ReactNode
  className?: string
}

/** Standard page section: numbered eyebrow, large title, optional intro, content. */
export function Section({ id, index, eyebrow, title, intro, children, className }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn('border-t border-line py-24 sm:py-32', className)}>
      <Container>
        <Reveal>
          <header className="mb-14 grid gap-5 sm:mb-16 lg:grid-cols-12 lg:gap-8">
            <p className="font-mono text-xs tracking-[0.18em] text-subtle uppercase lg:col-span-3 lg:pt-3">
              <span className="text-accent">{index}</span>
              <span className="mx-2 text-line-strong">/</span>
              {eyebrow}
            </p>
            <div className="lg:col-span-9">
              <h2
                id={`${id}-title`}
                className="text-[2rem] leading-[1.1] font-medium tracking-[-0.025em] text-balance sm:text-5xl"
              >
                {title}
              </h2>
              {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted text-pretty">{intro}</p>}
            </div>
          </header>
        </Reveal>
        {children}
      </Container>
    </section>
  )
}

/** Italic serif accent used inside headings. */
export function Accent({ children }: { children: ReactNode }) {
  return <em className="font-serif font-normal tracking-normal text-accent italic">{children}</em>
}
