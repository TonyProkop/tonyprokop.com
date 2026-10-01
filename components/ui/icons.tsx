import type { SVGProps } from "react";
import { brandIcons, type BrandIconName } from "@/lib/brand-icons";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Stroke({ size = 16, children, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

/** Trailing arrow used by buttons, cards and rows; nudges right on hover via CSS. */
export function ArrowIcon({ size = 14, className = "pf-arrow", ...rest }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...rest}>
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function ChevronIcon({ size = 14, ...rest }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...rest}>
      <path d="M4 6l4 4 4-4" />
    </svg>
  );
}

export function CheckIcon({ size = 12, ...rest }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...rest}>
      <path d="M3.5 8.5l3 3 6-7" />
    </svg>
  );
}

export function AlertIcon({ size = 14, ...rest }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" aria-hidden="true" {...rest}>
      <circle cx="8" cy="8" r="6.25" />
      <path d="M8 4.75v3.75M8 11v.25" />
    </svg>
  );
}

export const SearchIcon = (p: IconProps) => (
  <Stroke size={18} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="M20 20l-3.5-3.5" />
  </Stroke>
);
export const PencilIcon = (p: IconProps) => (
  <Stroke size={14} {...p}>
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
  </Stroke>
);
export const HomeIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M3 11l9-7 9 7" />
    <path d="M5 10v10h14V10" />
  </Stroke>
);
export const PageIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
    <path d="M14 3v5h5M9 13h6M9 17h4" />
  </Stroke>
);
export const ProjectIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M21 8l-9-5-9 5 9 5 9-5z" />
    <path d="M3 8v8l9 5 9-5V8M12 13v8" />
  </Stroke>
);
export const BookIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M4 19.5V5a2 2 0 0 1 2-2h14v16H6a2 2 0 0 0-2 2z" />
    <path d="M4 19.5A2 2 0 0 0 6 21h14" />
  </Stroke>
);
export const DumbbellIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M6 7v10M18 7v10M3 10v4M21 10v4M6 12h12" />
  </Stroke>
);
export const CopyIcon = (p: IconProps) => (
  <Stroke {...p}>
    <rect x="9" y="9" width="11" height="11" rx="2" />
    <path d="M5 15V5a2 2 0 0 1 2-2h10" />
  </Stroke>
);
export const ThemeIcon = (p: IconProps) => (
  <Stroke {...p}>
    <circle cx="12" cy="12" r="8" />
    <path d="M12 4a8 8 0 0 0 0 16z" fill="currentColor" />
  </Stroke>
);
export const DownloadIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
  </Stroke>
);
export const MailIcon = (p: IconProps) => (
  <Stroke {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </Stroke>
);
export const LinkIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1" />
    <path d="M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1" />
  </Stroke>
);

/** A monochrome brand mark from Simple Icons. Inherits text colour. */
export function BrandIcon({ name, size = 16, title, ...rest }: SVGProps<SVGSVGElement> & { name: BrandIconName; size?: number; title?: string }) {
  const icon = brandIcons[name];
  const label = title ?? icon.title;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" role="img" aria-label={label} {...rest}>
      <path d={icon.path} />
    </svg>
  );
}
