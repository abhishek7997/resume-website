import { FEATURED_PROJECTS, OTHER_PROJECTS, SECTIONS } from "@/data"
import { ExternalLink, Section } from "@/components/ui"

const ProjectLinks = ({ links }) => (
  <p className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
    {links.map(({ label, href }) => (
      <ExternalLink key={href} href={href}>
        {label}
      </ExternalLink>
    ))}
  </p>
)

const FeaturedProject = ({ title, summary, details, stack, links }) => (
  <article className="py-8 first:pt-0">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="mt-2 max-w-2xl text-muted">{summary}</p>
    <dl className="mt-5 grid max-w-3xl gap-x-6 gap-y-3 sm:grid-cols-[7rem_1fr]">
      {details.map(({ term, text }) => (
        <div key={term} className="contents">
          <dt className="font-mono text-xs uppercase tracking-wider text-muted sm:pt-1">
            {term}
          </dt>
          <dd>{text}</dd>
        </div>
      ))}
    </dl>
    <p className="mt-5 font-mono text-sm text-accent">{stack.join(" · ")}</p>
    <div className="mt-3">
      <ProjectLinks links={links} />
    </div>
  </article>
)

const CompactProject = ({ title, description, stack, links }) => (
  <li className="grid gap-x-8 gap-y-2 py-5 md:grid-cols-[1fr_auto]">
    <div>
      <p className="font-medium">
        {title}
        <span className="ml-3 font-mono text-xs font-normal text-muted">
          {stack.join(", ")}
        </span>
      </p>
      <p className="mt-1 max-w-2xl text-muted">{description}</p>
    </div>
    <div className="md:pt-0.5 md:text-right">
      <ProjectLinks links={links} />
    </div>
  </li>
)

export const Projects = () => (
  <Section {...SECTIONS.projects}>
    <div className="divide-y divide-line">
      {FEATURED_PROJECTS.map((project) => (
        <FeaturedProject key={project.id} {...project} />
      ))}
    </div>

    <h3 className="mt-6 border-t border-line pt-8 font-mono text-xs uppercase tracking-[0.18em] text-muted">
      More projects
    </h3>
    <ul className="mt-2 divide-y divide-line">
      {OTHER_PROJECTS.map((project) => (
        <CompactProject key={project.id} {...project} />
      ))}
    </ul>
  </Section>
)
