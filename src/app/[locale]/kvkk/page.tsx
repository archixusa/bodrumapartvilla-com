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
  const t = await getTranslations({ locale, namespace: "kvkk" });
  const url =
    locale === "tr" ? `${SITE_URL}/kvkk` : `${SITE_URL}/${locale}/kvkk`;
  return {
    title: t("metaTitle"),
    description: t("subtitle"),
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
  const t = await getTranslations({ locale, namespace: "kvkk" });
  const c = await getTranslations({ locale, namespace: "common" });
  const isTr = locale === "tr";

  return (
    <LegalLayout
      title={t("h1")}
      subtitle={t("subtitle")}
      lastUpdate={t("lastUpdate")}
      homeLabel={isTr ? "Ana Sayfa" : "Home"}
    >
      {isTr ? <KvkkTr email={c("email")} /> : <KvkkEn email={c("email")} />}
    </LegalLayout>
  );
}

function KvkkTr({ email }: { email: string }) {
  return (
    <>
      <p>
        Bodrumapartvilla, koleksiyonuna emanet edilen her misafirin mahremiyetini
        hizmetin kendisi kadar önemli sayar. Aşağıdaki metin, 6698 sayılı Kişisel
        Verilerin Korunması Kanunu&apos;nun (&quot;KVKK&quot;) 10. maddesi uyarınca
        aydınlatma yükümlülüğümüzü yerine getirmek amacıyla hazırlanmıştır ve
        verilerinizin hangi kapsamda, hangi gerekçelerle ele alındığını ölçülü bir
        dille açıklar.
      </p>

      <h2>1. Veri Sorumlusu</h2>
      <p>
        Bu metnin yayım tarihi itibarıyla veri sorumlusu sıfatı,
        bodrumapartvilla.com platformunu işleten tüzel kişiliğe aittir. Şirketin
        unvanı, MERSİS numarası ve tescilli adresine ilişkin bilgiler nihai kurumsal
        yapı tescil edildiğinde bu metinde güncellenecektir; bu noktaya kadar
        belirtilen iletişim kanallarımız geçerlidir.
      </p>
      <p>
        Web sitesi: bodrumapartvilla.com
        <br />
        İletişim: <a href={`mailto:${email}`}>{email}</a>
      </p>

      <h2>2. Kişisel Veri İşleme Amaçları</h2>
      <p>
        Misafirlerimizden ve mülk sahibi adaylarımızdan edindiğimiz kişisel veriler,
        aşağıda sayılan sınırlı amaçlar dahilinde işlenir. Her bir amaç, hizmetin
        gerektirdiği özen çerçevesinde değerlendirilir; gereğinden geniş bir veri
        kümesi tutulmaz.
      </p>
      <ul>
        <li>
          Konaklama taleplerinin değerlendirilmesi, rezervasyon süreçlerinin
          yürütülmesi ve sözleşmenin kurulması ile ifası.
        </li>
        <li>
          Konsiyerj ekibimiz tarafından yürütülen iletişim, müsaitlik teyidi, ön
          görüşme ve özel taleplerin koordinasyonu.
        </li>
        <li>
          Hizmet kalitemizin gözden geçirilmesi, misafir deneyimine ilişkin içsel
          değerlendirmeler ve istatistiksel analizler.
        </li>
        <li>
          Vergi, muhasebe ve turizm mevzuatından doğan yasal yükümlülüklerin
          karşılanması.
        </li>
        <li>
          Açık rızanızın bulunması koşuluyla; koleksiyonumuza dahil olan yeni
          villalara, mevsime özgü açılış dönemlerine ve seçkin bültenlerimize
          ilişkin ihtiyari pazarlama içeriklerinin iletilmesi.
        </li>
      </ul>

      <h2>3. İşlenen Veri Kategorileri</h2>
      <ul>
        <li>
          <strong>Kimlik verileri:</strong> ad, soyad ve gerektiğinde yetişkin
          misafir sayısına ilişkin bilgi.
        </li>
        <li>
          <strong>İletişim verileri:</strong> e-posta adresi, cep telefonu numarası
          ve tercih ettiğiniz iletişim kanalı.
        </li>
        <li>
          <strong>İşlem verileri:</strong> rezervasyon tarihleri, tercih edilen
          villa, konaklayan kişi sayısı, özel istekler ve ödeme akışına ilişkin
          referans bilgileri.
        </li>
        <li>
          <strong>Pazarlama verileri:</strong> bültene abonelik tercihleri,
          iletişim onayları ve site içi etkileşim kayıtları.
        </li>
      </ul>

      <h2>4. Hukuki Sebepler</h2>
      <p>
        Kişisel verileriniz; KVKK m.5/2-c (sözleşmenin kurulması veya ifası),
        m.5/2-ç (hukuki yükümlülüğün yerine getirilmesi) ve m.5/2-f (meşru menfaat)
        hükümlerine dayanarak işlenir. Pazarlama nitelikli bildirimler ile zorunlu
        olmayan çerez kullanımı için ayrıca m.5/1 kapsamında açık rıza alınır.
      </p>

      <h2>5. Aktarım</h2>
      <p>
        Bodrumapartvilla, kişisel verilerinizi yalnızca hizmetin gereği kıldığı
        ölçüde, sayılı kategorideki taraflarla paylaşır:
      </p>
      <ul>
        <li>
          Konaklamanız boyunca evinizi misafir etmesi söz konusu olan{" "}
          <strong>mülk sahipleri</strong> ya da onların yetkilendirdiği lokal
          işletmeciler.
        </li>
        <li>
          Ödeme akışının güvenli biçimde yürütülmesi için anlaşmalı{" "}
          <strong>ödeme kuruluşları</strong> ve banka altyapı sağlayıcıları.
        </li>
        <li>
          Yasal yükümlülük çerçevesinde talepte bulunan{" "}
          <strong>resmi makamlar</strong>, adli ve idari merciler.
        </li>
        <li>
          Site barındırma, e-posta ileti ve analitik gibi teknik hizmet aldığımız
          altyapı sağlayıcıları (Vercel, Resend ve benzeri).
        </li>
      </ul>
      <p>
        Yurt dışına yapılan aktarımlar KVKK m.9&apos;da öngörülen güvenceler
        çerçevesinde gerçekleştirilir.
      </p>

      <h2>6. Saklama Süresi</h2>
      <p>
        Rezervasyon ve mali işlem kayıtları, ilgili ticari ve vergi mevzuatının
        öngördüğü asgari saklama süreleri boyunca muhafaza edilir. Pazarlama
        amaçlı veriler ise rızanızı geri çekene kadar; rıza geri alındığında
        gecikmeksizin imhasına başlanır.
      </p>

      <h2>7. Veri Sahibinin Hakları (KVKK Madde 11)</h2>
      <p>
        Kişisel verisi işlenen herkes, KVKK m.11 kapsamında veri sorumlusuna
        başvurarak aşağıda sayılan hakları kullanma imkânına sahiptir:
      </p>
      <ul>
        <li>Kişisel verilerinin işlenip işlenmediğini öğrenme.</li>
        <li>İşlenmişse buna ilişkin bilgi talep etme.</li>
        <li>
          Verilerin işlenme amacını ve bunların amacına uygun kullanılıp
          kullanılmadığını öğrenme.
        </li>
        <li>
          Yurt içinde veya yurt dışında verilerin aktarıldığı üçüncü kişileri
          bilme.
        </li>
        <li>
          Verilerin eksik veya yanlış işlenmiş olması hâlinde bunların
          düzeltilmesini isteme.
        </li>
        <li>
          KVKK m.7&apos;de öngörülen şartlar çerçevesinde verilerin silinmesini
          veya yok edilmesini isteme.
        </li>
        <li>
          Düzeltme, silme veya yok etme işlemlerinin, aktarımın yapıldığı üçüncü
          kişilere bildirilmesini talep etme.
        </li>
        <li>
          İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz
          edilmesi suretiyle aleyhe bir sonuç çıkmasına itiraz etme.
        </li>
        <li>
          Kanuna aykırı işleme sebebiyle zarara uğranılması hâlinde zararın
          giderilmesini talep etme.
        </li>
      </ul>

      <h2>8. Başvuru Yöntemleri</h2>
      <p>
        Yukarıda sayılan haklarınızı kullanmak için talebinizi yazılı olarak{" "}
        <a href={`mailto:${email}`}>{email}</a> adresine, kimliğinizi tespit
        etmemize olanak verecek bilgilerle birlikte iletmeniz yeterlidir. Veri
        Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ kapsamındaki şekil
        şartlarına uygun başvurular, talebinize en geç otuz gün içinde yanıtlanır.
      </p>

      <h2>9. Çerez Politikası</h2>
      <p>
        Sitemizde işlevsellik, performans ölçümü ve sınırlı analitik amaçlarla
        çerez kullanılır. Çerez yönetimine ilişkin ayrıntılı bilgi, ayrı bir
        sayfa olarak yayımlanan Çerez Politikası belgesinde yer alır.
      </p>

      <p className="text-xs text-muted">
        Son güncelleme tarihi: bu sayfanın üst kısmında belirtilmiştir. İşbu metin
        bilgilendirme amaçlı olarak hazırlanmış olup, yayına alınmadan önceki
        detaylı hukuki revizyon için bir avukat ya da veri koruma uzmanından
        görüş alınacaktır.
      </p>
    </>
  );
}

function KvkkEn({ email }: { email: string }) {
  return (
    <>
      <p>
        Bodrumapartvilla treats the privacy of every guest entrusted to its
        collection with the same care it brings to the stay itself. This notice
        is prepared under Article 10 of the Turkish Personal Data Protection Law
        No. 6698 (&quot;KVKK&quot;) and explains, in measured terms, how and why
        we process the personal data that reaches us.
      </p>

      <h2>1. Data Controller</h2>
      <p>
        As of the publication date of this notice, the data controller is the
        legal entity operating bodrumapartvilla.com. Its full corporate name,
        MERSIS number and registered address will be updated on this page once
        the underlying corporate structure is finalised; until then, the contact
        channels stated below remain valid.
      </p>
      <p>
        Website: bodrumapartvilla.com
        <br />
        Contact: <a href={`mailto:${email}`}>{email}</a>
      </p>

      <h2>2. Purposes of Processing</h2>
      <ul>
        <li>
          Evaluating stay requests, managing reservations and performing the
          contract.
        </li>
        <li>
          Concierge communication, availability confirmation and coordination of
          particular requests.
        </li>
        <li>
          Reviewing service quality and conducting internal, statistical
          analyses.
        </li>
        <li>
          Compliance with legal obligations under tax, accounting and tourism
          legislation.
        </li>
        <li>
          With your explicit consent, sharing optional updates about new villas
          joining the collection, seasonal openings and our occasional editorial
          letters.
        </li>
      </ul>

      <h2>3. Categories of Data</h2>
      <ul>
        <li>
          <strong>Identity:</strong> full name and, where required, adult guest
          count.
        </li>
        <li>
          <strong>Contact:</strong> email address, mobile number and preferred
          channel.
        </li>
        <li>
          <strong>Transactional:</strong> stay dates, preferred villa, party
          size, particular requests and payment reference data.
        </li>
        <li>
          <strong>Marketing:</strong> newsletter preferences, communication
          consents and on-site interaction records.
        </li>
      </ul>

      <h2>4. Legal Basis</h2>
      <p>
        Processing is grounded in performance of contract (Art. 5/2-c), legal
        obligation (Art. 5/2-ç) and legitimate interest (Art. 5/2-f) under KVKK.
        Marketing communications and non-essential cookies rely on your explicit
        consent (Art. 5/1).
      </p>

      <h2>5. Transfers</h2>
      <ul>
        <li>
          The <strong>property owners</strong> (or their local representatives)
          hosting your stay.
        </li>
        <li>
          <strong>Payment institutions</strong> and banking infrastructure
          required for safe settlement.
        </li>
        <li>
          <strong>Competent authorities</strong> when a lawful request exists.
        </li>
        <li>
          Technical service providers (hosting, email delivery, analytics) such
          as Vercel and Resend.
        </li>
      </ul>
      <p>
        Cross-border transfers are conducted under the safeguards stipulated by
        KVKK Article 9.
      </p>

      <h2>6. Retention</h2>
      <p>
        Reservation and financial records are retained for the minimum periods
        required by commercial and tax legislation. Marketing data is kept until
        consent is withdrawn, after which it is erased without undue delay.
      </p>

      <h2>7. Rights of the Data Subject (KVKK Article 11)</h2>
      <ul>
        <li>To learn whether your personal data is being processed.</li>
        <li>To request information regarding the processing.</li>
        <li>
          To learn the purpose of processing and whether the data is used in line
          with that purpose.
        </li>
        <li>
          To know the third parties to whom data is transferred domestically or
          abroad.
        </li>
        <li>
          To request correction if data is incomplete or incorrect.
        </li>
        <li>
          To request deletion or destruction under the conditions of Article 7.
        </li>
        <li>
          To request that corrections, deletions or destructions be notified to
          third parties to whom data was transferred.
        </li>
        <li>
          To object to outcomes derived solely from automated processing.
        </li>
        <li>
          To claim compensation for damages incurred due to unlawful processing.
        </li>
      </ul>

      <h2>8. How to Apply</h2>
      <p>
        To exercise these rights, please submit a written request to{" "}
        <a href={`mailto:${email}`}>{email}</a>, including information sufficient
        to verify your identity. Applications compliant with the relevant
        Communiqué on the Procedures and Principles for Application to the Data
        Controller are answered within thirty days at the latest.
      </p>

      <h2>9. Cookies</h2>
      <p>
        We use cookies for functionality, performance measurement and limited
        analytics. A separate Cookie Policy describes our cookie use in detail.
      </p>

      <p className="text-xs text-muted">
        Last updated as shown above. This document is informational; a detailed
        legal review by a lawyer or data protection specialist will be performed
        before final publication.
      </p>
    </>
  );
}
