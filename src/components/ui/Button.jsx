import { externalLinkProps } from "@/lib/links"

const BASE =
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors"

const VARIANTS = {
  primary: "bg-fg text-bg hover:bg-accent",
  secondary: "border border-line hover:border-accent hover:text-accent",
}

const SIZES = {
  md: "min-h-11 px-5",
  sm: "min-h-9 px-3",
}

export const ButtonLink = ({
  href,
  variant = "secondary",
  size = "md",
  className = "",
  children,
  ...props
}) => (
  <a
    href={href}
    className={`${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
    {...externalLinkProps(href)}
    {...props}
  >
    {children}
  </a>
)
