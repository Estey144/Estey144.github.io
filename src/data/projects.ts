import type { Project } from './types'

/**
 * PROJECTS
 * - `featured: true` → large showcase row; otherwise → expandable index row.
 * - Leave `links.repo` / `links.demo` empty to hide those buttons.
 * - Add `image: 'projects/<file>.webp'` (placed in /public) to replace the illustration.
 */
export const projects: Project[] = [
  {
    id: 'somonnoy',
    title: 'Somonnoy',
    tagline: 'Liquidity intelligence for mobile financial service agents',
    context: 'Codex Community Hackathon · Team Nexus',
    award: '1st Runner-up · SUST CSE Carnival 2026',
    description:
      'A decision-support prototype for multi-provider mobile financial service (MFS) agents in Bangladesh. It predicts physical-cash and e-wallet shortages before they happen, flags unusual transaction behavior for human review, and gives agents, provider operations teams and risk analysts their own role-specific dashboards.',
    highlights: [
      'LightGBM shortage prediction served from a FastAPI endpoint and tuned for high recall, because a missed shortage costs more than an extra alert',
      'Combined shortage-risk F1 of 0.91 (recall 0.84, precision 0.99) on the team’s synthetic evaluation data',
      'Transaction anomaly review using schema-validated Gemini output, with a deterministic fallback',
      'Customer-network graph built with DBSCAN-style SQL clustering, plus a Bangladesh liquidity hotspot map',
      'JWT HttpOnly-cookie auth with role-based access; Postgres B-tree and hash indexes tuned to dashboard queries',
    ],
    tech: ['React', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'FastAPI', 'LightGBM', 'Gemini API'],
    links: { repo: 'https://github.com/Estey144/Somonnoy', demo: 'https://somonnoy-sustc.vercel.app' },
    art: 'somonnoy',
    featured: true,
  },
  {
    id: 'nexara',
    title: 'Nexara',
    tagline: 'AI study companion with RAG and a personalized feed',
    context: 'Full-stack AI web app · built with Shuvodip Das',
    description:
      'A study-helper web app for students. Its chatbot uses a retrieval-augmented generation (RAG) pipeline over the student’s own material, and the community feed ranks posts with a custom algorithm based on user activity, recency and engagement.',
    highlights: [
      'RAG pipeline: Cohere embeddings, Qdrant vector search and GPT-4o mini responses',
      'Self-designed post-ranking algorithm for a personalized community feed',
      'Context from uploaded PDFs, chat summaries, auto-generated MCQ and written exams, and YouTube video summaries',
      'JWT HttpOnly-cookie auth; Dockerized Spring Boot backend on Render, React frontend on Vercel',
    ],
    tech: ['Spring Boot', 'React', 'PostgreSQL', 'Qdrant', 'Cohere', 'OpenAI API', 'Docker'],
    links: {
      repo: 'https://github.com/Estey144/Nexara',
      demo: 'https://nexara-ydil.vercel.app',
      video: 'https://www.youtube.com/watch?v=sMar8LkpqeU',
    },
    art: 'nexara',
    featured: true,
  },
  {
    id: 'hospitrack',
    title: 'HospiTrack',
    tagline: 'Hospital management system',
    context: 'BUET CSE 216 · Database Sessional · built with Adib Bin Iqbal',
    description:
      'A full-stack hospital management system covering patients, doctors, appointments, prescriptions, billing, ambulance requests and telemedicine, with separate portals for patients, doctors and administrators.',
    highlights: [
      'Spring Boot REST API with hand-written SQL through JdbcTemplate',
      'Oracle schema of 30 tables, with 15 triggers enforcing business rules and audit trails',
      'Spring Security with JWT for role-based access',
      'React frontend with Chart.js analytics, PDF export and an AI symptom-checker chatbot',
    ],
    tech: ['Java 17', 'Spring Boot', 'JdbcTemplate', 'Oracle', 'Spring Security', 'React'],
    links: { repo: 'https://github.com/Estey144/HospiTrack', demo: '' },
    art: 'hospitrack',
    featured: true,
  },
  {
    id: 'mt7902-bluetooth-fix',
    title: 'MT7902 Bluetooth Fix for Linux',
    tagline: 'Kernel driver patches for an unsupported adapter',
    context: 'Open source · Linux kernel drivers',
    description:
      'The MediaTek MT7902 Bluetooth adapter on my laptop showed up in lsusb, but Linux never uploaded its firmware, so no controller appeared. Working through the kernel logs, with troubleshooting help from a friend, I patched the btusb and btmtk driver sources, rebuilt them with DKMS, and documented the whole fix for other CachyOS / Arch users.',
    highlights: [
      'Registered USB ID 13d3:3579 in btusb so the MediaTek firmware upload runs',
      'Added the MT7902 chip ID to btmtk’s firmware setup path',
      'Rebuilt and installed the patched modules with DKMS, including across kernel updates',
      'Wrote step-by-step docs and a troubleshooting guide, including a PipeWire microphone fix for Bluetooth earbuds',
    ],
    tech: ['C', 'Linux Kernel', 'DKMS', 'btusb / btmtk', 'CachyOS'],
    links: { repo: 'https://github.com/Estey144/Mediatek-mt7902-cachyos-limine-fix', demo: '' },
    art: 'mt7902',
    featured: true,
  },
  {
    id: 'bengali-hallucination',
    title: 'Bengali LLM Hallucination Detection',
    tagline: 'Transformer-based classification for Bengali',
    context: 'Datathon 2.0',
    description:
      'A machine learning project on detecting hallucinations in Bengali large-language-model responses, built for the Bengali LLM Hallucination Detection Challenge.',
    highlights: [
      'Bengali NLP pipeline and dataset preprocessing',
      'Transformer-based classification with XLM-RoBERTa',
      'Model fine-tuning and experimentation',
      'F1-score-based evaluation',
    ],
    tech: ['Python', 'Hugging Face Transformers', 'XLM-RoBERTa', 'NLP'],
    links: { repo: '', demo: '' },
    art: 'bengali-llm',
    featured: false,
  },
  {
    id: 'atmega32-voltmeter',
    title: 'ATmega32 Voltage Monitor',
    tagline: 'ADC-based embedded measurement system',
    context: 'Embedded systems',
    description:
      'An embedded system that reads an analog voltage through the ATmega32’s ADC and displays the measured value on a 16×2 character LCD.',
    highlights: [
      'ADC configuration and sampling',
      'Potentiometer interfacing as the analog source',
      '16×2 LCD interfacing',
      'Low-level microcontroller peripheral programming',
    ],
    tech: ['Embedded C', 'AVR', 'ATmega32', '16×2 LCD'],
    links: { repo: '', demo: '' },
    art: 'atmega',
    featured: false,
  },
]
