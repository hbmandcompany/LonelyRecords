import { ReactNode } from "react";

export default function PageBanner({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-void px-6 pb-12 pt-36 md:px-12 md:pb-16 md:pt-44">
      <div aria-hidden className="pointer-events-none absolute inset-0 haze-red opacity-60" />
      <div
        aria-hidden
        className="animate-blob pointer-events-none absolute -left-24 top-10 h-[40vh] w-[40vh] bg-violet opacity-15"
        style={{ borderRadius: "42% 58% 63% 37% / 41% 44% 56% 59%" }}
      />
      <div className="relative z-10 mx-auto max-w-6xl">
        <h1 className="rage-glow font-display text-6xl tracking-[0.08em] text-ghost md:text-8xl">
          {title}
        </h1>
        <p className="mt-3 font-mono text-sm uppercase tracking-[0.22em] text-pink/80">
          {subtitle}
        </p>
        {children}
      </div>
    </section>
  );
}
