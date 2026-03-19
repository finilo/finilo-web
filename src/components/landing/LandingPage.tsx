import Image from "next/image";
import { FiniloWordmark, WalletIllustration } from "./FiniloLogo";
import { ThemeToggle } from "./ThemeToggle";

const services: { name: string; src: string | null; bg?: string }[] = [
  { name: "Spotify", src: "/images/services/spotify.png" },
  { name: "Netflix", src: "/images/services/netflix.png" },
  { name: "YouTube", src: "/images/services/youtube.png" },
  { name: "Disney+", src: "/images/services/disneyplus.png" },
  { name: "Apple", src: "/images/services/apple.png", bg: "#f4f4f7" },
  { name: "Prime", src: "/images/services/primevideo.png" },
  { name: "Adobe", src: "/images/services/adobe.png" },
  { name: "More", src: null, bg: "#6b7280" },
];

export type LandingAssets = {
  /** Drop `public/images/figma/hero-wallet.png` (export from Figma or run figma:assets + rename). */
  heroWalletSrc?: string;
  valueWalletSrc?: string;
  phoneMockupSrc?: string;
};

const features = [
  {
    title: "Track Everything",
    desc: "See all your subscriptions and renewal dates in one dashboard.",
    icon: "💳",
    tint: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
  },
  {
    title: "Get Notified",
    desc: "Renewal reminders so you never miss a date or unwanted charge.",
    icon: "🔔",
    tint: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
  },
  {
    title: "Smart Insights",
    desc: "Understand spending patterns and where your money goes each month.",
    icon: "📊",
    tint: "bg-teal-500/15 text-teal-600 dark:text-teal-400",
  },
  {
    title: "Stay Organized",
    desc: "Categories and search to keep every service easy to find.",
    icon: "📁",
    tint: "bg-red-500/15 text-red-600 dark:text-red-400",
  },
];

const steps = [
  "Add your subscriptions in seconds.",
  "Finilo tracks renewals and amounts automatically.",
  "Get reminders before every billing date.",
  "Cancel or adjust with full visibility.",
];

export function LandingPage({
  heroWalletSrc,
  valueWalletSrc,
  phoneMockupSrc,
}: LandingAssets = {}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#" className="text-foreground no-underline">
            <FiniloWordmark />
          </a>
          <div className="flex items-center gap-3">
            <a
              href="#download"
              className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-white dark:bg-accent dark:text-[#0a0a0f] sm:inline-flex"
            >
              Download
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="border-b border-border px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-[2.75rem] lg:leading-tight">
                See Every Subscription Clearly
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted">
                Track, manage, and visualize all your subscriptions in one place. Never lose sight
                of renewals, price changes, or services you no longer use.
              </p>
              <div id="download" className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-2xl border border-border bg-surface px-6 py-3.5 text-sm font-semibold shadow-sm transition hover:bg-surface-elevated"
                >
                  <AppleStoreIcon />
                  Download on the App Store
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-2xl border border-border bg-surface px-6 py-3.5 text-sm font-semibold shadow-sm transition hover:bg-surface-elevated"
                >
                  <PlayStoreIcon />
                  Get it on Google Play
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm">
                <div className="absolute -inset-4 rounded-3xl bg-accent-soft blur-2xl" aria-hidden />
                {heroWalletSrc ? (
                  <Image
                    src={heroWalletSrc}
                    alt=""
                    width={560}
                    height={448}
                    className="relative mx-auto h-auto w-full max-w-[280px] object-contain"
                    priority
                  />
                ) : (
                  <WalletIllustration variant="a" className="relative mx-auto h-auto w-full max-w-[280px]" />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="border-b border-border bg-surface-elevated/50 py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted">
              Works with the services you already use
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {services.map((s) =>
                s.src ? (
                  <div
                    key={s.name}
                    title={s.name}
                    className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-white p-2 shadow-md ring-1 ring-black/5 dark:bg-surface-elevated sm:h-16 sm:w-16"
                    style={s.bg ? { backgroundColor: s.bg } : undefined}
                  >
                    <Image
                      src={s.src}
                      alt={s.name}
                      width={64}
                      height={64}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ) : (
                  <div
                    key={s.name}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-bold text-white shadow-md sm:h-16 sm:w-16"
                    style={{ backgroundColor: s.bg ?? "#6b7280" }}
                    title={s.name}
                  >
                    +
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Product showcase */}
        <section className="px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Take Control of Your Subscriptions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
              One app to see upcoming bills, total monthly spend, and every renewal at a glance.
            </p>
            <div className="mt-14 flex justify-center">
              {phoneMockupSrc ? (
                <Image
                  src={phoneMockupSrc}
                  alt="Finilo app subscriptions"
                  width={640}
                  height={1280}
                  className="h-auto w-full max-w-[320px] rounded-[2rem] shadow-2xl"
                />
              ) : (
                <PhoneMockup />
              )}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="border-y border-border bg-surface-elevated/30 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl font-bold sm:text-4xl">Built for clarity</h2>
            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-3xl border border-border bg-surface p-8 shadow-sm transition hover:shadow-md"
                >
                  <div
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${f.tint}`}
                  >
                    {f.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{f.title}</h3>
                  <p className="mt-2 text-muted">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-bold sm:text-4xl">How it works</h2>
            <ol className="mt-12 space-y-8">
              {steps.map((text, i) => (
                <li key={i} className="flex gap-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-lg font-bold text-[#0a0a0f]">
                    {i + 1}
                  </span>
                  <p className="pt-2 text-lg text-foreground">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Value prop */}
        <section className="border-t border-border bg-surface-elevated/40 px-4 py-20 sm:px-6">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Subscriptions Add Up Fast</h2>
              <p className="mt-6 text-lg text-muted">
                Small monthly fees compound before you notice. Finilo surfaces every recurring charge
                so you can decide what stays—and what goes—with confidence.
              </p>
            </div>
            <div className="flex justify-center">
              {valueWalletSrc ? (
                <Image
                  src={valueWalletSrc}
                  alt=""
                  width={520}
                  height={416}
                  className="h-auto w-full max-w-[260px] object-contain"
                />
              ) : (
                <WalletIllustration variant="b" className="h-auto w-full max-w-[260px]" />
              )}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-border bg-surface p-10 text-center shadow-lg sm:p-14">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-soft text-3xl">
              ✓
            </div>
            <h2 className="mt-8 text-2xl font-bold sm:text-3xl">
              Finilo Keeps Everything in Check
            </h2>
            <p className="mt-4 text-muted">
              Download the app and start organizing your subscriptions today.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#download"
                className="inline-flex rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white dark:bg-accent dark:text-[#0a0a0f]"
              >
                Download Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-surface py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 sm:px-6">
          <FiniloWordmark className="text-2xl" />
          <p className="max-w-md text-center text-sm text-muted">
            Subscription tracking made simple. Built for people who want clarity, not clutter.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted">
            <a href="#" className="hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground">
              Terms &amp; Conditions
            </a>
          </div>
          <p className="text-xs text-muted">© {new Date().getFullYear()} Finilo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative w-[min(100%,320px)]">
      <div className="rounded-[2.5rem] border-[10px] border-[#1c1c2e] bg-[#1c1c2e] p-2 shadow-2xl dark:border-[#2a2a3a] dark:bg-[#2a2a3a]">
        <div className="overflow-hidden rounded-[2rem] bg-background">
          <div className="border-b border-border px-4 py-3 text-center text-xs font-medium text-muted">
            Subscriptions
          </div>
          <div className="space-y-3 p-4">
            <SubRow
              name="Spotify Premium"
              amount="$10.99"
              date="Renews Mar 22"
              logoSrc="/images/services/spotify.png"
            />
            <SubRow
              name="Netflix"
              amount="$15.49"
              date="Renews Apr 3"
              logoSrc="/images/services/netflix.png"
            />
            <SubRow name="iCloud+" amount="$2.99" date="Renews Mar 28" logoSrc="/images/services/apple.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SubRow({
  name,
  amount,
  date,
  logoSrc,
}: {
  name: string;
  amount: string;
  date: string;
  logoSrc: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-border bg-surface-elevated p-3">
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1 dark:bg-white/10">
        <Image src={logoSrc} alt="" width={32} height={32} className="object-contain" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate font-medium">{name}</p>
        <p className="text-xs text-muted">{date}</p>
      </div>
      <p className="shrink-0 text-sm font-semibold">{amount}</p>
    </div>
  );
}

function AppleStoreIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayStoreIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden>
      <path fill="#EA4335" d="M3.6 1.5l10.5 10.5L3.6 22.5V1.5z" />
      <path fill="#FBBC04" d="M14.1 12L22.5 7.2V16.8L14.1 12z" />
      <path fill="#34A853" d="M3.6 22.5L14.1 12 3.6 1.5v21z" />
      <path fill="#4285F4" d="M22.5 16.8l-8.4-4.8 8.4-4.8v9.6z" />
    </svg>
  );
}
