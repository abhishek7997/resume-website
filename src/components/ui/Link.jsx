import { externalLinkProps } from "@/lib/links"

const LINK =
  "underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"

export const TextLink = ({ href, className = "", children, ...props }) => (
  <a
    href={href}
    className={`${LINK} ${className}`}
    {...externalLinkProps(href)}
    {...props}
  >
    {children}
  </a>
)

export const ExternalLink = ({ children, ...props }) => (
  <TextLink {...props}>
    {children}
    <span aria-hidden="true"> ↗</span>
    <span className="sr-only"> (opens in a new tab)</span>
  </TextLink>
)
