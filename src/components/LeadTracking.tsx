"use client";

import { useEffect } from "react";
import { trackLead } from "@/lib/analytics";

/**
 * Mounts once at the app root. Attaches a single delegated, capture-phase
 * click listener on `document` so it catches anchor clicks anywhere in the
 * tree — including links rendered by Server Components, which never run their
 * own client JS. Fires GA4 / Meta lead events for WhatsApp and tel: clicks
 * without interfering with navigation.
 */
export function LeadTracking() {
  useEffect(() => {
    if (typeof document === "undefined") return;

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a");
      if (!anchor) return;

      // Use the raw attribute (not the resolved .href) so tel: / wa.me
      // patterns are matched reliably regardless of normalization.
      const href = anchor.getAttribute("href");
      if (!href) return;

      const lower = href.toLowerCase();

      if (lower.includes("wa.me") || lower.includes("api.whatsapp.com")) {
        const subject =
          anchor.getAttribute("data-lead") ||
          window.location.pathname ||
          undefined;
        trackLead({ kind: "whatsapp", subject });
        return;
      }

      if (lower.startsWith("tel:")) {
        trackLead({ kind: "call" });
      }
    };

    // Capture phase so we run before any stopPropagation and before navigation.
    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
    };
  }, []);

  return null;
}
