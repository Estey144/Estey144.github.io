import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

/** Small monospace technology badge. */
export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border border-line bg-surface/50 px-2 py-[3px] font-mono text-[12px] leading-5 text-muted',
        className,
      )}
    >
      {children}
    </span>
  )
}

export function TagList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn('flex flex-wrap gap-1.5', className)}>
      {items.map((item) => (
        <li key={item}>
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  )
}
