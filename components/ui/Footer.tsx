import Link from "next/link";
import type { NavLink } from "./Nav";

/** Site footer: big name, colophon and the same links as the nav. Lives inside the page frame. */
export function Footer({ name, links }: { name: string; links: NavLink[] }) {
  return (
    <footer className="border-t border-line px-5 pb-10 pt-16 sm:px-12">
      <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,1fr)_auto]">
        <div className="flex flex-col gap-3.5">
          <Link href="/" className="text-h1 text-ink">
            {name}
          </Link>
          <span className="mono-label text-muted">© {new Date().getFullYear()} · built with Next.js and Geist · last deployed [date]</span>
        </div>
        <nav aria-label="Footer" className="mono-label flex flex-wrap items-center gap-x-4.5 gap-y-2">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-muted hover:text-ink">
              {l.label}
            </Link>
          ))}
          <a href="#top" className="text-muted hover:text-ink">
            back to top ↑
          </a>
        </nav>
      </div>
    </footer>
  );
}
