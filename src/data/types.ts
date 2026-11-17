export type SocialId = 'github' | 'linkedin' | 'email' | 'codeforces' | 'kaggle' | 'website' | 'scholar'

export interface SocialLink {
  id: SocialId
  label: string
  /** Full URL. Leave empty ('') to hide the link on the live site. */
  url: string
  /** Optional short handle shown next to the label, e.g. "Estey144". */
  handle?: string
}

export type ProjectArt = 'hospitrack' | 'somonnoy' | 'bengali-llm' | 'nexara' | 'mt7902' | 'atmega'

export interface Project {
  /** Used for the anchor: #project-<id> */
  id: string
  title: string
  /** One-line positioning statement shown under the title. */
  tagline: string
  /** Where/why it was built, e.g. "Codex Community Hackathon · Team Nexus". */
  context: string
  /** Optional award, shown as a highlighted badge, e.g. "1st Runner-up · SUST CSE Carnival 2026". */
  award?: string
  description: string
  highlights: string[]
  tech: string[]
  links: {
    /** GitHub repository URL. Leave empty to hide the button. */
    repo: string
    /** Live demo URL. Leave empty to hide the button. */
    demo: string
    /** Optional demo/presentation video URL. */
    video?: string
  }
  /** Built-in vector illustration used when no screenshot is provided. */
  art: ProjectArt
  /** Optional screenshot in /public (e.g. "projects/hospitrack.webp") — replaces the illustration. */
  image?: string
  /** Featured projects get the large showcase layout. */
  featured: boolean
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface Achievement {
  title: string
  /** Outcome, e.g. "1st Runner-up", "Finalist", "Participant". */
  result: string
  /** true for placements/selections — rendered with the accent color. */
  isPlacement: boolean
  kind: string
  year?: string
  team?: string
  description: string
  /** Optional in-page link, e.g. "#project-somonnoy". */
  href?: string
}

export interface InterestArea {
  title: string
  icon: 'code' | 'brain' | 'shield' | 'cpu'
  items: string[]
}

export interface StackLayer {
  level: string
  name: string
  items: string
  /** Element id this layer links to, e.g. 'project-nexara' or 'skills'. */
  target: string
}
