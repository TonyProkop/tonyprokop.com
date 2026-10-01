import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

/** Frame-width section: top hairline, 96px (64px mobile) vertical padding, 48px (20px) gutters. */
export function Section({ id, subtle, className, children }: { id: string; subtle?: boolean; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={cx("border-t border-line px-5 py-16 sm:px-12 lg:py-24", subtle && "bg-bg-subtle", className)}>
      {children}
    </section>
  );
}
