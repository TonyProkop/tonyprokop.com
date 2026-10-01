"use client";

import { useEffect } from "react";
import { Button, ButtonLink, Footer } from "@/components/ui";
import { openCommandPalette } from "@/components/command-palette";
import { ErrorScreen } from "@/components/errors/ErrorScreen";
import { RequestTerminal } from "@/components/errors/RequestTerminal";
import { navLinks, site } from "@/data/site";

/**
 * 500: runtime errors in any page below the root layout. The banner, nav and ⌘K palette
 * (from the layout) stay usable. Root-layout failures fall through to app/global-error.tsx.
 */
export default function ErrorPage({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) {
  useEffect(() => {
    // Swap for an error reporting service (Sentry, Vercel Observability…) when one is set up.
    console.error(error);
  }, [error]);

  const ref = error.digest ?? "client";

  return (
    <div className="mx-auto w-full max-w-site flex-1 border-x border-line">
      <title>Something went wrong · Tony Prokop</title>
      <main>
        <ErrorScreen
          code="500"
          label="server error"
          title="Something broke on my end"
          lede={
            <p className="m-0">
              It&apos;s not you. Trying again usually fixes it. If it keeps happening, tell me and include the reference{" "}
              <code className="pf-code-inline">{ref}</code> so I can find it in the logs.
            </p>
          }
          actions={
            <>
              <Button variant="primary" size="lg" onClick={() => retry()}>
                Try again
              </Button>
              <ButtonLink href="/" variant="secondary" size="lg">
                Back to home
              </ButtonLink>
              <Button variant="ghost" size="lg" onClick={() => openCommandPalette("compose")}>
                Tell me what happened
              </Button>
            </>
          }
          figureCaption="Fig 500 - the request"
          figure={<RequestTerminal status="500" lines={[`x-error-ref: ${ref}`, "# logged. try again, or report it with the ref above"]} />}
        />
      </main>
      <Footer name={site.name} links={navLinks} />
    </div>
  );
}
