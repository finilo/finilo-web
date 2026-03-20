type LdpFooterProps = {
  className?: string;
};

const defaultClassName =
  "relative flex w-[1388px] flex-col items-center leading-[0]";

export function LdpFooter({ className = defaultClassName }: LdpFooterProps) {
  return (
    <div className={className} style={{ fontFamily: "var(--font-sora)" }}>
      {/* eslint-disable-next-line @next/next/no-img-element -- SVG export matches Figma dimensions */}
      <img
        alt="Finilo"
        className="pointer-events-none block h-auto w-full max-w-full shrink-0"
        height={400}
        src="/images/footer.svg"
        width={1388}
      />
      <p className="mt-2 text-[12px] leading-normal text-[#8e8e93]">
        Copyright {new Date().getFullYear()}. All Rights Reserved.
      </p>
    </div>
  );
}
