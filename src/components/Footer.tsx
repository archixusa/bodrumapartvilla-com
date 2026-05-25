import Image from "next/image";
import { useTranslations } from "next-intl";
import { Mail, Phone, Instagram, Facebook, MapPin } from "lucide-react";
import { Link } from "@/i18n/routing";
import { districts } from "@/data/districts";
import { MonoLabel } from "@/components/ui/MonoLabel";

export function Footer() {
  const t = useTranslations("footer");
  const c = useTranslations("common");
  const nav = useTranslations("nav");
  const dt = useTranslations("districts");
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
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
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
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
              {t("tagline")}
            </p>
            <div className="mt-6 space-y-2.5 text-sm">
              <a
                href={`tel:${c("phone").replace(/\s/g, "")}`}
                className="group inline-flex items-center gap-2 text-ink/85 hover:text-ink"
              >
                <Phone className="h-4 w-4 text-accent-500" />
                <span className="font-mono text-[13px]">
                  {c("phoneDisplay")}
                </span>
              </a>
              <a
                href={`mailto:${c("email")}`}
                className="flex items-center gap-2 text-ink/85 hover:text-ink"
              >
                <Mail className="h-4 w-4 text-accent-500" />
                <span className="font-mono text-[13px]">{c("email")}</span>
              </a>
              <p className="flex items-center gap-2 text-muted">
                <MapPin className="h-4 w-4 text-accent-500" />
                Bodrum, Muğla / Türkiye
              </p>
            </div>
            <div className="mt-6 flex gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full glass px-3 py-3 transition hover:border-accent-500"
              >
                <Instagram className="h-4 w-4 text-ink" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full glass px-3 py-3 transition hover:border-accent-500"
              >
                <Facebook className="h-4 w-4 text-ink" />
              </a>
            </div>
          </div>

          <FooterColumn title={t("explore")} className="lg:col-span-2">
            <FooterLink href="/villalar">{nav("villas")}</FooterLink>
            <FooterLink href="/apartlar">{nav("apartments")}</FooterLink>
            {districts.slice(0, 4).map((d) => (
              <FooterLink key={d.slug} href={`/bodrum/${d.urlSlug}`}>
                {dt(d.slug)}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title={t("services")} className="lg:col-span-2">
            <FooterLink href="/tekne-kiralama">{nav("boat")}</FooterLink>
            <FooterLink href="/arac-kiralama">{nav("car")}</FooterLink>
            <FooterLink href="/vip-transfer">{nav("transfer")}</FooterLink>
            <FooterLink href="/turlar">{nav("tours")}</FooterLink>
          </FooterColumn>

          <FooterColumn title={t("company")} className="lg:col-span-3">
            <FooterLink href="/hakkimizda">{nav("about")}</FooterLink>
            <FooterLink href="/iletisim">{nav("contact")}</FooterLink>
            <FooterLink href="/blog">{nav("blog")}</FooterLink>
            <FooterLink href="/sss">FAQ</FooterLink>
            <FooterLink href="/kvkk">{t("kvkk")}</FooterLink>
            <FooterLink href="/kullanim-sartlari">{t("terms")}</FooterLink>
            <FooterLink href="/iptal-iade-politikasi">{t("cancel")}</FooterLink>
          </FooterColumn>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[var(--color-border)] pt-6 md:flex-row md:items-center">
          <MonoLabel className="text-muted">
            © {year} bodrumapartvilla.com
          </MonoLabel>
          <MonoLabel className="text-muted" withLine={false}>
            Made with ♥ in Bodrum
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
