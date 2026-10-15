import type { BrandIconName } from "@/lib/brand-icons";

export type UsesGroup = { name: string; slug: string; items: Array<{ icon?: BrandIconName; label: string }> };

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
        "icon": "html5",
        "label": "HTML"
      },
      {
        "icon": "css",
        "label": "CSS"
      },
      {
        "icon": "go",
        "label": "Go"
      },
      {
        "icon": "ruby",
        "label": "Ruby"
      },
      {
        "icon": "csharp",
        "label": "C#"
      },
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
        "icon": "vuedotjs",
        "label": "Vue"
      },
      {
        "icon": "mui",
        "label": "Material UI"
      },
      {
        "icon": "tailwindcss",
        "label": "Tailwind CSS"
      },
      {
        "icon": "nextdotjs",
        "label": "Next.js"
      },
      {
        "icon": "reactquery",
        "label": "TanStack Query"
      },
      {
        "icon": "tanstack",
        "label": "TanStack Router"
      },
      {
        "icon": "nodedotjs",
        "label": "Node.js"
      },
      {
        "icon": "rubyonrails",
        "label": "Ruby on Rails"
      },
      {
        "icon": "dotnet",
        "label": ".NET"
      },
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
        "icon": "googlecloud",
        "label": "Google Cloud Platform"
      },
      {
        "icon": "aws",
        "label": "AWS"
      },
      {
        "icon": "docker",
        "label": "Docker"
      },
      {
        "icon": "terraform",
        "label": "Terraform"
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
        "icon": "ghostty",
        "label": "Ghostty"
      },
      {
        "label": "Herdr"
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
        "icon": "notion",
        "label": "Notion"
      },
      {
        "icon": "obsidian",
        "label": "Obsidian"
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
      },
      {
        "icon": "postman",
        "label": "Postman"
      },
      {
        "icon": "googlechrome",
        "label": "Chrome"
      },
      {
        "icon": "slack",
        "label": "Slack"
      },
      {
        "icon": "zoom",
        "label": "Zoom"
      }
    ]
  }
];

export const hardware: string[] = [
  "MacBook Pro M4",
  "LG UltraFine",
  "Kinesis Advantage360",
  "Autonomous sit-stand desk"
];
