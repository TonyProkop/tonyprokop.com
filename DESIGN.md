# Design — tonyprokop.com v2

The design for the v2 portfolio: what it should feel like, the rules, the system, every page, and the decisions made along the way. Read this before building or changing any UI.

## Sources

| What | Where |
| --- | --- |
| Design system (tokens, type, components, brand book) | https://claude.ai/artifact/FF3rpANQtPyi6pfbJG5wCK (private to Tony) |
| Design canvas (all pages, clickable) | https://claude.ai/artifact/UuL7FiQVhf85KNUXbWJ8Dx (private to Tony) |
| Static exports of every page | `design/mocks/` — open in a browser; index in `design/mocks/README.md` |
| Token source of truth | `design/tokens.json` |
| Live component preview | `/design` route (`app/(dev)/design`), noindex |

If the canvas and this file disagree, the canvas is newer — update this file.

## Point of view

The site should feel like a well-made developer tool: fast, precise, keyboard-friendly, and confident enough to stay quiet. Influences: Raycast, Motion, Next.js/Vercel, Linear, Herdr.

What those sites share, and what this site copies:

1. **The work is the hero.** Show real artifacts — screenshots, UI, terminals, code — in framed figures. No stock illustration, no 3D blobs.
2. **Monochrome with one signal.** Everything is ink on near-black in greys; signal orange (`accent`) appears once or twice per viewport.
3. **Lines, not shadows.** Structure comes from 1px hairlines, a framed content column and faint grids. Only two shadows exist.
4. **Two voices.** Geist sans speaks (headlines, prose, buttons). Geist Mono annotates (labels, indices, metadata, code). Never long prose in mono.
5. **Indexed like documentation.** Sections are numbered `01 / selected work`; figures are captioned `FIG 01`.
6. **Fast, quiet motion.** Hovers 120ms, lifts 200ms, one-time reveals 420ms, all on `ease-out`. Nothing loops (except the tiny “now playing” bars). Respect reduced motion.

Deliberate departures from the references: one warm accent (not the blue/violet every AI site uses); sans headlines with mono annotations (Herdr's all-mono headlines were too tiring for a whole site); no glass or glow.

## Voice

- First person, plain and specific: “I rebuilt the sync layer so edits apply instantly.”
- Lead with outcomes and numbers you can defend. No filler stats.
- Sentence case for headings, no trailing full stops. Buttons are sentence case. Mono labels are lowercase; `mono-meta` is uppercase.
- No emoji in UI. `·` separates metadata; `/` separates an index from its label.

## Tokens and Tailwind

Source: `design/tokens.json` → `styles/tokens.css` (CSS variables, both themes) → `app/globals.css` (Tailwind v4 `@theme`).

- **Themes.** Dark is the default. Light applies when the system prefers light (unless `<html data-theme="dark">`), or when `<html data-theme="light">`. The ⌘K palette's “Toggle theme” sets `data-theme`. A persisted toggle is still to build.
- **Colour utilities.** `bg-bg`, `bg-bg-subtle`, `bg-surface`, `bg-surface-hover`, `border-line`, `border-line-strong`, `border-control-border`, `text-ink`, `text-ink-soft`, `text-muted`, `text-faint` (decoration only), `bg-accent` / `text-on-accent`, `text-accent-text`, `bg-accent-soft`, `text-success|warning|danger`, `bg-code-bg` …
- **Text pairs** (all ≥ 4.5:1 in both themes): `ink`, `ink-soft`, `muted` on `bg`, `bg-subtle`, `surface`, `surface-hover`. `accent-text` for orange text. `faint` is never text.
- **Type utilities.** `text-display` (hero only, 44px under 640px), `text-h1`, `text-h2`, `text-h3`, `text-lede`, `text-body`, `text-body-sm`; mono: `mono-label`, `mono-meta`, `mono-code`. Headlines are tightly tracked; body is not.
- **Radii.** `rounded-xs` 4 (badges, kbd, checkbox) · `rounded-sm` 6 (buttons, inputs) · `rounded-md` 10 (cards, code) · `rounded-lg` 14 (large figures) · `rounded-full` dots only. Buttons are not pills.
- **Spacing.** 4px base — Tailwind's default scale already matches. Card padding 24px, grid gaps 12px, section padding 96px desktop / 64px mobile, gutters 48px / 20px.
- **Layout.** One centred column, `max-w-site` (1120px), with 1px side rules (`border-x border-line`) and a top rule between sections. Prose max `max-w-prose` (680px). Nav is 56px, sticky, blurred.
- **Shadows.** `shadow-[var(--shadow-highlight)]` on raised surfaces (with a `line` border); `var(--shadow-overlay)` only for floating things.
- **Focus.** Solid 2px `accent` outline, 2px offset, everywhere. Inputs swap their border to `accent` instead.

## Components

`components/ui` (barrel: `@/components/ui`). Styles are the `pf-*` classes in `styles/components.css` (in the `components` layer, so Tailwind utilities override them).

| Component | Notes |
| --- | --- |
| `Button`, `ButtonLink` | variants `primary` (ink) · `secondary` · `ghost` · `accent` (once per page); sizes `sm`/`md`/`lg`; `arrow`, `kbd`. `ButtonLink` uses `next/link` for internal paths. |
| `Kbd` | Keycap. Only show shortcuts that work. |
| `Badge` | `neutral` (stacks), `accent` (“New”), `success`/`warning` + `dot` (status, always with a word). |
| `Card` | Hairline surface; `eyebrow`, `title`, optional `href`. Don't nest. |
| `ProjectCard` | Figure (children = the real work) + index, title, one-sentence description, ≤4 tags, meta, status. |
| `Field` + `Input`, `Textarea`, `Select`, `Checkbox` | Field wires label/id/aria; `error` replaces `hint`. Client components. |
| `CodeBlock` | Dark in both themes, filename + copy, tiny highlighter. Use Shiki for real articles. |
| `Nav` | Monogram + name, mono links (current = accent underline), ⌘K button, one CTA. Mobile menu still to build. |
| `SectionHeader` | `index`, `eyebrow`, `title`, `lede`, `action`. |
| `EntryRow` | Hairline row: mono date, title/subtitle, aside, arrow when linked. Wrap lists in `.pf-entries`. |
| Icons | `components/ui/icons.tsx`; brand marks from Simple Icons (CC0) in `lib/brand-icons.ts` — monochrome, never hand-drawn. Generic icons are Lucide-style 1.5px strokes. |
| `CommandPalette` | `components/command-palette`. See below. |

## Pages (information architecture)

Multi-page, not a one-pager: each home section previews a page and links to it. Nav: about, work, uses, experience, contact + “Résumé”.

| Route | Content |
| --- | --- |
| `/` | Hero (badge, display headline, lede, “View my work” + “Get in touch”, links, ⌘K hint, `about.ts` code figure on a grid stage) → strip under the hero (**open question**, see below) → 01 About preview → 02 Selected work (2 featured) → 03 Uses (icon strip) → 04 Experience (3 rows) → 05 Testimonials (3 quotes) → 06 Contact band (“Let's build something.”, Get in touch + Copy email) → footer |
| `/about` | Bio + portrait + facts → 02 **Where I am** (map grid with pin, Omaha NE, live Central-time clock with “hours ahead/behind you” and a “right now” status, weather) → reading / listening / playing / last workout. Two layouts on the canvas: **A** compact strips + “How I work” cards; **B** full numbered sections, no “How I work” (newer; leaning B) |
| `/about/bookshelf` | Breadcrumb back to About. 2026 goal bar, currently reading (cover, progress), read this year (ratings, month, year filter), want to read |
| `/about/workouts` | Breadcrumb back to About. Sessions/volume/streak stats, weekly volume bar chart (12 weeks, this week in accent, hover values), personal records, **paginated** log (5 per page) of **collapsible** session cards (`<details>`) with sets × reps, weight and volume per exercise |
| `/work` | Filters, all project cards, side projects / OSS list |
| `/uses` | Icon tiles by category — Languages, Frameworks & libraries, Data & infrastructure, Editor & terminal, Apps — names only, no descriptions; hardware as a simple list; sticky category index |
| `/experience` | Role blocks: dates, place, title · company, summary, 2–3 highlights, stack badges; résumé download |
| `/contact` | Form (name, email, company, reason, message, opt-in), email + copy, availability, reply time, socials |

Removed on purpose: Education section; tech-stack-with-descriptions (became Uses icons); “Older sessions” page (became pagination).

### ⌘K command palette

`components/command-palette/CommandPalette.tsx` — mount once (root layout) with `paletteItems` from `data/palette.ts`. ⌘K / Ctrl+K toggles; `openCommandPalette(tab)` opens it from anywhere; the nav search button uses that.

- **Search tab.** Groups: Pages, Projects, Actions, Links, with counts. Ranks title-prefix > title-contains > other fields. ↑/↓ wrap, ↵ runs, Esc clears then closes. Highlighted row shows “Go to page / Run / Open link ↵”. Empty state offers “Ask me about ‘…’” (→ Compose with the query) and “Clear search”.
- **Actions.** Send me a message (→ Compose, carries the query), Copy email, Toggle theme, Download résumé. Feedback appears as a toast in the footer.
- **Global shortcuts.** “G then H/A/W/U/E/C” navigate (only when not typing).
- **Compose tab.** Step 1: “To Tony Prokop · replies in ~2 days”, borderless composer, starter chips, ⌘↵ Continue (min ~10 characters). Step 2: message quote with edit, Name + Email (required, validated), Company (optional), Reason, “Send me a copy”. Step 3: “Message sent” with Write another / Back to search.
- **Sending is not wired.** Pass `onSend` (route handler / server action → Resend, Postmark, Formspree). Without it the send is simulated. The `/contact` form should share the same backend.
- **Phone.** Full-width sheet; hints, shortcuts and subtitles hidden.

## Data (sample content)

`data/` holds typed sample content from the mocks. Replace as real content arrives:

- `site.ts` — name, initials, location (Omaha, Nebraska), time zone (America/Chicago), email **[placeholder]**, socials (GitHub set; others TODO), résumé path.
- `projects.ts`, `experience.ts` — sample; Tony has **two** previous companies.
- `uses.ts` — sample tool list (icons from Simple Icons) + hardware placeholders.
- `books.ts` — real titles but not Tony's list; covers are typographic placeholders until a cover source is chosen.
- `workouts.ts` — generated sample log (18 sessions, Aug 31 – Sep 29 2026); volume = sets × reps × weight.
- `palette.ts` — everything ⌘K can find.

Live data planned on About and its subpages: Spotify (now playing, top tracks), a game platform (Steam/PSN/Xbox — TBD), weather for Omaha, Hevy (workouts), Goodreads/StoryGraph or Open Library (books). Fetch at build time or on a revalidate interval; never block render on them.

## Open questions

1. **The strip under the hero.** Tony only has two previous companies, so five logo cells don't work. Options discussed: (1) “right now” live strip — Omaha time, reading, listening, last workout, shipping (**recommended**); (2) three wider cells — Now + two previous companies with role and years; (3) daily-stack icons; (4) real numbers only; (5) GitHub contribution graph; (6) contributed-to / featured-in. Not decided.
2. **About A vs B.** B (full sections, no “How I work”) is the latest exploration.
3. Mobile nav menu, persisted theme toggle, 404 page, OG images — not designed yet.
4. Contact/compose email backend and spam protection.

## Accessibility checklist

Real `<a>`/`<button>`/`<input>` + `<label>` everywhere; ≥ 44px touch targets on mobile; status never by colour alone; text contrast ≥ 4.5:1 in both themes; visible focus; palette is a modal dialog with a combobox + listbox and `aria-activedescendant`; respect `prefers-reduced-motion`.
