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
  const L = locale as "tr" | "en" | "de" | "ru";
  const m = (tr: string, en: string, de: string, ru: string) =>
    ({ tr, en, de, ru } as Record<typeof L, string>)[L] ?? en;
  const url =
    locale === "tr"
      ? `${SITE_URL}/hakkimizda`
      : `${SITE_URL}/${locale}/hakkimizda`;
  return {
    title: m(
      "Hakkımızda — Bodrumapartvilla",
      "About — Bodrumapartvilla",
      "Über uns — Bodrumapartvilla",
      "О нас — Bodrumapartvilla",
    ),
    description: m(
      "Bodrumapartvilla, Bodrum yarımadasında butik villa konaklama deneyimi sunan, sınırlı koleksiyon ve özenli ortaklık ilkesiyle çalışan bir platformdur.",
      "Bodrumapartvilla is a boutique villa-stay platform across the Bodrum peninsula, working by considered curation and careful partnership rather than scale.",
      "Bodrumapartvilla ist eine Boutique-Plattform für Villenaufenthalte auf der Halbinsel Bodrum, die auf bedachter Auswahl und sorgfältiger Partnerschaft beruht statt auf Menge.",
      "Bodrumapartvilla — бутик-платформа проживания на виллах полуострова Бодрум, работающая через тщательный отбор и бережное партнёрство, а не масштаб.",
    ),
    alternates: { canonical: url },
    openGraph: {
      title: m(
        "Hakkımızda — Bodrumapartvilla",
        "About — Bodrumapartvilla",
        "Über uns — Bodrumapartvilla",
        "О нас — Bodrumapartvilla",
      ),
      description: m(
        "Sayı odaklı değil, seçim odaklı bir konaklama anlayışı.",
        "A considered way of working, not a question of volume.",
        "Eine bedachte Arbeitsweise, keine Frage der Menge.",
        "Осознанный подход к работе, а не вопрос количества.",
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
  const L = locale as "tr" | "en" | "de" | "ru";
  const pick = (tr: string, en: string, de: string, ru: string) =>
    ({ tr, en, de, ru } as Record<typeof L, string>)[L] ?? en;

  return (
    <article className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container-page max-w-3xl">
        {/* Title */}
        <header>
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.32em] text-accent-600">
            {pick("Hakkımızda", "About", "Über uns", "О нас")}
          </p>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-5xl">
            {pick("Hakkımızda", "About", "Über uns", "О нас")}
          </h1>
          <div className="editorial-divider mt-8 max-w-xs" />
        </header>

        {/* Intro */}
        <section className="mt-12 space-y-6 text-[17px] leading-relaxed text-ink/85">
          <p>
            {pick(
              "Bodrumapartvilla, 2013'ten bu yana Bodrum bölgesinde butik villa kiralama deneyimi sunan, sınırlı koleksiyon ve özenli ortaklık ilkesiyle çalışan bir konaklama platformudur.",
              "Founded in 2013, Bodrumapartvilla is a stay platform operating across the Bodrum region, offering a boutique villa-rental experience built on a limited collection and a careful sense of partnership.",
              "Bodrumapartvilla wurde 2013 gegründet und ist eine Aufenthaltsplattform in der Region Bodrum, die ein Boutique-Villenerlebnis auf Grundlage einer begrenzten Kollektion und einer sorgfältigen Partnerschaft bietet.",
              "Основанная в 2013 году, Bodrumapartvilla — платформа проживания в регионе Бодрум, предлагающая бутик-аренду вилл на основе ограниченной коллекции и бережного партнёрства.",
            )}
          </p>
          <p>
            {pick(
              "Sayı odaklı değil, seçim odaklıyız. Her villayı bireysel olarak değerlendirir, koleksiyonumuza titizlikle dahil ederiz.",
              "We work by selection rather than scale. Each villa is reviewed individually before being admitted to the collection, never as a matter of volume.",
              "Wir arbeiten nach Auswahl, nicht nach Menge. Jede Villa wird einzeln geprüft, bevor sie in die Kollektion aufgenommen wird — niemals als reine Frage der Anzahl.",
              "Мы работаем через отбор, а не масштаб. Каждую виллу мы рассматриваем отдельно, прежде чем включить в коллекцию, — никогда ради количества.",
            )}
          </p>
        </section>

        {/* Felsefemiz */}
        <section className="mt-16">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.32em] text-accent-600">
            {pick("Felsefemiz", "Our Philosophy", "Unsere Philosophie", "Наша философия")}
          </p>
          <h2 className="mt-4 font-display text-2xl font-semibold leading-tight text-ink md:text-3xl">
            {pick("Felsefemiz", "Our Philosophy", "Unsere Philosophie", "Наша философия")}
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-ink/85">
            {pick(
              "Bir villa, dört duvar değildir. Mimarisi, konumu, bahçesi, manzarası — birlikte bir atmosfer kurar. Bu atmosferi misafirine aktaran, mülk sahibinin emanetine sahip çıkan bir aracı olmak; bizim işimizi yapma biçimimizdir.",
              "A villa is not four walls. Its architecture, its setting, its garden and its outlook together compose an atmosphere. Carrying that atmosphere to a guest, and honouring the trust an owner places in us along the way, is how we choose to do our work.",
              "Eine Villa ist nicht nur vier Wände. Ihre Architektur, ihre Lage, ihr Garten und ihr Ausblick bilden gemeinsam eine Atmosphäre. Diese Atmosphäre an den Gast weiterzutragen und dabei das Vertrauen des Eigentümers zu wahren, ist die Art, wie wir arbeiten.",
              "Вилла — это не просто четыре стены. Её архитектура, расположение, сад и вид вместе создают атмосферу. Передать эту атмосферу гостю и при этом сберечь доверие владельца — так мы понимаем свою работу.",
            )}
          </p>
        </section>

        {/* Kurucu ekip */}
        <section className="mt-16">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.32em] text-accent-600">
            {pick("Ekibimiz", "Our Team", "Unser Team", "Наша команда")}
          </p>
          <h2 className="mt-4 font-display text-2xl font-semibold leading-tight text-ink md:text-3xl">
            {pick(
              "Bodrumapartvilla Editör Ekibi",
              "The Bodrumapartvilla Editorial Team",
              "Das Bodrumapartvilla-Redaktionsteam",
              "Редакционная команда Bodrumapartvilla",
            )}
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-ink/85">
            {pick(
              "Bodrum'da konaklama yönetimi alanında çalışan ekibimiz; butik ölçeği ve kalite odağını koruyarak büyümeyi savunur.",
              "Our team works in hospitality management across Bodrum, advocating for growth that preserves boutique scale and a discipline of quality.",
              "Unser Team ist im Gastgewerbe-Management in Bodrum tätig und steht für ein Wachstum, das den Boutique-Maßstab und eine Qualitätsdisziplin bewahrt.",
              "Наша команда работает в сфере управления гостеприимством в Бодруме и выступает за рост, сохраняющий бутик-масштаб и дисциплину качества.",
            )}
          </p>
        </section>

        {/* İletişim */}
        <section className="mt-16">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.32em] text-accent-600">
            {pick("İletişim", "Contact", "Kontakt", "Контакты")}
          </p>
          <h2 className="mt-4 font-display text-2xl font-semibold leading-tight text-ink md:text-3xl">
            {pick("İletişim", "Contact", "Kontakt", "Контакты")}
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-ink/85">
            {pick(
              "Konsiyerj hattımız aracılığıyla iletişime geçebilirsiniz.",
              "You are welcome to write to our concierge.",
              "Sie können uns gern über unseren Concierge erreichen.",
              "Вы можете связаться с нами через нашего консьержа.",
            )}
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
                {pick("Telefon", "Phone", "Telefon", "Телефон")}
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
              {pick("İletişim Sayfası", "Contact Page", "Kontaktseite", "Страница контактов")}
            </Link>
            <Link href="/evinizi-kiraya-verin" className="btn-secondary">
              {pick(
                "Villanızı Değerlendirelim",
                "Entrust Your Villa to Us",
                "Vertrauen Sie uns Ihre Villa an",
                "Доверьте нам свою виллу",
              )}
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
