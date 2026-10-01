import Link from "next/link";
import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

/**
 * Hairline surface: `surface` fill, `line` border, radius-md, 1px top highlight.
 * Depth comes from borders, not shadows. Don't nest cards.
 */
export function Card({
  eyebrow,
  title,
  href,
  children,
  className,
}: {
  eyebrow?: ReactNode;
  title?: ReactNode;
  /** Makes the whole card a link with a hover border. */
  href?: string;
  children?: ReactNode;
  className?: string;
}) {
  const body = (
    <div className="pf-card-body">
      {eyebrow ? <div className="pf-card-eyebrow">{eyebrow}</div> : null}
      {title ? <h3 className="pf-card-title">{title}</h3> : null}
      {typeof children === "string" ? <p className="pf-card-text">{children}</p> : children}
    </div>
  );
  if (href) {
    return (
      <Link href={href} className={cx("pf-card pf-card-link", className)}>
        {body}
      </Link>
    );
  }
  return <div className={cx("pf-card", className)}>{body}</div>;
}
