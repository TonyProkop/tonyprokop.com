import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

/** Keycap for keyboard shortcuts (⌘K, G, esc). Only show shortcuts that are wired up. */
export function Kbd({ children, className }: { children: ReactNode; className?: string }) {
  return <kbd className={cx("pf-kbd", className)}>{children}</kbd>;
}
