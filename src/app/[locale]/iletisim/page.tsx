import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Phone, Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";

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
      ? `${SITE_URL}/iletisim`
      : `${SITE_URL}/${locale}/iletisim`;
  return {
    title: isTr ? "İletişim — Bodrumapartvilla" : "Contact — Bodrumapartvilla",
    description: isTr
      ? "Konsiyerj ekibimizle doğrudan iletişime geçebilirsiniz. Yanıt süresi en geç 24 saat."
      : "Write to our concierge directly. Replies within 24 hours.",
    alternates: { canonical: url },
    openGraph: {
      title: isTr
        ? "İletişim — Bodrumapartvilla"
        : "Contact — Bodrumapartvilla",
      description: isTr
        ? "Konaklama talepleri ve mülk başvuruları için konsiyerj ekibimize ulaşabilirsiniz."
        : "Reach our concierge for stay enquiries and owner applications.",
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: isTr ? "Bodrumapartvilla İletişim" : "Bodrumapartvilla Contact",
    url:
      locale === "tr"
        ? `${SITE_URL}/iletisim`
        : `${SITE_URL}/${locale}/iletisim`,
    publisher: {
      "@type": "LocalBusiness",
      name: "Bodrumapartvilla",
      telephone: c("phone"),
      email: c("email"),
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bodrum",
        addressRegion: "Muğla",
        addressCountry: "TR",
      },
    },
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container-page max-w-5xl">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.32em] text-accent-600">
            {isTr ? "İletişim" : "Contact"}
          </p>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-5xl">
            {isTr ? "Konsiyerj ekibimize yazın." : "Write to our concierge."}
          </h1>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted">
            {isTr
              ? "Tarihlerinizi, özel istekleri ya da koleksiyonumuza dair sorularınızı doğrudan paylaşabilirsiniz. Yanıt süresi en geç 24 saattir."
              : "Share your dates, particular requests or any question concerning the collection. We reply within 24 hours."}
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-page max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
            <ContactForm locale={locale} />

            <aside className="space-y-5">
              <div className="rounded-3xl border border-[var(--color-border)] bg-white/60 p-6 backdrop-blur">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-accent-600">
                  {isTr ? "Konsiyerj" : "Concierge"}
                </p>
                <div className="mt-5 space-y-4 text-sm">
                  <a
                    href={`https://wa.me/${c("whatsappNumber")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 text-ink hover:text-accent-600"
                  >
                    <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
                    <span>
                      <span className="block font-semibold">WhatsApp</span>
                      <span className="block font-mono text-xs text-muted">
                        {c("phoneDisplay")}
                      </span>
                    </span>
                  </a>
                  <a
                    href={`tel:${c("phone").replace(/\s/g, "")}`}
                    className="group flex items-start gap-3 text-ink hover:text-accent-600"
                  >
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
                    <span>
                      <span className="block font-semibold">
                        {isTr ? "Telefon" : "Phone"}
                      </span>
                      <span className="block font-mono text-xs text-muted">
                        {c("phoneDisplay")}
                      </span>
                    </span>
                  </a>
                  <a
                    href={`mailto:${c("email")}`}
                    className="group flex items-start gap-3 text-ink hover:text-accent-600"
                  >
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
                    <span>
                      <span className="block font-semibold">E-posta</span>
                      <span className="block font-mono text-xs text-muted">
                        {c("email")}
                      </span>
                    </span>
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-[var(--color-border)] bg-white/60 p-6 backdrop-blur">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-accent-600">
                  {isTr ? "Görüşme Saatleri" : "Hours"}
                </p>
                <div className="mt-4 flex items-start gap-3 text-sm leading-relaxed text-ink/85">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
                  <span>
                    {isTr
                      ? "Hafta içi 09:00 – 19:00. WhatsApp mesajları, görüşme saatleri dışında da konsiyerj ekibimize iletilir."
                      : "Weekdays 09:00 – 19:00. WhatsApp messages reach the concierge outside hours too."}
                  </span>
                </div>
              </div>

              <div className="rounded-3xl border border-[var(--color-border)] bg-white/60 p-6 backdrop-blur">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-accent-600">
                  {isTr ? "Adres" : "Address"}
                </p>
                <div className="mt-4 flex items-start gap-3 text-sm leading-relaxed text-ink/85">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
                  <span>Bodrum, Muğla / Türkiye</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
