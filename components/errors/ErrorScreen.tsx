import type { ReactNode } from "react";
import { Stage } from "@/components/ui";

/**
 * Shared layout for the 404 and 500 screens. Mirrors the home hero: copy on the left,
 * a figure on the grid stage on the right, and an optional section below.
 * Server-compatible: pass client pieces (buttons with handlers, path-aware figures) in as nodes.
 */
export function ErrorScreen({
  code,
  label,
  title,
  lede,
  actions,
  figure,
  figureCaption,
  children,
}: {
  /** "404", "500" */
  code: string;
  /** Lowercase mono label after the code: "not found", "server error" */
  label: string;
  title: ReactNode;
  lede: ReactNode;
  actions: ReactNode;
  figure: ReactNode;
  figureCaption: string;
  /** Optional section under the hero (e.g. suggested pages). */
  children?: ReactNode;
}) {
  return (
    <>
      <section className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
        <div className="flex flex-col justify-center gap-7 border-b border-line px-5 py-16 lg:border-b-0 lg:border-r lg:px-12 lg:pb-24 lg:pt-28">
          <p className="pf-eyebrow m-0">
            <b>{code}</b> / {label}
          </p>
          <h1 className="text-display text-balance text-ink">{title}</h1>
          <div className="text-lede max-w-xl text-ink-soft">{lede}</div>
          <div className="flex flex-wrap gap-2">{actions}</div>
        </div>
        <Stage className="px-5 py-10 lg:px-10 lg:py-16">
          <figure className="m-0 flex w-full max-w-[460px] flex-col gap-2.5">
            <figcaption className="mono-meta text-muted">{figureCaption}</figcaption>
            {figure}
          </figure>
        </Stage>
      </section>
      {children}
    </>
  );
}
