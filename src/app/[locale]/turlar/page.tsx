import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Sailboat, Waves, Mountain, Landmark } from "lucide-react";
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
  const t = await getTranslations({ locale, namespace: "tours" });
  const url =
    locale === "tr"
      ? `${SITE_URL}/turlar`
      : `${SITE_URL}/${locale}/turlar`;
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
  const t = await getTranslations({ locale, namespace: "tours" });
  const c = await getTranslations({ locale, namespace: "common" });
  const L = locale as "tr" | "en" | "de" | "ru";
  const pick = (tr: string, en: string, de: string, ru: string) =>
    ({ tr, en, de, ru } as Record<typeof L, string>)[L] ?? en;

  const tours = [
    { title: t("tour1Title"), desc: t("tour1Desc"), price: t("tour1Price"), icon: Sailboat },
    { title: t("tour2Title"), desc: t("tour2Desc"), price: t("tour2Price"), icon: Waves },
    { title: t("tour3Title"), desc: t("tour3Desc"), price: t("tour3Price"), icon: Mountain },
    { title: t("tour4Title"), desc: t("tour4Desc"), price: t("tour4Price"), icon: Landmark },
  ];

  const faqItems = [
    {
      q: pick(
        "Turlar her gün düzenleniyor mu?",
        "Are tours daily?",
        "Finden die Touren täglich statt?",
        "Туры проводятся каждый день?",
      ),
      a: pick(
        "Çoğu tur haziran-eylül arası her gün, mayıs-ekim arası haftada 3-5 gün düzenlenir. Dalış ve antik kent turları havaya göre değişebilir.",
        "Most tours run daily from June to September and 3-5 days a week from May to October. Diving and ancient-city tours may shift with weather.",
        "Die meisten Touren finden von Juni bis September täglich statt, von Mai bis Oktober an 3–5 Tagen pro Woche. Tauch- und Antikstädte-Touren können sich je nach Wetter verschieben.",
        "Большинство туров проходят ежедневно с июня по сентябрь и 3–5 дней в неделю с мая по октябрь. Дайвинг и поездки в античные города могут зависеть от погоды.",
      ),
    },
    {
      q: pick(
        "Villada kalan büyük grup için tur özelleştirilebilir mi?",
        "Can a tour be customised for a large villa group?",
        "Lässt sich eine Tour für eine große Villengruppe anpassen?",
        "Можно ли организовать тур для большой группы на вилле?",
      ),
      a: pick(
        "Evet. Bir araç veya tekneyi tamamen sizin için ayırıp rotanızı isteklerinize göre kurgulayabiliriz.",
        "Yes. We can dedicate a vehicle or boat fully to your group and design the route to your wishes.",
        "Ja. Wir können ein Fahrzeug oder Boot ganz Ihrer Gruppe vorbehalten und die Route nach Ihren Wünschen gestalten.",
        "Да. Мы можем выделить автомобиль или лодку только для вашей группы и составить маршрут по вашим пожеланиям.",
      ),
    },
    {
      q: pick(
        "Tur fiyatına neler dahil?",
        "What's included in the tour price?",
        "Was ist im Tourpreis enthalten?",
        "Что входит в стоимость тура?",
      ),
      a: pick(
        "Ulaşım, öğle yemeği, rehber ve sigorta dahil. Müze giriş ücreti bazı turlar için ekstra.",
        "Transport, lunch, guide and insurance are included. Museum entry fees are extra for some tours.",
        "Transport, Mittagessen, Reiseleitung und Versicherung sind inbegriffen. Museumseintritt fällt bei einigen Touren zusätzlich an.",
        "Включены транспорт, обед, гид и страховка. Входные билеты в музеи для некоторых туров оплачиваются отдельно.",
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
      url: `${SITE_URL}/turlar`,
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
        image="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=2000&q=80"
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
              service="tour"
              subjectLine={t("h1")}
              fields={{ date: true, people: true }}
              whatsappNumber={c("whatsappNumber")}
              whatsappTemplate={pick(
                "Merhaba, Bodrum turları hakkında bilgi almak istiyorum.",
                "Hello, I'd like info on Bodrum tours.",
                "Guten Tag, ich hätte gern Informationen zu Bodrum-Touren.",
                "Здравствуйте, я хотел бы узнать о турах по Бодруму.",
              )}
            />
          </aside>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container-page">
          <h2 className="text-center">{t("carouselTitle")}</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {tours.map((tt) => {
              const Icon = tt.icon;
              return (
                <article key={tt.title} className="card flex flex-col gap-3 p-5">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-navy-50 text-navy-900">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg">{tt.title}</h3>
                  <p className="text-sm text-muted">{tt.desc}</p>
                  <p className="mt-auto text-sm font-bold text-navy-900">{tt.price}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
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
