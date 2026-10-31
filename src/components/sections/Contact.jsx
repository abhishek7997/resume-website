import { PROFILE, SECTIONS } from "@/data"
import { decodeEmail } from "@/lib/email"
import { ExternalLink, Section, TextLink } from "@/components/ui"

const email = decodeEmail(PROFILE.emailCodes)

export const Contact = () => (
  <Section {...SECTIONS.contact}>
    <p className="max-w-xl text-lg">
      The quickest way to reach me is email. I am also on LinkedIn and GitHub,
      and my resume has the full detail.
    </p>
    <p className="mt-6 break-all text-xl font-medium sm:text-2xl">
      <TextLink href={`mailto:${email}`}>{email}</TextLink>
    </p>
    <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
      <ExternalLink href={PROFILE.linkedin}>LinkedIn</ExternalLink>
      <ExternalLink href={PROFILE.github}>GitHub</ExternalLink>
      <ExternalLink href={PROFILE.resume}>Resume</ExternalLink>
    </p>
  </Section>
)
