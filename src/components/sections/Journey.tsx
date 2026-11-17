import type { ReactNode } from 'react'
import { GraduationCap, Presentation } from 'lucide-react'
import { education, teaching } from '../../data/journey'
import { Reveal } from '../ui/Reveal'
import { Accent, Section } from '../ui/Section'
import { TagList } from '../ui/Tag'
import { HighlightList } from '../projects/ProjectParts'

interface TimelineEntryProps {
  icon: ReactNode
  period: string
  kicker: string
  title: string
  org: string
  children: ReactNode
  last?: boolean
}

function TimelineEntry({ icon, period, kicker, title, org, children, last = false }: TimelineEntryProps) {
  return (
    <div role="listitem" className={`relative grid gap-4 pl-12 lg:grid-cols-12 lg:gap-0 lg:pl-0 ${last ? '' : 'pb-16'}`}>
      {/* rail */}
      {!last && <span aria-hidden className="absolute top-10 bottom-0 left-[15px] w-px bg-line lg:left-[calc(25%+15px)]" />}

      <div className="lg:col-span-3 lg:pt-1.5 lg:text-right lg:pr-10">
        <p className="font-mono text-xs tracking-wide text-subtle">{period}</p>
      </div>

      <div className="relative lg:col-span-9 lg:pl-12">
        <span
          aria-hidden
          className="absolute top-0 -left-12 inline-flex size-8 items-center justify-center rounded-full border border-line-strong bg-elevated text-accent lg:left-0"
        >
          {icon}
        </span>
        <p className="font-mono text-[11px] tracking-[0.18em] text-accent uppercase">{kicker}</p>
        <h3 className="mt-2 text-2xl font-medium tracking-tight text-balance">{title}</h3>
        <p className="mt-1 text-muted">{org}</p>
        <div className="mt-6">{children}</div>
      </div>
    </div>
  )
}

export function Journey() {
  return (
    <Section
      id="journey"
      index="04"
      eyebrow="Journey"
      title={
        <>
          Learning, and helping <Accent>others</Accent> learn.
        </>
      }
    >
      <div role="list">
        <Reveal>
          <TimelineEntry
            icon={<GraduationCap className="size-4" />}
            period={education.period}
            kicker="Education"
            title={education.degree}
            org={education.institution}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-sm text-fg">
              <span className="size-1.5 rounded-full bg-accent-2" aria-hidden />
              {education.status}
            </p>
            <p className="mt-6 mb-3 font-mono text-[11px] tracking-wider text-subtle uppercase">Areas of study</p>
            <TagList items={education.areas} />
          </TimelineEntry>
        </Reveal>

        <Reveal>
          <TimelineEntry
            icon={<Presentation className="size-4" />}
            period={teaching.period}
            kicker="Teaching & Mentoring"
            title={teaching.role}
            org={teaching.setting}
            last
          >
            <HighlightList items={teaching.points} />
            <p className="mt-6 max-w-2xl border-l-2 border-line-strong pl-4 font-serif text-lg text-fg/90 italic">
              {teaching.approach}
            </p>
            <p className="mt-6 mb-3 font-mono text-[11px] tracking-wider text-subtle uppercase">Subjects taught</p>
            <TagList items={teaching.topics} />
          </TimelineEntry>
        </Reveal>
      </div>
    </Section>
  )
}
