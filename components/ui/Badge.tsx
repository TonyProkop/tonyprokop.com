import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

export type BadgeTone = "neutral" | "accent" | "success" | "warning";

/**
 * Small mono uppercase label for stacks, years and status.
 * Status colour always comes with its word ("Live", "Beta") — never colour alone.
 */
export function Badge({ tone = "neutral", dot, children, className }: { tone?: BadgeTone; dot?: boolean; children: ReactNode; className?: string }) {
  return (
    <span className={cx("pf-badge", `pf-badge-${tone}`, className)}>
      {dot ? <span className="pf-dot" aria-hidden="true" /> : null}
      {children}
    </span>
  );
}
