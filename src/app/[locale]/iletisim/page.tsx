import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
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
    title: isTr ? "İletişim" : "Contact",
    description: isTr
      ? "Konsiyerj ekibimize doğrudan yazın. Tarihleriniz, özel istekleriniz ya da koleksiyonumuza dair sorular için yanıt süremiz 24 saattir."
      : "Write to our concierge directly. Replies within 24 hours for dates, particular requests or any question about the collection.",
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title: isTr ? "İletişim — Bodrumapartvilla" : "Contact — Bodrumapartvilla",
      description: isTr
        ? "Konsiyerj ekibimize doğrudan ulaşabilirsiniz."
        : "Reach our concierge directly.",
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
  const nav = await getTranslations({ locale, namespace: "nav" });
  const c = await getTranslations({ locale, namespace: "common" });
  const isTr = locale === "tr";

  const contactLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: isTr ? "Bodrumapartvilla İletişim" : "Bodrumapartvilla Contact",
    url:
      locale === "tr"
        ? `${SITE_URL}/iletisim`
        : `${SITE_URL}/${locale}/iletisim`,
    publisher: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
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
    <section className="section">
      <JsonLd data={contactLd} />
      <div className="container-page max-w-3xl">
        <h1>{nav("contact")}</h1>
        <p className="mt-3 text-muted">
          {isTr
            ? "WhatsApp en hızlı kanalımız. E-posta ve telefondan da ulaşabilirsiniz."
            : "WhatsApp is our fastest channel. You can also reach us by email or phone."}
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a
            href={`https://wa.me/${c("whatsappNumber")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="card flex items-start gap-3 p-5 hover:border-navy-600"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#25D366]/10 text-[#25D366]">
              <MessageCircle className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold">WhatsApp</p>
              <p className="text-xs text-muted">{c("phoneDisplay")}</p>
            </div>
          </a>
          <a href={`tel:${c("phone").replace(/\s/g, "")}`} className="card flex items-start gap-3 p-5">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-navy-50 text-navy-900">
              <Phone className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold">{c("call")}</p>
              <p className="text-xs text-muted">{c("phoneDisplay")}</p>
            </div>
          </a>
          <a href={`mailto:${c("email")}`} className="card flex items-start gap-3 p-5">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-navy-50 text-navy-900">
              <Mail className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold">E-mail</p>
              <p className="text-xs text-muted">{c("email")}</p>
            </div>
          </a>
          <div className="card flex items-start gap-3 p-5">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-navy-50 text-navy-900">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold">{isTr ? "Konum" : "Location"}</p>
              <p className="text-xs text-muted">Bodrum, Muğla / Türkiye</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
