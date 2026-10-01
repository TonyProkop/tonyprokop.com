import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

/**
 * Numbered section opener: accent index, mono eyebrow, title, optional lede and a
 * right-aligned action — the "01 / selected work" rhythm. Number sections in page order.
 */
export function SectionHeader({
  index,
  eyebrow,
  title,
  lede,
  action,
  as: Heading = "h2",
  className,
}: {
  index?: string;
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  /** Usually a ghost ButtonLink with arrow. */
  action?: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <div className={cx("pf-section-head", className)}>
      <div>
        <p className="pf-eyebrow">
          {index ? (
            <>
              <b>{index}</b> /{" "}
            </>
          ) : null}
          {eyebrow}
        </p>
        <Heading className="pf-section-title">{title}</Heading>
        {lede ? <p className="pf-section-lede">{lede}</p> : null}
      </div>
      {action ?? null}
    </div>
  );
}
