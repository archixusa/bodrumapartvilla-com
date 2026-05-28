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
  const L = locale as "tr" | "en" | "de" | "ru";
  const m = (tr: string, en: string, de: string, ru: string) =>
    ({ tr, en, de, ru } as Record<typeof L, string>)[L] ?? en;
  const url =
    locale === "tr"
      ? `${SITE_URL}/kiralik`
      : `${SITE_URL}/${locale}/kiralik`;
  return {
    title: m(
      "Konaklama Koleksiyonu — Yakında",
      "Stay Collection — Coming Soon",
      "Aufenthaltskollektion — Demnächst",
      "Коллекция для проживания — скоро",
    ),
    description: m(
      "Bodrum yarımadasında butik konaklama. Koleksiyonumuz yakında yayımlanıyor; konsiyerj hattımız her zaman açıktır.",
      "Boutique stays across the Bodrum peninsula. Our collection arrives soon; the concierge line remains open in the meantime.",
      "Boutique-Aufenthalte auf der Halbinsel Bodrum. Unsere Kollektion erscheint bald; unser Concierge ist in der Zwischenzeit jederzeit erreichbar.",
      "Бутик-проживание на полуострове Бодрум. Наша коллекция появится скоро; консьерж тем временем всегда на связи.",
    ),
    alternates: { canonical: url },
    robots: { index: true, follow: true },
  };
}

export default async function KiralikPage({
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
    <ComingSoonCollection
      locale={locale}
      whatsappNumber={c("whatsappNumber")}
      whatsappDisplay={c("phoneDisplay")}
      email={c("email")}
      sourcePage="kiralik-coming-soon"
      kicker={pick(
        "Koleksiyon · Hazırlık",
        "Collection · In Preparation",
        "Kollektion · In Vorbereitung",
        "Коллекция · В подготовке",
      )}
      title={pick(
        "Konaklama Koleksiyonu",
        "Our Stay Collection",
        "Unsere Aufenthaltskollektion",
        "Наша коллекция для проживания",
      )}
      subtitle={pick(
        "Önümüzdeki sezona doğru",
        "Toward the coming season",
        "Auf die kommende Saison zu",
        "К предстоящему сезону",
      )}
      description={pick(
        "Bodrum yarımadasında, az sayıda ve özenli bir konaklama koleksiyonu hazırlıyoruz. Mülk değerlendirme süreçlerimiz sürmekte; misafirler için kısa süre içinde tanışma, mülk sahipleri için başvurular ise bugün açıktır.",
        "We are preparing a small, considered collection of stays across the Bodrum peninsula. Curation is ongoing; introductions to guests will follow shortly, while applications from owners remain open today.",
        "Wir bereiten eine kleine, bedachte Kollektion von Aufenthalten auf der Halbinsel Bodrum vor. Die Auswahl läuft; den Gästen stellen wir die Häuser in Kürze vor, während Anfragen von Eigentümern bereits heute offenstehen.",
        "Мы готовим небольшую, продуманную коллекцию вариантов проживания на полуострове Бодрум. Отбор продолжается; знакомство для гостей состоится вскоре, а заявки от владельцев открыты уже сегодня.",
      )}
      ctaPrimaryLabel={pick(
        "Konsiyerj ile Görüşün",
        "Speak with the Concierge",
        "Mit dem Concierge sprechen",
        "Связаться с консьержем",
      )}
      ctaPrimaryHref="/iletisim"
      ctaSecondaryLabel={pick(
        "Villanızı Değerlendirelim",
        "Entrust Your Property to Us",
        "Vertrauen Sie uns Ihre Immobilie an",
        "Доверьте нам свою недвижимость",
      )}
      ctaSecondaryHref="/evinizi-kiraya-verin"
      philosophyKicker={pick("Yaklaşım", "Approach", "Ansatz", "Подход")}
      philosophyTitle={pick(
        "Hazırlığın değeri.",
        "The value of preparing well.",
        "Der Wert guter Vorbereitung.",
        "Ценность хорошей подготовки.",
      )}
      philosophyBody={pick(
        "Bir konaklamayı hazırlamak, listelemekten farklı bir iştir. Bodrumapartvilla, koleksiyonuna katacağı her mülkü, kapı açılmadan önceki haftalarda titizce inceler; misafire ulaşan deneyim, bu sessiz çalışmanın sonucudur.",
        "Preparing a stay is a different matter from listing one. At Bodrumapartvilla, every property that joins the collection passes through weeks of quiet, careful review before its door opens to a guest; what reaches them is the result of that unseen work.",
        "Einen Aufenthalt vorzubereiten ist etwas anderes, als ihn nur zu inserieren. Bei Bodrumapartvilla durchläuft jedes Haus, das in die Kollektion kommt, Wochen stiller, sorgfältiger Prüfung, bevor sich seine Tür einem Gast öffnet; was ihn erreicht, ist das Ergebnis dieser unsichtbaren Arbeit.",
        "Подготовить пребывание — это не то же самое, что просто разместить объявление. В Bodrumapartvilla каждый дом, входящий в коллекцию, проходит недели тихой, тщательной проверки, прежде чем его дверь откроется гостю; то, что доходит до него, — итог этой незримой работы.",
      )}
      pillarsKicker={pick(
        "Üç İlke",
        "Three Principles",
        "Drei Prinzipien",
        "Три принципа",
      )}
      pillarsTitle={pick(
        "Konaklama bir bütün.",
        "A stay, considered as a whole.",
        "Ein Aufenthalt als Ganzes.",
        "Пребывание как единое целое.",
      )}
      pillars={[
        {
          kicker: pick(
            "Seçici Kurasyon",
            "Considered Curation",
            "Bedachte Auswahl",
            "Тщательный отбор",
          ),
          title: pick(
            "Seçici Kurasyon",
            "Considered Curation",
            "Bedachte Auswahl",
            "Тщательный отбор",
          ),
          body: pick(
            "Mülkleri hızlı değil, doğru zamanda dahil ederiz. Koleksiyon, listeyi büyütmek için değil, anlamlı bir konaklama dizisi kurmak için inşa edilir; bu, her mülke ayrılan değerlendirme süresine yansır.",
            "We add properties in their time, not at speed. The collection is built to compose a meaningful sequence of stays, not to enlarge a list — a discipline reflected in the review time we give each home.",
            "Wir nehmen Häuser zu ihrer Zeit auf, nicht im Eiltempo. Die Kollektion entsteht, um eine sinnvolle Folge von Aufenthalten zu bilden, nicht um eine Liste zu vergrößern — eine Haltung, die sich in der Prüfzeit jedes Hauses zeigt.",
            "Мы добавляем дома в своё время, а не наспех. Коллекция создаётся, чтобы выстроить осмысленный ряд вариантов проживания, а не пополнить список, — это видно по времени, которое мы уделяем каждому дому.",
          ),
        },
        {
          kicker: pick(
            "Atmosfer Korunması",
            "Atmosphere Preserved",
            "Bewahrte Atmosphäre",
            "Сохранённая атмосфера",
          ),
          title: pick(
            "Atmosfer Korunması",
            "Atmosphere Preserved",
            "Bewahrte Atmosphäre",
            "Сохранённая атмосфера",
          ),
          body: pick(
            "Bir mülkün karakterini operasyonel süreç içinde kaybetmesi, bizim için kabul edilemez. Bakım, temizlik ve misafir akışı; sahip olunan atmosferi yormak yerine onu sürdürecek biçimde kurgulanır.",
            "Losing a property's character to the rhythm of operations is, to us, unacceptable. Maintenance, housekeeping and guest flow are arranged to sustain its atmosphere, never to wear it down.",
            "Dass ein Haus seinen Charakter im Betriebsalltag verliert, ist für uns nicht hinnehmbar. Instandhaltung, Reinigung und Gästewechsel werden so gestaltet, dass sie seine Atmosphäre tragen, statt sie abzunutzen.",
            "Потерять характер дома в рутине операций для нас недопустимо. Уход, уборка и поток гостей выстроены так, чтобы поддерживать его атмосферу, а не изнашивать её.",
          ),
        },
        {
          kicker: pick(
            "Premium Misafir Profili",
            "Considered Guests",
            "Gewählte Gäste",
            "Взвешенный круг гостей",
          ),
          title: pick(
            "Premium Misafir Profili",
            "Considered Guests",
            "Gewählte Gäste",
            "Взвешенный круг гостей",
          ),
          body: pick(
            "Her rezervasyon talebi, koleksiyonun bir parçasıdır. Mülk sahibinin emanetine karşılık olacak biçimde değerlendirilir; konaklamanın atmosferi ve misafirin beklentisi arasında uygun bir denge kurulur.",
            "Every enquiry is treated as part of the collection. We weigh it against the trust placed in us by the owner, and we look to align the rhythm of each stay with the temperament of the guest who will occupy it.",
            "Jede Anfrage gehört für uns zur Kollektion. Wir wägen sie gegen das Vertrauen des Eigentümers ab und suchen ein Gleichgewicht zwischen der Atmosphäre des Aufenthalts und dem Wesen des Gastes.",
            "Каждый запрос для нас — часть коллекции. Мы соотносим его с доверием владельца и ищем баланс между атмосферой пребывания и характером гостя.",
          ),
        },
      ]}
      newsletter={{
        title: pick(
          "Koleksiyon yayımlandığında bilgi alın.",
          "Hear from us when the collection opens.",
          "Erfahren Sie es, wenn die Kollektion erscheint.",
          "Узнайте, когда коллекция откроется.",
        ),
        description: pick(
          "Koleksiyon yayımlandığında, koleksiyon mektubumuz aracılığıyla bilgi alabilirsiniz. Mektup, sık değil zamanı geldiğinde yazılır.",
          "When the collection opens, we will write to you. The letter is sent only when there is something to say.",
          "Wenn die Kollektion erscheint, schreiben wir Ihnen. Der Brief wird nur dann gesendet, wenn es etwas zu sagen gibt.",
          "Когда коллекция откроется, мы напишем вам. Письмо отправляется лишь тогда, когда есть что сказать.",
        ),
        placeholder: pick(
          "E-posta adresiniz",
          "Your email address",
          "Ihre E-Mail-Adresse",
          "Ваш адрес e-mail",
        ),
        cta: pick(
          "Bültene Katıl",
          "Join the Letter",
          "Dem Brief beitreten",
          "Подписаться на письмо",
        ),
        consentText: pick(
          "E-posta adresimin, Bodrumapartvilla koleksiyon bültenine eklenmesini ve koleksiyon yayımlandığında bilgi vermek amacıyla işlenmesini kabul ediyorum.",
          "I agree that my email address may be added to the Bodrumapartvilla collection letter and used to inform me when the collection opens.",
          "Ich bin damit einverstanden, dass meine E-Mail-Adresse dem Bodrumapartvilla-Kollektionsbrief hinzugefügt und verarbeitet wird, um mich über das Erscheinen der Kollektion zu informieren.",
          "Я согласен(на) на добавление моего адреса e-mail в рассылку коллекции Bodrumapartvilla и его обработку, чтобы сообщить мне об открытии коллекции.",
        ),
        successMessage: pick(
          "Teşekkür ederiz. Koleksiyon yayımlandığında sizinle iletişime geçeceğiz.",
          "Thank you. We will be in touch when the collection opens.",
          "Vielen Dank. Wir melden uns, sobald die Kollektion erscheint.",
          "Спасибо. Мы свяжемся с вами, когда коллекция откроется.",
        ),
        errorMessage: pick(
          "Bir aksaklık oluştu. Lütfen kısa süre sonra tekrar deneyiniz.",
          "Something interrupted the request. Please try again shortly.",
          "Etwas hat die Anfrage unterbrochen. Bitte versuchen Sie es in Kürze erneut.",
          "Что-то прервало запрос. Пожалуйста, повторите попытку чуть позже.",
        ),
      }}
      conciergeKicker={pick("Konsiyerj", "Concierge", "Concierge", "Консьерж")}
      conciergeTitle={pick(
        "Sorularınız için doğrudan ulaşın.",
        "For questions, write directly.",
        "Bei Fragen schreiben Sie uns direkt.",
        "С вопросами пишите напрямую.",
      )}
      conciergeBody={pick(
        "Tarihler, özel istekler ya da koleksiyonumuza dair her tür soru için konsiyerj ekibimize WhatsApp veya e-posta yoluyla ulaşabilirsiniz.",
        "For dates, particular requests or any question concerning the collection, you are welcome to write to the concierge by WhatsApp or by email.",
        "Für Termine, besondere Wünsche oder jede Frage zur Kollektion erreichen Sie unseren Concierge gern per WhatsApp oder E-Mail.",
        "По датам, особым пожеланиям или любым вопросам о коллекции вы можете написать консьержу в WhatsApp или по e-mail.",
      )}
      conciergeHours={pick(
        "Görüşme saatleri · Hafta içi 09:00 – 19:00",
        "Hours · Weekdays 09:00 – 19:00",
        "Sprechzeiten · Werktags 09:00 – 19:00",
        "Часы работы · Будни 09:00 – 19:00",
      )}
    />
  );
}
