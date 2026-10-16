import Image from "next/image";
import type { ReactNode } from "react";

function Chrome({ title }: { title: string }) {
  return (
    <div className="pf-chrome">
      <i />
      <i />
      <i />
      <span>{title}</span>
    </div>
  );
}

/** A price line: a handful of points trending up, last point in accent. */
function PriceChart({ title }: { title: string }) {
  const pts = [38, 34, 40, 36, 48, 44, 56, 62];
  const step = 100 / (pts.length - 1);
  const path = pts.map((y, i) => `${i === 0 ? "M" : "L"}${(i * step).toFixed(1)} ${(100 - y).toFixed(1)}`).join(" ");
  return (
    <div className="h-full">
      <Chrome title={title} />
      <div className="flex h-[calc(100%-29px)] flex-col gap-2 p-3.5">
        <div className="flex items-baseline justify-between">
          <span className="mono-meta text-muted">eggs, dozen</span>
          <span className="mono-label text-accent-text">+18%</span>
        </div>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="min-h-0 grow" aria-hidden="true">
          {[25, 50, 75].map((y) => (
            <line key={y} x1="0" x2="100" y1={y} y2={y} stroke="var(--line)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          ))}
          <path d={path} fill="none" stroke="var(--ink-soft)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
          <circle cx="100" cy={100 - pts[pts.length - 1]} r="2.5" fill="var(--accent)" />
        </svg>
      </div>
    </div>
  );
}

/** A Nashville number chart: bars of chord numbers. */
function NumberChart({ title }: { title: string }) {
  const bars_ = [["1", "1"], ["4", "4"], ["1", "1"], ["5", "5"]];
  return (
    <div className="h-full">
      <Chrome title={title} />
      <div className="flex flex-col gap-3 p-3.5">
        <div className="flex items-baseline justify-between">
          <span className="mono-label text-ink">Key of G</span>
          <span className="mono-meta text-muted">4/4 · 96 bpm</span>
        </div>
        <div className="grid grid-cols-4 border border-line">
          {bars_.map((b, i) => (
            <div key={i} className={`mono-label flex items-center justify-around py-3 text-ink ${i ? "border-l border-line" : ""} ${i === 3 ? "text-accent-text" : ""}`}>
              {b.map((n, j) => (
                <span key={j}>{n}</span>
              ))}
            </div>
          ))}
        </div>
        <div className="h-1.5 w-3/5 rounded-xs bg-line-strong" />
      </div>
    </div>
  );
}

const figures: Record<string, (title: string, sizes: string) => ReactNode> = {
  "wp-engine": (_t, sizes) => (
    <div className="h-full">
      <Chrome title="wpengine.com" />
      <Image src="/work/wp-engine.jpg" alt="WP Engine homepage with the managed hosting pitch, dashboard previews and the Walter AI agent chat" width={1600} height={968} sizes={sizes} className="h-[calc(100%-29px)] w-full object-cover object-top" />
    </div>
  ),
  flywheel: (_t, sizes) => (
    <div className="h-full">
      <Chrome title="getflywheel.com" />
      <Image src="/work/flywheel.jpg" alt="Flywheel homepage with the managed hosting pitch and a dashboard preview" width={1600} height={968} sizes={sizes} className="h-[calc(100%-29px)] w-full object-cover object-top" />
    </div>
  ),
  "speedway-motors": (_t, sizes) => (
    <div className="h-full">
      <Chrome title="speedwaymotors.com" />
      <Image src="/work/speedway-motors.jpg" alt="Speedway Motors homepage with the vehicle fitment finder and a promotional banner" width={1600} height={968} sizes={sizes} className="h-[calc(100%-29px)] w-full object-cover object-top" />
    </div>
  ),
  fretta: (_t, sizes) => (
    <div className="h-full">
      <Chrome title="fretta" />
      <Image src="/work/fretta.jpg" alt="Fretta landing page with the headline Know every note on the neck and a fretboard note-finding game" width={1600} height={968} sizes={sizes} className="h-[calc(100%-29px)] w-full object-cover object-top" />
    </div>
  ),
  "grocery-prices": (t) => <PriceChart title={t} />,
  "number-charts": (t) => <NumberChart title={t} />,
};

/** The framed figure for a project card: a sketch of the work itself (replace with real screenshots as they arrive). */
export function ProjectFigure({ slug, title, sizes = "(min-width: 1120px) 520px, 90vw" }: { slug: string; title: string; sizes?: string }) {
  return <>{figures[slug]?.(title, sizes) ?? <Chrome title={title} />}</>;
}
