import { Aws, CSharp, Chrome, ClaudeIcon, CloudflareIcon, Css, DockerIcon, Dotnet, Elasticsearch, Figma, GhosttyIcon, GitIcon, GithubIcon, Go, GoogleCloud, HerokuIcon, Html5, Javascript, MaterialUi, Neovim, NextjsIcon, NodejsIcon, NotionIcon, ObsidianIcon, Postgresql, PostmanIcon, RailsIcon, ReactQueryIcon, RedisIcon, Ruby, SlackIcon, SpotifyIcon, TailwindIcon, TanstackIcon, TerraformIcon, TypescriptIcon, ZoomIcon, _React, _Vue } from "@dev.icons/react";
import type { Icon } from "@dev.icons/react";

export type UsesGroup = { name: string; slug: string; items: Array<{ icon?: Icon; label: string }> };

/** Sample /uses list from the mocks — icons only, no descriptions. Replace with your real tools. */
export const usesGroups: UsesGroup[] = [
  {
    "name": "Languages",
    "slug": "languages",
    "items": [
      {
        "icon": TypescriptIcon,
        "label": "TypeScript"
      },
      {
        "icon": Javascript,
        "label": "JavaScript"
      },
      {
        "icon": Html5,
        "label": "HTML"
      },
      {
        "icon": Css,
        "label": "CSS"
      },
      {
        "icon": Go,
        "label": "Go"
      },
      {
        "icon": Ruby,
        "label": "Ruby"
      },
      {
        "icon": CSharp,
        "label": "C#"
      },
    ]
  },
  {
    "name": "Frameworks & libraries",
    "slug": "frameworks",
    "items": [
      {
        "icon": _React,
        "label": "React"
      },
      {
        "icon": _Vue,
        "label": "Vue"
      },
      {
        "icon": MaterialUi,
        "label": "Material UI"
      },
      {
        "icon": TailwindIcon,
        "label": "Tailwind CSS"
      },
      {
        "icon": NextjsIcon,
        "label": "Next.js"
      },
      {
        "icon": TanstackIcon,
        "label": "TanStack Query/Router"
      },
      {
        "icon": NodejsIcon,
        "label": "Node.js"
      },
      {
        "icon": RailsIcon,
        "label": "Ruby on Rails"
      },
      {
        "icon": Dotnet,
        "label": ".NET"
      },
    ]
  },
  {
    "name": "Data & infrastructure",
    "slug": "infra",
    "items": [
      {
        "icon": Postgresql,
        "label": "PostgreSQL"
      },
      {
        "icon": RedisIcon,
        "label": "Redis"
      },
      {
        "icon": GoogleCloud,
        "label": "Google Cloud Platform"
      },
      {
        "icon": Aws,
        "label": "AWS"
      },
      {
        "icon": HerokuIcon,
        "label": "Heroku"
      },
      {
        "icon": CloudflareIcon,
        "label": "Cloudflare"
      },
      {
        "icon": DockerIcon,
        "label": "Docker"
      },
      {
        "icon": TerraformIcon,
        "label": "Terraform"
      },
      {
        "icon": Elasticsearch,
        "label": "Elasticsearch"
      }
    ]
  },
  {
    "name": "Editor & terminal",
    "slug": "editor",
    "items": [
      {
        "icon": Neovim,
        "label": "Neovim"
      },
      {
        "icon": GhosttyIcon,
        "label": "Ghostty"
      },
      {
        "label": "Herdr"
      },
      {
        "icon": GitIcon,
        "label": "Git"
      },
      {
        "icon": GithubIcon,
        "label": "GitHub"
      },
      {
        "icon": ClaudeIcon,
        "label": "Claude"
      }
    ]
  },
  {
    "name": "Apps",
    "slug": "apps",
    "items": [
      {
        "label": "Raycast"
      },
      {
        "icon": NotionIcon,
        "label": "Notion"
      },
      {
        "icon": ObsidianIcon,
        "label": "Obsidian"
      },
      {
        "icon": Figma,
        "label": "Figma"
      },
      {
        "icon": SpotifyIcon,
        "label": "Spotify"
      },
      {
        "label": "1Password"
      },
      {
        "icon": PostmanIcon,
        "label": "Postman"
      },
      {
        "icon": Chrome,
        "label": "Chrome"
      },
      {
        "icon": SlackIcon,
        "label": "Slack"
      },
      {
        "icon": ZoomIcon,
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
