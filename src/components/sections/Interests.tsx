import { Brain, Code, Cpu, Shield } from 'lucide-react'
import { interests } from '../../data/journey'
import type { InterestArea } from '../../data/types'
import { Reveal } from '../ui/Reveal'
import { Accent, Section } from '../ui/Section'

const icons: Record<InterestArea['icon'], typeof Code> = {
  code: Code,
  brain: Brain,
  cpu: Cpu,
  shield: Shield,
}

export function Interests() {
  return (
    <Section
      id="interests"
      index="06"
      eyebrow="Interests"
      title={
        <>
          Where my curiosity is <Accent>heading</Accent>.
        </>
      }
      intro="The areas I'm actively exploring and want to go deeper in, through coursework, research and real-world engineering."
    >
      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {interests.map((area, i) => {
          const Icon = icons[area.icon]
          return (
            <Reveal key={area.title} delay={i * 0.06} className="bg-bg">
              <div className="group h-full p-7 transition-colors duration-300 hover:bg-elevated">
                <Icon className="size-5 text-accent" aria-hidden strokeWidth={1.6} />
                <h3 className="mt-6 text-lg font-medium tracking-tight">{area.title}</h3>
                <ul className="mt-4 space-y-1.5">
                  {area.items.map((it) => (
                    <li key={it} className="text-sm text-muted transition-colors group-hover:text-fg/80">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
