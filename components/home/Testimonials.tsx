import { Card, SectionHeader } from "@/components/ui";
import { Section } from "./Section";

const quotes = [
  { initials: "AB", text: "Tony Prokop is the engineer you hand the scary project to. They turned a rewrite everyone was afraid of into a series of small, boring, safe releases." },
  { initials: "CD", text: "Rare mix of product sense and systems depth. Their design docs became the template the whole org now uses." },
  { initials: "EF", text: "The best mentor I've had. Patient in code review, fast in an incident and always the first to write the postmortem." },
];

export function Testimonials() {
  return (
    <Section id="testimonials" subtle>
      <SectionHeader index="05" eyebrow="kind words" title="What people I've worked with say" />
      <div className="grid gap-3 lg:grid-cols-3">
        {quotes.map((q, i) => (
          <Card key={q.initials} eyebrow={`Fig 06.${i + 1}`}>
            <figure className="m-0 flex h-full flex-col gap-6">
              <blockquote className="m-0 text-ink">
                <p className="text-h3 m-0 font-normal">“{q.text}”</p>
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3">
                <span className="mono-label grid size-9 flex-none place-items-center rounded-full border border-line-strong bg-surface-hover text-ink-soft">{q.initials}</span>
                <span className="flex flex-col">
                  <span className="text-body-sm font-medium text-ink">[Name]</span>
                  <span className="mono-label text-muted">[Title], [Company]</span>
                </span>
              </figcaption>
            </figure>
          </Card>
        ))}
      </div>
    </Section>
  );
}
