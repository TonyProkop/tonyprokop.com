"use client";

import { useState } from "react";
import { Button, Checkbox, Field, Input, Select, Textarea } from "@/components/ui";

/** Interactive form demo for the /design preview page. */
export function FormDemo() {
  const [email, setEmail] = useState("ada@");
  const [tried, setTried] = useState(true);
  const invalid = tried && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);

  return (
    <form
      className="grid gap-5 rounded-md border border-line bg-surface p-7 shadow-[var(--shadow-highlight)]"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        setTried(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" hint="How should I address you?">
          <Input placeholder="Ada Lovelace" autoComplete="name" />
        </Field>
        <Field label="Email" error={invalid ? "That doesn’t look like an email address." : undefined}>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
        </Field>
      </div>
      <Field label="Company" optional>
        <Input placeholder="Analytical Engines Ltd." />
      </Field>
      <Field label="Reason">
        <Select options={["Full-time role", "Contract work", "Speaking or writing", "Just saying hi"]} />
      </Field>
      <Field label="Message" hint="A few sentences is plenty.">
        <Textarea placeholder="What are you working on?" />
      </Field>
      <Checkbox label="Send me a note when I publish something new" defaultChecked />
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-body-sm text-muted">No spam, no newsletters you didn’t ask for.</span>
        <Button type="submit" variant="accent" size="lg" arrow>
          Send message
        </Button>
      </div>
    </form>
  );
}
