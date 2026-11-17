import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { stackLayers } from '../../data/journey'
import { projects } from '../../data/projects'
import { cn } from '../../lib/utils'

const CYCLE_MS = 1500

/**
 * "Abstraction stack" — the layers of computing this portfolio spans, from machine to intelligence.
 * A signal travels up the stack; hovering or focusing a layer pins it. Each layer links to its project.
 */
export function StackDiagram() {
  const reduceMotion = useReducedMotion()
  const bottom = stackLayers.length - 1
  const [signal, setSignal] = useState(bottom)
  const [pinned, setPinned] = useState<number | null>(null)

  useEffect(() => {
    if (reduceMotion || pinned !== null) return
    const id = window.setInterval(() => setSignal((i) => (i <= 0 ? bottom : i - 1)), CYCLE_MS)
    return () => window.clearInterval(id)
  }, [reduceMotion, pinned, bottom])

  const active = pinned ?? (reduceMotion ? null : signal)

  return (
    <figure className="relative rounded-2xl border border-line bg-elevated/85 shadow-2xl shadow-black/5 backdrop-blur-sm dark:shadow-black/40">
      <figcaption className="flex items-center justify-between border-b border-line px-5 py-3.5 font-mono text-[12px]">
        <span className="text-fg">
          stack<span className="text-subtle">.trace</span>
        </span>
        <span className="text-subtle">registers → reasoning</span>
      </figcaption>

      <ol className="relative px-2 py-2" onMouseLeave={() => setPinned(null)}>
        {/* Signal rail */}
        <span aria-hidden className="absolute top-5 bottom-5 left-[1.6rem] w-px bg-line-strong" />

        {stackLayers.map((layer, i) => {
          const isActive = active === i
          const project = projects.find((p) => `project-${p.id}` === layer.target)
          return (
            <li key={layer.level}>
              <a
                href={`#${layer.target}`}
                onMouseEnter={() => setPinned(i)}
                onFocus={() => setPinned(i)}
                onBlur={() => setPinned(null)}
                aria-label={`${layer.name} layer: ${layer.items} — see ${project ? project.title : layer.target}`}
                className={cn(
                  'group relative grid grid-cols-[2.25rem_minmax(0,1fr)_auto] items-center gap-x-3 rounded-lg px-3 py-2.5 transition-colors duration-300 sm:grid-cols-[2.25rem_auto_minmax(0,1fr)]',
                  isActive ? 'bg-accent-soft' : 'hover:bg-surface/60',
                )}
              >
                <span className="relative flex justify-center">
                  <span
                    className={cn(
                      'relative z-10 size-2 rounded-full border transition-colors duration-300',
                      isActive ? 'border-accent bg-accent' : 'border-line-strong bg-elevated',
                    )}
                  />
                  {isActive && !reduceMotion && (
                    <motion.span
                      key={`pulse-${i}-${signal}`}
                      aria-hidden
                      className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
                      initial={{ scale: 1, opacity: 0.6 }}
                      animate={{ scale: 3.2, opacity: 0 }}
                      transition={{ duration: 1.1, ease: 'easeOut' }}
                    />
                  )}
                </span>

                <span className="min-w-0">
                  <span className="flex items-baseline gap-2.5">
                    <span
                      className={cn(
                        'font-mono text-[11px] transition-colors',
                        isActive ? 'text-accent' : 'text-subtle',
                      )}
                    >
                      L{layer.level}
                    </span>
                    <span className="text-[15px] font-medium text-fg">{layer.name}</span>
                  </span>
                  <span className="mt-0.5 block truncate font-mono text-[11.5px] text-muted sm:hidden">
                    {layer.items}
                  </span>
                </span>

                <span className="flex min-w-0 items-center justify-end gap-2">
                  <span className="hidden truncate font-mono text-[11.5px] text-muted sm:inline">{layer.items}</span>
                  <ArrowUpRight
                    aria-hidden
                    className={cn(
                      'size-3.5 shrink-0 transition-all duration-300',
                      isActive ? 'text-accent opacity-100' : 'text-subtle opacity-0 group-hover:opacity-100',
                    )}
                  />
                </span>
              </a>
            </li>
          )
        })}
      </ol>

      <div className="flex items-center justify-between border-t border-line px-5 py-3 font-mono text-[11.5px] text-subtle">
        <span>
          <span className="text-accent">$</span> ls ./projects
        </span>
        <span>
          {projects.length} projects · {stackLayers.length} layers
        </span>
      </div>
    </figure>
  )
}
