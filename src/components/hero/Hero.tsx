import { motion, type Variants } from 'motion/react'
import { ArrowDown, ArrowUpRight, FileText } from 'lucide-react'
import { profile, socialLinks } from '../../data/profile'
import { assetUrl, EASE_OUT } from '../../lib/utils'
import { ButtonLink } from '../ui/ButtonLink'
import { ConfigHint } from '../ui/ConfigHint'
import { Container } from '../ui/Container'
import { ProfileImage } from '../ui/ProfileImage'
import { SocialIcon } from '../ui/SocialIcon'
import { StackDiagram } from './StackDiagram'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE_OUT } },
}

const heroSocials = socialLinks.filter((s) => s.id === 'github' || s.id === 'linkedin')

export function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="relative overflow-hidden">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 -z-10" />

      <Container className="grid min-h-[100svh] items-center gap-14 pt-28 pb-20 lg:grid-cols-12 lg:gap-10 lg:pt-24">
        <motion.div variants={container} initial="hidden" animate="show" className="lg:col-span-7">
          <motion.div variants={item} className="flex items-center gap-3">
            <ProfileImage size="sm" />
            <p className="font-mono text-[12px] tracking-wide text-muted">
              <span className="text-fg">{profile.universityShort}</span> {profile.batch}
              <span className="mx-2 text-line-strong">/</span>
              {profile.academicStatus}
            </p>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-8 text-[clamp(2.75rem,8vw,5.75rem)] leading-[0.95] font-semibold tracking-[-0.045em]"
          >
            {profile.nameLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </motion.h1>

          <motion.p variants={item} className="mt-6 flex flex-wrap gap-y-1 font-mono text-[13px] text-muted">
            {profile.roles.map((role, i) => (
              <span key={role} className="whitespace-nowrap">
                {i > 0 && <span className="mx-2 text-accent">·</span>}
                {role}
              </span>
            ))}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-8 max-w-xl text-2xl leading-snug font-normal tracking-[-0.015em] text-fg/90 text-balance sm:text-[1.75rem]"
          >
            {profile.headline.lead}{' '}
            <span className="font-serif text-[1.08em] text-accent italic">{profile.headline.emphasis}</span>
          </motion.p>

          <motion.p variants={item} className="mt-5 max-w-xl text-base leading-relaxed text-muted text-pretty sm:text-[17px]">
            {profile.intro}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <ButtonLink href="#work">
              Explore My Work
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden />
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Get in Touch
            </ButtonLink>
            {profile.resume && (
              <ButtonLink href={assetUrl(profile.resume)} variant="ghost" target="_blank" rel="noopener noreferrer">
                <FileText className="size-4" aria-hidden />
                Résumé
              </ButtonLink>
            )}
          </motion.div>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3">
            {heroSocials.map((link) =>
              link.url ? (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
                >
                  <SocialIcon id={link.id} className="size-4" />
                  {link.label}
                  <ArrowUpRight
                    className="size-3 opacity-0 transition-opacity group-hover:opacity-100"
                    aria-hidden
                  />
                </a>
              ) : (
                <ConfigHint key={link.id}>{link.label} URL → src/data/profile.ts</ConfigHint>
              ),
            )}
            {profile.availability && (
              <span className="inline-flex items-center gap-2 text-sm text-muted">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-2 opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex size-2 rounded-full bg-accent-2" />
                </span>
                {profile.availability}
              </span>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: EASE_OUT }}
        >
          <StackDiagram />
        </motion.div>
      </Container>
    </section>
  )
}
