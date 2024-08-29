"use client"

import { ReactNode, useState, useEffect } from "react"
import type { Metadata } from "next"
import Cookies from "js-cookie"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import { ThemeProvider } from "@mui/material/styles"
import { Stack } from "@mui/material"
import theme from "../theme"
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const [themeName, setThemeName] = useState('dark')
  const toggleTheme = () => {
    let newTheme = '';
    if (themeName === 'dark') {
      newTheme = 'light'
      document.getElementById("lightSwitchUp")?.play()
    } else {
      newTheme = 'dark'
      document.getElementById("lightSwitchDown")?.play()
    }
    setThemeName(newTheme)
    Cookies.set("theme", newTheme)
  }

  useEffect(() => {
    setThemeName(Cookies.get("theme") || "dark")
  }, [])

  return (
    <html lang="en" className={themeName}>
      <body className={themeName}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Stack justifyContent="space-between" minHeight="100vh">
              <Header toggleTheme={toggleTheme} theme={themeName} />
              <div>
                {children}
              </div>
              <Footer />
            </Stack>
          </ThemeProvider>
        </AppRouterCacheProvider>
        <audio id="lightSwitchUp" src="/light-switch-up.mp3" />
        <audio id="lightSwitchDown" src="/light-switch-down.mp3" />
      </body>
    </html>
  )
}
