import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  ArrowUpRight,
  ArrowRight,
  Compass,
  Sparkles,
  ShieldCheck,
  Car,
  Sailboat,
  ChefHat,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import { JsonLd } from "@/components/JsonLd";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://bodrumapartvilla.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isTr = locale === "tr";
  const url = locale === "tr" ? SITE_URL : `${SITE_URL}/${locale}`;
  return {
    title: isTr
      ? "Bodrumapartvilla — Butik Villa Konaklama"
      : "Bodrumapartvilla — A Boutique Villa Collection",
    description: isTr
      ? "Bodrum yarımadasında butik bir villa konaklama platformu. Seçici kurasyon, atmosfer korunması, premium misafir profili."
      : "A boutique villa collection across the Bodrum peninsula — built on considered curation, preserved atmosphere and a measured guest profile.",
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
      title: isTr
        ? "Bodrumapartvilla — Butik Villa Konaklama"
        : "Bodrumapartvilla — A Boutique Villa Collection",
      description: isTr
        ? "Bodrum yarımadasında butik bir villa konaklama platformu."
        : "A boutique villa collection across the Bodrum peninsula.",
      url,
      type: "website",
    },
  };
}

type Region = {
  slug: string;
  name: string;
  image: string;
  descTr: string;
  descEn: string;
};

const REGIONS: Region[] = [
  {
    slug: "yalikavak",
    name: "Yalıkavak",
    image: "/home/regions/yalikavak.webp",
    descTr: "Marina, ışık ve sessiz bir mimari ayar.",
    descEn: "Marina life, light and a quiet architectural register.",
  },
  {
    slug: "turkbuku",
    name: "Türkbükü",
    image: "/home/regions/turkbuku.webp",
    descTr: "Koy hattının ölçülü, atmosferik tarafı.",
    descEn: "The measured, atmospheric side of the bay.",
  },
  {
    slug: "gumusluk",
    name: "Gümüşlük",
    image: "/home/regions/gumusluk.webp",
    descTr: "Akşam ışığı, taş evler ve uzun bir akşam yemeği.",
    descEn: "Evening light, stone houses and an unhurried dinner.",
  },
  {
    slug: "torba",
    name: "Torba",
    image: "/home/regions/torba.webp",
    descTr: "Kente yakın; özelliğini sessizlikle koruyan koy.",
    descEn: "Close to town, yet keeping its character in the quiet.",
  },
  {
    slug: "golturkbuku",
    name: "Göltürkbükü",
    image: "/home/regions/golturkbuku.webp",
    descTr: "Yarımadanın tanıdık, bilinçli klasiği.",
    descEn: "The peninsula’s familiar, considered classic.",
  },
  {
    slug: "gundogan",
    name: "Gündoğan",
    image: "/home/regions/gundogan.webp",
    descTr: "Geniş bir koy ve sakin bir günün uzayan saatleri.",
    descEn: "A broad bay and the unhurried hours of a still day.",
  },
];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  await getTranslations({ locale, namespace: "common" });
  const isTr = locale === "tr";

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LodgingBusiness",
      name: "Bodrumapartvilla",
      url: SITE_URL,
      logo: `${SITE_URL}/logo_kare.svg`,
      image: `${SITE_URL}/logo_kare.svg`,
      description: isTr
        ? "Bodrum yarımadasında butik bir villa konaklama koleksiyonu."
        : "A boutique villa collection across the Bodrum peninsula.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bodrum",
        addressRegion: "Muğla",
        addressCountry: "TR",
      },
      areaServed: "Bodrum",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      url: SITE_URL,
      name: "bodrumapartvilla.com",
    },
  ];

  const principles = [
    {
      icon: Sparkles,
      titleTr: "Seçici Kurasyon",
      titleEn: "Considered Curation",
      bodyTr:
        "Her villa, mimarisi, konumu ve karakteriyle değerlendirilir. Koleksiyona yalnızca bu sessiz seçicilikten geçenler katılır.",
      bodyEn:
        "Each villa is judged on its architecture, its setting and its character. Only those that pass that quiet selection join the collection.",
    },
    {
      icon: ShieldCheck,
      titleTr: "Atmosfer Korunması",
      titleEn: "Preserved Atmosphere",
      bodyTr:
        "Bir mülkün sessizliği, bahçesi, manzarası — hepsi bir bütündür. Misafir, bu bütünü olduğu gibi devraldığında konaklama anlam kazanır.",
      bodyEn:
        "A property’s quiet, its garden, its view — these belong together. A stay finds its meaning when the guest receives that whole, intact.",
    },
    {
      icon: Compass,
      titleTr: "Premium Misafir Profili",
      titleEn: "A Measured Guest Profile",
      bodyTr:
        "Mülk sahibinin emanetine saygı duyan, ölçülü ve özenli bir misafir profili. Her başvuru, karşılıklı bir uyum aranarak değerlendirilir.",
      bodyEn:
        "A measured, careful guest who honours the trust an owner has placed. Every enquiry is read for that mutual fit.",
    },
  ];

  const conciergeCards = [
    {
      icon: Car,
      titleTr: "Özel Transfer",
      titleEn: "Private Transfer",
      bodyTr:
        "Havalimanından villaya, sessiz ve zamanında. Şoför ve araç koleksiyondaki ölçüye uyumlu seçilir.",
      bodyEn:
        "Airport to villa, quiet and on time. Driver and car chosen to match the register of the collection.",
    },
    {
      icon: Sailboat,
      titleTr: "Tekne ve Yat",
      titleEn: "Yacht & Day Boat",
      bodyTr:
        "Günübirlik bir tekne ya da daha uzun bir kiralama; rotaları ve mürettebatı doğru ölçüde olan teknelerle çalışırız.",
      bodyEn:
        "A day boat or a longer charter — only with crews and routes that share the same measured tone.",
    },
    {
      icon: ChefHat,
      titleTr: "Özel Şef",
      titleEn: "Private Chef",
      bodyTr:
        "Villada sade, mevsiminde bir akşam yemeği. Menü, ev sahibinizin ilgisine ve ritmine göre kurulur.",
      bodyEn:
        "A quiet, seasonal dinner at the villa. The menu is built to your host’s attention and rhythm.",
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* HERO — full-width premium imagery */}
      <section className="relative isolate overflow-hidden pt-40 pb-32 md:pt-48 md:pb-40">
        <div aria-hidden className="absolute inset-0 -z-10">
          <Image
            src="/home/hero.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(15,23,42,0.55) 0%, rgba(15,23,42,0.75) 100%)",
            }}
          />
        </div>
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <MonoLabel className="text-white/90" withLine={false}>
              {isTr
                ? "Bodrum · Butik Konaklama"
                : "Bodrum · Boutique Stays"}
            </MonoLabel>
            <h1 className="mt-10 font-display text-5xl font-semibold leading-[0.98] tracking-tight text-white md:text-7xl">
              {isTr ? (
                <>
                  Bodrum&apos;da,
                  <br />
                  <span className="italic text-gradient-gold">ölçülü</span> bir
                  konaklama anlayışı.
                </>
              ) : (
                <>
                  In Bodrum,
                  <br />
                  a <span className="italic text-gradient-gold">considered</span>{" "}
                  way to stay.
                </>
              )}
            </h1>
            <div className="editorial-divider mx-auto mt-12 max-w-xs" />
            <p className="mt-12 text-balance text-base leading-relaxed text-white/90 md:text-lg">
              {isTr
                ? "Bodrumapartvilla, sayısı sınırlı bir villa koleksiyonu kurmaktadır. Mülkler, mimarisi ve karakteriyle değerlendirilir; misafire ulaşan deneyim, bu sessiz seçiciliğin karşılığıdır."
                : "Bodrumapartvilla is building a small, deliberate collection of villas. Each property is judged on its architecture and its character; what reaches the guest is the result of that quiet discipline."}
            </p>

            <div className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/iletisim" className="btn-primary">
                {isTr ? "Konsiyerj ile Görüş" : "Speak with the Concierge"}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/evinizi-kiraya-verin" className="btn-secondary">
                {isTr
                  ? "Villanızı Bizimle Yönetin"
                  : "Entrust Your Villa to Us"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY — split layout */}
      <section className="section section-soft">
        <div className="container-page">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <RevealOnScroll>
              <MonoLabel className="text-accent-600">
                {isTr ? "Felsefemiz" : "Our Philosophy"}
              </MonoLabel>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
                {isTr
                  ? "Bir villa, dört duvar değildir."
                  : "A villa is not four walls."}
              </h2>
              <div className="editorial-divider mt-8 max-w-xs" />
              <p className="mt-10 text-base leading-relaxed text-ink/85 md:text-lg">
                {isTr
                  ? "Mimarisi, konumu, bahçesi, manzarası — birlikte bir atmosfer kurar. Bu atmosferi misafirine aktaran, mülk sahibinin emanetine sahip çıkan bir aracı olmak; bizim işimizi yapma biçimimizdir."
                  : "Its architecture, its setting, its garden, its view — together they shape an atmosphere. Carrying that atmosphere through to a guest, and honouring the trust an owner has placed in us along the way, is how we choose to do our work."}
              </p>
              <p className="mt-6 text-base leading-relaxed text-ink/75 md:text-lg">
                {isTr
                  ? "Sayı yarışı yerine seçicilik. Hız yerine ölçü. Konaklamayı bir hizmet değil, bir emanet olarak gören bir çalışma biçimi."
                  : "Selectivity instead of a race for numbers. Measure instead of speed. A way of working that treats a stay as something entrusted, not merely transacted."}
              </p>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[36px] border border-[var(--color-border)]">
                <Image
                  src="/home/felsefe.webp"
                  alt={
                    isTr
                      ? "Bodrum'da butik villa iç mekân ve terası"
                      : "Boutique villa interior and terrace in Bodrum"
                  }
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* PRINCIPLES — 3 cards */}
      <section className="section">
        <div className="container-page">
          <RevealOnScroll className="mx-auto max-w-3xl text-center">
            <MonoLabel className="text-accent-600">
              {isTr ? "Ölçü" : "A Measure"}
            </MonoLabel>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
              {isTr
                ? "Üç prensip, tek bir çalışma biçimi."
                : "Three principles, one way of working."}
            </h2>
            <p className="mt-8 text-base leading-relaxed text-ink/75 md:text-lg">
              {isTr
                ? "Koleksiyonun her parçası, aynı sessiz disiplinden geçer. Bunu üç temel ölçüyle ifade ediyoruz."
                : "Every piece of the collection passes through the same quiet discipline. We hold it to three measures."}
            </p>
          </RevealOnScroll>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <RevealOnScroll key={p.titleEn}>
                  <article className="h-full rounded-3xl border border-[var(--color-border)] bg-white/60 p-8 backdrop-blur transition hover:border-accent-500 md:p-10">
                    <Icon className="h-7 w-7 text-accent-600" />
                    <h3 className="mt-6 font-display text-xl font-semibold text-ink md:text-2xl">
                      {isTr ? p.titleTr : p.titleEn}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-ink/75 md:text-base">
                      {isTr ? p.bodyTr : p.bodyEn}
                    </p>
                  </article>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* REGIONS — 6 card grid */}
      <section className="section section-soft">
        <div className="container-page">
          <RevealOnScroll className="mx-auto max-w-3xl text-center">
            <MonoLabel className="text-accent-600">
              {isTr ? "Bölgelerimiz" : "Our Regions"}
            </MonoLabel>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
              {isTr
                ? "Yarımadanın seçilmiş köşeleri."
                : "Selected corners of the peninsula."}
            </h2>
            <p className="mt-8 text-base leading-relaxed text-ink/75 md:text-lg">
              {isTr
                ? "Bodrum, yarımadanın her noktasında aynı değildir. Karakteri farklı olan altı bölgede, her birinin kendi ritmine sadık kalan villalar arıyoruz."
                : "Bodrum is not the same on every coast. Across six regions with distinct characters, we look for villas that stay true to each one’s rhythm."}
            </p>
          </RevealOnScroll>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {REGIONS.map((r) => (
              <RevealOnScroll key={r.slug}>
                <Link
                  href={`/bodrum/${r.slug}`}
                  className="group block overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white/60 backdrop-blur transition hover:-translate-y-1 hover:border-accent-500 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={r.image}
                      alt={
                        isTr
                          ? `${r.name} bölgesinde butik villa atmosferi`
                          : `Boutique villa atmosphere in ${r.name}`
                      }
                      fill
                      loading="lazy"
                      sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-4 p-6 md:p-7">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-ink md:text-2xl">
                        {r.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink/70">
                        {isTr ? r.descTr : r.descEn}
                      </p>
                    </div>
                    <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-accent-600 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* OWNERS — dark CTA */}
      <section className="relative isolate overflow-hidden py-24 md:py-32">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{ backgroundColor: "#0F172A" }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(217,178,110,0.6), transparent)",
          }}
        />
        <div className="container-page">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <RevealOnScroll>
              <MonoLabel className="text-accent-400" withLine={false}>
                {isTr ? "Mülk Sahipleri İçin" : "For Property Owners"}
              </MonoLabel>
              <h2 className="mt-6 font-display text-3xl font-semibold leading-tight text-white md:text-5xl">
                {isTr
                  ? "Villanızı bize emanet etmek."
                  : "Entrusting your villa to us."}
              </h2>
              <p className="mt-10 text-base leading-relaxed text-white/85 md:text-lg">
                {isTr
                  ? "Bodrum'da bir villanız varsa ve onu sayı odaklı bir kiralama akışına bırakmak istemiyorsanız — değerlendirelim. Mülkler, başvuru sonrası bireysel olarak incelenir; koleksiyona katılım, karşılıklı bir uyumun sonucunda gerçekleşir."
                  : "If you own a villa in Bodrum and would rather not entrust it to a high-volume rental flow, we should talk. Properties are reviewed individually after an enquiry; admission to the collection follows only when there is a real, mutual fit."}
              </p>
              <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
                {isTr
                  ? "Mülk sahibinin sesini, evinin karakterini ve sezonun ritmini koruyan bir yönetim biçimi öneriyoruz."
                  : "We offer a way of managing that keeps the owner’s voice, the home’s character and the rhythm of the season intact."}
              </p>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <Link href="/evinizi-kiraya-verin" className="btn-primary">
                  {isTr
                    ? "Villanızı Bizimle Yönetin"
                    : "Entrust Your Villa to Us"}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/hakkimizda"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white"
                >
                  <span className="relative">
                    {isTr ? "Süreç hakkında bilgi" : "About our process"}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent-400 transition-all duration-300 group-hover:w-full" />
                  </span>
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CONCIERGE HIGHLIGHT */}
      <section className="section">
        <div className="container-page">
          <RevealOnScroll className="mx-auto max-w-3xl text-center">
            <MonoLabel className="text-accent-600">
              {isTr ? "Konsiyerj" : "Concierge"}
            </MonoLabel>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
              {isTr
                ? "Konaklamanın ötesinde, eşlik eden bir hizmet."
                : "Beyond the stay — a service that quietly accompanies."}
            </h2>
            <p className="mt-8 text-base leading-relaxed text-ink/75 md:text-lg">
              {isTr
                ? "Bir villaya gelmek, bir günü kurmaktır. Konsiyerj ekibimiz, gelişten ayrılışa kadar geçen saatleri ölçülü, sessiz ve doğru ritimde bir araya getirir."
                : "Arriving at a villa is shaping a day. Our concierge brings the hours between arrival and departure together with measure, quiet and the right rhythm."}
            </p>
          </RevealOnScroll>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {conciergeCards.map((c) => {
              const Icon = c.icon;
              return (
                <RevealOnScroll key={c.titleEn}>
                  <article className="h-full rounded-3xl border border-[var(--color-border)] bg-white/60 p-8 backdrop-blur transition hover:border-accent-500 md:p-10">
                    <Icon className="h-7 w-7 text-accent-600" />
                    <h3 className="mt-6 font-display text-lg font-semibold text-ink md:text-xl">
                      {isTr ? c.titleTr : c.titleEn}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-ink/75">
                      {isTr ? c.bodyTr : c.bodyEn}
                    </p>
                  </article>
                </RevealOnScroll>
              );
            })}
          </div>

          <div className="mt-14 flex justify-center">
            <Link
              href="/konsiyerj"
              className="group inline-flex items-center gap-2 text-sm font-medium text-ink transition hover:text-accent-600"
            >
              <span className="relative">
                {isTr ? "Tüm konsiyerj hizmetleri" : "All concierge services"}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent-500 transition-all duration-300 group-hover:w-full" />
              </span>
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
