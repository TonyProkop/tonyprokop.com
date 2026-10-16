import { Badge, ButtonLink, CodeBlock, Kbd, Stage } from "@/components/ui";
import { site } from "@/data/site";
import { RotatingWords } from "./RotatingWords";

const aboutCode = `export const me = {
  name: "${site.name}",
  role: "${site.role}",
  based: "Omaha, NE",
  shipping: "WP Engine's Customer API (CAPI)",
  openTo: ["full-time", "contract"],
}`;

export function Hero() {
  return (
    <section
      id="top"
      className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]"
    >
      <div className="flex flex-col justify-center gap-7 border-b border-line px-5 py-16 lg:border-b-0 lg:border-r lg:px-10 lg:pb-24 lg:pt-28">
        <div className="flex">
          <Badge tone="success" dot>
            Open to new roles
          </Badge>
        </div>
        <h1 className="text-display text-balance text-ink">
          Hi, I&apos;m Tony, a<br />
          <RotatingWords
            words={[
              "software engineer",
              "problem solver",
              "critical thinker",
              "collaborator",
              "system designer",
            ]}
          />
        </h1>
        <p className="text-lede max-w-xl text-ink-soft">
          I&apos;m {site.name}, a software engineer based in Omaha, Nebraska. I
          work across the stack - UI/UX, APIs, database and the infrastructure
          it all runs on. I care most about the parts people feel: performance,
          reliability and polish.
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
          <span className="hidden items-center gap-1.5 sm:inline-flex">
            press <Kbd>⌘ K</Kbd> to jump anywhere
          </span>
        </div>
      </div>
      <Stage className="px-5 py-10 lg:px-4 lg:py-16">
        <div className="flex w-full max-w-[460px] flex-col gap-2.5">
          <span className="mono-meta text-muted">Fig 00 - about.ts</span>
          <CodeBlock
            code={aboutCode}
            filename="about.ts"
            highlight
            lineNumbers
          />
        </div>
      </Stage>
    </section>
  );
}
