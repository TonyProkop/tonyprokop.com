import type { Metadata } from "next";
import { Footer } from "@/components/ui";
import { ProjectGrid } from "@/components/work/ProjectGrid";
import { projectCategories, projects } from "@/data/projects";
import { navLinks, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Work · Tony Prokop",
  description: "Selected projects from the last decade, from eCommerce to developer platforms, with write-ups.",
};

export default function Work() {
  return (
    <div className="mx-auto w-full max-w-site flex-1 border-x border-line">
      <main>
        <header id="top" className="flex flex-col gap-5 px-5 pt-18 pb-8 lg:px-12 lg:pt-28 lg:pb-8">
          <p className="mono-label text-muted">
            <b className="font-normal text-accent-text">02</b> / work
          </p>
          <h1 className="text-h1 max-w-[18ch] text-balance text-ink sm:text-[56px] sm:leading-[58px] sm:tracking-[-0.045em]">Things I&apos;ve shipped</h1>
          <p className="text-lede max-w-xl text-ink-soft">Selected projects from the last few years. Each one links to a write-up: the problem, what I built, what broke and what I&apos;d do differently.</p>
        </header>
        <ProjectGrid projects={projects.map(({ slug, index, title, description, tags, meta, status, statusTone, category, href }) => ({ slug, index, title, description, tags, meta, status, statusTone, category, href }))} categories={projectCategories} />
      </main>
      <Footer name={site.name} links={navLinks} />
    </div>
  );
}
