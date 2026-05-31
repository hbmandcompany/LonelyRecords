type MarqueeBarProps = {
  items: string[];
  variant?: "pink" | "volt";
  direction?: "left" | "right";
  className?: string;
};

const VARIANTS = {
  pink: "bg-pink text-ink border-y-[3px] border-ink",
  volt: "bg-volt text-ink border-y-[3px] border-ink",
};

export default function MarqueeBar({
  items,
  variant = "pink",
  direction = "left",
  className = "",
}: MarqueeBarProps) {
  const anim =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  // Two identical copies inside one track; animating by -50% loops seamlessly.
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
            <span className="font-mono text-sm font-medium uppercase tracking-[0.25em] whitespace-nowrap">
              {item}
            </span>
            <span className="text-lg leading-none">&#9733;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
