import { Badge, ButtonLink, CodeBlock, Kbd, Stage } from "@/components/ui";
import { site } from "@/data/site";

const aboutCode = `export const me = {
  name: "${site.name}",
  role: "${site.role}",
  based: "Omaha, NE",
  focus: ["product", "performance", "DX"],
  shipping: "[Current project]",
  openTo: ["full-time", "contract"],
}`;

const linkClass = "text-muted hover:text-ink";

export function Hero() {
  return (
    <section id="top" className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
      <div className="flex flex-col justify-center gap-7 border-b border-line px-5 py-16 lg:border-b-0 lg:border-r lg:px-12 lg:pb-24 lg:pt-28">
        <div className="flex">
          <Badge tone="success" dot>
            Open to new roles
          </Badge>
        </div>
        <h1 className="text-display text-balance text-ink">I build fast, careful software.</h1>
        <p className="text-lede max-w-xl text-ink-soft">
          I&apos;m {site.name}, a software engineer in Omaha, Nebraska. I work across the stack - product UI, APIs and the infrastructure
          underneath - and I care most about the parts people feel: speed, reliability and polish.
        </p>
        <div className="flex flex-wrap gap-2">
          <ButtonLink href="/work" variant="primary" size="lg" arrow>
            View my work
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary" size="lg">
            Get in touch
          </ButtonLink>
        </div>
        <div className="mono-label flex flex-wrap items-center gap-x-5 gap-y-2 text-muted">
          <a href={site.socials.github} target="_blank" rel="noreferrer" className={linkClass}>
            github ↗
          </a>
          <a href={site.socials.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
            linkedin ↗
          </a>
          <a href={site.resumeHref} className={linkClass}>
            résumé.pdf ↓
          </a>
          <span className="hidden items-center gap-1.5 sm:inline-flex">
            press <Kbd>⌘K</Kbd> to jump anywhere
          </span>
        </div>
      </div>
      <Stage className="px-5 py-10 lg:px-10 lg:py-16">
        <div className="flex w-full max-w-[460px] flex-col gap-2.5">
          <span className="mono-meta text-muted">Fig 00 - about.ts</span>
          <CodeBlock code={aboutCode} filename="about.ts" highlight lineNumbers />
        </div>
      </Stage>
    </section>
  );
}
