type SpeedLinesProps = {
  color?: string;
  /** Base opacity when active (parent hover). */
  activeOpacity?: number;
  count?: number;
  className?: string;
};

/**
 * Radial speed lines emanating from center. Hidden by default; fades in when an
 * ancestor with the `group` class is hovered.
 */
export default function SpeedLines({
  color = "var(--violet)",
  activeOpacity = 0.2,
  count = 60,
  className = "",
}: SpeedLinesProps) {
  const lines = Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2;
    const inner = 22;
    const outer = 80;
    return {
      x1: 50 + Math.cos(angle) * inner,
      y1: 50 + Math.sin(angle) * inner,
      x2: 50 + Math.cos(angle) * outer,
      y2: 50 + Math.sin(angle) * outer,
      w: i % 2 === 0 ? 0.7 : 1.3,
    };
  });

  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute inset-0 h-full w-full opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${className}`}
    >
      <g style={{ opacity: activeOpacity }} stroke={color} strokeLinecap="round">
        {lines.map((l, i) => (
          <line
            key={i}
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            strokeWidth={l.w}
          />
        ))}
      </g>
    </svg>
  );
}
