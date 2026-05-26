import { Suspense } from "react";
import { ReviewForm } from "./ReviewForm";

export const metadata = {
  title: "Konaklamanızı değerlendirin",
  description: "Konaklama deneyiminizi paylaşın — sonraki misafirlerimize ışık tutun.",
  robots: { index: false, follow: false },
};

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        background: "linear-gradient(180deg, #FAFAF7 0%, #FFFFFF 100%)",
      }}
    >
      <Suspense fallback={<p>Yükleniyor...</p>}>
        <ReviewForm token={token} brand="BodrumApartVilla.com" />
      </Suspense>
    </main>
  );
}
