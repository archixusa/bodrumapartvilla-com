import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Users, BedDouble, Bath, MapPin, Star, Waves } from "lucide-react";
import { Link } from "@/i18n/routing";
import type { Property } from "@/data/properties";
import { districts } from "@/data/districts";
import { formatTRY } from "@/lib/format";

export function PropertyCard({ property }: { property: Property }) {
  const t = useTranslations("common");
  const dt = useTranslations("districts");
  const locale = useLocale();
  const isTr = locale === "tr";
  const title = isTr ? property.titleTr : property.titleEn;
  const districtName = dt(property.district);
  const districtUrl =
    districts.find((d) => d.slug === property.district)?.urlSlug ?? property.district;
  const isVilla = property.type === "villa";
  const typeBadge = isVilla ? t("typeVilla") : t("typeApart");

  return (
    <article className="card group flex flex-col">
      <Link
        href={`/kiralik/${property.slug}`}
        className="relative block aspect-[4/3] overflow-hidden"
      >
        <Image
          src={property.images[0]}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span
          className={
            isVilla
              ? "chip-villa absolute left-3 top-3"
              : "chip absolute left-3 top-3"
          }
        >
          {typeBadge}
        </span>
        {property.tags && property.tags.length > 0 && (
          <div className="absolute right-3 bottom-3 flex flex-wrap gap-1">
            {property.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="rounded-full bg-navy-900/85 px-2 py-1 text-[10px] font-medium text-white">
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-2 py-1 text-xs font-semibold text-success shadow">
          <Star className="h-3 w-3 fill-current" />
          {property.rating.toFixed(1)}
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <Link
            href={`/bodrum/${districtUrl}`}
            className="inline-flex items-center gap-1 text-xs font-medium text-navy-600 hover:underline"
          >
            <MapPin className="h-3 w-3" /> {districtName}
          </Link>
          <h3 className="mt-1 line-clamp-2 text-base font-semibold leading-snug text-navy-900">
            <Link href={`/kiralik/${property.slug}`} className="hover:text-navy-600">
              {title}
            </Link>
          </h3>
        </div>
        <ul className="flex flex-wrap gap-3 text-xs text-muted">
          <li className="inline-flex items-center gap-1">
            <Users className="h-3.5 w-3.5" /> {property.capacity}
          </li>
          <li className="inline-flex items-center gap-1">
            <BedDouble className="h-3.5 w-3.5" /> {property.bedrooms}
          </li>
          <li className="inline-flex items-center gap-1">
            <Bath className="h-3.5 w-3.5" /> {property.bathrooms}
          </li>
          <li>{property.area_m2} m²</li>
          {property.hasPrivatePool && (
            <li className="inline-flex items-center gap-1 text-navy-700">
              <Waves className="h-3.5 w-3.5" /> {isTr ? "Özel havuz" : "Private pool"}
            </li>
          )}
        </ul>
        <div className="mt-auto flex items-center justify-between border-t border-[var(--color-border)] pt-3">
          <div>
            <p className="text-[11px] uppercase tracking-wide text-muted">
              {t("from")}
            </p>
            <p className="text-base font-bold text-navy-900">
              {formatTRY(property.lowSeasonPrice)}{" "}
              <span className="text-xs font-normal text-muted">{t("perNight")}</span>
            </p>
          </div>
          <Link href={`/kiralik/${property.slug}`} className="btn-primary !px-3 !py-2 !text-xs">
            {t("details")}
          </Link>
        </div>
      </div>
    </article>
  );
}
