export function FiniloWordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-semibold tracking-tight lowercase ${className}`}
    >
      <OwlMark className="h-8 w-8 shrink-0" />
      <span className="text-xl">finilo</span>
    </span>
  );
}

export function OwlMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <ellipse cx="24" cy="28" rx="18" ry="16" fill="#03045e" className="dark:fill-[#90e0ef]" />
      <circle cx="16" cy="22" r="8" fill="#fbbf24" />
      <circle cx="32" cy="22" r="8" fill="#fbbf24" />
      <circle cx="16" cy="22" r="3.5" fill="#1c1c2e" />
      <circle cx="32" cy="22" r="3.5" fill="#1c1c2e" />
      <path
        d="M24 30c-2 0-3.5 1.2-4 3h8c-.5-1.8-2-3-4-3z"
        fill="#1c1c2e"
        className="dark:fill-[#0a0a0f]"
      />
    </svg>
  );
}

function WalletSvg({
  className = "",
  patternId,
}: {
  className?: string;
  patternId: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="20" y="40" width="160" height="100" rx="16" fill="#00c896" opacity="0.9" />
      <path d="M36 52h128v76H36V52z" fill={`url(#${patternId})`} opacity="0.35" />
      <rect x="130" y="70" width="40" height="36" rx="6" fill="#03045e" opacity="0.25" />
      <circle cx="150" cy="88" r="8" fill="#fbbf24" />
      <defs>
        <pattern id={patternId} width="12" height="12" patternUnits="userSpaceOnUse">
          <path d="M0 12L12 0M-3 3L3-3M9 15L15 9" stroke="#fff" strokeWidth="1" />
        </pattern>
      </defs>
    </svg>
  );
}

export function WalletIllustration({ className = "", variant = "a" as "a" | "b" }: { className?: string; variant?: "a" | "b" }) {
  return <WalletSvg className={className} patternId={variant === "a" ? "finilo-wallet-a" : "finilo-wallet-b"} />;
}
