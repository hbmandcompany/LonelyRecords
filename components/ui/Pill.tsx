import Link from "next/link";
import { ReactNode } from "react";

type PillProps = {
  children: ReactNode;
  href?: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
};

/**
 * Nav / filter pill. Active state fills with --pink.
 */
export default function Pill({
  children,
  href,
  active = false,
  onClick,
  className = "",
}: PillProps) {
  const cls = `inline-flex items-center rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-wide transition-colors ${
    active
      ? "bg-pink text-ghost border-[2px] border-pink"
      : "text-ink/70 hover:bg-smoke hover:text-pink border-[2px] border-transparent"
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
