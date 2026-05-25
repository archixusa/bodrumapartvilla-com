import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Check, Plane } from "lucide-react";
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
  const t = await getTranslations({ locale, namespace: "transfer" });
  const url =
    locale === "tr"
      ? `${SITE_URL}/vip-transfer`
      : `${SITE_URL}/${locale}/vip-transfer`;
  return {
    title: t("metaTitle"),
    description: t("metaDesc"),
    alternates: { canonical: url },
    openGraph: { title: t("metaTitle"), description: t("metaDesc"), url },
  };
}

const VEHICLE_IMAGES: Record<string, string> = {
  v1: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
  v2: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80",
  v3: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80",
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "transfer" });
  const c = await getTranslations({ locale, namespace: "common" });
  const isTr = locale === "tr";

  const vehicles = [
    { id: "v1", title: t("vehicle1Title"), desc: t("vehicle1Desc"), img: VEHICLE_IMAGES.v1 },
    { id: "v2", title: t("vehicle2Title"), desc: t("vehicle2Desc"), img: VEHICLE_IMAGES.v2 },
    { id: "v3", title: t("vehicle3Title"), desc: t("vehicle3Desc"), img: VEHICLE_IMAGES.v3 },
  ];

  const inc = [t("inc1"), t("inc2"), t("inc3"), t("inc4"), t("inc5"), t("inc6")];

  const faqItems = [
    {
      q: isTr ? "Transfer fiyatlarınız sabit mi?" : "Are your transfer prices fixed?",
      a: isTr
        ? "Evet, bölgeye göre sabit. Rezervasyon sırasında size net teklif gönderiyoruz. Gece veya tatil ek ücreti yoktur."
        : "Yes, fixed by district. We send a clear quote when you book. No night or holiday surcharges.",
    },
    {
      q: isTr ? "Uçağım gecikirse ek ücret alır mısınız?" : "Will you charge extra if my flight is late?",
      a: isTr
        ? "Hayır. Şoförlerimiz uçuş takibi yapar; iniş gecikirse villaya/aparta hareket saatini ona göre ayarlar, ek ücret almaz."
        : "No. Our drivers track flights — if the landing is delayed, they adjust without extra charge.",
    },
    {
      q: isTr ? "Bebek koltuğu var mı?" : "Is a child seat available?",
      a: isTr
        ? "Evet, talep üzerine ücretsiz olarak hazırlanır. Rezervasyon notuna bebek yaşını eklemeniz yeterli."
        : "Yes, free on request. Just add your child's age in the booking notes.",
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
      url: `${SITE_URL}/vip-transfer`,
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
        image="https://images.unsplash.com/photo-1545262810-77515befe149?auto=format&fit=crop&w=2000&q=80"
        crumbs={[{ href: "/", label: isTr ? "Ana Sayfa" : "Home" }, { label: t("h1") }]}
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
              service="transfer"
              subjectLine={t("h1")}
              fields={{ date: true, people: true, pickup: true, dropoff: true }}
              whatsappNumber={c("whatsappNumber")}
              whatsappTemplate={
                isTr
                  ? "Merhaba, Milas-Bodrum Havalimanı'ndan VIP transfer rezerve etmek istiyorum."
                  : "Hello, I'd like to book a VIP transfer from Milas-Bodrum Airport."
              }
            />
          </aside>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container-page">
          <h2 className="text-center">{t("vehicleTitle")}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {vehicles.map((v) => (
              <article key={v.id} className="card flex flex-col overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image src={v.img} alt={v.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-col gap-2 p-5">
                  <div className="flex items-center gap-2">
                    <Plane className="h-4 w-4 text-navy-600" />
                    <h3 className="text-lg">{v.title}</h3>
                  </div>
                  <p className="text-sm text-muted">{v.desc}</p>
                </div>
              </article>
            ))}
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
          <h2>{isTr ? "Sıkça Sorulanlar" : "Frequently Asked Questions"}</h2>
          <div className="mt-6">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>
    </>
  );
}
