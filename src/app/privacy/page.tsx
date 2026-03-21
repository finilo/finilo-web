import type { Metadata } from "next";

import { LdpFooter } from "@/components/landing/ldp/LdpFooter";
import { TopMenu } from "@/components/landing/ldp/TopMenu";

export const metadata: Metadata = {
  title: "Privacy Policy — Finilo",
  description:
    "Finilo Privacy Policy explains how we collect, use, and protect your personal data. PIPEDA, GDPR, and CCPA compliant.",
};

export default function PrivacyPolicyPage() {
  return (
    <main
      className="relative min-h-screen w-full overflow-x-clip bg-black text-white"
      style={{
        fontFamily: "var(--font-sora)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-40 sm:opacity-100"
        style={{
          backgroundImage: "url('/images/hero-grid-pattern.svg')",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "center top",
          backgroundSize: "1512px auto",
        }}
      />
      <div className="relative z-10">
        <TopMenu />

        <div className="mx-auto flex w-full max-w-[1144px] flex-col gap-8 px-4 pb-20 pt-40 sm:px-6 sm:pt-48 lg:px-8">
          <h1 className="text-center text-[clamp(1.75rem,6vw,3.5rem)] font-semibold leading-[1.1]">
            Privacy Policy
          </h1>
          <p className="text-center text-[16px] leading-[1.5] text-[#8e8e93]">
            Finilo Subscription Manager (PIPEDA, GDPR, CCPA Compliant)
          </p>
          <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
            Finilo Privacy Policy explains how we collect, use, and protect your
            personal data when you use our subscription management and reminder
            app. This policy is designed to comply with Canadian privacy law
            (PIPEDA), as well as GDPR and CCPA requirements.
          </p>
          <div className="flex flex-col gap-1 text-[14px] leading-[1.6] text-[#8e8e93]">
            <p>Effective Date: March 19, 2026</p>
            <p>Last Updated: March 19, 2026</p>
          </div>
          <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
            {`Finilo ("Finilo", "we", "our", or "us") is committed to protecting your privacy in accordance with applicable
          laws, including the Personal Information Protection and Electronic Documents Act (PIPEDA), the General Data
          Protection Regulation (GDPR), and the California Consumer Privacy Act (CCPA), where applicable.`}
          </p>

          {/* 1 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-[24px] font-semibold leading-[1.2]">
              1. Information We Collect
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
              As a subscription management app, Finilo collects only the
              information necessary to help you track subscriptions and receive
              reminders. We collect the following categories of information:
            </p>
            <ul className="flex flex-col gap-2 pl-6 text-[16px] leading-[1.6] text-[#8e8e93]">
              <li className="list-disc">
                <strong className="text-white">Account Information:</strong>{" "}
                name, email, authentication data
              </li>
              <li className="list-disc">
                <strong className="text-white">Financial Metadata:</strong>{" "}
                subscription names, billing cycles, reminder settings (we do NOT
                access bank accounts unless explicitly integrated in the future)
              </li>
              <li className="list-disc">
                <strong className="text-white">Usage Data:</strong>{" "}
                interactions, feature usage, logs
              </li>
              <li className="list-disc">
                <strong className="text-white">
                  Device &amp; Technical Data:
                </strong>{" "}
                IP address, device type, OS, browser
              </li>
            </ul>
          </section>

          {/* 2 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-[24px] font-semibold leading-[1.2]">
              2. Legal Basis (GDPR)
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
              We process data based on:
            </p>
            <ul className="flex flex-col gap-2 pl-6 text-[16px] leading-[1.6] text-[#8e8e93]">
              <li className="list-disc">
                Contractual necessity (to provide the service)
              </li>
              <li className="list-disc">
                Legitimate interest (product improvement, fraud prevention)
              </li>
              <li className="list-disc">
                Consent (notifications, optional features)
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-[24px] font-semibold leading-[1.2]">
              3. How We Use Information
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
              We use your information to operate Finilo as a subscription
              tracking and reminder service.
            </p>
            <ul className="flex flex-col gap-2 pl-6 text-[16px] leading-[1.6] text-[#8e8e93]">
              <li className="list-disc">Provide and operate Finilo</li>
              <li className="list-disc">Send reminders and notifications</li>
              <li className="list-disc">Improve features and reliability</li>
              <li className="list-disc">Provide customer support</li>
              <li className="list-disc">Detect fraud and abuse</li>
            </ul>
          </section>

          {/* 4 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-[24px] font-semibold leading-[1.2]">
              4. Sharing of Information
            </h2>
            <p className="text-[16px] font-semibold leading-[1.6] text-white">
              We do NOT sell personal data.
            </p>
            <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
              We may share data with:
            </p>
            <ul className="flex flex-col gap-2 pl-6 text-[16px] leading-[1.6] text-[#8e8e93]">
              <li className="list-disc">
                Cloud providers and infrastructure partners
              </li>
              <li className="list-disc">Analytics providers</li>
              <li className="list-disc">
                Legal authorities when required by law
              </li>
            </ul>
          </section>

          {/* 5 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-[24px] font-semibold leading-[1.2]">
              5. International Transfers
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
              Your data may be processed outside Canada. We ensure appropriate
              safeguards (e.g., standard contractual clauses).
            </p>
          </section>

          {/* 6 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-[24px] font-semibold leading-[1.2]">
              6. Data Retention
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
              We retain data only as long as necessary:
            </p>
            <ul className="flex flex-col gap-2 pl-6 text-[16px] leading-[1.6] text-[#8e8e93]">
              <li className="list-disc">
                <strong className="text-white">Active accounts:</strong>{" "}
                retained while account is active
              </li>
              <li className="list-disc">
                <strong className="text-white">Deleted accounts:</strong> data
                deleted within a reasonable period unless legally required
              </li>
            </ul>
          </section>

          {/* 7 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-[24px] font-semibold leading-[1.2]">
              7. Your Rights
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
              Depending on your jurisdiction, you may:
            </p>
            <ul className="flex flex-col gap-2 pl-6 text-[16px] leading-[1.6] text-[#8e8e93]">
              <li className="list-disc">Access your data</li>
              <li className="list-disc">Request correction or deletion</li>
              <li className="list-disc">Withdraw consent</li>
              <li className="list-disc">Request data portability</li>
              <li className="list-disc">
                Opt out of data sale (CCPA &ndash; although we do not sell data)
              </li>
            </ul>
            <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
              Requests:{" "}
              <a
                className="text-white underline decoration-[#545454] underline-offset-4 hover:decoration-white"
                href="mailto:support@finilo.io"
              >
                support@finilo.io
              </a>
            </p>
          </section>

          {/* 8 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-[24px] font-semibold leading-[1.2]">
              8. Security
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
              We use industry-standard safeguards including encryption in
              transit (HTTPS), secure authentication, and access controls.
              However, no system is completely secure.
            </p>
          </section>

          {/* 9 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-[24px] font-semibold leading-[1.2]">
              9. Data Storage &amp; Architecture
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
              Finilo is a cloud-based application:
            </p>
            <ul className="flex flex-col gap-2 pl-6 text-[16px] leading-[1.6] text-[#8e8e93]">
              <li className="list-disc">
                <strong className="text-white">Backend:</strong> Node.js/Express
                services
              </li>
              <li className="list-disc">
                <strong className="text-white">Database:</strong> Secure
                cloud-hosted databases (e.g., PostgreSQL)
              </li>
              <li className="list-disc">
                <strong className="text-white">Mobile App:</strong> React Native
                (Expo)
              </li>
              <li className="list-disc">
                <strong className="text-white">Web App:</strong> Next.js
              </li>
            </ul>
            <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
              We do not store banking credentials or directly access financial
              accounts.
            </p>
          </section>

          {/* 10 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-[24px] font-semibold leading-[1.2]">{`10. Children's Privacy`}</h2>
            <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
              Finilo is not intended for users under 13 (or 16 in certain
              jurisdictions).
            </p>
          </section>

          {/* 11 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-[24px] font-semibold leading-[1.2]">
              11. Changes
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
              We may update this policy. Continued use constitutes acceptance.
            </p>
          </section>

          {/* 12 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-[24px] font-semibold leading-[1.2]">
              12. Contact
            </h2>
            <div className="flex flex-col gap-1 text-[16px] leading-[1.6] text-[#8e8e93]">
              <p>107-1 Bow Ridge Rd, Cochrane, AB T4C 2J1, Canada</p>
              <p>
                <a
                  className="text-white underline decoration-[#545454] underline-offset-4 hover:decoration-white"
                  href="mailto:support@finilo.io"
                >
                  support@finilo.io
                </a>
              </p>
            </div>
          </section>

          <LdpFooter className="mx-auto flex w-full max-w-[694px] flex-col items-center px-4 pt-12 leading-[0] sm:px-0" />
        </div>
      </div>
    </main>
  );
}
