import type { PaletteItem } from "@/components/command-palette/types";
import { projects } from "./projects";
import { site } from "./site";

/**
 * Everything the ⌘K palette can find. Routes assume the page structure from the mocks
 * (Bookshelf and Workouts live under /about). Keys like ["G","A"] are real global shortcuts.
 */
export const paletteItems: PaletteItem[] = [
  {
    "id": "pg-home",
    "group": "Pages",
    "title": "Home",
    "subtitle": "Start here",
    "keywords": "index landing",
    "href": "/",
    "keys": [
      "G",
      "H"
    ],
    "icon": "home"
  },
  {
    "id": "pg-about",
    "group": "Pages",
    "title": "About",
    "subtitle": "Bio, Omaha, what I'm up to",
    "keywords": "me bio location",
    "href": "/about",
    "keys": [
      "G",
      "A"
    ],
    "icon": "page"
  },
  {
    "id": "pg-work",
    "group": "Pages",
    "title": "Work",
    "subtitle": "Selected projects and write-ups",
    "keywords": "projects portfolio case studies",
    "href": "/work",
    "keys": [
      "G",
      "W"
    ],
    "icon": "page"
  },
  {
    "id": "pg-uses",
    "group": "Pages",
    "title": "Uses",
    "subtitle": "Languages, tools and apps I use",
    "keywords": "stack tools setup gear",
    "href": "/uses",
    "keys": [
      "G",
      "U"
    ],
    "icon": "page"
  },
  {
    "id": "pg-experience",
    "group": "Pages",
    "title": "Experience",
    "subtitle": "Where I've worked",
    "keywords": "resume cv jobs history",
    "href": "/experience",
    "keys": [
      "G",
      "E"
    ],
    "icon": "page"
  },
  {
    "id": "pg-contact",
    "group": "Pages",
    "title": "Contact",
    "subtitle": "Send me a message",
    "keywords": "email hire form",
    "href": "/contact",
    "keys": [
      "G",
      "C"
    ],
    "icon": "mail"
  },
  {
    "id": "pg-bookshelf",
    "group": "Pages",
    "title": "Bookshelf",
    "subtitle": "Reading now, read, want to read",
    "keywords": "books reading",
    "href": "/about/bookshelf",
    "keys": [],
    "icon": "book"
  },
  {
    "id": "pg-workouts",
    "group": "Pages",
    "title": "Workouts",
    "subtitle": "Training log and weekly volume",
    "keywords": "gym lifting training fitness",
    "href": "/about/workouts",
    "keys": [],
    "icon": "dumbbell"
  },
  ...projects.map(
    (p): PaletteItem => ({
      id: `pr-${p.index}`,
      group: "Projects",
      title: p.title,
      subtitle: p.description.split(". ")[0],
      keywords: p.tags.join(" ").toLowerCase(),
      href: p.href,
      icon: "project",
    }),
  ),
  {
    "id": "ac-compose",
    "group": "Actions",
    "title": "Send me a message",
    "subtitle": "Write it here — no mail app needed",
    "keywords": "email contact compose write hire",
    "icon": "mail",
    "action": "compose"
  },
  {
    "id": "ac-copy",
    "group": "Actions",
    "title": "Copy email address",
    "subtitle": site.email,
    "keywords": "contact mail clipboard",
    "icon": "copy",
    "action": "copy-email"
  },
  {
    "id": "ac-theme",
    "group": "Actions",
    "title": "Toggle theme",
    "subtitle": "Switch between dark and light",
    "keywords": "dark light mode appearance",
    "icon": "theme",
    "action": "toggle-theme"
  },
  {
    "id": "ac-resume",
    "group": "Actions",
    "title": "Download résumé",
    "subtitle": "PDF",
    "keywords": "resume cv pdf",
    "icon": "download",
    "action": "download-resume"
  },
  {
    "id": "ln-github",
    "group": "Links",
    "title": "GitHub",
    "subtitle": "@TonyProkop",
    "keywords": "code source repos",
    "href": site.socials.github,
    "icon": {
      "brand": "github"
    }
  },
  {
    "id": "ln-linkedin",
    "group": "Links",
    "title": "LinkedIn",
    "subtitle": "Career history",
    "keywords": "career",
    "href": site.socials.linkedin,
    "icon": "link"
  },
  {
    "id": "ln-spotify",
    "group": "Links",
    "title": "Spotify",
    "subtitle": "What I'm listening to",
    "keywords": "music",
    "href": site.socials.spotify,
    "icon": {
      "brand": "spotify"
    }
  }
];

