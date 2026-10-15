import type { Metadata } from "next";
import { BrandIcon, Footer, TerminalIcon } from "@/components/ui";
import { navLinks, site } from "@/data/site";
import { hardware, usesGroups } from "@/data/uses";

export const metadata: Metadata = {
  title: "Uses · Tony Prokop",
  description: "The languages, tools and apps I reach for every day.",
};

const pad = (n: number) => String(n).padStart(2, "0");

function GroupHeading({ index, title, count }: { index: number; title: string; count: number }) {
  return (
    <h2 className="flex items-baseline gap-2.5">
      <span className="mono-label text-accent-text">{pad(index)}</span>
      <span className="text-h3 text-ink">{title}</span>
      <span className="mono-label text-muted">{count}</span>
    </h2>
  );
}

export default function Uses() {
  const sections = [...usesGroups.map((g) => ({ slug: g.slug, name: g.name })), { slug: "hardware", name: "Hardware" }];
  return (
    <div className="mx-auto w-full max-w-site flex-1 border-x border-line">
      <main>
        <header className="flex flex-col gap-5 px-5 pt-18 pb-12 lg:px-12 lg:pt-28 lg:pb-16">
          <p className="mono-label text-muted">
            <b className="font-normal text-accent-text">03</b> / uses
          </p>
          <h1 className="text-h1 max-w-[18ch] text-balance text-ink sm:text-[56px] sm:leading-[58px] sm:tracking-[-0.045em]">What I use</h1>
          <p className="text-lede max-w-xl text-ink-soft">The languages, tools and apps I reach for every day. Last updated [Month 2026].</p>
        </header>
        <div className="grid gap-10 border-t border-line px-5 py-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16 lg:px-12 lg:pt-12 lg:pb-24">
          <nav aria-label="Categories" className="lg:sticky lg:top-[calc(var(--nav-height,56px)+32px)] lg:self-start">
            <span className="mono-meta mb-2 block text-muted">On this page</span>
            <ul className="flex flex-wrap gap-x-4 lg:block">
              {sections.map((s) => (
                <li key={s.slug}>
                  <a href={`#${s.slug}`} className="mono-label block py-1.5 text-muted hover:text-ink">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col gap-16">
            {usesGroups.map((g, i) => (
              <section key={g.slug} id={g.slug} aria-labelledby={`${g.slug}-h`} className="flex scroll-mt-24 flex-col gap-4">
                <div id={`${g.slug}-h`}>
                  <GroupHeading index={i + 1} title={g.name} count={g.items.length} />
                </div>
                <ul className="grid grid-cols-3 gap-3 md:grid-cols-4 lg:grid-cols-6">
                  {g.items.map((it) => (
                    <li key={it.label} className="pf-tile" title={it.label}>
                      {it.icon ? <BrandIcon name={it.icon} size={28} brand aria-hidden="true" /> : <TerminalIcon size={28} />}
                      <span>{it.label}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
            <section id="hardware" aria-labelledby="hardware-h" className="flex scroll-mt-24 flex-col gap-4">
              <div id="hardware-h">
                <GroupHeading index={usesGroups.length + 1} title="Hardware" count={hardware.length} />
              </div>
              <ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                {hardware.map((h, i) => (
                  <li key={h} className="flex flex-col gap-1 rounded-md border border-line bg-surface px-5 py-4.5">
                    <span className="mono-meta text-muted">{pad(i + 1)}</span>
                    <span className="text-body font-medium text-ink">{h}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer name={site.name} links={navLinks} />
    </div>
  );
}
