import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import { Badge } from "./Badge";

/** Full-width notice above the nav. Status is a word plus a dot, never colour alone. */
export function AlertBanner({ label, children, className }: { label: string; children: ReactNode; className?: string }) {
  return (
    <div role="status" className={cx("border-b border-line bg-bg-subtle px-5 py-2.5", className)}>
      <p className="mx-auto flex max-w-site flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-center text-body-sm text-ink-soft">
        <Badge tone="warning" dot>
          {label}
        </Badge>
        <span>{children}</span>
      </p>
    </div>
  );
}
