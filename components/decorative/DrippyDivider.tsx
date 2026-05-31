"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type DrippyDividerProps = {
  /** Fill color of the drip. Pass a CSS var like "var(--pink)". */
  color?: string;
  /** Flip so the drip hangs from the top instead of the bottom. */
  flip?: boolean;
  className?: string;
};

const WIDTH = 1440;
const BASE = 36;
// Hand-tuned drip depths so it reads as liquid rather than a wave.
const DRIPS = [54, 18, 88, 30, 62, 12, 100, 40, 70, 22, 50, 84];

function buildDripPath(drips: number[]) {
  const seg = WIDTH / drips.length;
  let d = `M0 0 L${WIDTH} 0 L${WIDTH} ${BASE} `;
  for (let i = drips.length - 1; i >= 0; i--) {
    const x0 = i * seg;
    const mid = x0 + seg / 2;
    const depth = BASE + drips[i];
    d += `C ${(i + 1) * seg} ${BASE}, ${mid + seg * 0.3} ${depth}, ${mid} ${depth} `;
    d += `C ${mid - seg * 0.3} ${depth}, ${x0} ${BASE}, ${x0} ${BASE} `;
  }
  return `${d}Z`;
}

export default function DrippyDivider({
  color = "var(--ink)",
  flip = false,
  className = "",
}: DrippyDividerProps) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const path = el.querySelector("path");
    if (!path) return;

    gsap.set(path, { yPercent: -120, opacity: 0 });
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(path, {
            yPercent: 0,
            opacity: 1,
            duration: 1,
            ease: "expo.out",
          });
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${WIDTH} ${BASE + 110}`}
      preserveAspectRatio="none"
      aria-hidden
      className={`block w-full ${flip ? "rotate-180" : ""} ${className}`}
      style={{ height: "clamp(48px, 7vw, 96px)" }}
    >
      <path d={buildDripPath(DRIPS)} fill={color} />
    </svg>
  );
}
