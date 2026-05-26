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
      ? `${SITE_URL}/villalar`
      : `${SITE_URL}/${locale}/villalar`;
  return {
    title: isTr
      ? "Butik Villa Koleksiyonumuz — Yakında"
      : "Our Boutique Villa Collection — Coming Soon",
    description: isTr
      ? "Bodrum'un farklı köşelerinden özenle seçilmiş, sınırlı sayıda villa konaklama deneyimi. Mülk değerlendirme sürecimiz devam etmektedir."
      : "A small, considered collection of villas across the Bodrum peninsula. Curation is in progress; submissions are open to interested owners.",
    alternates: { canonical: url },
    robots: { index: true, follow: true },
  };
}

export default async function VillalarPage({
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
      sourcePage="villalar-coming-soon"
      kicker={isTr ? "Koleksiyon · Yakında" : "Collection · Coming Soon"}
      title={
        isTr ? "Butik Villa Koleksiyonumuz" : "Our Boutique Villa Collection"
      }
      subtitle={isTr ? "Yakında Sizinle" : "Arriving Soon"}
      description={
        isTr
          ? "Bodrum'un farklı köşelerinden özenle seçilmiş, sınırlı sayıda villa konaklama deneyimi. Mülk değerlendirme süreçlerimiz devam etmekte, koleksiyonumuza katılmak isteyen mülk sahipleri için başvurular açıktır."
          : "A small, considered collection of villas drawn from quieter corners of the Bodrum peninsula. Our curation process is ongoing; applications remain open to owners who wish to join the collection."
      }
      ctaPrimaryLabel={
        isTr ? "Konsiyerj ile Görüşün" : "Speak with the Concierge"
      }
      ctaPrimaryHref="/iletisim"
      ctaSecondaryLabel={
        isTr ? "Villanızı Bizimle Yönetin" : "Entrust Your Villa to Us"
      }
      ctaSecondaryHref="/evinizi-kiraya-verin"
      philosophyKicker={isTr ? "Felsefemiz" : "Our Philosophy"}
      philosophyTitle={
        isTr ? "Sayı değil, seçim." : "Selection, not scale."
      }
      philosophyBody={
        isTr
          ? "Bodrumapartvilla, sayı değil seçim odaklıdır. Her villa, mimarisi, konumu ve sunduğu atmosferle değerlendirilir. Misafirlerimiz için butik bir koleksiyon, mülk sahiplerimiz için titiz bir ortaklık önerir."
          : "Bodrumapartvilla works by selection rather than scale. Each villa is judged on its architecture, its setting and the atmosphere it sustains. The result, for our guests, is a boutique collection — and, for our owners, a considered partnership."
      }
      pillarsKicker={isTr ? "Yaklaşımımız" : "Our Approach"}
      pillarsTitle={
        isTr
          ? "Üç ilke, tek bir anlayış."
          : "Three principles, a single sensibility."
      }
      pillars={[
        {
          kicker: isTr ? "Seçici Kurasyon" : "Considered Curation",
          title: isTr ? "Seçici Kurasyon" : "Considered Curation",
          body: isTr
            ? "Her villa, bireysel olarak değerlendirilir. Mimari karakteri, konumunun karşılığı ve misafire sunduğu deneyim önceliğimizdir. Koleksiyona dahil olan mülk, kataloğumuzu büyütmek için değil, anlamlı bir seçim olduğu için yer alır."
            : "Each villa is reviewed individually. We weigh its architecture, the truth of its location and the kind of stay it offers a guest. A property joins the collection because it adds meaning to it — not because it adds inventory.",
        },
        {
          kicker: isTr ? "Atmosfer Korunması" : "Atmosphere Preserved",
          title: isTr ? "Atmosfer Korunması" : "Atmosphere Preserved",
          body: isTr
            ? "Bir villanın değeri yalnızca mekânında değil, içinde geçirdiğiniz zamanın niteliğindedir. Operasyon süreçlerimizi, mülkün ruhunu yıpratmadan sürdürebilecek biçimde tasarlıyor; sessizliği, mahremiyeti ve karakteri özenle koruyoruz."
            : "A villa is worth as much as the quality of the time spent inside it. We design our operations so that the spirit of each property is left intact — its quiet, its privacy and its character preserved with care.",
        },
        {
          kicker: isTr ? "Premium Misafir Profili" : "Considered Guests",
          title: isTr ? "Premium Misafir Profili" : "Considered Guests",
          body: isTr
            ? "Misafirlerimizi koleksiyonun bir parçası olarak görürüz. Her rezervasyon talebini, mülk sahibinin emanetine karşılık olacak biçimde değerlendirir; konaklamayı paylaşan kişilerle villanın atmosferi arasında uygun bir denge kurarız."
            : "Guests, to us, form part of the collection too. We weigh each enquiry as carefully as the property it concerns — placing the right people, in the right house, for the right kind of stay.",
        },
      ]}
      newsletter={{
        title: isTr
          ? "Koleksiyonumuza eklemeler için bilgi alın."
          : "Be the first to hear when villas join the collection.",
        description: isTr
          ? "Yeni villalar koleksiyonumuza eklendikçe, koleksiyonu takip eden okuyucularımıza yılda birkaç kez ölçülü bir mektup gönderiyoruz."
          : "We write to readers a few times a year — a quiet letter when new villas join the collection, nothing more.",
        placeholder: isTr ? "E-posta adresiniz" : "Your email address",
        cta: isTr ? "Bültene Katıl" : "Join the Letter",
        consentText: isTr
          ? "E-posta adresimin, Bodrumapartvilla koleksiyon bültenine eklenmesini ve yeni villalar dahil edildikçe bilgilendirme amacıyla işlenmesini kabul ediyorum."
          : "I agree that my email address may be added to the Bodrumapartvilla collection letter and used to inform me of new villas joining the collection.",
        successMessage: isTr
          ? "Teşekkür ederiz. Koleksiyona yapılan eklemeleri zamanı geldiğinde sizinle paylaşacağız."
          : "Thank you. We will be in touch as new villas join the collection.",
        errorMessage: isTr
          ? "Bir aksaklık oluştu. Lütfen kısa süre sonra tekrar deneyiniz."
          : "Something interrupted the request. Please try again shortly.",
      }}
      conciergeKicker={isTr ? "Konsiyerj" : "Concierge"}
      conciergeTitle={
        isTr ? "Birebir görüşmeyi tercih ederseniz." : "If you prefer to write directly."
      }
      conciergeBody={
        isTr
          ? "Konaklama planlarınızı, özel istekleri ve koleksiyonumuza dair sorularınızı doğrudan konsiyerj ekibimize iletebilirsiniz."
          : "You are welcome to write to the concierge with your dates, particular requests or any questions about the collection."
      }
      conciergeHours={
        isTr
          ? "Görüşme saatleri · Hafta içi 09:00 – 19:00"
          : "Hours · Weekdays 09:00 – 19:00"
      }
    />
  );
}
