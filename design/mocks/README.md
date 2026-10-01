# Mocks

Static reference exports of every page designed on the canvas. Open any file directly in a browser. They are the visual spec, not app code: no scripts, dark theme, sample content (placeholders in `[brackets]`).

| File | Page | Route it describes |
| --- | --- | --- |
| `home.html` | Home: hero, “previously at” strip, previews of each section | `/` |
| `about.html` | About (A): bio, “Where I am”, compact strips for reading / listening / playing / last workout, “How I work” | `/about` |
| `about-b.html` | About (B): same top, then full numbered sections for reading, listening, playing, training; no “How I work” | `/about` (alternative) |
| `bookshelf.html` | Bookshelf: reading goal, currently reading, read this year, want to read | `/about/bookshelf` |
| `workouts.html` | Workouts: stats, weekly volume chart, personal records, paginated collapsible session log (first page) | `/about/workouts` |
| `work.html` | Work: filters, project cards, side projects | `/work` |
| `uses.html` | Uses: icon grids by category, hardware list | `/uses` |
| `experience.html` | Experience: role blocks with highlights and stack | `/experience` |
| `contact.html` | Contact: form, email, availability, socials | `/contact` |
| `palette-*.html` | ⌘K command palette: search, compose, details (error state), sent | overlay on any page |
| `palette-phone-*.html` | Same palette at 390px | overlay on any page |

The live, clickable versions (pagination, compose flow, theme toggle, live clock) are on the design canvas linked in `DESIGN.md`.
