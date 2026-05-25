export interface GuestReview {
  id: string;
  author: string;
  city: string;
  rating: number;
  source: "Booking" | "Google" | "Airbnb";
  textTr: string;
  textEn: string;
  district: string;
  propertyType?: "apart" | "villa";
}

export const reviews: GuestReview[] = [
  {
    id: "rv-1",
    author: "Ceren D.",
    city: "İstanbul",
    rating: 5,
    source: "Google",
    textTr:
      "Yalıkavak'ta 5 odalı infinity havuzlu villayı 11 kişilik ailecek bir hafta tuttuk. Anahtar teslim öncesi villayı kişisel olarak gezdirdiler; hiçbir şey gözden kaçmadı. Akşamları havuz başında özel şef hizmetinden bayıldık.",
    textEn:
      "We rented the Yalıkavak 5-bedroom infinity-pool villa for a week with 11 family members. They walked us through it personally before key handover — nothing missed. The private chef service by the pool in the evenings was a highlight.",
    district: "Yalıkavak",
    propertyType: "villa",
  },
  {
    id: "rv-2",
    author: "Kaan B.",
    city: "Bursa",
    rating: 5,
    source: "Booking",
    textTr:
      "Bal ayımız için Turgutreis Akyarlar tarafındaki gün batımı villasını seçtik. Her akşam havuza inip günbatımını izlemek tatilin imzasıydı; ekip karşılamada bir şişe şampanya hazırlamıştı.",
    textEn:
      "We picked the Akyarlar sunset villa in Turgutreis for our honeymoon. Watching the sun drop into the pool every evening became the trip's signature; the team had a bottle of champagne waiting on arrival.",
    district: "Turgutreis",
    propertyType: "villa",
  },
  {
    id: "rv-3",
    author: "Aslı M.",
    city: "İzmir",
    rating: 5,
    source: "Google",
    textTr:
      "Ortakent köy içindeki taş bahçeli 5+1 villa, geniş ailemizle (10 kişi) tek bir çatı altında olmamızı sağladı. Mandalina ağaçlarının arasında kahvaltı, akşam şömine başında sohbet — köyde yaşamak gibi hissettirdi.",
    textEn:
      "The 5-bedroom stone-garden villa in the Ortakent old village gave us (10 of us) the chance to all stay under one roof. Breakfast among tangerine trees, evenings by the fireplace — it felt like living in the village.",
    district: "Ortakent",
    propertyType: "villa",
  },
  {
    id: "rv-4",
    author: "Sinem A.",
    city: "Ankara",
    rating: 5,
    source: "Booking",
    textTr:
      "Gümbet'te havuzlu site içindeki 1+1 apart pratik ve temiz. Form gönderdikten 20 dakikada cevap geldi, havalimanı transferini de aynı ekipten ayarlamak büyük rahatlıktı.",
    textEn:
      "The 1-bedroom apartment in the Gümbet pool complex was practical and clean. Reply came within 20 minutes of the form; arranging the airport transfer with the same team was a relief.",
    district: "Gümbet",
    propertyType: "apart",
  },
  {
    id: "rv-5",
    author: "Daniel R.",
    city: "Munich, DE",
    rating: 5,
    source: "Airbnb",
    textTr:
      "Yalıkavak eski köyündeki butik 1+1 daire bizim için Bodrum'un en güzel sürpriziydi. Bütün iletişim İngilizceydi, marina için yürüyüş 8 dakika sürdü, sabahları küçük meydandaki kahveci en iyi flat white'ı yaptı.",
    textEn:
      "The boutique 1-bedroom in the old village of Yalıkavak was our best Bodrum surprise. All communication in English, an 8-minute walk to the marina, and the café on the small square pulled the best flat white in the mornings.",
    district: "Yalıkavak",
    propertyType: "apart",
  },
  {
    id: "rv-6",
    author: "Burcu Ş.",
    city: "Eskişehir",
    rating: 5,
    source: "Booking",
    textTr:
      "Turgutreis sahil önündeki 2+1 dairenin balkonundan denizi izleyerek 7 gece geçirdik. Çocuklar için bebek beşiği önceden hazırdı, plajdaki şezlongları sabahları biz gidene kadar bekletmişlerdi.",
    textEn:
      "We spent 7 nights watching the sea from the balcony of the seafront 2-bedroom in Turgutreis. The baby crib was ready before we arrived; sunbeds on the beach were held for us each morning.",
    district: "Turgutreis",
    propertyType: "apart",
  },
  {
    id: "rv-7",
    author: "Onur K.",
    city: "İstanbul",
    rating: 5,
    source: "Google",
    textTr:
      "Yalıkavak Sandıma'daki 4+1 villayı iki arkadaş çifti olarak tuttuk. Havuz başında akşam yemeği, kısa bir tekne çıkışı ve marina yürüyüşü — bütün hafta kusursuz aktı.",
    textEn:
      "We rented the 4-bedroom villa in Yalıkavak's Sandıma with two friend couples. Pool-side dinners, a short boat trip and a marina walk — the whole week flowed perfectly.",
    district: "Yalıkavak",
    propertyType: "villa",
  },
  {
    id: "rv-8",
    author: "Eda T.",
    city: "Antalya",
    rating: 5,
    source: "Booking",
    textTr:
      "Bitez'de bahçe terası olan 2+1 apartın ferahlığı bize tam bir villa hissi yaşattı; çocuklar bahçede koşturdu, sahile yürüyerek inebildik. Ekibin WhatsApp yanıt hızı muhteşemdi.",
    textEn:
      "The 2-bedroom in Bitez with a garden terrace felt almost like a villa; the kids ran in the garden and we walked down to the beach. The WhatsApp response time was great.",
    district: "Bitez",
    propertyType: "apart",
  },
];
