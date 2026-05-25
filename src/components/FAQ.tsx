"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import clsx from "clsx";

export interface FAQItem {
  q: string;
  a: string;
}

export function FAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="overflow-hidden rounded-3xl glass">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        const isFirst = idx === 0;
        return (
          <div
            key={idx}
            className={clsx(
              !isFirst && "border-t border-[var(--color-border)]"
            )}
          >
            <button
              onClick={() => setOpen(isOpen ? null : idx)}
              className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left transition hover:bg-white/40"
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-ink md:text-lg">
                {item.q}
              </span>
              <span
                className={clsx(
                  "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-white/60 text-ink transition-all duration-500",
                  isOpen &&
                    "rotate-45 border-accent-500 bg-accent-400/20 text-accent-600"
                )}
              >
                <Plus className="h-4 w-4" />
              </span>
            </button>
            <div
              className={clsx(
                "grid overflow-hidden transition-all duration-500",
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-[15px] leading-relaxed text-muted">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
