import { MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { NewsletterSignup } from "@/components/NewsletterSignup";

export interface ApproachPillar {
  kicker: string;
  title: string;
  body: string;
}

export interface ComingSoonCollectionProps {
  locale: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  email: string;
  sourcePage: string;
  kicker: string;
  title: string;
  subtitle: string;
  description: string;
  ctaPrimaryLabel: string;
  ctaPrimaryHref: "/iletisim";
  ctaSecondaryLabel: string;
  ctaSecondaryHref: "/evinizi-kiraya-verin";
  philosophyKicker: string;
  philosophyTitle: string;
  philosophyBody: string;
  pillarsKicker: string;
  pillarsTitle: string;
  pillars: ApproachPillar[];
  newsletter: {
    title: string;
    description: string;
    placeholder: string;
    cta: string;
    consentText: string;
    successMessage: string;
    errorMessage: string;
  };
  conciergeKicker: string;
  conciergeTitle: string;
  conciergeBody: string;
  conciergeHours: string;
}

export function ComingSoonCollection({
  locale,
  whatsappNumber,
  whatsappDisplay,
  email,
  sourcePage,
  kicker,
  title,
  subtitle,
  description,
  ctaPrimaryLabel,
  ctaPrimaryHref,
  ctaSecondaryLabel,
  ctaSecondaryHref,
  philosophyKicker,
  philosophyTitle,
  philosophyBody,
  pillarsKicker,
  pillarsTitle,
  pillars,
  newsletter,
  conciergeKicker,
  conciergeTitle,
  conciergeBody,
  conciergeHours,
}: ComingSoonCollectionProps) {
  return (
    <>
      {/* HERO — generous whitespace, no demo imagery */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 60% at 20% 20%, rgba(217,178,110,0.10) 0%, transparent 60%), radial-gradient(50% 50% at 80% 80%, rgba(109,144,220,0.10) 0%, transparent 60%)",
          }}
        />
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.32em] text-accent-600">
              {kicker}
            </p>
            <h1 className="mt-8 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-6xl">
              {title}
            </h1>
            <p className="mt-6 font-display text-lg italic text-muted md:text-xl">
              {subtitle}
            </p>
            <div className="editorial-divider mx-auto mt-10 max-w-xs" />
            <p className="mt-10 text-balance text-base leading-relaxed text-ink/85 md:text-lg">
              {description}
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={ctaPrimaryHref} className="btn-primary">
                {ctaPrimaryLabel}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href={ctaSecondaryHref} className="btn-secondary">
                {ctaSecondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY — single manifesto paragraph */}
      <section className="section section-soft">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.32em] text-accent-600">
              {philosophyKicker}
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              {philosophyTitle}
            </h2>
            <div className="editorial-divider mx-auto mt-6 max-w-xs" />
            <p className="mt-10 font-display text-lg leading-relaxed text-ink/85 md:text-xl">
              {philosophyBody}
            </p>
          </div>
        </div>
      </section>

      {/* THREE APPROACH PILLARS */}
      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.32em] text-accent-600">
              {pillarsKicker}
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              {pillarsTitle}
            </h2>
            <div className="editorial-divider mx-auto mt-6 max-w-xs" />
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {pillars.map((pillar, i) => (
              <article
                key={pillar.title}
                className="flex flex-col gap-4 rounded-3xl border border-[var(--color-border)] bg-white/50 p-8 backdrop-blur"
              >
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-accent-600">
                  {String(i + 1).padStart(2, "0")} · {pillar.kicker}
                </p>
                <h3 className="font-display text-xl font-semibold text-ink md:text-2xl">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink/80">
                  {pillar.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="section section-blue">
        <div className="container-page">
          <div className="mx-auto max-w-2xl">
            <NewsletterSignup
              sourcePage={sourcePage}
              locale={locale}
              title={newsletter.title}
              description={newsletter.description}
              placeholder={newsletter.placeholder}
              cta={newsletter.cta}
              consentText={newsletter.consentText}
              successMessage={newsletter.successMessage}
              errorMessage={newsletter.errorMessage}
            />
          </div>
        </div>
      </section>

      {/* CONCIERGE — WhatsApp + email, large and quiet */}
      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.32em] text-accent-600">
              {conciergeKicker}
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              {conciergeTitle}
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted md:text-base">
              {conciergeBody}
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 rounded-3xl border border-[var(--color-border)] bg-white/60 p-8 backdrop-blur transition hover:border-accent-500"
              >
                <MessageCircle className="h-7 w-7 text-accent-600" />
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-accent-600">
                  WhatsApp
                </p>
                <p className="font-display text-lg font-semibold text-ink">
                  {whatsappDisplay}
                </p>
              </a>
              <a
                href={`mailto:${email}`}
                className="group flex flex-col items-center gap-3 rounded-3xl border border-[var(--color-border)] bg-white/60 p-8 backdrop-blur transition hover:border-accent-500"
              >
                <Mail className="h-7 w-7 text-accent-600" />
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-accent-600">
                  E-posta
                </p>
                <p className="font-display text-lg font-semibold text-ink">
                  {email}
                </p>
              </a>
            </div>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
              {conciergeHours}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
