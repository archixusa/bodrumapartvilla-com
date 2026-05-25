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
  category: { tr: string; en: string };
  titleTr: string;
  titleEn: string;
  excerptTr: string;
  excerptEn: string;
  metaTitleTr: string;
  metaTitleEn: string;
  metaDescTr: string;
  metaDescEn: string;
  contentTr: PostSection[];
  contentEn: PostSection[];
  faqTr: { q: string; a: string }[];
  faqEn: { q: string; a: string }[];
  relatedDistricts?: DistrictSlug[];
}

export const posts: Post[] = [
  {
    slug: "bodrum-villa-rehberi",
    date: "2026-05-20",
    readingTime: 10,
    hero: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=2000&q=80",
    category: { tr: "Villa Rehberi", en: "Villa Guide" },
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
  },
  {
    slug: "bodrum-tatil-rehberi-2026",
    date: "2026-05-18",
    readingTime: 9,
    hero: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=2000&q=80",
    category: { tr: "Rehber", en: "Guide" },
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
  },
  {
    slug: "bodrum-ozel-havuzlu-villalar",
    date: "2026-05-15",
    readingTime: 8,
    hero: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=2000&q=80",
    category: { tr: "Villa", en: "Villa" },
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
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
