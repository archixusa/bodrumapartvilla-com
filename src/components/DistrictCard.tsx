import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import type { District } from "@/data/districts";
import { loc } from "@/lib/i18n-data";

export function DistrictCard({
  district,
  index,
}: {
  district: District;
  index?: number;
}) {
  const dt = useTranslations("districts");
  const locale = useLocale();

  return (
    <Link
      href={`/bodrum/${district.urlSlug}`}
      className="group relative block aspect-[4/5] overflow-hidden rounded-3xl"
    >
      <Image
        src={district.heroImage}
        alt={district.name}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
        className="object-cover transition duration-[1500ms] group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/30 to-transparent" />

      {/* Gold ring on hover */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-3xl ring-1 ring-accent-400/0 transition-all duration-500 group-hover:ring-accent-400/60"
      />

      {/* Index marker */}
      {typeof index === "number" && (
        <span className="absolute right-5 top-5 font-mono text-[11px] font-bold tracking-[0.22em] text-white/80">
          {String(index + 1).padStart(2, "0")} / {String(7).padStart(2, "0")}
        </span>
      )}

      {/* Bottom content */}
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-accent-400">
          Bodrum
        </p>
        <h3 className="mt-2 text-display text-2xl font-bold leading-tight text-white">
          {dt(district.slug)}
        </h3>
        <p className="mt-2 line-clamp-2 text-xs text-white/80">
          {loc(locale, {
            tr: district.shortDescTr,
            en: district.shortDescEn,
            de: district.shortDescDe,
            ru: district.shortDescRu,
          })}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent-400 transition group-hover:gap-3">
          {loc(locale, {
            tr: "Bölgeyi Gör",
            en: "View District",
            de: "Region ansehen",
            ru: "Смотреть район",
          })}
          <ArrowUpRight className="h-3 w-3" />
        </span>
      </div>
    </Link>
  );
}
