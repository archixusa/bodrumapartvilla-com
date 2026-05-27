import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://bodrumapartvilla.com";

const VILLA_FAQ_TR: { q: string; a: string }[] = [
  {
    q: "Villalarınızı nasıl seçiyorsunuz?",
    a: "Her villayı bireysel olarak ziyaret eder; mimari niteliği, manzara açıklığı, bakım standardı ve mülk sahibinin yaklaşımı üzerinden değerlendiririz. Koleksiyonumuza sayı için değil, seçim için ekleme yaparız.",
  },
  {
    q: "Rezervasyon süreci nasıl ilerler?",
    a: "Tarihlerinizi paylaşmanızın ardından konsiyerj ekibimiz size uygun villaları sunar. Onay sonrası kapora ile rezervasyon kilitlenir; bakiyeyi giriş öncesinde tamamlarsınız.",
  },
  {
    q: "Konsiyerj hizmeti ne kapsıyor?",
    a: "Havalimanı karşılaması, alışveriş hazırlığı, özel şef, dadı, tekne charter, masaj ve günlük geziler dahil — konaklamanız boyunca her isteğinizi koordine ederiz.",
  },
  {
    q: "Hangi bölgelerde villa kiralayabilirim?",
    a: "Yalıkavak, Türkbükü, Gündoğan, Bitez, Göltürkbükü, Ortakent ve Turgutreis dahil Bodrum yarımadasının seçili bölgelerinde villalarımız bulunuyor.",
  },
  {
    q: "Minimum kalış süresi var mı?",
    a: "Yüksek sezonda villalarda standart minimum kalış 7 gecedir; düşük sezonda ve özel taleplerde daha kısa konaklamalar için esneklik gösterebiliyoruz.",
  },
  {
    q: "Villalar tam donanımlı mı geliyor?",
    a: "Her villa nevresim, havlu, mutfak gereçleri ve banyo malzemeleriyle giriş için hazır teslim edilir. Villa içi temizlik ve havuz bakımı haftalık olarak yapılır.",
  },
  {
    q: "İptal ve değişiklik koşulları nelerdir?",
    a: "Giriş tarihinden 45 gün öncesine kadar tam iade, 45–30 gün arası %50 iade uygulanır. Tarih değişiklikleri müsaitlik dahilinde ücretsiz işlenir.",
  },
  {
    q: "Evcil hayvan kabul ediliyor mu?",
    a: "Bazı villalarda — mülk sahibinin onayıyla — evcil hayvan kabul ediyoruz. Talebinizi rezervasyon öncesinde bizimle paylaşmanız yeterli.",
  },
  {
    q: "Etkinlik ya da düğün için villa kiralanabilir mi?",
    a: "Seçili villalarımız özel etkinliklere uygundur. Misafir sayısı ve kapsama göre özel teklif hazırlıyor, koordinasyonu konsiyerj ekibimiz üstleniyor.",
  },
  {
    q: "Ödeme yöntemleri nelerdir?",
    a: "EUR/USD/TRY havale, kredi kartı ve uluslararası kartlarla ödeme kabul ediyoruz. Tüm rezervasyonlar onay e-postası ve dijital sözleşmeyle belgelenir.",
  },
];

const VILLA_FAQ_EN: { q: string; a: string }[] = [
  {
    q: "How do you choose the villas in your collection?",
    a: "We visit each villa in person and assess architectural quality, the openness of its outlook, standard of upkeep and the owner's approach. Additions are by selection, never by volume.",
  },
  {
    q: "How does the reservation process work?",
    a: "Once you share your dates the concierge presents suitable villas. After approval, a deposit secures the booking and the balance is settled before arrival.",
  },
  {
    q: "What does the concierge service include?",
    a: "Airport welcome, grocery preparation, private chef, nanny, boat charter, in-villa massage and excursions — we coordinate every request throughout your stay.",
  },
  {
    q: "Which districts do you cover?",
    a: "Our villas are located across selected parts of the Bodrum peninsula, including Yalıkavak, Türkbükü, Gündoğan, Bitez, Göltürkbükü, Ortakent and Turgutreis.",
  },
  {
    q: "Is there a minimum length of stay?",
    a: "In high season the standard minimum is seven nights for villas. In shoulder and low seasons, and for particular requests, we can accommodate shorter stays.",
  },
  {
    q: "Are the villas fully equipped on arrival?",
    a: "Each villa is delivered ready to live in — linen, towels, kitchenware and bathroom essentials are in place. Housekeeping and pool maintenance run weekly.",
  },
  {
    q: "What are the cancellation and amendment terms?",
    a: "Full refund up to 45 days before arrival; 50% refund between 45 and 30 days. Date changes are processed at no charge subject to availability.",
  },
  {
    q: "Do you accept pets?",
    a: "In selected villas — with the owner's prior approval — pets are welcome. Please mention your wish at the time of enquiry.",
  },
  {
    q: "Can a villa be reserved for an event or wedding?",
    a: "Several villas are suited to private events. We prepare a bespoke proposal based on guest numbers and scope, with the concierge handling coordination throughout.",
  },
  {
    q: "Which payment methods are accepted?",
    a: "EUR/USD/TRY bank transfer, domestic and international card payments. Every reservation is confirmed by email and a digital agreement.",
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isTr = locale === "tr";
  const url = locale === "tr" ? `${SITE_URL}/sss` : `${SITE_URL}/${locale}/sss`;
  return {
    title: isTr ? "Sıkça Sorulan Sorular" : "Frequently Asked Questions",
    description: isTr
      ? "Bodrumapartvilla villa rezervasyonu, konsiyerj hizmeti ve konaklama koşulları hakkında en sık sorulan sorular."
      : "Common questions on Bodrumapartvilla villa reservations, concierge service and stay conditions.",
    alternates: { canonical: url },
    robots: { index: true, follow: true },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const h = await getTranslations({ locale, namespace: "home" });
  const isTr = locale === "tr";

  const items = isTr ? VILLA_FAQ_TR : VILLA_FAQ_EN;

  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };

  return (
    <section className="section">
      <JsonLd data={ld} />
      <div className="container-page max-w-4xl">
        <h1>{h("faqTitle")}</h1>
        <div className="mt-6">
          <FAQ items={items} />
        </div>
      </div>
    </section>
  );
}
