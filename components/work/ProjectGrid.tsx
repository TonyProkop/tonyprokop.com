"use client";

import { useState } from "react";
import { Button, ProjectCard } from "@/components/ui";
import type { Project, ProjectCategory } from "@/data/projects";

/** Only plain, serialisable fields cross from the server page into this client component (no icon components). */
export type ProjectCardData = Pick<Project, "slug" | "index" | "title" | "description" | "tags" | "meta" | "status" | "statusTone" | "category" | "href">;
import { ProjectFigure } from "./ProjectFigure";

/** Filter chips plus the project cards. Figure numbers follow the full list so they stay stable while filtering. */
export function ProjectGrid({ projects, categories }: { projects: ProjectCardData[]; categories: ProjectCategory[] }) {
  const [active, setActive] = useState<ProjectCategory | "All">("All");
  const filters = ["All", ...categories] as const;
  const visible = projects.filter((p) => active === "All" || p.category === active);

  return (
    <>
      <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-1.5 px-5 pb-8 sm:px-12">
        {filters.map((f) => (
          <Button key={f} size="sm" variant={active === f ? "primary" : "ghost"} aria-pressed={active === f} onClick={() => setActive(f)}>
            {f}
          </Button>
        ))}
      </div>
      <section aria-label="Projects" className="border-t border-line px-5 py-12 sm:px-12">
        <div className="grid gap-3 lg:grid-cols-2">
          {visible.map((p) => (
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
      </section>
    </>
  );
}
