import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Badge, ButtonLink, Button, Card, CodeBlock, EntryRow, Kbd, ProjectCard, SectionHeader, BrandIcon } from "@/components/ui";
import { CommandPalette, OpenCommandPaletteButton } from "@/components/command-palette";
import { paletteItems } from "@/data/palette";
import { projects } from "@/data/projects";
import { usesGroups } from "@/data/uses";
import { site } from "@/data/site";
import { FormDemo } from "./FormDemo";

export const metadata: Metadata = {
  title: "Design system — Tony Prokop",
  robots: { index: false, follow: false },
};

const COLORS = [
  "bg",
  "bg-subtle",
  "surface",
  "surface-hover",
  "line",
  "line-strong",
  "control-border",
  "ink",
  "ink-soft",
  "muted",
  "faint",
  "accent",
  "accent-text",
  "accent-soft",
  "success",
  "warning",
  "danger",
  "code-bg",
];

const TYPE = [
  ["text-display", "I build fast, careful software."],
  ["text-h1", "Selected work"],
  ["text-h2", "Things I’ve shipped recently"],
  ["text-h3", "A local-first sync engine"],
  ["text-lede", "Software engineer working on developer tools and the parts of the stack nobody sees until they break."],
  ["text-body", "Rewrote the sync layer so edits apply locally first and reconcile in the background."],
  ["text-body-sm", "Form hints, footnotes, secondary card text."],
] as const;

function Section({ index, title, children }: { index: string; title: string; children: ReactNode }) {
  return (
    <section className="border-t border-line px-5 py-16 sm:px-12">
      <SectionHeader index={index} eyebrow="design system" title={title} />
      {children}
    </section>
  );
}

/**
 * /design — a living preview of the tokens and components. Not linked from the site
 * and excluded from search engines. Delete or protect it before launch if you prefer.
 */
export default function DesignPage() {
  return (
    <div className="min-h-screen w-full bg-bg text-ink">
      <main className="mx-auto max-w-site border-x border-line">
        <header className="flex flex-col gap-5 px-5 pb-16 pt-28 sm:px-12">
          <div className="flex">
            <Badge tone="success" dot>
              Open to new roles
            </Badge>
          </div>
          <h1 className="text-display max-w-[14ch] text-ink">Portfolio design system</h1>
          <p className="text-lede max-w-xl text-ink-soft">
            Tokens and components ported from the design mocks. See DESIGN.md for the rules and design/mocks for every page.
          </p>
          <div className="flex flex-wrap gap-2">
            <OpenCommandPaletteButton variant="primary" size="lg" kbd="⌘K">
              Open command palette
            </OpenCommandPaletteButton>
            <OpenCommandPaletteButton tab="compose" variant="secondary" size="lg">
              Compose a message
            </OpenCommandPaletteButton>
          </div>
        </header>

        <Section index="01" title="Colour">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {COLORS.map((c) => (
              <div key={c} className="flex flex-col gap-2">
                <span className="h-16 rounded-md border border-line" style={{ background: `var(--${c})` }} />
                <span className="mono-label text-muted">{c}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section index="02" title="Type">
          <div className="flex flex-col divide-y divide-line border-y border-line">
            {TYPE.map(([cls, sample]) => (
              <div key={cls} className="grid gap-2 py-5 sm:grid-cols-[160px_1fr] sm:items-baseline">
                <span className="mono-label text-muted">{cls}</span>
                <span className={`${cls} text-ink`}>{sample}</span>
              </div>
            ))}
            <div className="grid gap-2 py-5 sm:grid-cols-[160px_1fr] sm:items-baseline">
              <span className="mono-label text-muted">mono-label / meta</span>
              <span className="flex flex-wrap gap-6">
                <span className="mono-label text-muted">01 / selected work</span>
                <span className="mono-meta text-muted">2026 · TypeScript · Rust</span>
              </span>
            </div>
          </div>
        </Section>

        <Section index="03" title="Actions">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <ButtonLink variant="primary" href="/work" arrow>
                View my work
              </ButtonLink>
              <Button variant="secondary">Résumé</Button>
              <Button variant="ghost">GitHub</Button>
              <ButtonLink variant="accent" href="/contact" arrow>
                Get in touch
              </ButtonLink>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Button variant="primary" size="sm">
                Contact
              </Button>
              <Button variant="secondary" size="lg" arrow>
                Read the case study
              </Button>
              <Button variant="secondary" disabled>
                Disabled
              </Button>
              <span className="text-body-sm text-muted">
                press <Kbd>G</Kbd> then <Kbd>W</Kbd> to jump to work
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge>TypeScript</Badge>
              <Badge>Rust</Badge>
              <Badge tone="accent">New</Badge>
              <Badge tone="success" dot>
                Live
              </Badge>
              <Badge tone="warning" dot>
                In progress
              </Badge>
            </div>
          </div>
        </Section>

        <Section index="04" title="Cards">
          <div className="grid gap-3 md:grid-cols-3">
            <Card eyebrow="Fig 01" title="Measure first">
              I don’t optimise what I haven’t profiled. Most slow things are slow for one boring reason.
            </Card>
            <Card eyebrow="Fig 02" title="Write it down" href="/about">
              Design docs, decision logs, postmortems. Writing is how teams think in parallel.
            </Card>
            <Card eyebrow="Fig 03" title="Small, safe steps">
              Feature flags and incremental rollouts over big-bang launches.
            </Card>
          </div>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {projects.slice(0, 2).map((p, i) => (
              <ProjectCard
                key={p.index}
                index={p.index}
                title={p.title}
                description={p.description}
                tags={p.tags}
                meta={p.meta}
                status={p.status}
                statusTone={p.statusTone}
                href={p.href}
                figureLabel={`Fig 0${i + 5}`}
              />
            ))}
          </div>
        </Section>

        <Section index="05" title="Forms">
          <div className="max-w-2xl">
            <FormDemo />
          </div>
        </Section>

        <Section index="06" title="Content">
          <div className="grid gap-3 md:grid-cols-2">
            <CodeBlock
              filename="about.ts"
              highlight
              lineNumbers
              code={`export const me = {\n  name: "${site.name}",\n  role: "${site.role}",\n  based: "Omaha, NE",\n  openTo: ["full-time", "contract"],\n}`}
            />
            <CodeBlock highlight code={"$ npx create-next-app@latest\n$ npm run dev\n# ready in 212ms"} />
          </div>
          <div className="pf-entries mt-10">
            <EntryRow date="2024 — now" title="Senior Software Engineer · [Company]" subtitle="Lead on the sync and storage platform." aside="Omaha" href="/experience" />
            <EntryRow date="Sep 12, 2026" title="The case for boring queues" subtitle="Why I keep reaching for Postgres." aside="6 min" href="/about" />
          </div>
          <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-6">
            {usesGroups[0].items.concat(usesGroups[1].items).slice(0, 6).map((it) => (
              <span key={it.label} className="flex aspect-square flex-col items-center justify-center gap-3 rounded-md border border-line bg-surface text-ink-soft">
                <BrandIcon name={it.icon} size={30} />
                <span className="text-body-sm">{it.label}</span>
              </span>
            ))}
          </div>
        </Section>
      </main>
      <CommandPalette items={paletteItems} owner={{ name: site.name, initials: site.initials, email: site.email }} resumeHref={site.resumeHref} />
    </div>
  );
}
