"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { X } from "lucide-react";

const STORAGE_KEY = "bav-season-banner-dismissed";
const TTL_MS = 7 * 24 * 60 * 60 * 1000;

const COPY: Record<string, string> = {
  tr: "2026 Sezonu · Sınırlı sayıda villa için talepler değerlendirilmektedir.",
  en: "2026 Season · Limited villa enquiries are being reviewed.",
  de: "Saison 2026 · Eine begrenzte Anzahl Villa-Anfragen wird geprüft.",
  ru: "Сезон 2026 · Рассматривается ограниченное число запросов на виллы.",
};

export function SeasonBanner() {
  const locale = useLocale();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const ts = Number(raw);
        if (Number.isFinite(ts) && Date.now() - ts < TTL_MS) {
          return;
        }
      }
      setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      // ignore
    }
    setVisible(false);
  };

  return (
    <div
      role="region"
      aria-label="Season notice"
      className="relative z-30 border-b border-[var(--color-border)] bg-ink text-white"
    >
      <div className="container-page flex items-center justify-between gap-4 py-2.5">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/90 md:text-xs">
          {COPY[locale] ?? COPY.tr}
        </p>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss"
          className="rounded-full p-1 text-white/70 transition hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
