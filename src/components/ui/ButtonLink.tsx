import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { cn, isExternal } from '../../lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'sm'

interface ButtonLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> {
  href: string
  variant?: Variant
  size?: Size
  children: ReactNode
  className?: string
}

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-accent-fg hover:bg-accent/85',
  secondary: 'border border-line-strong text-fg hover:border-fg/35 hover:bg-surface',
  ghost: 'text-muted hover:text-fg hover:bg-surface',
}

const sizes: Record<Size, string> = {
  md: 'h-11 px-5 text-sm',
  sm: 'h-9 px-3.5 text-[13px]',
}

/** Anchor styled as a button. External links open in a new tab safely. */
export function ButtonLink({ href, variant = 'primary', size = 'md', children, className, ...rest }: ButtonLinkProps) {
  const external = isExternal(href)
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(
        'group inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-colors duration-200',
        variants[variant],
        sizes[size],
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  )
}
