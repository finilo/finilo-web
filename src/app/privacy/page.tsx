import type { Metadata } from "next";

import { LdpFooter } from "@/components/landing/ldp/LdpFooter";
import { TopMenu } from "@/components/landing/ldp/TopMenu";

export const metadata: Metadata = {
  title: "Privacy Policy — Finilo",
  description:
    "Finilo Privacy Policy explains how we collect, use, and protect your personal data. PIPEDA, GDPR, CCPA, and Google API Limited Use compliant.",
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
            <p>Last Updated: March 28, 2026</p>
          </div>
          <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
            {`Finilo ("Finilo", "we", "our", or "us") is committed to protecting your privacy in accordance with applicable
          laws, including the Personal Information Protection and Electronic Documents Act (PIPEDA), the General Data
          Protection Regulation (GDPR), and the California Consumer Privacy Act (CCPA), where applicable.`}
          </p>
          <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
            Finilo&apos;s use and transfer of information received from Google
            APIs will adhere to the Google API Services User Data Policy,
            including the Limited Use requirements.
          </p>

          {/* 1 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-[24px] font-semibold leading-[1.2]">
              1. Information We Collect
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
              As a subscription management app, Finilo requests access only to
              the minimum data necessary to provide the service. We collect the
              following categories of information:
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
              <li className="list-disc">
                <strong className="text-white">
                  Google Account Data (if connected):
                </strong>{" "}
                With user consent, Finilo may access Gmail message content
                (e.g., receipts, invoices, billing notifications) using
                read-only permissions to identify subscription and recurring
                billing information
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
              We do NOT sell personal data, including Google user data.
            </p>
            <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
              We may share data only as necessary with:
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
            <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
              We do not share Gmail data with third parties except as necessary
              to provide the service, for security purposes, or to comply with
              legal obligations, in accordance with Google&apos;s Limited Use
              requirements.
            </p>
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
              Users can revoke Google account access at any time via their
              Google account permissions page.
            </p>
            <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
              Requests:{" "}
              <a
                className="text-white underline decoration-[#545454] underline-offset-4 hover:decoration-white"
                href="mailto:support@finiloapp.xyz"
              >
                support@finiloapp.xyz
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
            <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
              For Google user data, Finilo applies strict security measures
              including encryption in transit and at rest, access controls,
              and monitoring to prevent unauthorized access.
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
                  href="mailto:support@finiloapp.xyz"
                >
                  support@finiloapp.xyz
                </a>
              </p>
            </div>
          </section>

          {/* 13 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-[24px] font-semibold leading-[1.2]">
              13. Google User Data Access and Compliance
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
              Finilo accesses Google user data only with explicit user consent
              and solely to provide its core subscription tracking functionality.
            </p>
            <ul className="flex flex-col gap-2 pl-6 text-[16px] leading-[1.6] text-[#8e8e93]">
              <li className="list-disc">
                <strong className="text-white">Scope of access:</strong>{" "}
                Read-only access to Gmail (
                <code className="rounded bg-white/10 px-1 py-0.5 text-[14px] text-white">
                  gmail.readonly
                </code>
                )
              </li>
              <li className="list-disc">
                <strong className="text-white">Purpose:</strong> Identify
                subscriptions and extract billing details (e.g., service name,
                amount, billing cycle, renewal date)
              </li>
              <li className="list-disc">
                <strong className="text-white">No modification:</strong> Finilo
                does not send, modify, or delete emails
              </li>
            </ul>

            <h3 className="text-[18px] font-semibold leading-[1.3] text-white">
              Limited Use Compliance
            </h3>
            <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
              Finilo complies with Google&apos;s Limited Use requirements:
            </p>
            <ul className="flex flex-col gap-2 pl-6 text-[16px] leading-[1.6] text-[#8e8e93]">
              <li className="list-disc">
                Data is used only to provide user-facing features within the app
              </li>
              <li className="list-disc">
                Data is not sold and is not used for advertising
              </li>
              <li className="list-disc">
                Data is not used to train machine learning or AI models
              </li>
              <li className="list-disc">
                Data is not transferred to third parties except:
                <ul className="mt-2 flex flex-col gap-2 pl-6">
                  <li className="list-disc">
                    to provide core functionality
                  </li>
                  <li className="list-disc">
                    for security or legal compliance
                  </li>
                </ul>
              </li>
            </ul>

            <h3 className="text-[18px] font-semibold leading-[1.3] text-white">
              Human Access Restrictions
            </h3>
            <p className="text-[16px] leading-[1.6] text-[#8e8e93]">
              Finilo does not allow humans to read Gmail data except:
            </p>
            <ul className="flex flex-col gap-2 pl-6 text-[16px] leading-[1.6] text-[#8e8e93]">
              <li className="list-disc">with user consent</li>
              <li className="list-disc">
                when necessary for security, debugging, or legal compliance
              </li>
            </ul>

            <h3 className="text-[18px] font-semibold leading-[1.3] text-white">
              Data Minimization
            </h3>
            <ul className="flex flex-col gap-2 pl-6 text-[16px] leading-[1.6] text-[#8e8e93]">
              <li className="list-disc">
                Only emails relevant to subscriptions are processed
              </li>
              <li className="list-disc">
                Only extracted subscription data is stored
              </li>
              <li className="list-disc">
                Full email content is not retained
              </li>
            </ul>
          </section>

          <LdpFooter className="mx-auto flex w-full max-w-[694px] flex-col items-center px-4 pt-12 leading-[0] sm:px-0" />
        </div>
      </div>
    </main>
  );
}
