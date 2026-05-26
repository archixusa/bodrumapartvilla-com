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
    default: "Bodrum Villa & Apart Kiralama 2026 | Özel Havuzlu",
    template: "%s | bodrumapartvilla.com",
  },
  description:
    "Bodrum'da özel havuzlu villa ve doğrulanmış apart seçenekleri. Yalıkavak, Gümbet, Turgutreis'te kapıdan teslim, ücretsiz iptal, anında onay.",
  openGraph: {
    type: "website",
    siteName: "bodrumapartvilla.com",
    locale: "tr_TR",
    images: ["/logo_kare.svg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/logo_kare.svg"],
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
    icon: "/icon.svg",
    apple: "/logo_kare.svg",
  },
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
