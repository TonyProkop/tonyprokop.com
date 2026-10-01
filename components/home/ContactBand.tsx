import { ButtonLink, CopyEmailButton, Stage } from "@/components/ui";
import { site } from "@/data/site";

export function ContactBand() {
  return (
    <section id="contact" className="border-t border-line">
      <Stage className="flex-col gap-6 px-5 py-20 text-center lg:py-28">
        <p className="pf-eyebrow m-0">
          <b>06</b> / contact
        </p>
        <h2 className="text-h1 text-balance text-ink sm:text-display">Let&apos;s build something.</h2>
        <p className="text-lede max-w-lg text-ink-soft">Hiring, a contract or just a question - I read everything and usually reply within two days.</p>
        <div className="flex flex-wrap justify-center gap-2">
          <ButtonLink href="/contact" variant="accent" size="lg" arrow>
            Get in touch
          </ButtonLink>
          <CopyEmailButton email={site.email} variant="secondary" size="lg" />
        </div>
      </Stage>
    </section>
  );
}
