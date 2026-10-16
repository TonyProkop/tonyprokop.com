import { Aws, Bootstrap, CSharp, Dotnet, Elasticsearch, Go, GoogleCloud, HerokuIcon, Javascript, Jquery, MaterialUi, MysqlIcon, Postgresql, RailsIcon, TypescriptIcon, _React, _Vue } from "@dev.icons/react";
import type { Icon } from "@dev.icons/react";

/** Roles from the résumé (public/Resume - Tony Prokop.pdf). Newest first. */
export type Tech = { label: string; icon?: Icon };
export type Role = { dates: string; title: string; company: string; place?: string; summary: string; highlights: string[]; stack: Tech[] };

export const experience: Role[] = [
  {
    dates: "2022 — now",
    title: "Full-Stack Software Engineer, Sr. Staff",
    company: "WP Engine",
    summary: "Core architecture for the next generation of the customer-facing API, and the frontend platform on top of it.",
    highlights: [
      "Built core API infrastructure to scale and meet the demand of agentic workloads upon release of the WP Engine MCP.",
      "Led a refactor of the core application to a single page app across 12 engineering teams; page load performance up 100%.",
      "Shipped an AI chatbot that cut overall support chat volume by 45%.",
      "Maintain the component library used daily by 50+ engineers, and lead the frontend guild.",
    ],
    stack: [{ label: "TypeScript", icon: TypescriptIcon }, { label: "React", icon: _React }, { label: "Material UI", icon: MaterialUi }, { label: "Ruby on Rails", icon: RailsIcon }, { label: "Go", icon: Go }, { label: "PostgreSQL", icon: Postgresql }, { label: "Google Cloud", icon: GoogleCloud }],
  },
  {
    dates: "2020 — 2022",
    title: "Full-Stack Software Engineer, Sr.",
    company: "Flywheel",
    summary: "Primary frontend engineer on Growth Suite, Flywheel's flagship product.",
    highlights: [
      "Wrote most of the Growth Suite frontend and shipped the product end to end in under 8 months.",
      "Upgraded jQuery and Bootstrap across two major versions app-wide, keeping the app compliant.",
      "Designed and taught Vue training modules through the mentorship program for junior and mid-level developers.",
      "Ran a dedicated technical Jira board for frontend architecture work outside normal product sprints.",
    ],
    stack: [{ label: "JavaScript", icon: Javascript }, { label: "Vue", icon: _Vue }, { label: "Ruby on Rails", icon: RailsIcon }, { label: "PostgreSQL", icon: Postgresql }, { label: "Heroku", icon: HerokuIcon }],
  },
  {
    dates: "2014 — 2020",
    title: "Web Developer",
    company: "Speedway Motors",
    summary: "Built and maintained the Speedway Motors eCommerce site.",
    highlights: [
      "Lifted conversion by optimizing the checkout funnel with A/B tests and analytics.",
      "Modernized the CI/CD pipeline, moving releases from bi-weekly to daily production deploys.",
      "Improved search clickthrough by iterating on the company's custom Elasticsearch engine.",
      "Built a shipping quote calculator for the cart that aggregates warehouses and carriers.",
    ],
    stack: [{ label: "Bootstrap", icon: Bootstrap }, { label: "jQuery", icon: Jquery }, { label: "React", icon: _React }, { label: "JavaScript", icon: Javascript }, { label: "C#", icon: CSharp }, { label: ".NET", icon: Dotnet }, { label: "MySQL", icon: MysqlIcon }, { label: "Elasticsearch", icon: Elasticsearch }, { label: "AWS", icon: Aws }],
  },
];

/** Companies shown in the "previously at" strip on the home page. */
export const previousCompanies = experience.map((r) => r.company);
