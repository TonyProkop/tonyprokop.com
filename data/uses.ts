import type { BrandIconName } from "@/lib/brand-icons";

export type UsesGroup = { name: string; slug: string; items: Array<{ icon: BrandIconName; label: string }> };

/** Sample /uses list from the mocks — icons only, no descriptions. Replace with your real tools. */
export const usesGroups: UsesGroup[] = [
  {
    "name": "Languages",
    "slug": "languages",
    "items": [
      {
        "icon": "typescript",
        "label": "TypeScript"
      },
      {
        "icon": "javascript",
        "label": "JavaScript"
      },
      {
        "icon": "go",
        "label": "Go"
      },
      {
        "icon": "rust",
        "label": "Rust"
      },
      {
        "icon": "python",
        "label": "Python"
      }
    ]
  },
  {
    "name": "Frameworks & libraries",
    "slug": "frameworks",
    "items": [
      {
        "icon": "react",
        "label": "React"
      },
      {
        "icon": "nextdotjs",
        "label": "Next.js"
      },
      {
        "icon": "nodedotjs",
        "label": "Node.js"
      },
      {
        "icon": "tailwindcss",
        "label": "Tailwind CSS"
      },
      {
        "icon": "trpc",
        "label": "tRPC"
      },
      {
        "icon": "graphql",
        "label": "GraphQL"
      }
    ]
  },
  {
    "name": "Data & infrastructure",
    "slug": "infra",
    "items": [
      {
        "icon": "postgresql",
        "label": "PostgreSQL"
      },
      {
        "icon": "redis",
        "label": "Redis"
      },
      {
        "icon": "sqlite",
        "label": "SQLite"
      },
      {
        "icon": "apachekafka",
        "label": "Kafka"
      },
      {
        "icon": "docker",
        "label": "Docker"
      },
      {
        "icon": "terraform",
        "label": "Terraform"
      },
      {
        "icon": "vercel",
        "label": "Vercel"
      },
      {
        "icon": "githubactions",
        "label": "GitHub Actions"
      }
    ]
  },
  {
    "name": "Editor & terminal",
    "slug": "editor",
    "items": [
      {
        "icon": "neovim",
        "label": "Neovim"
      },
      {
        "icon": "cursor",
        "label": "Cursor"
      },
      {
        "icon": "zedindustries",
        "label": "Zed"
      },
      {
        "icon": "ghostty",
        "label": "Ghostty"
      },
      {
        "icon": "git",
        "label": "Git"
      },
      {
        "icon": "github",
        "label": "GitHub"
      },
      {
        "icon": "claude",
        "label": "Claude"
      }
    ]
  },
  {
    "name": "Apps",
    "slug": "apps",
    "items": [
      {
        "icon": "raycast",
        "label": "Raycast"
      },
      {
        "icon": "linear",
        "label": "Linear"
      },
      {
        "icon": "notion",
        "label": "Notion"
      },
      {
        "icon": "obsidian",
        "label": "Obsidian"
      },
      {
        "icon": "arc",
        "label": "Arc"
      },
      {
        "icon": "figma",
        "label": "Figma"
      },
      {
        "icon": "spotify",
        "label": "Spotify"
      },
      {
        "icon": "1password",
        "label": "1Password"
      }
    ]
  }
];

export const hardware: string[] = [
  "[Laptop model]",
  "[Monitor]",
  "[Keyboard]",
  "[Mouse / trackpad]",
  "[Headphones]",
  "[Desk + chair]"
];
