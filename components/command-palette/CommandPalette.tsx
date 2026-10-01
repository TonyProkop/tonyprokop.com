"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Checkbox, Field, Input, Select } from "@/components/ui/Field";
import { Kbd } from "@/components/ui/Kbd";
import {
  BookIcon,
  BrandIcon,
  CheckIcon,
  CopyIcon,
  DownloadIcon,
  DumbbellIcon,
  HomeIcon,
  LinkIcon,
  MailIcon,
  PageIcon,
  PencilIcon,
  ProjectIcon,
  SearchIcon,
  ThemeIcon,
} from "@/components/ui/icons";
import { OPEN_COMMAND_PALETTE, type PaletteTab } from "./events";
import type { ComposePayload, PaletteGlyph, PaletteGroup, PaletteItem } from "./types";

const GROUPS: PaletteGroup[] = ["Pages", "Projects", "Actions", "Links"];
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const REASONS = ["Full-time role", "Contract work", "Speaking or writing", "Just saying hi"];
const STARTERS: Array<[label: string, text: string]> = [
  ["I'm hiring for…", "Hi! I'm hiring for a role on my team and think you'd be a great fit. "],
  ["Let's work together on…", "Hi! I have a project I'd love your help with: "],
];

const GLYPHS: Record<PaletteGlyph, ReactNode> = {
  home: <HomeIcon />,
  page: <PageIcon />,
  project: <ProjectIcon />,
  book: <BookIcon />,
  dumbbell: <DumbbellIcon />,
  copy: <CopyIcon />,
  theme: <ThemeIcon />,
  download: <DownloadIcon />,
  mail: <MailIcon />,
  link: <LinkIcon />,
};

function ItemIcon({ icon }: { icon: PaletteItem["icon"] }) {
  if (typeof icon === "string") return <>{GLYPHS[icon]}</>;
  return <BrandIcon name={icon.brand} size={15} aria-hidden="true" />;
}

function isExternal(href?: string) {
  return !!href && /^(https?:|mailto:)/.test(href);
}

/** Rank items: title prefix > title contains > other fields. All query words must match. */
function search(items: PaletteItem[], query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return items;
  const words = q.split(/\s+/);
  return items
    .map((it, i) => {
      const hay = `${it.title} ${it.subtitle} ${it.keywords ?? ""} ${it.group}`.toLowerCase();
      if (!words.every((w) => hay.includes(w))) return null;
      const t = it.title.toLowerCase();
      return { it, i, score: t.startsWith(q) ? 0 : t.includes(q) ? 1 : 2 };
    })
    .filter((x): x is { it: PaletteItem; i: number; score: number } => x !== null)
    .sort((a, b) => a.score - b.score || a.i - b.i)
    .map((x) => x.it);
}

function isTyping(target: EventTarget | null) {
  const el = target as HTMLElement | null;
  return !!el && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName));
}

export type CommandPaletteProps = {
  items: PaletteItem[];
  owner: { name: string; initials: string; email: string };
  /** Where "Download résumé" points. */
  resumeHref?: string;
  /**
   * Deliver a composed message. Wire this to a route handler / server action that sends
   * email (Resend, Postmark, Formspree…). Throw to show an error. Without it, sending is simulated.
   */
  onSend?: (payload: ComposePayload) => Promise<void>;
};

/**
 * ⌘K command palette with two tabs: Search (pages, projects, actions, links) and
 * Compose (write a message → your details → sent). Mount once, in the root layout.
 * Open it with ⌘K / Ctrl+K or `openCommandPalette()` from ./events.
 * Also wires the global "G then <key>" navigation shortcuts listed on items.
 */
export function CommandPalette({ items, owner, resumeHref, onSend }: CommandPaletteProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<PaletteTab>("search");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [toast, setToast] = useState("");

  // compose
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [message, setMessage] = useState("");
  const [msgError, setMsgError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [reason, setReason] = useState(REASONS[0]);
  const [sendCopy, setSendCopy] = useState(true);
  const [tried, setTried] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  const composerRef = useRef<HTMLTextAreaElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const restoreFocus = useRef<HTMLElement | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const results = useMemo(() => {
    const found = search(items, query);
    return GROUPS.flatMap((g) => found.filter((it) => it.group === g));
  }, [items, query]);
  const activeIndex = Math.min(active, Math.max(results.length - 1, 0));

  const show = useCallback((nextTab: PaletteTab = "search") => {
    restoreFocus.current = document.activeElement as HTMLElement | null;
    setTab(nextTab);
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
    restoreFocus.current?.focus?.();
  }, []);

  const flash = useCallback((text: string) => {
    clearTimeout(toastTimer.current);
    setToast(text);
    toastTimer.current = setTimeout(() => setToast(""), 1800);
  }, []);

  const startCompose = useCallback(
    (prefill = "") => {
      setTab("compose");
      setStep(1);
      setMessage((m) => m || prefill);
      setMsgError("");
      requestAnimationFrame(() => composerRef.current?.focus());
    },
    [],
  );

  // Global shortcuts: ⌘K / Ctrl+K toggles; "G then <key>" navigates (when not typing).
  useEffect(() => {
    let gPressedAt = 0;
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (open) close();
        else show("search");
        return;
      }
      if (open || isTyping(e.target) || e.metaKey || e.ctrlKey || e.altKey) return;
      const key = e.key.toUpperCase();
      if (key === "G") {
        gPressedAt = Date.now();
        return;
      }
      if (Date.now() - gPressedAt < 1000) {
        const hit = items.find((it) => it.keys?.length === 2 && it.keys[0] === "G" && it.keys[1] === key && it.href);
        gPressedAt = 0;
        if (hit?.href) {
          e.preventDefault();
          router.push(hit.href);
        }
      }
    };
    const onOpen = (e: Event) => show((e as CustomEvent<{ tab?: PaletteTab }>).detail?.tab ?? "search");
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_COMMAND_PALETTE, onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_COMMAND_PALETTE, onOpen);
    };
  }, [open, close, show, items, router]);

  // Focus the right field when opening / switching tabs; lock page scroll while open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => (tab === "search" ? inputRef.current : composerRef.current)?.focus());
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open, tab]);

  // Keep the highlighted row in view.
  useEffect(() => {
    listRef.current?.querySelector<HTMLElement>(".cmd-item.on")?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, open]);

  useEffect(() => () => clearTimeout(toastTimer.current), []);

  function run(item: PaletteItem) {
    switch (item.action) {
      case "compose":
        return startCompose(query.trim());
      case "toggle-theme": {
        const root = document.documentElement;
        const current = root.dataset.theme ?? (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
        const next = current === "dark" ? "light" : "dark";
        root.dataset.theme = next;
        return flash(`Switched to ${next} theme`);
      }
      case "copy-email":
        navigator.clipboard?.writeText(owner.email).catch(() => {});
        return flash("Email copied to clipboard");
      case "download-resume":
        if (resumeHref) window.open(resumeHref, "_blank", "noopener");
        return flash("Opening résumé…");
    }
    if (!item.href) return;
    if (isExternal(item.href)) window.open(item.href, "_blank", "noopener");
    else router.push(item.href);
    close();
  }

  function onSearchKey(e: ReactKeyboardEvent<HTMLInputElement>) {
    const n = results.length;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (n) setActive((activeIndex + 1) % n);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (n) setActive((activeIndex - 1 + n) % n);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (n) run(results[activeIndex]);
    } else if (e.key === "Escape") {
      e.preventDefault();
      if (query) setQuery("");
      else close();
    }
  }

  function goDetails() {
    if (message.trim().length < 10) {
      setMsgError("Add a sentence or two so I know what this is about.");
      return;
    }
    setMsgError("");
    setStep(2);
  }

  const nameError = tried && !name.trim() ? "Tell me who you are." : "";
  const emailError = tried && !EMAIL_RE.test(email) ? (email ? "That doesn’t look like an email address." : "I need somewhere to reply.") : "";

  async function send() {
    setTried(true);
    setSendError("");
    if (!name.trim() || !EMAIL_RE.test(email)) return;
    setSending(true);
    try {
      const payload = { message, name, email, company, reason, sendCopy };
      if (onSend) await onSend(payload);
      else await new Promise((r) => setTimeout(r, 900)); // simulated until a backend exists
      setStep(3);
    } catch {
      setSendError(`Couldn’t send that. Try again, or email ${owner.email}.`);
    } finally {
      setSending(false);
    }
  }

  function resetCompose(keepIdentity: boolean) {
    setStep(1);
    setMessage("");
    setTried(false);
    setMsgError("");
    if (!keepIdentity) {
      setCompany("");
    }
  }

  if (!open) return null;

  const activeId = results[activeIndex]?.id;
  const verb = (it: PaletteItem) => (it.action === "compose" ? "Compose" : it.action ? "Run" : isExternal(it.href) ? "Open link" : "Go to page");
  const firstName = name.trim().split(/\s+/)[0] || "there";

  return (
    <>
      <div className="scrim" aria-hidden="true" onClick={close} />
      <div
        className="cmdk"
        role="dialog"
        aria-modal="true"
        aria-label="Command menu"
        style={{ top: 96, width: 660 }}
        onKeyDown={(e) => {
          if (e.key === "Escape" && tab === "compose") {
            e.preventDefault();
            close();
          }
        }}
      >
        <div className="cmdk-tabs">
          <div className="tablist" role="tablist" aria-label="Command menu mode">
            <button type="button" role="tab" id="cmdk-tab-search" aria-selected={tab === "search"} aria-controls="cmdk-panel-search" className={tab === "search" ? "tab on" : "tab"} onClick={() => setTab("search")}>
              <SearchIcon size={14} />
              Search
            </button>
            <button type="button" role="tab" id="cmdk-tab-compose" aria-selected={tab === "compose"} aria-controls="cmdk-panel-compose" className={tab === "compose" ? "tab on" : "tab"} onClick={() => startCompose()}>
              <PencilIcon />
              Compose
            </button>
          </div>
          <button type="button" className="pf-search" style={{ height: 24, padding: "0 4px" }} onClick={close} aria-label="Close command menu">
            <Kbd>esc</Kbd>
          </button>
        </div>

        {tab === "search" ? (
          <div id="cmdk-panel-search" role="tabpanel" aria-labelledby="cmdk-tab-search">
            <div className="cmdk-input">
              <SearchIcon />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActive(0);
                }}
                onKeyDown={onSearchKey}
                placeholder="Search pages, projects and actions…"
                aria-label="Search"
                role="combobox"
                aria-expanded="true"
                aria-controls="cmdk-list"
                aria-activedescendant={activeId}
                autoComplete="off"
                spellCheck={false}
              />
            </div>
            <div className="cmdk-list" id="cmdk-list" role="listbox" aria-label="Results" ref={listRef} style={{ maxHeight: 380 }}>
              {results.length ? (
                GROUPS.map((g) => {
                  const groupItems = results.filter((it) => it.group === g);
                  if (!groupItems.length) return null;
                  return (
                    <div role="group" aria-label={g} key={g}>
                      <div className="cmdk-group">
                        <span>{g}</span>
                        <span>{groupItems.length}</span>
                      </div>
                      {groupItems.map((it) => {
                        const idx = results.indexOf(it);
                        const on = idx === activeIndex;
                        return (
                          <div
                            key={it.id}
                            id={it.id}
                            role="option"
                            aria-selected={on}
                            className={on ? "cmd-item on" : "cmd-item"}
                            onMouseMove={() => !on && setActive(idx)}
                            onClick={() => run(it)}
                          >
                            <span className="cmd-ic">
                              <ItemIcon icon={it.icon} />
                            </span>
                            <span className="cmd-text">
                              <span className="cmd-title">{it.title}</span>
                              <span className="cmd-sub">{it.subtitle}</span>
                            </span>
                            <span className="flex items-center gap-2.5">
                              {it.keys?.length ? (
                                <span className="cmd-keys">
                                  {it.keys.map((k, i) => (
                                    <span key={k + i} className="contents">
                                      {i > 0 ? <span className="then">then</span> : null}
                                      <Kbd>{k}</Kbd>
                                    </span>
                                  ))}
                                </span>
                              ) : null}
                              {isExternal(it.href) ? <span className="cmd-ext">↗</span> : null}
                              <span className="cmd-enter">
                                {verb(it)} <Kbd>↵</Kbd>
                              </span>
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  );
                })
              ) : (
                <div className="cmdk-empty">
                  <span className="text-[15px] font-[550] text-ink">No results for “{query}”</span>
                  <span className="text-body-sm text-muted">Try a page name or a project — or just ask me.</span>
                  <div className="mt-3 flex gap-2">
                    <Button variant="primary" size="sm" arrow onClick={() => startCompose(query.trim())}>
                      Ask me about “{query}”
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => setQuery("")}>
                      Clear search
                    </Button>
                  </div>
                </div>
              )}
            </div>
            <div className="cmdk-foot">
              {toast ? (
                <span className="toast" role="status">
                  <i />
                  {toast}
                </span>
              ) : (
                <span className="inline-flex items-center gap-2">
                  <span className="pf-mark" style={{ width: 18, height: 18, fontSize: 9 }}>
                    {owner.initials}
                  </span>
                  {results.length} results
                </span>
              )}
              <span className="cmdk-hints">
                <span>
                  <Kbd>↑</Kbd>
                  <Kbd>↓</Kbd> navigate
                </span>
                <span>
                  <Kbd>↵</Kbd> open
                </span>
                <span>
                  <Kbd>esc</Kbd> close
                </span>
              </span>
            </div>
          </div>
        ) : (
          <div id="cmdk-panel-compose" role="tabpanel" aria-labelledby="cmdk-tab-compose" className="compose">
            <div className="to-row">
              <span className="inline-flex items-center gap-2.5">
                <span>To</span>
                <span className="pf-mark" style={{ width: 20, height: 20, fontSize: 9 }}>
                  {owner.initials}
                </span>
                <b>{owner.name}</b>
              </span>
              <span className="font-mono text-[11px]">replies in ~2 days</span>
            </div>

            {step === 1 ? (
              <>
                <label htmlFor="cmdk-composer" className="sr-only">
                  Your message
                </label>
                <textarea
                  id="cmdk-composer"
                  ref={composerRef}
                  className="composer"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    setMsgError("");
                  }}
                  onKeyDown={(e) => {
                    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
                      e.preventDefault();
                      goDetails();
                    }
                  }}
                  placeholder="Say hi, pitch a project, or ask about something I wrote…"
                  aria-describedby="cmdk-msg-help"
                />
                {!message.trim() ? (
                  <div className="starters" aria-label="Message starters">
                    {STARTERS.map(([label, text]) => (
                      <button
                        key={label}
                        type="button"
                        className="starter"
                        onClick={() => {
                          setMessage(text);
                          requestAnimationFrame(() => {
                            composerRef.current?.focus();
                            composerRef.current?.setSelectionRange(text.length, text.length);
                          });
                        }}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                ) : null}
                {msgError ? (
                  <p className="msg-err" role="alert">
                    {msgError}
                  </p>
                ) : null}
                <div className="cmdk-foot" style={{ height: 52 }}>
                  <span id="cmdk-msg-help">Step 1 of 2 · {message.length} characters</span>
                  <Button variant="primary" size="sm" arrow kbd="⌘↵" onClick={goDetails}>
                    Continue
                  </Button>
                </div>
              </>
            ) : null}

            {step === 2 ? (
              <>
                <form
                  className="details"
                  noValidate
                  onSubmit={(e) => {
                    e.preventDefault();
                    void send();
                  }}
                >
                  <div className="quote">
                    <span className="flex items-center justify-between">
                      <span className="mono-meta text-muted">Your message</span>
                      <button type="button" className="linkbtn" onClick={() => setStep(1)}>
                        edit
                      </button>
                    </span>
                    <p>{message}</p>
                  </div>
                  <div className="two">
                    <Field label="Name" error={nameError}>
                      <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ada Lovelace" autoComplete="name" />
                    </Field>
                    <Field label="Email" error={emailError}>
                      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ada@company.com" autoComplete="email" />
                    </Field>
                  </div>
                  <div className="two">
                    <Field label="Company" optional>
                      <Input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Analytical Engines Ltd." autoComplete="organization" />
                    </Field>
                    <Field label="Reason">
                      <Select value={reason} onChange={(e) => setReason(e.target.value)} options={REASONS} />
                    </Field>
                  </div>
                  <Checkbox label="Send me a copy of this message" checked={sendCopy} onChange={(e) => setSendCopy(e.target.checked)} />
                  {sendError ? (
                    <p className="pf-error" role="alert">
                      {sendError}
                    </p>
                  ) : null}
                  <button type="submit" hidden aria-hidden="true" tabIndex={-1} />
                </form>
                <div className="cmdk-foot" style={{ height: 56 }}>
                  <span>Step 2 of 2 · your details</span>
                  <span className="inline-flex items-center gap-2">
                    <Button variant="ghost" size="sm" onClick={() => setStep(1)}>
                      Back
                    </Button>
                    <Button variant="accent" size="sm" arrow disabled={sending} onClick={() => void send()}>
                      {sending ? "Sending…" : "Send message"}
                    </Button>
                  </span>
                </div>
              </>
            ) : null}

            {step === 3 ? (
              <>
                <div className="sent" role="status">
                  <span className="sent-ic">
                    <CheckIcon size={20} />
                  </span>
                  <span className="text-[20px] font-semibold tracking-[-0.02em] text-ink">Message sent</span>
                  <span className="max-w-[380px] text-[14px] leading-[22px] text-ink-soft">
                    Thanks, {firstName}. I’ll reply to <b className="font-[550] text-ink">{email}</b>, usually within two days.
                    {sendCopy ? " A copy is on its way to your inbox too." : ""}
                  </span>
                  <div className="mt-3.5 flex gap-2">
                    <Button variant="secondary" size="sm" onClick={() => resetCompose(true)}>
                      Write another
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        resetCompose(true);
                        setTab("search");
                      }}
                    >
                      Back to search
                    </Button>
                  </div>
                </div>
                <div className="cmdk-foot">
                  <span className="toast">
                    <i />
                    Delivered
                  </span>
                  <span>{owner.email}</span>
                </div>
              </>
            ) : null}
          </div>
        )}
      </div>
    </>
  );
}

/** Small client helper for server pages: a button that opens the palette. */
export function OpenCommandPaletteButton({ tab = "search", children, ...rest }: { tab?: PaletteTab; children: ReactNode; variant?: "primary" | "secondary" | "ghost" | "accent"; size?: "sm" | "md" | "lg"; arrow?: boolean; kbd?: string }) {
  return (
    <Button {...rest} onClick={() => window.dispatchEvent(new CustomEvent(OPEN_COMMAND_PALETTE, { detail: { tab } }))}>
      {children}
    </Button>
  );
}

