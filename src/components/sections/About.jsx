import { ABOUT, SECTIONS } from "@/data"
import { Section } from "@/components/ui"

export const About = () => (
  <Section {...SECTIONS.about}>
    <div className="max-w-2xl space-y-4 text-lg">
      {ABOUT.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  </Section>
)
