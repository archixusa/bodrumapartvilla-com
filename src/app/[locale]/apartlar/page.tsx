import type { Metadata } from "next";
import { Suspense } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PropertyListClient } from "../kiralik/PropertyListClient";
import { properties } from "@/data/properties";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://bodrumapartvilla.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const url =
    locale === "tr"
      ? `${SITE_URL}/apartlar`
      : `${SITE_URL}/${locale}/apartlar`;
  const isTr = locale === "tr";
  return {
    title: isTr
      ? "Bodrum Apart Kiralama 2026 | Doğrulanmış Apartlar"
      : "Bodrum Apartment Rental 2026 | Verified Apartments",
    description: isTr
      ? "Bodrum'da günlük, haftalık ve aylık doğrulanmış apart daireler. Şeffaf fiyat, anında onay, ücretsiz iptal."
      : "Daily, weekly and monthly verified apartments in Bodrum. Transparent pricing, instant confirmation, free cancellation.",
    alternates: { canonical: url },
  };
}

export default async function ApartlarPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "nav" });
  const c = await getTranslations({ locale, namespace: "common" });
  const isTr = locale === "tr";

  return (
    <>
      <section className="border-b border-[var(--color-border)] bg-navy-50">
        <div className="container-page py-10 md:py-12">
          <h1>{isTr ? "Bodrum Apart Kiralama" : "Bodrum Apartment Rental"}</h1>
          <p className="mt-2 text-muted">
            {isTr
              ? "1+1'den 3+1'e doğrulanmış daireler, şeffaf sezon fiyatları."
              : "Verified 1- to 3-bedroom apartments with transparent seasonal pricing."}
          </p>
          <p className="mt-1 text-xs text-muted">
            {t("rentals")} · {c("typeApart")}
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container-page">
          <Suspense fallback={<div className="py-20 text-center text-muted">…</div>}>
            <PropertyListClient properties={properties} initialType="apart" />
          </Suspense>
        </div>
      </section>
    </>
  );
}
