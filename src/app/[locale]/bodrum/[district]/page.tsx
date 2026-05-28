import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { PropertyCard } from "@/components/PropertyCard";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { districts, getDistrict } from "@/data/districts";
import { getPropertiesByDistrict } from "@/data/properties";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://bodrumapartvilla.com";

export function generateStaticParams() {
  return districts.map((d) => ({ district: d.urlSlug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; district: string }>;
}): Promise<Metadata> {
  const { locale, district: districtParam } = await params;
  const d = getDistrict(districtParam);
  if (!d) return {};
  const t = await getTranslations({ locale, namespace: "district" });
  const dt = await getTranslations({ locale, namespace: "districts" });
  const districtName = dt(d.slug);
  const url =
    locale === "tr"
      ? `${SITE_URL}/bodrum/${d.urlSlug}`
      : `${SITE_URL}/${locale}/bodrum/${d.urlSlug}`;
  return {
    title: t("metaTitle", { district: districtName }),
    description: t("metaDesc", { district: districtName }),
    alternates: { canonical: url },
    openGraph: {
      title: t("metaTitle", { district: districtName }),
      description: t("metaDesc", { district: districtName }),
      url,
      type: "website",
      images: [{ url: d.heroImage, width: 1600, height: 900, alt: districtName }],
    },
  };
}

export default async function DistrictPage({
  params,
}: {
  params: Promise<{ locale: string; district: string }>;
}) {
  const { locale, district: districtParam } = await params;
  setRequestLocale(locale);
  const d = getDistrict(districtParam);
  if (!d) notFound();

  const t = await getTranslations({ locale, namespace: "district" });
  const dt = await getTranslations({ locale, namespace: "districts" });
  const fl = await getTranslations({ locale, namespace: "propertyList" });
  const isTr = locale === "tr";
  const districtName = dt(d.slug);
  const longDesc = isTr ? d.longDescTr : d.longDescEn;
  const highlights = isTr ? d.highlights.tr : d.highlights.en;
  const props = getPropertiesByDistrict(d.slug);
  const villas = props.filter((p) => p.type === "villa");
  const aparts = props.filter((p) => p.type === "apart");
  const nearby = d.nearby
    .map((slug) => districts.find((x) => x.slug === slug))
    .filter(Boolean);

  const seoSections = d.seo ? (isTr ? d.seo.sections.tr : d.seo.sections.en) : null;
  const seoFaq = d.seo ? (isTr ? d.seo.faq.tr : d.seo.faq.en) : null;
  const seoH1 = d.seo ? (isTr ? d.seo.h1.tr : d.seo.h1.en) : null;

  const districtFaq = [
    {
      q: isTr
        ? `${districtName}'da villa kiralamak için en iyi tarihler hangileridir?`
        : `When are the best dates to rent a villa in ${districtName}?`,
      a: isTr
        ? `Mayıs sonu — haziran başı ve eylül ${districtName}'da hava + fiyat oranı en iyi olduğu dönemdir. Temmuz-ağustos en kalabalık ve en pahalı; lüks villalar bu aylarda nisanda dolar.`
        : `Late May to early June, and September, give the best weather-to-price ratio in ${districtName}. July-August is the peak; luxury villas often fill in April.`,
    },
    {
      q: isTr
        ? `${districtName}'a ulaşım nasıl?`
        : `How do I get to ${districtName}?`,
      a: isTr
        ? `Milas-Bodrum Havalimanı'ndan ${districtName}'a VIP transfer hizmetimiz vardır. Ortalama transfer süresi 30-50 dakikadır; rezervasyon sırasında talep edebilirsiniz.`
        : `We provide VIP transfer from Milas-Bodrum Airport to ${districtName}. Average transfer time is 30-50 minutes; request it during booking.`,
    },
    {
      q: isTr
        ? `${districtName}'da villa fiyatları ne kadar?`
        : `What are villa rental prices in ${districtName}?`,
      a: isTr
        ? `Yüksek sezonda özel havuzlu villalar gecelik 8.000 TL'den başlar; en üst donanımlı villalarda 22.000 TL'ye çıkabilir. Apartlar 2.400-6.500 TL aralığında değişir. Düşük sezonda fiyatlar yaklaşık %50 düşer.`
        : `In high season, private-pool villas start from 8,000 TL per night and reach 22,000 TL in the luxury segment. Apartments range 2,400-6,500 TL. Low-season prices drop around 50%.`,
    },
    {
      q: isTr
        ? `${districtName}'da hangi plajlar / koylar var?`
        : `Which beaches and coves are in ${districtName}?`,
      a: isTr
        ? `${districtName} bölgesinin öne çıkan plaj ve koyları için sayfadaki "${districtName} Hakkında" bölümüne göz atabilirsiniz.`
        : `For ${districtName}'s notable beaches and coves, see the "About ${districtName}" section above.`,
    },
    {
      q: isTr
        ? `${districtName}'da rezervasyon nasıl yapılır?`
        : `How do I book in ${districtName}?`,
      a: isTr
        ? `Beğendiğiniz villa veya apartı seçin ve rezervasyon formunu doldurun. Bir saat içinde WhatsApp veya telefondan dönüş yapıyoruz.`
        : `Pick a villa or apartment you like and fill in the booking form. We respond within an hour via WhatsApp or phone.`,
    },
  ];

  const combinedFaq = [...districtFaq, ...(seoFaq ?? [])];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "TouristDestination",
      name: `${districtName}, Bodrum`,
      description: longDesc,
      image: d.heroImage,
      url: `${SITE_URL}/bodrum/${d.urlSlug}`,
      geo: {
        "@type": "GeoCoordinates",
        latitude: d.lat,
        longitude: d.lng,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      name: `${districtName}, Bodrum`,
      description: longDesc,
      url: `${SITE_URL}/bodrum/${d.urlSlug}`,
      geo: {
        "@type": "GeoCoordinates",
        latitude: d.lat,
        longitude: d.lng,
      },
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Bodrum, Muğla, Türkiye",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: isTr ? "Ana Sayfa" : "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: fl("title"), item: `${SITE_URL}/kiralik` },
        { "@type": "ListItem", position: 3, name: districtName, item: `${SITE_URL}/bodrum/${d.urlSlug}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: combinedFaq.map((it) => ({
        "@type": "Question",
        name: it.q,
        acceptedAnswer: { "@type": "Answer", text: it.a },
      })),
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="relative overflow-hidden bg-navy-900 text-white">
        <Image
          src={d.heroImage}
          alt={districtName}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/55 to-navy-900/85" />
        <div className="container-page relative py-14 md:py-20">
          <nav aria-label="breadcrumb" className="mb-3 text-xs text-white/80">
            <Link href="/" className="hover:underline">{isTr ? "Ana Sayfa" : "Home"}</Link>
            <span className="px-2">/</span>
            <Link href="/kiralik" className="hover:underline">{fl("title")}</Link>
          </nav>
          <h1 className="text-white">
            {seoH1 ?? t("h1", { district: districtName })}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-white/85 md:text-lg">
            {isTr ? d.shortDescTr : d.shortDescEn}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <h2>{t("aboutTitle", { district: districtName })}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink/90">{longDesc}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 rounded-md border border-[var(--color-border)] bg-white p-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="overflow-hidden rounded-xl border border-[var(--color-border)]">
            <iframe
              title={`${districtName} map`}
              src={`https://www.google.com/maps?q=${d.lat},${d.lng}&z=13&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[380px] w-full"
            />
          </aside>
        </div>
      </section>

      {seoSections && (
        <section className="section">
          <div className="container-page mx-auto max-w-4xl space-y-10">
            {seoSections.map((s, i) => (
              <article key={i}>
                <h2 className="font-display text-2xl font-semibold leading-tight text-ink md:text-3xl">
                  {s.heading}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-ink/85">
                  {s.body}
                </p>
              </article>
            ))}
            {d.seo?.priceRange && (
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-600">
                {isTr ? "Fiyat aralığı" : "Price range"} · {d.seo.priceRange}
              </p>
            )}
          </div>
        </section>
      )}

      <section className="section section-soft">
        <div className="container-page">
          <div className="flex items-end justify-between">
            <h2>{t("propertiesTitle", { district: districtName })}</h2>
            <Link href="/kiralik" className="text-sm font-semibold text-navy-600 hover:underline">
              {fl("title")} <ArrowRight className="ml-1 inline h-4 w-4" />
            </Link>
          </div>
          {props.length === 0 ? (
            <p className="mt-6 rounded-xl border border-dashed border-[var(--color-border)] bg-white p-8 text-center text-muted">
              {t("noProperties")}
            </p>
          ) : (
            <div className="mt-8 space-y-10">
              {villas.length > 0 && (
                <div>
                  <h3 className="mb-4 text-lg">{isTr ? "Villalar" : "Villas"}</h3>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {villas.map((p) => (
                      <PropertyCard key={p.id} property={p} />
                    ))}
                  </div>
                </div>
              )}
              {aparts.length > 0 && (
                <div>
                  <h3 className="mb-4 text-lg">{isTr ? "Apartlar" : "Apartments"}</h3>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {aparts.map((p) => (
                      <PropertyCard key={p.id} property={p} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container-page max-w-4xl">
          <h2>{isTr ? `${districtName} Hakkında Sıkça Sorulanlar` : `${districtName} FAQ`}</h2>
          <div className="mt-6">
            <FAQ items={combinedFaq} />
          </div>
        </div>
      </section>

      <section className="section section-blue">
        <div className="container-page">
          <h2>{t("nearbyTitle")}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {nearby.map((n) => (
              <Link
                key={n!.slug}
                href={`/bodrum/${n!.urlSlug}`}
                className="card flex items-center gap-3 p-4"
              >
                <MapPin className="h-5 w-5 text-navy-600" />
                <span className="font-semibold text-navy-900">{dt(n!.slug)}</span>
                <ArrowRight className="ml-auto h-4 w-4 text-navy-600" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
