#!/usr/bin/env node
// Adds (or updates) a book in data/books.json from an Open Library or Goodreads URL and downloads
// its cover into public/books/. Run `npm run book:add -- --help` for usage.
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataFile = path.join(root, "data/books.json");
const coversDir = path.join(root, "public/books");

const SHELVES = ["reading", "read", "want"];
const USAGE = `Usage: npm run book:add -- <url> --shelf <reading|read|want> [--started YYYY-MM-DD] [--finished YYYY-MM-DD]

  <url>               an Open Library edition (openlibrary.org/books/OL…M) or work (openlibrary.org/works/OL…W)
                      page, or a Goodreads book page (goodreads.com/book/show/…). Goodreads books are looked
                      up on Open Library by their Goodreads id, so they must exist there.
                      With Open Library, use the edition URL to get that edition's cover.
  --shelf             reading | read | want (required)
  --started           date you started it (default today when shelf is reading)
  --finished          date you finished it (optional; read books without one show under "Before 2023")

Always keep the "--" after the script name, or npm swallows the flags.
Running it again for the same book updates its shelf and dates.`;

const NPM_HINT = 'npm swallowed your flags. Put "--" before the URL: npm run book:add -- <url> --shelf read';
const today = () => new Date().toISOString().slice(0, 10);
const fail = (message) => {
  console.error(`error: ${message}`);
  process.exit(1);
};

function parseArgs(argv) {
  const opts = {};
  let url;
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--help" || arg === "-h") {
      console.log(USAGE);
      process.exit(0);
    } else if (arg.startsWith("--")) {
      const value = argv[++i];
      if (value === undefined) fail(`${arg} needs a value`);
      opts[arg.slice(2)] = value;
    } else if (!url) {
      url = arg;
    } else {
      fail(process.env.npm_config_shelf ? NPM_HINT : `unexpected argument: ${arg}`);
    }
  }
  if (!url) fail(`missing book URL\n\n${USAGE}`);
  if (!opts.shelf && process.env.npm_config_shelf) fail(NPM_HINT);
  if (!SHELVES.includes(opts.shelf)) fail(`--shelf is required and must be one of: ${SHELVES.join(", ")}`);
  for (const key of ["started", "finished"]) {
    if (opts[key] !== undefined && !/^\d{4}-\d{2}-\d{2}$/.test(opts[key])) fail(`--${key} must look like YYYY-MM-DD`);
  }
  return { url, opts };
}

async function getJson(pathname) {
  const res = await fetch(`https://openlibrary.org${pathname}.json`);
  if (!res.ok) fail(`Open Library returned ${res.status} for ${pathname}`);
  return res.json();
}

async function authorNames(authors = []) {
  const keys = authors.map((a) => a.key ?? a.author?.key).filter(Boolean);
  const people = await Promise.all(keys.map((key) => getJson(key)));
  return people.map((p) => p.name).filter(Boolean);
}

async function downloadCover(coverId, id) {
  const res = await fetch(`https://covers.openlibrary.org/b/id/${coverId}-L.jpg?default=false`);
  if (!res.ok) return null;
  await mkdir(coversDir, { recursive: true });
  await writeFile(path.join(coversDir, `${id}.jpg`), Buffer.from(await res.arrayBuffer()));
  return `/books/${id}.jpg`;
}

// Goodreads blocks scripted page fetches, so map its book id to Open Library via search instead.
async function resolveGoodreads(goodreadsId) {
  const query = new URLSearchParams({ q: `id_goodreads:${goodreadsId}`, fields: "key,cover_edition_key", limit: "1" });
  const res = await fetch(`https://openlibrary.org/search.json?${query}`);
  if (!res.ok) fail(`Open Library search returned ${res.status}`);
  const doc = (await res.json()).docs?.[0];
  if (!doc) fail(`Open Library has no book with Goodreads id ${goodreadsId}. Find it on openlibrary.org and pass that URL instead`);
  return doc.cover_edition_key ? `/books/${doc.cover_edition_key}` : doc.key;
}

async function parseBookUrl(url) {
  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    fail(`not a valid URL: ${url}`);
  }
  if (/(^|\.)goodreads\.com$/.test(parsed.hostname)) {
    const goodreadsId = parsed.pathname.match(/\/book\/show\/(\d+)/)?.[1];
    if (!goodreadsId) fail("could not find a book id in that Goodreads URL (expected goodreads.com/book/show/<id>)");
    parsed = new URL(await resolveGoodreads(goodreadsId), "https://openlibrary.org");
  }
  const match = parsed.pathname.match(/\/(books|works)\/(OL\d+[MW])/);
  if (!match) fail("could not find an edition or work id in that URL (expected /books/OL…M, /works/OL…W or a Goodreads book URL)");
  return { kind: match[1], id: match[2] };
}

const { url, opts } = parseArgs(process.argv.slice(2));
const { kind, id } = await parseBookUrl(url);

const record = await getJson(`/${kind}/${id}`);
const work = kind === "books" && record.works?.[0] ? await getJson(record.works[0].key) : record;
const authors = await authorNames(record.authors?.length ? record.authors : work.authors);
const coverId = record.covers?.find((c) => c > 0) ?? work.covers?.find((c) => c > 0);

const book = {
  id,
  title: record.title,
  author: authors.join(", ") || "Unknown author",
  cover: coverId ? await downloadCover(coverId, id) : null,
  url: `https://openlibrary.org/${kind}/${id}`,
  shelf: opts.shelf,
};
if (opts.shelf !== "want") {
  if (opts.shelf === "reading" || opts.started) book.startedAt = opts.started ?? today();
  if (opts.shelf === "read" && opts.finished) book.finishedAt = opts.finished;
}

const books = JSON.parse(await readFile(dataFile, "utf8").catch(() => "[]"));
const index = books.findIndex((b) => b.id === id);
if (index === -1) books.push(book);
else books[index] = { ...books[index], startedAt: undefined, finishedAt: undefined, ...book };
await writeFile(dataFile, `${JSON.stringify(books, null, 2)}\n`);

console.log(`${index === -1 ? "Added" : "Updated"} "${book.title}" by ${book.author} on shelf "${book.shelf}"`);
console.log(book.cover ? `Cover saved to public${book.cover}` : "No cover found on Open Library, a placeholder will be used");
