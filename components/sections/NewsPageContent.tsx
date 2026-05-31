"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/anim/Reveal";
import MarqueeBar from "@/components/layout/MarqueeBar";
import DrippyDivider from "@/components/decorative/DrippyDivider";
import BlobFrame from "@/components/decorative/BlobFrame";
import { newsArticles, featuredArticle } from "@/lib/data/news";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

const MARQUEE = [
  "NEW RELEASES",
  "TOUR DATES",
  "LABEL NEWS",
  "MERCH DROPS",
  "ARTIST UPDATES",
];

const ROTATIONS = [-5, 4, -3, 5, -4, 3];

export default function NewsPageContent() {
  const featured = featuredArticle;
  const rest = newsArticles.filter((a) => a.id !== featured.id);

  return (
    <>
      {/* Immersive hero — featured story */}
      <section className="relative flex min-h-[85vh] flex-col justify-end overflow-hidden bg-smoke px-6 pb-16 pt-36 text-paper md:px-12 md:pb-24 md:pt-44">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${featured.image})` }}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-smoke via-smoke/90 to-smoke/60"
        />
        <div
          aria-hidden
          className="animate-blob pointer-events-none absolute -right-32 top-20 h-[50vh] w-[50vh] bg-violet opacity-20"
          style={{ borderRadius: "42% 58% 63% 37% / 41% 44% 56% 59%" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 mx-auto w-full max-w-6xl"
        >
          <Badge rotate={-6} color="var(--pink)" textColor="var(--ghost)" className="mb-6">
            {featured.category}
          </Badge>
          <h1 className="max-w-4xl font-display text-5xl leading-[0.88] tracking-wide text-paper md:text-8xl">
            {featured.title}
          </h1>
          <p className="mt-6 max-w-2xl font-mono text-sm leading-relaxed text-paper/75 md:text-base">
            {featured.excerpt}
          </p>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-pink">
            {formatDate(featured.date)}
          </p>
        </motion.div>
      </section>

      <MarqueeBar items={MARQUEE} variant="pink" direction="left" />

      {/* Featured image editorial block */}
      <section className="bg-paper px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <Reveal>
            <BlobFrame borderColor="var(--ink)" borderWidth={3} className="aspect-[4/3] shadow-sticker">
              <img src={featured.image} alt={featured.title} className="h-full w-full object-cover" />
            </BlobFrame>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl tracking-wide text-ink md:text-5xl">
              Latest From The Label
            </h2>
            <p className="mt-6 font-mono text-sm leading-relaxed text-ink/80 md:text-base">
              Release announcements, tour dates, merch drops, and everything
              happening at Lonely Records. This is where the story unfolds — one
              headline at a time.
            </p>
            <Link
              href="/submitdemo"
              className="mt-8 inline-block font-mono text-xs uppercase tracking-[0.18em] underline decoration-pink decoration-2 underline-offset-4 hover:text-pink"
            >
              Submit A Demo →
            </Link>
          </Reveal>
        </div>
      </section>

      <DrippyDivider color="var(--ink)" />

      {/* News grid */}
      <section className="halftone bg-paper px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-display text-5xl tracking-wide text-ink md:text-6xl">
              All Stories
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((article, i) => (
              <Reveal key={article.id} index={i % 3}>
                <article className="group sticker sticker-hover flex h-full flex-col overflow-hidden rounded-2xl bg-paper transition-transform duration-200 hover:-translate-y-1">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-3 top-3">
                      <Badge rotate={ROTATIONS[i % ROTATIONS.length]} className="text-xs">
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
                      {formatDate(article.date)}
                    </p>
                    <h3 className="mt-2 font-sub text-xl leading-tight text-ink group-hover:text-pink">
                      {article.title}
                    </h3>
                    <p className="mt-3 flex-1 font-mono text-xs leading-relaxed text-ink/65">
                      {article.excerpt}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <DrippyDivider color="var(--smoke)" />

      {/* Newsletter CTA — dark inverted */}
      <section className="bg-smoke px-6 py-24 text-paper md:px-12 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Badge rotate={5} className="mb-6">
              Stay In The Loop
            </Badge>
            <h2 className="font-display text-5xl tracking-wide text-volt md:text-6xl">
              Never Miss A Drop
            </h2>
            <p className="mt-6 font-mono text-sm leading-relaxed text-paper/70">
              New releases, tour announcements, and zine drops — straight to
              your inbox. No spam, just music.
            </p>
            <form
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="you@email.com"
                className="rounded-full border-[3px] border-paper/30 bg-smoke px-5 py-3 font-mono text-sm text-paper placeholder:text-paper/40 focus:border-pink focus:outline-none sm:min-w-[280px]"
              />
              <button
                type="submit"
                className="sticker sticker-hover rounded-full bg-pink px-8 py-3 font-mono text-sm uppercase tracking-wide text-ghost hover:-translate-y-0.5"
              >
                Subscribe
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
