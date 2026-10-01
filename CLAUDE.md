@AGENTS.md
@DESIGN.md

## Working on the UI

- Follow `DESIGN.md`. Use the tokens through Tailwind (`bg-surface`, `text-ink-soft`, `border-line`, `text-h2`, `mono-label` …) — never hard-code hex values or new font sizes.
- Reuse `@/components/ui` and `@/components/command-palette` before writing new components. Extend them rather than forking styles.
- `design/mocks/*.html` are the visual spec for each page; match them. `design/tokens.json` is the token source — regenerate `styles/tokens.css` from it if it changes.
- Content placeholders are written in `[brackets]`; keep them visible until real content replaces them.
- Check new pages at 390px and 1440px, in both themes (`<html data-theme="light">`), and with the keyboard.
