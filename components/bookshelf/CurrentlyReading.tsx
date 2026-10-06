import { Section } from "@/components/home/Section";
import { formatDay, type Book } from "@/lib/books";
import { Cover } from "./Cover";

export function CurrentlyReading({ books }: { books: Book[] }) {
  if (books.length === 0) return null;
  return (
    <Section id="reading" className="!pt-12">
      <div className="grid gap-3 lg:grid-cols-2">
        {books.map((b) => (
          <article key={b.id} className="grid grid-cols-[100px_minmax(0,1fr)] items-start gap-4 rounded-md border border-line bg-surface p-4 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-7 sm:p-6">
            <Cover book={b} size="lg" />
            <div className="flex flex-col gap-3.5">
              <span className="mono-meta text-muted">Currently reading</span>
              <div className="flex flex-col gap-1">
                <h2 className="text-h3 text-ink sm:text-[22px] sm:leading-7 sm:font-semibold sm:tracking-[-0.02em]">
                  <a href={b.url} className="hover:text-accent-text">
                    {b.title}
                  </a>
                </h2>
                <p className="text-body text-ink-soft">{b.author}</p>
              </div>
              {b.startedAt ? <span className="mono-label text-muted">Started {formatDay(b.startedAt)}</span> : null}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
