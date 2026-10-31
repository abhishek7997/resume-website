import { PROFILE, NAV_SECTIONS } from "@/data"
import { ButtonLink } from "@/components/ui"

export const Header = () => (
  <header className="sticky top-0 z-10 border-b border-line bg-bg">
    <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5 sm:px-8">
      <a href="#top" className="font-mono text-sm font-semibold">
        {PROFILE.displayName}
      </a>
      <nav aria-label="Primary" className="flex items-center sm:gap-1">
        {NAV_SECTIONS.map(({ id, title }) => (
          <a
            key={id}
            href={`#${id}`}
            className="flex min-h-11 items-center px-2 text-sm text-muted transition-colors hover:text-fg sm:px-3"
          >
            {title}
          </a>
        ))}
        <span className="ml-1 hidden sm:inline-flex">
          <ButtonLink href={PROFILE.resume} size="sm">
            Resume
          </ButtonLink>
        </span>
      </nav>
    </div>
  </header>
)
