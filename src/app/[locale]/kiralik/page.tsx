import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ComingSoonCollection } from "@/components/ComingSoonCollection";

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
    locale === "tr"
      ? `${SITE_URL}/kiralik`
      : `${SITE_URL}/${locale}/kiralik`;
  return {
    title: isTr
      ? "Konaklama Koleksiyonu — Yakında"
      : "Stay Collection — Coming Soon",
    description: isTr
      ? "Bodrum yarımadasında butik konaklama. Koleksiyonumuz yakında yayımlanıyor; konsiyerj hattımız her zaman açıktır."
      : "Boutique stays across the Bodrum peninsula. Our collection arrives soon; the concierge line remains open in the meantime.",
    alternates: { canonical: url },
    robots: { index: true, follow: true },
  };
}

export default async function KiralikPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = await getTranslations({ locale, namespace: "common" });
  const isTr = locale === "tr";

  return (
    <ComingSoonCollection
      locale={locale}
      whatsappNumber={c("whatsappNumber")}
      whatsappDisplay={c("phoneDisplay")}
      email={c("email")}
      sourcePage="kiralik-coming-soon"
      kicker={isTr ? "Koleksiyon · Hazırlık" : "Collection · In Preparation"}
      title={isTr ? "Konaklama Koleksiyonu" : "Our Stay Collection"}
      subtitle={
        isTr ? "Önümüzdeki sezona doğru" : "Toward the coming season"
      }
      description={
        isTr
          ? "Bodrum yarımadasında, az sayıda ve özenli bir konaklama koleksiyonu hazırlıyoruz. Mülk değerlendirme süreçlerimiz sürmekte; misafirler için kısa süre içinde tanışma, mülk sahipleri için başvurular ise bugün açıktır."
          : "We are preparing a small, considered collection of stays across the Bodrum peninsula. Curation is ongoing; introductions to guests will follow shortly, while applications from owners remain open today."
      }
      ctaPrimaryLabel={
        isTr ? "Konsiyerj ile Görüşün" : "Speak with the Concierge"
      }
      ctaPrimaryHref="/iletisim"
      ctaSecondaryLabel={
        isTr ? "Villanızı Değerlendirelim" : "Entrust Your Property to Us"
      }
      ctaSecondaryHref="/evinizi-kiraya-verin"
      philosophyKicker={isTr ? "Yaklaşım" : "Approach"}
      philosophyTitle={
        isTr ? "Hazırlığın değeri." : "The value of preparing well."
      }
      philosophyBody={
        isTr
          ? "Bir konaklamayı hazırlamak, listelemekten farklı bir iştir. Bodrumapartvilla, koleksiyonuna katacağı her mülkü, kapı açılmadan önceki haftalarda titizce inceler; misafire ulaşan deneyim, bu sessiz çalışmanın sonucudur."
          : "Preparing a stay is a different matter from listing one. At Bodrumapartvilla, every property that joins the collection passes through weeks of quiet, careful review before its door opens to a guest; what reaches them is the result of that unseen work."
      }
      pillarsKicker={isTr ? "Üç İlke" : "Three Principles"}
      pillarsTitle={
        isTr ? "Konaklama bir bütün." : "A stay, considered as a whole."
      }
      pillars={[
        {
          kicker: isTr ? "Seçici Kurasyon" : "Considered Curation",
          title: isTr ? "Seçici Kurasyon" : "Considered Curation",
          body: isTr
            ? "Mülkleri hızlı değil, doğru zamanda dahil ederiz. Koleksiyon, listeyi büyütmek için değil, anlamlı bir konaklama dizisi kurmak için inşa edilir; bu, her mülke ayrılan değerlendirme süresine yansır."
            : "We add properties in their time, not at speed. The collection is built to compose a meaningful sequence of stays, not to enlarge a list — a discipline reflected in the review time we give each home.",
        },
        {
          kicker: isTr ? "Atmosfer Korunması" : "Atmosphere Preserved",
          title: isTr ? "Atmosfer Korunması" : "Atmosphere Preserved",
          body: isTr
            ? "Bir mülkün karakterini operasyonel süreç içinde kaybetmesi, bizim için kabul edilemez. Bakım, temizlik ve misafir akışı; sahip olunan atmosferi yormak yerine onu sürdürecek biçimde kurgulanır."
            : "Losing a property's character to the rhythm of operations is, to us, unacceptable. Maintenance, housekeeping and guest flow are arranged to sustain its atmosphere, never to wear it down.",
        },
        {
          kicker: isTr ? "Premium Misafir Profili" : "Considered Guests",
          title: isTr ? "Premium Misafir Profili" : "Considered Guests",
          body: isTr
            ? "Her rezervasyon talebi, koleksiyonun bir parçasıdır. Mülk sahibinin emanetine karşılık olacak biçimde değerlendirilir; konaklamanın atmosferi ve misafirin beklentisi arasında uygun bir denge kurulur."
            : "Every enquiry is treated as part of the collection. We weigh it against the trust placed in us by the owner, and we look to align the rhythm of each stay with the temperament of the guest who will occupy it.",
        },
      ]}
      newsletter={{
        title: isTr
          ? "Koleksiyon yayımlandığında bilgi alın."
          : "Hear from us when the collection opens.",
        description: isTr
          ? "Koleksiyon yayımlandığında, koleksiyon mektubumuz aracılığıyla bilgi alabilirsiniz. Mektup, sık değil zamanı geldiğinde yazılır."
          : "When the collection opens, we will write to you. The letter is sent only when there is something to say.",
        placeholder: isTr ? "E-posta adresiniz" : "Your email address",
        cta: isTr ? "Bültene Katıl" : "Join the Letter",
        consentText: isTr
          ? "E-posta adresimin, Bodrumapartvilla koleksiyon bültenine eklenmesini ve koleksiyon yayımlandığında bilgi vermek amacıyla işlenmesini kabul ediyorum."
          : "I agree that my email address may be added to the Bodrumapartvilla collection letter and used to inform me when the collection opens.",
        successMessage: isTr
          ? "Teşekkür ederiz. Koleksiyon yayımlandığında sizinle iletişime geçeceğiz."
          : "Thank you. We will be in touch when the collection opens.",
        errorMessage: isTr
          ? "Bir aksaklık oluştu. Lütfen kısa süre sonra tekrar deneyiniz."
          : "Something interrupted the request. Please try again shortly.",
      }}
      conciergeKicker={isTr ? "Konsiyerj" : "Concierge"}
      conciergeTitle={
        isTr
          ? "Sorularınız için doğrudan ulaşın."
          : "For questions, write directly."
      }
      conciergeBody={
        isTr
          ? "Tarihler, özel istekler ya da koleksiyonumuza dair her tür soru için konsiyerj ekibimize WhatsApp veya e-posta yoluyla ulaşabilirsiniz."
          : "For dates, particular requests or any question concerning the collection, you are welcome to write to the concierge by WhatsApp or by email."
      }
      conciergeHours={
        isTr
          ? "Görüşme saatleri · Hafta içi 09:00 – 19:00"
          : "Hours · Weekdays 09:00 – 19:00"
      }
    />
  );
}
