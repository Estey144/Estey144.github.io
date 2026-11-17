import type { ReactNode } from 'react'
import type { ProjectArt as ArtKey } from '../../data/types'
import { cn } from '../../lib/utils'

/*
 * Hand-built vector illustrations, one per project. Every color comes from the theme tokens,
 * so they adapt to dark/light mode automatically. viewBox is 480×300 for all of them.
 */

type Tone = 'default' | 'accent' | 'accent2'

const rectTone: Record<Tone, string> = {
  default: 'fill-surface stroke-line-strong',
  accent: 'fill-accent-soft stroke-accent',
  accent2: 'fill-accent-2-soft stroke-accent-2',
}
const textTone: Record<Tone, string> = { default: 'fill-fg', accent: 'fill-accent', accent2: 'fill-accent-2' }
const solidTone: Record<Tone, string> = { default: 'fill-subtle', accent: 'fill-accent', accent2: 'fill-accent-2' }

interface NodeProps {
  x: number
  y: number
  w: number
  h: number
  title: string
  sub?: string
  tone?: Tone
  size?: number
}

function Node({ x, y, w, h, title, sub, tone = 'default', size = 12 }: NodeProps) {
  const cy = y + h / 2
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={7} strokeWidth={1} className={rectTone[tone]} />
      <text
        x={x + w / 2}
        y={sub ? cy - 2 : cy + size * 0.35}
        textAnchor="middle"
        fontSize={size}
        className={cn('font-mono', textTone[tone])}
      >
        {title}
      </text>
      {sub && (
        <text x={x + w / 2} y={cy + 13} textAnchor="middle" fontSize={10} className="fill-subtle font-mono">
          {sub}
        </text>
      )}
    </g>
  )
}

function Label({
  x,
  y,
  children,
  anchor = 'start',
  className,
  size = 10,
}: {
  x: number
  y: number
  children: ReactNode
  anchor?: 'start' | 'middle' | 'end'
  className?: string
  size?: number
}) {
  return (
    <text x={x} y={y} textAnchor={anchor} fontSize={size} letterSpacing="0.08em" className={cn('fill-subtle font-mono', className)}>
      {children}
    </text>
  )
}

function Flow({ d, tone = 'accent' }: { d: string; tone?: Exclude<Tone, 'default'> }) {
  return <path d={d} fill="none" strokeWidth={1.3} className={cn('flow', tone === 'accent' ? 'stroke-accent' : 'stroke-accent-2')} />
}

function Wire({ d, dashed = false }: { d: string; dashed?: boolean }) {
  return <path d={d} fill="none" strokeWidth={1} strokeDasharray={dashed ? '3 4' : undefined} className="stroke-line-strong" />
}

function Arrow({ x, y, dir, tone = 'accent' }: { x: number; y: number; dir: 'right' | 'left' | 'up' | 'down'; tone?: Tone }) {
  const pts = {
    right: `${x - 6},${y - 4} ${x},${y} ${x - 6},${y + 4}`,
    left: `${x + 6},${y - 4} ${x},${y} ${x + 6},${y + 4}`,
    down: `${x - 4},${y - 6} ${x},${y} ${x + 4},${y - 6}`,
    up: `${x - 4},${y + 6} ${x},${y} ${x + 4},${y + 6}`,
  }[dir]
  return <polygon points={pts} className={solidTone[tone]} />
}

/* ───────────────────────── HospiTrack ───────────────────────── */
function HospiTrackArt() {
  return (
    <g>
      <Label x={24} y={34}>REQUEST FLOW</Label>
      <Node x={24} y={48} w={120} h={60} title="React.js" sub="client" />
      <Node x={180} y={48} w={120} h={60} title="Spring Boot" sub="REST · MVC" tone="accent" />
      <Node x={336} y={48} w={120} h={60} title="Oracle 19c" sub="via JDBC" />
      <Flow d="M144 78 H174" />
      <Arrow x={180} y={78} dir="right" />
      <Flow d="M300 78 H330" />
      <Arrow x={336} y={78} dir="right" />

      <Label x={24} y={160}>RELATIONAL SCHEMA</Label>
      <Node x={24} y={174} w={112} h={44} title="PATIENT" size={11} />
      <Node x={184} y={174} w={112} h={44} title="APPOINTMENT" size={11} tone="accent2" />
      <Node x={344} y={174} w={112} h={44} title="DOCTOR" size={11} />
      <Wire d="M136 196 H184" />
      <Wire d="M296 196 H344" />
      <Label x={142} y={190}>1</Label>
      <Label x={176} y={190}>N</Label>
      <Label x={302} y={190}>N</Label>
      <Label x={336} y={190}>1</Label>

      <Label x={24} y={262} className="fill-muted" size={11}>
        /patients
      </Label>
      <Label x={118} y={262} className="fill-muted" size={11}>
        /doctors
      </Label>
      <Label x={204} y={262} className="fill-muted" size={11}>
        /appointments
      </Label>
      <Label x={456} y={262} anchor="end">
        JSON · HTTP
      </Label>
    </g>
  )
}

/* ───────────────────────── Somonnoy ───────────────────────── */
const SERIES = [120, 112, 118, 104, 110, 62, 108, 116, 124, 120, 130, 136, 196, 140, 146, 150, 158, 162]
const FORECAST = [162, 168, 174, 181, 187, 193, 199]
const sx = (i: number) => 36 + i * (408 / 23)
const toPoints = (values: number[], offset = 0) => values.map((v, i) => `${sx(i + offset).toFixed(1)},${v}`).join(' ')

function SomonnoyArt() {
  return (
    <g>
      <Label x={36} y={34}>LIQUIDITY</Label>
      {[90, 130, 170].map((y) => (
        <line key={y} x1={36} x2={444} y1={y} y2={y} strokeWidth={1} className="stroke-line" />
      ))}
      <rect x={36} y={178} width={408} height={56} className="fill-accent-soft" />
      <line x1={36} x2={444} y1={178} y2={178} strokeWidth={1} strokeDasharray="3 4" className="stroke-accent" />
      <Label x={440} y={226} anchor="end" className="fill-accent">
        SHORTAGE RISK
      </Label>

      <polyline points={toPoints(SERIES)} fill="none" strokeWidth={1.6} strokeLinejoin="round" className="stroke-accent-2" />
      <polyline
        points={toPoints(FORECAST, SERIES.length - 1)}
        fill="none"
        strokeWidth={1.6}
        className="flow stroke-accent-2"
      />

      {[5, 12].map((i) => (
        <g key={i}>
          <circle cx={sx(i)} cy={SERIES[i]} r={10} fill="none" strokeWidth={1} className="stroke-accent" />
          <circle cx={sx(i)} cy={SERIES[i]} r={3.5} className="fill-accent" />
        </g>
      ))}
      <Label x={sx(5) + 16} y={58} className="fill-accent">
        unusual activity · flagged for review
      </Label>
      <Label x={444} y={124} anchor="end" className="fill-accent-2">
        forecast · lightgbm
      </Label>

      <line x1={36} x2={444} y1={250} y2={250} strokeWidth={1} className="stroke-line-strong" />
      {Array.from({ length: 12 }, (_, i) => (
        <line key={i} x1={sx(i * 2)} x2={sx(i * 2)} y1={250} y2={255} strokeWidth={1} className="stroke-line-strong" />
      ))}
      <Label x={36} y={276}>providers · time</Label>
    </g>
  )
}

/* ───────────────────── Bengali hallucination ───────────────────── */
function Chip({ x, y, w, text, tone = 'default' }: { x: number; y: number; w: number; text: string; tone?: Tone }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={28} rx={6} strokeWidth={1} className={rectTone[tone]} />
      <text x={x + w / 2} y={y + 19} textAnchor="middle" fontSize={13} className={cn('font-bn', textTone[tone])}>
        {text}
      </text>
    </g>
  )
}

function BengaliArt() {
  return (
    <g>
      <Label x={24} y={34}>CONTEXT</Label>
      <Chip x={24} y={44} w={56} text="ঢাকা" />
      <Chip x={86} y={44} w={104} text="বাংলাদেশের" />
      <Chip x={196} y={44} w={82} text="রাজধানী" />

      <Label x={24} y={104}>RESPONSE</Label>
      <Chip x={24} y={114} w={56} text="ঢাকা" />
      <Chip x={86} y={114} w={60} text="১৯৪৭" tone="accent" />
      <Chip x={152} y={114} w={56} text="সালে" tone="accent" />
      <Chip x={214} y={114} w={92} text="প্রতিষ্ঠিত" />
      <path d="M86 150 v5 H208 v-5" fill="none" strokeWidth={1} className="stroke-accent" />
      <Label x={147} y={170} anchor="middle" className="fill-accent">
        unsupported claim
      </Label>

      <Flow d="M52 142 V194" tone="accent2" />
      <Arrow x={52} y={200} dir="down" tone="accent2" />
      <Node x={24} y={200} w={150} h={56} title="XLM-RoBERTa" sub="encoder" tone="accent2" />
      <Flow d="M174 228 H190" tone="accent2" />
      <Arrow x={196} y={228} dir="right" tone="accent2" />
      <Node x={196} y={200} w={108} h={56} title="[CLS]" sub="classifier head" />
      <Flow d="M304 228 H320" />
      <Arrow x={326} y={228} dir="right" />

      <Label x={334} y={212} className="fill-muted">
        faithful
      </Label>
      <rect x={334} y={218} width={34} height={6} rx={3} className="fill-line-strong" />
      <Label x={334} y={242} className="fill-accent">
        hallucinated
      </Label>
      <rect x={334} y={248} width={118} height={6} rx={3} className="fill-accent" />
    </g>
  )
}

/* ───────────────────────── MT7902 Bluetooth fix ───────────────────────── */
function Mt7902Art() {
  return (
    <g>
      <Label x={24} y={34}>DRIVER PATCH</Label>
      <Node x={24} y={44} w={128} h={52} title="USB 13d3:3579" sub="MT7902 adapter" size={11} />
      <Node x={176} y={44} w={128} h={52} title="btusb.c" sub="+ USB device ID" tone="accent" />
      <Node x={328} y={44} w={128} h={52} title="btmtk.c" sub="+ case 0x7902" tone="accent" />
      <Flow d="M152 70 H170" />
      <Arrow x={176} y={70} dir="right" />
      <Flow d="M304 70 H322" />
      <Arrow x={328} y={70} dir="right" />

      <Flow d="M392 96 V136" tone="accent2" />
      <Arrow x={392} y={142} dir="down" tone="accent2" />
      <Label x={24} y={132}>AFTER DKMS REBUILD</Label>
      <Node x={328} y={142} w={128} h={52} title="firmware" sub="upload runs" tone="accent2" />
      <Node x={176} y={142} w={128} h={52} title="hci0" sub="controller up" />
      <Node x={24} y={142} w={128} h={52} title="bluetoothctl" sub="list ✓" tone="accent2" />
      <Flow d="M328 168 H310" tone="accent2" />
      <Arrow x={304} y={168} dir="left" tone="accent2" />
      <Flow d="M176 168 H158" tone="accent2" />
      <Arrow x={152} y={168} dir="left" tone="accent2" />

      <rect x={24} y={214} width={432} height={64} rx={7} strokeWidth={1} className="fill-surface stroke-line" />
      <text x={40} y={240} fontSize={11} className="fill-subtle font-mono" style={{ textDecoration: 'line-through' }}>
        − hci0: Opcode 0x0c03 failed: -110
      </text>
      <text x={40} y={262} fontSize={11} className="fill-accent-2 font-mono">
        + controller registered · firmware loaded
      </text>
    </g>
  )
}

/* ───────────────────────── Nexara ───────────────────────── */
const POINTS: Array<[number, number]> = [
  [52, 70], [88, 96], [64, 128], [110, 74], [232, 70], [206, 98], [250, 120], [58, 180], [84, 222],
  [46, 250], [120, 252], [212, 238], [244, 206], [256, 254], [98, 170], [234, 160], [192, 216], [150, 92], [70, 100],
]
const QUERY: [number, number] = [150, 160]
const NEIGHBORS: Array<[number, number]> = [[128, 138], [178, 148], [160, 192]]

function NexaraArt() {
  return (
    <g>
      <Label x={24} y={34}>EMBEDDING SPACE · COHERE</Label>
      <rect x={24} y={44} width={252} height={232} rx={10} fill="none" strokeWidth={1} className="stroke-line" />
      {POINTS.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={2.5} className="fill-subtle" />
      ))}
      <circle cx={QUERY[0]} cy={QUERY[1]} r={46} strokeWidth={1} strokeDasharray="3 4" className="fill-accent-soft stroke-accent" />
      {NEIGHBORS.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <line x1={QUERY[0]} y1={QUERY[1]} x2={x} y2={y} strokeWidth={1} className="stroke-accent" />
          <circle cx={x} cy={y} r={4} className="fill-accent-2" />
        </g>
      ))}
      <circle cx={QUERY[0]} cy={QUERY[1]} r={5} className="fill-accent" />
      <Label x={200} y={118} className="fill-accent">
        top-k
      </Label>
      <Label x={268} y={266} anchor="end">
        qdrant
      </Label>

      <Flow d="M196 160 C 250 160, 262 81, 304 81" tone="accent2" />
      <Arrow x={310} y={81} dir="right" tone="accent2" />
      <Node x={310} y={56} w={146} h={50} title="retrieved" sub="context" tone="accent2" />
      <Flow d="M383 106 V130" />
      <Arrow x={383} y={136} dir="down" />
      <Node x={310} y={136} w={146} h={56} title="GPT-4o mini" sub="LLM" tone="accent" />
      <Flow d="M383 192 V216" />
      <Arrow x={383} y={222} dir="down" />
      <Node x={310} y={222} w={146} h={44} title="response" />
    </g>
  )
}

/* ───────────────────────── ATmega32 ───────────────────────── */
function AtmegaArt() {
  const pins = Array.from({ length: 10 }, (_, i) => 72 + i * 18)
  return (
    <g>
      {/* Potentiometer */}
      <Label x={72} y={60} anchor="middle">
        VCC
      </Label>
      <Wire d="M72 66 V88" />
      <polyline
        points="72,88 64,94 80,104 64,114 80,124 64,134 80,144 64,154 72,160"
        fill="none"
        strokeWidth={1.2}
        strokeLinejoin="round"
        className="stroke-fg"
      />
      <Wire d="M72 160 V184" />
      <Wire d="M60 184 H84 M64 189 H80 M68 194 H76" />
      <Label x={72} y={212} anchor="middle">
        GND
      </Label>
      <Label x={36} y={130} anchor="middle" className="fill-muted">
        POT
      </Label>
      <Arrow x={84} y={126} dir="left" />
      <Flow d="M90 126 H162" />
      <Arrow x={168} y={126} dir="right" />

      {/* Chip */}
      {pins.map((y, i) => (
        <g key={y}>
          <line x1={168} x2={180} y1={y} y2={y} strokeWidth={1.2} className={i === 3 ? 'stroke-accent' : 'stroke-line-strong'} />
          <line x1={300} x2={312} y1={y} y2={y} strokeWidth={1.2} className="stroke-line-strong" />
        </g>
      ))}
      <rect x={180} y={56} width={120} height={196} rx={6} strokeWidth={1} className="fill-surface stroke-line-strong" />
      <path d="M228 56 A12 12 0 0 0 252 56" fill="none" strokeWidth={1} className="stroke-line-strong" />
      <text x={188} y={129} fontSize={9} className="fill-accent font-mono">
        ADC
      </text>
      <text x={240} y={154} textAnchor="middle" fontSize={13} className="fill-fg font-mono">
        ATmega32
      </text>
      <text x={240} y={171} textAnchor="middle" fontSize={10} className="fill-subtle font-mono">
        AVR · 8-bit
      </text>

      {/* LCD */}
      <Wire d="M312 126 H336 M312 144 H336" />
      <Flow d="M312 162 H336" tone="accent2" />
      <rect x={336} y={100} width={124} height={76} rx={6} strokeWidth={1} className="fill-surface stroke-line-strong" />
      <rect x={346} y={112} width={104} height={52} rx={3} strokeWidth={1} className="fill-accent-2-soft stroke-accent-2" />
      <text x={355} y={133} fontSize={11} letterSpacing="0.1em" className="fill-accent-2 font-mono">
        VOLTAGE
      </text>
      <text x={355} y={154} fontSize={15} className="fill-accent-2 font-mono">
        3.30 V
      </text>
      <Label x={398} y={196} anchor="middle">
        16×2 LCD
      </Label>

      <text x={240} y={284} textAnchor="middle" fontSize={11} className="fill-muted font-mono">
        V = ADC × V_ref / 1023
      </text>
    </g>
  )
}

const ART: Record<ArtKey, () => ReactNode> = {
  hospitrack: HospiTrackArt,
  somonnoy: SomonnoyArt,
  'bengali-llm': BengaliArt,
  nexara: NexaraArt,
  mt7902: Mt7902Art,
  atmega: AtmegaArt,
}

export function ProjectArt({ art, title, className }: { art: ArtKey; title: string; className?: string }) {
  const Art = ART[art]
  return (
    <svg viewBox="0 0 480 300" role="img" aria-label={`Illustration: ${title}`} className={cn('h-auto w-full', className)}>
      <Art />
    </svg>
  )
}
