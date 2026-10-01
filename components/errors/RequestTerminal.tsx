"use client";

import { usePathname } from "next/navigation";
import { CodeBlock } from "@/components/ui";

/**
 * The "request" figure on the error screens: a curl of the current path and the status
 * the server answered with. Client-only because it reads the path.
 */
export function RequestTerminal({ status, lines = [] }: { status: string; lines?: string[] }) {
  const pathname = usePathname() || "/";
  const code = [`$ curl -I https://tonyprokop.com${pathname}`, `HTTP/2 ${status}`, ...lines].join("\n");
  return <CodeBlock code={code} filename="terminal" highlight />;
}
