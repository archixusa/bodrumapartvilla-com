import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Users, BedDouble, Bath, MapPin, Star, Waves, ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import type { Property } from "@/data/properties";
import { districts } from "@/data/districts";
import { formatTRY } from "@/lib/format";

export function PropertyCard({
  property,
  variant = "default",
}: {
  property: Property;
  variant?: "default" | "wide";
}) {
  const t = useTranslations("common");
  const dt = useTranslations("districts");
  const locale = useLocale();
  const isTr = locale === "tr";
  const title = isTr ? property.titleTr : property.titleEn;
  const districtName = dt(property.district);
  const districtUrl =
    districts.find((d) => d.slug === property.district)?.urlSlug ??
    property.district;
  const isVilla = property.type === "villa";
  const typeBadge = isVilla ? t("typeVilla") : t("typeApart");

  if (variant === "wide") {
    return (
      <article className="card group relative grid grid-cols-1 overflow-hidden md:grid-cols-[1.4fr_1fr]">
        <Link
          href={`/kiralik/${property.slug}`}
          className="relative block aspect-[4/3] overflow-hidden md:aspect-auto"
        >
          <Image
            src={property.images[0]}
            alt={title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-[1200ms] group-hover:scale-110"
          />
          <span
            className={
              isVilla
                ? "chip-villa absolute left-4 top-4"
                : "chip absolute left-4 top-4"
            }
          >
            {typeBadge}
          </span>
        </Link>
        <div className="flex flex-col justify-between gap-4 p-6 md:p-8">
          <div>
            <span className="mono-label text-accent-600">
              {districtName} · {property.bedrooms} BR · {property.area_m2}m²
            </span>
            <h3 className="mt-3 text-display text-xl font-bold leading-tight text-ink md:text-2xl">
              <Link
                href={`/kiralik/${property.slug}`}
                className="hover:text-accent-600"
              >
                {title}
              </Link>
            </h3>
            <ul className="mt-4 flex flex-wrap gap-3 text-xs text-muted">
              <li className="inline-flex items-center gap-1">
                <Users className="h-3.5 w-3.5" /> {property.capacity}
              </li>
              <li className="inline-flex items-center gap-1">
                <BedDouble className="h-3.5 w-3.5" /> {property.bedrooms}
              </li>
              <li className="inline-flex items-center gap-1">
                <Bath className="h-3.5 w-3.5" /> {property.bathrooms}
              </li>
              {property.hasPrivatePool && (
                <li className="inline-flex items-center gap-1 text-accent-600">
                  <Waves className="h-3.5 w-3.5" />{" "}
                  {isTr ? "Özel havuz" : "Private pool"}
                </li>
              )}
            </ul>
          </div>
          <div className="flex items-end justify-between gap-4 border-t border-[var(--color-border)] pt-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                {t("from")}
              </p>
              <p className="text-display text-2xl font-bold text-ink">
                {formatTRY(property.lowSeasonPrice)}
                <span className="ml-1 text-xs font-normal text-muted">
                  {t("perNight")}
                </span>
              </p>
            </div>
            <Link
              href={`/kiralik/${property.slug}`}
              className="btn-primary !px-4 !py-2.5 !text-xs"
            >
              {t("details")}
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative flex flex-col">
      <Link
        href={`/kiralik/${property.slug}`}
        className="relative block aspect-[3/4] overflow-hidden rounded-2xl"
      >
        <Image
          src={property.images[0]}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-[1200ms] group-hover:scale-110"
        />

        {/* Bottom gradient + content overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />

        {/* Type badge top-left */}
        <span
          className={
            isVilla
              ? "chip-villa absolute left-4 top-4"
              : "chip absolute left-4 top-4"
          }
        >
          {typeBadge}
        </span>

        {/* Rating top-right */}
        <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/85 px-2.5 py-1 font-mono text-[11px] font-bold tracking-wider text-success backdrop-blur-md">
          <Star className="h-3 w-3 fill-current" />
          {property.rating.toFixed(1)}
        </div>

        {/* Editorial overlay text */}
        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent-400">
            {districtName} · {property.bedrooms}BR · {property.area_m2}m²
          </p>
          <h3 className="mt-2 line-clamp-2 text-display text-lg font-bold leading-tight text-white">
            {title}
          </h3>
        </div>

        {/* Hover overlay */}
        <div
          aria-hidden
          className="absolute inset-0 rounded-2xl ring-1 ring-accent-400/0 transition-all duration-500 group-hover:ring-accent-400/60"
        />
      </Link>

      {/* Below-image meta */}
      <div className="mt-4 flex items-end justify-between gap-3 px-1">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            {t("from")}
          </p>
          <p className="text-display text-xl font-bold text-ink">
            {formatTRY(property.lowSeasonPrice)}
            <span className="ml-1 font-mono text-xs font-normal text-muted">
              {t("perNight")}
            </span>
          </p>
        </div>
        <Link
          href={`/kiralik/${property.slug}`}
          aria-label={t("details")}
          className="inline-flex items-center gap-1 rounded-full border border-[var(--color-border-strong)] bg-white/60 px-3.5 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-ink backdrop-blur transition hover:border-accent-500 hover:bg-white hover:text-accent-600"
        >
          {t("details")}
          <ArrowUpRight className="h-3 w-3" />
        </Link>
      </div>

      {/* District link beneath (small, optional) */}
      <Link
        href={`/bodrum/${districtUrl}`}
        className="mt-2 inline-flex items-center gap-1 px-1 text-[11px] text-muted transition hover:text-accent-600"
      >
        <MapPin className="h-3 w-3" /> {districtName}
      </Link>
    </article>
  );
}
