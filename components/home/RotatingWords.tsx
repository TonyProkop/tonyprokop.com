"use client";

import { useEffect, useState } from "react";

type RotatingWordsProps = {
  words: string[];
  interval?: number;
};

export function RotatingWords({ words, interval = 4200 }: RotatingWordsProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (words.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(
      () => setActive((i) => (i + 1) % words.length),
      interval,
    );
    return () => window.clearInterval(id);
  }, [words.length, interval]);

  // Every phrase sits in the same grid cell so the box is as wide as the longest one and nothing shifts when they swap.
  return (
    <span className="inline-grid">
      {words.map((word, i) => (
        <span
          key={word}
          aria-hidden={i !== active}
          className={`col-start-1 row-start-1 transition-[opacity,filter] duration-[1000ms] ease-in-out ${i === active ? "opacity-100 blur-0" : "opacity-0 blur-[8px]"}`}
        >
          {word}.
        </span>
      ))}
    </span>
  );
}
