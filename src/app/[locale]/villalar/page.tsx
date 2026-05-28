import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ComingSoonCollection } from "@/components/ComingSoonCollection";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { MonoLabel } from "@/components/ui/MonoLabel";

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
      ? `${SITE_URL}/villalar`
      : `${SITE_URL}/${locale}/villalar`;
  return {
    title: m(
      "Butik Villa Koleksiyonumuz — Yakında",
      "Our Boutique Villa Collection — Coming Soon",
      "Unsere Boutique-Villenkollektion — Demnächst",
      "Наша бутик-коллекция вилл — скоро",
    ),
    description: m(
      "Bodrum'un farklı köşelerinden özenle seçilmiş, sınırlı sayıda villa konaklama deneyimi. Mülk değerlendirme sürecimiz devam etmektedir.",
      "A small, considered collection of villas across the Bodrum peninsula. Curation is in progress; submissions are open to interested owners.",
      "Eine kleine, bedachte Villenkollektion aus den verschiedenen Ecken der Halbinsel Bodrum. Die Auswahl läuft; Bewerbungen interessierter Eigentümer sind willkommen.",
      "Небольшая, продуманная коллекция вилл из разных уголков полуострова Бодрум. Отбор продолжается; заявки от заинтересованных владельцев открыты.",
    ),
    alternates: { canonical: url },
    robots: { index: true, follow: true },
  };
}

export default async function VillalarPage({
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

  const guideSections = [
    {
      h: pick(
        "Butik Villa Konaklama Nedir?",
        "What is a Boutique Villa Stay?",
        "Was ist ein Boutique-Villenaufenthalt?",
        "Что такое проживание в бутик-вилле?",
      ),
      p: pick(
        "Butik villa konaklama, otel anlayışının dışına çıkan, sınırlı sayıda mülk üzerinden tasarlanan ve her bir misafirle bireysel bir ilişki kuran bir konaklama biçimidir. Bodrum'da uzun yıllar süren villa kiralama pratiği boyunca, sayı yarışı yapan büyük portföyler ile her villaya tek tek odaklanan butik ekipler arasında belirgin bir ayrışma oluştu. Butik tarafın temel iddiası nedir? Daha az villa, daha derin bilgi. Bir mülkün eşyasının seçimi, bahçesinin bakım rejimi, mutfak ekipmanlarının düzeyi, klimanın sessizliği, suyun sertliği — bunların tümü misafirin gününü kuracak ölçüde önemlidir. Bodrumapartvilla bu anlayışın ürünüdür: koleksiyonumuza katılan her villa, koleksiyona değer kattığı için yer alır.",
        "A boutique villa stay is built outside the logic of a hotel — on a small number of properties, with an individual relationship between guest and host. Over years of villa rentals in Bodrum, a clear split has emerged between high-volume portfolios chasing inventory and boutique teams focused on each property individually. The boutique claim is simple: fewer villas, deeper knowledge. The choice of furniture, the garden's maintenance, the kitchen's equipment level, the silence of the AC, the hardness of the water — all of these decide a guest's day. Bodrumapartvilla is the practical answer to that idea: each villa joins the collection because it adds meaning to it.",
        "Ein Boutique-Villenaufenthalt entsteht außerhalb der Logik eines Hotels — über wenige Häuser und eine persönliche Beziehung zwischen Gast und Gastgeber. In Jahren der Villenvermietung in Bodrum hat sich eine klare Trennung herausgebildet: zwischen großen Portfolios, die Menge anhäufen, und Boutique-Teams, die sich jedem Haus einzeln widmen. Der Anspruch der Boutique-Seite ist schlicht: weniger Villen, tieferes Wissen. Die Wahl der Möbel, die Pflege des Gartens, die Ausstattung der Küche, die Stille der Klimaanlage, die Härte des Wassers — all das prägt den Tag eines Gastes. Bodrumapartvilla ist die praktische Antwort auf diese Idee: Jede Villa gehört zur Kollektion, weil sie ihr Bedeutung verleiht.",
        "Проживание в бутик-вилле строится вне логики отеля — на небольшом числе домов и личной связи между гостем и хозяином. За годы аренды вилл в Бодруме обозначилось чёткое разделение: между крупными портфелями, гонящимися за количеством, и бутик-командами, что сосредоточены на каждом доме в отдельности. Суть бутик-подхода проста: меньше вилл, глубже знание. Выбор мебели, уход за садом, оснащение кухни, тишина кондиционера, жёсткость воды — всё это определяет день гостя. Bodrumapartvilla — практический ответ на эту идею: каждая вилла входит в коллекцию потому, что придаёт ей смысл.",
      ),
    },
    {
      h: pick(
        "Bodrum Yarımadasında Bölgeler",
        "The Districts of the Bodrum Peninsula",
        "Die Regionen der Halbinsel Bodrum",
        "Районы полуострова Бодрум",
      ),
      p: pick(
        "Yarımada, kuzey ve güney sahili olarak iki ana hattan oluşur. Kuzey hatta Türkbükü, Göltürkbükü, Gündoğan, Torba; güney hatta Bitez, Ortakent, Yahşi, Akyarlar; batı uçta ise Yalıkavak, Gümüşlük ve Turgutreis bulunur. Bunlardan her birinin karakteri farklıdır: Türkbükü ve Göltürkbükü, beach club kültürünün yoğunlaştığı olgun adresler; Yalıkavak, marina ve butik villaların ölçülü buluştuğu nokta; Gümüşlük, sanatçı stüdyolarının ve balıkçı meyhanelerinin köyü; Torba, havalimanı yakını, çocuklu ailelere uygun sakin sahil. Karar verirken iki şey önemlidir: arzu ettiğiniz akşam temposu ve günün hangi saatlerini hangi tür mekânda geçireceğiniz.",
        "The peninsula runs along two main shores: north and south. On the north line, Türkbükü, Göltürkbükü, Gündoğan, Torba. On the south, Bitez, Ortakent, Yahşi, Akyarlar. To the west, Yalıkavak, Gümüşlük, Turgutreis. Each holds its own character. Türkbükü and Göltürkbükü are mature addresses with concentrated beach club culture. Yalıkavak is the measured meeting point of marina life and boutique villas. Gümüşlük is a village of artist studios and fishermen's meyhanes. Torba is the quiet shore near the airport, suited to families. Two questions decide the choice: the evening tempo you want, and the kind of place you want to spend the rest of the day in.",
        "Die Halbinsel folgt zwei Hauptküsten: Nord und Süd. Im Norden Türkbükü, Göltürkbükü, Gündoğan, Torba. Im Süden Bitez, Ortakent, Yahşi, Akyarlar. Im Westen Yalıkavak, Gümüşlük, Turgutreis. Jede hat ihren eigenen Charakter. Türkbükü und Göltürkbükü sind etablierte Adressen mit dichter Beach-Club-Kultur. Yalıkavak ist der maßvolle Treffpunkt von Marina-Leben und Boutique-Villen. Gümüşlük ist ein Dorf der Künstlerateliers und Fischer-Meyhanes. Torba ist die ruhige Küste nahe dem Flughafen, geeignet für Familien. Zwei Fragen entscheiden die Wahl: das gewünschte Abendtempo und die Art von Ort, an dem Sie den übrigen Tag verbringen möchten.",
        "Полуостров вытянут вдоль двух главных берегов — северного и южного. На севере — Тюркбюкю, Гёльтюркбюкю, Гюндоган, Торба. На юге — Битез, Ортакент, Яхши, Акьярлар. На западе — Ялыкавак, Гюмюшлюк, Тургутрейс. У каждого свой характер. Тюркбюкю и Гёльтюркбюкю — зрелые адреса с насыщенной культурой бич-клубов. Ялыкавак — сдержанная точка встречи жизни марины и бутик-вилл. Гюмюшлюк — деревня художественных мастерских и рыбацких мейхане. Торба — тихий берег у аэропорта, удобный для семей. Выбор определяют два вопроса: желаемый вечерний ритм и то, где вы хотите проводить остаток дня.",
      ),
    },
    {
      h: pick(
        "Villa Seçim Kriterleri",
        "How to Choose the Right Villa",
        "So wählen Sie die richtige Villa",
        "Как выбрать подходящую виллу",
      ),
      p: pick(
        "Bir villa seçerken misafirlerin çoğu önce manzaraya bakar. Doğru bir refleks değildir. Önce villanın temel özellikleri sıralanmalıdır: yatak odası sayısı ve yatak yerleşimi, banyo sayısı, mutfak donanımı, klima sessizliği, internet hızı, jeneratör, su ısıtma sistemi. Sonra konum: koya cephe mi, yamaçtan mı? Yola çıkışta mahremiyet var mı? Komşu mülkten ses geliyor mu? Üçüncü olarak deneyim: özel havuzun büyüklüğü ve derinliği, bahçede gölge alanları, akşam yemeği için yeterli oturma alanı. Mahremiyet, butik villa seçiminin neredeyse her zaman ilk üç kriteri arasındadır.",
        "Most guests choose by view first. It isn't the right reflex. Begin with the basics: number of bedrooms and how the beds are arranged, bathrooms, kitchen equipment, AC silence, internet speed, backup generator, hot-water system. Then location: facing the bay or sitting on the slope? Privacy from the road? Sound from a neighbouring property? Then the experience: the size and depth of the private pool, shaded outdoor areas, enough seating for dinner. Privacy is almost always in the top three criteria for a boutique villa choice.",
        "Die meisten Gäste wählen zuerst nach dem Ausblick. Das ist nicht der richtige Reflex. Beginnen Sie mit den Grundlagen: Zahl der Schlafzimmer und Bettenaufteilung, Bäder, Küchenausstattung, Stille der Klimaanlage, Internetgeschwindigkeit, Notstromaggregat, Warmwassersystem. Dann die Lage: zur Bucht hin oder am Hang? Privatsphäre zur Straße? Geräusche vom Nachbargrundstück? Dann das Erlebnis: Größe und Tiefe des Privatpools, schattige Außenbereiche, genügend Sitzplätze zum Abendessen. Privatsphäre gehört bei der Wahl einer Boutique-Villa fast immer zu den drei wichtigsten Kriterien.",
        "Большинство гостей выбирают сначала по виду. Это неверный рефлекс. Начните с основ: число спален и расстановка кроватей, ванные, оснащение кухни, тишина кондиционера, скорость интернета, генератор, система нагрева воды. Затем расположение: фасадом к заливу или на склоне? Уединённость от дороги? Слышен ли соседний дом? Затем впечатления: размер и глубина частного бассейна, теневые зоны в саду, достаточно мест для ужина. Уединённость почти всегда входит в тройку главных критериев выбора бутик-виллы.",
      ),
    },
    {
      h: pick(
        "Konsiyerj Hizmetinin Önemi",
        "The Role of the Concierge",
        "Die Rolle des Concierge",
        "Роль консьержа",
      ),
      p: pick(
        "Bir villada konaklamak, anahtarın teslim alındığı anla biten bir süreç değildir. Havalimanından villaya transfer, ilk akşamın yemeği, kahvaltı tedariki, çocuk bakımı, masöz, fotoğrafçı, doktor, tekne charter, beach club rezervasyonu — bunların tümü konsiyerj kapsamına girer. Butik bir konaklama deneyiminde konsiyerj, otelin resepsiyonunun yerini almaz; misafirin günlük programını sessizce kuran, fark edilmeden çözen ekiptir. İyi bir konsiyerj ekibi, ihtiyacı önceden tahmin eder ve mesajla cevap verir.",
        "A villa stay does not end with the keys. Airport transfer, the first dinner, breakfast supply, childcare, masseur, photographer, doctor, yacht charter, beach club reservations — all sit within the concierge's scope. In a boutique stay, the concierge does not replace a hotel reception; it is the team that quietly plans the guest's day and solves things without being noticed. A good concierge anticipates need and replies with a message.",
        "Ein Villenaufenthalt endet nicht mit dem Schlüssel. Flughafentransfer, das erste Abendessen, Frühstücksversorgung, Kinderbetreuung, Masseur, Fotograf, Arzt, Yachtcharter, Beach-Club-Reservierungen — all das fällt in den Bereich des Concierge. In einem Boutique-Aufenthalt ersetzt der Concierge keine Hotelrezeption; er ist das Team, das den Tag des Gastes still gestaltet und unbemerkt löst. Ein guter Concierge erkennt den Bedarf im Voraus und antwortet mit einer Nachricht.",
        "Пребывание на вилле не заканчивается с получением ключей. Трансфер из аэропорта, первый ужин, доставка завтрака, уход за детьми, массажист, фотограф, врач, чартер яхты, бронирование бич-клуба — всё это входит в зону консьержа. В бутик-проживании консьерж не заменяет ресепшен отеля; это команда, что тихо выстраивает день гостя и решает вопросы незаметно. Хороший консьерж предвидит нужды и отвечает сообщением.",
      ),
    },
    {
      h: pick(
        "Sezonsallık ve Doğru Tarih Seçimi",
        "Seasons and Choosing the Right Dates",
        "Saisonalität und die Wahl des richtigen Termins",
        "Сезонность и выбор правильных дат",
      ),
      p: pick(
        "Bodrum'da sezon yapısı dört evreye ayrılır. Mayıs ortası — Haziran ortası: sezonun açılış evresi, fiyatlar dengeli, deniz ısınmakta, koylar dingin. Haziran ortası — Eylül başı: yoğunluk dönemi, fiyatların en üst hattı, beach club kültürünün en canlı zamanı. Eylül başı — Ekim ortası: sezonun olgunluk evresi, fiyatlar düşmeye başlar, hava hâlâ sıcak, deniz en sıcak hâline ulaşır. Ekim ortası — Mayıs ortası: düşük sezon, villaların büyük bölümü kapalı, uzun konaklama yapan misafirler için özel anlaşmalar yapılabilir. Bal ayı çiftleri için Eylül başı; aileler için Haziran sonu ya da Eylül başı; arkadaş grupları için Temmuz-Ağustos klasik tercihlerdir.",
        "Bodrum's season has four phases. Mid-May to mid-June: the opening, balanced prices, sea warming, calm bays. Mid-June to early September: peak, the top of the price band, the most active beach club culture. Early September to mid-October: the mature phase, prices drop, weather still warm, the sea reaches its warmest. Mid-October to mid-May: low season; most villas close, longer stays can be negotiated. Honeymooners gravitate to early September. Families to late June or early September. Friend groups to July-August.",
        "Die Saison in Bodrum hat vier Phasen. Mitte Mai bis Mitte Juni: der Auftakt, ausgewogene Preise, das Meer erwärmt sich, ruhige Buchten. Mitte Juni bis Anfang September: Hochsaison, das obere Ende der Preise, die lebhafteste Beach-Club-Kultur. Anfang September bis Mitte Oktober: die reife Phase, die Preise sinken, das Wetter bleibt warm, das Meer erreicht seine wärmste Temperatur. Mitte Oktober bis Mitte Mai: Nebensaison; die meisten Villen sind geschlossen, längere Aufenthalte lassen sich verhandeln. Hochzeitsreisende zieht es an den frühen September. Familien an Ende Juni oder Anfang September. Freundesgruppen an Juli–August.",
        "Сезон в Бодруме делится на четыре фазы. Середина мая — середина июня: открытие, сбалансированные цены, море прогревается, бухты тихие. Середина июня — начало сентября: пик, верх ценового диапазона, самая живая культура бич-клубов. Начало сентября — середина октября: зрелая фаза, цены снижаются, погода ещё тёплая, море достигает максимума тепла. Середина октября — середина мая: низкий сезон; большинство вилл закрыто, длительное проживание можно обсудить. Молодожёны тяготеют к началу сентября. Семьи — к концу июня или началу сентября. Компании друзей — к июлю-августу.",
      ),
    },
  ];

  const guideFaq = [
    {
      q: pick(
        "Bodrum'da butik villa kiralama fiyat aralığı nedir?",
        "What is the price range for boutique villa rental in Bodrum?",
        "Wie hoch ist die Preisspanne für die Miete einer Boutique-Villa in Bodrum?",
        "Каков ценовой диапазон аренды бутик-виллы в Бодруме?",
      ),
      a: pick(
        "Yarımadanın bölgesine, villanın sınıfına ve sezona göre 1.500-5.000 TL/gece arasında bir aralık geçerlidir. Daha üst donanımlı villalar bu rakamların üzerine çıkar.",
        "Depending on district, segment and season, expect 1,500-5,000 TL per night. Luxury runs above.",
        "Je nach Region, Kategorie und Saison liegt die Spanne zwischen 1.500 und 5.000 TL pro Nacht. Höher ausgestattete Villen liegen darüber.",
        "В зависимости от района, класса и сезона диапазон составляет 1 500–5 000 TL за ночь. Виллы более высокого оснащения стоят выше.",
      ),
    },
    {
      q: pick(
        "Villalarda özel havuz var mı?",
        "Do the villas have private pools?",
        "Verfügen die Villen über einen Privatpool?",
        "Есть ли в виллах частный бассейн?",
      ),
      a: pick(
        "Koleksiyonumuzdaki villaların büyük çoğunluğu özel havuzludur. Bazı butik villalar ortak havuza ya da deniz iskelesine sahiptir; bu, mülkün karakterine göre belirlenir.",
        "Most villas in the collection are private-pool. A few boutique villas hold shared pools or jetty access — defined by the property's character.",
        "Die meisten Villen der Kollektion haben einen Privatpool. Einige Boutique-Villen verfügen über einen Gemeinschaftspool oder einen Bootssteg — je nach Charakter des Hauses.",
        "У большинства вилл коллекции есть частный бассейн. У некоторых бутик-вилл — общий бассейн или выход к причалу; это зависит от характера дома.",
      ),
    },
    {
      q: pick(
        "Minimum kalış süresi var mı?",
        "Is there a minimum stay?",
        "Gibt es eine Mindestaufenthaltsdauer?",
        "Есть ли минимальный срок проживания?",
      ),
      a: pick(
        "Yüksek sezonda villalar için minimum 5 gece kalış uygulanır. Sezon dışında bu süre 2 ya da 3 geceye düşer.",
        "Five nights minimum in high season; two or three in shoulder seasons.",
        "In der Hochsaison gelten mindestens fünf Nächte; in der Nebensaison zwei oder drei.",
        "В высокий сезон минимум пять ночей; в межсезонье — две или три.",
      ),
    },
    {
      q: pick(
        "Villalarda evcil hayvan kabul ediliyor mu?",
        "Are pets accepted?",
        "Sind Haustiere erlaubt?",
        "Принимаются ли домашние животные?",
      ),
      a: pick(
        "Mülk sahibine göre değişir. Konsiyerj ekibimiz, evcil hayvan dostu villaları talep üzerine filtreler.",
        "Depends on the owner. Our concierge filters pet-friendly villas on request.",
        "Das hängt vom Eigentümer ab. Unser Concierge filtert auf Wunsch haustierfreundliche Villen.",
        "Зависит от владельца. По запросу наш консьерж подберёт виллы, где разрешены питомцы.",
      ),
    },
    {
      q: pick(
        "Hangi bölgeyi seçmeliyim?",
        "Which district should I choose?",
        "Welche Region soll ich wählen?",
        "Какой район выбрать?",
      ),
      a: pick(
        "Bal ayı için Gümüşlük ya da Yalıkavak; aileler için Torba ya da Bitez; beach club kültürü için Türkbükü ya da Göltürkbükü; sanat ve sakinlik için Gümüşlük. Konsiyerj ekibimiz profilinize göre öneri sunar.",
        "For honeymoon: Gümüşlük or Yalıkavak. For families: Torba or Bitez. For beach club culture: Türkbükü or Göltürkbükü. For art and quiet: Gümüşlük. Our concierge will suggest based on your profile.",
        "Für Flitterwochen: Gümüşlük oder Yalıkavak. Für Familien: Torba oder Bitez. Für Beach-Club-Kultur: Türkbükü oder Göltürkbükü. Für Kunst und Ruhe: Gümüşlük. Unser Concierge empfiehlt je nach Ihrem Profil.",
        "Для медового месяца — Гюмюшлюк или Ялыкавак. Для семей — Торба или Битез. Для культуры бич-клубов — Тюркбюкю или Гёльтюркбюкю. Для искусства и тишины — Гюмюшлюк. Наш консьерж подскажет, исходя из вашего профиля.",
      ),
    },
    {
      q: pick(
        "Rezervasyon nasıl onaylanır?",
        "How is a booking confirmed?",
        "Wie wird eine Buchung bestätigt?",
        "Как подтверждается бронирование?",
      ),
      a: pick(
        "Talebinizi WhatsApp veya iletişim formundan ulaştırırsınız. Konsiyerj ekibimiz tarih ve villa için uygunluğu teyit eder; havale onayı sonrasında rezervasyon kesinleşir ve teyit e-postası iletilir.",
        "You send a request by WhatsApp or contact form. The concierge confirms availability for date and villa; once payment arrives, the booking is finalised and a confirmation email follows.",
        "Sie senden Ihre Anfrage per WhatsApp oder Kontaktformular. Unser Concierge bestätigt die Verfügbarkeit für Datum und Villa; nach Zahlungseingang wird die Buchung abgeschlossen und eine Bestätigungs-E-Mail folgt.",
        "Вы отправляете запрос в WhatsApp или через контактную форму. Консьерж подтверждает наличие на дату и виллу; после поступления оплаты бронирование завершается, и приходит письмо-подтверждение.",
      ),
    },
    {
      q: pick(
        "Konsiyerj hizmeti ücretli mi?",
        "Is the concierge service charged?",
        "Ist der Concierge-Dienst kostenpflichtig?",
        "Платная ли услуга консьержа?",
      ),
      a: pick(
        "Genel koordinasyon ücretsizdir. Özel transfer, özel şef, tekne ve yat gibi spesifik servisler ayrı fiyatlandırılır; teklif önceden iletilir.",
        "General coordination is included. Specific services — private transfer, chef, yacht — are priced separately with an upfront quote.",
        "Die allgemeine Koordination ist inbegriffen. Bestimmte Leistungen — Privattransfer, Koch, Yacht — werden gesondert berechnet und vorab als Angebot mitgeteilt.",
        "Общая координация включена. Отдельные услуги — индивидуальный трансфер, шеф-повар, яхта — оплачиваются отдельно, с предварительным предложением.",
      ),
    },
    {
      q: pick(
        "İptal politikası nedir?",
        "What is the cancellation policy?",
        "Wie lauten die Stornobedingungen?",
        "Какова политика отмены?",
      ),
      a: pick(
        "Konaklama tarihinize 14 gün ve daha fazla kalanda esnek koşullar uygulanır; daha kısa süreler için politikamız rezervasyon onayı sırasında paylaşılır.",
        "Flexible terms apply 14+ days before the stay; shorter windows are detailed at the time of booking confirmation.",
        "Ab 14 Tagen vor dem Aufenthalt gelten flexible Bedingungen; für kürzere Fristen teilen wir unsere Regelung bei der Buchungsbestätigung mit.",
        "За 14 и более дней до пребывания действуют гибкие условия; для более коротких сроков политика сообщается при подтверждении брони.",
      ),
    },
  ];

  const guideFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guideFaq.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };

  return (
    <>
    <ComingSoonCollection
      locale={locale}
      whatsappNumber={c("whatsappNumber")}
      whatsappDisplay={c("phoneDisplay")}
      email={c("email")}
      sourcePage="villalar-coming-soon"
      kicker={pick(
        "Koleksiyon · Yakında",
        "Collection · Coming Soon",
        "Kollektion · Demnächst",
        "Коллекция · Скоро",
      )}
      title={pick(
        "Butik Villa Koleksiyonumuz",
        "Our Boutique Villa Collection",
        "Unsere Boutique-Villenkollektion",
        "Наша бутик-коллекция вилл",
      )}
      subtitle={pick(
        "Yakında Sizinle",
        "Arriving Soon",
        "Bald für Sie da",
        "Уже скоро",
      )}
      description={pick(
        "Bodrum'un farklı köşelerinden özenle seçilmiş, sınırlı sayıda villa konaklama deneyimi. Mülk değerlendirme süreçlerimiz devam etmekte, koleksiyonumuza katılmak isteyen mülk sahipleri için başvurular açıktır.",
        "A small, considered collection of villas drawn from quieter corners of the Bodrum peninsula. Our curation process is ongoing; applications remain open to owners who wish to join the collection.",
        "Eine kleine, bedachte Villenkollektion aus den ruhigeren Ecken der Halbinsel Bodrum. Unsere Auswahl läuft; Bewerbungen von Eigentümern, die der Kollektion beitreten möchten, sind offen.",
        "Небольшая, продуманная коллекция вилл из тихих уголков полуострова Бодрум. Отбор продолжается; заявки от владельцев, желающих войти в коллекцию, открыты.",
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
        "Entrust Your Villa to Us",
        "Vertrauen Sie uns Ihre Villa an",
        "Доверьте нам свою виллу",
      )}
      ctaSecondaryHref="/evinizi-kiraya-verin"
      philosophyKicker={pick(
        "Felsefemiz",
        "Our Philosophy",
        "Unsere Philosophie",
        "Наша философия",
      )}
      philosophyTitle={pick(
        "Sayı değil, seçim.",
        "Selection, not scale.",
        "Auswahl, nicht Menge.",
        "Отбор, а не масштаб.",
      )}
      philosophyBody={pick(
        "Bodrumapartvilla, sayı değil seçim odaklıdır. Her villa, mimarisi, konumu ve sunduğu atmosferle değerlendirilir. Misafirlerimiz için butik bir koleksiyon, mülk sahiplerimiz için titiz bir ortaklık önerir.",
        "Bodrumapartvilla works by selection rather than scale. Each villa is judged on its architecture, its setting and the atmosphere it sustains. The result, for our guests, is a boutique collection — and, for our owners, a considered partnership.",
        "Bodrumapartvilla setzt auf Auswahl statt Menge. Jede Villa wird nach ihrer Architektur, ihrer Lage und der Atmosphäre beurteilt, die sie trägt. Das Ergebnis ist für unsere Gäste eine Boutique-Kollektion und für unsere Eigentümer eine bedachte Partnerschaft.",
        "Bodrumapartvilla работает через отбор, а не масштаб. Каждую виллу мы оцениваем по архитектуре, расположению и атмосфере, которую она хранит. Для гостей это бутик-коллекция, для владельцев — продуманное партнёрство.",
      )}
      pillarsKicker={pick(
        "Yaklaşımımız",
        "Our Approach",
        "Unser Ansatz",
        "Наш подход",
      )}
      pillarsTitle={pick(
        "Üç ilke, tek bir anlayış.",
        "Three principles, a single sensibility.",
        "Drei Prinzipien, ein Verständnis.",
        "Три принципа, единое понимание.",
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
            "Her villa, bireysel olarak değerlendirilir. Mimari karakteri, konumunun karşılığı ve misafire sunduğu deneyim önceliğimizdir. Koleksiyona dahil olan mülk, kataloğumuzu büyütmek için değil, anlamlı bir seçim olduğu için yer alır.",
            "Each villa is reviewed individually. We weigh its architecture, the truth of its location and the kind of stay it offers a guest. A property joins the collection because it adds meaning to it — not because it adds inventory.",
            "Jede Villa wird einzeln geprüft. Wir wägen ihre Architektur, die Wahrhaftigkeit ihrer Lage und die Art des Aufenthalts ab, den sie einem Gast bietet. Ein Haus gehört zur Kollektion, weil es ihr Bedeutung verleiht — nicht, weil es den Bestand vergrößert.",
            "Каждую виллу мы рассматриваем отдельно. Мы взвешиваем её архитектуру, подлинность расположения и то, какое пребывание она дарит гостю. Дом входит в коллекцию потому, что придаёт ей смысл, — а не потому, что пополняет каталог.",
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
            "Bir villanın değeri yalnızca mekânında değil, içinde geçirdiğiniz zamanın niteliğindedir. Operasyon süreçlerimizi, mülkün ruhunu yıpratmadan sürdürebilecek biçimde tasarlıyor; sessizliği, mahremiyeti ve karakteri özenle koruyoruz.",
            "A villa is worth as much as the quality of the time spent inside it. We design our operations so that the spirit of each property is left intact — its quiet, its privacy and its character preserved with care.",
            "Eine Villa ist so viel wert wie die Qualität der Zeit, die man in ihr verbringt. Wir gestalten unseren Betrieb so, dass der Geist jedes Hauses unversehrt bleibt — seine Ruhe, seine Privatsphäre und sein Charakter sorgsam bewahrt.",
            "Вилла стоит ровно столько, сколько стоит качество проведённого в ней времени. Мы выстраиваем работу так, чтобы дух каждого дома оставался нетронутым — его тишина, уединённость и характер бережно сохранены.",
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
            "Misafirlerimizi koleksiyonun bir parçası olarak görürüz. Her rezervasyon talebini, mülk sahibinin emanetine karşılık olacak biçimde değerlendirir; konaklamayı paylaşan kişilerle villanın atmosferi arasında uygun bir denge kurarız.",
            "Guests, to us, form part of the collection too. We weigh each enquiry as carefully as the property it concerns — placing the right people, in the right house, for the right kind of stay.",
            "Auch unsere Gäste gehören für uns zur Kollektion. Wir wägen jede Anfrage so sorgfältig ab wie das Haus, das sie betrifft — und bringen die richtigen Menschen ins richtige Haus für die richtige Art von Aufenthalt.",
            "Гости для нас тоже часть коллекции. Каждый запрос мы взвешиваем так же бережно, как и сам дом, — подбирая нужных людей в нужный дом для нужного пребывания.",
          ),
        },
      ]}
      newsletter={{
        title: pick(
          "Koleksiyonumuza eklemeler için bilgi alın.",
          "Be the first to hear when villas join the collection.",
          "Erfahren Sie als Erste, wenn Villen zur Kollektion stoßen.",
          "Узнайте первыми, когда виллы пополнят коллекцию.",
        ),
        description: pick(
          "Yeni villalar koleksiyonumuza eklendikçe, koleksiyonu takip eden okuyucularımıza yılda birkaç kez ölçülü bir mektup gönderiyoruz.",
          "We write to readers a few times a year — a quiet letter when new villas join the collection, nothing more.",
          "Wir schreiben unseren Leserinnen und Lesern einige Male im Jahr — ein stiller Brief, wenn neue Villen zur Kollektion stoßen, mehr nicht.",
          "Мы пишем читателям несколько раз в год — тихое письмо, когда новые виллы входят в коллекцию, не более.",
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
          "E-posta adresimin, Bodrumapartvilla koleksiyon bültenine eklenmesini ve yeni villalar dahil edildikçe bilgilendirme amacıyla işlenmesini kabul ediyorum.",
          "I agree that my email address may be added to the Bodrumapartvilla collection letter and used to inform me of new villas joining the collection.",
          "Ich bin damit einverstanden, dass meine E-Mail-Adresse dem Bodrumapartvilla-Kollektionsbrief hinzugefügt und verarbeitet wird, um mich über neue Villen in der Kollektion zu informieren.",
          "Я согласен(на) на добавление моего адреса e-mail в рассылку коллекции Bodrumapartvilla и его обработку для уведомления о новых виллах в коллекции.",
        ),
        successMessage: pick(
          "Teşekkür ederiz. Koleksiyona yapılan eklemeleri zamanı geldiğinde sizinle paylaşacağız.",
          "Thank you. We will be in touch as new villas join the collection.",
          "Vielen Dank. Wir melden uns, sobald neue Villen zur Kollektion stoßen.",
          "Спасибо. Мы сообщим вам, когда новые виллы войдут в коллекцию.",
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
        "Birebir görüşmeyi tercih ederseniz.",
        "If you prefer to write directly.",
        "Wenn Sie lieber direkt schreiben.",
        "Если вы предпочитаете написать напрямую.",
      )}
      conciergeBody={pick(
        "Konaklama planlarınızı, özel istekleri ve koleksiyonumuza dair sorularınızı doğrudan konsiyerj ekibimize iletebilirsiniz.",
        "You are welcome to write to the concierge with your dates, particular requests or any questions about the collection.",
        "Sie können unserem Concierge gern direkt Ihre Termine, besonderen Wünsche oder Fragen zur Kollektion mitteilen.",
        "Вы можете написать нашему консьержу напрямую — о датах, особых пожеланиях или любых вопросах о коллекции.",
      )}
      conciergeHours={pick(
        "Görüşme saatleri · Hafta içi 09:00 – 19:00",
        "Hours · Weekdays 09:00 – 19:00",
        "Sprechzeiten · Werktags 09:00 – 19:00",
        "Часы работы · Будни 09:00 – 19:00",
      )}
    />
    <JsonLd data={guideFaqJsonLd} />

    <section className="section section-soft">
      <div className="container-page mx-auto max-w-4xl">
        <MonoLabel className="text-accent-600">
          {pick("Rehber", "Guide", "Leitfaden", "Гид")}
        </MonoLabel>
        <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
          {pick(
            "Bodrum'da Butik Villa Konaklama Rehberi",
            "A Guide to Boutique Villa Stays in Bodrum",
            "Ein Leitfaden für Boutique-Villenaufenthalte in Bodrum",
            "Гид по проживанию в бутик-виллах Бодрума",
          )}
        </h2>
        <div className="editorial-divider mt-8 max-w-xs" />

        <div className="mt-10 space-y-12">
          {guideSections.map((s, i) => (
            <article key={i}>
              <h3 className="font-display text-2xl font-semibold leading-tight text-ink md:text-3xl">
                {s.h}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink/85">
                {s.p}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="font-display text-2xl font-semibold leading-tight text-ink md:text-3xl">
            {pick("Sıkça Sorulan Sorular", "Frequently Asked Questions", "Häufig gestellte Fragen", "Часто задаваемые вопросы")}
          </h3>
          <div className="mt-6">
            <FAQ items={guideFaq} />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
