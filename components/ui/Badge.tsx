import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  /** Rotation in degrees, typically between -6 and +6. */
  rotate?: number;
  variant?: "pill" | "star";
  color?: string;
  textColor?: string;
  className?: string;
};

/**
 * Sticker badge: thick ink-outlined, rotated, Permanent Marker text inside.
 * Used for NEW RELEASE, AVAILABLE NOW, EST. 2025, etc.
 */
export default function Badge({
  children,
  rotate = -4,
  variant = "pill",
  color = "var(--ghost)",
  textColor = "var(--ink)",
  className = "",
}: BadgeProps) {
  const shape =
    variant === "star"
      ? "rounded-[28%_72%_70%_30%/30%_30%_70%_70%]"
      : "rounded-full";

  return (
    <span
      className={`sticker inline-flex select-none items-center justify-center px-4 py-1.5 text-center font-marker text-sm leading-tight ${shape} ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
        backgroundColor: color,
        color: textColor,
      }}
    >
      {children}
    </span>
  );
}
