"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const SUPABASE_ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export function NewsletterConfirmClient() {
  const params = useSearchParams();
  const token = params.get("token");
  const [state, setState] = useState<{ ok: boolean | null; message: string }>({ ok: null, message: "Doğrulanıyor…" });

  useEffect(() => {
    if (!token) { setState({ ok: false, message: "Geçersiz link." }); return; }
    fetch(`${SUPABASE_URL}/functions/v1/newsletter-confirm`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${SUPABASE_ANON}`, apikey: SUPABASE_ANON },
      body: JSON.stringify({ token }),
    })
      .then((r) => r.json())
      .then((d) => setState({ ok: !!d.ok, message: d.message ?? d.error ?? "Bilinmeyen yanıt." }))
      .catch((e) => setState({ ok: false, message: e.message }));
  }, [token]);

  return (
    <div style={{ maxWidth: 480, background: "#fff", padding: 32, borderRadius: 12, boxShadow: "0 4px 16px rgba(0,0,0,0.08)", textAlign: "center" }}>
      <div style={{ fontSize: 40, marginBottom: 12 }}>{state.ok === null ? "⏳" : state.ok ? "✨" : "⚠️"}</div>
      <h1 style={{ fontSize: 22, margin: "0 0 12px", color: "#0F172A" }}>{state.ok === null ? "Doğrulanıyor" : state.ok ? "Teşekkürler" : "Hata"}</h1>
      <p style={{ color: "#475569", lineHeight: 1.6 }}>{state.message}</p>
    </div>
  );
}
