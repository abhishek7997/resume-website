import { PROFILE } from "@/data"

export const Footer = () => (
  <footer className="mx-auto max-w-5xl px-5 pb-10 pt-4 text-sm text-muted sm:px-8">
    © {new Date().getFullYear()} {PROFILE.name}
  </footer>
)
