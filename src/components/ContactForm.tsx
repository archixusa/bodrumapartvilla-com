"use client";

import { useState } from "react";
import { getReservationClient } from "@/lib/reservation-form";
import { trackLead } from "@/lib/analytics";

const SUBJECTS_TR = [
  { value: "general", label: "Genel Bilgi" },
  { value: "stay", label: "Konaklama Talebi" },
  { value: "owner", label: "Villamı değerlendirmek" },
  { value: "other", label: "Diğer" },
] as const;

const SUBJECTS_EN = [
  { value: "general", label: "General Information" },
  { value: "stay", label: "Stay Enquiry" },
  { value: "owner", label: "Entrust Your Villa" },
  { value: "other", label: "Other" },
] as const;

interface ContactFormProps {
  locale: string;
}

export function ContactForm({ locale }: ContactFormProps) {
  const isTr = locale === "tr";
  const subjects = isTr ? SUBJECTS_TR : SUBJECTS_EN;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState<string>(subjects[0].value);
  const [message, setMessage] = useState("");
  const [kvkk, setKvkk] = useState(false);
  const [honey, setHoney] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">(
    "idle"
  );
  const [errorDetail, setErrorDetail] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorDetail(null);

    if (honey) {
      setStatus("ok");
      return;
    }

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("err");
      setErrorDetail(
        isTr
          ? "Lütfen ad, e-posta ve mesaj alanlarını doldurunuz."
          : "Please complete the name, email and message fields."
      );
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus("err");
      setErrorDetail(
        isTr
          ? "Geçerli bir e-posta adresi giriniz."
          : "Please enter a valid email address."
      );
      return;
    }
    if (!kvkk) {
      setStatus("err");
      setErrorDetail(
        isTr
          ? "Devam etmek için KVKK onayını veriniz."
          : "Please tick the privacy consent to continue."
      );
      return;
    }

    setStatus("loading");
    try {
      const supabase = getReservationClient();
      const { error } = await supabase.from("contact_messages").insert({
        source_site: "bodrumapartvilla",
        locale,
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim() || null,
        subject,
        message: message.trim(),
        kvkk_consent: true,
      });
      if (error) throw error;
      trackLead({ kind: "contact", subject });
      setStatus("ok");
      setName("");
      setEmail("");
      setPhone("");
      setSubject(subjects[0].value);
      setMessage("");
      setKvkk(false);
    } catch (err) {
      console.error("[ContactForm] insert failed", err);
      setStatus("err");
      setErrorDetail(
        isTr
          ? "Bir aksaklık oluştu. Lütfen kısa süre sonra tekrar deneyiniz veya WhatsApp üzerinden ulaşınız."
          : "Something interrupted the request. Please try again shortly or reach us on WhatsApp."
      );
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-3xl border border-accent-400/40 bg-white/70 p-8 backdrop-blur">
        <p className="font-display text-lg font-semibold text-ink">
          {isTr
            ? "Mesajınız konsiyerjimize iletildi."
            : "Your message has reached the concierge."}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {isTr
            ? "En geç 24 saat içinde dönüş yapacağız."
            : "We will be in touch within 24 hours."}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl border border-[var(--color-border)] bg-white/70 p-7 backdrop-blur md:p-9"
    >
      {/* Honeypot */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={honey}
        onChange={(e) => setHoney(e.target.value)}
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label={isTr ? "Ad Soyad *" : "Full Name *"}
          required
          value={name}
          onChange={setName}
          autoComplete="name"
        />
        <Field
          label="Email *"
          type="email"
          required
          value={email}
          onChange={setEmail}
          autoComplete="email"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label={isTr ? "Telefon" : "Phone"}
          value={phone}
          onChange={setPhone}
          autoComplete="tel"
        />
        <div>
          <label className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-muted">
            {isTr ? "Konu *" : "Subject *"}
          </label>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-ink focus:border-accent-500 focus:outline-none"
          >
            {subjects.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-muted">
          {isTr ? "Mesaj *" : "Message *"}
        </label>
        <textarea
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm leading-relaxed text-ink focus:border-accent-500 focus:outline-none"
          placeholder={
            isTr
              ? "Tarihler, kişi sayısı, özel istekler — kısa veya uzun, dilediğiniz biçimde yazabilirsiniz."
              : "Dates, party size, particular requests — feel free to write at any length."
          }
        />
      </div>

      <label className="flex items-start gap-3 text-xs leading-relaxed text-muted">
        <input
          type="checkbox"
          checked={kvkk}
          onChange={(e) => setKvkk(e.target.checked)}
          className="mt-0.5 h-4 w-4 rounded border-[var(--color-border)] text-accent-500"
        />
        <span>
          {isTr ? (
            <>
              Kişisel verilerimin{" "}
              <a
                href="/kvkk"
                className="font-semibold text-accent-600 hover:underline"
              >
                KVKK Aydınlatma Metni
              </a>
              ne uygun şekilde işlenmesini ve mesajıma yanıt verilmek üzere
              konsiyerj ekibinizle paylaşılmasını kabul ediyorum.
            </>
          ) : (
            <>
              I consent to the processing of my personal data in line with the{" "}
              <a
                href="/en/kvkk"
                className="font-semibold text-accent-600 hover:underline"
              >
                privacy notice
              </a>{" "}
              for the purpose of responding to my message.
            </>
          )}
        </span>
      </label>

      {status === "err" && errorDetail && (
        <p className="text-xs text-red-700">{errorDetail}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full disabled:opacity-60"
      >
        {status === "loading"
          ? isTr
            ? "Gönderiliyor..."
            : "Sending..."
          : isTr
            ? "Mesajı İlet"
            : "Send Message"}
      </button>
    </form>
  );
}

function Field({
  label,
  type = "text",
  required,
  value,
  onChange,
  autoComplete,
}: {
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (next: string) => void;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-muted">
        {label}
      </label>
      <input
        type={type}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-ink focus:border-accent-500 focus:outline-none"
      />
    </div>
  );
}
