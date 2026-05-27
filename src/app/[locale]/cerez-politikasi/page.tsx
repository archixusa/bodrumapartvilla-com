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
  const t = await getTranslations({ locale, namespace: "cookies" });
  const url =
    locale === "tr"
      ? `${SITE_URL}/cerez-politikasi`
      : `${SITE_URL}/${locale}/cerez-politikasi`;
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
  const t = await getTranslations({ locale, namespace: "cookies" });
  const c = await getTranslations({ locale, namespace: "common" });
  const isTr = locale === "tr";

  return (
    <LegalLayout
      title={t("h1")}
      subtitle={t("subtitle")}
      lastUpdate={t("lastUpdate")}
      homeLabel={isTr ? "Ana Sayfa" : "Home"}
    >
      {isTr ? (
        <CookiesTr email={c("email")} />
      ) : (
        <CookiesEn email={c("email")} />
      )}
    </LegalLayout>
  );
}

function CookiesTr({ email }: { email: string }) {
  return (
    <>
      <p>
        Bodrumapartvilla; site deneyiminin sade, hızlı ve güvenilir olmasını
        sağlamak için sınırlı sayıda çerez kullanır. Aşağıdaki metin, hangi
        kategorilerde çerez işlettiğimizi, hangi üçüncü tarafların devreye
        girdiğini ve tercihinizi nasıl yönetebileceğinizi ölçülü bir dille
        açıklamak için hazırlanmıştır.
      </p>

      <h2>1. Çerez Nedir?</h2>
      <p>
        Çerez (cookie), bir web sitesini ziyaret ettiğinizde tarayıcınızın
        cihazınıza yerleştirdiği küçük bir metin dosyasıdır. Çerezler, ziyaretçinin
        siteye dönüşlerinde tercihlerini hatırlamak, oturumun sürekliliğini
        sağlamak ve site kullanımı hakkında genel istatistikler üretmek üzere
        tasarlanmıştır. Tek başlarına sizi kişisel olarak tanımlamazlar; ancak
        diğer verilerle birleşip bir kullanıcı profili oluşturabildikleri için
        kişisel veri kapsamında değerlendirilirler.
      </p>

      <h2>2. Sitemizde Kullanılan Çerez Kategorileri</h2>
      <p>
        Çerezleri, işlevsel ihtiyacın gerektirdiği en dar çerçevede dört kategori
        altında ele alıyoruz:
      </p>
      <ul>
        <li>
          <strong>Zorunlu çerezler.</strong> Sitenin temel bileşenlerinin
          çalışması, dil tercihinin korunması, formların gönderilebilmesi ve
          güvenlik kontrolleri için kaçınılmazdır. Bu çerezler kapatıldığında
          site beklenen biçimde işlemez; bu nedenle rıza şartına tabi değildir.
        </li>
        <li>
          <strong>Performans çerezleri.</strong> Hangi sayfaların ne sıklıkta
          ziyaret edildiğini, kullanıcıların site içinde nasıl hareket ettiğini
          ve hata yaşanan noktaları anonim biçimde ölçer. Amaç, sayfaların
          okunabilirliğini ve teknik akıcılığını gözden geçirmektir.
        </li>
        <li>
          <strong>Fonksiyonel çerezler.</strong> Bölge, para birimi veya
          görüntülenen dil gibi tercihleri hatırlayarak ziyaretler arasında
          tutarlı bir deneyim sunar. Devre dışı bırakıldığında siteyi
          kullanmayı engellemez; yalnızca her ziyarette tercihlerin yeniden
          ayarlanmasını gerektirir.
        </li>
        <li>
          <strong>Hedefleme ve pazarlama çerezleri.</strong> Yalnızca açık
          rızanız olduğunda devreye girer. Tanıtım iletilerimizin alaka
          düzeyini ölçmek ve site dışı reklam yerleşimlerinin etkinliğini
          değerlendirmek için kullanılır.
        </li>
      </ul>

      <h2>3. Üçüncü Taraf Çerezleri</h2>
      <p>
        Site içinde yer alan bazı çerezler, hizmet aldığımız üçüncü taraflar
        tarafından yerleştirilir. Şu anda öncelikli olarak çalıştığımız üçüncü
        taraf hizmet, Google Analytics&apos;tir. Bu hizmet; sayfaların
        görüntülenme sayısı, ziyaretçi oturum süresi ve genel kullanım örüntüsü
        gibi anonim ölçümler üretir. Bireysel kullanıcı kimliği toplamamayı
        seçtiğimiz ölçüde IP adresleri maskelenir.
      </p>
      <p>
        Google Analytics çerezlerinin işleyişine ilişkin ayrıntılı bilgi,
        Google&apos;ın kendi gizlilik metinlerinde belirtilmiştir. Aynı şekilde,
        sitemiz harici platformlara yönlendiren bağlantıları takip etmeniz
        durumunda, ilgili platformların kendi çerez politikaları geçerli olur.
      </p>

      <h2>4. Çerez Tercihlerinizi Yönetme</h2>
      <p>
        Çerez tercihlerinizi iki ayrı kanal üzerinden yönetebilirsiniz:
      </p>
      <ul>
        <li>
          <strong>Tarayıcı ayarları.</strong> Tüm modern tarayıcılar, daha önce
          yerleştirilmiş çerezleri silmenize ve gelecekte yerleştirilecek
          çerezleri kategorik olarak engellemenize olanak verir. Bu ayarlar;
          Chrome, Safari, Firefox, Edge gibi tarayıcıların &quot;Gizlilik ve
          Güvenlik&quot; bölümlerinden değiştirilebilir.
        </li>
        <li>
          <strong>Site içi çerez yönetimi.</strong> Sitemizde sunulan çerez
          yönetimi katmanı, zorunlu olmayan çerez kategorilerine ilişkin
          rızanızı her zaman geri çekmenize imkân tanır.
        </li>
      </ul>
      <p>
        Tüm çerezleri reddetmeniz hâlinde sitenin temel işlevleri çalışmaya
        devam eder; yalnızca tercih hatırlama ve istatistiksel ölçüm gibi
        konfor odaklı özellikler sınırlanır.
      </p>

      <h2>5. KVKK ile İlişkisi</h2>
      <p>
        Çerezler aracılığıyla elde edilen veriler, KVKK&apos;nın uygulanabilir
        olduğu hâllerde Aydınlatma Metni&apos;nde belirtilen ilkelere göre
        işlenir. Zorunlu olmayan çerezler için açık rıza esastır ve bu rıza
        dilediğiniz zaman geri alınabilir.
      </p>

      <h2>6. İletişim</h2>
      <p>
        Çerez politikamıza ya da kişisel verilerinize ilişkin sorularınız için{" "}
        <a href={`mailto:${email}`}>{email}</a> adresine yazabilirsiniz. Bu metin
        zaman içinde güncellenebilir; güncellemeler bu sayfada yayımlandığı
        andan itibaren geçerli olur.
      </p>

      <p className="text-xs text-muted">
        İşbu metin bilgilendirme amaçlıdır. Detaylı hukuki revizyon için bir
        avukat ya da veri koruma uzmanından görüş alınacaktır.
      </p>
    </>
  );
}

function CookiesEn({ email }: { email: string }) {
  return (
    <>
      <p>
        Bodrumapartvilla uses a limited set of cookies to keep the site fast,
        reliable and quietly considered. The notice below explains, in measured
        terms, which categories we run, which third parties are involved, and
        how you can manage your preferences at any time.
      </p>

      <h2>1. What Is a Cookie?</h2>
      <p>
        A cookie is a small text file placed by your browser on your device when
        you visit a website. Cookies allow a site to remember preferences, keep
        a session alive and produce aggregate usage statistics. They do not
        identify you on their own, but when combined with other data they may
        constitute personal data and are treated as such.
      </p>

      <h2>2. Categories Used on This Site</h2>
      <ul>
        <li>
          <strong>Strictly necessary.</strong> Required for core site
          functionality, language preference, form submission and security
          checks. Disabling them breaks the site, and they do not require
          consent.
        </li>
        <li>
          <strong>Performance.</strong> Anonymously measure which pages are
          visited and where users encounter friction, so that we may refine
          legibility and technical fluency.
        </li>
        <li>
          <strong>Functional.</strong> Remember region, currency or language
          preference for a consistent experience between visits. Disabling them
          does not block use of the site; preferences must simply be set again.
        </li>
        <li>
          <strong>Targeting and marketing.</strong> Only active with your
          explicit consent. Used to measure the relevance of our communications
          and the effectiveness of any off-site placements.
        </li>
      </ul>

      <h2>3. Third-Party Cookies</h2>
      <p>
        Some cookies on the site are placed by third parties from whom we
        receive services. The primary third-party service is currently Google
        Analytics, which generates anonymous metrics such as page views,
        average session duration and general usage patterns. To the extent
        possible, IP addresses are masked and individual user identification
        is avoided.
      </p>
      <p>
        Detailed information about Google Analytics is set out in
        Google&apos;s own privacy notices. If you follow links from our site to
        third-party platforms, those platforms&apos; cookie policies apply
        instead.
      </p>

      <h2>4. Managing Your Preferences</h2>
      <ul>
        <li>
          <strong>Browser settings.</strong> Every modern browser lets you
          delete previously stored cookies and block future ones by category.
          These controls usually sit under the &quot;Privacy and Security&quot;
          area in Chrome, Safari, Firefox and Edge.
        </li>
        <li>
          <strong>On-site cookie controls.</strong> The cookie management layer
          on our site allows you to withdraw consent for non-essential
          categories at any time.
        </li>
      </ul>
      <p>
        Refusing all cookies leaves the core functionality intact and limits
        only convenience features such as preference memory and statistical
        measurement.
      </p>

      <h2>5. Relationship with KVKK</h2>
      <p>
        Data obtained through cookies is processed in line with the principles
        set out in our Privacy Notice where KVKK applies. Non-essential
        cookies rely on explicit consent, which may be withdrawn at any time.
      </p>

      <h2>6. Contact</h2>
      <p>
        For questions about this policy or your personal data, please write to{" "}
        <a href={`mailto:${email}`}>{email}</a>. This notice may be updated over
        time, with revisions effective as of the date of publication on this
        page.
      </p>

      <p className="text-xs text-muted">
        This document is informational. A detailed legal review by a lawyer or
        data protection specialist will be performed before final publication.
      </p>
    </>
  );
}
