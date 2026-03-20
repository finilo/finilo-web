import type { Metadata } from "next";

import { ContactForm } from "@/components/landing/ldp/ContactForm";
import { LdpFooter } from "@/components/landing/ldp/LdpFooter";
import { LdpResponsiveShell } from "@/components/landing/ldp/LdpResponsiveShell";
import { TopMenu } from "@/components/landing/ldp/TopMenu";
import { FINILO_CONTACT_EMAIL } from "@/lib/contact";
import { L } from "@/lib/ldpAssets";

export const metadata: Metadata = {
  title: "Contact Us — Finilo",
  description: "Get in touch with the Finilo team. Questions, feedback, or partnerships — we’d love to hear from you.",
};

export default function ContactPage() {
  return (
    <main
      className="relative min-h-screen w-full overflow-x-clip bg-black text-white"
      style={{ fontFamily: "var(--font-sora)" }}
    >
      <LdpResponsiveShell designMinHeight={1400} variant="compact">
        <div className="relative min-h-[1400px] overflow-x-clip">
          <TopMenu />

          {/* Grid pattern */}
          <div className="pointer-events-none absolute inset-[-0.06%_-1.26%_79.97%_-0.4%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" className="absolute block max-w-none size-full" src={L.gridPattern} />
          </div>

          {/* Page title */}
          <div className="absolute left-1/2 top-[220px] flex -translate-x-1/2 flex-col justify-center px-4 text-center text-[clamp(1.75rem,8vw,4.2rem)] leading-[1.1] text-white not-italic min-[1200px]:top-[256px] min-[1200px]:px-0 min-[1200px]:text-[67.319px] min-[1200px]:leading-[0] min-[1200px]:whitespace-nowrap">
            <p className="leading-[1.1]">Contact Us</p>
          </div>

          {/* Body — centered column (matches title alignment) */}
          <div className="absolute left-1/2 top-[320px] flex w-[calc(100%-2rem)] max-w-[1144px] -translate-x-1/2 flex-col items-center gap-8 pb-40 text-center text-[18px] leading-[1.45] text-white not-italic min-[1200px]:top-[360px] min-[1200px]:gap-10 min-[1200px]:pb-48 min-[1200px]:text-[20px]">
            <div className="flex max-w-[640px] flex-col gap-4 text-[#8e8e93]">
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
          </div>

          <LdpFooter className="absolute bottom-10 left-4 right-4 flex flex-col content-stretch items-center gap-10 leading-[0] min-[1200px]:bottom-[60.26px] min-[1200px]:left-[62px] min-[1200px]:right-auto min-[1200px]:w-[1388px] min-[1200px]:gap-[94px]" />
        </div>
      </LdpResponsiveShell>
    </main>
  );
}
