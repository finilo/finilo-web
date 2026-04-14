"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

/**
 * OAuth callback — forwards Google OAuth response to the app.
 * Query params (?code=...&state=...) are preserved in the deep link.
 */
function OAuthRedirect() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const qs = searchParams.toString();
    const target = `finilomobile://oauth${qs ? `?${qs}` : ""}`;
    window.location.replace(target);
  }, [searchParams]);

  return null;
}

export default function OAuthCallback() {
  return (
    <Suspense>
      <OAuthRedirect />
    </Suspense>
  );
}
