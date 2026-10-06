"use client";

import { useState } from "react";
import { Button, SectionHeader } from "@/components/ui";
import { Section } from "@/components/home/Section";
import { formatMonth, yearOf, type Book } from "@/lib/books";
import { Cover } from "./Cover";

const ALL = "all" as const;
const UNDATED = "undated" as const;
type Filter = number | typeof ALL | typeof UNDATED;
const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"];

const finishedYear = (b: Book) => (b.finishedAt ? yearOf(b.finishedAt) : null);

/** Finished books with a year filter (defaults to the goal year). Client component only for the filter. */
export function ReadThisYear({ books, year }: { books: Book[]; year: number }) {
  const [filter, setFilter] = useState<Filter>(year);
  const years = [...new Set([year, ...books.map(finishedYear)])].filter((y): y is number => y !== null).sort((a, b) => b - a);
  const hasUndated = books.some((b) => !b.finishedAt);
  const shown = filter === ALL ? books : books.filter((b) => (filter === UNDATED ? !b.finishedAt : finishedYear(b) === filter));
  const count = books.filter((b) => finishedYear(b) === year).length;

  return (
    <Section id="finished">
      <SectionHeader
        eyebrow="finished"
        title="Read this year"
        lede={`${words[count] ?? count} so far.`}
        action={
          <div role="group" aria-label="Filter by year" className="flex gap-1.5">
            {([...years, ...(hasUndated ? [UNDATED] : []), ALL] satisfies Filter[]).map((y) => (
              <Button key={y} size="sm" variant={filter === y ? "primary" : "ghost"} aria-pressed={filter === y} onClick={() => setFilter(y)}>
                {y === ALL ? "All time" : y === UNDATED ? "Before 2023" : y}
              </Button>
            ))}
          </div>
        }
      />
      {shown.length === 0 ? (
        <p className="text-body text-muted">Nothing finished yet.</p>
      ) : (
        <ul className="grid list-none grid-cols-2 gap-x-5 gap-y-8 p-0 sm:grid-cols-3 lg:grid-cols-6">
          {shown.map((b) => (
            <li key={b.id} className="group flex flex-col gap-2.5">
              <a href={b.url} className="flex flex-col gap-2.5">
                <Cover book={b} className="transition-transform duration-200 ease-out group-hover:-translate-y-[3px]" />
                <span className="flex flex-col gap-1">
                  <span className="text-body-sm font-medium text-ink">{b.title}</span>
                  <span className="text-body-sm text-muted">{b.author}</span>
                </span>
              </a>
              <span className="mono-label text-muted">{b.finishedAt ? formatMonth(b.finishedAt) : null}</span>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
