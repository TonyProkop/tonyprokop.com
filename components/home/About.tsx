import { ButtonLink, SectionHeader } from "@/components/ui";
import { Section } from "./Section";

const factLabel = "mono-label text-muted";

export function About() {
  return (
    <Section id="about">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-16">
        <div className="flex flex-col">
          <SectionHeader index="01" eyebrow="about" title="Engineer by trade, generalist by habit" />
          <div className="flex max-w-xl flex-col gap-6">
            <p className="text-body text-ink-soft">
              I&apos;ve spent 10 years building for the web, from eCommerce checkout funnels to a customer-facing API platform, mostly on the
              frontend and in the places where the product meets the systems behind it. I care about interfaces that are fast, accessible and
              intuitive.
            </p>
            <div>
              <ButtonLink href="/about" arrow>
                More about me
              </ButtonLink>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <figure className="relative m-0 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg border border-line bg-bg-subtle [background-image:radial-gradient(var(--faint)_1px,transparent_1px)] [background-size:16px_16px]">
            <span className="mono-label text-muted">[ portrait photo ]</span>
            <figcaption className="mono-meta absolute bottom-3 left-3.5 text-muted">Fig 01 - Omaha, 2026</figcaption>
          </figure>
          <dl className="m-0 grid grid-cols-[120px_minmax(0,1fr)]">
            <dt className={`${factLabel} border-t border-line py-3.5`}>based in</dt>
            <dd className="m-0 border-t border-line py-3.5 text-ink">Omaha, NE · Central Time</dd>
            <dt className={`${factLabel} border-y border-line py-3.5`}>currently</dt>
            <dd className="m-0 border-y border-line py-3.5 text-ink">Senior Software Engineer at WP Engine</dd>
          </dl>
        </div>
      </div>
    </Section>
  );
}
