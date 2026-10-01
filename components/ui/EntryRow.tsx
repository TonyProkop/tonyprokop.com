import Link from "next/link";
import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import { ArrowIcon } from "./icons";

/**
 * Hairline list row for experience, writing and talks: mono date column, title + subtitle,
 * mono aside, and an arrow when linked. Wrap a list in <div className="pf-entries">.
 */
export function EntryRow({
  date,
  title,
  subtitle,
  aside,
  href,
  className,
}: {
  date: string;
  title: ReactNode;
  subtitle?: ReactNode;
  aside?: ReactNode;
  href?: string;
  className?: string;
}) {
  const content = (
    <>
      <span className="pf-entry-date">{date}</span>
      <div>
        <p className="pf-entry-title">{title}</p>
        {subtitle ? <p className="pf-entry-sub">{subtitle}</p> : null}
      </div>
      <span className="pf-entry-aside">
        {aside}
        {href ? <ArrowIcon /> : null}
      </span>
    </>
  );
  if (href) {
    return (
      <Link href={href} className={cx("pf-entry", className)}>
        {content}
      </Link>
    );
  }
  return <div className={cx("pf-entry", className)}>{content}</div>;
}
