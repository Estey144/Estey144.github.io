import type { SkillGroup } from './types'

/** The technologies used most in day-to-day work (shown as the headline row). */
export const coreStack = ['Java', 'Spring Boot', 'React', 'Node.js', 'Python', 'PostgreSQL', 'Linux', 'Git']

/**
 * Keep this list professional: tools and abilities demonstrated in real projects.
 * Coursework topics belong in `education.areas` (src/data/journey.ts), not here.
 */
export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: ['Java', 'Python', 'C++', 'C', 'JavaScript', 'SQL', 'Bash'],
  },
  {
    title: 'Backend',
    items: [
      'Spring Boot',
      'Spring Security & JWT',
      'Node.js / Express',
      'FastAPI',
      'REST API Design',
      'JDBC / JdbcTemplate',
      'Role-Based Access Control',
    ],
  },
  {
    title: 'Frontend',
    items: ['React', 'Vite', 'JavaScript (ES6+)', 'HTML & CSS', 'Chart.js'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'Oracle Database', 'Schema Design', 'Triggers & Constraints', 'Indexing & Query Tuning', 'Qdrant'],
  },
  {
    title: 'AI & Machine Learning',
    items: [
      'RAG Pipelines',
      'LLM Integration (OpenAI, Gemini)',
      'Embeddings & Vector Search',
      'LightGBM',
      'Hugging Face Transformers',
      'NLP & Text Classification',
      'Model Fine-Tuning',
      'Anomaly Detection',
    ],
  },
  {
    title: 'Systems & Embedded',
    items: [
      'Linux Kernel Drivers',
      'DKMS',
      'Linux Systems Programming',
      'Embedded C',
      'AVR / ATmega32',
      'x86 Assembly (8086)',
      'Compiler Front Ends (ANTLR)',
    ],
  },
  {
    title: 'Engineering Practices',
    items: [
      'Data Structures & Algorithms',
      'Object-Oriented Design',
      'Design Patterns',
      'Competitive Programming',
      'Technical Documentation',
    ],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git & GitHub', 'Docker', 'Linux', 'Vercel', 'Render', 'Maven', 'IntelliJ IDEA', 'VS Code', 'Jupyter'],
  },
]
