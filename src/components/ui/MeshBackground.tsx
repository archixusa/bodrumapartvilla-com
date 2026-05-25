import clsx from "clsx";

interface Props {
  variant?: "hero" | "section" | "footer";
  grid?: boolean;
  className?: string;
}

export function MeshBackground({
  variant = "hero",
  grid = true,
  className,
}: Props) {
  return (
    <div
      aria-hidden
      className={clsx(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      {/* Animated mesh blobs */}
      <div className="absolute inset-0 animate-meshDrift">
        {variant === "hero" && <div className="hero-mesh absolute inset-0" />}
        {variant === "section" && (
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 50% at 80% 0%, rgba(217,178,110,0.18) 0%, transparent 60%), radial-gradient(50% 50% at 10% 100%, rgba(109,144,220,0.18) 0%, transparent 60%)",
            }}
          />
        )}
        {variant === "footer" && (
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(70% 60% at 50% 100%, rgba(27,58,140,0.6) 0%, transparent 70%)",
            }}
          />
        )}
      </div>

      {/* Subtle grid overlay */}
      {grid && (
        <div className="absolute inset-0 grid-overlay opacity-60 mask-fade-b" />
      )}

      {/* Top/bottom fade for cleanliness */}
      <div
        className="absolute inset-x-0 bottom-0 h-32"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(250,252,254,0.95) 100%)",
        }}
      />
    </div>
  );
}
