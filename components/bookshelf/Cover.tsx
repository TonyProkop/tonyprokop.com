import Image from "next/image";
import { toneFor, type Book, type CoverTone } from "@/lib/books";
import { cx } from "@/lib/cx";

const tones: Record<CoverTone, string> = {
  ink: "bg-ink text-on-ink",
  accent: "bg-accent text-on-accent",
  raised: "border border-line-strong bg-surface-hover text-ink",
  strong: "bg-line-strong text-ink",
  muted: "bg-muted text-bg",
};

const sizes = {
  lg: { title: "text-[15px]", author: "text-[8px]" },
  md: { title: "text-sm", author: "text-[8px]" },
  sm: { title: "text-[10px]", author: "text-[7px]" },
};

const frame = "relative block aspect-[2/3] overflow-hidden rounded-[3px_6px_6px_3px] shadow-[var(--shadow-highlight),0_1px_0_var(--line)]";

/**
 * Downloaded Open Library cover, or a typographic placeholder (2:3, spine shadow) when the work has none.
 * Decorative: the title and author are always repeated as text next to it.
 */
export function Cover({ book, size = "md", className }: { book: Pick<Book, "id" | "title" | "author" | "cover">; size?: keyof typeof sizes; className?: string }) {
  if (book.cover) {
    return (
      <div aria-hidden="true" className={cx(frame, "bg-surface-hover", className)}>
        <Image src={book.cover} alt="" width={200} height={300} sizes="(min-width: 1024px) 160px, 50vw" className="size-full object-cover" />
      </div>
    );
  }
  return (
    <div
      aria-hidden="true"
      className={cx(
        frame,
        "flex flex-col justify-between pt-[12%] pr-[12%] pb-[10%] pl-[16%] before:absolute before:inset-y-0 before:left-0 before:w-[6%] before:bg-black/18",
        tones[toneFor(book.id)],
        className,
      )}
    >
      <span className={cx("font-semibold leading-[1.1] tracking-[-0.02em]", sizes[size].title)}>{book.title}</span>
      <span className={cx("font-mono uppercase tracking-[0.04em] opacity-80", sizes[size].author)}>{book.author}</span>
    </div>
  );
}
