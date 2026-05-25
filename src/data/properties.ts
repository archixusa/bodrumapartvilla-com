import type { DistrictSlug } from "./districts";

export type PropertyType = "apart" | "villa";

export type FeatureKey =
  | "pool"
  | "privatePool"
  | "wifi"
  | "ac"
  | "seaView"
  | "parking"
  | "kitchen"
  | "balcony"
  | "washer"
  | "dishwasher"
  | "smartTv"
  | "garden"
  | "bbq"
  | "elevator"
  | "petFriendly"
  | "babyCrib"
  | "workspace"
  | "detached"
  | "jacuzzi"
  | "fireplace"
  | "outdoorShower";

export const featureLabel: Record<FeatureKey, { tr: string; en: string }> = {
  pool: { tr: "Ortak havuz", en: "Shared pool" },
  privatePool: { tr: "Özel havuz", en: "Private pool" },
  wifi: { tr: "Wi-Fi", en: "Wi-Fi" },
  ac: { tr: "Klima", en: "Air conditioning" },
  seaView: { tr: "Deniz manzarası", en: "Sea view" },
  parking: { tr: "Otopark", en: "Parking" },
  kitchen: { tr: "Tam donanımlı mutfak", en: "Full kitchen" },
  balcony: { tr: "Balkon / teras", en: "Balcony / terrace" },
  washer: { tr: "Çamaşır makinesi", en: "Washing machine" },
  dishwasher: { tr: "Bulaşık makinesi", en: "Dishwasher" },
  smartTv: { tr: "Smart TV", en: "Smart TV" },
  garden: { tr: "Özel bahçe", en: "Private garden" },
  bbq: { tr: "Mangal", en: "BBQ" },
  elevator: { tr: "Asansör", en: "Elevator" },
  petFriendly: { tr: "Evcil hayvan dostu", en: "Pet-friendly" },
  babyCrib: { tr: "Bebek beşiği", en: "Baby crib" },
  workspace: { tr: "Çalışma alanı", en: "Workspace" },
  detached: { tr: "Müstakil", en: "Detached" },
  jacuzzi: { tr: "Jakuzi", en: "Jacuzzi" },
  fireplace: { tr: "Şömine", en: "Fireplace" },
  outdoorShower: { tr: "Açık duş", en: "Outdoor shower" },
};

export interface Property {
  id: string;
  slug: string;
  type: PropertyType;
  titleTr: string;
  titleEn: string;
  district: DistrictSlug;
  capacity: number;
  bedrooms: number;
  bathrooms: number;
  area_m2: number;
  features: FeatureKey[];
  highSeasonPrice: number;
  lowSeasonPrice: number;
  descriptionTr: string;
  descriptionEn: string;
  images: string[];
  rating: number;
  reviewCount: number;
  bookingFallbackUrl: string;
  featured?: boolean;
  tags?: string[];
  hasPrivatePool?: boolean;
  hasGarden?: boolean;
  isDetached?: boolean;
}

const img = (photoId: string) =>
  `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=1600&q=80`;

export const properties: Property[] = [
  // ---------- APARTS (8) ----------
  {
    id: "ap-001",
    slug: "gumbet-deniz-manzarali-1-1-sezon-havuzlu",
    type: "apart",
    titleTr: "Gümbet Deniz Manzaralı 1+1 Site İçi Havuzlu Apart",
    titleEn: "Gümbet 1+1 Sea-View Apartment with Pool",
    district: "gumbet",
    capacity: 3,
    bedrooms: 1,
    bathrooms: 1,
    area_m2: 58,
    features: ["pool", "wifi", "ac", "seaView", "balcony", "kitchen", "washer", "smartTv", "elevator", "parking"],
    highSeasonPrice: 3200,
    lowSeasonPrice: 1600,
    descriptionTr:
      "Gümbet koyuna bakan yamaçta, yürüyerek 4 dakika sahile inebileceğiniz site içi havuzlu bir 1+1 apartımız. Açık plan oturma-yemek-mutfak alanı 58 m² brüt alanda fazlasıyla ferah hissettirir; geniş balkondan koyun bütün hattı görünür, akşamları gün batımı otururken yumuşar. Yatak odasında ortopedik çift kişilik yatak, oturma odasında üçüncü misafir için açılabilir kanepe vardır. Mutfakta indüksiyon ocak, fırın, bulaşık makinesi, çamaşır makinesi ve kahve değirmenli espresso makinesi bulunur — kahvaltıyı evde yapmak için her şey hazırdır. Klima hem oturma odasında hem yatak odasında ayrı çalışır; fiber internet ortalama 220 Mbps verir. Site içinde 24 saat güvenlik, kapalı otopark, yetişkin ve çocuk havuzu, küçük bir fitness odası ve şezlong-şemsiyeli ortak bahçe yer alır. Konum açısından son derece pratik: sahile 4 dakika, Bardakçı koyuna araba ile 6 dakika, Bodrum kalesine ve marinaya taksiyle 8 dakika sürer; geceleri Adnan Menderes Caddesi'nde alışveriş, kafe ve restoranlar gece yarısına kadar açıktır. Apartı her giriş öncesi kendi ekibimiz teslim eder; çarşaflar yıkanmış, klimalar test edilmiş, banyo tamamen sterilize edilmiş halde sizi bekler. Vardığınızda anahtarı kapıda alır, çıkışta yatak odasındaki sehpaya bırakırsınız.",
    descriptionEn:
      "On the hillside facing Gümbet bay, a 1-bedroom apartment in a pool complex, with a 4-minute walk to the beach. The open-plan living-dining-kitchen lives generously in its 58 m² footprint; the wide balcony frames the full sweep of the cove and softens at sunset. The bedroom carries an orthopaedic double bed; the living room adds a sofa bed for a third guest. The kitchen runs on an induction hob with oven, dishwasher, washing machine and a grinder-equipped espresso machine — everything for breakfast at home. Air conditioning runs separately in the living room and bedroom; fibre internet averages 220 Mbps. The complex carries 24-hour security, covered parking, adult and children's pools, a compact gym and a shared garden with sunbeds. The location is highly practical: 4 minutes to the beach, 6 by car to Bardakçı Cove, 8 in a taxi to the castle and marina; Adnan Menderes Avenue runs late with shops, cafés and restaurants. We hand over the apartment in person before every arrival — linen washed, AC tested, bathroom fully sanitised. Pick up the key at the door; on the way out, leave it on the bedside table.",
    images: [img("1522708323590-d24dbb6b0267"), img("1502672260266-1c1ef2d93688"), img("1505693416388-ac5ce068fe85"), img("1493809842364-78817add7ffb"), img("1551776235-dde6d482980b")],
    rating: 4.8,
    reviewCount: 41,
    bookingFallbackUrl: "https://www.booking.com/searchresults.html?ss=Gumbet",
    featured: true,
    tags: ["Deniz manzarası", "Havuzlu site"],
  },
  {
    id: "ap-002",
    slug: "gumbet-2-1-aile-apart-sahile-yakin",
    type: "apart",
    titleTr: "Gümbet 2+1 Aile Apartı, Sahile 300m",
    titleEn: "Gümbet 2+1 Family Apartment, 300m to Beach",
    district: "gumbet",
    capacity: 5,
    bedrooms: 2,
    bathrooms: 1,
    area_m2: 85,
    features: ["pool", "wifi", "ac", "balcony", "kitchen", "washer", "dishwasher", "smartTv", "elevator", "parking", "babyCrib"],
    highSeasonPrice: 4400,
    lowSeasonPrice: 2200,
    descriptionTr:
      "Bardakçı yolu üzerinde, sahil hattının sakin tarafında konumlanan bu 2+1 aile apartı, üç ile beş arası misafir için tasarlanmış pratik bir tatil bazıdır. 85 m² kullanım alanı, iki ayrı yatak odası ve geniş bir salon-mutfak kombinasyonu sunar. Ebeveyn yatak odasında çift kişilik ortopedik yatak ve gardırop; çocuk odasında çift tek yatak (zorunluysa birleştirilebilir) ve yastıkları soft bir takım vardır. Talep üzerine bebek beşiği önceden yerleştirilir. Mutfakta indüksiyon ocak, fırın, mikro dalga, bulaşık makinesi, çamaşır makinesi ve geniş bir buzdolabı bulunur. Geniş balkonda kahvaltı için altı kişilik bir masa, akşam kahvesi için ayrı bir oturma köşesi var. Klima oturma alanında ve her iki yatak odasında müstakil olarak çalışır; Wi-Fi tüm metrekareye yetecek mesh sistem üzerindedir. Site içinde ortak havuz, çocuk havuzu, kapalı otopark ve güvenlik mevcuttur. Sahile yürüyüşle 4-5 dakika sürer; Bardakçı yönü genelde Gümbet sahilinin doğusuna göre sakindir, gece geç saatte de uyku için uygundur. Çocuklu ailelerin tercih ettiği bu apartmana her giriş öncesi tüm tekstil yenilenir, mutfak ekipmanları tek tek kontrol edilir. Sezon boyunca otele alternatif bütçeli kalış arayan dört-beş kişilik aileler için en doğru seçenek.",
    descriptionEn:
      "On the Bardakçı road, on the quieter side of the shoreline, this 2-bedroom family apartment is built as a practical base for three to five guests. 85 m² of usable space holds two separate bedrooms and a generous living-kitchen combination. The master carries an orthopaedic double; the second bedroom has two singles (joinable on request) with soft pillows. A baby crib is placed on request before arrival. The kitchen runs an induction hob, oven, microwave, dishwasher, washing machine and a tall fridge. The wide balcony fits a six-seat breakfast table plus a separate evening coffee corner. Air conditioning runs independently in the living area and both bedrooms; Wi-Fi runs on a mesh system covering every metre. The complex includes a shared pool, children's pool, covered parking and security. The beach is a 4-5 minute walk; the Bardakçı direction is generally calmer than the eastern end of Gümbet, suitable for sleep even on busy nights. Before every arrival, all textiles are renewed and kitchen kit checked piece by piece. The right choice for four- or five-person families looking for a budget hotel alternative.",
    images: [img("1560448204-e02f11c3d0e2"), img("1502672023488-70e25813eb80"), img("1556909114-f6e7ad7d3136"), img("1484154218962-a197022b5858")],
    rating: 4.7,
    reviewCount: 28,
    bookingFallbackUrl: "https://www.booking.com/searchresults.html?ss=Gumbet",
    tags: ["Aile dostu", "Bebek beşiği"],
  },
  {
    id: "ap-003",
    slug: "turgutreis-marina-1-1-gun-batimi",
    type: "apart",
    titleTr: "Turgutreis Marina Yakını 1+1 Gün Batımı Manzaralı Apart",
    titleEn: "Turgutreis 1+1 with Sunset View, Steps to Marina",
    district: "turgutreis",
    capacity: 3,
    bedrooms: 1,
    bathrooms: 1,
    area_m2: 60,
    features: ["pool", "wifi", "ac", "seaView", "balcony", "kitchen", "washer", "smartTv", "elevator"],
    highSeasonPrice: 2900,
    lowSeasonPrice: 1450,
    descriptionTr:
      "Turgutreis marinasına yürüme mesafesinde, batı yönüne bakan bir 1+1 daire — bu apart sezon boyunca aldığımız 'en güzel gün batımı' yorumlarının kaynağıdır. 60 m² kullanım alanı, ferah bir salon, ayrı bir mutfak köşesi ve geniş bir batı balkonundan oluşur. Akşamüstü dönen güneş cama vurduğu an, bütün apart çağdaş ressamların tablosu gibi turuncuya boyanır; misafirlerin büyük çoğunluğu bu sahneyi balkondaki ahşap masada bir kadeh şarapla yakalar. Yatak odasında çift kişilik ortopedik yatak ve karartma perdesi vardır; oturma odasında ek olarak iki kişilik çekyat. Mutfakta gazlı ocak, fırın, çamaşır makinesi ve kahve makinesi mevcuttur. Klima salonda ve yatak odasında bağımsız çalışır; Wi-Fi 100 Mbps fiber. Site içinde ortak havuz, küçük bir kapalı otopark, geniş bir bahçe ve gece güvenliği vardır. Marinanın butik mağazaları, kafeleri ve cumartesi pazarı yürüyüş mesafesinde; Kos adasına feribot iskelesi 3 dakika sürer. Çift ve üçüncü misafiri yanına alan küçük arkadaş grupları için ideal: sakin, manzaralı, merkezi ve uygun fiyatlı.",
    descriptionEn:
      "Within walking distance of the Turgutreis marina, a 1-bedroom apartment facing west — the source of our most-cited 'best sunset' reviews. 60 m² holds a generous living room, a separate kitchen corner and a wide west balcony. As the sun turns, the whole apartment paints itself orange; most guests catch the moment from the wooden balcony table with a glass of wine. The bedroom has an orthopaedic double and blackout curtains; the living room adds a two-person sofa bed. The kitchen offers a gas hob, oven, washing machine and coffee machine. AC runs independently in the living room and bedroom; Wi-Fi is 100 Mbps fibre. The complex has a shared pool, a small covered car park, a wide garden and night security. The marina's shops, cafés and Saturday market are a walk away; the Kos ferry pier sits 3 minutes off. Ideal for couples and small friend groups with a third guest: quiet, scenic, central and well-priced.",
    images: [img("1505691938895-1758d7feb511"), img("1493809842364-78817add7ffb"), img("1551776235-dde6d482980b"), img("1505693416388-ac5ce068fe85")],
    rating: 4.9,
    reviewCount: 33,
    bookingFallbackUrl: "https://www.booking.com/searchresults.html?ss=Turgutreis",
    featured: true,
    tags: ["Gün batımı", "Marina yakın"],
  },
  {
    id: "ap-004",
    slug: "turgutreis-sahil-onu-2-1-aile-apart",
    type: "apart",
    titleTr: "Turgutreis Sahil Önü 2+1 Aile Apartı",
    titleEn: "Turgutreis Beachfront 2+1 Family Apartment",
    district: "turgutreis",
    capacity: 5,
    bedrooms: 2,
    bathrooms: 2,
    area_m2: 95,
    features: ["pool", "wifi", "ac", "seaView", "balcony", "kitchen", "washer", "dishwasher", "smartTv", "elevator", "parking", "babyCrib"],
    highSeasonPrice: 4200,
    lowSeasonPrice: 2100,
    descriptionTr:
      "Turgutreis'in sahil hattında, denize 50 metre mesafede, iki banyolu ve geniş balkonlu bir 2+1 aile apartı. 95 m² alanda; salon, açık mutfak, iki yatak odası ve iki banyo birbirinden bağımsız konumlandırılmıştır. Ebeveyn yatak odasında ensuit banyo, çift kişilik ortopedik yatak ve gardırop; çocuk odasında çift tek yatak ile küçük bir okuma masası vardır. Talep üzerine bebek beşiği önceden yerleştirilir. Mutfakta indüksiyon ocak, ankastre fırın, bulaşık makinesi, çamaşır makinesi ve yeterince büyük buzdolabı bulunur; akşam yemeğini evde hazırlamak isteyenler için ada bench üzerinde altı kişilik mermer kahvaltı tezgahı tasarlanmıştır. Geniş balkon doğudan batıya uzanan bir terası kapsar; sabah kahvaltısı ile akşam yıldız izlemesi aynı alanda yapılır. Klima her odada bağımsız çalışır; Wi-Fi fiber 150 Mbps. Site içinde ortak yetişkin ve çocuk havuzu, kapalı otopark, sezon boyunca aktif olan bahçe garsonu, küçük bir oyun parkı ve 24 saat güvenlik vardır. Sahile inerken küçük bir ahşap yolu kullanırsınız; sabah saatlerinde plajda şezlong ve şemsiye site fiyatına dahildir. Cumartesi pazarı 5 dakika yürüme mesafesindedir.",
    descriptionEn:
      "On the Turgutreis shoreline, 50 metres from the water, a two-bathroom 2-bedroom family apartment with a wide balcony. The 95 m² layout separates the living room, open kitchen, two bedrooms and two bathrooms. The master holds an en-suite, an orthopaedic double and full wardrobe; the second bedroom has two singles and a small reading desk. A baby crib is placed on request before arrival. The kitchen runs an induction hob, built-in oven, dishwasher, washing machine and a generous fridge; an island bench fits a six-seat marble breakfast counter, designed for cooking at home. The balcony reaches from east to west — morning breakfast and evening star-gazing happen in the same space. AC is independent in every room; Wi-Fi is 150 Mbps fibre. The complex has shared adult and children's pools, covered parking, an in-season garden waiter, a small play area and 24-hour security. A wooden path leads to the beach where sunbeds and umbrellas are included in the complex fee until midday. The Saturday market is a 5-minute walk.",
    images: [img("1502672023488-70e25813eb80"), img("1505691938895-1758d7feb511"), img("1556909114-f6e7ad7d3136"), img("1484154218962-a197022b5858"), img("1493809842364-78817add7ffb")],
    rating: 4.8,
    reviewCount: 22,
    bookingFallbackUrl: "https://www.booking.com/searchresults.html?ss=Turgutreis",
    tags: ["Sahil önü", "Aile dostu"],
  },
  {
    id: "ap-005",
    slug: "yalikavak-marina-yakini-butik-2-1",
    type: "apart",
    titleTr: "Yalıkavak Marina Yakını Butik 2+1 Tasarım Apart",
    titleEn: "Yalıkavak 2+1 Boutique Designer Apartment, Marina Side",
    district: "yalikavak",
    capacity: 4,
    bedrooms: 2,
    bathrooms: 2,
    area_m2: 105,
    features: ["pool", "wifi", "ac", "seaView", "balcony", "kitchen", "washer", "dishwasher", "smartTv", "elevator", "parking", "workspace"],
    highSeasonPrice: 6500,
    lowSeasonPrice: 3200,
    descriptionTr:
      "Yalıkavak süper yat marinasının arkasında, sırtta kalan yamaca konumlanmış butik bir site içinde 2+1 tasarım apart. 105 m² alanda; salon-mutfak konsept oda, iki yatak odası ve iki banyo bulunur. Mimar tasarımıdır: doğal taş duvar yüzeyleri, ağırlıklı keten tekstiller, vintage mobilya yerleşimi ve özel sipariş el yapımı seramik banyolar. Yatak odalarından biri çift kişilik king-size yatak, diğeri ayrı iki tek yatak ile döşelidir. Mutfak adası açık plan oturma alanına bakar; Smeg buzdolabı, indüksiyon ocak, ankastre fırın, bulaşık makinesi, kahve değirmenli espresso makinesi standart donanımdır. Geniş cam panelli balkondan marina ışıkları ve marinanın arka yamaçları görünür; gece geç saatte bile yat sahasının ritmik hareketini izlemek bir başka deneyimdir. Klima oturma odası ve iki yatak odasında bağımsız çalışır; Wi-Fi 250 Mbps fiber, kablosuz olarak tüm odaları kapsar. Site içinde ortak havuz, küçük spa, kapalı otopark ve concierge desteği mevcuttur. Marina kafelerine 5 dakika yürüme, Tilkicik koyuna araç ile 8 dakika sürer. Çift, kurumsal seyahat veya iki yakın arkadaş çifti için butik standartta seçim.",
    descriptionEn:
      "Behind the Yalıkavak superyacht marina, on the hillside set back from the water, a designer 2-bedroom apartment in a boutique complex. 105 m² holds an open living-kitchen concept room, two bedrooms and two bathrooms. The brief is architect-led: natural stone wall sections, linen-led textiles, vintage furniture placement, and handmade ceramic bathrooms made to order. One bedroom carries a king-size double; the other holds two singles. The kitchen island faces the open living area; a Smeg fridge, induction hob, built-in oven, dishwasher and a grinder-equipped espresso machine come standard. The wide glass-panelled balcony shows the marina lights and the slopes behind them; even late at night, watching the rhythm of the yacht basin is its own experience. AC is independent in the living room and both bedrooms; Wi-Fi is 250 Mbps fibre and covers the whole space wirelessly. The complex includes a shared pool, a compact spa, covered parking and concierge support. Marina cafés are 5 minutes on foot; Tilkicik Cove is 8 minutes by car. The boutique choice for a couple, a corporate trip, or two friend couples travelling together.",
    images: [img("1512917774080-9991f1c4c750"), img("1554995207-c18c203602cb"), img("1505691938895-1758d7feb511"), img("1493809842364-78817add7ffb"), img("1551776235-dde6d482980b")],
    rating: 4.9,
    reviewCount: 17,
    bookingFallbackUrl: "https://www.booking.com/searchresults.html?ss=Yalikavak",
    featured: true,
    tags: ["Marina yakın", "Tasarım"],
  },
  {
    id: "ap-006",
    slug: "yalikavak-eski-koy-butik-1-1-tas-ev",
    type: "apart",
    titleTr: "Yalıkavak Eski Köy Beyaz Taş Butik 1+1 Apart",
    titleEn: "Yalıkavak 1+1 Whitewashed Boutique Apartment, Old Village",
    district: "yalikavak",
    capacity: 2,
    bedrooms: 1,
    bathrooms: 1,
    area_m2: 52,
    features: ["wifi", "ac", "kitchen", "balcony", "washer", "smartTv"],
    highSeasonPrice: 3600,
    lowSeasonPrice: 1800,
    descriptionTr:
      "Yalıkavak eski köyünün dar bougainvillea sokaklarından birinde, beyaz badanalı bir taş evin üst katındaki butik 1+1 daire. 52 m² alanda; küçük ama özenle tasarlanmış bir oturma alanı, gizli bir mutfak köşesi, yatak odası ve banyo bulunur. Daire iki kişiyi hedefler — çiftler için, kısa hafta sonu kaçamakları için, sakin çalışma günleri için ideal. Yatak odasında çift kişilik el yapımı ahşap karyola, oturma odasında küçük bir okuma köşesi vardır. Mutfakta indüksiyon ocak, mini fırın, çamaşır makinesi ve bir Italyan moka pot mevcuttur — restoran trafiğinde kalan misafirler ev içinde ışık yemekleri ile yetinebilirler. Klima oturma odasında ve yatak odasında ayrı çalışır; Wi-Fi 80 Mbps. Balkondan eski köyün taş çatıları ve bougainvillea sarkları görünür. Yalıkavak marinasına yürüme mesafesi 8 dakika; sahile 6 dakika sürer. Cumartesi açık pazarı dairenin tam karşısındaki meydanda kurulur; sezon boyunca yerel üretim peynir, balık ve sebze burada bulunur. Eski köy hissini kaçırmak istemeyen çiftler için.",
    descriptionEn:
      "On one of the narrow bougainvillea streets of Yalıkavak's old village, a boutique 1-bedroom flat on the upper floor of a whitewashed stone house. 52 m² holds a small but carefully arranged living area, a tucked-in kitchen corner, a bedroom and a bathroom. The flat aims at couples — for weekend escapes or quiet working days. The bedroom carries a handmade wooden double bed; the living room makes space for a small reading corner. The kitchen has an induction hob, mini oven, washing machine and an Italian moka pot — guests who skip the restaurant rush can keep meals light at home. AC runs separately in the living room and bedroom; Wi-Fi is 80 Mbps. The balcony frames stone roofs and trailing bougainvillea. Yalıkavak marina is an 8-minute walk; the beach is 6. The Saturday open market sets up right across the small square; local cheese, fish and produce are available all season. For couples who don't want to miss the old village feel.",
    images: [img("1505693416388-ac5ce068fe85"), img("1551776235-dde6d482980b"), img("1493809842364-78817add7ffb"), img("1505691938895-1758d7feb511")],
    rating: 4.9,
    reviewCount: 26,
    bookingFallbackUrl: "https://www.booking.com/searchresults.html?ss=Yalikavak",
    tags: ["Butik", "Eski köy"],
  },
  {
    id: "ap-007",
    slug: "bitez-sahile-yakin-2-1-bahceli-apart",
    type: "apart",
    titleTr: "Bitez Sahile Yakın 2+1 Bahçeli Apart",
    titleEn: "Bitez 2+1 Apartment with Garden, Steps to Beach",
    district: "bitez",
    capacity: 5,
    bedrooms: 2,
    bathrooms: 1,
    area_m2: 88,
    features: ["pool", "wifi", "ac", "balcony", "kitchen", "washer", "smartTv", "parking", "garden", "babyCrib"],
    highSeasonPrice: 3800,
    lowSeasonPrice: 1900,
    descriptionTr:
      "Bitez koyunun sahil yoluna yakın, mandalina bahçesi içinde kurulmuş küçük bir sitenin zemin katında 2+1 apartımız. 88 m² alanda iki yatak odası, bir banyo, geniş bir salon-mutfak ve daire dışında doğrudan kullanım hakkına sahip 25 m² özel bir bahçe terası bulunur. Bu teras, akşam yemeğini ev dışında almak isteyen aileler için adeta bir villa hissi yaşatır. Ebeveyn odasında çift kişilik ortopedik yatak, ikinci odada çift tek yatak (birleştirilebilir) yer alır; talep üzerine bebek beşiği önceden yerleştirilir. Mutfakta indüksiyon ocak, fırın, çamaşır makinesi ve geniş bir buzdolabı mevcuttur. Klima her odada bağımsız çalışır; Wi-Fi 120 Mbps fiber. Site içinde küçük bir ortak havuz ve kapalı otopark vardır. Sahile yürüyüş 5 dakika sürer; rüzgar sörfü okulları, gözleme evleri ve ahşap iskeleli balık restoranları yakın çevrede. Gümbet'e koy boyunca yürüyüşle 15 dakika ulaşırsınız. Bitez'in sakin, yeşil ve mandalina kokulu havasını arayan aileler için doğru seçim.",
    descriptionEn:
      "Close to the Bitez seafront road, on the ground floor of a small complex built among tangerine groves, a 2-bedroom apartment. 88 m² holds two bedrooms, a bathroom, a generous living-kitchen and a 25 m² private garden terrace used exclusively by this flat. That terrace gives the apartment a near-villa feel — families who want to eat outside have a private setting. The master holds an orthopaedic double; the second bedroom carries two singles (joinable on request). A baby crib is placed on request. The kitchen runs an induction hob, oven, washing machine and a wide fridge. AC is independent in every room; Wi-Fi is 120 Mbps fibre. The complex has a small shared pool and covered parking. The beach is a 5-minute walk; windsurfing schools, gözleme houses and wooden-pier fish restaurants sit in the immediate area. Gümbet is a 15-minute walk along the cove. The right choice for families who want Bitez's calm, green, tangerine-scented air.",
    images: [img("1502672260266-1c1ef2d93688"), img("1560448204-e02f11c3d0e2"), img("1484154218962-a197022b5858"), img("1493809842364-78817add7ffb"), img("1505693416388-ac5ce068fe85")],
    rating: 4.7,
    reviewCount: 31,
    bookingFallbackUrl: "https://www.booking.com/searchresults.html?ss=Bitez",
    tags: ["Özel bahçe terası", "Aile dostu"],
  },
  {
    id: "ap-008",
    slug: "ortakent-yahsi-plaji-onu-2-1",
    type: "apart",
    titleTr: "Ortakent Yahşi Plajı Önü 2+1 Sahil Apartı",
    titleEn: "Ortakent Yahşi Beachfront 2+1 Apartment",
    district: "ortakent",
    capacity: 5,
    bedrooms: 2,
    bathrooms: 2,
    area_m2: 92,
    features: ["pool", "wifi", "ac", "seaView", "balcony", "kitchen", "washer", "dishwasher", "smartTv", "elevator", "parking", "babyCrib"],
    highSeasonPrice: 4600,
    lowSeasonPrice: 2300,
    descriptionTr:
      "Ortakent'in en uzun kumsalı Yahşi'nin tam karşısında, doğrudan sahile bakan bir site içinde 2+1 apart. 92 m² alanda; iki yatak odası, iki banyo, açık plan salon-mutfak ve denize sıfır geniş bir teras balkon yer alır. Ebeveyn odasında ensuit banyo ve çift kişilik ortopedik yatak; ikinci odada çift tek yatak (birleştirilebilir) ve çocuklar için küçük bir oyun masası vardır. Bebek beşiği talep üzerine ücretsizdir. Mutfakta indüksiyon ocak, fırın, bulaşık makinesi, çamaşır makinesi ve geniş buzdolabı mevcuttur; aile akşam yemeği için ada bench üzerinde altı kişilik bir bar vardır. Geniş cam balkondan Yahşi'nin tüm kumsalı, denizin renk değişimi ve akşam plajı gezinen aileler izlenir. Klima oturma odası ve iki yatak odasında bağımsız çalışır; Wi-Fi 180 Mbps fiber. Site içinde havuz, çocuk havuzu, oyun parkı, kapalı otopark ve 24 saat güvenlik bulunur. Şezlong ve şemsiye Yahşi plajında öğleye kadar site fiyatına dahildir. Bodrum merkezine 10 dakika, Bitez'e sahil yolundan 5 dakika sürer.",
    descriptionEn:
      "Facing the peninsula's longest sandy beach at Yahşi, in a complex right on the shore, a 2-bedroom apartment with sea-front views. 92 m² holds two bedrooms, two bathrooms, an open-plan living-kitchen and a wide terrace balcony at the water. The master carries an en-suite and an orthopaedic double; the second bedroom holds two singles (joinable on request) and a small play table for children. A baby crib is placed on request, free of charge. The kitchen runs an induction hob, oven, dishwasher, washing machine and a wide fridge; an island bench seats six for family dinners. The wide glass balcony frames the whole sweep of Yahşi, the shifting colour of the sea, and the families on the evening sand. AC is independent in the living room and both bedrooms; Wi-Fi is 180 Mbps fibre. The complex has a pool, children's pool, play area, covered parking and 24-hour security. Sunbeds and umbrellas on Yahşi beach are included in the complex fee until midday. Bodrum centre is 10 minutes away; Bitez is 5 along the coast road.",
    images: [img("1505691938895-1758d7feb511"), img("1502672023488-70e25813eb80"), img("1556909114-f6e7ad7d3136"), img("1493809842364-78817add7ffb")],
    rating: 4.8,
    reviewCount: 19,
    bookingFallbackUrl: "https://www.booking.com/searchresults.html?ss=Ortakent",
    featured: true,
    tags: ["Sahil önü", "Aile dostu"],
  },

  // ---------- VILLAS (4) ----------
  {
    id: "vl-001",
    slug: "turgutreis-akyarlar-4-1-ozel-havuzlu-villa",
    type: "villa",
    titleTr: "Turgutreis Akyarlar 4+1 Özel Havuzlu Gün Batımı Villası",
    titleEn: "Turgutreis Akyarlar 4+1 Private-Pool Sunset Villa",
    district: "turgutreis",
    capacity: 9,
    bedrooms: 4,
    bathrooms: 3,
    area_m2: 280,
    features: ["privatePool", "wifi", "ac", "seaView", "parking", "kitchen", "balcony", "washer", "dishwasher", "smartTv", "garden", "bbq", "detached", "outdoorShower", "babyCrib"],
    highSeasonPrice: 12500,
    lowSeasonPrice: 6500,
    descriptionTr:
      "Turgutreis'in Akyarlar tarafında, batı yönüne tam cepheli, 280 m² kapalı alanlı müstakil özel havuzlu villa. Dokuz misafire kadar konforlu konaklama sunan villada dört yatak odası, üç tam banyo, ayrı bir kahvaltı mutfağı ve geniş bir salon mutfak konsept oturma alanı bulunur. Üst katta master yatak odası özel teraslı ve denize cephelidir; alt katta üç misafir yatak odası bahçeye ve havuza açılır. Bahçe 350 m² ölçüsündedir; 11 metrelik dikdörtgen, klorürlü özel havuz, ahşap deck, mangal alanı ve sekiz kişilik açık yemek terası burada konumlanır. Havuz başında akşam yemeği için soğutulmuş şarap dolabı bulunan kapalı bir bar köşesi vardır. Mutfakta indüksiyon ocak, çift kapılı buzdolabı, bulaşık makinesi, ankastre kahve makinesi, blender ve yemek için gereken tüm araçlar mevcuttur. Talep üzerine villaya kahvaltı seti, sürpriz çiçek düzenlemesi veya özel şef hizmeti ayarlayabiliriz. Akyarlar plajına 3 dakika araba, Turgutreis marinasına 8 dakika, Bodrum merkezine 30 dakika sürer. Gün batımını havuzdan ya da master terasından izlemek bu villayı tercih eden çiftlerin ve geniş ailelerin değişmez ritüellerinden. Geniş aile tatili, bal ayı uzantısı veya küçük kurumsal grup için özel adres.",
    descriptionEn:
      "On the Akyarlar side of Turgutreis, facing fully west, a 280 m² detached villa with a private pool. The villa hosts up to nine guests comfortably across four bedrooms, three full bathrooms, a separate breakfast kitchen and a generous living-kitchen room. Upstairs, the master has a private terrace and sea view; downstairs, three guest bedrooms open to the garden and pool. The 350 m² garden holds an 11-metre rectangular chlorine private pool, a wooden deck, BBQ area and an eight-seat outdoor dining terrace. A covered bar corner by the pool keeps wine cooled for evening meals. The kitchen runs an induction hob, a double-door fridge, dishwasher, built-in espresso machine, blender and full cookware. On request, we arrange a welcome breakfast box, surprise flowers or a private chef service. Akyarlar beach is a 3-minute drive; Turgutreis marina is 8; Bodrum centre is 30. Watching the sun set from the pool or master terrace is a fixed ritual for couples and large families who choose this house. A particular address for extended family holidays, honeymoon extensions or small corporate groups.",
    images: [img("1564501049412-61c2a3083791"), img("1568084680786-a84f91d1153c"), img("1493809842364-78817add7ffb"), img("1551776235-dde6d482980b"), img("1505691938895-1758d7feb511"), img("1554995207-c18c203602cb")],
    rating: 4.9,
    reviewCount: 14,
    bookingFallbackUrl: "https://www.booking.com/searchresults.html?ss=Turgutreis+villa",
    featured: true,
    tags: ["Özel havuz", "Gün batımı", "Müstakil"],
    hasPrivatePool: true,
    hasGarden: true,
    isDetached: true,
  },
  {
    id: "vl-002",
    slug: "yalikavak-tilkicik-5-1-infinity-havuzlu-villa",
    type: "villa",
    titleTr: "Yalıkavak Tilkicik 5+1 Infinity Havuzlu Lüks Villa",
    titleEn: "Yalıkavak Tilkicik 5+1 Infinity-Pool Luxury Villa",
    district: "yalikavak",
    capacity: 11,
    bedrooms: 5,
    bathrooms: 4,
    area_m2: 380,
    features: ["privatePool", "wifi", "ac", "seaView", "parking", "kitchen", "balcony", "washer", "dishwasher", "smartTv", "garden", "bbq", "detached", "jacuzzi", "outdoorShower", "fireplace"],
    highSeasonPrice: 22000,
    lowSeasonPrice: 11000,
    descriptionTr:
      "Yalıkavak Tilkicik koyunun arkasında, denize cephelı yamaca konumlanmış 380 m² kapalı alanlı, infinity havuzlu lüks villa. On bir misafire kadar konforlu konaklayan villada beş yatak odası, dört tam banyo, ayrı bir misafir tuvaleti, geniş bir salon-yemek mekanı ve şef düzeninde donanımlı bir mutfak bulunur. Üst katta master suit özel terası, dressing odası ve jakuzili banyosuyla bal ayı çiftleri için kurgulanmıştır; alt katta dört misafir odası, ikisi ensuit banyolu. Bahçede 14 metrelik infinity havuz, ahşap deck, sekiz kişilik şef masası, açık duş, mangal alanı ve manzaraya açılan oturma çukuru yer alır. Şömine kış ve serin yaz akşamlarını yumuşatır. Mutfakta Smeg veya Bosch beyaz eşya seti, çift kapılı şarap dolabı, espresso makinesi, profesyonel mikser bulunur — talep üzerine özel şef ve hostes hizmeti ayarlanabilir. Wi-Fi mesh 500 Mbps; klima ve smart home sistemi sesli komutla yönetilir. Tilkicik koyuna 8 dakika araba, marina'ya 12 dakika sürer. Bal ayı, kurumsal toplantı, doğum günü partisi veya bir grubun konser/festival için hafta kiraladığı 'tatil değil deneyim' tipi bir villa. İletişime geçtiğinizde, sezonun yoğun günleri için müsaitlik kapışmadan teyit etmenizi öneririz.",
    descriptionEn:
      "Behind Tilkicik Cove in Yalıkavak, set into the hillside with a sea view, a 380 m² luxury villa with an infinity pool. Up to eleven guests sleep comfortably across five bedrooms, four full bathrooms, a guest WC, a generous living-dining room and a chef-grade kitchen. Upstairs, the master suite carries a private terrace, dressing room and jacuzzi bathroom — purpose-built for honeymoon couples; downstairs, four guest rooms (two en-suite) face the garden. The garden holds a 14-metre infinity pool, wooden deck, eight-seat chef's table, outdoor shower, BBQ area and a view-facing seating pit. A fireplace softens winter and cool summer evenings. The kitchen runs a Smeg or Bosch white-goods set, a dual-door wine cabinet, espresso machine and professional mixer — private chef and hostess service available on request. Wi-Fi runs as a 500 Mbps mesh; AC and a smart-home setup are voice-controlled. Tilkicik Cove is 8 minutes by car; the marina is 12. Honeymoon, corporate offsite, birthday party or a group renting a week around a festival — the 'not a holiday, an experience' kind of villa. When you reach out, we recommend confirming peak-season dates early before they go.",
    images: [img("1613977257363-707ba9348227"), img("1568084680786-a84f91d1153c"), img("1564501049412-61c2a3083791"), img("1554995207-c18c203602cb"), img("1512917774080-9991f1c4c750"), img("1505691938895-1758d7feb511")],
    rating: 5.0,
    reviewCount: 9,
    bookingFallbackUrl: "https://www.booking.com/searchresults.html?ss=Yalikavak+villa",
    featured: true,
    tags: ["Özel havuz", "Infinity", "Bal ayı", "Lüks"],
    hasPrivatePool: true,
    hasGarden: true,
    isDetached: true,
  },
  {
    id: "vl-003",
    slug: "yalikavak-sandima-4-1-deniz-manzarali-villa",
    type: "villa",
    titleTr: "Yalıkavak Sandıma 4+1 Deniz Manzaralı Müstakil Villa",
    titleEn: "Yalıkavak Sandıma 4+1 Sea-View Detached Villa",
    district: "yalikavak",
    capacity: 9,
    bedrooms: 4,
    bathrooms: 3,
    area_m2: 260,
    features: ["privatePool", "wifi", "ac", "seaView", "parking", "kitchen", "balcony", "washer", "dishwasher", "smartTv", "garden", "bbq", "detached", "outdoorShower"],
    highSeasonPrice: 15000,
    lowSeasonPrice: 8000,
    descriptionTr:
      "Yalıkavak Sandıma yönünde, deniz manzarasına hakim yamaçta 260 m² kapalı alanlı müstakil özel havuzlu villa. Dokuz misafire kadar konfor sunar; dört yatak odası, üç tam banyo, ayrı bir misafir tuvaleti, salon-yemek alanı ve modern bir açık mutfak içerir. Master suit denize cepheli özel teraslı ve ensuit banyoludur; üç misafir odası bahçe ya da yamaç manzaralı. Bahçede 9 metrelik dikdörtgen özel havuz, ahşap deck, mangal alanı, açık duş ve sekiz kişilik akşam yemeği terası yer alır. Akşam saatlerinde havuz ışıkları yumuşak bir manzara katmanı oluşturur; gündüz Sandıma rüzgarından korunmuş kapalı bir mikro iklim hissedersiniz. Mutfak indüksiyon ocak, ankastre fırın, bulaşık makinesi, kahve makinesi ve geniş soğutuculu profesyonel buzdolabı içerir. Wi-Fi mesh 300 Mbps; klima her yatak odasında bağımsız. Yalıkavak marinasına 10 dakika araba, Sandıma yürüyüş başlangıç noktasına 5 dakika, Tilkicik koyuna 12 dakika sürer. İlk villa deneyimini yaşayan aileler, iki yakın akraba çift ya da uzatılmış bal ayı için kurgulanmış 'lüks ama abartısız' bir tatil bazı.",
    descriptionEn:
      "Toward Sandıma in Yalıkavak, on a hillside overlooking the sea, a 260 m² detached villa with a private pool. The villa hosts up to nine guests across four bedrooms, three full bathrooms, a guest WC, a living-dining area and a modern open kitchen. The master suite faces the sea with a private terrace and en-suite bathroom; three guest rooms look to the garden or the slope. The garden holds a 9-metre rectangular private pool, wooden deck, BBQ area, outdoor shower and an eight-seat dining terrace. By evening, the pool lights cast a soft layer over the view; by day, a sheltered microclimate keeps the Sandıma wind at bay. The kitchen runs an induction hob, built-in oven, dishwasher, espresso machine and a professional double-door fridge. Wi-Fi runs as a 300 Mbps mesh; AC is independent in every bedroom. Yalıkavak marina is 10 minutes by car; the Sandıma trailhead is 5; Tilkicik Cove is 12. A 'luxury without ostentation' base — built for families on their first villa trip, two related couples, or an extended honeymoon.",
    images: [img("1568084680786-a84f91d1153c"), img("1564501049412-61c2a3083791"), img("1554995207-c18c203602cb"), img("1505691938895-1758d7feb511"), img("1493809842364-78817add7ffb")],
    rating: 4.9,
    reviewCount: 12,
    bookingFallbackUrl: "https://www.booking.com/searchresults.html?ss=Yalikavak+villa",
    featured: true,
    tags: ["Özel havuz", "Deniz manzarası", "Müstakil"],
    hasPrivatePool: true,
    hasGarden: true,
    isDetached: true,
  },
  {
    id: "vl-004",
    slug: "ortakent-koy-ici-5-1-tas-bahceli-villa",
    type: "villa",
    titleTr: "Ortakent Köy İçi 5+1 Taş Bahçeli Özel Havuzlu Villa",
    titleEn: "Ortakent 5+1 Stone-Garden Private-Pool Village Villa",
    district: "ortakent",
    capacity: 11,
    bedrooms: 5,
    bathrooms: 4,
    area_m2: 320,
    features: ["privatePool", "wifi", "ac", "parking", "kitchen", "balcony", "washer", "dishwasher", "smartTv", "garden", "bbq", "detached", "outdoorShower", "babyCrib", "fireplace"],
    highSeasonPrice: 13500,
    lowSeasonPrice: 7000,
    descriptionTr:
      "Ortakent köyünün geleneksel taş duvarlarla çevrili iç bölgesinde, mandalina ve zeytin ağaçlarıyla dolu 400 m² özel bahçeli, 320 m² kapalı alanlı müstakil 5+1 villa. On bir misafire kadar konforlu konaklama sunan villada beş yatak odası, dört tam banyo, müstakil bir misafir tuvaleti, ferah bir salon-yemek alanı ve modern bir açık mutfak bulunur. Mimari, eski Bodrum mimarisinden ilham alır: kalın taş duvarlar, beyaz badana sıva, ahşap kiriş tavan ve el yapımı seramik banyolar villanın karakterini oluşturur. Master yatak odası özel teraslı ve ensuit banyoludur; dört misafir odasından ikisi de ensuittir, geri kalan iki oda ortak banyoyu paylaşır. Talep üzerine bebek beşiği ücretsiz hazırlanır. Bahçede 10 metrelik özel havuz, ahşap deck, on iki kişilik taş zemin yemek alanı, açık duş, mangal ve şömineli oturma çukuru yer alır. Mandalina mevsiminde bahçeden taze meyve toplayabilir; akşamları zeytin ağaçları arasında akşam yemeğinizi alabilirsiniz. Mutfak Bosch beyaz eşya seti, ankastre fırın, bulaşık makinesi, çift kapılı buzdolabı, espresso makinesi ve şarap dolabı içerir; talep üzerine kahvaltı ve şef hizmeti ayarlanır. Yahşi plajına 3 dakika araba, Bodrum merkezine 10 dakika, Bitez'e 5 dakika sürer. Geniş aile, dostlar arası organize tatil veya kurumsal hafta sonu için son derece uygun.",
    descriptionEn:
      "In the traditional stone-walled inner village of Ortakent, a 320 m² detached 5-bedroom villa with a 400 m² private garden full of tangerine and olive trees. Up to eleven guests sleep comfortably across five bedrooms, four full bathrooms, a separate guest WC, a generous living-dining area and a modern open kitchen. The architecture borrows from old Bodrum: thick stone walls, white plaster, wood-beam ceilings and handmade ceramic bathrooms shape the character. The master holds a private terrace and en-suite; two of the four guest rooms are en-suite, the other two share a bathroom. A baby crib is placed on request, free of charge. The garden holds a 10-metre private pool, wooden deck, a twelve-seat stone-floor dining area, an outdoor shower, BBQ and a fireplace-warmed seating pit. In tangerine season you pick fruit from the garden; on cool evenings you eat among the olive trees. The kitchen runs a Bosch white-goods set, built-in oven, dishwasher, double-door fridge, espresso machine and wine cabinet; breakfast and chef services are arranged on request. Yahşi beach is a 3-minute drive; Bodrum centre is 10; Bitez is 5. A strong fit for extended families, organised friend groups or corporate weekends.",
    images: [img("1505691938895-1758d7feb511"), img("1554995207-c18c203602cb"), img("1568084680786-a84f91d1153c"), img("1564501049412-61c2a3083791"), img("1493809842364-78817add7ffb"), img("1505693416388-ac5ce068fe85")],
    rating: 4.9,
    reviewCount: 11,
    bookingFallbackUrl: "https://www.booking.com/searchresults.html?ss=Ortakent+villa",
    tags: ["Özel havuz", "Taş bahçe", "Müstakil", "Aile dostu"],
    hasPrivatePool: true,
    hasGarden: true,
    isDetached: true,
  },
];

export function getProperty(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug || p.id === slug);
}

export function getPropertiesByDistrict(districtSlug: string): Property[] {
  return properties.filter((p) => p.district === districtSlug);
}

export function getPropertiesByType(type: PropertyType): Property[] {
  return properties.filter((p) => p.type === type);
}
