import clsx from "clsx";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  withLine?: boolean;
}

export function MonoLabel({ children, className, withLine = true }: Props) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.22em]",
        className
      )}
    >
      {withLine && (
        <span className="h-px w-6 bg-current opacity-50" aria-hidden />
      )}
      {children}
    </span>
  );
}

export function StatCounter({
  value,
  label,
  suffix = "",
}: {
  value: string | number;
  label: string;
  suffix?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-display text-5xl font-bold text-ink md:text-6xl">
        {value}
        <span className="text-accent-500">{suffix}</span>
      </p>
      <span className="mono-label">{label}</span>
    </div>
  );
}
