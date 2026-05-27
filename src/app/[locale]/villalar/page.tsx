import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ComingSoonCollection } from "@/components/ComingSoonCollection";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { MonoLabel } from "@/components/ui/MonoLabel";

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

  const guideSections = isTr
    ? [
        {
          h: "Butik Villa Konaklama Nedir?",
          p: "Butik villa konaklama, otel anlayışının dışına çıkan, sınırlı sayıda mülk üzerinden tasarlanan ve her bir misafirle bireysel bir ilişki kuran bir konaklama biçimidir. Bodrum'da uzun yıllar süren villa kiralama pratiği boyunca, sayı yarışı yapan büyük portföyler ile her villaya tek tek odaklanan butik ekipler arasında belirgin bir ayrışma oluştu. Butik tarafın temel iddiası nedir? Daha az villa, daha derin bilgi. Bir mülkün eşyasının seçimi, bahçesinin bakım rejimi, mutfak ekipmanlarının düzeyi, klimanın sessizliği, suyun sertliği — bunların tümü misafirin gününü kuracak ölçüde önemlidir. Bodrumapartvilla bu anlayışın ürünüdür: koleksiyonumuza katılan her villa, koleksiyona değer kattığı için yer alır.",
        },
        {
          h: "Bodrum Yarımadasında Bölgeler",
          p: "Yarımada, kuzey ve güney sahili olarak iki ana hattan oluşur. Kuzey hatta Türkbükü, Göltürkbükü, Gündoğan, Torba; güney hatta Bitez, Ortakent, Yahşi, Akyarlar; batı uçta ise Yalıkavak, Gümüşlük ve Turgutreis bulunur. Bunlardan her birinin karakteri farklıdır: Türkbükü ve Göltürkbükü, beach club kültürünün yoğunlaştığı olgun adresler; Yalıkavak, marina ve butik villaların ölçülü buluştuğu nokta; Gümüşlük, sanatçı stüdyolarının ve balıkçı meyhanelerinin köyü; Torba, havalimanı yakını, çocuklu ailelere uygun sakin sahil. Karar verirken iki şey önemlidir: arzu ettiğiniz akşam temposu ve günün hangi saatlerini hangi tür mekânda geçireceğiniz.",
        },
        {
          h: "Villa Seçim Kriterleri",
          p: "Bir villa seçerken misafirlerin çoğu önce manzaraya bakar. Doğru bir refleks değildir. Önce villanın temel özellikleri sıralanmalıdır: yatak odası sayısı ve yatak yerleşimi, banyo sayısı, mutfak donanımı, klima sessizliği, internet hızı, jeneratör, su ısıtma sistemi. Sonra konum: koya cephe mi, yamaçtan mı? Yola çıkışta mahremiyet var mı? Komşu mülkten ses geliyor mu? Üçüncü olarak deneyim: özel havuzun büyüklüğü ve derinliği, bahçede gölge alanları, akşam yemeği için yeterli oturma alanı. Mahremiyet, butik villa seçiminin neredeyse her zaman ilk üç kriteri arasındadır.",
        },
        {
          h: "Konsiyerj Hizmetinin Önemi",
          p: "Bir villada konaklamak, anahtarın teslim alındığı anla biten bir süreç değildir. Havalimanından villaya transfer, ilk akşamın yemeği, kahvaltı tedariki, çocuk bakımı, masöz, fotoğrafçı, doktor, tekne charter, beach club rezervasyonu — bunların tümü konsiyerj kapsamına girer. Butik bir konaklama deneyiminde konsiyerj, otelin resepsiyonunun yerini almaz; misafirin günlük programını sessizce kuran, fark edilmeden çözen ekiptir. İyi bir konsiyerj ekibi, ihtiyacı önceden tahmin eder ve mesajla cevap verir.",
        },
        {
          h: "Sezonsallık ve Doğru Tarih Seçimi",
          p: "Bodrum'da sezon yapısı dört evreye ayrılır. Mayıs ortası — Haziran ortası: sezonun açılış evresi, fiyatlar dengeli, deniz ısınmakta, koylar dingin. Haziran ortası — Eylül başı: yoğunluk dönemi, fiyatların en üst hattı, beach club kültürünün en canlı zamanı. Eylül başı — Ekim ortası: sezonun olgunluk evresi, fiyatlar düşmeye başlar, hava hâlâ sıcak, deniz en sıcak hâline ulaşır. Ekim ortası — Mayıs ortası: düşük sezon, villaların büyük bölümü kapalı, uzun konaklama yapan misafirler için özel anlaşmalar yapılabilir. Bal ayı çiftleri için Eylül başı; aileler için Haziran sonu ya da Eylül başı; arkadaş grupları için Temmuz-Ağustos klasik tercihlerdir.",
        },
      ]
    : [
        {
          h: "What is a Boutique Villa Stay?",
          p: "A boutique villa stay is built outside the logic of a hotel — on a small number of properties, with an individual relationship between guest and host. Over years of villa rentals in Bodrum, a clear split has emerged between high-volume portfolios chasing inventory and boutique teams focused on each property individually. The boutique claim is simple: fewer villas, deeper knowledge. The choice of furniture, the garden's maintenance, the kitchen's equipment level, the silence of the AC, the hardness of the water — all of these decide a guest's day. Bodrumapartvilla is the practical answer to that idea: each villa joins the collection because it adds meaning to it.",
        },
        {
          h: "The Districts of the Bodrum Peninsula",
          p: "The peninsula runs along two main shores: north and south. On the north line, Türkbükü, Göltürkbükü, Gündoğan, Torba. On the south, Bitez, Ortakent, Yahşi, Akyarlar. To the west, Yalıkavak, Gümüşlük, Turgutreis. Each holds its own character. Türkbükü and Göltürkbükü are mature addresses with concentrated beach club culture. Yalıkavak is the measured meeting point of marina life and boutique villas. Gümüşlük is a village of artist studios and fishermen's meyhanes. Torba is the quiet shore near the airport, suited to families. Two questions decide the choice: the evening tempo you want, and the kind of place you want to spend the rest of the day in.",
        },
        {
          h: "How to Choose the Right Villa",
          p: "Most guests choose by view first. It isn't the right reflex. Begin with the basics: number of bedrooms and how the beds are arranged, bathrooms, kitchen equipment, AC silence, internet speed, backup generator, hot-water system. Then location: facing the bay or sitting on the slope? Privacy from the road? Sound from a neighbouring property? Then the experience: the size and depth of the private pool, shaded outdoor areas, enough seating for dinner. Privacy is almost always in the top three criteria for a boutique villa choice.",
        },
        {
          h: "The Role of the Concierge",
          p: "A villa stay does not end with the keys. Airport transfer, the first dinner, breakfast supply, childcare, masseur, photographer, doctor, yacht charter, beach club reservations — all sit within the concierge's scope. In a boutique stay, the concierge does not replace a hotel reception; it is the team that quietly plans the guest's day and solves things without being noticed. A good concierge anticipates need and replies with a message.",
        },
        {
          h: "Seasons and Choosing the Right Dates",
          p: "Bodrum's season has four phases. Mid-May to mid-June: the opening, balanced prices, sea warming, calm bays. Mid-June to early September: peak, the top of the price band, the most active beach club culture. Early September to mid-October: the mature phase, prices drop, weather still warm, the sea reaches its warmest. Mid-October to mid-May: low season; most villas close, longer stays can be negotiated. Honeymooners gravitate to early September. Families to late June or early September. Friend groups to July-August.",
        },
      ];

  const guideFaq = isTr
    ? [
        {
          q: "Bodrum'da butik villa kiralama fiyat aralığı nedir?",
          a: "Yarımadanın bölgesine, villanın segmentine ve sezona göre 1.500-5.000 TL/gece arasında bir aralık geçerlidir. Üst segment villalar bu rakamların üzerine çıkar.",
        },
        {
          q: "Villalarda özel havuz var mı?",
          a: "Koleksiyonumuzdaki villaların büyük çoğunluğu özel havuzludur. Bazı butik villalar ortak havuza ya da deniz iskelesine sahiptir; bu, mülkün karakterine göre belirlenir.",
        },
        {
          q: "Minimum kalış süresi var mı?",
          a: "Yüksek sezonda villalar için minimum 5 gece kalış uygulanır. Sezon dışında bu süre 2 ya da 3 geceye düşer.",
        },
        {
          q: "Villalarda evcil hayvan kabul ediliyor mu?",
          a: "Mülk sahibine göre değişir. Konsiyerj ekibimiz, evcil hayvan dostu villaları talep üzerine filtreler.",
        },
        {
          q: "Hangi bölgeyi seçmeliyim?",
          a: "Bal ayı için Gümüşlük ya da Yalıkavak; aileler için Torba ya da Bitez; beach club kültürü için Türkbükü ya da Göltürkbükü; sanat ve sakinlik için Gümüşlük. Konsiyerj ekibimiz profilinize göre öneri sunar.",
        },
        {
          q: "Rezervasyon nasıl onaylanır?",
          a: "Talebinizi WhatsApp veya iletişim formundan ulaştırırsınız. Konsiyerj ekibimiz tarih ve villa için uygunluğu teyit eder; havale onayı sonrasında rezervasyon kesinleşir ve teyit e-postası iletilir.",
        },
        {
          q: "Konsiyerj hizmeti ücretli mi?",
          a: "Genel koordinasyon ücretsizdir. Özel transfer, özel şef, tekne ve yat gibi spesifik servisler ayrı fiyatlandırılır; teklif önceden iletilir.",
        },
        {
          q: "İptal politikası nedir?",
          a: "Konaklama tarihinize 14 gün ve daha fazla kalanda esnek koşullar uygulanır; daha kısa süreler için politikamız rezervasyon onayı sırasında paylaşılır.",
        },
      ]
    : [
        {
          q: "What is the price range for boutique villa rental in Bodrum?",
          a: "Depending on district, segment and season, expect 1,500-5,000 TL per night. Luxury runs above.",
        },
        {
          q: "Do the villas have private pools?",
          a: "Most villas in the collection are private-pool. A few boutique villas hold shared pools or jetty access — defined by the property's character.",
        },
        {
          q: "Is there a minimum stay?",
          a: "Five nights minimum in high season; two or three in shoulder seasons.",
        },
        {
          q: "Are pets accepted?",
          a: "Depends on the owner. Our concierge filters pet-friendly villas on request.",
        },
        {
          q: "Which district should I choose?",
          a: "For honeymoon: Gümüşlük or Yalıkavak. For families: Torba or Bitez. For beach club culture: Türkbükü or Göltürkbükü. For art and quiet: Gümüşlük. Our concierge will suggest based on your profile.",
        },
        {
          q: "How is a booking confirmed?",
          a: "You send a request by WhatsApp or contact form. The concierge confirms availability for date and villa; once payment arrives, the booking is finalised and a confirmation email follows.",
        },
        {
          q: "Is the concierge service charged?",
          a: "General coordination is included. Specific services — private transfer, chef, yacht — are priced separately with an upfront quote.",
        },
        {
          q: "What is the cancellation policy?",
          a: "Flexible terms apply 14+ days before the stay; shorter windows are detailed at the time of booking confirmation.",
        },
      ];

  const guideFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guideFaq.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };

  return (
    <>
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
    <JsonLd data={guideFaqJsonLd} />

    <section className="section section-soft">
      <div className="container-page mx-auto max-w-4xl">
        <MonoLabel className="text-accent-600">
          {isTr ? "Rehber" : "Guide"}
        </MonoLabel>
        <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
          {isTr
            ? "Bodrum'da Butik Villa Konaklama Rehberi"
            : "A Guide to Boutique Villa Stays in Bodrum"}
        </h2>
        <div className="editorial-divider mt-8 max-w-xs" />

        <div className="mt-10 space-y-12">
          {guideSections.map((s, i) => (
            <article key={i}>
              <h3 className="font-display text-2xl font-semibold leading-tight text-ink md:text-3xl">
                {s.h}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink/85">
                {s.p}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="font-display text-2xl font-semibold leading-tight text-ink md:text-3xl">
            {isTr ? "Sıkça Sorulan Sorular" : "Frequently Asked Questions"}
          </h3>
          <div className="mt-6">
            <FAQ items={guideFaq} />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
