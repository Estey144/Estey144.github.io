import { useState } from 'react'
import { profile } from '../../data/profile'
import { assetUrl, cn } from '../../lib/utils'

interface ProfileImageProps {
  size: 'sm' | 'lg'
  className?: string
}

/**
 * Profile photo with a monogram fallback.
 * To use your photo: put it in /public (e.g. public/profile.jpg) and set `photo: 'profile.jpg'` in src/data/profile.ts.
 */
export function ProfileImage({ size, className }: ProfileImageProps) {
  const [failed, setFailed] = useState(false)
  const file = size === 'sm' ? profile.avatar || profile.photo : profile.photo
  const src = file ? assetUrl(file) : ''
  const showPhoto = src !== '' && !failed

  const frame =
    size === 'sm'
      ? 'size-9 rounded-full text-[11px]'
      : 'aspect-[4/5] w-full rounded-2xl text-7xl'

  if (showPhoto) {
    return (
      <img
        src={src}
        alt={`Portrait of ${profile.name}`}
        onError={() => setFailed(true)}
        loading={size === 'sm' ? 'eager' : 'lazy'}
        decoding="async"
        width={size === 'sm' ? 36 : 480}
        height={size === 'sm' ? 36 : 600}
        className={cn(
          frame,
          'border border-line object-cover transition-[filter] duration-700 ease-out dark:brightness-[0.92]',
          profile.photoMonochrome && 'grayscale hover:grayscale-0',
          className,
        )}
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={`${profile.name} monogram`}
      className={cn(
        frame,
        'relative flex items-center justify-center overflow-hidden border border-line bg-elevated select-none',
        className,
      )}
    >
      {size === 'lg' && <div aria-hidden className="bg-grid absolute inset-0 opacity-70" />}
      <span
        className={cn(
          'relative',
          size === 'sm' ? 'font-mono font-medium text-accent' : 'font-serif text-fg italic',
        )}
      >
        {profile.initials}
      </span>
      {size === 'lg' && (
        <span className="absolute bottom-4 left-4 font-mono text-[11px] tracking-wider text-subtle uppercase">
          {profile.universityShort} · {profile.batch}
        </span>
      )}
    </div>
  )
}
