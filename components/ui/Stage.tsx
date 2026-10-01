import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

/** Faint 32px grid backdrop with a vignette, for hero figures and CTA bands. Children are centred above it. */
export function Stage({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cx("pf-stage", className)}>{children}</div>;
}
