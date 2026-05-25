"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Menu, X, Phone, MessageCircle, Globe, ChevronDown } from "lucide-react";
import { Link, usePathname } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import clsx from "clsx";

const LOCALE_LABEL: Record<string, string> = {
  tr: "TR",
  en: "EN",
  de: "DE",
  ru: "RU",
};

export function Header() {
  const t = useTranslations("nav");
  const c = useTranslations("common");
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/villalar", label: t("villas") },
    { href: "/apartlar", label: t("apartments") },
    { href: "/tekne-kiralama", label: t("boat") },
    { href: "/arac-kiralama", label: t("car") },
    { href: "/vip-transfer", label: t("transfer") },
    { href: "/turlar", label: t("tours") },
    { href: "/blog", label: t("blog") },
  ];

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="container-page">
        <div
          className={clsx(
            "relative flex items-center justify-between gap-4 rounded-full px-4 transition-all duration-500 sm:px-6",
            scrolled ? "glass-strong h-14 shadow-glass" : "glass h-16"
          )}
        >
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2"
            aria-label={c("brandLong")}
          >
            <Image
              src="/logo_kare.svg"
              alt=""
              width={36}
              height={36}
              className="h-8 w-8"
            />
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="text-display text-sm font-extrabold tracking-tight text-ink">
                BodrumApart
              </span>
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.28em] text-accent-600">
                Villa
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-0.5 lg:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative rounded-full px-3 py-2 text-sm font-medium text-ink/85 transition hover:text-ink"
              >
                {link.label}
                <span className="absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-accent-500 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <div className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                onBlur={() => setTimeout(() => setLangOpen(false), 150)}
                className="btn-ghost"
                aria-label={t("language")}
                aria-haspopup="menu"
                aria-expanded={langOpen}
              >
                <Globe className="h-4 w-4" />
                <span className="font-mono text-xs font-semibold tracking-wider">
                  {LOCALE_LABEL[locale]}
                </span>
                <ChevronDown
                  className={clsx(
                    "h-3 w-3 transition",
                    langOpen && "rotate-180"
                  )}
                />
              </button>
              {langOpen && (
                <div
                  role="menu"
                  className="absolute right-0 mt-2 w-32 overflow-hidden rounded-2xl glass-strong"
                >
                  {routing.locales.map((l) => (
                    <Link
                      key={l}
                      href={pathname}
                      locale={l}
                      onClick={() => setLangOpen(false)}
                      className={clsx(
                        "block px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider hover:bg-white/60",
                        locale === l ? "text-accent-600" : "text-ink/85"
                      )}
                    >
                      {LOCALE_LABEL[l]}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <a
              href={`https://wa.me/${c("whatsappNumber")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !px-5 !py-2.5 !text-xs"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-full p-2 text-ink lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="container-page mt-2 lg:hidden">
          <div className="glass-strong space-y-1 rounded-3xl p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-full px-4 py-2.5 text-sm font-medium text-ink hover:bg-white/60"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 pt-2">
              {routing.locales.map((l) => (
                <Link
                  key={l}
                  href={pathname}
                  locale={l}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    "rounded-full border px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em]",
                    locale === l
                      ? "border-accent-500 bg-accent-400/20 text-accent-600"
                      : "border-[var(--color-border)] text-ink/80"
                  )}
                >
                  {LOCALE_LABEL[l]}
                </Link>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2 pt-3">
              <a
                href={`tel:${c("phone").replace(/\s/g, "")}`}
                className="btn-secondary !py-2.5 !text-xs"
              >
                <Phone className="h-4 w-4" />
                {c("call")}
              </a>
              <a
                href={`https://wa.me/${c("whatsappNumber")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !py-2.5 !text-xs"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
