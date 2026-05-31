"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const LINKS = [
  { href: "/artists", label: "Artists" },
  { href: "/licensing", label: "Licensing" },
  { href: "/news", label: "News" },
];

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function NavBar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const prev = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const goingDown = latest > prev.current;
    // Hide when scrolling down past the hero edge; reveal on any upward scroll.
    setHidden(goingDown && latest > 140 && !open);
    prev.current = latest;
  });

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: hidden ? -140 : 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-4 z-[9000] flex justify-center px-4"
    >
      <nav className="sticker flex w-full max-w-5xl items-center justify-between gap-4 rounded-full bg-paper/80 px-4 py-2.5 backdrop-blur-md md:px-6">
        <Link
          href="/"
          className="font-display text-xl leading-none tracking-wide md:text-2xl"
        >
          LONELY RECORDS
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-[0.18em] transition-colors hover:text-pink"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-colors hover:text-pink"
          >
            <InstagramIcon />
          </a>
          <Link
            href="/shop"
            className="sticker sticker-hover hidden rounded-full bg-pink px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-wide text-ghost sm:inline-flex"
          >
            Shop
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-8 w-8 items-center justify-center md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-ink transition-transform ${open ? "top-2 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 top-2 block h-0.5 w-5 bg-ink transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-ink transition-transform ${open ? "top-2 -rotate-45" : "top-4"}`}
              />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="sticker absolute left-4 right-4 top-[72px] flex flex-col gap-1 rounded-2xl bg-paper p-3 md:hidden"
        >
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 font-mono text-sm uppercase tracking-wide hover:bg-ink hover:text-paper"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/shop"
            onClick={() => setOpen(false)}
            className="rounded-xl bg-pink px-4 py-3 text-center font-mono text-sm uppercase tracking-wide text-ghost"
          >
            Shop
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
