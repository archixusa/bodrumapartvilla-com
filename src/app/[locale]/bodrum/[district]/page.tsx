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
import { loc, locArr } from "@/lib/i18n-data";

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
  const isDe = locale === "de";
  const isRu = locale === "ru";
  const districtName = dt(d.slug);
  const longDesc = loc(locale, {
    tr: d.longDescTr,
    en: d.longDescEn,
    de: d.longDescDe,
    ru: d.longDescRu,
  });
  const highlights = locArr(locale, d.highlights);
  const props = getPropertiesByDistrict(d.slug);
  const villas = props.filter((p) => p.type === "villa");
  const aparts = props.filter((p) => p.type === "apart");
  const nearby = d.nearby
    .map((slug) => districts.find((x) => x.slug === slug))
    .filter(Boolean);

  const seoSections = d.seo
    ? (isTr
        ? d.seo.sections.tr
        : isDe
          ? (d.seo.sections.de ?? d.seo.sections.en)
          : isRu
            ? (d.seo.sections.ru ?? d.seo.sections.en)
            : d.seo.sections.en)
    : null;
  const seoFaq = d.seo
    ? (isTr
        ? d.seo.faq.tr
        : isDe
          ? (d.seo.faq.de ?? d.seo.faq.en)
          : isRu
            ? (d.seo.faq.ru ?? d.seo.faq.en)
            : d.seo.faq.en)
    : null;
  const seoH1 = d.seo
    ? loc(locale, {
        tr: d.seo.h1.tr,
        en: d.seo.h1.en,
        de: d.seo.h1.de,
        ru: d.seo.h1.ru,
      })
    : null;

  const districtFaq = [
    {
      q: loc(locale, {
        tr: `${districtName}'da villa kiralamak için en iyi tarihler hangileridir?`,
        en: `When are the best dates to rent a villa in ${districtName}?`,
        de: `Wann sind die besten Termine, um eine Villa in ${districtName} zu mieten?`,
        ru: `Когда лучшее время для аренды виллы в районе ${districtName}?`,
      }),
      a: loc(locale, {
        tr: `Mayıs sonu — haziran başı ve eylül ${districtName}'da hava + fiyat oranı en iyi olduğu dönemdir. Temmuz-ağustos en kalabalık ve en pahalı; lüks villalar bu aylarda nisanda dolar.`,
        en: `Late May to early June, and September, give the best weather-to-price ratio in ${districtName}. July-August is the peak; luxury villas often fill in April.`,
        de: `Ende Mai bis Anfang Juni und der September bieten in ${districtName} das beste Verhältnis von Wetter und Preis. Juli-August ist die Hauptsaison; gehobene Villen sind oft schon im April ausgebucht.`,
        ru: `Конец мая — начало июня и сентябрь дают лучшее соотношение погоды и цены в районе ${districtName}. Июль-август — пик сезона; изысканные виллы нередко заполняются уже в апреле.`,
      }),
    },
    {
      q: loc(locale, {
        tr: `${districtName}'a ulaşım nasıl?`,
        en: `How do I get to ${districtName}?`,
        de: `Wie komme ich nach ${districtName}?`,
        ru: `Как добраться до района ${districtName}?`,
      }),
      a: loc(locale, {
        tr: `Milas-Bodrum Havalimanı'ndan ${districtName}'a VIP transfer hizmetimiz vardır. Ortalama transfer süresi 30-50 dakikadır; rezervasyon sırasında talep edebilirsiniz.`,
        en: `We provide VIP transfer from Milas-Bodrum Airport to ${districtName}. Average transfer time is 30-50 minutes; request it during booking.`,
        de: `Wir bieten einen privaten Transfer vom Flughafen Milas-Bodrum nach ${districtName}. Die durchschnittliche Fahrzeit beträgt 30-50 Minuten; Sie können ihn bei der Buchung anfragen.`,
        ru: `Мы предоставляем индивидуальный трансфер из аэропорта Милас-Бодрум до района ${districtName}. Среднее время в пути 30-50 минут; вы можете запросить его при бронировании.`,
      }),
    },
    {
      q: loc(locale, {
        tr: `${districtName}'da villa fiyatları ne kadar?`,
        en: `What are villa rental prices in ${districtName}?`,
        de: `Wie hoch sind die Villenpreise in ${districtName}?`,
        ru: `Каковы цены на аренду вилл в районе ${districtName}?`,
      }),
      a: loc(locale, {
        tr: `Yüksek sezonda özel havuzlu villalar gecelik 8.000 TL'den başlar; en üst donanımlı villalarda 22.000 TL'ye çıkabilir. Apartlar 2.400-6.500 TL aralığında değişir. Düşük sezonda fiyatlar yaklaşık %50 düşer.`,
        en: `In high season, private-pool villas start from 8,000 TL per night and reach 22,000 TL in the luxury segment. Apartments range 2,400-6,500 TL. Low-season prices drop around 50%.`,
        de: `In der Hochsaison beginnen Villen mit privatem Pool bei 8.000 TL pro Nacht und erreichen im gehobenen Segment 22.000 TL. Apartments liegen zwischen 2.400 und 6.500 TL. In der Nebensaison sinken die Preise um etwa 50 %.`,
        ru: `В высокий сезон виллы с частным бассейном начинаются от 8 000 TL за ночь и доходят до 22 000 TL в изысканном сегменте. Апартаменты — в диапазоне 2 400-6 500 TL. В низкий сезон цены снижаются примерно на 50 %.`,
      }),
    },
    {
      q: loc(locale, {
        tr: `${districtName}'da hangi plajlar / koylar var?`,
        en: `Which beaches and coves are in ${districtName}?`,
        de: `Welche Strände und Buchten gibt es in ${districtName}?`,
        ru: `Какие пляжи и бухты есть в районе ${districtName}?`,
      }),
      a: loc(locale, {
        tr: `${districtName} bölgesinin öne çıkan plaj ve koyları için sayfadaki "${districtName} Hakkında" bölümüne göz atabilirsiniz.`,
        en: `For ${districtName}'s notable beaches and coves, see the "About ${districtName}" section above.`,
        de: `Die bekanntesten Strände und Buchten von ${districtName} finden Sie im Abschnitt „Über ${districtName}“ weiter oben.`,
        ru: `Наиболее заметные пляжи и бухты района ${districtName} смотрите в разделе «О районе ${districtName}» выше.`,
      }),
    },
    {
      q: loc(locale, {
        tr: `${districtName}'da rezervasyon nasıl yapılır?`,
        en: `How do I book in ${districtName}?`,
        de: `Wie buche ich in ${districtName}?`,
        ru: `Как забронировать в районе ${districtName}?`,
      }),
      a: loc(locale, {
        tr: `Beğendiğiniz villa veya apartı seçin ve rezervasyon formunu doldurun. Bir saat içinde WhatsApp veya telefondan dönüş yapıyoruz.`,
        en: `Pick a villa or apartment you like and fill in the booking form. We respond within an hour via WhatsApp or phone.`,
        de: `Wählen Sie eine Villa oder ein Apartment, das Ihnen gefällt, und füllen Sie das Buchungsformular aus. Wir antworten innerhalb einer Stunde per WhatsApp oder Telefon.`,
        ru: `Выберите понравившуюся виллу или апартаменты и заполните форму бронирования. Мы ответим в течение часа по WhatsApp или телефону.`,
      }),
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
        {
          "@type": "ListItem",
          position: 1,
          name: loc(locale, { tr: "Ana Sayfa", en: "Home", de: "Startseite", ru: "Главная" }),
          item: SITE_URL,
        },
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
            <Link href="/" className="hover:underline">
              {loc(locale, { tr: "Ana Sayfa", en: "Home", de: "Startseite", ru: "Главная" })}
            </Link>
            <span className="px-2">/</span>
            <Link href="/kiralik" className="hover:underline">{fl("title")}</Link>
          </nav>
          <h1 className="text-white">
            {seoH1 ?? t("h1", { district: districtName })}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-white/85 md:text-lg">
            {loc(locale, {
              tr: d.shortDescTr,
              en: d.shortDescEn,
              de: d.shortDescDe,
              ru: d.shortDescRu,
            })}
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
                {loc(locale, {
                  tr: "Fiyat aralığı",
                  en: "Price range",
                  de: "Preisspanne",
                  ru: "Диапазон цен",
                })}{" "}
                · {d.seo.priceRange}
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
                  <h3 className="mb-4 text-lg">
                    {loc(locale, { tr: "Villalar", en: "Villas", de: "Villen", ru: "Виллы" })}
                  </h3>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {villas.map((p) => (
                      <PropertyCard key={p.id} property={p} />
                    ))}
                  </div>
                </div>
              )}
              {aparts.length > 0 && (
                <div>
                  <h3 className="mb-4 text-lg">
                    {loc(locale, {
                      tr: "Apartlar",
                      en: "Apartments",
                      de: "Apartments",
                      ru: "Апартаменты",
                    })}
                  </h3>
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
          <h2>
            {loc(locale, {
              tr: `${districtName} Hakkında Sıkça Sorulanlar`,
              en: `${districtName} FAQ`,
              de: `Häufige Fragen zu ${districtName}`,
              ru: `Часто задаваемые вопросы о районе ${districtName}`,
            })}
          </h2>
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
