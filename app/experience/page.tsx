import type { Metadata } from "next";
import { ButtonLink, Footer } from "@/components/ui";
import { experience } from "@/data/experience";
import { navLinks, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Experience · Tony Prokop",
  description: "Ten years of building web products, from eCommerce to developer platforms.",
};

export default function Experience() {
  return (
    <div className="mx-auto w-full max-w-site flex-1 border-x border-line">
      <main>
        <header id="top" className="flex flex-col gap-5 px-5 pt-18 pb-12 lg:px-12 lg:pt-28 lg:pb-16">
          <p className="mono-label text-muted">
            <b className="font-normal text-accent-text">04</b> / experience
          </p>
          <h1 className="text-h1 max-w-[18ch] text-balance text-ink sm:text-[56px] sm:leading-[58px] sm:tracking-[-0.045em]">Where I&apos;ve worked</h1>
          <p className="text-lede max-w-xl text-ink-soft">Ten years building web products, from an eCommerce storefront to a developer platform. The short version is below; the résumé has the rest.</p>
          <div className="mt-2 flex flex-wrap items-center gap-4">
            <ButtonLink href={site.resumeHref} variant="primary">
              Download résumé
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary" arrow>
              Get in touch
            </ButtonLink>
          </div>
        </header>
        <section aria-label="Roles" className="border-t border-line px-5 sm:px-12">
          {experience.map((r) => (
            <article key={`${r.company}-${r.dates}`} className="grid gap-4 border-t border-line py-10 first:border-t-0 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-12">
              <div className="flex flex-col gap-1.5">
                <span className="mono-label text-muted">{r.dates}</span>
                {r.place ? <span className="mono-label text-muted">{r.place}</span> : null}
              </div>
              <div className="flex flex-col gap-3.5">
                <h2 className="text-h3 text-ink">
                  {r.title} <span className="font-medium text-muted">· {r.company}</span>
                </h2>
                <p className="text-body text-ink-soft">{r.summary}</p>
                <ul className="flex flex-col gap-2 text-body-sm text-ink-soft">
                  {r.highlights.map((h) => (
                    <li key={h} className="relative pl-5">
                      <span aria-hidden="true" className="mono-label absolute left-0 text-muted">
                        –
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-2.5">
                  <span className="mono-meta text-muted">Stack</span>
                  <ul aria-label="Stack" className="flex flex-wrap items-center gap-x-5 gap-y-3">
                    {r.stack.map((t) => (
                      <li key={t.label} title={t.label}>
                        {t.icon ? <t.icon size={28} /> : <span className="mono-meta text-muted">{t.label}</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer name={site.name} links={navLinks} />
    </div>
  );
}
