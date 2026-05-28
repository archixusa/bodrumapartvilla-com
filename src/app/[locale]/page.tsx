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
import { Testimonials } from "@/components/Testimonials";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://bodrumapartvilla.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const L = locale as "tr" | "en" | "de" | "ru";
  const m = (tr: string, en: string, de: string, ru: string) =>
    ({ tr, en, de, ru } as Record<typeof L, string>)[L] ?? en;
  const url = locale === "tr" ? SITE_URL : `${SITE_URL}/${locale}`;
  return {
    title: m(
      "Bodrumapartvilla — Butik Villa Konaklama",
      "Bodrumapartvilla — A Boutique Villa Collection",
      "Bodrumapartvilla — Eine Boutique-Villenkollektion",
      "Bodrumapartvilla — Бутик-коллекция вилл",
    ),
    description: m(
      "Bodrum yarımadasında butik bir villa konaklama platformu. Seçici kurasyon, atmosfer korunması, premium misafir profili.",
      "A boutique villa collection across the Bodrum peninsula — built on considered curation, preserved atmosphere and a measured guest profile.",
      "Eine Boutique-Villenkollektion auf der Halbinsel Bodrum — getragen von bedachter Auswahl, bewahrter Atmosphäre und einem gewählten Gästekreis.",
      "Бутик-коллекция вилл на полуострове Бодрум — тщательный отбор, сохранённая атмосфера и взвешенный круг гостей.",
    ),
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
      title: m(
        "Bodrumapartvilla — Butik Villa Konaklama",
        "Bodrumapartvilla — A Boutique Villa Collection",
        "Bodrumapartvilla — Eine Boutique-Villenkollektion",
        "Bodrumapartvilla — Бутик-коллекция вилл",
      ),
      description: m(
        "Bodrum yarımadasında butik bir villa konaklama platformu.",
        "A boutique villa collection across the Bodrum peninsula.",
        "Eine Boutique-Villenkollektion auf der Halbinsel Bodrum.",
        "Бутик-коллекция вилл на полуострове Бодрум.",
      ),
      url,
      type: "website",
    },
  };
}

type Loc = "tr" | "en" | "de" | "ru";

type Region = {
  slug: string;
  name: string;
  image: string;
  descTr: string;
  descEn: string;
  descDe: string;
  descRu: string;
};

const REGIONS: Region[] = [
  {
    slug: "yalikavak",
    name: "Yalıkavak",
    image: "/home/regions/yalikavak.webp",
    descTr: "Marina, ışık ve sessiz bir mimari ayar.",
    descEn: "Marina life, light and a quiet architectural register.",
    descDe: "Marina, Licht und eine zurückhaltende architektonische Note.",
    descRu: "Марина, свет и сдержанная архитектура.",
  },
  {
    slug: "turkbuku",
    name: "Türkbükü",
    image: "/home/regions/turkbuku.webp",
    descTr: "Koy hattının ölçülü, atmosferik tarafı.",
    descEn: "The measured, atmospheric side of the bay.",
    descDe: "Die maßvolle, atmosphärische Seite der Bucht.",
    descRu: "Сдержанная, атмосферная сторона залива.",
  },
  {
    slug: "gumusluk",
    name: "Gümüşlük",
    image: "/home/regions/gumusluk.webp",
    descTr: "Akşam ışığı, taş evler ve uzun bir akşam yemeği.",
    descEn: "Evening light, stone houses and an unhurried dinner.",
    descDe: "Abendlicht, Steinhäuser und ein langes Abendessen.",
    descRu: "Вечерний свет, каменные дома и неспешный ужин.",
  },
  {
    slug: "torba",
    name: "Torba",
    image: "/home/regions/torba.webp",
    descTr: "Kente yakın; özelliğini sessizlikle koruyan koy.",
    descEn: "Close to town, yet keeping its character in the quiet.",
    descDe: "Nah am Ort und doch in aller Stille von eigenem Charakter.",
    descRu: "Рядом с городом, но хранит свой характер в тишине.",
  },
  {
    slug: "golturkbuku",
    name: "Göltürkbükü",
    image: "/home/regions/golturkbuku.webp",
    descTr: "Yarımadanın tanıdık, bilinçli klasiği.",
    descEn: "The peninsula’s familiar, considered classic.",
    descDe: "Der vertraute, bedachte Klassiker der Halbinsel.",
    descRu: "Знакомая, продуманная классика полуострова.",
  },
  {
    slug: "gundogan",
    name: "Gündoğan",
    image: "/home/regions/gundogan.webp",
    descTr: "Geniş bir koy ve sakin bir günün uzayan saatleri.",
    descEn: "A broad bay and the unhurried hours of a still day.",
    descDe: "Eine weite Bucht und die ruhigen Stunden eines stillen Tages.",
    descRu: "Широкий залив и неспешные часы тихого дня.",
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
  const L = locale as Loc;
  // 4-locale picker with EN fallback
  const pick = (tr: string, en: string, de: string, ru: string) =>
    ({ tr, en, de, ru } as Record<Loc, string>)[L] ?? en;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LodgingBusiness",
      name: "Bodrumapartvilla",
      url: SITE_URL,
      logo: `${SITE_URL}/logo_kare.svg`,
      image: `${SITE_URL}/logo_kare.svg`,
      description: pick(
        "Bodrum yarımadasında butik bir villa konaklama koleksiyonu.",
        "A boutique villa collection across the Bodrum peninsula.",
        "Eine Boutique-Kollektion von Villen auf der Halbinsel Bodrum.",
        "Бутик-коллекция вилл на полуострове Бодрум.",
      ),
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
      title: pick(
        "Seçici Kurasyon",
        "Considered Curation",
        "Bedachte Auswahl",
        "Тщательный отбор",
      ),
      body: pick(
        "Her villa, mimarisi, konumu ve karakteriyle değerlendirilir. Koleksiyona yalnızca bu sessiz seçicilikten geçenler katılır.",
        "Each villa is judged on its architecture, its setting and its character. Only those that pass that quiet selection join the collection.",
        "Jede Villa wird nach ihrer Architektur, ihrer Lage und ihrem Charakter beurteilt. Nur Häuser, die diese stille Auswahl bestehen, werden in die Kollektion aufgenommen.",
        "Каждую виллу мы оцениваем по архитектуре, расположению и характеру. В коллекцию входят лишь те, что проходят этот негромкий отбор.",
      ),
    },
    {
      icon: ShieldCheck,
      title: pick(
        "Atmosfer Korunması",
        "Preserved Atmosphere",
        "Bewahrte Atmosphäre",
        "Сохранённая атмосфера",
      ),
      body: pick(
        "Bir mülkün sessizliği, bahçesi, manzarası — hepsi bir bütündür. Misafir, bu bütünü olduğu gibi devraldığında konaklama anlam kazanır.",
        "A property’s quiet, its garden, its view — these belong together. A stay finds its meaning when the guest receives that whole, intact.",
        "Die Ruhe eines Hauses, sein Garten, sein Ausblick — sie gehören zusammen. Ein Aufenthalt gewinnt seinen Sinn, wenn der Gast dieses Ganze unversehrt empfängt.",
        "Тишина дома, его сад, его вид — единое целое. Пребывание обретает смысл, когда гость получает это целое нетронутым.",
      ),
    },
    {
      icon: Compass,
      title: pick(
        "Premium Misafir Profili",
        "A Measured Guest Profile",
        "Ein gewählter Gästekreis",
        "Взвешенный круг гостей",
      ),
      body: pick(
        "Mülk sahibinin emanetine saygı duyan, ölçülü ve özenli bir misafir profili. Her başvuru, karşılıklı bir uyum aranarak değerlendirilir.",
        "A measured, careful guest who honours the trust an owner has placed. Every enquiry is read for that mutual fit.",
        "Ein maßvoller, achtsamer Gast, der das Vertrauen des Eigentümers wahrt. Jede Anfrage wird auf dieses beidseitige Einvernehmen hin gelesen.",
        "Сдержанный и внимательный гость, дорожащий доверием владельца. Каждый запрос мы рассматриваем с расчётом на взаимное согласие.",
      ),
    },
  ];

  const conciergeCards = [
    {
      icon: Car,
      title: pick(
        "Özel Transfer",
        "Private Transfer",
        "Privattransfer",
        "Индивидуальный трансфер",
      ),
      body: pick(
        "Havalimanından villaya, sessiz ve zamanında. Şoför ve araç koleksiyondaki ölçüye uyumlu seçilir.",
        "Airport to villa, quiet and on time. Driver and car chosen to match the register of the collection.",
        "Vom Flughafen zur Villa, ruhig und pünktlich. Fahrer und Wagen werden auf den Ton der Kollektion abgestimmt.",
        "Из аэропорта на виллу — тихо и вовремя. Водитель и автомобиль подбираются в тон коллекции.",
      ),
    },
    {
      icon: Sailboat,
      title: pick(
        "Tekne ve Yat",
        "Yacht & Day Boat",
        "Yacht und Tagesboot",
        "Яхта и катер на день",
      ),
      body: pick(
        "Günübirlik bir tekne ya da daha uzun bir kiralama; rotaları ve mürettebatı doğru ölçüde olan teknelerle çalışırız.",
        "A day boat or a longer charter — only with crews and routes that share the same measured tone.",
        "Ein Tagesboot oder ein längerer Charter — nur mit Crews und Routen, die denselben maßvollen Ton tragen.",
        "Катер на день или более долгий чартер — только с командами и маршрутами того же сдержанного тона.",
      ),
    },
    {
      icon: ChefHat,
      title: pick(
        "Özel Şef",
        "Private Chef",
        "Privatkoch",
        "Личный шеф-повар",
      ),
      body: pick(
        "Villada sade, mevsiminde bir akşam yemeği. Menü, ev sahibinizin ilgisine ve ritmine göre kurulur.",
        "A quiet, seasonal dinner at the villa. The menu is built to your host’s attention and rhythm.",
        "Ein schlichtes, saisonales Abendessen in der Villa. Das Menü richtet sich nach der Aufmerksamkeit und dem Rhythmus Ihres Gastgebers.",
        "Спокойный сезонный ужин на вилле. Меню строится по вниманию и ритму вашего хозяина.",
      ),
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
              {pick(
                "Bodrum · Butik Konaklama",
                "Bodrum · Boutique Stays",
                "Bodrum · Boutique-Aufenthalte",
                "Бодрум · Бутик-проживание",
              )}
            </MonoLabel>
            <h1 className="mt-10 font-display text-5xl font-semibold leading-[0.98] tracking-tight text-white md:text-7xl">
              {L === "tr" ? (
                <>
                  Bodrum&apos;da,
                  <br />
                  <span className="italic text-gradient-gold">ölçülü</span> bir
                  konaklama anlayışı.
                </>
              ) : L === "de" ? (
                <>
                  In Bodrum,
                  <br />
                  ein <span className="italic text-gradient-gold">bedachtes</span>{" "}
                  Verständnis vom Aufenthalt.
                </>
              ) : L === "ru" ? (
                <>
                  В Бодруме —
                  <br />
                  <span className="italic text-gradient-gold">взвешенный</span>{" "}
                  взгляд на проживание.
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
              {pick(
                "Bodrumapartvilla, sayısı sınırlı bir villa koleksiyonu kurmaktadır. Mülkler, mimarisi ve karakteriyle değerlendirilir; misafire ulaşan deneyim, bu sessiz seçiciliğin karşılığıdır.",
                "Bodrumapartvilla is building a small, deliberate collection of villas. Each property is judged on its architecture and its character; what reaches the guest is the result of that quiet discipline.",
                "Bodrumapartvilla baut eine kleine, bewusst gewählte Villenkollektion auf. Jedes Haus wird nach seiner Architektur und seinem Charakter beurteilt; was den Gast erreicht, ist das Ergebnis dieser stillen Disziplin.",
                "Bodrumapartvilla создаёт небольшую, осознанно отобранную коллекцию вилл. Каждый дом оценивается по архитектуре и характеру; то, что получает гость, — итог этой негромкой дисциплины.",
              )}
            </p>

            <div className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/iletisim" className="btn-primary">
                {pick(
                  "Konsiyerj ile Görüş",
                  "Speak with the Concierge",
                  "Mit dem Concierge sprechen",
                  "Связаться с консьержем",
                )}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/evinizi-kiraya-verin" className="btn-secondary">
                {pick(
                  "Villanızı Değerlendirelim",
                  "Entrust Your Villa to Us",
                  "Vertrauen Sie uns Ihre Villa an",
                  "Доверьте нам свою виллу",
                )}
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
                {pick(
                  "Felsefemiz",
                  "Our Philosophy",
                  "Unsere Philosophie",
                  "Наша философия",
                )}
              </MonoLabel>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
                {pick(
                  "Bir villa, dört duvar değildir.",
                  "A villa is not four walls.",
                  "Eine Villa ist nicht nur vier Wände.",
                  "Вилла — это не просто четыре стены.",
                )}
              </h2>
              <div className="editorial-divider mt-8 max-w-xs" />
              <p className="mt-10 text-base leading-relaxed text-ink/85 md:text-lg">
                {pick(
                  "Mimarisi, konumu, bahçesi, manzarası — birlikte bir atmosfer kurar. Bu atmosferi misafirine aktaran, mülk sahibinin emanetine sahip çıkan bir aracı olmak; bizim işimizi yapma biçimimizdir.",
                  "Its architecture, its setting, its garden, its view — together they shape an atmosphere. Carrying that atmosphere through to a guest, and honouring the trust an owner has placed in us along the way, is how we choose to do our work.",
                  "Ihre Architektur, ihre Lage, ihr Garten, ihr Ausblick — gemeinsam bilden sie eine Atmosphäre. Diese Atmosphäre an den Gast weiterzutragen und dabei das Vertrauen des Eigentümers zu wahren, ist die Art, wie wir arbeiten.",
                  "Её архитектура, расположение, сад, вид — вместе они создают атмосферу. Передать эту атмосферу гостю и при этом сохранить доверие владельца — так мы понимаем свою работу.",
                )}
              </p>
              <p className="mt-6 text-base leading-relaxed text-ink/75 md:text-lg">
                {pick(
                  "Sayı yarışı yerine seçicilik. Hız yerine ölçü. Konaklamayı bir hizmet değil, bir emanet olarak gören bir çalışma biçimi.",
                  "Selectivity instead of a race for numbers. Measure instead of speed. A way of working that treats a stay as something entrusted, not merely transacted.",
                  "Auswahl statt Wettlauf um Zahlen. Maß statt Tempo. Eine Arbeitsweise, die einen Aufenthalt als anvertraute Sache versteht, nicht als bloße Transaktion.",
                  "Отбор вместо гонки за количеством. Мера вместо спешки. Подход, в котором пребывание — это доверенное, а не просто сделка.",
                )}
              </p>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[36px] border border-[var(--color-border)]">
                <Image
                  src="/home/felsefe.webp"
                  alt={pick(
                    "Bodrum'da butik villa iç mekân ve terası",
                    "Boutique villa interior and terrace in Bodrum",
                    "Boutique-Villa-Interieur und Terrasse in Bodrum",
                    "Интерьер и терраса бутик-виллы в Бодруме",
                  )}
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
              {pick("Ölçü", "A Measure", "Ein Maßstab", "Мера")}
            </MonoLabel>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
              {pick(
                "Üç prensip, tek bir çalışma biçimi.",
                "Three principles, one way of working.",
                "Drei Prinzipien, eine Arbeitsweise.",
                "Три принципа, один подход к работе.",
              )}
            </h2>
            <p className="mt-8 text-base leading-relaxed text-ink/75 md:text-lg">
              {pick(
                "Koleksiyonun her parçası, aynı sessiz disiplinden geçer. Bunu üç temel ölçüyle ifade ediyoruz.",
                "Every piece of the collection passes through the same quiet discipline. We hold it to three measures.",
                "Jeder Teil der Kollektion durchläuft dieselbe stille Disziplin. Wir messen sie an drei Maßstäben.",
                "Каждая часть коллекции проходит ту же негромкую дисциплину. Мы выражаем её тремя мерами.",
              )}
            </p>
          </RevealOnScroll>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <RevealOnScroll key={p.title}>
                  <article className="h-full rounded-3xl border border-[var(--color-border)] bg-white/60 p-8 backdrop-blur transition hover:border-accent-500 md:p-10">
                    <Icon className="h-7 w-7 text-accent-600" />
                    <h3 className="mt-6 font-display text-xl font-semibold text-ink md:text-2xl">
                      {p.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-ink/75 md:text-base">
                      {p.body}
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
              {pick(
                "Bölgelerimiz",
                "Our Regions",
                "Unsere Regionen",
                "Наши районы",
              )}
            </MonoLabel>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
              {pick(
                "Yarımadanın seçilmiş köşeleri.",
                "Selected corners of the peninsula.",
                "Ausgewählte Ecken der Halbinsel.",
                "Избранные уголки полуострова.",
              )}
            </h2>
            <p className="mt-8 text-base leading-relaxed text-ink/75 md:text-lg">
              {pick(
                "Bodrum, yarımadanın her noktasında aynı değildir. Karakteri farklı olan altı bölgede, her birinin kendi ritmine sadık kalan villalar arıyoruz.",
                "Bodrum is not the same on every coast. Across six regions with distinct characters, we look for villas that stay true to each one’s rhythm.",
                "Bodrum ist nicht an jeder Küste gleich. In sechs Regionen mit eigenem Charakter suchen wir Villen, die dem Rhythmus jeder einzelnen treu bleiben.",
                "Бодрум не одинаков на каждом берегу. В шести районах с разным характером мы ищем виллы, верные ритму каждого из них.",
              )}
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
                      alt={pick(
                        `${r.name} bölgesinde butik villa atmosferi`,
                        `Boutique villa atmosphere in ${r.name}`,
                        `Boutique-Villa-Atmosphäre in ${r.name}`,
                        `Атмосфера бутик-виллы в районе ${r.name}`,
                      )}
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
                        {pick(r.descTr, r.descEn, r.descDe, r.descRu)}
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
                {pick(
                  "Mülk Sahipleri İçin",
                  "For Property Owners",
                  "Für Eigentümer",
                  "Для владельцев",
                )}
              </MonoLabel>
              <h2 className="mt-6 font-display text-3xl font-semibold leading-tight text-white md:text-5xl">
                {pick(
                  "Villanızı bize emanet etmek.",
                  "Entrusting your villa to us.",
                  "Ihre Villa in unsere Hände.",
                  "Доверить виллу нам.",
                )}
              </h2>
              <p className="mt-10 text-base leading-relaxed text-white/85 md:text-lg">
                {pick(
                  "Bodrum'da bir villanız varsa ve onu sayı odaklı bir kiralama akışına bırakmak istemiyorsanız — değerlendirelim. Mülkler, başvuru sonrası bireysel olarak incelenir; koleksiyona katılım, karşılıklı bir uyumun sonucunda gerçekleşir.",
                  "If you own a villa in Bodrum and would rather not entrust it to a high-volume rental flow, we should talk. Properties are reviewed individually after an enquiry; admission to the collection follows only when there is a real, mutual fit.",
                  "Wenn Sie eine Villa in Bodrum besitzen und sie nicht einem mengenorientierten Vermietungsbetrieb überlassen möchten, sollten wir sprechen. Häuser werden nach einer Anfrage einzeln geprüft; die Aufnahme in die Kollektion erfolgt nur bei echtem, beidseitigem Einvernehmen.",
                  "Если у вас есть вилла в Бодруме и вы не хотите отдавать её в поток массовой аренды — давайте обсудим. Каждый объект после обращения рассматривается отдельно; в коллекцию он входит лишь при подлинном взаимном согласии.",
                )}
              </p>
              <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
                {pick(
                  "Mülk sahibinin sesini, evinin karakterini ve sezonun ritmini koruyan bir yönetim biçimi öneriyoruz.",
                  "We offer a way of managing that keeps the owner’s voice, the home’s character and the rhythm of the season intact.",
                  "Wir bieten eine Verwaltung, die die Stimme des Eigentümers, den Charakter des Hauses und den Rhythmus der Saison bewahrt.",
                  "Мы предлагаем управление, которое бережёт голос владельца, характер дома и ритм сезона.",
                )}
              </p>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <Link href="/evinizi-kiraya-verin" className="btn-primary">
                  {pick(
                    "Villanızı Değerlendirelim",
                    "Entrust Your Villa to Us",
                    "Vertrauen Sie uns Ihre Villa an",
                    "Доверьте нам свою виллу",
                  )}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/hakkimizda"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white"
                >
                  <span className="relative">
                    {pick(
                      "Süreç hakkında bilgi",
                      "About our process",
                      "Über unseren Ablauf",
                      "О нашем процессе",
                    )}
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
              {pick("Konsiyerj", "Concierge", "Concierge", "Консьерж")}
            </MonoLabel>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
              {pick(
                "Konaklamanın ötesinde, eşlik eden bir hizmet.",
                "Beyond the stay — a service that quietly accompanies.",
                "Über den Aufenthalt hinaus — ein Dienst, der still begleitet.",
                "За пределами пребывания — служба, что тихо сопровождает.",
              )}
            </h2>
            <p className="mt-8 text-base leading-relaxed text-ink/75 md:text-lg">
              {pick(
                "Bir villaya gelmek, bir günü kurmaktır. Konsiyerj ekibimiz, gelişten ayrılışa kadar geçen saatleri ölçülü, sessiz ve doğru ritimde bir araya getirir.",
                "Arriving at a villa is shaping a day. Our concierge brings the hours between arrival and departure together with measure, quiet and the right rhythm.",
                "In einer Villa anzukommen heißt, einen Tag zu gestalten. Unser Concierge fügt die Stunden von der Ankunft bis zur Abreise mit Maß, Ruhe und dem richtigen Rhythmus zusammen.",
                "Приехать на виллу — значит выстроить день. Наш консьерж соединяет часы от приезда до отъезда с мерой, тишиной и верным ритмом.",
              )}
            </p>
          </RevealOnScroll>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {conciergeCards.map((card) => {
              const Icon = card.icon;
              return (
                <RevealOnScroll key={card.title}>
                  <article className="h-full rounded-3xl border border-[var(--color-border)] bg-white/60 p-8 backdrop-blur transition hover:border-accent-500 md:p-10">
                    <Icon className="h-7 w-7 text-accent-600" />
                    <h3 className="mt-6 font-display text-lg font-semibold text-ink md:text-xl">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-ink/75">
                      {card.body}
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
                {pick(
                  "Tüm konsiyerj hizmetleri",
                  "All concierge services",
                  "Alle Concierge-Leistungen",
                  "Все услуги консьержа",
                )}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent-500 transition-all duration-300 group-hover:w-full" />
              </span>
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — quiet guest social proof */}
      <Testimonials max={3} />
    </>
  );
}
