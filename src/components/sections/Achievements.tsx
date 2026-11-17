import { ArrowUpRight } from 'lucide-react'
import { achievements, activities } from '../../data/journey'
import type { Achievement } from '../../data/types'
import { cn } from '../../lib/utils'
import { Reveal } from '../ui/Reveal'
import { Accent, Section } from '../ui/Section'

export function Achievements() {
  return (
    <Section
      id="recognition"
      index="05"
      eyebrow="Recognition"
      title={
        <>
          Competitions, hackathons <Accent>&amp;</Accent> olympiads.
        </>
      }
      intro="Places I've tested ideas under time pressure, as a solo competitor and as part of a team."
    >
      <ul className="border-t border-line">
        {achievements.map((item, i) => (
          <AchievementRow key={item.title} item={item} delay={Math.min(i, 4) * 0.04} />
        ))}
      </ul>

      <Reveal className="mt-14">
        <div className="grid gap-6 sm:grid-cols-2">
          {activities.map((a) => (
            <div key={a.title} className="border-l border-line-strong pl-5">
              <h3 className="font-medium">{a.title}</h3>
              <p className="mt-1 text-sm text-muted">{a.description}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}

function AchievementRow({ item, delay }: { item: Achievement; delay: number }) {
  const content = (
    <div className="grid gap-x-8 gap-y-2 py-6 sm:grid-cols-12 sm:items-baseline">
      <p className="font-mono text-xs text-subtle sm:col-span-3">
        {item.kind}
        {item.year && <span className="text-line-strong"> · </span>}
        {item.year}
      </p>
      <div className="sm:col-span-6">
        <h3 className="flex items-center gap-2 text-lg font-medium tracking-tight transition-colors group-hover:text-accent">
          {item.title}
          {item.href && (
            <ArrowUpRight className="size-4 text-subtle transition-colors group-hover:text-accent" aria-hidden />
          )}
        </h3>
        <p className="mt-1 text-[15px] text-muted text-pretty">
          {item.description}
          {item.team && <span className="text-subtle"> · {item.team}</span>}
        </p>
      </div>
      <p className="sm:col-span-3 sm:text-right">
        <span
          className={cn(
            'inline-flex rounded-full border px-3 py-1 font-mono text-[11.5px]',
            item.isPlacement ? 'border-accent/40 bg-accent-soft text-accent' : 'border-line text-muted',
          )}
        >
          {item.result}
        </span>
      </p>
    </div>
  )

  return (
    <li className="border-b border-line">
      <Reveal delay={delay}>
        {item.href ? (
          <a href={item.href} className="group block" title="See the related project">
            {content}
          </a>
        ) : (
          content
        )}
      </Reveal>
    </li>
  )
}
