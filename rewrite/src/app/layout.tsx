import * as React from 'react'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import Footer from './Footer';
import "./globals.css";
import "./locomotive-scroll.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tony Prokop | Senior Software Engineer",
  description:
    "Web development professional with 8 years of full-stack experience. Passionate about building beautiful, fast, accessible and intuitive user interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            {children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
