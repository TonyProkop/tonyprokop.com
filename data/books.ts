/**
 * Sample bookshelf from the mocks (real titles, but not your list).
 * `tone` picks the placeholder cover colour until real covers are wired up
 * (Open Library covers API or Goodreads/StoryGraph export).
 */
export type CoverTone = "ink" | "accent" | "raised" | "strong" | "muted";

export const books: {
  reading: Array<{ title: string; author: string; tone: CoverTone; progress: number; pages: string; started: string }>;
  finished: Array<{ title: string; author: string; tone: CoverTone; rating: number; month: string }>;
  wantToRead: Array<{ title: string; author: string; tone: CoverTone }>;
  goal: { year: number; target: number; done: number };
} = {
  "reading": [
    {
      "title": "Designing Data-Intensive Applications",
      "author": "Martin Kleppmann",
      "tone": "ink",
      "progress": 46,
      "pages": "Page 282 of 613",
      "started": "Started Sep 12"
    },
    {
      "title": "Project Hail Mary",
      "author": "Andy Weir",
      "tone": "accent",
      "progress": 18,
      "pages": "Page 89 of 496",
      "started": "Started Sep 27"
    }
  ],
  "finished": [
    {
      "title": "A Philosophy of Software Design",
      "author": "John Ousterhout",
      "tone": "raised",
      "rating": 5,
      "month": "Sep"
    },
    {
      "title": "The Pragmatic Programmer",
      "author": "Hunt & Thomas",
      "tone": "strong",
      "rating": 4,
      "month": "Aug"
    },
    {
      "title": "Thinking in Systems",
      "author": "Donella Meadows",
      "tone": "ink",
      "rating": 5,
      "month": "Aug"
    },
    {
      "title": "Shape Up",
      "author": "Ryan Singer",
      "tone": "muted",
      "rating": 4,
      "month": "Jul"
    },
    {
      "title": "The Phoenix Project",
      "author": "Kim, Behr & Spafford",
      "tone": "raised",
      "rating": 3,
      "month": "Jun"
    },
    {
      "title": "Staff Engineer",
      "author": "Will Larson",
      "tone": "accent",
      "rating": 4,
      "month": "May"
    },
    {
      "title": "Dune",
      "author": "Frank Herbert",
      "tone": "strong",
      "rating": 5,
      "month": "Apr"
    },
    {
      "title": "Accelerate",
      "author": "Forsgren, Humble & Kim",
      "tone": "ink",
      "rating": 4,
      "month": "Mar"
    },
    {
      "title": "Working in Public",
      "author": "Nadia Eghbal",
      "tone": "muted",
      "rating": 4,
      "month": "Feb"
    },
    {
      "title": "Klara and the Sun",
      "author": "Kazuo Ishiguro",
      "tone": "raised",
      "rating": 4,
      "month": "Feb"
    },
    {
      "title": "Release It!",
      "author": "Michael Nygard",
      "tone": "strong",
      "rating": 5,
      "month": "Jan"
    },
    {
      "title": "The Mythical Man-Month",
      "author": "Fred Brooks",
      "tone": "ink",
      "rating": 3,
      "month": "Jan"
    }
  ],
  "wantToRead": [
    {
      "title": "Database Internals",
      "author": "Alex Petrov",
      "tone": "raised"
    },
    {
      "title": "Crafting Interpreters",
      "author": "Robert Nystrom",
      "tone": "ink"
    },
    {
      "title": "The Three-Body Problem",
      "author": "Liu Cixin",
      "tone": "strong"
    },
    {
      "title": "An Elegant Puzzle",
      "author": "Will Larson",
      "tone": "muted"
    },
    {
      "title": "Tidy First?",
      "author": "Kent Beck",
      "tone": "accent"
    },
    {
      "title": "Piranesi",
      "author": "Susanna Clarke",
      "tone": "raised"
    },
    {
      "title": "Systems Performance",
      "author": "Brendan Gregg",
      "tone": "strong"
    },
    {
      "title": "Four Thousand Weeks",
      "author": "Oliver Burkeman",
      "tone": "ink"
    }
  ],
  "goal": {
    "year": 2026,
    "target": 24,
    "done": 12
  }
};
