"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { X } from "lucide-react";
import { getReservationClient } from "@/lib/reservation-form";
import { trackLead } from "@/lib/analytics";

const STORAGE_KEY = "bav-exit-intent-dismissed";
const TTL_MS = 30 * 24 * 60 * 60 * 1000;
const LOCALES = ["tr", "en", "de", "ru"];

// Only arm on high-intent browsing pages: homepage, the villa list, and
// district pages. Keeps the invitation away from contact, legal and
// inner detail pages where it would feel pushy for a quiet-luxury brand.
function isEligiblePath(pathname: string): boolean {
  // Strip a leading locale prefix (localePrefix is "as-needed", so the
  // default locale "tr" has none while en/de/ru are prefixed).
  const segments = pathname.split("/").filter(Boolean);
  if (segments[0] && LOCALES.includes(segments[0])) segments.shift();
  if (segments.length === 0) return true; // homepage
  if (segments[0] === "villalar") return true; // villa list
  if (segments[0] === "bodrum") return true; // district pages
  return false;
}

interface Copy {
  title: string;
  description: string;
  date: string;
  guests: string;
  contact: string;
  contactPlaceholder: string;
  kvkk: string;
  submit: string;
  submitting: string;
  success: string;
  error: string;
  close: string;
}

const COPY: Record<string, Copy> = {
  tr: {
    title: "Konaklamanızı sessizce planlayalım",
    description:
      "Konaklama tarihiniz ve kişi sayınız için konsiyerj ekibimiz birkaç villa önerisi paylaşır.",
    date: "Konaklama tarihi",
    guests: "Kişi sayısı",
    contact: "İletişim (e-posta ya da telefon)",
    contactPlaceholder: "ornek@eposta.com",
    kvkk:
      "Bilgilerimin Bodrumapartvilla konsiyerj ekibi tarafından konaklama önerisi amacıyla işlenmesini kabul ediyorum.",
    submit: "Görüşmeyi Başlat",
    submitting: "Gönderiliyor",
    success: "Mesajınız konsiyerjimize iletildi.",
    error: "Bir aksaklık oluştu. Lütfen kısa süre sonra tekrar deneyiniz.",
    close: "Kapat",
  },
  en: {
    title: "Let us plan your stay, quietly",
    description:
      "Share your dates and group size — the concierge will return with a short list of villa suggestions.",
    date: "Stay dates",
    guests: "Group size",
    contact: "Contact (email or phone)",
    contactPlaceholder: "name@example.com",
    kvkk:
      "I agree that my details may be processed by the Bodrumapartvilla concierge for the purpose of villa suggestions.",
    submit: "Begin the Conversation",
    submitting: "Sending",
    success: "Your message has reached the concierge.",
    error: "Something interrupted the request. Please try again shortly.",
    close: "Close",
  },
  de: {
    title: "Lassen Sie uns Ihren Aufenthalt ruhig planen",
    description:
      "Teilen Sie uns Daten und Gruppengröße mit — der Concierge meldet sich mit einer Auswahl von Villen.",
    date: "Aufenthaltsdaten",
    guests: "Gruppengröße",
    contact: "Kontakt (E-Mail oder Telefon)",
    contactPlaceholder: "name@beispiel.com",
    kvkk:
      "Ich stimme zu, dass meine Angaben für Villenvorschläge verarbeitet werden.",
    submit: "Gespräch starten",
    submitting: "Wird gesendet",
    success: "Ihre Nachricht hat den Concierge erreicht.",
    error: "Bitte versuchen Sie es in Kürze erneut.",
    close: "Schliessen",
  },
  ru: {
    title: "Спланируем ваше проживание тихо",
    description:
      "Сообщите даты и число гостей — консьерж предложит несколько вариантов вилл.",
    date: "Даты проживания",
    guests: "Число гостей",
    contact: "Контакт (email или телефон)",
    contactPlaceholder: "name@example.com",
    kvkk:
      "Соглашаюсь на обработку моих данных консьерж-командой Bodrumapartvilla.",
    submit: "Начать беседу",
    submitting: "Отправка",
    success: "Ваше сообщение получено.",
    error: "Произошла ошибка. Попробуйте позже.",
    close: "Закрыть",
  },
};

export function ExitIntentModal() {
  const locale = useLocale();
  const copy = COPY[locale] ?? COPY.tr;

  const [open, setOpen] = useState(false);
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [contact, setContact] = useState("");
  const [kvkk, setKvkk] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">(
    "idle"
  );
  const [err, setErr] = useState<string | null>(null);
  // Honeypot — hidden field; if a bot fills it we silently treat as success.
  const [honeypot, setHoneypot] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Only arm on eligible pages (homepage, /villalar, /bodrum/*).
    if (!isEligiblePath(window.location.pathname)) return;
    // Per-session guard so the modal can't re-open on the same browsing session.
    try {
      if (window.sessionStorage.getItem(STORAGE_KEY) === "shown") return;
    } catch {
      // ignore
    }
    // Longer-term dismissal (TTL_MS) persists across sessions.
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const ts = Number(raw);
        if (Number.isFinite(ts) && Date.now() - ts < TTL_MS) return;
      }
    } catch {
      // ignore
    }

    let armed = true;
    const trigger = () => {
      if (!armed) return;
      armed = false;
      setOpen(true);
      try {
        window.sessionStorage.setItem(STORAGE_KEY, "shown");
      } catch {
        // ignore
      }
    };

    // Desktop exit-intent: cursor leaves toward the top edge.
    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && (e.relatedTarget === null || e.relatedTarget === undefined)) {
        trigger();
      }
    };

    // Mobile fallback: a gentle 90 seconds on small viewports.
    let mobileTimer: number | undefined;
    if (window.innerWidth < 768) {
      mobileTimer = window.setTimeout(() => trigger(), 90_000);
    }

    document.addEventListener("mouseout", onMouseOut);
    return () => {
      document.removeEventListener("mouseout", onMouseOut);
      if (mobileTimer) window.clearTimeout(mobileTimer);
    };
  }, []);

  // ESC key closes the modal; lock background scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function close() {
    setOpen(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
      window.sessionStorage.setItem(STORAGE_KEY, "shown");
    } catch {
      // ignore
    }
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr(null);
    // Honeypot tripwire — bots fill every visible field including this one.
    if (honeypot.trim() !== "") {
      setStatus("ok");
      return;
    }
    if (!contact.trim()) {
      setStatus("err");
      setErr(copy.contact);
      return;
    }
    if (!kvkk) {
      setStatus("err");
      setErr(copy.kvkk);
      return;
    }
    setStatus("loading");
    try {
      const supabase = getReservationClient();
      const message = [
        `Date: ${date || "-"}`,
        `Guests: ${guests || "-"}`,
        `Contact: ${contact.trim()}`,
      ].join("\n");
      const { error } = await supabase.from("contact_messages").insert({
        source_site: "bodrumapartvilla",
        locale,
        name: "Exit-intent visitor",
        email: contact.includes("@") ? contact.trim().toLowerCase() : null,
        phone: contact.includes("@") ? null : contact.trim(),
        subject: "exit_intent",
        message,
        kvkk_consent: true,
      });
      if (error) throw error;
      trackLead({ kind: "exit_intent" });
      setStatus("ok");
      try {
        window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
      } catch {
        // ignore
      }
    } catch (caught) {
      console.error("[ExitIntent] insert failed", caught);
      setStatus("err");
      setErr(copy.error);
    }
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={copy.title}
      className="fixed inset-0 z-[100] flex items-end justify-center bg-ink/50 p-4 backdrop-blur-sm sm:items-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white shadow-glass">
        <button
          type="button"
          aria-label={copy.close}
          onClick={close}
          className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink/70 shadow-sm transition hover:bg-white hover:text-ink"
        >
          <X className="h-4 w-4" />
        </button>

        {status === "ok" ? (
          <div className="p-8 text-center">
            <h2 className="font-display text-2xl font-semibold text-ink">
              {copy.success}
            </h2>
            <button
              type="button"
              onClick={close}
              className="btn-primary mt-8"
            >
              {copy.close}
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-5 p-8">
            <header>
              <h2 className="font-display text-2xl font-semibold leading-tight text-ink">
                {copy.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {copy.description}
              </p>
            </header>
            <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-ink/70">
              {copy.date}
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="2026-06-15 → 2026-06-22"
                className="mt-2 w-full rounded-full border border-[var(--color-border)] bg-white px-5 py-3 text-base font-normal text-ink placeholder:text-muted focus:border-accent-500 focus:outline-none"
                style={{ fontSize: 16 }}
              />
            </label>
            <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-ink/70">
              {copy.guests}
              <input
                type="number"
                min={1}
                max={20}
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="mt-2 w-full rounded-full border border-[var(--color-border)] bg-white px-5 py-3 text-base font-normal text-ink placeholder:text-muted focus:border-accent-500 focus:outline-none"
                style={{ fontSize: 16 }}
              />
            </label>
            <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-ink/70">
              {copy.contact}
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder={copy.contactPlaceholder}
                autoComplete="email"
                required
                className="mt-2 w-full rounded-full border border-[var(--color-border)] bg-white px-5 py-3 text-base font-normal text-ink placeholder:text-muted focus:border-accent-500 focus:outline-none"
                style={{ fontSize: 16 }}
              />
            </label>
            {/* Honeypot — hidden from real users; bots fill it. */}
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <label className="flex items-start gap-3 text-xs leading-relaxed text-muted">
              <input
                type="checkbox"
                checked={kvkk}
                onChange={(e) => setKvkk(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-[var(--color-border)] text-accent-500"
                style={{ minHeight: 16, minWidth: 16 }}
              />
              <span>{copy.kvkk}</span>
            </label>
            {err && status === "err" && (
              <p className="text-xs text-red-700">{err}</p>
            )}
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary w-full disabled:opacity-60"
            >
              {status === "loading" ? copy.submitting : copy.submit}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
