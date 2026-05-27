import Image from "next/image";
import { useTranslations } from "next-intl";
import { Mail, MessageCircle, Instagram, Facebook, MapPin } from "lucide-react";
import { Link } from "@/i18n/routing";
import { MonoLabel } from "@/components/ui/MonoLabel";

export function Footer() {
  const t = useTranslations("footer");
  const c = useTranslations("common");
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 overflow-hidden">
      {/* Top gold seam */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(217,178,110,0.6), transparent)",
        }}
      />
      {/* Mesh */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 80% at 20% 100%, rgba(109,144,220,0.18) 0%, transparent 60%), radial-gradient(50% 80% at 80% 100%, rgba(217,178,110,0.16) 0%, transparent 60%), linear-gradient(180deg, transparent 0%, rgba(234,240,251,0.6) 100%)",
        }}
      />

      <div className="container-page relative py-16 lg:py-20">
        {/* Brand block */}
        <div className="mb-12 max-w-md">
          <div className="inline-flex items-center gap-3 rounded-2xl glass-strong px-4 py-3">
            <Image
              src="/logo_kare.svg"
              alt=""
              width={36}
              height={36}
              className="h-9 w-9"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-display text-base font-extrabold tracking-tight text-ink">
                BodrumApart
              </span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-accent-600">
                Villa
              </span>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted">
            {t("tagline")}
          </p>
        </div>

        {/* Four columns */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <FooterColumn title={t("corporate")}>
            <FooterLink href="/hakkimizda">Hakkımızda</FooterLink>
            <FooterLink href="/iletisim">İletişim</FooterLink>
            <FooterLink href="/evinizi-kiraya-verin">
              {t("ownerEntrust")}
            </FooterLink>
          </FooterColumn>

          <FooterColumn title={t("collection")}>
            <FooterLink href="/villalar">Villalar</FooterLink>
            <FooterLink href="/iletisim">{t("stayRequest")}</FooterLink>
          </FooterColumn>

          <FooterColumn title={t("help")}>
            <FooterLink href="/sss">{t("faq")}</FooterLink>
            <FooterLink href="/kvkk">{t("kvkk")}</FooterLink>
            <FooterLink href="/cerez-politikasi">{t("cookies")}</FooterLink>
            <FooterLink href="/kullanim-sartlari">{t("terms")}</FooterLink>
            <FooterLink href="/iptal-iade-politikasi">{t("cancel")}</FooterLink>
          </FooterColumn>

          <FooterColumn title={t("contact")}>
            <li>
              <a
                href={`https://wa.me/${c("whatsappNumber")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-start gap-2 text-ink/80 transition hover:text-ink"
              >
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                <span>
                  <span className="block text-[13px] font-semibold">
                    {t("concierge")} · WhatsApp
                  </span>
                  <span className="block font-mono text-[12px] text-muted">
                    {c("phoneDisplay")}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${c("email")}`}
                className="group inline-flex items-start gap-2 text-ink/80 transition hover:text-ink"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                <span className="font-mono text-[12px]">{c("email")}</span>
              </a>
            </li>
            <li>
              <p className="inline-flex items-start gap-2 text-muted">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                <span className="text-[13px]">Bodrum, Muğla / Türkiye</span>
              </p>
            </li>
            <li className="pt-2">
              <div className="flex gap-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="rounded-full glass px-2.5 py-2.5 transition hover:border-accent-500"
                >
                  <Instagram className="h-4 w-4 text-ink" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="rounded-full glass px-2.5 py-2.5 transition hover:border-accent-500"
                >
                  <Facebook className="h-4 w-4 text-ink" />
                </a>
              </div>
            </li>
          </FooterColumn>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[var(--color-border)] pt-6 md:flex-row md:items-center">
          <MonoLabel className="text-muted">
            © {year} bodrumapartvilla.com
          </MonoLabel>
          <MonoLabel className="text-muted" withLine={false}>
            Made with care in Bodrum
          </MonoLabel>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <MonoLabel className="mb-4 text-accent-600">{title}</MonoLabel>
      <ul className="space-y-2.5 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="group inline-flex items-center text-ink/80 transition hover:text-ink"
      >
        <span className="relative">
          {children}
          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent-500 transition-all duration-300 group-hover:w-full" />
        </span>
      </Link>
    </li>
  );
}
