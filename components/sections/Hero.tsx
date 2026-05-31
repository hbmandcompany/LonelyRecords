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
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-paper px-6 pb-24 pt-32 md:px-12">
      {/* Background blob */}
      <div
        aria-hidden
        className="animate-blob pointer-events-none absolute -right-32 top-24 h-[70vh] w-[70vh] bg-volt opacity-15"
        style={{ borderRadius: "42% 58% 63% 37% / 41% 44% 56% 59%" }}
      />

      {/* Floating sticker */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6, rotate: 20 }}
        animate={{ opacity: 1, scale: 1, rotate: 8 }}
        transition={{ duration: 0.6, ease: EXPO, delay: 0.7 }}
        className="absolute right-6 top-28 z-20 md:right-16 md:top-32"
      >
        <Badge rotate={8} variant="star" className="max-w-[180px] text-sm">
          New Music Every Season
        </Badge>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-6xl"
      >
        <div className="font-display leading-[0.82] tracking-wide">
          <motion.h1
            variants={curtain}
            className="text-hero text-ink"
            style={{ fontSize: "clamp(72px, 12vw, 180px)" }}
          >
            LONELY
          </motion.h1>
          <motion.h1
            variants={curtain}
            className="ml-[8vw] text-ink"
            style={{ fontSize: "clamp(72px, 12vw, 180px)", lineHeight: 0.82 }}
          >
            RECORDS
          </motion.h1>
        </div>

        <motion.p
          variants={item}
          className="mt-8 font-mono text-sm tracking-wide text-ink/80 md:text-base"
        >
          indie pop. unbeatable records.
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
