import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Award, Heart, Globe2, Sparkles, ChevronRight, CheckCircle2 } from "lucide-react";
import { OwnerApplicationForm } from "@/lib/reservation-form";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://bodrumapartvilla.com";

export const metadata: Metadata = {
  title: "Villanız İçin Butik Kira Yönetimi | Bodrumapartvilla",
  description:
    "Villanızı premium misafir profili, butik yönetim ve Avrupa erişimiyle yıllık kazanca dönüştürüyoruz. Mülk değerlendirme için başvurun.",
  alternates: { canonical: `${SITE_URL}/evinizi-kiraya-verin` },
  openGraph: {
    title: "Villanız İçin Butik Kira Yönetimi — Bodrumapartvilla",
    description:
      "Premium misafir profili, atmosfer odaklı yönetim, Avrupa erişimi.",
    url: `${SITE_URL}/evinizi-kiraya-verin`,
  },
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const benefits = [
    {
      icon: Award,
      title: "Premium Misafir Profili",
      desc: "Doğrulanmış, yüksek gelirli, sorumlu misafirler. Her rezervasyon öncesi profil incelenir; abuse riskini sıfıra yakın tutuyoruz.",
    },
    {
      icon: Heart,
      title: "Atmosferin Korunması",
      desc: "Villanızın karakteri, tasarımı ve mahremiyeti birinci önceliğimiz. Her giriş sonrası eksiksiz check yapar, malzeme/yapı değişimine asla izin vermeyiz.",
    },
    {
      icon: Globe2,
      title: "Avrupa ve Yerli Erişim",
      desc: "Sitelerimiz TR/EN/DE/RU dört dilde yayında. Bal ayı çiftleri, geniş aileler ve Avrupa'dan gelen üst segment misafirleri direkt size yönlendiriyoruz.",
    },
  ];

  const stats = [
    { value: "₺ 42K", label: "Ortalama gecelik" },
    { value: "%76", label: "Yaz doluluk" },
    { value: "4.9", label: "Misafir puanı" },
    { value: "30%", label: "AB ülkesi misafir" },
  ];

  const principles = [
    {
      title: "İhtimam",
      desc: "Her villayı sahibinin gözünden değerlendiriyoruz. Lüks objeler, sanat eserleri, taş zeminler, antika mobilyalar için özel envanter kayıtları, fotoğraf arşivi ve özel temizlik prosedürleri.",
    },
    {
      title: "Saygı",
      desc: "Misafir akışını kontrol ediyoruz. Çocuklu aile sayısı sınırlı, parti yasak, yüksek müzik yasak. Sözleşmede açık ihlal halinde anında çıkış maddesi var.",
    },
    {
      title: "Şeffaflık",
      desc: "%15 sabit komisyon. Pazarlama, fotoğraf, listeleme — hepsi içinde. Aylık detaylı hesap kesim, gelir-gider izleme, banka entegrasyonlu raporlama.",
    },
  ];

  const faqs = [
    {
      q: "Komisyon oranı kaç?",
      a: "Sabit %15. Premium tier yoktur, gizli ücret yoktur. Pazarlama, profesyonel fotoğraf, drone çekimi, çok dilli içerik üretimi, tüm operasyonel maliyetler bu orana dahildir.",
    },
    {
      q: "Misafirleri nasıl filtreliyorsunuz?",
      a: "Her rezervasyon öncesi misafirlerin kimlik bilgilerini, daha önce kaldıkları yerlerin yorumlarını, sosyal medya profillerini inceliyoruz. Tek gece kalmak isteyen, parti odaklı veya 'çok kalabalık grup' başvurularını reddediyoruz. Villanızın itibar dosyası bizim için kutsal.",
    },
    {
      q: "Mülkümün anahtarları kimde?",
      a: "Smart lock + güvenlik kamerası (giriş alanında, iç mekanlarda değil) kombinasyonu kuruyoruz. Anahtar fiziksel olarak bizde kalır, misafire dijital kod veririz. Sezon sonunda kodlar değişir.",
    },
    {
      q: "Sezon dışı ben kullanabilir miyim?",
      a: "Tabi ki — sözleşmede yıl başında belirleyeceğiniz 'kişisel kullanım' tarihleri var. Önceden bildirildikten sonra istediğiniz gibi kullanırsınız. Sürpriz kullanım için bile 24 saat öncesinden haber verirseniz hazırlayabiliriz.",
    },
    {
      q: "Pazarlama nasıl yapılıyor?",
      a: "Kendi site ekosistemimiz (TR/EN/DE/RU) + Booking + Airbnb + Vrbo + Tripadvisor entegrasyonu. Buna ek olarak Google Ads, Meta Ads, Instagram Reels, B2B partnership (organize ettiğimiz turlardan gelen misafirler). Yıllık 8.000+ premium başvuruyu mülklerimize yönlendiriyoruz.",
    },
    {
      q: "Fiyatlandırma dinamik mi?",
      a: "Evet. Sezon yoğunluğuna, hafta sonu/hafta içi farkına, AB tatil dönemlerine ve büyük etkinliklere (Bodrum Yelken Festivali vb.) göre fiyat optimizasyonu yapıyoruz. Karar her zaman sizinle birlikte alınır — biz tavsiye veririz, son söz sizdedir.",
    },
    {
      q: "Hasar ve abuse durumu?",
      a: "5.000-15.000 TL arası depozito (mülk değerine göre). Hasar durumunda profesyonel fotoğraflı kayıt + raporlama. Tahsilat misafirden, yetmezse depozitodan. Türkiye'nin önde gelen turizm sigortası şirketleriyle anlaşmamız var; premium mülkler için yıllık abonelik öneriyoruz.",
    },
    {
      q: "Hangi bölgelerle çalışıyorsunuz?",
      a: "Bodrum yarımadasının özellikle özel havuzlu villa segmenti yoğun olduğu bölgeler: Yalıkavak, Türkbükü, Gündoğan, Torba, Bitez'in iç kısmı. Apartlar için tüm bölgeler.",
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Bodrum Premium Villa Kira Yönetimi",
      provider: { "@type": "LodgingBusiness", name: "Bodrumapartvilla.com" },
      areaServed: "Bodrum, Muğla, TR",
      description:
        "Bodrum'daki özel havuzlu villalar için butik kira yönetimi. Premium misafir profili, atmosfer odaklı yönetim, Avrupa erişimi.",
      url: `${SITE_URL}/evinizi-kiraya-verin`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div
          aria-hidden
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 30% 20%, #3FB2C2 0%, transparent 55%), radial-gradient(ellipse at 80% 80%, #FF8A3D 0%, transparent 50%)",
          }}
        />
        <div className="container-page relative py-24 md:py-32 lg:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <span className="kicker-light">Villa Sahipleri İçin</span>
            <h1 className="mt-6 font-display text-white">
              Villanız İçin{" "}
              <span className="font-display italic text-accent-400">
                Butik Kira Yönetimi
              </span>
            </h1>
            <span className="mx-auto mt-7 block h-px w-20 bg-accent-400" />
            <p className="mt-7 text-base text-white/85 md:text-lg">
              Mülkünüzü deneyim odaklı misafirlerle buluşturuyor, gelirinizi
              premium segmentte konumlandırıyoruz. Atmosfer korunur, kazanç
              yükselir, siz huzurlu kalırsınız.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a href="#basvur" className="btn-primary">
                Mülkümü Değerlendirin <ChevronRight className="h-4 w-4" />
              </a>
              <a href="#ilkelerimiz" className="btn-outline-light">
                İlkelerimiz
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="kicker">Yaklaşımımız</span>
            <h2 className="mt-4">
              <span className="font-display italic">Premium</span> segmente özel
            </h2>
            <span className="divider-accent mt-5 block" />
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="card flex flex-col gap-4 p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-xl">{b.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section section-deep relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at 40% 50%, #3FB2C2 0%, transparent 50%)",
          }}
        />
        <div className="container-page relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="kicker-light">Performans</span>
            <h2 className="mt-4 text-white">
              <span className="font-display italic">Geçen yılın</span> ortalamaları
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-5xl font-bold text-accent-400">
                  {s.value}
                </p>
                <p className="mt-2 text-sm uppercase tracking-kicker text-white/70">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section id="ilkelerimiz" className="section section-soft">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="kicker">Üç İlke</span>
            <h2 className="mt-4">Çalışma prensibimiz</h2>
            <span className="divider-accent mt-5 block" />
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {principles.map((p, i) => (
              <div key={p.title} className="rounded-2xl border border-[var(--color-border)] bg-white p-7">
                <span className="font-display text-5xl italic text-accent-500/80">
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSPARENCY */}
      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="kicker">Komisyon</span>
            <h2 className="mt-4">
              <span className="font-display italic">Tek oran,</span> tüm hizmetler dahil
            </h2>
            <p className="mt-5 text-muted">
              Diğer butik kira yönetimi şirketleri genellikle "premium tier",
              "fotoğraf ücreti", "pazarlama paketi" diye ayrıştırma yapar. Sonunda
              gerçek komisyon %25-30'a çıkar.
            </p>
            <p className="mt-3 text-muted">
              Bizde tek oran var: <strong>%15 brüt ciro üzerinden.</strong> Bu
              orana drone çekimi, profesyonel iç mekan fotoğrafı, 4 dilli
              içerik, Google/Meta reklam bütçemiz, B2B partnership trafiği
              hepsi dahildir.
            </p>
          </div>
          <div className="card p-7">
            <h3 className="text-lg">Örnek: 7 günlük rezervasyon</h3>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between border-b border-[var(--color-border)] pb-2">
                <dt className="text-muted">Premium villa 7 gece</dt>
                <dd className="font-semibold">€ 4.200</dd>
              </div>
              <div className="flex justify-between border-b border-[var(--color-border)] pb-2">
                <dt className="text-muted">%15 komisyon</dt>
                <dd className="font-semibold text-accent-500">- € 630</dd>
              </div>
              <div className="flex justify-between border-b border-[var(--color-border)] pb-2">
                <dt className="text-muted">Profesyonel temizlik (misafirden)</dt>
                <dd className="font-semibold">€ 0</dd>
              </div>
              <div className="flex justify-between border-b border-[var(--color-border)] pb-2">
                <dt className="text-muted">Pazarlama / fotoğraf / reklam</dt>
                <dd className="font-semibold">€ 0</dd>
              </div>
              <div className="flex justify-between pt-2 text-lg">
                <dt className="font-bold">Size yansıyacak</dt>
                <dd className="font-bold text-success">€ 3.570</dd>
              </div>
            </dl>
            <p className="mt-4 text-xs text-muted">
              Sezon ortalama 12-14 rezervasyon = yıllık <strong>€ 42.000+ net</strong>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-soft">
        <div className="container-page max-w-3xl">
          <div className="text-center">
            <span className="kicker">FAQ</span>
            <h2 className="mt-4">Sıkça Sorulanlar</h2>
            <span className="divider-accent mt-5 block" />
          </div>
          <div className="mt-12 divide-y divide-[var(--color-border)] rounded-2xl border border-[var(--color-border)] bg-white">
            {faqs.map((f, i) => (
              <details key={i} className="group p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold">
                  <span>{f.q}</span>
                  <ChevronRight className="h-5 w-5 transition group-open:rotate-90" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="basvur" className="section section-deep relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 50%, #FF8A3D 0%, transparent 50%)",
          }}
        />
        <div className="container-page relative grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="kicker-light">Başvuru</span>
            <h2 className="mt-4 text-white">
              <span className="font-display italic text-accent-400">
                Mülkünüzü
              </span>{" "}
              tanıtmak için
            </h2>
            <p className="mt-5 text-white/85">
              Form 3 dakika sürer. Tüm bilgileriniz gizlidir. Ekibimiz aynı gün
              içinde size dönüş yaparak randevu ayarlar; gelir öngörüsü,
              fotoğraf çekim planı ve sözleşme detaylarını yerinde paylaşır.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-white/85">
              {[
                "Yerinde mülk değerlendirme + profesyonel gözlem",
                "12 aylık gelir tahmin raporu (ücretsiz)",
                "Profesyonel fotoğraf + drone çekimi",
                "Yayın öncesi son onay her zaman sizde",
              ].map((it) => (
                <li key={it} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent-400" />
                  {it}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-accent-400" />
              <p className="text-sm text-white/85">
                Referansla gelen villalar için ek <strong>%2 indirim</strong>
              </p>
            </div>
          </div>
          <OwnerApplicationForm
            siteName="bodrumapartvilla"
            whatsappNumber="905385124088"
            kvkkUrl="/kvkk"
            tone="luxury"
          />
        </div>
      </section>
    </>
  );
}
