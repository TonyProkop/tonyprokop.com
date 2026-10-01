import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/cx";
import { ArrowIcon } from "./icons";
import { Kbd } from "./Kbd";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "accent";
export type ButtonSize = "sm" | "md" | "lg";

type Common = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Trailing arrow that nudges right on hover. */
  arrow?: boolean;
  /** Shortcut hint shown inside the button. Only show shortcuts that work. */
  kbd?: string;
  className?: string;
  children: ReactNode;
};

export type ButtonProps = Common & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof Common>;
export type ButtonLinkProps = Common & {
  href: string;
  target?: string;
  rel?: string;
  "aria-label"?: string;
  "aria-current"?: "page";
};

function classes({ variant = "secondary", size = "md", className }: Common) {
  return cx("pf-btn", `pf-btn-${variant}`, size !== "md" && `pf-btn-${size}`, className);
}

function Inner({ arrow, kbd, children }: Pick<Common, "arrow" | "kbd" | "children">) {
  return (
    <>
      {children}
      {arrow ? <ArrowIcon /> : null}
      {kbd ? <Kbd>{kbd}</Kbd> : null}
    </>
  );
}

/**
 * Sans 14px medium, sentence case, short. One `primary` per view;
 * `accent` (signal orange) at most once per page — usually the contact CTA.
 */
export function Button({ variant, size, arrow, kbd, className, children, type = "button", ...rest }: ButtonProps) {
  return (
    <button type={type} {...rest} className={classes({ variant, size, className, children })}>
      <Inner arrow={arrow} kbd={kbd}>
        {children}
      </Inner>
    </button>
  );
}

/** Same look as Button, rendered as a link. Internal paths use next/link. */
export function ButtonLink({ variant, size, arrow, kbd, className, children, href, target, rel, ...aria }: ButtonLinkProps) {
  const cls = classes({ variant, size, className, children });
  const inner = (
    <Inner arrow={arrow} kbd={kbd}>
      {children}
    </Inner>
  );
  if (/^https?:\/\//.test(href) || href.startsWith("mailto:")) {
    return (
      <a href={href} target={target} rel={rel ?? "noreferrer"} className={cls} {...aria}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} target={target} {...aria}>
      {inner}
    </Link>
  );
}
