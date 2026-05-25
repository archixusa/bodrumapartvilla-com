"use client";

import { useEffect, useRef, type ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li";
}

export function RevealOnScroll({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("reveal-shown");
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("reveal-shown"), delay);
            obs.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    // @ts-expect-error - dynamic element tag
    <Tag ref={ref} className={clsx("reveal-init", className)}>
      {children}
    </Tag>
  );
}
