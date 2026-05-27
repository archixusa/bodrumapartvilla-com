import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowUpRight, MessageCircle, Mail } from "lucide-react";
import { Link } from "@/i18n/routing";
import { JsonLd } from "@/components/JsonLd";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://bodrumapartvilla.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isTr = locale === "tr";
  const url = locale === "tr" ? SITE_URL : `${SITE_URL}/${locale}`;
  return {
    title: isTr
      ? "Bodrumapartvilla — Butik Villa Konaklama"
      : "Bodrumapartvilla — A Boutique Villa Collection",
    description: isTr
      ? "Bodrum yarımadasında butik bir villa konaklama platformu. Seçici kurasyon, atmosfer korunması, premium misafir profili. Koleksiyon yakında."
      : "A boutique villa collection across the Bodrum peninsula — built on considered curation, preserved atmosphere and a measured guest profile. Arriving soon.",
    alternates: {
      canonical: url,
      languages: {
        tr: SITE_URL,
        en: `${SITE_URL}/en`,
        de: `${SITE_URL}/de`,
        ru: `${SITE_URL}/ru`,
      },
    },
    openGraph: {
      title: isTr
        ? "Bodrumapartvilla — Butik Villa Konaklama"
        : "Bodrumapartvilla — A Boutique Villa Collection",
      description: isTr
        ? "Bodrum yarımadasında butik bir villa konaklama platformu."
        : "A boutique villa collection across the Bodrum peninsula.",
      url,
      type: "website",
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = await getTranslations({ locale, namespace: "common" });
  const isTr = locale === "tr";

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LodgingBusiness",
      name: "Bodrumapartvilla",
      url: SITE_URL,
      logo: `${SITE_URL}/logo_kare.svg`,
      image: `${SITE_URL}/logo_kare.svg`,
      description: isTr
        ? "Bodrum yarımadasında butik bir villa konaklama koleksiyonu."
        : "A boutique villa collection across the Bodrum peninsula.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bodrum",
        addressRegion: "Muğla",
        addressCountry: "TR",
      },
      areaServed: "Bodrum",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      url: SITE_URL,
      name: "bodrumapartvilla.com",
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* HERO — minimal, generous whitespace, no demo imagery */}
      <section className="relative overflow-hidden pt-40 pb-32 md:pt-48 md:pb-40">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(50% 50% at 25% 25%, rgba(217,178,110,0.10) 0%, transparent 60%), radial-gradient(45% 45% at 80% 80%, rgba(109,144,220,0.08) 0%, transparent 60%)",
          }}
        />
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <MonoLabel className="text-accent-600" withLine={false}>
              {isTr
                ? "Bodrum · Butik Konaklama"
                : "Bodrum · Boutique Stays"}
            </MonoLabel>
            <h1 className="mt-10 font-display text-5xl font-semibold leading-[0.98] tracking-tight text-ink md:text-7xl">
              {isTr ? (
                <>
                  Bodrum&apos;da,
                  <br />
                  <span className="italic text-gradient-gold">ölçülü</span> bir
                  konaklama anlayışı.
                </>
              ) : (
                <>
                  In Bodrum,
                  <br />
                  a <span className="italic text-gradient-gold">considered</span>{" "}
                  way to stay.
                </>
              )}
            </h1>
            <div className="editorial-divider mx-auto mt-12 max-w-xs" />
            <p className="mt-12 text-balance text-base leading-relaxed text-ink/85 md:text-lg">
              {isTr
                ? "Bodrumapartvilla, sayısı sınırlı bir villa koleksiyonu kurmaktadır. Mülkler, mimarisi ve karakteriyle değerlendirilir; misafire ulaşan deneyim, bu sessiz seçiciliğin karşılığıdır."
                : "Bodrumapartvilla is building a small, deliberate collection of villas. Each property is judged on its architecture and its character; what reaches the guest is the result of that quiet discipline."}
            </p>

            <div className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/villalar" className="btn-primary">
                {isTr ? "Koleksiyonu Görün" : "View the Collection"}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/evinizi-kiraya-verin" className="btn-secondary">
                {isTr ? "Mülk Sahibi misiniz?" : "Are you an owner?"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY — replaces "How It Works" of sister site */}
      <section className="section section-soft">
        <div className="container-page">
          <RevealOnScroll className="mx-auto max-w-3xl text-center">
            <MonoLabel className="text-accent-600">
              {isTr ? "Felsefemiz" : "Our Philosophy"}
            </MonoLabel>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
              {isTr
                ? "Bir villa, dört duvar değildir."
                : "A villa is not four walls."}
            </h2>
            <div className="editorial-divider mx-auto mt-8 max-w-xs" />
            <p className="mt-12 font-display text-lg leading-relaxed text-ink/85 md:text-xl">
              {isTr
                ? "Mimarisi, konumu, bahçesi, manzarası — birlikte bir atmosfer kurar. Bu atmosferi misafirine aktaran, mülk sahibinin emanetine sahip çıkan bir aracı olmak; bizim işimizi yapma biçimimizdir."
                : "Its architecture, its setting, its garden, its view — together they shape an atmosphere. Carrying that atmosphere through to a guest, and honouring the trust an owner has placed in us along the way, is how we choose to do our work."}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* VISUAL STORYTELLING — large quiet image bands (CSS-only, no demo photography) */}
      <section className="section relative">
        <div className="container-page">
          <RevealOnScroll>
            <div
              aria-hidden
              className="relative h-[420px] overflow-hidden rounded-[40px] border border-[var(--color-border)] md:h-[560px]"
              style={{
                background:
                  "radial-gradient(80% 80% at 30% 30%, rgba(217,178,110,0.22) 0%, transparent 65%), radial-gradient(70% 70% at 80% 80%, rgba(109,144,220,0.20) 0%, transparent 65%), linear-gradient(160deg, #f8f5ef 0%, #eaf0fb 100%)",
              }}
            >
              <div
                aria-hidden
                className="absolute inset-0 grid-overlay opacity-25 mask-fade-b"
              />
              <div className="relative flex h-full items-center justify-center px-8 text-center">
                <p className="font-display text-2xl italic leading-relaxed text-ink/70 md:text-4xl">
                  {isTr
                    ? "“Önce mekân, sonra liste. Önce karakter, sonra rakam.”"
                    : "“The place first, the listing second. The character first, the numbers second.”"}
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* TRUST STATEMENT — no fake numbers */}
      <section className="section">
        <div className="container-page">
          <RevealOnScroll className="mx-auto max-w-3xl text-center">
            <MonoLabel className="text-accent-600">
              {isTr ? "Ölçü" : "A Measure"}
            </MonoLabel>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
              {isTr
                ? "Bodrum'da butik villa kiralama standartlarını yeniden tanımlıyoruz."
                : "Redefining what a boutique villa stay can mean in Bodrum."}
            </h2>
            <p className="mt-8 text-base leading-relaxed text-ink/80 md:text-lg">
              {isTr
                ? "Sayı yarışı yerine seçicilik. Hız yerine ölçü. Konaklamayı bir hizmet değil, bir emanet olarak gören bir çalışma biçimi. Koleksiyonumuza katılan her villa, bu anlayışın somut bir karşılığıdır."
                : "Selectivity instead of a race for numbers. Measure instead of speed. A way of working that treats a stay as something entrusted, not merely transacted. Every villa joining the collection is the concrete answer to that approach."}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* OWNERS SECTION — link to /evinizi-kiraya-verin */}
      <section className="section section-blue">
        <div className="container-page">
          <RevealOnScroll className="mx-auto max-w-3xl text-center">
            <MonoLabel className="text-accent-600">
              {isTr ? "Mülk Sahipleri İçin" : "For Property Owners"}
            </MonoLabel>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
              {isTr ? "Mülk Sahibi misiniz?" : "Are you a property owner?"}
            </h2>
            <p className="mt-8 text-base leading-relaxed text-ink/80 md:text-lg">
              {isTr
                ? "Bodrum'da bir villanız varsa ve onu sayı odaklı bir kiralama akışına bırakmak istemiyorsanız — değerlendirelim. Mülkler, başvuru sonrası bireysel olarak incelenir; koleksiyona katılım, karşılıklı bir uyumun sonucunda gerçekleşir."
                : "If you own a villa in Bodrum and would rather not entrust it to a high-volume rental flow, we should talk. Properties are reviewed individually after an enquiry; admission to the collection follows only when there is a real, mutual fit."}
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/evinizi-kiraya-verin" className="btn-primary">
                {isTr
                  ? "Villanızı Bizimle Yönetin"
                  : "Entrust Your Villa to Us"}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href={`https://wa.me/${c("whatsappNumber")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <MessageCircle className="h-4 w-4" />
                {isTr ? "Konuşmak için" : "To speak with us"}
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* QUIET CONCIERGE CONTACT */}
      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <MonoLabel className="text-accent-600">
              {isTr ? "Konsiyerj" : "Concierge"}
            </MonoLabel>
            <h2 className="mt-4 font-display text-2xl font-semibold leading-tight text-ink md:text-3xl">
              {isTr
                ? "Konaklamanızı sessizce planlayalım."
                : "Let us plan your stay, quietly."}
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <a
                href={`https://wa.me/${c("whatsappNumber")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 rounded-3xl border border-[var(--color-border)] bg-white/60 p-8 backdrop-blur transition hover:border-accent-500"
              >
                <MessageCircle className="h-7 w-7 text-accent-600" />
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-accent-600">
                  WhatsApp
                </p>
                <p className="font-display text-base font-semibold text-ink">
                  {c("phoneDisplay")}
                </p>
              </a>
              <a
                href={`mailto:${c("email")}`}
                className="flex flex-col items-center gap-3 rounded-3xl border border-[var(--color-border)] bg-white/60 p-8 backdrop-blur transition hover:border-accent-500"
              >
                <Mail className="h-7 w-7 text-accent-600" />
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-accent-600">
                  E-posta
                </p>
                <p className="font-display text-base font-semibold text-ink">
                  {c("email")}
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
