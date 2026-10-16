"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowIcon } from "@/components/ui";
import { ProjectFigure } from "./ProjectFigure";

const pad = (n: number) => String(n).padStart(2, "0");

/** Framed figure on a grid stage with a caption; thumbnails switch figures when there is more than one. */
export function Gallery({ slug, title, captions }: { slug: string; title: string; captions: string[] }) {
  const [active, setActive] = useState(0);
  const [edge, setEdge] = useState({ start: true, end: true });
  const strip = useRef<HTMLDivElement>(null);
  const many = captions.length > 1;

  const measure = useCallback(() => {
    const el = strip.current;
    if (!el) return;
    setEdge({ start: el.scrollLeft <= 1, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 1 });
  }, []);

  useEffect(() => {
    const el = strip.current;
    if (!el) return;
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [measure]);

  const scrollBy = (dir: -1 | 1) => {
    const el = strip.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  };

  const select = (n: number, button: HTMLElement) => {
    setActive(n);
    button.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
  };

  const hasOverflow = !(edge.start && edge.end);

  return (
    <figure className="m-0">
      <div className="pf-stage aspect-[4/3] overflow-hidden rounded-md border border-line shadow-[var(--shadow-highlight)] sm:aspect-video sm:rounded-lg">
        <div className="aspect-[16/10] w-[88%] overflow-hidden rounded-md border border-line-strong bg-surface shadow-[var(--shadow-overlay)] sm:w-[76%]">
          <ProjectFigure slug={slug} title={title} shot={active} sizes="(min-width: 1120px) 820px, 90vw" />
        </div>
      </div>
      <figcaption className="mono-label mt-3 flex flex-col justify-between gap-1 text-muted sm:flex-row sm:gap-4" aria-live="polite">
        <span>
          <b className="font-medium text-ink-soft">Fig {pad(active + 1)}</b> - {captions[active]}
        </span>
        <span>
          {active + 1} of {captions.length}
        </span>
      </figcaption>
      {many ? (
        <div className="mt-4 flex flex-col gap-3">
          <div
            ref={strip}
            onScroll={measure}
            role="group"
            aria-label="Choose a screenshot"
            className="flex w-full snap-x gap-2 overflow-x-auto scroll-smooth py-0.5 [scrollbar-width:none] sm:gap-3 [&::-webkit-scrollbar]:hidden"
          >
            {captions.map((c, n) => (
              <button
                key={c}
                type="button"
                aria-pressed={n === active}
                aria-label={`Show figure ${pad(n + 1)}: ${c}`}
                onClick={(e) => select(n, e.currentTarget)}
                className={`flex w-[116px] flex-none cursor-pointer snap-start items-center gap-3 rounded-md border bg-surface p-1 text-left transition-colors sm:w-[280px] sm:p-2 ${n === active ? "border-accent text-ink" : "border-line text-muted hover:border-line-strong"}`}
              >
                <span aria-hidden="true" className="relative aspect-video w-full flex-none overflow-hidden rounded-xs border border-line bg-surface sm:aspect-auto sm:h-[54px] sm:w-24">
                  <span className="pointer-events-none absolute top-0 left-0 block h-[432px] w-[768px] origin-top-left scale-[0.135] sm:scale-[0.125]">
                    <ProjectFigure slug={slug} title={title} shot={n} sizes="768px" />
                  </span>
                </span>
                <span className="hidden min-w-0 flex-col gap-0.5 text-[13px] leading-[18px] sm:flex">
                  <b className="mono-meta font-medium text-muted">Fig {pad(n + 1)}</b>
                  <span className="truncate">{c}</span>
                </span>
              </button>
            ))}
          </div>
          {hasOverflow ? (
            <div className="flex items-center justify-center gap-2">
              <Arrow dir="prev" disabled={edge.start} onClick={() => scrollBy(-1)} />
              <Arrow dir="next" disabled={edge.end} onClick={() => scrollBy(1)} />
            </div>
          ) : null}
        </div>
      ) : null}
    </figure>
  );
}

function Arrow({ dir, disabled, onClick }: { dir: "prev" | "next"; disabled: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label={dir === "prev" ? "Scroll screenshots left" : "Scroll screenshots right"}
      disabled={disabled}
      onClick={onClick}
      className="grid size-11 flex-none cursor-pointer place-items-center rounded-sm border border-line bg-surface text-muted transition-colors hover:border-line-strong hover:text-ink disabled:cursor-default disabled:opacity-40 disabled:hover:border-line disabled:hover:text-muted sm:size-[30px]"
    >
      <ArrowIcon className={dir === "prev" ? "rotate-180" : undefined} />
    </button>
  );
}
