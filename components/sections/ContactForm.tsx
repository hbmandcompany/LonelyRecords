"use client";

import { FormEvent, useState } from "react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="sticker rounded-2xl bg-paper p-8 text-center">
        <p className="font-display text-3xl tracking-wide text-pink">
          Message Sent!
        </p>
        <p className="mt-4 font-mono text-sm text-ink/70">
          We&apos;ll get back to you soon. Thanks for reaching out.
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-sm border-[2px] border-pink/30 bg-smoke px-4 py-3 font-mono text-sm text-ink placeholder:text-ink/35 focus:outline-none focus:ring-2 focus:ring-pink/50";

  return (
    <form
      onSubmit={handleSubmit}
      className="sticker space-y-5 rounded-sm bg-smoke p-6 md:p-8"
    >
      <div>
        <label htmlFor="name" className="mb-2 block font-mono text-xs uppercase tracking-[0.18em]">
          Name
        </label>
        <input id="name" name="name" required className={field} placeholder="Your name" />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-[0.18em]">
          Email
        </label>
        <input id="email" name="email" type="email" required className={field} placeholder="you@email.com" />
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block font-mono text-xs uppercase tracking-[0.18em]">
          Subject
        </label>
        <input id="subject" name="subject" required className={field} placeholder="What's this about?" />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-[0.18em]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`${field} resize-y`}
          placeholder="Say hello…"
        />
      </div>

      <Button type="submit" variant="pink" className="w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  );
}
