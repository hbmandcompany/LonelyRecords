import { ReactNode } from "react";

type BlobFrameProps = {
  children: ReactNode;
  /** Border color, e.g. "var(--ink)" or "var(--pink)". */
  borderColor?: string;
  borderWidth?: number;
  className?: string;
  /** Disable the slow morph animation. */
  static?: boolean;
};

/**
 * Organic ink-blob image frame. Uses an animated border-radius morph so the
 * shape feels hand-touched and alive rather than a perfect circle/rectangle.
 */
export default function BlobFrame({
  children,
  borderColor = "var(--ink)",
  borderWidth = 3,
  className = "",
  static: isStatic = false,
}: BlobFrameProps) {
  return (
    <div
      className={`relative overflow-hidden ${isStatic ? "" : "animate-blob"} ${className}`}
      style={{
        border: `${borderWidth}px solid ${borderColor}`,
        borderRadius: "42% 58% 63% 37% / 41% 44% 56% 59%",
      }}
    >
      {children}
    </div>
  );
}
