"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li";
}

// Content-first reveal: starts visible (so SSR and no-JS users always see text),
// then only animates in if the element happens to enter the viewport later.
// Previous version started at opacity:0 in SSR which left whole sections invisible
// when JS hadn't hydrated yet or the IntersectionObserver didn't fire.
export function RevealOnScroll({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Already in view? keep shown.
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < vh && rect.bottom > 0) {
      setRevealed(true);
      return;
    }

    // Below the fold — animate on entry.
    setRevealed(false);
    if (typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            window.setTimeout(() => setRevealed(true), delay);
            obs.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0.05 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  const Element = Tag as "div";
  return (
    <Element
      ref={ref}
      className={clsx(revealed ? "reveal-shown" : "reveal-init", className)}
    >
      {children}
    </Element>
  );
}
