import type { Achievement, InterestArea, StackLayer } from './types'

export const education = {
  period: "CSE '22 — Present",
  degree: 'Bachelor of Science in Computer Science and Engineering',
  institution: 'Bangladesh University of Engineering and Technology (BUET)',
  status: 'Currently in Level-3, Term-1',
  areas: [
    'Data Structures & Algorithms',
    'Operating Systems',
    'Compiler Design',
    'Computer Architecture',
    'Computer Networks',
    'Database Systems',
    'Microprocessors & Embedded Systems',
    'Software Engineering',
  ],
}

export const teaching = {
  period: 'Ongoing',
  role: 'Programming & Mathematics Tutor',
  setting: 'Independent tutoring, including online sessions with international students',
  points: [
    'Teaching Python, C++ and core programming concepts from first principles',
    'Covering data structures, algorithms and university-level CSE subjects',
    'Teaching mathematics: algebra and calculus',
    'Building logical reasoning, computational thinking and analytical problem solving',
  ],
  approach:
    'Structured, beginner-friendly explanations that break complex technical and mathematical ideas into steps that build on each other.',
  topics: [
    'C++',
    'Python',
    'Programming Fundamentals',
    'Data Structures & Algorithms',
    'University CSE Subjects',
    'Computational Thinking',
    'Algebra',
    'Calculus',
  ],
}

/** Results only (placements and selections). Only include what actually happened. */
export const achievements: Achievement[] = [
  {
    title: 'SUST CSE Carnival 2026',
    result: '1st Runner-up',
    isPlacement: true,
    kind: 'Hackathon',
    year: '2026',
    team: 'Team Nexus',
    description:
      'Built Somonnoy, a liquidity-monitoring system for mobile financial service agents, at the Codex Community Hackathon.',
    href: '#project-somonnoy',
  },
  {
    title: 'Therap JavaFest 2025',
    result: 'Finalist',
    isPlacement: true,
    kind: 'Software competition',
    year: '2025',
    description: 'Selected as a finalist in the Java software development competition.',
  },
  {
    title: 'Bangladesh Mathematical Olympiad',
    result: 'Regional Winner',
    isPlacement: true,
    kind: 'Olympiad',
    year: '2022',
    description: 'Regional winner at the national mathematics olympiad.',
  },
]

export const activities = [
  { title: 'Competitive Programming', description: 'Regular algorithmic problem solving and contest practice.' },
  {
    title: 'Technical Problem Solving',
    description: 'Hackathons, datathons and CTFs as a way to learn quickly under real constraints.',
  },
]

export const interests: InterestArea[] = [
  {
    title: 'Software Engineering',
    icon: 'code',
    items: [
      'Backend engineering',
      'Full-stack development',
      'Software architecture',
      'Scalable applications',
      'RESTful API design',
      'Database systems',
      'Open-source development',
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: 'brain',
    items: [
      'Applied machine learning',
      'AI engineering',
      'Large language models',
      'Deep learning & NLP',
      'Intelligent agents',
      'Anomaly detection',
      'ML systems',
    ],
  },
  {
    title: 'Systems & Low-Level',
    icon: 'cpu',
    items: [
      'Operating systems',
      'Systems programming',
      'Compiler engineering',
      'Computer architecture',
      'Concurrency & synchronization',
      'Distributed systems',
      'Algorithm design',
    ],
  },
  {
    title: 'Cybersecurity',
    icon: 'shield',
    items: [
      'Web security',
      'Network security',
      'Cryptography',
      'Reverse engineering',
      'Digital forensics',
      'OSINT',
      'Vulnerability assessment',
    ],
  },
]

/** The hero "abstraction stack": each layer links to the project that lives there. */
export const stackLayers: StackLayer[] = [
  { level: '07', name: 'Intelligence', items: 'NLP · RAG · LightGBM', target: 'project-bengali-hallucination' },
  { level: '06', name: 'Interface', items: 'React · Vite · Chart.js', target: 'project-hospitrack' },
  { level: '05', name: 'Services', items: 'Spring Boot · Express · FastAPI', target: 'project-somonnoy' },
  { level: '04', name: 'Data', items: 'PostgreSQL · Oracle · Qdrant', target: 'project-nexara' },
  { level: '03', name: 'Languages', items: 'Java · Python · C / C++', target: 'skills' },
  { level: '02', name: 'Kernel', items: 'Linux drivers · DKMS · btusb', target: 'project-mt7902-bluetooth-fix' },
  { level: '01', name: 'Machine', items: '8086 ASM · AVR · ATmega32', target: 'project-atmega32-voltmeter' },
]
