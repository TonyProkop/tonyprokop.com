import Link from "next/link";
import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import { Badge, type BadgeTone } from "./Badge";
import { ArrowIcon } from "./icons";

/**
 * The portfolio's hero unit: a framed figure of the real work (screenshot, UI mock,
 * terminal) over a dot-grid stage, then index, title, one-sentence description,
 * stack badges, and a footer with year/role and status.
 */
export function ProjectCard({
  title,
  description,
  index,
  figureLabel,
  children,
  tags = [],
  meta,
  status,
  statusTone = "success",
  href = "#",
  className,
}: {
  title: string;
  /** One sentence, outcome first. */
  description?: string;
  /** "01" */
  index?: string;
  /** "Fig 01" */
  figureLabel?: string;
  /** The figure — the work itself, not an illustration. */
  children?: ReactNode;
  /** Max four. */
  tags?: string[];
  /** "2026 · lead engineer" */
  meta?: string;
  /** "Live", "Beta", "Shipped" */
  status?: string;
  statusTone?: BadgeTone;
  href?: string;
  className?: string;
}) {
  return (
    <Link href={href} className={cx("pf-card pf-card-link pf-project", className)}>
      <div className="pf-figure">
        {figureLabel ? <span className="pf-figure-label">{figureLabel}</span> : null}
        <div className="pf-figure-inner">
          {children ?? (
            <div className="pf-chrome">
              <i />
              <i />
              <i />
              <span>{title}</span>
            </div>
          )}
        </div>
      </div>
      <div className="pf-card-body">
        <div className="pf-project-head">
          <h3 className="pf-card-title">{title}</h3>
          {index ? <span className="pf-project-index">{index}</span> : null}
        </div>
        {description ? <p className="pf-card-text">{description}</p> : null}
        {tags.length ? (
          <div className="pf-tags">
            {tags.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        ) : null}
      </div>
      <div className="pf-project-foot">
        <span>{meta}</span>
        <span className="inline-flex items-center gap-2">
          {status ? (
            <Badge tone={statusTone} dot>
              {status}
            </Badge>
          ) : null}
          <ArrowIcon />
        </span>
      </div>
    </Link>
  );
}
