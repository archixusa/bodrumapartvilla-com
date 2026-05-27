import { Suspense } from "react";
import { NewsletterConfirmClient } from "./NewsletterConfirmClient";

export const metadata = {
  title: "E-posta doğrulama",
  description: "E-posta adresi doğrulama sayfası.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 16, background: "#FAFAF7" }}>
      <Suspense fallback={<p>Yükleniyor…</p>}>
        <NewsletterConfirmClient />
      </Suspense>
    </main>
  );
}
