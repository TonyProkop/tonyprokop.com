import { CSharp, Dotnet, Elasticsearch, Go, GoogleCloud, Javascript, MaterialUi, Postgresql, RailsIcon, TypescriptIcon, _React, _Vue } from "@dev.icons/react";
import type { BadgeTone } from "@/components/ui/Badge";
import type { Tech } from "./experience";

export type ProjectCategory = "Professional" | "Personal";

export type Project = {
  slug: string;
  index: string;
  title: string;
  description: string;
  tags: string[];
  meta: string;
  status: string;
  statusTone: BadgeTone;
  category: ProjectCategory;
  href: string;
  /** Detail page content. Items in [brackets] are placeholders. */
  year: string;
  role: string;
  timeline: string;
  team: string;
  company: string;
  /** One-line summary under the title. */
  summary: string;
  liveUrl?: string;
  sourceUrl?: string;
  /** Shown instead of actions when there is no public link. */
  noLink?: string;
  metrics: { value: string; label: string }[];
  problem: string[];
  did: string[];
  decisions: { title: string; body: string }[];
  stack: Tech[];
  /** One caption per figure, in order. Fig 01 is also the figure on the project card. */
  figureCaptions: string[];
  quote?: { text: string; name: string; title: string };
};

const decisionPlaceholders = [
  { title: "[Decision one]", body: "[What you chose, what you passed on, and what it cost.]" },
  { title: "[Decision two]", body: "[What you chose, what you passed on, and what it cost.]" },
  { title: "[Decision three]", body: "[What you chose, what you passed on, and what it cost.]" },
];

export const projectCategories: ProjectCategory[] = ["Professional", "Personal"];

/** Newest first. Items in [brackets] are placeholders until real content replaces them. */
export const projects: Project[] = [
  {
    slug: "wp-engine",
    index: "01",
    title: "WP Engine",
    description: "Core API infrastructure for the customer-facing platform, built to hold up under agentic workloads from the WP Engine MCP.",
    tags: ["TypeScript", "React", "Go", "Rails"],
    meta: "2022 - now · sr. staff engineer",
    status: "Live",
    statusTone: "success",
    category: "Professional",
    href: "/work/wp-engine",
    year: "2022 - now",
    role: "Full-stack engineer, Sr. Staff",
    timeline: "2022 - now",
    team: "[Team size]",
    company: "WP Engine",
    summary: "Core architecture for the next generation of WP Engine's customer-facing API, and the frontend platform on top of it.",
    noLink: "customer portal · sign-in required",
    metrics: [
      { value: "100%", label: "page load performance improvement" },
      { value: "45%", label: "drop in support chat volume" },
      { value: "12", label: "engineering teams on one app" },
    ],
    problem: [
      "The customer-facing application was split across 12 engineering teams, and page loads showed it. [Describe what was slow or painful about it.]",
      "The next generation of the API also had to hold up under agentic workloads, which arrived with the WP Engine MCP. [Describe the scale requirement.]",
    ],
    did: [
      "Built core API infrastructure to scale and meet the demand of agentic workloads upon release of the WP Engine MCP.",
      "Led a refactor of the core application to a single page app across 12 engineering teams.",
      "Shipped an AI chatbot that cut overall support chat volume by 45%.",
      "Maintain the component library used daily by 50+ engineers, and lead the frontend guild.",
    ],
    decisions: decisionPlaceholders,
    stack: [{ label: "TypeScript", icon: TypescriptIcon }, { label: "React", icon: _React }, { label: "Material UI", icon: MaterialUi }, { label: "Ruby on Rails", icon: RailsIcon }, { label: "Go", icon: Go }, { label: "PostgreSQL", icon: Postgresql }, { label: "Google Cloud", icon: GoogleCloud }],
    figureCaptions: ["The WP Engine homepage", "The portal dashboard: updates, plan overview and account health", "The My Sites list in the customer portal", "A single site's overview"],
  },
  {
    slug: "flywheel",
    index: "02",
    title: "Flywheel Growth Suite",
    description: "Flywheel's flagship product, built as the primary frontend engineer and shipped end to end in under 8 months.",
    tags: ["Vue", "JavaScript", "Rails", "PostgreSQL"],
    meta: "2020 - 2022 · sr. engineer",
    status: "Shipped",
    statusTone: "success",
    category: "Professional",
    href: "/work/flywheel",
    year: "2020 - 2022",
    role: "Full-stack engineer, Sr.",
    timeline: "2020 - 2022",
    team: "[Team size]",
    company: "Flywheel",
    summary: "Flywheel's flagship product, with me as the primary frontend engineer from first commit to launch.",
    noLink: "customer portal · sign-in required",
    metrics: [
      { value: "< 8 mo", label: "from start to shipped" },
      { value: "2", label: "major versions each of jQuery and Bootstrap upgraded" },
      { value: "[N]", label: "[what the third number measures]" },
    ],
    problem: [
      "Flywheel needed a flagship product, and the frontend had to be built from scratch on a short timeline. [Describe the goal and the customer.]",
      "Around it, an aging jQuery and Bootstrap codebase needed to stay compliant without stopping product work.",
    ],
    did: [
      "Wrote most of the Growth Suite frontend and shipped the product end to end in under 8 months.",
      "Upgraded jQuery and Bootstrap across two major versions app-wide, keeping the app compliant.",
      "Designed and taught Vue training modules through the mentorship program for junior and mid-level developers.",
      "Ran a dedicated technical Jira board for frontend architecture work outside normal product sprints.",
    ],
    decisions: decisionPlaceholders,
    stack: [{ label: "JavaScript", icon: Javascript }, { label: "Vue", icon: _Vue }, { label: "Ruby on Rails", icon: RailsIcon }, { label: "PostgreSQL", icon: Postgresql }],
    figureCaptions: ["The Flywheel homepage"],
  },
  {
    slug: "speedway-motors",
    index: "03",
    title: "Speedway Motors",
    description: "Checkout, search and shipping quotes for a large eCommerce site, with releases moving from bi-weekly to daily.",
    tags: ["React", "C#", ".NET", "Elasticsearch"],
    meta: "2014 - 2020 · web developer",
    status: "Shipped",
    statusTone: "success",
    category: "Professional",
    href: "/work/speedway-motors",
    year: "2014 - 2020",
    role: "Web developer",
    timeline: "2014 - 2020",
    team: "[Team size]",
    company: "Speedway Motors",
    summary: "Built and maintained the Speedway Motors eCommerce site for six years, from checkout to search to shipping.",
    liveUrl: "https://www.speedwaymotors.com",
    metrics: [
      { value: "Daily", label: "production deploys, up from bi-weekly" },
      { value: "6 yrs", label: "building and maintaining the site" },
      { value: "[N%]", label: "[conversion or search clickthrough lift]" },
    ],
    problem: [
      "A large parts catalogue only pays off if customers can find the right part and get through checkout. [Describe where the site was losing people.]",
      "Releases went out every two weeks, which made every improvement slow to ship and slow to measure.",
    ],
    did: [
      "Lifted conversion by optimizing the checkout funnel with A/B tests and analytics.",
      "Modernized the CI/CD pipeline, moving releases from bi-weekly to daily production deploys.",
      "Improved search clickthrough by iterating on the company's custom Elasticsearch engine.",
      "Built a shipping quote calculator for the cart that aggregates warehouses and carriers.",
    ],
    decisions: decisionPlaceholders,
    stack: [{ label: "React", icon: _React }, { label: "JavaScript", icon: Javascript }, { label: "C#", icon: CSharp }, { label: ".NET", icon: Dotnet }, { label: "Elasticsearch", icon: Elasticsearch }],
    figureCaptions: ["The Speedway Motors homepage"],
  },
  {
    slug: "fretta",
    index: "04",
    title: "Fretta",
    description: "A game that drills every note on the guitar neck, one note at a time against the clock, with streaks, ranked play and leaderboards.",
    tags: ["[Stack]"],
    meta: "[Year] · personal project",
    status: "[Status]",
    statusTone: "neutral",
    category: "Personal",
    href: "/work/fretta",
    year: "[Year]",
    role: "Creator",
    timeline: "[Timeline]",
    team: "Solo",
    company: "Personal project",
    summary: "A game that drills every note on the guitar neck, one note at a time against the clock.",
    noLink: "[link to come]",
    metrics: [
      { value: "[N]", label: "[what the first number measures]" },
      { value: "[N]", label: "[what the second number measures]" },
      { value: "[N]", label: "[what the third number measures]" },
    ],
    problem: [
      "Most guitarists learn a handful of shapes and never learn the whole fretboard. [Describe why that matters and how you noticed.]",
      "Fretta turns note recall into a short game with streaks, ranked play and leaderboards. [Describe what you wanted it to feel like.]",
    ],
    did: [
      "[Designed the game loop and the fretboard interface.]",
      "[Built the front end and the scoring.]",
      "[Built accounts, ranked play and leaderboards.]",
    ],
    decisions: decisionPlaceholders,
    stack: [{ label: "[Stack]" }],
    figureCaptions: ["The Fretta landing page and a round in progress"],
  },
  {
    slug: "grocery-prices",
    index: "05",
    title: "Grocery price tracker",
    description: "Tracks grocery prices over time, so I can see what is actually getting more expensive and where to shop.",
    tags: ["[Stack]"],
    meta: "[Year] · personal project",
    status: "[Status]",
    statusTone: "neutral",
    category: "Personal",
    href: "/work/grocery-prices",
    year: "[Year]",
    role: "Creator",
    timeline: "[Timeline]",
    team: "Solo",
    company: "Personal project",
    summary: "Tracks grocery prices over time, so I can see what is actually getting more expensive and where to shop.",
    noLink: "[link to come]",
    metrics: [
      { value: "[N]", label: "[what the first number measures]" },
      { value: "[N]", label: "[what the second number measures]" },
      { value: "[N]", label: "[what the third number measures]" },
    ],
    problem: [
      "Grocery prices move constantly and nobody remembers last month's. [Describe how you were tracking them before.]",
      "I wanted a record of what things cost and where, so decisions come from data instead of a feeling.",
    ],
    did: [
      "[Designed how prices are captured.]",
      "[Built the price history and comparison views.]",
      "[Automated whatever you could.]",
    ],
    decisions: decisionPlaceholders,
    stack: [{ label: "[Stack]" }],
    figureCaptions: ["[Screenshot of the price tracker]"],
  },
  {
    slug: "number-charts",
    index: "06",
    title: "Nashville number charts",
    description: "A catalog of guitar charts written in the Nashville Number System, searchable by song, key and progression.",
    tags: ["[Stack]"],
    meta: "[Year] · personal project",
    status: "[Status]",
    statusTone: "neutral",
    category: "Personal",
    href: "/work/number-charts",
    year: "[Year]",
    role: "Creator",
    timeline: "[Timeline]",
    team: "Solo",
    company: "Personal project",
    summary: "A catalog of guitar charts written in the Nashville Number System, searchable by song, key and progression.",
    noLink: "[link to come]",
    metrics: [
      { value: "[N]", label: "[what the first number measures]" },
      { value: "[N]", label: "[what the second number measures]" },
      { value: "[N]", label: "[what the third number measures]" },
    ],
    problem: [
      "Chord charts are written in one key, and numbers travel between keys. [Describe how you were keeping your charts before.]",
      "I wanted a catalog I could search by song, key and progression, and play from on stage.",
    ],
    did: [
      "[Designed the chart format.]",
      "[Built the catalog and search.]",
      "[Built the key transposition and the performance view.]",
    ],
    decisions: decisionPlaceholders,
    stack: [{ label: "[Stack]" }],
    figureCaptions: ["[Screenshot of a number chart]"],
  },
];
