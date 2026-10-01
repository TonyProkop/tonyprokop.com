import { previousCompanies } from "@/data/experience";

/** "Previously at" strip under the hero: mono label cell, then one cell per company. */
export function Strip() {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)] border-t border-line sm:grid-cols-[180px_repeat(3,minmax(0,1fr))] sm:items-center">
      <span className="mono-label border-b border-line px-5 py-5 text-muted sm:border-b-0 sm:py-7 sm:pl-12 sm:pr-6">previously at</span>
      {previousCompanies.map((name) => (
        <span
          key={name}
          className="text-h3 border-line px-5 py-5 text-center tracking-tight text-ink-soft not-last:border-b sm:border-b-0 sm:border-l sm:px-6 sm:py-7"
        >
          {name}
        </span>
      ))}
    </div>
  );
}
