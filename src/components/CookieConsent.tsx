"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";

const STORAGE_KEY = "bav-cookie-consent";
const STORAGE_VERSION = "1";

type ConsentChoice = "all" | "necessary";

interface StoredConsent {
  v: string;
  choice: ConsentChoice;
  analytics: boolean;
  marketing: boolean;
  date: string;
}

function readStored(): StoredConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    if (parsed.v !== STORAGE_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeStored(consent: StoredConsent) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  } catch {
    // ignore quota / private-mode failures
  }
}

interface CopyStrings {
  banner: string;
  learnMore: string;
  acceptAll: string;
  onlyNecessary: string;
  manage: string;
  settingsTitle: string;
  settingsIntro: string;
  necessary: string;
  necessaryDesc: string;
  analytics: string;
  analyticsDesc: string;
  marketing: string;
  marketingDesc: string;
  save: string;
  close: string;
}

const COPY: Record<string, CopyStrings> = {
  tr: {
    banner:
      "Sitemizde deneyiminizi geliştirmek için çerezler kullanıyoruz. Tercihlerinizi yönetebilirsiniz.",
    learnMore: "Çerez Politikası",
    acceptAll: "Tüm Çerezleri Kabul",
    onlyNecessary: "Sadece Gerekli",
    manage: "Ayarları Yönet",
    settingsTitle: "Çerez Tercihleri",
    settingsIntro:
      "Hangi çerez kategorilerine izin verdiğinizi seçebilirsiniz. Gerekli çerezler, sitenin doğru çalışması için zorunludur ve devre dışı bırakılamaz.",
    necessary: "Gerekli",
    necessaryDesc:
      "Site oturumu, dil tercihi ve güvenlik için kullanılır. Devre dışı bırakılamaz.",
    analytics: "Analitik",
    analyticsDesc:
      "Hangi sayfaların ziyaret edildiğini, anonim biçimde anlamak için kullanılır.",
    marketing: "Pazarlama",
    marketingDesc:
      "Tanıtım kanallarımızın etkinliğini değerlendirmek için kullanılır.",
    save: "Tercihlerimi Kaydet",
    close: "Kapat",
  },
  en: {
    banner:
      "This site uses cookies to enhance your experience. You may manage your preferences.",
    learnMore: "Cookie Policy",
    acceptAll: "Accept All Cookies",
    onlyNecessary: "Only Necessary",
    manage: "Manage Settings",
    settingsTitle: "Cookie Preferences",
    settingsIntro:
      "Choose which cookie categories you allow. Necessary cookies are required for the site to function and cannot be disabled.",
    necessary: "Necessary",
    necessaryDesc:
      "Used for session, language preference and security. Cannot be disabled.",
    analytics: "Analytics",
    analyticsDesc:
      "Used to understand, anonymously, which pages are visited.",
    marketing: "Marketing",
    marketingDesc:
      "Used to measure the effectiveness of our outreach channels.",
    save: "Save Preferences",
    close: "Close",
  },
  de: {
    banner:
      "Diese Seite verwendet Cookies, um Ihr Erlebnis zu verbessern. Sie können Ihre Einstellungen verwalten.",
    learnMore: "Cookie-Richtlinie",
    acceptAll: "Alle Cookies akzeptieren",
    onlyNecessary: "Nur notwendige",
    manage: "Einstellungen verwalten",
    settingsTitle: "Cookie-Einstellungen",
    settingsIntro:
      "Wählen Sie, welche Cookie-Kategorien Sie erlauben. Notwendige Cookies können nicht deaktiviert werden.",
    necessary: "Notwendig",
    necessaryDesc:
      "Für Sitzung, Spracheinstellung und Sicherheit erforderlich.",
    analytics: "Analytik",
    analyticsDesc: "Hilft, anonym zu verstehen, welche Seiten besucht werden.",
    marketing: "Marketing",
    marketingDesc:
      "Wird verwendet, um die Wirksamkeit unserer Kanäle zu messen.",
    save: "Einstellungen speichern",
    close: "Schliessen",
  },
  ru: {
    banner:
      "Сайт использует файлы cookie для улучшения опыта. Вы можете управлять настройками.",
    learnMore: "Политика cookie",
    acceptAll: "Принять все",
    onlyNecessary: "Только необходимые",
    manage: "Управлять настройками",
    settingsTitle: "Настройки cookie",
    settingsIntro:
      "Выберите, какие категории cookie вы разрешаете. Необходимые cookie нельзя отключить.",
    necessary: "Необходимые",
    necessaryDesc:
      "Используются для сессии, языка и безопасности. Не могут быть отключены.",
    analytics: "Аналитика",
    analyticsDesc:
      "Анонимно помогает понять, какие страницы посещаются.",
    marketing: "Маркетинг",
    marketingDesc:
      "Используется для оценки эффективности наших каналов.",
    save: "Сохранить",
    close: "Закрыть",
  },
};

function applyConsent(analytics: boolean, marketing: boolean) {
  if (typeof window === "undefined") return;
  const w = window as unknown as {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  };

  // Google Consent Mode v2 — set defaults / updates regardless of GA presence
  w.dataLayer = w.dataLayer || [];
  if (typeof w.gtag !== "function") {
    w.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer!.push(arguments as unknown as unknown[]);
    };
  }
  w.gtag("consent", "update", {
    analytics_storage: analytics ? "granted" : "denied",
    ad_storage: marketing ? "granted" : "denied",
    ad_user_data: marketing ? "granted" : "denied",
    ad_personalization: marketing ? "granted" : "denied",
  });
}

export function CookieConsent() {
  const locale = useLocale();
  const copy = COPY[locale] ?? COPY.tr;
  const [open, setOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  // On mount: decide whether to show the banner and apply any prior choice.
  useEffect(() => {
    const stored = readStored();
    if (stored) {
      setAnalytics(stored.analytics);
      setMarketing(stored.marketing);
      applyConsent(stored.analytics, stored.marketing);
      setOpen(false);
    } else {
      // Default-deny until the visitor responds.
      applyConsent(false, false);
      setOpen(true);
    }
  }, []);

  const persist = (
    choice: ConsentChoice,
    analyticsOn: boolean,
    marketingOn: boolean
  ) => {
    const stored: StoredConsent = {
      v: STORAGE_VERSION,
      choice,
      analytics: analyticsOn,
      marketing: marketingOn,
      date: new Date().toISOString(),
    };
    writeStored(stored);
    applyConsent(analyticsOn, marketingOn);
    setAnalytics(analyticsOn);
    setMarketing(marketingOn);
    setOpen(false);
    setSettingsOpen(false);
  };

  if (!open && !settingsOpen) return null;

  return (
    <>
      {open && !settingsOpen && (
        <div
          role="region"
          aria-label={copy.settingsTitle}
          className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6"
        >
          <div className="mx-auto max-w-4xl rounded-3xl border border-[var(--color-border)] bg-white/90 p-5 shadow-glass backdrop-blur md:p-7">
            <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
              <p className="text-sm leading-relaxed text-ink/85">
                {copy.banner}{" "}
                <Link
                  href="/kvkk"
                  className="font-semibold text-accent-600 underline-offset-2 hover:underline"
                >
                  {copy.learnMore}
                </Link>
                .
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSettingsOpen(true)}
                  className="btn-ghost text-xs"
                >
                  {copy.manage}
                </button>
                <button
                  type="button"
                  onClick={() => persist("necessary", false, false)}
                  className="btn-secondary !py-2.5 !text-xs"
                >
                  {copy.onlyNecessary}
                </button>
                <button
                  type="button"
                  onClick={() => persist("all", true, true)}
                  className="btn-primary !py-2.5 !text-xs"
                >
                  {copy.acceptAll}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {settingsOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={copy.settingsTitle}
          className="fixed inset-0 z-50 flex items-end justify-center bg-ink/40 p-4 backdrop-blur-sm sm:items-center"
        >
          <div className="w-full max-w-2xl overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white shadow-glass">
            <div className="border-b border-[var(--color-border)] p-6">
              <h2 className="font-display text-2xl font-semibold text-ink">
                {copy.settingsTitle}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {copy.settingsIntro}
              </p>
            </div>
            <div className="space-y-4 p-6">
              <CategoryRow
                title={copy.necessary}
                description={copy.necessaryDesc}
                checked
                disabled
                onChange={() => {}}
              />
              <CategoryRow
                title={copy.analytics}
                description={copy.analyticsDesc}
                checked={analytics}
                onChange={setAnalytics}
              />
              <CategoryRow
                title={copy.marketing}
                description={copy.marketingDesc}
                checked={marketing}
                onChange={setMarketing}
              />
            </div>
            <div className="flex flex-wrap items-center justify-end gap-2 border-t border-[var(--color-border)] bg-bg-soft p-5">
              <button
                type="button"
                onClick={() => {
                  setSettingsOpen(false);
                  setOpen(true);
                }}
                className="btn-ghost text-xs"
              >
                {copy.close}
              </button>
              <button
                type="button"
                onClick={() =>
                  persist(
                    analytics && marketing ? "all" : "necessary",
                    analytics,
                    marketing
                  )
                }
                className="btn-primary !py-2.5 !text-xs"
              >
                {copy.save}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function CategoryRow({
  title,
  description,
  checked,
  disabled,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (next: boolean) => void;
}) {
  return (
    <label
      className={`flex items-start gap-4 rounded-2xl border border-[var(--color-border)] bg-white/60 p-4 ${
        disabled ? "opacity-70" : ""
      }`}
    >
      <input
        type="checkbox"
        className="mt-1 h-4 w-4 rounded border-[var(--color-border)] text-accent-500"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="flex-1">
        <span className="block text-sm font-semibold text-ink">{title}</span>
        <span className="mt-1 block text-xs leading-relaxed text-muted">
          {description}
        </span>
      </span>
    </label>
  );
}

// Helper that callers (Analytics scripts) can use to decide whether to mount.
export function hasAnalyticsConsent(): boolean {
  const stored = readStored();
  return stored?.analytics === true;
}
