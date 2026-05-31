"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);
  const [down, setDown] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mq.matches) return;
    setEnabled(true);
    document.body.classList.add("cursor-none-desktop");

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement | null;
      setActive(
        !!target?.closest("a, button, [data-cursor='hover'], input, select")
      );
    };
    const onDown = () => setDown(true);
    const onUp = () => setDown(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.body.classList.remove("cursor-none-desktop");
    };
  }, []);

  if (!enabled) return null;

  const size = active ? 40 : 12;
  const scale = down ? 0.8 : 1;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full"
      style={{
        width: size,
        height: size,
        backgroundColor: active ? "var(--volt)" : "var(--pink)",
        transform: `translate(${pos.x - size / 2}px, ${pos.y - size / 2}px) scale(${scale})`,
        transition:
          "width 0.18s ease, height 0.18s ease, background-color 0.18s ease, transform 0.1s ease-out",
      }}
    />
  );
}
