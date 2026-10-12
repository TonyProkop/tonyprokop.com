import { previousCompanies } from "@/data/experience";

/** Companies with a logo in `public/companies`; the logo is drawn as a mask so it follows the theme's text colour. */
const logos: Record<string, { src: string; ratio: string; height: string }> = {
  "WP Engine": { src: "/companies/wpengine.svg", ratio: "1254 / 400", height: "h-11" },
  Flywheel: { src: "/companies/flywheel.svg", ratio: "718.7 / 292.7", height: "h-11" },
  "Speedway Motors": { src: "/companies/speedway.svg", ratio: "3328 / 1992", height: "h-14" },
};

const links: Record<string, string> = {
  "WP Engine": "https://wpengine.com/",
  Flywheel: "https://getflywheel.com/",
  "Speedway Motors": "https://www.speedwaymotors.com/",
};

/** "Previously at" strip under the hero: mono label cell, then one cell per company. */
export function Strip() {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)] border-t border-line sm:grid-cols-[180px_repeat(3,minmax(0,1fr))]">
      <span className="mono-label border-b border-line px-5 py-5 text-muted flex items-center justify-center text-center sm:border-b-0 sm:py-7 sm:px-6">previously at</span>
      {previousCompanies.map((name) => (
        <a
          key={name}
          href={links[name]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-h3 flex items-center justify-center border-line px-5 py-5 text-center tracking-tight text-ink-soft not-last:border-b sm:border-b-0 sm:border-l sm:px-6 sm:py-7"
        >
          {logos[name] ? (
            <span
              role="img"
              aria-label={name}
              className={`block ${logos[name].height} bg-current [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain]`}
              style={{ aspectRatio: logos[name].ratio, maskImage: `url("${logos[name].src}")`, WebkitMaskImage: `url("${logos[name].src}")` }}
            />
          ) : (
            name
          )}
        </a>
      ))}
    </div>
  );
}
