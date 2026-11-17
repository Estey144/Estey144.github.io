import type { ReactNode } from 'react'
import { Settings2 } from 'lucide-react'

/**
 * Development-only reminder that a value is missing from src/data.
 * Renders nothing in production builds, so unconfigured items simply don't appear.
 */
export function ConfigHint({ children }: { children: ReactNode }) {
  if (!import.meta.env.DEV) return null
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-line-strong px-2 py-1 font-mono text-[11px] text-subtle">
      <Settings2 className="size-3" aria-hidden />
      {children}
    </span>
  )
}
