import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AlertBanner } from "@/components/ui/AlertBanner";
import { Nav } from "@/components/ui/Nav";
import { CommandPalette } from "@/components/command-palette";
import { paletteItems } from "@/data/palette";
import { navLinks, site } from "@/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tony Prokop",
  description: "Personal portfolio for software engineer Tony Prokop",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AlertBanner label="Under construction">This site is actively being worked on, so expect rough edges and placeholder content.</AlertBanner>
        <Nav name={site.name} initials={site.initials} links={navLinks} cta={{ label: "Résumé", href: site.resumeHref }} />
        {children}
        <CommandPalette items={paletteItems} owner={{ name: site.name, initials: site.initials, email: site.email }} resumeHref={site.resumeHref} />
      </body>
    </html>
  );
}
