import { useId, useMemo, useState } from 'react'
import { Search, X } from 'lucide-react'
import { coreStack, skillGroups } from '../../data/skills'
import { cn } from '../../lib/utils'
import { Reveal } from '../ui/Reveal'
import { Accent, Section } from '../ui/Section'

const totalSkills = new Set(skillGroups.flatMap((g) => g.items)).size

export function Skills() {
  const [query, setQuery] = useState('')
  const inputId = useId()
  const q = query.trim().toLowerCase()

  const matchCount = useMemo(() => {
    if (!q) return totalSkills
    return new Set(skillGroups.flatMap((g) => g.items).filter((s) => s.toLowerCase().includes(q))).size
  }, [q])

  return (
    <Section
      id="skills"
      index="03"
      eyebrow="Toolkit"
      title={
        <>
          A broad foundation, <Accent>applied</Accent> deliberately.
        </>
      }
      intro="The tools I build with, from full-stack web applications and ML pipelines down to Linux kernel drivers."
    >
      <Reveal>
        <div className="flex flex-col gap-6 border-y border-line py-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <span className="font-mono text-[11px] tracking-[0.18em] text-subtle uppercase">Core stack</span>
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {coreStack.map((tech) => (
                <li key={tech} className="text-[15px] font-medium text-fg">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative w-full lg:w-72">
            <label htmlFor={inputId} className="sr-only">
              Filter skills
            </label>
            <Search className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-subtle" aria-hidden />
            <input
              id={inputId}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter skills — e.g. spring"
              autoComplete="off"
              className="h-11 w-full rounded-full border border-line-strong bg-elevated pr-10 pl-10 text-sm text-fg placeholder:text-subtle focus:border-accent focus:outline-none [&::-webkit-search-cancel-button]:hidden"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Clear filter"
                className="absolute top-1/2 right-2 inline-flex size-7 -translate-y-1/2 items-center justify-center rounded-full text-subtle hover:bg-surface hover:text-fg"
              >
                <X className="size-3.5" aria-hidden />
              </button>
            )}
          </div>
        </div>
        <p className="mt-3 text-right font-mono text-[11px] text-subtle" aria-live="polite">
          {q ? `${matchCount} matching ${matchCount === 1 ? 'skill' : 'skills'}` : `${totalSkills} skills · ${skillGroups.length} areas`}
        </p>
      </Reveal>

      <div className="mt-10 columns-1 gap-x-12 md:columns-2 lg:columns-3">
        {skillGroups.map((group, gi) => {
          const groupHasMatch = !q || group.items.some((s) => s.toLowerCase().includes(q))
          return (
            <Reveal key={group.title} className="mb-10 break-inside-avoid" delay={(gi % 3) * 0.05}>
              <section
                aria-label={group.title}
                className={cn('transition-opacity duration-300', groupHasMatch ? 'opacity-100' : 'opacity-30')}
              >
                <h3 className="flex items-baseline gap-3 border-b border-line pb-3">
                  <span className="font-mono text-[11px] text-accent">{String(gi + 1).padStart(2, '0')}</span>
                  <span className="text-base font-medium tracking-tight">{group.title}</span>
                  <span className="ml-auto font-mono text-[11px] text-subtle">{group.items.length}</span>
                </h3>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((skill) => {
                    const match = q !== '' && skill.toLowerCase().includes(q)
                    return (
                      <li
                        key={skill}
                        className={cn(
                          'rounded-md border px-2 py-[3px] font-mono text-[12px] leading-5 transition-all duration-200',
                          match
                            ? 'border-accent bg-accent-soft text-accent'
                            : q
                              ? 'border-line text-subtle'
                              : 'border-line bg-surface/50 text-muted hover:border-line-strong hover:text-fg',
                        )}
                      >
                        {skill}
                      </li>
                    )
                  })}
                </ul>
              </section>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
