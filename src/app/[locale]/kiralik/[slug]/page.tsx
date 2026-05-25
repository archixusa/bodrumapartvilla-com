import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  Users,
  BedDouble,
  Bath,
  Maximize2,
  MapPin,
  Star,
  Check,
  Waves,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import { Gallery } from "@/components/Gallery";
import { BookingForm } from "@/components/BookingForm";
import { PropertyCard } from "@/components/PropertyCard";
import { JsonLd } from "@/components/JsonLd";
import { FAQ } from "@/components/FAQ";
import {
  properties,
  getProperty,
  featureLabel,
} from "@/data/properties";
import { getDistrict } from "@/data/districts";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://bodrumapartvilla.com";

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const property = getProperty(slug);
  if (!property) return {};
  const isTr = locale === "tr";
  const title = isTr ? property.titleTr : property.titleEn;
  const desc = (isTr ? property.descriptionTr : property.descriptionEn).slice(
    0,
    158
  );
  const url =
    locale === "tr"
      ? `${SITE_URL}/kiralik/${property.slug}`
      : `${SITE_URL}/${locale}/kiralik/${property.slug}`;
  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: desc,
      url,
      type: "website",
      images: [{ url: property.images[0], width: 1600, height: 1200, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: [property.images[0]],
    },
  };
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const property = getProperty(slug);
  if (!property) notFound();

  const t = await getTranslations({ locale, namespace: "propertyDetail" });
  const c = await getTranslations({ locale, namespace: "common" });
  const dt = await getTranslations({ locale, namespace: "districts" });
  const fl = await getTranslations({ locale, namespace: "propertyList" });

  const isTr = locale === "tr";
  const title = isTr ? property.titleTr : property.titleEn;
  const description = isTr ? property.descriptionTr : property.descriptionEn;
  const district = getDistrict(property.district)!;
  const districtName = dt(property.district);
  const districtUrl = `/bodrum/${district.urlSlug}`;
  const isVilla = property.type === "villa";
  const typeLabel = isVilla ? c("typeVilla") : c("typeApart");

  const similar = properties
    .filter((p) => p.id !== property.id)
    .sort((a, b) => {
      const sameType = Number(a.type !== property.type) - Number(b.type !== property.type);
      if (sameType !== 0) return sameType;
      return Number(a.district !== property.district) - Number(b.district !== property.district);
    })
    .slice(0, 3);

  const minStayLabel = isTr
    ? isVilla
      ? "5 gece (yüksek sezon)"
      : "3 gece (yüksek sezon)"
    : isVilla
      ? "5 nights (high season)"
      : "3 nights (high season)";

  const detailFaq = [
    {
      q: isTr ? "Bu konuta ne zaman giriş yapabilirim?" : "When can I check in?",
      a: isTr
        ? "Standart giriş saati 14:00, çıkış 11:00'dir. Müsaitlik durumuna göre erken giriş veya geç çıkış mümkündür; lütfen rezervasyon notuna ekleyin."
        : "Standard check-in is 2 PM and check-out 11 AM. Early check-in or late check-out may be possible based on availability — note it in your booking.",
    },
    {
      q: isTr ? "Depozito alınıyor mu?" : "Is a deposit required?",
      a: isTr
        ? "Yaz aylarında konaklama bedelinin %30'u depozito olarak alınır ve kalan tutar girişte tahsil edilir. Düşük sezonda depozito uygulamayabiliyoruz."
        : "In high season, 30% is collected as a deposit and the rest is paid on arrival. Low season may not require a deposit.",
    },
    {
      q: isTr ? `Minimum kalış süresi?` : "Minimum stay?",
      a: isTr
        ? `Bu ${typeLabel.toLowerCase()} için minimum ${isVilla ? "5" : "3"} gece konaklama uygulanır (Haziran-Eylül). Düşük sezonda 2 gece kabul edilir.`
        : `This ${typeLabel.toLowerCase()} requires a minimum stay of ${isVilla ? "5" : "3"} nights (June-September). 2 nights accepted in low season.`,
    },
    {
      q: isTr ? "Havalimanından nasıl ulaşabilirim?" : "How do I get from the airport?",
      a: isTr
        ? `Milas-Bodrum Havalimanı'ndan ${districtName}'a VIP transfer hizmetimiz var. Transfer ücreti kişi sayısı ve araç tipine göre değişir; talep ederseniz size özel teklif gönderiyoruz.`
        : `We provide VIP transfer from Milas-Bodrum Airport to ${districtName}. Pricing depends on group size and vehicle — request a custom quote any time.`,
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LodgingBusiness",
      name: title,
      description,
      url: `${SITE_URL}/kiralik/${property.slug}`,
      image: property.images,
      address: {
        "@type": "PostalAddress",
        addressLocality: districtName,
        addressRegion: "Muğla",
        addressCountry: "TR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: district.lat,
        longitude: district.lng,
      },
      priceRange: `₺${property.lowSeasonPrice}-${property.highSeasonPrice}`,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: property.rating,
        reviewCount: property.reviewCount,
      },
      amenityFeature: property.features.map((f) => ({
        "@type": "LocationFeatureSpecification",
        name: featureLabel[f][isTr ? "tr" : "en"],
        value: true,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: isTr ? "Ana Sayfa" : "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: fl("title"), item: `${SITE_URL}/kiralik` },
        { "@type": "ListItem", position: 3, name: districtName, item: `${SITE_URL}/bodrum/${district.urlSlug}` },
        { "@type": "ListItem", position: 4, name: title, item: `${SITE_URL}/kiralik/${property.slug}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: detailFaq.map((it) => ({
        "@type": "Question",
        name: it.q,
        acceptedAnswer: { "@type": "Answer", text: it.a },
      })),
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="border-b border-[var(--color-border)] bg-white">
        <div className="container-page py-6">
          <nav aria-label="breadcrumb" className="mb-4 text-xs text-muted">
            <Link href="/" className="hover:underline">{isTr ? "Ana Sayfa" : "Home"}</Link>
            <span className="px-2">/</span>
            <Link href="/kiralik" className="hover:underline">{fl("title")}</Link>
            <span className="px-2">/</span>
            <Link href={districtUrl} className="hover:underline">{districtName}</Link>
          </nav>
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className={isVilla ? "chip-villa" : "chip"}>{typeLabel}</span>
                {property.hasPrivatePool && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-900">
                    <Waves className="h-3 w-3" /> {t("privatePool")}
                  </span>
                )}
              </div>
              <h1 className="mt-3 text-balance">{title}</h1>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted">
                <Link href={districtUrl} className="inline-flex items-center gap-1 text-navy-600 hover:underline">
                  <MapPin className="h-4 w-4" /> {districtName}
                </Link>
                <span className="inline-flex items-center gap-1 text-success">
                  <Star className="h-4 w-4 fill-current" /> {property.rating.toFixed(1)} ({property.reviewCount})
                </span>
                <span className="text-xs">{isTr ? "Min. kalış: " : "Min. stay: "}{minStayLabel}</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {property.tags?.map((tag) => (
                <span key={tag} className="chip-accent">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-6">
        <Gallery images={property.images} alt={title} />
      </section>

      <section className="container-page pb-12 lg:pb-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          <div className="min-w-0">
            <div className="grid grid-cols-2 gap-3 rounded-xl border border-[var(--color-border)] bg-white p-4 sm:grid-cols-4">
              <InfoCell icon={<Users className="h-5 w-5" />} label={t("guests", { count: property.capacity })} />
              <InfoCell icon={<BedDouble className="h-5 w-5" />} label={t("bedrooms", { count: property.bedrooms })} />
              <InfoCell icon={<Bath className="h-5 w-5" />} label={t("bathrooms", { count: property.bathrooms })} />
              <InfoCell icon={<Maximize2 className="h-5 w-5" />} label={t("area", { m2: property.area_m2 })} />
            </div>

            {isVilla && property.hasPrivatePool && (
              <div className="mt-5 flex items-start gap-3 rounded-xl border border-accent-400/40 bg-accent-400/10 p-4">
                <Waves className="h-6 w-6 shrink-0 text-accent-500" />
                <div>
                  <p className="text-sm font-bold text-navy-900">{t("privatePool")}</p>
                  <p className="mt-1 text-xs text-navy-900/80">
                    {isTr
                      ? "Bu villa müstakil yapıdadır, kendi özel havuzu ve bahçesi vardır. Komşuyla paylaşılan ortak alan yoktur."
                      : "This villa is detached with its own private pool and garden. No shared common areas with neighbours."}
                  </p>
                </div>
              </div>
            )}

            <h2 className="mt-10 text-2xl">{t("descriptionTitle")}</h2>
            <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-ink/90">
              {description.split(/\n+/).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <h2 className="mt-10 text-2xl">{t("featuresTitle")}</h2>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {property.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 shrink-0 text-success" />
                  <span>{featureLabel[f][isTr ? "tr" : "en"]}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-2xl">{t("locationTitle")}</h2>
            <div className="mt-4 overflow-hidden rounded-xl border border-[var(--color-border)]">
              <iframe
                title={`${districtName} map`}
                src={`https://www.google.com/maps?q=${district.lat},${district.lng}&z=13&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[360px] w-full"
              />
            </div>

            <h2 className="mt-10 text-2xl">{t("priceTitle")}</h2>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <PriceRow label={t("highSeason")} value={property.highSeasonPrice} isTr={isTr} />
              <PriceRow label={t("lowSeason")} value={property.lowSeasonPrice} isTr={isTr} />
            </div>

            <h2 className="mt-10 text-2xl">{isTr ? "Sıkça Sorulanlar" : "FAQ"}</h2>
            <div className="mt-4">
              <FAQ items={detailFaq} />
            </div>
          </div>

          <aside className="lg:sticky lg:top-20 lg:self-start">
            <BookingForm
              propertySlug={property.slug}
              propertyTitle={title}
              propertyType={property.type}
              capacity={property.capacity}
              highSeasonPrice={property.highSeasonPrice}
              lowSeasonPrice={property.lowSeasonPrice}
              whatsappNumber={c("whatsappNumber")}
            />
          </aside>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container-page">
          <h2 className="text-center">{t("similarTitle")}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {similar.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCell({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-navy-600">{icon}</span>
      <span className="font-semibold text-navy-900">{label}</span>
    </div>
  );
}

function PriceRow({ label, value, isTr }: { label: string; value: number; isTr: boolean }) {
  const v = new Intl.NumberFormat(isTr ? "tr-TR" : "en-US", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0,
  }).format(value);
  return (
    <div className="flex items-center justify-between rounded-md border border-[var(--color-border)] bg-white px-4 py-3 text-sm">
      <span className="text-muted">{label}</span>
      <span className="font-bold text-navy-900">
        {v} <span className="text-xs font-normal text-muted">{isTr ? "/ gece" : "/ night"}</span>
      </span>
    </div>
  );
}
