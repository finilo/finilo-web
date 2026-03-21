"use client";
/* eslint-disable @next/next/no-img-element -- Figma-exported layout uses precise <img> dimensions */

import { L } from "@/lib/ldpAssets";
import { DownloadFiniloButton } from "./DownloadFiniloButton";
import { LdpFooter } from "./LdpFooter";
import { TopMenu } from "./TopMenu";

const sf = "var(--font-sora)";

export function LdpLanding() {
  const getDownloadUrl = () => {
    const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
    const nav = navigator as unknown as { ontouchend?: unknown };
    const isIOS =
      /iPad|iPhone|iPod/.test(ua) ||
      (ua.includes("Macintosh") && "ontouchend" in nav);

    // TODO: Replace with the exact store links you want these buttons to use.
    const iosUrl =
      "https://apps.apple.com/us/app/subpilot-by-finelo/id6751181747";
    const androidUrl =
      "https://play.google.com/store/apps/details?id=io.zimran.subpilot&hl=en_US";
    return isIOS ? iosUrl : androidUrl;
  };

  const openDownload = () => {
    window.open(getDownloadUrl(), "_blank", "noopener,noreferrer");
  };

  const features = [
    {
      title: "Track Everything",
      description: "See all your subscriptions in one simple dashboard.",
      icon: L.taskProgress,
      bg: "bg-[#387df5]",
    },
    {
      title: "Payment Reminders",
      description: "Get notified before you're charged.",
      icon: L.bell,
      bg: "bg-[#ffbb54]",
    },
    {
      title: "Spending Insights",
      description: "Know exactly how much subscriptions cost you every month.",
      icon: L.chart,
      bg: "bg-[#54ffa7]",
    },
    {
      title: "AI powered recommendation",
      description: "Get AI-powered recommendations on possible savings.",
      icon: L.cross,
      bg: "bg-[#eb4335]",
    },
  ];

  const steps = [
    "Get Finilo and create your account",
    "Add your subscriptions",
    "Get reminders before billing",
    "Manage or cancel anytime",
  ];

  return (
    <div
      className="relative min-h-screen w-full bg-black text-white"
      style={{ fontFamily: sf }}
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

        {/* Hero */}
        <section className="flex w-full flex-col pt-28 sm:pt-32">
          <div
            className="mx-auto grid w-full max-w-[1512px] min-h-[560px] sm:min-h-[640px] lg:min-h-[700px]"
            style={{ gridTemplateAreas: "'stack'" }}
          >
            <div className="pointer-events-none [grid-area:stack] hidden items-stretch justify-center sm:flex">
              <img
                alt=""
                className="h-full w-auto max-w-full object-contain"
                src="/images/hero-group-10.svg"
              />
            </div>

            <div className="[grid-area:stack] z-10 flex flex-col items-center px-4 pt-10 text-center sm:pt-14">
              <div className="mb-5 flex h-[29px] w-[80px] items-center justify-center">
                <img
                  alt=""
                  className="pointer-events-none block size-full object-contain"
                  src={L.logo1}
                />
              </div>
              <h1 className="max-w-[620px] text-[clamp(2rem,8vw,4.2rem)] font-semibold leading-[1.05]">
                See Every Subscription
              </h1>
              <div className="mt-4 rounded-[9px] border-[1.653px] border-dashed border-[#545454] bg-[#262626] px-8 py-4 text-[clamp(2rem,7vw,3.2rem)] font-semibold leading-[1.1]">
                Clearly
              </div>
              <p className="mt-4 max-w-[520px] text-[clamp(1.1rem,3.8vw,2rem)] font-normal leading-normal text-[#8e8e93]">
                {`Track, manage, and stop paying for subscriptions you don't use, all in one place.`}
              </p>
              <div
                id="download"
                className="mt-6 flex w-full flex-col items-center gap-3"
              >
                <DownloadFiniloButton
                  onActivate={openDownload}
                  fontFamily={sf}
                  iconLeftSrc={L.finiloIcon}
                  iconRightSrc={L.group7}
                  wrapperClassName="h-[48px] w-[270px] max-w-full shrink-0 sm:h-[72.973px] sm:w-[405px]"
                />
                <p className="text-center text-[14px] font-normal leading-[1.4] text-[#8e8e93]">
                  Free to use • No hidden charges
                </p>
              </div>
            </div>
          </div>

          {/* Social strip */}
          <div
            className="h-[261px] w-full pb-8"
            style={{
              backgroundImage: `url(${L.socialStrip})`,
              backgroundRepeat: "repeat-x",
              backgroundSize: "1024px 261px",
              backgroundPosition: "left top",
            }}
          />
        </section>

        <div className="mx-auto flex w-full max-w-[1512px] flex-col pb-20">
          {/* Rest of page content */}
          <div className="mx-auto flex w-full max-w-[1144px] flex-col gap-16 px-4 pt-8 sm:px-6 lg:px-8">
            {/* Take control banner */}
            <section className="flex flex-col items-center gap-8 py-4 text-center">
              <h2
                className="w-full max-w-[787px] text-[clamp(2rem,7.2vw,4.2rem)] leading-[1.1]"
                style={{ fontWeight: 410 }}
              >
                Take Control of Your Subscriptions
              </h2>
              <div className="flex w-full max-w-[846px] items-center justify-center">
                <img
                  alt=""
                  className="pointer-events-none block h-auto w-full object-contain"
                  src="/images/take-control-of-your-subsctiptions.svg"
                />
              </div>
            </section>

            {/* Key features */}
            <section className="mt-4 flex w-full flex-col items-center gap-10">
              <div className="flex w-full flex-col items-center gap-4 text-center">
                <h3 className="text-[42px] font-semibold leading-[1.1]">
                  Key Features
                </h3>
                <p className="max-w-[718px] text-[24px] font-normal leading-normal text-[#8e8e93]">
                  {`Finilo helps you track all your subscriptions in one place, stay ahead of payments, and cut off anything you don't need.`}
                </p>
              </div>
              <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {features.map((feature) => (
                  <article
                    key={feature.title}
                    className="flex min-h-[368px] flex-col overflow-hidden rounded-[40px] bg-[#0f0f0f]"
                  >
                    <div
                      className={`flex h-[214px] items-center justify-center ${feature.bg}`}
                    >
                      <img
                        alt=""
                        className="pointer-events-none h-[160px] w-[160px] object-contain"
                        src={feature.icon}
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-[10px] p-6">
                      <p className="text-[20px] font-semibold leading-[1.2] tracking-[-0.4px] text-[#f3f3f3]">
                        {feature.title}
                      </p>
                      <p className="text-[16px] font-normal leading-[1.4] text-[#8e8e93]">
                        {feature.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
              <DownloadFiniloButton
                onActivate={openDownload}
                fontFamily={sf}
                iconLeftSrc={L.finiloIcon}
                iconRightSrc={L.group7}
                wrapperClassName="h-[48px] w-[270px] max-w-full shrink-0 sm:h-[72.973px] sm:w-[405px]"
              />
            </section>

            {/* How it works */}
            <section className="flex w-full flex-col items-center gap-10">
              <div className="flex w-full flex-col items-center gap-4 text-center">
                <h3 className="text-[42px] font-semibold leading-[1.1]">
                  How It Works
                </h3>
                <p className="text-[24px] font-normal leading-normal text-[#8e8e93]">
                  It takes less than a minute to get started.
                </p>
              </div>
              <div className="grid w-full grid-cols-1 gap-6 rounded-[60px] border border-[#262626] bg-[#0f0f0f] p-8 md:grid-cols-2 xl:grid-cols-4 xl:p-[42px]">
                {steps.map((step, index) => (
                  <div
                    key={step}
                    className="flex flex-col items-center gap-4 text-center"
                  >
                    <p className="w-full text-[42px] font-normal leading-[1.1] text-[#c2a7ff]">
                      {index + 1}
                    </p>
                    <div className="flex w-full items-center justify-center gap-4">
                      {index === 0 ? (
                        <img
                          alt=""
                          className="size-[67px] shrink-0 object-cover"
                          src={L.finiloIcon2}
                        />
                      ) : null}
                      <p className="text-[20px] font-normal leading-[1.2] text-[#8e8e93]">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Subscriptions + Finilo keeps */}
            <section className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
              <article className="flex min-w-0 flex-col gap-6 rounded-[60px] border border-[#262626] bg-[#0f0f0f] p-6 sm:gap-8 sm:p-8 min-[1100px]:p-10">
                <div className="mx-auto flex h-[min(180px,40vw)] w-full max-w-[280px] items-center justify-center sm:h-[200px] md:max-w-[260px] min-[1100px]:h-[260px] min-[1100px]:max-w-[280px]">
                  <img
                    alt=""
                    className="pointer-events-none max-h-full w-full object-contain object-center"
                    src={L.wallet}
                  />
                </div>
                <div className="flex w-full flex-col items-start gap-4">
                  <div
                    className="w-full text-left text-[clamp(1.25rem,3.5vw,2.625rem)] leading-[1.1] text-white"
                    style={{ fontWeight: 600 }}
                  >
                    <p className="mb-0">Subscriptions</p>
                    <p>Add Up Fast</p>
                  </div>
                  <div className="w-full text-left text-[clamp(0.95rem,2.2vw,2rem)] font-normal leading-normal text-[#8e8e93]">
                    <p>
                      {`It's easy to forget what you signed up for. Monthly charges pile up, free trials turn into payments, and before you know it, you're spending money on services you barely use.`}
                    </p>
                  </div>
                </div>
              </article>

              <article className="flex min-w-0 flex-col gap-6 rounded-[60px] border border-[#262626] bg-[#0f0f0f] p-6 sm:gap-8 sm:p-8 min-[1100px]:p-10">
                <div className="mx-auto flex size-[min(220px,44vw)] items-center justify-center overflow-hidden rounded-[40px] bg-[#262626] sm:rounded-[60px]">
                  <img
                    alt=""
                    className="pointer-events-none h-[167px] w-[167px] object-contain"
                    src={L.check}
                  />
                </div>
                <div className="flex w-full flex-col items-start gap-4">
                  <div
                    className="w-full text-left text-[clamp(1.25rem,3.5vw,2.625rem)] leading-[1.1] text-white"
                    style={{ fontWeight: 600 }}
                  >
                    <p className="mb-0">Finilo Keeps</p>
                    <p>Everything in Check</p>
                  </div>
                  <div className="w-full text-left text-[clamp(0.95rem,2vw,1.5rem)] font-normal leading-normal text-[#8e8e93]">
                    <p>{`Finilo helps you track all your subscriptions in one place, stay ahead of payments, and cut off anything you don't need.`}</p>
                  </div>
                </div>
              </article>
            </section>

            <LdpFooter className="mx-auto flex w-full max-w-[694px] flex-col items-center px-4 pt-8 leading-[0] sm:px-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
