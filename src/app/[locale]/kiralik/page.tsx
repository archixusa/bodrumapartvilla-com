import type { Metadata } from "next";
import { Suspense } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PropertyListClient } from "./PropertyListClient";
import { JsonLd } from "@/components/JsonLd";
import { properties } from "@/data/properties";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://bodrumapartvilla.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "propertyList" });
  const url =
    locale === "tr"
      ? `${SITE_URL}/kiralik`
      : `${SITE_URL}/${locale}/kiralik`;
  return {
    title: t("metaTitle"),
    description: t("metaDesc"),
    alternates: { canonical: url },
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDesc"),
      url,
    },
  };
}

export default async function KiralikPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "propertyList" });
  const isTr = locale === "tr";

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isTr ? "Ana Sayfa" : "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: t("title"),
        item: `${SITE_URL}/kiralik`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumb} />
      <section className="border-b border-[var(--color-border)] bg-navy-50">
        <div className="container-page py-10 md:py-12">
          <h1>{t("title")}</h1>
          <p className="mt-2 text-muted">{t("subtitle")}</p>
        </div>
      </section>
      <section className="section">
        <div className="container-page">
          <Suspense fallback={<div className="py-20 text-center text-muted">…</div>}>
            <PropertyListClient properties={properties} initialType="all" />
          </Suspense>
        </div>
      </section>
    </>
  );
}
