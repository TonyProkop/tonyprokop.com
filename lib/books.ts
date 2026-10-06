export type CoverTone = "ink" | "accent" | "raised" | "strong" | "muted";
export type BookShelf = "reading" | "read" | "want";

/** One entry of `data/books.json`, written by `npm run book:add`. Dates are YYYY-MM-DD. */
export type Book = {
  id: string;
  title: string;
  author: string;
  /** Path under `public/`, or null when Open Library has no cover. */
  cover: string | null;
  url: string;
  shelf: BookShelf;
  startedAt?: string;
  finishedAt?: string;
};

const tones: CoverTone[] = ["ink", "accent", "raised", "strong", "muted"];

/** Stable placeholder colour for books without a cover. */
export function toneFor(id: string): CoverTone {
  let hash = 0;
  for (const ch of id) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
  return tones[hash % tones.length];
}

const format = (date: string, options: Intl.DateTimeFormatOptions) => new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", { ...options, timeZone: "UTC" });
export const formatMonth = (date: string) => format(date, { month: "short" });
export const formatDay = (date: string) => format(date, { month: "short", day: "numeric" });
export const yearOf = (date: string) => Number(date.slice(0, 4));
