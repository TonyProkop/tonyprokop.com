import { experience } from "@/data/experience";

/** Strip under the hero. Open question in DESIGN.md - this is option 2: "now" plus the previous companies. */
export function Strip() {
  const [now, ...previous] = experience;
  const cells = [
    { label: "now", company: now.company, detail: `${now.title} · ${now.dates}` },
    ...previous.map((r) => ({ label: "previously", company: r.company, detail: `${r.title} · ${r.dates}` })),
  ];
  return (
    <div className="grid border-t border-line md:grid-cols-3">
      {cells.map((c, i) => (
        <div key={i} className="flex flex-col gap-1 border-line px-5 py-7 max-md:border-b max-md:last:border-b-0 sm:px-12 md:border-l md:px-6 md:first:border-l-0 md:first:pl-12">
          <span className="mono-label text-muted">{c.label}</span>
          <span className="text-h3 text-ink-soft">{c.company}</span>
          <span className="mono-label text-muted">{c.detail}</span>
        </div>
      ))}
    </div>
  );
}
