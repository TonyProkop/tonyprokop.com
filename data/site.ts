/**
 * Site-wide identity and links.
 */
export const site = {
  name: "Tony Prokop",
  initials: "TP",
  role: "Sr. Staff Software Engineer",
  location: "Omaha, Nebraska",
  timeZone: "America/Chicago",
  coordinates: "41.2565° N, 95.9345° W",
  email: "prokop.tony@gmail.com",
  resumeHref: "/Resume - Tony Prokop.pdf",
  socials: {
    github: "https://github.com/TonyProkop",
    linkedin: "https://www.linkedin.com/in/tony-prokop",
    spotify: "https://open.spotify.com/user/1256304823",
  },
} as const;

export const navLinks = [
  { label: "about", href: "/about" },
  { label: "work", href: "/work" },
  { label: "uses", href: "/uses" },
  { label: "experience", href: "/experience" },
  { label: "contact", href: "/contact" },
];
