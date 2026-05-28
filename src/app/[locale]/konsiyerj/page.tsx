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
  const L = locale as "tr" | "en" | "de" | "ru";
  const m = (tr: string, en: string, de: string, ru: string) =>
    ({ tr, en, de, ru } as Record<typeof L, string>)[L] ?? en;
  const url =
    locale === "tr" ? `${SITE_URL}/konsiyerj` : `${SITE_URL}/${locale}/konsiyerj`;
  return {
    title: m(
      "Konsiyerj — Konaklama ötesinde, eşlik eden bir hizmet",
      "Concierge — A service that accompanies the stay",
      "Concierge — Ein Dienst, der den Aufenthalt begleitet",
      "Консьерж — служба, сопровождающая ваше пребывание",
    ),
    description: m(
      "Bodrum'da butik villa misafirleri için özel transfer, özel şef, tekne ve yat, etkinlik organizasyonu, rezervasyonlar ve kişisel ihtiyaçlar — tek bir ekipten.",
      "Private transfers, private chefs, yachts, events, reservations and personal requests for boutique villa guests in Bodrum — from one team.",
      "Privattransfers, Privatköche, Yachten, Veranstaltungen, Reservierungen und persönliche Wünsche für Gäste von Boutique-Villen in Bodrum — aus einer Hand.",
      "Индивидуальные трансферы, личные шеф-повара, яхты, мероприятия, бронирования и личные пожелания для гостей бутик-вилл в Бодруме — от одной команды.",
    ),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: m(
        "Konsiyerj — Konaklama ötesinde, eşlik eden bir hizmet",
        "Concierge — A service that accompanies the stay",
        "Concierge — Ein Dienst, der den Aufenthalt begleitet",
        "Консьерж — служба, сопровождающая ваше пребывание",
      ),
      description: m(
        "Bodrum'da butik villa misafirleri için tek noktadan konsiyerj.",
        "One-team concierge for boutique villa guests in Bodrum.",
        "Concierge aus einer Hand für Gäste von Boutique-Villen in Bodrum.",
        "Консьерж из одной команды для гостей бутик-вилл в Бодруме.",
      ),
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
  const L = locale as "tr" | "en" | "de" | "ru";
  const pick = (tr: string, en: string, de: string, ru: string) =>
    ({ tr, en, de, ru } as Record<typeof L, string>)[L] ?? en;

  const services = [
    {
      icon: CarFront,
      title: pick(
        "Özel Transfer",
        "Private Transfer",
        "Privattransfer",
        "Индивидуальный трансфер",
      ),
      body: pick(
        "Milas-Bodrum Havalimanı'ndan villanıza kadar bagajınızla beraber sessizce geçen bir araç. Sedan, minivan ya da VIP sprinter; saat, kişi sayısı ve bagaj hacmine göre planlanır.",
        "From Milas-Bodrum Airport to your villa door, with your luggage and a quiet ride. Sedan, minivan or VIP sprinter — chosen by time, number of guests and luggage.",
        "Vom Flughafen Milas-Bodrum bis vor Ihre Villa, mit Ihrem Gepäck und einer ruhigen Fahrt. Limousine, Minivan oder Sprinter — gewählt nach Zeit, Gästezahl und Gepäck.",
        "От аэропорта Милас-Бодрум до дверей вашей виллы, с багажом и в тишине. Седан, минивэн или просторный спринтер — по времени, числу гостей и объёму багажа.",
      ),
    },
    {
      icon: ChefHat,
      title: pick(
        "Özel Şef",
        "Private Chef",
        "Privatkoch",
        "Личный шеф-повар",
      ),
      body: pick(
        "Villanızın mutfağında, sizin için pişirilmiş bir akşam yemeği. Pazardan günlük seçim, menü tasarımı, servis ve sonrasında temiz bir mutfak — her şey ekibimizin elinden geçer.",
        "An evening cooked for you in your villa's own kitchen. Market sourcing, menu design, service and a cleaned kitchen afterwards — all handled by our team.",
        "Ein Abendessen, in der Küche Ihrer Villa für Sie zubereitet. Tägliche Auswahl auf dem Markt, Menügestaltung, Service und eine gereinigte Küche danach — alles durch unser Team.",
        "Ужин, приготовленный для вас на кухне вашей виллы. Ежедневный выбор продуктов на рынке, составление меню, сервировка и чистая кухня после — всё берёт на себя наша команда.",
      ),
    },
    {
      icon: Ship,
      title: pick(
        "Tekne ve Yat",
        "Yachts and Boats",
        "Yachten und Boote",
        "Яхты и лодки",
      ),
      body: pick(
        "Günübirlik gulet, özel charter ya da yat. Villanın iskelesinden ya da yakın marinadan kalkış. Rota, mola koyları ve ikram, kalabalığınıza göre düzenlenir.",
        "A day on a gulet, a private charter or a motoryacht. Departure from the villa's own jetty or the nearest marina. Route, stops and catering are tailored to your group.",
        "Ein Tag auf einer Gulet, ein privater Charter oder eine Motoryacht. Abfahrt vom Steg der Villa oder vom nächsten Hafen. Route, Badebuchten und Verpflegung richten sich nach Ihrer Gruppe.",
        "День на гулете, частный чартер или моторная яхта. Отправление от причала виллы или ближайшей марины. Маршрут, бухты для остановок и угощение — по вашей компании.",
      ),
    },
    {
      icon: CalendarDays,
      title: pick(
        "Etkinlik Organizasyonu",
        "Event Planning",
        "Veranstaltungsplanung",
        "Организация мероприятий",
      ),
      body: pick(
        "Bal ayı, yıldönümü, doğum günü, küçük bir nikah ya da kurumsal bir akşam. Çiçek, masa, ışık, müzik ve fotoğraf — bütün parçalar tek bir ele teslim edilir.",
        "A honeymoon dinner, an anniversary, a birthday, a small wedding or a corporate evening. Flowers, table, lighting, music, photography — all in a single, accountable hand.",
        "Ein Flitterwochen-Dinner, ein Jubiläum, ein Geburtstag, eine kleine Hochzeit oder ein Firmenabend. Blumen, Tafel, Licht, Musik und Fotografie — alles in einer verantwortlichen Hand.",
        "Ужин для медового месяца, годовщина, день рождения, небольшая свадьба или корпоративный вечер. Цветы, стол, свет, музыка и съёмка — всё в одних надёжных руках.",
      ),
    },
    {
      icon: TicketCheck,
      title: pick(
        "Rezervasyonlar",
        "Reservations",
        "Reservierungen",
        "Бронирования",
      ),
      body: pick(
        "Marinada şef restoranı, beach club masası, gün batımı kokteyli veya kapalı bir spa randevusu. Doluluk yüksek olsa bile uygun bir saat bulmak çoğunlukla mümkün olur.",
        "A chef restaurant on the marina, a beach club table, a sunset cocktail, a private spa hour. Even at peak season, a suitable slot is usually within reach.",
        "Ein Sterne-Restaurant am Hafen, ein Tisch im Beach Club, ein Cocktail zum Sonnenuntergang oder eine private Spa-Stunde. Selbst in der Hochsaison findet sich meist ein passender Termin.",
        "Авторский ресторан в марине, столик в бич-клубе, коктейль на закате или закрытый час в спа. Даже в разгар сезона удобное время обычно удаётся найти.",
      ),
    },
    {
      icon: HandHeart,
      title: pick(
        "Kişisel İhtiyaçlar",
        "Personal Requests",
        "Persönliche Wünsche",
        "Личные пожелания",
      ),
      body: pick(
        "Bebek bakıcısı, masöz, eğitmen, çiçek, içecek tedariki, fotoğrafçı, doktor. Konaklamanın yumuşak köşelerini dolduran küçük talepler bizim için sıradan bir gündür.",
        "Nanny, masseur, trainer, florals, drinks delivery, photographer, doctor. The small, soft details of a stay are an ordinary part of our day.",
        "Kinderbetreuung, Masseur, Trainer, Blumen, Getränkelieferung, Fotograf, Arzt. Die kleinen, feinen Details eines Aufenthalts gehören für uns zum Alltag.",
        "Няня, массажист, тренер, цветы, доставка напитков, фотограф, врач. Маленькие, мягкие детали пребывания — для нас обычное дело.",
      ),
    },
  ];

  const steps = [
    {
      n: "01",
      title: pick("Mesaj", "Message", "Nachricht", "Сообщение"),
      body: pick(
        "Yaklaşık planınızı WhatsApp ya da e-posta ile iletirsiniz. Tarih, kişi sayısı ve birkaç tercih yeterlidir.",
        "Share an outline of your plan over WhatsApp or email. Dates, group size and a few preferences are enough.",
        "Sie teilen uns Ihren ungefähren Plan per WhatsApp oder E-Mail mit. Daten, Gästezahl und ein paar Wünsche genügen.",
        "Вы делитесь с нами примерным планом в WhatsApp или по e-mail. Достаточно дат, числа гостей и нескольких пожеланий.",
      ),
    },
    {
      n: "02",
      title: pick("Öneri", "Proposal", "Vorschlag", "Предложение"),
      body: pick(
        "Konsiyerj ekibimiz, mevcut müsaitliklere göre size ölçülü bir öneri paketi sunar. Tek bir mesajda, gerek görüldüğünde sesli görüşmeyle.",
        "Our concierge replies with a measured proposal based on current availability. One message, with a call when useful.",
        "Unser Concierge antwortet mit einem maßvollen Vorschlag auf Basis der aktuellen Verfügbarkeit. In einer Nachricht, bei Bedarf mit einem Anruf.",
        "Наш консьерж отвечает взвешенным предложением, исходя из текущей доступности. Одним сообщением, при необходимости — со звонком.",
      ),
    },
    {
      n: "03",
      title: pick("Eşlik", "Presence", "Begleitung", "Сопровождение"),
      body: pick(
        "Konaklamanız süresince WhatsApp hattı açık kalır. Plan değişikliği, yeni bir istek ya da sessiz bir yardım — fark etmeden çözülür.",
        "The WhatsApp line stays open throughout the stay. Changes, new requests and quiet help — handled without friction.",
        "Die WhatsApp-Linie bleibt während des gesamten Aufenthalts offen. Planänderungen, neue Wünsche oder stille Hilfe — reibungslos gelöst.",
        "Линия WhatsApp остаётся открытой на всё время пребывания. Изменения, новые пожелания или тихая помощь решаются без хлопот.",
      ),
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: pick(
      "Konsiyerj Hizmeti",
      "Concierge Service",
      "Concierge-Dienst",
      "Услуги консьержа",
    ),
    provider: {
      "@type": "LodgingBusiness",
      name: "Bodrumapartvilla",
      url: SITE_URL,
    },
    areaServed: "Bodrum",
    description: pick(
      "Bodrum'da butik villa misafirleri için özel transfer, şef, tekne, etkinlik, rezervasyon ve kişisel ihtiyaç koordinasyonu.",
      "Concierge coordination for boutique villa guests in Bodrum: private transfers, chef, yachts, events, reservations and personal requests.",
      "Concierge-Koordination für Gäste von Boutique-Villen in Bodrum: Privattransfers, Koch, Yachten, Veranstaltungen, Reservierungen und persönliche Wünsche.",
      "Координация консьержа для гостей бутик-вилл в Бодруме: индивидуальные трансферы, шеф-повар, яхты, мероприятия, бронирования и личные пожелания.",
    ),
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* HERO */}
      <section className="relative isolate overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32">
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
              {pick("Konsiyerj", "Concierge", "Concierge", "Консьерж")}
            </MonoLabel>
            <h1 className="mt-10 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl">
              {pick(
                "Konaklama ötesinde, eşlik eden bir hizmet.",
                "A service that accompanies the stay.",
                "Ein Dienst, der den Aufenthalt begleitet.",
                "Служба, что сопровождает ваше пребывание.",
              )}
            </h1>
            <div className="editorial-divider mx-auto mt-10 max-w-xs" />
            <p className="mt-10 text-balance text-base leading-relaxed text-white/90 md:text-lg">
              {pick(
                "Bir villada konaklamak, evin anahtarını teslim almakla bitmez. Havalimanından villaya geçen yol, mutfakta pişen yemek, bir öğleden sonrayı şekillendiren tekne — bütün bu küçük kararlar arasından ölçülü bir geçişi düzenlemek bizim işimizdir.",
                "Staying in a villa is not the same as receiving a set of keys. The drive from the airport, an evening cooked indoors, a boat that shapes an afternoon — arranging a calm passage through those small choices is our craft.",
                "In einer Villa zu wohnen ist mehr, als einen Schlüsselbund zu empfangen. Die Fahrt vom Flughafen, ein im Haus gekochtes Abendessen, ein Boot, das einen Nachmittag prägt — einen ruhigen Weg durch diese kleinen Entscheidungen zu bahnen, ist unser Handwerk.",
                "Жить на вилле — не то же самое, что получить связку ключей. Дорога из аэропорта, ужин, приготовленный дома, лодка, что задаёт ход дня, — выстроить спокойный путь сквозь эти мелкие решения и есть наше ремесло.",
              )}
            </p>
            <div className="mt-12 flex justify-center">
              <a
                href={`https://wa.me/${c("whatsappNumber")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle className="h-4 w-4" />
                {pick(
                "WhatsApp ile Görüşelim",
                "Let's talk on WhatsApp",
                "Auf WhatsApp sprechen",
                "Напишите нам в WhatsApp",
              )}
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
              {pick("Hizmet Çerçevesi", "Scope", "Leistungsumfang", "Объём услуг")}
            </MonoLabel>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              {pick(
                "Konaklamayı çevreleyen küçük bir hizmetler ailesi.",
                "A small family of services around the stay.",
                "Eine kleine Familie von Leistungen rund um den Aufenthalt.",
                "Небольшое семейство услуг вокруг вашего пребывания.",
              )}
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
              {pick("Nasıl Çalışıyor", "How It Works", "So funktioniert es", "Как это работает")}
            </MonoLabel>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              {pick(
                "Üç adım, ardından sakin bir konaklama.",
                "Three steps, then a quiet stay.",
                "Drei Schritte, dann ein ruhiger Aufenthalt.",
                "Три шага — и спокойное пребывание.",
              )}
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
              {pick(
                "WhatsApp ile Görüşelim",
                "Let's talk on WhatsApp",
                "Auf WhatsApp sprechen",
                "Напишите нам в WhatsApp",
              )}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
