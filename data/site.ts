/**
 * Site-wide identity and links. Values in [brackets] are placeholders — replace them.
 */
export const site = {
  name: "Tony Prokop",
  initials: "TP",
  role: "Software Engineer",
  location: "Omaha, Nebraska",
  timeZone: "America/Chicago",
  coordinates: "41.2565° N, 95.9345° W",
  email: "[you@yourdomain.com]",
  resumeHref: "/resume.pdf",
  socials: {
    github: "https://github.com/TonyProkop",
    linkedin: "https://www.linkedin.com/in/", // TODO: add your handle
    bluesky: "https://bsky.app/profile/", // TODO: add your handle
    spotify: "https://open.spotify.com/user/", // TODO: add your profile id
  },
} as const;

export const navLinks = [
  { label: "about", href: "/about" },
  { label: "work", href: "/work" },
  { label: "uses", href: "/uses" },
  { label: "experience", href: "/experience" },
  { label: "contact", href: "/contact" },
];
