import Link from "next/link";
import { BrandIcon, ButtonLink, SectionHeader } from "@/components/ui";
import { usesGroups } from "@/data/uses";
import { Section } from "./Section";

const featured = [
  "TypeScript", "Go", "Ruby", "React", "Next.js", "PostgreSQL", "Docker", "Terraform",
  "Neovim", "Ghostty", "Raycast", "Slack", "Notion", "Figma", "Spotify", "Claude",
];

const items = featured.flatMap((label) => usesGroups.flatMap((g) => g.items).filter((i) => i.label === label && i.icon));

export function UsesPreview() {
  return (
    <Section id="uses" subtle>
      <SectionHeader
        index="03"
        eyebrow="uses"
        title="What's on my desk"
        lede="The languages, tools and apps I reach for every day."
        action={
          <ButtonLink href="/uses" variant="ghost" arrow>
            Everything I use
          </ButtonLink>
        }
      />
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        {items.map((it) => (
          <Link key={it.label} href="/uses" className="pf-tile" title={it.label}>
            <BrandIcon name={it.icon!} size={26} brand aria-hidden="true" />
            <span>{it.label}</span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
