import Link from "next/link";
import { ReactNode } from "react";

type Variant = "pink" | "ink" | "volt" | "paper";

const VARIANTS: Record<Variant, string> = {
  pink: "bg-pink text-ghost",
  ink: "bg-ink text-ghost",
  volt: "bg-volt text-ink",
  paper: "bg-paper text-ink",
};

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  external?: boolean;
};

export default function Button({
  children,
  href,
  variant = "pink",
  className = "",
  external = false,
}: ButtonProps) {
  const cls = `sticker sticker-hover inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-mono text-sm font-medium uppercase tracking-wide ${VARIANTS[variant]} hover:-translate-y-0.5 active:translate-y-0 ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
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

  return <button className={cls}>{children}</button>;
}
