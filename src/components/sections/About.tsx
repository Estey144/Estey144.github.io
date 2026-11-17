import { Check } from 'lucide-react'
import { about } from '../../data/profile'
import { ProfileImage } from '../ui/ProfileImage'
import { Reveal } from '../ui/Reveal'
import { Accent, Section } from '../ui/Section'

export function About() {
  const [lead, ...rest] = about.paragraphs

  return (
    <Section
      id="about"
      index="01"
      eyebrow="About"
      title={
        <>
          Curious about <Accent>every layer</Accent> of the machine.
        </>
      }
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-3">
          <div className="max-w-[16rem] lg:sticky lg:top-28">
            <ProfileImage size="lg" />
            <dl className="mt-6 divide-y divide-line border-y border-line">
              {about.facts.map((fact) => (
                <div key={fact.label} className="flex items-baseline justify-between gap-4 py-2.5">
                  <dt className="font-mono text-[11px] tracking-wider text-subtle uppercase">{fact.label}</dt>
                  <dd className="text-right text-sm text-fg">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <div className="lg:col-span-9">
          <Reveal>
            <p className="text-xl leading-relaxed text-fg text-pretty sm:text-2xl sm:leading-relaxed">{lead}</p>
          </Reveal>
          <div className="mt-8 grid gap-6 text-[17px] leading-relaxed text-muted md:grid-cols-2 md:gap-x-10">
            {rest.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.05} className={i === rest.length - 1 && rest.length % 2 === 1 ? 'md:col-span-2' : undefined}>
                <p className="text-pretty">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <h3 className="font-mono text-xs tracking-[0.18em] text-subtle uppercase">What I bring to a team</h3>
            <ul className="mt-5 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {about.strengths.map((strength) => (
                <li key={strength} className="flex items-start gap-3 text-[15px] text-fg/90">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                  {strength}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mt-14">
            <blockquote className="border-l-2 border-accent pl-5">
              <p className="font-serif text-2xl leading-snug text-fg italic text-pretty sm:text-[1.75rem]">
                {about.objective}
              </p>
              <footer className="mt-3 font-mono text-xs tracking-wider text-subtle uppercase">Objective</footer>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
