type MarqueeBarProps = {
  items: string[];
  variant?: "pink" | "volt";
  direction?: "left" | "right";
  className?: string;
};

const VARIANTS = {
  pink: "bg-pink text-ghost border-y border-pink/80",
  volt: "bg-void text-volt border-y border-volt/40",
};

export default function MarqueeBar({
  items,
  variant = "pink",
  direction = "left",
  className = "",
}: MarqueeBarProps) {
  const anim =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  const copy = [...items, ...items];

  return (
    <div
      className={`group relative flex overflow-hidden py-3 ${VARIANTS[variant]} ${className}`}
    >
      <div
        className={`flex w-max shrink-0 items-center gap-6 pr-6 ${anim} group-hover:[animation-play-state:paused]`}
      >
        {copy.map((item, i) => (
          <span key={i} className="flex items-center gap-6">
            <span className="font-mono text-sm font-medium uppercase tracking-[0.3em] whitespace-nowrap">
              {item}
            </span>
            <span className="text-lg leading-none text-pink/80">&#9670;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
