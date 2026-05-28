import type { DistrictSlug } from "./districts";

export type PostSection =
  | { type: "p"; text: string }
  | { type: "h2"; id: string; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string };

export interface Post {
  slug: string;
  date: string;
  readingTime: number;
  hero: string;
  category: { tr: string; en: string; de?: string; ru?: string };
  titleTr: string;
  titleEn: string;
  titleDe?: string;
  titleRu?: string;
  excerptTr: string;
  excerptEn: string;
  excerptDe?: string;
  excerptRu?: string;
  metaTitleTr: string;
  metaTitleEn: string;
  metaTitleDe?: string;
  metaTitleRu?: string;
  metaDescTr: string;
  metaDescEn: string;
  metaDescDe?: string;
  metaDescRu?: string;
  contentTr: PostSection[];
  contentEn: PostSection[];
  contentDe?: PostSection[];
  contentRu?: PostSection[];
  faqTr: { q: string; a: string }[];
  faqEn: { q: string; a: string }[];
  faqDe?: { q: string; a: string }[];
  faqRu?: { q: string; a: string }[];
  relatedDistricts?: DistrictSlug[];
}

export const posts: Post[] = [
  {
    slug: "bodrum-villa-rehberi",
    date: "2026-05-20",
    readingTime: 10,
    hero: "/blog/bodrum-villa-rehberi/hero.webp",
    category: { tr: "Villa Rehberi", en: "Villa Guide", de: "Villa-Ratgeber", ru: "Гид по виллам" },
    titleTr: "Bodrum Villa Rehberi 2026: Hangi Bölge, Hangi Tip Villa Size Uygun?",
    titleEn: "Bodrum Villa Guide 2026: Which Area, Which Villa Type Suits You?",
    excerptTr:
      "Bodrum'da villa kiralamak son yıllarda otele alternatif olmaktan çıkıp ana tatil tarzı haline geldi. Hangi bölge size uyar, fiyatlar nasıl belirlenir, müstakil-yarı müstakil farkı nedir — kısa bir bakış.",
    excerptEn:
      "Renting a villa in Bodrum has shifted in recent years from a hotel alternative to the main holiday style. Which district suits you, how pricing works, the difference between detached and semi-detached — a short overview.",
    metaTitleTr: "Bodrum Villa Rehberi 2026 | Hangi Bölge, Hangi Tip Villa",
    metaTitleEn: "Bodrum Villa Guide 2026 | Which Area, Which Villa Type",
    metaDescTr:
      "Bodrum villa kiralamada bölge seçimi, fiyat aralıkları, müstakil-yarı müstakil farkı, kalış süresi kuralları ve ipuçları — 10 dakikalık tam rehber.",
    metaDescEn:
      "Bodrum villa rental: district selection, price ranges, detached vs semi-detached, stay-length rules and tips — a 10-minute full guide.",
    relatedDistricts: ["yalikavak", "turgutreis", "ortakent", "gundogan"],
    contentTr: [
      {
        type: "p",
        text: "Bodrum'da son beş yılda villa kiralama, otele alternatif olmaktan çıkıp birçok ailenin tercih ettiği başlıca tatil biçimi haline geldi. Sebebi basit: dört-altı kişilik bir aile ya da iki yakın çift, otelde her gece üç-dört oda parası öderken aynı bütçeyle özel havuzlu, müstakil ve kendi ritmine sahip bir villada hafta geçirebilir. Bu rehber, ilk kez villa kiralayacaklar için bölge seçiminden fiyat anlayışına, dikkat edilecek küçük detaylara kadar pratik bir başlangıç noktası olacak.",
      },
      { type: "h2", id: "hangi-bolge", text: "Hangi bölgede villa kiralanır?" },
      {
        type: "p",
        text: "Bodrum yarımadasında villa stoku eşit dağılmaz. Yalıkavak, Türkbükü, Gündoğan, Bitez iç tarafı, Akyarlar ve Ortakent köy içi gerçek anlamda 'villa hattı' sayılır. Gümbet ve Turgutreis merkezi ise daha çok apart ağırlıklıdır; villa arayanlar bu bölgelerde yamaca ya da köy içine sapmak zorunda kalır.",
      },
      {
        type: "ul",
        items: [
          "Yalıkavak — Lüks, infinity havuzlu, denize hakim yamaç villaları. Bal ayı ve kurumsal grup için.",
          "Turgutreis Akyarlar — Müstakil aile villaları, gün batımı manzaralı. Bütçe daha esnek.",
          "Ortakent köy içi — Geleneksel taş bahçeli villalar; mandalina ve zeytin ağaçları arasında.",
          "Gündoğan — Sakin, rüzgardan korunmuş, yamaçta deniz manzaralı.",
          "Bitez iç tarafı — Bahçeli, sahil yakın, çocuklu aile için pratik.",
          "Torba — Havalimanı yakın, sığ deniz, resort hattının arkasında müstakil.",
        ],
      },
      { type: "h2", id: "fiyat", text: "Fiyatlar nasıl belirlenir?" },
      {
        type: "p",
        text: "Bir villanın gecelik fiyatını dört şey belirler: bölge (Yalıkavak, Turgutreis'ten %30-50 pahalıdır), kapasite (oda sayısı), özel havuz olup olmaması (havuzlu villa havuzsuza göre %40-60 fazla) ve sezon (Temmuz-Ağustos zirvedir). 2026 yüksek sezonu için aşağı yukarı şu aralıklarda kalırsınız:",
      },
      {
        type: "ul",
        items: [
          "4+1 müstakil havuzlu villa, orta segment: 10.000-14.000 TL/gece",
          "5+1 lüks infinity havuzlu villa (Yalıkavak): 18.000-22.000 TL/gece",
          "5+1 köy içi taş bahçeli villa (Ortakent): 12.000-15.000 TL/gece",
          "Düşük sezon (Mayıs, Ekim): yüksek sezon fiyatının %50-60'ı civarında",
        ],
      },
      { type: "h2", id: "mustakil-yari", text: "Müstakil mi, yarı müstakil mi?" },
      {
        type: "p",
        text: "Villa ilanı görürken sık karşılaşılan iki tip vardır: müstakil ve yarı müstakil. Müstakil villa, kendi bahçesi içinde, kendi giriş kapısı olan ve komşusuyla duvar paylaşmayan yapıdır — gerçek anlamda 'kendi adası' olduğu için akşam yemeği, müzik, çocuk gürültüsü gibi konularda özgürdür. Yarı müstakil (semi-detached) villa ise bir duvarı komşusuyla paylaşır; genellikle iki villa yan yana planlanmıştır. Yarı müstakil seçenek %20-30 daha uygun olabilir; ancak ses geçirgenliği açısından bu konuyu rezervasyon öncesi sormak iyidir.",
      },
      { type: "h2", id: "minimum-kalis", text: "Minimum kalış süresi" },
      {
        type: "p",
        text: "Villalarda yüksek sezonda (Haziran-Eylül) çoğunlukla minimum 5-7 gece kalış uygulanır. Bunun sebebi tek gün boş kalan villaların temizlik + bakım maliyetinin kısa konaklamayı verimsiz kılmasıdır. Düşük sezonda 3 gece de mümkündür. Hafta sonu (Cuma-Pazar) yer arıyorsanız hafta içi rezervasyon yapmaktan daha pahalıya gelebilir.",
      },
      { type: "h2", id: "ipuclari", text: "Pratik ipuçları" },
      {
        type: "ol",
        items: [
          "Havuz boyutunu sorun: bazı ilanlarda 'havuzlu' yazar ama 3x4 jakuzi büyüklüğündedir. 8x4 metre üzeri gerçek yüzme havuzudur.",
          "Klima sayısını öğrenin: tüm odalarda klima yoksa, gece uyuyamayabilirsiniz.",
          "Mutfak donanımını sorun: fırın, bulaşık makinesi, mikser, kahve makinesi varsa ev yemeği maliyetiniz düşer.",
          "Bahçeli mi, terası mı? Bahçeli villada akşam yemeği daha keyifli, terası olanda manzara daha güzeldir.",
          "Yerel ekip mi yoksa aracı mı? Yerel ekiple anlaşmak hizmet kalitesini iki katına çıkarır.",
          "Bebek beşiği, sandalye, oyuncak — küçük çocukla geliyorsanız bunları önceden talep edin.",
        ],
      },
      { type: "h2", id: "ozet", text: "Özet" },
      {
        type: "p",
        text: "Bodrum'da villa kiralamak, doğru bölge ve doğru ekiple yaşandığında otelin pratiğini ve özel evin samimiyetini tek bir tatilde birleştirir. Bütçenize ve grubunuza uygun villayı seçtikten sonra ekstralar — özel şef, masaj, tekne çıkışı — aynı çatı altından kolayca eklenir. Sezona yer ayırtırken yüksek sezon villalarının nisan ayında dolduğunu unutmayın; planınızı yapmadan önce müsaitliği teyit edin.",
      },
    ],
    contentEn: [
      {
        type: "p",
        text: "Villa rental in Bodrum has shifted in the last five years from a hotel alternative to the main holiday style for many families. The reason is straightforward: a four to six-person family or two close couples paying three or four hotel rooms a night can rent a detached, private-pool villa with their own rhythm for the same budget. This guide is a practical starting point for first-time villa renters — district selection, pricing logic, the small details worth checking.",
      },
      { type: "h2", id: "where", text: "Where to rent a villa?" },
      {
        type: "p",
        text: "Villa stock in the Bodrum peninsula is not evenly spread. Yalıkavak, Türkbükü, Gündoğan, the inland side of Bitez, Akyarlar and the inner village of Ortakent are the real 'villa lines'. The centres of Gümbet and Turgutreis lean apartment-heavy; villa seekers in those areas have to turn toward the hillside or the inner village.",
      },
      {
        type: "ul",
        items: [
          "Yalıkavak — Luxury, infinity-pool, sea-view hillside villas. Honeymoon and corporate groups.",
          "Turgutreis Akyarlar — Detached family villas with sunset views. Friendlier on budget.",
          "Inner Ortakent — Traditional stone-garden villas among tangerine and olive trees.",
          "Gündoğan — Calm, wind-sheltered, hillside sea-views.",
          "Inland Bitez — Garden villas close to the beach, practical for families.",
          "Torba — Closest to the airport, shallow sea, detached villas behind the resort row.",
        ],
      },
      { type: "h2", id: "pricing", text: "How is pricing set?" },
      {
        type: "p",
        text: "A villa's nightly rate is shaped by four things: district (Yalıkavak runs 30-50% higher than Turgutreis), capacity (bedroom count), whether there is a private pool (a pool villa runs 40-60% higher than a poolless one) and season (July-August is the peak). For the 2026 high season the ranges look roughly like this:",
      },
      {
        type: "ul",
        items: [
          "4-bedroom detached pool villa, mid-segment: 10,000-14,000 TL/night",
          "5-bedroom luxury infinity-pool villa (Yalıkavak): 18,000-22,000 TL/night",
          "5-bedroom stone-garden village villa (Ortakent): 12,000-15,000 TL/night",
          "Low season (May, October): around 50-60% of the high-season rate",
        ],
      },
      { type: "h2", id: "detached", text: "Detached or semi-detached?" },
      {
        type: "p",
        text: "Two types come up most often in villa listings: detached and semi-detached. A detached villa sits in its own garden with its own entrance and no shared walls — truly its own island, which means freedom for evening dinners, music and children's noise. A semi-detached villa shares one wall with a neighbour; usually two villas are planned side by side. The semi-detached option can be 20-30% friendlier on budget; sound transmission is worth asking about before booking.",
      },
      { type: "h2", id: "min-stay", text: "Minimum stay" },
      {
        type: "p",
        text: "Villas usually require a 5-7 night minimum in high season (June-September). The reason is simple: cleaning and maintenance costs for a single empty night make short stays inefficient. In low season three nights is fine. Looking for a weekend (Fri-Sun) booking can end up more expensive than a midweek stay.",
      },
      { type: "h2", id: "tips", text: "Practical tips" },
      {
        type: "ol",
        items: [
          "Ask about pool size: some listings say 'with pool' but the dimensions are jacuzzi-sized (3x4). Real swim pools start above 8x4 metres.",
          "Check the AC count: if not every room has AC, you may not sleep.",
          "Ask about the kitchen: oven, dishwasher, mixer, espresso machine — these drop your home-meal cost.",
          "Garden or terrace? Gardens make better dinners; terraces give better views.",
          "Local team or middleman? A local team doubles service quality.",
          "Baby crib, high chair, toys — request these in advance if travelling with small children.",
        ],
      },
      { type: "h2", id: "summary", text: "In summary" },
      {
        type: "p",
        text: "Renting a villa in Bodrum, when paired with the right district and the right team, brings the convenience of a hotel and the warmth of a private home into one trip. Once you've picked the right villa for your budget and group, the extras — private chef, massage, boat trip — slot in under the same roof. When you start checking dates, remember that high-season villas often fill up in April; confirm availability before you finalise the plan.",
      },
    ],
    faqTr: [
      { q: "Bodrum'da en lüks villa hangi bölgededir?", a: "Yalıkavak yamacında, Tilkicik ve Sandıma tarafında, infinity havuzlu ve denize hakim villalar lüks segmentin merkezidir. 18.000-22.000 TL/gece aralığında 5+1 villalar bu bölgede yoğunlaşır." },
      { q: "Villada minimum kaç gece kalmam gerekiyor?", a: "Yüksek sezonda (Haziran-Eylül) çoğunlukla 5-7 gece. Düşük sezonda 3 gece kabul edilir. Hafta sonu rezervasyonları sınırlıdır." },
      { q: "Villaya özel şef hizmetini nasıl ayarlayabilirim?", a: "Rezervasyon sırasında bize bildirin; villaya gün başına 4.500-7.500 TL aralığında şef hizmeti ekleniyor. Menüyü siz seçer, malzemeyi şef alır." },
    ],
    faqEn: [
      { q: "Where are Bodrum's most luxurious villas?", a: "On the Yalıkavak hillside, toward Tilkicik and Sandıma, infinity-pool villas overlooking the sea form the centre of the luxury segment. 5-bedroom villas in this area run 18,000-22,000 TL per night." },
      { q: "What's the minimum stay in a villa?", a: "5-7 nights in high season (June-September). 3 nights are accepted in low season. Weekend-only bookings are limited." },
      { q: "How do I arrange a private chef at the villa?", a: "Let us know when booking; chef service runs at 4,500-7,500 TL per day. You choose the menu, the chef shops for ingredients." },
    ],
    titleDe: "Bodrum Villa-Ratgeber 2026: Welche Region, welcher Villentyp passt zu Ihnen?",
    titleRu: "Путеводитель по виллам Бодрума 2026: какой район и тип виллы подойдёт именно вам?",
    excerptDe:
      "Das Mieten einer Villa in Bodrum hat sich in den letzten Jahren von der Alternative zum Hotel zur bevorzugten Urlaubsform gewandelt. Welche Region zu Ihnen passt, wie sich die Preise zusammensetzen und worin der Unterschied zwischen freistehend und Doppelhaushälfte liegt – ein kurzer Überblick.",
    excerptRu:
      "Аренда виллы в Бодруме за последние годы превратилась из альтернативы отелю в основной формат отдыха. Какой район вам подойдёт, как формируются цены, в чём разница между отдельно стоящей виллой и виллой-дуплексом — краткий обзор.",
    metaTitleDe: "Bodrum Villa-Ratgeber 2026 | Welche Region, welcher Villentyp",
    metaTitleRu: "Путеводитель по виллам Бодрума 2026 | Район и тип виллы",
    metaDescDe:
      "Villa in Bodrum mieten: Regionswahl, Preisspannen, freistehend vs. Doppelhaushälfte, Mindestaufenthalt und Tipps – ein vollständiger Ratgeber in zehn Minuten.",
    metaDescRu:
      "Аренда виллы в Бодруме: выбор района, ценовые диапазоны, отдельно стоящая вилла или дуплекс, правила минимального срока и советы — полный путеводитель за 10 минут.",
    contentDe: [
      {
        type: "p",
        text: "Die Villenmiete in Bodrum hat sich in den letzten fünf Jahren von einer Alternative zum Hotel zur bevorzugten Urlaubsform vieler Familien entwickelt. Der Grund ist einfach: Eine Familie mit vier bis sechs Personen oder zwei befreundete Paare, die im Hotel jede Nacht drei oder vier Zimmer bezahlen, können beim gleichen Budget eine freistehende Villa mit eigenem Pool und eigenem Rhythmus mieten. Dieser Ratgeber ist ein praktischer Ausgangspunkt für alle, die zum ersten Mal eine Villa mieten – von der Regionswahl über das Preisverständnis bis zu den kleinen Details, auf die es ankommt.",
      },
      { type: "h2", id: "hangi-bolge", text: "In welcher Region mietet man eine Villa?" },
      {
        type: "p",
        text: "Der Villenbestand auf der Halbinsel Bodrum ist nicht gleichmäßig verteilt. Yalıkavak, Türkbükü, Gündoğan, das Hinterland von Bitez, Akyarlar und der Ortskern von Ortakent gelten als die eigentlichen „Villenlagen“. Die Zentren von Gümbet und Turgutreis sind dagegen stärker von Apartments geprägt; wer hier eine Villa sucht, muss in die Hanglagen oder in den Ortskern ausweichen.",
      },
      {
        type: "ul",
        items: [
          "Yalıkavak – Gehobene Hangvillen mit Infinity-Pool und Meerblick. Für Flitterwochen und Firmengruppen.",
          "Turgutreis Akyarlar – Freistehende Familienvillen mit Sonnenuntergangsblick. Budgetfreundlicher.",
          "Ortskern Ortakent – Traditionelle Steinvillen mit Garten zwischen Mandarinen- und Olivenbäumen.",
          "Gündoğan – Ruhig, windgeschützt, am Hang mit Meerblick.",
          "Hinterland Bitez – Villen mit Garten, strandnah, praktisch für Familien mit Kindern.",
          "Torba – Flughafennah, flaches Wasser, freistehend hinter der Resortzeile.",
        ],
      },
      { type: "h2", id: "fiyat", text: "Wie werden die Preise festgelegt?" },
      {
        type: "p",
        text: "Den Übernachtungspreis einer Villa bestimmen vier Faktoren: die Region (Yalıkavak liegt 30–50 % über Turgutreis), die Kapazität (Zimmeranzahl), das Vorhandensein eines privaten Pools (eine Villa mit Pool liegt 40–60 % über einer ohne) und die Saison (Juli–August ist Hochpunkt). Für die Hochsaison 2026 bewegen Sie sich etwa in folgenden Spannen:",
      },
      {
        type: "ul",
        items: [
          "Freistehende Villa mit 4 Schlafzimmern und Pool, mittleres Segment: 10.000–14.000 TL/Nacht",
          "Luxusvilla mit 5 Schlafzimmern und Infinity-Pool (Yalıkavak): 18.000–22.000 TL/Nacht",
          "Steinvilla mit 5 Schlafzimmern und Garten im Ortskern (Ortakent): 12.000–15.000 TL/Nacht",
          "Nebensaison (Mai, Oktober): etwa 50–60 % des Hochsaisonpreises",
        ],
      },
      { type: "h2", id: "mustakil-yari", text: "Freistehend oder Doppelhaushälfte?" },
      {
        type: "p",
        text: "In Villenanzeigen begegnen Ihnen häufig zwei Typen: freistehend und als Doppelhaushälfte. Eine freistehende Villa liegt im eigenen Garten, hat einen eigenen Eingang und teilt keine Wand mit dem Nachbarn – sie ist im wahrsten Sinne eine eigene Insel und lässt bei Abendessen, Musik und Kinderlärm jede Freiheit. Eine Doppelhaushälfte teilt eine Wand mit dem Nachbarn; meist sind zwei Villen nebeneinander geplant. Die Variante als Doppelhaushälfte kann 20–30 % günstiger sein; nach der Schalldämmung sollten Sie jedoch vor der Buchung fragen.",
      },
      { type: "h2", id: "minimum-kalis", text: "Mindestaufenthalt" },
      {
        type: "p",
        text: "In der Hochsaison (Juni–September) gilt bei Villen meist ein Mindestaufenthalt von 5–7 Nächten. Der Grund: Die Reinigungs- und Wartungskosten für eine einzelne leer stehende Nacht machen kurze Aufenthalte unwirtschaftlich. In der Nebensaison sind auch drei Nächte möglich. Wer ein Wochenende (Fr.–So.) sucht, zahlt unter Umständen mehr als bei einer Buchung unter der Woche.",
      },
      { type: "h2", id: "ipuclari", text: "Praktische Tipps" },
      {
        type: "ol",
        items: [
          "Fragen Sie nach der Poolgröße: Manche Anzeigen schreiben „mit Pool“, doch die Maße entsprechen einem Whirlpool (3x4). Echte Schwimmbecken beginnen über 8x4 Metern.",
          "Erkundigen Sie sich nach der Anzahl der Klimaanlagen: Ist nicht in jedem Zimmer eine vorhanden, finden Sie nachts womöglich keinen Schlaf.",
          "Fragen Sie nach der Küchenausstattung: Backofen, Geschirrspüler, Mixer und Kaffeemaschine senken Ihre Kosten für Mahlzeiten zu Hause.",
          "Garten oder Terrasse? Im Garten sind die Abendessen angenehmer, auf der Terrasse ist der Ausblick schöner.",
          "Lokales Team oder Vermittler? Eine Vereinbarung mit einem lokalen Team verdoppelt die Servicequalität.",
          "Babybett, Hochstuhl, Spielzeug – reisen Sie mit kleinen Kindern, fordern Sie diese vorab an.",
        ],
      },
      { type: "h2", id: "ozet", text: "Zusammenfassung" },
      {
        type: "p",
        text: "Eine Villa in Bodrum verbindet, mit der richtigen Region und dem richtigen Team, den Komfort eines Hotels und die Wärme eines privaten Zuhauses in einer einzigen Reise. Haben Sie die passende Villa für Ihr Budget und Ihre Gruppe gewählt, lassen sich Extras – Privatkoch, Massage, Bootsausflug – bequem unter demselben Dach hinzufügen. Bedenken Sie bei der Terminreservierung, dass Hochsaisonvillen oft schon im April ausgebucht sind; bestätigen Sie die Verfügbarkeit, bevor Sie Ihre Planung abschließen.",
      },
    ],
    contentRu: [
      {
        type: "p",
        text: "За последние пять лет аренда виллы в Бодруме превратилась из альтернативы отелю в основной формат отдыха для многих семей. Причина проста: семья из четырёх–шести человек или две близкие пары, которые в отеле платят за три-четыре номера в сутки, при том же бюджете могут снять отдельно стоящую виллу с собственным бассейном и жить в своём ритме. Этот путеводитель станет практической отправной точкой для тех, кто арендует виллу впервые, — от выбора района и понимания цен до мелких деталей, на которые стоит обратить внимание.",
      },
      { type: "h2", id: "hangi-bolge", text: "В каком районе арендовать виллу?" },
      {
        type: "p",
        text: "Фонд вилл на полуострове Бодрум распределён неравномерно. Yalıkavak, Türkbükü, Gündoğan, внутренняя часть Bitez, Akyarlar и центр посёлка Ortakent можно по праву назвать настоящими «виллными зонами». Центры Gümbet и Turgutreis, напротив, застроены преимущественно апартаментами; тем, кто ищет здесь виллу, приходится подниматься на склоны или уходить вглубь посёлка.",
      },
      {
        type: "ul",
        items: [
          "Yalıkavak — изысканные виллы на склоне с инфинити-бассейном и видом на море. Для медового месяца и корпоративных групп.",
          "Turgutreis Akyarlar — отдельно стоящие семейные виллы с видом на закат. Более гибкие по бюджету.",
          "Центр Ortakent — традиционные каменные виллы с садом среди мандариновых и оливковых деревьев.",
          "Gündoğan — тихие, защищённые от ветра виллы на склоне с видом на море.",
          "Внутренняя часть Bitez — виллы с садом близко к пляжу, удобные для семей с детьми.",
          "Torba — близко к аэропорту, мелкое море, отдельно стоящие виллы за линией резортов.",
        ],
      },
      { type: "h2", id: "fiyat", text: "Как формируются цены?" },
      {
        type: "p",
        text: "Стоимость виллы за ночь определяют четыре фактора: район (Yalıkavak на 30–50 % дороже Turgutreis), вместимость (количество спален), наличие частного бассейна (вилла с бассейном на 40–60 % дороже виллы без него) и сезон (пик приходится на июль–август). На высокий сезон 2026 года ориентировочные диапазоны таковы:",
      },
      {
        type: "ul",
        items: [
          "Отдельно стоящая вилла с 4 спальнями и бассейном, средний сегмент: 10 000–14 000 TL/ночь",
          "Роскошная вилла с 5 спальнями и инфинити-бассейном (Yalıkavak): 18 000–22 000 TL/ночь",
          "Каменная вилла с 5 спальнями и садом в центре посёлка (Ortakent): 12 000–15 000 TL/ночь",
          "Низкий сезон (май, октябрь): около 50–60 % от цены высокого сезона",
        ],
      },
      { type: "h2", id: "mustakil-yari", text: "Отдельно стоящая вилла или дуплекс?" },
      {
        type: "p",
        text: "В объявлениях о виллах чаще всего встречаются два типа: отдельно стоящая вилла и вилла-дуплекс. Отдельно стоящая вилла расположена в собственном саду, имеет отдельный вход и не делит ни одной стены с соседом — это по-настоящему «собственный остров», который даёт свободу в отношении ужинов, музыки и детского шума. Вилла-дуплекс делит одну стену с соседом; обычно две виллы спланированы рядом. Вариант дуплекса может быть на 20–30 % выгоднее по бюджету; однако о звукоизоляции стоит спросить до бронирования.",
      },
      { type: "h2", id: "minimum-kalis", text: "Минимальный срок проживания" },
      {
        type: "p",
        text: "В высокий сезон (июнь–сентябрь) для вилл обычно действует минимальный срок проживания 5–7 ночей. Причина проста: расходы на уборку и обслуживание при одной незанятой ночи делают короткое проживание невыгодным. В низкий сезон возможны и три ночи. Если вы ищете вариант на выходные (пт–вс), он может обойтись дороже, чем бронирование в будние дни.",
      },
      { type: "h2", id: "ipuclari", text: "Практические советы" },
      {
        type: "ol",
        items: [
          "Уточните размер бассейна: в некоторых объявлениях указано «с бассейном», но по размерам это джакузи (3x4). Настоящие плавательные бассейны начинаются от 8x4 метров.",
          "Узнайте число кондиционеров: если они есть не во всех комнатах, ночью вы можете не уснуть.",
          "Спросите об оснащении кухни: духовка, посудомоечная машина, миксер и кофемашина снижают ваши расходы на домашнюю еду.",
          "Сад или терраса? В саду ужины приятнее, на террасе вид красивее.",
          "Местная команда или посредник? Договорённость с местной командой удваивает качество обслуживания.",
          "Детская кроватка, стульчик, игрушки — если вы едете с маленькими детьми, запросите их заранее.",
        ],
      },
      { type: "h2", id: "ozet", text: "Итог" },
      {
        type: "p",
        text: "Аренда виллы в Бодруме при правильном выборе района и команды соединяет в одной поездке удобство отеля и теплоту собственного дома. Выбрав виллу, подходящую вашему бюджету и группе, вы легко добавите дополнительные услуги — личного повара, массаж, морскую прогулку — под той же крышей. Бронируя даты, помните, что виллы высокого сезона нередко заполняются уже в апреле; подтвердите доступность, прежде чем завершить планирование.",
      },
    ],
    faqDe: [
      { q: "Wo befinden sich Bodrums gehobenste Villen?", a: "Am Hang von Yalıkavak, in Richtung Tilkicik und Sandıma, bilden Villen mit Infinity-Pool und Meerblick das Zentrum des gehobenen Segments. Villen mit 5 Schlafzimmern in dieser Lage liegen bei 18.000–22.000 TL pro Nacht." },
      { q: "Wie viele Nächte muss ich mindestens in einer Villa bleiben?", a: "In der Hochsaison (Juni–September) meist 5–7 Nächte. In der Nebensaison werden 3 Nächte akzeptiert. Reine Wochenendbuchungen sind begrenzt." },
      { q: "Wie kann ich einen Privatkoch für die Villa organisieren?", a: "Teilen Sie es uns bei der Buchung mit; der Kochservice für die Villa liegt bei 4.500–7.500 TL pro Tag. Sie wählen das Menü, der Koch besorgt die Zutaten." },
    ],
    faqRu: [
      { q: "В каком районе находятся самые роскошные виллы Бодрума?", a: "На склоне Yalıkavak, в сторону Tilkicik и Sandıma, центром премиального сегмента служат виллы с инфинити-бассейном и видом на море. Виллы с 5 спальнями в этом районе стоят 18 000–22 000 TL за ночь." },
      { q: "Сколько ночей минимально нужно проживать на вилле?", a: "В высокий сезон (июнь–сентябрь) обычно 5–7 ночей. В низкий сезон допускаются 3 ночи. Бронирования только на выходные ограничены." },
      { q: "Как организовать личного повара на вилле?", a: "Сообщите нам при бронировании; услуга повара на вилле составляет 4 500–7 500 TL в день. Меню выбираете вы, продукты закупает повар." },
    ],
  },
  {
    slug: "bodrum-tatil-rehberi-2026",
    date: "2026-05-18",
    readingTime: 9,
    hero: "/blog/bodrum-tatil-rehberi-2026/hero.webp",
    category: { tr: "Rehber", en: "Guide", de: "Ratgeber", ru: "Путеводитель" },
    titleTr: "Bodrum Tatil Rehberi 2026: Villa mı, Apart mı Daha Hesaplı?",
    titleEn: "Bodrum Travel Guide 2026: Villa or Apartment — Which Is Better Value?",
    excerptTr:
      "Aynı bütçeyle 6 kişilik bir grup Bodrum'da villa mı apart mı tutmalı? Tarih seçimi, ulaşım, yemek ve gizli maliyetleri çıkardığımız tam karşılaştırma.",
    excerptEn:
      "For the same budget, should a group of six take a villa or an apartment in Bodrum? A full comparison covering dates, transport, food and hidden costs.",
    metaTitleTr: "Bodrum Tatil Rehberi 2026 | Villa mı Apart mı, Bütçe Karşılaştırması",
    metaTitleEn: "Bodrum Travel Guide 2026 | Villa vs Apartment Budget Comparison",
    metaDescTr:
      "6 kişilik grupla Bodrum tatili: villa mı apart mı, hangisi daha hesaplı? Bütçe, tarih, ulaşım ve hizmet karşılaştırması tam rehberde.",
    metaDescEn:
      "Bodrum holiday for six: villa or apartment, which is better value? Budget, dates, transport and service comparison in the full guide.",
    relatedDistricts: ["gumbet", "yalikavak", "turgutreis"],
    contentTr: [
      {
        type: "p",
        text: "Bodrum tatilini planlarken birinci soru çoğu zaman 'nereye?' değil, 'nasıl?' oluyor: villa mı, apart mı, otel mi? Bu rehbere altı kişilik bir aile veya iki çift için, aynı tarih ve aynı bütçe varsayımıyla, en gerçekçi karşılaştırmayı çıkarmak amacıyla başladık. Sonuç sürpriz olmayabilir ama detaylar şaşırtıcı.",
      },
      { type: "h2", id: "tarih", text: "En doğru tarih" },
      {
        type: "p",
        text: "Bodrum sezonu mayıs ortasından ekim ortasına kadar uzanır, ama her ayın karakteri farklıdır. Mayıs ve ekim 'omuz sezonu' sayılır: hava 25-28 derece, deniz hâlâ 22-23 dereceyle yüzülebilir, fiyatlar ise yüksek sezonun yaklaşık yarısı. Haziran ve eylül 'zirve öncesi' rahatlığı sunar; temmuz-ağustos ise hem sıcaklığın hem de fiyatların tavan yaptığı dönemdir. Bal ayı için eylülün ilk üç haftası en sevilen aralık.",
      },
      { type: "h2", id: "villa-vs-apart", text: "Villa mı, apart mı? Karşılaştırma" },
      {
        type: "p",
        text: "Altı kişilik bir grubu konuşalım — iki yetişkin çift + iki çocuk. Aynı tarihler (örneğin 1-8 Ağustos 2026), aynı bölge (Yalıkavak), aynı süre (7 gece). İki seçenek:",
      },
      {
        type: "ul",
        items: [
          "Seçenek A — İki adet 2+1 apart (her birinde bir aile): toplam ~6.500 TL/gece × 7 = 45.500 TL",
          "Seçenek B — Tek adet 4+1 müstakil özel havuzlu villa: ~13.500 TL/gece × 7 = 94.500 TL",
        ],
      },
      {
        type: "p",
        text: "İlk bakışta apart yaklaşık iki kat ucuz. Ama gerçek hesap farklı: villada akşam yemekleri 8 kişilik şef masasında yapılır, restoran maliyeti %40-50 düşer; özel havuz olduğu için günlük tekne çıkışı kaçınılmaz değildir; çocuklar yetişkin denetiminden uzak özel bir bahçede oyun oynar. Apart seçeneğinde restoran ve eğlence kalemleri haftada 25-35 bin TL ek getirebilir; villada bu rakam 10-15 bine düşer. 7 gecelik 'gerçek bütçe' farkı bu yüzden 30 bin TL'ye iner — villa yine pahalıdır ama %35 daha fazla ödeyerek alınan deneyim çok daha üst segmenttir.",
      },
      { type: "h2", id: "ulasim", text: "Ulaşım: havalimanı + araç" },
      {
        type: "p",
        text: "Milas-Bodrum Havalimanı yarımadanın doğusunda; Yalıkavak'a 50 km, merkeze 35 km. En pratiği önceden ayarlanmış VIP transferdir; uçuş takibi yapılır, gecikmelerde ek ücret yoktur. Eğer hareket etmek istiyorsanız 7 günlük kompakt araç kiralama 14-18 bin TL aralığında. Villada ise araç çoğunlukla zorunludur (yamaçtaki villaya dolmuş gitmez); apart kalanlar dolmuş veya yürüyüş ile çoğu yere ulaşır.",
      },
      { type: "h2", id: "yemek", text: "Yemek planı: ev yemeği + dışarısı" },
      {
        type: "p",
        text: "Bodrum'da yemek bütçesini ikiye böler — markete inip ev yemeği yapanlar haftalık 4-6 bin TL harcar; her öğün dışarıda yiyenler aynı haftada 25-35 bin TL bulur. Villa, geniş mutfak ve dış mekan yemek alanıyla 'ev yemeği' tarafına yatırım yapar. Apart için ise pratik plan: kahvaltı evde, akşam yemeği dışarıda. Restoran önerileri için yerel ekibe sorun; turistik tuzaklara düşmek burada çok kolay.",
      },
      { type: "h2", id: "yapilacaklar", text: "Bir hafta için yapılacaklar listesi" },
      {
        type: "ol",
        items: [
          "Bir gün mavi tur (Karaada, Akvaryum Koyu).",
          "Yalıkavak Marina'da gün batımı yürüyüşü ve şef akşam yemeği.",
          "Bir gün Datça günübirlik (araba ile 2 saat).",
          "Bir gün özel havuzdan/sahilden çıkmama günü.",
          "Yerel pazara uğramak (cumartesi Turgutreis, salı Ortakent).",
          "Bodrum Kalesi + Sualtı Arkeoloji Müzesi gezisi.",
          "Akşamlarından biri için yerel bir restoranı önceden rezerve etmek.",
        ],
      },
      { type: "h2", id: "sonuc", text: "Sonuç" },
      {
        type: "p",
        text: "Altı kişilik grup için Bodrum'da villa, apart seçeneğine göre %30-40 daha pahalıdır ama deneyim büyük farkla daha sahiptir. Çift ya da küçük aile için apart en pratik seçim; geniş aile ya da iki çift için villa neredeyse her zaman daha mantıklı. Karar veremiyorsanız tarihinizi ve grup büyüklüğünüzü bize iletin; size somut karşılaştırma çıkaralım.",
      },
    ],
    contentEn: [
      {
        type: "p",
        text: "When planning a Bodrum holiday, the first question is often not 'where?' but 'how?' — villa, apartment or hotel? We built this guide to compare, for a family of six or two couples, the most realistic numbers under the same dates and same budget. The result may not surprise you, but the details will.",
      },
      { type: "h2", id: "dates", text: "Best dates" },
      {
        type: "p",
        text: "Bodrum's season runs from mid-May to mid-October, but each month has its own character. May and October are the 'shoulder' months: 25-28°C in the air, 22-23°C in the water, and prices roughly half of high season. June and September give 'pre-peak' ease; July-August is when both heat and prices peak. The first three weeks of September are a beloved honeymoon window.",
      },
      { type: "h2", id: "villa-vs-apart", text: "Villa or apartment? A comparison" },
      {
        type: "p",
        text: "Let's talk about a group of six — two couples plus two children. Same dates (say 1-8 August 2026), same area (Yalıkavak), same length (7 nights). Two options:",
      },
      {
        type: "ul",
        items: [
          "Option A — Two 2-bedroom apartments (one per family): ~6,500 TL/night × 7 = 45,500 TL total",
          "Option B — One 4-bedroom detached private-pool villa: ~13,500 TL/night × 7 = 94,500 TL total",
        ],
      },
      {
        type: "p",
        text: "At a glance, apartments are about twice as cheap. The real calculation is different: in a villa, dinners happen at an eight-seat chef's table — restaurant spend drops 40-50%; a private pool means a daily boat trip is no longer mandatory; children play in a private garden away from adult supervision. In the apartment option, restaurant and entertainment can add 25-35k TL per week; in the villa, the same line drops to 10-15k. The 'real budget' gap over 7 nights closes to about 30k TL — the villa is still more expensive, but for 35% more spend, the experience is in a much higher segment.",
      },
      { type: "h2", id: "transport", text: "Transport: airport + car" },
      {
        type: "p",
        text: "Milas-Bodrum Airport sits on the east of the peninsula; 50 km to Yalıkavak, 35 to centre. A pre-booked VIP transfer is the most practical; flights are tracked, late arrivals don't carry extra cost. A 7-day compact car rental runs 14-18k TL. In a villa, a car is often required (no minibus reaches the hillside); apartment guests usually get by with minibuses and walking.",
      },
      { type: "h2", id: "food", text: "Food plan: home meals + outside" },
      {
        type: "p",
        text: "Food spend in Bodrum splits two ways — guests who shop and cook at home spend 4-6k TL per week; guests who eat out every meal find 25-35k TL on the same week. Villas, with wide kitchens and outdoor dining areas, lean into 'home cooking'. For apartments, the practical plan is breakfast at home, dinner out. Ask the local team for restaurant picks; tourist traps are easy to find here.",
      },
      { type: "h2", id: "to-do", text: "A week of to-dos" },
      {
        type: "ol",
        items: [
          "A day on a blue cruise (Karaada, Aquarium Cove).",
          "Sunset walk in Yalıkavak Marina and a chef dinner.",
          "A day trip to Datça (2 hours by car).",
          "A no-leaving-the-villa/beach day.",
          "Visit a local market (Saturday in Turgutreis, Tuesday in Ortakent).",
          "Bodrum Castle and Museum of Underwater Archaeology.",
          "Pre-book one evening at a local restaurant.",
        ],
      },
      { type: "h2", id: "conclusion", text: "Conclusion" },
      {
        type: "p",
        text: "For a group of six, a villa in Bodrum runs 30-40% more than apartments, but the experience is in a different league. For a couple or small family, apartments are the practical pick; for an extended family or two couples, villas almost always make more sense. If you can't decide, send us your dates and group size; we'll lay out a concrete comparison.",
      },
    ],
    faqTr: [
      { q: "6 kişilik grup için villa mı apart mı daha hesaplı?", a: "Sadece konaklama maliyeti olarak iki apart villaya göre %40-50 ucuzdur. Ancak yemek + havuz + özel alan gibi gizli maliyetler eklendiğinde, villa farkı %30-40'a düşer. Geniş aile için villa, küçük aile için apart daha mantıklı." },
      { q: "Bodrum'a hangi ayda gitmek en iyisi?", a: "Mayıs sonu - haziran başı ve eylül ayı en güzel hava + en uygun fiyat dönemi. Temmuz-ağustos zirvedir; deniz ısısı maksimum, kalabalık ve fiyat da öyle." },
      { q: "Havalimanı transferi nasıl ayarlanır?", a: "Rezervasyon sırasında talep edin; biz Milas-Bodrum Havalimanı'ndan villa/apart kapısına VIP transferi ayarlarız. Fiyat bölgeye göre 2.500-5.500 TL aralığındadır." },
    ],
    faqEn: [
      { q: "For a group of six, is a villa or an apartment cheaper?", a: "On accommodation alone, two apartments come in 40-50% cheaper than a villa. But when hidden costs — food, pool, private space — are added, the villa gap closes to 30-40%. Villas make more sense for extended families; apartments for small ones." },
      { q: "When is the best month to visit Bodrum?", a: "Late May to early June, and September, give the best weather-and-price overlap. July-August is the peak — water temperature is highest, but so are crowds and prices." },
      { q: "How is the airport transfer arranged?", a: "Request it when booking; we set up a VIP transfer from Milas-Bodrum Airport to the villa/apartment door. Pricing runs 2,500-5,500 TL depending on the area." },
    ],
    titleDe: "Bodrum Reiseführer 2026: Villa oder Apartment – was ist günstiger?",
    titleRu: "Путеводитель по отдыху в Бодруме 2026: что выгоднее — вилла или апартаменты?",
    excerptDe:
      "Sollte eine sechsköpfige Gruppe bei gleichem Budget in Bodrum eine Villa oder ein Apartment mieten? Ein vollständiger Vergleich von Reisezeitraum, Transfer, Verpflegung und versteckten Kosten.",
    excerptRu:
      "Что выбрать группе из шести человек при одинаковом бюджете — виллу или апартаменты в Бодруме? Полное сравнение с учётом дат, трансфера, питания и скрытых расходов.",
    metaTitleDe: "Bodrum Reiseführer 2026 | Villa oder Apartment, Budgetvergleich",
    metaTitleRu: "Путеводитель по отдыху в Бодруме 2026 | Вилла или апартаменты, сравнение бюджета",
    metaDescDe:
      "Urlaub in Bodrum mit sechs Personen: Villa oder Apartment – was ist günstiger? Vergleich von Budget, Reisezeitraum, Transfer und Service im vollständigen Ratgeber.",
    metaDescRu:
      "Отдых в Бодруме для шести человек: вилла или апартаменты — что выгоднее? Сравнение бюджета, дат, трансфера и сервиса в полном путеводителе.",
    contentDe: [
      {
        type: "p",
        text: "Bei der Planung eines Urlaubs in Bodrum lautet die erste Frage oft nicht „Wohin?“, sondern „Wie?“ – Villa, Apartment oder Hotel? Diesen Ratgeber haben wir erstellt, um für eine sechsköpfige Familie oder zwei Paare bei gleichem Reisezeitraum und gleichem Budget die realistischsten Zahlen gegenüberzustellen. Das Ergebnis mag Sie nicht überraschen, die Details aber schon.",
      },
      { type: "h2", id: "tarih", text: "Der beste Reisezeitraum" },
      {
        type: "p",
        text: "Die Saison in Bodrum reicht von Mitte Mai bis Mitte Oktober, doch jeder Monat hat seinen eigenen Charakter. Mai und Oktober gelten als „Nebensaison“: 25–28 °C in der Luft, das Meer noch mit 22–23 °C zum Baden geeignet, die Preise etwa halb so hoch wie in der Hochsaison. Juni und September bieten die Ruhe „vor dem Höhepunkt“; Juli und August sind die Zeit, in der sowohl Temperatur als auch Preise ihren Höchststand erreichen. Für Flitterwochen sind die ersten drei Septemberwochen besonders beliebt.",
      },
      { type: "h2", id: "villa-vs-apart", text: "Villa oder Apartment? Ein Vergleich" },
      {
        type: "p",
        text: "Sprechen wir über eine sechsköpfige Gruppe – zwei erwachsene Paare und zwei Kinder. Gleicher Zeitraum (etwa 1.–8. August 2026), gleiche Region (Yalıkavak), gleiche Dauer (7 Nächte). Zwei Optionen:",
      },
      {
        type: "ul",
        items: [
          "Option A – Zwei Apartments mit je 2 Schlafzimmern (eines pro Familie): insgesamt ~6.500 TL/Nacht × 7 = 45.500 TL",
          "Option B – Eine freistehende Villa mit 4 Schlafzimmern und privatem Pool: ~13.500 TL/Nacht × 7 = 94.500 TL",
        ],
      },
      {
        type: "p",
        text: "Auf den ersten Blick ist das Apartment etwa halb so teuer. Die tatsächliche Rechnung sieht jedoch anders aus: In der Villa finden die Abendessen an einer Kochtafel für acht Personen statt, die Restaurantkosten sinken um 40–50 %; dank des privaten Pools ist ein täglicher Bootsausflug nicht zwingend; die Kinder spielen in einem privaten Garten fern der Erwachsenenaufsicht. Bei der Apartment-Variante können Restaurant und Unterhaltung pro Woche 25.000–35.000 TL zusätzlich kosten; in der Villa sinkt dieser Betrag auf 10.000–15.000 TL. Der „reale Budgetunterschied“ über 7 Nächte schrumpft so auf etwa 30.000 TL – die Villa bleibt teurer, doch für 35 % Mehrausgaben erhalten Sie ein deutlich gehobeneres Erlebnis.",
      },
      { type: "h2", id: "ulasim", text: "Anreise: Flughafen und Fahrzeug" },
      {
        type: "p",
        text: "Der Flughafen Milas-Bodrum liegt im Osten der Halbinsel; 50 km nach Yalıkavak, 35 km ins Zentrum. Am praktischsten ist ein vorab vereinbarter VIP-Transfer; der Flug wird verfolgt, bei Verspätungen fallen keine Zusatzkosten an. Wenn Sie mobil sein möchten, kostet ein Kompaktwagen für 7 Tage 14.000–18.000 TL. Bei einer Villa ist ein Fahrzeug meist unverzichtbar (zur Villa am Hang fährt kein Sammeltaxi); Apartmentgäste erreichen die meisten Orte mit dem Sammeltaxi oder zu Fuß.",
      },
      { type: "h2", id: "yemek", text: "Verpflegung: zu Hause kochen und auswärts essen" },
      {
        type: "p",
        text: "Das Verpflegungsbudget in Bodrum teilt sich in zwei Lager – wer einkauft und zu Hause kocht, gibt 4.000–6.000 TL pro Woche aus; wer jede Mahlzeit auswärts isst, kommt in derselben Woche auf 25.000–35.000 TL. Die Villa mit ihrer großen Küche und dem Essbereich im Freien setzt auf die Seite des „Selbstkochens“. Für das Apartment ist der praktische Plan: Frühstück zu Hause, Abendessen auswärts. Fragen Sie das lokale Team nach Restaurantempfehlungen; in Touristenfallen zu geraten ist hier sehr leicht.",
      },
      { type: "h2", id: "yapilacaklar", text: "To-do-Liste für eine Woche" },
      {
        type: "ol",
        items: [
          "Einen Tag Blaue Reise (Karaada, Aquarium-Bucht).",
          "Spaziergang bei Sonnenuntergang in der Yalıkavak Marina und ein Abendessen vom Privatkoch.",
          "Ein Tagesausflug nach Datça (2 Stunden mit dem Auto).",
          "Ein Tag, an dem Sie Pool oder Strand nicht verlassen.",
          "Besuch eines lokalen Marktes (samstags in Turgutreis, dienstags in Ortakent).",
          "Burg von Bodrum und Museum für Unterwasserarchäologie.",
          "Für einen der Abende ein lokales Restaurant im Voraus reservieren.",
        ],
      },
      { type: "h2", id: "sonuc", text: "Fazit" },
      {
        type: "p",
        text: "Für eine sechsköpfige Gruppe ist eine Villa in Bodrum 30–40 % teurer als die Apartment-Variante, doch das Erlebnis liegt mit deutlichem Abstand höher. Für ein Paar oder eine kleine Familie ist das Apartment die praktischste Wahl; für eine Großfamilie oder zwei Paare ist die Villa fast immer sinnvoller. Wenn Sie unentschlossen sind, teilen Sie uns Ihren Zeitraum und Ihre Gruppengröße mit; wir erstellen Ihnen einen konkreten Vergleich.",
      },
    ],
    contentRu: [
      {
        type: "p",
        text: "При планировании отдыха в Бодруме первый вопрос нередко звучит не «куда?», а «как?» — вилла, апартаменты или отель? Этот путеводитель мы подготовили, чтобы для семьи из шести человек или двух пар сопоставить наиболее реалистичные цифры при одинаковых датах и одинаковом бюджете. Результат может вас не удивить, а вот детали — вполне.",
      },
      { type: "h2", id: "tarih", text: "Лучшие даты" },
      {
        type: "p",
        text: "Сезон в Бодруме длится с середины мая до середины октября, но у каждого месяца свой характер. Май и октябрь считаются «низким сезоном»: воздух 25–28 градусов, море ещё пригодно для купания при 22–23 градусах, а цены примерно вдвое ниже, чем в высокий сезон. Июнь и сентябрь дают спокойствие «перед пиком»; июль–август — период, когда и температура, и цены достигают максимума. Для медового месяца особенно любимы первые три недели сентября.",
      },
      { type: "h2", id: "villa-vs-apart", text: "Вилла или апартаменты? Сравнение" },
      {
        type: "p",
        text: "Возьмём группу из шести человек — две взрослые пары и двое детей. Одни и те же даты (например, 1–8 августа 2026), один район (Yalıkavak), одна продолжительность (7 ночей). Два варианта:",
      },
      {
        type: "ul",
        items: [
          "Вариант A — двое апартаментов с 2 спальнями каждый (по одному на семью): всего ~6 500 TL/ночь × 7 = 45 500 TL",
          "Вариант B — одна отдельно стоящая вилла с 4 спальнями и частным бассейном: ~13 500 TL/ночь × 7 = 94 500 TL",
        ],
      },
      {
        type: "p",
        text: "На первый взгляд апартаменты примерно вдвое дешевле. Но реальный расчёт иной: на вилле ужины проходят за столом на восемь персон с поваром, расходы на рестораны снижаются на 40–50 %; благодаря частному бассейну ежедневная морская прогулка не обязательна; дети играют в собственном саду вдали от посторонних. В варианте с апартаментами рестораны и развлечения могут добавлять 25 000–35 000 TL в неделю; на вилле эта сумма снижается до 10 000–15 000 TL. Поэтому «реальная разница в бюджете» за 7 ночей сокращается примерно до 30 000 TL — вилла всё ещё дороже, но за дополнительные 35 % вы получаете опыт заметно более высокого уровня.",
      },
      { type: "h2", id: "ulasim", text: "Трансфер: аэропорт и автомобиль" },
      {
        type: "p",
        text: "Аэропорт Milas-Bodrum расположен на востоке полуострова; 50 км до Yalıkavak и 35 км до центра. Самый удобный вариант — заранее заказанный VIP-трансфер; рейс отслеживается, при задержках дополнительная плата не взимается. Если вы хотите быть мобильными, аренда компактного автомобиля на 7 дней обойдётся в 14 000–18 000 TL. На вилле автомобиль чаще всего необходим (к вилле на склоне маршрутка не доезжает); гости апартаментов до большинства мест добираются на маршрутке или пешком.",
      },
      { type: "h2", id: "yemek", text: "План питания: домашняя еда и рестораны" },
      {
        type: "p",
        text: "Бюджет на питание в Бодруме делится надвое — те, кто заходит в магазин и готовит дома, тратят 4 000–6 000 TL в неделю; те, кто питается в ресторанах каждый раз, за ту же неделю выходят на 25 000–35 000 TL. Вилла с просторной кухней и зоной для трапез на открытом воздухе делает ставку на «домашнюю еду». Для апартаментов практичный план таков: завтрак дома, ужин в ресторане. За рекомендациями по ресторанам обращайтесь к местной команде; попасть в туристическую ловушку здесь очень легко.",
      },
      { type: "h2", id: "yapilacaklar", text: "Список дел на неделю" },
      {
        type: "ol",
        items: [
          "Один день — морская прогулка (Karaada, бухта Akvaryum).",
          "Прогулка на закате в марине Yalıkavak и ужин с поваром.",
          "Однодневная поездка в Datça (2 часа на машине).",
          "День, когда вы не покидаете бассейн или пляж.",
          "Посещение местного рынка (по субботам в Turgutreis, по вторникам в Ortakent).",
          "Замок Бодрума и Музей подводной археологии.",
          "На один из вечеров заранее забронировать столик в местном ресторане.",
        ],
      },
      { type: "h2", id: "sonuc", text: "Вывод" },
      {
        type: "p",
        text: "Для группы из шести человек вилла в Бодруме на 30–40 % дороже варианта с апартаментами, но опыт несравнимо выше. Для пары или небольшой семьи апартаменты — самый практичный выбор; для большой семьи или двух пар вилла почти всегда оправданнее. Если вы не можете определиться, сообщите нам свои даты и размер группы; мы подготовим для вас конкретное сравнение.",
      },
    ],
    faqDe: [
      { q: "Was ist für eine sechsköpfige Gruppe günstiger – Villa oder Apartment?", a: "Allein bei den Unterkunftskosten sind zwei Apartments 40–50 % günstiger als eine Villa. Rechnet man jedoch versteckte Kosten wie Verpflegung, Pool und private Fläche hinzu, schrumpft der Unterschied zur Villa auf 30–40 %. Für eine Großfamilie ist die Villa sinnvoller, für eine kleine Familie das Apartment." },
      { q: "In welchem Monat reist man am besten nach Bodrum?", a: "Ende Mai bis Anfang Juni und der September bieten die beste Kombination aus Wetter und Preis. Juli und August sind Hochsaison; die Wassertemperatur ist am höchsten, ebenso wie der Andrang und die Preise." },
      { q: "Wie wird der Flughafentransfer organisiert?", a: "Fordern Sie ihn bei der Buchung an; wir richten einen VIP-Transfer vom Flughafen Milas-Bodrum bis zur Tür der Villa oder des Apartments ein. Der Preis liegt je nach Region bei 2.500–5.500 TL." },
    ],
    faqRu: [
      { q: "Что выгоднее для группы из шести человек — вилла или апартаменты?", a: "Только по стоимости проживания двое апартаментов на 40–50 % дешевле виллы. Но если добавить скрытые расходы — питание, бассейн, личное пространство, — разница с виллой сокращается до 30–40 %. Для большой семьи разумнее вилла, для небольшой — апартаменты." },
      { q: "В каком месяце лучше всего ехать в Бодрум?", a: "Конец мая — начало июня и сентябрь дают лучшее сочетание погоды и цены. Июль–август — пик: температура воды максимальна, но и людей, и цен это тоже касается." },
      { q: "Как организуется трансфер из аэропорта?", a: "Запросите его при бронировании; мы организуем VIP-трансфер от аэропорта Milas-Bodrum до двери виллы или апартаментов. Цена в зависимости от района составляет 2 500–5 500 TL." },
    ],
  },
  {
    slug: "bodrum-ozel-havuzlu-villalar",
    date: "2026-05-15",
    readingTime: 8,
    hero: "/blog/bodrum-ozel-havuzlu-villalar/hero.webp",
    category: { tr: "Villa", en: "Villa", de: "Villa", ru: "Вилла" },
    titleTr: "Bodrum Özel Havuzlu Villalar: Hangi Bölgede, Hangi Tip Havuz?",
    titleEn: "Bodrum Private-Pool Villas: Which Area, Which Type of Pool?",
    excerptTr:
      "Özel havuzlu villa Bodrum'da artık standart bir tatil tarzı. İnfinity, klasik dikdörtgen, biyo havuz farkları ve hangi bölgede hangi tip bulunur — kısa bir tarama.",
    excerptEn:
      "Private-pool villas have become a standard holiday style in Bodrum. The differences between infinity, classic rectangular and bio pools — and which area carries which — in a short scan.",
    metaTitleTr: "Bodrum Özel Havuzlu Villalar 2026 | Bölge, Tip, Fiyat",
    metaTitleEn: "Bodrum Private-Pool Villas 2026 | Area, Type, Pricing",
    metaDescTr:
      "Bodrum'da özel havuzlu villa kiralamada bölge, havuz tipi, ısıtma ve temizlik standartları — 8 dakikalık özet.",
    metaDescEn:
      "Renting a private-pool villa in Bodrum: area, pool type, heating and cleaning standards — an 8-minute summary.",
    relatedDistricts: ["yalikavak", "turgutreis", "ortakent", "bitez"],
    contentTr: [
      {
        type: "p",
        text: "Özel havuzlu villa, Bodrum yarımadasında 2015 sonrasında bir 'lüks ek' olmaktan çıkıp neredeyse standart bir tatil tarzı haline geldi. Özellikle Yalıkavak, Türkbükü, Bitez iç tarafı ve Ortakent köy içi villalarda özel havuz ilk istek listesinin başında yer alıyor. Bu yazı, havuz tipleri arasındaki farkları, ısıtma ve bakım standartlarını, hangi bölgede hangi havuz çeşidinin yoğun olduğunu kısaca özetler.",
      },
      { type: "h2", id: "tipler", text: "Havuz tipleri: infinity, dikdörtgen, biyo" },
      {
        type: "p",
        text: "Bodrum villalarında üç ana havuz tipi karşımıza çıkar.",
      },
      {
        type: "h3",
        text: "İnfinity (sonsuz) havuz",
      },
      {
        type: "p",
        text: "Bir kenarı denize ya da manzaraya bakan; suyun kenardan kayar gibi aktığı görsel etkili havuz. Yamaca konumlanmış villalarda — özellikle Yalıkavak Tilkicik ve Sandıma tarafında — en yaygın tiptir. Görsel olarak güçlüdür; fotoğraflarda 'havuz ile deniz birleşiyor' etkisi infinity havuzun imzasıdır. Bakım maliyeti klasik havuzlara göre %20-30 daha yüksektir; bu da gecelik fiyata yansır.",
      },
      {
        type: "h3",
        text: "Klasik dikdörtgen havuz",
      },
      {
        type: "p",
        text: "Bodrum villalarının %70'inde gördüğümüz tip. Genellikle 8-12 metre uzunluğunda, 4-5 metre genişliğinde. Yüzme amaçlı en pratik tip; çocuklu aileler için sığ alan eklenebilir. Klorürlü veya tuzlu su seçeneği vardır; tuzlu su seçeneği cilde daha yumuşak gelir.",
      },
      {
        type: "h3",
        text: "Biyo havuz (doğal havuz)",
      },
      {
        type: "p",
        text: "Kimyasal yerine doğal bitki ve filtre sistemleriyle temizlenen havuz. Bodrum'da nadirdir ama Bitez iç tarafında bazı butik villalar bu seçeneği sunuyor. Daha doğal hisseder; ancak yüzme alanı genellikle daha küçüktür.",
      },
      { type: "h2", id: "isitma", text: "Havuz ısıtma — gerekli mi?" },
      {
        type: "p",
        text: "Mayıs ve ekim aylarında deniz sıcak olsa bile havuz suyu, gölgede kalan villalarda 18-20 derece civarında olabilir; ısıtma sistemi olmadan yüzmek zor. Lüks villaların büyük çoğunluğunda havuz ısıtma sistemi vardır; rezervasyon öncesi sormak iyidir. Isıtma genelde 5-10 derecelik bir artış sağlar ve haftalık 800-1.500 TL ek maliyet getirebilir.",
      },
      { type: "h2", id: "bolgeler", text: "Bölgelere göre havuz haritası" },
      {
        type: "ul",
        items: [
          "Yalıkavak Tilkicik / Sandıma — İnfinity havuzlu yamaç villaları.",
          "Turgutreis Akyarlar — Gün batımı yönlü dikdörtgen havuzlar.",
          "Ortakent köy içi — Taş bahçeli klasik dikdörtgen havuzlar.",
          "Bitez iç tarafı — Bahçeli klasik havuzlar; nadiren biyo havuzlu butikler.",
          "Gündoğan yamacı — Rüzgardan korunmuş dikdörtgen havuzlar.",
          "Torba — Resort arkasında klasik aile havuzları, sığ alanlı.",
        ],
      },
      { type: "h2", id: "temizlik", text: "Bakım ve temizlik standartları" },
      {
        type: "p",
        text: "Profesyonel işletilen villalarda havuz haftada en az iki kez kimyasal kontrolden geçer; klor ve pH dengesi günlük takip edilir. Konuk girişinden bir gün önce havuz boşaltılıp filtre temizlenir. Eğer rezervasyon sırasında 'havuz temizlik takvimi' verilmiyorsa bu konuyu mutlaka sorun. İyi işletilen bir villada havuz suyu tamamen şeffaf, dipte hiçbir lekenin görünmediği kalitede olur.",
      },
      { type: "h2", id: "guvenlik", text: "Çocuk güvenliği" },
      {
        type: "p",
        text: "Özel havuzlu villada küçük çocukla kalacaksanız: havuz kenarında alarm sistemi, sığ alan, kaymaz zemin, can simidi ve mümkünse havuz örtüsü bulunmasını talep edin. Yetişkin gözetimi olmadan çocuğu havuza yaklaştırmayın; havuz başına bir 'sorumlu yetişkin' atamak en güvenli pratiktir.",
      },
      { type: "h2", id: "sonuc", text: "Özet" },
      {
        type: "p",
        text: "Bodrum'da özel havuzlu villa seçerken sadece 'havuzlu' yazısına bakmayın; havuz tipini, boyutunu, ısıtma desteğini ve bakım takvimini sorun. Doğru villada havuz başında geçen bir hafta tatilin en güçlü hatırasıdır. Bizim platformumuzdaki tüm villalar bu standartlara göre seçilmiştir; tereddüt ettiğiniz konularda WhatsApp'tan tek tek soru sorabilirsiniz.",
      },
    ],
    contentEn: [
      {
        type: "p",
        text: "After 2015, the private-pool villa has shifted in the Bodrum peninsula from a 'luxury extra' to a near-default holiday style. In Yalıkavak, Türkbükü, the inland side of Bitez and the inner village of Ortakent, the private pool sits at the top of the wishlist. This article summarises the differences between pool types, heating and maintenance standards, and which area carries which type.",
      },
      { type: "h2", id: "types", text: "Pool types: infinity, rectangular, bio" },
      { type: "p", text: "Three main pool types come up in Bodrum villas." },
      { type: "h3", text: "Infinity pool" },
      {
        type: "p",
        text: "A visually striking pool with one edge facing the sea or the view, the water seemingly slipping off the lip. Most common in hillside villas — especially in Yalıkavak's Tilkicik and Sandıma areas. The 'pool meets sea' photo effect is the infinity signature. Maintenance runs 20-30% higher than classic pools, which shows in nightly pricing.",
      },
      { type: "h3", text: "Classic rectangular pool" },
      {
        type: "p",
        text: "The type seen in 70% of Bodrum villas. Usually 8-12 metres long, 4-5 metres wide. The most practical type for swimming; a shallow section can be added for families with children. Chlorine or salt-water options are available; salt water feels softer on the skin.",
      },
      { type: "h3", text: "Bio (natural) pool" },
      {
        type: "p",
        text: "Cleaned using natural plants and filter systems instead of chemicals. Rare in Bodrum, but some boutique villas in the inland side of Bitez carry the option. Feels more natural; the swim area is usually smaller.",
      },
      { type: "h2", id: "heating", text: "Pool heating — necessary?" },
      {
        type: "p",
        text: "Even when the sea is warm in May and October, pool water in shaded villas can sit at 18-20°C; swimming without a heater is hard. Most luxury villas carry pool heating; worth asking before booking. Heating typically lifts the temperature by 5-10°C and may add 800-1,500 TL per week.",
      },
      { type: "h2", id: "areas", text: "Pool map by area" },
      {
        type: "ul",
        items: [
          "Yalıkavak Tilkicik / Sandıma — Hillside infinity-pool villas.",
          "Turgutreis Akyarlar — West-facing rectangular pools for sunset.",
          "Inner Ortakent — Stone-garden classic rectangular pools.",
          "Inland Bitez — Garden classic pools; rare bio-pool boutiques.",
          "Gündoğan slopes — Wind-sheltered rectangular pools.",
          "Torba — Classic family pools behind the resort row, shallow sections common.",
        ],
      },
      { type: "h2", id: "cleaning", text: "Maintenance and cleaning standards" },
      {
        type: "p",
        text: "Professionally run villas check pool chemistry at least twice a week; chlorine and pH are monitored daily. The day before guest arrival, the pool is drained and the filter is cleaned. If a 'pool cleaning schedule' isn't shared at booking, ask about it. A well-run villa has fully transparent water with no marks on the floor.",
      },
      { type: "h2", id: "safety", text: "Child safety" },
      {
        type: "p",
        text: "If you're staying in a private-pool villa with small children: ask about an edge alarm, a shallow section, non-slip flooring, a life ring and ideally a pool cover. Never let a child near the pool without adult supervision; assigning a 'responsible adult' for the pool is the safest practice.",
      },
      { type: "h2", id: "summary", text: "Summary" },
      {
        type: "p",
        text: "When choosing a private-pool villa in Bodrum, don't read 'with pool' and stop there — ask about type, size, heating support and cleaning schedule. With the right villa, a week by the pool becomes the strongest memory of the trip. All villas on our platform are vetted against these standards; if anything's unclear, WhatsApp us.",
      },
    ],
    faqTr: [
      { q: "İnfinity havuz ile dikdörtgen havuz arasında ne fark var?", a: "İnfinity havuz görsel olarak daha etkilidir; bir kenarı manzaraya açık şekilde tasarlanır. Dikdörtgen havuz yüzme için daha pratiktir, çocuklu ailelere uygundur. Bakım maliyeti infinity'de %20-30 daha yüksek olduğu için fiyat da farklı." },
      { q: "Bodrum villalarında havuz ısıtması var mı?", a: "Lüks villaların büyük çoğunluğunda var. Mayıs ve ekim aylarında 5-10 derece artış sağlar. Talep ederseniz rezervasyon sırasında ısıtma maliyetini eklemenizi sağlarız." },
      { q: "Havuz temizliği rezervasyon öncesi nasıl yapılır?", a: "Profesyonel ekiplerde havuz bir gün önce boşaltılıp filtre temizlenir; klor ve pH dengesi günlük kontrol edilir. Rezervasyon sırasında temizlik takvimini sorabilirsiniz." },
    ],
    faqEn: [
      { q: "What's the difference between an infinity and a rectangular pool?", a: "Infinity is more striking visually; one edge is designed open toward the view. Rectangular is more practical for swimming and works for families with children. Maintenance is 20-30% higher for infinity, which is reflected in pricing." },
      { q: "Do Bodrum villas have pool heating?", a: "Most luxury villas do. Heating lifts the pool temperature by 5-10°C in May and October. We can include heating cost in your booking on request." },
      { q: "How is the pool cleaned before booking?", a: "Professional teams drain the pool and clean the filter the day before arrival; chlorine and pH are checked daily. You can ask for the cleaning schedule during booking." },
    ],
    titleDe: "Bodrum Villen mit privatem Pool: Welche Region, welcher Pooltyp?",
    titleRu: "Виллы Бодрума с частным бассейном: какой район и какой тип бассейна?",
    excerptDe:
      "Die Villa mit privatem Pool ist in Bodrum längst eine selbstverständliche Urlaubsform. Die Unterschiede zwischen Infinity-, klassischem Rechteck- und Biopool – und welcher Typ in welcher Region zu finden ist – in einem kurzen Überblick.",
    excerptRu:
      "Вилла с частным бассейном в Бодруме давно стала привычным форматом отдыха. Различия между инфинити-, классическим прямоугольным и биобассейном, и в каком районе встречается тот или иной тип, — краткий обзор.",
    metaTitleDe: "Bodrum Villen mit privatem Pool 2026 | Region, Typ, Preis",
    metaTitleRu: "Виллы Бодрума с частным бассейном 2026 | Район, тип, цена",
    metaDescDe:
      "Villa mit privatem Pool in Bodrum mieten: Region, Pooltyp, Beheizung und Reinigungsstandards – eine Zusammenfassung in acht Minuten.",
    metaDescRu:
      "Аренда виллы с частным бассейном в Бодруме: район, тип бассейна, подогрев и стандарты уборки — краткое резюме за 8 минут.",
    contentDe: [
      {
        type: "p",
        text: "Die Villa mit privatem Pool hat sich auf der Halbinsel Bodrum seit 2015 von einem „Luxuszusatz“ zu einer nahezu selbstverständlichen Urlaubsform entwickelt. Besonders in Yalıkavak, Türkbükü, dem Hinterland von Bitez und dem Ortskern von Ortakent steht der private Pool ganz oben auf der Wunschliste. Dieser Beitrag fasst kurz die Unterschiede zwischen den Pooltypen, die Standards für Beheizung und Pflege sowie die Frage zusammen, welcher Pooltyp in welcher Region vorherrscht.",
      },
      { type: "h2", id: "tipler", text: "Pooltypen: Infinity, Rechteck, Bio" },
      {
        type: "p",
        text: "In Villen in Bodrum begegnen uns drei Haupttypen von Pools.",
      },
      {
        type: "h3",
        text: "Infinity-Pool",
      },
      {
        type: "p",
        text: "Ein optisch wirkungsvoller Pool, dessen eine Kante zum Meer oder zur Aussicht zeigt und über den das Wasser scheinbar hinabgleitet. In Villen am Hang – besonders in Yalıkavak in Richtung Tilkicik und Sandıma – ist er der häufigste Typ. Optisch ist er beeindruckend; der Effekt „Pool und Meer verschmelzen“ auf Fotos ist das Markenzeichen des Infinity-Pools. Die Pflegekosten liegen 20–30 % über denen klassischer Pools, was sich im Übernachtungspreis niederschlägt.",
      },
      {
        type: "h3",
        text: "Klassischer Rechteckpool",
      },
      {
        type: "p",
        text: "Der Typ, den wir in 70 % der Villen in Bodrum sehen. Meist 8–12 Meter lang und 4–5 Meter breit. Der praktischste Typ zum Schwimmen; für Familien mit Kindern lässt sich ein flacher Bereich ergänzen. Es gibt die Wahl zwischen Chlor- oder Salzwasser; Salzwasser ist sanfter zur Haut.",
      },
      {
        type: "h3",
        text: "Biopool (Naturpool)",
      },
      {
        type: "p",
        text: "Ein Pool, der statt mit Chemikalien mit natürlichen Pflanzen und Filtersystemen gereinigt wird. In Bodrum ist er selten, doch einige Boutique-Villen im Hinterland von Bitez bieten diese Option. Er wirkt natürlicher; die Schwimmfläche ist jedoch meist kleiner.",
      },
      { type: "h2", id: "isitma", text: "Poolbeheizung – notwendig?" },
      {
        type: "p",
        text: "Auch wenn das Meer im Mai und Oktober warm ist, kann das Poolwasser in schattigen Villen bei etwa 18–20 °C liegen; ohne Heizsystem ist das Schwimmen schwierig. Die große Mehrheit der gehobenen Villen verfügt über eine Poolheizung; ein Nachfragen vor der Buchung ist ratsam. Die Heizung sorgt in der Regel für einen Anstieg von 5–10 °C und kann pro Woche 800–1.500 TL Zusatzkosten verursachen.",
      },
      { type: "h2", id: "bolgeler", text: "Poolkarte nach Region" },
      {
        type: "ul",
        items: [
          "Yalıkavak Tilkicik / Sandıma – Hangvillen mit Infinity-Pool.",
          "Turgutreis Akyarlar – Nach Westen ausgerichtete Rechteckpools für den Sonnenuntergang.",
          "Ortskern Ortakent – Klassische Rechteckpools in Steingärten.",
          "Hinterland Bitez – Klassische Pools mit Garten; selten Boutiquen mit Biopool.",
          "Hänge von Gündoğan – Windgeschützte Rechteckpools.",
          "Torba – Klassische Familienpools hinter der Resortzeile, mit flachem Bereich.",
        ],
      },
      { type: "h2", id: "temizlik", text: "Pflege- und Reinigungsstandards" },
      {
        type: "p",
        text: "In professionell geführten Villen wird die Wasserchemie des Pools mindestens zweimal pro Woche kontrolliert; Chlor- und pH-Wert werden täglich überwacht. Am Tag vor der Anreise der Gäste wird der Pool abgelassen und der Filter gereinigt. Wird bei der Buchung kein „Poolreinigungsplan“ mitgeteilt, fragen Sie unbedingt danach. In einer gut geführten Villa ist das Poolwasser völlig klar, ohne sichtbare Flecken am Boden.",
      },
      { type: "h2", id: "guvenlik", text: "Kindersicherheit" },
      {
        type: "p",
        text: "Wenn Sie mit kleinen Kindern in einer Villa mit privatem Pool wohnen: Fordern Sie ein Alarmsystem am Poolrand, einen flachen Bereich, einen rutschfesten Boden, einen Rettungsring und möglichst eine Poolabdeckung an. Lassen Sie ein Kind niemals ohne Aufsicht eines Erwachsenen an den Pool; eine „verantwortliche Aufsichtsperson“ für den Pool zu bestimmen, ist die sicherste Praxis.",
      },
      { type: "h2", id: "sonuc", text: "Zusammenfassung" },
      {
        type: "p",
        text: "Achten Sie bei der Wahl einer Villa mit privatem Pool in Bodrum nicht nur auf den Vermerk „mit Pool“; fragen Sie nach Pooltyp, Größe, Beheizung und Reinigungsplan. In der richtigen Villa wird eine Woche am Pool zur stärksten Erinnerung der Reise. Alle Villen auf unserer Plattform sind nach diesen Standards ausgewählt; bei offenen Fragen können Sie uns jederzeit über WhatsApp kontaktieren.",
      },
    ],
    contentRu: [
      {
        type: "p",
        text: "После 2015 года вилла с частным бассейном на полуострове Бодрум перестала быть «премиальным дополнением» и стала почти стандартным форматом отдыха. Особенно в Yalıkavak, Türkbükü, во внутренней части Bitez и в центре посёлка Ortakent частный бассейн занимает первое место в списке пожеланий. Эта статья кратко обобщает различия между типами бассейнов, стандарты подогрева и обслуживания, а также то, какой тип бассейна преобладает в каком районе.",
      },
      { type: "h2", id: "tipler", text: "Типы бассейнов: инфинити, прямоугольный, био" },
      {
        type: "p",
        text: "На виллах Бодрума встречаются три основных типа бассейнов.",
      },
      {
        type: "h3",
        text: "Инфинити-бассейн (бесконечный)",
      },
      {
        type: "p",
        text: "Эффектный бассейн, одна сторона которого обращена к морю или панораме, и вода словно стекает за край. На виллах, расположенных на склоне, — особенно в Yalıkavak в сторону Tilkicik и Sandıma — это самый распространённый тип. Визуально он силён; эффект «бассейн сливается с морем» на снимках — фирменный знак инфинити-бассейна. Расходы на обслуживание на 20–30 % выше, чем у классических бассейнов, и это отражается на цене за ночь.",
      },
      {
        type: "h3",
        text: "Классический прямоугольный бассейн",
      },
      {
        type: "p",
        text: "Тип, который мы видим на 70 % вилл Бодрума. Обычно 8–12 метров в длину и 4–5 метров в ширину. Самый практичный тип для плавания; для семей с детьми можно добавить мелкую зону. Доступен выбор хлорированной или солёной воды; солёная вода мягче для кожи.",
      },
      {
        type: "h3",
        text: "Биобассейн (природный бассейн)",
      },
      {
        type: "p",
        text: "Бассейн, который очищается природными растениями и фильтрующими системами вместо химии. В Бодруме встречается редко, но некоторые бутик-виллы во внутренней части Bitez предлагают такой вариант. Он ощущается более естественным; однако зона для плавания обычно меньше.",
      },
      { type: "h2", id: "isitma", text: "Подогрев бассейна — нужен ли он?" },
      {
        type: "p",
        text: "Даже когда в мае и октябре море тёплое, вода в бассейне затенённых вилл может держаться около 18–20 градусов; плавать без системы подогрева трудно. Подавляющее большинство премиальных вилл оснащены подогревом бассейна; об этом стоит спросить до бронирования. Подогрев обычно повышает температуру на 5–10 градусов и может добавлять 800–1 500 TL в неделю.",
      },
      { type: "h2", id: "bolgeler", text: "Карта бассейнов по районам" },
      {
        type: "ul",
        items: [
          "Yalıkavak Tilkicik / Sandıma — виллы на склоне с инфинити-бассейном.",
          "Turgutreis Akyarlar — прямоугольные бассейны, обращённые на запад, к закату.",
          "Центр Ortakent — классические прямоугольные бассейны в каменных садах.",
          "Внутренняя часть Bitez — классические бассейны с садом; редко бутик-виллы с биобассейном.",
          "Склоны Gündoğan — прямоугольные бассейны, защищённые от ветра.",
          "Torba — классические семейные бассейны за линией резортов, с мелкой зоной.",
        ],
      },
      { type: "h2", id: "temizlik", text: "Стандарты обслуживания и уборки" },
      {
        type: "p",
        text: "На виллах с профессиональным управлением вода в бассейне проходит проверку химического состава не реже двух раз в неделю; баланс хлора и pH контролируется ежедневно. За день до заезда гостей бассейн опорожняют и чистят фильтр. Если при бронировании вам не предоставляют «график уборки бассейна», обязательно спросите об этом. В хорошо управляемой вилле вода в бассейне совершенно прозрачна, без единого пятна на дне.",
      },
      { type: "h2", id: "guvenlik", text: "Безопасность детей" },
      {
        type: "p",
        text: "Если вы остановитесь на вилле с частным бассейном с маленькими детьми: попросите систему сигнализации у края бассейна, мелкую зону, нескользкое покрытие, спасательный круг и по возможности накрытие бассейна. Не подпускайте ребёнка к бассейну без присмотра взрослого; назначить «ответственного взрослого» у бассейна — самая безопасная практика.",
      },
      { type: "h2", id: "sonuc", text: "Итог" },
      {
        type: "p",
        text: "Выбирая в Бодруме виллу с частным бассейном, не ограничивайтесь надписью «с бассейном»; спросите о типе бассейна, его размере, поддержке подогрева и графике обслуживания. В правильно выбранной вилле неделя у бассейна станет самым ярким воспоминанием поездки. Все виллы на нашей платформе отобраны в соответствии с этими стандартами; по любым сомнениям вы можете задать вопросы в WhatsApp.",
      },
    ],
    faqDe: [
      { q: "Worin besteht der Unterschied zwischen einem Infinity- und einem Rechteckpool?", a: "Der Infinity-Pool ist optisch eindrucksvoller; eine Kante ist offen zur Aussicht gestaltet. Der Rechteckpool ist praktischer zum Schwimmen und für Familien mit Kindern geeignet. Da die Pflegekosten beim Infinity-Pool 20–30 % höher liegen, unterscheidet sich auch der Preis." },
      { q: "Verfügen Villen in Bodrum über eine Poolheizung?", a: "Die große Mehrheit der gehobenen Villen ja. Im Mai und Oktober sorgt sie für einen Anstieg von 5–10 °C. Auf Wunsch lassen wir Sie die Heizkosten bei der Buchung hinzufügen." },
      { q: "Wie wird der Pool vor der Buchung gereinigt?", a: "Professionelle Teams lassen den Pool einen Tag zuvor ab und reinigen den Filter; Chlor- und pH-Wert werden täglich kontrolliert. Den Reinigungsplan können Sie bei der Buchung erfragen." },
    ],
    faqRu: [
      { q: "В чём разница между инфинити-бассейном и прямоугольным?", a: "Инфинити-бассейн визуально эффектнее; одна его сторона спроектирована открытой к панораме. Прямоугольный практичнее для плавания и подходит семьям с детьми. Поскольку расходы на обслуживание инфинити-бассейна на 20–30 % выше, отличается и цена." },
      { q: "Есть ли на виллах Бодрума подогрев бассейна?", a: "У подавляющего большинства премиальных вилл есть. В мае и октябре он повышает температуру на 5–10 градусов. По вашему запросу мы добавим стоимость подогрева при бронировании." },
      { q: "Как чистят бассейн перед бронированием?", a: "Профессиональные команды за день до заезда опорожняют бассейн и чистят фильтр; баланс хлора и pH проверяется ежедневно. График уборки вы можете уточнить при бронировании." },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
