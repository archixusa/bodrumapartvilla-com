"use client";

import { useState } from "react";
import { getReservationClient } from "@/lib/reservation-form";

interface NewsletterSignupProps {
  sourcePage: string;
  locale: string;
  title: string;
  description: string;
  placeholder: string;
  cta: string;
  consentText: string;
  successMessage: string;
  errorMessage: string;
}

export function NewsletterSignup({
  sourcePage,
  locale,
  title,
  description,
  placeholder,
  cta,
  consentText,
  successMessage,
  errorMessage,
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">(
    "idle"
  );
  const [errorDetail, setErrorDetail] = useState<string | null>(null);
  // Honeypot — hidden field; if a bot fills it we silently treat as success.
  const [honeypot, setHoneypot] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorDetail(null);

    // Honeypot tripwire — bots fill every visible field including this one.
    if (honeypot.trim() !== "") {
      setStatus("ok");
      return;
    }

    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus("err");
      setErrorDetail(
        locale === "tr"
          ? "Geçerli bir e-posta adresi giriniz."
          : "Please enter a valid email address."
      );
      return;
    }
    if (!consent) {
      setStatus("err");
      setErrorDetail(consentText);
      return;
    }

    setStatus("loading");
    try {
      const supabase = getReservationClient();
      const { error } = await supabase
        .from("newsletter_subscribers")
        .insert({
          email: trimmed.toLowerCase(),
          source_site: "bodrumapartvilla",
          source_page: sourcePage,
          locale,
          consent_marketing: true,
        });
      if (error && !`${error.message}`.toLowerCase().includes("duplicate")) {
        throw error;
      }
      setStatus("ok");
      setEmail("");
      setConsent(false);
    } catch (err) {
      console.error("[NewsletterSignup] insert failed", err);
      setStatus("err");
      setErrorDetail(errorMessage);
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-3xl border border-accent-400/40 bg-white/60 p-8 text-center backdrop-blur">
        <p className="font-display text-lg font-semibold text-ink">
          {successMessage}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-[var(--color-border)] bg-white/60 p-8 backdrop-blur md:p-10"
    >
      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-accent-600">
        {locale === "tr" ? "Bülten" : "Newsletter"}
      </p>
      <h3 className="mt-3 font-display text-2xl font-semibold text-ink md:text-3xl">
        {title}
      </h3>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
        {description}
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className="flex-1 rounded-full border border-[var(--color-border)] bg-white/80 px-5 py-3 text-sm text-ink placeholder:text-muted focus:border-accent-500 focus:outline-none"
          disabled={status === "loading"}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary whitespace-nowrap disabled:opacity-60"
        >
          {status === "loading"
            ? locale === "tr"
              ? "Gönderiliyor"
              : "Sending"
            : cta}
        </button>
      </div>

      <label className="mt-4 flex items-start gap-3 text-xs leading-relaxed text-muted">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 rounded border-[var(--color-border)] text-accent-500"
        />
        <span>{consentText}</span>
      </label>

      {/* Honeypot field — hidden from real users; bots that fill it get a soft-fail. */}
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

      {status === "err" && errorDetail && (
        <p className="mt-4 text-xs text-red-700">{errorDetail}</p>
      )}
    </form>
  );
}
