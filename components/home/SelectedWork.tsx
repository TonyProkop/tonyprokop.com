import { ButtonLink, ProjectCard, SectionHeader } from "@/components/ui";
import { projects } from "@/data/projects";
import { ProjectFigure } from "@/components/work/ProjectFigure";
import { Section } from "./Section";

export function SelectedWork() {
  return (
    <Section id="work">
      <SectionHeader
        index="02"
        eyebrow="selected work"
        title="Things I've shipped recently"
        lede="Two recent favourites. Every project has a write-up of what I built, what broke and what I'd do differently."
        action={
          <ButtonLink href="/work" variant="ghost" arrow>
            All projects
          </ButtonLink>
        }
      />
      <div className="grid gap-3 lg:grid-cols-2">
        {projects.slice(0, 2).map((p) => (
          <ProjectCard
            key={p.slug}
            title={p.title}
            description={p.description}
            index={p.index}
            figureLabel={`Fig ${p.index}`}
            tags={p.tags}
            meta={p.meta}
            status={p.status}
            statusTone={p.statusTone}
            href={p.href}
          >
            <ProjectFigure slug={p.slug} title={p.title} />
          </ProjectCard>
        ))}
      </div>
    </Section>
  );
}
