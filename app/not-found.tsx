import { ButtonLink, EntryRow, Footer, SectionHeader } from "@/components/ui";
import { OpenCommandPaletteButton } from "@/components/command-palette";
import { ErrorScreen } from "@/components/errors/ErrorScreen";
import { RequestTerminal } from "@/components/errors/RequestTerminal";
import { navLinks, site } from "@/data/site";

const SUGGESTIONS = [
  { label: "about", href: "/about", title: "About", subtitle: "Who I am, where I am, and what I'm up to" },
  { label: "work", href: "/work", title: "Work", subtitle: "Selected projects and write-ups" },
  { label: "uses", href: "/uses", title: "Uses", subtitle: "Languages, tools and apps I reach for" },
  { label: "experience", href: "/experience", title: "Experience", subtitle: "Where I've worked" },
  { label: "contact", href: "/contact", title: "Contact", subtitle: "Send me a message" },
];

/** 404: rendered inside the root layout for notFound() and every unmatched URL. */
export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-site flex-1 border-x border-line">
      <title>Page not found · Tony Prokop</title>
      <main>
        <ErrorScreen
          code="404"
          label="not found"
          title="Nothing lives at this address"
          lede={
            <p className="m-0">
              The link might be old, or I moved things around during the rebuild. Search for what you were after, or start again from the home
              page.
            </p>
          }
          actions={
            <>
              <ButtonLink href="/" variant="primary" size="lg" arrow>
                Back to home
              </ButtonLink>
              <OpenCommandPaletteButton variant="secondary" size="lg" kbd="⌘K">
                Search the site
              </OpenCommandPaletteButton>
            </>
          }
          figureCaption="Fig 404 - the request"
          figure={<RequestTerminal status="404" lines={["# no page here. press ⌘K to search the site"]} />}
        >
          <section className="border-t border-line px-5 py-16 sm:px-12 lg:py-24">
            <SectionHeader eyebrow="try one of these" title="Where you might have been going" />
            <div className="pf-entries">
              {SUGGESTIONS.map((s) => (
                <EntryRow key={s.href} date={s.label} title={s.title} subtitle={s.subtitle} aside={s.href} href={s.href} />
              ))}
            </div>
          </section>
        </ErrorScreen>
      </main>
      <Footer name={site.name} links={navLinks} />
    </div>
  );
}
