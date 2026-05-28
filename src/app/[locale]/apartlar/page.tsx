import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ComingSoonCollection } from "@/components/ComingSoonCollection";

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
      ? `${SITE_URL}/apartlar`
      : `${SITE_URL}/${locale}/apartlar`;
  return {
    title: t(
      "Butik Apart Konaklamaları — Yakında",
      "Boutique Apartment Stays — Coming Soon",
      "Boutique-Apartments — Demnächst",
      "Бутик-апартаменты — Скоро"
    ),
    description: t(
      "Bodrum merkezi ve yarımadasında ölçülü, butik apart konaklamaları. Koleksiyonumuzun apart bölümü yakında yayımlanmaktadır.",
      "Considered, boutique apartment stays in central Bodrum and around the peninsula. The apartment chapter of our collection arrives shortly.",
      "Maßvolle Boutique-Apartments im Zentrum von Bodrum und auf der Halbinsel. Das Apartment-Kapitel unserer Kollektion erscheint in Kürze.",
      "Сдержанные бутик-апартаменты в центре Бодрума и на полуострове. Раздел апартаментов нашей коллекции появится в ближайшее время."
    ),
    alternates: { canonical: url },
    robots: { index: true, follow: true },
  };
}

export default async function ApartlarPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = await getTranslations({ locale, namespace: "common" });
  const t = (tr: string, en: string, de: string, ru: string) =>
    locale === "tr" ? tr : locale === "de" ? de : locale === "ru" ? ru : en;

  return (
    <ComingSoonCollection
      locale={locale}
      whatsappNumber={c("whatsappNumber")}
      whatsappDisplay={c("phoneDisplay")}
      email={c("email")}
      sourcePage="apartlar-coming-soon"
      kicker={t(
        "Koleksiyon · Apart Bölümü",
        "Collection · Apartment Chapter",
        "Kollektion · Apartment-Kapitel",
        "Коллекция · Раздел апартаментов"
      )}
      title={t(
        "Butik Apart Konaklamaları",
        "Boutique Apartment Stays",
        "Boutique-Apartments",
        "Бутик-апартаменты"
      )}
      subtitle={t(
        "Yakında Sizinle",
        "Arriving Soon",
        "Demnächst",
        "Скоро"
      )}
      description={t(
        "Bodrum merkezi ve yarımadasında, ölçülü ve butik karakterini koruyan apart konaklamalardan kurulu, sınırlı bir bölüm hazırlamaktayız. Mülk değerlendirme sürecimiz devam etmekte; ev sahipleri için başvurular açıktır.",
        "We are preparing a small, considered chapter of apartment stays — in central Bodrum and across the peninsula — that hold to a boutique character. Curation is in progress; applications from owners are open.",
        "Wir bereiten ein kleines, sorgfältig gewähltes Kapitel von Apartment-Aufenthalten vor — im Zentrum von Bodrum und auf der Halbinsel —, die ihren Boutique-Charakter bewahren. Die Auswahl läuft; Anfragen von Eigentümern sind willkommen.",
        "Мы готовим небольшой, тщательно отобранный раздел апартаментов — в центре Бодрума и на полуострове, — сохраняющих бутиковый характер. Отбор продолжается; заявки от владельцев открыты."
      )}
      ctaPrimaryLabel={t(
        "Konsiyerj ile Görüşün",
        "Speak with the Concierge",
        "Mit dem Concierge sprechen",
        "Связаться с консьержем"
      )}
      ctaPrimaryHref="/iletisim"
      ctaSecondaryLabel={t(
        "Apartınızı Bizimle Yönetin",
        "Entrust Your Apartment to Us",
        "Vertrauen Sie uns Ihr Apartment an",
        "Доверьте нам ваши апартаменты"
      )}
      ctaSecondaryHref="/evinizi-kiraya-verin"
      philosophyKicker={t(
        "Felsefemiz",
        "Our Philosophy",
        "Unsere Philosophie",
        "Наша философия"
      )}
      philosophyTitle={t(
        "Küçük mekân, büyük özen.",
        "A modest space deserves no less care.",
        "Ein kleiner Raum, ebenso viel Sorgfalt.",
        "Скромное пространство — та же забота."
      )}
      philosophyBody={t(
        "Bir apart, villadan küçük olduğu için daha az özen gerektirmez. Bodrumapartvilla, apart bölümünü de villa koleksiyonu ile aynı titizlikle kurar; her mekânın karakteri ve konumu, kataloğun değil, koleksiyonun parçasıdır.",
        "An apartment, simply because it is smaller, deserves no less care than a villa. The apartment chapter of Bodrumapartvilla is shaped with the same discipline as the villa collection — every space, every setting, treated as part of the collection rather than the catalogue.",
        "Ein Apartment verdient, nur weil es kleiner ist, nicht weniger Sorgfalt als eine Villa. Das Apartment-Kapitel von Bodrumapartvilla entsteht mit derselben Genauigkeit wie die Villa-Kollektion — jeder Raum, jede Lage als Teil der Kollektion, nicht des Katalogs.",
        "Апартаменты, лишь потому что они меньше, заслуживают не меньшей заботы, чем вилла. Раздел апартаментов Bodrumapartvilla создаётся с той же тщательностью, что и коллекция вилл, — каждое пространство и каждое окружение мы воспринимаем как часть коллекции, а не каталога."
      )}
      pillarsKicker={t(
        "Üç Yaklaşım",
        "Three Approaches",
        "Drei Ansätze",
        "Три подхода"
      )}
      pillarsTitle={t(
        "Apart için özel düşünülmüş.",
        "Considered for apartment stays.",
        "Eigens für Apartment-Aufenthalte gedacht.",
        "Продумано именно для апартаментов."
      )}
      pillars={[
        {
          kicker: t(
            "Seçici Kurasyon",
            "Considered Curation",
            "Sorgfältige Auswahl",
            "Тщательный отбор"
          ),
          title: t(
            "Seçici Kurasyon",
            "Considered Curation",
            "Sorgfältige Auswahl",
            "Тщательный отбор"
          ),
          body: t(
            "Apart bölümümüze yalnızca mimari karakteri, konumu ve sunduğu konaklama deneyimi koleksiyonun ruhuna uyan mekânlar dahil edilir. Sayı odaklı değil, seçim odaklı; bu, küçük ölçekli her mülk için ayrı bir değerlendirme gerektirir.",
            "Only spaces whose architecture, setting and stay experience match the spirit of the collection are admitted to the apartment chapter. Selection over volume, in each case, calls for an individual review.",
            "In unser Apartment-Kapitel werden nur Räume aufgenommen, deren Architektur, Lage und Aufenthaltserlebnis dem Geist der Kollektion entsprechen. Auswahl statt Menge — das verlangt in jedem Fall eine eigene Prüfung.",
            "В раздел апартаментов попадают только те пространства, чья архитектура, расположение и опыт проживания созвучны духу коллекции. Отбор важнее количества, и каждый случай требует отдельной оценки."
          ),
        },
        {
          kicker: t(
            "Atmosfer Korunması",
            "Atmosphere Preserved",
            "Atmosphäre bewahrt",
            "Сохранённая атмосфера"
          ),
          title: t(
            "Atmosfer Korunması",
            "Atmosphere Preserved",
            "Atmosphäre bewahrt",
            "Сохранённая атмосфера"
          ),
          body: t(
            "Bir apartın atmosferi, kapısı kapandıktan sonra başlar. Bakım, temizlik ve operasyon süreçlerini, mülkün gündelik karakterine zarar vermeden sürdürecek biçimde planlıyoruz.",
            "An apartment's atmosphere begins behind a closed door. We plan our maintenance, housekeeping and operations so that the daily character of the home is sustained rather than disturbed.",
            "Die Atmosphäre eines Apartments beginnt hinter der geschlossenen Tür. Wir planen Wartung, Reinigung und Betrieb so, dass der alltägliche Charakter des Hauses gewahrt bleibt, statt gestört zu werden.",
            "Атмосфера апартаментов начинается за закрытой дверью. Уход, уборку и обслуживание мы выстраиваем так, чтобы повседневный характер дома сохранялся, а не нарушался."
          ),
        },
        {
          kicker: t(
            "Premium Misafir Profili",
            "Considered Guests",
            "Sorgsam gewählte Gäste",
            "Внимательно отобранные гости"
          ),
          title: t(
            "Premium Misafir Profili",
            "Considered Guests",
            "Sorgsam gewählte Gäste",
            "Внимательно отобранные гости"
          ),
          body: t(
            "Apartlar, çoğu zaman bir villadan daha mahremdir. Misafir profilini bu mahremiyete uygun biçimde değerlendiriyor; konaklamayı paylaşan kişilerle mekânın doğası arasında ölçülü bir uyum kurmaya çalışıyoruz.",
            "Apartments are, often, more intimate than villas. We evaluate enquiries with that intimacy in mind, looking for a measured fit between the people who will share the stay and the temperament of the space.",
            "Apartments sind oft persönlicher als Villen. Wir prüfen Anfragen mit Blick auf diese Nähe und suchen ein maßvolles Verhältnis zwischen den Menschen, die den Aufenthalt teilen, und dem Wesen des Raumes.",
            "Апартаменты нередко более камерны, чем вилла. Мы рассматриваем запросы с учётом этой камерности, стремясь к выверенному соответствию между теми, кто разделит пребывание, и характером пространства."
          ),
        },
      ]}
      newsletter={{
        title: t(
          "Apart bölümü açıldığında bilgi alın.",
          "Be the first to hear when the apartment chapter opens.",
          "Erfahren Sie als Erste, wenn das Apartment-Kapitel öffnet.",
          "Узнайте первыми, когда откроется раздел апартаментов."
        ),
        description: t(
          "Apart bölümümüz koleksiyona eklendiğinde, koleksiyon mektubumuz aracılığıyla sizi bilgilendireceğiz. Sık değil, zamanı geldiğinde yazılır.",
          "We will write to you when the apartment chapter joins the collection — not often, only when there is something to share.",
          "Wir schreiben Ihnen, sobald das Apartment-Kapitel zur Kollektion gehört — nicht oft, nur wenn es etwas mitzuteilen gibt.",
          "Мы напишем вам, когда раздел апартаментов войдёт в коллекцию, — нечасто, только когда есть чем поделиться."
        ),
        placeholder: t(
          "E-posta adresiniz",
          "Your email address",
          "Ihre E-Mail-Adresse",
          "Ваш адрес эл. почты"
        ),
        cta: t(
          "Bültene Katıl",
          "Join the Letter",
          "Dem Brief beitreten",
          "Подписаться на письмо"
        ),
        consentText: t(
          "E-posta adresimin, Bodrumapartvilla koleksiyon bültenine eklenmesini ve apart bölümü ile ilgili bilgi vermek amacıyla işlenmesini kabul ediyorum.",
          "I agree that my email address may be added to the Bodrumapartvilla collection letter and used to inform me about the apartment chapter.",
          "Ich bin damit einverstanden, dass meine E-Mail-Adresse dem Bodrumapartvilla-Kollektionsbrief hinzugefügt und genutzt wird, um mich über das Apartment-Kapitel zu informieren.",
          "Я согласен(на) на добавление моего адреса эл. почты в рассылку коллекции Bodrumapartvilla и его обработку для информирования о разделе апартаментов."
        ),
        successMessage: t(
          "Teşekkür ederiz. Apart bölümü yayımlandığında sizinle iletişime geçeceğiz.",
          "Thank you. We will be in touch when the apartment chapter opens.",
          "Vielen Dank. Wir melden uns, sobald das Apartment-Kapitel öffnet.",
          "Благодарим вас. Мы свяжемся с вами, когда откроется раздел апартаментов."
        ),
        errorMessage: t(
          "Bir aksaklık oluştu. Lütfen kısa süre sonra tekrar deneyiniz.",
          "Something interrupted the request. Please try again shortly.",
          "Etwas hat die Anfrage unterbrochen. Bitte versuchen Sie es in Kürze erneut.",
          "Произошёл сбой. Пожалуйста, повторите попытку чуть позже."
        ),
      }}
      conciergeKicker={t(
        "Konsiyerj",
        "Concierge",
        "Concierge",
        "Консьерж"
      )}
      conciergeTitle={t(
        "Birebir görüşmek istersiniz.",
        "Should you prefer to write directly.",
        "Falls Sie lieber direkt schreiben möchten.",
        "Если вы предпочитаете написать напрямую."
      )}
      conciergeBody={t(
        "Apart bölümümüz için tarihler, özel istekler ya da koleksiyona dair sorularınızı doğrudan konsiyerj ekibimize iletebilirsiniz.",
        "For dates, particular requests, or any question concerning the apartment chapter, you are welcome to write to the concierge.",
        "Für Daten, besondere Wünsche oder jede Frage zum Apartment-Kapitel können Sie sich gern direkt an den Concierge wenden.",
        "По датам, особым пожеланиям или любому вопросу о разделе апартаментов вы можете написать консьержу напрямую."
      )}
      conciergeHours={t(
        "Görüşme saatleri · Hafta içi 09:00 – 19:00",
        "Hours · Weekdays 09:00 – 19:00",
        "Sprechzeiten · Wochentags 09:00 – 19:00",
        "Часы работы · Будни 09:00 – 19:00"
      )}
    />
  );
}
