"use client";

import { FormEvent, useState } from "react";
import Button from "@/components/ui/Button";

export default function LicensingForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="sticker rounded-2xl bg-paper p-8 text-center">
        <p className="font-display text-3xl tracking-wide text-pink">
          Request Received!
        </p>
        <p className="mt-4 font-mono text-sm text-ink/70">
          Our licensing team will review your inquiry and respond within 3–5
          business days.
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
        <label htmlFor="company" className="mb-2 block font-mono text-xs uppercase tracking-[0.18em]">
          Company / Project
        </label>
        <input id="company" name="company" required className={field} placeholder="Studio, brand, or project name" />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-[0.18em]">
          Email
        </label>
        <input id="email" name="email" type="email" required className={field} placeholder="you@company.com" />
      </div>

      <div>
        <label htmlFor="useCase" className="mb-2 block font-mono text-xs uppercase tracking-[0.18em]">
          Use Case
        </label>
        <select id="useCase" name="useCase" required className={field}>
          <option value="">Select a use case</option>
          <option value="film">Film / TV</option>
          <option value="advertising">Advertising</option>
          <option value="games">Video Games</option>
          <option value="podcast">Podcast / Digital</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="track" className="mb-2 block font-mono text-xs uppercase tracking-[0.18em]">
          Track / Artist (if known)
        </label>
        <input id="track" name="track" className={field} placeholder="e.g. Moon Water — Saturn Pony" />
      </div>

      <div>
        <label htmlFor="details" className="mb-2 block font-mono text-xs uppercase tracking-[0.18em]">
          Project Details
        </label>
        <textarea
          id="details"
          name="details"
          rows={4}
          required
          className={`${field} resize-y`}
          placeholder="Describe your project, timeline, territory, and budget range…"
        />
      </div>

      <Button type="submit" variant="pink" className="w-full sm:w-auto">
        Submit Inquiry
      </Button>
    </form>
  );
}
