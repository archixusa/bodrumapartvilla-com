"use client";

import { useLocale } from "next-intl";
import { JsonLd } from "@/components/JsonLd";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { loc } from "@/lib/i18n-data";
import { reviews } from "@/data/reviews";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://bodrumapartvilla.com";

type Loc = "tr" | "en" | "de" | "ru";

interface TestimonialsProps {
  /** Filter to reviews from a given district (matches GuestReview.district). */
  district?: string;
  /** Maximum number of testimonials to show. Default 3. */
  max?: number;
  /** Optional section heading override. */
  title?: string;
  /** Optional section subtitle override. */
  subtitle?: string;
}

export function Testimonials({
  district,
  max = 3,
  title,
  subtitle,
}: TestimonialsProps) {
  const locale = useLocale();
  const L = locale as Loc;
  const pick = (tr: string, en: string, de: string, ru: string) =>
    ({ tr, en, de, ru } as Record<Loc, string>)[L] ?? en;

  // Filter by district, but fall back to the full set if too few match.
  const matched = district
    ? reviews.filter((r) => r.district === district)
    : reviews;
  const pool = matched.length >= 2 ? matched : reviews;
  const shown = pool.slice(0, Math.max(0, max));

  if (shown.length === 0) return null;

  const heading =
    title ??
    pick(
      "Misafirlerimizin sözleri",
      "In our guests’ words",
      "Mit den Worten unserer Gäste",
      "Словами наших гостей",
    );
  const sub =
    subtitle ??
    pick(
      "Koleksiyonda kalanların, sessizce bıraktıkları birkaç not.",
      "A few notes, quietly left by those who have stayed within the collection.",
      "Ein paar Zeilen, still hinterlassen von jenen, die in der Kollektion zu Gast waren.",
      "Несколько строк, негромко оставленных теми, кто гостил в нашей коллекции.",
    );

  // Aggregate rating from the reviews actually shown.
  const ratingValue =
    shown.reduce((sum, r) => sum + r.rating, 0) / shown.length;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LodgingBusiness",
      name: "Bodrumapartvilla",
      url: SITE_URL,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: Number(ratingValue.toFixed(1)),
        reviewCount: shown.length,
        bestRating: 5,
        worstRating: 1,
      },
      review: shown.map((r) => ({
        "@type": "Review",
        author: { "@type": "Person", name: r.author },
        reviewRating: {
          "@type": "Rating",
          ratingValue: r.rating,
          bestRating: 5,
          worstRating: 1,
        },
        reviewBody: loc(locale, { tr: r.textTr, en: r.textEn }),
      })),
    },
  ];

  // Discreet attribution: city, then district, separated by a thin middot.
  const attribution = (r: (typeof shown)[number]) =>
    [r.city, r.district].filter(Boolean).join(" · ");

  return (
    <section className="section">
      <JsonLd data={jsonLd} />
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <MonoLabel className="text-accent-600">
            {pick("Misafirler", "Guests", "Gäste", "Гости")}
          </MonoLabel>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
            {heading}
          </h2>
          <div className="editorial-divider mx-auto mt-8 max-w-xs" />
          {sub && (
            <p className="mt-8 text-base leading-relaxed text-ink/70 md:text-lg">
              {sub}
            </p>
          )}
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
          {shown.map((r) => (
            <figure
              key={r.id}
              className="flex h-full flex-col rounded-3xl border border-[var(--color-border)] bg-white/60 p-8 backdrop-blur md:p-10"
            >
              <span
                aria-hidden
                className="font-display text-4xl leading-none text-accent-500/60"
              >
                &ldquo;
              </span>
              <blockquote className="mt-4 flex-1 text-[15px] font-light leading-relaxed text-ink/80 md:text-base">
                {loc(locale, { tr: r.textTr, en: r.textEn })}
              </blockquote>
              <figcaption className="mt-8 border-t border-[var(--color-border)] pt-5 text-sm text-ink/60">
                <span className="font-medium text-ink/80">{r.author}</span>
                {attribution(r) && (
                  <span className="block text-xs tracking-wide text-ink/50">
                    {attribution(r)}
                  </span>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
