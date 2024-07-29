"use client"

import { ReactNode, useState, useEffect } from "react"
import type { Metadata } from "next"
import Cookies from "js-cookie"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import { ThemeProvider } from "@mui/material/styles"
import theme from "../theme"
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./globals.css"
import "./locomotive-scroll.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const [themeName, setThemeName] = useState(Cookies.get("theme") || "")
  const toggleTheme = () => {
    let newTheme = ""
    if (themeName === "dark") {
      newTheme = "light"
    } else if (themeName === "light") {
      newTheme = ""
    } else {
      newTheme = "dark"
    }
    setThemeName(newTheme)
    Cookies.set("theme", newTheme)
  }

  // useEffect(() => {
  // (
  //   async () => {
  //     const LocomotiveScroll = (await import('locomotive-scroll')).default
  //     new LocomotiveScroll();
  //   }
  // )()
  // }, [])

  return (
    <html lang="en" className={themeName}>
      <body className={themeName}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Header toggleTheme={toggleTheme} theme={themeName} />
            {children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
