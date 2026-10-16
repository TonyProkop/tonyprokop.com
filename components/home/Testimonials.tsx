"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowIcon, Button, Card, SectionHeader } from "@/components/ui";
import { testimonials } from "@/data/testimonials";
import { Section } from "./Section";

const GAP = 12;

const initials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

export function Testimonials() {
  const track = useRef<HTMLDivElement>(null);

  const go = (dir: 1 | -1) => {
    const el = track.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    const max = el.scrollWidth - el.clientWidth;
    const atEnd = el.scrollLeft >= max - 1;
    const atStart = el.scrollLeft <= 1;
    if (dir === 1 && atEnd) el.scrollTo({ left: 0, behavior });
    else if (dir === -1 && atStart) el.scrollTo({ left: max, behavior });
    else el.scrollBy({ left: dir * (card.offsetWidth + GAP), behavior });
  };

  return (
    <Section id="testimonials" subtle>
      <SectionHeader index="05" eyebrow="kind words" title="What people I work with say" />
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Testimonials"
      >
        <div
          ref={track}
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="flex w-full flex-none snap-start flex-col md:w-[calc((100%-12px)/2)] lg:w-[calc((100%-24px)/3)]"
            >
              <Card eyebrow={`Fig 06.${i + 1}`} className="h-full [&>.pf-card-body]:h-full [&>.pf-card-body]:grid-rows-[auto_1fr]">
                <figure className="m-0 flex h-full flex-col gap-6">
                  <blockquote className="m-0 flex flex-col gap-3 text-ink">
                    <p className="text-h3 m-0">{t.heading}</p>
                    <p className="text-body m-0 text-ink-soft">“{t.quote}”</p>
                  </blockquote>
                  <figcaption className="mt-auto flex items-center gap-3">
                    {t.image ? (
                      <Image
                        src={t.image}
                        alt=""
                        width={36}
                        height={36}
                        className="size-9 flex-none rounded-full border border-line-strong object-cover"
                      />
                    ) : (
                      <span className="mono-label grid size-9 flex-none place-items-center rounded-full border border-line-strong bg-surface-hover text-ink-soft">
                        {initials(t.name)}
                      </span>
                    )}
                    <span className="flex flex-col">
                      <span className="text-body-sm font-medium text-ink">{t.name}</span>
                      <span className="mono-label text-muted">{t.position}</span>
                    </span>
                  </figcaption>
                </figure>
              </Card>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-center gap-2">
          <Button aria-label="Previous testimonials" className="size-11 !px-0 md:size-9" onClick={() => go(-1)}>
            <ArrowIcon className="rotate-180" />
          </Button>
          <Button aria-label="Next testimonials" className="size-11 !px-0 md:size-9" onClick={() => go(1)}>
            <ArrowIcon className="" />
          </Button>
        </div>
      </div>
    </Section>
  );
}
