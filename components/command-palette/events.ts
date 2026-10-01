export const OPEN_COMMAND_PALETTE = "command-palette:open";

export type PaletteTab = "search" | "compose";

/** Open the command palette from anywhere (nav search button, empty states, CTAs). */
export function openCommandPalette(tab: PaletteTab = "search") {
  window.dispatchEvent(new CustomEvent<{ tab: PaletteTab }>(OPEN_COMMAND_PALETTE, { detail: { tab } }));
}
