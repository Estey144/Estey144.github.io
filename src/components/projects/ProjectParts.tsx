import { ArrowUpRight, Play } from 'lucide-react'
import type { Project } from '../../data/types'
import { assetUrl, cn } from '../../lib/utils'
import { ButtonLink } from '../ui/ButtonLink'
import { ConfigHint } from '../ui/ConfigHint'
import { GitHubIcon } from '../ui/SocialIcon'
import { ProjectArt } from './ProjectArt'

/** Screenshot if provided, otherwise the built-in illustration — framed consistently. */
export function ProjectVisual({ project, className }: { project: Project; className?: string }) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-xl border border-line bg-elevated transition-colors duration-300',
        className,
      )}
    >
      <div aria-hidden className="bg-grid absolute inset-0 opacity-60" />
      {project.image ? (
        <img
          src={assetUrl(project.image)}
          alt={`Screenshot of ${project.title}`}
          loading="lazy"
          decoding="async"
          className="relative aspect-[8/5] w-full object-cover"
        />
      ) : (
        <ProjectArt art={project.art} title={project.title} className="relative p-2 sm:p-4" />
      )}
    </div>
  )
}

/** Repository / demo buttons. Missing links are hidden (with a dev-only hint). */
export function ProjectLinks({ project }: { project: Project }) {
  const { repo, demo, video } = project.links
  if (!repo && !demo && !video) {
    return <ConfigHint>Add repo/demo URL → src/data/projects.ts</ConfigHint>
  }
  return (
    <div className="flex flex-wrap gap-2">
      {repo && (
        <ButtonLink href={repo} variant="secondary" size="sm" aria-label={`${project.title} source code on GitHub`}>
          <GitHubIcon className="size-3.5" />
          Source
        </ButtonLink>
      )}
      {demo && (
        <ButtonLink href={demo} variant="primary" size="sm" aria-label={`Live demo of ${project.title}`}>
          Live demo
          <ArrowUpRight className="size-3.5" aria-hidden />
        </ButtonLink>
      )}
      {video && (
        <ButtonLink href={video} variant="ghost" size="sm" aria-label={`${project.title} presentation video`}>
          <Play className="size-3.5" aria-hidden />
          Video
        </ButtonLink>
      )}
    </div>
  )
}

export function HighlightList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-muted">
          <span aria-hidden className="mt-[0.7em] h-0.5 w-3 shrink-0 rounded-full bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  )
}
