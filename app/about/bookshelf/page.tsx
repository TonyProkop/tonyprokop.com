import type { Metadata } from "next";
import Link from "next/link";
import { CurrentlyReading } from "@/components/bookshelf/CurrentlyReading";
import { ProgressBar } from "@/components/bookshelf/ProgressBar";
import { ReadThisYear } from "@/components/bookshelf/ReadThisYear";
import { WantToRead } from "@/components/bookshelf/WantToRead";
import { Footer } from "@/components/ui";
import { booksOn, readingGoal as goal } from "@/data/books";
import { navLinks, site } from "@/data/site";
import { yearOf } from "@/lib/books";

export const metadata: Metadata = {
  title: "Bookshelf · Tony Prokop",
  description: "Books I'm reading, have read and want to read.",
};

export default function Bookshelf() {
  const reading = booksOn("reading");
  const finished = booksOn("read");
  const wantToRead = booksOn("want");
  const done = finished.filter((b) => b.finishedAt && yearOf(b.finishedAt) === goal.year).length;
  return (
    <div className="mx-auto w-full max-w-site flex-1 border-x border-line">
      <main>
        <header className="flex flex-col gap-5 px-5 pt-18 pb-12 lg:px-12 lg:pt-28 lg:pb-16">
          <nav aria-label="Breadcrumb" className="mono-label flex items-center gap-2.5 text-muted">
            <Link href="/about" className="group inline-flex items-center gap-1.5 hover:text-ink">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform duration-200 ease-out group-hover:-translate-x-0.5">
                <path d="M13 8H3M7 4L3 8l4 4" />
              </svg>
              About
            </Link>
            <span aria-hidden="true" className="text-faint">/</span>
            <span aria-current="page" className="text-ink">Bookshelf</span>
          </nav>
          <h1 className="text-h1 max-w-[18ch] text-balance text-ink sm:text-[56px] sm:leading-[58px] sm:tracking-[-0.045em]">What I&apos;m reading</h1>
          <p className="text-lede max-w-xl text-ink-soft">Books I&apos;m reading, have read and want to read. Mostly software and systems, with fiction in between. Book details from <a href="https://openlibrary.org/people/tony_prokop/books" className="text-accent-text hover:text-ink">Open Library</a>.</p>
          <div className="mt-2 flex max-w-105 flex-col gap-2.5">
            <div className="mono-label flex justify-between text-muted">
              <span>{goal.year} reading goal</span>
              <span>
                {done} of {goal.target} books
              </span>
            </div>
            <ProgressBar value={Math.round((done / goal.target) * 100)} label={`${goal.year} reading goal`} />
          </div>
        </header>
        <CurrentlyReading books={reading} />
        <ReadThisYear books={finished} year={goal.year} />
        <WantToRead books={wantToRead} />
      </main>
      <Footer name={site.name} links={navLinks} />
    </div>
  );
}
