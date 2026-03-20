type LdpFooterProps = {
  className?: string;
};

const defaultClassName =
  "relative flex w-[694px] flex-col items-center leading-[0]";

export function LdpFooter({ className = defaultClassName }: LdpFooterProps) {
  return (
    <div className={className} style={{ fontFamily: "var(--font-sora)" }}>
      {/* eslint-disable-next-line @next/next/no-img-element -- SVG export matches Figma dimensions */}
      <img
        alt="Finilo"
        className="pointer-events-none block h-auto w-full max-w-full shrink-0"
        height={200}
        src="/images/footer.svg"
        width={694}
      />
      <p className="mt-2 text-[12px] leading-normal text-[#8e8e93]">
        Copyright {new Date().getFullYear()}. All Rights Reserved.
      </p>
    </div>
  );
}
