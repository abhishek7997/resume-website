import { SKILLS, SECTIONS } from "@/data"
import { Section } from "@/components/ui"

export const Skills = () => (
  <Section {...SECTIONS.skills}>
    <dl className="divide-y divide-line">
      {SKILLS.map(({ group, items }) => (
        <div
          key={group}
          className="grid gap-1 py-4 first:pt-0 last:pb-0 sm:grid-cols-[10rem_1fr] sm:gap-6"
        >
          <dt className="font-medium">{group}</dt>
          <dd className="text-muted">{items.join(", ")}</dd>
        </div>
      ))}
    </dl>
  </Section>
)
