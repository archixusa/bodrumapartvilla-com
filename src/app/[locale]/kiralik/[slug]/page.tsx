import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

// Pre-launch state: the public villa collection has not yet been published,
// so individual property detail pages always resolve to a 404. The route is
// retained (rather than deleted) so any inbound demo-era link receives a
// clean Not Found response instead of a build-time error. When the catalogue
// is reintroduced, restore the original detail implementation alongside the
// repopulated `src/data/properties.ts` array.

export function generateStaticParams() {
  return [];
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  notFound();
}
