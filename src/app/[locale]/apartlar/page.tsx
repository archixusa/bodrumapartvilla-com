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
      ? `${SITE_URL}/apartlar`
      : `${SITE_URL}/${locale}/apartlar`;
  return {
    title: isTr
      ? "Butik Apart Konaklamaları — Yakında"
      : "Boutique Apartment Stays — Coming Soon",
    description: isTr
      ? "Bodrum merkezi ve yarımadasında ölçülü, butik apart konaklamaları. Koleksiyonumuzun apart bölümü yakında yayımlanmaktadır."
      : "Considered, boutique apartment stays in central Bodrum and around the peninsula. The apartment chapter of our collection arrives shortly.",
    alternates: { canonical: url },
    robots: { index: true, follow: true },
  };
}

export default async function ApartlarPage({
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
      sourcePage="apartlar-coming-soon"
      kicker={
        isTr
          ? "Koleksiyon · Apart Bölümü"
          : "Collection · Apartment Chapter"
      }
      title={
        isTr ? "Butik Apart Konaklamaları" : "Boutique Apartment Stays"
      }
      subtitle={isTr ? "Yakında Sizinle" : "Arriving Soon"}
      description={
        isTr
          ? "Bodrum merkezi ve yarımadasında, ölçülü ve butik karakterini koruyan apart konaklamalardan kurulu, sınırlı bir bölüm hazırlamaktayız. Mülk değerlendirme sürecimiz devam etmekte; ev sahipleri için başvurular açıktır."
          : "We are preparing a small, considered chapter of apartment stays — in central Bodrum and across the peninsula — that hold to a boutique character. Curation is in progress; applications from owners are open."
      }
      ctaPrimaryLabel={
        isTr ? "Konsiyerj ile Görüşün" : "Speak with the Concierge"
      }
      ctaPrimaryHref="/iletisim"
      ctaSecondaryLabel={
        isTr ? "Apartınızı Bizimle Yönetin" : "Entrust Your Apartment to Us"
      }
      ctaSecondaryHref="/evinizi-kiraya-verin"
      philosophyKicker={isTr ? "Felsefemiz" : "Our Philosophy"}
      philosophyTitle={
        isTr
          ? "Küçük mekân, büyük özen."
          : "A modest space deserves no less care."
      }
      philosophyBody={
        isTr
          ? "Bir apart, villadan küçük olduğu için daha az özen gerektirmez. Bodrumapartvilla, apart bölümünü de villa koleksiyonu ile aynı titizlikle kurar; her mekânın karakteri ve konumu, kataloğun değil, koleksiyonun parçasıdır."
          : "An apartment, simply because it is smaller, deserves no less care than a villa. The apartment chapter of Bodrumapartvilla is shaped with the same discipline as the villa collection — every space, every setting, treated as part of the collection rather than the catalogue."
      }
      pillarsKicker={isTr ? "Üç Yaklaşım" : "Three Approaches"}
      pillarsTitle={
        isTr
          ? "Apart için özel düşünülmüş."
          : "Considered for apartment stays."
      }
      pillars={[
        {
          kicker: isTr ? "Seçici Kurasyon" : "Considered Curation",
          title: isTr ? "Seçici Kurasyon" : "Considered Curation",
          body: isTr
            ? "Apart bölümümüze yalnızca mimari karakteri, konumu ve sunduğu konaklama deneyimi koleksiyonun ruhuna uyan mekânlar dahil edilir. Sayı odaklı değil, seçim odaklı; bu, küçük ölçekli her mülk için ayrı bir değerlendirme gerektirir."
            : "Only spaces whose architecture, setting and stay experience match the spirit of the collection are admitted to the apartment chapter. Selection over volume, in each case, calls for an individual review.",
        },
        {
          kicker: isTr ? "Atmosfer Korunması" : "Atmosphere Preserved",
          title: isTr ? "Atmosfer Korunması" : "Atmosphere Preserved",
          body: isTr
            ? "Bir apartın atmosferi, kapısı kapandıktan sonra başlar. Bakım, temizlik ve operasyon süreçlerini, mülkün gündelik karakterine zarar vermeden sürdürecek biçimde planlıyoruz."
            : "An apartment's atmosphere begins behind a closed door. We plan our maintenance, housekeeping and operations so that the daily character of the home is sustained rather than disturbed.",
        },
        {
          kicker: isTr ? "Premium Misafir Profili" : "Considered Guests",
          title: isTr ? "Premium Misafir Profili" : "Considered Guests",
          body: isTr
            ? "Apartlar, çoğu zaman bir villadan daha mahremdir. Misafir profilini bu mahremiyete uygun biçimde değerlendiriyor; konaklamayı paylaşan kişilerle mekânın doğası arasında ölçülü bir uyum kurmaya çalışıyoruz."
            : "Apartments are, often, more intimate than villas. We evaluate enquiries with that intimacy in mind, looking for a measured fit between the people who will share the stay and the temperament of the space.",
        },
      ]}
      newsletter={{
        title: isTr
          ? "Apart bölümü açıldığında bilgi alın."
          : "Be the first to hear when the apartment chapter opens.",
        description: isTr
          ? "Apart bölümümüz koleksiyona eklendiğinde, koleksiyon mektubumuz aracılığıyla sizi bilgilendireceğiz. Sık değil, zamanı geldiğinde yazılır."
          : "We will write to you when the apartment chapter joins the collection — not often, only when there is something to share.",
        placeholder: isTr ? "E-posta adresiniz" : "Your email address",
        cta: isTr ? "Bültene Katıl" : "Join the Letter",
        consentText: isTr
          ? "E-posta adresimin, Bodrumapartvilla koleksiyon bültenine eklenmesini ve apart bölümü ile ilgili bilgi vermek amacıyla işlenmesini kabul ediyorum."
          : "I agree that my email address may be added to the Bodrumapartvilla collection letter and used to inform me about the apartment chapter.",
        successMessage: isTr
          ? "Teşekkür ederiz. Apart bölümü yayımlandığında sizinle iletişime geçeceğiz."
          : "Thank you. We will be in touch when the apartment chapter opens.",
        errorMessage: isTr
          ? "Bir aksaklık oluştu. Lütfen kısa süre sonra tekrar deneyiniz."
          : "Something interrupted the request. Please try again shortly.",
      }}
      conciergeKicker={isTr ? "Konsiyerj" : "Concierge"}
      conciergeTitle={
        isTr
          ? "Birebir görüşmek istersiniz."
          : "Should you prefer to write directly."
      }
      conciergeBody={
        isTr
          ? "Apart bölümümüz için tarihler, özel istekler ya da koleksiyona dair sorularınızı doğrudan konsiyerj ekibimize iletebilirsiniz."
          : "For dates, particular requests, or any question concerning the apartment chapter, you are welcome to write to the concierge."
      }
      conciergeHours={
        isTr
          ? "Görüşme saatleri · Hafta içi 09:00 – 19:00"
          : "Hours · Weekdays 09:00 – 19:00"
      }
    />
  );
}
