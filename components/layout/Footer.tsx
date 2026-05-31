import Link from "next/link";
import GrainOverlay from "@/components/decorative/GrainOverlay";
import SearchlightsMark from "@/components/decorative/SearchlightsMark";

const NAV = [
  { href: "/news", label: "News" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/careers", label: "Careers" },
];

const SOCIAL = [
  { href: "https://open.spotify.com", label: "Spotify" },
  { href: "https://music.apple.com", label: "Apple Music" },
  { href: "https://instagram.com", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-pink/30 bg-void pb-[env(safe-area-inset-bottom)] text-ink">
      <GrainOverlay opacity={0.12} />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-10 text-center md:grid-cols-3 md:text-left">
          <div className="flex items-start justify-center md:justify-start">
            <SearchlightsMark />
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-pink">
              Explore
            </p>
            <ul className="mt-4 space-y-1">
              {NAV.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-flex min-h-[44px] items-center justify-center font-mono text-sm text-ink/70 transition-colors hover:text-volt md:justify-start"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-pink">
              Listen / Follow
            </p>
            <ul className="mt-4 space-y-1">
              {SOCIAL.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center justify-center font-mono text-sm text-ink/70 transition-colors hover:text-volt md:justify-start"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-14 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-ink/35">
          &copy; 2026 Hated By Many LLC. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
