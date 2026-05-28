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
  h1: { tr: string; en: string; de?: string; ru?: string };
  sections: {
    tr: SeoSection[];
    en: SeoSection[];
    de?: SeoSection[];
    ru?: SeoSection[];
  };
  faq: {
    tr: { q: string; a: string }[];
    en: { q: string; a: string }[];
    de?: { q: string; a: string }[];
    ru?: { q: string; a: string }[];
  };
  priceRange: string;
}

export interface District {
  slug: DistrictSlug;
  urlSlug: string;
  name: string;
  shortDescTr: string;
  shortDescEn: string;
  shortDescDe?: string;
  shortDescRu?: string;
  longDescTr: string;
  longDescEn: string;
  longDescDe?: string;
  longDescRu?: string;
  heroImage: string;
  highlights: { tr: string[]; en: string[]; de?: string[]; ru?: string[] };
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
    shortDescDe:
      "Lebhafte Küstenbucht mit Villenanlagen am Hang darüber.",
    shortDescRu:
      "Оживлённая прибрежная бухта с виллами на склоне над ней.",
    longDescTr:
      "Gümbet denince çoğu kişinin aklına ilk olarak hareketli sahil hattı gelir; oysa koyun arkasındaki yamaçlarda son on yılda yükselen butik villa siteleri bambaşka bir tatil hikayesi sunar. Bodrum merkezine yürüme mesafesindeki konumu sayesinde, akşam çıkışlarınızı kolayca planlar, geceyi havuz başında dinlenerek bitirirsiniz. Villa seçenekleri genellikle 3-5 yatak odalı, özel havuzlu ve manzara terasları olan yapılardır; bahçeli müstakil seçenekler ise daha çok Bardakçı Koyu yönünde yer alır. Apart tarafında ise sahile birkaç dakika yürüme mesafesinde, site içi ortak havuzlu daireler ön plandadır — kalabalık aileler için ekonomik, gençler için merkezi. Gümbet'te kalmanın asıl avantajı ulaşım: marinaya, kaleye, Bardakçı'ya, Bitez'e dakikalar içinde ulaşırsınız ve dolmuş seferleri tüm gece sürer. Aile odaklı misafirler için sahilin daha sakin doğu ucundaki villaları öneririz; arkadaş grupları için ise merkezi caddenin sırtındaki teraslı apart siteleri uygun olur.",
    longDescEn:
      "Gümbet is best known for its lively shoreline, yet the hillsides behind the cove tell a different story — boutique villa complexes built over the last decade now offer a calmer side to this address. Walking distance to Bodrum centre makes evenings easy: head out for dinner, return to the pool. Villas here are typically 3 to 5 bedrooms with private pools and view terraces; detached options with private gardens lean toward the Bardakçı Cove side. On the apartment side, complexes with shared pools sit just minutes from the beach — economical for large families, central for younger groups. The real advantage of Gümbet is reach: the marina, the castle, Bardakçı and Bitez are all minutes away, and dolmuş minibuses run through the night. We point families to the calmer eastern side of the bay and put friend groups in the terraced complexes behind the main avenue.",
    longDescDe:
      "Gümbet ist vor allem für seine lebhafte Uferpromenade bekannt, doch die Hänge hinter der Bucht erzählen eine andere Geschichte: Im letzten Jahrzehnt entstandene Villenanlagen geben dieser Adresse eine ruhigere Seite. Die fußläufige Nähe zum Zentrum von Bodrum macht die Abende unkompliziert — Sie gehen zum Essen aus und kehren an den Pool zurück. Die Villen verfügen in der Regel über drei bis fünf Schlafzimmer, einen privaten Pool und Aussichtsterrassen; freistehende Häuser mit eigenem Garten liegen eher in Richtung der Bucht von Bardakçı. Auf der Apartmentseite stehen Anlagen mit Gemeinschaftspool nur wenige Minuten vom Strand entfernt — günstig für große Familien, zentral für jüngere Reisende. Der eigentliche Vorteil von Gümbet ist die Erreichbarkeit: Marina, Burg, Bardakçı und Bitez sind nur Minuten entfernt, und die Dolmuş-Minibusse fahren die ganze Nacht. Familien empfehlen wir die ruhigere Ostseite der Bucht, Freundesgruppen die terrassierten Anlagen hinter der Hauptstraße.",
    longDescRu:
      "Гюмбет известен прежде всего своей оживлённой набережной, однако склоны за бухтой рассказывают иную историю: построенные за последнее десятилетие виллы придают этому адресу более спокойную сторону. Близость к центру Бодрума пешком делает вечера лёгкими — вы выходите на ужин и возвращаетесь к бассейну. Виллы здесь, как правило, имеют от трёх до пяти спален, частный бассейн и террасы с видом; отдельно стоящие дома с собственным садом расположены ближе к бухте Бардакчы. Со стороны апартаментов комплексы с общим бассейном находятся всего в нескольких минутах от пляжа — экономично для больших семей и удобно для молодых гостей. Главное преимущество Гюмбета — доступность: марина, крепость, Бардакчы и Битез всего в нескольких минутах, а маршрутки-долмуши ходят всю ночь. Семьям мы советуем более спокойную восточную часть бухты, а компаниям друзей — террасные комплексы за главной улицей.",
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
      de: [
        "Villen mit privatem Pool am Hang (3-5 Schlafzimmer)",
        "Strandnahe Apartmentanlagen mit Gemeinschaftspool",
        "2 km bis ins Zentrum von Bodrum, Burg und Marina nah",
        "Dolmuş-Minibusse die ganze Nacht",
      ],
      ru: [
        "Виллы с частным бассейном на склоне (3-5 спален)",
        "Прибрежные апарт-комплексы с общим бассейном",
        "2 км до центра Бодрума, крепость и марина рядом",
        "Маршрутки-долмуши всю ночь",
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
    shortDescDe:
      "Lange Küste mit Villenterrassen mit Blick auf den Sonnenuntergang.",
    shortDescRu:
      "Длинная береговая линия с террасами вилл, обращёнными к закату.",
    longDescTr:
      "Bodrum yarımadasının batı ucunda yer alan Turgutreis, akşam saatlerinde Türkiye'nin en güzel gün batımı sahnelerinden birine ev sahipliği yapar; bu yüzden villa yatırımcılarının uzun süredir gözdesidir. Sahile cepheli, batı yönüne bakan teraslı villalar burada özel bir konumda — havuz başında dünya batarken cama vuran turuncu hâlâ misafirlerin en çok fotoğrafladığı an. Akyarlar ve Aspat tarafındaki müstakil villalar arasında bütçeye uygun aile evlerinden lüks bal ayı seçeneklerine kadar geniş bir aralık vardır. Merkezde apart tarafı uygundur ve cumartesi pazarı, marinası, restoran hattı sayesinde villa misafirlerinin gün içi vakit geçirmesi için pratik bir aks oluşturur. Kos adasına tekneyle bir saatte ulaşırsınız; çift dolu villa ya da geniş ailenin günlük bir Yunan adası çıkmasını planlamak buradan en kolayıdır.",
    longDescEn:
      "On the western tip of the peninsula, Turgutreis hosts one of Turkey's most photographed sunsets, which is precisely why villa investors have long favoured the area. West-facing terraced villas overlooking the sea hold a special spot — the orange glow on the pool deck is the most-photographed moment of many trips. Detached villas around Akyarlar and Aspat span family budgets to honeymoon-grade luxury. The apartment market sits in the centre, where the Saturday market, the marina and the restaurant row create a practical day-to-day axis for villa guests. Kos is a one-hour ferry away — easy if a villa or full family wants to fit a Greek island day in.",
    longDescDe:
      "An der Westspitze der Halbinsel erlebt Turgutreis einen der meistfotografierten Sonnenuntergänge der Türkei — genau deshalb schätzen Villenkäufer die Gegend seit Langem. Nach Westen ausgerichtete Terrassenvillen mit Blick auf das Meer nehmen hier einen besonderen Platz ein: Das orangefarbene Licht auf dem Pooldeck ist für viele Gäste der am häufigsten festgehaltene Moment. Freistehende Villen rund um Akyarlar und Aspat reichen vom familienfreundlichen Budget bis zur Ausstattung für Flitterwochen. Der Apartmentmarkt liegt im Zentrum, wo der Samstagsmarkt, die Marina und die Restaurantzeile eine praktische Achse für den Alltag der Villengäste bilden. Kos erreichen Sie in einer Stunde mit der Fähre — ideal, wenn eine Villa oder eine ganze Familie einen Tag auf einer griechischen Insel einplanen möchte.",
    longDescRu:
      "На западной оконечности полуострова Тургутреис встречает один из самых фотографируемых закатов Турции — именно поэтому покупатели вилл давно ценят этот район. Обращённые на запад террасные виллы с видом на море занимают здесь особое место: оранжевое сияние на площадке у бассейна — самый запоминающийся момент многих поездок. Отдельно стоящие виллы в районах Акъярлар и Аспат охватывают весь диапазон — от семейного бюджета до уровня для медового месяца. Рынок апартаментов сосредоточен в центре, где субботний рынок, марина и ряд ресторанов образуют удобную ось повседневной жизни гостей вилл. До Коса час на пароме — это просто, если виллу или всю семью тянет провести день на греческом острове.",
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
      de: [
        "Nach Westen ausgerichtete Terrassenvillen zum Sonnenuntergang",
        "Freistehende Villen rund um Akyarlar/Aspat",
        "Samstagsmarkt und moderne Marina",
        "1 Stunde mit der Fähre nach Kos",
      ],
      ru: [
        "Террасные виллы, обращённые к закату на запад",
        "Отдельно стоящие виллы в районе Акъярлар/Аспат",
        "Субботний рынок и современная марина",
        "1 час на пароме до Коса",
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
    shortDescDe:
      "Superyacht-Marina und feine Villen mit privatem Pool am Hang.",
    shortDescRu:
      "Марина для суперъяхт и изысканные виллы с частным бассейном на склоне.",
    longDescTr:
      "Yalıkavak, son yıllarda Bodrum'un en lüks tatil rotası olarak tanımlanır oldu; bal ayı çiftleri, kurumsal gruplar ve uzun konaklamalı aileler için bu sitenin öne çıkardığı en güçlü adres burası. Yamaç sırtında, denize hakim teraslarla dizilmiş özel havuzlu villalar burada bir karakter taşır: havuza tatlı bir eğimle inen bahçeler, marinanın ışıklarını gece boyu gören oturma alanları ve infinity pool şablonu bu bölgenin standardıdır. Tilkicik ve Kudur koylarına araç ile dakikalar içinde ulaşırsınız; sezonun yoğun günlerinde villanızdan tekne çağırıp Sandıma ya da Cennet Adası'na yarım günlük kaçamak en sevilen pratik rotalardandır. Apart tarafında ise eski Yalıkavak köyünün arka sokaklarında, beyaz badanalı yapılarda butik daireler bulunur — çift ve küçük aile için uygundur. Akşam yemeği için marinadaki şef restoranları, gündüz için sahil iskeleleri ve butik mağaza hattı bölgenin günlük ritmini şekillendirir.",
    longDescEn:
      "Yalıkavak has become Bodrum's most luxurious holiday route in recent years — and this site's headline choice for honeymoon couples, corporate groups and long-stay families. Private-pool villas line the hillside with terraces facing the sea: gently sloping gardens that step down to the water, living areas with marina lights all night, and the infinity-pool layout that defines the area. Tilkicik and Kudur coves are minutes away; on peak days, calling a boat to your villa for a half-day at Sandıma or Paradise Island is a beloved ritual. The apartment side hides in the back streets of the old village, in whitewashed buildings — best for couples and small families. Chef restaurants on the marina anchor the evening; daytime is shaped by sea-front piers and the boutique shop row.",
    longDescDe:
      "Yalıkavak hat sich in den letzten Jahren zur ruhigsten und zugleich gepflegtesten Urlaubsadresse von Bodrum entwickelt — und ist unsere erste Wahl für Hochzeitsreisende, Firmengruppen und Gäste mit langem Aufenthalt. Villen mit privatem Pool reihen sich am Hang, ihre Terrassen zum Meer gewandt: sanft abfallende Gärten, die zum Wasser hinunterführen, Wohnbereiche mit den Lichtern der Marina die ganze Nacht und die Infinity-Pool-Anlage, die diese Gegend prägt. Die Buchten Tilkicik und Kudur sind nur Minuten entfernt; an belebten Tagen ein Boot für einen halben Tag nach Sandıma oder zur Paradiesinsel an die Villa zu rufen, ist ein beliebtes Ritual. Die Apartments verbergen sich in den Gassen des alten Dorfes, in weiß getünchten Häusern — ideal für Paare und kleine Familien. Die Restaurants mit Küchenchef an der Marina prägen den Abend; den Tag bestimmen die Stege am Meer und die Zeile der kleinen Boutiquen.",
    longDescRu:
      "За последние годы Яликавак стал самым тихим и при этом самым ухоженным курортным адресом Бодрума — и нашим первым выбором для пар в медовый месяц, корпоративных групп и гостей с долгим пребыванием. Виллы с частным бассейном выстроились вдоль склона, их террасы обращены к морю: плавно спускающиеся к воде сады, гостиные с огнями марины всю ночь и планировка с бассейном-инфинити, определяющая облик района. Бухты Тилкиджик и Кудур всего в нескольких минутах; в разгар сезона вызвать лодку к вилле на полдня в Сандыму или на Райский остров — любимый ритуал. Апартаменты прячутся в переулках старой деревни, в выбеленных домах — лучше всего для пар и небольших семей. Рестораны с шеф-поваром на марине задают тон вечеру; день определяют причалы у моря и ряд небольших бутиков.",
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
      de: [
        "Villen mit Infinity-Pool am Hang",
        "Superyacht-Marina und Restaurants mit Küchenchef",
        "Versteckte Buchten bei Tilkicik / Kudur / Sandıma",
        "Kleine Apartments im alten Dorf",
      ],
      ru: [
        "Виллы с бассейном-инфинити на склоне",
        "Марина для суперъяхт и рестораны с шеф-поваром",
        "Укромные бухты Тилкиджик / Кудур / Сандыма",
        "Камерные апартаменты в старой деревне",
      ],
    },
    nearby: ["gundogan", "turgutreis", "gumusluk"],
    lat: 37.1093,
    lng: 27.2913,
    seo: {
      h1: {
        tr: "Yalıkavak Villa Kiralama — Butik Koleksiyon ve Sakin Sahil",
        en: "Yalıkavak Villa Rental — A Boutique Collection and a Quiet Shore",
        de: "Villa mieten in Yalıkavak — eine feine Auswahl an ruhiger Küste",
        ru: "Аренда виллы в Яликаваке — камерная коллекция на тихом берегу",
      },
      priceRange: "2500-5000 TL / gece",
      sections: {
        tr: [
          {
            heading: "Yalıkavak'ın Atmosferi",
            body: "Yalıkavak, Bodrum'da lüksün sessiz biçimde olgunlaştığı tek koydur. Palmarina'nın 2014 sonrası açılışıyla birlikte gelen süperyat hareketi, koyun batı yamacında butik villaların oluştuğu bir hattı tetikledi; ancak bu hattın asıl niteliği gösterişten çok ölçüdür. Mimari, beyaz badana ve doğal taşın orta yolunda durur. Eski Yalıkavak köyünün arka sokaklarında hâlâ ev yapımı tarhana satan teyzeler, koyun bir ucundaki sanatçı stüdyoları ve marinanın diğer ucundaki butik mağaza hattı — bu üçü, Yalıkavak'ı bir butik tatil adresi olarak ayakta tutan dayanak noktalarıdır.",
          },
          {
            heading: "Misafir Profili",
            body: "Yalıkavak villaları, Türkiye'nin yaratıcı ve kurumsal kesimi, Avrupa'nın olgun butik tatil müşterisi ve yat sahibi misafirler tarafından tercih edilir. Bal ayı çiftleri için sezon dışı tatilde sakin, sezon ortasında ise marina hareketiyle dengeli bir adres. Aileler için yamaca dizilmiş özel havuzlu villalar; çiftler için marina yakınında butik tek odalı evler. Kurumsal etkinlikler için 8-12 kişilik villalar yıl içinde 2-3 küçük gruba ev sahipliği yapar.",
          },
          {
            heading: "Aktiviteler: Marinadan Sandıma'ya",
            body: "Palmarina'nın butik mağaza hattı sezonun en olgun adresidir; alışveriş ötesinde, marinanın gün batımı saatleri kendi başına bir ritüeldir. Tilkicik ve Kudur koyları, villaya en yakın özel teknesel rota seçenekleridir. Eski Sandıma köyünün yamaca tutunmuş taş evleri, akşamüstü bir yürüyüş için ideal. Yarım günlük bir özel motoryatla Karaada akvaryum koyuna ulaşmak, sezonun en sık planlanan çıkışıdır.",
          },
          {
            heading: "Villa Profili: Yamaçtan Sahile",
            body: "Yalıkavak'ta tipik villa 4-6 yatak odalı, özel havuzlu, 280-500 metrekare arasında, denize cepheli bir terasla şekillenir. Yamaca dizilmiş villaların büyük bölümü infinity havuz tasarımıyla gelir. Sahile cepheli ya da özel iskeleli villalar nadir bulunur ve fiyatı yukarı çeker. Yüksek sezon (Temmuz-Ağustos) fiyatları 3.500-5.000 TL/gece bandında; sezon dışında 2.500-3.500 TL/gece civarında dolaşır.",
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
        de: [
          {
            heading: "Die Atmosphäre von Yalıkavak",
            body: "Yalıkavak ist die eine Bucht, in der die gehobene Seite Bodrums in einem leisen Ton heranreift. Die Superyacht-Bewegung, die mit der Palmarina nach 2014 kam, brachte am Westhang eine Reihe feiner Villen hervor — doch ihre eigentliche Qualität liegt im Maß, nicht im Spektakel. Die Architektur bewegt sich zwischen weißem Kalkanstrich und Naturstein. Frauen, die in den Gassen des alten Dorfes noch hausgemachte Tarhana verkaufen, Künstlerateliers am einen Ende der Bucht und die Zeile kleiner Boutiquen am anderen — diese drei Bezugspunkte halten Yalıkavak als ruhige, gepflegte Adresse zusammen.",
          },
          {
            heading: "Gästeprofil",
            body: "Yalıkavak-Villen werden von der kreativen und unternehmerischen Schicht der Türkei, von Europas anspruchsvollen Urlaubsgästen und von Yachtbesitzern gewählt. Hochzeitsreisende finden es in der Nebensaison still und zur Hauptsaison durch das Marinaleben ausgewogen. Familien neigen zu den Villen mit privatem Pool am Hang; Paare nehmen kleine Häuser mit einem Schlafzimmer nahe der Marina. Für Firmenanlässe beherbergen Villen für 8 bis 12 Gäste zwei bis drei kleinere Gruppen im Jahr.",
          },
          {
            heading: "Aktivitäten: Von der Marina nach Sandıma",
            body: "Die Boutiquenzeile der Palmarina ist die gereifteste Adresse der Saison; jenseits des Einkaufens ist die Stunde des Sonnenuntergangs an der Marina ein Ritual für sich. Tilkicik und Kudur sind die nächstgelegenen Bootsrouten ab der Villa. Die Steinhäuser des alten Dorfes Sandıma am Hang eignen sich für einen Spaziergang am späten Nachmittag. Eine halbtägige Fahrt mit einer privaten Motoryacht zur Aquariumsbucht von Karaada ist der am häufigsten geplante Ausflug der Saison.",
          },
          {
            heading: "Villenprofil: Vom Hang bis zur Küste",
            body: "Eine typische Villa in Yalıkavak hat 4 bis 6 Schlafzimmer, einen privaten Pool, 280 bis 500 m² und eine zum Meer gewandte Terrasse. Die meisten Hangvillen verfügen über eine Infinity-Pool-Anlage. Villen direkt am Meer oder mit eigenem Steg sind selten und heben das Preissegment. In der Hochsaison (Juli-August) liegen die Preise bei 3.500-5.000 TL pro Nacht, in der Nebensaison bei 2.500-3.500 TL.",
          },
          {
            heading: "Gastronomie: Küchenchef an der Marina, Meyhane im Dorf",
            body: "Die Marinarestaurants arbeiten mit wöchentlich wechselnden Menüs; saisonaler Fisch, am Hang gesammelte Kräuter und lokales Olivenöl bilden die gemeinsame Grundlage. Zwei Meyhanes in den Gassen des Dorfes pflegen die klassische ägäische Tradition unverändert. Einen privaten Koch in der Villa organisiert unser Concierge mit einer einzigen Nachricht.",
          },
          {
            heading: "In der Nähe",
            body: "Gümüşlük, zwanzig Minuten für einen ruhigen Nachmittag. Türkbükü, fünfzehn für einen kurzen Besuch der Beachclub-Kultur. Der Kieselstrand von Gündoğan ist eine zwölfminütige Fahrt entfernt; das Zentrum von Bodrum etwa fünfundzwanzig.",
          },
        ],
        ru: [
          {
            heading: "Атмосфера Яликавака",
            body: "Яликавак — та самая бухта, где утончённая сторона Бодрума взрослеет негромко. Движение суперъяхт, пришедшее вместе с Палмариной после 2014 года, породило на западном склоне ряд камерных вилл — но их подлинное достоинство в мере, а не в показном блеске. Архитектура балансирует между белёным камнем и натуральным камнем. Женщины, до сих пор продающие домашнюю тархану в переулках старой деревни, мастерские художников на одном конце бухты и ряд небольших бутиков на другом — эти три опоры удерживают Яликавак как спокойный, благородный адрес.",
          },
          {
            heading: "Профиль гостя",
            body: "Виллы Яликавака выбирают творческие и деловые круги Турции, взыскательные европейские отпускники и владельцы яхт. Пары в медовый месяц находят здесь тишину в межсезонье и равновесие благодаря жизни марины в разгар сезона. Семьи тяготеют к виллам с частным бассейном на склоне; пары выбирают небольшие дома с одной спальней рядом с мариной. Для корпоративных событий виллы на 8-12 гостей принимают две-три небольшие группы в год.",
          },
          {
            heading: "Чем заняться: от марины до Сандымы",
            body: "Ряд бутиков Палмарины — самый зрелый адрес сезона; помимо шопинга, час заката на марине сам по себе ритуал. Тилкиджик и Кудур — ближайшие лодочные маршруты от виллы. Каменные дома старой деревни Сандыма на склоне подходят для прогулки под вечер. Полудневная поездка на частной моторной яхте в аквариумную бухту Караада — самый популярный выезд сезона.",
          },
          {
            heading: "Профиль виллы: от склона к берегу",
            body: "Типичная вилла в Яликаваке — это 4-6 спален, частный бассейн, площадь 280-500 м² и терраса, обращённая к морю. Большинство вилл на склоне имеют планировку с бассейном-инфинити. Виллы у самого моря или с собственным причалом редки и поднимают ценовой сегмент. В высокий сезон (июль-август) цены составляют 3 500-5 000 TL за ночь, в межсезонье — 2 500-3 500 TL.",
          },
          {
            heading: "Гастрономия: шеф-повар на марине, мейхане в деревне",
            body: "Рестораны марины работают по еженедельно обновляемому меню; сезонная рыба, собранные на склоне травы и местное оливковое масло образуют общую основу. Две мейхане в переулках деревни хранят классическую эгейскую традицию в неизменном виде. Частного повара на виллу наш консьерж организует одним сообщением.",
          },
          {
            heading: "Поблизости",
            body: "Гюмюшлюк — двадцать минут для тихого дня. Тюркбюкю — пятнадцать для короткого знакомства с культурой бич-клубов. До галечного берега Гёндогана двенадцать минут на машине; до центра Бодрума около двадцати пяти.",
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
            a: "Yüksek sezonda 3.500-5.000 TL/gece; sezon dışında 2.500-3.500 TL/gece bandı geçerlidir. En üst sınıf villalar bunun üzerine çıkar.",
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
        de: [
          {
            q: "Gibt es Villen in Gehweite zur Palmarina?",
            a: "Ja. Am Westhang liegen kleine Villen 10-15 Gehminuten von der Marina entfernt. Unser Concierge filtert nach Ihren Aufenthaltsdaten.",
          },
          {
            q: "Wie hoch ist die Preisspanne für Villen in Yalıkavak?",
            a: "In der Hochsaison 3.500-5.000 TL pro Nacht; in der Nebensaison 2.500-3.500 TL. Die gehobensten Villen liegen darüber.",
          },
          {
            q: "Wie weit ist das alte Dorf Sandıma entfernt?",
            a: "Etwa fünf Minuten von der Palmarina, eine kurze Fahrt den Hang hinauf. Ideal für einen Spaziergang am späten Nachmittag.",
          },
          {
            q: "Können Superyachten hier anlegen?",
            a: "Die Palmarina zählt zu den am besten ausgebauten Yachthäfen des Mittelmeers; Liegeplätze für Yachten über 100 m und in vielen kleineren Größen stehen zur Verfügung.",
          },
          {
            q: "Ist Yalıkavak für Familien mit kleinen Kindern geeignet?",
            a: "Die flache, ruhige Küste ist für Familien angenehm. Unser Concierge wählt Villen mit Kinderpool aus, passend zur Hanglage Ihrer Villa.",
          },
        ],
        ru: [
          {
            q: "Есть ли виллы в пешей доступности от Палмарины?",
            a: "Да. На западном склоне камерные виллы расположены в 10-15 минутах ходьбы от марины. Наш консьерж подберёт варианты по датам вашего пребывания.",
          },
          {
            q: "Каков диапазон цен на виллы в Яликаваке?",
            a: "В высокий сезон 3 500-5 000 TL за ночь; в межсезонье 2 500-3 500 TL. Самые изысканные виллы стоят выше.",
          },
          {
            q: "Как далеко старая деревня Сандыма?",
            a: "Около пяти минут от Палмарины, короткая поездка вверх по склону. Идеально для прогулки под вечер.",
          },
          {
            q: "Могут ли здесь швартоваться суперъяхты?",
            a: "Палмарина — одна из самых развитых яхтенных марин Средиземноморья; доступны стоянки для яхт длиной свыше 100 м и множества меньших размеров.",
          },
          {
            q: "Подходит ли Яликавак для семей с маленькими детьми?",
            a: "Мелкий, спокойный берег удобен для семей. Наш консьерж подберёт виллы с детским бассейном с учётом расположения вашей виллы на склоне.",
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
    shortDescDe:
      "Im Landesinneren Mandarinengärten mit Gartenvillen und privaten Pools.",
    shortDescRu:
      "В глубине — мандариновые сады с виллами, садами и частными бассейнами.",
    longDescTr:
      "Bitez, Gümbet'in gürültüsünden adım atılır atılmaz değişen, mandalina bahçeleriyle çevrili sakin bir koy; sahil kısmı rüzgar sörfü ve aile dostu sığ deniziyle tanınırken, koyun arka tarafındaki iç bölgede bahçeli, özel havuzlu villalar ön plana çıkar. Bu villaların büyük çoğunluğu müstakil yapıdadır ve villa sınırları içinde meyve ağaçlarıyla çevrelenmiş kahvaltı terasları, mangal alanları ve büyük havuzlar bulundurur — özellikle akşam yemeğini kalabalık aileyle ev içinde yapmayı tercih edenler için ideal. Apart kısmı ise sahile yakın, ortak havuzlu sitelerdedir; çift ve küçük aile için pratik. Sahildeki ahşap iskeleli balık restoranları geceyi hareketsizlikten çıkarır; gündüzleri rüzgar sörfü okulları ve sahile dizilmiş gözleme evleri en sevilen duraklardır. Gümbet'e yürüme, Ortakent'e ise sahil yolundan kısa bir araç mesafesi vardır.",
    longDescEn:
      "Bitez is the calm tangerine-grove cove that begins a step away from Gümbet's noise. The shore is known for windsurfing and family-friendly shallow water, while the inland side hides garden villas with private pools. Most of these villas are detached and come with fruit-tree-lined breakfast terraces, BBQ areas and generous pools — perfect for guests who want to eat in with a large family. The apartment market sits closer to the beach, in complexes with shared pools — practical for couples and small families. Wooden-pier fish restaurants give the evening its rhythm; by day, windsurfing schools and the traditional gözleme houses on the shore set the pace. Gümbet is a walk, Ortakent a short drive along the coast road.",
    longDescDe:
      "Bitez ist die ruhige Bucht der Mandarinengärten, die einen Schritt jenseits des Trubels von Gümbet beginnt. Das Ufer ist für Windsurfen und familienfreundlich flaches Wasser bekannt, während sich im Landesinneren Gartenvillen mit privatem Pool verbergen. Die meisten dieser Villen stehen frei und bieten von Obstbäumen gesäumte Frühstücksterrassen, Grillplätze und großzügige Pools — ideal für Gäste, die mit einer großen Familie zu Hause essen möchten. Der Apartmentmarkt liegt näher am Strand, in Anlagen mit Gemeinschaftspool — praktisch für Paare und kleine Familien. Fischrestaurants an Holzstegen geben dem Abend seinen Rhythmus; tagsüber bestimmen Windsurfschulen und die traditionellen Gözleme-Häuser am Ufer das Tempo. Gümbet ist zu Fuß erreichbar, Ortakent eine kurze Fahrt über die Küstenstraße.",
    longDescRu:
      "Битез — это спокойная бухта с мандариновыми садами, начинающаяся в шаге от шума Гюмбета. Берег известен виндсёрфингом и удобным для семей мелководьем, а в глубине прячутся виллы с садами и частными бассейнами. Большинство этих вилл отдельно стоящие и располагают террасами для завтрака среди фруктовых деревьев, зонами барбекю и просторными бассейнами — идеально для тех, кто хочет ужинать дома большой семьёй. Рынок апартаментов ближе к пляжу, в комплексах с общим бассейном — удобно для пар и небольших семей. Рыбные рестораны на деревянных причалах задают ритм вечеру; днём темп определяют школы виндсёрфинга и традиционные дома гёзлеме на берегу. До Гюмбета можно дойти пешком, до Ортакента — короткая поездка по прибрежной дороге.",
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
      de: [
        "Freistehende Gartenvillen mit privatem Pool im Landesinneren",
        "Windsurfen am Strand und flaches Familienbad",
        "Fischrestaurants an Holzstegen",
        "Zu Fuß nach Gümbet",
      ],
      ru: [
        "Отдельно стоящие виллы с садами и частными бассейнами в глубине",
        "Виндсёрфинг у пляжа и мелководье для семей",
        "Рыбные рестораны на деревянных причалах",
        "Пешая доступность до Гюмбета",
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
    shortDescDe:
      "Traditionelles Dorf und Gartenvillen hinter dem Strand von Yahşi.",
    shortDescRu:
      "Традиционная деревня и виллы с садами за пляжем Яхши.",
    longDescTr:
      "Ortakent, yarımadanın 1 kilometreyi bulan en uzun kumsalı Yahşi'yi sahiplenir; ancak villa seçenekleri açısından asıl ilginç olan plajın arkasındaki geleneksel köy dokusudur. Bu iç kısımda taş duvarlar, eski Bodrum mimarisi ve mandalina-zeytin ağaçlarıyla çevrelenmiş bahçeli villalar bulunur; çoğunluğu özel havuzlu, 3-5 yatak odalıdır ve sokak gürültüsünden tamamen uzaktır. Salı pazarı, Mustafa Paşa Kulesi ve sahil arasındaki yürüyüş yolu villa misafirlerinin günlük ritmini şekillendirir. Apart tarafında Yahşi plajı önündeki site daireleri öne çıkar — kahvaltıdan sonra terastan inip kumsala 30 saniyede ulaşmak isteyen aile için kusursuz. Bodrum merkezine 10 dakika, Bitez'e yürüme mesafesi, Gümbet'e sahil yolu olduğundan kalkıştan dönüşe çok pratik bir merkez sayılır.",
    longDescEn:
      "Ortakent claims Yahşi, the peninsula's longest sandy beach at nearly a kilometre — but the more interesting villa story sits in the traditional village right behind it. Stone walls, old Bodrum architecture and gardens lined with tangerine and olive trees frame villas that are mostly private-pool, 3 to 5 bedrooms, and entirely removed from street noise. The Tuesday market, the Mustafa Paşa Tower and the walking path to the beach shape the daily rhythm. The apartment side fronts Yahşi beach in shoreline complexes — perfect when the family wants to walk down for a swim in 30 seconds. Ten minutes to Bodrum centre, a walk to Bitez and a short coast-road drive to Gümbet make this a practical base.",
    longDescDe:
      "Ortakent beansprucht Yahşi, mit fast einem Kilometer den längsten Sandstrand der Halbinsel — doch die interessantere Villengeschichte liegt im traditionellen Dorf gleich dahinter. Steinmauern, alte Bodrum-Architektur und mit Mandarinen- und Olivenbäumen gesäumte Gärten umrahmen Villen, die meist über einen privaten Pool und drei bis fünf Schlafzimmer verfügen und dem Straßenlärm völlig entrückt sind. Der Dienstagsmarkt, der Mustafa-Paşa-Turm und der Fußweg zum Strand prägen den Tagesrhythmus. Die Apartments liegen direkt am Strand von Yahşi in Anlagen am Ufer — ideal, wenn die Familie in 30 Sekunden zum Baden hinuntergehen möchte. Zehn Minuten ins Zentrum von Bodrum, ein Spaziergang nach Bitez und eine kurze Fahrt über die Küstenstraße nach Gümbet machen den Ort zu einem praktischen Ausgangspunkt.",
    longDescRu:
      "Ортакенту принадлежит Яхши — самый длинный песчаный пляж полуострова, почти километр, — но более интересная история вилл разворачивается в традиционной деревне прямо за ним. Каменные стены, старая архитектура Бодрума и сады, обрамлённые мандариновыми и оливковыми деревьями, окружают виллы, в большинстве своём с частным бассейном, тремя-пятью спальнями и полностью укрытые от уличного шума. Вторничный рынок, башня Мустафы-паши и пешеходная тропа к пляжу задают ритм дня. Апартаменты выходят к пляжу Яхши в прибрежных комплексах — идеально, когда семья хочет спуститься искупаться за 30 секунд. Десять минут до центра Бодрума, пешком до Битеза и короткая поездка по прибрежной дороге до Гюмбета делают это место удобной базой.",
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
      de: [
        "Traditionelle Gartenvillen mit Steinmauern im Dorf",
        "Apartments direkt am Strand von Yahşi",
        "Dienstagsmarkt und lokale Erzeuger",
        "10 Minuten mit dem Auto ins Zentrum von Bodrum",
      ],
      ru: [
        "Традиционные виллы с садами за каменными стенами в деревне",
        "Апартаменты у самого пляжа Яхши",
        "Вторничный рынок и местные производители",
        "10 минут на машине до центра Бодрума",
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
    shortDescDe:
      "Ruhige Bucht mit Hangvillen und Blick auf das Meer.",
    shortDescRu:
      "Тихая бухта с виллами на склоне и видом на море.",
    longDescTr:
      "Gündoğan, Yalıkavak ile Türkbükü arasında saklı kalmış sakin bir koydur; lüksü gösterişten uzak, dingin bir biçimde yaşamak isteyenlerin tercihidir. Yamaçtaki villalar denize cepheli, ferah teraslı ve çoğunlukla özel havuzludur; küçük guruplara da uygun 3 odalı seçenekler de bulunur. Sahili çakıllı ve sezon sonunda bile yüzülebilir biçimde sakindir; Cennet Adası'na yapılan günlük tekne çıkışları bölgenin imzasıdır. Akşam yemeği için sahildeki birkaç Akdeniz mutfağı restoranı yeterli olur; daha hareketli bir gece için Yalıkavak'a 5 dakika araba mesafesindedir. Apart tarafı burada azdır ve genelde yamaç yönlü, deniz manzaralı küçük daireler şeklindedir. Aile, uzun konaklayan emekli çift ve yavaş tatil arayan misafirler için doğru adres.",
    longDescEn:
      "Gündoğan is the calm cove hidden between Yalıkavak and Türkbükü — a choice for guests who want luxury without spectacle. The hillside villas face the sea with generous terraces, mostly with private pools; smaller 3-bedroom options suit couples and tight groups. The pebble shoreline stays calm enough for swimming into the late season; day trips to Paradise Island define the area. A handful of seafront Aegean restaurants cover the evenings; for more energy, Yalıkavak is a 5-minute drive away. The apartment market is small here, mostly hillside studios and one-bedrooms with sea views. The right address for families, long-stay couples and slow-travel guests.",
    longDescDe:
      "Gündoğan ist die ruhige Bucht, die sich zwischen Yalıkavak und Türkbükü verbirgt — eine Wahl für Gäste, die das Feine ohne Schaustellung suchen. Die Hangvillen sind mit großzügigen Terrassen zum Meer gewandt, überwiegend mit privatem Pool; kleinere Häuser mit drei Schlafzimmern eignen sich für Paare und kleine Gruppen. Das Kieselufer bleibt ruhig genug zum Schwimmen bis in den Spätsommer; Tagesausflüge zur Paradiesinsel prägen die Gegend. Eine Handvoll ägäischer Restaurants am Meer deckt die Abende ab; wer mehr Leben sucht, ist in fünf Autominuten in Yalıkavak. Der Apartmentmarkt ist hier klein, meist Studios und Ein-Zimmer-Wohnungen am Hang mit Meerblick. Die richtige Adresse für Familien, Paare mit langem Aufenthalt und Gäste, die Ruhe schätzen.",
    longDescRu:
      "Гёндоган — тихая бухта, укрытая между Яликаваком и Тюркбюкю, выбор для гостей, которым нужна утончённость без показного блеска. Виллы на склоне обращены к морю просторными террасами, большинство с частным бассейном; небольшие варианты с тремя спальнями подходят парам и маленьким компаниям. Галечный берег остаётся достаточно спокойным для купания до конца сезона; поездки на Райский остров определяют облик района. Несколько эгейских ресторанов у моря закрывают вечера; за большим оживлением — пять минут на машине до Яликавака. Рынок апартаментов здесь невелик, в основном студии и однокомнатные на склоне с видом на море. Верный адрес для семей, пар с долгим пребыванием и любителей неспешного отдыха.",
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
      de: [
        "Villen mit privatem Pool und Meerblick am Hang",
        "Windgeschützte, ruhige Bucht",
        "Bootsausflüge zur Paradiesinsel",
        "5 Autominuten nach Yalıkavak",
      ],
      ru: [
        "Виллы с частным бассейном и видом на море на склоне",
        "Защищённая от ветра тихая бухта",
        "Лодочные прогулки на Райский остров",
        "5 минут на машине до Яликавака",
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
    shortDescDe:
      "Die dem Flughafen nächste Bucht mit ruhigen Villen im Resort-Stil.",
    shortDescRu:
      "Ближайшая к аэропорту бухта со спокойными виллами в стиле резорта.",
    longDescTr:
      "Torba, Milas-Bodrum Havalimanı'na sadece 25 dakika mesafesiyle iniş sonrası en hızlı dinlenme adresi sayılır. Kuzey sahildedir, sığ ve sakin sularıyla çocuklu aileler için son derece güvenlidir. Villalar burada genellikle resort hattının arkasında, müstakil ve havuzlu yapılardadır; bahçeleri geniş, akşamları yıldız izlemeye uygun teraslıdır. Apart tarafında modern site daireleri ön plandadır; çoğunlukla site içi havuzlu ve havalimanı misafirleri için 'inip dinlenme' düşüncesiyle tasarlanmıştır. Gece eğlencesi villada veya resort içindedir; daha hareketli bir akşam için Bodrum merkezi 15 dakika sürer. Çift ya da geniş aile için kalabalıktan kaçınmak isteyenlerin doğru tercihidir.",
    longDescEn:
      "Torba sits just 25 minutes from Milas-Bodrum Airport — the fastest 'land and rest' address on the peninsula. On the north shore, with calm shallow water, it's exceptionally safe for families with children. The villa market here mostly takes a detached, private-pool form behind the resort row, with wide gardens and terraces well-suited to star-watching evenings. The apartment side leans modern, with shared pools and a build philosophy of 'land, settle, switch off'. Evening life happens at the villa or inside the resorts; for more energy, Bodrum centre is a 15-minute drive. The right choice for couples or large families who want to avoid the peak-day crowd.",
    longDescDe:
      "Torba liegt nur 25 Minuten vom Flughafen Milas-Bodrum entfernt — die schnellste Adresse der Halbinsel, um anzukommen und zur Ruhe zu kommen. An der Nordküste mit ruhigem, flachem Wasser ist die Bucht für Familien mit Kindern außerordentlich sicher. Die Villen sind hier überwiegend freistehend mit privatem Pool, hinter der Resortzeile gelegen, mit weiten Gärten und Terrassen, die sich gut für Abende unter dem Sternenhimmel eignen. Die Apartments sind eher modern, mit Gemeinschaftspool und der Bauphilosophie „ankommen, einrichten, abschalten“. Das Abendleben findet in der Villa oder in den Resorts statt; wer mehr Leben sucht, ist in 15 Autominuten im Zentrum von Bodrum. Die richtige Wahl für Paare oder große Familien, die dem Trubel der Hochsaison entgehen möchten.",
    longDescRu:
      "Торба находится всего в 25 минутах от аэропорта Милас-Бодрум — самый быстрый адрес на полуострове, чтобы приземлиться и отдохнуть. На северном берегу со спокойной мелкой водой бухта исключительно безопасна для семей с детьми. Виллы здесь в основном отдельно стоящие, с частным бассейном, за рядом резортов, с просторными садами и террасами, удобными для вечеров под звёздами. Апартаменты тяготеют к современному стилю, с общим бассейном и философией «приехать, обустроиться, отключиться». Вечерняя жизнь проходит на вилле или внутри резортов; за большим оживлением — 15 минут на машине до центра Бодрума. Верный выбор для пар или больших семей, желающих избежать толпы в разгар сезона.",
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
      de: [
        "25 Minuten vom Flughafen",
        "Freistehende Villen mit privatem Pool hinter der Resortzeile",
        "Flaches, ruhiges, sicheres Meer",
        "15 Autominuten ins Zentrum von Bodrum",
      ],
      ru: [
        "25 минут от аэропорта",
        "Отдельно стоящие виллы с частным бассейном за рядом резортов",
        "Мелкое, спокойное, безопасное море",
        "15 минут на машине до центра Бодрума",
      ],
    },
    nearby: ["gundogan", "yalikavak", "turkbuku"],
    lat: 37.0859,
    lng: 27.4406,
    seo: {
      h1: {
        tr: "Torba Villa Kiralama — Bodrum'a Yakın Sakin Sahil",
        en: "Torba Villa Rental — A Quiet Shore Close to Bodrum",
        de: "Villa mieten in Torba — ein ruhiger Strand nahe Bodrum",
        ru: "Аренда виллы в Торбе — тихий берег рядом с Бодрумом",
      },
      priceRange: "1500-4000 TL / gece",
      sections: {
        tr: [
          {
            heading: "Torba'nın Atmosferi: Sessiz Bir Geliş",
            body: "Milas-Bodrum Havalimanı'ndan yarım saatlik bir araç yolculuğunun ardından, Torba bambaşka bir tempoyla karşılar. Kuzey yamaçtaki taş duvarlı villaların önünden geçen tek bir sahil yolu, koyun bütün ritmini şekillendirir. Mimari, beyaz badanalı modern hatlar ile eski Bodrum taş işçiliğinin uzlaştığı bir orta yolda durur; villaların büyük bölümü tek katlı, geniş bir teras üzerine yayılır. Bahçeler defne, biberiye ve eski zeytin ağaçlarıyla çevrilidir. Geceleri, koyun karşı yamacındaki köy ışıkları dışında neredeyse hiçbir ışık kalmaz.",
          },
          {
            heading: "Misafir Profili",
            body: "Torba, ışıltıdan ziyade dinginlik arayan çiftlerin, küçük yaşlardaki çocuklarıyla yorulmadan tatil yapmak isteyen ailelerin ve emekliliği boyunca aynı koya yıllarca dönen uzun konaklayan misafirlerin sevdiği bir adrestir. Sığ ve sakin deniz, çocuklu aileler için belirleyici bir avantajdır. Kalabalık beach club kültürünün hâkim olduğu Türkbükü'ne 10, butik marina hareketliliğinin görüldüğü Yalıkavak'a 20 dakika mesafede olması; misafirin günü kendi temposunda kuracağı, akşamın hareketini istediğinde başka bir koya bırakabileceği bir denge sunar.",
          },
          {
            heading: "Bir Gün, Bir Akşam: Torba'da Aktiviteler",
            body: "Sabah, villanın havuzunda kısa bir yüzme. Ardından kahvaltı terasında, açık deniz manzarasıyla — meyve ve mevsim ekmeği yerel bir kahvaltıcıdan günlük olarak teslim alınabilir. Öğleden önce sahildeki çakıllı kıyıya bir yürüyüş. Öğleden sonra, marinadan kalkacak özel bir tekneyle Türkbükü ve Gündoğan koylarına uzanan yarım günlük bir gezi planlanabilir. Akşam yemeği için iki seçenek vardır: villada özel bir şef ya da koyun bir ucundaki taş duvarlı meyhanenin ızgara balığı. Geceleri terasta, eski yıldızları görmek için yeterince ışıksız bir karanlık.",
          },
          {
            heading: "Torba'da Villa Profili",
            body: "Bölgenin tipik villası 4-6 misafir kapasitesinde, özel havuzlu, 250-450 metrekare arasında ve denize cepheli bir teras barındırır. Sahile çoğunlukla araba veya kısa bir yürüyüş; en donanımlı villaların özel iskele kullanım hakkı vardır. Yüksek sezonda (Temmuz-Ağustos) fiyatlar 2500-4000 TL/gece bandında dolaşır; Mayıs-Haziran ve Eylül-Ekim aralığında 1500-2500 TL'ye iner. Konsiyerj ekibimiz, ihtiyaç duyduğunuz takdirde havalimanından villaya kadar transferi ve karşılama servisini birlikte planlar.",
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
        de: [
          {
            heading: "Die Atmosphäre von Torba: eine ruhige Ankunft",
            body: "Eine halbstündige Fahrt vom Flughafen Milas-Bodrum öffnet ein ganz anderes Tempo. Eine einzige Küstenstraße, die an den steingemauerten Villen des Nordhangs vorbeiführt, trägt den gesamten Rhythmus der Bucht. Die Architektur bewegt sich zwischen der weiß getünchten Moderne des neuen Bodrum und der Steinhandwerkskunst des alten; die meisten Villen sind eingeschossig und über eine großzügige Terrasse angelegt. Die Gärten werden von Lorbeer, Rosmarin und alten Olivenbäumen gerahmt. Nachts bleibt kaum ein Licht außer dem des Dorfes auf der anderen Seite der Bucht.",
          },
          {
            heading: "Gästeprofil",
            body: "Torba wird von Paaren gewählt, die Ruhe dem Spektakel vorziehen, von Familien mit kleinen Kindern, die einen Aufenthalt ohne Anstrengung wünschen, und von Gästen mit langem Aufenthalt, die Jahr für Jahr in dieselbe Bucht zurückkehren. Das flache, ruhige Meer ist ein entscheidender Vorteil für Familien. Zehn Minuten zur Beachclub-Zeile von Türkbükü und zwanzig zur Marina von Yalıkavak — in Torba bestimmen Sie Ihr eigenes Tagestempo und leihen sich die Energie einer anderen Bucht nur dann, wenn Sie möchten.",
          },
          {
            heading: "Ein Tag, ein Abend: Aktivitäten in Torba",
            body: "Ein kurzes Bad im Pool der Villa. Frühstück auf der Terrasse mit Blick aufs offene Meer, Obst und saisonales Brot jeden Morgen vom örtlichen Bäcker. Ein Spaziergang am Kieselufer vor dem Mittag. Am Nachmittag ein halbtägiger privater Bootsausflug von der Marina zu den Buchten von Türkbükü und Gündoğan. Zum Abendessen zwei Möglichkeiten: ein privater Koch in der Villa oder gegrillter Fisch in der steinernen Meyhane am Rand der Bucht. Nachts ein Himmel, der dunkel genug ist, um von der Terrasse aus alte Sterne zu sehen.",
          },
          {
            heading: "Villenprofil in Torba",
            body: "Die typische Villa beherbergt hier vier bis sechs Gäste, hat einen privaten Pool, liegt zwischen 250 und 450 Quadratmetern und öffnet sich zu einer zum Meer gewandten Terrasse. Der Strand ist meist eine kurze Fahrt oder ein kleiner Spaziergang entfernt; die am besten ausgestatteten Villen verfügen über einen eigenen Steg. In der Hochsaison (Juli-August) liegen die Preise bei 2.500-4.000 TL pro Nacht; von Mai bis Juni und September bis Oktober sinken sie auf 1.500-2.500 TL. Auf Wunsch organisiert unser Concierge den Transfer vom Flughafen und einen Empfang in der Villa.",
          },
          {
            heading: "Gastronomie in Torba",
            body: "Torbas Ufer ist nicht überlaufen, daher sind die Restaurants wenige, aber sorgfältig gewählt. Die Fischer-Meyhane am östlichen Rand serviert den saisonalen Fang mit klassischen ägäischen Mezes. Eine kleine mediterrane Küche am westlichen Ende besticht mit hausgemachter Pasta und Gerichten auf Basis am Hang gesammelter Kräuter. Zwei Frühstücksadressen entlang der Bucht; Honig, Kaymak und Menemen gehören zu den besten der Halbinsel. Gäste, die lieber in der Villa speisen, organisieren mit einer einzigen Nachricht einen privaten Koch.",
          },
          {
            heading: "In der Nähe",
            body: "Die Hälfte unserer Torba-Gäste verbringt mindestens einen Abend an der Beachclub-Zeile in Türkbükü — Macakızı und die anderen bekannten Adressen sind zehn Autominuten entfernt. Der Kieselstrand von Gündoğan liegt zwölf Minuten für einen ruhigen Mittag entfernt; die Marina von Yalıkavak zwanzig für die feinen Restaurants mit Küchenchef. Das Zentrum von Bodrum ist fünfzehn Minuten entfernt; Burg, alter Markt und Marina sind von dort zu Fuß zu erreichen.",
          },
        ],
        ru: [
          {
            heading: "Атмосфера Торбы: тихое прибытие",
            body: "Получасовая поездка от аэропорта Милас-Бодрум открывает совсем иной темп. Единственная прибрежная дорога, проходящая мимо вилл с каменными стенами на северном склоне, несёт весь ритм бухты. Архитектура балансирует между белёным модернизмом нового Бодрума и каменным мастерством старого; большинство вилл одноэтажные, раскинувшиеся вокруг просторной террасы. Сады обрамлены лавром, розмарином и старыми оливами. Ночью почти не остаётся огней, кроме света деревни на другой стороне бухты.",
          },
          {
            heading: "Профиль гостя",
            body: "Торбу выбирают пары, предпочитающие тишину зрелищности, семьи с маленькими детьми, которым нужен отдых без усталости, и гости с долгим пребыванием, возвращающиеся в одну и ту же бухту год за годом. Мелкое, спокойное море — решающее преимущество для семей. Десять минут до ряда бич-клубов Тюркбюкю и двадцать до марины Яликавака — в Торбе вы задаёте собственный темп дня и заимствуете энергию другой бухты лишь тогда, когда захотите.",
          },
          {
            heading: "День и вечер: чем заняться в Торбе",
            body: "Короткое купание в бассейне виллы. Завтрак на террасе с видом на открытое море, фрукты и сезонный хлеб, доставляемые каждое утро от местного пекаря. Прогулка по галечному берегу до полудня. Днём — полудневная частная лодочная прогулка от марины к бухтам Тюркбюкю и Гёндогана. На ужин два варианта: частный повар на вилле или рыба на гриле в каменной мейхане на краю бухты. Ночью небо, достаточно тёмное, чтобы с террасы видеть старые звёзды.",
          },
          {
            heading: "Профиль виллы в Торбе",
            body: "Типичная вилла здесь рассчитана на четырёх-шести гостей, имеет частный бассейн, площадь от 250 до 450 квадратных метров и открывается на террасу, обращённую к морю. До пляжа чаще всего короткая поездка или небольшая прогулка; наиболее оснащённые виллы имеют собственный причал. В высокий сезон (июль-август) цены держатся в пределах 2 500-4 000 TL за ночь; с мая по июнь и с сентября по октябрь снижаются до 1 500-2 500 TL. При необходимости наш консьерж организует трансфер из аэропорта и встречу на вилле.",
          },
          {
            heading: "Гастрономия в Торбе",
            body: "Берег Торбы не переполнен, поэтому ресторанов немного, но они выверены. Рыбацкая мейхане у восточного края подаёт сезонный улов с классическими эгейскими мезе. Небольшая средиземноморская кухня у западного конца выделяется домашней пастой и блюдами на основе собранных на склоне трав. Два места для завтрака вдоль бухты; мёд, каймак и менемен — среди лучших на полуострове. Гостям, предпочитающим ужинать на вилле, частного повара организуют одним сообщением.",
          },
          {
            heading: "Поблизости",
            body: "Половина наших гостей в Торбе проводит хотя бы один вечер в ряду бич-клубов Тюркбюкю — Маджакызы и другие знаковые адреса в десяти минутах на машине. Галечный берег Гёндогана в двенадцати минутах для спокойного дня; марина Яликавака в двадцати ради утончённых ресторанов с шеф-поваром. До центра Бодрума пятнадцать минут; старая крепость, рынок и марина оттуда доступны пешком.",
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
            a: "Premium butik villalar yüksek sezonda 2.500-4.000 TL/gece; düşük sezonda 1.500-2.500 TL/gece bandında yer alır. En üst sınıf villalar bunun üzerine çıkar.",
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
        de: [
          {
            q: "Ist Torba für Familien mit kleinen Kindern geeignet?",
            a: "Ja. Die Bucht ist flach, vor Wind geschützt und ruhig — eine der sichersten Buchten der Halbinsel zum Baden mit kleinen Kindern.",
          },
          {
            q: "Welche Art von Villen gibt es in Torba?",
            a: "Überwiegend freistehende Häuser für 4 bis 6 Gäste mit privatem Pool, ein- oder zweigeschossig, 250-450 m². Einige verfügen über einen eigenen Steg oder liegen kurz zu Fuß von einem Steg entfernt.",
          },
          {
            q: "In welcher Preisspanne liegen die Villen in Torba?",
            a: "Kleine, gepflegte Villen liegen in der Hochsaison bei 2.500-4.000 TL pro Nacht und in der Nebensaison bei 1.500-2.500 TL. Die gehobensten Villen liegen darüber.",
          },
          {
            q: "Wie komme ich von Torba ins Zentrum von Bodrum?",
            a: "Etwa 15 Minuten mit dem Auto. Yalıkavak ist 20, Türkbükü 10 und Gündoğan 12 Minuten entfernt.",
          },
          {
            q: "Gibt es Nachtleben in Torba?",
            a: "Torba ist eine ruhige Bucht; das Abendleben findet auf der Villenterrasse, in einigen kleinen Meyhanes entlang der Bucht oder an der Beachclub-Zeile in Türkbükü statt, zehn Autominuten entfernt.",
          },
        ],
        ru: [
          {
            q: "Подходит ли Торба для семей с маленькими детьми?",
            a: "Да. Бухта мелкая, защищена от ветра и спокойна — одна из самых безопасных бухт полуострова для купания с маленькими детьми.",
          },
          {
            q: "Какие виллы есть в Торбе?",
            a: "Преимущественно отдельно стоящие дома на 4-6 гостей с частным бассейном, одно- или двухэтажные, 250-450 м². У некоторых есть собственный причал или короткая прогулка до него.",
          },
          {
            q: "В каком диапазоне цены на виллы в Торбе?",
            a: "Камерные виллы в высокий сезон стоят 2 500-4 000 TL за ночь, в низкий — 1 500-2 500 TL. Самые изысканные виллы стоят выше.",
          },
          {
            q: "Как добраться из Торбы до центра Бодрума?",
            a: "Около 15 минут на машине. До Яликавака 20, до Тюркбюкю 10, до Гёндогана 12 минут.",
          },
          {
            q: "Есть ли в Торбе ночная жизнь?",
            a: "Торба — тихая бухта; вечерняя жизнь проходит на террасе виллы, в нескольких небольших мейхане вдоль бухты или в ряду бич-клубов Тюркбюкю, в десяти минутах на машине.",
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
    shortDescDe:
      "Das Saint-Tropez von Bodrum — Beachclub-Kultur und eine Reihe feiner Villen.",
    shortDescRu:
      "Сен-Тропе Бодрума — культура бич-клубов и ряд изысканных вилл.",
    longDescTr:
      "Türkbükü, Bodrum'da lüks villa kavramının somut bir adres üzerinden okunduğu tek koydur. Macakızı'nın doğmasıyla birlikte 90'ların sonunda şekillenen iskele kültürü, bugün koyun batı tarafından doğusuna kadar uzanan bir beach club hattıyla devam eder. Tatil mevsiminin orta yerinde marinanın bir ucuna iniş yapan helikopter ve özel iskeleye yanaşan motoryatlar gündelik bir görüntüdür. Villaların büyük bölümü yamaca dizilmiş, geniş havuzlu ve denizi doğrudan gören yapılardır; iç mekanları çoğunlukla bir mimar imzasıyla şekillenmiştir. Misafir profili dünya markalarının yöneticilerinden, İstanbul ve Avrupa'nın yaratıcı kesimine uzanır.",
    longDescEn:
      "Türkbükü is the one cove where Bodrum's idea of luxury reads on a concrete address. The pier culture that began with the birth of Macakızı in the late nineties now continues as a beach club row running from the west to the east of the bay. Helicopters touching down at the marina edge and motoryachts pulling up at private piers are an ordinary mid-season sight. Most villas are stacked along the hillside with generous pools and direct sea views; interiors usually carry an architect's signature. The guest profile spans global-brand executives and the creative classes of Istanbul and Europe.",
    longDescDe:
      "Türkbükü ist die eine Bucht, in der sich die gehobene Vorstellung von Bodrum an einer konkreten Adresse ablesen lässt. Die Stegkultur, die Ende der neunziger Jahre mit der Entstehung von Macakızı begann, setzt sich heute als Beachclub-Zeile fort, die vom Westen bis in den Osten der Bucht reicht. Hubschrauber, die am Rand der Marina aufsetzen, und Motoryachten, die an privaten Stegen anlegen, sind mitten in der Saison ein gewohnter Anblick. Die meisten Villen reihen sich am Hang, mit großzügigen Pools und direktem Meerblick; ihre Innenräume tragen meist die Handschrift eines Architekten. Das Gästeprofil reicht von Führungskräften internationaler Marken bis zur kreativen Schicht Istanbuls und Europas.",
    longDescRu:
      "Тюркбюкю — та единственная бухта, где утончённое представление Бодрума читается по конкретному адресу. Культура причалов, начавшаяся в конце девяностых с появлением Маджакызы, сегодня продолжается рядом бич-клубов, тянущимся с запада на восток бухты. Вертолёты, садящиеся у края марины, и моторные яхты, причаливающие к частным пирсам, — обычная картина в разгар сезона. Большинство вилл выстроены вдоль склона, с просторными бассейнами и прямым видом на море; их интерьеры чаще всего несут авторский почерк архитектора. Профиль гостей охватывает руководителей мировых брендов и творческие круги Стамбула и Европы.",
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
      de: [
        "Macakızı und die Beachclub-Zeile",
        "Feine Hangvillen mit Meerblick",
        "Restaurants mit Küchenchef und eine Zeile kleiner Boutiquen",
        "Kurze Wege nach Yalıkavak und Gündoğan",
      ],
      ru: [
        "Маджакызы и ряд бич-клубов",
        "Изысканные виллы на склоне с видом на море",
        "Рестораны с шеф-поваром и ряд небольших бутиков",
        "Близко до Яликавака и Гёндогана",
      ],
    },
    nearby: ["golturkbuku", "gundogan", "yalikavak"],
    lat: 37.1131,
    lng: 27.3678,
    seo: {
      h1: {
        tr: "Türkbükü Villa Kiralama — Bodrum'un Saint-Tropez'i",
        en: "Türkbükü Villa Rental — Bodrum's Saint-Tropez",
        de: "Villa mieten in Türkbükü — das Saint-Tropez von Bodrum",
        ru: "Аренда виллы в Тюркбюкю — Сен-Тропе Бодрума",
      },
      priceRange: "2500-5000 TL / gece",
      sections: {
        tr: [
          {
            heading: "Türkbükü'nün Karakteri",
            body: "Bodrum'un en gösterişli adresi olduğu kadar, en olgun olanıdır. Sahil hattı boyunca uzanan ahşap iskeleler, koyu Akdeniz'in herhangi bir lüks adresinden ayırır; çoğu beach club kendi iskelesini, mutfağını ve müzik kürasyonunu kendisi yönetir. Yamaçta yer alan villaların büyük bölümü 1990 sonrasının yapılarıdır ve mimarlık ofisleriyle birlikte tasarlanmıştır. Beyaz ve gri kullanımı baskındır; bahçe planlaması zeytin, lavanta ve okaliptüs ile yapılır.",
          },
          {
            heading: "Misafir Profili: Kim Geliyor?",
            body: "Türkbükü'ne gelen misafir, lüksü aramaya gelmez; lüksü bilen ve onunla rahatlık içinde yaşamaya geliyor olarak gelir. Aileler için ölçek genelde 8-12 kişiliktir; bal ayı çiftleri 2-4 kişilik küçük ama bütünüyle özel havuzlu villaları tercih eder. Kurumsal gruplar, yıl içinde 2-3 küçük etkinliği bu adresten yapar. Ortalama konaklama 6-10 gündür ve misafirler genellikle sezonun aynı haftasını her yıl rezerve eder.",
          },
          {
            heading: "Beach Club Hayatı",
            body: "Macakızı, Bianca, Maçakızı, Tagomago ve diğer adresler koyun boyunca yayılır. Sabah 10'da kahvaltı, 13'te öğle yemeği, 18'de gün batımı kokteyli ve gece yarısına kadar süren bir DJ seti — beach club günü çoğunlukla bu ritmi izler. Rezervasyon Temmuz ve Ağustos için iki ay öncesinden alınmalıdır; konsiyerj ekibimiz, son anda doluluk halinde bile çoğu zaman bir saat içinde uygun bir masa ayarlar.",
          },
          {
            heading: "Türkbükü'nde Villa Profili",
            body: "Tipik Türkbükü villası 4-6 yatak odalı, 8-12 misafir kapasiteli, geniş bir özel havuzlu ve denize cepheli bir terasla şekillenir. Mutfaklar mimarisi gereği büyük ve özel şefe uygun donanıma sahiptir. En üst sınıf villalarda özel iskele, helikopter pisti veya doğrudan beach club geçişi olan villalar yer alır. Yüksek sezon (Temmuz-Ağustos) fiyatları 3.500-5.000 TL/gece bandında; sezon dışında 2.500-3.500 TL/gece civarındadır. En üst sınıf villalar bunun üzerine çıkar.",
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
        de: [
          {
            heading: "Der Charakter von Türkbükü",
            body: "Bodrums eindrucksvollste Adresse und zugleich die reifste. Die Holzstege entlang der Küste verleihen der Bucht eine Identität, die sie von jeder anderen gehobenen Adresse des Mittelmeers abhebt; jeder Beachclub führt seinen eigenen Steg, seine eigene Küche und seine eigene Musikauswahl. Die meisten Hangvillen stammen aus der Zeit nach 1990 und wurden von Architekturbüros gestaltet. Die Farbpalette setzt auf Weiß- und Grautöne; die Gärten arbeiten mit Olive, Lavendel und Eukalyptus.",
          },
          {
            heading: "Gästeprofil: Wer hierherkommt",
            body: "Gäste in Türkbükü kommen nicht auf der Suche nach Luxus; sie kommen vertraut mit ihm. Familiengruppen umfassen meist 8 bis 12 Personen; Hochzeitsreisende nehmen die kleineren, ganz privaten Villen für 2 bis 4 Personen. Firmengruppen veranstalten von dieser Adresse aus zwei oder drei kleinere Anlässe pro Jahr. Die durchschnittliche Aufenthaltsdauer beträgt 6 bis 10 Tage, oft dieselbe Woche, Jahr für Jahr.",
          },
          {
            heading: "Beachclub-Leben",
            body: "Macakızı, Bianca, Maçakızı, Tagomago und andere verteilen sich entlang der Bucht. Frühstück um 10, Mittagessen um 13, Sonnenuntergangscocktails um 18 Uhr und ein DJ-Set bis tief in die Nacht — so verläuft ein typischer Beachclub-Tag. Reservierungen für Juli und August sollten zwei Monate im Voraus erfolgen; unser Concierge öffnet in der Regel innerhalb einer Stunde einen Tisch, selbst wenn die Häuser ausgebucht sind.",
          },
          {
            heading: "Villenprofil in Türkbükü",
            body: "Eine typische Villa in Türkbükü hat 4 bis 6 Schlafzimmer, beherbergt 8 bis 12 Gäste, verfügt über einen großzügigen privaten Pool und eine zum Meer gewandte Terrasse. Die Küchen sind bewusst groß angelegt und für einen privaten Koch ausgestattet. Die gehobenste Kategorie bietet eigene Stege, Hubschrauberlandeplätze oder einen direkten Zugang zu einem Beachclub. In der Hochsaison (Juli-August) liegen die Preise bei 3.500-5.000 TL pro Nacht; in der Nebensaison bei 2.500-3.500 TL. Die gehobensten Villen liegen darüber.",
          },
          {
            heading: "Gastronomie: von der Küche des Chefs zur Meyhane",
            body: "Die Wahl des Restaurants in Türkbükü fällt nicht leicht, denn das Niveau ist hoch. Neben den Beachclub-Küchen liegen in den Gassen zwei oder drei kleine Restaurants mit Küchenchef, deren Menüs wöchentlich entworfen und mit dem Tagesfang vollendet werden. Für die klassische Bodrum-Meyhane genügen zwei Adressen auf den Holzstegen gegenüber von Macakızı — von Mezes bis zum frischen Fisch ist die Tradition hier noch lebendig.",
          },
          {
            heading: "In der Nähe und Tagesausflüge",
            body: "Göltürkbükü ist die natürliche andere Hälfte der Bucht — fünf Gehminuten. Gündoğan ist zwölf Minuten entfernt, die Marina von Yalıkavak fünfzehn. Knidos oder die Halbinsel Datça liegen innerhalb einer Tagestour mit dem Boot; unser Concierge plant für Villengäste private Motoryacht-Ausflüge samt Route. Für die Abende der Hochsaison ist eine Reservierung in einem Restaurant mit Küchenchef an der Marina von Yalıkavak eine kluge Wahl.",
          },
        ],
        ru: [
          {
            heading: "Характер Тюркбюкю",
            body: "Самый впечатляющий адрес Бодрума и одновременно самый зрелый. Деревянные причалы вдоль берега придают бухте облик, отличающий её от любого другого изысканного адреса Средиземноморья; каждый бич-клуб ведёт собственный причал, собственную кухню и собственную подборку музыки. Большинство вилл на склоне построены после 1990 года при участии архитектурных бюро. Палитра тяготеет к белым и серым тонам; сады решены оливой, лавандой и эвкалиптом.",
          },
          {
            heading: "Профиль гостя: кто сюда приезжает",
            body: "Гости Тюркбюкю приезжают не в поисках роскоши; они приезжают, уже зная её. Семейные группы обычно насчитывают от 8 до 12 человек; пары в медовый месяц выбирают небольшие, полностью обособленные виллы на 2-4 гостя. Корпоративные группы проводят с этого адреса два-три небольших события в год. Средняя продолжительность пребывания — 6-10 дней, часто одна и та же неделя из года в год.",
          },
          {
            heading: "Жизнь бич-клубов",
            body: "Маджакызы, Bianca, Maçakızı, Tagomago и другие тянутся вдоль бухты. Завтрак в 10, обед в 13, закатные коктейли в 18 и сет диджея до глубокой ночи — так проходит типичный день в бич-клубе. Бронировать на июль и август стоит за два месяца; наш консьерж обычно находит столик в течение часа даже при полной загрузке.",
          },
          {
            heading: "Профиль виллы в Тюркбюкю",
            body: "Типичная вилла в Тюркбюкю имеет 4-6 спален, рассчитана на 8-12 гостей, располагает просторным частным бассейном и террасой, обращённой к морю. Кухни намеренно сделаны большими и оснащены для частного повара. В высшую категорию входят виллы с собственным причалом, вертолётной площадкой или прямым выходом к бич-клубу. В высокий сезон (июль-август) цены составляют 3 500-5 000 TL за ночь; в межсезонье — 2 500-3 500 TL. Самые изысканные виллы стоят выше.",
          },
          {
            heading: "Гастрономия: от кухни шефа до мейхане",
            body: "Выбрать, где поужинать в Тюркбюкю, непросто, потому что планка высока. Помимо кухонь бич-клубов, в переулках расположены два-три небольших ресторана с шеф-поваром, чьи меню составляются еженедельно и завершаются дневным уловом. Ради классической мейхане Бодрума достаточно двух адресов на деревянных причалах напротив Маджакызы — от мезе до свежей рыбы традиция здесь всё ещё жива.",
          },
          {
            heading: "Поблизости и поездки на день",
            body: "Гёльтюркбюкю — естественная вторая половина бухты, пять минут пешком. Гёндоган в двенадцати минутах; марина Яликавака в пятнадцати. Книдос или полуостров Датча — в пределах однодневного перехода под парусом; наш консьерж планирует для гостей вилл прогулки на частной моторной яхте, включая маршрут. На вечера в разгар сезона разумно забронировать ресторан с шеф-поваром на марине Яликавака.",
          },
        ],
      },
      faq: {
        tr: [
          {
            q: "Türkbükü'nde villa fiyatları nedir?",
            a: "Yüksek sezonda (Temmuz-Ağustos) 3.500-5.000 TL/gece bandı standarttır; en üst sınıf villalar bunun üzerine çıkar. Sezon başı/sonu fiyatları 2.500-3.500 TL/gece civarında seyreder.",
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
        de: [
          {
            q: "Wie hoch sind die Villenpreise in Türkbükü?",
            a: "In der Hochsaison (Juli-August) gilt als Richtwert 3.500-5.000 TL pro Nacht; die gehobensten Villen liegen darüber. In der Nebensaison 2.500-3.500 TL.",
          },
          {
            q: "Kann ich eine Villa in der Nähe von Macakızı mieten?",
            a: "Ja. Ein beträchtlicher Teil der Hangvillen liegt in Gehweite zur Beachclub-Zeile. Unser Concierge übernimmt Clubreservierungen auf Wunsch.",
          },
          {
            q: "Ist Türkbükü für Familien mit kleinen Kindern geeignet?",
            a: "Das flache, ruhige Meer ist angenehm, doch die Abendkultur Türkbüküs ist auf Erwachsene ausgerichtet. Familien, die Ruhe suchen, bevorzugen Gündoğan oder Göltürkbükü.",
          },
          {
            q: "Ist die Anreise mit Hubschrauber oder Yacht möglich?",
            a: "Ja. Mehrere Villen in Türkbükü verfügen über einen eigenen Hubschrauberlandeplatz, und an einigen Stegen entlang der Bucht können Gästeyachten anlegen. Die Einzelheiten hängen von der Villa ab.",
          },
          {
            q: "Welche Restaurants mit Küchenchef empfehlen Sie?",
            a: "Die Auswahl wechselt mit der Eröffnungswoche der Saison; unser Concierge sendet zwei oder drei Empfehlungen passend zu Ihren Aufenthaltsdaten.",
          },
        ],
        ru: [
          {
            q: "Каковы цены на виллы в Тюркбюкю?",
            a: "В высокий сезон (июль-август) ориентир — 3 500-5 000 TL за ночь; самые изысканные виллы стоят выше. В межсезонье — 2 500-3 500 TL.",
          },
          {
            q: "Можно ли арендовать виллу рядом с Маджакызы?",
            a: "Да. Значительная часть вилл на склоне находится в пешей доступности от ряда бич-клубов. Наш консьерж берёт на себя бронирование клубов по запросу.",
          },
          {
            q: "Подходит ли Тюркбюкю для семей с маленькими детьми?",
            a: "Мелкое, спокойное море удобно, однако вечерняя культура Тюркбюкю ориентирована на взрослых. Семьи, ищущие тишины, предпочитают Гёндоган или Гёльтюркбюкю.",
          },
          {
            q: "Возможно ли прибытие на вертолёте или яхте?",
            a: "Да. У нескольких вилл в Тюркбюкю есть собственная вертолётная площадка, а у ряда причалов вдоль бухты могут швартоваться гостевые яхты. Детали зависят от виллы.",
          },
          {
            q: "Какие рестораны с шеф-поваром вы рекомендуете?",
            a: "Подборка меняется с неделей открытия сезона; наш консьерж пришлёт две-три рекомендации с учётом дат вашего пребывания.",
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
    shortDescDe:
      "Altes Fischerdorf und eine ruhige Westküste, von Künstlern bereichert.",
    shortDescRu:
      "Старая рыбацкая деревня и тихий западный берег, обжитый художниками.",
    longDescTr:
      "Gümüşlük, yarımadanın en batı ucunda, antik Mindos şehrinin üzerine kurulmuş eski bir balıkçı köyüdür. Sahildeki taş döşeli yol boyunca uzanan balıkçı restoranları, batık ada manzarası ve akustik gitarın hâlâ etkili olduğu gece müziği, koyun karakterini kuran üç sabit unsurdur. Mimari sade, beyaz ve alçaktır; yapılaşma kısıtlaması nedeniyle yeni villaların büyük bölümü köyün arka yamaçlarında, eski Karakaya köyüne uzanan yolda yer alır. Sahile cepheli villalar sınırlıdır ve nadir bulunur. Sanatçı stüdyoları, küçük bir klasik müzik festivali ve geleneksel zanaatkârlar köyün kimliğini tamamlar.",
    longDescEn:
      "Gümüşlük sits at the western tip of the peninsula, atop the ancient city of Myndos. The fishermen's restaurants along the stone-paved shore, the view of the submerged island and a still-audible acoustic-guitar evening culture form the three constants of the bay. The architecture is low, white and modest; building restrictions push most new villas onto the back slopes, on the road to old Karakaya. Seafront villas are limited and rare. Artist studios, a small classical music festival and a community of traditional artisans complete the village's identity.",
    longDescDe:
      "Gümüşlük liegt an der Westspitze der Halbinsel, über der antiken Stadt Myndos. Die Fischrestaurants entlang des steingepflasterten Ufers, der Blick auf die versunkene Insel und eine noch hörbare Abendkultur mit akustischer Gitarre bilden die drei Konstanten der Bucht. Die Architektur ist niedrig, weiß und schlicht; Bauauflagen drängen die meisten neuen Villen an die hinteren Hänge, an die Straße zum alten Karakaya. Villen direkt am Meer sind begrenzt und selten. Künstlerateliers, ein kleines Festival für klassische Musik und eine Gemeinschaft traditioneller Handwerker runden die Identität des Dorfes ab.",
    longDescRu:
      "Гюмюшлюк расположен на западной оконечности полуострова, над античным городом Миндос. Рыбные рестораны вдоль мощённого камнем берега, вид на затонувший остров и всё ещё слышная вечерняя культура акустической гитары образуют три постоянства бухты. Архитектура низкая, белая и сдержанная; ограничения на застройку оттесняют большинство новых вилл на задние склоны, к дороге на старый Каракая. Виллы у самого моря немногочисленны и редки. Мастерские художников, небольшой фестиваль классической музыки и сообщество традиционных ремесленников дополняют облик деревни.",
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
      de: [
        "Fischrestaurants am steingepflasterten Ufer",
        "Sonnenuntergangsblick auf die versunkene antike Insel",
        "Kleine Villen an den hinteren Hängen",
        "Festival für klassische Musik und eine Kunstszene",
      ],
      ru: [
        "Рыбные рестораны на мощённом камнем берегу",
        "Закатный вид на затонувший античный остров",
        "Камерные виллы на задних склонах",
        "Фестиваль классической музыки и арт-среда",
      ],
    },
    nearby: ["yalikavak", "turgutreis"],
    lat: 37.0586,
    lng: 27.2342,
    seo: {
      h1: {
        tr: "Gümüşlük Villa Kiralama — Sakin Sanat Köyü",
        en: "Gümüşlük Villa Rental — A Quiet Village of Art",
        de: "Villa mieten in Gümüşlük — ein ruhiges Künstlerdorf",
        ru: "Аренда виллы в Гюмюшлюке — тихая деревня искусств",
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
            body: "Gümüşlük villaları genellikle 4-5 yatak odalı, özel havuzlu ve 180-350 metrekare civarında, arka yamaca yerleşmiş yapılardır. Bir kısmı eski Karakaya yoluna uzanan yamaçta, manzara terası ile birlikte gelir. Sahil cephesi nadirdir ve fiyatı yukarı çeker. Yüksek sezonda 2.500-3.500 TL/gece; sezon dışında 1.800-2.500 TL/gece bandı geçerlidir. Mahremiyet, Gümüşlük villa seçiminde her zaman ilk üç kriter arasındadır.",
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
        de: [
          {
            heading: "Die Atmosphäre von Gümüşlük",
            body: "In Gümüşlük misst sich die Zeit an der Sonne, die hinter der versunkenen Insel untergeht. Der steingepflasterte Uferweg ist auf beiden Seiten von Restaurants gesäumt, die fast ausschließlich Fisch servieren. Die Architektur ist bewusst eingeschossig — die Villen an den hinteren Hängen setzen die Tradition in Kalkanstrich und Naturstein fort. Nachts bleibt als einzige Bewegung das Spiel der Wellen und die akustischen Musiker in einigen Restaurants.",
          },
          {
            heading: "Für Gäste, die Ruhe suchen",
            body: "Gümüşlük ist die Adresse für Kunst, Literatur, gemächliches Reisen und längere Aufenthalte. Hochzeitsreisende schätzen die Nebensaison — Mai und September — am meisten, wenn der alte Rhythmus des Dorfes am reinsten ist. Auch Familien suchen hier die Ruhe: Villen mit Kinderpool und Wanderwege zum alten Karakaya runden den Tagesplan ab. Gäste, die sich von sozialen Medien oder Schaustellung leiten lassen, finden in Türkbükü oder Yalıkavak eine passendere Wahl.",
          },
          {
            heading: "Aktivitäten: die versunkene Insel, Kunst und das Meer",
            body: "Bei Niedrigwasser kann man zur kleinen Insel Tavşan Adası (Haseninsel) vor der Küste gehen; die Steine des antiken Hafens von Myndos sind beim Schwimmen unter der Wasseroberfläche zu sehen. Das Festival für klassische Musik findet von Juli bis August im alten Steinbruch statt; unser Concierge besorgt auf Wunsch Karten. Die Bucht ist zudem ein idealer Ausgangspunkt für eine Blaue Reise oder eine private Charterfahrt auf der Knidos-Route.",
          },
          {
            heading: "Villenprofil",
            body: "Villen in Gümüşlük haben in der Regel 4 bis 5 Schlafzimmer, einen privaten Pool, rund 180-350 m² und liegen an den hinteren Hängen. Einige steigen den Hang in Richtung des alten Karakaya hinauf und bieten eine Aussichtsterrasse. Objekte am Meer sind selten und heben das Preissegment. In der Hochsaison 2.500-3.500 TL pro Nacht; in der Nebensaison 1.800-2.500 TL. Privatsphäre gehört bei der Wahl einer Villa in Gümüşlük stets zu den drei wichtigsten Kriterien.",
          },
          {
            heading: "Gastronomie: Fisch am Ufer, Mittelmeer am Hang",
            body: "Nahezu alle Uferrestaurants stellen den Fisch in den Mittelpunkt — Oktopus, Wolfsbarsch, Dorade und der saisonale Fang. Klassische Mezes — Portulak, Queller und Tarama mit Bodrum-Mandarine — stehen auf jeder Karte. Im alten Karakaya arbeiten zwei mediterrane Küchen am Hang mit saisonalem Gemüse und lokalem Olivenöl. Für einen Abend in einem Fischlokal am Ufer empfiehlt unser Concierge die Adressen, die mit akustischer Musik öffnen.",
          },
          {
            heading: "In der Nähe",
            body: "Die Marina von Yalıkavak und ihre Abendkultur liegen zwanzig Autominuten entfernt — ein schöner Übergang für einen Sonnenuntergangscocktail nach einem langen Tag in Gümüşlük. Turgutreis ist fünfzehn Minuten entfernt, für den Samstagsmarkt oder die Fähre nach Kos. Das Zentrum von Bodrum etwa fünfunddreißig Minuten.",
          },
        ],
        ru: [
          {
            heading: "Атмосфера Гюмюшлюка",
            body: "В Гюмюшлюке время измеряется солнцем, заходящим за затонувший остров. Мощённая камнем набережная с обеих сторон обрамлена ресторанами, подающими почти исключительно рыбу. Архитектура намеренно одноэтажная — виллы на задних склонах продолжают традицию в белёном и натуральном камне. Ночью единственное движение — игра волн и акустические музыканты в нескольких ресторанах.",
          },
          {
            heading: "Для гостей, ищущих тишины",
            body: "Гюмюшлюк — адрес для искусства, литературы, неспешного путешествия и долгих визитов. Пары в медовый месяц ценят межсезонье — май и сентябрь — больше всего, когда старый ритм деревни наиболее чист. Семьи тоже выбирают здешнюю тишину: виллы с детским бассейном и пешеходные маршруты к старому Каракая дополняют распорядок дня. Гостям, которых ведут социальные сети или показной блеск, ближе Тюркбюкю или Яликавак.",
          },
          {
            heading: "Чем заняться: затонувший остров, искусство и море",
            body: "Во время отлива можно дойти до небольшого острова Тавшан-Адасы (Заячий остров) у берега; камни античной гавани Миндоса видны под водой во время купания. Фестиваль классической музыки проходит с июля по август в старой каменоломне; наш консьерж достанет билеты по запросу. Бухта также служит удобной отправной точкой для «Голубого круиза» или частного чартера по маршруту Книдоса.",
          },
          {
            heading: "Профиль виллы",
            body: "Виллы в Гюмюшлюке, как правило, имеют 4-5 спален, частный бассейн, площадь около 180-350 м² и расположены на задних склонах. Некоторые поднимаются по склону к старому Каракая и имеют террасу с видом. Объекты у моря редки и поднимают ценовой сегмент. В высокий сезон 2 500-3 500 TL за ночь; в межсезонье 1 800-2 500 TL. Уединённость при выборе виллы в Гюмюшлюке всегда среди трёх главных критериев.",
          },
          {
            heading: "Гастрономия: рыба у берега, Средиземноморье на склоне",
            body: "Почти все прибрежные рестораны строятся вокруг рыбы — осьминог, сибас, дорада и сезонный улов. Классические мезе — портулак, солерос и тарама с бодрумским мандарином — есть в каждом меню. В старом Каракая две средиземноморские кухни на склоне работают с сезонными овощами и местным оливковым маслом. Для вечера в рыбном заведении у берега наш консьерж посоветует адреса, открывающиеся под акустическую музыку.",
          },
          {
            heading: "Поблизости",
            body: "Марина Яликавака и её вечерняя культура в двадцати минутах на машине — приятный переход к закатному коктейлю после долгого дня в Гюмюшлюке. Тургутреис в пятнадцати, ради субботнего рынка или парома на Кос. До центра Бодрума около тридцати пяти минут.",
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
            a: "Yüksek sezonda 2.500-3.500 TL/gece; sezon dışında 1.800-2.500 TL/gece bandı geçerlidir. Sahile cepheli az sayıdaki villa en üst sınıfta yer alır.",
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
        de: [
          {
            q: "Haben die Villen in Gümüşlük einen Pool?",
            a: "Ja, die meisten kleinen Villen verfügen über einen privaten Pool. Auch einige Häuser am Meer mit gemeinschaftlichem Meereszugang gibt es.",
          },
          {
            q: "Wo lässt sich der Sonnenuntergang am besten beobachten?",
            a: "Von den Stegen der Uferrestaurants gegenüber der Haseninsel oder von der Westterrasse einer Villa am hinteren Hang; unser Concierge stimmt den Zeitpunkt ab.",
          },
          {
            q: "Wann findet das Festival für klassische Musik statt?",
            a: "In der Regel von Mitte Juli bis Anfang August; das Jahresprogramm wird im Mai bekannt gegeben. Unser Concierge übernimmt die Kartenreservierung.",
          },
          {
            q: "Wie hoch ist die Preisspanne für Villen?",
            a: "In der Hochsaison 2.500-3.500 TL pro Nacht; in der Nebensaison 1.800-2.500 TL. Die wenigen Villen am Meer liegen am oberen Ende.",
          },
          {
            q: "Ist Gümüşlük für Familien mit kleinen Kindern geeignet?",
            a: "Ja. Die Bucht ist ruhig, das Meer flach und die Gehwege familienfreundlich. Villen mit Kinderpool werden auf Wunsch ausgewählt.",
          },
        ],
        ru: [
          {
            q: "Есть ли у вилл в Гюмюшлюке бассейн?",
            a: "Да, большинство камерных вилл имеют частный бассейн. Есть также несколько домов у моря с общим выходом к воде.",
          },
          {
            q: "Где лучше всего наблюдать закат?",
            a: "С причалов прибрежных ресторанов напротив Заячьего острова или с западной террасы виллы на заднем склоне; наш консьерж подскажет время.",
          },
          {
            q: "Когда проходит фестиваль классической музыки?",
            a: "Обычно с середины июля до начала августа; годовая программа объявляется в мае. Наш консьерж берёт на себя бронирование билетов.",
          },
          {
            q: "Каков диапазон цен на виллы?",
            a: "В высокий сезон 2 500-3 500 TL за ночь; в межсезонье 1 800-2 500 TL. Немногочисленные виллы у моря находятся в верхней части диапазона.",
          },
          {
            q: "Подходит ли Гюмюшлюк для семей с маленькими детьми?",
            a: "Да. Бухта спокойна, море мелкое, а расстояния пешком удобны для семей. Виллы с детским бассейном подбираются по запросу.",
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
    shortDescDe:
      "Das ruhige Pendant zu Türkbükü — eine feine Küste mit Beachclub-Kultur.",
    shortDescRu:
      "Тихий двойник Тюркбюкю — камерный берег с культурой бич-клубов.",
    longDescTr:
      "Göltürkbükü, Türkbükü ile Gölköy'ün idari birleşmesinden doğan ve bugün Bodrum'un belki de en olgun butik tatil hattına ev sahipliği yapan koydur. Türkbükü tarafının uzantısı sayılan beach club hattı, Göltürkbükü'nde daha sakin bir yoğunlukla devam eder. Mimari Türkbükü ile benzerdir ama doku biraz daha minimaldir — beyaz, kumtaşı ve eski zeytin ağacı estetiği baskındır. Sahile cepheli butik oteller, küçük şef restoranları ve özel iskeleli villalar bölgenin omurgasını kurar.",
    longDescEn:
      "Göltürkbükü is the bay born from the merger of Türkbükü and Gölköy, and possibly Bodrum's most mature boutique-holiday corridor today. The beach club row that begins on the Türkbükü side carries on here at a quieter intensity. The architecture follows the same vocabulary but reads slightly more minimal — whites, sandstone and old olive trees set the palette. Seafront boutique hotels, small chef restaurants and villas with private jetties build the spine of the area.",
    longDescDe:
      "Göltürkbükü ist die Bucht, die aus dem Zusammenschluss von Türkbükü und Gölköy hervorging, und heute vielleicht der reifste gehobene Urlaubskorridor von Bodrum. Die Beachclub-Zeile, die auf der Seite von Türkbükü beginnt, setzt sich hier in geringerer Dichte fort. Die Architektur folgt demselben Vokabular, wirkt aber etwas zurückhaltender — Weißtöne, Sandstein und alte Olivenbäume prägen die Palette. Kleine Hotels am Meer, kleine Restaurants mit Küchenchef und Villen mit privatem Steg bilden das Rückgrat der Gegend.",
    longDescRu:
      "Гёльтюркбюкю — бухта, возникшая из слияния Тюркбюкю и Гёлькёя, и, пожалуй, сегодня самый зрелый утончённый курортный коридор Бодрума. Ряд бич-клубов, начинающийся со стороны Тюркбюкю, продолжается здесь с меньшей интенсивностью. Архитектура следует тому же языку, но читается чуть сдержаннее — белые тона, песчаник и старые оливы задают палитру. Небольшие отели у моря, камерные рестораны с шеф-поваром и виллы с собственным причалом образуют стержень этой местности.",
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
      de: [
        "Kleine Villen am Meer mit privatem Steg",
        "Eine ruhigere Beachclub-Kultur",
        "Restaurants mit Küchenchef und Kunstgalerien",
        "Zu Fuß nach Türkbükü und Gündoğan",
      ],
      ru: [
        "Камерные виллы у моря с собственным причалом",
        "Более спокойная культура бич-клубов",
        "Рестораны с шеф-поваром и художественные галереи",
        "Пешая доступность до Тюркбюкю и Гёндогана",
      ],
    },
    nearby: ["turkbuku", "gundogan", "torba"],
    lat: 37.121,
    lng: 27.3835,
    seo: {
      h1: {
        tr: "Göltürkbükü Villa Kiralama — Butik Sahil ve Beach Club Kültürü",
        en: "Göltürkbükü Villa Rental — Boutique Shore and Beach Club Culture",
        de: "Villa mieten in Göltürkbükü — feine Küste und Beachclub-Kultur",
        ru: "Аренда виллы в Гёльтюркбюкю — камерный берег и культура бич-клубов",
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
            body: "Tipik Göltürkbükü villası 4-6 yatak odalı, 8-12 misafir kapasiteli, sahile yakın ya da sahile cepheli, geniş havuzlu yapılardır. Mutfaklar özel şef için hazır donanımdadır. En üst sınıf villalar, özel iskele kullanımıyla beraber yat yanaşmasına izin verir. Yüksek sezonda 3.000-4.500 TL/gece; sezon dışında 2.200-3.000 TL/gece bandı geçerlidir.",
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
        de: [
          {
            heading: "Die gereifte Ruhe von Göltürkbükü",
            body: "Göltürkbükü bietet dieselbe Ausstattung wie Türkbükü, lebt aber in einem etwas langsameren Fluss. Das Ufer wird von einer Handvoll gereifter kleiner Hotels, Kunstgalerien und Stegrestaurants geprägt. Die Villen liegen meist nah am oder direkt am Ufer, mit großen Gärten und privaten Pools. Selbst in der belebtesten Nacht der Saison findet man an beiden Enden der Bucht ein ruhiges Abendessen. Das macht Göltürkbükü ideal für Erstbesucher gehobener Adressen ebenso wie für erfahrene Gäste, die Jahr für Jahr zurückkehren.",
          },
          {
            heading: "Gästeprofil: ein reifer Zugang zu Luxus für Erwachsene",
            body: "Für Gäste, die einen erwachsenen, ruhigen und zugleich hochwertigen Abend suchen, ist Göltürkbükü die natürliche Alternative zu Türkbükü. Hochzeitsreisende, kleine Gruppen (4-6 Personen) und Gäste eines zweiten Aufenthalts kehren oft an diese Adresse zurück. Auch Familien schätzen sie hoch — dank des flachen Meeres und der Möglichkeit eines privaten Stegs.",
          },
          {
            heading: "Aktivitäten: vom Steg zur Yachtcharter",
            body: "Ein beträchtlicher Teil der Villen verfügt über einen eigenen Steg; ein frühes Bad nach dem Kaffee gehört zu den schönsten Anfängen der Saison. Beachclub-Reservierungen (auch Macakızı) sind in Gehweite. Für Yachtchartern liegt die Marina von Yalıkavak fünfzehn Minuten entfernt; ein Tagesausflug mit einer privaten Motoryacht nach Knidos oder zur Insel Sedir ist ein häufiger Concierge-Plan.",
          },
          {
            heading: "Villenprofil",
            body: "Eine typische Villa in Göltürkbükü hat 4 bis 6 Schlafzimmer, beherbergt 8 bis 12 Gäste, liegt nah am oder direkt am Ufer und verfügt über einen großzügigen Pool. Die Küchen sind für einen privaten Koch ausgestattet. Die gehobenste Kategorie bietet Steganlagen mit Yachtliegeplatz. In der Hochsaison 3.000-4.500 TL pro Nacht; in der Nebensaison 2.200-3.000 TL.",
          },
          {
            heading: "Gastronomie",
            body: "Die Restaurants mit Küchenchef am Ufer arbeiten mit wöchentlich wechselnden Menüs; täglicher Fisch, saisonales Gemüse und lokales Olivenöl bilden die gemeinsame Grundlage. Die klassische Meyhane-Tradition lebt in zwei oder drei Adressen mit Hausmannskost in den Gassen fort. Für Abendessen in der Villa organisiert unser Concierge Koch und Bewirtung mit einer einzigen Nachricht.",
          },
          {
            heading: "In der Nähe",
            body: "Türkbükü, fünf Gehminuten. Gündoğan, zehn Minuten mit dem Auto. Die Marina von Yalıkavak, fünfzehn — ein leichter Ausflug für viele Abende. Torba zwölf und das Zentrum von Bodrum etwa zwanzig.",
          },
        ],
        ru: [
          {
            heading: "Зрелое спокойствие Гёльтюркбюкю",
            body: "Гёльтюркбюкю обладает тем же оснащением, что и Тюркбюкю, но живёт в чуть более медленном течении. Берег формируют несколько зрелых небольших отелей, художественных галерей и ресторанов на причалах. Виллы в основном расположены близко к берегу или у самой воды, с большими садами и частными бассейнами. Даже в самую оживлённую ночь сезона на любом конце бухты можно найти тихий ужин. Это делает Гёльтюркбюкю идеальным как для тех, кто впервые открывает для себя утончённые адреса, так и для опытных гостей, возвращающихся из года в год.",
          },
          {
            heading: "Профиль гостя: зрелый подход к роскоши для взрослых",
            body: "Для гостей, которым нужен взрослый, тихий и при этом качественный вечер, Гёльтюркбюкю — естественная альтернатива Тюркбюкю. Пары в медовый месяц, небольшие компании (4-6 человек) и гости второго визита часто возвращаются по этому адресу. Семьи тоже ставят его высоко — благодаря мелкому морю и возможности собственного причала.",
          },
          {
            heading: "Чем заняться: от причала до яхтенного чартера",
            body: "Значительная часть вилл располагает собственным причалом; раннее купание после кофе — одно из лучших начал сезона. Бронирование бич-клубов (включая Маджакызы) в пешей доступности. Для яхтенного чартера марина Яликавака в пятнадцати минутах; однодневная прогулка на частной моторной яхте к Книдосу или острову Седир — частый план консьержа.",
          },
          {
            heading: "Профиль виллы",
            body: "Типичная вилла в Гёльтюркбюкю имеет 4-6 спален, рассчитана на 8-12 гостей, расположена близко к берегу или у самой воды и располагает просторным бассейном. Кухни оснащены для частного повара. В высшую категорию входят виллы с причалом для швартовки яхт. В высокий сезон 3 000-4 500 TL за ночь; в межсезонье 2 200-3 000 TL.",
          },
          {
            heading: "Гастрономия",
            body: "Прибрежные рестораны с шеф-поваром работают по еженедельно обновляемому меню; дневная рыба, сезонные овощи и местное оливковое масло образуют общую основу. Классическая традиция мейхане живёт в двух-трёх адресах с домашней кухней в переулках. Для ужинов на вилле наш консьерж организует повара и угощение одним сообщением.",
          },
          {
            heading: "Поблизости",
            body: "Тюркбюкю — пять минут пешком. Гёндоган — десять минут на машине. Марина Яликавака — пятнадцать, лёгкий выезд на многие вечера. Торба двенадцать, а центр Бодрума около двадцати.",
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
            a: "Evet. En üst sınıf villaların önemli bir kısmı özel iskele kullanımına sahiptir. Detaylar villaya göre değişir.",
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
        de: [
          {
            q: "Was unterscheidet Göltürkbükü von Türkbükü?",
            a: "Göltürkbükü ist die etwas ruhigere, gehobenere Seite. Dieselbe Beachclub-Kultur lebt in geringerer Dichte; mehr Villen liegen am Meer und verfügen über einen privaten Steg.",
          },
          {
            q: "Gibt es Liegeplätze für Yachten?",
            a: "Ja. Ein beträchtlicher Teil der gehobeneren Villen verfügt über einen eigenen Steg. Die Einzelheiten hängen von der Villa ab.",
          },
          {
            q: "Wie hoch ist die Preisspanne für Villen?",
            a: "In der Hochsaison 3.000-4.500 TL pro Nacht; in der Nebensaison 2.200-3.000 TL.",
          },
          {
            q: "Ist Göltürkbükü für Familien mit kleinen Kindern geeignet?",
            a: "Ja. Die flache, ruhige Küste und die privaten Stege erleichtern einen Familienaufenthalt. Unser Concierge wählt Villen mit Kinderpool aus.",
          },
          {
            q: "Wie weit ist Macakızı entfernt?",
            a: "Ein 8 bis 15 Minuten langer Spaziergang, je nach Lage der Villa an der Bucht. Beachclub-Reservierungen übernimmt unser Concierge.",
          },
        ],
        ru: [
          {
            q: "Чем Гёльтюркбюкю отличается от Тюркбюкю?",
            a: "Гёльтюркбюкю — чуть более тихая и камерная сторона. Та же культура бич-клубов живёт с меньшей интенсивностью; больше вилл расположено у моря и имеет собственный причал.",
          },
          {
            q: "Есть ли места для швартовки яхт?",
            a: "Да. Значительная часть вилл более высокой категории располагает собственным причалом. Детали зависят от виллы.",
          },
          {
            q: "Каков диапазон цен на виллы?",
            a: "В высокий сезон 3 000-4 500 TL за ночь; в межсезонье 2 200-3 000 TL.",
          },
          {
            q: "Подходит ли Гёльтюркбюкю для семей с маленькими детьми?",
            a: "Да. Мелкий, спокойный берег и частные причалы облегчают семейное пребывание. Наш консьерж подберёт виллы с детским бассейном.",
          },
          {
            q: "Как далеко Маджакызы?",
            a: "8-15 минут пешком в зависимости от расположения виллы в бухте. Бронирование бич-клубов берёт на себя наш консьерж.",
          },
        ],
      },
    },
  },
];

export function getDistrict(slug: string): District | undefined {
  return districts.find((d) => d.slug === slug || d.urlSlug === slug);
}
