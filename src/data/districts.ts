export type DistrictSlug =
  | "gumbet"
  | "turgutreis"
  | "yalikavak"
  | "bitez"
  | "ortakent"
  | "gundogan"
  | "torba"
  | "turkbuku"
  | "gumusluk"
  | "golturkbuku";

export interface SeoSection {
  heading: string;
  body: string;
}

export interface DistrictSeo {
  h1: { tr: string; en: string };
  sections: { tr: SeoSection[]; en: SeoSection[] };
  faq: { tr: { q: string; a: string }[]; en: { q: string; a: string }[] };
  priceRange: string;
}

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
  seo?: DistrictSeo;
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
    nearby: ["gundogan", "turgutreis", "gumusluk"],
    lat: 37.1093,
    lng: 27.2913,
    seo: {
      h1: {
        tr: "Yalıkavak Villa Kiralama — Butik Koleksiyon ve Sakin Sahil",
        en: "Yalıkavak Villa Rental — A Boutique Collection and a Quiet Shore",
      },
      priceRange: "2500-5000 TL / gece",
      sections: {
        tr: [
          {
            heading: "Yalıkavak'ın Atmosferi",
            body: "Yalıkavak, Bodrum'da lüksün sessiz biçimde olgunlaştığı tek koydur. Palmarina'nın 2014 sonrası açılışıyla birlikte gelen süperyat hareketi, koyun batı yamacında butik villaların oluştuğu bir hattı tetikledi; ancak bu hattın asıl niteliği gösterişten çok ölçüdür. Mimari, beyaz badana ve doğal taşın orta yolunda durur. Eski Yalıkavak köyünün arka sokaklarında hâlâ ev yapımı tarhana satan teyzeler, koyun bir ucundaki sanatçı stüdyoları ve marinanın diğer ucundaki butik mağaza hattı — bu üçü, Yalıkavak'ı bir butik tatil adresi olarak ayakta tutan dayanak noktalarıdır.",
          },
          {
            heading: "Premium Misafir Profili",
            body: "Yalıkavak villaları, Türkiye'nin yaratıcı ve kurumsal kesimi, Avrupa'nın olgun butik tatil müşterisi ve yat sahibi misafirler tarafından tercih edilir. Bal ayı çiftleri için sezon dışı tatilde sakin, sezon ortasında ise marina hareketiyle dengeli bir adres. Aileler için yamaca dizilmiş özel havuzlu villalar; çiftler için marina yakınında butik tek odalı evler. Kurumsal etkinlikler için 8-12 kişilik villalar yıl içinde 2-3 küçük gruba ev sahipliği yapar.",
          },
          {
            heading: "Aktiviteler: Marinadan Sandıma'ya",
            body: "Palmarina'nın butik mağaza hattı sezonun en olgun adresidir; alışveriş ötesinde, marinanın gün batımı saatleri kendi başına bir ritüeldir. Tilkicik ve Kudur koyları, villaya en yakın özel teknesel rota seçenekleridir. Eski Sandıma köyünün yamaca tutunmuş taş evleri, akşamüstü bir yürüyüş için ideal. Yarım günlük bir özel motoryatla Karaada akvaryum koyuna ulaşmak, sezonun en sık planlanan çıkışıdır.",
          },
          {
            heading: "Villa Profili: Yamaçtan Sahile",
            body: "Yalıkavak'ta tipik villa 4-6 yatak odalı, özel havuzlu, 280-500 metrekare arasında, denize cepheli bir terasla şekillenir. Yamaca dizilmiş villaların büyük bölümü infinity havuz tasarımıyla gelir. Sahile cepheli ya da özel iskeleli villalar nadir bulunur ve fiyat segmentini yukarı çeker. Yüksek sezon (Temmuz-Ağustos) fiyatları 3.500-5.000 TL/gece bandında; sezon dışında 2.500-3.500 TL/gece civarında dolaşır.",
          },
          {
            heading: "Gastronomi: Marinada Şef, Köyde Meyhane",
            body: "Marina restoranları haftalık menü kürasyonuyla çalışır; sezon balığı, kıyıdan toplanan otlar ve yerel zeytinyağı tabakların ortak tabanını kurar. Köyün arka sokaklarındaki iki meyhane, klasik Ege geleneğini olduğu gibi sürdürür. Villada özel şef hizmeti, konsiyerj ekibimiz tarafından tek bir mesajla planlanır.",
          },
          {
            heading: "Yakın Bölgeler",
            body: "Gümüşlük, sakin bir öğleden sonra için 20 dakika; Türkbükü, beach club kültürüne kısa bir geçiş için 15 dakika. Gündoğan'ın çakıllı sahili 12 dakikalık bir sürüş, Bodrum merkezi yaklaşık 25 dakika sürer.",
          },
        ],
        en: [
          {
            heading: "The Atmosphere of Yalıkavak",
            body: "Yalıkavak is the one cove where Bodrum's luxury matures in a quiet voice. The superyacht movement that arrived with Palmarina after 2014 triggered a boutique villa line on the western slope — but its real quality is measure rather than spectacle. The architecture sits between whitewash and natural stone. Aunties still selling homemade tarhana in the old village's back lanes, artist studios at one end of the bay and the boutique shop row at the other — these three anchors keep Yalıkavak standing as a boutique address.",
          },
          {
            heading: "A Premium Guest Profile",
            body: "Yalıkavak villas are chosen by Turkey's creative and corporate classes, Europe's mature boutique-holiday guests and yacht owners. Honeymoon couples find it quiet in shoulder seasons and balanced by marina life at peak. Families lean toward hillside private-pool villas; couples take boutique one-bedrooms near the marina. Corporate events bring 2-3 small groups a year to 8-12 sleeper villas.",
          },
          {
            heading: "Activities: From the Marina to Sandıma",
            body: "Palmarina's boutique shop row is the most mature address of the season; beyond the shopping, sunset hour at the marina is a ritual of its own. Tilkicik and Kudur are the nearest private-boat routes from the villa. The old Sandıma village's hillside stone houses suit a late-afternoon walk. A half-day private motoryacht to Karaada's aquarium cove is the most-planned outing of the season.",
          },
          {
            heading: "Villa Profile: From the Slope to the Shore",
            body: "A typical Yalıkavak villa is 4-6 bedrooms, with a private pool, 280-500 m², and a sea-facing terrace. Most hillside villas open with an infinity-pool layout. Seafront or jetty-equipped villas are rare and lift the price segment. High season (July-August) runs 3,500-5,000 TL per night; shoulder seasons 2,500-3,500 TL.",
          },
          {
            heading: "Gastronomy: Chefs at the Marina, Meyhanes in the Village",
            body: "Marina restaurants work weekly menus; seasonal fish, slope-gathered herbs and local olive oil form the common base. Two back-lane meyhanes in the village carry the classic Aegean tradition intact. Private chef service at the villa is arranged through our concierge in a single message.",
          },
          {
            heading: "Nearby",
            body: "Gümüşlük, twenty minutes for a quiet afternoon. Türkbükü, fifteen for a short visit to the beach club culture. Gündoğan's pebbled shore is a twelve-minute drive; Bodrum centre, about twenty-five.",
          },
        ],
      },
      faq: {
        tr: [
          {
            q: "Palmarina'ya yürüme mesafesinde villa var mı?",
            a: "Evet. Yamacın batı tarafında, marinaya 10-15 dakikalık yürüme mesafesinde butik villalar mevcuttur. Konsiyerj ekibimiz konaklama tarihinize uygun seçenekleri filtreler.",
          },
          {
            q: "Yalıkavak'ta villa fiyat aralığı?",
            a: "Yüksek sezonda 3.500-5.000 TL/gece; sezon dışında 2.500-3.500 TL/gece bandı geçerlidir. Lüks segment bunun üzerine çıkar.",
          },
          {
            q: "Sandıma köyü ne kadar uzakta?",
            a: "Yalıkavak Marinası'ndan yaklaşık 5 dakika; yamacın üst tarafına çıkan kısa bir araç mesafesi. Akşamüstü yürüyüşü için ideal.",
          },
          {
            q: "Süperyat yanaşma imkânı var mı?",
            a: "Palmarina, Akdeniz'in en gelişmiş yat marinalarından biridir; 100 metre üzeri yatlar dahil çeşitli boyutlarda iskele kullanımı mümkündür.",
          },
          {
            q: "Yalıkavak çocuklu aileler için uygun mu?",
            a: "Sığ ve sakin sahil ailelere uygundur. Villanın yamaçtaki konumuna göre, çocuk havuzlu seçimler konsiyerj ekibimizce filtrelenir.",
          },
        ],
        en: [
          {
            q: "Is there a villa within walking distance of Palmarina?",
            a: "Yes. On the western slope, boutique villas sit 10-15 minutes' walk from the marina. Our concierge filters by your stay dates.",
          },
          {
            q: "What is the villa price range in Yalıkavak?",
            a: "High season 3,500-5,000 TL per night; shoulder seasons 2,500-3,500 TL. Luxury runs above.",
          },
          {
            q: "How far is the old Sandıma village?",
            a: "About five minutes from Palmarina, a short drive up the slope. Ideal for a late-afternoon walk.",
          },
          {
            q: "Can superyachts dock here?",
            a: "Palmarina is one of the most developed yacht marinas in the Mediterranean; berths for yachts above 100 m and a range of smaller sizes are available.",
          },
          {
            q: "Is Yalıkavak suitable for families with young children?",
            a: "The shallow, calm shore is comfortable for families. Our concierge filters villas with a children's pool, suited to your villa's hillside position.",
          },
        ],
      },
    },
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
    nearby: ["gundogan", "yalikavak", "turkbuku"],
    lat: 37.0859,
    lng: 27.4406,
    seo: {
      h1: {
        tr: "Torba Villa Kiralama — Bodrum'a Yakın Sakin Sahil",
        en: "Torba Villa Rental — A Quiet Shore Close to Bodrum",
      },
      priceRange: "1500-4000 TL / gece",
      sections: {
        tr: [
          {
            heading: "Torba'nın Atmosferi: Sessiz Bir Geliş",
            body: "Milas-Bodrum Havalimanı'ndan yarım saatlik bir araç yolculuğunun ardından, Torba bambaşka bir tempoyla karşılar. Kuzey yamaçtaki taş duvarlı villaların önünden geçen tek bir sahil yolu, koyun bütün ritmini şekillendirir. Mimari, beyaz badanalı modern hatlar ile eski Bodrum taş işçiliğinin uzlaştığı bir orta yolda durur; villaların büyük bölümü tek katlı, geniş bir teras üzerine yayılır. Bahçeler defne, biberiye ve eski zeytin ağaçlarıyla çevrilidir. Geceleri, koyun karşı yamacındaki köy ışıkları dışında neredeyse hiçbir ışık kalmaz.",
          },
          {
            heading: "Premium Misafir Profili",
            body: "Torba, ışıltıdan ziyade dinginlik arayan çiftlerin, küçük yaşlardaki çocuklarıyla yorulmadan tatil yapmak isteyen ailelerin ve emekliliği boyunca aynı koya yıllarca dönen uzun konaklayan misafirlerin sevdiği bir adrestir. Sığ ve sakin deniz, çocuklu aileler için belirleyici bir avantajdır. Kalabalık beach club kültürünün hâkim olduğu Türkbükü'ne 10, butik marina hareketliliğinin görüldüğü Yalıkavak'a 20 dakika mesafede olması; misafirin günü kendi temposunda kuracağı, akşamın hareketini istediğinde başka bir koya bırakabileceği bir denge sunar.",
          },
          {
            heading: "Bir Gün, Bir Akşam: Torba'da Aktiviteler",
            body: "Sabah, villanın havuzunda kısa bir yüzme. Ardından kahvaltı terasında, açık deniz manzarasıyla — meyve ve mevsim ekmeği yerel bir kahvaltıcıdan günlük olarak teslim alınabilir. Öğleden önce sahildeki çakıllı kıyıya bir yürüyüş. Öğleden sonra, marinadan kalkacak özel bir tekneyle Türkbükü ve Gündoğan koylarına uzanan yarım günlük bir gezi planlanabilir. Akşam yemeği için iki seçenek vardır: villada özel bir şef ya da koyun bir ucundaki taş duvarlı meyhanenin ızgara balığı. Geceleri terasta, eski yıldızları görmek için yeterince ışıksız bir karanlık.",
          },
          {
            heading: "Torba'da Villa Profili",
            body: "Bölgenin tipik villası 4-6 misafir kapasitesinde, özel havuzlu, 250-450 metrekare arasında ve denize cepheli bir teras barındırır. Sahile çoğunlukla araba veya kısa bir yürüyüş; en üst segmentteki villaların özel iskele kullanım hakkı vardır. Yüksek sezonda (Temmuz-Ağustos) fiyatlar 2500-4000 TL/gece bandında dolaşır; Mayıs-Haziran ve Eylül-Ekim aralığında 1500-2500 TL'ye iner. Konsiyerj ekibimiz, ihtiyaç duyduğunuz takdirde havalimanından villaya kadar transferi ve karşılama servisini birlikte planlar.",
          },
          {
            heading: "Torba'da Gastronomi",
            body: "Torba'nın sahili kalabalık değildir; bu yüzden restoran sayısı sınırlıdır ama nitelikleri yüksektir. Köyün doğu ucundaki balıkçı meyhanesi, taze çıkmış sezon balığını klasik Ege mezeleriyle servis eder. Sahil yolunun batı ucunda küçük bir Akdeniz mutfağı, ev yapımı makarna ve kıyıdan toplanan otlarla hazırlanan tabaklarla öne çıkar. Kahvaltı için koy boyunca iki adres mevcuttur; bal, kaymak ve menemen Bodrum'un en iyilerinden. Akşam yemeğini villada yapmayı tercih edenler için, özel şef hizmeti tek bir mesajla ayarlanır.",
          },
          {
            heading: "Yakın Bölgeler",
            body: "Torba'da kalan misafirlerin yarısı, hafta içinde en az bir akşamı Türkbükü'nün beach club hattında geçirmeyi planlar. Macakızı, Maçakızı veya bölgenin diğer ikonik adresleri 10 dakikalık bir araç mesafesindedir. Gündoğan'ın çakıllı sahili sakin bir öğle için 12 dakika; Yalıkavak Marinası butik şef restoranları için 20 dakika sürer. Bodrum merkezine 15 dakika; tarihi kale, eski pazar ve marina yürüme ile gezilebilir.",
          },
        ],
        en: [
          {
            heading: "The Atmosphere of Torba: A Quiet Arrival",
            body: "A thirty-minute drive from Milas-Bodrum Airport opens onto a different tempo. A single coast road, slipping past the stone-walled villas on the northern slope, carries the entire rhythm of the bay. The architecture sits between the whitewashed modernism of new Bodrum and the stone craftsmanship of the old; most villas are single-storey, set across a generous terrace. Gardens are framed by bay, rosemary and old olive trees. At night, almost no light remains except the village across the cove.",
          },
          {
            heading: "A Premium Guest Profile",
            body: "Torba is chosen by couples seeking quiet over spectacle, families with young children who want a stay without fatigue, and long-stay guests who return to the same cove year after year. The shallow, calm sea is a defining advantage for families. Ten minutes to Türkbükü's beach club row and twenty to Yalıkavak's boutique marina, Torba lets you set your own daily pace and borrow another cove's energy only when you want it.",
          },
          {
            heading: "A Day, an Evening: Activities in Torba",
            body: "A short swim in the villa's pool. Breakfast on the open-sea terrace, fruit and seasonal bread brought from a local baker each morning. A walk along the pebbled shore before noon. In the afternoon, a half-day private boat trip from the marina to the bays of Türkbükü and Gündoğan. Two options for dinner: a private chef at the villa, or grilled fish at the stone meyhane at the cove's edge. A sky dark enough for old stars from the terrace at night.",
          },
          {
            heading: "Torba's Villa Profile",
            body: "The typical villa here sleeps 4 to 6, has a private pool, sits between 250 and 450 square metres and opens to a sea-facing terrace. The beach is mostly a short drive or a brief walk; top-tier villas hold private-jetty access. High-season (July-August) rates orbit 2,500-4,000 TL per night; May-June and September-October ease to 1,500-2,500 TL. Our concierge arranges airport transfer and an in-villa welcome on request.",
          },
          {
            heading: "Gastronomy in Torba",
            body: "Torba's shore isn't crowded, so restaurants are few but well-judged. The fisherman's meyhane at the eastern edge serves seasonal catch with classic Aegean meze. A small Mediterranean kitchen at the western end stands out with home-made pasta and dishes built on herbs gathered from the slope. Two breakfast addresses along the bay; honey, kaymak and menemen among the best on the peninsula. Guests who prefer to dine in arrange a private chef through a single message.",
          },
          {
            heading: "Nearby",
            body: "Half of our Torba guests spend at least one evening at the beach club row in Türkbükü — Macakızı and the other iconic addresses are ten minutes by car. Gündoğan's pebbled shore is twelve minutes for a calm noon; Yalıkavak Marina, twenty for the boutique chef restaurants. Bodrum centre is fifteen minutes; the old castle, market and marina are walkable from there.",
          },
        ],
      },
      faq: {
        tr: [
          {
            q: "Torba çocuklu aileler için uygun mu?",
            a: "Evet. Torba'nın koyu sığ, dalga oluşumu az ve rüzgârdan korunaklıdır; küçük çocuklarla yüzmek için yarımadanın en güvenli koylarından biri sayılır.",
          },
          {
            q: "Torba'da hangi tip villalar var?",
            a: "Çoğunluğu 4-6 kişilik, özel havuzlu, tek katlı veya iki katlı, 250-450 m² arasında müstakil yapılar. Bir kısmının deniz iskelesi ya da iskeleye kısa yürüme mesafesi bulunur.",
          },
          {
            q: "Torba'da fiyatlar ne aralıkta?",
            a: "Premium butik villalar yüksek sezonda 2.500-4.000 TL/gece; düşük sezonda 1.500-2.500 TL/gece bandında yer alır. Lüks segment bunun üzerine çıkar.",
          },
          {
            q: "Torba'dan Bodrum merkezine nasıl gidilir?",
            a: "Araba ile yaklaşık 15 dakika. Yalıkavak'a 20, Türkbükü'ne 10, Gündoğan'a 12 dakika sürer.",
          },
          {
            q: "Torba'da gece eğlencesi var mı?",
            a: "Torba sakin bir koydur; gece hareketi villa terasında, koy boyunca birkaç şirin meyhanede ya da Türkbükü'nün beach club hattında 10 dakikalık araç mesafesinde yaşanır.",
          },
        ],
        en: [
          {
            q: "Is Torba suitable for families with young children?",
            a: "Yes. The bay is shallow, sheltered from wind and quiet — one of the safest coves on the peninsula for swimming with small children.",
          },
          {
            q: "What kind of villas are in Torba?",
            a: "Mostly detached 4-6 sleeper homes with private pools, single or two-storey, 250-450 m². A few hold private-jetty access or a short walk to a jetty.",
          },
          {
            q: "What is the price range in Torba?",
            a: "Boutique villas sit between 2,500-4,000 TL per night in high season and 1,500-2,500 TL in low season. Luxury runs above that.",
          },
          {
            q: "How do I reach Bodrum centre from Torba?",
            a: "About 15 minutes by car. Yalıkavak is 20, Türkbükü 10, Gündoğan 12.",
          },
          {
            q: "Is there nightlife in Torba?",
            a: "Torba is a quiet cove; evening life happens on the villa terrace, in a few small meyhanes along the bay, or at the beach club row in Türkbükü, ten minutes by car.",
          },
        ],
      },
    },
  },
  {
    slug: "turkbuku",
    urlSlug: "turkbuku-villa-kiralama",
    name: "Türkbükü",
    shortDescTr: "Bodrum'un Saint-Tropez'i — beach club kültürü ve lüks villa hattı.",
    shortDescEn: "Bodrum's Saint-Tropez — beach club culture and a luxury villa row.",
    longDescTr:
      "Türkbükü, Bodrum'da lüks villa kavramının somut bir adres üzerinden okunduğu tek koydur. Macakızı'nın doğmasıyla birlikte 90'ların sonunda şekillenen iskele kültürü, bugün koyun batı tarafından doğusuna kadar uzanan bir beach club hattıyla devam eder. Tatil mevsiminin orta yerinde marinanın bir ucuna iniş yapan helikopter ve özel iskeleye yanaşan motoryatlar gündelik bir görüntüdür. Villaların büyük bölümü yamaca dizilmiş, geniş havuzlu ve denizi doğrudan gören yapılardır; iç mekanları çoğunlukla bir mimar imzasıyla şekillenmiştir. Misafir profili dünya markalarının yöneticilerinden, İstanbul ve Avrupa'nın yaratıcı kesimine uzanır.",
    longDescEn:
      "Türkbükü is the one cove where Bodrum's idea of luxury reads on a concrete address. The pier culture that began with the birth of Macakızı in the late nineties now continues as a beach club row running from the west to the east of the bay. Helicopters touching down at the marina edge and motoryachts pulling up at private piers are an ordinary mid-season sight. Most villas are stacked along the hillside with generous pools and direct sea views; interiors usually carry an architect's signature. The guest profile spans global-brand executives and the creative classes of Istanbul and Europe.",
    heroImage:
      "https://images.unsplash.com/photo-1613553474179-e1eda3ea5734?auto=format&fit=crop&w=1600&q=80",
    highlights: {
      tr: [
        "Macakızı ve beach club hattı",
        "Yamaçta lüks, denize hakim villalar",
        "Şef restoranları ve butik mağaza dizini",
        "Yalıkavak ve Gündoğan'a kısa mesafe",
      ],
      en: [
        "Macakızı and the beach club row",
        "Hillside luxury villas with sea views",
        "Chef restaurants and a boutique shop row",
        "Short reach to Yalıkavak and Gündoğan",
      ],
    },
    nearby: ["golturkbuku", "gundogan", "yalikavak"],
    lat: 37.1131,
    lng: 27.3678,
    seo: {
      h1: {
        tr: "Türkbükü Villa Kiralama — Bodrum'un Saint-Tropez'i",
        en: "Türkbükü Villa Rental — Bodrum's Saint-Tropez",
      },
      priceRange: "2500-5000 TL / gece",
      sections: {
        tr: [
          {
            heading: "Türkbükü'nün Karakteri",
            body: "Bodrum'un en gösterişli adresi olduğu kadar, en olgun olanıdır. Sahil hattı boyunca uzanan ahşap iskeleler, koyu Akdeniz'in herhangi bir lüks adresinden ayırır; çoğu beach club kendi iskelesini, mutfağını ve müzik kürasyonunu kendisi yönetir. Yamaçta yer alan villaların büyük bölümü 1990 sonrasının yapılarıdır ve mimarlık ofisleriyle birlikte tasarlanmıştır. Beyaz ve gri kullanımı baskındır; bahçe planlaması zeytin, lavanta ve okaliptüs ile yapılır.",
          },
          {
            heading: "Premium Misafir Profili: Kim Geliyor?",
            body: "Türkbükü'ne gelen misafir, lüksü aramaya gelmez; lüksü bilen ve onunla rahatlık içinde yaşamaya geliyor olarak gelir. Aileler için ölçek genelde 8-12 kişiliktir; bal ayı çiftleri 2-4 kişilik küçük ama bütünüyle özel havuzlu villaları tercih eder. Kurumsal gruplar, yıl içinde 2-3 küçük etkinliği bu adresten yapar. Ortalama konaklama 6-10 gündür ve misafirler genellikle sezonun aynı haftasını her yıl rezerve eder.",
          },
          {
            heading: "Beach Club Hayatı",
            body: "Macakızı, Bianca, Maçakızı, Tagomago ve diğer adresler koyun boyunca yayılır. Sabah 10'da kahvaltı, 13'te öğle yemeği, 18'de gün batımı kokteyli ve gece yarısına kadar süren bir DJ seti — beach club günü çoğunlukla bu ritmi izler. Rezervasyon Temmuz ve Ağustos için iki ay öncesinden alınmalıdır; konsiyerj ekibimiz, son anda doluluk halinde bile çoğu zaman bir saat içinde uygun bir masa ayarlar.",
          },
          {
            heading: "Türkbükü'nde Villa Profili",
            body: "Tipik Türkbükü villası 4-6 yatak odalı, 8-12 misafir kapasiteli, geniş bir özel havuzlu ve denize cepheli bir terasla şekillenir. Mutfaklar mimarisi gereği büyük ve özel şefe uygun donanıma sahiptir. En üst segmentte özel iskele, helikopter pisti veya doğrudan beach club geçişi olan villalar yer alır. Yüksek sezon (Temmuz-Ağustos) fiyatları 3.500-5.000 TL/gece bandında; sezon dışında 2.500-3.500 TL/gece civarındadır. Lüks segment bu rakamların üstüne çıkar.",
          },
          {
            heading: "Gastronomi: Şef Mutfağından Meyhaneye",
            body: "Türkbükü'nde restoran seçimi kolay değildir, çünkü standart yüksektir. Beach club mutfaklarının yanı sıra, koyun arka sokaklarında küçük ama çok özel iki üç şef restoranı bulunur; menüler haftalık olarak tasarlanır ve günlük balıkla tamamlanır. Klasik Bodrum meyhanesini deneyimlemek için Macakızı'na karşı tarafta, ahşap iskele üzerinde yer alan iki adres yeterlidir; mezelerden taze balığa, gelenek burada hâlâ canlıdır.",
          },
          {
            heading: "Yakın Bölgeler ve Günübirlik Çıkışlar",
            body: "Göltürkbükü, koyun aynı şehir konumundaki tamamlayıcısıdır — 5 dakikalık bir yürüyüşle ulaşırsınız. Gündoğan 12 dakika; Yalıkavak Marina 15 dakika sürer. Knidos veya Datça yarımadası bir günlük tekne mesafesidir; konsiyerj ekibimiz, villa misafirleri için özel motoryatla yapılan günübirlik geziyi rotaya kadar düzenler. Akşam yemeği için sezonun olgun zamanında Yalıkavak Marina'daki bir şef restoranına rezervasyon almak akıllıca bir seçenektir.",
          },
        ],
        en: [
          {
            heading: "The Character of Türkbükü",
            body: "Bodrum's most theatrical address, and also its most mature. The wooden piers along the shoreline give the bay an identity that separates it from any other Mediterranean luxury address; each beach club runs its own pier, kitchen and music curation. Most hillside villas are built post-1990 and shaped by architectural studios. The palette leans on whites and greys; gardens use olive, lavender and eucalyptus.",
          },
          {
            heading: "A Premium Guest Profile: Who Comes Here",
            body: "Guests in Türkbükü do not arrive in search of luxury; they arrive familiar with it. Family groups tend to run 8-12 strong; honeymoon couples take the smaller, entirely-private 2-4 sleeper villas. Corporate groups host two or three small events from this address each year. Average stays are 6-10 days, often the same week, year after year.",
          },
          {
            heading: "Beach Club Life",
            body: "Macakızı, Bianca, Maçakızı, Tagomago and others spread along the bay. Breakfast at 10, lunch at 13, sunset cocktails at 18 and a DJ set deep into the night — a typical beach club day follows that rhythm. Reservations for July and August should sit two months ahead; our concierge usually opens a table within an hour even when houses are full.",
          },
          {
            heading: "The Villa Profile in Türkbükü",
            body: "A typical Türkbükü villa is 4-6 bedrooms, sleeps 8-12, holds a generous private pool and a sea-facing terrace. Kitchens are built large by design, ready for a private chef. The top tier carries private piers, helipads or a direct walk to a beach club. High-season rates (July-August) run 3,500-5,000 TL per night; shoulder seasons 2,500-3,500 TL. Luxury runs above that.",
          },
          {
            heading: "Gastronomy: From Chef Kitchens to the Meyhane",
            body: "Choosing where to eat in Türkbükü isn't easy, because the standard is high. Alongside the beach club kitchens, two or three small chef restaurants sit in the back lanes, with menus designed weekly and finished with the day's catch. For the classic Bodrum meyhane, two addresses on the wooden piers across from Macakızı are enough — meze to fresh fish, the tradition is still alive.",
          },
          {
            heading: "Nearby and Day Trips",
            body: "Göltürkbükü is the bay's natural other half — five minutes on foot. Gündoğan is twelve minutes; Yalıkavak Marina, fifteen. Knidos or the Datça peninsula sits within a day's sail; our concierge plans private motoryacht day trips for villa guests, route included. For evenings in peak season, a chef restaurant in Yalıkavak Marina is a smart reservation to hold.",
          },
        ],
      },
      faq: {
        tr: [
          {
            q: "Türkbükü'nde villa fiyatları nedir?",
            a: "Yüksek sezonda (Temmuz-Ağustos) 3.500-5.000 TL/gece bandı standarttır; lüks segment bunun üzerine çıkar. Sezon başı/sonu fiyatları 2.500-3.500 TL/gece civarında seyreder.",
          },
          {
            q: "Macakızı'na yakın villa kiralanır mı?",
            a: "Evet. Yamaca dizilmiş villaların önemli bir bölümü beach club hattına yürüme mesafesindedir. Konsiyerj ekibi, beach club rezervasyonlarını talep üzerine ayarlar.",
          },
          {
            q: "Türkbükü çocuklu aileler için uygun mu?",
            a: "Sığ ve sakin deniz aileleri rahatlatır; ancak Türkbükü, yetişkin odaklı bir gece kültürüne sahiptir. Çocuklu aileler için Gündoğan ya da Göltürkbükü daha sakin alternatiflerdir.",
          },
          {
            q: "Helikopter / yat ile geliş mümkün mü?",
            a: "Evet. Türkbükü'nde özel helipad sahibi villalar bulunur; konuk yatlar için koy boyunca birden fazla iskele kullanımdadır. Detaylar villaya göre değişir.",
          },
          {
            q: "Hangi şef restoranlarını öneriyorsunuz?",
            a: "Sezonun açıldığı haftaya göre kürasyon değişir; konsiyerj ekibimiz, konaklama tarihinize uygun 2-3 öneriyi mesajla iletir.",
          },
        ],
        en: [
          {
            q: "What are villa prices in Türkbükü?",
            a: "High season (July-August) standard is 3,500-5,000 TL per night; luxury runs above. Shoulder seasons run 2,500-3,500 TL.",
          },
          {
            q: "Can I rent a villa near Macakızı?",
            a: "Yes. A meaningful share of the hillside villas sit within walking distance of the beach club row. Our concierge handles club reservations on request.",
          },
          {
            q: "Is Türkbükü suitable for families with young children?",
            a: "The shallow, calm sea is comfortable, but Türkbükü's evening culture is adult-led. Families looking for quiet prefer Gündoğan or Göltürkbükü.",
          },
          {
            q: "Can I arrive by helicopter or yacht?",
            a: "Yes. Several villas in Türkbükü hold private helipads, and a number of piers along the bay host guest yachts. Details vary by villa.",
          },
          {
            q: "Which chef restaurants do you recommend?",
            a: "Curation changes by the season's opening week; our concierge sends two or three recommendations matched to your stay dates.",
          },
        ],
      },
    },
  },
  {
    slug: "gumusluk",
    urlSlug: "gumusluk-villa-kiralama",
    name: "Gümüşlük",
    shortDescTr: "Eski balıkçı köyü, sanatçılarla zenginleşmiş sakin batı sahili.",
    shortDescEn: "An old fishing village and a calm western shore enriched by artists.",
    longDescTr:
      "Gümüşlük, yarımadanın en batı ucunda, antik Mindos şehrinin üzerine kurulmuş eski bir balıkçı köyüdür. Sahildeki taş döşeli yol boyunca uzanan balıkçı restoranları, batık ada manzarası ve akustik gitarın hâlâ etkili olduğu gece müziği, koyun karakterini kuran üç sabit unsurdur. Mimari sade, beyaz ve alçaktır; yapılaşma kısıtlaması nedeniyle yeni villaların büyük bölümü köyün arka yamaçlarında, eski Karakaya köyüne uzanan yolda yer alır. Sahile cepheli villalar sınırlıdır ve nadir bulunur. Sanatçı stüdyoları, küçük bir klasik müzik festivali ve geleneksel zanaatkârlar köyün kimliğini tamamlar.",
    longDescEn:
      "Gümüşlük sits at the western tip of the peninsula, atop the ancient city of Myndos. The fishermen's restaurants along the stone-paved shore, the view of the submerged island and a still-audible acoustic-guitar evening culture form the three constants of the bay. The architecture is low, white and modest; building restrictions push most new villas onto the back slopes, on the road to old Karakaya. Seafront villas are limited and rare. Artist studios, a small classical music festival and a community of traditional artisans complete the village's identity.",
    heroImage:
      "https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=1600&q=80",
    highlights: {
      tr: [
        "Sahilde taş döşeli balık restoranları",
        "Batık ada manzarası ve gün batımı",
        "Arka yamaçlarda butik villalar",
        "Klasik müzik festivali ve sanat sahnesi",
      ],
      en: [
        "Stone-paved fish restaurants on the shore",
        "Sunset view of the submerged ancient island",
        "Boutique villas on the back slopes",
        "Classical music festival and an art scene",
      ],
    },
    nearby: ["yalikavak", "turgutreis"],
    lat: 37.0586,
    lng: 27.2342,
    seo: {
      h1: {
        tr: "Gümüşlük Villa Kiralama — Sakin Sanat Köyü",
        en: "Gümüşlük Villa Rental — A Quiet Village of Art",
      },
      priceRange: "1800-3500 TL / gece",
      sections: {
        tr: [
          {
            heading: "Gümüşlük'ün Atmosferi",
            body: "Gümüşlük'te zaman, koyun batık adasından batan güneşle ölçülür. Sahil hattı boyunca uzanan taş döşeli yolun her iki tarafında, neredeyse bütünüyle deniz ürünleri sunan balıkçı restoranları sıralanır. Mimari, sahildeki köy dokusunu korumak için tek katlıdır; arka yamaçlarda yer alan butik villalar, beyaz badana ve doğal taş kombinasyonuyla geleneksel Bodrum mimarisini sürdürür. Gece, koyda kalan tek hareket dalgaların ve birkaç restoranın akustik müzisyenlerinden gelir.",
          },
          {
            heading: "Sakinlik Arayan Misafire",
            body: "Gümüşlük; sanat, edebiyat, slow travel ve uzun konaklama arayan misafirlerin tercihidir. Bal ayı çiftleri için sezon dışı tatil — Mayıs ve Eylül — özellikle kıymetlidir, çünkü köyün geleneksel ritmi en saf haliyle bu aylarda yaşanır. Çocuklu aileler de buradaki sakinliği seçer; çocuk yüzme havuzlu villalar ve eski Karakaya köyüne uzanan yürüyüş güzergâhları ailenin günlük programını tamamlar. Sosyal medya odaklı, gösterişe açık misafir grubu için Türkbükü ya da Yalıkavak daha doğru bir adres olur.",
          },
          {
            heading: "Aktiviteler: Batık Ada, Sanat ve Yat",
            body: "Köyün önündeki Tavşan Adası'na (batık ada) suların alçaldığı dönemlerde yürüyerek geçilir; deniz seviyesinin altında kalan antik Mindos limanının taşları yüzerken görülebilir. Klasik müzik festivali Temmuz-Ağustos aralığında, eski taş ocağında düzenlenir; konsiyerj ekibimiz biletleri talep üzerine ayarlar. Yat kiralama, küçük bir Mavi Tur veya Knidos hattına geçiş için ideal bir başlangıç noktasıdır.",
          },
          {
            heading: "Villa Profili",
            body: "Gümüşlük villaları genellikle 4-5 yatak odalı, özel havuzlu ve 180-350 metrekare civarında, arka yamaca yerleşmiş yapılardır. Bir kısmı eski Karakaya yoluna uzanan yamaçta, manzara terası ile birlikte gelir. Sahil cephesi nadirdir ve fiyat segmentini yukarı çeker. Yüksek sezonda 2.500-3.500 TL/gece; sezon dışında 1.800-2.500 TL/gece bandı geçerlidir. Mahremiyet, Gümüşlük villa seçiminde her zaman ilk üç kriter arasındadır.",
          },
          {
            heading: "Gastronomi: Sahilde Balık, Yamacında Akdeniz",
            body: "Sahil restoranlarının neredeyse tamamı taze balık merkezlidir; ahtapot, levrek, çipura ve mevsim balıkları öne çıkar. Klasik mezeler — semizotu, deniz börülcesi, Bodrum mandalinasıyla yapılan tarama — her menüde bulunur. Eski Karakaya köyünde, yamacın iç tarafında yer alan iki Akdeniz mutfağı restoranı, sezon sebzeleri ve yerel zeytinyağı kullanan menüleriyle dikkat çeker. Akşam yemeği için sahildeki bir balıkçıyı seçen misafire, konsiyerj ekibimiz akustik müzik açılışı olan adresleri önerir.",
          },
          {
            heading: "Yakın Bölgeler",
            body: "Yalıkavak Marina ve gece kültürü 20 dakikalık bir araç mesafesindedir; uzun bir Gümüşlük gününün ardından gün batımı kokteyli için ideal bir geçiş. Turgutreis 15 dakika; cumartesi pazarını ve Kos feribotunu kullanmak isteyenler için uygun bir mesafe. Bodrum merkezine yaklaşık 35 dakika.",
          },
        ],
        en: [
          {
            heading: "The Atmosphere of Gümüşlük",
            body: "In Gümüşlük, time is measured by the sun setting behind the submerged island. The stone-paved shore is lined on both sides by restaurants that serve almost only fish. The architecture is single-storey by design — the back-slope boutique villas continue the tradition in whitewash and natural stone. At night, the only motion is the waves and the acoustic musicians at a few restaurants.",
          },
          {
            heading: "For Guests Who Seek Quiet",
            body: "Gümüşlük is the address for art, literature, slow travel and longer stays. Honeymoon couples value the shoulder seasons — May and September — most, when the village's old rhythm is at its purest. Families also lean here for quiet: villas with a children's pool and walking routes to old Karakaya complete the daily plan. Guests led by social media or spectacle find Türkbükü or Yalıkavak a closer fit.",
          },
          {
            heading: "Activities: The Submerged Island, Art and the Sea",
            body: "At low tide, you can walk to Tavşan Adası (Rabbit Island) just off the shore; the stones of ancient Myndos harbour are visible below the waterline as you swim. The classical music festival runs in July-August at the old stone quarry; our concierge arranges tickets on request. The bay is also an ideal jumping-off point for a Blue Cruise or a Knidos-route private charter.",
          },
          {
            heading: "Villa Profile",
            body: "Villas in Gümüşlük are typically 4-5 bedrooms, with private pools, around 180-350 m², and set on the back slopes. Some climb the slope toward old Karakaya with a view terrace included. Seafront properties are rare and pull the price segment upwards. High season runs 2,500-3,500 TL per night; shoulder seasons 1,800-2,500 TL. Privacy is always among the first three criteria for a Gümüşlük villa choice.",
          },
          {
            heading: "Gastronomy: Fish on the Shore, the Mediterranean on the Slope",
            body: "Nearly all shoreline restaurants centre on fish — octopus, sea bass, sea bream and the seasonal catch. Classic mezes — purslane, samphire and tarama with Bodrum tangerine — sit on every menu. In old Karakaya, two Mediterranean kitchens up the slope work seasonal vegetables and local olive oil. For an evening at a shoreline fish house, our concierge suggests the addresses that open with acoustic music.",
          },
          {
            heading: "Nearby",
            body: "Yalıkavak Marina and its evening culture sits twenty minutes by car — a fine transition for a sunset cocktail after a long Gümüşlük day. Turgutreis is fifteen, for the Saturday market or the Kos ferry. Bodrum centre, about thirty-five minutes.",
          },
        ],
      },
      faq: {
        tr: [
          {
            q: "Gümüşlük villalarının önünde havuz var mı?",
            a: "Evet, butik villaların büyük çoğunluğu özel havuzludur. Sahile cepheli, ortak deniz erişimli birkaç villa da mevcuttur.",
          },
          {
            q: "Gün batımı için en iyi nokta?",
            a: "Batık Tavşan Adası karşısındaki sahil restoranlarının iskelelerinden ya da arka yamaçtaki villaların batı terasından izlenir; konsiyerj ekibimiz tarih ve saatleri detaylandırır.",
          },
          {
            q: "Klasik müzik festivali tarihleri?",
            a: "Festival genellikle Temmuz ortasından Ağustos başına dek sürer; yıllık takvim Mayıs ayında açıklanır. Bilet rezervasyonu konsiyerj ekibimiz tarafından yapılır.",
          },
          {
            q: "Gümüşlük villa fiyatları?",
            a: "Yüksek sezonda 2.500-3.500 TL/gece; sezon dışında 1.800-2.500 TL/gece bandı geçerlidir. Sahile cepheli az sayıdaki villa üst segmentte yer alır.",
          },
          {
            q: "Çocuklu aile için uygun mu?",
            a: "Evet. Köyün koy yapısı sakin, deniz sığ ve yürüyüş mesafeleri ailelere uygun. Çocuk havuzlu villalar talep üzerine seçilir.",
          },
        ],
        en: [
          {
            q: "Do Gümüşlük villas have a pool?",
            a: "Yes — the majority of boutique villas carry a private pool. A few seafront homes with shared sea access also exist.",
          },
          {
            q: "Where do you best watch the sunset?",
            a: "From the piers of the shoreline restaurants across from Rabbit Island, or from the west terrace of a back-slope villa; our concierge sets the timing.",
          },
          {
            q: "When is the classical music festival?",
            a: "Generally from mid-July to early August; the annual programme is announced in May. Our concierge handles ticket reservations.",
          },
          {
            q: "What is the villa price range?",
            a: "High season 2,500-3,500 TL per night; shoulder seasons 1,800-2,500 TL. The few seafront villas sit at the upper end.",
          },
          {
            q: "Is Gümüşlük right for families with young children?",
            a: "Yes. The cove is calm, the sea is shallow and walking distances suit families. Villas with a children's pool are matched on request.",
          },
        ],
      },
    },
  },
  {
    slug: "golturkbuku",
    urlSlug: "golturkbuku-villa-kiralama",
    name: "Göltürkbükü",
    shortDescTr: "Türkbükü'nün sakin tamamlayıcısı — butik sahil ve beach club kültürü.",
    shortDescEn: "Türkbükü's calm counterpart — a boutique shore with beach club culture.",
    longDescTr:
      "Göltürkbükü, Türkbükü ile Gölköy'ün idari birleşmesinden doğan ve bugün Bodrum'un belki de en olgun butik tatil hattına ev sahipliği yapan koydur. Türkbükü tarafının uzantısı sayılan beach club hattı, Göltürkbükü'nde daha sakin bir yoğunlukla devam eder. Mimari Türkbükü ile benzerdir ama doku biraz daha minimaldir — beyaz, kumtaşı ve eski zeytin ağacı estetiği baskındır. Sahile cepheli butik oteller, küçük şef restoranları ve özel iskeleli villalar bölgenin omurgasını kurar.",
    longDescEn:
      "Göltürkbükü is the bay born from the merger of Türkbükü and Gölköy, and possibly Bodrum's most mature boutique-holiday corridor today. The beach club row that begins on the Türkbükü side carries on here at a quieter intensity. The architecture follows the same vocabulary but reads slightly more minimal — whites, sandstone and old olive trees set the palette. Seafront boutique hotels, small chef restaurants and villas with private jetties build the spine of the area.",
    heroImage:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=80",
    highlights: {
      tr: [
        "Sahile cepheli butik villalar ve iskeleler",
        "Sakinleşmiş beach club kültürü",
        "Şef restoranları ve sanat galerileri",
        "Türkbükü ve Gündoğan'a yürüme mesafesi",
      ],
      en: [
        "Seafront boutique villas with private jetties",
        "A calmer beach club culture",
        "Chef restaurants and art galleries",
        "Walking reach to Türkbükü and Gündoğan",
      ],
    },
    nearby: ["turkbuku", "gundogan", "torba"],
    lat: 37.121,
    lng: 27.3835,
    seo: {
      h1: {
        tr: "Göltürkbükü Villa Kiralama — Butik Sahil ve Beach Club Kültürü",
        en: "Göltürkbükü Villa Rental — Boutique Shore and Beach Club Culture",
      },
      priceRange: "2200-4500 TL / gece",
      sections: {
        tr: [
          {
            heading: "Göltürkbükü'nün Olgun Sakinliği",
            body: "Göltürkbükü, Türkbükü'nün tüm donanımına sahip ama bir tık daha sakin bir akışla yaşanan koyudur. Sahil hattı, yıllar içinde olgunlaşmış birkaç butik otel, sanat galerisi ve iskeleli restoranla şekillenir. Villalar genelde sahile yakın, geniş bahçeli ve özel havuzlu yapılardır. Sezonun en yoğun gecesinde bile koyun sağ ya da sol ucunda dingin bir akşam yemeği bulmak mümkündür. Bu, Göltürkbükü'nü hem ilk kez Bodrum'a gelen butik misafir için hem de yıllardır aynı koya dönen ustalaşmış misafir için ideal kılar.",
          },
          {
            heading: "Misafir Profili: Yetişkin Lükse Olgun Bir Yaklaşım",
            body: "Yetişkin odaklı, sessiz ama kaliteli bir gece arayanlar için Göltürkbükü, Türkbükü'nün doğal alternatifidir. Bal ayı çiftleri, küçük gruplar (4-6 kişi) ve ikinci konaklamasını yapan misafirler bu adrese sıklıkla döner. Çocuklu ailelerin tercih sıralamasında ise sığ deniz ve özel iskele kullanımı sayesinde üst sıralarda yer alır.",
          },
          {
            heading: "Aktiviteler: İskeleden Yat Charter'a",
            body: "Villaların önemli bir bölümünde özel iskele kullanımı mümkündür; sabah erken bir kahvenin ardından koyda yapılan kısa bir yüzme, sezonun en sevilen başlangıcıdır. Beach club rezervasyonları (Macakızı dahil) yürüme mesafesindedir. Yat charter için Yalıkavak Marina 15 dakika; özel motoryatla bir gün Knidos veya Sedir Adası rotası, konsiyerj ekibimizin sıklıkla planladığı bir çıkıştır.",
          },
          {
            heading: "Villa Profili",
            body: "Tipik Göltürkbükü villası 4-6 yatak odalı, 8-12 misafir kapasiteli, sahile yakın ya da sahile cepheli, geniş havuzlu yapılardır. Mutfaklar özel şef için hazır donanımdadır. En üst segment, özel iskele kullanımıyla beraber yat yanaşmasına izin verir. Yüksek sezonda 3.000-4.500 TL/gece; sezon dışında 2.200-3.000 TL/gece bandı geçerlidir.",
          },
          {
            heading: "Gastronomi",
            body: "Sahildeki şef restoranları haftalık menü kürasyonuyla çalışır; günlük balık, sezon sebzeleri ve yerel zeytinyağı tabakların ortak tabanını kurar. Klasik meyhane geleneği koyun arka sokaklarında, ev yemeği özelliğini koruyan iki üç adreste devam eder. Akşam yemeğini villada yapmayı tercih edenler için, konsiyerj ekibimiz şef ve ikram hizmetini bir mesajla planlar.",
          },
          {
            heading: "Yakın Bölgeler",
            body: "Türkbükü 5 dakikalık bir yürüyüşle, Gündoğan 10 dakikalık bir araç mesafesinde. Yalıkavak Marina 15 dakika; çoğu gece için kolay bir kaçış. Torba 12 dakika; Bodrum merkezine yaklaşık 20 dakika sürer.",
          },
        ],
        en: [
          {
            heading: "Göltürkbükü's Calm Maturity",
            body: "Göltürkbükü holds the same equipment as Türkbükü but lives at a slightly slower flow. The shoreline is shaped by a handful of mature boutique hotels, art galleries and pier restaurants. Villas are mostly close to or on the shore, with large gardens and private pools. Even on the busiest night of the season, you can find a quiet dinner at either end of the bay. That makes Göltürkbükü ideal both for first-time boutique guests and for the seasoned visitors who return year after year.",
          },
          {
            heading: "Guest Profile: A Mature Approach to Adult Luxury",
            body: "For guests led by an adult, quiet but high-quality evening, Göltürkbükü is Türkbükü's natural alternative. Honeymooners, small groups (4-6) and second-stay guests return to this address often. Families also rank it high thanks to the shallow sea and the option of private-jetty access.",
          },
          {
            heading: "Activities: From the Jetty to Yacht Charters",
            body: "A meaningful share of the villas come with private jetty access; an early swim after coffee is among the season's best openings. Beach club reservations (including Macakızı) are within walking reach. For yacht charters, Yalıkavak Marina is fifteen minutes; a day trip on a private motoryacht to Knidos or Sedir Island is a frequent concierge plan.",
          },
          {
            heading: "Villa Profile",
            body: "A typical Göltürkbükü villa is 4-6 bedrooms, sleeps 8-12, sits close to or on the shore, and holds a generous pool. Kitchens are equipped for a private chef. The top tier carries jetty access with yacht moorage. High season 3,000-4,500 TL per night; shoulder seasons 2,200-3,000 TL.",
          },
          {
            heading: "Gastronomy",
            body: "Shoreline chef restaurants work weekly menus; daily fish, seasonal vegetables and local olive oil form the common base. The classic meyhane tradition continues in two or three home-cooking addresses in the back lanes. For dinners in the villa, our concierge arranges chef and catering in a single message.",
          },
          {
            heading: "Nearby",
            body: "Türkbükü, a five-minute walk. Gündoğan, ten minutes by car. Yalıkavak Marina, fifteen — an easy escape for many evenings. Torba twelve, and Bodrum centre around twenty.",
          },
        ],
      },
      faq: {
        tr: [
          {
            q: "Göltürkbükü ile Türkbükü arasındaki fark nedir?",
            a: "Göltürkbükü, Türkbükü'nün biraz daha sakin ve butik tarafıdır. Aynı beach club kültürü daha düşük yoğunlukta yaşanır; villalar daha yaygın olarak sahile cepheli ve özel iskeleli yapıdadır.",
          },
          {
            q: "Yat yanaşma imkânı var mı?",
            a: "Evet. Üst segment villaların önemli bir kısmı özel iskele kullanımına sahiptir. Detaylar villaya göre değişir.",
          },
          {
            q: "Villa fiyat aralığı?",
            a: "Yüksek sezon 3.000-4.500 TL/gece; sezon dışında 2.200-3.000 TL/gece bandı geçerlidir.",
          },
          {
            q: "Çocuklu aile için uygun mu?",
            a: "Evet. Sığ ve sakin sahil, özel iskeleler aile konaklamasını rahatlatır. Konsiyerj ekibimiz çocuk havuzlu villaları filtreler.",
          },
          {
            q: "Macakızı'na ne kadar mesafe?",
            a: "Yürüyerek 8-15 dakika; villanın koy üzerindeki konumuna göre değişir. Beach club rezervasyonları konsiyerj ekibimiz tarafından yapılır.",
          },
        ],
        en: [
          {
            q: "What's the difference between Göltürkbükü and Türkbükü?",
            a: "Göltürkbükü is the slightly calmer, more boutique side. The same beach club culture lives at a lower intensity; more villas are seafront with private jetties.",
          },
          {
            q: "Is there yacht moorage?",
            a: "Yes. A meaningful share of upper-tier villas hold private jetty access. Details vary per villa.",
          },
          {
            q: "What is the villa price range?",
            a: "High season 3,000-4,500 TL per night; shoulder seasons 2,200-3,000 TL.",
          },
          {
            q: "Is Göltürkbükü suitable for families with young children?",
            a: "Yes. The shallow, calm shore and private jetties ease a family stay. Our concierge filters villas with a children's pool.",
          },
          {
            q: "How far is Macakızı?",
            a: "An 8-15 minute walk, depending on the villa's spot on the bay. Beach club reservations are handled by our concierge.",
          },
        ],
      },
    },
  },
];

export function getDistrict(slug: string): District | undefined {
  return districts.find((d) => d.slug === slug || d.urlSlug === slug);
}
