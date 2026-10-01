"use client";

import { useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Button, CodeBlock } from "@/components/ui";
import { ErrorScreen } from "@/components/errors/ErrorScreen";
import { site } from "@/data/site";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

/**
 * Last-resort 500 for errors in the root layout itself. It replaces the layout, so it brings
 * its own <html>/<body>, fonts and styles, and avoids anything that needs the layout or router
 * (nav, command palette, next/link). Theme follows the OS preference.
 */
export default function GlobalError({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const ref = error.digest ?? "client";
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent("tonyprokop.com is down")}&body=${encodeURIComponent(`Error reference: ${ref}`)}`;

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <title>Something went wrong · Tony Prokop</title>
        <header className="border-b border-line">
          <div className="mx-auto flex h-14 max-w-site items-center px-5 sm:px-12">
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- next/link needs the router, which may be what broke */}
            <a href="/" className="pf-brand">
              <span className="pf-mark" aria-hidden="true">
                {site.initials}
              </span>
              {site.name}
            </a>
          </div>
        </header>
        <main className="mx-auto w-full max-w-site flex-1 border-x border-line">
          <ErrorScreen
            code="500"
            label="server error"
            title="The whole site tripped over itself"
            lede={
              <p className="m-0">
                Something failed before the page could even load. Reloading usually fixes it. If it doesn&apos;t, email me and include the
                reference <code className="pf-code-inline">{ref}</code>.
              </p>
            }
            actions={
              <>
                <Button variant="primary" size="lg" onClick={() => retry()}>
                  Try again
                </Button>
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- plain anchor: next/link needs the router */}
                <a href="/" className="pf-btn pf-btn-secondary pf-btn-lg">
                  Back to home
                </a>
                <a href={mailto} className="pf-btn pf-btn-ghost pf-btn-lg">
                  Email me
                </a>
              </>
            }
            figureCaption="Fig 500 - the request"
            figure={<CodeBlock filename="terminal" highlight code={["$ curl -I https://tonyprokop.com", "HTTP/2 500", `x-error-ref: ${ref}`, "# the root layout failed. reload, or email me the ref"].join("\n")} />}
          />
        </main>
      </body>
    </html>
  );
}
