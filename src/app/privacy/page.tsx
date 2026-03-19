/* eslint-disable @next/next/no-img-element -- pixel-perfect Figma layout uses precise <img> dimensions */

import { L } from "@/lib/ldpAssets";
import { TopMenu } from "@/components/landing/ldp/TopMenu";

function Footer({ className }: { className?: string }) {
  return (
    <div className={className || "relative flex w-[1388px] flex-col items-center gap-[94px] leading-[0]"} style={{ fontFamily: "var(--font-sora)" }}>
      <div className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start opacity-10">
        <div className="relative col-1 row-1 ml-[637.73px] mt-[18.76px] h-[271.973px] w-[750.27px]">
          <img alt="" className="absolute block max-w-none size-full" src={L.logo} />
        </div>
        <div className="relative col-1 row-1 ml-0 mt-0 h-[309.486px] w-[600.216px]">
          <div className="absolute inset-[0_0_5.29%_0]">
            <img alt="" className="absolute block max-w-none size-full" src={L.group22} />
          </div>
        </div>
      </div>

      <div className="relative flex w-full min-w-full flex-col justify-center text-center text-[14px] font-semibold leading-[1.4] text-[#8e8e93] not-italic">
        <p>© Copyright 2025. All Rights Reserved</p>
      </div>
    </div>
  );
}

function LegalBlock() {
  return (
    <div className="flex flex-col justify-center relative shrink-0 w-full">
      <p className="leading-[1.1] mb-0">
        So, even though UNCUT.wtf is a one-man band, when it says “we,” “our,” “us,” or “website”
        on this page, we are referring to UNCUT.wtf. It just sounds a bit more official, don’t you
        think?
      </p>
      <p className="leading-[1.1] mb-0">
        When we say “you” or “your,” we are referring to… well, you — and the other wonderful
        people who visit this website.
      </p>
      <p className="mb-0">
        <span className="leading-[1.1]">
          {`The below “Privacy Policy” and “Terms of Use” may change from time to time and any changes will be reflected on this page. If the changes are significant, we will provide a more prominent notice. All changes made to this page are tracked `}
        </span>
        <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[1.1] text-white underline" href="https://github.com/kaspernordkvist/uncut_legal_stuff">
          <span className="[text-decoration-skip-ink:none] decoration-solid leading-[1.1]">
            on Github
          </span>
        </a>
        <span className="leading-[1.1]">.</span>
      </p>
      <p className="leading-[1.1] mb-0">
        If you have any questions or concerns about the content of this page, please send an email.
        There’s no legal team but we’ll do our best to answer.
      </p>
      <p className="leading-[1.1]">&nbsp;</p>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen w-full bg-black text-white overflow-hidden" style={{ fontFamily: "var(--font-sora)" }}>
      <div className="relative mx-auto min-h-[2946px] w-[1512px] overflow-hidden">
        <TopMenu />

        {/* Grid pattern */}
        <div className="absolute inset-[-0.06%_-1.26%_79.97%_-0.4%] pointer-events-none">
          <img alt="" className="absolute block max-w-none size-full" src={L.gridPattern} />
        </div>

        {/* Main legal text */}
        <div className="absolute content-stretch flex flex-col gap-[23px] items-start leading-[0] left-[184px] not-italic text-[0px] text-[24px] text-white top-[423px] w-[1144px]">
          <LegalBlock />
          <LegalBlock />
          <LegalBlock />
          <LegalBlock />
          <LegalBlock />
          <LegalBlock />
        </div>

        <Footer className="absolute bottom-[60.26px] content-stretch flex flex-col gap-[94px] items-center leading-[0] left-[62px] w-[1388px]" />

        {/* Page title */}
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center leading-[0] left-[789px] not-italic text-[67.319px] text-center text-white top-[256px] whitespace-nowrap">
          <p className="leading-[1.1]">Privacy Policy</p>
        </div>
      </div>
    </main>
  );
}

