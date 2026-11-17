import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Plus, Trophy } from 'lucide-react'
import { projects } from '../../data/projects'
import type { Project } from '../../data/types'
import { cn, EASE_OUT } from '../../lib/utils'
import { Reveal } from '../ui/Reveal'
import { Accent, Section } from '../ui/Section'
import { TagList } from '../ui/Tag'
import { HighlightList, ProjectLinks, ProjectVisual } from './ProjectParts'

const featured = projects.filter((p) => p.featured)
const more = projects.filter((p) => !p.featured)

const pad = (n: number) => String(n).padStart(2, '0')

export function Projects() {
  return (
    <Section
      id="work"
      index="02"
      eyebrow="Selected Work"
      title={
        <>
          Things I've built, from <Accent>kernels</Accent> to classifiers.
        </>
      }
      intro="Award-winning hackathon work, full-stack AI products, Linux kernel fixes and embedded hardware, with live demos where they exist."
    >
      <div className="space-y-24 sm:space-y-32">
        {featured.map((project, i) => (
          <FeaturedProject key={project.id} project={project} index={i + 1} flip={i % 2 === 1} />
        ))}
      </div>

      {more.length > 0 && (
        <div className="mt-28 sm:mt-36">
          <Reveal>
            <div className="mb-6 flex items-baseline justify-between gap-4">
              <h3 className="text-xl font-medium tracking-tight sm:text-2xl">More engineering work</h3>
              <p className="font-mono text-xs text-subtle">{pad(more.length)} projects</p>
            </div>
          </Reveal>
          <ul className="border-t border-line">
            {more.map((project, i) => (
              <ProjectRow key={project.id} project={project} index={featured.length + i + 1} />
            ))}
          </ul>
        </div>
      )}
    </Section>
  )
}

function FeaturedProject({ project, index, flip }: { project: Project; index: number; flip: boolean }) {
  return (
    <article id={`project-${project.id}`} className="scroll-mt-24">
      <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
        <Reveal className={cn('lg:col-span-7', flip && 'lg:order-2')}>
          <ProjectVisual project={project} className="hover:border-line-strong" />
        </Reveal>

        <Reveal className={cn('lg:col-span-5', flip && 'lg:order-1')} delay={0.1}>
          <p className="font-mono text-xs tracking-wide text-subtle">
            <span className="text-accent">{pad(index)}</span>
            <span className="mx-2 text-line-strong">—</span>
            {project.context}
          </p>
          {project.award && <AwardBadge award={project.award} className="mt-4" />}
          <h3 className="mt-4 text-3xl font-medium tracking-[-0.02em] text-balance sm:text-4xl">{project.title}</h3>
          <p className="mt-1.5 font-serif text-xl text-muted italic">{project.tagline}</p>
          <p className="mt-5 leading-relaxed text-muted text-pretty">{project.description}</p>
          <div className="mt-6">
            <HighlightList items={project.highlights} />
          </div>
          <TagList items={project.tech} className="mt-7" />
          <div className="mt-7">
            <ProjectLinks project={project} />
          </div>
        </Reveal>
      </div>
    </article>
  )
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false)
  const panelId = `project-panel-${project.id}`

  // Open automatically when linked to directly (e.g. from the hero stack diagram).
  useEffect(() => {
    const openIfTargeted = () => {
      if (window.location.hash === `#project-${project.id}`) setOpen(true)
    }
    openIfTargeted()
    window.addEventListener('hashchange', openIfTargeted)
    return () => window.removeEventListener('hashchange', openIfTargeted)
  }, [project.id])

  return (
    <li id={`project-${project.id}`} className="scroll-mt-24 border-b border-line">
      <h4>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={panelId}
          className="group grid w-full grid-cols-[2rem_1fr_auto] items-center gap-x-4 py-6 text-left sm:grid-cols-[3rem_1.2fr_1fr_auto] sm:gap-x-6"
        >
          <span className="font-mono text-xs text-subtle transition-colors group-hover:text-accent">{pad(index)}</span>
          <span className="min-w-0">
            <span className="block text-lg font-medium tracking-tight transition-colors group-hover:text-accent sm:text-xl">
              {project.title}
            </span>
            <span className="mt-0.5 block text-sm text-muted">{project.tagline}</span>
          </span>
          <span className="hidden truncate font-mono text-xs text-subtle sm:block">{project.tech.join(' · ')}</span>
          <span
            className={cn(
              'inline-flex size-8 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 group-hover:border-line-strong group-hover:text-fg',
              open && 'rotate-45 border-accent text-accent',
            )}
          >
            <Plus className="size-4" aria-hidden />
          </span>
        </button>
      </h4>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-label={`${project.title} details`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE_OUT }}
            className="overflow-hidden"
          >
            <div className="grid gap-8 pb-10 sm:pl-[4.5rem] lg:grid-cols-12 lg:gap-10">
              <ProjectVisual project={project} className="lg:col-span-6" />
              <div className="lg:col-span-6">
                <p className="font-mono text-xs tracking-wide text-subtle">{project.context}</p>
                {project.award && <AwardBadge award={project.award} className="mt-3" />}
                <p className="mt-3 leading-relaxed text-muted text-pretty">{project.description}</p>
                <div className="mt-5">
                  <HighlightList items={project.highlights} />
                </div>
                <TagList items={project.tech} className="mt-6" />
                <div className="mt-6">
                  <ProjectLinks project={project} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

function AwardBadge({ award, className }: { award: string; className?: string }) {
  return (
    <p
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-soft px-3 py-1 text-[13px] font-medium text-accent',
        className,
      )}
    >
      <Trophy className="size-3.5" aria-hidden />
      {award}
    </p>
  )
}
