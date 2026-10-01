"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cx } from "@/lib/cx";
import { ButtonLink } from "./Button";
import { Kbd } from "./Kbd";
import { openCommandPalette } from "@/components/command-palette/events";

export type NavLink = { label: string; href: string };

/**
 * Sticky 56px bar with backdrop blur: monogram + name, mono lowercase links,
 * a ⌘K search trigger and one CTA. The current link gets an accent underline.
 */
export function Nav({
  name,
  initials,
  links,
  cta,
  search = true,
  className,
}: {
  name: string;
  initials: string;
  /** Max five. */
  links: NavLink[];
  cta?: { label: string; href: string };
  search?: boolean;
  className?: string;
}) {
  const pathname = usePathname();
  const isCurrent = (href: string) => href !== "/" && (pathname === href || pathname.startsWith(href + "/"));

  return (
    <header className={cx("pf-nav", className)}>
      <div className="pf-nav-inner">
        <Link className="pf-brand" href="/">
          <span className="pf-mark" aria-hidden="true">
            {initials}
          </span>
          {name}
        </Link>
        <nav className="pf-nav-links" aria-label="Primary">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="pf-nav-link" aria-current={isCurrent(l.href) ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="pf-nav-tools">
          {search ? (
            <button type="button" className="pf-search" aria-label="Open command menu" onClick={() => openCommandPalette()}>
              search <Kbd>⌘K</Kbd>
            </button>
          ) : null}
          {cta ? (
            <ButtonLink variant="primary" size="sm" href={cta.href}>
              {cta.label}
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </header>
  );
}
