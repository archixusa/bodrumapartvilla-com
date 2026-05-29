import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { loc } from "@/lib/i18n-data";

// =========================================================================
// BlogCta — restrained, quiet-luxury end-of-article conversion exit.
//
// Server component. Rendered at the end of both blog render paths
// (structured posts.ts + MDX). Lead-gen is WhatsApp-first: the primary
// link is a wa.me deep link carrying a localized, pre-filled message and
// `data-lead="blog-whatsapp"` so the global LeadTracking listener fires.
// A discreet secondary link points to the concierge / contact pages.
//
// Voice is understated — a quiet offer to help, not a sales push. The
// WhatsApp brand green appears only as a small icon accent; the surface
// itself stays on the navy/neutral palette to read as boutique, not loud.
// =========================================================================

const WHATSAPP_NUMBER = "905385124088";

interface BlogCtaCopy {
  heading: string;
  body: string;
  // Pre-filled WhatsApp message (will be URL-encoded).
  waMessage: string;
  // Primary button label.
  waLabel: string;
  // Secondary link label + target route.
  secondaryLabel: string;
  secondaryHref: string;
}

const COPY: Record<"tr" | "en" | "de" | "ru", BlogCtaCopy> = {
  tr: {
    heading: "Bir villa mı planlıyorsunuz?",
    body: "Konsiyerj ekibimiz birkaç öneriyle WhatsApp'tan dönsün. Tarihlerinizi yazın, gerisini biz düşünelim.",
    waMessage:
      "Merhaba, Bodrum'da bir villa planlıyorum. Önerilerinizi rica edebilir miyim?",
    waLabel: "WhatsApp'tan yazın",
    secondaryLabel: "Konsiyerj hizmetlerimiz",
    secondaryHref: "/konsiyerj",
  },
  en: {
    heading: "Planning a stay in Bodrum?",
    body: "Tell us your dates and our concierge team will come back on WhatsApp with a few quiet recommendations.",
    waMessage:
      "Hello, I'm planning a villa stay in Bodrum. Could you share a few suggestions?",
    waLabel: "Message us on WhatsApp",
    secondaryLabel: "Our concierge service",
    secondaryHref: "/konsiyerj",
  },
  de: {
    heading: "Planen Sie einen Aufenthalt in Bodrum?",
    body: "Nennen Sie uns Ihre Reisedaten — unser Concierge-Team meldet sich mit einigen ausgewählten Vorschlägen über WhatsApp.",
    waMessage:
      "Hallo, ich plane einen Villenaufenthalt in Bodrum. Könnten Sie mir einige Vorschläge machen?",
    waLabel: "Auf WhatsApp schreiben",
    secondaryLabel: "Unser Concierge-Service",
    secondaryHref: "/konsiyerj",
  },
  ru: {
    heading: "Планируете отдых в Бодруме?",
    body: "Напишите нам даты — наша консьерж-команда вернётся в WhatsApp с несколькими подобранными вариантами.",
    waMessage:
      "Здравствуйте, я планирую отдых на вилле в Бодруме. Не могли бы вы предложить несколько вариантов?",
    waLabel: "Написать в WhatsApp",
    secondaryLabel: "Наш консьерж-сервис",
    secondaryHref: "/konsiyerj",
  },
};

function copyFor(locale: string): BlogCtaCopy {
  return COPY[(locale as "tr" | "en" | "de" | "ru")] ?? COPY.en;
}

export function BlogCta({ locale }: { locale: string }) {
  const c = copyFor(locale);
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    c.waMessage,
  )}`;

  return (
    <aside
      aria-label={loc(locale, { tr: "İletişim", en: "Get in touch", de: "Kontakt", ru: "Связаться" })}
      className="mt-12 rounded-2xl border border-[var(--color-border)] bg-white/70 p-6 backdrop-blur-sm md:p-8"
    >
      <h2 className="font-display text-xl leading-snug text-navy-900 md:text-2xl">
        {c.heading}
      </h2>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
        {c.body}
      </p>
      <div className="mt-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          data-lead="blog-whatsapp"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] bg-white px-5 py-2.5 text-sm font-semibold text-navy-900 transition hover:border-navy-200 hover:bg-navy-50"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 text-[#25D366]"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
          {c.waLabel}
        </a>
        <Link
          href={c.secondaryHref}
          className="inline-flex items-center gap-1 text-sm font-medium text-navy-800 transition hover:text-navy-900"
        >
          {c.secondaryLabel}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </aside>
  );
}
