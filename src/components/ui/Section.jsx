export const Section = ({ id, title, children }) => (
  <section
    id={id}
    aria-labelledby={`${id}-title`}
    className="scroll-mt-16 border-t border-line py-12 md:py-16"
  >
    <div className="grid gap-6 md:grid-cols-[10rem_1fr] md:gap-10">
      <h2
        id={`${id}-title`}
        className="font-mono text-xs uppercase tracking-[0.18em] text-muted md:pt-1.5"
      >
        {title}
      </h2>
      <div className="min-w-0">{children}</div>
    </div>
  </section>
)
