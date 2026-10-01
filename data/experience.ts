/** Sample roles from the mocks. You mentioned two previous companies — replace these with yours. */
export type Role = { dates: string; title: string; company: string; place: string; summary: string; highlights: string[]; stack: string[] };

export const experience: Role[] = [
  {
    "dates": "2024 — now",
    "title": "Senior Software Engineer",
    "company": "[Company]",
    "place": "[City]",
    "summary": "Lead on the sync and storage platform that every product surface depends on.",
    "highlights": [
      "Rebuilt offline support on a local-first model; cold-start time down 60%.",
      "Led a team of [N] engineers through a zero-downtime storage migration.",
      "Introduced design docs and a weekly architecture review."
    ],
    "stack": [
      "TypeScript",
      "Go",
      "Postgres",
      "SQLite"
    ]
  },
  {
    "dates": "2021 — 2024",
    "title": "Software Engineer",
    "company": "[Company]",
    "place": "Remote",
    "summary": "Built the billing pipeline and the internal tools team's first design system.",
    "highlights": [
      "Designed an event-sourced billing pipeline handling [N] events a day.",
      "Shipped a component library adopted by [N] internal apps.",
      "Cut CI time from 25 to 8 minutes."
    ],
    "stack": [
      "Rust",
      "Kafka",
      "React"
    ]
  }
];
