export type DistrictSlug =
  | "gumbet"
  | "turgutreis"
  | "yalikavak"
  | "bitez"
  | "ortakent"
  | "gundogan"
  | "torba";

export interface District {
  slug: DistrictSlug;
  urlSlug: string;
  name: string;
  shortDescTr: string;
  shortDescEn: string;
  longDescTr: string;
  longDescEn: string;
  heroImage: string;
  highlights: { tr: string[]; en: string[] };
  nearby: DistrictSlug[];
  lat: number;
  lng: number;
}

export const districts: District[] = [
  {
    slug: "gumbet",
    urlSlug: "gumbet-villa-kiralama",
    name: "Gümbet",
    shortDescTr: "Sahile yakın hareketli koy; yamacında havuzlu villa siteleri.",
    shortDescEn: "Lively beachfront cove with hillside villa complexes above.",
    longDescTr:
      "Gümbet denince çoğu kişinin aklına ilk olarak hareketli sahil hattı gelir; oysa koyun arkasındaki yamaçlarda son on yılda yükselen butik villa siteleri bambaşka bir tatil hikayesi sunar. Bodrum merkezine yürüme mesafesindeki konumu sayesinde, akşam çıkışlarınızı kolayca planlar, geceyi havuz başında dinlenerek bitirirsiniz. Villa seçenekleri genellikle 3-5 yatak odalı, özel havuzlu ve manzara terasları olan yapılardır; bahçeli müstakil seçenekler ise daha çok Bardakçı Koyu yönünde yer alır. Apart segmentinde ise sahile birkaç dakika yürüme mesafesinde, site içi ortak havuzlu daireler ön plandadır — kalabalık aileler için ekonomik, gençler için merkezi. Gümbet'te kalmanın asıl avantajı ulaşım: marinaya, kaleye, Bardakçı'ya, Bitez'e dakikalar içinde ulaşırsınız ve dolmuş seferleri tüm gece sürer. Aile odaklı misafirler için sahilin daha sakin doğu ucundaki villaları öneririz; arkadaş grupları için ise merkezi caddenin sırtındaki teraslı apart siteleri uygun olur.",
    longDescEn:
      "Gümbet is best known for its lively shoreline, yet the hillsides behind the cove tell a different story — boutique villa complexes built over the last decade now offer a calmer side to this address. Walking distance to Bodrum centre makes evenings easy: head out for dinner, return to the pool. Villas here are typically 3 to 5 bedrooms with private pools and view terraces; detached options with private gardens lean toward the Bardakçı Cove side. On the apartment side, complexes with shared pools sit just minutes from the beach — economical for large families, central for younger groups. The real advantage of Gümbet is reach: the marina, the castle, Bardakçı and Bitez are all minutes away, and dolmuş minibuses run through the night. We point families to the calmer eastern side of the bay and put friend groups in the terraced complexes behind the main avenue.",
    heroImage:
      "https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=1600&q=80",
    highlights: {
      tr: [
        "Yamaçta özel havuzlu villalar (3-5 oda)",
        "Sahile yakın site içi ortak havuzlu apartlar",
        "Bodrum merkezine 2 km, kale ve marina yakın",
        "Geceleri sürekli işleyen dolmuş hattı",
      ],
      en: [
        "Hillside private-pool villas (3-5 bedrooms)",
        "Beachside apartment complexes with shared pools",
        "2 km to Bodrum centre, castle and marina close",
        "Dolmuş minibuses through the night",
      ],
    },
    nearby: ["bitez", "ortakent"],
    lat: 37.0339,
    lng: 27.4002,
  },
  {
    slug: "turgutreis",
    urlSlug: "turgutreis-villa-kiralama",
    name: "Turgutreis",
    shortDescTr: "Uzun sahil, gün batımı manzaralı villa terasları.",
    shortDescEn: "Long shoreline with sunset-facing villa terraces.",
    longDescTr:
      "Bodrum yarımadasının batı ucunda yer alan Turgutreis, akşam saatlerinde Türkiye'nin en güzel gün batımı sahnelerinden birine ev sahipliği yapar; bu yüzden villa yatırımcılarının uzun süredir gözdesidir. Sahile cepheli, batı yönüne bakan teraslı villalar burada özel bir konumda — havuz başında dünya batarken cama vuran turuncu hâlâ misafirlerin en çok fotoğrafladığı an. Akyarlar ve Aspat tarafındaki müstakil villalar arasında bütçeye uygun aile evlerinden lüks bal ayı seçeneklerine kadar geniş bir aralık vardır. Merkezde apart segmenti uygundur ve cumartesi pazarı, marinası, restoran hattı sayesinde villa misafirlerinin gün içi vakit geçirmesi için pratik bir aks oluşturur. Kos adasına tekneyle bir saatte ulaşırsınız; çift dolu villa ya da geniş ailenin günlük bir Yunan adası çıkmasını planlamak buradan en kolayıdır.",
    longDescEn:
      "On the western tip of the peninsula, Turgutreis hosts one of Turkey's most photographed sunsets, which is precisely why villa investors have long favoured the area. West-facing terraced villas overlooking the sea hold a special spot — the orange glow on the pool deck is the most-photographed moment of many trips. Detached villas around Akyarlar and Aspat span family budgets to honeymoon-grade luxury. The apartment market sits in the centre, where the Saturday market, the marina and the restaurant row create a practical day-to-day axis for villa guests. Kos is a one-hour ferry away — easy if a villa or full family wants to fit a Greek island day in.",
    heroImage:
      "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=1600&q=80",
    highlights: {
      tr: [
        "Batı yönlü teraslı, gün batımı villaları",
        "Akyarlar/Aspat müstakil villa hattı",
        "Cumartesi pazarı ve modern marina",
        "Kos adasına 1 saat feribot",
      ],
      en: [
        "West-facing terraced sunset villas",
        "Detached villas around Akyarlar/Aspat",
        "Saturday market and modern marina",
        "1-hour ferry to Kos",
      ],
    },
    nearby: ["yalikavak", "ortakent"],
    lat: 37.0153,
    lng: 27.2657,
  },
  {
    slug: "yalikavak",
    urlSlug: "yalikavak-villa-kiralama",
    name: "Yalıkavak",
    shortDescTr: "Süper yat marinası, yamaçta özel havuzlu lüks villalar.",
    shortDescEn: "Superyacht marina and luxury private-pool villas on the hillside.",
    longDescTr:
      "Yalıkavak, son yıllarda Bodrum'un en lüks tatil rotası olarak tanımlanır oldu; bal ayı çiftleri, kurumsal gruplar ve uzun konaklamalı aileler için bu sitenin öne çıkardığı en güçlü adres burası. Yamaç sırtında, denize hakim teraslarla dizilmiş özel havuzlu villalar burada bir karakter taşır: havuza tatlı bir eğimle inen bahçeler, marinanın ışıklarını gece boyu gören oturma alanları ve infinity pool şablonu bu bölgenin standardıdır. Tilkicik ve Kudur koylarına araç ile dakikalar içinde ulaşırsınız; sezonun yoğun günlerinde villanızdan tekne çağırıp Sandıma ya da Cennet Adası'na yarım günlük kaçamak en sevilen pratik rotalardandır. Apart segmentinde ise eski Yalıkavak köyünün arka sokaklarında, beyaz badanalı yapılarda butik daireler bulunur — çift ve küçük aile için uygundur. Akşam yemeği için marinadaki şef restoranları, gündüz için sahil iskeleleri ve butik mağaza hattı bölgenin günlük ritmini şekillendirir.",
    longDescEn:
      "Yalıkavak has become Bodrum's most luxurious holiday route in recent years — and this site's headline choice for honeymoon couples, corporate groups and long-stay families. Private-pool villas line the hillside with terraces facing the sea: gently sloping gardens that step down to the water, living areas with marina lights all night, and the infinity-pool layout that defines the area. Tilkicik and Kudur coves are minutes away; on peak days, calling a boat to your villa for a half-day at Sandıma or Paradise Island is a beloved ritual. The apartment side hides in the back streets of the old village, in whitewashed buildings — best for couples and small families. Chef restaurants on the marina anchor the evening; daytime is shaped by sea-front piers and the boutique shop row.",
    heroImage:
      "https://images.unsplash.com/photo-1561409037-c7be81613c1f?auto=format&fit=crop&w=1600&q=80",
    highlights: {
      tr: [
        "Yamaçta infinity havuzlu villalar",
        "Süper yat marinası ve şef restoranları",
        "Tilkicik / Kudur / Sandıma gizli koyları",
        "Eski köyde butik apart seçenekleri",
      ],
      en: [
        "Hillside infinity-pool villas",
        "Superyacht marina and chef restaurants",
        "Hidden coves at Tilkicik / Kudur / Sandıma",
        "Boutique apartments in the old village",
      ],
    },
    nearby: ["gundogan", "turgutreis"],
    lat: 37.1093,
    lng: 27.2913,
  },
  {
    slug: "bitez",
    urlSlug: "bitez-villa-kiralama",
    name: "Bitez",
    shortDescTr: "Mandalina bahçeli iç tarafta, bahçeli özel havuzlu villalar.",
    shortDescEn: "Inland tangerine groves with garden villas and private pools.",
    longDescTr:
      "Bitez, Gümbet'in gürültüsünden adım atılır atılmaz değişen, mandalina bahçeleriyle çevrili sakin bir koy; sahil kısmı rüzgar sörfü ve aile dostu sığ deniziyle tanınırken, koyun arka tarafındaki iç bölgede bahçeli, özel havuzlu villalar ön plana çıkar. Bu villaların büyük çoğunluğu müstakil yapıdadır ve villa sınırları içinde meyve ağaçlarıyla çevrelenmiş kahvaltı terasları, mangal alanları ve büyük havuzlar bulundurur — özellikle akşam yemeğini kalabalık aileyle ev içinde yapmayı tercih edenler için ideal. Apart kısmı ise sahile yakın, ortak havuzlu sitelerdedir; çift ve küçük aile için pratik. Sahildeki ahşap iskeleli balık restoranları geceyi hareketsizlikten çıkarır; gündüzleri rüzgar sörfü okulları ve sahile dizilmiş gözleme evleri en sevilen duraklardır. Gümbet'e yürüme, Ortakent'e ise sahil yolundan kısa bir araç mesafesi vardır.",
    longDescEn:
      "Bitez is the calm tangerine-grove cove that begins a step away from Gümbet's noise. The shore is known for windsurfing and family-friendly shallow water, while the inland side hides garden villas with private pools. Most of these villas are detached and come with fruit-tree-lined breakfast terraces, BBQ areas and generous pools — perfect for guests who want to eat in with a large family. The apartment market sits closer to the beach, in complexes with shared pools — practical for couples and small families. Wooden-pier fish restaurants give the evening its rhythm; by day, windsurfing schools and the traditional gözleme houses on the shore set the pace. Gümbet is a walk, Ortakent a short drive along the coast road.",
    heroImage:
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1600&q=80",
    highlights: {
      tr: [
        "İç tarafta bahçeli, müstakil havuzlu villalar",
        "Sahilde rüzgar sörfü ve sığ aile plajı",
        "Ahşap iskeleli balık restoranları",
        "Gümbet'e yürüme mesafesi",
      ],
      en: [
        "Inland detached garden villas with private pools",
        "Beachside windsurfing and shallow family swim",
        "Wooden-pier fish restaurants",
        "Walking distance to Gümbet",
      ],
    },
    nearby: ["gumbet", "ortakent"],
    lat: 37.034,
    lng: 27.367,
  },
  {
    slug: "ortakent",
    urlSlug: "ortakent-villa-kiralama",
    name: "Ortakent",
    shortDescTr: "Yahşi plajı arkasında geleneksel köy ve bahçeli villalar.",
    shortDescEn: "Traditional village and garden villas behind Yahşi beach.",
    longDescTr:
      "Ortakent, yarımadanın 1 kilometreyi bulan en uzun kumsalı Yahşi'yi sahiplenir; ancak villa seçenekleri açısından asıl ilginç olan plajın arkasındaki geleneksel köy dokusudur. Bu iç kısımda taş duvarlar, eski Bodrum mimarisi ve mandalina-zeytin ağaçlarıyla çevrelenmiş bahçeli villalar bulunur; çoğunluğu özel havuzlu, 3-5 yatak odalıdır ve sokak gürültüsünden tamamen uzaktır. Salı pazarı, Mustafa Paşa Kulesi ve sahil arasındaki yürüyüş yolu villa misafirlerinin günlük ritmini şekillendirir. Apart segmentinde Yahşi plajı önündeki site daireleri öne çıkar — kahvaltıdan sonra terastan inip kumsala 30 saniyede ulaşmak isteyen aile için kusursuz. Bodrum merkezine 10 dakika, Bitez'e yürüme mesafesi, Gümbet'e sahil yolu olduğundan kalkıştan dönüşe çok pratik bir merkez sayılır.",
    longDescEn:
      "Ortakent claims Yahşi, the peninsula's longest sandy beach at nearly a kilometre — but the more interesting villa story sits in the traditional village right behind it. Stone walls, old Bodrum architecture and gardens lined with tangerine and olive trees frame villas that are mostly private-pool, 3 to 5 bedrooms, and entirely removed from street noise. The Tuesday market, the Mustafa Paşa Tower and the walking path to the beach shape the daily rhythm. The apartment side fronts Yahşi beach in shoreline complexes — perfect when the family wants to walk down for a swim in 30 seconds. Ten minutes to Bodrum centre, a walk to Bitez and a short coast-road drive to Gümbet make this a practical base.",
    heroImage:
      "https://images.unsplash.com/photo-1559494007-9f5847c49d94?auto=format&fit=crop&w=1600&q=80",
    highlights: {
      tr: [
        "İç köyde geleneksel taş bahçeli villalar",
        "Yahşi plajı önünde sahil apartları",
        "Salı pazarı ve yerel üreticiler",
        "Bodrum merkezine 10 dakika araba",
      ],
      en: [
        "Traditional stone-walled garden villas in the village",
        "Beachfront apartments at Yahşi",
        "Tuesday market and local producers",
        "10 minutes by car to Bodrum centre",
      ],
    },
    nearby: ["bitez", "gumbet"],
    lat: 37.0517,
    lng: 27.3589,
  },
  {
    slug: "gundogan",
    urlSlug: "gundogan-villa-kiralama",
    name: "Gündoğan",
    shortDescTr: "Sakin koy, denize hakim yamaç villaları.",
    shortDescEn: "Quiet cove with hillside villas overlooking the sea.",
    longDescTr:
      "Gündoğan, Yalıkavak ile Türkbükü arasında saklı kalmış sakin bir koydur; lüksü gösterişten uzak, dingin bir biçimde yaşamak isteyenlerin tercihidir. Yamaçtaki villalar denize cepheli, ferah teraslı ve çoğunlukla özel havuzludur; küçük guruplara da uygun 3 odalı seçenekler de bulunur. Sahili çakıllı ve sezon sonunda bile yüzülebilir biçimde sakindir; Cennet Adası'na yapılan günlük tekne çıkışları bölgenin imzasıdır. Akşam yemeği için sahildeki birkaç Akdeniz mutfağı restoranı yeterli olur; daha hareketli bir gece için Yalıkavak'a 5 dakika araba mesafesindedir. Apart segmenti burada azdır ve genelde yamaç yönlü, deniz manzaralı küçük daireler şeklindedir. Aile, uzun konaklayan emekli çift ve yavaş tatil arayan misafirler için doğru adres.",
    longDescEn:
      "Gündoğan is the calm cove hidden between Yalıkavak and Türkbükü — a choice for guests who want luxury without spectacle. The hillside villas face the sea with generous terraces, mostly with private pools; smaller 3-bedroom options suit couples and tight groups. The pebble shoreline stays calm enough for swimming into the late season; day trips to Paradise Island define the area. A handful of seafront Aegean restaurants cover the evenings; for more energy, Yalıkavak is a 5-minute drive away. The apartment market is small here, mostly hillside studios and one-bedrooms with sea views. The right address for families, long-stay couples and slow-travel guests.",
    heroImage:
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1600&q=80",
    highlights: {
      tr: [
        "Yamaçta deniz manzaralı özel havuzlu villalar",
        "Rüzgardan korunan sakin koy",
        "Cennet Adası tekne çıkışları",
        "Yalıkavak'a 5 dakika araba",
      ],
      en: [
        "Hillside sea-view private-pool villas",
        "Wind-sheltered calm cove",
        "Boat trips to Paradise Island",
        "5-minute drive to Yalıkavak",
      ],
    },
    nearby: ["yalikavak", "torba"],
    lat: 37.1311,
    lng: 27.3458,
  },
  {
    slug: "torba",
    urlSlug: "torba-villa-kiralama",
    name: "Torba",
    shortDescTr: "Havalimanına en yakın koy, sakin resort villaları.",
    shortDescEn: "Closest cove to the airport, with calm resort-style villas.",
    longDescTr:
      "Torba, Milas-Bodrum Havalimanı'na sadece 25 dakika mesafesiyle iniş sonrası en hızlı dinlenme adresi sayılır. Kuzey sahildedir, sığ ve sakin sularıyla çocuklu aileler için son derece güvenlidir. Villa segmenti burada genellikle resort hattının arkasında, müstakil ve havuzlu yapılardadır; bahçeleri geniş, akşamları yıldız izlemeye uygun teraslıdır. Apart segmentinde modern site daireleri ön plandadır; çoğunlukla site içi havuzlu ve havalimanı misafirleri için 'inip dinlenme' düşüncesiyle tasarlanmıştır. Gece eğlencesi villada veya resort içindedir; daha hareketli bir akşam için Bodrum merkezi 15 dakika sürer. Çift ya da geniş aile için kalabalıktan kaçınmak isteyenlerin doğru tercihidir.",
    longDescEn:
      "Torba sits just 25 minutes from Milas-Bodrum Airport — the fastest 'land and rest' address on the peninsula. On the north shore, with calm shallow water, it's exceptionally safe for families with children. The villa market here mostly takes a detached, private-pool form behind the resort row, with wide gardens and terraces well-suited to star-watching evenings. The apartment side leans modern, with shared pools and a build philosophy of 'land, settle, switch off'. Evening life happens at the villa or inside the resorts; for more energy, Bodrum centre is a 15-minute drive. The right choice for couples or large families who want to avoid the peak-day crowd.",
    heroImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    highlights: {
      tr: [
        "Havalimanına 25 dakika",
        "Resort arkasında müstakil havuzlu villalar",
        "Sığ, sakin ve güvenli deniz",
        "Bodrum merkezine 15 dakika araba",
      ],
      en: [
        "25 minutes from the airport",
        "Detached private-pool villas behind the resort row",
        "Shallow, calm, safe sea",
        "15-minute drive to Bodrum centre",
      ],
    },
    nearby: ["gundogan", "yalikavak"],
    lat: 37.0859,
    lng: 27.4406,
  },
];

export function getDistrict(slug: string): District | undefined {
  return districts.find((d) => d.slug === slug || d.urlSlug === slug);
}
