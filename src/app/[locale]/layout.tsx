import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { AnalyticsScripts, GtmNoScript } from "@/components/Analytics";
import { CookieConsent } from "@/components/CookieConsent";
import { JsonLd } from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const interDisplay = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-display",
  weight: ["600", "700", "800", "900"],
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://bodrumapartvilla.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bodrumapartvilla | Bodrum'da Butik Villa Kiralama",
    template: "%s | Bodrumapartvilla",
  },
  description:
    "Bodrum yarımadasında özenle seçilmiş bir villa koleksiyonu. Sınırlı sayıda mülk, kişisel konsiyerj ve sakin bir konaklama anlayışı.",
  openGraph: {
    type: "website",
    siteName: "Bodrumapartvilla",
    locale: "tr_TR",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Bodrumapartvilla — A considered collection of villas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-default.png"],
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      tr: SITE_URL,
      en: `${SITE_URL}/en`,
      de: `${SITE_URL}/de`,
      ru: `${SITE_URL}/ru`,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#0F172A",
  robots: {
    index: true,
    follow: true,
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${interDisplay.variable} ${jetBrainsMono.variable}`}
    >
      <head>
        <AnalyticsScripts />
      </head>
      <body className="bg-bg-base font-sans text-ink antialiased">
        <GtmNoScript />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Bodrumapartvilla",
            url: SITE_URL,
            logo: `${SITE_URL}/logo_kare.svg`,
            image: `${SITE_URL}/og-default.png`,
            priceRange: "₺₺₺",
            description:
              "Bodrum yarımadasında butik villa konaklama. Sınırlı koleksiyon, kişisel konsiyerj, premium misafir profili.",
            telephone: "+90 538 512 40 88",
            email: "info@bodrumapartvilla.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Bodrum",
              addressRegion: "Muğla",
              addressCountry: "TR",
            },
            areaServed: [
              "Yalıkavak",
              "Türkbükü",
              "Göltürkbükü",
              "Gümüşlük",
              "Torba",
              "Gündoğan",
              "Bitez",
              "Ortakent",
              "Turgutreis",
              "Gümbet",
            ],
            sameAs: [SITE_URL],
          }}
        />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-ink focus:px-3 focus:py-2 focus:text-white"
          >
            Skip to content
          </a>
          <Header />
          <main id="main" className="relative min-h-[60vh]">
            {children}
          </main>
          <Footer />
          <WhatsAppFab />
          <CookieConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
