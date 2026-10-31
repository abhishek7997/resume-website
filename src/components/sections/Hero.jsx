import { PROFILE, SECTIONS } from "@/data"
import { ButtonLink } from "@/components/ui"

export const Hero = () => (
  <section id="top" className="scroll-mt-16 pb-12 pt-14 md:pb-16 md:pt-24">
    <p className="rise font-mono text-sm text-accent">
      {PROFILE.title} · {PROFILE.location}
    </p>
    <h1 className="rise rise-1 mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
      Backend engineer building scalable, distributed systems.
    </h1>
    <p className="rise rise-2 mt-6 max-w-2xl text-lg text-muted">
      3+ years building Java and Spring Boot microservices, event-driven Kafka
      pipelines and AWS deployments, taking them from design all the way to
      production.
    </p>
    <div className="rise rise-3 mt-8 flex flex-wrap gap-3">
      <ButtonLink href={`#${SECTIONS.projects.id}`} variant="primary">
        View projects
      </ButtonLink>
      <ButtonLink href={PROFILE.resume}>View resume</ButtonLink>
      <ButtonLink href={`#${SECTIONS.contact.id}`}>Get in touch</ButtonLink>
    </div>
  </section>
)
