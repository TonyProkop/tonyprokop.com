import type { BrandIconName } from "@/lib/brand-icons";

export type PaletteGroup = "Pages" | "Projects" | "Actions" | "Links";

export type PaletteGlyph =
  | "home"
  | "page"
  | "project"
  | "book"
  | "dumbbell"
  | "copy"
  | "theme"
  | "download"
  | "mail"
  | "link";

export type PaletteAction = "compose" | "toggle-theme" | "copy-email" | "download-resume";

export type PaletteItem = {
  id: string;
  group: PaletteGroup;
  title: string;
  /** One short line shown after the title. */
  subtitle: string;
  /** Extra search terms that aren't shown. */
  keywords?: string;
  /** Internal route or external URL. Omit for actions. */
  href?: string;
  /** Global shortcut shown on the row, e.g. ["G", "A"]. Only list shortcuts that are wired up. */
  keys?: string[];
  icon: PaletteGlyph | { brand: BrandIconName };
  action?: PaletteAction;
};

export type ComposePayload = {
  message: string;
  name: string;
  email: string;
  company: string;
  reason: string;
  sendCopy: boolean;
};
