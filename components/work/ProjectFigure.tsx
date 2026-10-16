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

type Render = (title: string, sizes: string) => ReactNode;

/** A real screenshot under the same fake browser header the sketches use. */
function Screenshot({ chrome, src, alt, sizes }: { chrome: string; src: string; alt: string; sizes: string }) {
  return (
    <div className="h-full">
      <Chrome title={chrome} />
      <Image src={src} alt={alt} width={1600} height={968} sizes={sizes} className="h-[calc(100%-29px)] w-full object-cover object-top" />
    </div>
  );
}

/** Figures per project, in order. Fig 01 is the figure on the project card. */
const figures: Record<string, Render[]> = {
  "wp-engine": [
    (_t, sizes) => <Screenshot chrome="wpengine.com" src="/work/wp-engine.jpg" alt="WP Engine homepage with the managed hosting pitch, dashboard previews and the Walter AI agent chat" sizes={sizes} />,
    (_t, sizes) => <Screenshot chrome="my.wpengine.com - dashboard" src="/work/wp-engine-dashboard.jpg" alt="The WP Engine portal dashboard with update counts, plan overview and account health" sizes={sizes} />,
    (_t, sizes) => <Screenshot chrome="my.wpengine.com - sites" src="/work/wp-engine-sites.jpg" alt="The WP Engine portal My Sites page listing sites with their PHP and WordPress versions, storage and bandwidth" sizes={sizes} />,
    (_t, sizes) => <Screenshot chrome="my.wpengine.com - site overview" src="/work/wp-engine-site-overview.jpg" alt="The WP Engine portal overview for a single site with updates, extensions and Lighthouse performance" sizes={sizes} />,
  ],
  flywheel: [(_t, sizes) => <Screenshot chrome="getflywheel.com" src="/work/flywheel.jpg" alt="Flywheel homepage with the managed hosting pitch and a dashboard preview" sizes={sizes} />],
  "speedway-motors": [(_t, sizes) => <Screenshot chrome="speedwaymotors.com" src="/work/speedway-motors.jpg" alt="Speedway Motors homepage with the vehicle fitment finder and a promotional banner" sizes={sizes} />],
  fretta: [(_t, sizes) => <Screenshot chrome="fretta" src="/work/fretta.jpg" alt="Fretta landing page with the headline Know every note on the neck and a fretboard note-finding game" sizes={sizes} />],
  "grocery-prices": [(t) => <PriceChart title={t} />],
  "number-charts": [(t) => <NumberChart title={t} />],
};

/** The framed figure for a project: a screenshot or sketch of the work itself. `shot` picks the figure (0 = card figure). */
export function ProjectFigure({ slug, title, shot = 0, sizes = "(min-width: 1120px) 520px, 90vw" }: { slug: string; title: string; shot?: number; sizes?: string }) {
  return <>{figures[slug]?.[shot]?.(title, sizes) ?? <Chrome title={title} />}</>;
}
