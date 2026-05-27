import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import {
  Shield,
  Clock,
  Headphones,
  RefreshCw,
  ArrowUpRight,
  Star,
  MoveDown,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import { SearchBar } from "@/components/SearchBar";
import { PropertyCard } from "@/components/PropertyCard";
import { DistrictCard } from "@/components/DistrictCard";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { MonoLabel, StatCounter } from "@/components/ui/MonoLabel";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { properties, getPropertiesByType } from "@/data/properties";
import { districts } from "@/data/districts";
import { services } from "@/data/services";
import { reviews } from "@/data/reviews";
import { posts } from "@/data/posts";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://bodrumapartvilla.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  const url = locale === "tr" ? SITE_URL : `${SITE_URL}/${locale}`;
  return {
    title: t("metaTitle"),
    description: t("metaDesc"),
    alternates: {
      canonical: url,
      languages: {
        tr: SITE_URL,
        en: `${SITE_URL}/en`,
        de: `${SITE_URL}/de`,
        ru: `${SITE_URL}/ru`,
      },
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDesc"),
      url,
      type: "website",
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "home" });
  const c = await getTranslations({ locale, namespace: "common" });
  const f = await getTranslations({ locale, namespace: "faq" });
  const isTr = locale === "tr";

  const featuredVillas = getPropertiesByType("villa")
    .filter((p) => p.featured)
    .slice(0, 4);
  const featuredAparts = getPropertiesByType("apart")
    .filter((p) => p.featured)
    .slice(0, 6);

  const faqItems = [1, 2, 3, 4, 5, 6].map((i) => ({
    q: f(`q${i}`),
    a: f(`a${i}`),
  }));

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "Bodrumapartvilla",
      url: SITE_URL,
      logo: `${SITE_URL}/logo_kare.svg`,
      image: `${SITE_URL}/og-default.png`,
      description: "butik villa kiralama",
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bodrum",
        addressRegion: "Muğla",
        addressCountry: "TR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 37.0344,
        longitude: 27.4305,
      },
      areaServed: districts.map((d) => d.name),
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: 4.85,
        reviewCount: properties.reduce((s, p) => s + p.reviewCount, 0),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      url: SITE_URL,
      name: "bodrumapartvilla.com",
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/kiralik?district={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  const heroVilla = featuredVillas[0];
  const restVillas = featuredVillas.slice(1, 4);

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* ============== HERO ============== */}
      <section className="relative min-h-[100svh] overflow-hidden pt-28">
        {/* Mesh + grid background */}
        <div aria-hidden className="absolute inset-0 -z-10 hero-mesh" />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 grid-overlay opacity-50 mask-fade-b"
        />

        {/* Hero image float in corner */}
        <div className="container-page relative">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div className="relative z-10 pt-8">
              <MonoLabel className="text-accent-600">
                Bodrum · Sezon 2026
              </MonoLabel>
              <h1 className="mt-6 text-display text-5xl font-bold leading-[0.95] text-ink md:text-6xl lg:text-7xl">
                {t("heroUpper")}
                <span className="block text-gradient-gold">{t("h1")}</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                {t("heroLower")}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/villalar" className="btn-primary">
                  {isTr ? "Villaları Keşfet" : "Discover Villas"}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href={`https://wa.me/${c("whatsappNumber")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  {t("secondaryCta")}
                </a>
              </div>

              {/* Stats row */}
              <div className="mt-12 grid max-w-lg grid-cols-3 gap-6">
                <StatCounter
                  value="50"
                  suffix="+"
                  label={isTr ? "Konut" : "Homes"}
                />
                <StatCounter
                  value="7"
                  label={isTr ? "Bölge" : "Districts"}
                />
                <StatCounter
                  value="4.9"
                  label={isTr ? "Ort. Puan" : "Avg. Rating"}
                />
              </div>
            </div>

            {/* Floating featured villa preview */}
            {heroVilla && (
              <div className="relative hidden h-full items-center lg:flex">
                <div className="relative w-full">
                  <Image
                    src={heroVilla.images[0]}
                    alt={heroVilla.titleTr}
                    width={720}
                    height={900}
                    priority
                    className="aspect-[4/5] w-full rounded-[36px] object-cover shadow-glassHover"
                  />
                  {/* Gold ring frame */}
                  <div
                    aria-hidden
                    className="absolute inset-0 rounded-[36px] ring-1 ring-accent-400/40"
                  />
                  {/* Glass meta tag */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                    <div className="glass-strong rounded-2xl p-4">
                      <MonoLabel className="text-accent-600">
                        {isTr ? "Öne Çıkan" : "Featured"}
                      </MonoLabel>
                      <p className="mt-2 text-display text-base font-bold leading-tight text-ink">
                        {isTr ? heroVilla.titleTr : heroVilla.titleEn}
                      </p>
                    </div>
                    <Link
                      href={`/kiralik/${heroVilla.slug}`}
                      className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink text-white transition hover:bg-accent-600"
                      aria-label={c("details")}
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
                {/* Floating accent dots */}
                <div
                  aria-hidden
                  className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-accent-400/30 blur-2xl animate-floatY"
                />
                <div
                  aria-hidden
                  className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-navy-400/40 blur-3xl"
                />
              </div>
            )}
          </div>

          {/* Search bar (full width below hero) */}
          <div className="relative mt-12 lg:mt-16">
            <SearchBar />
          </div>

          {/* Scroll cue */}
          <div className="mt-8 flex justify-center pb-8">
            <MonoLabel className="text-muted">
              {isTr ? "Aşağıya Kaydır" : "Scroll Down"}{" "}
              <MoveDown className="h-3 w-3 animate-floatY" />
            </MonoLabel>
          </div>
        </div>
      </section>

      {/* ============== TRUST STRIP ============== */}
      <TrustStrip />

      {/* ============== INTRO ============== */}
      <section className="section section-soft relative">
        <div className="container-page">
          <RevealOnScroll className="mx-auto max-w-3xl text-center">
            <MonoLabel className="text-accent-600">
              {isTr ? "Konsept" : "Concept"}
            </MonoLabel>
            <h2 className="mt-4 text-balance text-display">{t("searchTitle")}</h2>
            <div className="editorial-divider mt-6" />
          </RevealOnScroll>
          <div className="mx-auto mt-12 grid max-w-5xl gap-10 md:grid-cols-2">
            <RevealOnScroll className="space-y-5 text-[15px] leading-relaxed text-ink/85">
              <p>{t("intro1")}</p>
              <p>{t("intro2")}</p>
              <p>{t("intro3")}</p>
            </RevealOnScroll>
            <RevealOnScroll
              delay={120}
              className="space-y-5 text-[15px] leading-relaxed text-ink/85"
            >
              <p>{t("intro4")}</p>
              <p>{t("intro5")}</p>
              <p className="text-display text-lg font-semibold text-ink">
                {t("intro6")}
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ============== FEATURED VILLAS — asymmetric grid ============== */}
      <section className="section relative">
        <div className="container-page">
          <RevealOnScroll>
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <div>
                <MonoLabel className="text-accent-600">
                  {isTr ? "Villa Koleksiyonu" : "Villa Collection"}
                </MonoLabel>
                <h2 className="mt-3 text-balance text-display">
                  {t("featuredVillasTitle")}
                </h2>
                <p className="mt-3 max-w-xl text-muted">
                  {t("featuredVillasDesc")}
                </p>
              </div>
              <Link
                href="/villalar"
                className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.18em] text-ink transition hover:text-accent-600"
              >
                {isTr ? "Tüm Villalar" : "All Villas"}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </RevealOnScroll>

          {featuredVillas.length > 0 && (
            <div className="mt-12 grid gap-8 lg:grid-cols-12">
              {/* Wide hero villa */}
              <RevealOnScroll className="lg:col-span-7">
                <PropertyCard property={featuredVillas[0]} variant="wide" />
              </RevealOnScroll>
              {/* Two stacked smaller */}
              <div className="grid gap-8 lg:col-span-5 lg:grid-cols-1">
                {restVillas.slice(0, 2).map((p, i) => (
                  <RevealOnScroll key={p.id} delay={120 + i * 100}>
                    <PropertyCard property={p} variant="wide" />
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ============== SERVICES — minimal glass ============== */}
      <section className="section section-blue relative">
        <div className="container-page">
          <RevealOnScroll className="mx-auto max-w-2xl text-center">
            <MonoLabel className="text-accent-600">
              {isTr ? "Hizmetler" : "Services"}
            </MonoLabel>
            <h2 className="mt-3 text-balance text-display">
              {t("servicesTitle")}
            </h2>
            <p className="mt-3 text-muted">{t("servicesDesc")}</p>
          </RevealOnScroll>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <RevealOnScroll key={s.slug} delay={i * 60}>
                  <Link
                    href={s.href}
                    className="group flex h-full flex-col items-start gap-3 rounded-2xl glass p-5 transition hover:border-accent-500"
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-400/40 to-accent-500/20 text-ink ring-1 ring-accent-400/30 transition group-hover:from-accent-400/60">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-base">
                      <ServiceTitle k={s.titleKey} />
                    </h3>
                    <p className="text-xs text-muted">
                      <ServiceDesc k={s.descKey} />
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-accent-600 transition group-hover:gap-2">
                      {c("details")} <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </Link>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============== FEATURED APARTS ============== */}
      <section className="section relative">
        <div className="container-page">
          <RevealOnScroll>
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <div>
                <MonoLabel className="text-accent-600">
                  {isTr ? "Apart Koleksiyonu" : "Apartment Collection"}
                </MonoLabel>
                <h2 className="mt-3 text-balance text-display">
                  {t("featuredApartsTitle")}
                </h2>
                <p className="mt-3 max-w-xl text-muted">
                  {t("featuredApartsDesc")}
                </p>
              </div>
              <Link
                href="/apartlar"
                className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.18em] text-ink transition hover:text-accent-600"
              >
                {isTr ? "Tüm Apartlar" : "All Apartments"}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </RevealOnScroll>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredAparts.map((p, i) => (
              <RevealOnScroll key={p.id} delay={i * 80}>
                <PropertyCard property={p} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ============== DISTRICTS ============== */}
      <section className="section section-soft relative">
        <div className="container-page">
          <RevealOnScroll className="mx-auto max-w-2xl text-center">
            <MonoLabel className="text-accent-600">
              {isTr ? "Bodrum Yarımadası" : "Bodrum Peninsula"}
            </MonoLabel>
            <h2 className="mt-3 text-balance text-display">
              {t("districtsTitle")}
            </h2>
            <p className="mt-3 text-muted">{t("districtsDesc")}</p>
          </RevealOnScroll>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {districts.slice(0, 6).map((d, i) => (
              <RevealOnScroll key={d.slug} delay={i * 70}>
                <DistrictCard district={d} index={i} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ============== WHY US — editorial dark cards ============== */}
      <section className="section relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(70% 60% at 30% 30%, rgba(217,178,110,0.18) 0%, transparent 60%), radial-gradient(60% 50% at 80% 80%, rgba(109,144,220,0.18) 0%, transparent 60%)",
          }}
        />
        <div className="container-page">
          <RevealOnScroll className="mx-auto max-w-2xl text-center">
            <MonoLabel className="text-accent-600">
              {isTr ? "Neden Biz" : "Why Us"}
            </MonoLabel>
            <h2 className="mt-3 text-balance text-display">{t("whyTitle")}</h2>
            <div className="editorial-divider mt-6" />
          </RevealOnScroll>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <WhyCard num="01" title={t("why1Title")} desc={t("why1Desc")} delay={0} />
            <WhyCard num="02" title={t("why2Title")} desc={t("why2Desc")} delay={100} />
            <WhyCard num="03" title={t("why3Title")} desc={t("why3Desc")} delay={200} />
            <WhyCard num="04" title={t("why4Title")} desc={t("why4Desc")} delay={300} />
          </div>
        </div>
      </section>

      {/* ============== REVIEWS ============== */}
      <section className="section section-blue relative">
        <div className="container-page">
          <RevealOnScroll className="mx-auto max-w-2xl text-center">
            <MonoLabel className="text-accent-600">
              {isTr ? "Misafir Sözleri" : "Guest Stories"}
            </MonoLabel>
            <h2 className="mt-3 text-balance text-display">
              {t("reviewsTitle")}
            </h2>
          </RevealOnScroll>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.slice(0, 6).map((r, i) => (
              <RevealOnScroll key={r.id} delay={i * 70}>
                <article className="flex h-full flex-col gap-4 rounded-3xl glass p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-0.5 text-accent-500">
                      {Array.from({ length: 5 }).map((_, k) => (
                        <Star
                          key={k}
                          className={`h-4 w-4 ${k < r.rating ? "fill-current" : "opacity-25"}`}
                        />
                      ))}
                    </div>
                    <span className="mono-label text-muted">{r.source}</span>
                  </div>
                  <p className="text-[15px] leading-relaxed text-ink/85">
                    &ldquo;{isTr ? r.textTr : r.textEn}&rdquo;
                  </p>
                  <div className="mt-auto border-t border-[var(--color-border)] pt-3 text-xs text-muted">
                    <span className="font-semibold text-ink">{r.author}</span>{" "}
                    · {r.city}
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ============== BLOG ============== */}
      <section className="section relative">
        <div className="container-page">
          <RevealOnScroll>
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <div>
                <MonoLabel className="text-accent-600">
                  {isTr ? "Bodrum Rehberi" : "Bodrum Guide"}
                </MonoLabel>
                <h2 className="mt-3 text-display">{t("blogTitle")}</h2>
                <p className="mt-2 max-w-xl text-muted">{t("blogDesc")}</p>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.18em] text-ink transition hover:text-accent-600"
              >
                {isTr ? "Tüm Yazılar" : "All Posts"}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </RevealOnScroll>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {posts.slice(0, 3).map((p, i) => (
              <RevealOnScroll key={p.slug} delay={i * 100}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl glass"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.hero}
                      alt={isTr ? p.titleTr : p.titleEn}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition duration-[1200ms] group-hover:scale-105"
                    />
                    <span className="chip-accent absolute left-4 top-4">
                      {isTr ? p.category.tr : p.category.en}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
                      {new Date(p.date).toLocaleDateString(
                        isTr ? "tr-TR" : "en-GB",
                        { day: "2-digit", month: "short", year: "numeric" }
                      )}{" "}
                      · {p.readingTime}{isTr ? " dk" : " min"}
                    </p>
                    <h3 className="text-display text-base font-bold leading-snug text-ink">
                      {isTr ? p.titleTr : p.titleEn}
                    </h3>
                    <p className="line-clamp-2 text-sm text-muted">
                      {isTr ? p.excerptTr : p.excerptEn}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-accent-600 transition group-hover:gap-2">
                      {isTr ? "Devamını Oku" : "Read More"}
                      <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ============== FAQ ============== */}
      <section className="section section-soft relative">
        <div className="container-page max-w-4xl">
          <RevealOnScroll className="text-center">
            <MonoLabel className="text-accent-600">FAQ</MonoLabel>
            <h2 className="mt-3 text-display">{t("faqTitle")}</h2>
            <div className="editorial-divider mt-6" />
          </RevealOnScroll>
          <RevealOnScroll className="mt-12">
            <FAQ items={faqItems} />
          </RevealOnScroll>
        </div>
      </section>

      {/* ============== CTA ============== */}
      <section className="section relative overflow-hidden">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-[40px] glass-strong p-10 md:p-16">
            <div
              aria-hidden
              className="absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(60% 80% at 80% 20%, rgba(217,178,110,0.25) 0%, transparent 60%), radial-gradient(60% 80% at 0% 80%, rgba(109,144,220,0.25) 0%, transparent 60%)",
              }}
            />
            <div className="mx-auto max-w-2xl text-center">
              <MonoLabel className="text-accent-600">
                {isTr ? "Aramaya Başla" : "Start Searching"}
              </MonoLabel>
              <h2 className="mt-4 text-balance text-display">
                {isTr
                  ? "Bodrum tatiliniz tek bir mesaj uzağınızda."
                  : "Your Bodrum holiday is one message away."}
              </h2>
              <p className="mt-4 text-muted">
                {isTr
                  ? "Tarihinizi seçin, beğendiğiniz konutu işaretleyin — bir saat içinde sizinle iletişime geçiyoruz."
                  : "Pick your dates, choose your home — we get in touch within an hour."}
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link href="/kiralik" className="btn-primary">
                  {t("searchCta")}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href={`https://wa.me/${c("whatsappNumber")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceTitle({ k }: { k: string }) {
  const [ns, key] = k.split(".") as [string, string];
  const t = useTranslations(ns);
  return <>{t(key)}</>;
}
function ServiceDesc({ k }: { k: string }) {
  const [ns, key] = k.split(".") as [string, string];
  const t = useTranslations(ns);
  return <>{t(key)}</>;
}

function WhyCard({
  num,
  title,
  desc,
  delay,
}: {
  num: string;
  title: string;
  desc: string;
  delay: number;
}) {
  return (
    <RevealOnScroll delay={delay}>
      <div className="group relative h-full overflow-hidden rounded-3xl glass p-7 transition hover:border-accent-500">
        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-accent-600">
          {num}
        </span>
        <h3 className="mt-4 text-display text-xl font-bold text-ink">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{desc}</p>
        {/* gold corner accent */}
        <div
          aria-hidden
          className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent-400/10 blur-2xl transition-all duration-500 group-hover:bg-accent-400/30"
        />
      </div>
    </RevealOnScroll>
  );
}

function TrustStrip() {
  const t = useTranslations("home");
  const items = [
    { icon: Shield, title: t("trust1Title"), desc: t("trust1Desc") },
    { icon: Clock, title: t("trust2Title"), desc: t("trust2Desc") },
    { icon: Headphones, title: t("trust3Title"), desc: t("trust3Desc") },
    { icon: RefreshCw, title: t("trust4Title"), desc: t("trust4Desc") },
  ];
  return (
    <section className="relative">
      <div className="container-page py-10">
        <div className="grid gap-3 rounded-3xl glass p-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-400/40 to-accent-500/20 text-ink ring-1 ring-accent-400/30">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{item.title}</p>
                  <p className="text-xs text-muted">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
