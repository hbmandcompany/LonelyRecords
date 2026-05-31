"use client";

import { motion, Variants } from "framer-motion";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EXPO } },
};

const curtain: Variants = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
  show: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: { duration: 0.8, ease: EXPO },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-void px-6 pb-24 pt-32 md:px-12">
      <div aria-hidden className="pointer-events-none absolute inset-0 haze-red" />
      <div aria-hidden className="pointer-events-none absolute inset-0 haze-purple" />
      <div aria-hidden className="pointer-events-none absolute inset-0 scanlines opacity-40" />

      <div
        aria-hidden
        className="animate-blob pointer-events-none absolute -right-32 top-24 h-[70vh] w-[70vh] bg-violet opacity-20"
        style={{ borderRadius: "42% 58% 63% 37% / 41% 44% 56% 59%" }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.6, rotate: 12 }}
        animate={{ opacity: 1, scale: 1, rotate: 3 }}
        transition={{ duration: 0.6, ease: EXPO, delay: 0.7 }}
        className="absolute right-6 top-28 z-20 md:right-16 md:top-32"
      >
        <Badge
          rotate={3}
          color="var(--void)"
          textColor="var(--pink)"
          className="max-w-[180px] text-xs uppercase tracking-[0.15em]"
        >
          New Music Every Season
        </Badge>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-6xl"
      >
        <div className="font-display leading-[0.82] tracking-[0.08em]">
          <motion.h1
            variants={curtain}
            className="rage-glow text-hero text-ghost"
            style={{ fontSize: "clamp(72px, 12vw, 180px)" }}
          >
            LONELY
          </motion.h1>
          <motion.h1
            variants={curtain}
            className="rage-glow ml-[8vw] text-pink"
            style={{ fontSize: "clamp(72px, 12vw, 180px)", lineHeight: 0.82 }}
          >
            RECORDS
          </motion.h1>
        </div>

        <motion.p
          variants={item}
          className="mt-8 font-mono text-sm tracking-wide text-ink/60 md:text-base"
        >
          Not So Bad After All
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <Button href="/catalog" variant="pink">
            Explore Catalog
          </Button>
          <Button href="/submitdemo" variant="ink">
            Submit A Demo
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
