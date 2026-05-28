import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Check, Anchor, Calendar, Users, Sun } from "lucide-react";
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
  const t = await getTranslations({ locale, namespace: "boat" });
  const url =
    locale === "tr"
      ? `${SITE_URL}/tekne-kiralama`
      : `${SITE_URL}/${locale}/tekne-kiralama`;
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
  const t = await getTranslations({ locale, namespace: "boat" });
  const c = await getTranslations({ locale, namespace: "common" });
  const L = locale as "tr" | "en" | "de" | "ru";
  const pick = (tr: string, en: string, de: string, ru: string) =>
    ({ tr, en, de, ru } as Record<typeof L, string>)[L] ?? en;

  const types = [
    { title: t("boatType1Title"), desc: t("boatType1Desc"), price: t("boatType1Price"), icon: Sun },
    { title: t("boatType2Title"), desc: t("boatType2Desc"), price: t("boatType2Price"), icon: Anchor },
    { title: t("boatType3Title"), desc: t("boatType3Desc"), price: t("boatType3Price"), icon: Calendar },
    { title: t("boatType4Title"), desc: t("boatType4Desc"), price: t("boatType4Price"), icon: Users },
  ];

  const routes = [t("route1"), t("route2"), t("route3"), t("route4"), t("route5")];

  const faqItems = [
    {
      q: pick(
        "Tekneyi nasıl rezerve ederim?",
        "How do I book a boat?",
        "Wie buche ich ein Boot?",
        "Как забронировать лодку?",
      ),
      a: pick(
        "Sağdaki formu doldurun veya WhatsApp'tan yazın. 1 saat içinde size müsaitlik ve net fiyat teklifi gönderiyoruz.",
        "Fill in the form on the right or message us on WhatsApp. We send availability and a fixed quote within 1 hour.",
        "Füllen Sie das Formular rechts aus oder schreiben Sie uns über WhatsApp. Innerhalb von einer Stunde erhalten Sie Verfügbarkeit und ein festes Angebot.",
        "Заполните форму справа или напишите нам в WhatsApp. В течение часа мы пришлём наличие мест и фиксированную цену.",
      ),
    },
    {
      q: pick(
        "Villada kalan grubumuza özel charter ayarlar mısınız?",
        "Can you arrange a private charter for our villa group?",
        "Organisieren Sie einen privaten Charter für unsere Villengruppe?",
        "Можете ли вы организовать частный чартер для нашей группы на вилле?",
      ),
      a: pick(
        "Evet. Villanızdan tekne iskelesine transfer dahil, şef ve ikram dahil bir paket sunabiliyoruz. Grup büyüklüğünü ve tarihi bildirin, teklif çıkaralım.",
        "Yes. We offer a package with transfer from your villa to the pier, chef and catering included. Share group size and date and we'll quote.",
        "Ja. Wir bieten ein Paket mit Transfer von Ihrer Villa zum Anleger, Koch und Catering inklusive. Nennen Sie uns Gruppengröße und Datum, dann erstellen wir ein Angebot.",
        "Да. Мы предлагаем пакет с трансфером от вашей виллы до причала, шеф-поваром и кейтерингом. Сообщите размер группы и дату — мы подготовим предложение.",
      ),
    },
    {
      q: pick(
        "Hangi günler kalkış olur?",
        "Which days do tours run?",
        "An welchen Tagen finden die Touren statt?",
        "В какие дни проходят туры?",
      ),
      a: pick(
        "Günlük tekne turları haziran-eylül arasında her gün, mayıs-ekim arasında haftada 3-5 gün kalkar. Mavi tur paketleri her gün başlatılabilir.",
        "Daily tours run every day from June to September, and 3-5 days a week from May to October. Blue cruise packages can start any day.",
        "Tagestouren finden von Juni bis September täglich statt, von Mai bis Oktober an 3–5 Tagen pro Woche. Blaue-Reise-Pakete können an jedem Tag beginnen.",
        "Ежедневные туры проходят каждый день с июня по сентябрь и 3–5 дней в неделю с мая по октябрь. Пакеты «Голубого круиза» можно начать в любой день.",
      ),
    },
    {
      q: pick(
        "Çocuklarla katılabilir miyiz?",
        "Can we bring children?",
        "Können wir Kinder mitbringen?",
        "Можно ли взять детей?",
      ),
      a: pick(
        "Evet. Tüm teknelerimizde can yeleği vardır. Bebekler ve çocuklar için özel önlem alıyoruz; lütfen yaşları formda belirtin.",
        "Yes. Life vests are available on all boats. We take special care for infants and children — please note their ages in the form.",
        "Ja. Auf allen Booten sind Rettungswesten vorhanden. Für Säuglinge und Kinder treffen wir besondere Vorkehrungen; bitte geben Sie das Alter im Formular an.",
        "Да. На всех лодках есть спасательные жилеты. Для малышей и детей мы принимаем особые меры — пожалуйста, укажите их возраст в форме.",
      ),
    },
    {
      q: pick(
        "Hava bozarsa ne oluyor?",
        "What happens if the weather is bad?",
        "Was passiert bei schlechtem Wetter?",
        "Что происходит при плохой погоде?",
      ),
      a: pick(
        "Hava koşulları nedeniyle iptal edilen turlarda ücret iade edilir veya başka bir güne kaydırılır. Karar kaptanın güvenlik değerlendirmesine göre verilir.",
        "If a tour is cancelled due to weather, you'll get a full refund or a free reschedule. The captain's safety assessment is final.",
        "Wird eine Tour wegen des Wetters abgesagt, erhalten Sie eine volle Erstattung oder eine kostenlose Umbuchung. Maßgeblich ist die Sicherheitseinschätzung des Kapitäns.",
        "Если тур отменён из-за погоды, вы получаете полный возврат или бесплатный перенос. Решение принимается по оценке безопасности капитана.",
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
      url: `${SITE_URL}/tekne-kiralama`,
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
        image="https://images.unsplash.com/photo-1500627964684-141351970a7f?auto=format&fit=crop&w=2000&q=80"
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
              service="boat"
              subjectLine={t("h1")}
              fields={{ date: true, people: true }}
              whatsappNumber={c("whatsappNumber")}
              whatsappTemplate={pick(
                "Merhaba, Bodrum'da tekne kiralamak istiyorum.",
                "Hello, I'd like to rent a boat in Bodrum.",
                "Guten Tag, ich möchte in Bodrum ein Boot mieten.",
                "Здравствуйте, я хотел бы арендовать лодку в Бодруме.",
              )}
            />
          </aside>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container-page">
          <h2 className="text-center">{t("carouselTitle")}</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {types.map((type) => {
              const Icon = type.icon;
              return (
                <article key={type.title} className="card flex flex-col gap-3 p-5">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-navy-50 text-navy-900">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg">{type.title}</h3>
                  <p className="text-sm text-muted">{type.desc}</p>
                  <p className="mt-auto text-sm font-bold text-navy-900">{type.price}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page max-w-3xl">
          <h2 className="text-center">{t("popularRoutesTitle")}</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {routes.map((route, i) => (
              <li key={i} className="flex items-start gap-2 rounded-md border border-[var(--color-border)] bg-white p-3 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                <span>{route}</span>
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
