"use client";

import { cloneElement, isValidElement, useId, type ReactElement, type ReactNode } from "react";
import { cx } from "@/lib/cx";
import { AlertIcon, CheckIcon, ChevronIcon } from "./icons";
import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

/* ---------- controls ---------- */

/** 40px single-line input. Wrap in Field for a label; bare, pass aria-label. */
export function Input({ className, type = "text", ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return <input type={type} {...rest} className={cx("pf-input", className)} />;
}

/** Multi-line input, 112px minimum, vertical resize. */
export function Textarea({ className, ...rest }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...rest} className={cx("pf-input", className)} />;
}

export type SelectOption = string | { value: string; label: string };

/** Native select styled like Input, with a chevron. Prefer it over custom dropdowns. */
export function Select({ className, options, children, ...rest }: SelectHTMLAttributes<HTMLSelectElement> & { options?: SelectOption[] }) {
  return (
    <div className="pf-select-wrap">
      <select {...rest} className={cx("pf-input", className)}>
        {options
          ? options.map((o) => {
              const value = typeof o === "string" ? o : o.value;
              const label = typeof o === "string" ? o : o.label;
              return (
                <option key={value} value={value}>
                  {label}
                </option>
              );
            })
          : children}
      </select>
      <ChevronIcon />
    </div>
  );
}

/** 16px box, ink fill when checked. Label is a full sentence. */
export function Checkbox({ label, className, ...rest }: Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & { label: ReactNode }) {
  return (
    <label className={cx("pf-check", className)}>
      <input type="checkbox" {...rest} />
      <span className="pf-check-box" aria-hidden="true">
        <CheckIcon />
      </span>
      <span>{label}</span>
    </label>
  );
}

/* ---------- Field ---------- */

type FieldProps = {
  label: string;
  hint?: string;
  /** Replaces the hint and turns the control's border `danger`. Say what to do. */
  error?: string;
  optional?: boolean;
  id?: string;
  className?: string;
  /** One control (Input, Textarea, Select). It receives id and aria wiring. */
  children: ReactElement<{ id?: string; "aria-describedby"?: string; "aria-invalid"?: boolean }>;
};

/** Mono lowercase label + one control + hint or error, with ids and aria wired for you. */
export function Field({ label, hint, error, optional, id, className, children }: FieldProps) {
  const autoId = useId();
  const controlId = id ?? autoId;
  const describedBy = error ? `${controlId}-err` : hint ? `${controlId}-hint` : undefined;
  const control = isValidElement(children)
    ? cloneElement(children, { id: controlId, "aria-describedby": describedBy, "aria-invalid": error ? true : undefined })
    : children;

  return (
    <div className={cx("pf-field", className)}>
      <label className="pf-label" htmlFor={controlId}>
        {label}
        {optional ? <small>optional</small> : null}
      </label>
      {control}
      {error ? (
        <p className="pf-error" id={`${controlId}-err`}>
          <AlertIcon />
          {error}
        </p>
      ) : hint ? (
        <p className="pf-hint" id={`${controlId}-hint`}>
          {hint}
        </p>
      ) : null}
    </div>
  );
}
