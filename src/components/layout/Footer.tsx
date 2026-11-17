import { navItems, profile, socialLinks } from '../../data/profile'
import { Container } from '../ui/Container'
import { SocialIcon } from '../ui/SocialIcon'

export function Footer() {
  const year = new Date().getFullYear()
  const links = socialLinks.filter((s) => s.url)

  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-sm text-fg">
            <span className="text-subtle">~/</span>
            {profile.handle}
          </p>
          <p className="mt-2 text-sm text-muted">
            © {year} {profile.name}
          </p>
          <p className="mt-1 text-xs text-subtle">Designed &amp; built with React, TypeScript and Tailwind CSS.</p>
        </div>

        <div className="flex flex-col gap-4 sm:items-end">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="transition-colors hover:text-fg">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {links.length > 0 && (
            <ul className="flex gap-1">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="inline-flex size-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface hover:text-fg"
                  >
                    <SocialIcon id={link.id} className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </footer>
  )
}
