"use client";

import { FINILO_CONTACT_EMAIL } from "@/lib/contact";
import { useState, type FormEvent } from "react";

const sf = "var(--font-sora)";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "opened">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent(
      name ? `Finilo — message from ${name}` : "Finilo — contact form",
    );
    const body = encodeURIComponent(
      [name && `Name: ${name}`, email && `Email: ${email}`, "", message].filter(Boolean).join("\n"),
    );

    window.location.href = `mailto:${FINILO_CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus("opened");
  }

  /* Match LDP inputs / Download CTA: 11px radius, #262626 / #545454 borders */
  const fieldClass =
    "w-full rounded-[11px] border border-[#262626] bg-[#0f0f0f] px-4 py-3 text-[16px] leading-normal text-white outline-none placeholder:text-[#6b7280] focus:border-[#545454] focus:ring-1 focus:ring-[#545454]";

  return (
    <form
      className="flex w-full max-w-[min(100%,520px)] flex-col gap-5 self-center text-left"
      onSubmit={handleSubmit}
      style={{ fontFamily: sf }}
    >
      <div>
        <label htmlFor="contact-name" className="mb-2 block text-[14px] font-medium text-[#8e8e93]">
          Name
        </label>
        <input id="contact-name" name="name" type="text" autoComplete="name" className={fieldClass} placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-2 block text-[14px] font-medium text-[#8e8e93]">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          className={fieldClass}
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-2 block text-[14px] font-medium text-[#8e8e93]">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          className={`${fieldClass} min-h-[140px] resize-y`}
          placeholder="How can we help?"
        />
      </div>
      <button
        type="submit"
        className="mt-2 w-full rounded-[11px] border-[0.912px] border-dashed border-[#545454] bg-[#262626] px-6 py-4 text-[18px] font-medium text-white transition-colors hover:bg-[#303030] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8e8e93] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        Send message
      </button>
      {status === "opened" ? (
        <p className="text-center text-[14px] text-[#8e8e93]" role="status">
          If your mail app didn’t open, email us at{" "}
          <a className="text-white underline" href={`mailto:${FINILO_CONTACT_EMAIL}`}>
            {FINILO_CONTACT_EMAIL}
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
