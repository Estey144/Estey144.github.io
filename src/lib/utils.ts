/** Join class names, skipping falsy values. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}

/** Resolve a /public asset against Vite's base path (works on GitHub Pages sub-paths). Full URLs pass through. */
export function assetUrl(path: string): string {
  if (/^(https?:)?\/\//.test(path) || path.startsWith('data:')) return path
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}

export function isExternal(href: string): boolean {
  return /^https?:\/\//.test(href)
}

/** Shared easing curve for all entrance animations. */
export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1]
