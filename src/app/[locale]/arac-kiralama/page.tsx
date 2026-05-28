import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Check, Car, Truck, Crown, Wind } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { InquiryForm } from "@/components/InquiryForm";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://bodrumapartvilla.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "car" });
  const url =
    locale === "tr"
      ? `${SITE_URL}/arac-kiralama`
      : `${SITE_URL}/${locale}/arac-kiralama`;
  return {
    title: t("metaTitle"),
    description: t("metaDesc"),
    alternates: { canonical: url },
    openGraph: { title: t("metaTitle"), description: t("metaDesc"), url },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "car" });
  const c = await getTranslations({ locale, namespace: "common" });
  const L = locale as "tr" | "en" | "de" | "ru";
  const pick = (tr: string, en: string, de: string, ru: string) =>
    ({ tr, en, de, ru } as Record<typeof L, string>)[L] ?? en;

  const classes = [
    { title: t("carClass1Title"), desc: t("carClass1Desc"), price: t("carClass1Price"), icon: Car },
    { title: t("carClass2Title"), desc: t("carClass2Desc"), price: t("carClass2Price"), icon: Wind },
    { title: t("carClass3Title"), desc: t("carClass3Desc"), price: t("carClass3Price"), icon: Truck },
    { title: t("carClass4Title"), desc: t("carClass4Desc"), price: t("carClass4Price"), icon: Crown },
  ];

  const inc = [t("inc1"), t("inc2"), t("inc3"), t("inc4"), t("inc5"), t("inc6")];

  const faqItems = [
    {
      q: pick(
        "Aracı havalimanından mı alacağım?",
        "Do I pick up the car at the airport?",
        "Übernehme ich das Auto am Flughafen?",
        "Получаю ли я автомобиль в аэропорту?",
      ),
      a: pick(
        "Tercihinize göre. Milas-Bodrum Havalimanı'nda 24/7 teslim ofisimiz var; villanıza ya da apart girişine teslim de mümkündür.",
        "Your choice. We have a 24/7 desk at Milas-Bodrum Airport; villa or apartment delivery is also available.",
        "Ganz nach Wunsch. Am Flughafen Milas-Bodrum haben wir einen Schalter rund um die Uhr; die Lieferung zur Villa oder Wohnung ist ebenfalls möglich.",
        "На ваш выбор. В аэропорту Милас-Бодрум у нас стойка работает круглосуточно; доставка к вилле или апартаментам также возможна.",
      ),
    },
    {
      q: pick(
        "Tam kasko + trafik sigortası fiyata dahil mi?",
        "Is full insurance included?",
        "Ist die Vollkaskoversicherung inbegriffen?",
        "Входит ли полная страховка в стоимость?",
      ),
      a: pick(
        "Evet. Tüm araçlar tam kasko ve trafik sigortası ile teslim edilir. Sınırsız kilometre kullanım hakkınız vardır.",
        "Yes. All cars come with full collision and liability insurance, with unlimited kilometres.",
        "Ja. Alle Fahrzeuge werden mit Vollkasko- und Haftpflichtversicherung übergeben, mit unbegrenzten Kilometern.",
        "Да. Все автомобили предоставляются с полной страховкой КАСКО и ОСАГО, с неограниченным пробегом.",
      ),
    },
    {
      q: pick(
        "Minimum kiralama süresi nedir?",
        "What's the minimum rental?",
        "Wie lange ist die Mindestmietdauer?",
        "Каков минимальный срок аренды?",
      ),
      a: pick(
        "Minimum 1 gün. Haftalık ve aylık kiralamalarda %15-25 indirim uygulanır.",
        "1 day minimum. Weekly and monthly rentals carry a 15-25% discount.",
        "Mindestens 1 Tag. Bei Wochen- und Monatsmieten gewähren wir 15–25 % Rabatt.",
        "Минимум 1 день. На недельную и месячную аренду действует скидка 15–25 %.",
      ),
    },
    {
      q: pick(
        "Yaş ve ehliyet şartı nedir?",
        "Age and licence requirements?",
        "Welche Anforderungen gelten für Alter und Führerschein?",
        "Какие требования к возрасту и правам?",
      ),
      a: pick(
        "21 yaş ve üzeri, en az 1 yıllık ehliyet sahibi sürücüler kiralama yapabilir. Türk veya uluslararası ehliyet kabul edilir.",
        "Drivers aged 21+ with at least 1 year of driving experience. Turkish or international licences are accepted.",
        "Fahrer ab 21 Jahren mit mindestens einem Jahr Fahrpraxis. Türkische und internationale Führerscheine werden akzeptiert.",
        "Водители от 21 года со стажем не менее 1 года. Принимаются турецкие и международные права.",
      ),
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: t("h1"),
      description: t("metaDesc"),
      provider: { "@type": "LodgingBusiness", name: "bodrumapartvilla.com" },
      areaServed: "Bodrum, Muğla, TR",
      url: `${SITE_URL}/arac-kiralama`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((it) => ({
        "@type": "Question",
        name: it.q,
        acceptedAnswer: { "@type": "Answer", text: it.a },
      })),
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHero
        title={t("h1")}
        subtitle={t("subtitle")}
        badge="Bodrum 2026"
        image="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=2000&q=80"
        crumbs={[{ href: "/", label: pick("Ana Sayfa", "Home", "Startseite", "Главная") }, { label: t("h1") }]}
      />

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_380px]">
          <div className="space-y-4 text-[15px] leading-relaxed text-ink/90">
            <p>{t("intro1")}</p>
            <p>{t("intro2")}</p>
            <p>{t("intro3")}</p>
          </div>
          <aside className="lg:sticky lg:top-20 lg:self-start">
            <InquiryForm
              service="car"
              subjectLine={t("h1")}
              fields={{ date: true, pickup: true, dropoff: true }}
              whatsappNumber={c("whatsappNumber")}
              whatsappTemplate={pick(
                "Merhaba, Bodrum'da araç kiralamak istiyorum.",
                "Hello, I'd like to rent a car in Bodrum.",
                "Guten Tag, ich möchte in Bodrum ein Auto mieten.",
                "Здравствуйте, я хотел бы арендовать автомобиль в Бодруме.",
              )}
            />
          </aside>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container-page">
          <h2 className="text-center">{t("carouselTitle")}</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {classes.map((cl) => {
              const Icon = cl.icon;
              return (
                <article key={cl.title} className="card flex flex-col gap-3 p-5">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-navy-50 text-navy-900">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg">{cl.title}</h3>
                  <p className="text-sm text-muted">{cl.desc}</p>
                  <p className="mt-auto text-sm font-bold text-navy-900">{cl.price}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page max-w-3xl">
          <h2 className="text-center">{t("includedTitle")}</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {inc.map((item, i) => (
              <li key={i} className="flex items-start gap-2 rounded-md border border-[var(--color-border)] bg-white p-3 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container-page max-w-4xl">
          <h2>{pick("Sıkça Sorulanlar", "Frequently Asked Questions", "Häufige Fragen", "Частые вопросы")}</h2>
          <div className="mt-6">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>
    </>
  );
}
