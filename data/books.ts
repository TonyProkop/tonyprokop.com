/**
 * Bookshelf. The list lives in `books.json`; add books with `npm run book:add -- <open-library-url> --shelf …`
 * (see `scripts/add-book.mjs`), which also downloads covers into `public/books/`.
 */
import type { Book, BookShelf } from "@/lib/books";
import data from "./books.json";

export const readingGoal = { year: 2026, target: 24 };

const books = data as Book[];

/** Read books without a finish date sort last and show under the "Before 2023" filter. */
const byDateDesc = (date: (b: Book) => string | undefined) => (a: Book, b: Book) => (date(b) ?? "").localeCompare(date(a) ?? "");

/** Reading and read are newest first; want-to-read keeps the order books were added. */
export function booksOn(shelf: BookShelf): Book[] {
  const list = books.filter((b) => b.shelf === shelf);
  if (shelf === "reading") return list.sort(byDateDesc((b) => b.startedAt));
  if (shelf === "read") return list.sort(byDateDesc((b) => b.finishedAt));
  return list;
}
