import type { Metadata } from "next";

import { ContactForm } from "@/components/landing/ldp/ContactForm";
import { LdpFooter } from "@/components/landing/ldp/LdpFooter";
import { TopMenu } from "@/components/landing/ldp/TopMenu";
import { FINILO_CONTACT_EMAIL } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact Us — Finilo",
  description: "Get in touch with the Finilo team. Questions, feedback, or partnership ideas — we'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <main
      className="relative min-h-screen w-full overflow-x-clip bg-black text-white"
      style={{
        fontFamily: "var(--font-sora)",
        backgroundImage: "url('/images/hero-grid-pattern.svg')",
        backgroundRepeat: "repeat-x",
        backgroundPosition: "center top",
        backgroundSize: "1512px auto",
      }}
    >
      <TopMenu />

      <div className="mx-auto flex w-full max-w-[1144px] flex-col gap-8 px-4 pb-20 pt-40 sm:px-6 sm:pt-48 lg:px-8">
        <h1 className="text-center text-[clamp(1.75rem,6vw,3.5rem)] font-semibold leading-[1.1]">
          Contact Us
        </h1>

        <div className="mx-auto flex max-w-[640px] flex-col items-center gap-4 text-center text-[16px] leading-[1.6] text-[#8e8e93]">
          <p>
            Questions about Finilo, feedback, or partnership ideas? Send us a message — we read every note.
          </p>
          <p>
            You can also email us directly at{" "}
            <a className="text-white underline decoration-[#545454] underline-offset-4 hover:decoration-white" href={`mailto:${FINILO_CONTACT_EMAIL}`}>
              {FINILO_CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>

        <ContactForm />

        <LdpFooter className="flex w-full max-w-[1388px] flex-col items-center px-4 pt-12 leading-[0] sm:px-0" />
      </div>
    </main>
  );
}
