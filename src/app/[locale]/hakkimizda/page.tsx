import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { Link } from "@/i18n/routing";

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
      ? `${SITE_URL}/hakkimizda`
      : `${SITE_URL}/${locale}/hakkimizda`;
  return {
    title: isTr ? "Hakkımızda — Bodrumapartvilla" : "About — Bodrumapartvilla",
    description: isTr
      ? "Bodrumapartvilla, Bodrum yarımadasında butik villa konaklama deneyimi sunan, sınırlı koleksiyon ve özenli ortaklık ilkesiyle çalışan bir platformdur."
      : "Bodrumapartvilla is a boutique villa-stay platform across the Bodrum peninsula, working by considered curation and careful partnership rather than scale.",
    alternates: { canonical: url },
    openGraph: {
      title: isTr
        ? "Hakkımızda — Bodrumapartvilla"
        : "About — Bodrumapartvilla",
      description: isTr
        ? "Sayı odaklı değil, seçim odaklı bir konaklama anlayışı."
        : "A considered way of working, not a question of volume.",
      url,
      type: "website",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = await getTranslations({ locale, namespace: "common" });
  const isTr = locale === "tr";

  return (
    <article className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container-page max-w-3xl">
        {/* Title */}
        <header>
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.32em] text-accent-600">
            {isTr ? "Hakkımızda" : "About"}
          </p>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-5xl">
            {isTr ? "Hakkımızda" : "About"}
          </h1>
          <div className="editorial-divider mt-8 max-w-xs" />
        </header>

        {/* Intro */}
        <section className="mt-12 space-y-6 text-[17px] leading-relaxed text-ink/85">
          <p>
            {isTr
              ? "Bodrumapartvilla, 2013'ten bu yana Bodrum bölgesinde butik villa kiralama deneyimi sunan, sınırlı koleksiyon ve özenli ortaklık ilkesiyle çalışan bir konaklama platformudur."
              : "Founded in 2013, Bodrumapartvilla is a stay platform operating across the Bodrum region, offering a boutique villa-rental experience built on a limited collection and a careful sense of partnership."}
          </p>
          <p>
            {isTr
              ? "Sayı odaklı değil, seçim odaklıyız. Her villayı bireysel olarak değerlendirir, koleksiyonumuza titizlikle dahil ederiz."
              : "We work by selection rather than scale. Each villa is reviewed individually before being admitted to the collection, never as a matter of volume."}
          </p>
        </section>

        {/* Felsefemiz */}
        <section className="mt-16">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.32em] text-accent-600">
            {isTr ? "Felsefemiz" : "Our Philosophy"}
          </p>
          <h2 className="mt-4 font-display text-2xl font-semibold leading-tight text-ink md:text-3xl">
            {isTr ? "Felsefemiz" : "Our Philosophy"}
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-ink/85">
            {isTr
              ? "Bir villa, dört duvar değildir. Mimarisi, konumu, bahçesi, manzarası — birlikte bir atmosfer kurar. Bu atmosferi misafirine aktaran, mülk sahibinin emanetine sahip çıkan bir aracı olmak; bizim işimizi yapma biçimimizdir."
              : "A villa is not four walls. Its architecture, its setting, its garden and its outlook together compose an atmosphere. Carrying that atmosphere to a guest, and honouring the trust an owner places in us along the way, is how we choose to do our work."}
          </p>
        </section>

        {/* Furkan Şahin */}
        <section className="mt-16">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.32em] text-accent-600">
            {isTr ? "Kurucu" : "Founder"}
          </p>
          <h2 className="mt-4 font-display text-2xl font-semibold leading-tight text-ink md:text-3xl">
            Furkan Şahin
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-ink/85">
            {isTr
              ? "Kurucu. Bodrum'da konaklama yönetimi alanında çalışmakta, butik ölçeği ve kalite odağını koruyarak büyümeyi savunmaktadır."
              : "Founder. Works in hospitality management across Bodrum, advocating for growth that preserves boutique scale and a discipline of quality."}
          </p>
        </section>

        {/* İletişim */}
        <section className="mt-16">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.32em] text-accent-600">
            {isTr ? "İletişim" : "Contact"}
          </p>
          <h2 className="mt-4 font-display text-2xl font-semibold leading-tight text-ink md:text-3xl">
            {isTr ? "İletişim" : "Contact"}
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-ink/85">
            {isTr
              ? "Konsiyerj hattımız aracılığıyla iletişime geçebilirsiniz."
              : "You are welcome to write to our concierge."}
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <a
              href={`https://wa.me/${c("whatsappNumber")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 rounded-2xl border border-[var(--color-border)] bg-white/60 p-5 backdrop-blur transition hover:border-accent-500"
            >
              <MessageCircle className="h-5 w-5 text-accent-600" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-accent-600">
                WhatsApp
              </span>
              <span className="text-sm font-semibold text-ink">
                {c("phoneDisplay")}
              </span>
            </a>
            <a
              href={`tel:${c("phone").replace(/\s/g, "")}`}
              className="flex flex-col items-center gap-2 rounded-2xl border border-[var(--color-border)] bg-white/60 p-5 backdrop-blur transition hover:border-accent-500"
            >
              <Phone className="h-5 w-5 text-accent-600" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-accent-600">
                {isTr ? "Telefon" : "Phone"}
              </span>
              <span className="text-sm font-semibold text-ink">
                {c("phoneDisplay")}
              </span>
            </a>
            <a
              href={`mailto:${c("email")}`}
              className="flex flex-col items-center gap-2 rounded-2xl border border-[var(--color-border)] bg-white/60 p-5 backdrop-blur transition hover:border-accent-500"
            >
              <Mail className="h-5 w-5 text-accent-600" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-accent-600">
                E-posta
              </span>
              <span className="text-sm font-semibold text-ink">
                {c("email")}
              </span>
            </a>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/iletisim" className="btn-primary">
              {isTr ? "İletişim Sayfası" : "Contact Page"}
            </Link>
            <Link href="/evinizi-kiraya-verin" className="btn-secondary">
              {isTr ? "Villanızı Bizimle Yönetin" : "Entrust Your Villa to Us"}
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
