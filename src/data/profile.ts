import type { SocialLink } from './types'

/**
 * ─────────────────────────────────────────────────────────────
 *  PERSONAL INFORMATION — edit this file to update the site.
 *  Empty strings ('') hide the related UI on the live site.
 *  In `npm run dev`, a dashed hint shows where a value is missing.
 * ─────────────────────────────────────────────────────────────
 */
export const profile = {
  name: 'Md. Kaisarul Islam Estey',
  /** How the name is split across lines in the hero. */
  nameLines: ['Md. Kaisarul', 'Islam Estey'],
  initials: 'KE',
  /** Used in the navbar logo. */
  handle: 'estey',

  roles: ['CSE Student', 'Software Developer', 'AI/ML Enthusiast'],

  headline: {
    lead: 'Building software. Exploring intelligence.',
    emphasis: 'Understanding technology.',
  },

  intro:
    'I am a Computer Science and Engineering student at BUET who builds backend systems, experiments with applied machine learning, and likes to understand how computers work, all the way down to the hardware.',

  university: 'Bangladesh University of Engineering and Technology',
  universityShort: 'BUET',
  batch: "CSE '22",
  academicStatus: 'Level-3, Term-1',

  /** Short availability line in the hero. Set to '' to hide. */
  availability: '',

  /** Portrait in /public (4:5, ~800×1000). Empty → elegant monogram fallback. */
  photo: 'profile.jpg',
  /** Small square face crop for the hero avatar (~192×192). Falls back to `photo` if empty. */
  avatar: 'profile-avatar.jpg',
  /** Show the photo in black & white, revealing color on hover. */
  photoMonochrome: true,

  /** Résumé PDF in /public (e.g. 'resume.pdf') or a full URL. Empty → button hidden. */
  resume: '',

  /** Your contact email. Empty → mailto button hidden. */
  email: 'shahesteyislam999@gmail.com',
}

export const socialLinks: SocialLink[] = [
  { id: 'github', label: 'GitHub', url: 'https://github.com/Estey144', handle: 'Estey144' },
  { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/md-kaisarul-islam-estey-05a994283/' },
  { id: 'codeforces', label: 'Codeforces', url: '' },
  { id: 'kaggle', label: 'Kaggle', url: '' },
  { id: 'website', label: 'Website / Blog', url: '' },
]

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'journey', label: 'Journey' },
  { id: 'recognition', label: 'Recognition' },
  { id: 'contact', label: 'Contact' },
] as const

export const about = {
  title: 'Curious about every layer of the machine.',
  paragraphs: [
    "I'm a Computer Science and Engineering undergraduate at BUET (CSE '22), currently in Level-3, Term-1. I like understanding how computers work at every level, from the registers of an 8086 up to the attention layers of a transformer, and then using that understanding to build software that works.",
    'Most of my building happens on the backend: Spring Boot and Node services, REST APIs, and relational databases designed with care. I have also built AI into real products: a RAG pipeline with Qdrant and GPT-4o mini, LightGBM shortage prediction served over FastAPI, and transformer-based classification for Bengali text.',
    'I like going low in the stack too. I patched Linux kernel Bluetooth drivers to get an unsupported MediaTek adapter working on my own laptop, and coursework has taken me through xv6 RISC-V kernel work, a compiler front end built with ANTLR, 8086 assembly and AVR microcontrollers. I enjoy algorithmic problem solving, competitive programming and CTF challenges.',
    'I also teach programming and mathematics. Explaining an idea clearly is the most honest test of whether I really understand it.',
  ],
  facts: [
    { label: 'University', value: 'BUET' },
    { label: 'Degree', value: 'BSc in CSE' },
    { label: 'Batch', value: "CSE '22" },
    { label: 'Currently', value: 'Level-3, Term-1' },
    { label: 'Focus', value: 'Backend · Applied ML · Systems' },
  ],
  strengths: [
    'Analytical and mathematical problem solving',
    'Strong grounding in core computer science',
    'Picks up and adapts to new technologies quickly',
    'Turns designs into working implementations',
    'Research-oriented, experiment-driven mindset',
    'Clear technical communication and mentoring',
    'Collaborative, team-first development',
    'Continuous learning and experimentation',
  ],
  objective:
    'To keep deepening my expertise in software engineering, artificial intelligence, cybersecurity and systems, and to contribute to innovative products, meaningful research and impactful engineering work.',
}
