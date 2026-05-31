import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  rotate?: number;
  variant?: "pill" | "star";
  color?: string;
  textColor?: string;
  className?: string;
};

export default function Badge({
  children,
  rotate = -2,
  variant = "pill",
  color = "var(--void)",
  textColor = "var(--pink)",
  className = "",
}: BadgeProps) {
  const shape =
    variant === "star"
      ? "rounded-[28%_72%_70%_30%/30%_30%_70%_70%]"
      : "rounded-full";

  return (
    <span
      className={`sticker inline-flex select-none items-center justify-center px-4 py-1.5 text-center font-mono text-xs font-medium uppercase tracking-[0.15em] ${shape} ${className}`}
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
