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
      ? `${SITE_URL}/villalar`
      : `${SITE_URL}/${locale}/villalar`;
  const isTr = locale === "tr";
  return {
    title: isTr
      ? "Bodrum Villa Kiralama 2026 | Özel Havuzlu Villalar"
      : "Bodrum Villa Rental 2026 | Private-Pool Villas",
    description: isTr
      ? "Bodrum'da özel havuzlu, müstakil villalar. Yalıkavak, Turgutreis, Ortakent ve daha fazlası. Şeffaf fiyat, ücretsiz iptal."
      : "Private-pool detached villas in Bodrum. Yalıkavak, Turgutreis, Ortakent and more. Transparent pricing, free cancellation.",
    alternates: { canonical: url },
  };
}

export default async function VillalarPage({
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
          <h1>{isTr ? "Bodrum Villa Kiralama" : "Bodrum Villa Rental"}</h1>
          <p className="mt-2 text-muted">
            {isTr
              ? "Özel havuzlu, müstakil ve geniş aileler için seçilmiş villalar."
              : "Detached, private-pool villas selected for larger families."}
          </p>
          <p className="mt-1 text-xs text-muted">
            {t("rentals")} · {c("typeVilla")}
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container-page">
          <Suspense fallback={<div className="py-20 text-center text-muted">…</div>}>
            <PropertyListClient properties={properties} initialType="villa" />
          </Suspense>
        </div>
      </section>
    </>
  );
}
