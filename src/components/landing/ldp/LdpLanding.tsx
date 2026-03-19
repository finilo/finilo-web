"use client";
/* eslint-disable @next/next/no-img-element -- Figma-exported layout uses precise <img> dimensions */

import { L } from "@/lib/ldpAssets";
import { DownloadFiniloButton } from "./DownloadFiniloButton";
import { TopMenu } from "./TopMenu";
import Link from "next/link";

const sf = "var(--font-sora)";

function Footer({ className }: { className?: string }) {
  return (
    <div className={className || "relative flex w-[1388px] flex-col items-center gap-[94px] leading-[0]"}>
      <div className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start opacity-10">
        <div className="relative col-1 row-1 ml-[637.73px] mt-[18.76px] h-[271.973px] w-[750.27px]">
          <img alt="" className="pointer-events-none absolute block size-full max-w-none" src={L.logo} />
        </div>
        <div className="relative col-1 row-1 ml-0 mt-0 h-[309.486px] w-[600.216px]">
          <div className="absolute inset-[0_0_5.29%_0]">
            <img alt="" className="pointer-events-none absolute block size-full max-w-none" src={L.group22} />
          </div>
        </div>
      </div>
      <div className="relative flex w-full min-w-full shrink-0 flex-col justify-center text-center text-[14px] font-semibold leading-[1.4] text-[#8e8e93] not-italic">
        <p>© Copyright 2025. All Rights Reserved</p>
      </div>
    </div>
  );
}

function MaskedScreen() {
  const maskUrl = L.changeThisMask;
  return (
    <div className="relative ml-[-0.44px] mt-[-0.29px] h-[720.731px] w-[331.573px] overflow-hidden">
      <img
        alt=""
        className="block size-full max-w-none object-cover"
        height={720.731}
        src={L.changeThis1}
        width={331.573}
        style={{
          WebkitMaskImage: `url(${maskUrl})`,
          maskImage: `url(${maskUrl})`,
          WebkitMaskSize: "331.257px 720.314px",
          maskSize: "331.257px 720.314px",
          WebkitMaskPosition: "0.436px 0.291px",
          maskPosition: "0.436px 0.291px",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      />
    </div>
  );
}

export function LdpLanding() {
  // Legacy menu overlay kept in the file, but hidden now since `TopMenu` renders the real overlay.
  // This prevents the page from breaking while we refactor other menu markup.
  const menuOpen = false;
  const closeMenu = () => {};

  const menuImgVectorCancel = "https://www.figma.com/api/mcp/asset/5cd257f8-4de8-40fc-b44c-0cfd3aa1a9fa";
  const menuImgLogo = "https://www.figma.com/api/mcp/asset/863cb31d-3167-43dd-ad2e-ca310bf41255";
  const menuImgGroup22 = "https://www.figma.com/api/mcp/asset/479c2f0f-f976-4868-960a-64f332987c5b";

  const getDownloadUrl = () => {
    const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
    const nav = navigator as unknown as { ontouchend?: unknown };
    const isIOS =
      /iPad|iPhone|iPod/.test(ua) ||
      (ua.includes("Macintosh") && "ontouchend" in nav);

    // TODO: Replace with the exact store links you want these buttons to use.
    const iosUrl = "https://apps.apple.com/us/app/subpilot-by-finelo/id6751181747";
    const androidUrl = "https://play.google.com/store/apps/details?id=io.zimran.subpilot&hl=en_US";
    return isIOS ? iosUrl : androidUrl;
  };

  const openDownload = () => {
    window.open(getDownloadUrl(), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen overflow-x-auto bg-black">
      <div className="relative mx-auto min-h-[4947px] w-[1512px] bg-black text-white" style={{ fontFamily: "var(--font-sora)" }}>
        <TopMenu />

        {menuOpen ? (
          <div
            className="absolute inset-0 z-[40] bg-black"
            onMouseDown={(e) => {
              // Close only when clicking the background, not on the menu content itself.
              if (e.target === e.currentTarget) closeMenu();
            }}
          >
            {/* Grid background */}
            <div className="-translate-x-1/2 absolute h-[994.114px] left-[calc(50%+0.5px)] top-[-0.21px] w-[1537px]">
              <img alt="" className="absolute block max-w-none size-full" src={L.gridPattern} />
            </div>

            {/* Close (X) */}
            <button
              type="button"
              aria-label="Close menu"
              onClick={closeMenu}
              className="absolute block cursor-pointer left-[1305px] size-[92px] top-[104px]"
            >
              <div className="absolute inset-[20.83%]">
                <div className="absolute inset-[-2.8%]">
                  <img alt="" className="block max-w-none size-full" src={menuImgVectorCancel} />
                </div>
              </div>
            </button>

            {/* Menu items */}
            <div className="absolute flex flex-col gap-[27px] items-center left-[415px] top-[282px] w-[681px]">
              <Link
                href="/privacy"
                onClick={closeMenu}
                className="content-stretch flex items-center justify-center p-[10px] relative shrink-0"
              >
                <div
                  className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[67.319px] text-white text-center whitespace-nowrap"
                  style={{ fontFamily: sf, fontWeight: 400 }}
                >
                  <p className="leading-[1.1]">Privacy Policy</p>
                </div>
              </Link>

              <Link
                href="/agreement"
                onClick={closeMenu}
                className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 w-full"
              >
                <div
                  className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[67.319px] text-white text-center whitespace-nowrap"
                  style={{ fontFamily: sf, fontWeight: 400 }}
                >
                  <p className="leading-[1.1]">Terms &amp; Condition</p>
                </div>
              </Link>
            </div>

            {/* Footer (logo + copyright) */}
            <div className="absolute bottom-[55.51px] flex flex-col gap-[94px] items-center left-[62px] w-[1388px] leading-[0]">
              <div className="relative inline-grid grid-cols-[max-content] grid-rows-[max-content] opacity-10 place-items-start">
                <div className="relative col-1 row-1 ml-[637.73px] mt-[18.76px] h-[271.973px] w-[750.27px]">
                  <img alt="" className="absolute block max-w-none size-full" src={menuImgLogo} />
                </div>
                <div className="relative col-1 row-1 ml-0 mt-0 h-[309.486px] w-[600.216px]">
                  <div className="absolute inset-[0_0_5.29%_0]">
                    <img alt="" className="absolute block max-w-none size-full" src={menuImgGroup22} />
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col justify-center min-w-full not-italic shrink-0 text-[#8e8e93] text-center w-[min-content] text-[14px] font-semibold">
                <p className="leading-[1.4]">© Copyright 2025. All Rights Reserved</p>
              </div>
            </div>
          </div>
        ) : null}

        {/* Grid */}
        <div className="absolute inset-[-0.06%_-1.26%_79.97%_-0.4%] pointer-events-none">
          <img alt="" className="pointer-events-none absolute block size-full max-w-none" src={L.gridPattern} />
        </div>

        {/* Wallet hero left */}
        <div className="absolute left-[43px] top-[180px] flex h-[472.792px] w-[447.456px] items-center justify-center">
          <div className="-rotate-15 flex-none">
            <div className="relative h-[393.605px] w-[357.774px]">
              <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-contain" src={L.wallet} />
            </div>
          </div>
        </div>

        {/* Social marquee strip */}
        <div className="absolute left-0 top-[831px] h-[386px] w-[1509px] overflow-hidden">
          <div
            className="absolute left-0 top-[10px] h-[261px] w-full"
            style={{
              backgroundImage: `url(${L.socialStrip})`,
              backgroundRepeat: "repeat-x",
              backgroundSize: "1024px 261px",
              backgroundPosition: "center top",
            }}
          />
          <div
            className="absolute top-[124px] h-[262px] w-[1548px] -translate-x-1/2 bg-gradient-to-b from-[rgba(0,0,0,0)] from-[16.565%] to-black to-[90.244%]"
            style={{ left: "calc(50% - 3.5px)" }}
          />
        </div>

        {/* Hero text */}
        <div className="absolute left-[calc(50%-0.34px)] top-[106px] flex w-[605.316px] -translate-x-1/2 flex-col items-center gap-[42px] p-[25.336px]">
          <div className="relative flex shrink-0 flex-col items-center justify-center gap-[25.336px]">
            <div className="relative h-[29px] w-[80px] shrink-0">
              <img alt="" className="pointer-events-none absolute block size-full max-w-none" src={L.logo1} />
            </div>
            <div className="relative flex shrink-0 flex-col items-center gap-[26.246px]">
              <div
                className="relative w-[571.222px] shrink-0 text-center text-[67.319px] leading-[1.1] text-white not-italic"
                style={{ fontFamily: sf, fontWeight: 600 }}
              >
                <p>See Every Subscription </p>
              </div>
              <div className="relative flex shrink-0 content-stretch items-center justify-center rounded-[24px] border-[1.653px] border-dashed border-[#545454] bg-[#262626] px-[24.188px] py-[27.278px]">
                <div
                  className="relative shrink-0 whitespace-nowrap text-center text-[50.885px] leading-[1.1] text-white not-italic"
                  style={{ fontFamily: sf, fontWeight: 600 }}
                >
                  <p>Clearly</p>
                </div>
              </div>
            </div>
            <div className="relative w-[517px] shrink-0 text-center text-[32px] font-normal leading-normal text-[#8e8e93] not-italic">
              <p>Track, manage, and stop paying for subscriptions you don’t use — all in one place.</p>
            </div>
          </div>
          <div id="download" className="relative flex shrink-0 flex-col items-center gap-3">
            <DownloadFiniloButton
              onActivate={openDownload}
              fontFamily={sf}
              iconLeftSrc={L.finiloIcon}
              iconRightSrc={L.group7}
              wrapperClassName="relative h-[72.973px] w-[405px] shrink-0"
            />
            <p className="w-[517px] text-center text-[14px] font-normal leading-[1.4] text-[#8e8e93]">Free to use • No hidden charges</p>
          </div>
        </div>

        {/* YouTube card */}
        <div className="absolute left-[1074px] top-[329px] flex h-[174.154px] w-[327.269px] items-center justify-center">
          <div className="-rotate-15 flex-none">
            <div className="relative h-[96.436px] w-[312.974px]">
              <div className="absolute inset-[-57.03%_-18.85%_-65.33%_-18.85%]">
                <img alt="" className="block size-full max-w-none" height={214.436} src={L.rectangle2} width={430.974} />
              </div>
            </div>
          </div>
        </div>

        {/* Main column */}
        <div className="absolute left-[184px] top-[1283px] flex w-[1144px] flex-col gap-16">
          {/* Take control banner */}
          <div className="relative flex h-[876px] w-full shrink-0 flex-col items-center py-8 leading-[0]">
            <div
              className="relative w-[787px] shrink-0 text-center text-[67.319px] leading-[1.1] text-white not-italic"
              style={{ fontFamily: sf, fontWeight: 410 }}
            >
              <p>Take Control of Your Subscriptions</p>
            </div>
            <div className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start">
              <div className="relative col-1 row-1 ml-[177px] mt-[67.2px] inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start">
                <div className="relative col-1 row-1 ml-[449.26px] mt-[22.6px] size-[229.311px]">
                  <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-contain" src={L.adobe} />
                </div>
                <div className="relative col-1 row-1 ml-0 mt-[8.24px] flex size-[375.627px] items-center justify-center">
                  <div className="-rotate-15 flex-none">
                    <div className="relative size-[306.698px]">
                      <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover" src={L.appleMusic} />
                    </div>
                  </div>
                </div>
                <div className="relative col-1 row-1 ml-[261.96px] mt-[334.19px] size-[367.598px]">
                  <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover" src={L.img10995329} />
                </div>
                <div className="relative col-1 row-1 ml-[30.9px] mt-[281.67px] size-[364.097px]">
                  <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover" src={L.netflix3d} />
                </div>
                <div className="relative col-1 row-1 ml-[322.07px] mt-[152px] flex size-[257.617px] items-center justify-center">
                  <div className="rotate-15 flex-none">
                    <div className="relative size-[210.343px]">
                      <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover" src={L.spotify3d} />
                    </div>
                  </div>
                </div>
                <div className="relative col-1 row-1 ml-[276.1px] mt-0 size-[174.983px]">
                  <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover" src={L.appleTv} />
                </div>
              </div>
              <div className="relative col-1 row-1 ml-[23px] mt-[153.2px] inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start">
                <div className="relative col-1 row-1 ml-[392.92px] mt-[19.77px] size-[200.557px]">
                  <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-contain" src={L.adobe} />
                </div>
                <div className="relative col-1 row-1 ml-0 mt-[7.2px] flex size-[328.526px] items-center justify-center">
                  <div className="-rotate-15 flex-none">
                    <div className="relative size-[268.24px]">
                      <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover" src={L.appleMusic} />
                    </div>
                  </div>
                </div>
                <div className="relative col-1 row-1 ml-[229.11px] mt-[292.28px] size-[321.503px]">
                  <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover" src={L.img10995329} />
                </div>
                <div className="relative col-1 row-1 ml-[27.02px] mt-[246.35px] size-[318.441px]">
                  <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover" src={L.netflix3d} />
                </div>
                <div className="relative col-1 row-1 ml-[281.69px] mt-[132.94px] flex size-[225.313px] items-center justify-center">
                  <div className="rotate-15 flex-none">
                    <div className="relative size-[183.967px]">
                      <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover" src={L.spotify3d} />
                    </div>
                  </div>
                </div>
                <div className="relative col-1 row-1 ml-[241.48px] mt-0 size-[153.041px]">
                  <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover" src={L.appleTv} />
                </div>
              </div>
              <div className="relative col-1 row-1 ml-[230.11px] mt-[37px] inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start">
                <div className="relative col-1 row-1 ml-[39.59px] mt-0 inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start">
                  <div className="relative col-1 row-1 ml-0 mt-0 h-[744.396px] w-[360.234px]">
                    <div className="pointer-events-none absolute inset-0 overflow-hidden">
                      <img alt="" className="absolute left-0 top-0 size-full max-w-none" src={L.iphoneAir} />
                    </div>
                  </div>
                  <div className="relative col-1 row-1 ml-[14.64px] mt-[11.86px] inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start">
                    <div className="relative col-1 row-1 ml-0 mt-0 inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start">
                      <MaskedScreen />
                    </div>
                  </div>
                </div>
                <div className="relative col-1 row-1 ml-0 mt-[178.2px] h-[136px] w-[441px]">
                  <div className="absolute inset-[-40.44%_-13.38%_-46.32%_-13.38%]">
                    <img alt="" className="block size-full max-w-none" height={254} src={L.rectangle1} width={559} />
                  </div>
                </div>
              </div>
              <div className="col-1 row-1 ml-0 mt-0 h-[793px] w-[846px] bg-gradient-to-b from-[rgba(0,0,0,0)] from-[16.565%] to-black to-[90.244%]" />
            </div>
          </div>

          {/* Key features */}
          <div className="relative flex w-full shrink-0 flex-col items-center gap-[42px] mt-[88px]">
            <div className="relative flex w-full shrink-0 flex-col items-center gap-4 leading-[0] not-italic">
              <div className="relative shrink-0 whitespace-nowrap text-[42px] leading-[1.1] text-white" style={{ fontFamily: sf, fontWeight: 600 }}>
                <p>Key Features</p>
              </div>
              <div className="relative w-[718px] shrink-0 text-center text-[24px] font-normal leading-normal text-[#8e8e93]">
                <p>Finilo helps you track all your subscriptions in one place, stay ahead of payments, and cut off anything you don’t need.</p>
              </div>
            </div>
            <div className="relative flex h-[368px] w-full shrink-0 content-stretch items-center gap-6 overflow-clip">
              <div className="relative flex min-h-px min-w-px flex-[1_0_0] flex-col items-center overflow-clip rounded-[40px] bg-[#0f0f0f]">
                <div className="relative h-[214px] w-full shrink-0 overflow-clip bg-[#387df5]">
                  <div className="absolute left-[19.58%] right-[19.98%] top-[calc(50%-0.5px)] h-[162px] -translate-y-1/2">
                    <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-contain" src={L.taskProgress} />
                  </div>
                </div>
                <div className="relative flex w-full shrink-0 flex-col items-start gap-[10px] p-6 not-italic">
                  <p className="w-full text-[20px] leading-[1.2] tracking-[-0.4px] text-[#f3f3f3]" style={{ fontFamily: sf, fontWeight: 600 }}>
                    Track Everything
                  </p>
                  <p className="w-full text-[16px] font-normal leading-[1.4] text-[#8e8e93]">See all your subscriptions in one simple dashboard.</p>
                </div>
              </div>
              <div className="relative flex min-h-px min-w-px flex-[1_0_0] flex-col items-center overflow-clip rounded-[40px] bg-[#0f0f0f]">
                <div className="relative h-[214px] w-full shrink-0 overflow-clip bg-[#ffbb54]">
                  <div className="absolute left-1/2 top-1/2 size-[190px] -translate-x-1/2 -translate-y-1/2">
                    <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-contain" src={L.bell} />
                  </div>
                </div>
                <div className="relative flex w-full shrink-0 flex-col items-start gap-[10px] p-6 not-italic">
                  <p className="w-full text-[20px] leading-[1.2] tracking-[-0.4px] text-[#f3f3f3]" style={{ fontFamily: sf, fontWeight: 600 }}>
                    Payment Reminders
                  </p>
                  <p className="w-full text-[16px] font-normal leading-[1.4] text-[#8e8e93]">Get notified before you’re charged.</p>
                </div>
              </div>
              <div className="relative flex min-h-px min-w-px flex-[1_0_0] flex-col items-center overflow-clip rounded-[40px] bg-[#0f0f0f]">
                <div className="relative h-[220px] w-full shrink-0 overflow-clip bg-[#54ffa7]">
                  <div className="absolute left-[19.95%] right-[20.35%] top-[calc(50%-0.5px)] h-[160px] -translate-y-1/2">
                    <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-contain" src={L.chart} />
                  </div>
                </div>
                <div className="relative flex w-full shrink-0 flex-col items-start gap-[10px] p-6 not-italic">
                  <p className="w-full text-[20px] leading-[1.2] tracking-[-0.4px] text-[#f3f3f3]" style={{ fontFamily: sf, fontWeight: 600 }}>
                    Spending Insights
                  </p>
                  <p className="w-full text-[16px] font-normal leading-[1.4] text-[#8e8e93]">Know exactly how much subscriptions cost you every month.</p>
                </div>
              </div>
              <div className="relative flex min-h-px min-w-px flex-[1_0_0] flex-col items-center overflow-clip rounded-[40px] bg-[#0f0f0f]">
                <div className="relative h-[196px] w-full shrink-0 overflow-clip bg-[#eb4335]">
                  <div className="absolute left-[21.64%] right-[22.01%] top-[calc(50%-0.5px)] h-[151px] -translate-y-1/2">
                    <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-contain" src={L.cross} />
                  </div>
                </div>
                <div className="relative flex w-full shrink-0 flex-col items-start gap-[10px] p-6 not-italic">
                  <p className="w-full text-[20px] leading-[1.2] tracking-[-0.4px] text-[#f3f3f3]" style={{ fontFamily: sf, fontWeight: 600 }}>
                    AI powered recommendation
                  </p>
                  <p className="w-full text-[16px] font-normal leading-[1.4] text-[#8e8e93]">
                    Get AI-powered recommendations on possible savings.
                  </p>
                </div>
              </div>
            </div>
              <DownloadFiniloButton
                onActivate={openDownload}
                fontFamily={sf}
                iconLeftSrc={L.finiloIcon}
                iconRightSrc={L.group7}
                wrapperClassName="relative h-[72.973px] w-[405px] shrink-0"
              />
          </div>

          {/* How it works */}
          <div className="relative flex w-full shrink-0 flex-col items-center gap-[42px]">
            <div className="relative flex w-full shrink-0 flex-col items-center gap-4 leading-[0] not-italic whitespace-nowrap">
              <div className="relative shrink-0 text-[42px] leading-[1.1] text-white" style={{ fontFamily: sf, fontWeight: 600 }}>
                <p>How It Works</p>
              </div>
              <div className="relative shrink-0 text-[24px] font-normal leading-normal text-[#8e8e93]">
                <p>It takes less than a minute to get started.</p>
              </div>
            </div>
            <div className="relative flex w-full shrink-0 content-stretch items-center justify-center gap-6 overflow-clip rounded-[60px] border border-solid border-[#262626] bg-[#0f0f0f] p-[42px]">
              <div className="relative flex w-[281px] shrink-0 flex-col items-center gap-4">
                <div className="w-full text-[42px] leading-[1.1] text-[#c2a7ff] not-italic" style={{ fontFamily: sf, fontWeight: 400 }}>
                  <p>1</p>
                </div>
                <div className="relative flex w-full shrink-0 items-center gap-4">
                  <div className="relative size-[67px] shrink-0">
                    <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover" src={L.finiloIcon2} />
                  </div>
                  <div className="relative min-h-px min-w-px flex-[1_0_0] text-[20px] font-normal leading-[1.2] text-[#8e8e93] not-italic">
                    <p>Get Finilo and create your account</p>
                  </div>
                </div>
              </div>
              <div className="relative h-0 w-[50px] shrink-0">
                <div className="absolute inset-[-3.68px_-1%_-3.68px_0]">
                  <img alt="" className="block size-full max-w-none" height={7.364} src={L.arrow3} width={50.5} />
                </div>
              </div>
              <div className="relative flex min-h-px min-w-px flex-[1_0_0] flex-col items-center gap-4 leading-[0] not-italic">
                <div className="relative w-full shrink-0 text-[42px] leading-[1.1] text-[#c2a7ff]" style={{ fontFamily: sf, fontWeight: 400 }}>
                  <p>2</p>
                </div>
                <div className="relative w-full shrink-0 text-[20px] font-normal leading-[1.2] text-[#8e8e93]">
                  <p>Add your subscriptions</p>
                </div>
              </div>
              <div className="relative h-0 w-[50px] shrink-0">
                <div className="absolute inset-[-3.68px_-1%_-3.68px_0]">
                  <img alt="" className="block size-full max-w-none" height={7.364} src={L.arrow3} width={50.5} />
                </div>
              </div>
              <div className="relative flex min-h-px min-w-px flex-[1_0_0] flex-col items-center gap-4 leading-[0] not-italic">
                <div className="relative w-full shrink-0 text-[42px] leading-[1.1] text-[#c2a7ff]" style={{ fontFamily: sf, fontWeight: 400 }}>
                  <p>3</p>
                </div>
                <div className="relative w-full shrink-0 text-[20px] font-normal leading-[1.2] text-[#8e8e93]">
                  <p>Get reminders before billing</p>
                </div>
              </div>
              <div className="relative h-0 w-[50px] shrink-0">
                <div className="absolute inset-[-3.68px_-1%_-3.68px_0]">
                  <img alt="" className="block size-full max-w-none" height={7.364} src={L.arrow3} width={50.5} />
                </div>
              </div>
              <div className="relative flex min-h-px min-w-px flex-[1_0_0] flex-col items-center gap-4 leading-[0] not-italic">
                <div className="relative w-full shrink-0 text-[42px] leading-[1.1] text-[#c2a7ff]" style={{ fontFamily: sf, fontWeight: 400 }}>
                  <p>4</p>
                </div>
                <div className="relative w-full shrink-0 text-[20px] font-normal leading-[1.2] text-[#8e8e93]">
                  <p>Manage or cancel anytime</p>
                </div>
              </div>
            </div>
          </div>

          {/* Subscriptions add up */}
          <div className="relative flex w-full shrink-0 content-stretch items-center gap-[42px] rounded-[60px] border border-solid border-[#262626] bg-[#0f0f0f] p-16">
            <div className="relative flex min-h-px min-w-px flex-[1_0_0] flex-col items-center gap-4 not-italic">
              <div className="w-full text-[42px] leading-[1.1] text-white" style={{ fontFamily: sf, fontWeight: 600 }}>
                <p className="mb-0">Subscriptions</p>
                <p>Add Up Fast</p>
              </div>
              <div className="w-full text-[32px] font-normal leading-normal text-[#8e8e93]">
                <p>
                  It’s easy to forget what you signed up for. Monthly charges pile up, free trials turn into payments, and before you know it — you’re
                  spending money on services you barely use.
                </p>
              </div>
            </div>
            <div className="relative h-[323px] w-[294px] shrink-0">
              <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-contain" src={L.wallet} />
            </div>
          </div>

          {/* Finilo keeps check */}
          <div className="relative flex w-full shrink-0 content-stretch items-center gap-[42px] rounded-[60px] border border-solid border-[#262626] bg-[#0f0f0f] p-16">
            <div className="relative size-[250px] shrink-0 overflow-clip rounded-[60px] bg-[#262626]">
              <div className="absolute left-[9.2%] right-[9.6%] top-[calc(50%-0.5px)] h-[167px] -translate-y-1/2">
                <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-contain" src={L.check} />
              </div>
            </div>
            <div className="relative flex min-h-px min-w-px flex-[1_0_0] flex-col items-center gap-4 not-italic">
              <div className="w-full whitespace-pre-wrap text-[42px] leading-[1.1] text-white" style={{ fontFamily: sf, fontWeight: 600 }}>
                <p className="mb-0">Finilo Keeps </p>
                <p>Everything in Check</p>
              </div>
              <div className="w-full text-[24px] font-normal leading-normal text-[#8e8e93]">
                <p>Finilo helps you track all your subscriptions in one place, stay ahead of payments, and cut off anything you don’t need.</p>
              </div>
            </div>
          </div>
        </div>

        <Footer className="absolute bottom-[60px] left-[62px] flex w-[1388px] flex-col items-center gap-[94px] leading-[0]" />
      </div>
    </div>
  );
}
