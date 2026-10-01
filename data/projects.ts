import type { BadgeTone } from "@/components/ui/Badge";

export type Project = {
  index: string;
  title: string;
  description: string;
  tags: string[];
  meta: string;
  status: string;
  statusTone: BadgeTone;
  category: "Product" | "Infrastructure" | "Open source";
  href: string;
};

/** Sample projects from the mocks — replace with your own. */
export const projects: Project[] = [
  {
    "index": "01",
    "title": "[Project one]",
    "description": "A local-first sync engine. Edits apply instantly and reconcile in the background; cut perceived latency from 900 ms to under 50.",
    "tags": [
      "TypeScript",
      "CRDT",
      "SQLite"
    ],
    "meta": "2026 · lead engineer",
    "status": "Live",
    "statusTone": "success",
    "category": "Product",
    "href": "/work"
  },
  {
    "index": "02",
    "title": "[Project two]",
    "description": "Event-sourced billing pipeline that replays a week of history in seconds. Open source, used by [N] teams.",
    "tags": [
      "Rust",
      "Postgres",
      "Kafka"
    ],
    "meta": "2025 · open source",
    "status": "Beta",
    "statusTone": "warning",
    "category": "Open source",
    "href": "/work"
  },
  {
    "index": "03",
    "title": "[Project three]",
    "description": "Real-time observability for a fleet of edge workers. Brought incident detection from minutes to seconds.",
    "tags": [
      "Go",
      "ClickHouse",
      "React"
    ],
    "meta": "2024 · [Company]",
    "status": "Shipped",
    "statusTone": "success",
    "category": "Infrastructure",
    "href": "/work"
  },
  {
    "index": "04",
    "title": "[Project four]",
    "description": "A keyboard-first issue triage tool for a 40-person support team. Median time-to-first-response down by half.",
    "tags": [
      "Next.js",
      "tRPC",
      "Postgres"
    ],
    "meta": "2023 · freelance",
    "status": "Live",
    "statusTone": "success",
    "category": "Product",
    "href": "/work"
  }
];
