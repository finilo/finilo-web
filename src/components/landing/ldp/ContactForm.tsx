"use client";

import { FINILO_CONTACT_EMAIL } from "@/lib/contact";
import { submitContactForm } from "@/lib/contactAction";
import { useState, useRef } from "react";

const sf = "var(--font-sora)";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const result = await submitContactForm(formData);

    if (result.success) {
      setStatus("sent");
      formRef.current?.reset();
    } else {
      setErrorMsg(result.error ?? "Something went wrong");
      setStatus("error");
    }
  }

  const fieldClass =
    "w-full rounded-[11px] border border-[#262626] bg-[#0f0f0f] px-4 py-3 text-[16px] leading-normal text-white outline-none placeholder:text-[#6b7280] focus:border-[#545454] focus:ring-1 focus:ring-[#545454]";

  return (
    <form
      ref={formRef}
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
        disabled={status === "sending"}
        className="mt-2 w-full rounded-[11px] border-[0.912px] border-dashed border-[#545454] bg-[#262626] px-6 py-4 text-[18px] font-medium text-white transition-colors hover:bg-[#303030] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8e8e93] focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>

      {status === "sent" ? (
        <p className="text-center text-[14px] text-[#54ffa7]" role="status">
          {"Message sent! We'll get back to you soon."}
        </p>
      ) : null}

      {status === "error" ? (
        <p className="text-center text-[14px] text-[#eb4335]" role="alert">
          {errorMsg} You can also email us at{" "}
          <a className="text-white underline" href={`mailto:${FINILO_CONTACT_EMAIL}`}>
            {FINILO_CONTACT_EMAIL}
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
