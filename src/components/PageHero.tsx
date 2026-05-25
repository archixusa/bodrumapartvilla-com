import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ChevronRight } from "lucide-react";

interface Crumb {
  href?: string;
  label: string;
}

interface Props {
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  badge?: string;
  crumbs?: Crumb[];
}

export function PageHero({
  title,
  subtitle,
  image,
  imageAlt,
  badge,
  crumbs,
}: Props) {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-28">
      {/* Mesh background base */}
      <div className="absolute inset-0 hero-mesh -z-10" />

      {/* Image (if provided) tinted on top of mesh */}
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt ?? title}
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover opacity-25 mix-blend-multiply"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              background:
                "linear-gradient(180deg, rgba(250,252,254,0.4) 0%, rgba(250,252,254,0.8) 80%, var(--color-bg) 100%)",
            }}
          />
        </>
      )}

      {/* Subtle grid */}
      <div className="absolute inset-0 -z-10 grid-overlay opacity-40 mask-fade-b" />

      <div className="container-page relative py-14 md:py-20">
        {crumbs && crumbs.length > 0 && (
          <nav
            aria-label="breadcrumb"
            className="mb-5 inline-flex items-center gap-1 rounded-full glass px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/85"
          >
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1">
                {c.href ? (
                  <Link
                    href={c.href}
                    className="transition hover:text-accent-600"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-ink">{c.label}</span>
                )}
                {i < crumbs.length - 1 && (
                  <ChevronRight className="h-3 w-3 text-accent-500/80" />
                )}
              </span>
            ))}
          </nav>
        )}
        {badge && (
          <span className="chip-accent mb-4 inline-flex">{badge}</span>
        )}
        <h1
          className={`max-w-4xl text-balance text-display text-ink ${badge || crumbs ? "" : "mt-2"}`}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base text-muted md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
