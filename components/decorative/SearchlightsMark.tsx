import Link from "next/link";

/**
 * Premiere-style searchlights sweeping behind the footer wordmark.
 */
export default function SearchlightsMark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Lonely Records home"
      className={`relative block overflow-hidden ${className}`}
      style={{ width: 280, height: 128 }}
    >
      {/* Beam A — left tower */}
      <div
        aria-hidden
        className="searchlight-beam searchlight-beam-a absolute bottom-0 left-[18%] h-[110%] w-[45%] origin-bottom"
      />
      {/* Beam B — right tower */}
      <div
        aria-hidden
        className="searchlight-beam searchlight-beam-b absolute bottom-0 right-[18%] h-[110%] w-[45%] origin-bottom"
      />

      {/* Soft pool where beams cross */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-[20%] bottom-2 h-10 rounded-full bg-volt/10 blur-xl"
      />

      {/* Wordmark — always on top */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-2 text-center">
        <p className="font-display text-[2rem] leading-none tracking-[0.12em] text-ghost md:text-[2.15rem]">
          LONELY
        </p>
        <p className="font-display text-[2rem] leading-none tracking-[0.12em] text-pink md:text-[2.15rem]">
          RECORDS
        </p>
        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.35em] text-ink/45">
          Since. 2026
        </p>
      </div>
    </Link>
  );
}
