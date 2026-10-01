import { ButtonLink, EntryRow, SectionHeader } from "@/components/ui";
import { experience } from "@/data/experience";
import { Section } from "./Section";

export function ExperiencePreview() {
  return (
    <Section id="experience">
      <SectionHeader
        index="04"
        eyebrow="experience"
        title="Where I've worked"
        action={
          <ButtonLink href="/experience" variant="ghost" arrow>
            Full experience
          </ButtonLink>
        }
      />
      <div className="pf-entries">
        {experience.map((r, i) => (
          <EntryRow key={i} href="/experience" date={r.dates} title={`${r.title} · ${r.company}`} subtitle={r.summary} aside={r.place} />
        ))}
      </div>
    </Section>
  );
}
