import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react'
import { profile, socialLinks } from '../../data/profile'
import { ButtonLink } from '../ui/ButtonLink'
import { ConfigHint } from '../ui/ConfigHint'
import { Reveal } from '../ui/Reveal'
import { Accent, Section } from '../ui/Section'
import { SocialIcon } from '../ui/SocialIcon'

export function Contact() {
  const [copied, setCopied] = useState(false)
  const links = socialLinks.filter((s) => s.url)
  const missing = socialLinks.filter((s) => !s.url)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <Section
      id="contact"
      index="07"
      eyebrow="Contact"
      title={
        <>
          Let's build something <Accent>thoughtful</Accent>.
        </>
      }
    >
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-7">
          <p className="max-w-xl text-xl leading-relaxed text-muted text-pretty">
            I'm open to internships, research collaborations and conversations about software engineering, machine
            learning, systems or security. If you're working on something interesting, or just want to talk shop, I'd
            be glad to hear from you.
          </p>

          {profile.email ? (
            <div className="mt-10">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-3 text-[clamp(1.15rem,5.4vw,2.25rem)] font-medium tracking-tight text-fg"
              >
                <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
                  {/* Allow a line break only after the "@" on very narrow screens */}
                  {profile.email.split('@')[0]}@<wbr />
                  {profile.email.split('@')[1]}
                </span>
                <ArrowUpRight className="size-6 shrink-0 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:size-8" aria-hidden />
              </a>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={`mailto:${profile.email}`}>
                  <Mail className="size-4" aria-hidden />
                  Send an email
                </ButtonLink>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-line-strong px-5 text-sm font-medium transition-colors hover:bg-surface"
                >
                  {copied ? <Check className="size-4 text-accent-2" aria-hidden /> : <Copy className="size-4" aria-hidden />}
                  <span aria-live="polite">{copied ? 'Copied' : 'Copy address'}</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-10">
              <ConfigHint>Set `email` in src/data/profile.ts to enable the mailto button</ConfigHint>
            </div>
          )}
        </Reveal>

        <Reveal className="lg:col-span-5" delay={0.1}>
          <h3 className="font-mono text-xs tracking-[0.18em] text-subtle uppercase">Elsewhere</h3>
          <ul className="mt-4 border-t border-line">
            {links.map((link) => (
              <li key={link.id} className="border-b border-line">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 py-4 transition-colors"
                >
                  <SocialIcon id={link.id} className="size-[18px] text-muted transition-colors group-hover:text-accent" />
                  <span className="font-medium">{link.label}</span>
                  {link.handle && <span className="font-mono text-sm text-subtle">{link.handle}</span>}
                  <ArrowUpRight
                    className="ml-auto size-4 text-subtle transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg"
                    aria-hidden
                  />
                </a>
              </li>
            ))}
          </ul>
          {missing.length > 0 && (
            <div className="mt-4">
              <ConfigHint>Not shown until set: {missing.map((m) => m.label).join(', ')}</ConfigHint>
            </div>
          )}
        </Reveal>
      </div>
    </Section>
  )
}
