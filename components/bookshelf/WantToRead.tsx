import { SectionHeader } from "@/components/ui";
import { Section } from "@/components/home/Section";
import type { Book } from "@/lib/books";
import { Cover } from "./Cover";

export function WantToRead({ books }: { books: Book[] }) {
  if (books.length === 0) return null;
  return (
    <Section id="want-to-read">
      <SectionHeader eyebrow="up next" title="Want to read" />
      <ul className="grid list-none grid-cols-3 gap-x-4 gap-y-6 p-0 sm:grid-cols-4 lg:grid-cols-8">
        {books.map((b) => (
          <li key={b.id} className="group">
            <a href={b.url} className="flex flex-col gap-2.5">
              <Cover book={b} size="sm" className="transition-transform duration-200 ease-out group-hover:-translate-y-[3px]" />
              <span className="text-body-sm text-ink-soft">{b.title}</span>
              <span className="sr-only">by {b.author}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
