"use client";

import { useState } from "react";
import { cx } from "@/lib/cx";

const KEYWORDS = /\b(import|from|export|const|let|return|function|await|async|if|else|fn|pub|use|impl)\b/g;

function escape(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/** Very small highlighter for marketing snippets. Use a real one (Shiki) for long code. */
function highlight(line: string) {
  return escape(line)
    .replace(/("[^"]*"|'[^']*')/g, '<span class="s">$1</span>')
    .replace(/(\/\/.*$|#\s.*$)/, '<span class="c">$1</span>')
    .replace(/^(\$)/, '<span class="k">$1</span>')
    .replace(KEYWORDS, '<span class="k">$1</span>')
    .replace(/\b([A-Za-z_][A-Za-z0-9_]*)(?=\()/g, '<span class="f">$1</span>');
}

/** Terminal-style block that stays dark in both themes, with a filename header and copy button. */
export function CodeBlock({
  code,
  filename,
  language,
  highlight: doHighlight = false,
  lineNumbers = false,
  className,
}: {
  code: string;
  filename?: string;
  language?: string;
  highlight?: boolean;
  lineNumbers?: boolean;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const lines = code.replace(/\n$/, "").split("\n");

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      /* clipboard unavailable — still show feedback */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  }

  return (
    <figure className={cx("pf-code", className)} style={{ margin: 0 }}>
      <figcaption className="pf-code-head">
        <span>{filename ?? language ?? "terminal"}</span>
        <button type="button" className="pf-code-copy" onClick={copy} aria-label="Copy code">
          {copied ? "copied" : "copy"}
        </button>
      </figcaption>
      <pre>
        <code>
          {lines.map((line, i) => (
            <span key={i}>
              {lineNumbers ? <span className="ln">{i + 1}</span> : null}
              {doHighlight ? <span dangerouslySetInnerHTML={{ __html: highlight(line) }} /> : line}
              {i < lines.length - 1 ? "\n" : null}
            </span>
          ))}
        </code>
      </pre>
    </figure>
  );
}
