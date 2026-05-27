import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { LegalLayout } from "@/components/LegalLayout";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://bodrumapartvilla.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "terms" });
  const url =
    locale === "tr"
      ? `${SITE_URL}/kullanim-sartlari`
      : `${SITE_URL}/${locale}/kullanim-sartlari`;
  return {
    title: t("metaTitle"),
    description: t("subtitle"),
    alternates: { canonical: url },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "terms" });
  const c = await getTranslations({ locale, namespace: "common" });
  const isTr = locale === "tr";

  return (
    <LegalLayout
      title={t("h1")}
      subtitle={t("subtitle")}
      lastUpdate={t("lastUpdate")}
      homeLabel={isTr ? "Ana Sayfa" : "Home"}
    >
      {isTr ? <TermsTr email={c("email")} /> : <TermsEn email={c("email")} />}
    </LegalLayout>
  );
}

function TermsTr({ email }: { email: string }) {
  return (
    <>
      <p>
        Aşağıdaki metin, bodrumapartvilla.com (&quot;Site&quot;) üzerinden
        ulaşılabilen butik villa kiralama platformuna ilişkin kullanım
        koşullarını düzenler. Site&apos;yi ziyaret eden ya da burada sunulan
        hizmetlerden yararlanan her ziyaretçi, bu metni okuyup kabul etmiş
        sayılır. Hizmetin niteliği gereği belirli kuralları açıkça ifade
        etmeyi tercih ediyoruz; metin, abartısız ama bağlayıcı bir çerçeve
        çizmek üzere kaleme alınmıştır.
      </p>

      <h2>1. Hizmet Tanımı</h2>
      <p>
        Bodrumapartvilla, Bodrum yarımadasında sınırlı sayıda villaya yönelik
        konaklama deneyimi sunan butik bir villa kiralama platformudur.
        Site&apos;de yer alan koleksiyon, sayıdan çok seçim ölçütüyle
        oluşturulur; her villa, kabul edilmeden önce ayrı ayrı değerlendirilir.
        Site, ziyaretçilerin konaklama taleplerini iletmesine, koleksiyon
        hakkında bilgi almasına ve konsiyerj ekibimizle iletişim kurmasına
        olanak verir; nihai rezervasyon ve ödeme süreci, konsiyerj akışı
        içinde tamamlanır.
      </p>

      <h2>2. Tanımlar</h2>
      <ul>
        <li>
          <strong>Şirket:</strong> bodrumapartvilla.com platformunu işleten
          tüzel kişilik.
        </li>
        <li>
          <strong>Site:</strong> bodrumapartvilla.com alan adı altındaki tüm
          alt sayfa ve içerikler.
        </li>
        <li>
          <strong>Misafir:</strong> Site üzerinden konaklama talebi ileten
          ya da bir villada konaklayan kişi.
        </li>
        <li>
          <strong>Mülk Sahibi:</strong> Villasını koleksiyonumuza dahil etmek
          üzere ilişki kurduğumuz kişi veya kuruluş.
        </li>
        <li>
          <strong>Hizmet:</strong> Site üzerinden sunulan butik villa
          konaklama deneyimi ve buna eşlik eden konsiyerj iletişimi.
        </li>
      </ul>

      <h2>3. Kullanıcı Yükümlülükleri</h2>
      <p>
        Site&apos;yi ziyaret eden her kullanıcı, aşağıdaki temel sorumluluklara
        riayet eder:
      </p>
      <ul>
        <li>
          Form alanlarına gerçeğe uygun, güncel ve doğru bilgi girmek.
        </li>
        <li>
          Site&apos;ye otomatik araçlar, kazıma yazılımları veya hukuka aykırı
          erişim yöntemleriyle bağlanmamak.
        </li>
        <li>
          Üçüncü kişilerin telif, marka, ticari sır ve sair fikri mülkiyet
          haklarını ihlal etmemek.
        </li>
        <li>
          Site&apos;ye, hizmetin işleyişini sekteye uğratacak nitelikte zararlı
          yazılım, kötü amaçlı kod veya yanıltıcı içerik göndermemek.
        </li>
        <li>
          Konaklama süresi içinde ev sahibi sorumluluğunu paylaşmak; villaya
          özen göstermek ve komşulara saygıyı korumak.
        </li>
      </ul>

      <h2>4. Rezervasyon Koşulları</h2>
      <p>
        Rezervasyon süreci, ziyaretçinin konaklama talebini iletmesiyle başlar
        ve konsiyerj ekibiyle yapılan görüşme sonunda bağıtlanır. Konaklama
        kesinleşmeden önce müsaitlik teyit edilir, koşullar yazılı olarak
        paylaşılır ve onayın ardından ödeme akışı tamamlanır. Belirli villalara
        ilişkin asgari konaklama süresi, sezon ve ek hizmet gereklilikleri,
        teyit aşamasında açıkça bildirilir. Rezervasyonun iptali ve iadesi,
        ayrı bir sayfada yayımlanan İptal ve İade Politikası&apos;nda
        düzenlenmiştir.
      </p>

      <h2>5. Sorumluluk Reddi</h2>
      <p>
        Bodrumapartvilla, Site&apos;nin kesintisiz, hatasız ve eksiksiz biçimde
        çalışacağını taahhüt etmez; ancak gerekli teknik özeni gösterir. Mücbir
        sebepler, internet altyapısına ilişkin aksaklıklar, üçüncü taraf
        hizmet sağlayıcı kaynaklı gecikmeler veya öngörülemeyen mülk sahibi
        davranışlarından doğan zararlardan, kanunun emredici hükümleri saklı
        kalmak üzere Şirket sorumlu tutulamaz. Site üzerindeki bilgiler,
        kasıtlı yanlış beyan olmadıkça en güncel hâliyle paylaşılır.
      </p>

      <h2>6. Fikri Mülkiyet</h2>
      <p>
        Site&apos;de yer alan tasarım, görsel, metin, logo, marka, yazılım,
        veri tabanı ve diğer içerikler bodrumapartvilla.com&apos;a ya da
        lisans veren üçüncü taraflara aittir. Bu içeriklerin yazılı izin
        olmaksızın çoğaltılması, dağıtılması veya ticari amaçla kullanılması
        kabul edilebilir bir kullanım çerçevesinin dışındadır. Belirli görseller,
        serbest lisanslı kütüphanelerden alıntılanmış olabilir; bu hâllerde
        ilgili kütüphanenin lisans koşulları geçerli kalır.
      </p>

      <h2>7. Üçüncü Taraf Bağlantıları</h2>
      <p>
        Site, harici platformlara yönlendiren bağlantılar içerebilir.
        Bu üçüncü taraf sitelerin içeriği, doğruluğu, gizlilik uygulamaları
        ve çerez yapılandırması, ilgili platformların kendi sorumluluğundadır.
      </p>

      <h2>8. Uyuşmazlık Çözümü</h2>
      <p>
        İşbu kullanım şartları Türkiye Cumhuriyeti hukukuna tabidir.
        Site&apos;nin kullanımından, hizmetlerin ifasından veya bu metnin
        yorumundan doğabilecek uyuşmazlıklarda Bodrum (Muğla) Mahkemeleri
        ve İcra Daireleri münhasıran yetkilidir. Taraflar, dava ve takip
        açılmadan önce iyi niyetli müzakere yoluyla çözüm aramayı kabul eder.
      </p>

      <h2>9. Yürürlük ve Değişiklikler</h2>
      <p>
        Şirket, bu metni zaman zaman gözden geçirip güncelleyebilir.
        Güncellenmiş metin, Site&apos;de yayımlandığı andan itibaren yürürlüğe
        girer ve yayım tarihiyle bağlayıcı hâle gelir. Önemli değişikliklerde,
        kayıtlı kullanıcılarımızı bilgilendirmek için makul çabayı gösteririz.
      </p>

      <h2>10. İletişim</h2>
      <p>
        Bu metnin yorumlanmasına veya uygulanmasına ilişkin sorularınız için{" "}
        <a href={`mailto:${email}`}>{email}</a> adresine yazabilirsiniz.
      </p>

      <p className="text-xs text-muted">
        İşbu metin bilgilendirme amaçlıdır; detaylı hukuki revizyon için bir
        avukat ya da uzmandan görüş alınacaktır.
      </p>
    </>
  );
}

function TermsEn({ email }: { email: string }) {
  return (
    <>
      <p>
        These terms govern the use of the boutique villa-rental platform
        available at bodrumapartvilla.com (the &quot;Site&quot;). By visiting
        the Site or making use of the services offered here, every visitor is
        deemed to have read and accepted this notice. The document is written
        in measured terms but is, by its nature, binding.
      </p>

      <h2>1. The Service</h2>
      <p>
        Bodrumapartvilla is a boutique villa-rental platform offering a
        limited stay experience across the Bodrum peninsula. The collection is
        assembled by selection rather than scale, and each villa is reviewed
        on its own merits before admission. The Site enables visitors to
        submit stay enquiries, learn about the collection and reach our
        concierge; the final reservation and payment flow is completed within
        the concierge process.
      </p>

      <h2>2. Definitions</h2>
      <ul>
        <li>
          <strong>Company:</strong> the legal entity operating
          bodrumapartvilla.com.
        </li>
        <li>
          <strong>Site:</strong> all sub-pages and content under
          bodrumapartvilla.com.
        </li>
        <li>
          <strong>Guest:</strong> anyone submitting a stay enquiry through, or
          staying at a villa via, the Site.
        </li>
        <li>
          <strong>Owner:</strong> the individual or entity entrusting their
          villa to the collection.
        </li>
        <li>
          <strong>Service:</strong> the boutique villa-stay experience offered
          through the Site and the accompanying concierge communication.
        </li>
      </ul>

      <h2>3. User Obligations</h2>
      <ul>
        <li>Provide accurate, current and truthful information in the forms.</li>
        <li>
          Refrain from automated access, scraping or any unlawful method of
          interacting with the Site.
        </li>
        <li>
          Refrain from infringing the copyright, trademark, trade secret or
          other intellectual property rights of third parties.
        </li>
        <li>
          Do not submit malicious software, malicious code or misleading content
          that may disrupt the Service.
        </li>
        <li>
          During a stay, share host responsibility — care for the villa and
          respect neighbours.
        </li>
      </ul>

      <h2>4. Booking Conditions</h2>
      <p>
        A reservation begins when a visitor submits a stay enquiry and is
        finalised through conversation with the concierge. Before a booking is
        confirmed, availability is verified, conditions are shared in writing
        and the payment flow is completed only after approval. Minimum-stay
        rules, seasonal conditions and any additional services attached to a
        given villa are stated clearly at confirmation. Cancellation and
        refund terms are addressed in a separate Cancellation and Refund
        Policy.
      </p>

      <h2>5. Limitation of Liability</h2>
      <p>
        Bodrumapartvilla does not warrant that the Site will operate
        uninterrupted, error-free or in complete form, but applies the
        necessary technical diligence. Subject to mandatory provisions of
        law, the Company shall not be liable for losses arising from force
        majeure, internet infrastructure failures, delays attributable to
        third-party providers, or unforeseen owner behaviour. Information on
        the Site is shared in its most current form, save for any wilful
        misrepresentation.
      </p>

      <h2>6. Intellectual Property</h2>
      <p>
        The design, imagery, text, logos, marks, software, database and other
        content on the Site belong to bodrumapartvilla.com or to its
        licensors. Copying, distribution or commercial use without written
        consent falls outside any reasonable use. Certain images may be
        sourced from openly licensed libraries, in which case the relevant
        library&apos;s licence terms remain in force.
      </p>

      <h2>7. Third-Party Links</h2>
      <p>
        The Site may contain links directing to external platforms. The
        content, accuracy, privacy practice and cookie configuration of those
        sites are the responsibility of their respective operators.
      </p>

      <h2>8. Dispute Resolution</h2>
      <p>
        These terms are subject to the laws of the Republic of Türkiye. Bodrum
        (Muğla) Courts and Enforcement Offices have exclusive jurisdiction
        over disputes arising from use of the Site, performance of the
        Service or interpretation of this notice. The parties agree to seek
        a good-faith negotiated resolution before initiating proceedings.
      </p>

      <h2>9. Entry into Force and Updates</h2>
      <p>
        The Company may revise this notice from time to time. Updates become
        binding once published on the Site and apply from the date of
        publication. For material changes, reasonable effort is made to
        notify registered users.
      </p>

      <h2>10. Contact</h2>
      <p>
        For questions about the interpretation or application of this notice,
        please write to <a href={`mailto:${email}`}>{email}</a>.
      </p>

      <p className="text-xs text-muted">
        This document is informational; a detailed legal review by a lawyer or
        specialist will be performed before final publication.
      </p>
    </>
  );
}
