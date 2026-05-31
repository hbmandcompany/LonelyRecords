"use client";

import { FormEvent, useState } from "react";
import Button from "@/components/ui/Button";

export default function SubmitDemoForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="sticker rounded-2xl bg-paper p-8 text-center">
        <p className="font-display text-3xl tracking-wide text-pink">
          Demo Received!
        </p>
        <p className="mt-4 font-mono text-sm text-ink/70">
          Thanks for sending your music. We&apos;ll be in touch if it&apos;s a
          fit.
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-xl border-[3px] border-ink bg-paper px-4 py-3 font-mono text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-pink";

  return (
    <form
      onSubmit={handleSubmit}
      className="sticker space-y-5 rounded-2xl bg-paper p-6 md:p-8"
    >
      <div>
        <label htmlFor="artistName" className="mb-2 block font-mono text-xs uppercase tracking-[0.18em]">
          Artist / Band Name
        </label>
        <input id="artistName" name="artistName" required className={field} placeholder="Your project name" />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-[0.18em]">
          Email
        </label>
        <input id="email" name="email" type="email" required className={field} placeholder="you@email.com" />
      </div>

      <div>
        <label htmlFor="demoLink" className="mb-2 block font-mono text-xs uppercase tracking-[0.18em]">
          Demo Link
        </label>
        <input id="demoLink" name="demoLink" type="url" required className={field} placeholder="SoundCloud, Bandcamp, Dropbox…" />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-[0.18em]">
          Tell Us About It
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${field} resize-y`}
          placeholder="Genre, influences, where you're based…"
        />
      </div>

      <Button type="submit" variant="pink" className="w-full sm:w-auto">
        Send Demo
      </Button>
    </form>
  );
}
