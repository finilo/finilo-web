"use client";

import { useEffect, useState, type ReactNode } from "react";

export const FINILO_APP_STORE_URL =
  "https://apps.apple.com/ca/app/finilo-subscription-tracker/id6758056526";

function isAndroidUserAgent(ua: string): boolean {
  return /Android/i.test(ua);
}

/** True when running in the browser on Android (safe for click handlers). */
export function isFiniloAndroidClient(): boolean {
  return typeof navigator !== "undefined" && isAndroidUserAgent(navigator.userAgent);
}

type AppStoreDownloadLinkProps = {
  className?: string;
  children: ReactNode;
};

/**
 * App Store outbound links: Android users get an inert control (no navigation)
 * because there is no Android app yet.
 */
export function AppStoreDownloadLink({ className, children }: AppStoreDownloadLinkProps) {
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    setIsAndroid(isAndroidUserAgent(navigator.userAgent));
  }, []);

  if (isAndroid) {
    return (
      <span
        className={className}
        aria-disabled="true"
        title="Android app coming soon"
      >
        {children}
      </span>
    );
  }

  return (
    <a
      href={FINILO_APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
