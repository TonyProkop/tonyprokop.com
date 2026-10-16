import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon, Badge, ButtonLink, Footer } from "@/components/ui";
import { Gallery } from "@/components/work/Gallery";
import { ProjectFigure } from "@/components/work/ProjectFigure";
import { projects, type Project } from "@/data/projects";
import { navLinks, site } from "@/data/site";

const pad = (n: number) => String(n).padStart(2, "0");

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: `${project.title} · Tony Prokop`, description: project.summary };
}

function Eyebrow({ index, children }: { index: string; children: string }) {
  return (
    <p className="mono-label mb-3 text-muted">
      <b className="font-normal text-accent-text">{index}</b> / {children}
    </p>
  );
}

function StepLink({ project, dir }: { project: Project; dir: "prev" | "next" }) {
  return (
    <Link
      href={project.href}
      rel={dir}
      aria-label={`${dir === "prev" ? "Previous" : "Next"} project: ${project.title}`}
      className="grid size-11 place-items-center rounded-sm border border-line bg-surface text-muted transition-colors hover:border-line-strong hover:text-ink sm:size-[30px]"
    >
      <ArrowIcon className={dir === "prev" ? "rotate-180" : undefined} />
    </Link>
  );
}

function PagerCard({ project, dir }: { project: Project; dir: "prev" | "next" }) {
  const next = dir === "next";
  return (
    <Link
      href={project.href}
      rel={dir}
      className={`group flex items-center gap-5 rounded-md border border-line bg-surface p-5 shadow-[var(--shadow-highlight)] transition-[border-color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-line-strong ${next ? "sm:flex-row-reverse sm:text-right" : ""}`}
    >
      <span aria-hidden="true" className="relative hidden h-[90px] w-40 flex-none overflow-hidden rounded-xs border border-line bg-surface sm:block">
        <span className="pointer-events-none absolute top-0 left-0 block h-[432px] w-[768px] origin-top-left scale-[0.2083]">
          <ProjectFigure slug={project.slug} title={project.title} sizes="768px" />
        </span>
      </span>
      <span className="flex min-w-0 flex-1 flex-col gap-1.5">
        <span className={`mono-label inline-flex items-center gap-1.5 text-muted group-hover:text-accent-text ${next ? "sm:justify-end" : ""}`}>
          {next ? null : <ArrowIcon className="rotate-180" />}
          {next ? "Next" : "Previous"}
          {next ? <ArrowIcon /> : null}
        </span>
        <span className="text-[20px] leading-[26px] font-semibold tracking-[-0.02em] text-ink">{project.title}</span>
        <span className="text-body-sm line-clamp-2 text-muted">{project.description}</span>
      </span>
    </Link>
  );
}

export default async function ProjectPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) notFound();
  const p = projects[i];
  const prev = projects[(i + projects.length - 1) % projects.length];
  const next = projects[(i + 1) % projects.length];
  const hasLinks = Boolean(p.liveUrl || p.sourceUrl);

  return (
    <div className="mx-auto w-full max-w-site flex-1 border-x border-line">
      <main>
        <header id="top" className="flex flex-col gap-5 px-5 pt-18 pb-12 lg:px-12 lg:pt-28">
          <div className="flex items-center justify-between gap-4">
            <nav aria-label="Breadcrumb" className="mono-label flex items-center gap-2.5 text-muted">
              <Link href="/work" className="inline-flex items-center gap-1.5 hover:text-ink">
                <ArrowIcon size={12} className="rotate-180" />
                Work
              </Link>
              <span aria-hidden="true" className="text-faint">
                /
              </span>
              <span aria-current="page" className="text-ink">
                {p.title}
              </span>
            </nav>
            <div className="mono-label flex items-center gap-1 text-muted" role="group" aria-label={`Project ${pad(i + 1)} of ${pad(projects.length)}`}>
              <StepLink project={prev} dir="prev" />
              <span className="hidden px-2 sm:inline">
                {pad(i + 1)} / {pad(projects.length)}
              </span>
              <StepLink project={next} dir="next" />
            </div>
          </div>
          <div className="mono-label flex flex-wrap items-center gap-2.5 text-muted">
            <Badge tone={p.statusTone} dot>
              {p.status}
            </Badge>
            <span>{p.year}</span>
            <span aria-hidden="true">·</span>
            <span>{p.role}</span>
            <span aria-hidden="true">·</span>
            <span>{p.company}</span>
          </div>
          <h1 className="text-h1 max-w-[18ch] text-balance text-ink sm:text-[56px] sm:leading-[58px] sm:tracking-[-0.045em]">{p.title}</h1>
          <p className="text-lede max-w-2xl text-ink-soft">{p.summary}</p>
          <div className="flex flex-wrap items-center gap-2">
            {p.liveUrl ? (
              <ButtonLink href={p.liveUrl} target="_blank" variant="primary" size="lg">
                Visit live site ↗
              </ButtonLink>
            ) : null}
            {p.sourceUrl ? (
              <ButtonLink href={p.sourceUrl} target="_blank" variant="secondary" size="lg">
                View source ↗
              </ButtonLink>
            ) : null}
            {!hasLinks && p.noLink ? <span className="mono-label text-muted">{p.noLink}</span> : null}
            <ButtonLink href="#overview" variant="ghost" size="lg">
              Read the write-up ↓
            </ButtonLink>
          </div>
        </header>

        <section aria-label="Screenshots" className="px-5 pb-12 lg:px-12 lg:pb-16">
          <Gallery slug={p.slug} title={p.title} captions={p.figureCaptions} />
        </section>

        <div aria-label="Results" className="grid border-t border-line lg:grid-cols-3">
          {p.metrics.map((m, n) => (
            <div key={n} className="flex flex-col gap-1.5 border-t border-line px-5 py-5 first:border-t-0 sm:py-8 lg:border-t-0 lg:border-l lg:px-12 lg:first:border-l-0">
              <span className="text-[30px] leading-[34px] font-semibold tracking-[-0.035em] text-ink sm:text-[36px] sm:leading-10">{m.value}</span>
              <span className="text-body-sm text-muted">{m.label}</span>
            </div>
          ))}
        </div>

        <section id="overview" className="scroll-mt-20 border-t border-line px-5 py-16 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
            <div className="flex max-w-prose flex-col gap-14">
              <div>
                <Eyebrow index="01">overview</Eyebrow>
                <h2 className="text-h2 mb-4 text-ink">The problem</h2>
                <div className="flex flex-col gap-4">
                  {p.problem.map((t) => (
                    <p key={t} className="text-lede text-ink-soft">
                      {t}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <Eyebrow index="02">my contribution</Eyebrow>
                <h2 className="text-h2 mb-4 text-ink">What I did</h2>
                <ol className="border-b border-line">
                  {p.did.map((t, n) => (
                    <li key={t} className="grid grid-cols-[40px_minmax(0,1fr)] gap-2 border-t border-line py-3.5 text-ink-soft">
                      <b className="mono-label font-medium text-accent-text">{pad(n + 1)}</b>
                      <span>{t}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <Eyebrow index="03">decisions</Eyebrow>
                <h2 className="text-h2 mb-4 text-ink">Key decisions</h2>
                <div className="flex flex-col gap-3">
                  {p.decisions.map((d, n) => (
                    <div key={n} className="rounded-md border border-line bg-surface px-6 py-5 shadow-[var(--shadow-highlight)]">
                      <b className="mono-meta mb-1.5 block font-medium text-muted">Decision {pad(n + 1)}</b>
                      <h3 className="mb-1.5 text-[16px] leading-[22px] font-semibold text-ink">{d.title}</h3>
                      <p className="text-body text-ink-soft">{d.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside aria-label="At a glance" className="order-first self-start rounded-md border border-line bg-surface shadow-[var(--shadow-highlight)] lg:sticky lg:top-[calc(var(--nav-height,56px)+32px)] lg:order-none">
              <div className="flex flex-col gap-1.5 px-5 py-4">
                <span className="mono-meta text-muted">At a glance</span>
              </div>
              <dl>
                {(
                  [
                    ["Role", p.role],
                    ["Timeline", p.timeline],
                    ["Team", p.team],
                    ["Company", p.company],
                  ] as const
                ).map(([k, v]) => (
                  <div key={k} className="flex flex-col gap-1.5 border-t border-line px-5 py-4">
                    <dt className="mono-meta text-muted">{k}</dt>
                    <dd className="text-body-sm text-ink">{v}</dd>
                  </div>
                ))}
                <div className="flex flex-col gap-1.5 border-t border-line px-5 py-4">
                  <dt className="mono-meta text-muted">Stack</dt>
                  <dd className="mt-1 flex flex-wrap gap-1.5">
                    {p.stack.map((t) => (
                      <span key={t.label} className="text-body-sm inline-flex h-7 items-center gap-1.5 rounded-sm border border-line bg-bg pr-2.5 pl-2 text-ink-soft">
                        {t.icon ? <t.icon size={14} /> : null}
                        {t.label}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
              {hasLinks ? (
                <div className="flex flex-col gap-1.5 border-t border-line px-5 py-4">
                  <span className="mono-meta text-muted">Links</span>
                  {[p.liveUrl, p.sourceUrl].filter((u): u is string => Boolean(u)).map((u) => (
                    <a key={u} href={u} target="_blank" rel="noreferrer" className="text-body-sm flex items-center justify-between gap-2 text-ink hover:text-accent-text">
                      {u.replace(/^https?:\/\/(www\.)?/, "")}
                      <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              ) : null}
            </aside>
          </div>
        </section>

        {p.quote ? (
          <section className="border-t border-line bg-bg-subtle px-5 py-16 lg:px-12 lg:py-24">
            <blockquote className="m-0 flex max-w-[760px] flex-col gap-5">
              <span className="mono-label text-muted">
                <b className="font-normal text-accent-text">04</b> / from the team
              </span>
              <p className="text-[22px] leading-[30px] font-medium tracking-[-0.02em] text-balance text-ink sm:text-[28px] sm:leading-[38px]">“{p.quote.text}”</p>
              <footer className="mono-label text-muted">
                <b className="font-medium text-ink-soft">{p.quote.name}</b> · {p.quote.title}
              </footer>
            </blockquote>
          </section>
        ) : null}

        <section aria-label="More projects" className="border-t border-line px-5 py-16 lg:px-12">
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="mono-label text-muted">
              <b className="font-normal text-accent-text">{pad(i + 1)}</b> / {pad(projects.length)} projects
            </p>
            <Link href="/work" className="mono-label text-accent-text hover:text-ink">
              all projects →
            </Link>
          </div>
          <nav aria-label="Project navigation" className="grid gap-3 sm:grid-cols-2">
            <PagerCard project={prev} dir="prev" />
            <PagerCard project={next} dir="next" />
          </nav>
        </section>
      </main>
      <Footer name={site.name} links={navLinks} />
    </div>
  );
}
