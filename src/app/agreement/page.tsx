import type { Metadata } from "next";

import { LdpFooter } from "@/components/landing/ldp/LdpFooter";
import { TopMenu } from "@/components/landing/ldp/TopMenu";

export const metadata: Metadata = {
  title: "Terms of Service — Finilo",
  description:
    "Finilo Terms of Service govern your use of our subscription tracking and reminder platform.",
};

export default function AgreementPage() {
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
            Terms of Service
          </h1>
          <p className="text-center text-[16px] leading-[1.5] text-[#8e8e93]">
            Finilo Subscription Tracker App Terms &amp; Conditions
          </p>
          <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
            These Finilo Terms of Service govern your use of our subscription
            tracking and reminder platform, including our mobile app and web
            application.
          </p>
          <div className="flex flex-col gap-1 text-[14px] leading-[1.6] text-[#8e8e93]">
            <p>Effective Date: March 19, 2026</p>
            <p>Last Updated: March 19, 2026</p>
          </div>
          <p className="text-[16px] font-semibold leading-[1.6] text-white">
            By using Finilo, you agree to these Terms.
          </p>

          {/* 1 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-[24px] font-semibold leading-[1.2]">
              1. Eligibility
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
              Finilo is a subscription tracking app intended for users who meet
              the legal age requirement in their jurisdiction. You must be at
              least the age of majority in your jurisdiction (18+ in most
              regions).
            </p>
          </section>

          {/* 2 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-[24px] font-semibold leading-[1.2]">
              2. Use of Service
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
              You agree to use Finilo only for lawful purposes and not to misuse
              the service.
            </p>
          </section>

          {/* 3 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-[24px] font-semibold leading-[1.2]">
              3. Accounts
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
              You are responsible for safeguarding your account credentials.
            </p>
          </section>

          {/* 4 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-[24px] font-semibold leading-[1.2]">
              4. Payments &amp; Apple In-App Purchases
            </h2>
            <ul className="flex flex-col gap-2 pl-6 text-[16px] leading-[1.6] text-[#8e8e93]">
              <li className="list-disc">
                Certain features may require a one-time payment (e.g., lifetime
                unlock).
              </li>
              <li className="list-disc">{`Payments made via Apple In-App Purchases are governed by Apple's terms and conditions.`}</li>
              <li className="list-disc">
                Apple is responsible for billing, refunds, and transaction
                handling.
              </li>
              <li className="list-disc">
                We do not store or process your payment card details.
              </li>
              <li className="list-disc">
                If web payments are introduced in the future, they may be
                processed via third-party providers (e.g., Stripe).
              </li>
            </ul>
          </section>

          {/* 5 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-[24px] font-semibold leading-[1.2]">
              5. No Financial Advice
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
              Finilo provides organizational tools only and does not provide
              financial, legal, or investment advice.
            </p>
          </section>

          {/* 6 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-[24px] font-semibold leading-[1.2]">
              6. Subscription Tracking Disclaimer
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
              Finilo is a subscription management and reminder tool and does not
              replace official billing systems from service providers.
            </p>
            <ul className="flex flex-col gap-2 pl-6 text-[16px] leading-[1.6] text-[#8e8e93]">
              <li className="list-disc">
                Finilo does not guarantee accuracy of subscription detection,
                billing dates, or charges.
              </li>
              <li className="list-disc">
                You are solely responsible for verifying your subscriptions and
                payments.
              </li>
            </ul>
          </section>

          {/* 7 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-[24px] font-semibold leading-[1.2]">
              7. Termination
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
              We may suspend or terminate your account at any time for violation
              of these Terms.
            </p>
          </section>

          {/* 8 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-[24px] font-semibold leading-[1.2]">
              8. Intellectual Property
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
              All content, trademarks, and software are owned by Finilo.
            </p>
          </section>

          {/* 9 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-[24px] font-semibold leading-[1.2]">
              9. Disclaimer of Warranties
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
              {`The service is provided "as is" and "as available" without warranties of any kind.`}
            </p>
          </section>

          {/* 10 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-[24px] font-semibold leading-[1.2]">
              10. Limitation of Liability
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
              To the maximum extent permitted by law (including Canadian
              consumer protection laws):
            </p>
            <ul className="flex flex-col gap-2 pl-6 text-[16px] leading-[1.6] text-[#8e8e93]">
              <li className="list-disc">
                Finilo shall not be liable for indirect, incidental, or
                consequential damages
              </li>
              <li className="list-disc">
                Our total liability shall not exceed the amount you paid in the
                last 12 months
              </li>
            </ul>
          </section>

          {/* 11 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-[24px] font-semibold leading-[1.2]">
              11. Indemnification
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
              You agree to indemnify and hold Finilo harmless from claims
              arising from your use of the service.
            </p>
          </section>

          {/* 12 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-[24px] font-semibold leading-[1.2]">
              12. Governing Law
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
              These Terms are governed by the laws of Alberta, Canada.
            </p>
          </section>

          {/* 13 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-[24px] font-semibold leading-[1.2]">
              13. Dispute Resolution
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
              Disputes shall be resolved in the courts of Alberta, Canada unless
              otherwise required by applicable consumer protection laws.
            </p>
          </section>

          {/* 14 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-[24px] font-semibold leading-[1.2]">
              14. Changes to Terms
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
              We may update these Terms at any time. Continued use constitutes
              acceptance.
            </p>
          </section>

          {/* 15 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-[24px] font-semibold leading-[1.2]">
              15. Contact
            </h2>
            <div className="flex flex-col gap-1 text-[16px] leading-[1.6] text-[#8e8e93]">
              <p>107-1 Bow Ridge Rd, Cochrane, AB T4C 2J1, Canada</p>
              <p>
                <a
                  className="text-white underline decoration-[#545454] underline-offset-4 hover:decoration-white"
                  href="mailto:support@finiloapp.xyz"
                >
                  support@finiloapp.xyz
                </a>
              </p>
            </div>
          </section>

          {/* 16 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-[24px] font-semibold leading-[1.2]">
              16. Class Action Waiver &amp; Arbitration (U.S. Users)
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
              If you are a resident of the United States:
            </p>
            <ul className="flex flex-col gap-2 pl-6 text-[16px] leading-[1.6] text-[#8e8e93]">
              <li className="list-disc">
                <strong className="text-white">Binding Arbitration:</strong> Any
                dispute, claim, or controversy arising out of or relating to
                these Terms or the use of Finilo shall be resolved by binding
                arbitration on an individual basis, except for claims eligible
                for small claims court.
              </li>
              <li className="list-disc">
                <strong className="text-white">Class Action Waiver:</strong> You
                agree to waive any right to participate in a class action, class
                arbitration, or representative proceeding.
              </li>
              <li className="list-disc">
                <strong className="text-white">Arbitration Rules:</strong>{" "}
                Arbitration will be administered by a recognized arbitration
                provider (e.g., AAA) under its applicable rules.
              </li>
              <li className="list-disc">
                <strong className="text-white">Opt-Out:</strong> You may opt out
                of this arbitration agreement within 30 days of first accepting
                these Terms by contacting us at{" "}
                <a
                  className="text-white underline decoration-[#545454] underline-offset-4 hover:decoration-white"
                  href="mailto:support@finiloapp.xyz"
                >
                  support@finiloapp.xyz
                </a>
                .
              </li>
            </ul>
          </section>

          {/* 17 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-[24px] font-semibold leading-[1.2]">
              17. Service Availability (SLA Disclaimer)
            </h2>
            <ul className="flex flex-col gap-2 pl-6 text-[16px] leading-[1.6] text-[#8e8e93]">
              <li className="list-disc">
                Finilo does not guarantee uninterrupted or error-free operation.
              </li>
              <li className="list-disc">
                We may perform maintenance, updates, or changes that temporarily
                impact availability.
              </li>
              <li className="list-disc">
                To the maximum extent permitted by law, we disclaim any
                liability for downtime, delays, or service interruptions.
              </li>
            </ul>
          </section>

          {/* 18 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-[24px] font-semibold leading-[1.2]">
              18. Data Breach Notification (PIPEDA)
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
              In the event of a breach of security safeguards involving personal
              information under our control:
            </p>
            <ul className="flex flex-col gap-2 pl-6 text-[16px] leading-[1.6] text-[#8e8e93]">
              <li className="list-disc">
                We will assess whether the breach creates a real risk of
                significant harm as required under PIPEDA.
              </li>
              <li className="list-disc">
                Where required, we will notify affected individuals and the
                Office of the Privacy Commissioner of Canada as soon as
                feasible.
              </li>
              <li className="list-disc">
                We will maintain records of all breaches in accordance with
                legal requirements.
              </li>
            </ul>
          </section>

          <LdpFooter className="mx-auto flex w-full max-w-[694px] flex-col items-center px-4 pt-12 leading-[0] sm:px-0" />
        </div>
      </div>
    </main>
  );
}
