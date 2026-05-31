import Link from "next/link";
import { ReactNode } from "react";

type Variant = "pink" | "ink" | "volt" | "paper";

const VARIANTS: Record<Variant, string> = {
  pink: "bg-pink text-ghost",
  ink: "bg-void text-ghost border-[2px] border-pink/50",
  volt: "bg-volt text-void",
  paper: "bg-smoke text-ink border-[2px] border-ink/20",
};

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  external?: boolean;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  children,
  href,
  variant = "pink",
  className = "",
  external = false,
  type = "button",
}: ButtonProps) {
  const cls = `sticker sticker-hover inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-6 py-3 font-mono text-sm font-medium uppercase tracking-[0.15em] ${VARIANTS[variant]} hover:-translate-y-0.5 active:translate-y-0 ${className}`;

  if (href) {
    if (external || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className={cls}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls}>
      {children}
    </button>
  );
}
