/* eslint-disable @next/next/no-img-element -- pixel-perfect Figma layout uses precise <img> dimensions */

import { LdpFooter } from "@/components/landing/ldp/LdpFooter";
import { LdpResponsiveShell } from "@/components/landing/ldp/LdpResponsiveShell";
import { TopMenu } from "@/components/landing/ldp/TopMenu";
import { L } from "@/lib/ldpAssets";

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
    <main
      className="relative min-h-screen w-full overflow-x-clip bg-black text-white"
      style={{ fontFamily: "var(--font-sora)" }}
    >
      <LdpResponsiveShell designMinHeight={2946} variant="legal">
        <div className="relative min-h-[2946px] overflow-x-clip">
          <TopMenu />

          {/* Grid pattern */}
          <div className="absolute inset-[-0.06%_-1.26%_79.97%_-0.4%] pointer-events-none">
            <img alt="" className="absolute block max-w-none size-full" src={L.gridPattern} />
          </div>

          {/* Main legal text */}
          <div className="absolute left-4 right-4 top-[380px] flex flex-col content-stretch items-start gap-[23px] text-[24px] leading-[1.1] text-white not-italic min-[1200px]:left-[184px] min-[1200px]:right-auto min-[1200px]:top-[423px] min-[1200px]:w-[1144px]">
            <LegalBlock />
            <LegalBlock />
            <LegalBlock />
            <LegalBlock />
            <LegalBlock />
            <LegalBlock />
          </div>

          <LdpFooter className="absolute bottom-10 left-4 right-4 flex flex-col content-stretch items-center gap-10 leading-[0] min-[1200px]:bottom-[60.26px] min-[1200px]:left-[62px] min-[1200px]:right-auto min-[1200px]:w-[1388px] min-[1200px]:gap-[94px]" />

          {/* Page title */}
          <div className="absolute left-1/2 top-[220px] flex -translate-x-1/2 flex-col justify-center text-center text-[clamp(1.75rem,8vw,4.2rem)] leading-[1.1] text-white not-italic min-[1200px]:top-[256px] min-[1200px]:text-[67.319px] min-[1200px]:leading-[0] min-[1200px]:whitespace-nowrap">
            <p className="leading-[1.1]">Privacy Policy</p>
          </div>
        </div>
      </LdpResponsiveShell>
    </main>
  );
}

