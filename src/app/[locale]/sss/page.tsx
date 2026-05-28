import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
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
  const isTr = locale === "tr";
  const url =
    locale === "tr" ? `${SITE_URL}/sss` : `${SITE_URL}/${locale}/sss`;
  return {
    title: isTr
      ? "Sıkça Sorulan Sorular — Bodrumapartvilla"
      : "Frequently Asked Questions — Bodrumapartvilla",
    description: isTr
      ? "Bodrumapartvilla koleksiyonu, konsiyerj hizmetleri, misafir profili ve villa kabul süreçlerine ilişkin sıkça sorulan sorular."
      : "Frequently asked questions about the Bodrumapartvilla collection, concierge service, guest profile and how villas are admitted.",
    alternates: { canonical: url },
  };
}

function getItems(isTr: boolean) {
  if (isTr) {
    return [
      {
        q: "Villa seçim kriterleriniz nelerdir?",
        a: "Koleksiyonumuzu kurarken yalnızca konum ve görsel çekiciliğe değil; mimari bütünlük, malzeme kalitesi, peyzaj olgunluğu, mahremiyet derecesi ve mülk sahibinin işletme disiplinine de bakarız. Her villa, yerinde görülmeden ve operasyon ekibimizce ayrı ayrı değerlendirilmeden kabul edilmez. Beğeni öznel olsa da süreç ölçülü ve tutarlıdır.",
      },
      {
        q: "Konsiyerj hizmeti ne kapsar?",
        a: "Konsiyerj ekibimiz; ön görüşme, villa eşleştirmesi, müsaitlik teyidi, özel taleplerin koordinasyonu, varış-ayrılış akışı ve konaklama boyunca süren günlük iletişimi kapsar. Talep gelmediği sürece misafire müdahale edilmez; ihtiyaç doğduğunda ise tek bir kanaldan, tutarlı bir muhatap üzerinden çözüm aranır.",
      },
      {
        q: "Özel istekleri nasıl iletebilirim?",
        a: "Konaklama talebi formunuzda ya da konsiyerj görüşmesinin herhangi bir aşamasında özel isteklerinizi yazılı olarak paylaşabilirsiniz. Pazar günü kahvaltısı, doğum günü düzenlemesi, çocuklara özel donanım, diyet hassasiyeti gibi her ayrıntı ayrı bir not olarak kayda alınır ve villa ekibiyle önceden eşgüdüm hâline getirilir.",
      },
      {
        q: "Misafir profili kontrolü yapılıyor mu?",
        a: "Evet. Koleksiyonumuzdaki villalar, mülk sahipleriyle paylaştığımız emanet ilişkisinin doğal bir parçası olarak misafir profili değerlendirmesine tabidir. Bu değerlendirme; rezervasyon talebinin amacı, konaklayan grup yapısı ve geçmiş referanslar gözetilerek yapılır. Amacı reddetmek değil, doğru villayı doğru misafirle eşleştirmektir.",
      },
      {
        q: "Minimum konaklama süresi var mı?",
        a: "Çoğu villa için yüksek sezonda asgari beş gece konaklama uygulanır; bazı özellikli villalarda ise haftalık konaklama esastır. Düşük sezon ve özel dönemler için minimum süre, teyit aşamasında açıkça paylaşılır. Bu yaklaşımın amacı; villanın hazırlık, devir ve operasyon ritmini misafirin deneyim akışıyla uyumlu tutmaktır.",
      },
      {
        q: "Özel etkinlikler için villa kiralanabilir mi?",
        a: "Belirli villalar; özel kutlama, küçük ölçekli toplantı, fotoğraf çekimi veya yıldönümü gibi etkinliklere ev sahipliği yapabilir. Bu tür talepler standart konaklamadan ayrı değerlendirilir; mülk sahibinin onayı, etkinlik düzeni ve komşu mahremiyetine ilişkin kurallar netleştirildikten sonra teyit edilir.",
      },
      {
        q: "Villalarda ek hizmetler var mı (özel şef, transfer)?",
        a: "Talep üzerine; özel şef, sommelier, çocuk bakımı, masaj terapisti, havalimanı transferi, tekne charter ve günübirlik şoför hizmetleri organize edilir. Bu hizmetler, koleksiyonumuza ait değildir; uzun süredir birlikte çalıştığımız, ölçütlerimizi paylaşan tedarikçiler aracılığıyla kurgulanır.",
      },
      {
        q: "Atmosfer korunması ne demektir?",
        a: "Atmosfer; villanın mimarisi, bahçesi, manzarası, sessizliği ve ev sahibi ile misafir arasındaki ölçü duygusudur. Bunu korumak; villa kapasitesinin üzerine çıkmamak, gürültüyü taşırmamak, mahremiyeti ihlal etmemek ve evi olduğundan farklı bir mekâna dönüştürmemek anlamına gelir. Misafirimizden bu çerçeveye nazikçe katılmasını rica ederiz.",
      },
      {
        q: "Premium misafir profili kimi tanımlar?",
        a: "Premium misafir, lüksten önce ölçüyü, gürültüden önce sessizliği önemseyen kişidir. Konuyu mekâna değil deneyime taşır; ev sahibinin emanetine değer verir; konsiyerj ekibiyle açık ve saygılı bir diyalog kurar. Servis beklentisi yüksek ama talep dili sade olan misafir profili, koleksiyonumuza en iyi uyum gösterir.",
      },
      {
        q: "Koleksiyonunuza villa nasıl katılır?",
        a: "Mülk sahipleri, “Villanızı Değerlendirelim” sayfası üzerinden ya da konsiyerj ekibimize doğrudan yazarak başvurabilir. Başvuruyu; villanın mimari niteliği, konumu, donanımı ve mülk sahibinin işletme disiplinini gözeten kısa bir değerlendirme süreci izler. Yerinde görüş, fotoğraf belgesi ve karşılıklı beklentinin yazıya dökülmesi şarttır; kabul tek taraflı bir karar değildir.",
      },
    ];
  }
  return [
    {
      q: "What are your criteria for admitting a villa?",
      a: "We look beyond location and visual appeal to architectural integrity, material quality, the maturity of the landscape, the degree of privacy and the discipline with which the owner runs the property. No villa enters the collection without an on-site visit and an internal review by our operations team. Taste is personal, but the process is measured and consistent.",
    },
    {
      q: "What does the concierge service cover?",
      a: "The concierge handles initial conversation, villa matching, availability confirmation, the coordination of particular requests, arrival and departure rhythm and day-to-day communication throughout the stay. We do not interfere unless asked; when needed, a single point of contact carries the question through to a quiet resolution.",
    },
    {
      q: "How do I share particular requests?",
      a: "Requests can be written in the enquiry form or at any stage of the conversation with the concierge. A Sunday breakfast, a birthday set-up, a special arrangement for children or a dietary preference is kept as a separate note and coordinated with the villa team in advance.",
    },
    {
      q: "Do you screen guest profiles?",
      a: "We do. The villas in our collection are part of a trust relationship with their owners, and a profile review is a natural part of that relationship. We consider the intent of the stay, the composition of the group and references where available. The aim is not to refuse, but to match the right villa with the right guest.",
    },
    {
      q: "Is there a minimum-stay rule?",
      a: "Most villas require a five-night minimum during high season; certain properties are offered on a weekly basis only. Minimum-stay rules for low season and special periods are stated openly at confirmation. The intent is to keep the rhythm of preparation, turnover and operation aligned with a guest&apos;s own experience.",
    },
    {
      q: "Can a villa be rented for a private event?",
      a: "Certain villas may host private celebrations, small gatherings, photo shoots or anniversaries. These requests are reviewed separately from standard stays — only after the owner&apos;s approval, the proposed set-up and clear rules concerning neighbour privacy are agreed in writing.",
    },
    {
      q: "Are additional services available (private chef, transfers)?",
      a: "On request, we arrange a private chef, sommelier, childcare, massage therapist, airport transfer, boat charter or day driver. These services are not part of our own offering; they are built with longstanding partners who share our standards.",
    },
    {
      q: "What does &quot;protecting the atmosphere&quot; mean?",
      a: "Atmosphere is the sum of a villa&apos;s architecture, garden, outlook, quietness and the sense of measure between host and guest. Protecting it means staying within capacity, keeping noise within bounds, respecting privacy and not turning the house into something other than what it is. We invite our guests to share that frame, gently.",
    },
    {
      q: "Who is the premium guest profile?",
      a: "A premium guest values measure over excess and quiet over noise. The focus is the experience rather than the venue; the owner&apos;s trust is treated with care; the conversation with the concierge is clear and respectful. A guest whose service expectations are high but whose voice remains restrained fits the collection best.",
    },
    {
      q: "How does a villa join the collection?",
      a: "Owners can write to us through the &quot;Entrust Your Villa&quot; page or directly to the concierge. A short review follows, weighing architectural quality, location, equipment and the discipline of the owner&apos;s operation. An on-site visit, a photographic record and a written exchange of mutual expectations are essential; admission is never a one-sided decision.",
    },
  ];
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isTr = locale === "tr";

  const items = getItems(isTr);

  const url = locale === "tr" ? `${SITE_URL}/sss` : `${SITE_URL}/${locale}/sss`;

  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url,
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };

  return (
    <article className="pt-32 pb-24 md:pt-40 md:pb-32">
      <JsonLd data={ld} />
      <div className="container-page max-w-4xl">
        <header>
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.32em] text-accent-600">
            {isTr ? "Sıkça Sorulan Sorular" : "Frequently Asked"}
          </p>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-5xl">
            {isTr
              ? "Sıkça Sorulan Sorular"
              : "Frequently Asked Questions"}
          </h1>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted">
            {isTr
              ? "Koleksiyonumuza, konsiyerj akışına ve villa kabul süreçlerine ilişkin merak edilenleri burada topladık. Listede yer almayan bir konu için konsiyerj ekibimize yazabilirsiniz."
              : "Common questions about the collection, the concierge flow and how a villa is admitted. For anything not addressed here, write to the concierge."}
          </p>
          <div className="editorial-divider mt-8 max-w-xs" />
        </header>
        <div className="mt-12">
          <FAQ items={items} />
        </div>
      </div>
    </article>
  );
}
