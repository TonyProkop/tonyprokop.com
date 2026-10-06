/** 4px track with an accent fill. */
export function ProgressBar({ value, label }: { value: number; label: string }) {
  return (
    <div role="progressbar" aria-label={label} aria-valuemin={0} aria-valuemax={100} aria-valuenow={value} className="h-1 overflow-hidden rounded-[2px] bg-line">
      <i className="block h-full rounded-[2px] bg-accent" style={{ width: `${value}%` }} />
    </div>
  );
}
