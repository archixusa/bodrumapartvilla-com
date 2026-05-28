import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";

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
    locale === "tr" ? `${SITE_URL}/sss` : `${SITE_URL}/${locale}/sss`;
  return {
    title: t(
      "Sıkça Sorulan Sorular — Bodrumapartvilla",
      "Frequently Asked Questions — Bodrumapartvilla",
      "Häufig gestellte Fragen — Bodrumapartvilla",
      "Часто задаваемые вопросы — Bodrumapartvilla"
    ),
    description: t(
      "Bodrumapartvilla koleksiyonu, konsiyerj hizmetleri, misafir profili ve villa kabul süreçlerine ilişkin sıkça sorulan sorular.",
      "Frequently asked questions about the Bodrumapartvilla collection, concierge service, guest profile and how villas are admitted.",
      "Häufig gestellte Fragen zur Bodrumapartvilla-Kollektion, zum Concierge-Service, zum Gästeprofil und zur Aufnahme von Villen.",
      "Часто задаваемые вопросы о коллекции Bodrumapartvilla, услугах консьержа, профиле гостя и принципах включения вилл в коллекцию."
    ),
    alternates: { canonical: url },
  };
}

type Localized = { tr: string; en: string; de: string; ru: string };

function getItems(locale: string) {
  const pick = (o: Localized): string =>
    o[locale as "tr" | "en" | "de" | "ru"] ?? o.en;
  const items: { q: Localized; a: Localized }[] = [
    {
      q: {
        tr: "Villa seçim kriterleriniz nelerdir?",
        en: "What are your criteria for admitting a villa?",
        de: "Nach welchen Kriterien nehmen Sie eine Villa auf?",
        ru: "По каким критериям вы включаете виллу в коллекцию?",
      },
      a: {
        tr: "Koleksiyonumuzu kurarken yalnızca konum ve görsel çekiciliğe değil; mimari bütünlük, malzeme kalitesi, peyzaj olgunluğu, mahremiyet derecesi ve mülk sahibinin işletme disiplinine de bakarız. Her villa, yerinde görülmeden ve operasyon ekibimizce ayrı ayrı değerlendirilmeden kabul edilmez. Beğeni öznel olsa da süreç ölçülü ve tutarlıdır.",
        en: "We look beyond location and visual appeal to architectural integrity, material quality, the maturity of the landscape, the degree of privacy and the discipline with which the owner runs the property. No villa enters the collection without an on-site visit and an internal review by our operations team. Taste is personal, but the process is measured and consistent.",
        de: "Wir achten nicht nur auf Lage und äußeren Reiz, sondern auch auf architektonische Stimmigkeit, Materialqualität, die Reife der Gartenanlage, den Grad der Privatsphäre und die Sorgfalt, mit der die Eigentümer das Anwesen führen. Keine Villa wird ohne einen Besuch vor Ort und eine interne Prüfung durch unser Betriebsteam aufgenommen. Geschmack ist persönlich, doch das Verfahren bleibt maßvoll und beständig.",
        ru: "Мы смотрим не только на расположение и внешнюю привлекательность, но и на цельность архитектуры, качество материалов, зрелость сада, степень уединённости и дисциплину, с которой владелец ведёт дом. Ни одна вилла не входит в коллекцию без визита на место и внутренней оценки нашей операционной командой. Вкус субъективен, но процесс остаётся выверенным и последовательным.",
      },
    },
    {
      q: {
        tr: "Konsiyerj hizmeti ne kapsar?",
        en: "What does the concierge service cover?",
        de: "Was umfasst der Concierge-Service?",
        ru: "Что входит в услуги консьержа?",
      },
      a: {
        tr: "Konsiyerj ekibimiz; ön görüşme, villa eşleştirmesi, müsaitlik teyidi, özel taleplerin koordinasyonu, varış-ayrılış akışı ve konaklama boyunca süren günlük iletişimi kapsar. Talep gelmediği sürece misafire müdahale edilmez; ihtiyaç doğduğunda ise tek bir kanaldan, tutarlı bir muhatap üzerinden çözüm aranır.",
        en: "The concierge handles initial conversation, villa matching, availability confirmation, the coordination of particular requests, arrival and departure rhythm and day-to-day communication throughout the stay. We do not interfere unless asked; when needed, a single point of contact carries the question through to a quiet resolution.",
        de: "Der Concierge übernimmt das erste Gespräch, die Auswahl der passenden Villa, die Bestätigung der Verfügbarkeit, die Abstimmung besonderer Wünsche, den Ablauf von An- und Abreise sowie die tägliche Kommunikation während des Aufenthalts. Wir greifen nur ein, wenn Sie es wünschen; bei Bedarf führt ein einziger Ansprechpartner das Anliegen ruhig zu einer Lösung.",
        ru: "Консьерж ведёт первичную беседу, подбор виллы, подтверждение наличия, согласование особых пожеланий, ритм приезда и отъезда, а также повседневное общение на протяжении всего пребывания. Мы не вмешиваемся без просьбы; при необходимости единый контактный человек спокойно доводит вопрос до решения.",
      },
    },
    {
      q: {
        tr: "Özel istekleri nasıl iletebilirim?",
        en: "How do I share particular requests?",
        de: "Wie teile ich besondere Wünsche mit?",
        ru: "Как сообщить об особых пожеланиях?",
      },
      a: {
        tr: "Konaklama talebi formunuzda ya da konsiyerj görüşmesinin herhangi bir aşamasında özel isteklerinizi yazılı olarak paylaşabilirsiniz. Pazar günü kahvaltısı, doğum günü düzenlemesi, çocuklara özel donanım, diyet hassasiyeti gibi her ayrıntı ayrı bir not olarak kayda alınır ve villa ekibiyle önceden eşgüdüm hâline getirilir.",
        en: "Requests can be written in the enquiry form or at any stage of the conversation with the concierge. A Sunday breakfast, a birthday set-up, a special arrangement for children or a dietary preference is kept as a separate note and coordinated with the villa team in advance.",
        de: "Ihre Wünsche können Sie im Anfrageformular oder zu jedem Zeitpunkt im Gespräch mit dem Concierge schriftlich mitteilen. Ein Sonntagsfrühstück, eine Geburtstagsdekoration, eine besondere Ausstattung für Kinder oder eine Ernährungsvorliebe wird als eigene Notiz festgehalten und vorab mit dem Villa-Team abgestimmt.",
        ru: "Свои пожелания вы можете изложить в форме запроса или на любом этапе беседы с консьержем. Воскресный завтрак, оформление ко дню рождения, особые удобства для детей или предпочтения в питании фиксируются отдельной заметкой и заранее согласуются с командой виллы.",
      },
    },
    {
      q: {
        tr: "Misafir profili kontrolü yapılıyor mu?",
        en: "Do you screen guest profiles?",
        de: "Prüfen Sie das Profil der Gäste?",
        ru: "Проверяете ли вы профиль гостей?",
      },
      a: {
        tr: "Evet. Koleksiyonumuzdaki villalar, mülk sahipleriyle paylaştığımız emanet ilişkisinin doğal bir parçası olarak misafir profili değerlendirmesine tabidir. Bu değerlendirme; rezervasyon talebinin amacı, konaklayan grup yapısı ve geçmiş referanslar gözetilerek yapılır. Amacı reddetmek değil, doğru villayı doğru misafirle eşleştirmektir.",
        en: "We do. The villas in our collection are part of a trust relationship with their owners, and a profile review is a natural part of that relationship. We consider the intent of the stay, the composition of the group and references where available. The aim is not to refuse, but to match the right villa with the right guest.",
        de: "Ja. Die Villen unserer Kollektion stehen in einem Vertrauensverhältnis zu ihren Eigentümern, und eine Profilprüfung gehört selbstverständlich dazu. Wir berücksichtigen den Zweck des Aufenthalts, die Zusammensetzung der Gruppe und, sofern vorhanden, Referenzen. Das Ziel ist nicht, abzulehnen, sondern die richtige Villa mit dem richtigen Gast zusammenzuführen.",
        ru: "Да. Виллы нашей коллекции связаны с владельцами отношениями доверия, и оценка профиля гостя — естественная их часть. Мы учитываем цель пребывания, состав группы и, по возможности, рекомендации. Цель не в отказе, а в том, чтобы соединить нужную виллу с нужным гостем.",
      },
    },
    {
      q: {
        tr: "Minimum konaklama süresi var mı?",
        en: "Is there a minimum-stay rule?",
        de: "Gibt es eine Mindestaufenthaltsdauer?",
        ru: "Есть ли минимальный срок проживания?",
      },
      a: {
        tr: "Çoğu villa için yüksek sezonda asgari beş gece konaklama uygulanır; bazı özellikli villalarda ise haftalık konaklama esastır. Düşük sezon ve özel dönemler için minimum süre, teyit aşamasında açıkça paylaşılır. Bu yaklaşımın amacı; villanın hazırlık, devir ve operasyon ritmini misafirin deneyim akışıyla uyumlu tutmaktır.",
        en: "Most villas require a five-night minimum during high season; certain properties are offered on a weekly basis only. Minimum-stay rules for low season and special periods are stated openly at confirmation. The intent is to keep the rhythm of preparation, turnover and operation aligned with a guest&apos;s own experience.",
        de: "Für die meisten Villen gilt in der Hauptsaison ein Mindestaufenthalt von fünf Nächten; einzelne Anwesen werden ausschließlich wochenweise angeboten. Die Mindestdauer für Nebensaison und besondere Zeiträume wird bei der Bestätigung offen mitgeteilt. So bleibt der Rhythmus von Vorbereitung, Übergabe und Betrieb im Einklang mit dem Erleben des Gastes.",
        ru: "Для большинства вилл в высокий сезон действует минимум пять ночей; отдельные дома предлагаются только на недельной основе. Минимальный срок для низкого сезона и особых периодов открыто сообщается при подтверждении. Смысл в том, чтобы ритм подготовки, передачи и обслуживания соответствовал течению отдыха гостя.",
      },
    },
    {
      q: {
        tr: "Özel etkinlikler için villa kiralanabilir mi?",
        en: "Can a villa be rented for a private event?",
        de: "Kann eine Villa für eine private Veranstaltung gemietet werden?",
        ru: "Можно ли арендовать виллу для частного мероприятия?",
      },
      a: {
        tr: "Belirli villalar; özel kutlama, küçük ölçekli toplantı, fotoğraf çekimi veya yıldönümü gibi etkinliklere ev sahipliği yapabilir. Bu tür talepler standart konaklamadan ayrı değerlendirilir; mülk sahibinin onayı, etkinlik düzeni ve komşu mahremiyetine ilişkin kurallar netleştirildikten sonra teyit edilir.",
        en: "Certain villas may host private celebrations, small gatherings, photo shoots or anniversaries. These requests are reviewed separately from standard stays — only after the owner&apos;s approval, the proposed set-up and clear rules concerning neighbour privacy are agreed in writing.",
        de: "Bestimmte Villen können private Feiern, kleine Zusammenkünfte, Fotoaufnahmen oder Jubiläen beherbergen. Solche Anfragen werden getrennt von gewöhnlichen Aufenthalten geprüft — und erst bestätigt, wenn die Zustimmung der Eigentümer, der geplante Ablauf und klare Regeln zum Schutz der Nachbarschaft schriftlich vereinbart sind.",
        ru: "Отдельные виллы могут принять частное торжество, небольшую встречу, фотосъёмку или годовщину. Такие запросы рассматриваются отдельно от обычного проживания — и подтверждаются лишь после письменного согласования с владельцем, плана проведения и чётких правил, касающихся покоя соседей.",
      },
    },
    {
      q: {
        tr: "Villalarda ek hizmetler var mı (özel şef, transfer)?",
        en: "Are additional services available (private chef, transfers)?",
        de: "Gibt es zusätzliche Leistungen (Privatkoch, Transfers)?",
        ru: "Доступны ли дополнительные услуги (частный повар, трансферы)?",
      },
      a: {
        tr: "Talep üzerine; özel şef, sommelier, çocuk bakımı, masaj terapisti, havalimanı transferi, tekne charter ve günübirlik şoför hizmetleri organize edilir. Bu hizmetler, koleksiyonumuza ait değildir; uzun süredir birlikte çalıştığımız, ölçütlerimizi paylaşan tedarikçiler aracılığıyla kurgulanır.",
        en: "On request, we arrange a private chef, sommelier, childcare, massage therapist, airport transfer, boat charter or day driver. These services are not part of our own offering; they are built with longstanding partners who share our standards.",
        de: "Auf Wunsch organisieren wir einen Privatkoch, Sommelier, Kinderbetreuung, Massagetherapeuten, Flughafentransfer, Bootscharter oder einen Fahrer für den Tag. Diese Leistungen gehören nicht zu unserem eigenen Angebot; sie entstehen mit langjährigen Partnern, die unsere Maßstäbe teilen.",
        ru: "По запросу мы организуем частного повара, сомелье, услуги по уходу за детьми, массажиста, трансфер из аэропорта, аренду яхты или водителя на день. Эти услуги не входят в наше собственное предложение; они выстраиваются с давними партнёрами, разделяющими наши стандарты.",
      },
    },
    {
      q: {
        tr: "Atmosfer korunması ne demektir?",
        en: "What does &quot;protecting the atmosphere&quot; mean?",
        de: "Was bedeutet „die Atmosphäre wahren“?",
        ru: "Что означает «беречь атмосферу»?",
      },
      a: {
        tr: "Atmosfer; villanın mimarisi, bahçesi, manzarası, sessizliği ve ev sahibi ile misafir arasındaki ölçü duygusudur. Bunu korumak; villa kapasitesinin üzerine çıkmamak, gürültüyü taşırmamak, mahremiyeti ihlal etmemek ve evi olduğundan farklı bir mekâna dönüştürmemek anlamına gelir. Misafirimizden bu çerçeveye nazikçe katılmasını rica ederiz.",
        en: "Atmosphere is the sum of a villa&apos;s architecture, garden, outlook, quietness and the sense of measure between host and guest. Protecting it means staying within capacity, keeping noise within bounds, respecting privacy and not turning the house into something other than what it is. We invite our guests to share that frame, gently.",
        de: "Atmosphäre ist die Summe aus Architektur, Garten, Ausblick und Ruhe einer Villa sowie dem Maß zwischen Gastgeber und Gast. Sie zu wahren heißt, die Kapazität nicht zu überschreiten, Lärm in Grenzen zu halten, die Privatsphäre zu achten und das Haus nicht zu etwas anderem zu machen, als es ist. Wir bitten unsere Gäste, diesen Rahmen behutsam mitzutragen.",
        ru: "Атмосфера складывается из архитектуры виллы, сада, вида, тишины и чувства меры между хозяином и гостем. Беречь её — значит не превышать вместимость, удерживать шум в разумных пределах, уважать уединённость и не превращать дом в нечто иное, чем он есть. Мы деликатно просим наших гостей разделить эти рамки.",
      },
    },
    {
      q: {
        tr: "Premium misafir profili kimi tanımlar?",
        en: "Who is the premium guest profile?",
        de: "Wer entspricht dem Profil des Premium-Gastes?",
        ru: "Кого описывает профиль премиального гостя?",
      },
      a: {
        tr: "Premium misafir, lüksten önce ölçüyü, gürültüden önce sessizliği önemseyen kişidir. Konuyu mekâna değil deneyime taşır; ev sahibinin emanetine değer verir; konsiyerj ekibiyle açık ve saygılı bir diyalog kurar. Servis beklentisi yüksek ama talep dili sade olan misafir profili, koleksiyonumuza en iyi uyum gösterir.",
        en: "A premium guest values measure over excess and quiet over noise. The focus is the experience rather than the venue; the owner&apos;s trust is treated with care; the conversation with the concierge is clear and respectful. A guest whose service expectations are high but whose voice remains restrained fits the collection best.",
        de: "Ein Premium-Gast schätzt Maß über Übermaß und Ruhe über Lärm. Im Mittelpunkt steht das Erleben, nicht der Ort; das Vertrauen der Eigentümer wird mit Sorgfalt behandelt; der Austausch mit dem Concierge ist klar und respektvoll. Ein Gast mit hohen Erwartungen an den Service, aber zurückhaltendem Ton passt am besten zur Kollektion.",
        ru: "Премиальный гость ценит меру выше избытка и тишину выше шума. В центре внимания — впечатление, а не место; доверие владельца принимается с уважением; общение с консьержем ясное и учтивое. Гость с высокими ожиданиями к сервису, но сдержанной манерой подходит коллекции лучше всего.",
      },
    },
    {
      q: {
        tr: "Koleksiyonunuza villa nasıl katılır?",
        en: "How does a villa join the collection?",
        de: "Wie wird eine Villa in die Kollektion aufgenommen?",
        ru: "Как вилла попадает в коллекцию?",
      },
      a: {
        tr: "Mülk sahipleri, “Villanızı Değerlendirelim” sayfası üzerinden ya da konsiyerj ekibimize doğrudan yazarak başvurabilir. Başvuruyu; villanın mimari niteliği, konumu, donanımı ve mülk sahibinin işletme disiplinini gözeten kısa bir değerlendirme süreci izler. Yerinde görüş, fotoğraf belgesi ve karşılıklı beklentinin yazıya dökülmesi şarttır; kabul tek taraflı bir karar değildir.",
        en: "Owners can write to us through the &quot;Entrust Your Villa&quot; page or directly to the concierge. A short review follows, weighing architectural quality, location, equipment and the discipline of the owner&apos;s operation. An on-site visit, a photographic record and a written exchange of mutual expectations are essential; admission is never a one-sided decision.",
        de: "Eigentümer können uns über die Seite „Vertrauen Sie uns Ihre Villa an“ oder direkt dem Concierge schreiben. Es folgt eine kurze Prüfung, die architektonische Qualität, Lage, Ausstattung und die Sorgfalt der Bewirtschaftung berücksichtigt. Ein Besuch vor Ort, eine fotografische Dokumentation und ein schriftlicher Austausch über die gegenseitigen Erwartungen sind unerlässlich; eine Aufnahme ist nie eine einseitige Entscheidung.",
        ru: "Владельцы могут написать нам через страницу «Доверьте нам вашу виллу» или напрямую консьержу. Затем следует краткая оценка, учитывающая архитектурное качество, расположение, оснащение и дисциплину, с которой ведётся дом. Визит на место, фотодокументация и письменное согласование взаимных ожиданий обязательны; включение никогда не бывает односторонним решением.",
      },
    },
  ];
  return items.map((it) => ({ q: pick(it.q), a: pick(it.a) }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = (tr: string, en: string, de: string, ru: string) =>
    locale === "tr" ? tr : locale === "de" ? de : locale === "ru" ? ru : en;

  const items = getItems(locale);

  const url = locale === "tr" ? `${SITE_URL}/sss` : `${SITE_URL}/${locale}/sss`;

  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url,
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };

  return (
    <article className="pt-32 pb-24 md:pt-40 md:pb-32">
      <JsonLd data={ld} />
      <div className="container-page max-w-4xl">
        <header>
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.32em] text-accent-600">
            {t(
              "Sıkça Sorulan Sorular",
              "Frequently Asked",
              "Häufige Fragen",
              "Частые вопросы"
            )}
          </p>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-5xl">
            {t(
              "Sıkça Sorulan Sorular",
              "Frequently Asked Questions",
              "Häufig gestellte Fragen",
              "Часто задаваемые вопросы"
            )}
          </h1>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted">
            {t(
              "Koleksiyonumuza, konsiyerj akışına ve villa kabul süreçlerine ilişkin merak edilenleri burada topladık. Listede yer almayan bir konu için konsiyerj ekibimize yazabilirsiniz.",
              "Common questions about the collection, the concierge flow and how a villa is admitted. For anything not addressed here, write to the concierge.",
              "Häufige Fragen zur Kollektion, zum Ablauf mit dem Concierge und zur Aufnahme einer Villa. Für alles, was hier nicht behandelt wird, schreiben Sie gern dem Concierge.",
              "Частые вопросы о коллекции, работе с консьержем и о том, как вилла входит в коллекцию. По всему, что здесь не освещено, напишите консьержу."
            )}
          </p>
          <div className="editorial-divider mt-8 max-w-xs" />
        </header>
        <div className="mt-12">
          <FAQ items={items} />
        </div>
      </div>
    </article>
  );
}
