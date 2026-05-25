"use client";

import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Search, Calendar, Users, MapPin, Home, Building2 } from "lucide-react";
import clsx from "clsx";
import { useRouter } from "@/i18n/routing";
import { districts } from "@/data/districts";

type PropertyTypeFilter = "all" | "villa" | "apart";

export function SearchBar({ compact = false }: { compact?: boolean }) {
  const t = useTranslations("home");
  const c = useTranslations("common");
  const dt = useTranslations("districts");
  const router = useRouter();
  const today = new Date().toISOString().slice(0, 10);

  const [type, setType] = useState<PropertyTypeFilter>("all");
  const [district, setDistrict] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState(2);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (type !== "all") params.set("type", type);
    if (district) params.set("district", district);
    if (checkin) params.set("checkin", checkin);
    if (checkout) params.set("checkout", checkout);
    if (guests) params.set("guests", String(guests));
    router.push(`/kiralik?${params.toString()}`);
  };

  return (
    <form
      onSubmit={submit}
      className={clsx(
        "glass-strong relative w-full rounded-3xl p-3 sm:p-4",
        compact ? "" : "shadow-glass"
      )}
    >
      {/* Top gold seam */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-6 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(217,178,110,0.5), transparent)",
        }}
      />

      <div
        role="tablist"
        aria-label={t("searchType")}
        className="flex w-full items-center gap-1 rounded-2xl bg-white/55 p-1 sm:max-w-md"
      >
        <TypeTab active={type === "all"} onClick={() => setType("all")}>
          {t("searchTypeAll")}
        </TypeTab>
        <TypeTab
          active={type === "villa"}
          onClick={() => setType("villa")}
          icon={<Home className="h-3.5 w-3.5" />}
        >
          {t("searchTypeVilla")}
        </TypeTab>
        <TypeTab
          active={type === "apart"}
          onClick={() => setType("apart")}
          icon={<Building2 className="h-3.5 w-3.5" />}
        >
          {t("searchTypeApart")}
        </TypeTab>
      </div>

      <div className="mt-3 grid gap-2 md:grid-cols-[1.4fr_1fr_1fr_0.9fr_auto]">
        <Field
          icon={<MapPin className="h-4 w-4" />}
          label={t("searchDistrict")}
        >
          <select
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="w-full border-none bg-transparent p-0 text-sm font-semibold text-ink focus:outline-none focus:ring-0"
          >
            <option value="">{t("searchDistrictAny")}</option>
            {districts.map((d) => (
              <option key={d.slug} value={d.slug}>
                {dt(d.slug)}
              </option>
            ))}
          </select>
        </Field>
        <Field icon={<Calendar className="h-4 w-4" />} label={t("searchCheckin")}>
          <input
            type="date"
            min={today}
            value={checkin}
            onChange={(e) => setCheckin(e.target.value)}
            className="w-full border-none bg-transparent p-0 text-sm font-semibold text-ink focus:outline-none focus:ring-0"
          />
        </Field>
        <Field icon={<Calendar className="h-4 w-4" />} label={t("searchCheckout")}>
          <input
            type="date"
            min={checkin || today}
            value={checkout}
            onChange={(e) => setCheckout(e.target.value)}
            className="w-full border-none bg-transparent p-0 text-sm font-semibold text-ink focus:outline-none focus:ring-0"
          />
        </Field>
        <Field icon={<Users className="h-4 w-4" />} label={t("searchGuests")}>
          <select
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-full border-none bg-transparent p-0 text-sm font-semibold text-ink focus:outline-none focus:ring-0"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((n) => (
              <option key={n} value={n}>
                {t("searchGuestsCount", { count: n })}
              </option>
            ))}
          </select>
        </Field>
        <button type="submit" className="btn-primary h-full min-h-[60px] !rounded-2xl">
          <Search className="h-5 w-5" />
          <span className="hidden sm:inline">{t("searchCta")}</span>
          <span className="sm:hidden">{c("search")}</span>
        </button>
      </div>
    </form>
  );
}

function TypeTab({
  active,
  onClick,
  icon,
  children,
}: {
  active: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={clsx(
        "relative inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl px-3 py-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] transition-all duration-300",
        active
          ? "bg-ink text-white shadow-lg"
          : "text-ink/70 hover:bg-white/60 hover:text-ink"
      )}
    >
      {icon}
      {children}
    </button>
  );
}

function Field({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="group flex w-full cursor-pointer items-center gap-3 rounded-2xl bg-white/55 px-3 py-2.5 transition-all duration-300 hover:bg-white/80 focus-within:bg-white focus-within:ring-2 focus-within:ring-accent-400/40">
      <span className="text-accent-500 transition-colors group-hover:text-accent-600">
        {icon}
      </span>
      <span className="flex w-full flex-col">
        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.22em] text-muted">
          {label}
        </span>
        {children}
      </span>
    </label>
  );
}
