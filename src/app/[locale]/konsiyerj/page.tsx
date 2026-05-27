import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  ArrowUpRight,
  MessageCircle,
  CarFront,
  ChefHat,
  Ship,
  CalendarDays,
  TicketCheck,
  HandHeart,
} from "lucide-react";
import { MonoLabel } from "@/components/ui/MonoLabel";
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
    locale === "tr" ? `${SITE_URL}/konsiyerj` : `${SITE_URL}/${locale}/konsiyerj`;
  return {
    title: isTr
      ? "Konsiyerj — Konaklama ötesinde, eşlik eden bir hizmet"
      : "Concierge — A service that accompanies the stay",
    description: isTr
      ? "Bodrum'da butik villa misafirleri için özel transfer, özel şef, tekne ve yat, etkinlik organizasyonu, rezervasyonlar ve kişisel ihtiyaçlar — tek bir ekipten."
      : "Private transfers, private chefs, yachts, events, reservations and personal requests for boutique villa guests in Bodrum — from one team.",
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: isTr
        ? "Konsiyerj — Konaklama ötesinde, eşlik eden bir hizmet"
        : "Concierge — A service that accompanies the stay",
      description: isTr
        ? "Bodrum'da butik villa misafirleri için tek noktadan konsiyerj."
        : "One-team concierge for boutique villa guests in Bodrum.",
    },
  };
}

export default async function ConciergePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = await getTranslations({ locale, namespace: "common" });
  const isTr = locale === "tr";

  const services = isTr
    ? [
        {
          icon: CarFront,
          title: "Özel Transfer",
          body:
            "Milas-Bodrum Havalimanı'ndan villanıza kadar bagajınızla beraber sessizce geçen bir araç. Sedan, minivan ya da VIP sprinter; saat, kişi sayısı ve bagaj hacmine göre planlanır.",
        },
        {
          icon: ChefHat,
          title: "Özel Şef",
          body:
            "Villanızın mutfağında, sizin için pişirilmiş bir akşam yemeği. Pazardan günlük seçim, menü tasarımı, servis ve sonrasında temiz bir mutfak — her şey ekibimizin elinden geçer.",
        },
        {
          icon: Ship,
          title: "Tekne ve Yat",
          body:
            "Günübirlik gulet, özel charter ya da yat. Villanın iskelesinden ya da yakın marinadan kalkış. Rota, mola koyları ve ikram, kalabalığınıza göre düzenlenir.",
        },
        {
          icon: CalendarDays,
          title: "Etkinlik Organizasyonu",
          body:
            "Bal ayı, yıldönümü, doğum günü, küçük bir nikah ya da kurumsal bir akşam. Çiçek, masa, ışık, müzik ve fotoğraf — bütün parçalar tek bir ele teslim edilir.",
        },
        {
          icon: TicketCheck,
          title: "Rezervasyonlar",
          body:
            "Marinada şef restoranı, beach club masası, gün batımı kokteyli veya kapalı bir spa randevusu. Doluluk yüksek olsa bile uygun bir saat bulmak çoğunlukla mümkün olur.",
        },
        {
          icon: HandHeart,
          title: "Kişisel İhtiyaçlar",
          body:
            "Bebek bakıcısı, masöz, eğitmen, çiçek, içecek tedariki, fotoğrafçı, doktor. Konaklamanın yumuşak köşelerini dolduran küçük talepler bizim için sıradan bir gündür.",
        },
      ]
    : [
        {
          icon: CarFront,
          title: "Private Transfer",
          body:
            "From Milas-Bodrum Airport to your villa door, with your luggage and a quiet ride. Sedan, minivan or VIP sprinter — chosen by time, number of guests and luggage.",
        },
        {
          icon: ChefHat,
          title: "Private Chef",
          body:
            "An evening cooked for you in your villa's own kitchen. Market sourcing, menu design, service and a cleaned kitchen afterwards — all handled by our team.",
        },
        {
          icon: Ship,
          title: "Yachts and Boats",
          body:
            "A day on a gulet, a private charter or a motoryacht. Departure from the villa's own jetty or the nearest marina. Route, stops and catering are tailored to your group.",
        },
        {
          icon: CalendarDays,
          title: "Event Planning",
          body:
            "A honeymoon dinner, an anniversary, a birthday, a small wedding or a corporate evening. Flowers, table, lighting, music, photography — all in a single, accountable hand.",
        },
        {
          icon: TicketCheck,
          title: "Reservations",
          body:
            "A chef restaurant on the marina, a beach club table, a sunset cocktail, a private spa hour. Even at peak season, a suitable slot is usually within reach.",
        },
        {
          icon: HandHeart,
          title: "Personal Requests",
          body:
            "Nanny, masseur, trainer, florals, drinks delivery, photographer, doctor. The small, soft details of a stay are an ordinary part of our day.",
        },
      ];

  const steps = isTr
    ? [
        {
          n: "01",
          title: "Mesaj",
          body:
            "Yaklaşık planınızı WhatsApp ya da e-posta ile iletirsiniz. Tarih, kişi sayısı ve birkaç tercih yeterlidir.",
        },
        {
          n: "02",
          title: "Öneri",
          body:
            "Konsiyerj ekibimiz, mevcut müsaitliklere göre size ölçülü bir öneri paketi sunar. Tek bir mesajda, gerek görüldüğünde sesli görüşmeyle.",
        },
        {
          n: "03",
          title: "Eşlik",
          body:
            "Konaklamanız süresince WhatsApp hattı açık kalır. Plan değişikliği, yeni bir istek ya da sessiz bir yardım — fark etmeden çözülür.",
        },
      ]
    : [
        {
          n: "01",
          title: "Message",
          body:
            "Share an outline of your plan over WhatsApp or email. Dates, group size and a few preferences are enough.",
        },
        {
          n: "02",
          title: "Proposal",
          body:
            "Our concierge replies with a measured proposal based on current availability. One message, with a call when useful.",
        },
        {
          n: "03",
          title: "Presence",
          body:
            "The WhatsApp line stays open throughout the stay. Changes, new requests and quiet help — handled without friction.",
        },
      ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: isTr ? "Konsiyerj Hizmeti" : "Concierge Service",
    provider: {
      "@type": "LodgingBusiness",
      name: "Bodrumapartvilla",
      url: SITE_URL,
    },
    areaServed: "Bodrum",
    description: isTr
      ? "Bodrum'da butik villa misafirleri için özel transfer, şef, tekne, etkinlik, rezervasyon ve kişisel ihtiyaç koordinasyonu."
      : "Concierge coordination for boutique villa guests in Bodrum: private transfers, chef, yachts, events, reservations and personal requests.",
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* HERO */}
      <section className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32">
        <div aria-hidden className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=2400&q=80"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          />
        </div>
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <MonoLabel className="text-white/90" withLine={false}>
              {isTr ? "Konsiyerj" : "Concierge"}
            </MonoLabel>
            <h1 className="mt-10 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl">
              {isTr
                ? "Konaklama ötesinde, eşlik eden bir hizmet."
                : "A service that accompanies the stay."}
            </h1>
            <div className="editorial-divider mx-auto mt-10 max-w-xs" />
            <p className="mt-10 text-balance text-base leading-relaxed text-white/90 md:text-lg">
              {isTr
                ? "Bir villada konaklamak, evin anahtarını teslim almakla bitmez. Havalimanından villaya geçen yol, mutfakta pişen yemek, bir öğleden sonrayı şekillendiren tekne — bütün bu küçük kararlar arasından ölçülü bir geçişi düzenlemek bizim işimizdir."
                : "Staying in a villa is not the same as receiving a set of keys. The drive from the airport, an evening cooked indoors, a boat that shapes an afternoon — arranging a calm passage through those small choices is our craft."}
            </p>
            <div className="mt-12 flex justify-center">
              <a
                href={`https://wa.me/${c("whatsappNumber")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle className="h-4 w-4" />
                {isTr ? "WhatsApp ile Görüşelim" : "Let's talk on WhatsApp"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section-soft">
        <div className="container-page">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <MonoLabel className="text-accent-600">
              {isTr ? "Hizmet Çerçevesi" : "Scope"}
            </MonoLabel>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              {isTr
                ? "Konaklamayı çevreleyen küçük bir hizmetler ailesi."
                : "A small family of services around the stay."}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <article
                  key={s.title}
                  className="rounded-3xl border border-[var(--color-border)] bg-white/60 p-7 backdrop-blur transition hover:border-accent-500"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/80">
                    {s.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container-page">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <MonoLabel className="text-accent-600">
              {isTr ? "Nasıl Çalışıyor" : "How It Works"}
            </MonoLabel>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              {isTr
                ? "Üç adım, ardından sakin bir konaklama."
                : "Three steps, then a quiet stay."}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.n}
                className="rounded-3xl border border-[var(--color-border)] bg-white/60 p-7 backdrop-blur"
              >
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-accent-600">
                  {step.n}
                </p>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/80">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`https://wa.me/${c("whatsappNumber")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle className="h-4 w-4" />
              {isTr ? "WhatsApp ile Görüşelim" : "Let's talk on WhatsApp"}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
