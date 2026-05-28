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
  const t = (tr: string, en: string, de: string, ru: string) =>
    locale === "tr" ? tr : locale === "de" ? de : locale === "ru" ? ru : en;
  const url =
    locale === "tr"
      ? `${SITE_URL}/iletisim`
      : `${SITE_URL}/${locale}/iletisim`;
  return {
    title: t(
      "İletişim — Bodrumapartvilla",
      "Contact — Bodrumapartvilla",
      "Kontakt — Bodrumapartvilla",
      "Контакты — Bodrumapartvilla"
    ),
    description: t(
      "Konsiyerj ekibimizle doğrudan iletişime geçebilirsiniz. Yanıt süresi en geç 24 saat.",
      "Write to our concierge directly. Replies within 24 hours.",
      "Schreiben Sie unserem Concierge direkt. Antwort innerhalb von 24 Stunden.",
      "Вы можете написать нашему консьержу напрямую. Ответ в течение 24 часов."
    ),
    alternates: { canonical: url },
    openGraph: {
      title: t(
        "İletişim — Bodrumapartvilla",
        "Contact — Bodrumapartvilla",
        "Kontakt — Bodrumapartvilla",
        "Контакты — Bodrumapartvilla"
      ),
      description: t(
        "Konaklama talepleri ve mülk başvuruları için konsiyerj ekibimize ulaşabilirsiniz.",
        "Reach our concierge for stay enquiries and owner applications.",
        "Wenden Sie sich an unseren Concierge für Aufenthaltsanfragen und Eigentümeranträge.",
        "Свяжитесь с нашим консьержем по вопросам бронирования и заявок от владельцев."
      ),
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
  const t = (tr: string, en: string, de: string, ru: string) =>
    locale === "tr" ? tr : locale === "de" ? de : locale === "ru" ? ru : en;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: t(
      "Bodrumapartvilla İletişim",
      "Bodrumapartvilla Contact",
      "Bodrumapartvilla Kontakt",
      "Bodrumapartvilla Контакты"
    ),
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
            {t("İletişim", "Contact", "Kontakt", "Контакты")}
          </p>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-5xl">
            {t(
              "Konsiyerj ekibimize yazın.",
              "Write to our concierge.",
              "Schreiben Sie unserem Concierge.",
              "Напишите нашему консьержу."
            )}
          </h1>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted">
            {t(
              "Tarihlerinizi, özel istekleri ya da koleksiyonumuza dair sorularınızı doğrudan paylaşabilirsiniz. Yanıt süresi en geç 24 saattir.",
              "Share your dates, particular requests or any question concerning the collection. We reply within 24 hours.",
              "Teilen Sie uns Ihre Daten, besonderen Wünsche oder Fragen zur Kollektion direkt mit. Wir antworten innerhalb von 24 Stunden.",
              "Поделитесь вашими датами, особыми пожеланиями или любым вопросом о коллекции. Мы отвечаем в течение 24 часов."
            )}
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
                  {t("Konsiyerj", "Concierge", "Concierge", "Консьерж")}
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
                        {t("Telefon", "Phone", "Telefon", "Телефон")}
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
                      <span className="block font-semibold">
                        {t("E-posta", "Email", "E-Mail", "Эл. почта")}
                      </span>
                      <span className="block font-mono text-xs text-muted">
                        {c("email")}
                      </span>
                    </span>
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-[var(--color-border)] bg-white/60 p-6 backdrop-blur">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-accent-600">
                  {t("Görüşme Saatleri", "Hours", "Sprechzeiten", "Часы работы")}
                </p>
                <div className="mt-4 flex items-start gap-3 text-sm leading-relaxed text-ink/85">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
                  <span>
                    {t(
                      "Hafta içi 09:00 – 19:00. WhatsApp mesajları, görüşme saatleri dışında da konsiyerj ekibimize iletilir.",
                      "Weekdays 09:00 – 19:00. WhatsApp messages reach the concierge outside hours too.",
                      "Wochentags 09:00 – 19:00 Uhr. WhatsApp-Nachrichten erreichen den Concierge auch außerhalb dieser Zeiten.",
                      "Будни 09:00 – 19:00. Сообщения в WhatsApp поступают консьержу и в нерабочее время."
                    )}
                  </span>
                </div>
              </div>

              <div className="rounded-3xl border border-[var(--color-border)] bg-white/60 p-6 backdrop-blur">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-accent-600">
                  {t("Adres", "Address", "Adresse", "Адрес")}
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
