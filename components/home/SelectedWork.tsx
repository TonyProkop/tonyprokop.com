import type { ReactNode } from "react";
import { ButtonLink, ProjectCard, SectionHeader } from "@/components/ui";
import { projects } from "@/data/projects";
import { Section } from "./Section";

const bars = [30, 45, 38, 62, 55, 80, 70];

function DashboardFigure() {
  return (
    <div className="h-full">
      <div className="pf-chrome">
        <i />
        <i />
        <i />
        <span>project-one - dashboard</span>
      </div>
      <div className="grid h-[calc(100%-29px)] grid-cols-[72px_minmax(0,1fr)]">
        <div className="flex flex-col gap-2 border-r border-line px-2.5 py-3">
          <div className="h-1.5 w-4/5 rounded-xs bg-ink-soft" />
          {[60, 70, 50].map((w) => (
            <div key={w} className="h-1.5 rounded-xs bg-line-strong" style={{ width: `${w}%` }} />
          ))}
        </div>
        <div className="flex flex-col gap-3 p-3.5">
          <div className="grid grid-cols-3 gap-2">
            <div className="h-10 rounded-sm border border-line" />
            <div className="h-10 rounded-sm border border-line" />
            <div className="h-10 rounded-sm border border-accent bg-accent-soft" />
          </div>
          <div className="flex grow items-end gap-1.5 pt-2">
            {bars.map((h, i) => (
              <div key={i} className={`flex-1 rounded-t-xs ${i === 5 ? "bg-accent" : "bg-line-strong"}`} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TerminalFigure() {
  return (
    <div className="mono-label h-full bg-code-bg px-4.5 py-4 text-code-text" style={{ lineHeight: "20px" }}>
      <div>
        <span className="text-code-key">$</span> ledger replay --since 7d
      </div>
      <div className="text-code-dim">› reading 1,284,019 events</div>
      <div className="text-code-dim">› 0 conflicts · 3 partitions</div>
      <div className="text-code-string">✓ replayed in 3.2s</div>
      <div className="mt-2.5">
        <span className="text-code-key">$</span> ledger diff prod staging
      </div>
      <div className="text-code-dim">› balances match across 48,210 accounts</div>
      <div>
        <span className="text-code-key">$</span> <span className="inline-block h-3.5 w-[7px] bg-accent align-[-2px]" />
      </div>
    </div>
  );
}

const figures: ReactNode[] = [<DashboardFigure key="dash" />, <TerminalFigure key="term" />];

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
        {projects.slice(0, 2).map((p, i) => (
          <ProjectCard
            key={p.index}
            title={p.title}
            description={p.description}
            index={p.index}
            figureLabel={`Fig ${String(i + 2).padStart(2, "0")}`}
            tags={p.tags}
            meta={p.meta}
            status={p.status}
            statusTone={p.statusTone}
            href={p.href}
          >
            {figures[i]}
          </ProjectCard>
        ))}
      </div>
    </Section>
  );
}
