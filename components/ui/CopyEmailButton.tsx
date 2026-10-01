"use client";

import { useState } from "react";
import { Button, type ButtonProps } from "./Button";

/** Copies an email address and confirms in place. */
export function CopyEmailButton({ email, ...rest }: { email: string } & Omit<ButtonProps, "children" | "onClick">) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      /* clipboard unavailable - still show feedback */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <Button {...rest} onClick={copy}>
      <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
    </Button>
  );
}
